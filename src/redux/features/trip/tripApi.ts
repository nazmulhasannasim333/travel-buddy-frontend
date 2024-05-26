import { baseApi } from "../../api/baseApi";

const TripApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTrips: builder.query({
      query: () => {
        return {
          url: `/trips`,
          method: "GET",
        };
      },
      providesTags: ["trips"],
    }),
  }),
});

export const { useGetAllTripsQuery } = TripApi;
