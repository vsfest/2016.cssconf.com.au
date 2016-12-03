(function() {

  var s = Snap("#camo");
  var polygons = s.selectAll('polygon');
  var originalPoints = [];

  var frequency = 0.3;
  var magnitude = 100;
  var scale = 0.02;

  for (var i = 0; i < polygons.length; i++) {
    originalPoints[i] = polygons[i].attr('points');
  }

	var animate;

  function step(timestamp) {
    var currentTime = new Date().getTime() / 1000;

    for (var i = 0; i < polygons.length; i++) {
      var points = [];
      for (var j = 0; j < originalPoints[i].length; j += 2) {
        points[j] = parseInt(originalPoints[i][j], 10) +
          Math.sin((parseInt(originalPoints[i][j + 1], 10) * scale + currentTime) * frequency) *
          magnitude;
        points[j + 1] = originalPoints[i][j + 1];
      }
      polygons[i].attr({
        'points': points
      });
    }

    animate = requestAnimationFrame(step);
  }

  	animate = requestAnimationFrame(step);
  	var stopped = false;

  	var camouflage = function (event) {
  		if (stopped) {
  			animate = requestAnimationFrame(step);
  			stopped = false;
  		} else {
  			cancelAnimationFrame(animate);
  			stopped = true;
  		}
  	};

  	document.querySelector('#video').addEventListener('mouseenter', camouflage);
  	document.querySelector('#video').addEventListener('mouseleave', camouflage);

})();
