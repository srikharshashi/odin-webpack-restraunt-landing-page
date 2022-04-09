
export function contact()

{

    const contactinn=document.createElement("div");
    contactinn.classList.add("contactin");

    const contact1=document.createElement("div");
    contact1.classList.add("contact1");

    const contact2=document.createElement("div");
    contact2.classList.add("contact2");

    const contact3=document.createElement("div");
    contact3.classList.add("contact3");

    const contact4=document.createElement("div");
    contact4.classList.add("contact4");

    contactinn.appendChild(contact1);
    contactinn.appendChild(contact2);
    contact2.appendChild(contact3);
    contact2.appendChild(contact4);


    //contact1 part
    const head1=document.createElement("p");
    head1.textContent="Question or comment?";
    head1.classList.add("headingc1");


    const head2=document.createElement("p");
    head2.textContent="Contact Us";
    head2.classList.add("headingc2");

    const head3=document.createElement("p");
    head3.textContent="We’re always thinking of you, so why not let us know what you’re thinking about us?";
    head3.classList.add("headingc3");

    contact1.appendChild(head2);
    contact1.appendChild(head1);
    contact1.appendChild(head3);

    //contact4 stuff
    const wearehere=document.createElement("p");
    wearehere.innerText="We are here!!"
    wearehere.classList.add("headingc4");
    contact4.appendChild(wearehere);

    const map=document.createElement("div");
    map.classList.add("map");
    map.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6974142115496!2d78.43612041482649!3d17.426302988055333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cd14b9c959%3A0x327828a1ffcd22f5!2sBiryaniwalla%20%26%20Co.!5e0!3m2!1sen!2sin!4v1649489111124!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    contact4.appendChild(map);

    //contact3 stuff
    const tellusstuff=document.createElement("p");
    tellusstuff.innerText="Tell us some stuff!!";
    tellusstuff.classList.add("headingc4");
    contact3.appendChild(tellusstuff);



    const name=document.createElement("input");
    name.type="text";
    name.name="name";
    name.id="name";
    const namel=document.createElement("label");
    namel.for="name";
    namel.innerText="Name :";
    const email=document.createElement("input");
    email.type="email";
    email.id="email";
    email.name="email";
    const emaill=document.createElement("label");
    emaill.for="email";
    emaill.innerText="Email :"
    const desc=document.createElement("input");
    desc.classList.add("descip");
    desc.type="text";
    desc.id="desc";
    desc.name="desc";
    const descl=document.createElement("label");
    descl.for="desc";
    descl.innerText="Description :"
    const submit=document.createElement("input");
    submit.type="submit";
    submit.value="Submit";

    contact3.appendChild(namel);
    contact3.appendChild(name);
    contact3.appendChild(emaill);
    contact3.appendChild(email);
    contact3.appendChild(descl);
    contact3.appendChild(desc);
    contact3.appendChild(submit);








    const maincontact=document.createElement("div");
    maincontact.appendChild(contactinn);
    maincontact.classList.add("main-contact");
    return maincontact;


}