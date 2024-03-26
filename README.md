# Kitten Game Server

This repository contains the backend server for the Kitten Game application. It provides APIs for user authentication, game state management, leaderboard functionality, and more.

## Getting Started

To get started with the development environment, follow these steps:

1. Clone the repository to your local machine: git clone <respository_link>

2. Install dependencies:npm install

3. Set up environment variables:
- Create a `.env` file in the root directory.
- Add environment variables like `MONGO_URI`, `PORT` to this file.

4. Start the development server: npm run dev


## Folder Structure

The project structure is organized as follows:

- **config:** Contains configuration files, such as database connection setup.
- **controllers:** Includes controller functions for handling requests and responses.
- **middleware:** Contains custom middleware functions, such as route protection.
- **models:** Defines Mongoose schemas for MongoDB collections.
- **routes:** Defines API routes and their corresponding controller functions.
- **server.js:** Entry point of the application.

## API Endpoints

### Users

- `POST /api/v1/register`
- Registers a new user.
- `POST /api/v1/login`
- Logs in an existing user.

### Game

- `GET /api/v1/draw-card`
- Draws a card for the user.
- `POST /api/v1/updatescore`
- Updates the user's score and match statistics.
- `POST /api/v1/fetchstate`
- Fetches the game state for a user.
- `POST /api/v1/updatestate`
- Updates or creates the game state for a user.

### Leaderboard

- `POST /api/v1/leaderboard`
- Retrieves leaderboard data and the user's position.

These endpoints handle various functionalities such as user registration and login, managing game state, updating scores, and fetching leaderboard data.

## Available Scripts

- **start:** Starts the production server.
- **dev:** Starts the development server with nodemon for hot reloading.
- **test:** Runs test suites (if any).

## Dependencies


- **body-parser:** Middleware for parsing request bodies.
- **cors:** Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv:** Library for loading environment variables from a `.env` file.
- **express:** Web framework for Node.js.
- **mongoose:** ODM library for MongoDB.
- **nodemon:** Utility for auto-restarting the server during development.

## Contributing

Contributions to the project are welcome. Feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the [ISC License](LICENSE).

## Author

Suman Thakur
