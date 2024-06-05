export interface OrderQueryResponse {
  customer: Customer;
}

export interface OrderResponse {
  totalOrders: number;
  orders: Node[];
}

interface Customer {
  orders: Orders;
}

interface Orders {
  totalCount: number;
  edges: Edge[];
}

export interface Edge {
  node: Node
}

interface Node {
  cancelReason: string;
  canceledAt: string;
  currencyCode: string;
  customerLocale: string;
  customerUrl: string;
  edited: string;
  email: string;
  financialStatus: string;
  fulfillmentStatus: string;
  id: string;
  name: string;
  orderNumber: string;
  phone: string;
  processedAt: string;
  statusUrl: string;
  currentQuantity: number;
  quantity: number;
  title: string;
}


