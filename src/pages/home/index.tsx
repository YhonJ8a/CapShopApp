import React, { ReactNode } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import ProtectedRoute from '../../components/routes/ProtectedRoute';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

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
    label: "MLB 59Fifty",
    model: <Cap1 />,
    description: `Por más de 100 años, New Era ha sido un nombre destacado en el deporte
y la cultura. En el 59FIFTY DAY celebramos al icono que nos pone a la delantera del juego.`
  },
  {
    id: 2,
    label: "GORRA ARMY RANGER VERDE OLIV",
    model: <Cap2 />,
    description: `Material: hecho de algodón, ligero y cómodo para un ajuste perfecto, especialmente para las actividades diarias.
    Ligero y plegable: el algodón suave hace que sea plegable y aplastable, por lo que puedes llevarlo a todas partes fácilmente.`
  },
  {
    id: 3,
    label: "XYIYI Gorra de algodón unisex estilo militar",
    model: <Cap3 />,
    description: `Gorras militares para hombres y mujeres, adecuadas para primavera, verano, otoño
El color puede ser ligeramente diferente entre la pantalla y en la práctica
Adecuado para primavera, verano, otoño`
  },
  {
    id: 4,
    label: "Thenice Gorra de béisbol, cuerno de buey diablo",
    model: <Cap4 />,
    description: 'Gorra de felpa blanca con cachitos de Diablo Loko con rayas.'
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

const CardModel = (item: product, setModelSelec: (a: product) => {}) => {

  const toast = React.useRef<Toast>(null);

  const showSuccess = () => {
    toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Producto Agregado', life: 3000 });
  }
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
          onClick={showSuccess}
          className="p-button-text  p-button-success mt-3 mr-3"
        />
        <Button
          label="Detalles"
          icon="pi pi-ellipsis-h"
          onClick={() => setModelSelec(item)}
          className="p-button-text  p-button-primary mt-3 mr-3"
        />
      </div>
      <Toast ref={toast} />
    </Card>
  );
};

const Home: React.FC = () => {

  const [modelSelec, setModelSelec] = React.useState<product | null>(null);

  React.useEffect(() => {
    setModelSelec(listProducts[0]);
  }, []);

  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="hero-section">
          <div className="overlay">
            <div className="grid">
              <h1 className="hero-title">Encuentra tu estilo</h1>
            </div>
            <div className="gridY8">
              {modelSelec && <h1>{modelSelec.label}</h1>}

              <p className="mt-0 mb-4 text-100 line-height-3">
                {modelSelec?.description}
              </p>
            </div>
          </div>

          <Modelo>
            {modelSelec?.model}
          </Modelo>
        </div>
        <div className="product-section">
          <div className="card-grid">
            {
              listProducts.map(item => CardModel(item, setModelSelec))
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