# The Fastest Click Game
  Game implemented with Node.js and Vue.js. On fist page player input player name. Then, on button click, starts countdown until game begin. When countdown is over the game begin. On left side of screen is game, while on the right are instruction. Goal of game is to fast click on buttons in right order shown in instructions. In each next level buttons shrink and they have diffent color and position on screen. Player has 60 seconds to click buttons in right order. Game has no defined end. Game is played until player has wrong clicks. When the game is over the player score with top five players and scores is shown. 

# Server setup:

  1. Install Node.js
  2. Install express and PostgreSQL (npm install --save express postgresql)
  3. Create table in database: CREATE TABLE scoreboard(Id SERIAL PRIMARY KEY, name VARCHAR(30), score INTEGER);
  4. In /server/queries.js set database connection params
  - OPTIONAL change incoming connection in /server/index.js.
  5. start server with command: node index.js
  
# Client setup:
  1. Install vuex, axios and vue-router
  2. start server with command: npm run dev
  

        
  

