var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function (req, res, next) {
  var productChunks = [];
  var chunkSize = 3;
  Product.find({}, function (err, docs) {
    console.log(docs);
    if (err) {
      console.log(err);
    } else {
      for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
      }
    }
  });
  res.render('shop/index', { title: 'Shopping cart', products: productChunks });
});

router.get('/user/signup',function(req,res,next){
  res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.post('/user/signup',function(req,res,next){
  console.log('aaaa');
  res.redirect('/');
});

module.exports = router;
