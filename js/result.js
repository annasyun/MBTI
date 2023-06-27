// localStorage에서 maxDeveloperType 값 가져오기
const maxDeveloperType = localStorage.getItem("maxDeveloperType");

// 값이 존재할 경우 출력
if (maxDeveloperType) {
  console.log("maxDeveloperType:", maxDeveloperType);
} else {
  console.log("maxDeveloperType 값이 존재하지 않습니다.");
}
let resultData = "";

fetch("../src/datas/result.json")
  .then((response) => response.json())
  .then((data) => {
    resultData = data;
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
