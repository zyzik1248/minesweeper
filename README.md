# Minesweeper

is a single player puzzle game. The object of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, using the guidance on the number of adjacent mines in each field. The game dates from the 1960s

In Minesweeper, mines are scattered throughout a board which is divided into cells. Cells have three states: uncovered, covered and flagged. A covered cell is blank and clickable, while an uncovered cell is exposed. Flagged cells are those marked by the player to indicate a potential mine location.

A player left-clicks a cell to uncover it. If a player uncovers a mined cell, the game ends. Otherwise, the uncovered cells displays either a number, indicating the quantity of mines adjacent to it, or a blank tile (or "0"), and all adjacent non-mined cells will automatically be uncovered. Right-clicking on a cell will flag it, causing a flag to appear on it. Flagged cells are still covered, and a player can first unflagged with an additional right-click 

To win the game, players must uncover all non-mine cells, at which point the timer is stopped.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `json-server --watch db.json --port 3002`

Runs the server storing the database

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.