function solveSudoku(puzzle) {
    function copyPuzzle(puzzle) {
        const copiedPuzzle = [];
        for (let i = 0; i < puzzle.length; i++) {
            copiedPuzzle.push([])
            copiedPuzzle[i].push(...puzzle[i]);
        }
        return copiedPuzzle;
    }

    function getSquareCord(row, column) {
        return [Math.floor(row / 3), Math.floor(column / 3)]
    }

    function isValid(puzzle) {
        const seenSquares = new Array(3);
        for (let i = 0; i < 3; i++) {
            seenSquares[i] = [];
            for (let j = 0; j < 3; j++) {
                seenSquares[i].push(new Set());
            }
        }

        const seenCols = [];
        for (let i = 0; i < puzzle.length; i++) {
            seenCols.push(new Set());
        }
        for (let row = 0; row < puzzle.length; row++) {
            const seen = new Set();
            for (let col = 0; col < puzzle[0].length; col++) {
                const [sRow, sCol] = getSquareCord(row, col);
                const digit = puzzle[row][col];
                if (digit == -1) {
                    continue;
                }
                if (seen.has(digit) || seenCols[col].has(digit)) {
                    return false;
                }
                if (seenSquares[sRow][sCol].has(digit)) {
                    return false;
                }
                seen.add(digit);
                seenCols[col].add(digit);
                seenSquares[sRow][sCol].add(digit);
            }
        }
        return true;
    }

    function allowedDigits(puzzle, row, column) {
        if (puzzle[row][column] != -1) {
            return [];
        }
        const digits = [];
        for (let digit = 1; digit <= 9; digit++) {
            const newPuzzle = copyPuzzle(puzzle);
            newPuzzle[row][column] = digit;
            if (isValid(newPuzzle)) {
                digits.push(digit);
            }
        }
        return digits;
    }

    function fillObvious(puzzle, free) {
        let counter = 0;
        for (let row = 0; row < free.length; row++) {
            for (let col = 0; col < free[0].length; col++) {
                if (free[row][col].length == 1) {
                    puzzle[row][col] = free[row][col][0];
                    counter++;
                }
            }
        }
        return counter;
    }

    function getFreeDigits(puzzle) {
        const freeDigits = [];
        for (let row = 0; row < puzzle.length; row++) {
            freeDigits.push([])
            for (let col = 0; col < puzzle[0].length; col++) {
                freeDigits[row].push(allowedDigits(puzzle, row, col))
            }
        }
        return freeDigits
    }

    function isSolved(puzzle) {
        const reference = '123456789';
        for (let row = 0; row < puzzle.length; row++) {
            const rowContents = [...puzzle[row]]
            if (rowContents.sort().join('') != reference) {
                return false;
            }
        }
        return true;
    }

    function getFirstEmpty(puzzle) {
        for (let row = 0; row < puzzle.length; row++) {
            for (let col = 0; col < puzzle[0].length; col++) {
                if (puzzle[row][col] == -1) {
                    return [row, col]
                }
            }
        }
    }

    function backtrack(puzzle) {
        if (!isValid(puzzle)) {
            return;
        } else if (isSolved(puzzle)) {
            backtracked = puzzle; 
            console.log('finished', puzzle);
            return;
        }

        const [nextRow, nextCol] = getFirstEmpty(puzzle);
        const options = allowedDigits(puzzle, nextRow, nextCol);
        for (let i = 0; i < options.length; i++) {
            const nextPuzzle = copyPuzzle(puzzle);
            nextPuzzle[nextRow][nextCol] = options[i];
            console.log('digit:', options[i], 'row:', nextRow, 'col:', nextCol, nextPuzzle);
            backtrack(nextPuzzle);
            
        }
        return;

    }

    let freeDigits = getFreeDigits(puzzle);

    while (fillObvious(puzzle, freeDigits) > 0) {
        freeDigits = getFreeDigits(puzzle)
    }

    if (isSolved(puzzle)) {
        return puzzle;
    }

    let backtracked = [];
    backtrack(puzzle, freeDigits);
    return backtracked;
    
}
