function login() {
    Username=document.getElementById("Username").value
    localStorage.setItem("Username",Username)
    window.location="kwitter_room.html"
}
y