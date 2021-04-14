# SportsPad
06-Server-Side_APIs - 07-Project #1
A platform where sport fans can access information about the game and the personalities in the specified sport.

This application uses the [theSportsdb API](https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php) to retrieve NBA team's data for NBA teams. The `sessionStorage` is used to store any persistent data.

## User Story

```
AS A user
A user WANT to see the NBA stats for multiple teams
OR a user wants to check info about a specific NBA player
SO THAT he/she can see latest news about teams and/or players.
```

## Criteria

```
GIVEN a Sports Pad is presented with form inputs
WHEN a user select a team for the team dropdown field
THEN he/she is presented with the latest 5 events/matches for selected team and an about the team text, the team's stadium information is displayed.The social media links are also shown for the given team.
WHEN the user view the team scores for the latest events
THE winning scores are presented with a checkmark, for the given team.
A RETURN Home button takes the user back to the application's home page.
GIVEN a user wants to search for a specific player form NBA teams.
A user starts typing the name of the player.
A list of player names matching with entered letters is presented
USER can select a desired name from the autofill list names.
THEN the user clicks on the "SEARCH NBA PLAYER" button
THEN the user is presented with the player name, the birthplace, his height, weight, a picture and an about paragraph about the player.

WHEN the user click on the Return Home button on the players page.
THEN the user is then taken back to the home page
The user can then repeat his/her search for another team or player.
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Sports pad app includes a search option for NBA teams, a page about a selected NBA team, and a page about an NBA player.](./images/Sports_Pad_Demo.gif)

## Review

* The URL of the deployed application :https://zahid267.github.io/SportsPad/

* The URL of the GitHub repository : https://github.com/zahid267/SportsPad

- - -
*** Developed by Muhammad Zahid --- April 12, 2021
