import { puzzles } from './puzzles.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

let mouseX = 0;
let mouseY = 0;

document.addEventListener("DOMContentLoaded", init);

function init(){

    engineManager.initListeners();

    let date = dbManager.getToday().toString().slice(0,10);
    
    // DEBUG - fake that today is 2024-03-08
    date = "2024-03-08";

    // PALIM PUZZLE
    let puzzle = dbManager.loadPuzzle(date);
    puzzleManager.startPuzzleGame(date, puzzle.id, puzzle.image, 4, puzzleManager.PuzzleType.Swap) 
}

// responsible for communication between ui and engine
var engineManager = {
    stateLevel: 2,
    initListeners: function(){
        
        // calendar
        document.getElementById("buttonCalendar").addEventListener("click", function() {document.getElementById("popupCalendar").style.display = "block";});
        document.getElementById("popupCalendarX").addEventListener("click", function() {document.getElementById("popupCalendar").style.display = "none";});
        document.getElementById("buttonPrevious").addEventListener("click", function() {engineManager.setPrevousDay();});
        document.getElementById("buttonNext").addEventListener("click", function() {engineManager.setNextDay();});

        // settings
        document.getElementById("buttonSettings").addEventListener("click", function() {document.getElementById("popupSettings").style.display = "block";});
        document.getElementById("popupSettingsX").addEventListener("click", function() {document.getElementById("popupSettings").style.display = "none";});
        document.getElementById("lvl1").addEventListener("click", function() {engineManager.setLevel(1);});
        document.getElementById("lvl2").addEventListener("click", function() {engineManager.setLevel(2);});
        document.getElementById("lvl3").addEventListener("click", function() {engineManager.setLevel(3);});
        document.getElementById("lvl4").addEventListener("click", function() {engineManager.setLevel(4);});
        document.getElementById("lvl5").addEventListener("click", function() {engineManager.setLevel(5);});
        document.getElementById("lvl6").addEventListener("click", function() {engineManager.setLevel(6);});
        document.getElementById("lvl7").addEventListener("click", function() {engineManager.setLevel(7);});
        document.getElementById("lvl8").addEventListener("click", function() {engineManager.setLevel(8);});
        //default lvl
        document.getElementById('lvl4').checked = true; 

    },
    setLevel: function (level) {  
        engineManager.stateLevel = level;
        console.log('level: ' + level);  
        puzzleManager.startPuzzleGame(puzzleManager.puzzleDate, puzzleManager.puzzleId, puzzleManager.puzzleImage, level, puzzleManager.puzzleType) 
    },
    setPrevousDay: function(){
        var d = new Date(puzzleManager.puzzleDate);  
        d.setDate(d.getDate() - 1);  
        var newDate = d.toISOString().slice(0,10);
        // load
        let puzzle = dbManager.loadPuzzle(newDate);
        puzzleManager.startPuzzleGame(newDate, puzzle.id, puzzle.image, puzzleManager.puzzleSizeColumns, puzzleManager.PuzzleType.Swap) 
    },
    setNextDay: function(){
        var d = new Date(puzzleManager.puzzleDate);  
        d.setDate(d.getDate() + 1);  
        var newDate = d.toISOString().slice(0,10);
        // load
        let puzzle = dbManager.loadPuzzle(newDate);
        puzzleManager.startPuzzleGame(newDate, puzzle.id, puzzle.image, puzzleManager.puzzleSizeColumns, puzzleManager.PuzzleType.Swap) 
    }   
};

