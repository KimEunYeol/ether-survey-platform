import React from 'react';
import { Link } from 'react-router-dom';

import web3 from '../eth/web3';
import config from '../config';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      surveys: []
    };
  }

  componentDidMount() {
    const { abi } = config.contract.manager;
    const contract = new web3.eth.Contract(abi, config.contract.manager.addr);

    contract.methods.getSurveys()
      .call()
      .then(surveys => {
        let promise = surveys.map(addr => {
          return new Promise(resolve => {
            contract.methods.getTitle(addr)
              .call()
              .then(title => {
                resolve({
                  addr,
                  title: web3.utils.toUtf8(title)
                });
              })
              .catch(console.error);
          })
            .then(survey => { return survey; })
            .catch(console.error);
        });
        Promise.all(promise)
          .then(surveys => this.setState({ surveys }))
          .catch(console.error);
      })
      .catch(console.error)
  }

  render() {
    const { addr } = config.contract.manager;
    
    const surveys = (
      this.state.surveys.map((survey, i) => {
        return (
          <div className="card-panel" key={i}>
            <Link to={`/survey/${survey.addr}`}>{survey.title}</Link>
          </div>
        );
      })
    );

    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 center-align">
          Ropsten Test Network <a href={`https://ropsten.etherscan.io/address/${addr}`} target="_blank">{addr}</a>에 배포되었습니다.
        </div>
        <div className="col s12 m8 offset-m2 right-align">
          <Link to="/create" className="waves-effect waves-light btn">설문 만들기</Link>
        </div>
        <div className="col s12 m8 offset-m2">
          {surveys}
        </div>
      </div >
    );
  }
}
