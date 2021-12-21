import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

export default function useProducts({ onSuccess }) {
    const endpoint = "http://localhost:8000";
    return useQuery(
        "products",
        async () => {
            const { products } = await request(
                endpoint,
                gql`
                    query {
                        products {
                            identity
                            title
                            description
                        }
                    }
                `
            );
            return products;
        },
        {
            onSuccess: (data) => onSuccess(data),
        }
    );
}