var animationManager = {
    animateWin: function(){
        var canvas = document.getElementById("canvas");
        const winAnimation = document.createElement("img");
        winAnimation.src = "graphic/heart-green.png";
        winAnimation.style.position = "absolute";
        winAnimation.style.opacity = 0;
        winAnimation.style.display = 'block';
        winAnimation.style.transform = 'translate(-50%, -80%)';
        winAnimation.style.animation = 'fadeEffect 2s ease-in-out';
        winAnimation.style.width = "15vw";
        winAnimation.style.top = (mouseY - winAnimation.offsetHeight / 2) + 'px';
        winAnimation.style.left = (mouseX - winAnimation.offsetWidth / 2) + 'px';
        winAnimation.style.zIndex = '10010';
        canvas.appendChild(winAnimation);
        setTimeout(function() {
            winAnimation.style.display = 'none';
        }, 2000);
    },
    animateLose: function(){
        var canvas = document.getElementById("canvas");
        const winAnimation = document.createElement("img");
        winAnimation.src = "graphic/thumb-down.png";
        winAnimation.style.position = "absolute";
        winAnimation.style.opacity = 0;
        winAnimation.style.display = 'block';
        winAnimation.style.transform = 'translate(-50%, -80%)';
        winAnimation.style.animation = 'fadeEffect 1s ease-in-out';
        winAnimation.style.width = "10vw";
        winAnimation.style.top = (mouseY - winAnimation.offsetHeight / 2) + 'px';
        winAnimation.style.left = (mouseX - winAnimation.offsetWidth / 2) + 'px';
        winAnimation.style.zIndex = '10010';
        canvas.appendChild(winAnimation);
        setTimeout(function() {
            winAnimation.style.display = 'none';
        }, 1000);
    },
    animateBigHeart: function() {
        const container = document.querySelector(".large-heart-animation");
        const animatedImage = document.getElementById("large-heart-image");
        container.style.display = "flex";
        animatedImage.style.opacity = 1;
        let imageSize = 100;
        const targetSize = Math.max(window.innerWidth, window.innerHeight) * 2.5;
        const step = (targetSize - imageSize) / 200; // number of steps are speed
        let intervalId = setInterval(() => {
          imageSize += step;
          animatedImage.style.width = imageSize + "px";
          animatedImage.style.height = imageSize + "px";
          container.style.width = imageSize + "px";
          container.style.height = imageSize + "px";
          if (imageSize >= targetSize) {
            clearInterval(intervalId);
            //fade out
            animatedImage.style.transition = "opacity 0.5s ease-in-out";
            animatedImage.style.opacity = 0;
            setTimeout(() => {
                container.style.display = "none";
            }, 500);
          }
        }, 5);
    }
};

