export default function handler(req, res) {
  // Set the content-type to SVG
  res.setHeader('Content-Type', 'image/svg+xml');
  
  // SVG content as a string
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <!-- Background -->
      <rect width="100%" height="100%" fill="transparent"/>
  
      <style>
.prof-card {
  border: 3px solid rebeccapurple;
  border-radius: 25px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  perspective: 100px;
  gap: 20px;
}

.mongo{
  position: relative;
  width: calc(2rem + 4vw);
  height: calc(3rem + 4vw);
  display: flex;
  align-items: center;
  justify-content: center;
}

.leaf{
  background: linear-gradient(to left bottom, 
  rgb(16, 218, 16) 50%, 
  rgb(156, 255, 156) 50%
);
  height: calc(2rem + .5vw);
  width: calc(2rem + .5vw);
  border-radius: 0 100px;
  transform: rotate(45deg);
  animation: bounce 3s linear infinite;
}

@keyframes bounce {
  0%,100%{
    transform: scale(1) rotate(45deg);
  }
  25%{
    transform: scale(1.1) rotate(45deg);
  }
  50%{
    transform: scale(1.2) rotate(45deg);
  }
  75%{
    transform: scale(1.1) rotate(45deg);
  }
}


.express{
  position: relative;
  width: calc(2rem + 4vw);
  height: calc(3rem + 4vw);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotaterx 5s linear infinite;
}

.square{
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(2rem + .5vw);
  width: calc(2rem + .5vw);
  background-color: rgb(255, 123, 0);
  text-align: center;
}

.square p{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: calc(.8rem + 1vw);
  color: white;
  text-align: center;
  font-weight: bold;
}

@keyframes rotaterx {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}

.react-container{
  position: relative;
  width: calc(2rem + 4vw);
  height: calc(3rem + 4vw);
  display: flex;
  align-items: center;
  justify-content: center;
}

.row{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.oval-1{
  position: absolute;
  height: calc(.8rem + .5vw);
  width: calc(3rem + .5vw);
  border: 2px solid aqua;
  border-radius: 50%;
  animation: reactrotate 3s linear infinite;
}

.oval-2{
  position: absolute;
  height: calc(.8rem + .5vw);
  width: calc(3rem + .5vw);
  border: 2px solid aqua;
  border-radius: 50%;
  transform: rotate(65deg);
  animation: reactrotateback 3s linear infinite;
}

.oval-3{
  position: absolute;
  height: calc(.8rem + .5vw);
  width: calc(3rem + .5vw);
  border: 2px solid aqua;
  border-radius: 50%;
  transform: rotate(-65deg);
  animation: reactrotatefast 3s linear infinite;
}

.react-dot {
  top: 50%;
  left: 50%;
  position: absolute;
  height: calc(.1rem + .5vw);
  width: calc(.1rem + .5vw);
  background-color: aqua;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}


@keyframes reactrotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes reactrotateback {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes reactrotatefast {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
}




.polygon-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.polygon {
  height: calc(3rem + .5vw);
  width: calc(3rem + .5vw);
  background: linear-gradient(
    -135deg,
    #a2fd65 0%,
    #7ddd3d 25%, 
    #61c221 50%,
    #163600 75%, 
    #0c2200 100%
  ); 
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transform-origin: center;
  animation: rotater 5s linear infinite;
}


.polygon-2{
  animation: rotater2 5s linear infinite;
}

@keyframes rotater {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}


      </style>
  
      <!-- Use foreignObject for HTML content in SVG -->
      <foreignObject width="100%" height="100%">
        <div class="main-box" xmlns="http://www.w3.org/1999/xhtml">
    <div class="prof-card">
      <div class="mongo">
         <div class="leaf"></div>
      </div>

      <div class="express">
        <div class="square"><p>E</p></div>
      </div>
    
      <div class="react-container">
          <div class="oval-1"><div class="react-dot"></div></div>
          <div class="oval-2"></div>
          <div class="oval-3"></div>
      </div>


      <div class="node-container">
          <div class="polygon-container">
              <div class="polygon"></div>
          </div>
       </div>

    </div>
        </div>
      </foreignObject>
    </svg>
  `;
  
  // Send the SVG as the response
  res.status(200).send(svg);
}
