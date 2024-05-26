import { baseApi } from "../../api/baseApi";

const registerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/users/create-user",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
