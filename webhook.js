var express = require("express");
var child_process = require("child_process");

var router = express.Router();

/* POST webhook */
router.post("/", function(req, res, next) {
  var std = "Now deploying!"
    child_process.execFile("build.bat",[],{ 
      env : {
        PATH : process.env.PATH,
        HOME : process.env.HOME
      }
    },function(err,stderr,stdout){
      console.log(err,stderr,stdout);
    });

  res.send(std);
});

module.exports = router;