import React, {Component} from 'react';
export class Bombe extends Component {
    constructor(props) {
        super(props);
        this.state = { minutes:3,secondes:59,explosion:false};
    }


    render() {
        return (
            <div>
                <h2>Tic Tac ....</h2>
                <input disabled type="texte" value={this.state.minutes+":"+this.state.secondes}/>
            </div>
        );
    }
    componentDidMount=()=> {
        let numSeconde=this.state.secondes;
        let idTimer=setInterval( ()=>{
            this.setState({secondes: --numSeconde})
            },1000)
        this.setState({timer:idTimer})
    }
    static getDerivedStateFromProps(props,state){
        return{}
    }
}
