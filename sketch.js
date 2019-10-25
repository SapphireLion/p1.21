/// 2. This code loads the IFrame Player API code asynchronously.
var myCanv,myDiv,myAss;
var tag = document.createElement('script');
let playlistPlayer;
var myPlaylist = ['OdZrFtIGzfU','pqiJ7krbEDM','Oi7WH7_NO9I']
      
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function preload()
{

}
function setup() {
    
    myCanv=createCanvas(1000, 500);
    myCanv.position(0,0);

}

function draw() {
background(100,200,255);

myDiv=createDiv();
myDiv.size(320,195);
myDiv.position(680,152);
myDiv.id('texas');
playlistPlayer = new YT.Player('texas',{
    width: '320',
    height: '195',
    events: {
   'onReady': onPlayerReady
    }
 });
 myAss=createElement('a','Hatsune Miku');
 myAss.size(250,300);
 myAss.position(0,100);
 myAss.class("twitter-timeline");
 myAss.attribute('href','https://twitter.com/cfm_miku_en');

}

    
    // 4. The API will call this function when the video player is ready
function onPlayerReady(event) {
event.target.cuePlaylist(myPlaylist);
}
        
function stopVideo() {
player.stopVideo();
}