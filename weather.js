var weatherdat;
var tempData;
var Degrees;
var img;
var IconURLstrt = 'http://openweathermap.org/img/wn/';
var IconURLend = '@2x.png';
var IconURLID = '01d';
var IconURL; 

function preload(){
  weatherdat = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=lubbock&units=imperial&APPID=461042a064362a0e8faa93b05482d204');
}

function setup() {
  createCanvas(150, 150);
  IconURLID = weatherdat.weather[0].icon;
  IconURL = IconURLstrt + IconURLID + IconURLend;
  img = loadImage(IconURL);
  setInterval(updateweather, 40000);
  setInterval(draw, 200);
}

function draw() {
background(200);
image(img, 0, 0);
tempData= round(weatherdat.main.temp);
Degrees = tempData + '°';
IconURLID = weatherdat.weather[0].icon;
IconURL = IconURLstrt + IconURLID + IconURLend;
textSize(16);
textAlign(CENTER);
textStyle(BOLD);
fill(150, 150, 150);
text(Degrees, 52, 55);
noLoop();
}

function updateweather(){
  weatherdat = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=lubbock&units=imperial&APPID=461042a064362a0e8faa93b05482d204');
}
