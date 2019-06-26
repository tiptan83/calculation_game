import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Menu inverted>
        <Menu.Item as={Link} name="Multiplying game" to='/' />
        <Menu.Item as={Link} name="About" to='/about' />
      </Menu>
    </div>
  );
};

export default Header;
