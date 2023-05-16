const firebaseConfig = {
    apiKey: "AIzaSyDDTsNzRiBUNE2gAJbkguGGp4qNqi8FvB8",
    authDomain: "project-fatec.firebaseapp.com",
    databaseURL: "https://project-fatec-default-rtdb.firebaseio.com",
    projectId: "project-fatec",
    storageBucket: "project-fatec.appspot.com",
    messagingSenderId: "275311102092",
    appId: "1:275311102092:web:556d294a5549dd8d2d93a9"
  };

  // Inicializando o firebase
  firebase.initializeApp(firebaseConfig)

  // efetuar a ligação com firebase
const database = firebase.database()