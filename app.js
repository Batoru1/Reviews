//reviev data
const reviews = [
  {
    id: 1,
    name: 'kitty kitington',
    profession: 'supreme ruler',
    img: 'images/cat.jpg',
    text: "My water bowl is clean and freshly replenished, so i'll drink from the toilet grab pompom in mouth and put in water dish yet pretend you want to go out but then don't naughty running cat. Fall asleep on the washing machine eats owners hair then claws head stare at owner accusingly",
  },
  {
    id: 2,
    name: 'chuck just chuck',
    profession: 'hr manager',
    img: 'images/chuck.jpeg',
    text: "Chuck Norris doesn't have feet, just another pair of fists Chuck is the reason you can't leave the Hotel California, The Great Wall of China was originally created to keep Chuck Norris out. It failed miserably. Chuck Norris has two speeds. Walk, and Kill.",
  },
  {
    id: 3,
    name: 'perpetum internum',
    profession: 'le workee',
    img: 'images/dank.png',
    text: 'Heat map difficulty Super Mario attract mode Battlefield dead zone corruptor hyperspace Ratchet & Clank controller zero-player game. Rubber banding Camping/Active Camping Grand Theft Auto III frame-rate indie QQ Platform Game exploit DLC ',
  },
  {
    id: 4,
    name: 'sam "the man"',
    profession: 'talent aquisition specialist',
    img: 'images/samuel.jpg',
    text: "Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
  },
];
//select items

const img = document.getElementById('img-person');
const name = document.getElementById('name');
const profession = document.getElementById('profession');
const text = document.getElementById('ipsumTxt');

const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector('.next-btn');
const random_btn = document.querySelector('.random-btn');

//set starting item

let currentItem = 0;

//load initial item

window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  profession.textContent = item.profession;
  text.textContent = item.text;
});

//show person based on item

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  profession.textContent = item.profession;
  text.textContent = item.text;
}

//show next person

next_btn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show prev person

prev_btn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//show random person
random_btn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
