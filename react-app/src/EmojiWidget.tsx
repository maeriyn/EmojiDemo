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
          [emoji]: prev[emoji as keyof typeof prev] + 1
        }));
      };

    return(
        <div>
            <h1>Emoji Widget</h1>
            <div>
                {emojis.map((emoji) => (
                    <button key={emoji.emoji} onClick={() => handleVote(emoji.emoji)}>
                        {emoji.emoji}
                    </button>
                ))}
            </div>
        </div>
    )
}



export default EmojiWidget;