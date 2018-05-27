class User extends React.Component {
    constructor() {
        super();
        this.state = {
            loginUser: {
                email: 'batman@gmail.com',
                password: 'batman',
                token: ''
            },
            question: {
                question: '',
                selectionA: '',
                selectionB: ''
            }
        }

        this.login = this.login.bind(this);
        this.getNextQuestion = this.getNextQuestion.bind(this);

    }

    getNextQuestion() {
        axios(
            {
                url:'/useranswer',
                method: 'GET',
                headers: {
                    'content-Type': 'application/json',
                    authorization: 'bearer ' + this.state.loginUser.token
                },
                body: {
                    email: this.state.loginUser.email,
                    password: this.state.loginUser.password
                }
            })
            .then(result => {
                this.setState({question:result.data});
                console.log("Success: ", result.data);
            })
            .catch(err => {
                console.log("Error: ", err.response.data);
            });
    }

    login() {
        axios.post('/login',
            {
                email: this.state.loginUser.email,
                password: this.state.loginUser.password
            })
            .then(result => {
                this.setState({ loginUser: { token: result.data.token } });
                console.log("Success: ", this.state.loginUser.token);
            })
            .catch(err => {
                console.log("Error: ", err);
            });
    }


    render() {
        let data = this.state.data;

        return (
            <div>
                <h1>Login</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td><input type='text'
                                onChange={e => this.state.loginUser.email = e.target.value}
                                value='batman@gmail.com'
                            /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type='text'
                                onChange={e => this.state.loginUser.password = e.target.value}
                                value='batman'
                            /></td>
                        </tr>
                        <tr>
                            <td>Token {this.state.loginUser.token} {this.state.loginUser.name}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.login}>Login</button></td>
                        </tr>
                    </tbody>
                </table>
                <h1>Get new question</h1>
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={this.getNextQuestion}>Get new question</button></td>
                        </tr>
                        <tr>
                            <td>Question</td>
                            <td>{this.state.question.question}</td>
                        </tr>
                        <tr>
                            <td>Selection A</td>
                            <td>{this.state.question.selectionA}</td>
                        </tr>
                        <tr>
                            <td>Selection B</td>
                            <td>{this.state.question.selectionB}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <User />,
    document.getElementById('app')
);
