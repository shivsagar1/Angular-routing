/**
 * Created by Shiv Sagar on 4/20/2016.
 */
(function(){
    angular.module('app').controller('UserListCntrl',UserListCntrl);
    UserListCntrl.$inject = ['dataservice'];
    function UserListCntrl(dataservice){
        var userListVm = this;

        dataservice
            .getUsers()
            .then(function(data){
            userListVm.users = data;
        },function(error){
            console.log(error);
        });

        console.log("userlistcontroller");
    }
})()