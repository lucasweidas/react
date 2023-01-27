import './App.css';
import Intro from './intro-jsx/Intro.jsx';
import { Welcome, Comment } from './components-and-props/Components.jsx';
import { ClockF, ClockC } from './state-and-lifecycle/Clock.jsx';
import { Login } from './handling-events/Login.jsx';
import { List } from './lists-and-keys/List.jsx';
import { SomeForm } from './forms/SomeForm.jsx';
import { LengthConverter } from './lifting-state-up/Converter.jsx';
import { SomethingCool } from './composition-vs-inheritance/SomethingCool.jsx';
import { FilterableProductTable } from './thinking-in-react/Table.jsx';
import ContextExample from './deeply-data-and-context/Example';
import ContextChallenge from './deeply-data-and-context/Challenge';
import SculptureGallery from './adding-interactivity/Example.jsx';

function App() {
  return (
    <div className="App">
      {/* <Intro /> */}
      {/* <Welcome name="Lucas" /> */}
      {/* <Comment
        user={{ name: 'John', avatarUrl: 'https://gravatar.com/avatar/820d28f8764e3a199fd692401cfa5b21?s=400&d=robohash&r=x' }}
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusamus commodi voluptates quae recusandae esse dolorum, labore repudiandae eius velit praesentium dolor sapiente odit mollitia, assumenda vel modi suscipit at?"
        date={new Date('2020-09-20')}
      /> */}
      {/* <ClockF /> */}
      {/* <ClockC /> */}
      {/* <Login /> */}
      {/* <List values={[1, 2, 3, 4, 5]} /> */}
      {/* <SomeForm /> */}
      {/* <LengthConverter /> */}
      {/* <SomethingCool /> */}
      {/* <FilterableProductTable /> */}
      {/* <ContextExample /> */}
      {/* <ContextChallenge /> */}
      <SculptureGallery />
    </div>
  );
}

export default App;
