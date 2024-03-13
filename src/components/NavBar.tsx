import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwith from "./ColorModeSwith";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} width={100} boxSize="60px" />
      <ColorModeSwith />
    </HStack>
  );
};

export default NavBar;
