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


// spotify **	works***
// * This will show the information about the song in your terminal/bash window
     
//      * Artist(s)
     
//      * The song's name
     
//      * A preview link of the song from Spotify
     
//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.

function spotifyThisSong() {
	
  var keys2 = require("./keysspot.js")
  var s = new spotify(keys2);

	//create way for system to default to "the sign" song if nothing is entered on command line
  var searchTitle;

  if (process.argv[3] === " " || process.argv[3] === undefined){

    searchTitle = "The Sign";

  } else {

    searchTitle = process.argv[3];

  };

    console.log(searchTitle);
   	
//search spotify for a specific track or the default
	s.search({
    type: 'track',
    query: searchTitle,
    limit: 10
     
  }, function(err, data) {
  		if (err){
          
      console.log('Error occurred: ' + err);
      return;

      } else {

        console.log("hello")
        console.log(data.tracks.items)

         	//creat a loop to go through all of the songs

    			for (var i = 0; i < data.tracks.items.length; i++) {
            console.log("hello2", JSON.stringify(data.tracks.items[0]))

            var songInfo = data.tracks.items[i];
            console.log("hello3", songInfo.artists)
            var artist = songInfo.artists[0].name;
            var album = songInfo.album.name;
            var songName = songInfo.name;
            var songURL = songInfo.preview_url;
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
 // spotifyThisSong();	



function movieThis(){

  // Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv[4];

var searchTitle;

  if (process.argv[4] === " " || process.argv[4] === undefined){

    searchTitle = "Mr. Nobody";

  } else {

    searchTitle = process.argv[4];

  };
// ...

console.log(movieName);
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=8ed601e1";


// This line is just to help us debug against the actual URL.
console.log(queryUrl,);


// Then create a request to the queryUrl
// ...
request(queryUrl, function(err, response, body){


  // If the request is successful
  // ...
  if(err && response.statusCode === 200) {
    console.log('Error occurred: ' + err);
  } else {
    console.log("hello")
    console.log(data.tracks.items)

        //creat a loop to go through all of the songs

        for (var i = 0; i < data.tracks.items.length; i++) {
          console.log("hello2", JSON.stringify(data.tracks.items[0]))

          var songInfo = data.tracks.items[i];
          console.log("hello3", songInfo.artists)
          var artist = songInfo.artists[0].name;
          var album = songInfo.album.name;
          var songName = songInfo.name;
          var songURL = songInfo.preview_url;
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

    
});
}






//create the liri commands
// switch(liriCommand) {
//     case "my-tweets":
//     myTweets();
//     break;

//     case "spotify-this-song":
//     spotifyThisSong();
//     break;

//     case "movie-this":
//     movieThis();
//     break;

//     case "do-what-it-says":
//     randomPick();
//     break;
// }





















