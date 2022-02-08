import Biryani from "./biryani.jpg";

export function home()
{
    const mainhome=document.createElement("div");
    mainhome.classList.add("main-home");
    const home=document.createElement("div");
    home.classList.add("home-cont");
    mainhome.appendChild(home)
    const div1=document.createElement("div");
    div1.classList.add("home-1");

    const div2=document.createElement("div");
    div2.classList.add("home-2");

    const BiryaniImg=new Image();
    BiryaniImg.src=Biryani;
    BiryaniImg.style.height="100%"
    BiryaniImg.style.width="100%"
    BiryaniImg.style.objectFit="cover"
    

    const heading=document.createElement("p");
    heading.innerText="BIRYANIWALLAH \n & \n CO©";
    heading.classList.add("heading");
    div2.appendChild(heading);

    const subheading=document.createElement("p");
    subheading.innerText="The pride of Hyderabad";
    subheading.style.fontFamily="font-family: 'Dancing Script', cursive;";
    subheading.classList.add("sub-heading");
    div2.appendChild(subheading);


    home.appendChild(div1);
    home.appendChild(div2);
    div1.appendChild(BiryaniImg);
    return mainhome;
}

