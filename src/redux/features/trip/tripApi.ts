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
      query: () => {
        return {
          url: `/trips`,
          method: "GET",
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
  }),
});

export const { useGetAllTripsQuery, useGetTripQuery, useCreateTripMutation } =
  TripApi;
