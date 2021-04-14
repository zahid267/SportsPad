
let playerSt = [];    
var teamId = "";
var teamInput = $('#team_Input')
var playerInput = $('#player_input')
  
//var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=' + teamInput + '&p= ' + playerInput ;




function getParams() {
    var searchParamsArr = document.location.search.split('&');
    var team = searchParamsArr[0].split('=').pop();
    var player = searchParamsArr[1].split('=').pop();
    getPlayers(team, player);
  }

    //var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Toronto_Raptors&p=Kyle_Lowry';

function getPlayers(team, player) {   /// Not used on this page
    var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+team+'&p='+player;
  //player = player.replaceAll('_', ' ');
    //var requestUrl = 'https://www.balldontlie.io/api/v1/players?search='+player;
    //var requestUrl = 'https://www.balldontlie.io/api/v1/season_average';
   // console.log(requestUrl);

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            
            if(data.player == null){
               // alert("No data available for the given criteria.");
             //   window.history.back();
                getPlayerBalldontlie(player);   /// Check the other API for player data
                return false;
            }
            playerSt = data.player[0];
            //console.log("playerSt: ", playerSt );

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
            $('#player_team').append("Team : " + playerTeam)
            var playerPic = playerSt.strThumb
            $('#player_pic').attr('src', playerPic)
        })
    }
    function getPlayerBalldontlie(player) {  
      //  var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+team+'&p='+player;
        player = player.replaceAll('_', ' ');
        var requestUrl = 'https://www.balldontlie.io/api/v1/players?search='+player;
        //var requestUrl = 'https://www.balldontlie.io/api/v1/season_average';
       // console.log(requestUrl);
    
        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
               // console.log(data);
               // playerSt = data[0];
               // console.log("playerBalldontlie: ", data );
    
                if(data.data.length <= 0){
                    alert("No data available for the given criteria.");
                    window.history.back();
                    return false;
                }else{
                    data = data.data[0];
                   // console.log(data);
                   // console.log("id-data : " + data.first_name);
                    // pdata = data;
                    /*  var playerBrith = playerSt.strBirthLocation
                    $('#city_birth').append("Born: " + playerBrith)*/
                    var playerName = data.first_name+" "+data.last_name;
                    
                    if(data.weight_pounds != null){
                        var playerWT = data.weight_pounds
                        $('#weight').append('Weight: ' + playerWT)
                    }
                    $('#player-name').append(playerName)
                    if(data.height_feet != null){
                        var playerHT = data.height_feet+"' "+data.height_inches+'"';
                        $('#height').append("Height: " + playerHT)
                    }
                    if(data.position != null){
                        var playerPos = data.position
                        $('#gender').append("Position: " + playerPos)
                    }
                    var playerDes = ""; //playerSt.strDescriptionEN
                    $('#about_player').append("About " + playerName)
                    $('#player_desc').append(playerDes)
                    var playerTeam = data.team.full_name;
                    $('#player_team').append("Team : " + playerTeam)
                    var playerPic = 'https://nba-players.herokuapp.com/players/'+data.first_name+'/'+data.last_name;
                    $('#player_pic').attr('src', playerPic)
                }
            })
        }
    



    getParams();