// src/components/BabylonViewer.jsx
import { useEffect, useRef } from 'react';
// Import Babylon modules
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, Color4, Color3 } from '@babylonjs/core';
import { MeshBuilder } from '@babylonjs/core';
import '@babylonjs/loaders/glTF';  // enable GLTF model loader

function BabylonViewer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize Babylon engine and scene
    const engine = new Engine(canvas, true);                // antialias = true
    const scene = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 0);               // Transparent background
    
    // Camera: ArcRotateCamera (orbit control around target)
    const camera = new ArcRotateCamera("camera", Math.PI/2, Math.PI/4, 4, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);                     // enable mouse controls
    
    // Light: Hemispheric for basic illumination
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    //light.intensity = 1; 

    //scene.ambientColor = new Color3(0.9, 0.9, 0.9); 
    
    // Load 3D model (GLB) from public/models
    //const PATH = import.meta.env.BASE_URL + "/models/g1_photorealistic_export_2.glb";
    const BASE_URL = import.meta.env.BASE_URL;
    const rootUrl = `${BASE_URL}/models/`;
    const filename = "g1_photorealistic_export_2.glb";
    
    console.log("Loading model from:", rootUrl + filename);

    SceneLoader.Append(rootUrl, filename, scene, function () {
      // Model added to scene. We can adjust camera target or scene as needed.
      // For example, frame the model:
      scene.createDefaultCameraOrLight(true, true, true);
     scene.activeCamera.alpha += Math.PI / 8;
    });

    // SceneLoader.ImportMeshAsync("", rootUrl, filename, scene).then(result => {
    //   // Model loaded successfully
    //   console.log("Model loaded successfully", result.meshes.length, "meshes");
      
    //   // Optional: Adjust camera to focus on the model
    //   if (result.meshes.length > 0) {
    //     const modelRootMesh = result.meshes[0];
    //     camera.target = modelRootMesh.position;
    //   }
    // }).catch(error => {
    //   console.error("Failed to load model:", error);
    // });

    // cube for debug purposes 
    //var cube = MeshBuilder.CreateBox("cube", {size: 2}, scene);
    // Render loop
    engine.runRenderLoop(() => {
      scene.render();
    });
    // Handle resize
    window.addEventListener('resize', () => engine.resize());
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', () => engine.resize());
      engine.dispose();
    };
  }, []);
  
  // Canvas element for Babylon to use
  return <canvas ref={canvasRef} className="w-full h-full outline-none focus:outline-none" />;}

export default BabylonViewer;
