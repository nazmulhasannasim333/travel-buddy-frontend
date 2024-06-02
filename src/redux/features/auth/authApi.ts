import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    changeUserStatus: builder.mutation({
      query: (data) => {
        return {
          url: `/status/${data?.userId}`,
          method: "PATCH",
          body: data.status,
        };
      },
      invalidatesTags: ["users"],
    }),
    changeUserRole: builder.mutation({
      query: (data) => {
        return {
          url: `/role/${data?.userId}`,
          method: "PATCH",
          body: data.role,
        };
      },
      invalidatesTags: ["users"],
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: `/change-password`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
    getProfile: builder.query({
      query: () => {
        return {
          url: `/profile`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: `/profile`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAllUserQuery,
  useChangeUserStatusMutation,
  useChangeUserRoleMutation,
  useChangePasswordMutation,
  useUpdateProfileMutation,
  useGetProfileQuery,
} = authApi;
