# restaurant-locator


## Basic Setup

1. `touch server.js`
2. `npm init -y`
3. `npm install express mongoose`
4. Optional: `npm install nodemon -D`

## Server Setup

1. Require express and mongoose
2. Create an instance of express. 
3. Define a PORT to listen on.
4. Listen on the PORT.
5. Add middleware
6. Add routes (Optional: /api/config to test)

## Database Connection
1. Write mongoose.connect with process environment variable or local connection string and config object.
2. Setup logging for successful or error connection.

## Create Your Models
1. Require mongoose
2. Bring in the schema
3. Create a new schema
4. Create the model from the schema
5. Export the model

## Build those Routes
1. Create the controller
2. Require express
3. Declare the router off Express
4. Export the router (Routes go in the middle)
5. Require the controller in server.js
6. Use the controller in server.js

## Bring in the Models to the Routes
1. Require the models for that route. 
2. Query the DB using mongoose methods
3. Chain the promise, res.json the result
4. Be sure to catch any errors. 

