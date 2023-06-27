function startTest() {
  window.location.href = "./test.html";
}

const curPage = document.querySelector(".num-curPage");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const question = document.querySelector(".txt-question");
const answer1 = document.querySelector(".txt-answer1");
const answer2 = document.querySelector(".txt-answer2");
const answer3 = document.querySelector(".txt-answer3");
const answer4 = document.querySelector(".txt-answer4");
const answer5 = document.querySelector(".txt-answer5");
let developerTypes = [
  { name: "백엔드 개발자", count: 0 },
  { name: "프론트엔드 개발자", count: 0 },
  { name: "데이터분석과 인공지능", count: 0 },
  { name: "정보보안", count: 0 },
  { name: "게임 개발", count: 0 },
];
// 최대값을 가진 개발자 유형을 저장할 변수 초기화
let maxDeveloperType = "";

let curPageNum = 1;
let testData = "";

fetch("../src/datas/data.json")
  .then((response) => response.json())
  .then((data) => {
    testData = data;
  })
  .catch((error) => {
    console.log("Error:", error);
  });
// 이전/다음 버튼 이벤트
prevBtn.addEventListener("click", function () {
  if (parseInt(curPageNum) === 1) {
    return;
  } else {
    curPageNum--;
    curPage.innerHTML = curPageNum;
    question.innerHTML = testData.questions[parseInt(curPageNum) - 1].content;
    answer1.innerHTML = testData.answers[parseInt(curPageNum - 1) * 5].content;
    answer2.innerHTML =
      testData.answers[parseInt(curPageNum - 1) * 5 + 1].content;
    answer3.innerHTML =
      testData.answers[parseInt(curPageNum - 1) * 5 + 2].content;
    answer4.innerHTML =
      testData.answers[parseInt(curPageNum - 1) * 5 + 3].content;
    answer5.innerHTML =
      testData.answers[parseInt(curPageNum - 1) * 5 + 4].content;
  }
});

nextBtn.addEventListener("click", function () {
  const selectedAnswer = document.querySelector('input[name="choice"]:checked');
  let countIndex;
  if (selectedAnswer) {
    if (selectedAnswer.id === "testChoice1") {
      countIndex = testData.answers[parseInt(curPageNum - 1) * 5].developer;
    } else if (selectedAnswer.id === "testChoice2") {
      countIndex = testData.answers[parseInt(curPageNum - 1) * 5 + 1].developer;
    } else if (selectedAnswer.id === "testChoice3") {
      countIndex = testData.answers[parseInt(curPageNum - 1) * 5 + 2].developer;
    } else if (selectedAnswer.id === "testChoice4") {
      countIndex = testData.answers[parseInt(curPageNum - 1) * 5 + 3].developer;
    } else if (selectedAnswer.id === "testChoice5") {
      countIndex = testData.answers[parseInt(curPageNum - 1) * 5 + 4].developer;
    }

    switch (countIndex) {
      case 1:
        developerTypes[countIndex - 1].count += 1;
        break;
      case 2:
        developerTypes[countIndex - 1].count += 1;
        break;
      case 3:
        developerTypes[countIndex - 1].count += 1;
        break;
      case 4:
        developerTypes[countIndex - 1].count += 1;
        break;
      case 5:
        developerTypes[countIndex - 1].count += 1;
        break;

      default:
        break;
    }

    if (parseInt(curPageNum) !== 10) {
      curPageNum++;
      curPage.innerHTML = curPageNum;
      question.innerHTML = testData.questions[parseInt(curPageNum) - 1].content;
      answer1.innerHTML =
        testData.answers[parseInt(curPageNum - 1) * 5].content;
      answer2.innerHTML =
        testData.answers[parseInt(curPageNum - 1) * 5 + 1].content;
      answer3.innerHTML =
        testData.answers[parseInt(curPageNum - 1) * 5 + 2].content;
      answer4.innerHTML =
        testData.answers[parseInt(curPageNum - 1) * 5 + 3].content;
      answer5.innerHTML =
        testData.answers[parseInt(curPageNum - 1) * 5 + 4].content;
      console.log(selectedAnswer, countIndex);
      console.log(developerTypes);
    } else {
      // 최대값을 저장할 변수 초기화
      let maxCount = 0;

      // developerTypes 배열 순회
      for (let i = 0; i < developerTypes.length; i++) {
        // 현재 개발자 유형의 카운트 값 가져오기
        const currentCount = developerTypes[i].count;

        // 최대값 비교
        if (currentCount > maxCount) {
          maxCount = currentCount;
          maxDeveloperType = developerTypes[i].name;
        }
      }

      // 최대값과 해당하는 개발자 유형 출력
      console.log("최대값:", maxCount);
      console.log("최대값을 가진 개발자 유형:", maxDeveloperType);

      localStorage.setItem("maxDeveloperType", maxDeveloperType);

      alert(
        `최대값:
        ${maxCount},
        최대값을 가진 개발자 유형:
        ${maxDeveloperType}`
      );
      showResult();
    }
  } else {
    alert("본인과 가까운 선택지를 선택해주세요!");
  }
});

function showResult() {
  window.location.href = "./result.html";
}
