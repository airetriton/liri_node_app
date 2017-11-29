var twitter = require("twitter");
var keys = require("./keys.js");
var t = new twitter(keys);

var appexp = require("express"); 

var omdb = require("request");

var spotify = require("node-spotify-api");
var keys2 = require("./keysspot.js")
var s = new spotify(keys2);

var fs = require("fs");

var nodeArg = process.argv;
var liriCommand = process.argv[2];
var searchTitle = process.argv[3];






// console.log(t);
// console.log(s);


//accessing twitter - it works
//last 20 tweets & when they were created

// function myTweets(){
	

//     t.get('search/tweets', {q: 'aireEspinoza', count: 20}, function(error, tweet, response) 
//     {
//         if(error){
//             console.log(error);
//         }else{

//         	var tweet = tweet.statuses

//         	// console.log(tweet);

//             for (var i = 0; i < tweet.length; i++) {
//             console.log("================================");
//             console.log(tweet[i].text);
//             console.log(tweet[i].created_at);
                
//                 var tweetObject = {text: tweet[i].text, created: tweet[i].created_at};
//                 fs.appendFileSync("log.txt", JSON.stringify(tweetObject, null, 2));;
//             }    
//         }
//     });
// };

// myTweets();


// spotify
// * This will show the following information about the song in your terminal/bash window
     
//      * Artist(s)
     
//      * The song's name
     
//      * A preview link of the song from Spotify
     
//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.

function spotifyThisSong() {
	
	var userSong;
 	
 	if (process.argv[3] === undefined || process.argv[3] === " "){
		userSong = "The Sign";

    } else{
    	userSong = process.argv[3] 
    }

	s.search({ q: 'userSong', type: 'track' }, function(err, data) {
  		if (err) {
    	return console.log('Error occurred: ' + err);

  		} else {

  			var data = tracks.items;
  			var artist = data[i].album.artists.name;
  			var album = data[i].album.name;
  			var songName = data[i].name;
  			var songURL = data[i].preview_url;

  			for (var i = 0; i < data.length; i++) {
            console.log("================================");
            console.log(artist);
            console.log(songName);
            console.log(songURL);
            console.log(album);
                
                var dataObject = {Artist: artist, Song: songName, Song Preview: songURL, Album: album};
                fs.appendFileSync("log.txt", JSON.stringify(dataObject, null, 2));;
            } 
  		}
  	})	 
};
 spotifyThisSong();	




// switch(liriCommand) {
//     case "my-tweets":
//     myTweets();
//     break;

//     case "spotify-this-song":
//     myPlayList();
//     break;

//     case "movie-this":
//     myMovie();
//     break;

//     case "do-what-it-says":
//     randomPick();
//     break;
// }





















