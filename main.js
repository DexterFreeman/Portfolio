//Intersection observer observes any components that are currently visible to the user/on screen.
//When these components come into view, .show is added to that components class, which triggers a CSS animation,
//Which can be viewed in /styling/style.scss.

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});


const blob = document.getElementById("block");

//Gets all elements with the .hidden class to pass into the intersection observer.
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

document.onpointermove = event => {
  blob.animate({
    left: `${event.pageX}px`,
    top: `${event.pageY}px`
  }, { duration: 3000, fill: "forwards"})
}