const myListContainer = document.querySelector('.list-group');
var teamsContainerEl = document.querySelector('#nbaTeams-container');
var teamSearchTerm = document.querySelector('#nbaTeams-search-term');
var userInput = document.querySelector('#nbaTeam');
var teamListEl = $('#team_list');
var teamNameEl = "";
let teamDB = [];
var teamList = [];
var teamNames = [];

function getTeams() {
    var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            teamDB = data;
            console.log("teamDB: ", teamDB);
            showTeams();
        });
}

function showTeams() {
    //console.log(data.teams[0].strTeam);
    for (var i = 0; i < teamDB.teams.length; i++) {

        // console.log(teamDB.teams[i].strTeam);
        var teamName = (teamDB.teams[i].strTeam);
        var teamid = teamDB.teams[i].idTeam;
        

       // var nbaTeamEl = document.createElement('div');
        // nbaTeamEl.setAttribute('class', '')
        // nbaTeamEl.classList = 'list-item flex-row justify-space-between align-center';

        //var titleEl = document.createElement('span');
      //  titleEl.textContent = teamName;
      teamList[i] = teamName;
        teamNameEl = $('<li>');
        teamNameEl.attr("data-index", i);
        teamNameEl.attr("data-id", teamid);
       // console.log(teamNameEl)
        teamNameEl.text(teamName);
      //  nbaTeamEl.append(titleEl);
        teamListEl.append(teamNameEl);

    }
    teamNames = teamList;
    setAutoComplete(teamList)
}
