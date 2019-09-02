
import React, { PureComponent } from 'react';
import ScreenDropDown from '../component/dropdown';
import { Row, Col } from 'antd';

class ScreenView extends PureComponent {
  render() {
    return (
      <>
        <Row gutter={24} justify="center" type="flex">
          <Col span={20}>
            <h3>Your Jobs</h3>
          </Col>
        </Row>
        <Row gutter={24} justify="center" type="flex">
          <Col span={16}>
            <ScreenDropDown name="All Content Categories" />
            <ScreenDropDown name="All Industries" />
            <ScreenDropDown name="status" />
            clear all
          </Col>
          <Col span={4}>
            {/* <Row justify="end" type="flex"> */}
            <ScreenDropDown name="Least time left first" />
            {/* </Row> */}
          </Col>
        </Row>
      </>
    )
  }
}
export default ScreenView;
