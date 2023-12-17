//select all filter buttons and all filterable cards
const filterbuttons =document.querySelectorAll(".filter-buttons button")
const filterableCards =document.querySelectorAll(".filterable_cards .card")

//define filter cards function
const filterCards=(e)=>{
document.querySelector(".active").classList.remove("active");
e.target.classList.add("active")
//iterate over each filterable card
filterableCards.forEach((card) => {
    //add "hide" class to hide the card initially
    card.classList.add("hide")
//check if card matches the selected filter or "all" is selected
if(card.dataset.name===e.target.dataset.name || e.target.dataset.name==="all")
{
    card.classList.remove("hide")
}

})
}


//add click event listener to each filter button
filterbuttons.forEach(button => button.addEventListener("click",filterCards))