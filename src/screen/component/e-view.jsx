import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import star from '../../assets/img/shape.png';
const colorConfig = {
  completed: ''
}
class Eview extends PureComponent {
  state = {
    status: 'completed'
  }


  render() {
    return (
      <Col span={16}>
        <Row style={{
          border: 'solid 1px rgba(29, 35, 48, 0.08)',
          backgroundColor: '#ffffff',
          marginTop: '15px'
        }} type="flex" align="middle">

          <Col span={12}>
            <div style={{
              borderLeft: '4px solid rgb(81, 188, 179)',
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
          <Col span={12}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <p>₹400</p>
              <Button style={{
                border: '1px solid #3EBCB3',
                color: '#3EBCB3',
                borderRadius: '14px',
                backgroundColor: '#3ebcb3',
                color: 'white'
              }}>Completed</Button>
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

