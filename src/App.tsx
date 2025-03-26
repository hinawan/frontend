import { Card, Button, DatePicker, DatePickerProps, Col, Row } from 'antd';
import 'antd/dist/reset.css';
import Hello from './components/Hello';

import './App.css'



function App() {
  let counter = 0
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  const onClick = (event: any) => {
    console.log(counter++)
  }


  return (
    <>
      <Row justify="space-around">
      <Col span={6}>
      <Card title="Default card" style={{ width: 300, margin: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
        </Card>
      </Col>
      <Col span={6}>
      <Card title="Default card" style={{ width: 300, margin: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
          </Card>
      </Col>
      <Col span={6}>
      <Card title="Default card" style={{ width: 300, margin: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
          </Card>
      </Col>
      </Row>
      <Row justify="space-around">
      <Col span={6}>
      <Card title="Default card" style={{ width: 300, margin: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
        </Card>
      </Col>
      <Col span={6}>
      <Card title="Default card" style={{ width: 300, margin: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
          </Card>
      </Col>
      <Col span={6}>
      <Card title="Default card" style={{ width: 300, margin: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
          </Card>
      </Col>
      </Row>
      <Row justify="space-around">
      <Col span={6}>
      <Card title="Default card" style={{ width: 300, margin: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
        </Card>
      </Col>
      <Col span={6}>
      <Card title="Default card" style={{ width: 300, margin: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
          </Card>
      </Col>
      <Col span={6}>
      <Card title="Default card" style={{ width: 300, margin: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
          </Card>
      </Col>
      </Row>
      </>


  )
}

export default App
