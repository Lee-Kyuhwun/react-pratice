// // React와 Component를 import 합니다.
// import React, { Component } from 'react';

// // EventPractice 컴포넌트를 정의합니다.
// class EventPractice extends Component {
//   // 컴포넌트의 state를 초기화합니다. 여기서는 message라는 속성을 가지고 있고 초기값은 빈 문자열입니다.
//   state = {
//     username: '',
//     message: '',
//   };

//   // 입력 필드의 값이 바뀔 때 호출되는 메서드
//   handleChange = (e) => {
//     // e.target.value는 입력 필드의 현재 값입니다.
//     // setState 메서드를 사용하여 state의 message 값을 현재 입력 값으로 업데이트합니다.
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   // "확인" 버튼을 클릭했을 때 호출되는 메서드
//   handleClick = (e) => {
//     // 현재 state의 message 값을 alert 창으로 보여줍니다.
//     alert(this.state.username + ':' + this.state.message);
//     // message 값을 빈 문자열로 초기화하여 입력 필드를 비웁니다.
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };

//   // 컴포넌트를 렌더링하는 메서드
//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username} // 입력 필드의 값은 state의 message 값으로 설정됩니다.
//           onChange={this.handleChange} // 입력 값이 변경될 때마다 handleChange 메서드가 호출됩니다.
//         ></input>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해보세요."
//           value={this.state.message} // 입력 필드의 값은 state의 message 값으로 설정됩니다.
//           onChange={this.handleChange} // 입력 값이 변경될 때마다 handleChange 메서드가 호출됩니다.
//           onKeyDown={this.handleKeyPress}
//         ></input>
//         <button onClick={this.handleClick}>확인</button>
//         {/*버튼을
//         클릭하면handleClick 메서드가 호출됩니다.*/}
//       </>
//     );
//   }
// }

// export default EventPractice; // EventPractice 컴포넌트를 export하여 다른 파일에서 사용할 수 있도록 합니다.
