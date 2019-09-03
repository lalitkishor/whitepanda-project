
import React, { PureComponent } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import '../../assets/style/dropdown.css';


function handleMenuClick(e) {
  message.info('Click on Categorie item.');
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
    const { name, isMarginLeft } = this.props;
    return (
      <Dropdown overlay={menu} >
        <Button className={'container'} style={{
          marginLeft: `${isMarginLeft ? '15px' : '0px'}`,
          fontWeight: 'bold'
        }}>
          {name}<Icon type="down" />
        </Button>
      </Dropdown >
    )
  }
}


export default ScreenDropDown;