import { createContext } from "react";
import { UserContextType } from "../PropInterface.ts";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
