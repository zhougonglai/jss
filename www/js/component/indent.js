angular.module("indentCtrl",[])
.controller('indent', function($scope,ionicMaterialInk) {
  var vm = this;
  vm.title="订单";
  vm.index = 1;
  ionicMaterialInk.displayEffect();
});
