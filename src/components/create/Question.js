import React from 'react'
import { Link } from 'react-router-dom'

import web3 from '../../eth/web3'
import config from '../../config'

export default class Question extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answers: [''],

      transactionHash: ''
    }

    this.handleQuestion = this.handleQuestion.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
    this.addQuestion = this.addQuestion.bind(this)
  }

  handleQuestion(e) {
    this.setState({ question: e.target.value })
  }

  handleAnswer(i, e) {
    const answers = this.state.answers
    answers[i] = e.target.value
    this.setState({ answers })
  }

  addAnswer() {
    this.setState({ answers: [...this.state.answers, ''] })
  }

  removeAnswer(i) {
    const { answers } = this.state

    if (answers.length > 1) {
      answers.splice(i, 1)
      this.setState({ answers })
    }
  }

  addQuestion() {
    const { question, answers } = this.state;
    const { abi } = config.contract.survey;
    const { addr } = this.props.match.params;
    const contract = new web3.eth.Contract(abi, addr);

    web3.eth.getAccounts()
      .then(accounts => {
        contract.methods.addQuestion(
          web3.utils.fromUtf8(question),
          Array.from(answers, x => web3.utils.fromUtf8(x))
        )
          .send({ from: accounts[0] })
          .on('transactionHash', transactionHash => this.setState({ transactionHash }))
          .on('confirmation', console.log)
          .on('receipt', () => this.setState({ question: '', answers: [''], transactionHash: '' }))
          .on('error', console.error)
      })
      .catch(console.error);
  }

  render() {
    const { transactionHash } = this.state;

    const answers = (
      this.state.answers.map((answer, i) => {
        return (
          <div className="input-field col s9 m6 offset-s1 offset-m3" key={i}>
            <Link to="#" className="prefix" onClick={this.removeAnswer.bind(this, i)}>
              <i className="material-icons">remove</i>
            </Link>
            <input type="text" className="validate" name="answer" value={this.state.answers[i]} onChange={this.handleAnswer.bind(this, i)} />
            <label htmlFor="answer">답안 (#{i + 1})</label>
          </div>
        )
      })
    )

    return (
      <div className="row">
        <div className="input-field col s10 m6 offset-s1 offset-m3">
          <input type="text" className="validate" name="question" value={this.state.question} onChange={this.handleQuestion} />
          <label htmlFor="question">문항</label>
        </div>
        <div className="col s12">
          {
            answers
          }
          <div className="col s1">
            <button className="btn-floating btn-small waves-effect waves-light red" onClick={this.addAnswer}>
              <i className="material-icons">add</i>
            </button>
          </div>
        </div>
        <div className="col s12 center-align">
          <button className="btn waves-effect waves-light" type="submit" onClick={this.addQuestion}>추가하기
            <i className="material-icons right">send</i>
          </button>
        </div>
        {
          transactionHash
            ? (
              <div>
                <div className="col s12 center-align">
                  transactionHash: <a href={`https://ropsten.etherscan.io/tx/${transactionHash}`} target="_blank">{transactionHash}</a>
                </div>
                <div className="col s12 center-align">
                  <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                      <div className="circle-clipper left">
                        <div className="circle"></div>
                      </div><div className="gap-patch">
                        <div className="circle"></div>
                      </div><div className="circle-clipper right">
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            : null
        }
      </div>
    )
  }
}
