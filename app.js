//Project 1 - Shapes Simulator
var shape;
var width;
var height;
var content;
Main();
//The main function(stopping the program when one of the inputs not validated).
function Main() {
    var perimeterText;
    var areaText;
    //Getting the Shape selection from the user.
    shape = +prompt("Enter desired shape: \n1)Square \n2)Rectangle \n3)Triangle");
    //shape Validation
    if (!NumberIsInteger(shape) || !NumberIsInTheList(shape, [1, 2, 3])) {
        alert("Error. Please select 1 or 2 or 3, for the shape type.");
        return;
    }
    //Getting the Dimentions from the user based on the shape and calculating the area and the perimeter.
    switch (shape) {
        //Square
        case 1:
            //Dimentions
            width = +prompt("Enter square side length:");
            height = width;
            //Perimeter & Area
            perimeterText = "Square Perimeter: " + 4 * width;
            areaText = "Square Area: " + width * width;
            break;
        //Rectangle
        case 2:
            //Dimentions
            width = +prompt("Enter rectangle width:");
            if (!NumberIsInteger(width) || !NumberIsPositive(width)) {
                break;
            }
            height = +prompt("Enter rectangle height:");
            //Perimeter & Area
            perimeterText = "Rectangle Perimeter: " + (2 * width + 2 * height);
            areaText = "Rectangle Area: " + width * height;
            break;
        //Triangle
        case 3:
            //Dimentions
            width = +prompt("Enter triangle side length:");
            height = width;
            //Perimeter & Area
            perimeterText = "Triangle Perimeter: " + (2 * width + (width * Math.sqrt(2))).toFixed(2);
            areaText = "Triangle Area: " + (width * width) / 2;
            break;
    }
    //Dimentions Validation
    if (!NumberIsInteger(width) || !NumberIsPositive(width) || !NumberIsInteger(height) || !NumberIsPositive(height)) {
        alert("Error. Please enter a positive integer number.");
        return;
    }
    //Getting the Content from the user.
    content = +prompt("Enter shape content: \n1)***** \n2)*   * \n3)12345 \n4)54321");
    //Content Validation
    if (!NumberIsInteger(content) || !NumberIsInTheList(content, [1, 2, 3, 4])) {
        alert("Error. Please select 1 or 2 or 3 or 4, for the shape content.");
        return;
    }
    CreateShape();
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
//Validation Function to check if number is in the list
function NumberIsInTheList(num, list) {
    for (var i = 0; i <= list.length; i++) {
        if (num == list[i]) {
            return true;
        }
    }
    return false;
}
//Function to create the shape with loops based on the inputs.
function CreateShape() {
    switch (shape) {
        case 1:
        case 2:
            //Rectangle & Square loop
            for (var i = 1; i <= height; i++) {
                for (var j = 1; j <= width; j++) {
                    PrintContent(j, i, width);
                }
                document.write("<br/>");
            }
            break;
        case 3:
            //Triangle loop
            for (var i = 1; i <= height; i++) {
                for (var j = 1; j <= i; j++) {
                    PrintContent(j, i, i);
                }
                document.write("<br/>");
            }
            break;
    }
}
//Function to print the right content to the screen based on the inputs.
function PrintContent(j, i, jMax) {
    switch (content) {
        case 1:
            document.write("* ");
            break;
        case 2:
            if (j == 1 || j == jMax || i == 1 || i == height) {
                document.write("* ");
            }
            else {
                document.write("&nbsp&nbsp");
            }
            break;
        case 3:
            document.write(j + " ");
            break;
        case 4:
            document.write(width - j + 1 + " ");
            break;
    }
}
//# sourceMappingURL=app.js.map