/**********************************************************************************************************
 *                                            Debounce And Thorttling
 * 
 * --- Debounce function limits the execution of a function call and waits for a certain amount of time before running it again.
 * 
 * ---Throttling is a technique, to limit the execution of an event handler function, even when this event triggers continuously 
 *    due to user actions. (ex: browser resizing)
 */


//Question 1 - Create a button UI and add debounce as follow
//          --> Show button pressed <X> times, on every time button is pressed
//          --> Incease "Triggred <Y> Times" counts on 800ms of debounce

const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_pressed')
const count = document.querySelector('.increment_count')


let pressedCount = 0;
let triggerCount = 0;

const customDebounce = (callback, delay) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

const customThrottle = (callback, delay) => {
  let lastRanTime = 0; //the last time when this function ran

  return (...args) => {
    let currentTime = new Date().getTime();
    if (currentTime - lastRanTime < delay) return; //lastRanTime and currentTime is less than the delay no need to run the function
    lastRanTime = currentTime;
    return callback(...args)
  }
}

const debounceCount = customDebounce(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 800);

const throttleCount = customThrottle(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 800);

btn.addEventListener('click', () => {
  btnPress.innerHTML = ++pressedCount;
  // debounceCount()
  throttleCount()
});


function findTheDistance(nums, list, start, end) {
  let resultArray = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] > start && list[i] < end) {
      resultArray.push(list[i]);
    }
  }
  return resultArray;
}

console.log(findTheDistance(5, [22, 45, 35, 47, 58], 30, 50));


function replaceAdjecent(nums, listArr) {
  let result = [];
  for (let i = 0; i < listArr.length; i++) {
    result[i] = listArr[i + 1];
    console.log(listArr[i + 1]);
    // result[i + 1] = listArr[i - 1];
  }
  result;
}

console.log(replaceAdjecent(4, [2, 1, 0, 4]));

