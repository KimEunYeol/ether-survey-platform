import React from 'react'

import web3 from '../eth/web3'
import config from '../config'

import Result from './Result'

export default class Survey extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      checked: {},

      transactionHash: '',
      blockNumber: -1
    }

    this.participate = this.participate.bind(this)
  }

  participate() {
    const { abi } = config.contract.survey;
    const { addr } = this.props.match.params;
    const contract = new web3.eth.Contract(abi, addr);
    const { questions, checked } = this.state;

    let promise = questions.map(qna => {
      return new Promise(resolve => {
        resolve(checked[qna.question]);
      })
        .then(answer => { return answer; })
        .catch(console.error);
    })

    Promise.all(promise)
      .then(answers => {
        web3.eth.getAccounts()
          .then(accounts => {
            if (!accounts[0]) return alert('metamask에 로그인해주세요.');
            contract.methods.participate(answers)
              .send({ from: accounts[0] })
              .on('transactionHash', transactionHash => this.setState({ transactionHash }))
              .on('confirmation', console.log)
              .on('receipt', receipt => this.setState({ blockNumber: receipt.blockNumber }))
              .on('error', console.error);
          })
      })
      .catch(console.error);
  }

  componentDidMount() {
    const { abi } = config.contract.survey;
    const { addr } = this.props.match.params;
    const contract = new web3.eth.Contract(abi, addr);

    contract.methods.getQuestions()
      .call()
      .then(questions => {
        let promise = questions.map(question => {
          return new Promise((resolve) => {
            contract.methods.getQuestion(question)
              .call()
              .then(answers => {
                let prom = answers.map(answer => {
                  return new Promise((res, rej) => {
                    contract.methods.getCount(question, answer)
                      .call()
                      .then(count => {
                        return res([answer, count]);
                      })
                      .catch(rej)
                  })
                })

                Promise.all(prom)
                  .then(answers => {
                    return resolve({
                      question,
                      answers
                    });
                  })
                  .catch(console.error);
              })
              .catch(console.error)
          });
        });
        Promise.all(promise)
          .then(questions => this.setState({ questions }))
          .catch(console.error);
      })
      .catch(console.error);
  }

  render() {
    const { questions, checked, transactionHash, blockNumber } = this.state;

    const list = questions.map((qna, i) => {
      const item = qna.answers.map((answer, j) => {
        return (
          <p key={j}>
            <label>
              <input className="with-gap" name={qna.question} type="radio" value={answer[0]} onChange={this._handleRadio.bind(this)} />
              <span>{web3.utils.toUtf8(answer[0])}</span>
            </label>
          </p>
        )
      })

      return (
        <li className="collection-item" key={i}>
          <h6>{i + 1}. {web3.utils.toUtf8(qna.question)}</h6>
          {item}
        </li>
      )
    })

    return (
      <div className="row">
        <div className="col s12 right-align" style={{ marginTop: '2em' }}>
          <button className="btn waves-effect waves-light" type="submit" onClick={this._appendQuestion.bind(this)}>질문 추가
                <i className="material-icons right">add</i>
          </button>
        </div>
        <div className="col s12">
          <Result questions={questions} />
        </div>
        <div className="col s12">
          <ul className="collection">
            {questions.length > 0 ? list : null}
          </ul>
        </div>
        {
          questions.length > 0 ?
            <div className="col s12 center-align">
              <button className="btn waves-effect waves-light" type="submit" disabled={questions.length !== Object.keys(checked).length} onClick={this.participate}>참여
                  <i className="material-icons right">send</i>
              </button>
            </div>
            :
            null
        }
        
        {
          transactionHash
            ? (
              <div className="col s12">
                transactionHash: <a href={`https://ropsten.etherscan.io/tx/${transactionHash}`} target="_blank">{transactionHash}</a>
              </div>
            )
            : null
        }
        {
          blockNumber > -1
            ? (
              <div className="col s12">
                blockNumber: <a href={`https://ropsten.etherscan.io/block/${blockNumber}`} target="_blank">{blockNumber}</a>
              </div>
            )
            : null
        }
        {
          transactionHash && blockNumber === -1
            ? (
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
            )
            : null
        }
      </div>
    )
  }

  _appendQuestion() {
    this.props.history.push(`/create/question/${this.props.match.params.addr}`);
  }

  _handleRadio(e) {
    this.setState({ checked: { ...this.state.checked, [e.target.name]: e.target.value } });
  }
}
