/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Shop = require('../api/shop/shop.model');

Shop.find({}).remove(function () {
  Shop.create({
      name: "Kunstspätkauf",
      address: "Schlesische Str. 19, 10997 Berlin",
      stock: 100,
      latitude: 52.49861,
      longitude: 13.446149999999989,
      image: "assets/images/yeoman.png",
      link: "http://www.google.de/",
      createdAt: "2013-10-22T09:34:23.519Z",
      updatedAt: "2013-10-31T13:24:23.236Z"
    },
    {
      name: "Fulda Getränke",
      address: "Fuldastr. 53, 12043 Berlin-Neukölln",
      stock: 100,
      latitude: 52.48369,
      longitude: 13.435249999999996,
      image: "assets/images/yeoman.png",
      link: "http://www.google.de/",
      createdAt: "2013-10-22T09:30:15.516Z",
      updatedAt: "2013-10-30T15:20:53.392Z"
    },
    {
      name: "Fachschaft Charité im Hexenhaus",
      address: "Philippstraße 12 10115 Berlin",
      description: "Lorem Ipsum",
      stock: 100,
      latitude: 52.5250862,
      longitude: 13.38128329999995,
      image: "assets/images/yeoman.png",
      link: "http://www.google.de/",
      createdAt: "2013-11-04T08:55:04.063Z",
      updatedAt: "2013-11-04T08:55:04.715Z"
    },
    {
      "name": "KIKISOL",
      "address": "Lindowertsr. 12 13347 Berlin",
      "description": "im alten und im neuen KIKI SOL",
      "stock": 0,
      "image": "assets/images/yeoman.png",
      "link": "http://www.google.de/",
      "latitude": 52.54416209999999,
      "longitude": 13.36886949999996
    });
});

User.find({}).remove(function () {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function () {
      console.log('finished populating users');
    }
  );
});
