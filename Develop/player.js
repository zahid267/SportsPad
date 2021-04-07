var teamListEl = $('#team_list');
var teamContEl = $('.container');
var teamNameEl = "";
let playerSt = [];    var eventDB = [];
var teamId = "";

        function dispPlayer() {
    var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Atlanta_Hawks&p=Cam_Reddish';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            playerSt = data.player[0];
            console.log("playerSt: ", playerSt );
        })


       

            PlayerId = playerSt.idPlayer;
            var trec = playerSt; /// Individual team record
                var httPrefix = "https://";
                 console.log(trec);
                 /*strWebsite: "www.nba.com/nets" */
                 //var logoEl =
                  $('#logo').attr('src',trec.strTeamLogo)
                 //var brandLogoEl = 
                 $('.brand-logo').attr('href', httPrefix+trec.strWebsite).text(trec.strTeam);
                // var brandLogoEl = $('.brand-logo').attr('href', trec.strWebsite).append(logoEl);
                 
                 //brandLogoEl.append(logoEl);
                 
                 var navMobileEl = $('#nav-mobile')
                 var aEl = $('<a>').attr('href',httPrefix+trec.strFacebook).text("Facebook")
                 aEl.attr('target', '_blank');
                 var liEl = $('<li>').append(aEl);
                 navMobileEl.append(liEl);
        
                 aEl = $('<a>').attr('href',httPrefix+trec.strInstagram).text("Instagram")
                 aEl.attr('target', '_blank');
                 liEl = $('<li>').append(aEl);
                 navMobileEl.append(liEl);
                 aEl = $('<a>').attr('href',httPrefix+trec.strTwitter).text("Twitter")
                 aEl.attr('target', '_blank');
                 liEl = $('<li>').append(aEl);
                 navMobileEl.append(liEl);
                 aEl = $('<a>').attr('href',httPrefix+trec.strYoutube).text("Youtube")
                 aEl.attr('target', '_blank');
                 liEl = $('<li>').append(aEl);
                 navMobileEl.append(liEl);
        
                 //var teamNameEl = $('#team_title').text(trec.strTeam)
                 var cityEl = $('#city').text(playerSt.strBirthLocation+", "+playerSt.strNationality);
                 var sinceEl = $('#since').text("Since "+trec.strTeam);
                 $('#city_info').append(cityEl, sinceEl);
                 
                // var descEl = 
                 $('#player_desc').text(playerSt.strDescriptionEN);
                // teamContEl.append(descEl);
                
                //var badgeEl = 
                $('#position').text('src',playerSt.strPosition)
                //var bannerEl =
                 $('#height').text('src',trec.strTeamBanner)
                //var jerseyEl = 
                $('#jersey').attr('src',trec.strTeamJersey)
                //teamContEl.append(logoEl, badgeEl, bannerEl, jerseyEl)
        
     
               // var stadiumDesc = 
                $('#brith_Place').text(trec.strBirthLocation);
               // teamContEl.append(stadiumEl, stadiumLocEl, stadiumDesc);
                //var stadiumThumbEl = 
                $('#stadium_thumb').attr('src', trec.strThumb)
        }

dispPlayer();