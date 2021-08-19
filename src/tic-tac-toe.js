class TicTacToe {
    playerSymbols = ['x', 'o'];

    constructor() {
        this.field3x3 = Array(3)
          .fill()
          .map(() => Array(3).fill(null));

        this.currentSymbol = this.playerSymbols[0];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field3x3[rowIndex][columnIndex] === null) {
            this.field3x3[rowIndex][columnIndex] = this.currentSymbol;
            this.currentSymbol = this.playerSymbols.reverse()[0];
        }
    }

    isFinished() {
        return !!this.getWinner() || this.isDraw();
    }

    getWinner() {
        const fieldLength = this.field3x3.length;

        for (let i = 0; i < fieldLength; i++) {
            const isHorizontalLineHasTheSameSymbols = (
                (this.field3x3[i][0] === this.field3x3[i][1]) &&
                (this.field3x3[i][1] === this.field3x3[i][2])
            );

            if (isHorizontalLineHasTheSameSymbols) {
                return this.field3x3[i][0];
            }
        }

        for (let i = 0; i < fieldLength; i++) {
            const isVerticalLineHasTheSameSymbols = (
                (this.field3x3[0][i] === this.field3x3[1][i]) &&
                (this.field3x3[1][i] === this.field3x3[2][i])
            );

            if (isVerticalLineHasTheSameSymbols) {
                return this.field3x3[0][i];
            }
        }

        const isFirstDiagonalHasTheSameSymbols = (
            (this.field3x3[0][0] === this.field3x3[1][1]) &&
            (this.field3x3[1][1] === this.field3x3[2][2])
        );

        if (isFirstDiagonalHasTheSameSymbols) {
            return this.field3x3[0][0];
        }

        const isSecondDiagonalHasTheSameSymbols = (
            (this.field3x3[0][2] === this.field3x3[1][1]) &&
            (this.field3x3[1][1] === this.field3x3[2][0])
        );

        if (isSecondDiagonalHasTheSameSymbols) {
            return this.field3x3[0][2];
        }

        return null;
    }

    noMoreTurns() {
        return this.field3x3.every((item) => {
            return item.indexOf(null) === -1;
        });
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field3x3[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
