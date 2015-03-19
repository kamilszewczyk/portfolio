angular.module('portfolioApp', [
    'templates-app',
    'templates-common',
    'ngSanitize',
    'portfolioApp.home',
    'portfolioApp.project',
    'portfolioApp.about',
    'portfolioApp.contact',
    'ui.router',
    'projectService',
    'angulartics',
    'angulartics.google.analytics'
])

.config(function config($locationProvider, $urlRouterProvider, $analyticsProvider) {
    $urlRouterProvider.otherwise( '/home' );
    $locationProvider.html5Mode({
        enabled: true
    });
    $analyticsProvider.firstPageview(true);
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $window, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | Kamil Szewczyk Magento Certified Developer' ;
        }
    });

    $scope.closeMenu = function() {
        if (jQuery('#nav-toggle').is(':visible')) {
            jQuery("#nav-content").collapse("toggle");
            $scope.isNavOpen = !$scope.isNavOpen;
        }
    };

    if ($window.outerWidth > 900) {
        $scope.toggle = true;
    } else {
        $scope.toggle = false;
    }
})
;

