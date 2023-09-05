import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  // constructor(props) {
  //   super(props);
  //   //state의 초기값 설정
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  render() {
    const { number, fixedNumber } = this.state; // state조회할때는 this.state로 조회한다.
    return (
      <>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>

        <button // onCliick을 통해 버튼이 클릭했을때 호출할 함수를 지정한다.
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </>
    );
  }
}

export default Counter;
