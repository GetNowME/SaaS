const envBase = import.meta.env.VITE_API_BASE_URL;
// Fallback to backend on port 8000 if the Vite env var is not provided during dev.
// Prevents `undefined` appearing in constructed URLs (e.g. "undefined/auth/google").
// export const baseURL = envBase ?? "http://localhost:8000/api";

export const baseURL = envBase ?? "https://saas-sn73.onrender.com/";
