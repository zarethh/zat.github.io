let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('¿Qué les gusta a los michis aparte de morder pies?')
  .pauseFor(200)
  .deleteChars(10)
  .start();
