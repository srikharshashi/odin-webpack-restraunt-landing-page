import "./styles.css";
const body=document.querySelector(".body");
const navbar=document.createElement("div");
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

const homecontent=document.createElement("div");
homecontent.setAttribute("id","home");
homecontent.classList.add("content");
const menucontent=document.createElement("div");
menucontent.setAttribute("id","menu");
menucontent.classList.add("content");
const aboutcontent=document.createElement("div");
aboutcontent.setAttribute("id","about");
aboutcontent.classList.add("content");
const contactcontent=document.createElement("div");
contactcontent.setAttribute("id","contact");
contactcontent.classList.add("content");
homecontent.innerText="Home";
menucontent.innerText="Menu";
aboutcontent.innerText="About";
contactcontent.innerText="Contact";
const tabcontents=[homecontent,menucontent,aboutcontent,contactcontent];
homecontent.classList.add("active");
body.appendChild(homecontent);
body.appendChild(menucontent);
body.appendChild(aboutcontent);
body.appendChild(contactcontent);


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


