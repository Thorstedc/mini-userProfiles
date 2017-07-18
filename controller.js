angular.module('userprofiles').controller('MainController', function($scope, mainSrvc){

    $scope.thisAppIsBroken = "This angular app is working";
   $scope.getUsers = function() {
     $scope.users = mainSrvc.getUsers();
   }

   $scope.getUsers();
   $scope.toggleFavorite = mainSrvc.toggleFavorite;
})
