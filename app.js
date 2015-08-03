var myapp = angular.module('sortableApp', ['ui.sortable']);

myapp.controller('sortableController', function($scope){
  var tmpList = [];

  for(var i = 1; i < 15; i++){
    tmpList.push({text: 'Item' + i,
    value:i
    });
  }

  $scope.list = tmpList;

});
