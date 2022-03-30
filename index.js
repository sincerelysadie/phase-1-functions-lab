function distanceFromHqInBlocks(someValue) {
    console.log(someValue);
    if (someValue > 44) {
        distanceFromHqInBlocks + 8;
    } else if (someValue < 44) {
        distanceFromHqInBlocks - 8;
    }
    return someValue - 42;  
}
//third test is getting -8, and it wants +8
//if someValue < 42 than we want to change equation so it return + number