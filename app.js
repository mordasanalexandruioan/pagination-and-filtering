const cards = document.getElementsByClassName('cards')[0];
const buttons = document.getElementsByClassName('buttons')[0];
const search = document.getElementsByClassName('search')[0];
const order = document.getElementById('order');
const optionsBox = document.getElementsByClassName('optionsBox')[0];
const ascendingName = document.getElementById('ascendingName');
const descendingName = document.getElementById('descendingName');
const ascendingDate = document.getElementById('ascendingDate');
const descendingDate = document.getElementById('descendingDate');
const modal = document.getElementsByClassName('modal')[0];


let portionatedVector;


defaultNumberOfButtons();


order.addEventListener('click', eventOrderButton);
ascendingName.addEventListener('click', eventSortByNameAscending);
descendingName.addEventListener('click', eventSortByNameDescending);
ascendingDate.addEventListener('click', eventSortByDateAscending);
descendingDate.addEventListener('click', eventSortByDateDescending);


search.addEventListener('input', eventSearch);


modal.addEventListener('click', eventCloseModal);

modal.children[0].addEventListener('click', leftArrow);


window.addEventListener('resize', eventWindowResize);


buttons.addEventListener('click', eventButtonsCounterMobile);
buttons.addEventListener('click', eventButtonsCounterTablet);
buttons.addEventListener('click', eventButtonsCounterDesktop);