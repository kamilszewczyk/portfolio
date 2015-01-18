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

.controller( 'ContactCtrl', function ContactCtrl( $scope, $http ) {
    $scope.success = false;
    $scope.error = false;
    $scope.send = function () {
        var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
            '<div>Email: ' + $scope.user.email + '</div>' +
            '<div>Message: ' + $scope.user.body + '</div>' +
            '<div>Date: ' + (new Date()).toString() + '</div>';

        $http({
            url: 'sendgrid.php',
            method: 'POST',
            data: {
                'from': $scope.user.email,
                'fromName': $scope.user.name,
                'body': htmlBody,
                'subject': 'New Contact Form Submission'
            }
        }).
            success(function (data) {
                $scope.success = true;
                $scope.user = {};
            }).
            error(function (data) {
                $scope.error = true;
            });
    };
});
