//Es como una clase que representa una tarjeta
//Genera el HTML necesario para visulizar mis 
import { getDatabase, ref, push } from 'firebase/database';

export class postCard {

    constructor(post){
        this.post = post;   //Atributos siempre con this
    }

    //metodo para que me devuelva HTML y generar tarjeta
    render(){
        let card = document.createElement("div");
        card.className = "post-card";

        //Post original (texto)
        let message = document.createElement("p");
        message.className = "post-message"
        message.innerHTML = this.post.text;

        //@ del usuario que hizo la publicación
        let username = document.createElement("p");
        username.className = "post-username";
        username.innerHTML = "@" + this.post.nombre;

        //Donde se recibe la respuesta
        let answers = document.createElement("div");
        answers.className = "answers-card"

        //Input para responder
        let answer = document.createElement("input");
        answer.className = "answer-input";
        answer.placeholder = "Escribe una respuesta";

        //Boton para responder
        let answerBtn = document.createElement("button");
        answerBtn.className = "answer-button";
        answerBtn.innerHTML = "Responder";

        //Lo que sucede al presioanr el botón
        answerBtn.addEventListener("click", (e,ev)=>{
            //alert("Vamos a responder");
            //Obtener base de datos
            const db = getDatabase();
            const postRef = ref(db, 'posts/'+this.post.id+ '/comments');
            push(postRef, answer.value);
            addAnswer(this.post.comments);
        });


        function addAnswer(info){
            Object.keys(info).forEach((k, index)=>{
                let answerCard = document.createElement("div");
                answerCard.className = "answer-card";
                let answer = document.createElement("p");
                answer.className = "answer-text";
                answer.innerHTML = info[k];
                answerCard.appendChild(answer);
                answers.appendChild(answerCard);
            });
        }
       
        card.appendChild(message);
        card.appendChild(username);
        card.appendChild(answer);
        card.appendChild(answerBtn);
        addAnswer(this.post.comments);
        card.appendChild(answers);
        return card;
    }
}
