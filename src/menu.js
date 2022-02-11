import Biryanii from "./biryani2.jpg";

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
    imgdiv.appendChild(Biryani2);
    imgdiv.appendChild(menutitle)
    menucontent.appendChild(imgdiv);
    const menu2=document.createElement("div");
    menu2.classList.add("menu2");
    menucontent.appendChild(menu2);

    return mainmenu;
}