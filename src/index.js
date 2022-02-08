import "./styles.css";
import { home } from "./home";





const body=document.querySelector(".main-content");
const content=document.createElement("div");
content.classList.add("content");
const navbar=document.createElement("nav");
navbar.classList.add("nav");
const ul=document.createElement("ul");
const li1=document.createElement("li");
const li2=document.createElement("li");
const li3=document.createElement("li");
const li4=document.createElement("li");
const tabs=[li1,li2,li3,li4];

li1.innerText="Home";
li1.dataset.selector="home";
li2.innerText="Menu";
li2.dataset.selector="menu";
li3.innerText="About";
li3.dataset.selector="about";
li4.innerText="Contact";
li4.dataset.selector="contact";


ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
navbar.appendChild(ul);


body.appendChild(navbar);
body.appendChild(content);

const homecontent=home();
homecontent.setAttribute("id","home");
homecontent.classList.add("sub-content");

const menucontent=document.createElement("div");
menucontent.setAttribute("id","menu");
menucontent.classList.add("sub-content");

const aboutcontent=document.createElement("div");
aboutcontent.setAttribute("id","about");
aboutcontent.classList.add("sub-content");

const contactcontent=document.createElement("div");
contactcontent.setAttribute("id","contact");
contactcontent.classList.add("sub-content");

menucontent.innerText="Menu";
aboutcontent.innerText="About";
contactcontent.innerText="Contact";

const tabcontents=[homecontent,menucontent,aboutcontent,contactcontent];
homecontent.classList.add("active");

content.appendChild(homecontent);
content.appendChild(menucontent);
content.appendChild(aboutcontent);
content.appendChild(contactcontent);


li1.classList.add("active");
tabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        tabs.forEach((tab)=>{tab.classList.remove("active")});
        tab.classList.add("active");
        
        const target=document.getElementById(tab.dataset.selector);
        console.log(target);
        tabcontents.forEach((conts)=>{
            conts.classList.remove("active");
        });
        target.classList.add("active");
    });
});


