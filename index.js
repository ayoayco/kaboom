// module aliases
let { Engine, Render, Runner, Bodies, Composite } = Matter;

// create an engine
let engine = Engine.create({
  timing: {
    timeScale: 0.3,
  },
});

// create runner
let runner = Runner.create();
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// create a renderer
let render = Render.create({
  element: document.getElementById("canvas"),
  engine: engine,
  options: {
    width: 1600,
    height: 800,
  },
});

generateWorld();

function clearTheWorld() {
  Composite.clear(engine.world);
  Composite.add(engine.world, ground);
}

function kaboom() {
  let manyShapes = new Array(50)
    .fill()
    .map(() =>
      Bodies.polygon(
        Math.random() * 450 + 1,
        Math.random() * 450 + 1,
        Math.random() * 16 + 1,
        Math.random() * 80 + 1
      )
    );

  // add all of the bodies to the world
  Composite.add(engine.world, manyShapes);

  // run the engine
  Runner.run(runner, engine);
}

function addShape() {
  // to be continued
  // let oneShape = Bodies.circle(80, 80, 80);
  let oneShape = Bodies.polygon(
    Math.random() * 450 + 1,
    Math.random() * 450 + 1,
    Math.random() * 12 + 1,
    Math.random() * 150 + 100
  );
  Composite.add(engine.world, oneShape);

  // run the engine
  Runner.run(runner, engine);
}

function generateWorld() {
  Composite.add(engine.world, ground);

  // run the renderer
  Render.run(render);

  // run the engine
  Runner.run(runner, engine);
}
