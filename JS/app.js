const app = {
    init : function () {
        console.log("le jeu peut commencer ");
    }
}
//quand la page est lancé le jeux peut commencer 
//ecouteur d'evenement sur la page 
document.addEventListener('DOMContentLoaded', app.init);