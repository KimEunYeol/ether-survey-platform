import React from 'react'

import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

import web3 from '../eth/web3'

export default class Result extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(nextProps.questions) !== JSON.stringify(this.props.questions)) return true;
    return false;
  }

  render() {
    const { questions } = this.props;

    const chart = questions.map((qna, i) => {
      const answers = qna.answers.slice();
      answers.forEach((a, j) => {
        answers[j] = [web3.utils.toUtf8(a[0]), a[1]]
      })

      return (
        <div className="col s4" key={i}>
          <BillboardChart
            data={{
              columns: answers,
              type: 'donut'
            }}
          />
        </div>
      )
    });

    return (
      <div className="row">
        {chart}
      </div>
    )
  }
}
