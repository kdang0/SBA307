//after user registers display a list of things about the user based on given information (covers iterate over a collection of elements to accomplish a task)
const form = document.getElementById("registration");
const email = form.elements['email'];
const password = form.elements['password'];
const color = form.elements['question'];
const app = document.getElementById('app');
let isPressed = false;


const validateEmail = (e) => {
    e.preventDefault();
    let emailVal = email.value;
    const atpos = emailVal.indexOf("@");
    const dotpos = emailVal.lastIndexOf(".");

    if(atpos < 1){
        alert("Your email must include an @ symbol that is not supposed to be the first character or last character");
        email.focus();
        e.returnValue = false;
        return false;
    }

    /**
     * ==================
     * bob@email.com
     * @ = index 3
     * . = index 9
     * 9-3 = 6 valid
     * =================
     * bo.e@ailcom
     * @ = index 4
     * . = index 2
     * 2 - 4 = -2 invalid
     * ====================
     * bob@.com
     * @ = 3
     * . = 4
     * 4-3 = 1 invalid
    **/
    if(dotpos - atpos < 2){
        alert("You must include a domain name after the @ symbol");
        email.focus();
        e.returnValue = false;
        return false;
    }
    e.returnValue = true;
    return emailVal;
}


const createUserPanel = (email, password, color) => {
    const frag = document.createDocumentFragment();
    const heading = frag.appendChild(document.createElement("h3"));
    heading.textContent = "User Information";
    heading.style.margin = "0px";
    frag.appendChild(document.createElement("hr"));

    const div = frag.appendChild(document.createElement("div"));
    div.style.padding="0 15px";
    div.style.marginBottom = "50px";
    div.appendChild(document.createElement("p")).innerHTML = `EMAIL: ${email}`;
    div.appendChild(document.createElement("p")).innerHTML = `PASSWORD: ${password}`;
    div.appendChild(document.createElement("p")).innerHTML = `FAVORITE COLOR: ${color}`;
    return frag;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(validateEmail(e) && !isPressed){
        app.appendChild(createUserPanel(email.value, password.value, color.options[color.selectedIndex].text));
        isPressed = true;
    }
});
