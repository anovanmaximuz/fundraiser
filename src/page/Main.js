import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Story from './Story';
import DonorList from './DonorList';
import ShareButtons from './ShareButtons';

class Main extends React.Component {
    render() {
        return (
            <div className="mainContent">
                <Container>
                    <Row>
                        <Col xs={12} md={8} className="titleCol">
                            <Story story={this.props.story} donors={this.props.donors} />
                        </Col>
                        <Col xs={12} md={4}>
                            <DonorList donors={this.props.donors} donorList={this.props.donorList} />
                        </Col>
                    </Row>
                    <Row>
                        <hr />
                        <ShareButtons sharetext={this.props.sharetext} />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;
