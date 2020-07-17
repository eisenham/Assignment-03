// feet to mile converter

function feetToMile(feetValue){
    if(feetValue<0){
        return "Invalid value.";
    }
    else{
        return (feetValue*0.000189394).toFixed(7)+" miles";
    }
}

//test
var feet = 545545;
var conversionResult = feetToMile(feet);
console.log(conversionResult);



// wood calculator

function woodCalculator(chairAmount, tableAmount, bedAmount){
    if(chairAmount<0 || tableAmount<0 || bedAmount<0 || chairAmount%1!=0 || tableAmount%1!=0 || bedAmount%1!=0){
        return "Invalid value.";
    }
    else{
        var totalLogs = ((chairAmount*1) + (tableAmount*3) + (bedAmount*5));
        return totalLogs +" woods";
    }

}

//test
var chair = 10;
var table = 3;
var bed = 4;

var woodsNeeded = woodCalculator(chair,table,bed);
console.log(woodsNeeded);


// brick calcultor

function brickCalculator(noOfStoried){
    if(noOfStoried<=0){
        return "Enter valid value: ";
    }
    else if(noOfStoried>=1 && noOfStoried<=10){
        return ((noOfStoried*15)*1000) +" bricks";
    }
    else if(noOfStoried>=11 && noOfStoried<=20){
        return (((10*15)*1000) + (((noOfStoried-10)*12)*1000)) +" bricks" ;
    }
    else if(noOfStoried>20){
        return (((10*15)*1000) + ((10*12)*1000) + (((noOfStoried-20)*10)*1000)) + " bricks";
    }
}

//test
var buildingStories = 28;
var bricksNeeded = brickCalculator(buildingStories);

console.log(bricksNeeded);




//tinyFriend

function tinyFriend(friendsArray){

    if(friendsArray.length==0){
        return "You don't have any friends!";
    }
    else{
        var tiny = friendsArray[0];

        for(var i=0; i<friendsArray.length; i++){

            if(friends[i].length==0){
                return "Invalid data.";
            }
            
            else{
                if(tiny.length > friendsArray[i].length){
                    tiny = friendsArray[i];
                }
            }
            
        }
        return tiny;
    }

}

//test
var friends = ["Sharif","Rakayet", "Rana","Abdul"];
var tinyWho = tinyFriend(friends);
console.log(tinyWho);