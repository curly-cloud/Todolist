const display = {
//Display date 
/* addDateToDOM: function() {
    
   }, */
     date : function(fullDate) {
        //recupérer la date d'ajourd'hui
        const currentDate =  new Date();
        const options = { 
        weekday: 'long', 
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
        };
        fullDate = currentDate.toLocaleDateString('fr-FR', options);
       //Selection de l'id
        let dateOfDay = document.querySelector('#date-full');
        //insertion
        dateOfDay.innerHTML = fullDate; 
        return fullDate;
    } 
}

