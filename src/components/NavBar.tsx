import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwith from "./ColorModeSwith";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px" spacing={4}>
      <Image src={logo} width={100} boxSize="60px" borderRadius="15px" />
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      <ColorModeSwith />
    </HStack>
  );
};

export default NavBar;
