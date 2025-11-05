import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "@ionic/react/css/palettes/dark.system.css";

import "./theme/variables.css";
import "./theme/custom.css";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { ProductDetailsPage } from "./pages/ProductDetails";
import ProductsList from "./pages/ProductsList";
import { LoginPage } from "./pages/Login";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <CartProvider>
        <IonReactRouter>
          <IonRouterOutlet>
            {/* Suas rotas principais vão aqui */}
            <Route path="/" component={ProductsList} exact={true} />
            <Route
              path="/product/:id"
              component={ProductDetailsPage}
              exact={true}
            />
            <Route path="/auth/login" component={LoginPage} exact={true} />
            {/* <Route path="/product/:id" component={ProductDetailsPage} /> */}
            {/* ...outras rotas... */}

            {/* Você pode ter que repensar os "Layouts" 
                (AuthLayout, CheckoutLayout) ou aplicar 
                layouts diferentes por rota */}
          </IonRouterOutlet>
        </IonReactRouter>
      </CartProvider>
    </AuthProvider>
  </IonApp>
);

export default App;
