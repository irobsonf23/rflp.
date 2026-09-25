/* =====================================================
   RFLP
   JAVASCRIPT.JS
   3D INTERACTION
===================================================== */


/* =========================
   OBJETO 3D
========================= */

const hero3d = document.getElementById("hero3d");


if (hero3d) {

    let currentX = 0;
    let currentY = 0;

    let targetX = 0;
    let targetY = 0;


    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX /
                window.innerWidth) - 0.5;

        const y =
            (event.clientY /
                window.innerHeight) - 0.5;


        targetY = x * 18;

        targetX = y * -18;

    });


    function animate3D() {

        currentX +=
            (targetX - currentX) * 0.08;

        currentY +=
            (targetY - currentY) * 0.08;


        hero3d.style.transform =
            `rotateX(${currentX}deg)
             rotateY(${currentY}deg)`;


        requestAnimationFrame(animate3D);

    }


    animate3D();


    /*
        Quando o mouse sai da página,
        o objeto volta suavemente
        para a posição original.
    */

    document.addEventListener(
        "mouseleave",
        () => {

            targetX = 0;
            targetY = 0;

        }
    );

}


/* =========================
   PARALLAX DO FUNDO
========================= */

const shapes =
    document.querySelectorAll(
        ".floating-shape"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        const mouseX =
            (event.clientX /
                window.innerWidth) - 0.5;

        const mouseY =
            (event.clientY /
                window.innerHeight) - 0.5;


        shapes.forEach(
            (shape, index) => {

                const strength =
                    (index + 1) * 10;


                shape.style.marginLeft =
                    `${mouseX * strength}px`;


                shape.style.marginTop =
                    `${mouseY * strength}px`;

            }
        );

    }
);


/* =========================
   TILT NOS CARDS
========================= */

const floatingCards =
    document.querySelectorAll(
        ".floating-card"
    );


floatingCards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transition =
                "transform 0.2s ease";

        }
    );


    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) /
                    centerX) * 15;


            const rotateX =
                ((centerY - y) /
                    centerY) * 15;


            card.style.transform =
                `translateZ(50px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateZ(30px)";

        }
    );

});


/* =========================
   FORMULÁRIO → WHATSAPP
========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nome =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const mensagem =
                document
                    .getElementById("message")
                    .value
                    .trim();


            const numeroWhatsApp =
                "5511945220806";


            const texto =

`Olá, RFLP!

Meu nome é: ${nome}

Meu e-mail: ${email}

Gostaria de falar sobre:

${mensagem}`;


            const mensagemCodificada =
                encodeURIComponent(texto);


            const url =
                `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;


            window.open(
                url,
                "_blank"
            );


            contactForm.reset();

        }
    );

}


/* =========================
   ANIMAÇÃO DE ENTRADA
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);