const app = {

    init : function () {
        //quand l'appli démarre on affiche la date 
         display.date(); 
           //selection du formulaire

       // On sélectionne le formulaire
       const form = document.querySelector('.form');
       //on pause un ecouteur d'evenement sur le formulaire     
      form.addEventListener('submit',task.handleFormSubmit);
      /*  //ajout des bouttons
      task.handleButton();   */ 
    }
    
}
//quand la page est lancé le jeu peut commencer 
//ecouteur d'evenement sur la page 
document.addEventListener('DOMContentLoaded', app.init);