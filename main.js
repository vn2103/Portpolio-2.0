

const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    document.documentElement.style.setProperty('--first-color', '#F7F7F7');
    document.documentElement.style.setProperty('--first-color-dark', '  #E5E5E5');
    document.documentElement.style.setProperty('--first-color-darken', ' hsl(0, 0%, 80%)');
    document.documentElement.style.setProperty('--second-color', '  #8BC4EA');
    document.documentElement.style.setProperty('--second-color-dark', 'hsl(45, 80%, 60%)');
    document.documentElement.style.setProperty('--white-color', '  hsl(0, 0%, 0%)');
    document.documentElement.style.setProperty('--shadow-img', 'drop-shadow(0 12px 24px hsla(0, 0%, 100%, 0.4))');
    document.documentElement.style.setProperty('--shadow-circle', ' 0 12px 24px hsla(0, 0%, 100%, 0.4)');
    document.documentElement.style.setProperty('--shadow-button', '0 -4px 8px hsla(0, 0%, 100%, 0.3)');
    document.documentElement.style.setProperty('--shadow-card', '0 -8px 24px hsla(0, 0%, 0%, 0.3)');
    document.documentElement.style.setProperty('--shadow-text', ' 0 2px 4px var(--first-color-darken)');
    

  } else {
    document.documentElement.style.setProperty('--first-color', '#032b43');
    document.documentElement.style.setProperty('--first-color-dark', ' #1b998b');
    document.documentElement.style.setProperty('--first-color-darken', ' hsl(170, 100%, 23%)');
    document.documentElement.style.setProperty('--second-color', ' #80c2af');
    document.documentElement.style.setProperty('--second-color-dark', 'hsl(45, 100%, 20%)');
    document.documentElement.style.setProperty('--white-color', ' hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--shadow-img', 'drop-shadow(0 12px 24px hsla(0, 0%, 0%, 0.4))');
    document.documentElement.style.setProperty('--shadow-circle', '0 12px 24px hsla(0, 0%, 0%, 0.4)');
    document.documentElement.style.setProperty('--shadow-button', '0 -4px 8px hsla(0, 0%, 0%, 0.3)');
    document.documentElement.style.setProperty('--shadow-card', '0 -8px 24px hsla(0, 0%, 0%, 0.3)');
    document.documentElement.style.setProperty('--shadow-text', '0 2px 4px var(--first-color-darken)');
  }
};

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
};
/*=============== projects ===============*/
let projects__img=document.querySelector(".projects__img");
let html=document.querySelector("#html");
let css=document.querySelector("#css");
let js=document.querySelector("#js");
let code=document.querySelector("#code");
let ar=document.querySelector("#ar");
let ar1=document.querySelector(".ar1");
let ar2=document.querySelector(".ar2");
let i=0;
let data=[
  {
    ht:"used 50% Html",
     cs:"used 30% css",
     j:" used 6% javascript",
     co:"It contain the portpolio website",
     imo:"Screenshot (242).png"
  },
  {
    ht:"used 40% Html",
     cs:"used 30% css",
     j:" used 56% javascript",
     co:"Welcome to Memory Match, the ultimate online memory game",
     imo:"Screenshot (243).png"
  },
  {
    ht:"used 30% Html",
     cs:"used 20% css",
     j:" used 76% javascript",
     co:"It just login page that you open",
     imo:"Screenshot (244).png"
   
  }
  
];

function store(){
  console.log(i);
  html.innerText=data[i].ht;
  css.innerText=data[i].cs;
  js.innerText=data[i].j;
  code.innerText=data[i].co;
  projects__img.src=data[i].imo;
};
ar1.addEventListener("click",()=>{
  
  if(i==0){
    i=2;
    console.log(i);
    store();
  }
  else if(i<3){
    --i;
    console.log(i);
    store();
  }
  
});
ar2.addEventListener("click",()=>{
  if(i<2){
    ++i;
    console.log(i);
    store();
  }
  else if(i==2){
    i=0;
    console.log(i);
    store();
  }
  
});
      
let ar3=document.querySelector(".ar3");
let ar4=document.querySelector(".ar4");
let photo=document.querySelector("#photo");
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let isPaused = false;
let intervalId;

function updateSlider() {
    slides.forEach((slide, index) => {
        let slideIndex = (index - currentIndex + slides.length) % slides.length;
        slide.style.opacity = '0.9';
        slide.style.transform = '';

        if (slideIndex === 0) {
            slide.style.transform = 'translate3d(-500px, 0, -200px) scale(0.5)';
            slide.style.opacity = '0.9';
            slide.style['z-index'] = '0';
          } 
        else if (slideIndex === 1) {
            slide.style.transform = 'translate3d(-400px, 0, -200px) scale(0.6)';
            slide.style.opacity = '0.9';
            slide.style['z-index'] = '1';
            
        } else if (slideIndex === 2) {
            slide.style.transform = 'translate3d(-300px, 0, -200px) scale(0.7)';
            slide.style.opacity = '0.9';
            slide.style['z-index'] = '2';
        }
        else if (slideIndex === 3) {
          slide.style.transform = 'translate3d(-200px, 0, -200px) scale(0.8)';
          slide.style.opacity = '0.9'; 
          slide.style['z-index'] = '3';
        } else if (slideIndex === 4) {
          slide.style.transform = 'translate3d(-100px, 0, -200px) scale(0.9)';
          slide.style.opacity = '0.9';
          slide.style['z-index'] = '4';
      }
      else if (slideIndex === 5) {
        slide.style.transform = 'translate3d(0, 0, 0) scale(1)';
        slide.style.opacity = '1';
        slide.style['z-index'] = '5';
        
    } else if (slideIndex === 6) {
        slide.style.transform = 'translate3d(100px, 0, -200px) scale(0.9)';
        slide.style.opacity = '0.9';
        slide.style['z-index'] = '4';
    } else if (slideIndex === 7) {
        slide.style.transform = 'translate3d(200px, 0, -200px) scale(0.8)';
        slide.style.opacity = '0.9';
        slide.style['z-index'] = '3';}
    else if (slideIndex === 8) {
      slide.style.transform = 'translate3d(300px, 0, -200px) scale(0.7)';
      slide.style.opacity = '0.9';
      slide.style['z-index'] = '2';} 
      else if (slideIndex === 9) {
      slide.style.transform = 'translate3d(400px, 0, -200px) scale(0.6)';
      slide.style.opacity = '0.9';
      slide.style['z-index'] = '1';}
      else if (slideIndex === 10) {
    slide.style.transform = 'translate3d(500px, 0, -200px) scale(0.5)';
    slide.style.opacity = '0.9';
    slide.style['z-index'] = '0';}
    });

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateSlider();
    });
});

function moveSlider() {
    if (!isPaused) {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }
}

function startSlider() {
    intervalId = setInterval(moveSlider, 4000); 
}

function pauseSlider() {
    isPaused = true;
    clearInterval(intervalId);
    setTimeout(() => {
        isPaused = false;
        startSlider();
    }, 10000); 
}


startSlider();

slides.forEach(slide => {
    slide.addEventListener('click', pauseSlider);
});
updateSlider();

let bo = document.querySelector(".nav__list");
let men= document.querySelector("#men");
let check=0;
men.addEventListener('click',()=>{
  if(check==0){
    men.classList.remove('fa-bars')
    men.classList.add('fa-xmark')
    bo.classList.add('o')
    check=1;
  }
  else if(check==1){
    men.classList.add('fa-bars')
    men.classList.remove('fa-xmark')
    bo.classList.remove('o')
    check=0;
  }
  
})

