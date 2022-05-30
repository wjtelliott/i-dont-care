import { createContext } from "react";
export const UserLocation = createContext({
    lat: 0,
    lng: 0,
    handleFetch: () => {}
});