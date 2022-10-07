// HomePage Pseudo Code 
// select the form button 

// add a event listener to the form submit button
// use event.preventDefault() to rework the form button

// take the search item from the input element
// and the format from the dropdown/modal element


// create a new HTML URL
//  '/search-results.html?q=' + {search item} + '&format=' 
// if the format option is selected 
// '/search-results.html?q=' + {search item} + '&format=' + {format element}

// Document.location.replace(new_url)





// Search Result Pseudo Code

// Read the Query String of the HTML
// Example from Activity 24: single.js
// var queryString = document.location.search;
// var repoName = queryString.split('=')[1];

// If the query string has a format condition
// call the format endpoint
// Format endpoint


// ELSE
// call the regular search endpoint

// fetch the response object from the endpoint

// if the status is okay
// iterate through the response's results property
// for each result
// take certain properties
// create an element and store the selected properties in it
// append the element to the result container in the HTML


//copy code from HOMEPAGE Pseudo Code

//replace the replace() with = to have backtrack application


