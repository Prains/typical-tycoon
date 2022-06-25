
function makeMenu(menu, button) {
  menu.style.visibility = 'hidden';
  button.addEventListener('click', makeFirstToggle, {once:true});
  function makeFirstToggle() {
    menu.style.visibility = 'visible';
    button.addEventListener('click', makeSecondToggle, {once:true});
  }
  function makeSecondToggle() {
    menu.style.visibility = 'hidden';
    button.addEventListener('click', makeFirstToggle, {once:true});
  }
}
