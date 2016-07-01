angular.module('starter.controllers', ["homeCtrl","indentCtrl","accountCtrl","sign","store"])
.controller("tab",function ($scope,$state,$ionicModal,ionicMaterialInk) {
  var vm = this;
  vm.toggleMenu = true;

  $ionicModal.fromTemplateUrl('templates/component/setting.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModel = function(){
    $scope.modal.show();
  };
  $scope.closeModel = function(){
    $scope.modal.hide();
  };
  $scope.$on("$ionicView.enter",function(e){
    ionicMaterialInk.displayEffect();
  });
});
