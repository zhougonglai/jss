angular.module("accountCtrl",[])
.controller('account', function($scope,ionicMaterialInk,$ionicNavBarDelegate,$state,$ionicSettings,$ionicPopup) {
  var vm = this;
  vm.title = "用户";
  var settings = {
    language: {
      type: 'selection',
      values: ['英文','简体中文'],
      label: '语言设置',
      icon:"ion-android-globe",
      value: '简体中文'
    },
    safety:{
      type:"button",
      label:"账号与安全",
      icon:"ion-lock-combination",
      onClick:function(){

      }
    },
    quality:{
      type:'selection',
      icon:"ion-images",
      values:['普通','高'],
      label:"非WIFI下图片质量",
      value:"普通"
    },
    clear:{
      type:"selection",
      icon:"ion-android-delete",
      values:['132M'],
      label:"清理缓存",
      value:"132M"
    },
    checkUpdate:{
      type:"button",
      icon:"ion-android-cloud-circle",
      label:"检查更新",
      onClick:function(){

      }
    },
    about:{
      type:"button",
      label:"关于集食送",
      icon:"ion-android-alert",
      onClick:function(){

      }
    },
    pin: {
      type: 'pin',
      label: '安全锁',
      icon:"ion-android-lock",
      value:'',
      onValid: function() {
        $ionicPopup.alert({
          title: '成功登入',
          template: '恭喜'
        });
      },
      onInvalid: function($event, wrongPinValue) {
        $ionicPopup.alert({
          title: '失败',
          template: '输入值:' + wrongPinValue + '!错误.'
        });
      }
    },
    logout:{
      type:"button",
      label:"退出当前账号",
      icon:"ion-log-out",
      onClick:function(){

      }
    }
  };
  $ionicSettings.init(settings);
  vm.openSetting = function(){
    $scope.openModel();
  };
  $scope.closeSetting = function(){
    $scope.closeModel();
  };
  $scope.$on($ionicSettings.changed, function($event, changedSetting) {
    console.log(changedSetting.key + ' -> ' + changedSetting.value);
  });

  $scope.$on("$ionicView.enter",function(e){
    $ionicSettings.init(settings);
    $ionicNavBarDelegate.showBar(false);
    ionicMaterialInk.displayEffect();
  });
});
