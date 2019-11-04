var myCanv,myDiv,myButton,myAss1,myAss2,myAss3,myAss4,myAss5,googleDIv;
var spotifyPlaylist, calendar, capture;
let newsTitles=[];
let newsURLs=[];

var myNews;
var startedApp;
let loginButton;
let button;
let bleh = false;
let health = false;
let mycanv;
let sq1;
let sq2;
let sq3;
var newsURL = "https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=31ac97faff7841a0beec5fcbeae608c9";
var myPlaylist = ['OdZrFtIGzfU','pqiJ7krbEDM','Oi7WH7_NO9I'];
let playlistPlayer;
  

var tag = document.createElement('script');   
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
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
    sq3 = square(0,0,0);
    sq1 = square(400,200,200);

    myCanv=createCanvas(1200, 650);
    myCanv.position(0,0);
    capture = createCapture(VIDEO);
    capture.size(600, 325);
    capture.hide();
    button = createButton("On");
    button.position(1100,600);
    button.mousePressed(start);

    spotifyPlaylist = createDiv();
    spotifyPlaylist.position(0,550);
    spotifyPlaylist.html('<iframe src="https://open.spotify.com/embed/playlist/0JkqL0FpWfJYOPBlAnNsvI" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
    calendar = createDiv();
    calendar.position(0, 0);
    calendar.html('<iframe src="https://calendar.google.com/calendar/embed?height=300&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=eWVsbG93dHJvbGw3N0BnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;color=%2333B679&amp;color=%230B8043&amp;showTitle=0&amp;showNav=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showTz=0" style="border-width:0" width="380" height="300" frameborder="0" scrolling="no"></iframe>');
    spotifyPlaylist.hide();
    calendar.hide();
}

function draw() {

    //camera stuff
    translate(width, 0);
    scale(-1.0, 1.0);
    image(capture, 0, 0, width, height);
    translate(width, 0);
    scale(-1.0, 1.0);
if(bleh == true)
    {
      
      spotifyPlaylist.show();
      calendar.show();
      fill(255,0,0);
      sq2 = square(1100,450,60,20);
      fill(51);
      text("Health",1100,485);
      textFont("georgia");
      h = hour();
      m = minute();
      mon = month();
      y = year();
      d = day();
      if(h>12)
      {
        h= h-12;
    
        if(m<10)
          {
            textSize(32);
            text(h +':0'+ m +' PM', 1000,50);
            textSize(16);
            text(mon + '/' + d + '/' + y, 1027, 70);
          }
        else
        {
          textSize(32);
          text(h +':'+ m + ' PM', 1000,50);
          textSize(16);
          text(mon + '/' + d + '/' + y,1027,70);
      
        }
    }
    else
    {
      if(m<10)
      {
        textSize(32);
        text(h +':0'+ m +' AM', 1000,50);
        textSize(16);
        text(mon + '/' + d + '/' + y,1027,70);
      }
      else
      {
        textSize(32);
        text(h +':'+ m + ' AM', 1000,50);
        textSize(16);
        text(mon + '/' + d + '/' + y,1027,70);
      }
    }
    if(health == true)
    {
      sq3 = square(1000,400,195);
      fill(255,255,255);
      text("X",1000,412);
      text("Calories Eaten Today: 2850",1000,430);
      text("Steps walked Today: 5,285",1000,445);
      text("sleep last night: 6 hours",1000,460);
      text("Weekly Calories: 20,500",1000,530);
      text("Weekly Steps: 37,836",1000,545);
      text("Weekly Sleep: 41 hours",1000,560);
    }
    if(health == false)
    {
      sq3 = square(0,0,0);
    }
    
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
function start()
{
  bleh = true;
  button = createButton("Off")
  button.position(1100,600);
  button.mousePressed(stop);
}
function stop()
{
  bleh = false
  button = createButton("On");
  button.position(1100,600);
  button.mousePressed(start);
  spotifyPlaylist.hide();
  calendar.hide();
}
function mousePressed()
{
  if(mouseX>1050 && mouseX<1150 && mouseY>390 && mouseY<510)
  {
    if(health == false)
    {
      health = true;
    }
  }
  if (mouseX>950 && mouseX<1050 && mouseY>400 && mouseY<430)
    {
      health = false;
    }
    
  
}
