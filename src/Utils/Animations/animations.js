import gsap from "gsap";

const fadeSettings = [
  { y: "-=10", opacity: 0 },
  {
    duration: 0.4,
    opacity: 1,
    y: "+=10",
    stagger: 0.1,
    ease: "Power0.easeIn"
  }
];
export const fadeIn = (elements, delay = 0) => {
  if (!delay) {
    gsap.fromTo(elements, fadeSettings[0], fadeSettings[1]);
  } else {
    gsap.fromTo(elements, fadeSettings[0], {
      ...fadeSettings[1],
      delay: delay
    });
  }
};
export const fadeOut = elements => {
  gsap.to(elements, {
    duration: 0.2,
    opacity: 0,
    y: "+=20",
    stagger: 0.2,
    ease: "Power0.easeNone"
  });
};

export const revealPage = (elements, parent) => {
  gsap.set(elements, { transformOrigin: "0% -100%" });
  const tl = gsap.timeline();
  tl.to(elements, {
    delay: 0.6,
    duration: 0.4,
    scaleX: 0,
    stagger: 0.15,
    ease: "Power2.easeIn"
  }).to(parent, { autoAlpha: 0 });
};
