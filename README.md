This is an implementation of the code game Mastermind with a command-line interface, built in Node.js.

# Setup

This project requires Node.js to run. (https://nodejs.org/en/download/).

Steps to run:

1. `git clone` this repo
2. `cd` into the directory 
3. `npm install` 
4. `npm run start` or `node index.js`

# About

I built this project for the command line to focus more on implementing the logic of the game, and make it so other developers could try it out locally more easily, without having to install too many libraries/frameworks. (Note: the random number generator is an API, so you need an Internet connection)

The code structure was built in a TDD(Test-Driven Development) paradigm to the best of my ability, although I was unable to write tests for some of the more complex logic. I also did my best to make it more modular and support extensions or additional features later on.

Currently when you run the game, a Mastermind logo is drawn in the terminal via the terminal-kit package, the premise is explained, and you are prompted to try to guess the randomly generated code. If you enter digits outside of the set range, you will have to erase them and enter valid ones before you continue. All of your previous guesses and feedback on how close they were are shown every turn, as well as the number of guesses you have left. You should not repeat incorrect guesses, but the program will not stop you; instead, it will show that you made a null guess. 

If you solve it or run out of guesses, the program will end and you will have to restart to try again with a new code. You can also forcibly exit the game with Ctrl+C(on Mac).

# Further Development

1. Add a retry prompt - [ ]
2. Add the ability to change the difficulty level - [ ]
3. Add more graphics - [ ]

