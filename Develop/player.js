
let playerSt = [];    var eventDB = [];
var teamId = "";
var teamInput = $('#team_Input')
var playerInput = $('#player_input')

  
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

    function showTeams() {
        //console.log(data.teams[0].strTeam);
        for (var i = 0; i < teamDB.teams.length; i++) {
   
            var teamName = (teamDB.teams[i].strTeam);
            var teamid = teamDB.teams[i].idTeam;
            
    
          teamList[i] = teamName;
            teamNameEl = $('<li>');
            teamNameEl.attr("data-index", i);
            teamNameEl.attr("data-id", teamid);
          
    
        }
        teamNames = teamList;
        setAutoComplete(teamList)
    }


    function setAutoComplete(teamListNames){
        //$(function () {
         // teamNames = teamList;
          
          $('#team_Input').autocomplete({
            source: teamListNames,
          });
        }



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


       

 