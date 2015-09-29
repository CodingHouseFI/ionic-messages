angular.module('starter.services', ['firebase'])

.service('Firebase', function($firebaseObject, $firebaseArray){
  this.ref = new Firebase("https://<NOT-CADE'S-FIREBASE>.firebaseio.com/messages");
  this.messages = $firebaseArray(this.ref);

})
