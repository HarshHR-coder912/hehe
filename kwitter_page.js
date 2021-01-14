 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBXOG9fvcI6vz4kcOIGIKXTQOCUXWvTrBI",
    authDomain: "letschatwebpage.firebaseapp.com",
    databaseURL: "https://letschatwebpage-default-rtdb.firebaseio.com",
    projectId: "letschatwebpage",
    storageBucket: "letschatwebpage.appspot.com",
    messagingSenderId: "411383048934",
    appId: "1:411383048934:web:0738cf70a9bc595b78e927"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}