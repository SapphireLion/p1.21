var weatherdat;
var tempData;
var weatherCond;
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
  createCanvas(windowWidth, windowHeight);
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
weatherCond= weatherdat.weather[0].description;
Degrees = tempData + '°';
IconURLID = weatherdat.weather[0].icon;
IconURL = IconURLstrt + IconURLID + IconURLend;
textSize(24);
text(weatherCond, 22, 20);
textSize(14);
text(Degrees, 6, 55);
noLoop();
}

function updateweather(){
  weatherdat = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=lubbock&units=imperial&APPID=461042a064362a0e8faa93b05482d204');
}
