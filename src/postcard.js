//Es como una clase que representa una tarjeta
//Genera el HTML necesario para visulizar mis 


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

        //Input para responder
        let answer = document.createElement("input");
        answer.className = "answer-input";
        answer.placeholder = "Escribe una respuesta";

        //@ del usuario que hizo la publicación
        let username = document.createElement("p");
        username.className = "post-username";
        username.innerHTML = "@" + this.post.nombre;

        //Boton para responder
        let answerBtn = document.createElement("button");
        answerBtn.className = "answer-button";
        answerBtn.innerHTML = "Responder";

       
        card.appendChild(message);
        card.appendChild(username);
        card.appendChild(answer);
        card.appendChild(answerBtn);
        return card;
    }
}
