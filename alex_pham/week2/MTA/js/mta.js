// MTA Lab
//
// Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


const lines = {
  N: ['Times Square', '34th', '28th-N', '23rd-N', 'Union Square', '8th-N'],
  L: ['8th-L', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th-6', '23rd-6', 'Union Square', 'Astor Place']
};

const singleLineTrip = function (line, startStation, endStation) {
  const lineStations = lines[line];
  let stationList = [];
  //check index of station start of the line
  const startIndex = lineStations.indexOf(startStation);
  //check index of end station position of line
  const endIndex = lineStations.indexOf(endStation);
  if(endIndex > startIndex){
    // forward direction
    for (let i = startIndex + 1 ; i <= endIndex; i++) {
      stationList.push(lineStations[i]);
    }
  } else {
    // reverse direction
    for (let i = startIndex - 1; i >= endIndex; i--) {
      stationList.push(lineStations[i]);
    }
  }
  // console.log(`You must travel through the following stops on the ${line} line : ${stationList}`);
  // console.log(`${stationList.length} stops in total.`);
  return stationList;
};

const tripPlan = function(lineStart, startStation, lineEnd, endStation){
  const exchangeStation = 'Union Square';
  let trip;
  let firstLineTrip;
  let secondLineTrip;
  //check the line is same line or not
  if(lineStart === lineEnd){
    trip = singleLineTrip(lineStart, startStation, endStation);
    console.log(`You must travel through the following stops on the ${lineStart} line : ${trip}`);
    console.log(`${trip.length} stops in total.`);
    return trip;
    // check if they are not same line
  } else if(lineStart != lineEnd) {
    //add trip from first line upto 'Union Square' station to first trip list
      firstLineTrip = singleLineTrip(lineStart, startStation, exchangeStation);
     //add trip from second line and start from 'Union Square' station to end trip to trip list
    secondLineTrip  = singleLineTrip(lineEnd, exchangeStation, endStation);
     // join first trip leg with second trip leg to make whole trip plan
     trip = firstLineTrip.concat(secondLineTrip) ;
     // console.log(`check trip list ${trip} and number station ${trip.length}`);
     console.log(`You must travel through the following stops on the ${lineStart} line : ${firstLineTrip}`);
     console.log(`Change at Union Square.`);
     console.log(`Your journey continues through the following stops: ${secondLineTrip}.`);
     console.log(`${trip.length} stops in total.`);
  }
   return trip;
};

//Test---
// console.log(`Test for single line trip`);
// tripPlan('N', 'Times Square', 'N','8th-N');

// console.log(`Test result for 2 lines trip`);
tripPlan('N', 'Times Square', 'L','1st');
// tripPlan('N', 'Times Square', '6','33rd');
// tripPlan('6', 'Grand Central', 'N','Times Square');
