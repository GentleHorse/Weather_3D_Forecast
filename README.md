# Weather 3D Forecast

## Memo - 01 - gltfjsx

Don't forget to put '@latest'

```
npx gltfjsx@latest ./public/models/stage/stage.glb
```

## Memo - 02 - populate multiple models from one gltf (glb) model

You need to use `<Clone>` otherwise only one model can be generated

```
<Clone object={weatherIcon.scene} scale={1.0} position={[0, 0, 0]} />
```