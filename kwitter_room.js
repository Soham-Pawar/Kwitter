var firebaseConfig = {
      apiKey: "AIzaSyAAVf5NcIlG5Aa59vNSTLMf8mtuIGehw2s",
      authDomain: "kwitter-e1026.firebaseapp.com",
      databaseURL: "https://kwitter-e1026-default-rtdb.firebaseio.com",
      projectId: "kwitter-e1026",
      storageBucket: "kwitter-e1026.appspot.com",
      messagingSenderId: "960305043630",
      appId: "1:960305043630:web:56202082bcb3202a13753f",
      measurementId: "G-0VT6T0RK9V"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function add_room(){
room_name = document.getElementById("kwitter_room_input").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
console.log(room_name);
} 


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name: " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirect_to_room_name(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function redirect_to_room_name(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
function Logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}