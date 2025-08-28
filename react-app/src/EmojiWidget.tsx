import { useState } from 'react';


interface Emoji {
    emoji: string;
    label: string;
}

interface Votes {
    [key: string]: number;
}

function EmojiWidget() {
    const [selected, setSelected] = useState<string | null>(null);
    const [votes, setVotes] = useState({'🐵':0, '💩':0, '👍':0, '👎':0});

    const emojis: Emoji[] = [
        {emoji: '🐵', label: 'Monkey'},
        {emoji: '💩', label: 'Poop'},
        {emoji: '👍', label: 'Thumbs Up'},
        {emoji: '👎', label: 'Thumbs Down'},
    ];

    const handleVote = (emoji: string) => {
        setSelected(emoji);
        setVotes(prev => ({
          ...prev,
          [emoji]: prev[emoji] + 1
        }));
      };
}

export default EmojiWidget;