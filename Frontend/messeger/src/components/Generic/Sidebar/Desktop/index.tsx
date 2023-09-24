import useAuth from "../../../../hooks/useAuth";
import { Paths } from "../../../../utils/middleware";
import Link from "../../../Navigation/Link";
import { LinkContainer } from "./DesktopItem/styles";
import { DesktopContainer, Nav, Ul } from "./styles";

export default function Desktop() {
  const { signOut } = useAuth();

  const renderLinks = Paths.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });
  return (
    <DesktopContainer>
      <Nav>
        <Ul role="list">{renderLinks}</Ul>
      </Nav>
      <Ul onClick={() => signOut()}>
        <LinkContainer>Logout</LinkContainer>
      </Ul>
    </DesktopContainer>
  );
}
