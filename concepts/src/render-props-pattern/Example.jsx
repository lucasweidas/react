export default function Example() {
  return <Layout navbar={text => <Navbar text={text} />} main={() => <MainContent />} footer={text => <Footer text={text} />} sidebar={() => <Sidebar />} />;
}

function Layout({ navbar, main, footer, sidebar }) {
  return (
    <div>
      {navbar('My navbar')}
      <div>
        {main()}
        {sidebar()}
      </div>
      {footer('by Lucas')}
    </div>
  );
}

function Navbar({ text }) {
  return <nav>{text}</nav>;
}

function MainContent() {
  return <main>Hello, World!</main>;
}

function Footer({ text }) {
  return <footer>{text}</footer>;
}

function Sidebar() {
  return <aside>Other links</aside>;
}
