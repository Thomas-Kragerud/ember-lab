import { useEffect, useRef } from 'react';
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  SceneLoader,
  Color4,
  MeshBuilder,
} from '@babylonjs/core';
import '@babylonjs/loaders/glTF';

const BASE_URL = import.meta.env.BASE_URL; // to locate ember_icon.webp

function RobotViewer({ cdn_name }) {
  const containerRef = useRef(null);   // wrapper div
  const canvasRef    = useRef(null);

  useEffect(() => {
    const canvas     = canvasRef.current;
    const container  = containerRef.current;
    if (!canvas || !container) return;

    /* ----------  Babylon engine  ---------- */
    const engine = new Engine(canvas, true);
    const scene  = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 0);

    /* ----------  Camera  ---------- */
    const camera = new ArcRotateCamera(
      'camera',
      Math.PI / 2,
      Math.PI / 3,
      2.5,              // start closer
      Vector3.Zero(),
      scene,
    );
    camera.lowerRadiusLimit = 1.5;
    camera.upperRadiusLimit = 6;
    camera.wheelPrecision   = 50;
    camera.attachControl(canvas, false);

    /*  ⟳  keep the model rotating  */
    scene.registerBeforeRender(() => { camera.alpha += 0.001; });

    /* ----------  Lighting  ---------- */
    new HemisphericLight('hemi', new Vector3(0, 1, 0), scene).intensity = 0.8;

    /* ----------  Component‑local loading overlay  ---------- */
    const overlay = document.createElement('div');
    overlay.className = 'robot-loader-overlay';
    overlay.innerHTML = `
      <div class="robot-loader-spinner">
        <img src="${BASE_URL}/images/ember_icon.webp"
             class="robot-loader-logo" alt="Ember logo"/>
      </div>`;
    container.appendChild(overlay);

    class EmberLoadingScreen {
      displayLoadingUI() { overlay.style.display = 'flex'; }
      hideLoadingUI()    { overlay.style.display = 'none'; }
    }
    engine.loadingScreen = new EmberLoadingScreen();
    engine.displayLoadingUI();

    /* ----------  Load model  ---------- */
    // const i  = glbPath.lastIndexOf('/');
    // const root_ = i !== -1 ? glbPath.slice(0, i + 1) : '/';
    // const file_ = i !== -1 ? glbPath.slice(i + 1) : glbPath;

    const modelUrl = "https://ember-lab-cdn.b-cdn.net/" + cdn_name;


    SceneLoader.Append(
        "", 
        modelUrl,
        scene,
      () => engine.hideLoadingUI(),          // success
      null,
      (s, m, e) => {                         // error
        console.error('Model load error:', m, e);
        engine.hideLoadingUI();
      });

    /* ----------  Misc.  ---------- */
    MeshBuilder.CreateBox('cube', { size: 0.1 }, scene);        // tiny reference box
    const stopScroll = (e) => e.preventDefault();
    canvas.addEventListener('wheel', stopScroll, { passive: false });

    engine.runRenderLoop(() => scene.render());
    const onResize = () => engine.resize();
    window.addEventListener('resize', onResize);

    return () => {
      canvas.removeEventListener('wheel', stopScroll);
      window.removeEventListener('resize', onResize);
      engine.dispose();
      overlay.remove();
    };
  }, [cdn_name]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full outline-none" />
    </div>
  );
}

export default RobotViewer;
