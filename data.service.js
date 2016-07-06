/**
 * Created by Shiv Sagar on 4/21/2016.
 */

(function(){
    angular.module('app')
        .service('dataservice',dataservice);

    dataservice.$inject = ['$http','$q'];
    function dataservice($http,$q){
    var self = this;
        self.getUsers = function(){

            var defer = $q.defer();
        $http
            .get('users.json')
            .then(function(response){
            console.log(response.data);
                defer.resolve(response.data);

            },function(error){
                console.log(error);
                defer.reject(error.status)
            });

            return defer.promise;
        };
        self.getPictures = function() {

            var defer = $q.defer();

            $http
                .get('pictures.json')
                .then(function(response){
                 console.log(response.data);
                  defer.resolve(response.data);
                },function(error){
                   console.log(error)
                    defer.reject(error.status)
                });
                    return defer.promise;
        };
    }
})();