/* =========================================
   MENU
========================================= */


const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


if(menuButton && menu){


    menuButton.addEventListener("click",()=>{


        menuButton.classList.toggle("active");

        menu.classList.toggle("active");


        document.body.classList.toggle(
            "menu-open"
        );


    });



    menu.querySelectorAll("a")
    .forEach(link=>{


        link.addEventListener("click",()=>{


            menuButton.classList.remove("active");

            menu.classList.remove("active");

            document.body.classList.remove(
                "menu-open"
            );


        });


    });


}





/* =========================================
   HEADER SCROLL
========================================= */


const header = document.querySelector(".header");


if(header){


    window.addEventListener("scroll",()=>{


        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }


    });


}



/* =========================================
   CUSTOM CURSOR
========================================= */


const cursor = document.querySelector(".cursor");


if(cursor && window.innerWidth > 800){


    document.addEventListener(
        "mousemove",
        (e)=>{


            cursor.style.left =
            `${e.clientX}px`;


            cursor.style.top =
            `${e.clientY}px`;


        }
    );



    const cursorElements =
    document.querySelectorAll(
        "a, button, .button, .project-card"
    );



    cursorElements.forEach(element=>{


        element.addEventListener(
            "mouseenter",
            ()=>{
                cursor.classList.add("active");
            }
        );



        element.addEventListener(
            "mouseleave",
            ()=>{
                cursor.classList.remove("active");
            }
        );


    });


}


/* =========================================
   SCROLL REVEAL
========================================= */


const revealElements = document.querySelectorAll(".reveal");


if(revealElements.length){


    const revealObserver = new IntersectionObserver(
        (entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },
        {

            threshold:0.1,

            rootMargin:"0px 0px -50px 0px"

        }

    );



    revealElements.forEach(element=>{

        revealObserver.observe(element);

    });


}



/* =========================================
   PAGE TRANSITION
========================================= */


const transition =
document.querySelector(".page-transition");


if(transition){



    window.addEventListener(
        "pageshow",
        ()=>{

            transition.classList.remove(
                "active"
            );

        }
    );





    document.querySelectorAll("a")
    .forEach(link=>{


        const href =
        link.getAttribute("href");



        if(
            !href ||
            !href.includes(".html") ||
            link.target === "_blank"
        ){

            return;

        }




        link.addEventListener(
            "click",
            (e)=>{


                e.preventDefault();



                transition.classList.add(
                    "active"
                );



                setTimeout(()=>{


                    window.location.href =
                    href;



                },700);



            }
        );


    });


}






/* =========================================
   CONTACT FORM
========================================= */


const contactForm =
document.querySelector(".contact-form");


const formMessage =
document.querySelector(".form-message");



if(contactForm){


    contactForm.addEventListener(
        "submit",
        (e)=>{


            e.preventDefault();



            if(formMessage){

                formMessage.style.display =
                "block";

            }



            contactForm.reset();




            setTimeout(()=>{


                if(formMessage){

                    formMessage.style.display =
                    "none";

                }


            },4000);



        }
    );


}








/* =========================================
   HERO BLOB PARALLAX
========================================= */

const blobs = document.querySelectorAll(".blob");

if (blobs.length) {

    window.addEventListener("mousemove", (e) => {

        if (window.innerWidth < 1000) return;

        const x = (e.clientX / window.innerWidth - 0.5);
        const y = (e.clientY / window.innerHeight - 0.5);

        blobs.forEach((blob, index) => {

            const strength = (index + 1) * 550;

            blob.style.transform = `
                translate3d(
                    ${x * strength}px,
                    ${y * strength}px,
                    0
                )
            `;

        });

    });

}



/* =========================================
   ABOUT TYPEWRITER
========================================= */


const typingElement =
document.querySelector(".typing-word");



if(typingElement){



const words = [

"imagine.",

"wireframe.",

"design.",

"test.",

"develop."

];



let wordIndex = 0;

let charIndex = 0;

let deleting = false;





function typeEffect(){



    const word =
    words[wordIndex];



    if(!deleting){



        typingElement.textContent =
        word.substring(
            0,
            charIndex + 1
        );



        charIndex++;



        if(charIndex === word.length){


            deleting = true;


            setTimeout(
                typeEffect,
                1200
            );


            return;


        }



    }else{



        typingElement.textContent =
        word.substring(
            0,
            charIndex - 1
        );



        charIndex--;



        if(charIndex === 0){



            deleting = false;


            wordIndex++;



            if(wordIndex >= words.length){

                wordIndex = 0;

            }



        }



    }




    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );


}




typeEffect();



}

/* =========================================
   CASE STUDIES
========================================= */

const openButtons = document.querySelectorAll(".case-open");
const closeButtons = document.querySelectorAll(".case-close");

openButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const project =
        button.closest(".project-card");

        const study =
        project.querySelector(".case-study");

        study.classList.add("open");

        button.style.display="none";

    });

});



closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const study = button.closest(".case-study");
        const project = button.closest(".project-card");
        const openButton = project.querySelector(".case-open");

        openButton.style.display = "inline-flex";

        openButton.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(() => {
            study.classList.remove("open");
        }, 300);

    });

});