const app = {

    init : function () {
        //quand l'appli démarre on affiche la date 
         display.date(); 
    }
    
}
 /* console.log(GetCurrentDate); */ 
//quand la page est lancé le jeux peut commencer 
//ecouteur d'evenement sur la page 
document.addEventListener('DOMContentLoaded', app.init);