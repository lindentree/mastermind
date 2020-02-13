const Puzzle = require ('./puzzle_completion');

test('Check guess feedback', () => {
    let puzzle = new Puzzle([1, 2, 3, 2], [2, 2, 2, 2]);
    let spy = jest.spyOn(puzzle, 'checkGuess').mockImplementation(() => [1, 2]);

    expect(puzzle.checkGuess()).toEqual([1, 2]);
   

    // unnecessary in this case, putting it here just to illustrate how to "unmock" a method
    spy.mockRestore();
});