angular.module('homeCtrl', [])
.controller('home', function($scope,ionicMaterialInk,$ionicScrollDelegate,$ionicNavBarDelegate,$state) {
  var vm = this;
  vm.title="主页";
  vm.barStyle = 0;
  vm.slides = [
    {
      title : "Slide 1",
      data  : "Slide 1 Content"
    },{
      title : "Slide 2",
      data  : "Slide 2 Content"
    }
  ];
  var header = document.getElementById("header").style;
  var search = document.getElementById("search").style;
  var corver = document.getElementById("corver").style;
  header.backgroundColor = "RGBA(201, 33, 56,0)";
  search.backgroundColor = corver.backgroundColor= "RGBA(0,0,0,.6)";
  var changeNumber = 205;
  vm.scrollContent = function(){
    $ionicScrollDelegate.$getByHandle("homeContent").getScrollPosition().top<=0?(function(){
      header.backgroundColor = "RGBA(201, 33, 56,0)";
      search.backgroundColor = corver.backgroundColor= "RGBA(0,0,0,.6)";
    })($ionicScrollDelegate.$getByHandle("homeContent").getScrollPosition().top) :
      (function(top){
        ((top/changeNumber)>0.5)?(function(){//>0.5
          if(top>=changeNumber){
            header.backgroundColor = "RGBA(201, 33, 56,1)";
          }else{
            header.backgroundColor = "RGBA(201, 33, 56,"+(top/changeNumber)+")";
          }
          search.backgroundColor = corver.backgroundColor= "RGBA(0,0,0,0)";
        })():(function(){//<0.5
          header.backgroundColor = "RGBA(201, 33, 56,"+(top/changeNumber)+")";
        })();
      })($ionicScrollDelegate.$getByHandle("homeContent").getScrollPosition().top);

  };



  $scope.$on("$ionicView.enter",function(e){
    $ionicNavBarDelegate.showBar(false);
    ionicMaterialInk.displayEffect();
  });
});
