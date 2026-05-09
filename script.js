
document.addEventListener("DOMContentLoaded", () => {

    /* NAV ACTIVE STATE */
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

});

/* OPEN CONNECT PAGE */
function openConnect() {
    const page = document.getElementById("connectPage");
    if (page) {
        page.style.display = "flex";
    }
}

/* CLOSE CONNECT PAGE */
function closeConnect() {
    const page = document.getElementById("connectPage");
    if (page) {
        page.style.display = "none";
    }
}
function openConnect() {
    document.getElementById("connectPage").style.display = "flex";
}

function closeConnect() {
    document.getElementById("connectPage").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {

    // Contact menu link
    const contactLink = document.querySelector(".contact-link");

    if (contactLink) {
        contactLink.addEventListener("click", () => {
            openConnect();
        });
    }

});
/* ABOUT PAGE OPEN */
document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.querySelectorAll(".nav-link")[1]; // 2nd link = About
    const aboutPage = document.getElementById("aboutPage");

    if (aboutLink && aboutPage) {
        aboutLink.addEventListener("click", (e) => {
            e.preventDefault();
            aboutPage.style.display = "block";
        });
    }
});

/* CLOSE ABOUT PAGE */
function closeAbout() {
    document.getElementById("aboutPage").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.querySelectorAll(".nav-link")[1]; // About (2nd)
    const aboutPage = document.getElementById("aboutPage");

    if (aboutLink) {
        aboutLink.addEventListener("click", (e) => {
            e.preventDefault();
            aboutPage.style.display = "block";
        });
    }
});

function closeAbout() {
    document.getElementById("aboutPage").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {

    // Contact menu link
    const contactLink = document.querySelector(".contact-link");

    if (contactLink) {
        contactLink.addEventListener("click", () => {
            openConnect();
        });
    }

});
function openConnect() {
    document.getElementById("connectPage").style.display = "none";
}

function closeConnect() {
    document.getElementById("connectPage").style.display = "none";
}
function openConnect() {
    document.getElementById("connectPage").style.display = "none";
}

function closeConnect() {
    document.getElementById("connectPage").style.display = "none";
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink =
        "mailto:zakariaalam@gmail.com" +
        "?subject=New Message from " + name +
        "&body=" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A%0A" +
        "Message:%0A" + message;

    window.location.href = mailtoLink;
});
// EmailJS init
(function () {
    emailjs.init("public_ABC123"); // 🔴 apna PUBLIC KEY yahan paste karo
})();

// Form submit
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_abcd123",   // Service ID
            "template_xyz789",   // Template ID
            this
        ).then(
            function () {
                alert("✅ Message sent successfully!");
                form.reset();
            },
            function (error) {
                alert("❌ Failed to send message!");
                console.log(error);
            }
        );
    });
});
function openConnect() {
    document.getElementById("connectPage").style.display = "flex";
}

function closeConnect() {
    document.getElementById("connectPage").style.display = "none";
}
function openConnect() {
    document.getElementById("connectPage").style.display = "flex";
}

function closeConnect() {
    document.getElementById("connectPage").style.display = "none";
}
function openConnect() {
    document.querySelectorAll(".page-section").forEach(sec => {
        sec.style.display = "none";
    });

    const connectPage = document.getElementById("connectPage");
    if (connectPage) {
        connectPage.style.display = "block";
    }
}

function closeConnect() {
    openConnect(); // ❌ ab close ka concept hi nahi
}
document.addEventListener("DOMContentLoaded", function () {
    const connectPage = document.getElementById("connectPage");

    // 🔒 page refresh par force hide
    if (connectPage) {
        connectPage.style.display = "none";
    }
});
function openConnect() {
    document.getElementById("connectPage").style.display = "flex";
}
function showSection(id) {

    document.querySelectorAll(".page-section").forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    console.log("Message Sent!");
});
// EmailJS init
(function () {
    emailjs.init("7oDmL5f7fkGkJtCy7");
})();

// Form submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_9wq5u2o",
        "template_ci49n9a",
        this
    ).then(
        function () {
            alert("Message sent successfully!");
        },
        function (error) {
            alert("Failed to send message!");
            console.log(error);
        }
    );
});

