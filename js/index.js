const servicePanel = document.querySelector("#serviceInfo");
const serviceIcons = document.querySelectorAll('.iconP');
const lastServiceOption = document.querySelector('#serviceInfo').lastElementChild;
let el = lastServiceOption.firstElementChild;
servicePanel.addEventListener('click', (e)=> {
    console.log(`CLICKED ${e.target}`);
    if(e.target.id === "location"){
        window.open("https://www.google.com/maps", "maps", "width=800, height=400, resizable=yes, scrollbars=yes, location=yes");
    }
    if(e.target.classList.contains('iconP')){
        console.log("CLICK ICON");
        e.target.style.color = "#BCECAC";
        e.target.setAttribute('name', 'serviceIcon');
    }
});

serviceIcons.forEach((icon) => {
    switch(icon.id){
        case 'location':
            icon.style.color="#b7cc9d";
            break;
        case 'shipping':
            icon.style.color="#a6dbbc";
            break;
        default:
            return;
    }
});


//Accessing element using parent-child-sibling relationship
while(el){
    console.log(el);
    if(el.classList.contains('icon')){
        console.log("TRUE");
        el.firstElementChild.style.color="#ccefcc";
    }
    el = el.nextElementSibling;
}





