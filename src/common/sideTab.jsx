
import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

class SideTab extends PureComponent {
  render() {
    return (
      <Row justify="center" type="flex" style={{
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
        height: '100vh',
        position: 'fixed',
        width: '64px',
      }}>
        <div style={{
          borderRight: '2px solid  #3ebcb3',
          height: '70px',
          marginTop: '150px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: '20px',
            marginRight: '16px',
            marginTop: '24px'
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
      </Row >
    )
  }
}
export default SideTab