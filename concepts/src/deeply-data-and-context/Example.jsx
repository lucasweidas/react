// "context" let's you pass some data deeply in the jsx tree
import { useContext } from 'react';
import { LevelContext } from './LevelContext';

export default function Example() {
  return (
    <div>
      <Section level={1}>
        <Heading>Heading 1</Heading>
        <Section>
          <Heading>Heading 2</Heading>
          <Section>
            <Heading>Heading 3</Heading>
            <Section>
              <Heading>Heading 4</Heading>
              <Section>
                <Heading>Heading 5</Heading>
                <Heading>Heading 5</Heading>
                <Section>
                  <Heading>Heading 6</Heading>
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
        <Section>
          <Heading>Heading 2</Heading>
        </Section>
      </Section>
    </div>
  );
}

// If a value isn't specified in the whole context tree, it will get the default value passed in "createContext()"
function Section({ level, children }) {
  const parentLevel = useContext(LevelContext);
  return (
    <section style={{ padding: '1rem', border: '1px solid hsl(200, 100%, 50%)', borderRadius: '1rem' }}>
      <LevelContext.Provider value={level ?? parentLevel + 1}>{children}</LevelContext.Provider>
    </section>
  );
}

function Heading({ children }) {
  const level = useContext(LevelContext);
  try {
    switch (level) {
      case 1:
        return <h1>{children}</h1>;
      case 2:
        return <h2>{children}</h2>;
      case 3:
        return <h3>{children}</h3>;
      case 4:
        return <h4>{children}</h4>;
      case 5:
        return <h5>{children}</h5>;
      case 6:
        return <h6>{children}</h6>;
      default:
        throw new Error('Invalid level: levels must be between 1 and 6');
    }
  } catch (error) {
    console.error(error);
    return <p style={{ color: 'red' }}>Invalid heading level</p>;
  }
}
