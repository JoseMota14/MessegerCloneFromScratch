import Desktop from "./Desktop";
import MobileFooter from "./Mobile";
import { SidebarContainer } from "./styles";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Desktop></Desktop>
      <MobileFooter></MobileFooter>
    </SidebarContainer>
  );
}
