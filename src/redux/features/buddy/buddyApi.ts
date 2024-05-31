import { baseApi } from "../../api/baseApi";

const buddyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    requestBuddy: builder.mutation({
      query: (data) => {
        return {
          url: `/trip/${data.tripId}/request`,
          method: "POST",
          body: data.userId,
        };
      },
      invalidatesTags: ["buddy"],
    }),
    // getTrip: builder.query({
    //   query: (id) => {
    //     return {
    //       url: `/trips/${id}`,
    //       method: "GET",
    //     };
    //   },
    //   providesTags: ["trips"],
    // }),
  }),
});

export const { useRequestBuddyMutation } = buddyApi;
