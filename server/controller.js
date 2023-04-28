const games = require('./db.json')
let globalId = 2

module.exports = {
    createGameCard: (req, res) => {
        let { awayTeam, awayTeamScore, homeTeam, homeTeamScore } = req.body;
        let newGame = {
            id: globalId,
            awayTeam,
            awayTeamScore,
            homeTeam,
            homeTeamScore
        }
        games.push(newGame);
        res.status(200).send(games)
        globalId++
    },
    getGames: (req, res) => {
        res.status(200).send(games)
    },
    deleteGame: (req, res) => {
        let index = games.findIndex(elem => elem.id === +req.params.id)
        games.splice(index, 1)
        res.status(200).send(games)
    }
}