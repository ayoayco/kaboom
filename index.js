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
  element: document.body,
  engine: engine,
});

// create two boxes and a ground
let boxA = Bodies.rectangle(400, 200, 80, 200);
let boxB = Bodies.rectangle(450, 50, 80, 80);
let triangle = Bodies.polygon(350, 200, 5, 80);
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

function kaboom() {
  let manyShapes = new Array(300)
    .fill({})
    .map((item) =>
      Bodies.polygon(
        Math.random() * 450 + 1,
        Math.random() * 450 + 1,
        Math.random() * 16 + 1,
        Math.random() * 80 + 1
      )
    );

  console.log(manyShapes);

  generateWorld(manyShapes);
}

function generateWorld(shapes) {
  // add all of the bodies to the world
  // Composite.add(engine.world, [boxA, boxB, triangle, ground]);
  Composite.add(engine.world, [...shapes, ground]);

  // run the renderer
  Render.run(render);

  // create runner
  let runner = Runner.create();
  // run the engine
  Runner.run(runner, engine);
}
