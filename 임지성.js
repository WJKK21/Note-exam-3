<script>

  
  // 정적인 객체 리터럴, 데이터를 넣을 자리를 마련했다.
let basicData = {
  header: {},
  main: {},
  footer: {} 
}
// fromJsonData 변수는
// json.parse() 를 통해 받아온 데이터라고 가정한다.

let fromJsonData = {
  header: {
    content: "header 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#ccc"
    }
  },
  main: {
    content: "main 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#333"
    }
  },
  footer: {
    content: "footer 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#666"
    }
  }
}

//console.dir(fromJsonData.header.style.width)
//console.log(fromJsonData[1])
//const backgroundColor = fromJsonData.header.style.backgroundColor;
//const backgroundColor = fromJsonData["header"]["style"]["backgroundColor"];
//GPT: for in을 사용하시길 바랍니다 JSON.stringify() 객체를 문자열로 변환시켜줌
  
/* for( let i = 0; i<fromJsonData.length ; i++ ){
    value.JSON.stringify(fromJsonData)

  }
  1. console.log
  2.객체를 문자열로 변환시키는 메서드가 있나
  3. basicData는 왜 쓰지
  4. fromJsonData 객체안에 객체 JSON 타입
  5. innerHTML로 적용 시키려면 태그로 만들어야되지 않나?
  6. fromJsonData를 value에 넣어서 basicData으로 부르나?

  모르는 것 
  class
  생성자 함수
  setter
  
 */
function exampleOne(basicData, fromJsonData) {
  let value = "";

  // 아래의 호출부를 참고하여, 지역변수 value에
  // 문자열 데이터로 객체를 가공하는 코드를 작성한다.
  return value;
  console.log(value)
}

// 특정 HTML 요소에 값을 넣는 것을 가정한다.
const element = document.querySelector("body");
element.innerHTML = exampleOne (basicData, fromJsonData);

// 위의 fromJsonData과 같은 객체나 JSON을 생성하기 위한
// 생성자 함수, 클래스를 작성한다.
// setter 기능을 활용하여 인스턴스의 값들은 모두 "문자열"만 들어가도록 
// 안정성을 확보한다.

class ExampleTwo {
  constructor() {
  }
}
</script>
