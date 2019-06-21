<img src="https://i.imgur.com/qfRCvLW.png">

# Mastermind Timer Lab

---

## Intro

In the lesson earlier you:

1. Learned how to override lifecycle methods such as `componentDidMount` and `componentWillUnmount`.
 
2. Added a cool game timer to react-mastermind that ticks away, and away, and away...

In this lab, you'll continue to building out Mastermind by getting that timer to stop when the game is won and reset when a new game starts.

**This lab is not a deliverable**

## Set Up

The starter code for this lab is the same as the completed code from the _React Component Lifecycle Methods_ lesson.

To get set up for this lesson:

- `cd` into the `starter-code/react-mastermind` folder for this lab.
- Open the project in VS Code: `$ code .`
- Open a terminal in VS Code (`ctrl + backtick`)
- Install the Node modules: `$ npm i`
- Start the React Dev Server: `$ npm start`

Browsing to `localhost:3000` should display the following with the timer ticking away:

<img src="https://i.imgur.com/m8iy37p.png">

## Exercises

1. Make the timer stop ticking when the player has cracked the code.

2. Reset the timer when a new game starts - maybe the easiest exercise of all time since it already does this. Just ensure that you know why it works 😊

Be sure to test that timer stops when the game has been won!

<img src="https://i.imgur.com/SsBDyB8.png">

## Hints

- React encourages us to drive our app's functionality using "state" - not by directly calling functions. Maybe something like `isTiming`?

- `<App>` is the component that knows when the timer should be ticking or not.

- In `<GameTimer>`, don't try to clear `setInterval` to stop the timer, instead, just put some logic in the `handleTick` method to ignore ticks according to the state being passed to it via props.

- There's a great place in **App.js** to update the `isTiming` state by adding a single line of code!

