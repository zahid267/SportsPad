const myListContainer = document.querySelector('.list-group');
var teamsContainerEl = document.querySelector('#nbaTeams-container');
var teamSearchTerm = document.querySelector('#nbaTeams-search-term');
var playerSearh = document.querySelector('#player_input');
var playerTeamSearch = document.querySelector('#team_input');
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

function searchPlayers() {
    // event.preventDefault();
  

  const playerSearh  = userInput.value
  const playerTeamSearch = userInput.value
  
console.log(playerSearh)
}

function searchTeams() {
  // event.preventDefault();
const teamNameSearch = userInput.value
var teamIndex = "";
for(var i = 0; i< teamList.length; i++){
  if(teamNameSearch.toLowerCase() === teamList[i].toLowerCase()){
    teamIndex = i;
    i = teamList.length+1;
  }
}
if(teamIndex != ""){
  var teamRecord = teamDB.teams[teamIndex];
  var teamRec = JSON.stringify(teamRecord);
  sessionStorage.setItem("teamRecord", teamRec);
  var queryString = './team.html';      ///?q=' + teamIndex+"&teamid=";         //searchInputVal + '&format=' + formatInputVal;
  location.assign(queryString);
}else{
  alert("Team name does not exists in NBA league - "+teamNameSearch);
}
}

teamListEl.on('click', function(event){
  event.preventDefault();
  var teamIndex = event.target.dataset.index;
  //var teamId = event.target.dataset.id;
  //console.log(teamIndex + " --- " + teamId);
  //console.log("data : " + teamDB);
  var teamRecord = teamDB.teams[teamIndex];
  var teamRec = JSON.stringify(teamRecord);
  //console.log(teamRec);

  sessionStorage.setItem("teamRecord", teamRec);

  var queryString = './team.html';      ///?q=' + teamIndex+"&teamid="+teamId;         //searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
  /// Call the teamStats function next
})

// Autocomplete widget
function setAutoComplete(teamListNames){
  //$(function () {
   // teamNames = teamList;
   
    $('#nbaTeam').autocomplete({
      source: teamListNames,
    });

    $('#team_input').autocomplete({
      source: teamListNames,
    });
  //});
}


let playerSt = [];    
var teamId = "";
var teamInput = $('#team_Input')
var playerInput = $('#player_input')

  
var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=' + teamInput + '&p= ' + playerInput ;


    var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Atlanta_Hawks&p=Kris_Dunn';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playerSt = data.player[0];
            console.log("playerSt: ", playerSt );


            var playerBrith = playerSt.strBirthLocation
            $('#city_birth').append("Born: " + playerBrith)
            var playerName = playerSt.strPlayer
            $('#player-name').append(playerName)
            var playerHT = playerSt.strHeight
            $('#height').append("Height: " + playerHT)
            var playerWT = playerSt.strWeight
            $('#weight').append('Weight: ' + playerWT)
            var playerGn = playerSt.strGender
            $('#gender').append("Gender: " + playerGn,)
            var playerDes = playerSt.strDescriptionEN
            $('#about_player').append("About " + playerName)
            $('#player_desc').append(playerDes)
            var playerTeam = playerSt.strTeam
            $('#player_team').append(playerTeam)
            var playerPic = playerSt.strThumb
            $('#player_pic').attr('src', playerPic)
            
            
            console.log(playerPic)
        })


getTeams();

searchPlayers();
