// MOBILE MENU
function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("show");
  }
  
  // NAVBAR SCROLL
  const header = document.querySelector(".header");
  
  window.addEventListener("scroll",()=>{
  
  if(window.scrollY>50){
  header.classList.add("scrolled");
  }else{
  header.classList.remove("scrolled");
  }
  
  });
  
  // FADE
  const faders = document.querySelectorAll(".fade");
  
  const observer = new IntersectionObserver(entries=>{
  
  entries.forEach(entry=>{
  if(entry.isIntersecting){
  entry.target.classList.add("appear");
  }
  });
  
  },{threshold:0.2});
  
  faders.forEach(el=>observer.observe(el));
  
  // COUNTER
  const counters=document.querySelectorAll(".counter");
  
  counters.forEach(counter=>{
  
  const update=()=>{
  
  const target=+counter.dataset.target;
  const count=+counter.innerText;
  
  const inc=target/200;
  
  if(count<target){
  counter.innerText=Math.ceil(count+inc);
  setTimeout(update,10);
  }else{
  counter.innerText=target.toLocaleString();
  }
  
  };
  
  update();
  
  });
  
  // SCROLL TOP
  const scrollBtn=document.getElementById("scrollTopBtn");
  
  window.onscroll=()=>{
  scrollBtn.style.display=
  window.scrollY>300?"block":"none";
  };
  
  scrollBtn.onclick=()=>{
  window.scrollTo({top:0,behavior:"smooth"});
  };
  
  // REVIEWS AUTO SCROLL
  const track=document.querySelector(".reviews-track");
  
  let scroll=0;
  
  function autoScroll(){
  
  scroll+=0.5;
  
  track.scrollLeft=scroll;
  
  if(scroll>=track.scrollWidth-track.clientWidth){
  scroll=0;
  }
  
  requestAnimationFrame(autoScroll);
  
  }
  
  autoScroll();