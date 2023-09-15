viewEvent();

addEventModal.addEventListener("click", ()=> {
    eventsModal.showModal();
});
closeEventModal.addEventListener("click", ()=> {
    eventsModal.close();
});

addADModal.addEventListener("click", ()=> {
    adModel.showModal();
});
closeADmodel.addEventListener("click", ()=> {
    adModel.close();

});



// viewEventButton.addEventListener("click", ()=> {
//     viewEventsModal.showModal();
// });
// closeEventsModal.addEventListener("click", ()=> {
//     viewEventsModal.close();

// });
function viewEvent() {
   
    viewEventButtons.forEach((viewEventButton) => {
        
        console.log("inside");

        // viewEventButton.onclick = () => { viewEventsModal.showModal();};
       
        viewEventButton.addEventListener("click", ()=> {
            // code for the modal click
            
            // the headings of the event 
            const eventHeadings = viewEventButton.parentElement.querySelector('h2');

            const modalHeadings = viewEventsModal.querySelector('h1');

            modalHeadings.textContent = eventHeadings.textContent

            // the date of the event 
            const eventDate = viewEventButton.parentElement.querySelector('small');

            const modalDate = viewEventsModal.querySelector('h4');

            modalDate.textContent = eventDate.textContent

            // the sub-headings of the event 
            const eventSubHeading = viewEventButton.parentElement.querySelector('h3');

            const modalSubHeading = viewEventsModal.querySelector('h2');

            modalSubHeading.textContent = eventSubHeading.textContent

            // the details of the event
            const detailsElement = viewEventButton.parentElement.querySelector('p:nth-of-type(2)')

            const modaldetailsElement = viewEventsModal.querySelector('p:nth-of-type(2)');

            modaldetailsElement.textContent = detailsElement.textContent;

        
            viewEventsModal.showModal();
        });
        closeEventsModal.addEventListener("click", ()=> {
            viewEventsModal.close();
        
        }); 
    });
}


// document.querySelectorAll(".row img").forEach((div1) => {
//     div1.addEventListener("click", () => {
//       openModal();
//       console.log('DOMContentLoaded');
//       div1.parentElement.classList.add("active");
  
//       let Active = document.querySelector(".active");
//       var CurrentCommentIndex = getChildIndex(nextpage, Active);
//       slides[CurrentCommentIndex].style.display = "block";
//     });
//   });


