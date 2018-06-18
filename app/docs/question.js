class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            newQuestion: {
                question:'',
                attribute:'',
                left:'',
                right:''
            }
        }
        this.postQuestion = this.postQuestion.bind(this);
    }

    postQuestion(){
        axios.post('/question',
            {
                question: this.state.newQuestion.question,
                attribute: this.state.newQuestion.attribute,
                left: this.state.newQuestion.left,
                right: this.state.newQuestion.right
            })
            .then(result => {
                console.log("Success: ", result.data);
            })
            .catch(err => {
                console.log("Error: ", err.response.data);
            });
    }

    render() {
        let data = this.state.data;

        return (
            <div>
                <h1>Post new question {this.state.newQuestion.question}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Question</td>
                            <td><input type='text' 
                                onChange={e => this.state.newQuestion.question = e.target.value} 
                                /></td>
                        </tr>
                        <tr>
                            <td>Attribute</td>
                            <td><input type='text' 
                                onChange={e => this.state.newQuestion.attribute = e.target.value} 
                                /></td>
                        </tr>
                        <tr>
                            <td>Choice 1 (Positive)</td>
                            <td><input type='text' 
                                onChange={e => this.state.newQuestion.left = e.target.value }
                                /></td>
                        </tr>
                        <tr>
                            <td>Choice 2 (Negative)</td>
                            <td><input type='text' 
                                onChange={e => this.state.newQuestion.right = e.target.value }
                                /></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.postQuestion}>Post this!</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <Question />,
    document.getElementById('app')
);
