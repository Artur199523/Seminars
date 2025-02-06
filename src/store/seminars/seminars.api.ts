import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { ERROR, NOTIFICATION, showNotification, SUCCESS } from "utils"

import { GetSeminarResITF, GetSeminarsResITF } from "./types"

const baseUrl = "http://localhost:8080"

export const seminarsApi = createApi({
   reducerPath: "seminars/api",
   tagTypes: ["SEMINARS"],
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getSeminars: builder.query<GetSeminarsResITF, void>({
         query: () => ({
            method: "GET",
            url: "/seminars",
         }),
         transformErrorResponse: () => {
            showNotification(ERROR.SEMINARS_GET_FAIL, NOTIFICATION.ERROR)
            return ERROR.SEMINARS_GET_FAIL
         },
         providesTags: ["SEMINARS"],
      }),
      getSeminar: builder.query<GetSeminarResITF, string>({
         query: (id) => ({
            method: "GET",
            url: `/seminars/${id}`,
         }),
         transformErrorResponse: () => {
            showNotification(ERROR.SEMINARS_GET_FAIL, NOTIFICATION.ERROR)
            return ERROR.SEMINARS_GET_FAIL
         },
      }),

      deleteSeminar: builder.mutation<null, string>({
         query: (id) => ({
            url: `/seminars/${id}`,
            method: "DELETE",
         }),
         transformResponse: (response: null) => {
            showNotification(SUCCESS.SEMINAR_DELETED, NOTIFICATION.SUCCESS)

            return response
         },
         transformErrorResponse: () => {
            showNotification(ERROR.WRONG, NOTIFICATION.ERROR)
            return
         },
         invalidatesTags: () => ["SEMINARS"],
      }),
   }),
})

export const { useGetSeminarsQuery, useGetSeminarQuery, useDeleteSeminarMutation } = seminarsApi
