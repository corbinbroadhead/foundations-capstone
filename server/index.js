const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(`${__dirname}/public`)));
app.use(express.static(path.join(`${__dirname}`, `../images`)));


const { 
    createGameCard,
    getGames,
    deleteGame
} = require("./controller");

//static files
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
app.get("/stylesheet", function(req, res){
    res.sendFile(path.join(__dirname, "../public/styles.css"))
})
app.get("/reset", function(req, res){
    res.sendFile(path.join(__dirname, "../public/reset.css"))
})
app.get("/script", function(req, res){
    res.sendFile(path.join(__dirname, "../public/script.js"))
})
app.get("/font", function(req, res){
    res.sendFile(path.join(__dirname, "../public/DivisionOne-Bold.otf"))
})

//api
app.post(`/api/games`, createGameCard);
app.get(`/api/games`, getGames);
app.delete(`/api/games/:id`, deleteGame);

app.listen(4088, () => console.log("autobots rolling out on port 4088"));
