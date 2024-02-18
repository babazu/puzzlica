import { puzzles } from './puzzles.js';

let mouseX = 0;
let mouseY = 0;

document.addEventListener("DOMContentLoaded", init);

function init(){
    // PALIM PUZZLE
    puzzleManager.startPuzzleGame("15_BorelliM", puzzleManager.PuzzleType.Swap) 
}


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
    
    startPuzzleGame: function(puzzleId, puzzleType) {
        console.log("starting puzzle:", puzzleId);

        var puzzle = puzzles[puzzleId];
        puzzleManager.puzzlePieces = [];
        puzzleManager.puzzleId = puzzle.key;
        puzzleManager.puzzleType = puzzleType;
        puzzleManager.puzzlePiecesCount = puzzle.columns * puzzle.rows;
        puzzleManager.puzzleSizeRows = puzzle.rows;
        puzzleManager.puzzleSizeColumns = puzzle.columns;

       var container = document.getElementById('puzzle-container');

        // Set the grid-template-columns and grid-template-rows CSS properties
        container.style.gridTemplateColumns = `repeat(${puzzle.columns}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${puzzle.rows}, 1fr)`;

        // create pieces
        puzzleManager.shufflePuzzle();
    },
    rotateListener: function(e) {
        e.preventDefault(); // Prevent the default context menu behavior
        puzzleManager.onRotatePiece(this);
    },
    swapListener: function(e) {
        puzzleManager.onSwapPiece(this);
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
    onSwapPiece: function(piece) {
        if (piece.classList.contains('selected')) {
          piece.classList.remove('selected');
        } else {
            var selectedPieces = document.querySelectorAll('.selected');

            // Check if two pieces are already selected
            if (selectedPieces.length === 1) {
                // Swap the positions of the selected piece and the current piece
                var firstPiece = selectedPieces[0];

                // Add swapping class to trigger the animation
                firstPiece.classList.add('puzzle-swapping');
                piece.classList.add('puzzle-swapping');

                // Swap the positions of the selected piece and the current piece
                setTimeout(function () {
                    var tempBackground = firstPiece.style.backgroundPosition;
                    firstPiece.style.backgroundPosition = piece.style.backgroundPosition;
                    piece.style.backgroundPosition = tempBackground;

                    // Deselect the pieces and remove the swapping class
                    firstPiece.classList.remove('selected', 'puzzle-swapping');
                    piece.classList.remove('selected', 'puzzle-swapping');

                    // Check win
                    if (puzzleManager.isPuzzleInWinningState()) {
                        puzzleManager.puzzleWin();
                    }
                }, 100); // Wait for the animation duration before actually swapping the images
            } else {
              piece.classList.add('selected');
            }
        }
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
        for (var i = 0; i < puzzleManager.puzzlePieces.length; i++) {  
            // check order
            //debugger;
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Swap){
                var x = (i) % puzzleManager.puzzleSizeColumns;    
                var y = Math.floor((i) / puzzleManager.puzzleSizeColumns);  
                
                var currentPosition = puzzleManager.puzzlePieces[i].style.backgroundPosition;  
                currentPosition = currentPosition.split(' ');  
                currentPosition = currentPosition.map(value => parseFloat(value).toFixed(3) + 'px');  
                currentPosition = currentPosition.join(' '); 
                
                var expectedPosition = '-' + (x * puzzleManager.puzzlePieceWidth + 1).toFixed(3) + 'px -' + (y * puzzleManager.puzzlePieceHeight + 1).toFixed(3) + 'px';    
                expectedPosition = expectedPosition.replace(/-0.000px/g, '0.000px');  
      
                if (currentPosition !== expectedPosition) {    
                    return false;    
                } 
             }

            // check rotation
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate){
                if (parseInt(puzzleManager.puzzlePieces[i].dataset.rotation) % 360 !== 0) {
                    return false;
                }
            }
        }  
        return true;  
    },  
    shufflePuzzle: function(){
        //remove listeners
        for (var j = 0; j < puzzleManager.puzzlePieces.length; j++) {
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate) {
                puzzleManager.puzzlePieces[j].removeEventListener('click', puzzleManager.rotateListener);
            } else if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Swap) {
                puzzleManager.puzzlePieces[j].removeEventListener('click', puzzleManager.swapListener);
            }
        }

        //remove images from container
        var container = document.getElementById('puzzle-container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        puzzleManager.puzzlePieces.length = 0;

        // get image based on current date
        const currentDate = new Date();  
        const currentUTCDate = currentDate.toISOString().split('T')[0];  
        const filename = currentUTCDate + '.jpg';   
        console.log('image',filename);

        // Create the puzzle pieces and add them to the container
        for (var i = 1; i <= puzzleManager.puzzlePiecesCount; i++) {
            var puzzlePiece = document.createElement('div');
            puzzlePiece.className = 'puzzle-piece';
            puzzlePiece.draggable = true;
            puzzlePiece.addEventListener('dragstart', puzzleManager.dragStart);  
            puzzlePiece.addEventListener('dragover', puzzleManager.dragOver);  
            puzzlePiece.addEventListener('drop', puzzleManager.drop);  

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

        //console.log('puzzleManager.puzzlePieceWidth .puzzlePieceHeight',puzzleManager.puzzlePieceWidth,puzzleManager.puzzlePieceHeight);
         
        // Create images for pieces by offsetting the background image
        for (var i = 0; i < puzzleManager.puzzlePieces.length; i++) {  
            // Calculate the position of the current piece in the image  
            var x = (i) % puzzleManager.puzzleSizeColumns;  
            var y = Math.floor((i) / puzzleManager.puzzleSizeColumns);  
            puzzleManager.puzzlePieces[i].style.backgroundPosition = '-' + (x * puzzleManager.puzzlePieceWidth + 1) + 'px -' + (y * puzzleManager.puzzlePieceHeight + 1) + 'px';  
        
            console.log(i,x,y, puzzleManager.puzzlePieces[i].style.backgroundPosition);
        }  

        // Shuffle
        if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Swap){
            puzzleManager.shufflePuzzlePieces();
        }
        
        // Add click event listeners to the puzzle pieces
        for (var j = 0; j < puzzleManager.puzzlePieces.length; j++) {
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate){
              puzzleManager.puzzlePieces[j].addEventListener('click', puzzleManager.rotateListener);
            }
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Swap ){
              puzzleManager.puzzlePieces[j].addEventListener('click', puzzleManager.swapListener);
            }
        }
    },
    closePuzzle: function(){
        //remove listeners
        for (var j = 0; j < puzzleManager.puzzlePieces.length; j++) {
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate) {
                puzzleManager.puzzlePieces[j].removeEventListener('click', puzzleManager.rotateListener);
            } else if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Swap) {
                puzzleManager.puzzlePieces[j].removeEventListener('click', puzzleManager.swapListener);
            }
        }

        //remove images from container
        var container = document.getElementById('puzzle-container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    },
    puzzleWin: function(){
        console.log("puzzle win");

        //remove listeners
        for (var j = 0; j < puzzleManager.puzzlePieces.length; j++) {
            if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Rotate) {
                puzzleManager.puzzlePieces[j].removeEventListener('click', puzzleManager.rotateListener);
            } else if (puzzleManager.puzzleType == puzzleManager.PuzzleType.Swap) {
                puzzleManager.puzzlePieces[j].removeEventListener('click', puzzleManager.swapListener);
            }
        }

        setTimeout(function() {
            animationManager.animateBigHeart();

            setTimeout(function() {
                //remove images from container
                var container = document.getElementById('puzzle-container');
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
                puzzleManager.puzzlePieces.length = 0;
                puzzleManager.closePuzzle();
            }, 500); // dok traje takeover animacija prebaci screen
        }, 500); // paljenje takeover animacije
    },
    updatePuzzlePieceSizes: function() {
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
    dragStart: function(e) {  
        e.dataTransfer.setData('text/plain', e.target.style.backgroundPosition);  
        e.dataTransfer.effectAllowed = 'move';  
    },  
    dragOver: function(e) {  
        e.preventDefault();  
        e.dataTransfer.dropEffect = 'move';  
    },  
    drop: function(e) {  
        e.preventDefault();  
        var data = e.dataTransfer.getData('text');  
        var from = document.querySelector(`[style*='${data}']`);  
        from.style.backgroundPosition = e.target.style.backgroundPosition;  
        e.target.style.backgroundPosition = data;  
        
        // Check win
        if (puzzleManager.isPuzzleInWinningState()) {
            puzzleManager.puzzleWin();
        }
    },
}


