document.querySelector('.AD').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form data
    const setDate = document.getElementById('setdate').value;
    const headerInput = document.getElementById('headerInput').value;
    const ADImg = document.getElementById('ADImg').value;
    const bodyDetail = document.getElementById('bodyDetail').value;
  
    // Create an object with the form data
    const formData = {
      setDate: setDate,
      headerInput: headerInput,
      img: ADImg,
      details: bodyDetail
    };
  
    // Convert the data to a JSON string
    const jsonData = JSON.stringify(formData);
  
    // Send the data to the API
    fetch('https://api.example.com/add-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        // Handle the response from the API, e.g., show a success message
        console.log('Event added successfully:', responseData);
      })
      .catch(error => {
        console.error('Error adding event:', error);
      });
  });
  


  document.querySelector('.AD').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
 
    // Get form data
    const setDate = document.getElementById('setdate').value;
    const headerInput = document.getElementById('headerInput').value;
    const img = document.getElementById('ADImg').value;
    const details = document.getElementById('bodyDetail').value;
 
    // Create an object with the form data
    const formData = {
       setDate: setDate,
       headerInput: headerInput,
       img: img,
       details: details
    };


    // Convert the data to a JSON string
    const jsonData = JSON.stringify(formData);
  
    // Send the data to the API
    fetch('https://localhost:8083/admin-event-page/add-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        // Handle the response from the API, e.g., show a success message
        console.log('Event added successfully:', responseData);
      })
      .catch(error => {
        console.error('Error adding event:', error);
      });

  });