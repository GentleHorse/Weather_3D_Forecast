import { useRef, useState } from "react";
import {
  DepthOfField,
  Bloom,
  Noise,
  ToneMapping,
  Vignette,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const PostProcessingEffects = () => {
  return (
    <EffectComposer disableNormalPass>
      <Vignette
        eskil={false}
        offset={0.3}
        darkness={0.9}
        blendFunction={BlendFunction.NORMAL}
      />

      <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0} />

      <ToneMapping />
    </EffectComposer>
  );
};

export default PostProcessingEffects;
