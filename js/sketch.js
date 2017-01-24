
    var bugs = []; // array of Jitter objects
    var contador1;
    var diametroCirculo;
    var myCanvas;

    function setup() 
    {
      myCanvas = createCanvas(windowWidth, windowHeight);
      myCanvas.parent('fondoEspacial');
      
      // Create objects
      for (var i=0; i<100; i++) {
        bugs.push(new Jitter());
      }

      contador1 = 0;
      diametroCirculo = 200;
    }

    function draw() 
    {

      background(0);

      for (var i=0; i<bugs.length; i++) {
        bugs[i].move();
        bugs[i].display();
        bugs[i].palpito();
      }

      push();
      translate(864, 0);
      noStroke();
      fill(51, 219 ,248);
      polygon(0, 0, 120, 3); 
      pop();

      push();
      translate(929, 27);
      rotate(frameCount / 200.0);
      noFill();
      stroke(51, 219 ,248);
      polygon(0, 0, 82, 3); 
      pop();

      push();
      translate(1250, 680);
      rotate(frameCount / -100.0);
      noStroke();
      fill(255, 255 ,255);
      polygon(0, 0, 220, 3); 
      pop();

      push();
      translate(1250, 680);
      stroke(255, 255 ,255);
      noFill();
      polygon(0, 0, 220, 3); 
      pop();

      //poligono de la izquierda
      push();
      translate(0, 170);
      rotate(frameCount / 100.0);
      strokeWeight(8);
      noFill();
      stroke(51, 219 ,248);
      polygon(0, 0, 70, 7); 
      pop();

      push();
      translate(0, 170);
      rotate(frameCount / -200.0);
      stroke(51, 180 ,248);
      strokeWeight(8);
      noFill();
      polygon(0, 0, 45, 5); 
      pop();

      push();
      translate(0, 170);
      rotate(frameCount / 50.0);
      strokeWeight(4);
      stroke(51, 140 ,248);
      noFill();
      polygon(0, 0, 20, 7); 
      pop();

      push();
      translate(0, 170);
      rotate(frameCount / -100.0);
      strokeWeight(2);
      stroke(255);
      polygon(0, 0, 90, 2); 
      pop();

      push();
      translate(0, 170);
      rotate(frameCount / 100.0);
      strokeWeight(2);
      stroke(255);
      polygon(0, 0, 90, 2); 
      pop();

      // linea despues de circulo abajo
      push();
      translate(300, 570);
      rotate(frameCount / 50.0);
      strokeWeight(2);
      stroke(0, 119, 188);
      polygon(0, 0, 90, 2); 
      pop();

      push();
      translate(300, 570);
      rotate(frameCount / -200.0);
      strokeWeight(2);
      stroke(0, 119, 188);
      polygon(0, 0, 90, 2); 
      pop();

      push();
      translate(1098, 258);
      rotate(frameCount / -50.0);
      strokeWeight(2);
      stroke(0, 179, 148);
      noFill();
      polygon(0, 0, 150, 12); 
      pop();

      push();
      translate(1098, 258);
      rotate(frameCount / 150.0);
      strokeWeight(4);
      stroke(0, 139, 248);
      noFill();
      polygon(0, 0, 50, 10); 
      pop();

      contador1++;

      if(contador1 >= diametroCirculo)
      {
        contador1 = 0;
      }

      else if (contador1 == 0)
      {
        contador1 / 100;
      }
        noStroke();
        fill(0, 179, 148);
        ellipse(553, 377, contador1, contador1);      
    }

    // Poligono
    function polygon(x, y, radius, npoints) {
      var angle = TWO_PI / npoints;
      beginShape();
      for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
      }
      endShape(CLOSE);
    }

    // cuerpos
    function Jitter() 
    {
      // posición
      this.x = random(width);
      this.y = random(height);

      this.vida = random(-0.1,0.1);

      // diametro
      this.diameter = random(10, 30);

      // velocidad del movimiento
      this.speed = 1.0;

      this.move = function() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        this.vida += this.speed;

        if(this.vida >= this.diameter)
        {
          this.vida = 1;
        }
      };

      this.display = function() 
      {
        stroke(51, 219 ,248);
        strokeWeight(2);
        noFill();
        ellipse(this.x, this.y, this.diameter, this.diameter);
      };

      this.palpito = function()
      {
        noStroke();
        fill(0, 219 ,248);
        ellipse(this.x, this.y, this.vida, this.vida);

      };
    }
