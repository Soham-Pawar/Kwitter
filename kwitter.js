function add_user(){
    user_name = document.getElementById("kwitter_input").value;
    localStorage.setItem ("user_name",user_name);
    window.location = "kwitter_room.html";
}