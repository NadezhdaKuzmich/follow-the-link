const form = document.forms[0];
const inputLink = form.elements.link;
const btnSerch = form.elements.search;
const errorMsg = document.querySelector('.error');
let checkedLink;

function isValidHttpUrl(string) {
    try {
      const url = new URL(string);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (err) {
      return false;
    }
}

function checkInput(event) {
    link = event.target.value;
    if(isValidHttpUrl(link)) {
        checkedLink = link;
        return checkedLink;
    } else {
        return checkedLink = 'https://' + link;
    }
}

function loadWindow(event) {
    try {
        if(checkedLink == undefined || checkedLink.length == 8) {
            throw new Error();
        }
        location.href = checkedLink;
        inputLink.value = '';
    } catch(error) {
        errorMsg.style.display = "block";
        event.preventDefault();
    }
}

inputLink.addEventListener("focus", function () {
    errorMsg.style.display = "none";
});

inputLink.addEventListener('blur', checkInput);
btnSerch.addEventListener('click', loadWindow);