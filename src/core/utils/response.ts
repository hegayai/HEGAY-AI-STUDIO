import type { ApiResponse } from "../types";

export const success = <T>(data: T, message?: string): ApiResponse<T> => ({
  success: true,
  message,
  data,
});

export const failure = (error: string, message?: string): ApiResponse<null> => ({
  success: false,
  message,
  error,
});
