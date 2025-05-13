import React, { Component } from 'react';

class EmojiItem extends Component {
    render() {
        const { emoji, count, onVote } = this.props;
        return (
            <div
                style={{
                    fontSize: '40px',
                    cursor: 'pointer',
                    userSelect: 'none',
                }}
                onClick={() => onVote(emoji)}
            >
                {emoji}
                <br />
                <small>{count} votes</small>
            </div>
        );
    }
}

export default EmojiItem;

