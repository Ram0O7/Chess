const chessPieces = {
    white: {
        king: '\u2654',
        queen: '\u2655',
        rook: '\u2656',
        bishop: '\u2657',
        knight: '\u2658',
        pawn: '\u2659'
    },
    black: {
        king: '\u265A',
        queen: '\u265B',
        rook: '\u265C',
        bishop: '\u265D',
        knight: '\u265E',
        pawn: '\u265F'
    }
};

const chessThemes = {
    light: [
        "#b0c4de",
        "#d3d3d3",
        "#f5deb3",
        "#90ee90",
        "#e6e6fa",
    ],
    dark: [
        "#191970",
        "#444444",
        "#8b4513",
        "#006400",
        "#4b0082",
    ]
}

export {chessPieces, chessThemes}