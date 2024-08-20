const servicePanel = document.querySelector("#serviceInfo");
const serviceIcons = document.querySelectorAll('.iconP');
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
            icon.style.color="red";
            break;
        case 'shipping':
            icon.style.color="blue";
            break;
        case 'delivery':
            icon.style.color="green";
            break;
        default:
            return;
    }
});




