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
    //init empty array
    let output = [];
    for (let i = 0; i <array.length; i++){
        //if gender = male add to output array
        if (array[i].gender === 'male'){
            output.push(array[i])
        }
    }
return output.length;
};

var femaleCount = function(array) {
    //init empty array
    let output = [];
    for (let i = 0; i <array.length; i++){
        //if gender = female add to output array
        if (array[i].gender === 'female'){
            output.push(array[i])
        }
    }
return output.length;
};

var oldestCustomer = function(array) {
    //init where count starts
    var oldest = array[0];
    //loop throuigh array[0]
    for (var i = 0; i < array.length; i++) {
        if (array[i].age > oldest.age) {
            oldest = array[i];
        }
    }
    return oldest.name;
};

    var youngestCustomer = function(array) {
        //init where count star ts
        var youngest = array[0];
        //loop throuhgh array apply fun to esch element
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

var friendFirstLetterCount = function(array, customerName, letter) {
    //init count variable
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        //count friends who names start with specific letter
        if (array[i].name === customerName) {
            for (var j = 0; j < array[i].friends.length; j++) {
                if (array[i].friends[j].name.charAt(0).toLowerCase() === letter.toLowerCase()) {
                    count++;
                }
            }
        }
    }
    return count;
};

var friendsCount = function(array, name) {
    //init empty array
    var customersWithFriend = [];
    for (var i = 0; i < array.length; i++) {
        //list customers who have a specific person as friend
        for (var j = 0; j < array[i].friends.length; j++) {
            if (array[i].friends[j].name === name) {
                customersWithFriend.push(array[i].name);
            }
        }
    }
    return customersWithFriend;
};


var topThreeTags  = function(array) {
    //init object empty
    var tagCounts = {};
    for (var i = 0; i < array.length; i++) {
       // iterate using for loop for top three tags
        for (var j = 0; j < array[i].tags.length; j++) {
            var tag = array[i].tags[j];
            if (tagCounts[tag]) {
                tagCounts[tag]++;
            } else {
                tagCounts[tag] = 1;
            }
        }
    }
    var sortedTags = Object.keys(tagCounts).sort(function(a, b) {
        return tagCounts[b] - tagCounts[a];
    });
    return sortedTags.slice(0, 3);
}

var genderCount= function(array) {
    //initialize where gender counts start
    var counts = { male: 0, female: 0, 'non-binary': 0 };
    for (var i = 0; i < array.length; i++) {
        //if statemement to count number of each gender
        if (array[i].gender === 'male') {
            counts.male++;
        } else if (array[i].gender === 'female') {
            counts.female++;
        } else if (array[i].gender === 'non-binary') {
            counts['non-binary']++;
        }
    } // return full gender counts
    return counts;
};

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
