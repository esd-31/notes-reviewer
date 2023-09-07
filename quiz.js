



const btnSubmit = () => {
    var keyAnsOne = "gallileo";
    var keyAnsTwo = "aristotle";
    var keyAnsThree = "8";
    var keyAnsFour = "states of matter";
    var keyAnsFive = "regular pattern";
    var fatherScienceInput = document.getElementById("f-s-input-ans");
    var fatherBiologyInput = document.getElementById("f-b-input-ans");
    var planetInput = document.getElementById("planets-input-ans");
    var solidLiquidInput = document.getElementById("solid-liquid-input-ans");
    var solidParticleInput = document.getElementById("solid-input-ans");
    var correctAnsOne = document.getElementById("correct-ans-one");
    var correctAnsTwo = document.getElementById("correct-ans-two");
    var correctAnsThree = document.getElementById("correct-ans-three");
    var correctAnsFour = document.getElementById("correct-ans-four");
    var correctAnsFive = document.getElementById("correct-ans-five");
    var wrongAnsOne = document.getElementById("wrong-ans");

    if (fatherScienceInput.value === keyAnsOne) {
        correctAnsOne.innerHTML = " Your correct!! " + keyAnsOne + " is the answer.";
    } else if (fatherBiologyInput.value === keyAnsTwo) {
        correctAnsTwo.innerHTML = "Your correct!! " + keyAnsTwo + " is the answer.";
    } else if (planetInput.value === keyAnsThree) {
        correctAnsThree.innerHTML = "Your correct!! " + keyAnsThree + " is the answer.";
    } else if (solidLiquidInput.value === keyAnsFour) {
        correctAnsFour.innerHTML = "Your correct!! " + keyAnsFour + " is the answer.";
    } else if (solidParticleInput.value === keyAnsFive) {
        correctAnsFive.innerHTML = "Your correct!! " + keyAnsFive + " is the answer.";
    }
}


const showSUMMARY = () => {
    var toggleModal = document.querySelector(".modal-container");

    if(toggleModal.style.display === "none") {
        toggleModal.style.display = "block";
    }else {
        toggleModal.style.display = "none";
    }
}