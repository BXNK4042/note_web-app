'use client';

import { ThemeToggle } from '@/components/ThemeToggle';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { ThoughtBubble } from '@/components/ThoughtBubble';
import { ThoughtInput } from '@/components/ThoughtInput';
import { useThoughtStorage } from '@/hooks/useThoughtStorage';
import { useExpirationTimer } from '@/hooks/useExpirationTimer';

export default function Home() {
  const { thought, saveThought, clearThought } = useThoughtStorage();

  useExpirationTimer(thought, clearThought);

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      padding: '20px'
    }}>
      <ThemeToggle />

      <ThoughtBubble text={thought?.text} />

      <ProfileAvatar />

      <ThoughtInput onSave={saveThought} />

      <footer style={{
        marginTop: '40px',
        fontSize: '12px',
        opacity: 0.4,
        textAlign: 'center'
      }}>
        <p>Thoughts expire after 24 hours.</p>
        <p>Stored locally on your device.</p>
      </footer>
    </main>
  );
}
