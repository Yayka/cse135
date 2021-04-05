// script.js

/* get all assignments in list */
const assignment1 = document.getElementById('assignment1');
const assignment2 = document.getElementById('assignment2');
const assignment3 = document.getElementById('assignment3');

/* get all team members */
const diana = document.getElementById('diana');
const nicole = document.getElementById('nicole');

/* current site link (home url) */
const link = window.location.href;
console.log(link);

/**
 * Add mouse click event to each assignment including text content
 * and the div container to act like a link
 */
assignment1.addEventListener('click', () => {
  console.log('in assignment1!');
});
assignment2.addEventListener('click', () => {
  console.log('in assignment2!');
});
assignment3.addEventListener('click', () => {
  console.log('in assignment3!');
});

/**
 * Add mouse click event to each team name to act as a link
 */
diana.addEventListener('click', () => {
  console.log('clicked diana!');
  window.location.href = 'https://ntrappe.github.io/cse135/diana';
});
nicole.addEventListener('click', () => {
  console.log('clicked nicole!');
  window.location.href = 'https://ntrappe.github.io/cse135/nicole';
});
