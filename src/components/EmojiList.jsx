import React, { Component } from 'react';
import EmojiItem from './EmojiItem';

class EmojiList extends Component {
    render() {
        const { emojis, votes, onVote } = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                {emojis.map((emoji) => (
                    <EmojiItem key={emoji} emoji={emoji} count={votes[emoji] || 0} onVote={onVote} />
                ))}
            </div>
        );
    }
}

export default EmojiList;
