let MyController = function($scope) {

  $scope.count = 0;
  $scope.message = 'likes';
  $scope.incrementByOne = function () {
    $scope.count ++;
    $scope.message = ($scope.count === 1) ? 'like' : 'likes';

  };

};

MyController.$inject = ['$scope'];

export default MyController;




  // let $scope.likeWd = function() {
  //   if ($scope.count === 1) {
  //     return 'like';
  //   } else {
  //     return 'likes';
  //   }
  // };


// if($scope.numLikes.length === 1){
//   return "like " + $scope.numLikes.length;
// }



  // $scope.name = "Tim";

  // $scope.doSomething = function () {
  //   $scope.name = "Bob";
  // };


  // let numLikes = function() {
  //   return 0;
  // };

  // let likeWd = function() {
  //   if($scope === '1') {
  //     return "like";
  //   } else {
  //     return "likes";
  //   }
  // };


  // $scope.likeObjs=[];

  // $scope.addLike = function() {
  //   $scope.likeObjs.push('like');
  // }

  // console.log(likeObjs.length);