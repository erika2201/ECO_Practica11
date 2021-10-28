
import{initializeApp} from "firebase/app";
import{getDatabase, ref, set, onValue} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";


//Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);


//REGISTRAR PUBLICACIONES
//Metodo registrar publiciones
function postRegister (post){
    //Obtener base de datos
    const db = getDatabase();
    const dbRef = ref(db, 'posts/' + post.nombre);

    set(dbRef, post);
}


//Metodo para lista de candidatos
function getPost(){
    const db = getDatabase();
    const dbRef = ref(db, 'posts');

    //Leer (algo parecido a un observer)
    onValue(dbRef, (snapshot)=>{
        const data = snapshot.val();
        console.log(data);
        currentList(data);
    });
}

function currentList(info){
    let text = "";
    //Me da el arreglo de las llaves de un objeto
    Object.keys(info).forEach((k,index)=>{
        console.log(k, index);
        text += "ID:" +info[k].id1+ "   Nombre: " +info[k].nombre + "\n";
    });
         alert(text);
}


//Instancias de los objetos
const nombre = document.getElementById("nombre");
const text = document.getElementById("text");
const publicBtn = document.getElementById("publicBtn");

const answer = document.getElementById("answer");
const answerBtn = document.getElementById("answerBtn");

const answer2 = document.getElementById("answer2");
const answerBtn2 = document.getElementById("answerBtn2");


//Metodo creación del usuario como un objeto
const eventPost = (e, event) =>{
    //Creación del objeto, es lo que le envip al firebase
    const post = {
        nombre: nombre.value,
        text: text.value
    }
    postRegister(post);
}


//Clicks
publicBtn.addEventListener('click', eventPost);
//answerBtn.addEventListener('click',eventAnswer);
//answerBtn2.addEventListener('click', eventAnswer2);
//voteListBtn.addEventListener('click', verVotaciones);



