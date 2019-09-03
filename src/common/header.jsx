
import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import notification from '../assets/img/notification.png';
import '.././assets/style/header.css';

class ScreenHeader extends PureComponent {
  render() {
    return (
      <Row
        gutter={24} xs={24} md={24} lg={24}
        justify="center"
        align="middle"
        type="flex"
        className={'headerContainer'}
      >
        <Col xs={0} md={12} lg={12}>
          <h3 className={'yourLogo'}>Your Logo</h3>
        </Col>

        <Col xs={12} md={0} lg={0}>
          <h3 className={'yourLogo'}>YL</h3>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Row justify="end" type="flex">
            <Col span={24}>
              <Row justify="end" type="flex">
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '15px'

                }}>
                  <img width="32" height="32" src={notification} alt='bell' />
                  <span className={'notification'}>699</span>
                </div>
                <div
                  className={'userName'}
                >
                  AB
            </div>
              </Row>
            </Col>

          </Row>
        </Col>
      </Row>
    )
  }
}
export default ScreenHeader