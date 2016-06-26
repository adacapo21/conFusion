'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            $scope.showMenu = false;
            $scope.message = "Loading ...";
            menuFactory.getDishes().query(
                function(response) {
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });

            //$scope.dishes = menuFactory.getDishes().query();
            //$scope.dishes= [];
            //menuFactory.getDishes()
            //    .then(
            //        function(response) {
            //            $scope.dishes = response.data;
            //            $scope.showMenu = true;
            //        },
            //        function(response) {
            //            $scope.message = "Error: "+response.status + " " + response.statusText;
            //        }
            //    );

                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
            $scope.showDish = false;
            $scope.message="Loading ...";
            $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
                .$promise.then(
                    function(response){
                        $scope.dish = response;
                        $scope.showDish = true;
                    },
                    function(response) {
                        $scope.message = "Error: "+response.status + " " + response.statusText;
                    }
                );
            //$scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)});
            //$scope.dish = {};
            //$scope.showDish = false;
            //$scope.message="Loading ...";
            //menuFactory.getDish(parseInt($stateParams.id,10))
            //    .then(
            //        function(response){
            //            $scope.dish = response.data;
            //            $scope.showDish=true;
            //        },
            //        function(response) {
            //            $scope.message = "Error: "+response.status + " " + response.statusText;
            //        }
            //    );
            
        }])

        .controller('DishCommentController', ['$scope', function($scope) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                
                $scope.dish.comments.push($scope.mycomment);
                
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            }
        }])

        // ---- TASK 2 -----
        // implement the IndexController and About Controller here

        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function ($scope, menuFactory, corporateFactory) {

            // get random featured dish from array of dishes
            $scope.showDish = false;
            $scope.message="Loading ...";
            $scope.featured = menuFactory.getDishes().get({id:0})
                .$promise.then(
                    function(response){
                        $scope.featured = response;
                        $scope.showDish = true;
                    },
                    function(response) {
                        $scope.message = "Error: "+response.status + " " + response.statusText;
                    }
                );
            //$scope.featured = menuFactory.getDishes().get({id:0});
            //$scope.featured = {};
            //
            //menuFactory.getDish(0)
            //    .then(
            //        function(response){
            //            $scope.featured = response.data;
            //            $scope.showDish = true;
            //        }
            //    );
            //$scope.featured = menuFactory.getDish(getRandom(menuFactory.getDishes().length));
            $scope.promotion = menuFactory.getPromotion(0);
            $scope.execChef = corporateFactory.getLeader(3);

            function getRandom(max) {
                return Math.floor(Math.random() * max);
            }
        }])
        .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {

            $scope.leadership = corporateFactory.getLeaders();
        }])


;
