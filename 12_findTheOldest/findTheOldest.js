const findTheOldest = function(people) {

    let oldestToYoungest = people.sort(function(firstPerson, secondPerson) {
        
        const findAge = function(birth, death) {
            if(!death){
                death = new Date().getFullYear();
            }
            return death - birth;
        }

        if (findAge(firstPerson.yearOfBirth, firstPerson.yearOfDeath) > findAge(secondPerson.yearOfBirth, secondPerson.yearOfDeath)) {
            return -1;
        } else {
            return 1;
        }
    })

    return oldestToYoungest[0];

};

//  This took me an absolute age. The initial test was fairly easy, but working out how to deal with the lack of a date of death was very challenging. After that I could not get my code to work. It wsa not until I deleted everything and started again that I realised the bone-headed mistake that I had been making in trying to add findAge to my original functions.

// Do not edit below this line
module.exports = findTheOldest;
