
import React, { PureComponent } from 'react';
import ScreenDropDown from '../component/dropdown';
import { Row, Col } from 'antd';
import Eview from '../component/e-view';
import ScreenPagination from '../component/pagination';

class ScreenView extends PureComponent {
  render() {
    return (
      <>
        <Row gutter={24} justify="center" type="flex">
          <Col span={18}>
            <h1 style={{
              color: '#1d2330',
              fontSize: '36px',
              fontFamily: 'Roboto',
              marginTop: '40px'
            }}>Your Jobs</h1>
          </Col>
        </Row>
        <Row gutter={24} justify="center" align="middle" type="flex">
          <Col span={10}>
            <ScreenDropDown name="All Content Categories" />
            <ScreenDropDown name="All Industries" isMarginLeft />
            <ScreenDropDown name="status" isMarginLeft />
            <span style={{ paddingLeft: '15px' }}>clear all</span>
          </Col>
          <Col span={8}>
            <Row justify="end" type="flex">
              <span style={{
                alignSelf: 'center',
                marginRight: '16px'
              }}>Displaying 1-8 of 123 jobs </span>
              <ScreenDropDown name="Least time left first" />
            </Row>
          </Col>
        </Row>
        <Row gutter={24} justify="center" type="flex">
          <Eview status={"Revision Requested"} />
          <Eview status={"completed"} />
          <Eview status={"Editorial Review"} />
          <Eview status={"Revision Requested"} />
          <Eview status={"completed"} />
          <Eview status={"completed"} />
          <Eview status={"completed"} />
          <Eview status={"completed"} />
        </Row>
        <Row gutter={24} justify="center" type="flex">
          <Col span={18}>
            <Row gutter={24} justify="center" type="flex" style={{ margin: '80px 0px' }}>
              <ScreenPagination />
            </Row>
          </Col>
        </Row>
      </>
    )
  }
}
export default ScreenView;
