var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {

            this.addNewGame = function (gameObj) {
                var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
                gameObj.won = false;

                parseInt(gameObj.homeTeamScore);
                parseInt(gameObj.opponentScore);
                if (gameObj.homeTeamScore > gameObj.opponentScore) {
                    gameObj.won = true;
                }

                return $http({
                    method: 'POST',
                    url: url,
                    data: gameObj

                })
            }
            
            this.getTeamData = function(team) {
                var promise = $q.defer();
                var url = 'https://api.parse.com/1/classes/' + team;
                $http({
                    get: 'GET',
                    url: url,
                    
                }).then(function(data){
                    var results = data.data.results;
                    var wins = 0;
                    var losses = 0;
                    for(var i =0; i < results.length; i++) {
                        if(results[i].won === true) {
                            wins ++;
                        } else {
                            losses ++;
                        }
                    }
                    results.wins = wins;
                    results.losses = losses;
                    promise.resolve(results); //what does this step mean exactly?
                    
                    
                    
                })
                return promise.promise;
            }

            });