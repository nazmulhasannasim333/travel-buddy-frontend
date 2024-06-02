import { baseApi } from "../../api/baseApi";

const buddyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    requestBuddy: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/trip/${data.tripId}/request`,
          method: "POST",
          body: data.userId,
        };
      },
      invalidatesTags: ["buddy"],
    }),
    buddyRequestHistory: builder.query({
      query: () => {
        return {
          url: `/travel-buddies`,
          method: "GET",
        };
      },
      providesTags: ["buddy"],
    }),
  }),
});

export const { useRequestBuddyMutation, useBuddyRequestHistoryQuery } =
  buddyApi;
