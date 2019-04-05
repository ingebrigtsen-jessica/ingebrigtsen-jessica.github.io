function flipped(x, card, id) {
    let team = document.getElementsByClassName('card');
    team[x].classList.toggle('flipped');
    if (team[x].classList.contains('flipped')) {
        teamRequests(id, card);
    }
    else {
        card.innerHTML = ' ';
    }
}

function teamRequests(id, card) {
    const bballRequestURL = 'https://api.mysportsfeeds.com/v1.2/pull/nba/2018-2019-regular/conference_team_standings.json';
    let params = "team=" + id + "&teamstats=W,L";
    let x;
    let bballRequest = new XMLHttpRequest();
    bballRequest.open('GET', bballRequestURL + "?" + params);
    bballRequest.setRequestHeader("Authorization", "Basic " + btoa("d9512773-5150-4821-9273-bb6ca1" + ":" + "Velkommen3485"));
    bballRequest.responseType = 'json';
    bballRequest.send();
    bballRequest.onload = function () {
        let bballData = (bballRequest.response);
        console.log(bballData);
        if (id < 96)
            x = 0;
        else
            x = 1;
        let team = bballData.conferenceteamstandings.conference[x].teamentry[0];
        let teamName = team.team.City + " " + team.team.Name;
        let heading = document.createElement("H3");
        let text = document.createTextNode(teamName);
        heading.appendChild(text);
        card.appendChild(heading);

        let ranking = document.createElement("P");
        text = document.createTextNode("Rank: " + team.rank);
        ranking.appendChild(text);
        let breakline = document.createElement("br");
        ranking.appendChild(breakline);
        text = document.createTextNode("Wins: " + team.stats.Wins["#text"] + " -- Losses: " + team.stats.Losses["#text"]);
        ranking.appendChild(text);
        card.appendChild(ranking);
        nextGame(id, card);
    };
}

function nextGame(id, card) {
    const gameRequestURL = 'https://api.mysportsfeeds.com/v1.2/pull/nba/2018-2019-regular/full_game_schedule.json';
    let gameParams = "team=" + id + "&date=since-today&limit=1";
    let gameRequest = new XMLHttpRequest();
    gameRequest.open('GET', gameRequestURL + "?" + gameParams);
    gameRequest.setRequestHeader("Authorization", "Basic " + btoa("d9512773-5150-4821-9273-bb6ca1" + ":" + "Velkommen3485"));
    gameRequest.responseType = 'json';
    gameRequest.send();
    gameRequest.onload = function () {
        let gameData = (gameRequest.response);
        console.log(gameData);
        let games = gameData.fullgameschedule.gameentry[0];
        let nextGame = document.createElement("P");
        nextGame.setAttribute("style", "padding: .25rem;");
        let text = '';
        text = document.createTextNode("Next Game: ");
        nextGame.appendChild(text);
        let linebreak = document.createElement("br");
        nextGame.appendChild(linebreak);

        if (games.homeTeam.ID == id) {
            text = document.createTextNode(games.homeTeam.City + " " + games.homeTeam.Name + " vs. " + games.awayTeam.City + " " + games.awayTeam.Name);
            nextGame.appendChild(text);


        }
        else {
            text = document.createTextNode(games.awayTeam.City + " " + games.awayTeam.Name + " @ " + games.homeTeam.City + " " + games.homeTeam.Name);
            nextGame.appendChild(text);

        }

        let tempDate = games.date;
        let d = tempDate.split("-");
        let date = d[1] + "/" + d[2] + "/" + d[0];
        text = document.createTextNode(date + " @ " + games.time);
        let linebreak1 = document.createElement("br");
        nextGame.appendChild(linebreak1);
        nextGame.appendChild(text);
        card.appendChild(nextGame);
    };
}