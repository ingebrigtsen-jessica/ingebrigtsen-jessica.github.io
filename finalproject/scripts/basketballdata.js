function teamRequests(id) {

    const bballRequestURL = 'https://api.mysportsfeeds.com/v1.2/pull/nba/2018-2019-regular/conference_team_standings.json';
    let params = "team="+id+"&teamstats=W,L";
    let bballRequest = new XMLHttpRequest();
    bballRequest.open('GET', bballRequestURL+"?"+params);
    bballRequest.setRequestHeader("Authorization", "Basic " + btoa("d9512773-5150-4821-9273-bb6ca1" + ":" + "Velkommen3485"));
    bballRequest.responseType = 'json';
    bballRequest.send();
    bballRequest.onload = function () {
        let bballData = (bballRequest.response);
        console.log(bballData);
    };
    const gameRequestURL = 'https://api.mysportsfeeds.com/v1.2/pull/nba/2018-2019-regular/full_game_schedule.json';
    let gameParams = "team="+id+"&date=since-today&limit=1";
    let gameRequest = new XMLHttpRequest();
    gameRequest.open('GET', gameRequestURL+"?"+gameParams);
    gameRequest.setRequestHeader("Authorization", "Basic " + btoa("d9512773-5150-4821-9273-bb6ca1" + ":" + "Velkommen3485"));
    gameRequest.responseType = 'json';
    gameRequest.send();
    gameRequest.onload = function () {
        let gameData = (gameRequest.response);
        console.log(gameData);
    };

}