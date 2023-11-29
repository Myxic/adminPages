
// Sample API response (simulated)
const apiResponse = {
floorNumber: 1,
totalRooms: 40,
rooms: {
  "1": 0,
  "2": 1,
  "3": 2,
  "4": 3,
  // ... and so on up to 40 rooms
},
};

const apiResponse2 = {
floorNumber: 2,
totalRooms: 30,
rooms: {
  "1": 0,
  "2": 1,
  "3": 2,
  "4": 3,
  "11": 0,
  "14": 1,
  "22": 1,
  "23": 2,
  
  
  // ... and so on up to 40 rooms
},
};

// Function to populate the rooms
let currentFloor = 1; 
function populateRooms(data) {
const floorRooms = document.querySelector('.floor-rooms');
floorRooms.innerHTML = ''; // Clear previous data

const { floorNumber, totalRooms, rooms } = data;
// document.getElementById('floor').innerText = `Floor ${floorNumber}`;  // change the floor number

for (let roomNumber = 1; roomNumber <= totalRooms; roomNumber++) {
  const roomDiv = document.createElement('div');
  roomDiv.classList.add('room');
  
  let color;
  switch (rooms[roomNumber]) {
    case 0:
      color = 'green'; // Available (green color)
      break;
    case 1:
      color = 'blue'; // Occupied by 1 person (blue color)
      break;
    case 2:
        color = 'red'; // Occupied by more than 1 person (red color)           
        break;
    default:
        color = '#BF4E03'; // Occupied by permanent person (purple color)
     
      break;
  }
  
  roomDiv.innerText = roomNumber;
  roomDiv.style.backgroundColor = color;
  
  floorRooms.appendChild(roomDiv);
}
}

// Event listener for clicking "next-floor" button
document.getElementById('next-floor').addEventListener('click', async () => {
        if (currentFloor < 4) {
            currentFloor++;
            document.getElementById('floor').textContent = `Floor ${currentFloor}`;
            populateRooms(apiResponse2); 
        }
    });

    // Event listener for clicking "prev-floor" button
    document.getElementById('prev-floor').addEventListener('click', async () => {
        if (currentFloor > 1) {
            currentFloor--;
            document.getElementById('floor').textContent = `Floor ${currentFloor}`;
            populateRooms(apiResponse); 
        }
    });

// Sample usage with fetched data
populateRooms(apiResponse);

