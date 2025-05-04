let menuVisible = false;
// Function to hide or show the menu
function toggleMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function select(){
    // Hide the menu once an option is selected
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Function that applies animations to the skills
function skillEffect(){
    var skills = document.getElementById("skills");
    var skillDistance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skillDistance >= 300){
        let skillsProgress = document.getElementsByClassName("progress");
        skillsProgress[0].classList.add("javascript");
        skillsProgress[1].classList.add("htmlcss");
        skillsProgress[2].classList.add("photoshop");
        skillsProgress[3].classList.add("wordpress");
        skillsProgress[4].classList.add("drupal");
        skillsProgress[5].classList.add("communication");
        skillsProgress[6].classList.add("teamwork");
        skillsProgress[7].classList.add("creativity");
        skillsProgress[8].classList.add("dedication");
        skillsProgress[9].classList.add("project");
    }
}

// Detect scrolling to apply the animation to the skill bars
window.onscroll = function(){
    skillEffect();
}