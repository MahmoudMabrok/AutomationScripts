  /*
  
  Steps: 
  - open network window from Linkedin 
  - open console(click F12 on chrome)
  - paste code 
  
  
  */
// var c = 1;
//document.querySelectorAll('button[class="full-width artdeco-button artdeco-button--2 artdeco-button--full artdeco-button--secondary ember-view"]').forEach (function(r){ setTimeout(function(){ c = c +1 ; r.click();} , 1500 * c); });
// window.loaction.reload();

var c = 1;
Array.from(document.querySelectorAll("span.artdeco-button__text")).filter(e =>  e.innerText == "Connect").forEach(e => {setTimeout(function(){ c = c +1 ; e.click();} , 1500 * c);})



