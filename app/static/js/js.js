document.getElementById("scroll").addEventListener("click", function (e) {
  e.preventDefault();
  var targetElement = document.getElementById("company");
  var targetPosition = targetElement.offsetTop;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var duration = 900;
  var start = null;

  function animate(currentTime) {
    if (start === null) start = currentTime;
    var timeElapsed = currentTime - start;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animate);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animate);
});

document.querySelectorAll(".btn-learn").forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    var targetId = this.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);
    var targetPosition = targetElement.offsetTop - 50; // Adjust the offset as needed
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 1500;
    var start = null;

    function animate(currentTime) {
      if (start === null) start = currentTime;
      var timeElapsed = currentTime - start;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animate);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animate);
  });
});
