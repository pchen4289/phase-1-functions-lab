// Code your solution in this file!
const scubersHQ = 42;
function distanceFromHqInBlocks(location) {
    let distanceBetween = location - scubersHQ;
    return Math.abs(distanceBetween);
}
function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264
}
function distanceTravelledInFeet(start, destination){
    let distanceTravelled = destination - start;
    return Math.abs(distanceTravelled)*264;
}
function calculatesFarePrice(start,destination){
    let distance = Math.abs((start - destination)*264);
    if (distance < 400){
        return 0;
    }
    else if ((distance >= 400) && (distance <= 2000)) {
        return ((distance - 400) * 0.02);
    }
    else if ((distance > 2000) && (distance < 2500)) {
        return 25;
    }
    else if (distance >= 2500) {
        return "cannot travel that far";
    }
}