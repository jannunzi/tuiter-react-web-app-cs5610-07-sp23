const house = {
  rooms: 3,
  baths: 2,
  sqft: 1500
}

const roomsDiv = document.getElementById('rooms')
const bathsDiv = document.getElementById('baths')
const sqftDiv = document.getElementById('sqft')

roomsDiv.innerText = house.rooms
bathsDiv.innerText = house.baths
sqftDiv.innerText = house.baths

