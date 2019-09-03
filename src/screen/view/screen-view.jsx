
import React, { PureComponent } from 'react';
import ScreenDropDown from '../component/dropdown';
import { Row, Col } from 'antd';
import Eview from '../component/e-view';
import ScreenPagination from '../component/pagination';
import '../../assets/style/screen-view.css';

// fake data
const screenData = [
  {
    status: "Revision Requested",
    title: 'How to build an e-commerce platform : A step by st..',
    price: '400'
  }
  , {
    status: "completed",
    title: 'How to build an e-commerce platform : A step by st..',
    price: '400'
  },
  {
    status: "Editorial Review",
    title: 'How to build an e-commerce platform : A step by st..',
    price: '400'
  },
  {
    status: "completed",
    title: 'How to build an e-commerce platform : A step by st..',
    price: '400'
  },
  {
    status: "Dedalined Missed",
    title: 'How to build an e-commerce platform : A step by st..',
    price: '400'
  },
  {
    status: "completed",
    title: 'How to build an e-commerce platform : A step by st..',
    price: '400'
  },
  {
    status: "completed",
    title: 'How to build an e-commerce platform : A step by st..',
    price: '400'
  },
  {
    status: "completed",
    title: 'How to build an e-commerce platform : A step by st..',
    price: '400'
  },
]


class ScreenView extends PureComponent {
  render() {
    return (
      <div style={{ background: '#fdfdfd' }}>
        <Row gutter={24} xs={24} md={24} lg={24} justify="center" type="flex" >
          <Col span={18} xs={20} md={18} lg={18}>
            <h1 className={'yourJob'}>Your Jobs</h1>
          </Col>
        </Row>
        <Row gutter={24} xs={24} md={24} lg={24} justify="center" align="middle" type="flex">
          <Col span={10} xs={20} md={10} lg={10} >
            <ScreenDropDown name="All Content Categories" />
            <ScreenDropDown name="All Industries" isMarginLeft />
            <ScreenDropDown name="status" isMarginLeft />
            <span className={'clearAll'}>clear all</span>
          </Col>
          <Col span={8} xs={20} md={8} lg={8}>
            <Row justify="end" type="flex" className={'spanDisplayCont'}>
              <span className={'spanDisplay'}>Displaying 1-8 of 123 jobs </span>
              <ScreenDropDown name="Least time left first" />
            </Row>
          </Col>
        </Row>
        <Row gutter={24} xs={24} justify="center" type="flex">
          {
            screenData.map(({ title, status, price }, key) => (
              < Eview
                key={key}
                title={title}
                status={status}
                price={price} />
            ))
          }
        </Row>
        <Row gutter={24} justify="center" type="flex">
          <Col span={18} xs={20} md={18} lg={18}>
            <Row gutter={24} justify="center" type="flex" style={{ margin: '80px 0px' }}>
              <ScreenPagination />
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ScreenView;
