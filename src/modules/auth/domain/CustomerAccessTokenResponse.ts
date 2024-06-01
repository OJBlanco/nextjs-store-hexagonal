export interface CustomerAccessTokenResponse {
  customer: Customer;
}

interface Customer {
  firstName: string;
  email: string;
}