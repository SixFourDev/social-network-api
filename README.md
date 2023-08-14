# Social Network API

## Description

- The Social Network API is a backend application that allows users to create, manage, and interact with thoughts and friends. Users can create accounts, post thoughts, add friends, and react to thoughts. This API is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contribution)
- [Tests](#tests)

## Installation

- To be able to use this tool, simply clone the repo from https://github.com/SixFourDev/social-network-api, then open it in VS Code. Then open your terminal in VS Code by right clicking “index.js” and click “Open in Integrated Terminal”. The terminal will present itself at the bottom of your VS Code. Then you’re going to want run “npm install” in your terminal to install the packages needed to be able to use the tool.

## Usage

- To use this tool, you will right click “index.js” in your VS Code, then click “Open in Integrated Terminal”. This will open the terminal to the appropriate file where you will then run the code “npm run start”.  The server will start, and you will see a message "Server is running on port 3000".  You can then open up Postman/Insomnia to test the app. We have several user routes such as GET /api/users to retrieve a list of all users, GET /api/users/:userId to retrieve user details by providing the user's ID, POST /api/users to create a new user, PUT /api/users/:userId to update user details by user's ID, and DELETE /api/users/:userId to delete a user by providing user's ID. We have a few thought routes GET /api/thoughts to get all thoughts, /api/thoughts/:thoughtId to get a single thought by providing its ID, POST /api/thoughts to create a new thought, PUT /api/thoughts/:thoughtId to update a thought by providing its ID, and DELETE /api/thoughts/:thoughtId to delete a thought by providing its ID. We then have two reaction routes to Post /api/thoughts/:thoughtId/reactions to add a reaction to a thought, and DELETE /api/thoughts/:thoughtId/reactions/:reactionId to remove a reaction from a thought.


## Features

- User authentication and account management
- CRUD operations for thoughts and friends
- Reaction system for thoughts
- Friendship connections

## Contribution

Contact me via Github/Email.

## Tests

[Video showing how to use app](https://github.com/SixFourDev/social-network-api/assets/127274865/7ff942e7-3df5-418e-a6cd-0c6089cc35c1)

## Questions

For any questions or inquiries, feel free to reach out to me:

- GitHub: [SixFourDev](https://github.com/SixFourDev)
- Email: sb_94@yahoo.com