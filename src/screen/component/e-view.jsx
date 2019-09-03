import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import star from '../../assets/img/shape.png';

// color Config
const colorConfig = {
  'completed': {
    color: '#3EBCB3',
    status: '4.5',
    icon: true
  },
  'Editorial Review': {
    color: '#f5a853',
    status: 'waiting',
    icon: false
  },
  'Dedalined Missed': {
    color: '#f25c69',
    status: 'NA',
    icon: true
  },
  'Revision Requested': {
    color: '#44b5dd',
    status: '2h 13m left',
    icon: false
  }
}

function ECommerce({ isMobile = false, title, price }) {
  return (
    <>
      <div style={{ display: `${isMobile ? 'flex' : 'auto'}` }}>
        <p style={{
          fontSize: '16px',
          color: '#000000',
          fontFamily: 'Roboto',
          marginBottom: '0px',
          paddingTop: '20px',
          fontWeight: 'bold',
          width: `${isMobile ? '75%' : 'auto'}`
        }}>{title}</p>
        {isMobile && <p style={{ fontWeight: 'bolder', color: '#1d2330', fontSize: '16px', alignSelf: 'center' }}>₹{price}</p>}
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <span style={{
          fontSize: '14px',
          color: '#1d2330',
          fontFamily: 'Roboto',
          lineHeight: '1.57'
        }}>e-book | </span>
        <span style={{
          fontSize: '14px',
          color: '#1d2330',
          fontFamily: 'Roboto',
          lineHeight: '1.57'
        }}>Travel and Tourism | </span>
        <span style={{
          fontSize: '14px',
          color: '#1d2330',
          fontFamily: 'Roboto',
          lineHeight: '1.57'
        }}>400 words</span>
      </div>
    </>
  )
}



class Eview extends PureComponent {

  render() {
    const { status, price, title } = this.props;
    return (
      <Col span={18} xs={20} md={18} lg={18}>
        <Row style={{
          border: 'solid 1px rgba(29, 35, 48, 0.08)',
          backgroundColor: '#ffffff',
          marginTop: '15px'
        }} type="flex" align="middle">

          <Col span={24} xs={24} md={0} lg={0}>
            <Button style={{
              marginTop: '16px',
              border: `1px solid ${colorConfig[status]['color']}`,
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              backgroundColor: `${colorConfig[status]['color']}`,
              color: 'white',
              fontSize: '12px',
              height: '24px'
            }}>{status}</Button>
          </Col>

          <Col span={10} xs={0} md={10} lg={10}>
            <div style={{
              borderLeft: `4px solid ${colorConfig[status]['color']}`,
              paddingLeft: '36px'
            }}>
              <ECommerce title={title} price={price} />
            </div>
          </Col>

          <Col span={24} xs={24} md={0} lg={0}>
            <div style={{
              paddingLeft: '16px'
            }}>
              <ECommerce isMobile={true} title={title} price={price} />
            </div>
          </Col>

          <Col span={14} xs={0} md={14} lg={14}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <p style={{ fontWeight: 'bolder', color: '#1d2330', fontSize: '18px' }}>₹{price}</p>
              <Button style={{
                border: `1px solid ${colorConfig[status]['color']}`,
                borderRadius: '14px',
                backgroundColor: `${colorConfig[status]['color']}`,
                color: 'white'
              }}>{status}</Button>
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{colorConfig[status]['icon'] && <img src={star} alt='star' />}  {colorConfig[status]['status']}</div>
              <Button style={{
                border: '1px solid #3EBCB3',
                color: '#3EBCB3',
                width: '136px',
                height: '36px'
              }}>View</Button>
            </div>
          </Col>

          <Col span={24} xs={24} md={0} lg={0}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              borderTop: 'solid 1px rgba(29, 35, 48, 0.08)',
              padding: '6px 0px'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{colorConfig[status]['icon'] && <img src={star} alt='star' />}  {colorConfig[status]['status']}</div>
              <Button style={{
                border: '1px solid #3EBCB3',
                color: '#3EBCB3',
                width: '124px',
                height: '32px',
                cursor: 'pointer'
              }}>View</Button>
            </div>
          </Col>

        </Row>
      </Col >
    )
  }
}
export default Eview;

