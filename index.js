// Code your solution in this file!

const convertPositive = (value) => {
    if (value < 0) {
        value = value * -1;
    }
    return value;
}
const distanceFromHqInBlocks = (number) =>{
    return convertPositive(number-42)
}

const distanceFromHqInFeet = (number) =>{
   return  (distanceFromHqInBlocks(number) * 264)
}

distanceFromHqInFeet(43)

const distanceTravelledInFeet = (number1, number2) =>{
    return (convertPositive(number1-number2) * 264)
}

const calculatesFarePrice = (start, destination) =>{
    const trip = distanceTravelledInFeet(start, destination)
    if (trip <= 400) {
        return  0
    } else if (trip > 400 && trip <= 2000){
        return  ((trip-400) * 2 / 100)
    } else if (trip > 2000 && trip <= 2500){
        return 25
    }else if(trip > 2500){
        return "cannot travel that far"
    }
}
calculatesFarePrice(34, 32)


