import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwith from "./ColorModeSwith";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px" spacing={4}>
      <Image src={logo} width={100} boxSize="60px" borderRadius="15px" />
      <Input placeholder="search games" borderRadius={10} />
      <ColorModeSwith />
    </HStack>
  );
};

export default NavBar;
