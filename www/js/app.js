//TravalBudhha App
//Author: Bijay Mishra


angular.module('starter', ['ionic'])
.config(function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "app/layout/menu.html",
        controller:"MenuController"       
    })
    .state('tabs', {
      url: "/tab",
      
      templateUrl: "templates/tabs.html"
    })
     .state('invite', {
      url: "/invite",
          templateUrl: "app/invite/invite.html",
          controller: 'InviteCtrl'
     })
      .state('loginIntro', {
      url: "/loginIntro",
          templateUrl: "app/authontication/loginIntro.html",
          controller: 'AuthCtrl'
     })
      .state('login', {
      url: "/login",
          templateUrl: "app/authontication/login.html",
          controller: 'AuthCtrl'
     })
      .state('signup', {
      url: "/signup",
          templateUrl: "app/authontication/signup.html",
          controller: 'AuthCtrl'
     })
    
      /* Home*/
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "app/home/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    /* Home -> pages*/


     /* Home -> pages ->localHomeChef*/
    .state('tabs.localHomeChef', {
      url: "/localHomeChef",
      views: {
        'home-tab': {
          templateUrl: "app/localHomeChef/localHomeChef.html",
          controller:"localHomeChefCtrl"
        }
      }
    })
    /* Home -> pages ->Find localHomeChef*/
    .state('tabs.findLocalHomeChef', {
      url: "/findLocalHomeChef",
      views: {
        'home-tab': {
          templateUrl: "app/findChefs/findChefs.html",
          controller:"findChefsCtrl"
        },
        'menu-left@tabs': {
          templateUrl: "app/layout/menu.html",
          controller:"findChefsCtrl"
            }
      }
    })
    /* Home -> pages ->peopleNearMe*/
     .state('tabs.peopleNearMe', {
      url: "/peopleNearMe",
      views: {
        'home-tab': {
          templateUrl: "app/peopleNearMe/peopleNearMe.html"
        },
        'menu-left@tabs': {
          templateUrl: "app/findCoTraveller/cotravellerfilter.html",
          controller:"coTravellersCtrl"
          }
      }
    })
     /* Home -> pages ->theWall*/
     .state('tabs.theWall', {
      url: "/theWall",
      views: {
        'home-tab': {
          templateUrl: "app/theWall/theWall.html",
          controller:"theWallCtrl"
        },
        'menu-left@tabs': {
          templateUrl: "app/theWall/wallfilter.html",
          controller:"localHomeChefCtrl"
            }
 
      }
    })
      /* Home -> pages ->travelBook*/
     .state('tabs.travelBook', {
      url: "/travelBook",
      views: {
        'home-tab': {
          templateUrl: "app/travelBook/travelBook.html"
        }
      }
    })
      /* Home -> pages ->coTravellers*/
     .state('tabs.coTravellers', {
      url: "/coTravellers",
      views: {
        'home-tab': {
          templateUrl: "app/coTravellers/coTravellers.html"
        }
      }
    })
    /* Home -> pages ->Find coTravellers*/
     .state('tabs.findCoTravellers', {
      url: "/findCoTravellers",
      views: {
        'home-tab': {
          templateUrl: "app/findCoTraveller/findCoTraveller.html"
        },
        'menu-left@tabs': {
          templateUrl: "app/findCoTraveller/cotravellerfilter.html",
          controller:"coTravellersCtrl"
            }
      }
    })
    /*  Message */

    .state('tabs.message', {
      url: "/message",
      views: {
        'message-tab': {
          templateUrl: "app/message/message.html",
          controller: 'MessageTabCtrl'
        }
      }
    })

    /*  Notification */

    .state('tabs.notice', {
      url: "/notice",
      views: {
        'notice-tab': {
          templateUrl: "app/notification/notification.html",
          controller: 'NotificationTabCtrl'
        }
      }
    })
      
    /*  Profile */

    .state('tabs.profile', {
      url: "/profile",
      views: {
        'profile-tab': {
          templateUrl: "app/profile/profile.html",
          controller: 'ProfileTabCtrl'
        }
      }
    })
    /*  Fevorite */

    .state('tabs.fevorite', {
      url: "/fevorite",
      views: {
        'fevorite-tab': {
          templateUrl: "app/fevorite/fevorite.html",
          controller: 'FevoriteTabCtrl'
        }
      }
    });
    
   $urlRouterProvider.otherwise("invite");

});
