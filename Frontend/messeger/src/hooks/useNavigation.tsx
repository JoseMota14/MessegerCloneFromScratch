import { useContext } from "react";
import { NavigationContext } from "../contexts/nativation";

export default function useNavigation() {
  return useContext(NavigationContext);
}
