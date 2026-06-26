Travel Planner Web Application

Project Overview

Travel Planner is a simple full-stack web application developed using HTML, CSS, JavaScript, and Node.js with Express. The application allows users to enter their travel details and receive a basic trip plan confirmation.

Features

- User-friendly and responsive interface
- Enter departure city and destination
- Select travel date
- Trip planning request submission
- Backend API using Node.js and Express
- Cross-origin support using CORS

Technologies Used

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Node.js
- Express.js
- CORS

Project Structure

travel-planner/
│
├── index.html
├── server.js
├── package.json
├── package-lock.json
└── README.md

Installation

1. Clone or download the project files.
2. Open the project folder.
3. Install dependencies:

npm install

4. Start the server:

node server.js

5. Open the application in your browser.

API Endpoint

POST /plan-trip

Request Body:

{
  "from": "Hyderabad",
  "to": "Goa",
  "date": "2026-07-01"
}

Response:

{
  "message": "Trip planned successfully",
  "trip": {
    "from": "Hyderabad",
    "destination": "Goa",
    "date": "2026-07-01",
    "suggestion": "Pack light and carry ID proof"
  }
}

Future Enhancements

- Hotel recommendations
- Weather information
- Budget estimation
- Tourist attractions
- AI-based travel suggestions

Author

Eswar

License

This project is developed for educational and learning purposes.
