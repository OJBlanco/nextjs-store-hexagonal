import { cookies } from "next/headers";

import { AllOrdersGetter } from "app/modules/order/application/get-all/AllOrdersGetter";
import { GraphqlOrderRepository } from "app/modules/order/infrastructure/GraphqlOrderRepository";


export default async function MyAccountPage() {
  const orderRepository = new GraphqlOrderRepository();
  const orderGetter = new AllOrdersGetter(orderRepository);

  const cookiesStorage = cookies()
  const accessToken = cookiesStorage.get("accessToken")?.value || ""

  const { orders, totalOrders } = await orderGetter.get(accessToken)
  return (
    <div>
      <section>
        <h2>Orders ({totalOrders})</h2>
        {orders?.map((order) => (
          <p key={order.orderNumber}>{order.orderNumber}</p>
        ))}
      </section>
    </div>
  );
}