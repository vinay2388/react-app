import React, { Component } from 'react';

const loginCreds = {
    "username": "pabutler",
    "password": "Paul@1234",
    "tenant": "acmefin"
}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }

    static authorization = '';

    login() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginCreds)
        };
        fetch('http://web-api-app.dev.stacklynx.com/api/auth/sign-in', requestOptions)
            .then(res => res.json())
            .then(res => this.setState({ authorization: res }));
    }

    render() {
        return (
            <button type="button" onClick={this.login}>LOGIN</button>
        )
    }
}

export default { Login };