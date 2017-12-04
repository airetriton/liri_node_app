var twitter = require("twitter");
var appexp = require("express"); 
var omdb = require("request");
var spotify = require("node-spotify-api");

var fs = require("fs");

var nodeArg = process.argv;
var liriCommand = process.argv[2];



// console.log(t);
// console.log(s);


// accessing twitter - it works
// last 20 tweets & when they were created

function myTweets(){
	   var keys = require("./keys.js");
    var t = new twitter(keys);

    t.get('search/tweets', {q: 'aireEspinoza', count: 20}, function(error, tweet, response) 
    {
        if(error){
            console.log(error);
        }else{

        	var tweet = tweet.statuses

        	// console.log(tweet);

            for (var i = 0; i < tweet.length; i++) {
            console.log("================================");
            console.log(tweet[i].text);
            console.log(tweet[i].created_at);
                
                var tweetObject = {text: tweet[i].text, created: tweet[i].created_at};
                fs.appendFileSync("log.txt", JSON.stringify(tweetObject, null, 2));;
            }    
        }
    });
};

// myTweets();


// spotify **	DOESN'T WORK YET***
// * This will show the following information about the song in your terminal/bash window
     
//      * Artist(s)
     
//      * The song's name
     
//      * A preview link of the song from Spotify
     
//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.

function spotifyThisSong() {
	
  var keys2 = require("./keysspot.js")
  var s = new spotify({
    id: 'e6ec134009e54a57b886e8b829fec65c',
    secret: '9b9cb5ad5c5b46588cb216ef70067da8'});

	//create way for system to default to "the sign" song if nothing is entered on command line
  var searchTitle;

  if (searchTitle === " " || searchTitle === undefined){

    var searchTitle = process.argv[3];
  
  } else {

    var searchTitle = "The Sign";

  }
console.log(searchTitle);
   	
//search spotify for a specific track or the default
	s.search({
    type: 'track',
    query: 'searchTitle',
    limit: 10
     
  }, function(err, data) {
  		if (err){
          
      return console.log('Error occurred: ' + err);

      } else {

        return (data);
        console.log('I got '+ data.tracks.total +' results');

	       	var data = data.tracks.items;
    			var artist = data[i].artists.name;
    			var album = data[i].album.name;
    			var songName = data[i].name;
    			var songURL = data[i].preview_url;
          //creat a loop to go through all of the songs
    			for (var i = 0; i < data.length; i++) {
              console.log("================================");
              console.log(artist);
              console.log(songName);
              console.log(songURL);
              console.log(album);
           //create a variable that holds all of the data so it can go into a file       
          var dataObject = {Artist: artist, Song: songName, Preview: songURL, Album: album};
          //put data into a file        
          fs.appendFileSync("log.txt", JSON.stringify(dataObject, null, 2));;
        
        }
    	}
    }
  )
};
 spotifyThisSong();	



// function movieThis(){

//   // Grab or assemble the movie name and store it in a variable called "movieName"
// var movieName = process.argv[4];
// // ...

// console.log(movieName);
// // Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// // This line is just to help us debug against the actual URL.
// console.log(queryUrl,);


// // Then create a request to the queryUrl
// // ...
// request(queryUrl, function(error, response, body){


//   // If the request is successful
//   // ...
//   if(!error && response.statusCode === 200) {
//     console.log("The movie's Release Year is "+ JSON.parse(body).Year);
//   }

//   // Then log the Release Year for the movie
//   // ...
// });
// }


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





















