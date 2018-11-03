import React from 'react' 

class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            question : this.props.list,
        })
    }
    componentDidUpdate =() => {
        console.log(this.state.index , this.state.question , this.state.answer)
    }

    // changeElement  =  (e)  => {
    //     const quest = this.state.question 
    //     quest[0].question[0].qtext = e
    //     return this.setState ({
    //         question : quest
    //     } , () => {return (
    //         this.props.onChange(this.state.index , this.state.question)
    //     )})
    // }
    changeElement = (e) => {
        return true
    }

    addAnswer = () => {
        return this.props.addAnswer(this.props.index)
    }


    render() {
        return (
            <div>
                {this.props.index} : <input type="text" onChange={event => {return this.props.onChangeQuestion(this.props.index ,event.target.value)}} />
                <br/>
                {this.state.question.answer.map((el , index) => {
                    return (<div key={index}> answer N°{index} : <input type="text" onChange={event => {return this.props.onChangeAnswer(this.props.index , event.target.value , index)}}/></div>)
                })}
                <button onClick={this.addAnswer}>add answer</button>
            </div>
        )
    }
}

export default Question