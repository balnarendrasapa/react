import { Button, Input, Space, Col, Row } from 'antd';

const Content = () => {

    return (
        <Row>
            <Col span={6}></Col>
            <Col span={12}>
                <Space.Compact style={{ width: '100%' }}>
                    <Input defaultValue="Combine input and button" />
                    <Button type="primary" style={
                        { 
                            background: "#0096FF", 
                            borderColor: "white",
                        }
                    }>
                        Submit
                    </Button>
                </Space.Compact>
            </Col>
            <Col span={6}></Col>
        </Row>

    )
}

export default Content;