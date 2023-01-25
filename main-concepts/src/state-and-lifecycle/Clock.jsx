import React, { useState, useEffect } from 'react';

export function ClockF() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // The first callback will be called after a component "mount"
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      // The second callback will be called after a component "unmount"
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h2>Function Component</h2>
      <FormattedDate date={date} />
    </div>
  );
}

export class ClockC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // Lifecycle methods
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  // Other Methods
  tick() {
    this.setState({ date: new Date() });
  }

  // Component method
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function FormattedDate({ date }) {
  return <p style={{ fontSize: '1.5rem' }}>It is {date.toLocaleTimeString()}</p>;
}
