let familyDone = false,
    schoolDone = false,
    hobbiesDone = false;
function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function submitAnswer(category, answer) {
    switch(category){
        case 'family':
            familyDone = true;
            const familyMessage = document.getElementById('family-message');
            familyMessage.hidden = false;
            switch (answer) {
                case 'a':
                case 'c':
                    familyMessage.innerText = 'Incorrect, it was option b! While a few members of my family did also attend the University of Vermont, most of them did not.'
                    break;
                case 'b':
                    familyMessage.innerText = 'Correct! A few members of my family did also attend the University of Vermont, but most of them did not.'
                    break;
            }
            break;
        case 'school':
            schoolDone = true;
            const schoolMessage = document.getElementById('school-message');
            schoolMessage.hidden = false;
            switch (answer) {
                case 'a':
                case 'b':
                    schoolMessage.innerText = 'Incorrect, it was option c! I participated in the crew for our theater shows and was in the cast for two shows during my senior year.'
                    break;
                case 'c':
                    schoolMessage.innerText = 'Correct! I participated in the crew for our theater shows, but I was in the cast for two shows during my senior year.'
                    break;
            }
            break;
        case 'hobbies':
            hobbiesDone = true;
            const hobbiesMessage = document.getElementById('hobbies-message');
            hobbiesMessage.hidden = false;
            switch (answer) {
                case 'a':
                case 'b':
                    hobbiesMessage.innerText = 'Incorrect, it was option c! Sadly, running is not a favorite for me, my favorite way to exercise is dance.'
                    break;
                case 'c':
                    hobbiesMessage.innerText = 'Correct! I don\'t love to run, my favorite way to exercise is dance.'
                    break;
            }
            break;
    }
}

ready(() => {
    const familyA = document.getElementById('family-a');
    const familyB = document.getElementById('family-b');
    const familyC = document.getElementById('family-c');
    const schoolA = document.getElementById('school-a');
    const schoolB = document.getElementById('school-b');
    const schoolC = document.getElementById('school-c');
    const hobbiesA = document.getElementById('hobbies-a');
    const hobbiesB = document.getElementById('hobbies-b');
    const hobbiesC = document.getElementById('hobbies-c');
    familyA.addEventListener('click', function(){
        if(!familyDone) {
            familyA.classList.add('selected');
            submitAnswer('family', 'a');
        }
    });
    familyB.addEventListener('click', function(){
        if(!familyDone) {
            familyB.classList.add('selected');
            submitAnswer('family', 'b');
        }
    });
    familyC.addEventListener('click', function(){
        if(!familyDone) {
            familyC.classList.add('selected');
            submitAnswer('family', 'c');
        }
    });
    schoolA.addEventListener('click', function(){
        if(!schoolDone) {
            schoolA.classList.add('selected');
            submitAnswer('school', 'a');
        }
    });
    schoolB.addEventListener('click', function(){
        if(!schoolDone) {
            schoolB.classList.add('selected');
            submitAnswer('school', 'b');
        }
    });
    schoolC.addEventListener('click', function(){
        if(!schoolDone) {
            schoolC.classList.add('selected');
            submitAnswer('school', 'c');
        }
    });
    hobbiesA.addEventListener('click', function(){
        if(!hobbiesDone) {
            hobbiesA.classList.add('selected');
            submitAnswer('hobbies', 'a');
        }
    });
    hobbiesB.addEventListener('click', function(){
        if(!hobbiesDone) {
            hobbiesB.classList.add('selected');
            submitAnswer('hobbies', 'b');
        }
    });
    hobbiesC.addEventListener('click', function(){
        if(!hobbiesDone) {
            hobbiesC.classList.add('selected');
            submitAnswer('hobbies', 'c');
        }
    });
})