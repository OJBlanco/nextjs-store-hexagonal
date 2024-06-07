import { OrderRepository } from "../../domain/OrderRepository";

export class AllOrdersGetter {
  constructor(private readonly repository: OrderRepository) {}

  async get(accessToken: string){
    const request = await this.repository.get(accessToken);
    return request
  }
}