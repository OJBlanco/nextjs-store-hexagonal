import { gql } from "graphql-request";

export const getCustomerQuery = gql`
query customerName($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
        firstName
        email
    }
}
`