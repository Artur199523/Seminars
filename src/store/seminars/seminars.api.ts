import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { ERROR, NOTIFICATION, showNotification, SUCCESS } from "utils"

import { GetSeminarResITF, GetSeminarsResITF, UpdateSeminarReqITF } from "./types"

const baseUrl = "http://localhost:8080"

export const seminarsApi = createApi({
   reducerPath: "seminars/api",
   tagTypes: ["SEMINARS", "SEMINAR"],
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      /**
       This RTK Query endpoint retrieves details for a specific user from the server.
       It supports caching for optimized performance and can be used in React components
       for data fetching using the hook provided by RTK Query.
       */
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
         providesTags: ["SEMINAR"],
      }),

      /**
       This RTK Query mutation is used to do a POST,DELETE,PUT,PATCH
       request to the server. The mutation supports caching and
       provides access to states like `isLoading`, `isSuccess`, and `error`.
       */
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
      updateSeminar: builder.mutation<null, UpdateSeminarReqITF>({
         query: ({ id, details }) => ({
            url: `/seminars/${id}`,
            method: "PUT",
            body: details,
         }),
         transformResponse: (response: null) => {
            showNotification(SUCCESS.SEMINAR_UPDATE, NOTIFICATION.SUCCESS)

            return response
         },
         transformErrorResponse: () => {
            showNotification(ERROR.WRONG, NOTIFICATION.ERROR)
            return
         },
         invalidatesTags: () => ["SEMINARS", "SEMINAR"],
      }),
   }),
})

export const { useGetSeminarsQuery, useGetSeminarQuery, useDeleteSeminarMutation, useUpdateSeminarMutation } =
   seminarsApi
