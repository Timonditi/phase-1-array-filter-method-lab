function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

const drivers= ['John', 'Mike', 'Jenna','mike'];
console.log(findMatching(drivers, 'mike'));

function fuzzyMatch(drivers, partialName) {
    return drivers.filter(driver => driver.startsWith(partialName));
}
  console.log(fuzzyMatch(drivers, 'J'));

function matchName(drivers, name){
return drivers.filter(driver => driver.name === name);
}