document.addEventListener('DOMContentLoaded', function () {
    fetch('http://your-api-server-domain:port/events')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Call a function to create cards using the retrieved data
            createEventCards(data);
        })
        .catch(error => {
            console.error('Error fetching event data:', error);
        });

    function createEventCards(eventData) {
        const container = document.querySelector('.EventsContext'); // Replace with your container selector

        eventData.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('UpcomingEvent', 'comingEvent', 'col-xl-4', 'col-md-6');

            eventCard.innerHTML = `
                <p class="Xbutton">X</p>
                <h2>${event.title}</h2>
                <h3>${event.subtitle}</h3>
                <small>${event.date}</small>
                <p>${event.description}</p>
                <button type="button" class="UpcomingEventButton viewEventsModal">View</button>
            `;

            // Prepend the event card to the container
        container.insertBefore(eventCard, container.children[1]);
        });
    }
});
