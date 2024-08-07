// Define an array to store trips
let trips = [];

// Function to add a new trip
function addTrip(destination, dates, notes) {
    trips.push({ destination, dates, notes, activities: [] });
}

// Function to edit a trip
function editTrip(index, destination, dates, notes) {
    trips[index] = { destination, dates, notes, activities: trips[index].activities };
}

// Function to delete a trip
function deleteTrip(index) {
    trips.splice(index, 1);
}

// Function to add an activity to a trip
function addActivity(index, activityName, location, time, notes) {
    trips[index].activities.push({ activityName, location, time, notes });
}

// Function to filter trips by date or destination
function filterTrips(criteria) {
    return trips.filter(trip => trip.dates === criteria || trip.destination === criteria);
}

// Example Usage:
addTrip("Paris", "2024-08-10 to 2024-08-15", "Exploring the City of Love");
addActivity(0, "Eiffel Tower Visit", "Paris", "10:00 AM", "Don't forget the camera!");

console.log(trips);
console.log(filterTrips("Paris"));
