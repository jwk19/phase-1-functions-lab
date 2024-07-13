// Code your solution in this file!

const hQBlock = 42;

// function to calculate no of blocks from Scuber HQ to pick up location
function distanceFromHqInBlocks (pickupBlock = 25) {
    
return Math.abs(pickupBlock-hQBlock)
}

console.log(distanceFromHqInBlocks(2)); //returns 40 blocks away

// function to calculate distance from HQ in Feet 
function distanceFromHqInFeet(pickupBlock = 25) {
return distanceFromHqInBlocks(pickupBlock)*264; 

}

//Function to calculate feet travelled between two blocks
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; //returns the number of feet travelled
  }

 // Function to calculate fare price
function calculatesFarePrice(start, destination) { //returns fare for the customer
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far'; //the ride is over 2500 feet
    }
  } 


