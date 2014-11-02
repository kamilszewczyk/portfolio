var projectService = angular.module('projectService', ['ngResource']);
projectService.factory('Project', ['$resource', '$location',
    function($resource, $location){
        return $resource('assets/data/:id.json', {id: '@id'}, {
            query: {method:'GET', params:{id:'projects'}, isArray:true},
            get: {method: 'GET'},
            nav: {
                method: 'GET',
                params: {id:'projects'},
                transformResponse: function(data) {
                    var id = $location.path().split('/').pop();
                    data = angular.fromJson(data);

                    for (var i in data) {
                        if (data[i].id == id) {
                            break;
                        }
                    }

                    return {
                        'prev': data[(i == parseInt(0, 10)) ? parseInt(data.length, 10) - 1 : parseInt(i, 10) - 1],
                        'next': data[(i == parseInt(data.length, 10) - 1) ? 0 : parseInt(i, 10) + 1]
                    };
                }
            }
        });
    }]);