var puzzleManager = {
    PuzzleType: {
        Swap: 0,
        Rotate: 1,
    },
    puzzlePieces: [],
    puzzlePiecesCount: 0,
    puzzleSizeColumns: 0,
    puzzleSizeRows: 0,
    puzzleId: 0,
    puzzleType: null, //puzzleType: swap, rotate
    puzzlePieceWidth: 0,
    puzzlePieceHeight: 0,
    dragSrcEl: null,
    counter: 0,
    puzzleImage: null,
    puzzleDate: null,
    
    startPuzzleGame: function(puzzleDate, puzzleId, puzzleImage, level, puzzleType) {
        console.log("starting puzzle:", puzzleId);
        puzzleManager.counter = 0;
        document.getElementById("counter").innerHTML = puzzleManager.counter;

        puzzleManager.puzzlePieces = [];
        puzzleManager.puzzleId = puzzleId;
        puzzleManager.puzzleType = puzzleType;
        puzzleManager.puzzleSizeRows = 2 * level;
        puzzleManager.puzzleSizeColumns = level;
        puzzleManager.puzzlePiecesCount = puzzleManager.puzzleSizeRows * puzzleManager.puzzleSizeColumns;
        puzzleManager.puzzleImage = puzzleImage;
        puzzleManager.puzzleDate = puzzleDate;

       var container = document.getElementById('puzzle-container');

        // Set the grid-template-columns and grid-template-rows CSS properties
        container.style.gridTemplateColumns = `repeat(${puzzleManager.puzzleSizeColumns}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${puzzleManager.puzzleSizeRows}, 1fr)`;

        // create pieces
        puzzleManager.startPuzzle(puzzleImage);
    },
    rotateListener: function(e) {
        e.preventDefault(); // Prevent the default context menu behavior
        puzzleManager.onRotatePiece(this);
    },
    shufflePuzzlePieces: function() {
        for (var i = puzzleManager.puzzlePieces.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = puzzleManager.puzzlePieces[i];
          puzzleManager.puzzlePieces[i] = puzzleManager.puzzlePieces[j];
          puzzleManager.puzzlePieces[j] = temp;
        }
  
        // Update the DOM to reflect the new puzzle piece order
        var container = document.getElementById('puzzle-container');
        puzzleManager.puzzlePieces.forEach(function (piece) {
          container.appendChild(piece);
        });
    },
    onRotatePiece: function(piece) {
        var currentRotation = parseInt(piece.dataset.rotation);
        var newRotation = currentRotation + 90;
  
        // Apply the new rotation using CSS transform property
        piece.style.transform = 'rotate(' + newRotation + 'deg)';
        piece.dataset.rotation = newRotation;
  
        // Check win
        if (puzzleManager.isPuzzleInWinningState()) {
            puzzleManager.puzzleWin();
        }
    },
    getRelativePath: function(url) {
        var a = document.createElement('a');
        a.href = url;
        return a.pathname + a.search + a.hash;
    },
    isPuzzleInWinningState: function() {  
        var puzzlePieces = document.querySelectorAll('.puzzle-piece');  

        for (var i = 0; i < puzzlePieces.length; i++) {  
            // Generate the expected ID for this position  
            var expectedId = 'puzzle-piece-' + (i + 1);  
      
            // Check if the puzzle piece at this position has the expected ID  
            if (puzzlePieces[i].id !== expectedId) {  
                // If not, the puzzle is not in the winning state  
                return false;  
            }  

            // check rotation
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate){
                if (parseInt(puzzleManager.puzzlePieces[i].dataset.rotation) % 360 !== 0) {
                    return false;
                }
            }
        }  
      
        // If all puzzle pieces are in the correct position, the puzzle is in the winning state  
        return true; 
    },  
    startPuzzle: function(filename){
        console.log('startPuzzle',filename);

        //remove listeners
        for (var j = 0; j < puzzleManager.puzzlePieces.length; j++) {
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate) {
                puzzleManager.puzzlePieces[j].removeEventListener('click', puzzleManager.rotateListener);
            }
        }

        //remove images from container
        var container = document.getElementById('puzzle-container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        puzzleManager.puzzlePieces.length = 0;

        // Create the puzzle pieces and add them to the container
        for (var i = 1; i <= puzzleManager.puzzlePiecesCount; i++) {
            var puzzlePiece = document.createElement('div');
            puzzlePiece.className = 'puzzle-piece';
            if (i <= puzzleManager.puzzleSizeColumns){
                puzzlePiece.className += ' border-top';
            }
            if (i >= puzzleManager.puzzlePiecesCount - puzzleManager.puzzleSizeColumns + 1){
                puzzlePiece.className += ' border-bottom';
            }
            if ((i + 1) % puzzleManager.puzzleSizeColumns == 1 || puzzleManager.puzzlePiecesCount ==2){
                puzzlePiece.className += ' border-right';
            }
            if (i % puzzleManager.puzzleSizeColumns == 1 || puzzleManager.puzzlePiecesCount == 2){
                puzzlePiece.className += ' border-left';
            }
            
            puzzlePiece.id = 'puzzle-piece-' + i;  
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Swap){
                puzzlePiece.draggable = true;
            }

            // Set image
            puzzlePiece.style.backgroundImage = `url(puzzles/${filename})`;

            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate){
              // Rotate the puzzle pieces
              var randomRotation = Math.floor(Math.random() * 4) * 90;
              puzzlePiece.dataset.rotation = randomRotation;
            }
            
            container.appendChild(puzzlePiece);
            puzzleManager.puzzlePieces.push(puzzlePiece);
    
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate){
              puzzlePiece.style.transform = 'rotate(' + randomRotation + 'deg)';
            }
        }

        // Resize
        puzzleManager.updatePuzzlePieceSizes();

        // Get size of puzzle pieces
        puzzleManager.puzzlePieceWidth = container.offsetWidth/puzzleManager.puzzleSizeColumns;  
        puzzleManager.puzzlePieceHeight = puzzleManager.puzzlePieceWidth; 

        // Create images for pieces by offsetting the background image
        for (var i = 0; i < puzzleManager.puzzlePieces.length; i++) {  
            // Calculate the position of the current piece in the image  
            var x = (i) % puzzleManager.puzzleSizeColumns;  
            var y = Math.floor((i) / puzzleManager.puzzleSizeColumns);  
            var border_x = 0;
            var border_y = 0;
            // pomaknem 10 px ispod bordera
            if ((i + 1) <= puzzleManager.puzzleSizeColumns){
                border_y = 10;
            }
            if ((i + 1) % puzzleManager.puzzleSizeColumns == 1){
                border_x = 10;
            }
            puzzleManager.puzzlePieces[i].style.backgroundPosition = '-' + (x * puzzleManager.puzzlePieceWidth + border_x + 1) + 'px -' + (y * puzzleManager.puzzlePieceHeight + border_y + 1) + 'px';  
        }  

        // Shuffle
        if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Swap){
            puzzleManager.shufflePuzzlePieces();

            // ponovi ako je u win stanju, da user ima što rješavati.
            while (puzzleManager.isPuzzleInWinningState()) {  
                puzzleManager.shufflePuzzlePieces();  
            }  
        }

        // Add click event listeners to the puzzle pieces (for rotation it's click, for swap it's drag-drop)
        if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate){
            for (var j = 0; j < puzzleManager.puzzlePieces.length; j++) {
                puzzleManager.puzzlePieces[j].addEventListener('click', puzzleManager.rotateListener);
            }
        }
        if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Swap){
             [].forEach.call(puzzleManager.puzzlePieces, function (piece) {
                piece.addEventListener('dragstart', puzzleManager.dragStart, false);
                piece.addEventListener('dragenter', puzzleManager.dragEnter, false)
                piece.addEventListener('dragover', puzzleManager.dragOver, false);
                piece.addEventListener('dragleave', puzzleManager.dragLeave, false);
                piece.addEventListener('drop', puzzleManager.dragDrop, false);
                piece.addEventListener('dragend', puzzleManager.dragEnd, false);
                
                //odmah provjeri lockane i jel možda već pobjeda
                puzzleManager.checkShouldLockPiece(piece);
            });
        }
    },
    dragStart: function(e) {
        if (e.target.className.indexOf('puzzle-piece') > -1) {
            puzzleManager.dragSrcEl = e.target;
            puzzleManager.dragSrcEl.style.opacity = '0.75';
            puzzleManager.dragSrcEl.style.filter = 'blur(5px)';  
        }
    },
    dragOver: function(e) {
        if (puzzleManager.dragSrcEl) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }
    },
    dragEnter: function(e) {
        if (puzzleManager.dragSrcEl && e.target.draggable == true) {
            e.target.classList.add('over');
        }
    },
    dragLeave: function(e) {
        if (puzzleManager.dragSrcEl) {
            e.target.classList.remove('over');
        }
    },
    dragEnd: function(e) {
        puzzleManager.dragSrcEl = null;
        [].forEach.call(puzzleManager.puzzlePieces, function (col) {
            col.style.opacity = '';
            col.style.filter = '';
            col.classList.remove('over');
        });
    },
    dragDrop: function(e) {
        if (puzzleManager.dragSrcEl) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            if (puzzleManager.dragSrcEl != this && this.draggable == true) {
                puzzleManager.swapPieces(puzzleManager.dragSrcEl, this);
                // count
                puzzleManager.counter++;
                document.getElementById("counter").innerHTML = puzzleManager.counter;
                
                // Lockanje točno pozicioniranog piecea
                puzzleManager.checkShouldLockPiece(puzzleManager.dragSrcEl);
                puzzleManager.checkShouldLockPiece(this);

                // Check win
                if (puzzleManager.isPuzzleInWinningState()) {
                    puzzleManager.puzzleWin();
                }
            }
        }
    },
    checkShouldLockPiece: function(piece){
        var puzzlePieces = document.querySelectorAll('.puzzle-piece');
        // dohvati poziciju piecea
        var position = -1;  
        for (var i = 0; i < puzzlePieces.length; i++) {  
            if (puzzlePieces[i].id === piece.id) {  
                position = i+1;  
                break;  
            }  
        } 
        // lockaj piece ako pozicija valja
        if (piece.id == 'puzzle-piece-' + position){
            piece.draggable = false;
            piece.className += ' puzzle-piece-locked';
        }
    },
    swapPieces: function(a,b) {
        let aParent = a.parentNode;
        let bParent = b.parentNode;
        let aHolder = document.createElement("div");
        let bHolder = document.createElement("div");
        aParent.replaceChild(aHolder, a);
        bParent.replaceChild(bHolder, b);
        aParent.replaceChild(b, aHolder);
        bParent.replaceChild(a, bHolder);    
    },
    closePuzzle: function(){
        //remove listeners
        for (var j = 0; j < puzzleManager.puzzlePieces.length; j++) {
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate) {
                puzzleManager.puzzlePieces[j].removeEventListener('click', puzzleManager.rotateListener);
            }
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Swap) {
                puzzleManager.puzzlePieces[j].removeEventListener('dragstart', puzzleManager.dragStart);
                puzzleManager.puzzlePieces[j].removeEventListener('dragenter', puzzleManager.dragEnter)
                puzzleManager.puzzlePieces[j].removeEventListener('dragover', puzzleManager.dragOver);
                puzzleManager.puzzlePieces[j].removeEventListener('dragleave', puzzleManager.dragLeave);
                puzzleManager.puzzlePieces[j].removeEventListener('drop', puzzleManager.dragDrop);
                puzzleManager.puzzlePieces[j].removeEventListener('dragend', puzzleManager.dragEnd);
                puzzleManager.puzzlePieces[j].draggable = false;
            }
        }
    },
    puzzleWin: function(){
        console.log("puzzle win");

        //remove listeners
        for (var j = 0; j < puzzleManager.puzzlePieces.length; j++) {
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate) {
                puzzleManager.puzzlePieces[j].removeEventListener('click', puzzleManager.rotateListener);
            }
        }

        setTimeout(function() {
            animationManager.animateBigHeart();
            setTimeout(function() {
                puzzleManager.closePuzzle();
            }, 500); // dok traje takeover animacija prebaci screen
        }, 500); // paljenje takeover animacije
    },
    updatePuzzlePieceSizes: function() {
        // TOFOD RADI LI OVO IŠTA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        var puzzlePieces = document.querySelectorAll('.puzzle-piece img');

        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight - 50 /* header*/ - 20 /* footer */;
        if (innerWidth > 940) innerWidth = 940;
 
        var baseSize = Math.min(innerWidth / puzzleManager.puzzleSizeColumns, innerHeight / puzzleManager.puzzleSizeRows);

        puzzlePieces.forEach(function (piece) {
            piece.style.width = baseSize + 'px';
            piece.style.height = baseSize + 'px';
        });

        var puzzlePieces2 = document.querySelectorAll('.puzzle-piece');
        puzzlePieces2.forEach(function (piece) {
            piece.style.width = baseSize + 'px';
            piece.style.height = baseSize + 'px';
        });

        var container = document.getElementById('puzzle-container');
        container.style.width = baseSize * puzzleManager.puzzleSizeColumns + 'px';

        // Get size of puzzle pieces
        puzzleManager.puzzlePieceWidth = container.offsetWidth/puzzleManager.puzzleSizeColumns;  
        puzzleManager.puzzlePieceHeight = puzzleManager.puzzlePieceWidth; 

        // Fix size of background image
        var imageWidth = puzzleManager.puzzleSizeColumns * puzzleManager.puzzlePieceWidth;  
        var imageHeight = puzzleManager.puzzleSizeRows * puzzleManager.puzzlePieceHeight; 
        for (var i = 0; i < puzzleManager.puzzlePieces.length; i++) {  
            puzzleManager.puzzlePieces[i].style.backgroundSize = imageWidth + 'px ' + imageHeight + 'px';  
        } 
    },
};

var dbManager = {
    
    getToday: function(){
        const currentDate = new Date();  
        const currentUTCDate = currentDate.toISOString().split('T')[0];  
        return currentUTCDate;
    },
    loadPuzzle: function(date){
        var puzzle = puzzles[date];
        return puzzle;
    }
}




