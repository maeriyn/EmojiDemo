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
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100%',
                width: '100vw',
            }
        }>
            <h1>Vote for your favorite emoji!</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                margin: '20px',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                {emojis.map((emoji) => (
                    <button key={emoji.emoji} onClick={() => handleVote(emoji.emoji)}>
                        {emoji.emoji}
                    </button>
                ))}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                margin: '20px',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
            }}>
                {Object.entries(votes).map(([emoji, count]) => (
                    <div key={emoji}>
                        <span>{emoji}</span>
                        <span>{count}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default EmojiWidget;