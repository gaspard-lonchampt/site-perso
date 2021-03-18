
$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

anime
  .timeline({ loop : true })
  .add({
    targets: ".ml8 .circle-white",
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100,
  })
  .add({
    targets: ".ml8 .circle-container",
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: "-=1000",
  })
  .add({
    targets: ".ml8 .circle-dark",
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: "-=600",
  })
  .add({
    targets: ".ml8 .letters-left",
    scale: [0, 1],
    duration: 1200,
    offset: "-=550",
  })
  .add({
    targets: ".ml8 .bang",
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1800,
    offset: "-=1000",
  })
  .add({
    targets: ".ml8",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400,
  });

anime({
  targets: ".ml8 .circle-dark-dashed",
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true,
});
