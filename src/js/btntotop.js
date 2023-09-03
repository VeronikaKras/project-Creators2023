const myButton = document.getElementById("btntotop");
myButton.addEventListener('click', onPageTop);

window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }};

function onPageTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

