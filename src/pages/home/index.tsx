import React, { ReactNode } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import ProtectedRoute from '../../components/routes/ProtectedRoute';

import { Card } from 'primereact/card'; // Importar Card de PrimeReact
import { Button } from 'primereact/button'; // Importar Button de PrimeReact
import { Menubar } from 'primereact/menubar';

import ModeloCard from '@/components/common/ModeloCard';
import Modelo from '@/components/common/Modelo';

import Cap1 from "../../components/modelos/Cap1";
import Cap2 from "../../components/modelos/Cap2";
import Cap3 from "../../components/modelos/Cap3";
import Cap4 from "../../components/modelos/Cap4";
import Cap5 from "../../components/modelos/Cap5";
import Cap6 from "../../components/modelos/Cap6";
import Cap7 from "../../components/modelos/Cap7";
import Cap8 from "../../components/modelos/Cap8";
import Cap9 from "../../components/modelos/Cap9";
import Cap10 from "../../components/modelos/Cap10";

interface product {
  id: number;
  label: string;
  model: React.JSX.Element;
  description?: string;
}

const listProducts: [product] = [
  {
    id: 1,
    label: "Modelo 1",
    model: <Cap1 />,
    description: 'diseno uno jeje.'
  },
  {
    id: 2,
    label: "Modelo 2",
    model: <Cap2 />,
    description: 'diseno uno jeje.'
  },
  {
    id: 3,
    label: "Modelo 3",
    model: <Cap3 />,
    description: 'diseno uno jeje.'
  },
  {
    id: 4,
    label: "Modelo 4",
    model: <Cap4 />,
    description: 'diseno uno jeje.'
  },
  {
    id: 5,
    label: "Modelo 5",
    model: <Cap5 />,
    description: 'diseno uno jeje.'
  },
  {
    id: 6,
    label: "Modelo 6",
    model: <Cap6 />,
    description: 'diseno uno jeje.'
  },
  {
    id: 7,
    label: "Modelo 7",
    model: <Cap7 />,
    description: 'diseno uno jeje.'
  },
  {
    id: 8,
    label: "Modelo 8",
    model: <Cap8 />,
    description: 'diseno uno jeje.'
  },
  {
    id: 9,
    label: "Modelo 9",
    model: <Cap9 />,
    description: 'diseno uno jeje.'
  },
  {
    id: 10,
    label: "Modelo 10",
    model: <Cap10 />,
    description: 'diseno uno jeje.'
  },
];

const CardModel = (item: product) => {
  return (
    <Card className="p-shadow-3 card-custom2">
      <div className="overlay2">
        <div className="overlay-content2">
          <h1 className="hero-title2">{item.label}</h1>
        </div>
      </div>
      <ModeloCard>
        {item.model}
      </ModeloCard>
      <div className='flex'>
        <Button
          label="Agregar al carrito"
          icon="pi pi-shopping-cart"
          className="p-button-text  p-button-success mt-3 mr-3"
        />
        <Button
          label="Detalles"
          icon="pi pi-ellipsis-h"
          className="p-button-text  p-button-primary mt-3 mr-3"
        />
      </div>
    </Card>
  );
};

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
            {
              listProducts.map(item => CardModel(item))
            }
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