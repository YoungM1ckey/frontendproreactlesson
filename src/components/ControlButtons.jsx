import React, { Component } from 'react';

class ControlButtons extends Component {
    render() {
        const { onShowResults, onClear } = this.props;
        return (
            <div style={{ marginTop: '20px' }}>
                <button onClick={onShowResults} style={{ marginRight: '10px', padding: '10px 20px' }}>
                    Show Results
                </button>
                <button onClick={onClear} style={{ padding: '10px 20px' }}>
                    Clear Results
                </button>
            </div>
        );
    }
}

export default ControlButtons;
