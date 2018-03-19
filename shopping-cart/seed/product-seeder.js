var Product = require('../models/product');
var mongoose = require('mongoose');

product_seeder = function () {
    var products = [
        new Product({
            imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnARxDvzduNeeOzc3uAPSgfNqUfph6QrwQ0drBuqblKE1NlPmgAQ',
            title: 'NewBalance 247',
            description: 'Your round-the-clock lifestyle calls for a shoe that optimizes both style and performance for superior versatility',
            price: 89
        }),
        new Product({
            imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81B%2BwFVXxIL._UX395_.jpg',
            title: 'NewBalance Fresh Foam Cuz',
            description: 'Your round-the-clock lifestyle calls for a shoe that optimizes both style and performance for superior versatility',
            price: 90
        }),
        new Product({
            imagePath: 'https://m.media-amazon.com/images/G/01/zappos/landing/pages/DanLand/Oct17/TC5._CB512979958_.jpg',
            title: 'NewBalance 574',
            description: 'Your round-the-clock lifestyle calls for a shoe that optimizes both style and performance for superior versatility',
            price: 65
        })
    ];

    var done = 0;
    for (var i = 0; i < products.length; i++) {
        products[i].save(function (err, result) {    
            done++;
            if (done === products.length) {
                //exit();
            }
        });
    }
    function exit() {
        mongoose.disconnect();
    }
}

module.exports = product_seeder;