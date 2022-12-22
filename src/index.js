function toggleNavigation(element) {
  element.classList.toggle("opened");

  const navigation = document.getElementById("mobile-navigation");

  if (navigation) {
    navigation.setAttribute(
      "aria-expanded",
      navigation.classList.contains("opened")
    );

    if (navigation.style.maxHeight === "500px") {
      navigation.style.maxHeight = "0px";
    } else {
      navigation.style.maxHeight = "500px";
    }
  }
}

const hideNavigationOnResize = window.addEventListener("resize", () => {
  const navigation = document.getElementById("mobile-navigation");
  const navigationToggler = document.getElementById("navigation-toggler");

  if (
    navigation &&
    navigation.style.maxHeight !== "0px" &&
    window.innerWidth > 767
  ) {
    navigation.style.maxHeight = "0";
  }

  if (
    navigationToggler &&
    navigationToggler.classList.contains("opened") &&
    window.innerWidth > 767
  ) {
    navigationToggler.classList.remove("opened");
  }
});

window.addEventListener("load", hideNavigationOnResize);
