import { useEffect } from "react";

const VantaEffect = () => {
    useEffect(() => {
      const loadScripts = () => {
        return new Promise((resolve) => {
          // Load THREE.js and VANTA scripts
          const threeScript = document.createElement('script');
          threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
          threeScript.async = true;
          threeScript.onload = () => {
            const vantaScript = document.createElement('script');
            vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
            vantaScript.async = true;
            vantaScript.onload = () => resolve();
            document.body.appendChild(vantaScript);
          };
          document.body.appendChild(threeScript);
        });
      };
  
      const initializeVanta = () => {
        if (window.VANTA) {
          window.VANTA.NET({
            el: "#vanta-container",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 20.00,
            minWidth: 20.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xffffff,
            backgroundColor: 0x0
          });
        }
      };
  
      loadScripts().then(() => {
        initializeVanta();
      });
  
      return () => {
        if (window.VANTA) {
          window.VANTA.NET.remove();
        }
      };
    }, []);
  
    return (
      <div id="vanta-container" className="h-screen w-full">
        <div className="s-section-1 h-screen">
                <div className="s-section h-screen text-5xl font-extrabold text-yellow-500 flex justify-center items-center content-center text-center">
                    Business | Marketing | Web Development | SEO
                </div>
            </div>
      </div>
    );
  };
  
  export default VantaEffect;
  