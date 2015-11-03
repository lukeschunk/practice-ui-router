var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $stateParams, teamService, teamData){
    $scope.teamData = teamData;
    $scope.newGame = {};
    $scope.showNewGameForm = false;
    
    console.log($scope);
    $scope.toggleNewGameForm = function() {
        return !$scope.showNewGameForm
    }
    
    if($stateParams.team === "utahjazz") {
        $scope.homeTeam = "Utah Jazz";
        $scope.logoPath = "images/jazz-logo.png";
    }
    
    if($stateParams.team === "losangeleslakers") {
        $scope.homeTeam = "Los Angeles Lakers";
        $scope.logoPath = "images/lakers-logo.png";
    }
    
    if($stateParams.team === "miamiheat") {
        $scope.homeTeam = "Miami Heat";
        $scope.logoPath = "images/heat-logo"
    }
    
    $scope.submitGame = function() {
        $scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLocaleLowerCase();
    }
    
    teamService.addNewGame($scope.newGame)
        .then(function($scope.newGame.homeTeam){
            teamService.getTeamData();
    })
});