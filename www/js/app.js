// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services',
  "ngAnimate",
  "ngCookies",
  "ngFx",
  'ionic-material',
  "ionicSettings",
  "ngResource",
  "ngCordova"
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider,$ionicSettingsConfigProvider) {
  $ionicConfigProvider.views.maxCache(5);
  $ionicConfigProvider.platform.ios.tabs.style('striped');
  //$ionicConfigProvider.platform.ios.tabs.position('bottom');
  //$ionicConfigProvider.platform.android.tabs.style('android');
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  //$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  //$ionicConfigProvider.platform.android.navBar.alignTitle('center');
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');


  $stateProvider
    //root
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller:'tab',
    controllerAs:"vm"
  })
    //主页
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'home',
        controllerAs:'vm'
      }
    }
  })
    //订单
  .state('tab.indent', {
      url: '/indent',
      views: {
        'tab-indent': {
          templateUrl: 'templates/tab-indent.html',
          controller: 'indent',
          controllerAs:"vm"
        }
      }
  })
    //账户
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'account',
        controllerAs:'vm'
      }
    }
  })
  //登录注册
  .state("sign",{
    url:"/sign",
    abstract:true,
    templateUrl:"templates/component/sign.html",
    controller:"sign",
    controllerAs:"vm"
  })
  //注册
  .state("sign.up",{
    url:"/up",
    templateUrl:"templates/component/sign-up.html",
    controller:"signUp",
    controllerAs:"vm"
  })
  //登录
  .state("sign.in",{
    url:"/in",
    templateUrl:"templates/component/sign-in.html",
    controller:"signIn",
    controllerAs:"vm"
  })
  //商店
  .state("store",{
    url:"/store",
    abstract:true,
    templateUrl:"templates/component/store.html",
    controller:"store",
    controllerAs:"vm"
  })
  //商品
  .state("store.wares",{
    url:"/wares",
    templateUrl:"templates/component/store-wares.html",
    controller:"wares",
    controllerAs:"vm"
  })
  //评价
  .state("store.valuation",{
    url:"/valuation",
    templateUrl:"templates/component/store-valuation.html",
    controller:"valuation",
    controllerAs:"vm"
  })
  //商家
  .state("store.business",{
    url:"/business",
    templateUrl:"templates/component/store-business.html",
    controller:"business",
    controllerAs:"vm"
  })
  //设置
  //.state('setting',{
  //  url:'/setting',
  //
  //})
  ;
  $ionicSettingsConfigProvider.setColor('assertive');
  $urlRouterProvider.otherwise('/tab/home');
  //$urlRouterProvider.otherwise('/sign/up');
  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
});
