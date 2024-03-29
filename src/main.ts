import { Engine } from '@babylonjs/core';
import { BabylonScene } from './scene';

function run(): void {
  const canvas = document.querySelector<HTMLCanvasElement>('#render-canvas');
  const engine = new Engine(canvas, true);
  if (canvas instanceof HTMLCanvasElement) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const scene = new BabylonScene(engine, canvas);
    engine.runRenderLoop(scene.update.bind(scene));
    window.addEventListener('resize', () => {
      engine.resize();
    });
  } else {
    console.error('Canvas element #render-canvas not found');
  }
}

run();
