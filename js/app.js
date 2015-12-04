var signUp = angular.module('signUp',[]);

signUp.directive('optIn', function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/signUp.html'
    };
});
