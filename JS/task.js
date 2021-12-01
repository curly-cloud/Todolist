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

       //ajout des boutons 
         //1 créer une div avec sa class
         const taskActions = document.createElement("div");
         taskActions.classList.add("actions");
         //2 créer un bouton edit
         const taskEdit= document.createElement("button");
         taskEdit.innerHTML="Edit"
         taskEdit.classList.add("task-edit");
          //ajout à la div parent 
          taskActions.appendChild(taskEdit)
          //2 créer un bouton remove
         const taskRemove= document.createElement("button");
         taskRemove.innerHTML="Delete"
         taskRemove.classList.add("task-remove");
         taskActions.appendChild(taskRemove);
         //2 créer un bouton Add
         const taskAdd= document.createElement("button");
         taskAdd.innerHTML="Done"
         taskAdd.classList.add("task-add");
          //ajout à la div parent 
          taskActions.appendChild(taskAdd)
          
        //ajout à l'élémént parent 
        taskElement.appendChild(taskActions);
          //ecoute edit
          taskEdit.addEventListener('click', (e)=> {
               if (taskEdit.innerHTML.toLowerCase()=="edit") {
                    taskEdit.innerHTML = "Save";
                    taskInputEl.removeAttribute("readonly");
                    taskInputEl.focus();   
                    
               }else{
                    taskEdit.innerHTML="Edit";
                    taskInputElsetAttribute("readonly","readonly");
               }
          });

          //ecoute bouton delete 
          taskRemove.addEventListener('click', ()=> {
               taskList.removeChild(taskElement)
          })

          //ecoute bouton add
          taskAdd.addEventListener('click', ()=> {
               taskElement.classList= ("task-added");
               taskActions.removeChild(taskAdd);
               taskActions.removeChild(taskEdit);
          })

          // On vide la propriété value du champ
          input.value = "";
          //focus sur le champs 
          input.focus();
},

}
