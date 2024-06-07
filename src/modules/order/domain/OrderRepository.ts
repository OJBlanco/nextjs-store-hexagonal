import { OrderResponse } from "./OrderResponse";

export interface OrderRepository {
  get: (accessToken: string) => Promise<OrderResponse>
}