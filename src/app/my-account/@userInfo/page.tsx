import { UseValidateAccessToken } from "app/presentation/shared/hooks/UseValidateAccessToken";

export default async function MyAccountPage() {
  const { customer } = await UseValidateAccessToken();

  return (
    <div>
      <section>
        <h2>Your info</h2>
        <h1>Bienvenido {customer.firstName}</h1>
        <p>email: {customer.email}</p>
      </section>
    </div>
  );
}