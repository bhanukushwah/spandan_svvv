
function checkEvent(eName){
  if(sessionStorage.SpandanSessionValue){
    initialSS=sessionStorage.SpandanSessionValue;
    readFirebaseData();
    var eventName;
    var eventFBName;
  if(eName==1){
    var eventName="Taal - The Dance Competition"
    var eventFBName="taal"
    writeUserEventData(eventFBName);
    jQuery("#modal-1").removeClass("md-show");
  }
  else if (eName==2) {
    var eventName="Swaranjali - The Singing Competition"
    var eventFBName="swaranjali"
    writeUserEventData(eventFBName);
    jQuery("#modal-2").removeClass("md-show");
  }
  else if (eName==3) {
    var eventName="Ambriti - The Fashion Show"
    var eventFBName="ambriti"
    writeUserEventData(eventFBName);
    jQuery("#modal-3").removeClass("md-show");
  }
}
else{
  fb_login();
  }
}

function writeUserEventData(eventFBName){
  firebase.database().ref('events/' + eventFBName+'/'+initialSS).update({
    spid:spandanId
  });
  firebase.database().ref('users/' + initialSS).update({
    events: SPevents+","+eventFBName
  });
}
function myMain(){
  jQuery("#modal-3").removeClass("md-show");
}

function readFirebaseData(){
  var leadsRef = database.ref('users');
  leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      if (initialSS==childData['fbid']){
        spandanId=childData['spid'];
        SPevents=childData['events'];
      }
   });
 });
}

function firebasekaAuth(){
  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function fb_login(){
    FB.login( function(response) {checkLoginState();}, { scope: 'public_profile,email' } );
 }
function checkLoginState() {
 FB.getLoginStatus(function(response) {
   statusChangeCallback(response);
   console.log(response);
 });
  function statusChangeCallback(response) {
   if (response.status === 'connected') {
     // Logged into your app and Facebook.
     facebookMain();
      } else {
        console.log("Please log into Facebook");
        // The person is not logged into your app or we are unable to tell.
      //document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
    }
  }
}

function checkFirebaseData(){
  var leadsRef = database.ref('users');
  leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      if (initialSS==childData['fbid']){
        var uid=childData['fbid'];
        sessionStorage.SpandanSessionValue=uid;
        window.location.href = "events.html";
      }
   });
 });
}
function checkerSession(){
  if(sessionStorage.SpandanSessionValue){}
  else{
     console.log("form pe ja");
     sessionStorage.tokenEdit=true;
     window.location.href = "form.html";
  }
}

function facebookMain() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me','GET',{"fields":"id,name,picture.width(400).height(400),email,hometown"},
    function(response) {
      console.log('Successful login for: ' + response.name);
      var uid=response.id;
      initialSS=uid;
      checkFirebaseData();
      checkerSession();
    });
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAiOppk8kOawDGEp5QJ8vk4y5mOFwRKqzU",
  authDomain: "spandan-3f863.firebaseapp.com",
  databaseURL: "https://spandan-3f863.firebaseio.com",
  projectId: "spandan-3f863",
  storageBucket: "spandan-3f863.appspot.com",
  messagingSenderId: "285489957582"
};
firebase.initializeApp(config);

//FACEBOOK
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1771257743178792',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   //ENDS INITIALIZATION
   firebasekaAuth();
   var database = firebase.database();
   var spandanId;
   var initialSS;
   var SPevents;
