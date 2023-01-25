// Function component is a function that has a "props" object property and returns "JSX elements"
export function Welcome(props) {
  return (
    <div>
      <h2>Welcome, {props.name}</h2>
    </div>
  );
}

export function Comment({ user, comment, date }) {
  return (
    <div style={{ maxWidth: '600px', marginInline: 'auto' }}>
      <UserInfo user={user} />
      <p>{comment}</p>
      <p>{Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)}</p>
    </div>
  );
}

function Avatar({ user: { avatarUrl, name } }) {
  return <img src={avatarUrl} alt={name} style={{ width: '150px' }} />;
}

function UserInfo({ user }) {
  return (
    <div>
      <Avatar user={user} />
      <h2>{user.name}</h2>
    </div>
  );
}
