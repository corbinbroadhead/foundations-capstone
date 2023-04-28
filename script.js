const gamesContainer = document.querySelector('.savedGamesContainer');
const baseURL = `http://ec2-54-183-184-120.us-west-1.compute.amazonaws.com//api/games`
const saveGameBtn = document.getElementById("save-button");
let globalId = 1;

const saveGame = () => {
    const awayTeam = document.getElementById("aab").textContent;
    const homeTeam = document.getElementById("hab").textContent;
    const awayTeamScore = document.getElementById("asc").textContent;
    const homeTeamScore = document.getElementById("hsc").textContent;
    axios.post(baseURL, {
        id: globalId,
        awayTeam: awayTeam,
        awayTeamScore: awayTeamScore,
        homeTeam: homeTeam,
        homeTeamScore: homeTeamScore
    })
    .then(res => {
        showGames(res.data);
    })
    .catch(err => {
        console.log(err);
    })
}

const createGameCard = (game) => {
    const gameCard = document.createElement('div')
    gameCard.innerHTML = `<div onclick="deleteGame(${game.id})" class="savedGame">
    <div class="awayTeam">${game.awayTeam}</div>
    <div class="homeTeam">${game.homeTeam}</div>
    <div class="awayTeamScore">${game.awayTeamScore}</div>
    <div class="homeTeamScore">${game.homeTeamScore}</div>
    <div class="final-score">FINAL</div>
    </div>
    `
    gamesContainer.appendChild(gameCard)
}

const showGames = (arr) => {
    gamesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createGameCard(arr[i])
    }
}

const getGames = () => {
    axios.get(baseURL)
    .then(res => {
        showGames(res.data);
    })
    .catch(err => {
        console.log(err);
    })
}

const deleteGame = (id) => {
    axios.delete(`${baseURL}/${id}`)
    .then(res => {
        showGames(res.data);
    })
    .catch(err => {
        console.log(err);
    })
}

getGames();

