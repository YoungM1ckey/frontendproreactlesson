import React, { Component } from 'react';

class ResultDisplay extends Component {
    render() {
        const { result } = this.props;
        return (
            <div style={{ marginTop: '20px', fontSize: '24px' }}>
                {result}
            </div>
        );
    }
}

export default ResultDisplay;
