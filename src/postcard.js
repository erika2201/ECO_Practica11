//Es como una clase que representa una tarjeta
//Genera el HTML necesario para visulizar mis posts

export class postCard {

    constructor(post){
        this.post = post;   //Atributos siempre con this
    }

    //metodo para que me devuelva HTML y generar tarjeta
    render(){
        let card = document.createElement("div");
        card.className = "postCard";
       

        return card;
    }



}
