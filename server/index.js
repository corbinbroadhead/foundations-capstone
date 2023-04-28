const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}`));

const { 
    createGameCard,
    getGames,
    deleteGame
} = require("./controller");

app.post(`/api/games`, createGameCard);
app.get(`/api/games`, getGames);
app.delete(`/api/games/:id`, deleteGame);

app.listen(4088, () => console.log("autobots rolling out on port 4088"));
