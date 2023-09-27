// React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl: "https://ecommerce-mern-stack-b4r6.vercel.app/",
    // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        // include token in req header
        headers.set("x-auth-token", `${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: "api/auth",
        method: "GET",
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "api/products",
        method: "GET",
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `api/products/${id}`,
        method: "GET",
      }),
    }),
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "api/orders",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserDetailsQuery,
  useGetProductsQuery,
  useGetProductQuery,
  useCreateOrderMutation,
} = authApi;
