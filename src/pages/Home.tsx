import React, { useContext, ReactNode } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}

const  Home :React.FC<AuthProviderProps> = ({children}) => {
  const authContext = useContext(AuthContext);
  //const navigate = useNavigate();

  if (!authContext) return <Navigate to="/login" replace />;

  const { user } = authContext;

  if (user) {
    console.log("USER: ", user);
    //navigate("/login");
  }

  return (
  
  <div className="home">
    {children}
    pruebas
  </div>

  );
}

export default Home;