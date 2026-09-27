// Prevent Safari's native text selection, long-press callout, double-tap zoom and pinch gestures
// from competing with the game's swipe controls. Pointer events remain the game's only input path.
(()=>{
  const game=document.getElementById("game");
  if(!game)return;
  ["gesturestart","gesturechange","gestureend","dblclick","contextmenu","selectstart"].forEach(type=>{
    game.addEventListener(type,e=>e.preventDefault(),{passive:false});
  });
  game.addEventListener("touchstart",e=>{
    if(e.touches.length>1)e.preventDefault();
  },{passive:false});
  game.addEventListener("touchmove",e=>{
    e.preventDefault();
  },{passive:false});
  game.addEventListener("touchend",e=>{
    e.preventDefault();
  },{passive:false});
})();
