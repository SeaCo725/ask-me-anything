# Ask Me Anything

## Author:
SeaCo725

## Live Link
https://ask-me-anything-07cfb9ab7c67.herokuapp.com/

## Usage
1. Install necessary dependencies with `yarn`:

   ```sh
   yarn install
   ```

2. In the root of the `server` folder, create a `.env` file to hold the session secret. This will allow Passport to keep track of the currently signed-in user in session. Include a SESSION_SECRET in the `.env`:

   ```env
   SESSION_SECRET="ff521741-6d5a-48d2-96a9-b95bbcf60bc4"
   ```

3. Create your base PostgreSQL database. Check the `server/src/config/getDatabaseUrl` file for the name of the `development` database. For example:

   ```sh
   createdb ask-me-anything_development
   ```

4. Run the migrations and the seeder
   
   ```sh
   cd server

   yarn migrate:latest
   yarn db:seed
   ```

5. Start up the application, from the root folder:

   ```sh
   cd .. # if in the server folder

   yarn run dev
   ```

6. Navigate to <http://localhost:3000> to view the webpage.

## Webpage Features
* There is an always-present nav bar at the top of the page
* There is a sign in and sign up feature 
* When signed in you have access to a profile page and can upload a profile picture -WIP
* Home page has a list of live and upcoming events-WIP
* Clicking on an event will bring you to the event page where you can ask questions to interact with the Host -WIP

## Technologies implemented

* express.js
* Passport.js
* Knex.js/Objection.js database management
* Dropzone
* React.js
* React Router
* Foundation CSS styling
* Font Awesome icons
