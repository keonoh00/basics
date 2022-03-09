import React from "react";
import { useContext } from "react";

interface FeelingsPropertiesType {
  _id: number;
  emotion: string;
  message: string;
}

interface FeelingsType {
  name: string;
  properties: FeelingsPropertiesType;
  primaryKey: number;
}

export const DBContext = React.createContext<FeelingsType>();

export const useDB = () => {
  return useContext(DBContext);
};
