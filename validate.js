let check = () =>{
    const alphaex = /^[a-zA-Z]+$/
    const numex = /^[0-9]+$/
    const namevalid = document.getElementById("namevalid").value;
    const nameError= document.getElementById("nameError");
    let nameret = false;
    const phnvalid = document.getElementById("phnvalid").value;
    const phnError= document.getElementById("phnError");
    let phnret = false;
    if( namevalid === "")
    {
        nameError.textContent = ("Enter your name");
    }
    else {
        if(namevalid.match(alphaex)){
            nameError.textContent = ("");
            nameret = true;
        }
        else{
            nameError.textContent = ("Name should only contains alphabets");
        } 
    }
    if( phnvalid === ""){
        phnError.textContent = "Enter mobile number";
    }
    else if(phnvalid.match(numex))
        {
            if(phnvalid.length === 10){
                phnError.textContent = "";
                phnret = true;
            }
            else{
                phnError.textContent = "Phone number should be 10 digits long";
            }
           
    }
    else{
        phnError.textContent = "Phone number should only contains numbers"
    }

    if(nameret && phnret){
        return true;
    }
    else{
        return false;
    }
}
const scrollContainer = document.querySelector('.forscroll');

let scrollAmount = 0;
let maxScroll = scrollContainer.scrollWidth / 2; // Halfway point

function smoothScroll() {
    scrollAmount += 1; // Adjust speed
    if (scrollAmount >= maxScroll) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' }); // Reset to start with smooth scrolling
        scrollAmount = 0;
    } else {
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
    requestAnimationFrame(smoothScroll);
}

smoothScroll();

