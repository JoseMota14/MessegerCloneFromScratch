import useNavigation from "../../../hooks/useNavigation";
import Conversations from "../../Conversations";
import UserData from "../../Users/UserData";
import Desktop from "./Desktop";
import MobileFooter from "./Mobile";
import { Main, SidebarContainer } from "./styles";

export default function Sidebar() {
  const { currentPath } = useNavigation();
  const getChildren = (): React.ReactNode => {
    if (currentPath !== "" && currentPath !== ({} as string)) {
      if (currentPath?.indexOf("users") > -1) {
        return <UserData></UserData>;
      }
      if (currentPath?.indexOf("conversations") > -1) {
        return <Conversations></Conversations>;
      }
    }
    return;
  };

  return (
    <SidebarContainer>
      <Desktop></Desktop>
      <MobileFooter></MobileFooter>
      <Main>{getChildren()}</Main>
    </SidebarContainer>
  );
}
