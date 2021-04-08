var teamListEl = $('#team_list');
var teamContEl = $('.container');
var teamNameEl = "";
let playerSt = [];    var eventDB = [];
var teamId = "";

       
    var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Atlanta_Hawks&p=Cam_Reddish';

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
            
            
            console.log()
        })


       

 