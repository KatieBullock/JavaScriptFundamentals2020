/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 * 
 * @example console.log( document.querySelector("#myTarget") );
 * 
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 * 
 * Do not change the HTML unless you are instructed to do so.
 */

 const firstListItem = document.querySelector("li");
 console.log(firstListItem);

 const secondListItem = document.querySelector("#myId");
 console.log(secondListItem);

 const allItems = Object.values(document.querySelectorAll("li"));
 console.log(allItems);

 const bgWarning = Object.values(document.querySelectorAll(".bg-warning"));
 console.log(bgWarning);

 const cells = Object.values(document.querySelectorAll("#myRow > div"));
 console.log(cells);

 const link = document.querySelector("[data-target-link]");
 console.log(link);
 
 const button = document.querySelector("[data-target-button]");
 console.log(button);