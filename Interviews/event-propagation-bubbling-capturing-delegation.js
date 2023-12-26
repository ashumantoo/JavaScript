/************************************************************************************************************
 *                         EVENT PROPAGATION (Bubbling, Capturing and Delegation)
 * Blog Link : https://www.freecodecamp.org/news/event-bubbling-and-event-capturing-in-javascript/#:~:text=The%20bubbling%20phase%2C%20which%20is,are%20in%20the%20bubble%20phase
 * JS Info website Link : https://javascript.info/introduction-browser-events
 * 
 * --> Event :- An event is a single that tells us that something has happened. e.g Click, Mouseover, Mouseout, Keyup , keydown etc
 * 
 *              A) An event can be called with different actions. Examples are Click, Mouse movement and time intervals
 * 
 *              B) Javascript creates an event object whenever an event occures. This object has properties and methods and provides
 *                 the details about the event.
 * 
 *              C) You can set a function that will be executed whenever the event occures with event handler in Javascript
 * 
 *              D) The event Object is automatically created whenever the event is triggred. This object is therefore passed as an
 *                 argument to the event handler.
 * 
 * 
 * --> Propagation :- Propagation refers to how event travels throught the DOM tree.
 * 
 * --> Event Bubbling :- Event bubbling is the phase where the event bubbles up from the target element (where the event triggers) all
 *               the way to the global window object (root of the DOM) - all the parent node will receive the same event till the root.
 * 
 * --> Event Capturing :- In this the event get trickles down from top to bottom, the click event of the parent element must triggers
 *               before the trigger of its nested element.
 * 
 * --> Stop Bubbling/Capturing :- To stop bubbling and capturing we can use event.stopPropagation()
 * 
 * --> Event Delegation :- Setting event listener on parent element allows us to manage event more efficiently instead of setting event
 *                listeners on individual child element.
 */


const divElement = document.querySelector('#mainDiv');
const formElement = document.querySelector('#form');
const btnElement = document.querySelector('#button');


//Event bubbling - button to top --> sequence will be Button, Form and Div
divElement.addEventListener('click', (event) => {
  event.stopPropagation();
  alert("Div")
})

formElement.addEventListener('click', (event) => {
  event.stopPropagation();
  alert("Form")
})

btnElement.addEventListener('click', (event) => {
  event.stopPropagation();
  alert("Button")
})



//Event capturing - Top to bottom - Div, Form and Button
// divElement.addEventListener('click', () => {
//   alert("Div")
// }, { capture: true })

// formElement.addEventListener('click', () => {
//   alert("Form")
// }, { capture: true })

// btnElement.addEventListener('click', () => {
//   alert("Button")
// }, { capture })