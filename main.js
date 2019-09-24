(function () {
    const canvas = document.querySelector('canvas');

	canvas.width = innerWidth;
	canvas.height = innerHeight;
	var ctx = canvas.getContext('2d');
	var circles = [];
    
	function Circle(params) {
		var self = this;
		params = params || {};
        self.x = params.x || Math.round(Math.random() * canvas.width);
		self.y = params.y || Math.round(Math.random() * canvas.height);
		self.v1 = 1;
		self.v2 = 1;
		self.initRadius = params.radius || Math.random() * (60 - 20) + 20;
		self.radius = self.initRadius;
		self.fillColor = params.fillColor || getRandomColor();
		self.strokeColor = params.strokeColor || getRandomColor();
	}


	Circle.prototype.move = function () {		
		this.x += this.v1;
		this.y += this.v2;   

		var radiusDiff = 0;
		this.radius = this.initRadius + Math.max(0.7 * radiusDiff, 0);

		if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
			this.v1 = -this.v1;
		}
		if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
			this.v2 = -this.v2;
		}
	};

	Circle.prototype.draw = function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.strokeStyle = this.strokeColor;
		ctx.lineWidth = 1;
		ctx.fillStyle = this.fillColor;
		ctx.fill();
		ctx.stroke();
	};



	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		circles.forEach(function (circle) {
			circle.move();
			circle.draw();
		});

		requestAnimationFrame(draw);
	}


	requestAnimationFrame(draw);

	function getRandomColor() {
        var r = Math.floor(Math.random() * (256));
        var g = Math.floor(Math.random() * (256));
        var b = Math.floor(Math.random() * (256));     
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
	}

	
        let start = Date.now(); 
        let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 100000) {
            clearInterval(timer);
        return;
  }

  circles.push(new Circle({randomMotion: Math.random() > 0.5}));
  

}, 5000);



        

})();






  