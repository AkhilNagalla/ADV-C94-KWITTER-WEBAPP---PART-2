// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBJBLY0ABjz3ewDD1K9jZytnYfycSbXvm4",
      authDomain: "c-94-lets-chat-web-app-part-2.firebaseapp.com",
      projectId: "c-94-lets-chat-web-app-part-2",
      storageBucket: "c-94-lets-chat-web-app-part-2.appspot.com",
      messagingSenderId: "919548790105",
      appId: "1:919548790105:web:3962efec1387566b57f848"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function add_Room() {

      room_name = document.getElementById("room_name").value;

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });     
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();