import { Engine } from '@babylonjs/core';
import { BabylonScene } from './scene';

function run(): void {
  const canvas = document.querySelector<HTMLCanvasElement>('#render-canvas');
  if (canvas instanceof HTMLCanvasElement) {
    const engine = new Engine(canvas, true);
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
