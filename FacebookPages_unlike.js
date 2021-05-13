/*
  
  Steps: 
  - open pages window from Facebook 
  - open console(click F12 on chrome)
  - paste code 
  
  
  
  */

  // node list based on aria-label
  var buttons = [];
   buttons = document.querySelectorAll('[aria-label="أعجبك"], [aria-label="أتابع"]');

  // iterate over buttons then perform click()
  buttons.forEach((el) => {
    el.click();
  });
