import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const Dropdown = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button size="sm" className="bg-white text-dark drop-shadow-md">
          Featured
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Newest</MenuItem>
        <MenuItem>Oldest</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
