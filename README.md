# Weather 3D Forecast

API for fethcing weekly weather data: [OpenWeather API](https://openweathermap.org/api) 

![Example scene - New York](/public/images/example-new-york.png)

## Dev Memo - 01 - gltfjsx

Don't forget to put '@latest'

```
npx gltfjsx@latest ./public/models/stage/stage.glb
```

## Dev Memo - 02 - populate multiple models from one gltf (glb) model

You need to use `<Clone>` otherwise only one model can be generated

```
<Clone object={weatherIcon.scene} scale={1.0} position={[0, 0, 0]} />
```