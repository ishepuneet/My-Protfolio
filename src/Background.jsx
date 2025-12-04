import { useEffect, useRef } from "react";

export default function Background() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!window.VANTA) return;

    const effect = window.VANTA.NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xff2d9d,
      backgroundColor: 0x0b1b29,
      points: 12,
      maxDistance: 20,
      spacing: 18,
    });

    return () => effect && effect.destroy();
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full -z-50"
    >
        
    </div>
  );
}
