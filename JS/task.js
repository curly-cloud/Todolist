const task = {
handleFormSubmit:function (event) {
     // On bloque le comportement par défaut du formulaire. 
     event.preventDefault();
      // On sélectionne l'input
      const input = document.querySelector('#text');
      //recuperation de la valeur de l'input
     const fieldTask = input.value;
     if(!fieldTask){
          alert("please add a task baby")
          return;
     }
     //creation d'un élément div 
     const taskElement = document.createElement ("div");
     //ajout d'une class 
     taskElement.classList.add("task");
     //un autre element
     const taskContentEl = document.createElement("div");
     //ajout d'une class 
     taskContentEl.classList.add("content");
     /* //ajout texte
     taskContentEl.innerHTML= fieldTask; */
     //ajout taskContentEl  à son  parent taskElement
     taskElement.appendChild(taskContentEl);
     //ajout de l'input à l'élément 
     const taskInputEl = document.createElement("input");
     taskInputEl.classList.add("text-task");
     taskInputEl.type = "text";
     taskInputEl.value = fieldTask; 
     taskInputEl.setAttribute("readonly","readonly");
     taskContentEl.appendChild(taskInputEl);
      // On sélectionne le formulaire
       const taskList = document.querySelector('#task-list'); 
       taskList.appendChild(taskElement);
    
} 
}