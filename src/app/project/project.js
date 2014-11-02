angular.module( 'portfolioApp.project', [
    'ui.router'
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'project', {
        url: '/project/:projectId',
        views: {
            "main": {
                controller: 'ProjectCtrl',
                templateUrl: 'project/project.tpl.html'
            }
        },
        data:{ pageTitle: 'Home' }
    });
})

.controller( 'ProjectCtrl', function ProjectCtrl( $scope, $stateParams, Project ) {
    $scope.project = Project.get({id: $stateParams.projectId});
    $scope.nav = Project.nav();
})

;
