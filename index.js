// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// create an engine
let engine = Engine.create();

// create a renderer
let render = Render.create({
  element: document.getElementById("canvas"),
  engine: engine,
  options: {
    width: 1600,
    height: 800,
  },
});

function kaboom() {
  let manyShapes = new Array(300)
    .fill()
    .map(() =>
      Bodies.polygon(
        Math.random() * 450 + 1,
        Math.random() * 450 + 1,
        Math.random() * 16 + 1,
        Math.random() * 80 + 1
      )
    );

  generateWorld(manyShapes);
}

function addShape() {
  // to be continued
}

function generateWorld(shapes) {
  // add all of the bodies to the world
  let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
  Composite.add(engine.world, [...shapes, ground]);

  // run the renderer
  Render.run(render);

  // create runner
  let runner = Runner.create();
  // run the engine
  Runner.run(runner, engine);
  Composite.clear();
}
