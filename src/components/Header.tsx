import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonBadge,
  IonText,
  IonBackButton,
} from "@ionic/react";
import { cartOutline, personCircleOutline } from "ionicons/icons";
import { useHistory, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { UserMenuModal } from "./UserMenuModal";
import { useState } from "react";

export const Header = ({
  title,
  hasBack,
}: {
  title: string;
  hasBack?: boolean;
}) => {
  const history = useHistory();
  const { cart, openCartDrawer } = useCart();
  const cartItemsCount =
    cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  const { isAuthenticated, user } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleUserButtonClick = () => {
    if (isAuthenticated) {
      setShowUserMenu(true);
    } else {
      history.push("/auth/login");
    }
  };

  return (
    <IonHeader>
      <IonToolbar className="toolbar-primary">
        {hasBack && (
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        )}
        <IonTitle className="mx-4">{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={openCartDrawer} className="relative">
            <IonIcon slot="icon-only" icon={cartOutline} />
            {cartItemsCount > 0 && (
              <IonBadge
                color="danger"
                className="absolute -top-2 -right-2 text-xs min-w-4 h-4 rounded-full flex items-center justify-center"
              >
                {cartItemsCount}
              </IonBadge>
            )}
          </IonButton>
          <IonButton
            className={
              isAuthenticated && user ? "bg-secondary rounded-full w-8 h-8" : ""
            }
            onClick={handleUserButtonClick}
          >
            {isAuthenticated && user ? (
              <IonText>
                {user.name
                  ?.split(" ")
                  .map((x) => x[0])
                  .join("")}
              </IonText>
            ) : (
              <IonIcon slot="icon-only" icon={personCircleOutline} />
            )}
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <UserMenuModal
        isOpen={showUserMenu}
        onClose={() => setShowUserMenu(false)}
      />
    </IonHeader>
  );
};
