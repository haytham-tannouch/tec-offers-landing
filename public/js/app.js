/* Template Name: Upcover - Tailwind CSS Business Landing Page Template
   Author: Shreethemes
   Email: support@shreethemes.in
   Website: https://shreethemes.in
   Version: 1.1.0
   Created: January 2024
   File Description: Main JS file of the template
*/


/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Preloader            *
 *     02.  Menus                *
 *     03.  Back to top          *
 ================================*/
 window.addEventListener('load', fn, false)

 //  window.onload = function loader() {
 function fn() {
     // Preloader
     if (document.getElementById('preloader')) {
         setTimeout(() => {
             document.getElementById('preloader').style.visibility = 'hidden';
             document.getElementById('preloader').style.opacity = '0';
         }, 350);
     }
 }
/*********************/
/*     Menus         */
/*********************/


// Smooth scroll 
try {
    const scroll = new SmoothScroll('#navbar-navlist a', {
        speed: 800,
        offset: 80
    });
} catch (error) {
    
}

// Menu Collapse
const toggleCollapse = (elementId, show = true) => {
    const collapseEl = document.getElementById(elementId);
    if (show) {
        collapseEl.classList.remove('hidden');
    } else {
        collapseEl.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Toggle target elements using [data-collapse]
    for (const collapseToggleEl of document.querySelectorAll('[data-collapse]')) {
        const collapseId = collapseToggleEl.getAttribute('data-collapse');

        collapseToggleEl.addEventListener('click', () => {
            toggleCollapse(collapseId, document.getElementById(collapseId).classList.contains('hidden'));
        });
    }
});

window.toggleCollapse = toggleCollapse;

/*********************/
/*    Back To TOp    */
/*********************/

window.onscroll = () => {
    scrollFunction();
};

function scrollFunction() {
    const mybutton = document.getElementById("back-to-top");
    if (mybutton !== null) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.classList.add("block");
            mybutton.classList.remove("hidden");
        } else {
            mybutton.classList.add("hidden");
            mybutton.classList.remove("block");
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*********************/
/* Dark & Light Mode */
/*********************/
try {
    const changeTheme = (e) => {
        e.preventDefault()
        const htmlTag = document.getElementsByTagName("html")[0]
        
        if (htmlTag.className.includes("dark")) {
            htmlTag.className = 'light'
        } else {
            htmlTag.className = 'dark'
        }
    }

    const switcher = document.getElementById("theme-mode")
    switcher?.addEventListener("click" ,changeTheme )
    
    const chk = document.getElementById('chk');

    chk.addEventListener('change',changeTheme);
} catch (err) {
    
}


/*********************/
/* LTR & RTL Mode */
/*********************/
try{
    const htmlTag = document.getElementsByTagName("html")[0]
    const changeLayout = (e) => {
        e.preventDefault()
        const switcherRtl = document.getElementById("switchRtl")
        if(switcherRtl.innerText === "LTR"){
            htmlTag.dir = "ltr"
        }
        else{
            htmlTag.dir = "rtl"
        }
        
    }
    const switcherRtl = document.getElementById("switchRtl")
    switcherRtl?.addEventListener("click" ,changeLayout )
}
catch(err){}

/*********************/
/*   Feather Icons   */
/*********************/




/*********************/
/*  Active Sidebar   */
/*********************/
(() => {
    const current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);;
    if (current === "") return;
    const menuItems = document.querySelectorAll('.sidebar-nav a');
    for (let i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
            menuItems[i].parentElement.className += " active";
        }
    }
})();

/*********************/
/*  Contact js   */
/*********************/
try {
    // Contact Form
    function validateForm() {
        const form = document.forms.myForm;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const comments = form.comments.value;
        document.getElementById("error-msg").style.opacity = 0;
        document.getElementById('error-msg').innerHTML = "";
        if (name === "" || name === null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
            fadeIn();
            return false;
        }
        if (email === "" || email === null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
            fadeIn();
            return false;
        }
        if (subject === "" || subject === null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
            fadeIn();
            return false;
        }
        if (comments === "" || comments === null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";
            fadeIn();
            return false;
        }
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("simple-msg").innerHTML = this.responseText;
                form.name.value = "";
                form.email.value = "";
                form.subject.value = "";
                form.comments.value = "";
            }
        };
        xhttp.open("POST", "php/contact.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(`name=${name}&email=${email}&subject=${subject}&comments=${comments}`);
        return false;
    }

    function fadeIn() {
        const fade = document.getElementById("error-msg");
        let opacity = 0;
        const intervalID = setInterval(() => {
            if (opacity < 1) {
                opacity = opacity + 0.5
                fade.style.opacity = opacity;
            } else {
                clearInterval(intervalID);
            }
        }, 200);
    }
} catch (error) {
    
}

/*********************/
/*      WoW Js       */
/*********************/
try {
    new WOW().init();
} catch (error) {
    
}