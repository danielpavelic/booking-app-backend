## BOOKING APP DEMO - CocaCola & Pepsi

Node js backend with REST endpoints for CocaCola&Pepsi Booking App.


## Endpoints

Server type Express. Endpoints are located in "routes.js" file. Please see list of endpoints below:

Users:
- [GET] /user (Get all users)
- [GET] /user/:userId (Get User by Id)
- [POST] /user (Create user)

Booking:
- [GET] /booking (Get all bookings)
- [POST] /booking (Create a booking)
- [GET] /booking/room/:roomId (Get booking by room Id)
- [GET] /mybooking/:userId (Get bookings by User Id)
- [DELETE] /mybooking/:id (Delete/Cancel booking by Booking Id)

Rooms:
- [GET] /rooms (Get all rooms)
- [GET] /room/:id (Get room by Id)


## Requirements

* Node JS
* Git
* Mongo DB Cluster

## Node setup

Clone the repo and install the dependencies.

```bash
git clone <REPO>
```

```bash
npm install
```

## Steps for loading the App

To start the express server, run the following

```bash
npm run start
```

Open [http://localhost:3000/rooms](http://localhost:3000/rooms) for all Rooms.
Open [http://localhost:3000/user](http://localhost:3000/user) for all Users.
Open [http://localhost:3000/booking](http://localhost:3000/booking) for all Bookings.


## ENV and DB details

Please find all ENV details in .env file located in the project root.

```
# ENV
NODE_ENV_DEV = development
NODE_ENV_PROD = production

# Server
PORT = 3000

# DBA
DB_USER = dba
DB_PASSWORD = 4PZCZgs4fsFS7a7u
CLUSTER = cluster0.rwrsv.azure.mongodb.net
DB_NAME = dbRoomBooking
```

Step 7: To start the express server, run the following
```bash
npm run start
```