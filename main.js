// selecting elements that needs to be updated and saving them in a constant.
const ratingdsp = document.querySelector('.submited-rating');
const ratingPage = document.querySelector('.rating-page');
const thankyouPage = document.querySelector('.thankyou-page');
// adding event listener on submit button. Clicking will run submitClicked() function.
document.getElementById('submit').addEventListener('click', submitClicked);
// after submit is clicked this function runs. 
//It first finds and saved checked radio button and saved it value or 0 if nothing checked to rating
function submitClicked(){
    const radioBtn = document.querySelector('input[name="rating"]:checked');
    let rating = 0;
    if(radioBtn) rating = radioBtn.value;
    //rating selected msg is constructed and displayed.
    ratingdsp.innerText = 'You selected ' + rating + ' out of 5';
    // rating page becomes display:none (invisivle) and thankyou page becomes visible.
    ratingPage.classList.add('hidden');
    thankyouPage.classList.remove('hidden');
}


