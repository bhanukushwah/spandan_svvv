
function checkEvent(eName){
  if(sessionStorage.SpandanSessionValue){
    initialSS=sessionStorage.SpandanSessionValue;
    readFirebaseData();
    var eventName;
    var eventFBName;
  if(eName==1){
    var eventFBName="taal"
    writeUserEventData(eventFBName);
    jQuery("#modal-1").removeClass("md-show");
  }
  else if (eName==2) {
    var eventFBName="swaranjali"
    writeUserEventData(eventFBName);
    jQuery("#modal-2").removeClass("md-show");
  }
  else if (eName==3) {
    var eventFBName="ambriti"
    writeUserEventData(eventFBName);
    jQuery("#modal-3").removeClass("md-show");
  }
  else if (eName==4) {
    var eventFBName="navyata"
    writeUserEventData(eventFBName);
    jQuery("#modal-4").removeClass("md-show");
  }
  else if (eName==5) {
    var eventFBName="mime"
    writeUserEventData(eventFBName);
    jQuery("#modal-5").removeClass("md-show");
  }
  else if (eName==6) {
    var eventFBName="kavyanjali"
    writeUserEventData(eventFBName);
    jQuery("#modal-6").removeClass("md-show");
  }
  else if (eName==7) {
    var eventFBName="firelesscooking"
    writeUserEventData(eventFBName);
    jQuery("#modal-7").removeClass("md-show");
  }
  else if (eName==8) {
    var eventFBName="doodle"
    writeUserEventData(eventFBName);
    jQuery("#modal-8").removeClass("md-show");
  }
  else if (eName==9) {
    var eventFBName="rj"
    writeUserEventData(eventFBName);
    jQuery("#modal-9").removeClass("md-show");
  }
  else if (eName==10) {
    var eventFBName="kandal"
    writeUserEventData(eventFBName);
    jQuery("#modal-10").removeClass("md-show");
  }
  else if (eName==11) {
    var eventFBName="facepaint"
    writeUserEventData(eventFBName);
    jQuery("#modal-11").removeClass("md-show");
  }
  else if (eName==12) {
    var eventFBName="rachnakriti"
    writeUserEventData(eventFBName);
    jQuery("#modal-12").removeClass("md-show");
  }
  else if (eName==13) {
    var eventFBName="chitrang"
    writeUserEventData(eventFBName);
    jQuery("#modal-13").removeClass("md-show");
  }
  else if (eName==14) {
    var eventFBName="blog"
    writeUserEventData(eventFBName);
    jQuery("#modal-14").removeClass("md-show");
  }
  else if (eName==15) {
    var eventFBName="editor"
    writeUserEventData(eventFBName);
    jQuery("#modal-15").removeClass("md-show");
  }
  else if (eName==16) {
    var eventFBName="finearts"
    writeUserEventData(eventFBName);
    jQuery("#modal-16").removeClass("md-show");
  }
  else if (eName==17) {
    var eventFBName="shortfilm"
    writeUserEventData(eventFBName);
    jQuery("#modal-17").removeClass("md-show");
  }
  else if (eName==18) {
    var eventFBName="mrmsspandan"
    writeUserEventData(eventFBName);
    jQuery("#modal-18").removeClass("md-show");
  }
  else if (eName==19) {
    var eventFBName="treasurehunt"
    writeUserEventData(eventFBName);
    jQuery("#modal-19").removeClass("md-show");
  }
}
else{
  fb_login();
  }
}

function writeUserEventData(eventFBName){
  console.log("writingData");
  SPevents.push(eventFBName);
  firebase.database().ref('events/' + eventFBName+'/'+initialSS).update({
    spid:spandanId
  });
  firebase.database().ref('users/' + initialSS).update({
    events: SPevents
  });
  userFeedback();
}

function userFeedback(){
  var arrayLength = SPevents.length;
  for (var i = 0; i < arrayLength; i++) {
    eventCompleted(SPevents[i]);
    }
}
var changerVar='<a onclick="" class="learn-more-btn btn-effect wow animated fadeIn" data-wow-duration="0.5s" data-wow-delay="1.5s">Registered<i class="fa fa-check"></i></a>';
function eventCompleted(marker){
  if(marker=="taal"){
    document.getElementById("event-1").innerHTML=changerVar;
  }
  else if (marker=="swaranjali") {
    document.getElementById("event-2").innerHTML=changerVar;
  }
  else if (marker=="ambriti") {
    document.getElementById("event-3").innerHTML=changerVar;
  }
  else if (marker=="navyata") {
    document.getElementById("event-4").innerHTML=changerVar;
  }
  else if (marker=="mime") {
    document.getElementById("event-5").innerHTML=changerVar;
  }
  else if (marker=="kavyanjali") {
    document.getElementById("event-6").innerHTML=changerVar;
  }
  else if (marker=="firelesscooking") {
    document.getElementById("event-7").innerHTML=changerVar;
  }
  else if (marker=="doodle") {
    document.getElementById("event-8").innerHTML=changerVar;
  }
  else if (marker=="rj") {
    document.getElementById("event-9").innerHTML=changerVar;
  }
  else if (marker=="kandal") {
    document.getElementById("event-10").innerHTML=changerVar;
  }
  else if (marker=="facepaint") {
    document.getElementById("event-11").innerHTML=changerVar;
  }
  else if (marker=="rachnakriti") {
    document.getElementById("event-12").innerHTML=changerVar;
  }
  else if (marker=="chitrang") {
    document.getElementById("event-13").innerHTML=changerVar;
  }
  else if (marker=="blog") {
    document.getElementById("event-14").innerHTML=changerVar;
  }
  else if (marker=="editor") {
    document.getElementById("event-15").innerHTML=changerVar;
  }
  else if (marker=="finearts") {
    document.getElementById("event-16").innerHTML=changerVar;
  }
  else if (marker=="shortfilm") {
    document.getElementById("event-17").innerHTML=changerVar;
  }
  else if (marker=="mrmsspandan") {
    document.getElementById("event-18").innerHTML=changerVar;
  }
  else if (marker=="treasurehunt") {
    document.getElementById("event-19").innerHTML=changerVar;
  }
}

function readFirebaseData(){
  var leadsRef = database.ref('users');
  leadsRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      if (initialSS==childData['fbid']){
        spandanId=childData['spid'];
        SPevents=childData['events'];
      }
   });
 },function(error){console.log(error);});
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
   initialSS=sessionStorage.SpandanSessionValue;
   readFirebaseData();
   setTimeout(function() {
    userFeedback();}, 5000);
