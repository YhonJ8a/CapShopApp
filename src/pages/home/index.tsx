import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import ProtectedRoute from '../../components/routes/ProtectedRoute';

import Modelo from '@/components/common/Modelo';

const Home: React.FC = () => {
  return (
    <ProtectedRoute>
      <MainLayout>
          <Modelo />
      </MainLayout>
    </ProtectedRoute>
  );
};

export default Home;