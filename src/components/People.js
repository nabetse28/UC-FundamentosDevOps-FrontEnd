import React, { Component } from "react";
import { Segment, Card, Button } from "semantic-ui-react";
import axios from "axios";

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    this.fetchPeople();
  }

  async fetchPeople() {
    const people = await axios.get("http://localhost:5000/");
    // console.log(people);
    this.setState({ people: people.data });
  }

  deletePerson = (id) => {
    console.log(id);
  };

  PeopleCards = () => {
    return (
      <Card.Group>
        {this.state.people.map((person) => {
          return (
            <Card key={person._id}>
              <Card.Content>
                <Card.Header>{person.name}</Card.Header>
                <Card.Meta>Age: {person.age}</Card.Meta>
                <Card.Meta>Background: {person.background}</Card.Meta>
                <Card.Description>{person.description}</Card.Description>
              </Card.Content>
              <Card.Content extra style={{ textAlign: "center" }}>
                <Button
                  color="red"
                  onClick={() => {
                    axios
                      .delete("http://localhost:5000/person/" + person._id)
                      .then((res) => {
                        console.log(res);
                        this.fetchPeople();
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  Delete
                </Button>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  };

  render() {
    return (
      <Segment>
        <div>{this.PeopleCards()}</div>
      </Segment>
    );
  }
}
