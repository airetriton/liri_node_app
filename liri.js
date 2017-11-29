var twitter = require("twitter");
var keys = require("./keys.js");
var appexp = require("express"); 

var omdb = require("request");
var spotify = require("spotify");
var fs = require("fs");

var nodeArg = process.argv;
var liriCommand = process.argv[2];
var searchTitle = process.argv[3];


var twitterKeys = keys.twitterKeys;

var t = new twitter(keys);

console.log(t);


//accessing twitter

function myTweets(){
    t.get('search/tweets', {q: 'aireEspinoza', count: 20}, function(error, tweet, response) 
    {
        if(error){
            console.log(error);
        }else{
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

myTweets();

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





//spotify

// var userSong;
//  if (process.argv[3] === undefined || process.argv[3]=== " "){
//             userSong = "The Sign";
//         } else{
//                 userSong = process.argv[3] 
//             }

// spotify.search({ type: 'track', query: userSong }, function(err, data) {















