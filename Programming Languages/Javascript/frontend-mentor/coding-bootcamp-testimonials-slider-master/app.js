const users = [
  {
    id: 1,
    name: "Tanya Sinclair",
    job_position: "UX Engineer",
    review:
      " “I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”",
    photo: 'images/image-tanya.jpg'
  },
  {
    id: 2,
    name: "John Tarkpor",
    job_position: "Junior Front-end Developer",
    review:
      "“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
    photo: 'images/image-john.jpg'
  }
];
const name = document.getElementById('name');
const jobPosition = document.getElementById('jobPosition');
const review = document.getElementById('review');
const photo = document.getElementById('photo');

let currentItem = 0;

function obtainUser(user){
  const reviewItem = users[user];
  name.textContent = reviewItem.name;
  jobPosition.textContent = reviewItem.job_position;
  review.textContent = reviewItem.review;
  photo.src = reviewItem.photo;
}

const btn = document.querySelector('.hero__btn');
btn.addEventListener('click', () =>{
  if(currentItem >= users.length - 1){
    currentItem = 0;
  }else{
    currentItem = 1;
  }
  obtainUser(currentItem);
});