document.addEventListener("DOMContentLoaded", () => {

    /* NAV ACTIVE STATE */
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

});

/* OPEN CONNECT PAGE */
function openConnect() {
    const page = document.getElementById("connectPage");
    if (page) {
        page.style.display = "flex";
    }
}

/* CLOSE CONNECT PAGE */
function closeConnect() {
    const page = document.getElementById("connectPage");
    if (page) {
        page.style.display = "none";
    }
}
function openConnect() {
    document.getElementById("connectPage").style.display = "flex";
}

function closeConnect() {
    document.getElementById("connectPage").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {

    // Contact menu link
    const contactLink = document.querySelector(".contact-link");

    if (contactLink) {
        contactLink.addEventListener("click", () => {
            openConnect();
        });
    }

});
/* ABOUT PAGE OPEN */
document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.querySelectorAll(".nav-link")[1]; // 2nd link = About
    const aboutPage = document.getElementById("aboutPage");

    if (aboutLink && aboutPage) {
        aboutLink.addEventListener("click", (e) => {
            e.preventDefault();
            aboutPage.style.display = "block";
        });
    }
});

/* CLOSE ABOUT PAGE */
function closeAbout() {
    document.getElementById("aboutPage").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.querySelectorAll(".nav-link")[1]; // About (2nd)
    const aboutPage = document.getElementById("aboutPage");

    if (aboutLink) {
        aboutLink.addEventListener("click", (e) => {
            e.preventDefault();
            aboutPage.style.display = "block";
        });
    }
});

function closeAbout() {
    document.getElementById("aboutPage").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {

    // Contact menu link
    const contactLink = document.querySelector(".contact-link");

    if (contactLink) {
        contactLink.addEventListener("click", () => {
            openConnect();
        });
    }

});
function openConnect() {
    document.getElementById("connectPage").style.display = "none";
}

function closeConnect() {
    document.getElementById("connectPage").style.display = "none";
}
function openConnect() {
    document.getElementById("connectPage").style.display = "none";
}

function closeConnect() {
    document.getElementById("connectPage").style.display = "none";
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink =
        "mailto:zakariaalam@gmail.com" +
        "?subject=New Message from " + name +
        "&body=" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A%0A" +
        "Message:%0A" + message;

    window.location.href = mailtoLink;
});
// EmailJS init
(function () {
    emailjs.init("public_ABC123"); // 🔴 apna PUBLIC KEY yahan paste karo
})();

// Form submit
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_abcd123",   // Service ID
            "template_xyz789",   // Template ID
            this
        ).then(
            function () {
                alert("✅ Message sent successfully!");
                form.reset();
            },
            function (error) {
                alert("❌ Failed to send message!");
                console.log(error);
            }
        );
    });
});
function openConnect() {
    document.getElementById("connectPage").style.display = "flex";
}

function closeConnect() {
    document.getElementById("connectPage").style.display = "none";
}
function openConnect() {
    document.getElementById("connectPage").style.display = "flex";
}

function closeConnect() {
    document.getElementById("connectPage").style.display = "none";
}
function openConnect() {
    document.querySelectorAll(".page-section").forEach(sec => {
        sec.style.display = "none";
    });

    const connectPage = document.getElementById("connectPage");
    if (connectPage) {
        connectPage.style.display = "block";
    }
}

function closeConnect() {
    openConnect(); // ❌ ab close ka concept hi nahi
}
document.addEventListener("DOMContentLoaded", function () {
    const connectPage = document.getElementById("connectPage");

    // 🔒 page refresh par force hide
    if (connectPage) {
        connectPage.style.display = "none";
    }
});
function openConnect() {
    document.getElementById("connectPage").style.display = "flex";
}
function showSection(id) {

    document.querySelectorAll(".page-section").forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    console.log("Message Sent!");
});
// EmailJS init
(function () {
    emailjs.init("7oDmL5f7fkGkJtCy7");
})();

// Form submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_9wq5u2o",
        "template_ci49n9a",
        this
    ).then(
        function () {
            alert("Message sent successfully!");
        },
        function (error) {
            alert("Failed to send message!");
            console.log(error);
        }
    );
});

