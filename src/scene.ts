import { Scene, FreeCamera, HemisphericLight, type Mesh, type Engine, Vector3, MeshBuilder } from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials/grid/gridMaterial';
import { AxesViewer } from '@babylonjs/core/Debug/axesViewer';
import { Inspector } from '@babylonjs/inspector';

export class BabylonScene {
  scene: Scene;
  camera: FreeCamera;
  hemiLight: HemisphericLight;
  ground: Mesh;

  constructor(
    readonly engine: Engine,
    readonly canvas: HTMLCanvasElement
  ) {
    this.scene = new Scene(this.engine);
    this.camera = this.initCamera(this.scene);
    this.hemiLight = this.initHemiLight(this.scene);
    this.ground = this.initGround(this.scene);
    this.initHelper(this.scene);
    Inspector.Show(this.scene, {});
  }

  update(): void {
    this.scene.render();
  }

  initHelper(scene: Scene): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const axes = new AxesViewer(scene, 0.5);
  }

  initCamera(scene: Scene): FreeCamera {
    const camera = new FreeCamera('camera', new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(this.canvas, true);
    return camera;
  }

  initHemiLight(scene: Scene): HemisphericLight {
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
    // Dim the light a small amount - 0 to 1
    light.intensity = 0.7;
    return light;
  }

  initGround(scene: Scene): Mesh {
    const material = new GridMaterial('grid', scene);
    material.wireframe = true;
    const mesh = MeshBuilder.CreateGround('ground', { width: 10, height: 10, subdivisions: 100 }, scene);
    mesh.material = material;
    return mesh;
  }
}
