console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// printOdds(-6);

// function printOdds(count) {
//     if (count > 0) {
//         for (var i = 1; i < count; i++) {
//             if (i % 2 != 0) {
//                 console.log(i);            
//             }                
//         }
//     }
//     else {
//         for (var i = -1; i > count; i--) {
//             if (i % 2 != 0) {
//                 console.log(i);            
//             }                
//         }
//     }
// }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// checkAge("Benny", 12);
// checkAge(18);

// function checkAge(userName, age) {
//     if (userName, age) {
//     var aboveSixteen = `Congrats ${userName}, you can drive!`;
//     var belowSixteen = `Sorry ${userName}, you need to wait until you're at least 16.`;
//     }
//     else if (!userName, age) {
//         aboveSixteen = "You can drive.";
//         belowSixteen = "Sorry you can't drive yet.";
//     }
//     if (age >= 16) {
//         console.log(aboveSixteen);
//     }
//     else {
//         console.log(belowSixteen);
//     }
// }

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// isQuadrant(0,0);
// isQuadrant(1,0);
// isQuadrant(0,1);
// isQuadrant(4,5);
// isQuadrant(-2,8);
// isQuadrant(3,-11);
// isQuadrant(-3,-4);

// function isQuadrant(x,y) {
//     if (x === 0 && y === 0) {
//         console.log("This is the origin.");
//     } else if (x > 0  && y === 0 || x < 0 && y === 0) {
//         console.log("This is the x axis. I suppose it could be quadrant 1 and 4. Technically, neither though. :)");
//     } else if (x === 0 && y > 0 || x === 0 && y < 0) {
//         console.log("This is the y axis. Not really a quadrant of any kind.");
//     } else if (x > 0 && y > 0) {
//         console.log("Quadrant 1.");
//     } else if (x < 0 && y > 0) {
//         console.log("Quadrant 2.");        
//     } else if (x < 0 && y ) {
//         console.log("Quadrant 3.");  
//     } else 
//         console.log("Quadrant 4.");  
// }

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

isTriangleOfType(1,2,3);
isTriangleOfType(2,2,2);
isTriangleOfType(2,2,3);
isTriangleOfType(3,2,2);
isTriangleOfType(3,2,6);
isTriangleOfType(0,2,3);
isTriangleOfType(-1,2,3);

function isTriangleOfType(x,y,z) {
    
    if (x > 0 && y > 0 && z > 0)  {
        if (x + y < z || x + z < y || y + z < x)
        {
          console.log("Not a triangle.");
        }
        else {
            if (x == y && y == z) {
                var type = "Equalateral";
            } else if (x == y && y < z){
                var type = "Isosceles";
            } else {
                var type = "Scalene";
            }
            console.log(`This is an ${type} Trangle.`);
        }        
    } 
    else {        
        console.log("Not a triangle.");         
    }
}

