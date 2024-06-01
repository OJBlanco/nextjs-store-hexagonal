export interface CreateUserResponse {
  customerCreate: CustomerCreate;
}

interface CustomerCreate {
  customer: Customer;
  customerUserErrors?: (string)[] | null;
}

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
