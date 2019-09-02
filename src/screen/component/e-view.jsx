import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import star from '../../assets/img/shape.png';

// color Config
const colorConfig = {
  'completed': '#3EBCB3',
  'Editorial Review': '#f5a853',
  'Dedalined Missed': '#f25c69',
  'Revision Requested': '#44b5dd'
}

class Eview extends PureComponent {

  render() {
    const { status } = this.props;
    return (
      <Col span={18}>
        <Row style={{
          border: 'solid 1px rgba(29, 35, 48, 0.08)',
          backgroundColor: '#ffffff',
          marginTop: '15px'
        }} type="flex" align="middle">

          <Col span={10}>
            <div style={{
              borderLeft: `4px solid ${colorConfig[status]}`,
              paddingLeft: '36px'
            }}>
              <p style={{
                fontSize: '16px',
                color: '#000000',
                fontFamily: 'Roboto',
                marginBottom: '0px',
                paddingTop: '20px'
              }}>How to build an e-commerce platform : A step by st..</p>
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
            </div>

          </Col>
          {/* <Row justify="end" > */}
          <Col span={14}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <p>₹400</p>
              <Button style={{
                border: `1px solid ${colorConfig[status]}`,
                color: `${colorConfig[status]}`,
                borderRadius: '14px',
                backgroundColor: `${colorConfig[status]}`,
                color: 'white'
              }}>{status}</Button>
              <div><img src={star} /> 4.5</div>
              <Button style={{
                border: '1px solid #3EBCB3',
                color: '#3EBCB3',
                width: '136px',
                height: '36px'
              }}>View</Button>
            </div>
          </Col>
        </Row>
        {/* </Row> */}
      </Col >

      // </Row>

    )
  }
}
export default Eview;

