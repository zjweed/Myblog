var express = require("express");

var router = express.Router();

//bing图片API
function getUri(start, number, mkt) {
    return 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=' + start + '&n=' + number + '&mkt=' + mkt
}

//获取图片
function getWallpaper(res, days_ago, mkt) {
    let uri;
    if (days_ago <= 7){
        uri = getUri(days_ago, 1, mkt)
    }else {
        uri = getUri(7, days_ago-6, mkt)
    }
    request(uri, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let data = JSON.parse(body);
            let images = data.images;
            res.redirect('https://www.bing.com'+images[images.length-1].url)
        }else{
            res.send('request error!')
        }
    })
}

//获取一个随机数
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* get getimage/rand */
router.get("/rand", function(req, res) {
  let days_ago = getRandomInteger(0,15);
  var mkt = getRandomInteger(0,1) ? 'zh-CN' : 'en-US';
  getWallpaper(res, days_ago, mkt)
});
/* get getimage */
router.get("/", function(req, res) {
  let days_ago = req.query.days_ago || 0;
  let mkt = req.query.mkt || 'zh-CN';
  getWallpaper(res, days_ago, mkt)
});

module.exports = router;
