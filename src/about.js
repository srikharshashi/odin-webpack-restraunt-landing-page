import { compareIds } from "webpack/lib/util/comparators";
import logo from "./img/logo.png"
import pot from "./img/pot.png"

export function about()
{
    const mainabout=document.createElement("div");
    const aboutcont=document.createElement("div");
    aboutcont.classList.add("aboutcont");

    mainabout.classList.add("mainabout");

    const Logo= new Image();
    Logo.src=logo;

    const Pot=new Image();
    Pot.src=pot;

    // const logocont=document.createElement("div");
    // logocont.appendChild(Logo);
    // logocont.classList.add("logo");
    // aboutcont.appendChild(logocont);

    const abcont1=document.createElement("div");
    abcont1.classList.add("abcont1");

    const abcont2=document.createElement("div");
    abcont2.classList.add("abcont2");

    //make subconatiner for abcont1
    const abcont11=document.createElement("div");
    abcont11.classList.add("abcont11");
    const abcont12=document.createElement("div");
    abcont12.classList.add("abcont12");
    //add them
    abcont1.appendChild(abcont11);
    abcont1.appendChild(abcont12);
    


    //stuff for abcont11
    const title=document.createElement("p");
    title.classList.add("heading2");
    title.textContent="If you are a biryani lover, you can sing praises of the dishes here.";
    abcont11.appendChild(title);

    const abtext1=document.createElement("p");
    abtext1.textContent="We, At Biryaniwalla & co. serve you our speciality biryanis or other luscious cusines catering to your needs to the best of our capabilities";
    abtext1.classList.add("abtext");
    abcont11.appendChild(abtext1);

    const abtext2=document.createElement("p");
    abtext2.textContent="Right from our Grilled chicken, Bheja masala, Gurda fry from hydrabadi specialties to our Chinese noodles, crispy corn chilli pepper, paneer 65 and crispy vegetable manchurian, you will be stunned by our amazing delicacies.";
    abtext2.classList.add("abtext");
    abcont11.appendChild(abtext2);
    aboutcont.appendChild(abcont1);


    //Image in abcont12
    const Handi=new Image();
    Handi.src=pot;
    abcont12.appendChild(Handi);

    //the lower container abcont2
    //make subconatiner for abcont1
    const abcont21=document.createElement("div");
    abcont21.classList.add("abcont21");
    const abcont22=document.createElement("div");
    abcont22.classList.add("abcont22");
    //add them
    abcont2.appendChild(abcont21);
    abcont2.appendChild(abcont22);

    //map description
    const mapdesc=document.createElement("p");
    mapdesc.innerText="Some More Stuff";
    mapdesc.classList.add("heading21");
    abcont21.appendChild(mapdesc);

    //add some stuff in here
    const sodi1=document.createElement("p");
    sodi1.innerText="Our founders believed in simple principles, but they practiced them with unwavering dedication. Today, as we look to grow our presence and reach more guests, these values still show us the way.";
    sodi1.classList.add("abtext2");

    const sodi2=document.createElement("p");
    sodi2.innerText="Our founders believed in simple principles, but they practiced them with unwavering dedication. Today, as we look to grow our presence and reach more guests, these values still show us the way.";
    sodi2.classList.add("abtext2");


    abcont21.appendChild(sodi1);
    abcont21.appendChild(sodi2);

    
    //contet for about 22
    const ab22txt=document.createElement("p");
    ab22txt.innerText="We are avialable to order in :";
    ab22txt.classList.add("heading21");
    abcont22.appendChild(ab22txt);

    const abcont224=document.createElement("div");
    abcont224.classList.add("abcont224");



    const abcont221=document.createElement("div");
    abcont224.appendChild(abcont221);
    abcont221.classList.add("abcont221");
    abcont221.classList.add("smolabtcont");

    const ic1=document.createElement("i");
    ic1.classList.add("fa-brands");
    ic1.classList.add("fa-google-play");
    ic1.classList.add("fa-lg");
    ic1.style.color="white";
    abcont221.appendChild(ic1);
    const txt221=document.createElement("p");
    txt221.innerText="Get the App on PlayStore";
    // txt221.classList.add("heading21");
    abcont221.appendChild(txt221);

   




    const abcont222=document.createElement("div");
    abcont224.appendChild(abcont222);
    abcont222.classList.add("smolabtcont");
    abcont222.classList.add("abcont222");


    const ic2=document.createElement("i");
    ic2.classList.add("fa-brands");
    ic2.classList.add("fa-app-store");
    ic2.classList.add("fa-lg");
    ic2.style.color="white";
    abcont222.appendChild(ic2);
    const txt222=document.createElement("p");
    txt222.innerText="Get the App on App Store";
    // txt221.classList.add("heading21");
    abcont222.appendChild(txt222);



    const abcont223=document.createElement("div");
    abcont224.appendChild(abcont223);
    abcont223.classList.add("smolabtcont");
    abcont223.classList.add("abcont223");


    const ic3=document.createElement("i");
    ic3.classList.add("fa-globe");
    ic3.classList.add("fa");
    ic3.style.color="white";
    abcont223.appendChild(ic3);
    const txt223=document.createElement("p");
    txt223.innerText="Order Online";
    // txt221.classList.add("heading21");
    abcont223.appendChild(txt223);
    
    abcont22.appendChild(abcont224);



    aboutcont.appendChild(abcont2);
    mainabout.appendChild(aboutcont);
    return mainabout; 
}