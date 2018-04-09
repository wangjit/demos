function setRouter(app){ 
 var router = app; 

router.get('/loadMore', function(req, res) {
  var curNum = parseInt(req.query.curNum);
  var num = curNum + 5;
  var randomHs = [];
  for(var i = 0; i < 5; i++){
    var randomH = parseInt(Math.random()*3 + 1);
    randomHs.push('h' + randomH);
  }
  var data = {
    randomHs: randomHs,
    num: num
  };
  res.send(data)
});

}
 module.exports.setRouter = setRouter