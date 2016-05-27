var games = angular.module("games", []);

games.controller("riskController", ["$scope", function($scope){
   var randomNumber = Math.random();

   rng = function(){
      if (randomNumber > 0 && randomNumber <= 1/6){
         return 1;
      } else if (randomNumber > 1/6 && randomNumber <= 1/3) {
         return 2;
      } else if (randomNumber > 1/3 && randomNumber <= 0.5) {
         return 3;
      } else if (randomNumber > 0.5 && randomNumber <= 2/3){
         return 4;
      } else if (randomNumber > 2/3 && randomNumber <= 5/6) {
         return 5;
      } else {
         return 6;
      };
   };

   var attackerDie = document.getElementsByClassName("attacker-die");
   var defenderDie = document.getElementsByClassName("defender-die");
   var attackerButton = document.getElementsByClassName("attacker-button");
   var defenderButton = document.getElementsByClassName("defender-button");
   var attackerReady = false;
   var defenderReady = false;
   var attackCounter = 0;
   var defenderCounter = 0;

   attackerButton[0].addEventListener("click", function(){
      attackerReady = !attackerReady;
      if(attackCounter === 0){
         attackerButton[0].classList.remove("btn-warning");
         attackerButton[0].classList.add("btn-success");
         attackerButton[0].textContent = "Attacker Ready!";
         attackCounter++;
      } else {
         attackerButton[0].classList.remove("btn-success");
         attackerButton[0].classList.add("btn-warning");
         attackerButton[0].textContent = "Attacker Ready?";
         attackCounter--;
      }
   });

   defenderButton[0].addEventListener("click", function(){
      defenderReady = !defenderReady;
      if(defenderCounter === 0){
         defenderButton[0].classList.remove("btn-warning");
         defenderButton[0].classList.add("btn-success");
         defenderButton[0].textContent = "Defender Ready!";
         defenderCounter++;
      } else {
         defenderButton[0].classList.remove("btn-success");
         defenderButton[0].classList.add("btn-warning");
         defenderButton[0].textContent = "Defender Ready?"
         defenderCounter--;
      }
   });

}]);
