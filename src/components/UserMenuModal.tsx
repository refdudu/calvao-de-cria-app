import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButtons,
  IonButton,
} from "@ionic/react";
import {
  personOutline,
  receiptOutline,
  logOutOutline,
  close,
} from "ionicons/icons";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/AuthContext";

interface UserMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserMenuModal: React.FC<UserMenuModalProps> = ({
  isOpen,
  onClose,
}) => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleNavigate = (path: string) => {
    onClose();
    history.push(path);
  };

  const handleLogout = async () => {
    await logout();
    onClose();
    history.push("/");
  };

  return (
    <IonModal
      breakpoints={[0, 0.5]}
      initialBreakpoint={0.5}
      isOpen={isOpen}
      onDidDismiss={onClose}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList
          style={{
            backgroundColor: "#fff",
          }}
        >
          <IonItem button onClick={() => handleNavigate("/profile/settings")}>
            <IonIcon icon={personOutline} slot="start" className="text-text1 mr-2" />
            <IonLabel>Meu Perfil (não funcional)</IonLabel>
          </IonItem>
          <IonItem button onClick={() => handleNavigate("/profile/orders")}>
            <IonIcon icon={receiptOutline} slot="start" className="text-text1 mr-2" />
            <IonLabel>Meus Pedidos (não funcional)</IonLabel>
          </IonItem>
          <IonItem button onClick={handleLogout} lines="none">
            <IonIcon icon={logOutOutline} slot="start" color="danger" className="mr-2" />
            <IonLabel color="danger">Sair</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonModal>
  );
};
