
import{initializeApp} from "firebase/app";
import{getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import{postCard} from "./postcard";

//Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);


//REGISTRAR PUBLICACIONES
//Metodo registrar publiciones
function postRegister (post){
    //Obtener base de datos
    const db = getDatabase();
    const newPostRef = push(ref(db, 'posts'));

    //creo el post en la posición id
    //Injectar el id
    post["id"] = newPostRef.key

    set(newPostRef, post);
}


//Metodo para lista de candidatos
function getPost(){
    const db = getDatabase();
    const dbRef = ref(db, 'posts');

    //Leer (algo parecido a un observer)
    onValue(dbRef, (snapshot)=>{
        const data = snapshot.val();
        currentList(data);
    });
}

function currentList(info){
    if(info){
        postList.innerHTML = "";
        //Me da el arreglo de las llaves de un objeto
        Object.keys(info).forEach((k,index)=>{
            console.log(k, index);
            //Crear objeto de la clase postCard
            const card = new postCard(info[k]);

            postList.appendChild(card.render());
        });
            
    }else{
            postList.innerHTML = "No hay publicaciones";
    }
    
}


//Instancias de los objetos
const nombre = document.getElementById("nombre");
const text = document.getElementById("text");
const publicBtn = document.getElementById("publicBtn");
const postList = document.getElementById("postList");


//Metodo creación del usuario como un objeto
const eventPost = (e, event) =>{
    //Creación del objeto, es lo que le envip al firebase
    const post = {
        nombre: nombre.value,
        text: text.value,
        comments: ""
    }
    postRegister(post);
}


//Clicks
publicBtn.addEventListener('click', eventPost);
getPost();



