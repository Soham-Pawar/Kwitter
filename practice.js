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

  function Add_User(){
  User_Name = document.getElementById("User_name").value;
  firebase.database().ref("/").child(User_Name).update({
    purpose : "add_user"
});
}