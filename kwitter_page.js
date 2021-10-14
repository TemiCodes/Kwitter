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
//YOUR FIREBASE LINKS
username=localStorage.getItem("Username")
roomname=localStorage.getItem("Room_name")
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,message:msg,like:0
      })
      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data);
name=message_data['name']
message=message_data['message']
like=message_data['like']
name1="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
message1="<h4 class='message_h4'>"+message+"</h4>"
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>"
join=name1+message1+like_button+span_tag;
document.getElementById("output").innerHTML = join



//End code
      } });  }); }
      
getData();
function logout() {
      localStorage.removeItem("Username")
      localStorage.removeItem("Room_name")
      window.location = "index.html"
}
function updateLike(firebase_message_id) {
      console.log("button clicked="+firebase_message_id);
      button_id=firebase_message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(roomname).child(firebase_message_id).update({
            like:updated_likes
      })
}