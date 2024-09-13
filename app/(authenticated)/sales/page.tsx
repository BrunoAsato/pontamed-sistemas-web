import ServerComponent from '@auth/sales/components/ServerComponent';
import ClientComponent from '@auth/sales/components/ClientComponent';

export default function Page() {
  return (
    <ServerComponent>
      <ClientComponent />
    </ServerComponent>
  );
}
