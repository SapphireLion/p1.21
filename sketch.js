var myCanv,myDiv,myButton,myAss1,myAss2,myAss3,myAss4,myAss5,googleDIv;
let newsTitles=[];
let newsURLs=[];
let playlistPlayer;
var myPlaylist = ['OdZrFtIGzfU','pqiJ7krbEDM','Oi7WH7_NO9I'];
var myNews;
var startedApp;
let loginButton;
var tag = document.createElement('script');     
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var newsURL = "https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=31ac97faff7841a0beec5fcbeae608c9";
function preload()
{
    loadJSON(newsURL,gotData);
}

function gotData(data)
{
    myNews=data;
    //loadJSON("./credentials.JSON",gotDataGoogle);


}

function setup() {

    myCanv=createCanvas(1000, 500);
    myCanv.position(0,0);
}

function draw() {
    background(100,200,255);

if (myNews){
    var baseX=50;
   for (var i =0; i<5;i++){
       newsTitles[i]=myNews.articles[i].title;
       newsURLs[i]=myNews.articles[i].url;
   }
   myAss1 = createA(newsURLs[0],newsTitles[0]);
   myAss1.position(0,400);
   myAss1.size(250,100);


   myAss2 = createElement('a',newsTitles[1]);
   myAss2.position(200,400);
   myAss2.size(200,100);
   myAss2.attribute('href',newsURLs[1]);



   myAss3 = createElement('a',newsTitles[2]);
   myAss3.attribute('href',newsURLs[2]);
   myAss3.position(400,400);
   myAss3.size(200,100);


   myAss4 = createElement('a',newsTitles[3]);
   myAss4.attribute('href',newsURLs[3]);
   myAss4.position(600,400);
   myAss4.size(200,100);


    myAss5 = createElement('a',newsTitles[4]);
    myAss5.attribute('href',newsURLs[4]);
    myAss5.position(800,400);
    myAss5.size(200,100);

    textSize(20);
    text('News',0,365,200,450);
    fill(255);
    text('Playlist',675,130,1000,152);



}
myDiv=createDiv();
myDiv.size(320,195);
myDiv.position(680,152);
myDiv.id('YTDiv');
myDiv.attribute('src','https://www.youtube.com/iframe_api');
playlistPlayer = new YT.Player('YTDiv',{
    width: '320',
    height: '195',
    events: {
'onReady': onPlayerReady
    }
});
}


 /*
myButton=createElement('button',GetNews);
myButton.position(0,152);
myButton.size(150,50);
myButton.attribute('onClick','getNews(articleHolder)')
*/

//articleHolder = getNews();

    
    // 4. The API will call this function when the video player is ready
function onPlayerReady(event) {
event.target.cuePlaylist(myPlaylist);
}
