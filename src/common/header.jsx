
import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import notification from '../assets/img/notification.png';

class ScreenHeader extends PureComponent {
  render() {
    return (
      <Row gutter={24} xs={24} md={24} lg={24} justify="center" align="middle" type="flex" style={{
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
        height: '64px'
      }}>
        <Col xs={0} md={12} lg={12}>
          <h3 style={{
            color: '#000000',
            fontSize: '16px',
            fontFamily: 'Roboto',
            fontWeight: 'bold'
          }}>Your Logo</h3>
        </Col>

        <Col xs={12} md={0} lg={0}>
          <h3 style={{
            color: '#000000',
            fontSize: '16px',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            paddingLeft: '15px'
          }}>YL</h3>
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
                  <img width="32" height="32" src={notification} />
                  <span style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#f25c69',
                    color: 'white',
                    fontSize: '12px',
                    borderRadius: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '-14px',
                    marginTop: '-12px'
                  }}>699</span>
                </div>
                <div
                  style={{
                    background: '#b3e77f',
                    color: 'white',
                    fontWeight: '500',
                    borderRadius: '50px',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '16px'
                  }}
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