
import React, { PureComponent } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}


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
    const { name } = this.props;
    return (
      <>
        <Dropdown overlay={menu}>
          <Button>
            {name}<Icon type="down" />
          </Button>
        </Dropdown>
      </>
    )
  }
}


export default ScreenDropDown;