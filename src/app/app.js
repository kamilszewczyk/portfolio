angular.module('portfolioApp', [
    'templates-app',
    'templates-common',
    'ngSanitize',
    'portfolioApp.home',
    'portfolioApp.project',
    'portfolioApp.about',
    'portfolioApp.contact',
    'ui.router',
    'projectService'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                if ( angular.isDefined( toState.data.pageTitle ) ) {
                        $scope.pageTitle = toState.data.pageTitle + ' | Kamil Szewczyk Magento Certified Developer' ;
                }
        });
})

;

