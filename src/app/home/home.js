/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'portfolioApp.home', [
    'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
    $stateProvider.state( 'home', {
        url: '/home',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data:{ pageTitle: 'Home' }
    });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope ) {
    $scope.projects = [
        {
            'id': 'artintheage',
            'name': 'Art in the Age',
            'img': 'artintheage.jpg',
            'url': 'http://www.artintheage.com/'
        },
        {
            'id': 'my-asho',
            'name': 'My Asho',
            'img': 'asho.jpg',
            'url': 'http://www.myasho.com/'
        },
        {
            'id': 'audiogo',
            'name': 'AudioGo',
            'img': 'audiogo.jpg'
        },
        {
            'id': 'autopilot',
            'name': 'Autopilot',
            'img': 'autopilot.jpg'
        },
        {
            'id': 'bijougraphie',
            'name': 'Bijougraphie',
            'img': 'bijougraphie.jpg',
            'url': 'http://bijougraphie.com/'
        },
        {
            'id': 'bike-swanky',
            'name': 'Bike Swanky',
            'img': 'bikeswanky.jpg',
            'ult': 'https://www.bikeswanky.co.uk/'
        },
        {
            'id': 'bonobos',
            'name': 'Bonobos',
            'img': 'bonobos.jpg',
            'url': 'http://www.bonobos.com/'
        },
        {
            'id': 'call-center-school',
            'name': 'Call Center School',
            'img': 'callcenterschool.jpg',
            'url': 'https://www.thecallcenterschool.com/'
        },
        {
            'id': 'caws',
            'name': 'CAWS',
            'img': 'caws.jpg',
            'url': 'http://caws.ca/'
        },
        {
            'id': 'cienen',
            'name': 'Cienen',
            'img': 'cienen.jpg',
            'url': 'http://www.cienen.com/'
        },
        {
            'id': 'cool-material',
            'name': 'Cool Material',
            'img': 'coolmaterial.jpg',
            'url': 'http://coolmaterial.com'
        },
        {
            'id': 'dealer-direct-parts',
            'name': 'Dealer Direct Parts',
            'img': 'dealerdirectparts.jpg',
            'url': 'http://www.dealerdirectparts.com/'
        },
        {
            'id': 'eternal-snow',
            'name': 'Eternal Snow',
            'img': 'eternalsnow.jpg',
            'url': 'http://www.eternalsnow.com/'
        },
        {
            'id': 'homeq',
            'name': 'Homeq',
            'img': 'homeq.jpg',
            'url': 'http://www.homeq.com.au/'
        },
        {
            'id': 'interbaden',
            'name': 'Interbaden',
            'img': 'interbaden.jpg',
            'url': 'http://www.interbaden.nl/'
        },
        {
            'id': 'kidsongs',
            'name': 'Kidsongs',
            'img': 'kidsongs.jpg',
            'url': 'http://www.kidsongs.com/'
        },
        {
            'id': 'listrak',
            'name': 'Listrak',
            'img': 'listrak.jpg',
            'url': 'http://www.listrak.com/'
        },
        {
            'id': 'luggage-online',
            'name': 'Luggage Online',
            'img': 'luggageonline.jpg',
            'url': 'http://www.luggageonline.com/'
        },
        {
            'id': 'nautical-cross',
            'name': 'Nautical Cross',
            'img': 'nauticalcross.jpg',
            'url': 'http://www.nauticalcross.com/'
        },
        {
            'id': 'roku',
            'name': 'Roku',
            'img': 'roku.jpg',
            'url': 'https://www.roku.com'
        },
        {
            'id': 'sailor-jerry',
            'name': 'Sailor Jerry',
            'img': 'sailorjerry.jpg',
            'url': 'http://sailorjerry.com/'
        },
        {
            'id': 'salespro',
            'name': 'SalesPro',
            'img': 'salespro.jpg',
            'url': 'http://savtechnology.com/'
        },
        {
            'id': 'salonmonster',
            'name': 'SalonMonster',
            'img': 'salonmonster.jpg',
            'url': 'https://salonmonster.com/'
        },
        {
            'id': 'smart-earth',
            'name': 'Smart Earth',
            'img': 'smartearth.jpg',
            'url': 'http://smartearthlubricants.com/'
        },
        {
            'id': 'sourpuss',
            'name': 'Sourpuss',
            'img': 'sourpuss.jpg',
            'url': 'http://sourpussclothing.com/'
        },
        {
            'id': 'sutherland-consulting',
            'name': 'Sutherland Consulting',
            'img': 'sutherlandconsulting.jpg'
        },
        {
            'id': 'toddle',
            'name': 'Toddle',
            'img': 'toddle.jpg',
            'url': 'http://www.toddle.com/'
        },
        {
            'id': 'tom-shiffman-photo',
            'name': 'Tom Shiffman Photograpgy',
            'img': 'tomshiffmanphoto.jpg',
            'url': 'http://tomshiffmanphoto.com/'
        },
        {
            'id': 'wise-bites',
            'name': 'Wise Bites',
            'img': 'wise-bites.jpg',
            'url': 'http://wise-bites.com/'
        },
        {
            'id': 'youth-juice',
            'name': 'Youth Juice',
            'img': 'youthjuice.jpg',
            'url': 'http://youthjuice.com/'
        }
    ];
})

;

