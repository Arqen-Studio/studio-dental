import { createContext, useContext } from "react";

/** Opens the booking drawer. Provided once by the App layout. */
export const BookingContext = createContext<() => void>(() => {});
export const useBooking = () => useContext(BookingContext);
