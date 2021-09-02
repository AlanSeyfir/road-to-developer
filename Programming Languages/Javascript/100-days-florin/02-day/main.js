const btnMoods = document.querySelectorAll(".btn-mood");

btnMoods.forEach((mood) => {
  mood.addEventListener("click", () => {
    if (mood.classList.contains("selected")) {
        mood.classList.remove("selected");
    }else{
        // mood.classList.add("selected");
        btnMoods.forEach((mood) =>{
            mood.classList.remove("selected");
        });
        mood.classList.add('selected');
    }
  });
});

function addDays(date, days){
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}