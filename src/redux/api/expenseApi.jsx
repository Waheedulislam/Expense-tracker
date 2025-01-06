import { baseApi } from './baseApi'

export const enhancedApi = baseApi.enhanceEndpoints({
    endpoints: (build) => ({
        createExpense: build.mutation({
            query: (data) => ({

            }),
            invalidatesTags: []
        }),
        getExpense: build.query({

        }),
        deleteExpense: build.mutation({

        }),
        updateExpense: build.mutation({

        })

    })
})