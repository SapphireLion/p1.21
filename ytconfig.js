/// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');     
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    
    // 4. The API will call this function when the video player is ready
    function onPlayerReady(event) {
        event.target.cuePlaylist(myPlaylist);
        }
        