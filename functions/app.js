function tellTime()
{
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var secs = now.getSeconds();
    console.log(hour+" : "+minute+" : "+secs);
}

tellTime();