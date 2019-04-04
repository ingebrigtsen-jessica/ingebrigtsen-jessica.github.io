function teamRequests(id, card) {
    const bballRequestURL = 'https://api.mysportsfeeds.com/v1.2/pull/nba/2018-2019-regular/conference_team_standings.json';
    let params = "team=" + id + "&teamstats=W,L";
    let bballRequest = new XMLHttpRequest();
    bballRequest.open('GET', bballRequestURL + "?" + params);
    bballRequest.setRequestHeader("Authorization", "Basic " + btoa("d9512773-5150-4821-9273-bb6ca1" + ":" + "Velkommen3485"));
    bballRequest.responseType = 'json';
    bballRequest.send();
    bballRequest.onload = function () {
        let bballData = (bballRequest.response);
        console.log(bballData);
        let team = bballData.conferenceteamstandings.conference[1].teamentry[0];
        let teamName = team.team.City + " " + team.team.Name;
        let heading = document.createElement("H3");
        let text = document.createTextNode(teamName);
        heading.appendChild(text);
        let rank = document.createElement("P");
        text = document.createTextNode("Rank: " + team.rank);
        rank.appendChild(text);
        let wins = document.createElement("P");
        text = document.createTextNode("Wins: " + team.stats.Wins["#text"]);
        wins.appendChild(text);
        let losses = document.createElement("P");
        text = document.createTextNode("Losses: " + team.stats.Losses["#text"]);
        losses.appendChild(text);
        card.appendChild(heading);
        card.appendChild(rank);
        card.appendChild(wins);
        card.appendChild(losses);
        nextGame(id, card);
    };

    

}

function nextGame(id, card){
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
        let text = '';
        if (games.homeTeam.ID == id) {
            text = document.createTextNode("Next Game: " + games.homeTeam.City + " " + games.homeTeam.Name + " vs. " + games.awayTeam.City + " " + games.awayTeam.Name);
            nextGame.appendChild(text);
            card.appendChild(nextGame);
        }
        else {
            text = document.createTextNode("Next Game: " + games.homeTeam.City + " " + games.homeTeam.Name + " @ " + games.awayTeam.City + " " + games.awayTeam.Name);
            nextGame.appendChild(text);
            card.appendChild(nextGame);
        }
        let tempDate = games.date;
        let d = tempDate.split("-");
        let date = d[1] + "/" + d[2] + "/" + d[0];
        
        let gameDate = document.createElement("P");
        text = document.createTextNode("Date: " + date + " @ " + games.time);
        gameDate.appendChild(text);
        card.appendChild(gameDate);
    };
}