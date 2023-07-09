
import loconativeScroll from "loconative-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { intersectionObserver } from "./useIntersectionObserver";

import image1 from '../assets/images/polestarphoto2.webp'
import image2 from '../assets/images/polestarphoto16.webp'
import image3 from '../assets/images/polestarphoto6.webp'



Splitting()

var viewport = window.innerWidth;
var mobile = 480;


  const scroll = new loconativeScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.07,
  });

  setTimeout(() => {
    scroll.update();
  }, 1000);


  // -------

  const titleText = [...document.querySelectorAll('.content__title[data-splitting][data-effect3]')];

 
  
  titleText.forEach((text) => {
    Splitting({
          target: text,
          by: "chars",
      });
      const chars = text.querySelectorAll(".char")
  })


  const target = window.document.getElementsByClassName('flicker')[0]
    
  const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`

  const colorLetter = letter => `<span style="color: white;">${letter}</span>`;
  const flickerAndColorText = text => 
    text
      .split('')
      .map(flickerLetter)
      .map(colorLetter)
      .join('');
  const electicGlow = target => target.innerHTML = flickerAndColorText(target.textContent);
  
  
  electicGlow(target);
  target.onclick = ({ target }) =>  electicGlow(target);
  


  
  
    const images = Array.from(document.querySelectorAll("#images"));
  
    images.forEach((image) => {
      gsap.set(image, {
        display: "inline-block",
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "10px",
      });

      gsap.fromTo(image.children[0],{
        transform: "scale(1.3)",
        ease: "power3.inOut",
        duration: 1,
        borderRadius: "10px",
      },{
        transform: "scale(1)",
        ease: "power3.inOut",
        duration: 2,
        borderRadius: "10px",
      })

      image?.addEventListener("mouseenter", () => {
        gsap.set(image, {
          display: "inline-block",
          cursor: "pointer",
          overflow: "hidden",
          borderRadius: "10px",
        });
  
        gsap.to(image.children[0], {
          transform: "scale(1.3)",
          ease: "power3.inOut",
          duration: 1,
          borderRadius: "10px",
        });
      });
  
      image?.addEventListener("mouseleave", () => {
        gsap.to(image.children[0], {
          transform: "scale(1)",
          ease: "power3.inOut",
          duration: 0.5,
          borderRadius: "10px",
        });
      });
    });
  
  //-----

  // =-----

  const lightHorizontalLine = document.querySelector("#lightHorizontalLine");
  const thickHorizontalLine = document.querySelector("#thickHorizontalLine");

  intersectionObserver(lightHorizontalLine, { threshold: 0.1 }).then(() => {
    gsap.to(lightHorizontalLine, {
      width: "30rem",
      duration: 5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: lightHorizontalLine,
        scrub: 0.1,
      },
    });
  });


  // -----

  const discoverBoxes = document.querySelectorAll("#discover");

  discoverBoxes.forEach((discoverBox) => {
    discoverBox.addEventListener("mouseenter", () => {
      gsap.to(discoverBox, {
        x: 30,
        ease: "power3.inOut",
        duration: 1,
      });
    });

    discoverBox.addEventListener("mouseleave", () => {
      gsap.to(discoverBox, {
        x: 0,
        ease: "power3.inOut",
        duration: 1,
      });
    });
  });

  const statContainers = Array.from(
    document.querySelectorAll(
      ".showcase-section__container--stats-container__stat-container"
    )
  );

  statContainers.forEach((statContainer) => {
    intersectionObserver(statContainer, { threshold: 0.1 }).then(() => {
      gsap.set(statContainer, {
        visibility: "visible",
      });

      let scrub;
      if (viewport > mobile) {
        const tl = gsap.timeline({scrollTrigger:{
          trigger:statContainer,
          scrub:0.1
        }})
  
        tl.to(statContainer, {
          duration: 1,
          ease: "power3.inOut",
  
          scrollTrigger: {
            trigger: statContainer,
          },
        });
  
        tl.to(statContainer.children[0], {
          width: "10rem",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: statContainer.children[0],
          },
        });
        tl.from(statContainer.children[1], {
          x: "-50px",
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: statContainer.children[0],
          },
        });
  
        tl.fromTo(
          statContainer.children[2],
          { y: 0, opacity: 0 },
          {
            opacity: 1,
            delay: 0.1,
            duration: 0.4,
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            scrollTrigger: {
              trigger: statContainer.children[2],
            },
          }
        );

      } else {
        const tl = gsap.timeline({scrollTrigger:{
          trigger:statContainer,
          scrub:scrub
        }})
  
        gsap.to(statContainer, {
          duration: 1,
          ease: "power3.inOut",
  
          scrollTrigger: {
            trigger: statContainer,
          },
        });
  
        gsap.to(statContainer.children[0], {
          width: "10rem",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: statContainer.children[0],
          },
        });
        gsap.from(statContainer.children[1], {
          x: "-50px",
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: statContainer.children[0],
          },
        });
  
        gsap.fromTo(
          statContainer.children[2],
          { y: 0, opacity: 0 },
          {
            opacity: 1,
            delay: 0.1,
            duration: 0.4,
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            scrollTrigger: {
              trigger: statContainer.children[2],
            },
          }
        );
      }
    });
  });


  // =====

  const news = [
    {image:image1,title:'The pinnacle of electric performance', desc:'Introducing our new ultra-high-performance brand — the world’s first fully electric luxury super-sports car.', min:'10 min read'},
    {image:image2,title:'Beyond charging vehicles', desc:'Hear about the new ways electric vehicles are powering up  offices and transforming remote businesses', min:'7 min read'},
    {image:image3,title:'Never-ending road trip', desc:'How the expanding electric network is changing the way  families plan for vacations', min:'5 min read'},


]
let newsContainer; 


newsContainer = Array.from(document.querySelectorAll('.newsSection__news-container--container'));

const tl = gsap.timeline()

newsContainer.forEach((container,index) => {
  container.children[4].addEventListener('mouseenter',() => {

      gsap.to(container.children[4],{
          x:30,
          ease:"power3.inOut",
          duration:1,
      })

      gsap.to(container.children[4].children[2],{
          delay:0.8,
          opacity:1,
      
          duration:0.5,
          width:'8rem'
         
      })
  })
})



newsContainer.forEach((container,index) => {
  container.children[4].addEventListener('mouseleave',() => {

      gsap.to(container.children[4].children[2],{
          
          opacity:0,
          duration:0.5,
          width:'0'
         
      })
      
      gsap.to(container.children[4],{
          delay:0.3,
          x:0,
          ease:"power3.inOut",
          duration:0.5,
      })

    
  })

})

const smallTitleText =  Array.from(document.querySelectorAll('#smallTitleText'));

smallTitleText.forEach((text) => {
  tl.from(text, {
    y:10,
    duration:1.2,
    ease:"power3.inOut",
    opacity:0,
    scrollTrigger:{
        trigger:text,
        scrub:true
        
    }
  })
  
})


const year = document.querySelectorAll('#year')


year.forEach((y) => {
    y.innerHTML = new Date().getFullYear()
})


