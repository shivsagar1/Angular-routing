/**
 * Created by Shiv Sagar on 4/20/2016.
 */
(function(){
    angular.module('app').controller('PictureListCntrl',PictureListCntrl);
    PictureListCntrl.$inject = ['dataservice'];
    function PictureListCntrl(dataservice){
        var pictureListVm = this;

        dataservice.getPictures()
            .then(function(data){
                pictureListVm.picture = data;
                console.log(pictureListVm.picture);
            },function(error){
                console.log(error);
            });
        console.log("PictureListCntrl");
    }
})()