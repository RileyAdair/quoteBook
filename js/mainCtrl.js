angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {

  $scope.quotes = dataService.quotes;

  $scope.deleteMe = function(textToDelete) {
    dataService.removeData(textToDelete);
  }

  $scope.addQuote = function(newQuote) {
    dataService.addData(newQuote);
    if(newQuote)
    {
      $scope.newQuote = {};
    }
  }
});
