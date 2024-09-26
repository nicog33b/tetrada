
'use client';
import TetradaResponsive from "./components/banner/bannerResponsive";
import CoreBusiness from "./components/coreBusiness";
import MarketingComponent from "./components/marketing";
import ServicioCaracteristicas from "./components/services";
import Flexibilidad from "./components/services/flexibilidad";
import Foco from "./components/services/foco";
import Velocidad from "./components/services/velocidad";


export default function Home() {
  return (
    <section>
<TetradaResponsive/>
<section className="container mx-auto p-4">
      <MarketingComponent />
    </section>
    <CoreBusiness/>
    <section id="servicios"> 
    <ServicioCaracteristicas/>
  
      <Foco/>
<Velocidad/>
<Flexibilidad/>

    </section>
    
    </section>
  );
}
