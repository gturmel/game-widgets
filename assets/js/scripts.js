var games = angular.module("games", []);

games.controller("riskController", ["$scope", function($scope){
   var randomNumber = Math.random();

   rng = function(){
      if (randomNumber > 0 && randomNumber <= 1/6){
      console.log('1');
      } else if (randomNumber > 1/6 && randomNumber <= 1/3) {
         console.log('2');
      } else if (randomNumber > 1/3 && randomNumber <= 0.5) {
         console.log('3');
      } else if (randomNumber > 0.5 && randomNumber <= 2/3){
         console.log('4');
      } else if (randomNumber > 2/3 && randomNumber <= 5/6) {
         console.log('5');
      } else {
         console.log('6');
      };
   };
   rng();
   
}]);
