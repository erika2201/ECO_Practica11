const firebaseConfig = {
    apiKey: "AIzaSyDpy5B2LVZHen7Bvv4b-BsUvmp5CaGel5E",
    authDomain: "eco-semana11.firebaseapp.com",
    databaseURL: "https://eco-semana11-default-rtdb.firebaseio.com",
    projectId: "eco-semana11",
    storageBucket: "eco-semana11.appspot.com",
    messagingSenderId: "1080884975436",
    appId: "1:1080884975436:web:a1c7f52960f8fc598da1e9"
  };

export function getFirebaseConfig(){
    if(!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    }else{
        return firebaseConfig;
    }
  }