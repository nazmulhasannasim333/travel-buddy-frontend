import { baseApi } from "../../api/baseApi";

const TripApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTrip: builder.mutation({
      query: (data) => {
        return {
          url: `/trips`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["trips"],
    }),
    getAllTrips: builder.query({
      query: (query) => {
        return {
          url: `/trips`,
          method: "GET",
          params: query,
        };
      },
      providesTags: ["trips"],
    }),
    getTrip: builder.query({
      query: (id) => {
        return {
          url: `/trips/${id}`,
          method: "GET",
        };
      },
      providesTags: ["trips"],
    }),
    deleteTrip: builder.mutation({
      query: (id) => {
        return {
          url: `/trip/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["trips"],
    }),
    getUserTrip: builder.query({
      query: () => {
        return {
          url: `/userTrip`,
          method: "GET",
        };
      },
      providesTags: ["trips"],
    }),
  }),
});

export const {
  useGetAllTripsQuery,
  useGetTripQuery,
  useCreateTripMutation,
  useDeleteTripMutation,
  useGetUserTripQuery,
} = TripApi;
