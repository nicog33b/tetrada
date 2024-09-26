import { useEffect, useState } from 'react';
import TetradaBanner from './bannerDesktop';
import TetradaBannerMobile from './bannerMobile';
export default function TetradaResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Cambiar el umbral según el tamaño deseado
    };

    handleResize(); // Verifica el tamaño inicial
    window.addEventListener('resize', handleResize); // Agregar event listener para cambio de tamaño

    return () => window.removeEventListener('resize', handleResize); // Limpia el event listener
  }, []);

  return isMobile ? <TetradaBannerMobile /> : <TetradaBanner />;
}
