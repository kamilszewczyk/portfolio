angular.module( 'portfolioApp.contact', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'contact', {
        url: '/contact',
        views: {
            "main": {
                controller: 'ContactCtrl',
                templateUrl: 'contact/contact.tpl.html'
            }
        },
        data:{ pageTitle: 'Contact me' }
    });
})

.controller( 'ContactCtrl', function ContactCtrl( $scope ) {
    $scope.success = false;
    $scope.error = false;
    $scope.send = function () {
        console.log('test');
        var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
            '<div>Email: ' + $scope.user.email + '</div>' +
            '<div>Message: ' + $scope.user.body + '</div>' +
            '<div>Date: ' + (new Date()).toString() + '</div>';

    }
});
