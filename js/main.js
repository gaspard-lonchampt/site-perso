// navigation mobile

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  if ($(window).width() < 768) {
    $("#tabs_nav").removeClass("is-large").addClass("is-small");
  } else {
    $("#tabs_nav").removeClass("is-small").addClass("is-large");
  }
});
  // animation en fonction du scroll

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav_bar_js").style.transform =
        "translate(0, 0px)";
    } else {
      document.getElementById("nav_bar_js").style.transform =
        "translate(0, -300px)";
    }
    prevScrollpos = currentScrollPos;
  };

  // animation page d'accueil

  anime
    .timeline({ loop: true })
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

// animation tabs

("use strict");

document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.getElementsByClassName("tabs");
  if (tabs) {
    var _loop = function _loop() {
      var tabListItems = tabs[i].querySelectorAll("li");
      tabListItems.forEach(function (tabListItem) {
        // création d'un écouteur d'évènements sur le clic d'une tab
        tabListItem.addEventListener(
          "click",
          function () {
            // suppression de la classe is-active sur chacune des tabs avant de la rajouter sur la tab qui a été cliquée
            tabListItems.forEach(function (tabListItem) {
              tabListItem.classList.remove("is-active");
            });
            tabListItem.classList.add("is-active");

            // tabName correspond à la valeur de l'attribut data-tab
            var tabName = tabListItem.dataset.tab;

            // on identifie tous les contenus possibles puis on applique la classe has-display-none si l'ID du contenu ne correspond pas à la valeur de l'attribut data-tab
            tabListItem
              .closest(".js-tabs-container")
              .querySelectorAll(".js-tab-content")
              .forEach(function (tabContent) {
                if (tabContent.id !== tabName) {
                  tabContent.classList.add("has-display-none");
                } else {
                  tabContent.classList.remove("has-display-none");
                }
              });
          },
          false
        );
      });
    };

    for (var i = 0; i < tabs.length; i++) {
      _loop();
    }
  }
});

// animation scroll reveal

ScrollReveal().reveal(".text_headline", { duration: 2500 });
ScrollReveal().reveal(".text_headline", { interval: 500 });