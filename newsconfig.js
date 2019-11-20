var newsURL = "https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=<yourkeyhere>";

loadJSON(newsURL,gotData);


function gotNewsData(data)
{
    myNews=data;
    //loadJSON("./credentials.JSON",gotDataGoogle);


}
