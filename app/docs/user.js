class User extends React.Component {
    constructor() {
        super();
        this.state = {
            newUser: {
                name:'',
                email:'',
                password:''
            },
            loginUser: {
                email:'',
                password:''
            }
        }

        this.register = this.register.bind(this);
        this.login = this.login.bind(this);

    }

    register(){
        axios.post('/register',
            {
                name: this.state.newUser.name,
                email: this.state.newUser.email,
                password: this.state.newUser.password
            })
            .then(result => {
                console.log("Success: ", result.data);
            })
            .catch(err => {
                console.log("Error: ", err.response.data);
            });
    }

    login(){
        axios.post('/login',
        {
            email: this.state.loginUser.email,
            password: this.state.loginUser.password
        })
        .then(result => {
            console.log("Success: ", result.data);
        })
        .catch(err => {
            console.log("Error: ", err);
        });
    }


    render() {
        let data = this.state.data;

        return (
            <div>
                <h1>Register new user {this.state.newUser.name}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input type='text' 
                                onChange={e => this.state.newUser.name = e.target.value} 
                                /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type='text' 
                                onChange={e => this.state.newUser.email = e.target.value} 
                                /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type='text' 
                                onChange={e => this.state.newUser.password = e.target.value }
                                /></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.register}>Register</button></td>
                        </tr>
                    </tbody>
                </table>
                <h1>Login</h1>
                <table>
                    <tbody>
                    <tr>
                            <td>Email</td>
                            <td><input type='text' 
                                onChange={e => this.state.loginUser.email = e.target.value} 
                                /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type='text' 
                                onChange={e => this.state.loginUser.password = e.target.value }
                                /></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.login }>Login</button></td>
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
