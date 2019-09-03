
import React, { PureComponent } from 'react';
import ScreenDropDown from '../component/dropdown';
import { Row, Col } from 'antd';
import Eview from '../component/e-view';
import ScreenPagination from '../component/pagination';
import '../../assets/style/screen-view.css';

class ScreenView extends PureComponent {
  render() {
    return (
      <>
        <Row gutter={24} xs={24} md={24} lg={24} justify="center" type="flex">
          <Col span={18} xs={24} md={18} lg={18}>
            <h1 style={{
              color: '#1d2330',
              fontSize: '36px',
              fontFamily: 'Roboto',
              marginTop: '40px'
            }}>Your Jobs</h1>
          </Col>
        </Row>
        <Row gutter={24} xs={24} md={24} lg={24} className={'maincontainer'} justify="center" align="middle" type="flex">
          <Col span={10} xs={24} md={10} lg={10} className={'center'}>
            <ScreenDropDown name="All Content Categories" />
            <ScreenDropDown name="All Industries" isMarginLeft />
            <ScreenDropDown name="status" isMarginLeft />
            <span style={{ paddingLeft: '15px', cursor: 'pointer' }}>clear all</span>
          </Col>
          <Col span={8} xs={24} md={8} lg={8}>
            <Row justify="end" type="flex">
              <span style={{
                alignSelf: 'center',
                marginRight: '16px',
                fontWeight: 'bold'
              }}>Displaying 1-8 of 123 jobs </span>
              <ScreenDropDown name="Least time left first" />
            </Row>
          </Col>
        </Row>
        <Row gutter={24} xs={24} justify="center" type="flex">
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
          <Col span={18} xs={20} md={18} lg={18}>
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
