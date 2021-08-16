/*creating, removing and display persons cards*/

function portionatedData(data, displayNumber, perPagina) {

    let persons = [];
    let numberOfPages = Math.round(data.length / perPagina);

    if (numberOfPages >= displayNumber) {

        let init = perPagina * (displayNumber - 1);
        let sfarsit = perPagina * displayNumber;

        for (let i = init; i < sfarsit; i++) {

            persons.push(data[i]);
        }
    }
    return persons;
}

function displayStudentsCards(data, displayNumber, perPagina) {
    portionatedVector = portionatedData(data, displayNumber, perPagina);

    let cards = document.querySelector('.cards');

    cards.innerHTML = "";
    for (let i = 0; i < portionatedVector.length; i++) {

        cards.append(createCardFor(portionatedVector[i]));

    }


}

function createCardFor(element) {

    let card = document.createElement('div');
    card.className = "card";

    let avatar = document.createElement('img');
    avatar.src = element.picture.medium;
    card.append(avatar);

    let name = document.createElement('span');
    name.className = "name";
    name.textContent += element.name.first;
    name.textContent += " ";
    name.textContent += element.name.last;
    card.append(name);

    let email = document.createElement('span');
    email.className = "mail";
    email.textContent = element.email;
    card.append(email);

    let hr = document.createElement('hr');
    card.append(hr);

    let loginData = document.createElement('span');
    loginData.className = "data";
    loginData.textContent = element.registered.date;
    card.append(loginData);

    return card;
}

function removeCards(div) {

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

}






/*page count buttons*/

function createButtons(data, perPagina) {

    let counter = Math.round(data.length / perPagina);
    let buttons = document.getElementsByClassName('buttons')[0];

    for (let i = 1; i <= counter; i++) {
        let but = document.createElement('button');
        but.textContent = i;
        but.className = "button";
        buttons.append(but);
    }
}

function defaultNumberOfButtons() {
    if (window.innerWidth > 320 && window.innerWidth < 615) {
        createButtons(data, 3);
        displayStudentsCards(data, 1, 3);
    } else if (window.innerWidth > 615 && window.innerWidth < 1024) {
        displayStudentsCards(data, 1, 6);
        createButtons(data, 6);
    } else if (window.innerWidth > 1024) {
        displayStudentsCards(data, 1, 9);
        createButtons(data, 9);
    }
}

function removeOldButtons(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}





/*seaching for persons*/

function searchByName(text, carduri) {
    let cards = document.querySelector('.cards');
    let buttons = document.querySelector('.buttons');

    removeCards(cards);
    removeOldButtons(buttons);
    for (let i = 0; i < carduri.length; i++) {
        cards = document.querySelector('.cards');

        if (carduri[i].name.first.includes(text) == true) {
            cards.append(createCardFor(carduri[i]));
        }


    }
    console.log(cards);

}

function filtrareText(x, text) {
    let vec = [];

    for (let i = 0; i < x.length; i++) {
        if (x[i].name.first.includes(text) == true || x[i].name.last.includes(text) == true) {
            vec.push(x[i]);
        }
    }

    return vec;
}

/*searching event*/

let eventSearch = e => {
    let obj = e.target;

    if (obj.tagName = "INPUT") {
        searchByName(obj.value, data);
    }
}







/*filtering functions*/
function sortAscendindByName(vector) {
    return vector.sort(function(a, b) {
        if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
            return -1;
        }
        if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
            return 1;
        }
        return 0;
    });

}

function sortDescendingByName(vector) {
    return vector.sort(function(a, b) {
        if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
            return 1;
        }
        if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
            return -1;
        }
        return 0;
    });
}

function sortAscendindByDate(vector) {
    return vector.sort(function(a, b) {
        if (a.registered.date < b.registered.date) {
            return -1;
        }
        if (a.registered.date > b.registered.date) {
            return 1;
        }
        return 0;
    });
}

function sortDescendindByDate(vector) {
    return vector.sort(function(a, b) {
        if (a.registered.date < b.registered.date) {
            return 1;
        }
        if (a.registered.date > b.registered.date) {
            return -1;
        }
        return 0;
    });
}




/*filtering events*/

