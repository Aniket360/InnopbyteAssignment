function locoscroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locoscroll();

function coursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#coursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
coursorEffect();

function page2Animation() {
  gsap.from(".elem ", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 6,
      
    },
  });

  gsap.from("#page2-top h2", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 6,
    },
  });


  gsap.from(".footer__links", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".footer",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 6,
    },   
  });

  gsap.from("#page4-top", {
    y: 50,
    stagger: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 70%",
      end: "top 50%",
      scrub: 2,
    },   
  });
  
  var tl = gsap.timeline();
  tl.from(".container", {
    x:300,
    stagger: 5,
    duration: 7,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 47%",
      end: "top 20%",
      scrub: 5,
      
    },   
  });
}
page2Animation();

function loader(){
    var tl = gsap.timeline();

tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
tl.to("#loader h3", {
  x: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
tl.to("#loader", {
  opacity: 0,
  display: "none",
});

tl.from("#page1-content h1 span", {
  y: 100,
  opacity: 0,
  stagger:0.2,
  duration:.5,
});
}
loader()

function bookingCard(){
    book = document.querySelector(".book");
cancel = document.querySelector(".cancel");
makeit = document.querySelector(".makeit");
let t1 = gsap.timeline({ paused: true, reversed: true });

let t2 = gsap.timeline({ paused: true, reversed: true });

makeit.addEventListener("click", (e) => {
  t2.play();
});

t2.from(
  ".body",
  {
    ease: "elastic.out(1, .8)",
    yPercent: 100,
    duration: 1,
  },
  0
);

book.addEventListener("click", (e) => {
  t1.play();
});

cancel.addEventListener("click", (e) => {
  t1.reverse();
});

t1.to(
  ".body",
  {
    ease: "power1.inOut",
    margin: 0,
    duration: 0.3,
  },
  0
);

t1.to(
  ".header button",
  {
    ease: "power1.inOut",
    scale: 0,
    duration: 0.3,
  },
  0
);

t1.to(
  ".book",
  {
    ease: "power1.inOut",
    opacity: 0,
    xPercent: 300,
    duration: 0.0,
  },
  0
);

t1.from(
  ".cancel",
  {
    ease: "power1.inOut",
    xPercent: 300,
    duration: 0.6,
  },
  0
);

t1.to(
  ".about",
  {
    ease: "power1.inOut",
    opacity: 0,
    duration: 0.3,
  },
  0
);

t1.to(
  ".main",
  {
    ease: "power1.inOut",
    opacity: 0,
    duration: 0.3,
  },
  0
);

t1.to(
  ".book-container",
  {
    ease: "elastic.out(1, .8)",
    height: 500,
    marginTop: -190,
    zIndex: 10,
    duration: 0.3,
  },
  0
);

t1.to(
  ".book-container2",
  {
    ease: "power1.inOut",
    marginTop: 0,
    duration: 0.3,
  },
  0
);

t1.to(
  ".method",
  {
    ease: "power1.inOut",
    display: "block",
    duration: 0.3,
  },
  0
);
}
bookingCard()


// gallery

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});
