
import React, { PureComponent } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      first Categorie
    </Menu.Item>
    <Menu.Item key="2">
      second Categorie
    </Menu.Item>
    <Menu.Item key="3">
      third Categorie
    </Menu.Item>
  </Menu>
);

class ScreenDropDown extends PureComponent {
  render() {
    return (
      <>
        <Dropdown overlay={menu}>
          <Button>
            All Content Categories <Icon type="down" />
          </Button>
        </Dropdown>
      </>
    )
  }
}


export default ScreenDropDown;