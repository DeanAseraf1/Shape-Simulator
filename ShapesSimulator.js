//Project 1 - Shapes Simulator
var shapeChoise;
var shapeWidth;
var shapeHeight;
var contentChoise;
Main();
//Function to get all the user inputs and stopping if one is not validated.
function Main() {
    var perimeterText;
    var areaText;
    //Getting the shapeNumber from the user.
    shapeChoise = prompt("Enter desired shape: \n1)Square \n2)Rectangle \n3)Triangle");
    //Validation of shapeNumber
    if (!StringIsInArray(shapeChoise, ["1", "2", "3"])) {
        alert("Error. Please select 1 or 2 or 3, for the shape type.");
        return;
    }
    //Getting the Dimentions from the user based on the shape and calculating the area and the perimeter.
    switch (shapeChoise) {
        //Square
        case "1":
            //Square Dimentions
            shapeWidth = +prompt("Enter square side length:");
            shapeHeight = shapeWidth;
            //Square Perimeter & Area
            perimeterText = "Square Perimeter: " + 4 * shapeWidth;
            areaText = "Square Area: " + shapeWidth * shapeWidth;
            break;
        //Rectangle
        case "2":
            //Rectangle Dimentions
            shapeWidth = +prompt("Enter rectangle width:");
            if (!NumberIsInteger(shapeWidth) || !NumberIsPositive(shapeWidth)) {
                break;
            }
            shapeHeight = +prompt("Enter rectangle height:");
            //Rectangle Perimeter & Area
            perimeterText = "Rectangle Perimeter: " + (2 * shapeWidth + 2 * shapeHeight);
            areaText = "Rectangle Area: " + shapeWidth * shapeHeight;
            break;
        //Triangle
        case "3":
            //Triangle Dimentions
            shapeWidth = +prompt("Enter triangle side length:");
            shapeHeight = shapeWidth;
            //Triangle Perimeter & Area
            perimeterText = "Triangle Perimeter: " + (2 * shapeWidth + (shapeWidth * Math.sqrt(2))).toFixed(2);
            areaText = "Triangle Area: " + (shapeWidth * shapeWidth) / 2;
            break;
    }
    //Validation of shapeWidth & shapeHeight
    if (!NumberIsInteger(shapeWidth) || !NumberIsPositive(shapeWidth) || !NumberIsInteger(shapeHeight) || !NumberIsPositive(shapeHeight)) {
        alert("Error. Please enter a positive integer number.");
        return;
    }
    //Getting the contentNumber from the user.
    contentChoise = prompt("Enter shape content: \n1)***** \n2)*   * \n3)12345 \n4)54321");
    //Validation of contentNumber
    if (!StringIsInArray(contentChoise, ["1", "2", "3", "4"])) {
        alert("Error. Please select 1 or 2 or 3 or 4, for the shape content.");
        return;
    }
    //Starting the CreateShape function
    CreateShape();
    //Writing the perimeter and the area to the screen.
    document.write("<br/>" + perimeterText + "<br/>" + areaText);
}
//Validation Function to check if a number is integer
function NumberIsInteger(num) {
    return num % 1 == 0;
}
//Validation Function to check if a number is positive
function NumberIsPositive(num) {
    return num > 0;
}
//Validation Function to check if number is in a array
function StringIsInArray(str, list) {
    for (var i = 0; i <= list.length; i++) {
        if (str == list[i]) {
            return true;
        }
    }
    return false;
}
//Function to create the shape with loops based on the user inputs.
function CreateShape() {
    switch (shapeChoise) {
        //Rectangle & Square
        case "1":
        case "2":
            for (var i = 1; i <= shapeHeight; i++) {
                for (var j = 1; j <= shapeWidth; j++) {
                    PrintContent(j, i, shapeWidth);
                }
                document.write("<br/>");
            }
            break;
        //Triangle
        case "3":
            for (var i = 1; i <= shapeHeight; i++) {
                for (var j = 1; j <= i; j++) {
                    PrintContent(j, i, i);
                }
                document.write("<br/>");
            }
            break;
    }
}
//Function to print the right content to the screen based on the user inputs.
function PrintContent(j, i, jMax) {
    switch (contentChoise) {
        //Full of stars
        case "1":
            document.write("* ");
            break;
        //Empty with stars
        case "2":
            if (j == 1 || j == jMax || i == 1 || i == shapeHeight) {
                document.write("* ");
            }
            else {
                document.write("&nbsp&nbsp");
            }
            break;
        //Raising numbers
        case "3":
            document.write(j + " ");
            break;
        //Descending numbers
        case "4":
            document.write(shapeWidth - j + 1 + " ");
            break;
    }
}
//# sourceMappingURL=ShapesSimulator.js.map