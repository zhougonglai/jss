angular.module("store",[])
.controller("store",function($scope,$ionicScrollDelegate){
  var vm = this;
  vm.title='商铺';
  var header = document.getElementById("store-header"),
  storeBack = document.getElementById("store-back"),
  storeTitle = document.getElementById("store-title"),
  storeTools  = document.getElementById("store-tools"),
  storeTool = storeTools.getElementsByTagName("button");
  var storeHandle = $ionicScrollDelegate.$getByHandle("store-header");
  header.style.backgroundColor = "RGBA(255,255,255,0)";
  storeTitle.style.opacity = 0;
  storeBack.style.color = "RGBA(255,255,255,1)";
  storeTool[0].style.color = "RGBA(255,255,255,1)";
  storeTool[1].style.color = "RGBA(255,255,255,1)";
  var changeNumber = 110;


  vm.onScroll = function(){
    storeHandle.getScrollPosition().top<=0?(function(){
      storeBack.style.color = "RGBA(255,255,255,1)";
      storeTool[0].style.color = "RGBA(255,255,255,1)";
      storeTool[1].style.color = "RGBA(255,255,255,1)";
      header.style.backgroundColor = "RGBA(0,0,0,0)";
      storeTitle.style.opacity = 0;
    })():(function(top){
      ((top/changeNumber)<=1)?(function(level){
        header.style.backgroundColor = "RGBA(255,255,255,"+level+")";
        storeBack.style.color = "RGBA("+255*(1-level)+","+255*(1-level)+","+255*(1-level)+",1)";
        storeTool[0].style.color = "RGBA("+255*(1-level)+","+255*(1-level)+","+255*(1-level)+",1)";
        storeTool[1].style.color = "RGBA("+255*(1-level)+","+255*(1-level)+","+255*(1-level)+",1)";
        storeTitle.style.opacity = level;
        $ionicScrollDelegate.freezeScroll(false);
      })(top/changeNumber):(function(){
        header.style.backgroundColor = "RGBA(255,255,255,1)";
        storeBack.style.color = "RGBA(0,0,0,1)";
        storeTool[0].style.color = "RGBA(0,0,0,1)";
        storeTool[1].style.color = "RGBA(0,0,0,1)";
        storeTitle.style.opacity = 1;
        $ionicScrollDelegate.freezeScroll(true);
      })();
    })(storeHandle.getScrollPosition().top)
  };

  $scope.setStateView = function(view){
    vm.stateView = ('store.wares' == view)?true:false;
  };
})
.controller("wares",function($scope,$state){
  var vm = this;
  vm.title = "商品";
  $scope.setStateView($state.$current.name);
})
.controller("valuation",function($scope,$state){
  var vm = this;
  vm.title = "评价";
  $scope.setStateView($state.$current.name);
})
.controller("business",function($scope,$state){
  var vm = this;
  vm.title="商家";
  $scope.setStateView($state.$current.name);
})
;