const assignTeamDal = (event) => {
    event.preventDefault();

    if (document.getElementById("hab").textContent === "TBD") {
        document.getElementById("hab").textContent="DAL";
        document.getElementById("home-logo")
        .src="images/DallasGoldenNuks.png";
        document.getElementById("hra").textContent="94";
        document.getElementById("subheading").textContent="SELECT THE AWAY TEAM";
    } else {
        document.getElementById("aab").textContent="DAL";
        document.getElementById("away-logo")
        .src="images/DallasGoldenNuks.png";
        document.getElementById("ara").textContent="92";
        document.getElementById("subheading").textContent='PRESS "SIM!" TO SIMULATE';
    }
}
const assignTeamChi = (event) => {
    event.preventDefault();

    if (document.getElementById("hab").textContent === "TBD") {
        document.getElementById("hab").textContent="CHI";
        document.getElementById("home-logo")
        .src="images/ChicagoGrays.png";
        document.getElementById("hra").textContent="83";
        document.getElementById("subheading").textContent="SELECT THE AWAY TEAM";
    } else {
        document.getElementById("aab").textContent="CHI";
        document.getElementById("away-logo")
        .src="images/ChicagoGrays.png";
        document.getElementById("ara").textContent="81";
        document.getElementById("subheading").textContent='PRESS "SIM!" TO SIMULATE';
    }
}
const assignTeamWas = (event) => {
    event.preventDefault();

    if (document.getElementById("hab").textContent === "TBD") {
        document.getElementById("hab").textContent="WAS";
        document.getElementById("home-logo")
        .src="images/WasatchBoogeymen.png";
        document.getElementById("hra").textContent="82";
        document.getElementById("subheading").textContent="SELECT THE AWAY TEAM";
    } else {
        document.getElementById("aab").textContent="WAS";
        document.getElementById("away-logo")
        .src="images/WasatchBoogeymen.png";
        document.getElementById("ara").textContent="80";
        document.getElementById("subheading").textContent='PRESS "SIM!" TO SIMULATE';
    }
}
const assignTeamNy = (event) => {
    event.preventDefault();

    if (document.getElementById("hab").textContent === "TBD") {
        document.getElementById("hab").textContent="NYK";
        document.getElementById("home-logo")
        .src="images/NewYorkKnights.png";
        document.getElementById("hra").textContent="86";
        document.getElementById("subheading").textContent="SELECT THE AWAY TEAM";
    } else {
        document.getElementById("aab").textContent="NYK";
        document.getElementById("away-logo")
        .src="images/NewYorkKnights.png";
        document.getElementById("ara").textContent="84";
        document.getElementById("subheading").textContent='PRESS "SIM!" TO SIMULATE';
    }
}
const assignTeamCan = (event) => {
    event.preventDefault();

    if (document.getElementById("hab").textContent === "TBD") {
        document.getElementById("hab").textContent="CAN";
        document.getElementById("home-logo")
        .src="images/CantonCharge.png";
        document.getElementById("hra").textContent="82";
        document.getElementById("subheading").textContent="SELECT THE AWAY TEAM";
    } else {
        document.getElementById("aab").textContent="CAN";
        document.getElementById("away-logo")
        .src="images/CantonCharge.png";
        document.getElementById("ara").textContent="80";
        document.getElementById("subheading").textContent='PRESS "SIM!" TO SIMULATE';
    }
}
const assignTeamCha = (event) => {
    event.preventDefault();

    if (document.getElementById("hab").textContent === "TBD") {
        document.getElementById("hab").textContent="CHA";
        document.getElementById("home-logo")
        .src="images/ChattanoogaChads.png";
        document.getElementById("hra").textContent="87";
        document.getElementById("subheading").textContent="SELECT THE AWAY TEAM";
    } else {
        document.getElementById("aab").textContent="CHA";
        document.getElementById("away-logo")
        .src="images/ChattanoogaChads.png";
        document.getElementById("ara").textContent="85";
        document.getElementById("subheading").textContent='PRESS "SIM!" TO SIMULATE';
    }
}
const assignTeamLa = (event) => {
    event.preventDefault();

    if (document.getElementById("hab").textContent === "TBD") {
        document.getElementById("hab").textContent="LA";
        document.getElementById("home-logo")
        .src="images/LosAngelesPredators.png";
        document.getElementById("hra").textContent="79";
        document.getElementById("subheading").textContent="SELECT THE AWAY TEAM";
    } else {
        document.getElementById("aab").textContent="LA";
        document.getElementById("away-logo")
        .src="images/LosAngelesPredators.png";
        document.getElementById("ara").textContent="77";
        document.getElementById("subheading").textContent='PRESS "SIM!" TO SIMULATE';
    }
}
const assignTeamVan = (event) => {
    event.preventDefault();

    if (document.getElementById("hab").textContent === "TBD") {
        document.getElementById("hab").textContent="VAN";
        document.getElementById("home-logo")
        .src="images/VancouverWeekly.png";
        document.getElementById("hra").textContent="84";
        document.getElementById("subheading").textContent="SELECT THE AWAY TEAM";
    } else {
        document.getElementById("aab").textContent="VAN";
        document.getElementById("away-logo")
        .src="images/VancouverWeekly.png";
        document.getElementById("ara").textContent="82";
        document.getElementById("subheading").textContent='PRESS "SIM!" TO SIMULATE';
    }
}
const goBack = (event) => {
    event.preventDefault();

    if (document.getElementById("hsc").textContent !== "0" && document.getElementById("asc").textContent !== "0"){
        document.getElementById("hsc").textContent="0";
        document.getElementById("asc").textContent="0";
        document.getElementById("game-status").textContent="PREGAME";
    } else if (document.getElementById("aab").textContent !== "TBD") {
        document.getElementById("aab").textContent="TBD";
        document.getElementById("away-logo")
        .src="images/AwayTeam.png";
        document.getElementById("ara").textContent="80";
        document.getElementById("subheading").textContent="SELECT THE AWAY TEAM";
    } else {
        document.getElementById("hab").textContent="TBD";
        document.getElementById("home-logo")
        .src="images/HomeTeam.png";
        document.getElementById("hra").textContent="80";
        document.getElementById("subheading").textContent="SELECT THE HOME TEAM";
    }
}
const simulate = (event) => {
    event.preventDefault();

    if (document.getElementById("aab").textContent === "TBD" || document.getElementById("aab").textContent === "TBD") {
        return alert('Make sure you select the teams first!');
    }
    let awayRating = document.getElementById("ara").textContent;  
    let homeRating = document.getElementById("hra").textContent;
    let awayScore = 0;
    let homeScore = 0;
    let overtimeInd = 0;
    const possPossLow = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4]; 
    const possPossMed = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4];
    const possPossHigh = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4]; 
    if (+awayRating > +homeRating) {
        if (+awayRating - +homeRating > 4) {
            for (let i = 0; i < 60; i++) {
                awayScore = awayScore + possPossHigh[Math.floor(Math.random() * possPossHigh.length)];
            }
            for (let i = 0; i < 60; i++) {
                homeScore = homeScore + possPossLow[Math.floor(Math.random() * possPossLow.length)];
            }
        } else {
            for (let i = 0; i < 60; i++) {
                awayScore = awayScore + possPossMed[Math.floor(Math.random() * possPossMed.length)];
            }
            for (let i = 0; i < 60; i++) {
                homeScore = homeScore + possPossLow[Math.floor(Math.random() * possPossLow.length)];
            }
        }
    } else if (+awayRating < +homeRating) {
        if (+homeRating - +awayRating > 4) {
            for (let i = 0; i < 60; i++) {
                awayScore = awayScore + possPossLow[Math.floor(Math.random() * possPossLow.length)];
            }
            for (let i = 0; i < 60; i++) {
                homeScore = homeScore + possPossHigh[Math.floor(Math.random() * possPossHigh.length)];
            }
        } else {
            for (let i = 0; i < 60; i++) {
                awayScore = awayScore + possPossMed[Math.floor(Math.random() * possPossMed.length)];
            }
            for (let i = 0; i < 60; i++) {
                homeScore = homeScore + possPossHigh[Math.floor(Math.random() * possPossHigh.length)];
            }
        }
    } else {
        for (let i = 0; i < 60; i++) {
            awayScore = awayScore + possPossMed[Math.floor(Math.random() * possPossMed.length)];
        }
        for (let i = 0; i < 60; i++) {
            homeScore = homeScore + possPossMed[Math.floor(Math.random() * possPossMed.length)];
        }
    }
    if (awayScore === homeScore) {
        for (let i = 0; i < 8; i++) {
            awayScore = awayScore + possPossMed[Math.floor(Math.random() * 26)];
        }
        for (let i = 0; i < 8; i++) {
            homeScore = homeScore + possPossMed[Math.floor(Math.random() * 26)];
        }
        overtimeInd = 1;
    }
    document.getElementById("asc").textContent=`${awayScore}`;
    document.getElementById("hsc").textContent=`${homeScore}`;
    if (overtimeInd === 0) {
        document.getElementById("game-status").textContent="FINAL";
    } else {
        document.getElementById("game-status").textContent="FINAL (OT)";
    }
}
const subtractAway = (event) => {
    event.preventDefault();

    let awayRating = +document.getElementById("ara").textContent;
    if (awayRating < 66) {
        awayRating = 99;
    } else {
        awayRating -= 1;
    }
    document.getElementById("ara").textContent=`${awayRating}`;
}
const addAway = (event) => {
    event.preventDefault();

    let awayRating = +document.getElementById("ara").textContent;
    if (awayRating > 98) {
        awayRating = 65;
    } else {
        awayRating += 1;
    }
    document.getElementById("ara").textContent=`${awayRating}`;
}
const subtractHome = (event) => {
    event.preventDefault();

    let homeRating = +document.getElementById("hra").textContent;
    if (homeRating < 66) {
        homeRating = 99;
    } else {
        homeRating -= 1;
    }
    document.getElementById("hra").textContent=`${homeRating}`;
}
const addHome = (event) => {
    event.preventDefault();

    let homeRating = +document.getElementById("hra").textContent;
    if (homeRating > 98) {
        homeRating = 65;
    } else {
        homeRating += 1;
    }
    document.getElementById("hra").textContent=`${homeRating}`;
}
const swapTeams = (event) => {
    event.preventDefault();

    if (document.getElementById("aab").textContent === "TBD" || document.getElementById("aab").textContent === "TBD") {
        return alert('Make sure you select the teams first!');
    }

    let hToAab = document.getElementById("hab").textContent;
    let hToAImg = document.getElementById("home-logo").src;
    let hToAra = +document.getElementById("hra").textContent - 2;
    let aToHab = document.getElementById("aab").textContent;
    let aToHImg = document.getElementById("away-logo").src;
    let aToHra = +document.getElementById("ara").textContent + 2;
    document.getElementById("hab").textContent = aToHab;
    document.getElementById("home-logo").src=aToHImg;
    document.getElementById("hra").textContent = aToHra;
    document.getElementById("aab").textContent = hToAab;
    document.getElementById("away-logo").src=hToAImg;
    document.getElementById("ara").textContent = hToAra;
    document.getElementById("hsc").textContent = '0';
    document.getElementById("asc").textContent = '0';
}

document.querySelector(".Dallas").addEventListener("click", assignTeamDal);
document.querySelector(".Chicago").addEventListener("click", assignTeamChi);
document.querySelector(".Wasatch").addEventListener("click", assignTeamWas);
document.querySelector(".NewYork").addEventListener("click", assignTeamNy);
document.querySelector(".Canton").addEventListener("click", assignTeamCan);
document.querySelector(".Chattanooga").addEventListener("click", assignTeamCha);
document.querySelector(".LosAngeles").addEventListener("click", assignTeamLa);
document.querySelector(".Vancouver").addEventListener("click", assignTeamVan);
document.getElementById("back-button").addEventListener("click", goBack);
document.getElementById("sim-button").addEventListener("click", simulate);
document.getElementById("away-minus-btn").addEventListener("click", subtractAway);
document.getElementById("away-add-btn").addEventListener("click", addAway);
document.getElementById("home-minus-btn").addEventListener("click", subtractHome);
document.getElementById("home-add-btn").addEventListener("click", addHome);
document.getElementById("save-button").addEventListener("click", saveGame);
document.getElementById("swap-button").addEventListener("click", swapTeams);