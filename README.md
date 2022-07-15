# Robot 🤖

## Dependencies

First install the dependencies with yarn (or npm).

yarn
```
yarn
```

npm
```
npm install
```

## Running the script

Run `index.js` with Node

```
node index.js
```

## Tests

yarn
```
yarn test
```

npm
```
npm test
```

## Final thoughts

Spent around 2 hours on this project. Some parts can be improved.

There is a bit of repetition with the NORTH, EAST, SOUTH, WEST directions as they're defined in a new array a few times throughout the code, would've been better to have it in the `index.js` file and pass it down.

We could store the direction as a number (NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3) to slightly optimize the turning functions.

Each file in `/commands` should have its own attached unit-testing file to test more edge cases, it would also make the unit tests much cleaner than they currently are.

Using a Docker image to run the script in would be nice to have, I simply haven't used Docker in a few years and need to dive in their doc for a bit before getting back into it.