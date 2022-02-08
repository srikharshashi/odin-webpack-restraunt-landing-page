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
    const txt=document.createElement("div");
    div2.appendChild(txt);

    const BiryaniImg=new Image();
    BiryaniImg.src=Biryani;
    BiryaniImg.style.height="100%"
    BiryaniImg.style.width="100%"
    BiryaniImg.style.objectFit="cover"
    

    const heading=document.createElement("p");
    heading.innerText="BIRYANIWALLA \n & \n CO©";
    heading.classList.add("heading");
    txt.appendChild(heading);

    const subheading1=document.createElement("p");
    subheading1.innerText="The pride of Hyderabad";
    subheading1.style.fontFamily="font-family: 'Dancing Script', cursive;";
    subheading1.classList.add("sub-heading");
    txt.appendChild(subheading1);


    const subheading2=document.createElement("p");
    subheading2.innerText="At the heart of India's favourite biryani full of flavours to savour, our biryanis are the result of our art of quality.";
    subheading2.style.fontWeight="400";
    subheading2.style.textAlign="center";
    subheading2.style.color="wheat";
    subheading2.style.padding="50px"
    
    txt.appendChild(subheading2);


    home.appendChild(div1);
    home.appendChild(div2);
    div1.appendChild(BiryaniImg);  
    return mainhome;
}

