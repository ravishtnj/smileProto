angular.module('starter.controllers', ['starter.services'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ShopsCtrl',function($scope,Shops){
  $scope.shops = Shops.query();
    $scope.showList = true;
    
  $scope.showOnList = function()
  {
    $scope.showList = true;
    $scope.showMap = false;
  } 

  $scope.showOnMap = function()
  {
    $scope.showList = false;
    $scope.showMap = true;
  }


})

.controller('MapCtrl', function($scope, $ionicLoading, $compile,Shops) {
      function initialize() {
       
 
         var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        $scope.shops = Shops.query();

 console.log ("map control called");

        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
                  console.log('map controller invoked');

        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
 


      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
    })

.controller ('ShopCtrl',function($scope,$stateParams,Shops){
  $scope.shop = Shops.get({shopId:$stateParams.id});
});