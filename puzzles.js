export { puzzles };

var PuzzleType = {
    Swap: 0,
    Rotate: 1,
}

const puzzles = {
    "1_Guska": { 
        key: "p1",
        type: PuzzleType.Rotate,
        columns: 5,/*5 4*/
        rows: 4,
    },
    "1_Armida": { 
        key: "p2",
        type: PuzzleType.Swap, 
        columns: 5,/*5 4*/
        rows: 4,
    },
    "2_Zoilus": { 
        key: "p3",
        type: PuzzleType.Swap, 
        columns: 6, /*6 6*/
        rows: 6,
    },
    "2_Petrus": { 
        key: "p4",
        type: PuzzleType.Rotate, 
        columns: 5,/*5 5*/
        rows: 5,
    },
    "2_Damianus": { 
        key: "p5",
        type: PuzzleType.Swap, 
        columns: 5,/*5 5*/
        rows: 5,
    },
    "2_Matheaus": { 
        key: "p6",
        type: PuzzleType.Rotate, 
        columns: 6,/*6 6*/
        rows: 6,
    },
    "2_Gregorius": { 
        key: "p7",
        type: PuzzleType.Swap, 
        columns: 5,/*5 5*/
        rows: 5,
    },
    "2_Dnus": { 
        key: "p8",
        type: PuzzleType.Rotate, 
        columns: 6,/*6 6*/
        rows: 6,
    },
    "9_Yuga": { 
        key: "p9",
        type: PuzzleType.Rotate, 
        columns: 10,/*10 6*/
        rows: 6,
    },
    "10_Moses": { 
        key: "p10",
        type: PuzzleType.Swap, 
        columns: 10,/*10 7*/
        rows: 7,
    },
    "11_Dujam": { 
        key: "p11",
        type: PuzzleType.Rotate, 
        columns: 5,/*5 6*/
        rows: 6,
    },
    "12_Lux": { 
        key: "p12",
        type: PuzzleType.Flipper, 
        columns: 4,/*4 5*/
        rows: 5,
    },
    "13_Apoteoza": { 
        key: "p13",
        type: PuzzleType.Rotate, 
        columns: 7,/*7 10*/
        rows: 10,
    },
    "14_BorelliF": { 
        key: "p14",
        type: PuzzleType.Swap, 
        columns: 12,/*9 9*/
        rows: 2,

    },
    "15_BorelliM": { 
        key: "p15",
        type: PuzzleType.Rotate, 
        columns: 3,/*9 9*/
        rows: 6,
    },
    "16_Ifigenia": { 
        key: "p16",
        type: PuzzleType.Swap, 
        columns: 11,/*11 9*/
        rows: 9,
    },
};

