// fetch("https://free-nba.p.rapidapi.com/stats?page=0&per_page=25", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "36cdf6872fmsh4c920891e55aecdp1d76fdjsn61241435d1ec",
// 		"x-rapidapi-host": "free-nba.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


var teamsContainerEl = document.querySelector('#nbaTeams-container');
var teamSearchTerm = document.querySelector('#nbaTeams-search-term');

function getTeams() {
    var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //console.log(data.teams[0].strTeam);
        for (var i = 0; i < data.teams.length; i++) {

            console.log(data.teams[i].strTeam);
            var teamName = (data.teams[i].strTeam); 
            
            //teams[0].strTeam teams[0].strTeam

            var nbaTeamEl = document.createElement('div');
            nbaTeamEl.classList = 'list-item flex-row justify-space-between align-center';

            var titleEl = document.createElement('span');
            titleEl.textContent = teamName;

            nbaTeamEl.appendChild(titleEl);
      
    
        }
    });
}

getTeams();



// fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387')
//   .then(response => response.json())
//   //.then(data => console.log(data));
//   .then(data => console.log(data[0].strTeam));