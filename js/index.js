// a function to determine the max amount of bananas left after a trip

//this algorithms assume that the the distances are in multiples of 1000

function maxBanana(x,y,z) {

    //the algorithm divides the journey into three having an arbitrary points A and B in-between
    x = bananaLeft(x,y);
    console.log("The amount of bananas left after the first trip set: ");
    bananaLeft(x,y);
    var x1 = bananaLeft(x,y);
    console.log("The amount of bananas left after the second trip set: ");
    bananaLeft(x1,y);
    var x2 = bananaLeft(x1,y);
    x2 = x2*z;
    $("#answer").val(x2);
    alert("The max amount of bananas left is: " + x2);
}

function bananaLeft(x,y) {
    // y is the total distance and since for efficency the trip has to be divided into 3
    var y2 = y/3;
    var a = tripNo(x)*y2;
    var left;
    left = x - a;
    return left;
}

function tripNo(x) {
    var u = 2*(x/1000)-1;
    return u
}

function noOfBananas() {
    var x = $("#nob").val();
    if (x<3000){
        // alert("Number of cammels too small \nEnter a value greater than 2999");
        $("#nob-bananas-help").val("Enter a value greater than or equal to 3000");
    }
    else{
        return x;
    }
}

function noOfCamels() {
    var z  = $("#noc").val();
    return z;
}

function distanceToMarket() {
    var y = $("#dtm").val();
    if (y<1000){
        $("#distance-to-market").val("invalid no of camels, no less than 1000")
    }
    else if(y>100000){
        $("#distance-to-market").val("invalid no of camels, No greater than 100,000")
    }
    else{
        return y;
    }
}

function bananaEatenPerKm() {
    var k = $("#BperKm").val();
    if (y<1000){
        $("#bananas-eaten").val("invalid no of camels, no less than 1000")
        $("#BperKm").empty();
    }
    else if(y>100000){
        $("#bananas-eaten").val("invalid no of camels, No greater than 100,000")
    }
    else{
        return k;
    }
}

$("#submit").click(function () {

    console.log("button click recorded");
    var x = noOfBananas();
    var y = distanceToMarket();
    var k = bananaEatenPerKm();
    var z = noOfCamels();
    console.log("Values fetch success");

    maxBanana(x,y,z);

});
