// ==UserScript==
// @name        mailinator notification
// @match       https://www.mailinator.com/inbox.jsp?*
// @description Show desktop notification and play sound when there is new mail
// @version     0.1
// @grant       none
// @namespace   https://greasyfork.org/users/4947
// ==/UserScript==

Notification.requestPermission();

angular.element(document).ready(function(){

  var audio = new Audio('http://tomato-timer.com/ding.mp3');
  var inboxCtrl=document.getElementById('InboxCtrl');
  var $scope=angular.element(inboxCtrl).scope();

  function spawnNotification(theBody,theTitle) {
    var options = {
      body: theBody
    }
    var n = new Notification(theTitle,options);
  }

  $scope.$watch('emails', function(newEmails, oldEmails){
//     console.log(newEmails)
//     console.log(oldEmails)
    if(newEmails.length > oldEmails.length){
      var email=newEmails[0];
      var body=email.from;
      var title=email.subject;
      spawnNotification(body,title);
      audio.play();
    }
  }, true);

});
