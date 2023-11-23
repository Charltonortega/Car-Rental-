# Car Rental Application

## Introduction
Welcome to the Car Rental Application! This application allows users to rent vehicles for their transportation needs. Whether you're planning a road trip or need a vehicle for daily commuting, our platform has you covered.

## Features
- User Registration and Authentication
- Vehicle Rental
- Reservation Management
- Vehicle Listings and Details
- User Reviews and Ratings
- Admin Dashboard

## User Management
### Registration
To use the service, users must register with a valid email address and password.

### Authentication
Users can log in securely using their registered credentials.

## Reservation Management
### Creating a Reservation
Users can select their desired vehicle and specify pickup and drop-off dates to create a reservation.

### Viewing Reservations
Users can view their active and past reservations.

## Vehicle Listings and Details
### Vehicle Categories
Browse vehicles by category, such as economy, luxury, and SUVs.

### Vehicle Details
View detailed information about each vehicle, including photos, specifications, and availability.

## User Reviews and Ratings
### Leave Reviews
Users can leave reviews and ratings for the vehicles they've rented.

### Read Reviews
Browse through reviews and ratings from other users to make informed rental decisions.


## Setup
Follow these steps to set up and run the Car Rental Application locally.

### Cloning the Repository
```bash
git clone https://github.com/Charltonortega/Car-Rental-.git
cd car-rental-app
```
### Installing Dependencies
```
npm install
```

### Building the Frontend
```
npm run build
```

### Starting the Server
```
npm start
```
## Usage

### User
- Register and log in to the application.
- Browse available vehicles.
- Create reservations for selected vehicles.
- Leave reviews and ratings for rented vehicles. 
- View reservation history.

## Tech

### Backend Tech

- Node.js: JavaScript runtime environment for building the server-side application.
- Express.js: Web application framework for Node.js for setting up middleware and routing.
- MongoDB: NoSQL database for storing application data like users, vehicles, and reservations.
- Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js for schema definition, data validation, and query building.
- Apollo Server: GraphQL server that provides a ready-to-go API endpoint for executing queries and mutations defined in your GraphQL schema.
- GraphQL: Query language for APIs and a runtime for executing those queries with your existing data.
- JSON Web Tokens (JWT): For authentication, to securely transmit information between the client and the server as a JSON object.
- dotenv: Module to load environment variables from a .env file into process.env.

### Frontend Tech

- React: JavaScript library for building user interfaces.
- Apollo Client: Comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- GraphQL: Also used on the frontend to communicate with the GraphQL API provided by the Apollo Server.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- react-datepicker: A simple and reusable Datepicker component for React.
- Vite: Frontend build tool that serves as the development environment and build tool for modern web projects.

## License
MIT License