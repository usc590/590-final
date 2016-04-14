angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {})

.controller('Location2Ctrl', function($scope) {})

.controller('LandingCtrl', function($scope) {})

.controller('SigninCtrl', function($scope, $state) {
  appid='FMILdtYBYwjMDL5nibDw4CCbDIrSjpmXhQtBi8Ja';
jskey='CzbqlAl0cKKi97AkWLQIR8nCzwDk33ef8YG7v9FG';
Parse.initialize(appid,
                   jskey);


var self = this;

$scope.login=function() {
  
  console.log(self.Email);

  Parse.User.logIn(self.Email, self.Password, {
  success: function(user) {
    // Do stuff after successful login.
    console.log("logged in");
    $state.go("tab.location");
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});

}

})

.controller('OrderCtrl', function($scope) {})

.controller('RegisterCtrl', function($scope, $state) {

  appid='FMILdtYBYwjMDL5nibDw4CCbDIrSjpmXhQtBi8Ja';
jskey='CzbqlAl0cKKi97AkWLQIR8nCzwDk33ef8YG7v9FG';
Parse.initialize(appid,jskey);
  var self = this;

$scope.register=function() {
  
  console.log(self.email);
var user = new Parse.User();
user.set("username", self.Email);
user.set("password", self.Password);
user.set("FirstName", self.FirstName);
user.set("LastName", self.LastName);
user.set("email", self.Email);
user.set("AccountType", "Customer");

// other fields can be set just like with Parse.Object
//user.set("phone", "415-392-0202");

user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    console.log("registered success");
    $state.go('tab.location');
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});
}
})

.controller('OwnerRegister2Ctrl', function($scope, $state) {

})
.controller('OwnerRegisterCtrl', function($scope, $state) {

  appid='FMILdtYBYwjMDL5nibDw4CCbDIrSjpmXhQtBi8Ja';
jskey='CzbqlAl0cKKi97AkWLQIR8nCzwDk33ef8YG7v9FG';
Parse.initialize(appid,jskey);
  var self = this;

$scope.register=function() {
  
  console.log(self.email);
var user = new Parse.User();
user.set("username", self.Email);
user.set("password", self.Password);
user.set("FirstName", self.FirstName);
user.set("LastName", self.LastName);
user.set("email", self.Email);
user.set("AccountType", "Owner");

// other fields can be set just like with Parse.Object
//user.set("phone", "415-392-0202");

user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    console.log("registered success");
    $state.go('tab.location');
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});
}
})

.controller('AddItemCtrl', function($scope, $state) {
  var self = this;
  $scope.save = function(){
    var Product = Parse.Object.extend("Product");
var p = new Product();

p.set("name", self.productName);
p.set("price", parseFloat(self.price));
p.set("quantity", parseFloat(self.quantity));


p.save(null, {
  success: function(p) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + p.id);
  },
  error: function(p, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
  });
  }
})

.controller('MenusCtrl', function($scope, Menus) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.menus = Menus.all();
  $scope.remove = function(menu) {
    Menus.remove(menu);
  };
})

.controller('MenuDetailCtrl', function($scope, $stateParams, Menus) {
  $scope.menu = Menus.get($stateParams.menuId);
})

.controller('LocationCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
 google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });      
 
  /*var infoWindow = new google.maps.InfoWindow({
      content: "Here I am!"
  });*/
 var infoWindow = new google.maps.InfoWindow({
      content: "Store Menu: <a href='wwww.google.com'>google</a> <br \> Rating: n/a <br \> Delivery: Yes"
  });
 
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
  });
 
});
 
  }, function(error){
    console.log("Could not get location");
  });
})

.controller('AccountCtrl', function($scope, $state, $ionicPopup,  $cordovaGeolocation) {

appid='bvibaxG5n4qhvhhNnxlQQK5NtXtNpqQBFkr8njhu';
jskey='7IBicVZhTUQoX90luVnWQUge617Gs7Zu2bPVrDic';
Parse.initialize(appid,
                   jskey);

var Product= Parse.Object.extend("Product");
var query= new Parse.Query(Product);
query.find().then(function(objs){
  console.log(objs.length + "icecreams");
});

  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  })
   // When button is clicked, the popup will be shown...
   $scope.showPopup = function() {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: 'Title',
         subTitle: 'Subtitle',
         scope: $scope,
      
         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Save</b>',
               type: 'button-positive',
                  onTap: function(e) {
            
                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
            }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };


var self = this;
$scope.tran=function() {
  console.log("clicked");
  $state.go('/tab.tab2.location2');

}

$scope.locationOn = function() {
  console.log("location toggled");

}
$scope.login=function() {
  
  $state.go('landing');

}
$scope.register=function() {
  
  console.log(self.email);
var user = new Parse.User();
user.set("username", self.email);
user.set("password", self.password);
user.set("email", self.email);

// other fields can be set just like with Parse.Object
//user.set("phone", "415-392-0202");

user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    console.log("registered success");
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});


}

});


