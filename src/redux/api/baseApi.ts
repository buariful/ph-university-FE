import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../feature/store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log(result);
  if (result?.error?.status === 401) {
    console.log("sending refresh token");
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      credentials: "include",
      method: "POST",
    });

    const result = await res.json();
    console.log("refreesh token res", result);
  }

  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export default baseApi;
