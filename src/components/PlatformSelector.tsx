import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForms from "../hooks/usePlatForms";
import { PlatForm } from "../hooks/useGames";

interface Props {
  selectedPlatform: PlatForm | null;
  onSelectedPlatform: (platform: PlatForm) => void;
}
const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { data, error } = usePlatForms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "PlatForms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
