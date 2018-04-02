import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@email.com"
                    />
                </CardSection> 

                 <CardSection>
                    <Input
                        secureTextEntry 
                        label="Password"
                        placeholder="Password"
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

export default LoginForm;
