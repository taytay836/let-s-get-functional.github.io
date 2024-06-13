// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let output = [];
    for (let i = 0; i <array.length; i++){
        if (array[i].gender === 'male'){
            output.push(array[i])
        }
    }
return output.length;
};

var femaleCount = function(array) {
    let output = [];
    for (let i = 0; i <array.length; i++){
        if (array[i].gender === 'female'){
            output.push(array[i])
        }
    }
return output.length;
};

var oldestCustomer = function(array) {
    var oldest = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i].age > oldest.age) {
            oldest = array[i];
        }
    }
    return oldest.name;
};

    var youngestCustomer = function(array) {
        var youngest = array[0];
        for (var i = 0; i < array.length; i++) {
            if (array[i].age < youngest.age) {
                youngest = array[i];
            }
        }
        return youngest.name;
    };

var averageBalance = function(array) {
    var totalBalance = array.reduce(function(sum, customer) {
        // Remove '$' and ',' from balance string and convert to float
        var balance = parseFloat(customer.balance.replace(/[$,]/g, ''));
        return sum + balance;
    }, 0);
    return totalBalance / array.length;
};

var firstLetterCount = function(array, letter) {
    //count customers whose names start with specific letter
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].name.charAt(0).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
};

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
