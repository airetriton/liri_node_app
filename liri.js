var keys = require("./keys.js");
var twitter = require("twitter");
var omdb = require("request");
var spotify = require("spotify");
var fs = require("fs");

var nodeArg = process.argv;
var liriCommand = process.argv[2];
var searchTitle = process.argv[3];


var twitterKeys = keys.twitterKeys;

var twitterUser = new twitter({
    consumer_key: twitterKeys.consumer_key,
    consumer_secret: twitterKeys.consumer_secret,
    access_token_key: twitterKeys.access_token_key,
    access_token_secret: twitterKeys.access_token_secret
});

console.log(twitterUser);

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


// function myTweets(){
//     twitterUser.get('search/tweets', {q: 'aireEspinoza', count: 20}, function(error, tweet, response) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log(tweet);
//         }
//     });
// };






//spotify

// var userSong;
//  if (process.argv[3] === undefined || process.argv[3]=== " "){
//             userSong = "The Sign";
//         } else{
//                 userSong = process.argv[3] 
//             }

// spotify.search({ type: 'track', query: userSong }, function(err, data) {















