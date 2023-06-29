document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

// localStorage에서 maxDeveloperType 값 가져오기
const maxDeveloperType = localStorage.getItem("maxDeveloperType");

// 값이 존재할 경우 출력
if (maxDeveloperType) {
  console.log("maxDeveloperType:", maxDeveloperType);
} else {
  console.log("maxDeveloperType 값이 존재하지 않습니다.");
}

let resultData = "";
const subtitle = document.querySelector(".subtitle-developertype");
const title = document.querySelector(".title-developertype");
const img = document.querySelector(".img-developertype");
const desc = document.querySelector(".txt-desc-developertype");
const ul = document.querySelector(".list-features");
const btnTest = document.querySelector(".btn-retest");

fetch("../src/datas/result.json")
  .then((response) => response.json())
  .then((data) => {
    resultData = data.filter((v) => {
      return v.name === maxDeveloperType;
    });
    subtitle.innerHTML = resultData[0].title;
    title.innerHTML = resultData[0].name;
    img.src = `src${resultData[0].img}`;
    desc.innerHTML = resultData[0].name;

    resultData[0].features.map((v) => {
      const feature = document.createElement("li");
      feature.innerHTML = v;
      ul.appendChild(feature);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });

btnTest.addEventListener("click", retest);

function retest() {
  window.location.href = "./test.html";
}
