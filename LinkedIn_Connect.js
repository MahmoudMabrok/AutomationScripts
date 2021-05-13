var c = 1;

document.querySelectorAll('button[class="full-width artdeco-button artdeco-button--2 artdeco-button--full artdeco-button--secondary ember-view"]').forEach (function(r){ setTimeout(function(){ c = c +1 ; r.click();} , 1500 * c); });
// window.loaction.reload();
