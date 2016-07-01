angular.module("sign",[])
.controller("sign",function($scope){
  var vm = this;
  vm.title="登录";
  $scope.$on("$ionicView.enter",function(e){

  });
})
.controller("signUp",function($scope){
  var vm = this;
  vm.title="注册";


})
.controller("signIn",function($scope){
  var vm = this;
  vm.title = "登录";
})

;
