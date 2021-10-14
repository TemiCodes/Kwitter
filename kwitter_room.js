const firebaseConfig = {
      apiKey: "AIzaSyAneAszzEAWsEHoww20gNNBX5y_ZMjAMaU",
      authDomain: "practice-b737e.firebaseapp.com",
      databaseURL: "https://practice-b737e-default-rtdb.firebaseio.com",
      projectId: "practice-b737e",
      storageBucket: "practice-b737e.appspot.com",
      messagingSenderId: "512690968119",
      appId: "1:512690968119:web:28b269fbc28d5c2cbf51b2"
    };
    
    // Initialize Firebase
    
    const app = firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("Username")
document.getElementById("Username").innerHTML = "Welcome " + username+"!"
function Add_room() {
      Room_name=document.getElementById("Roomname").value
      firebase.database().ref("/").child(Room_name).update({
            purpose:"addroom"
      })
      localStorage.setItem("Room_name",Room_name)
      window.location="kwitter_page.html"
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); } getData(); function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
      window.location = "index.html"
}

