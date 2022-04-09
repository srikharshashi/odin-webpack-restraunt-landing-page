import Biryanii from "./img/biryani2.jpg";
import C65 from "./img/chic65.jpg";
import CBiryani from "./img/chicbiryani.jpg";
import MBiryani from "./img/muttonbiryani.jpeg";
import KBiryani from "./img/keemabiryani.jpg";
import gajar from "./img/gajar.jpg";
import naan from "./img/garlicnaan.jpg";
import kebab from "./img/kabab.jpg";
import paneer from "./img/paneer.jpg";

function getimagelist()
{
    const ChickenBiryani=new Image();
    ChickenBiryani.src=CBiryani;
    const muttonbiryani=new Image();
    muttonbiryani.src=MBiryani;
    const Keema=new Image();
    Keema.src=KBiryani;
    const C65Biryani=new Image();
    C65Biryani.src=C65;

    return [ChickenBiryani,muttonbiryani,Keema,C65Biryani];
}
function getimageList2()
{
    const Naan=new Image();
    Naan.src=naan;
    const Paneer =new Image();
    Paneer.src=paneer;
    const Kebab=new Image()
    Kebab.src=kebab;
    const halwa=new Image();
    halwa.src=gajar;

    return [Naan,Paneer,Kebab,halwa];
}


function getstar()
{
    const star=document.createElement("span");
    star.classList.add("fa");
    star.classList.add("fa-star");
    star.classList.add("checked");
    return star;
}

function getmenuitem(name,image)
{
    const item=document.createElement("div");
    item.classList.add("menuitem");
    const itempt1=document.createElement("div");
    const itempt2=document.createElement("div");
    itempt1.classList.add("menu-item-pt1");
    itempt1.appendChild(image);
    itempt1.style.borderBottom="2px solid wheat"
    itempt2.classList.add("menu-item-pt2");
    const dishname=document.createElement("p");
    dishname.innerText=name;
    itempt2.appendChild(dishname);
    const stars=document.createElement("div");
    for(let i=0;i<=4;i++)
    {
        stars.appendChild(getstar());
    }
    itempt2.appendChild(stars);

    item.appendChild(itempt1);

    item.appendChild(itempt2);
    return item;
}



export function menu()
{
    const mainmenu=document.createElement("div");
    mainmenu.classList.add("mainmenu");//class
    const menucontent=document.createElement("div");
    menucontent.classList.add("menucontent");//class
    mainmenu.appendChild(menucontent);
    const Biryani2=new Image();
    Biryani2.classList.add("biryani2");
    const imgdiv=document.createElement("div");
    imgdiv.classList.add("imgdiv");//class
    Biryani2.src=Biryanii;
    imgdiv.appendChild(Biryani2);
    const menutitle=document.createElement("div");
    menutitle.classList.add("menutitle");//class
    menutitle.innerText="Menu";
    menutitle.style.color="wheat";
    imgdiv.appendChild(Biryani2);
    imgdiv.appendChild(menutitle)
    menucontent.appendChild(imgdiv);
    const menu2=document.createElement("div");


    menu2.classList.add("menu2");
    menucontent.appendChild(menu2);

    const menucont1=document.createElement("div");
    menucont1.classList.add("menucont1");
    menu2.appendChild(menucont1);

    const menucont2=document.createElement("div");
    menucont2.classList.add("menucont2");
    menu2.appendChild(menucont2);

    const itemslist=["Zafrani Chicken Biryani","Zafrani Mutton Biryani","Zafrani Keema Biryani","Zafrani Chicken 65 Biryani"];
    const itemslist2=["Garlic Naan","Paneer Butter Masala","Mutton Kebab","Gajar Ka Halwa"];
    const imageslist2=getimageList2();
    const imageslist=getimagelist();

    for(let i=0;i<4;i++)
    {
        menucont1.appendChild(getmenuitem(itemslist[i],imageslist[i]));
        menucont2.appendChild(getmenuitem(itemslist2[i],imageslist2[i]));
    }



    
    return mainmenu;
}