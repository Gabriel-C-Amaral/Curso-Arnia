import React from "react";

type JsonObjects = {
  userid: number;
  id: number;
  title: string;
  body: string;
};

type State = {
  list: Array<Object>;
};

class NewList extends React.Component<{}, State> {
  state = {
    list: [],
  };

  async componentDidMount() {
    const ApiResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const data = await ApiResponse.json();

    this.setState({ list: data });
  }

  render() {
    return (
      <ul>
        {this.state.list.map(function (x: JsonObjects) {
          return <li>{x.body}</li>;
        })}
      </ul>
    );
  }
}

export default NewList;
