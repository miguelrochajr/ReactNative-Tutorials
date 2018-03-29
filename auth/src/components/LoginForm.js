import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email:"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            placeholder="user@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry // bool variables are true by default
            value={this.state.password}
            onChange={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
