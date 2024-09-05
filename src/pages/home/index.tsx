import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import ProtectedRoute from '../../components/routes/ProtectedRoute';

import { Card } from 'primereact/card'; // Importar Card de PrimeReact
import { Button } from 'primereact/button'; // Importar Button de PrimeReact
import { Menubar } from 'primereact/menubar';

import Modelo from '@/components/common/Modelo';
import Cap1 from "../../components/modelos/Cap1";
import Cap2 from "../../components/modelos/Cap2";

const Home: React.FC = () => {
  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="hero-section">
          <div className="overlay">
            <h1 className="hero-title">Busca tu estilo</h1>
          </div>
          <Modelo>
            <Cap2 />
          </Modelo>
        </div>
        <div className="product-section">
          <div className="card-grid">
            <Card className="p-shadow-3 card-custom" title="Modelo 1">
              <Modelo>
                <Cap1 />
              </Modelo>
              <Button label="Ver detalles" icon="pi pi-search" className="p-button-outlined p-button-rounded p-button-secondary mt-3" />
            </Card>
            <Card className="p-shadow-3 card-custom" title="Modelo 2">
              <Modelo>
                <Cap2 />
              </Modelo>
              <Button label="Agregar al carrito" icon="pi pi-shopping-cart" className="p-button-rounded p-button-success mt-3" />
            </Card>
            {/* Agrega más tarjetas según sea necesario */}
          </div>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
};

export default Home;

/*
<ProtectedRoute>
      <MainLayout>
        <div className="home-container">
          <Menubar model={[]} className="custom-menubar" /> 
          <h1 className="home-title">Busca tu estilo</h1>
          <div className="card-container">
            <Card className="p-shadow-3 card-custom" title="Modelo 1">
              <Modelo>
                <Cap1 />
              </Modelo>
              <Button label="Ver detalles" icon="pi pi-search" className="p-button-outlined p-button-rounded p-button-secondary mt-3" />
            </Card>
            <Card className="p-shadow-3 card-custom" title="Modelo 2">
              <Modelo>
                <Cap2 />
              </Modelo>
              <Button label="Agregar al carrito" icon="pi pi-shopping-cart" className="p-button-rounded p-button-success mt-3" />
            </Card>
          </div>
        </div>
      </MainLayout>
    </ProtectedRoute>
*/