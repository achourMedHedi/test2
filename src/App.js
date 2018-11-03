import React from 'react'
import Question from './Question';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      type : 'qi' ,
      questions : [
        {
          id : 1 , 
          question : [{ 
            qtext : "Fisrt question" , 
            break: false 
          }],
          answer : [{
            atext : 'A' ,
            isCorrect : false 
          }],
          type : 'qi' 
        } , 
        {
          id : 2 , 
          question : [{ 
            qtext : "Fisrt question" , 
            break: false 
          }],
          answer : [{
            atext : 'A' ,
            isCorrect : false 
          }],
          type : 'dominos' 
        }
      ]
    })
  }



 addQuestion = () =>{
   return this.setState({
    questions : [...this.state.questions , 
     {
       id : 1 , 
       question : [{ 
         qtext : "" , 
         break: false 
       }],
       answer : [{
         atext : '' ,
         isCorrect : false 
       }],
       type : this.state.type 
     }]
  })
 }


 onChangeQuestion = (i , change) => {
  const q = this.state.questions 
  q[i].question[0].qtext = change
  this.setState ({
    questions: q
  })
}
onChangeAnswer = (indexQuestion , change , indexAnswer) => {
  const q = this.state.questions 
  q[indexQuestion].answer[indexAnswer].atext = change
  this.setState ({
    questions:q
  })
}

addAnswer = (i) => {
  const q = this.state.questions
  q[i].answer = [...this.state.questions[i].answer , {}]
  return this.setState({
    questions : q
  })
}


  render () {
    return (
      <div>
        
        {this.state.questions.map((el , index) => {
          return (
            <Question key={index} addAnswer={this.addAnswer} index={index} list={el} onChangeQuestion = {this.onChangeQuestion}  onChangeAnswer ={this.onChangeAnswer}/>

          )
        })}

        <button onClick={this.addQuestion} > add anotehr question</button>
        {console.log(this.state.questions)}
      </div>
    )
  }
}

export default App