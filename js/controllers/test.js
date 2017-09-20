angular.module('testApp', ['ui.bootstrap']).controller('TestController', ['$scope','$http', function($scope,$http) {
  
  $scope.list=[]
  $scope.comments=[]
 
    function init(){
      $scope.setItemsPerPage(5);
      $scope.setPage(1);
      $scope.peticion('test.php');
    }


    $scope.peticion = function (url) {
      $http.get(url)
        .then(function(response) {
          $scope.list = response.data;
          $scope.setTotalItems($scope.list.length);
      });
    };

    $scope.setItemsPerPage = function (items) {
      $scope.itemsPerPage = items;
    };

    $scope.setTotalItems = function (totalitems) {
      $scope.totalItems = totalitems;
    };

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);
    };

    init();


    $scope.Comments=function(postid){
      console.log($scope.test='https://jsonplaceholder.typicode.com/posts/'+postid+'/comments');
      $http.get('https://jsonplaceholder.typicode.com/posts/'+postid+'/comments')
        .then(function(response) {
          $scope.comments = response.data;
      });
    }
}]);
    
 
