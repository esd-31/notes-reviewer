


const reviewerTools = [
    {
        id: 1,
        topic: "Biology",
        urlImg: "https://img.freepik.com/premium-photo/investigations-defunct-chemistry-facility-laboratory-chemistry-instruction_410516-4221.jpg",
    },
    {
        id: 2,
        topic: "Chemistry",
        urlImg: "https://wallpapers.com/images/hd/creative-cloud-violet-chemistry-1xw5ta8wkmrgg4sk.jpg",
    },
    {
        id: 3,
        topic: "Periodical Table",
        urlImg: "https://sciencenotes.org/wp-content/uploads/2017/05/PeriodicTableWallpaper2017BBG.png",
    }
];

const showContent = document.querySelector(".content");

const displayReviewerTools = reviewerTools.map((reviewerTool, index) => {
    return `  <div class="reviewer-tools-content" key=${index}>
    <img src=${reviewerTool.urlImg} onclick='alertBTN()'>
    <strong id='toggle-infos'>${reviewerTool.topic}</strong>
</div>`;

});

showContent.innerHTML = displayReviewerTools;


const alertBTN = () => {
    alert("Please click GET STARTED BUTTON!!");
}


const btnSTARTED = () => {
    var modalCONTAINER = document.querySelector(".modal-container");
    if (modalCONTAINER.style.display === "none") {
        modalCONTAINER.style.display = "block";
    } else {
        modalCONTAINER.style.display = "none";
    }
}

const topicOptions = () => {
    var valueOptTopics = document.getElementById("value-opt-topics");
    var linksBTN = document.getElementById("demo");


    if (valueOptTopics.value === "biology") {
        linksBTN.disabled = false;
        linksBTN.textContent = "wait after 5 seconds....";
        setTimeout(() => {
            window.location.href = '../pages/content-biology.html';
        }, 5000);
    } else if (valueOptTopics.value === "chemistry") {
        linksBTN.disabled = false;
        linksBTN.textContent = "GO TO LEARNING MATERIALS = CHEMISTRY";
    } else if (valueOptTopics.value === "ptable") {
        linksBTN.disabled = false;
        linksBTN.textContent = "GO TO LEARNING MATERIALS = PERIODIC TABLE";
    } else {
        linksBTN.disabled = true;
        linksBTN.textContent = "GO TO LEARNING MATERIALS";
    }
}

const closeModal = () => {
    var modalCONTAINER = document.querySelector(".modal-container");
    modalCONTAINER.style.display = "none";

}


const showCaptcha = () => {
    var captchaContainer = document.querySelector(".captcha-container");
    var toggleCaptcha = document.getElementById("toggle-captcha");
    if (captchaContainer.style.display === "none") {
        captchaContainer.style.display = "block";
        toggleCaptcha.textContent = "EXIT"
    } else {
        captchaContainer.style.display = "none";
        toggleCaptcha.textContent = "START LEARNING";
    }

}


const goBTN = document.getElementById("btn-go");
goBTN.addEventListener("click", () => {
    var inputCaptcha = document.getElementById("input-captcha");
    var captchaVal = document.getElementById("captcha-val");
    var goToQuizzes = document.getElementById("go-to-quizzes");
 
    if(inputCaptcha.value == captchaVal.innerHTML) {
        alert("MATCHED");
        inputCaptcha.value = null;
        window.location.href = '../pages/science-quiz.html';
    }else {
        goToQuizzes.innerHTML = "Not match the captcha!";
        goToQuizzes.style.color = "red";
    }

});

const captchaVal = () => {
    var inputCaptcha = document.getElementById("input-captcha");
    var goBTN = document.getElementById("btn-go");


    if(inputCaptcha.value !== "") {
        goBTN.disabled = false;
    }else {
        goBTN.disabled = true;
    }

}

const refreshCaptcha = () => {
    var captchaVal = document.getElementById("captcha-val");
    var inputCaptcha = document.getElementById("input-captcha");
    var goBTN = document.getElementById("btn-go");
    inputCaptcha.value = null; 
    goBTN.disabled = !false;
    let uniquechar = "";
    let randomchar =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
    captchaVal.innerHTML = uniquechar;

}


const btnSharePrayer = () => {
    var inputPrayer = document.getElementById("input-prayer");
    inputPrayer.disabled = false;
}


const inputAPRAYER = () => {
    var btnSEND = document.getElementById("btn-send");
    var inputPrayer = document.getElementById("input-prayer");

    if(inputAPRAYER.value !== "") {
        btnSEND.style.opacity = "1.5";
    }else {
        inputPrayer.disabled = true;
        btnSEND.style.opacity = "0.5";

    }
}

const myMenu = () => {
    var menuLinks = document.querySelector(".menu-links");
    var toggleMEnu = document.getElementById("toggle-menu");
    if(menuLinks.style.display === "none") {
        menuLinks.style.display = "block"
    }else {
        menuLinks.style.display = "none";
    }
}



var customLoader = document.querySelector(".custom-loader");
var index = document.querySelector(".index");

var bodyRoot = document.body;

setTimeout(() => {
    index.style.display = "block";
    customLoader.style.display = "none";
}, 2000);


const linkHome = () => {
   alert("This is the home!");
}

const linkQuiz = () => {
    alert("Check at the below and start the quizzes!");
 }