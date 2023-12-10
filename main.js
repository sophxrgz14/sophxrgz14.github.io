let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ffbd87;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ffbd87;">No bajes la meta, aumenta el esfuerzo.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