let eventSortByNameAscending = e => {
    let buttons = document.getElementsByClassName('buttons')[0];
    if (window.innerWidth > 320 && window.innerWidth < 615) {
        removeOldButtons(buttons);
        createButtons(data, 3);
        displayStudentsCards(sortAscendindByName(data), 1, 3);
    } else if (window.innerWidth > 615 && window.innerWidth < 1024) {
        removeOldButtons(buttons);
        displayStudentsCards(sortAscendindByName(data), 1, 6);
        createButtons(data, 6);
    } else if (window.innerWidth > 1024) {
        removeOldButtons(buttons);
        displayStudentsCards(sortAscendindByName(data), 1, 9);
        createButtons(data, 9);
    }
}

let eventSortByNameDescending = e => {

    let button = document.getElementsByClassName('buttons')[0];
    if (window.innerWidth > 320 && window.innerWidth < 615) {
        removeOldButtons(button);
        createButtons(data, 3);
        displayStudentsCards(sortDescendingByName(data), 1, 3);
    } else if (window.innerWidth > 615 && window.innerWidth < 1024) {
        removeOldButtons(button);
        displayStudentsCards(sortDescendingByName(data), 1, 6);
        createButtons(data, 6);
    } else if (window.innerWidth > 1024) {
        removeOldButtons(button);
        displayStudentsCards(sortDescendingByName(data), 1, 9);
        createButtons(data, 9);
    }

}

let eventSortByDateAscending = e => {
    let button = document.getElementsByClassName('buttons')[0];
    if (window.innerWidth > 320 && window.innerWidth < 615) {
        removeOldButtons(button);
        createButtons(data, 3);
        displayStudentsCards(sortAscendindByDate(data), 1, 3);
    } else if (window.innerWidth > 615 && window.innerWidth < 1024) {
        removeOldButtons(button);
        displayStudentsCards(sortAscendindByDate(data), 1, 6);
        createButtons(data, 6);
    } else if (window.innerWidth > 1024) {
        removeOldButtons(button);
        displayStudentsCards(sortAscendindByDate(data), 1, 9);
        createButtons(data, 9);
    }
}

let eventSortByDateDescending = e => {
    let button = document.getElementsByClassName('buttons')[0];
    if (window.innerWidth > 320 && window.innerWidth < 615) {
        removeOldButtons(button);
        createButtons(data, 3);
        displayStudentsCards(sortDescendindByDate(data), 1, 3);
    } else if (window.innerWidth > 615 && window.innerWidth < 1024) {
        removeOldButtons(button);
        displayStudentsCards(sortDescendindByDate(data), 1, 6);
        createButtons(data, 6);
    } else if (window.innerWidth > 1024) {
        removeOldButtons(button);
        displayStudentsCards(sortDescendindByDate(data), 1, 9);
        createButtons(data, 9);
    }
}






/*buttons events*/

let eventButtonsCounterMobile = e => {
    let obj = e.target;

    if (obj.tagName == "BUTTON") {
        if (window.innerWidth > 320 && window.innerWidth < 615) {

            if (obj.textContent == "1") {
                removeCards(cards.children);
                displayStudentsCards(data, 1, 3);
            } else if (obj.textContent == "2") {
                removeCards(cards.children);
                displayStudentsCards(data, 2, 3);
            } else if (obj.textContent == "3") {
                removeCards(cards.children);
                displayStudentsCards(data, 3, 3);
            } else if (obj.textContent == "4") {
                removeCards(cards.children);
                displayStudentsCards(data, 4, 3);
            } else if (obj.textContent == "5") {
                removeCards(cards.children);
                displayStudentsCards(data, 5, 3);
            } else if (obj.textContent == "6") {
                removeCards(cards.children);
                displayStudentsCards(data, 6, 3);
            } else if (obj.textContent == "7") {
                removeCards(cards.children);
                displayStudentsCards(data, 7, 3);
            } else if (obj.textContent == "8") {
                removeCards(cards.children);
                displayStudentsCards(data, 8, 3);
            } else if (obj.textContent == "9") {
                removeCards(cards.children);
                displayStudentsCards(data, 9, 3);
            } else if (obj.textContent == "10") {
                removeCards(cards.children);
                displayStudentsCards(data, 10, 3);
            } else if (obj.textContent == "11") {
                removeCards(cards.children);
                displayStudentsCards(data, 11, 3);
            } else if (obj.textContent == "12") {
                removeCards(cards.children);
                displayStudentsCards(data, 12, 3);
            } else if (obj.textContent == "13") {
                removeCards(cards.children);
                displayStudentsCards(data, 13, 3);
            } else if (obj.textContent == "14") {
                removeCards(cards.children);
                displayStudentsCards(data, 14, 3);
            }

        }
    }

}

