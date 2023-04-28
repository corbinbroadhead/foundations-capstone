const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/public`));

const { 
    createGameCard,
    getGames,
    deleteGame
} = require("./controller");
// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// })
app.post(`/api/games`, createGameCard);
app.get(`/api/games`, getGames);
app.delete(`/api/games/:id`, deleteGame);

app.listen(4088, () => console.log("autobots rolling out on port 4088"));
