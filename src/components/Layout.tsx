import { IonPage } from "@ionic/react";
import { Header } from "./Header";

export const Layout = ({
  children,
  ...props
}: {
  title: string;
  children: React.ReactNode;
  hasBack?: boolean;
}) => {
  return (
    <>
      <IonPage>
        <Header {...props} />
        {children}
      </IonPage>
    </>
  );
};
