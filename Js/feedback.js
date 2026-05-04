const game = document.querySelector('.feedback-form__select') ;
const pros = document.getElementById('pros');
const cons = document.getElementById('cons');
const form = document.querySelector('.feedback-form');
game.addEventListener("change", ()=>{
    console.log("Selected game:", game.value);
});
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    game.style.borderColor="";
    pros.style.borderColor="";
    cons.style.borderColor="";
    if(game.value==="" || game.value== null)
    {
        alert("Please choose a game!");
        game.style.borderColor="#f06272";
        return;
    }
    if(pros.value==="" || pros.value== null)
    {
        alert("Please write the pros of this game!");
        pros.style.borderColor="#f06272";
        return;
    }
    if(cons.value==="" || cons.value== null)
    {
        alert("Please write the cons of this game!");
        cons.style.borderColor="#f06272";
        return;
    }
    const feedback= {
        game:game.value,
        pros:pros.value,
        cons:cons.value
    };    

localStorage.setItem('Feedback', JSON.stringify(feedback));
window.location.href = "success.html";
});