import { configureStore } from "@reduxjs/toolkit"

import { seminarsApi } from "./seminars/seminars.api"

export const store = configureStore({
   reducer: {
      // Add the generated reducer as a specific top-level slice
      [seminarsApi.reducerPath]: seminarsApi.reducer,
   },
   // Adding the api middleware enables caching, invalidation, polling,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(seminarsApi.middleware),
})
