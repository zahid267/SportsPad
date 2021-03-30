# Sports-Reel
A platform where sport fans can access information about the game and the personalities in the specified sport.


api info 

fetch("https://api-nba-v1.p.rapidapi.com/seasons/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "36cdf6872fmsh4c920891e55aecdp1d76fdjsn61241435d1ec",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

https://rapidapi.com/api-sports/api/api-nba
