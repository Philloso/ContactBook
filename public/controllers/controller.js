//------------- set up http controller ----------------

var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    
//---------- refresh & update page ------------
    
    var refresh = function () {
        $http.get('/contactlist').success(function(response){
            console.log("I got the data I requested");
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };
    
    refresh();
    
    //----------- Add contact -----------
        
    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response);
            refresh();
        });
    };
    
    //----------- Delete contact -----------
    
    $scope.remove = function(id){
        console.log(id);
        $http.delete('/contactlist/' + id).success(function(response){
            refresh(); 
        });
    };
    
    //----------- Edit contact -----------
 
   $scope.edit = function(id){
        console.log(id);
        $http.get('/contactlist/' + id).success(function(response){
           $scope.contact = response;
        });
    };
    
       $scope.update = function(){
        console.log($scope.contact._id);
           $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
               refresh();
           })
    };
     
    $scope.deselect = function() {
        $scope.contact = "";
    }
    
    
}]);

