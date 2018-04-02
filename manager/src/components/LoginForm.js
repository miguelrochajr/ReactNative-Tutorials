import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection> 

                 <CardSection>
                    <Input
                        secureTextEntry 
                        label="Password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection> 

                 <CardSection>
                    <Button>
                        LOG IN
                    </Button>
                </CardSection> 
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        // the reducer is producing this auth.email property
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(
    mapStateToProps, 
    { 
        emailChanged, 
        passwordChanged 
    }
)(LoginForm);
