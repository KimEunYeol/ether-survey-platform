import React from 'react';
import web3 from '../../eth/web3';
import config from '../../config';

export default class Survey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      amount: 5,
      reward: 0.05,

      transactionHash: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.createSurvey = this.createSurvey.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  createSurvey() {
    const { title, amount, reward } = this.state;
    const {
      history: { push }
    } = this.props;
    const { abi } = config.contract.manager;
    const contract = new web3.eth.Contract(abi, config.contract.manager.addr);

    web3.eth
      .getAccounts()
      .then(accounts => {
        contract.methods
          .createSurvey(
            web3.utils.fromUtf8(title),
            web3.utils.toWei(parseInt(reward, 10))
          )
          .send({
            from: accounts[0],
            value: web3.utils.toWei(parseInt(amount, 10))
          })
          .on('transactionHash', transactionHash =>
            this.setState({ transactionHash })
          )
          .on('confirmation', console.log)
          .on('receipt', receipt =>
            push(`/create/question/${receipt.events.Created.returnValues[0]}`)
          )
          .on('error', console.error);
      })
      .catch(console.error);
  }

  render() {
    const { transactionHash } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12 m6 offset-m3">
          <input
            type="text"
            className="validate"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <label htmlFor="title">설문조사 제목</label>
        </div>
        <div className="input-field col s12 m6 offset-m3">
          <input
            type="number"
            name="amount"
            step="0.0001"
            value={this.state.amount}
            onChange={this.handleInput}
          />
          <label htmlFor="amount">총 보상량(eth)</label>
        </div>
        <div className="input-field col s12 m6 offset-m3">
          <input
            type="number"
            name="reward"
            step="0.0001"
            value={this.state.reward}
            onChange={this.handleInput}
          />
          <label htmlFor="reward">보상량(eth)</label>
        </div>
        <div className="col s12 center-align">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            onClick={this.createSurvey}
          >
            만들기
            <i className="material-icons right">send</i>
          </button>
        </div>

        {transactionHash ? (
          <div>
            <div className="col s12 center-align">
              transactionHash:{' '}
              <a
                href={`https://ropsten.etherscan.io/tx/${transactionHash}`}
                target="_blank"
              >
                {transactionHash}
              </a>
            </div>
            <div className="col s12 center-align">
              <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                  <div className="circle-clipper left">
                    <div className="circle" />
                  </div>
                  <div className="gap-patch">
                    <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
