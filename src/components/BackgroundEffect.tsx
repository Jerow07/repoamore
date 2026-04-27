import { useEffect, useRef } from 'react';
// @ts-ignore
import { butterfliesBackground } from 'threejs-toys';

export default function BackgroundEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Evitamos renderizar el canvas dos veces (StrictMode de React)
    const canvasContainer = containerRef.current;
    if (canvasContainer.querySelector('canvas')) return;

    try {
      butterfliesBackground({
        el: canvasContainer,
        eventsEl: canvasContainer, // Para desconectar el control de zoom del mouse en el 'body'
        gpgpuSize: 18, // Extra reducción de partículas
        background: 0xf1efeb, 
        material: 'basic',
        materialParams: { transparent: true, alphaTest: 0.5 },
        texture: 'https://assets.codepen.io/33787/butterflies.png',
        textureCount: 4,
        wingsScale: [1, 1, 1],
        wingsWidthSegments: 8,
        wingsHeightSegments: 8,
        wingsSpeed: 0.75,
        wingsDisplacementScale: 1.25,
        noiseCoordScale: 0.01,
        noiseTimeCoef: 0.0005,
        noiseIntensity: 0.0025,
        attractionRadius1: 100,
        attractionRadius2: 150,
        maxVelocity: 0.1
      });
    } catch (e) {
      console.error("Error inicializando el efecto de hojas/mariposas", e);
    }

    return () => {
      // Limpiamos el canvas al desmontar
      const canvas = canvasContainer.querySelector('canvas');
      if (canvas) canvas.remove();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full -z-[10] overflow-hidden pointer-events-none scale-[1.5] opacity-55" 
      aria-hidden="true"
    />
  );
}
