import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    //state의 초기값 설정
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state; // state조회할때는 this.state로 조회한다.
    return (
      <>
        <h1>{number}</h1>
        <button // onCliick을 통해 버튼이 클릭했을때 호출할 함수를 지정한다.
          onClick={() => {
            //this. state를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </>
    );
  }
}

export default Counter;