let eventButtonsCounterTablet = e => {
    let obj = e.target;

    if (obj.tagName == "BUTTON") {
        if (window.innerWidth > 615 && window.innerWidth < 1024) {

            if (obj.textContent == "1") {
                removeCards(cards.children);
                displayStudentsCards(data, 1, 6);
            } else if (obj.textContent == "2") {
                removeCards(cards.children);
                displayStudentsCards(data, 2, 6);
            } else if (obj.textContent == "3") {
                removeCards(cards.children);
                displayStudentsCards(data, 3, 6);
            } else if (obj.textContent == "4") {
                removeCards(cards.children);
                displayStudentsCards(data, 4, 6);
            } else if (obj.textContent == "5") {
                removeCards(cards.children);
                displayStudentsCards(data, 5, 6);
            } else if (obj.textContent == "6") {
                removeCards(cards.children);
                displayStudentsCards(data, 6, 6);
            } else if (obj.textContent == "7") {
                removeCards(cards.children);
                displayStudentsCards(data, 7, 6);
            }
        }
    }
}

let eventButtonsCounterDesktop = e => {
    let obj = e.target;

    if (obj.tagName == "BUTTON") {
        if (window.innerWidth > 1024) {
            if (obj.textContent == "1") {
                removeCards(cards.children);
                displayStudentsCards(data, 1, 9);
            } else if (obj.textContent == "2") {
                removeCards(cards.children);
                displayStudentsCards(data, 2, 9);
            } else if (obj.textContent == "3") {
                removeCards(cards.children);
                displayStudentsCards(data, 3, 9);
            } else if (obj.textContent == "4") {
                removeCards(cards.children);
                displayStudentsCards(data, 4, 9);
            } else if (obj.textContent == "5") {
                removeCards(cards.children);
                displayStudentsCards(data, 5, 9);
            }
        }
    }
}

/*order button event*/

let eventOrderButton = e => {
    let obj = e.target;
    if (obj.textContent == "+") {
        for (let i = 0; i < optionsBox.children.length; i++) {
            optionsBox.children[i].className += " appear";
        }
        obj.textContent = "x";
    } else if (obj.textContent == "x") {
        for (let i = 0; i < optionsBox.children.length; i++) {
            optionsBox.children[i].className = "option";
        }
        obj.textContent = "+";
    }
}


/*window events*/
let eventWindowResize = e => {
    if (window.innerWidth > 320 && window.innerWidth < 615) {
        removeOldButtons(buttons);
        createButtons(data, 3);
        removeCards(cards.children);
        displayStudentsCards(data, 1, 3);
    } else if (window.innerWidth > 615 && window.innerWidth < 1024) {
        removeOldButtons(buttons);
        createButtons(data, 6);
        removeCards(cards.children);
        displayStudentsCards(data, 1, 6);
    } else if (window.innerWidth > 1024) {
        removeOldButtons(buttons);
        createButtons(data, 9);
        removeCards(cards.children);
        displayStudentsCards(data, 1, 9);
    }
}




/*model events*/
let cardClick = e => {
    let obj = e.target;

    let modal = document.getElementsByClassName('modal')[0];

    if (obj.className == "card") {

        modal.style.display = "flex";

        modal.append(clickOnCard(obj));

    }

}

/*modal function - click*/

function clickOnCard(obj) {

    let card = createCardFor(obj);

    let closeCard = document.createElement('button');
    closeCard.id = "closeCard";
    closeCard.textContent = "x";
    card.append(closeCard);

    let arrowsSection = document.createElement('div');
    arrowsSection.className = "arrowsSection";

    let prev = document.createElement('button');
    prev.id = "prev";

    let prevIcon = document.createElement('i');
    prevIcon.className += "fas ";
    prevIcon.className += "fa-angle-left";
    prev.append(prevIcon);
    arrowsSection.append(prev);

    let next = document.createElement('button');
    next.id = "next";

    let nextIcon = document.createElement('i');
    nextIcon.className += "fas ";
    nextIcon.className += "fa-angle-right";
    next.append(nextIcon);
    arrowsSection.append(next);
    card.append(arrowsSection);


    return card;
}