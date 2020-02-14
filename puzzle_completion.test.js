const Puzzle = require ('./puzzle_completion');

test('Check guess feedback', () => {
    let puzzle = new Puzzle([1, 2, 3, 2], [2, 2, 2, 2]);
    let spy = jest.spyOn(puzzle, 'checkGuess').mockImplementation(() => [1, 2]);

    expect(puzzle.checkGuess()).toEqual([1, 2]);
    spy.mockRestore();
});

test('Check guess puzzle_completion', () => {
    let puzzle = new Puzzle([1, 2, 3, 2], [1, 2, 3, 2]);
    let spy = jest.spyOn(puzzle, 'checkGuess').mockImplementation(() => [4, 0]);

    expect(puzzle.checkGuess()).toEqual([4, 0]);
    spy.mockRestore();
});