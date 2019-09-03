
import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

class SideTab extends PureComponent {
  render() {
    return (
      <>
        <Row gutter={24} xs={0} md={24} lg={24} justify="center" type="flex" >
          <Col xs={0} md={24} lg={24} style={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
            height: '100vh',
            position: 'fixed',
            width: '64px',
            left: '0'
          }}>
            <div style={{
              borderRight: '2px solid  #3ebcb3',
              height: '70px',
              marginTop: '150px'
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginRight: '30px',
                marginTop: '24px',
                position: 'absolute'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  border: '1px solid #3ebcb3',
                }}>
                </div>
                <div style={{
                  width: '10px',
                  height: '10px',
                  border: '1px solid #3ebcb3',
                }}>
                </div>
                <div style={{
                  width: '10px',
                  height: '10px',
                  border: '1px solid #3ebcb3',
                }}>
                </div>
                <div style={{
                  width: '10px',
                  height: '10px',
                  border: '1px solid #3ebcb3',
                }}>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={0} lg={0} style={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
            height: '64px',
            position: 'fixed',
            bottom: '0',
            zIndex: '999999',
            background: 'white'
          }}>
            <div style={{
              borderTop: '2px solid  #3ebcb3',
              width: '50%'
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginRight: '30px',
                marginTop: '12px',
                position: 'absolute'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  border: '1px solid #3ebcb3',
                  position: 'absolute',
                  left: '38px'
                }}>
                </div>
                <div style={{
                  width: '10px',
                  height: '10px',
                  border: '1px solid #3ebcb3',
                  position: 'absolute',
                  left: '50px'
                }}>
                </div>
                <br />
                <div style={{
                  width: '10px',
                  height: '10px',
                  border: '1px solid #3ebcb3',
                  position: 'absolute',
                  left: '38px',
                  bottom: '0'
                }}>
                </div>
                <div style={{
                  width: '10px',
                  height: '10px',
                  border: '1px solid #3ebcb3',
                  position: 'absolute',
                  left: '50px',
                  bottom: '0'
                }}>
                </div>
              </div>
            </div>
          </Col>
        </Row >
      </>
    )
  }
}
export default SideTab