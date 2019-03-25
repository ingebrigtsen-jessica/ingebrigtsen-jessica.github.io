function testingAPI(){

const bballRequestURL = 'https://api.mysportsfeeds.com/v1.2/pull/nba/2018-2019-regular/conference_team_standings.json';
let bballRequest = new XMLHttpRequest();
bballRequest.open('GET', bballRequestURL);
bballRequest.setRequestHeader( "Authorization", "Basic " + btoa("d9512773-5150-4821-9273-bb6ca1" + ":" + "Velkommen3485"));
bballRequest.responseType = 'json';
bballRequest.send();
bballRequest.onload = function () {
    let bballData = (bballRequest.response);
    console.log(bballData);
};
}