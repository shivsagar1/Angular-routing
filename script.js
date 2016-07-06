/**
 * Created by Shiv Sagar on 4/20/2016.
 */

(function(){
angular.module('app',['ngRoute']).config(moduleConfig);
    moduleConfig.$inject= ['$routeProvider'];
    function moduleConfig($routeProvider){
        $routeProvider
            .when('/users',{
                templateUrl:'users.templ.html',
                controller:'UserListCntrl',
                controllerAs:'userListVm'
            })
            .when('/pictures',{
            templateUrl:'pictures.templ.html',
            controller:'PictureListCntrl',
            controllerAs:'pictureListVm'
        })
            .otherwise({
                redirectTo:'/users'
            });
    }





})()