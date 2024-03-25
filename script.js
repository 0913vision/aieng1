let flashcardContents = [
  "시작!\n왼쪽을 눌러 이전\n오른쪽을 눌러 다음",
  "range",
  "범위, 다양성",
  "panel",
  "패널, 배심원단",
  "phase",
  "(n)단계, \n(v)단계적으로 하다.",
  "response",
  "답장, 대응",
  "priority",
  "우선(권)",
  "security",
  "보안, 안전",
  "assembly",
  "조립; 집회",
  "initiative",
  "계획, 주도권, 진취성",
  "complaint",
  "불평, 불만",
  "convenience",
  "편의, 편리",
  "maintenance",
  "유지, 정비",
  "agreement",
  "협약, 계약",
  "certificate",
  "증서, 자격증",
  "professional",
  "(n)전문가, \n(adj)직무의, 전문적인",
  "architect",
  "건축가",
  "associate",
  "(n)직원, 동료, \n(v)연상하다.",
  "끝\n오른쪽을 눌러 재시작"
]; // 여기에 단어나 문장을 추가하세요.
let currentIndex = 0;

function updateFlashcard() {
  let content = document.getElementById("content");
  let counter = document.getElementById("counter");
  let image = document.getElementById("image");

  if(currentIndex===0){
    image.style.display = "block"; // 이미지 표시
  }
  else {
    image.style.display = "none";
  }

  if (currentIndex === 0 || currentIndex === flashcardContents.length - 1) {
      counter.innerText = ""; // 시작과 끝에서는 번호를 표시하지 않음
  } else {
      let currentNumber = Math.floor((currentIndex + 1) / 2); // 정수 나눗셈
      let totalNumber = Math.floor((flashcardContents.length - 2) / 2);
      counter.innerText = `${currentNumber}/${totalNumber}`;
  }

  if(currentIndex !==0 && currentIndex !== flashcardContents.length-1 && currentIndex%2==0) {
    content.innerText = `${flashcardContents[currentIndex-1]}\n${flashcardContents[currentIndex]}`;
  }
  else {
    content.innerText = flashcardContents[currentIndex];
  }
}

// function updateFlashcard() {
//   let content = document.getElementById("content");
//   content.innerText = flashcardContents[currentIndex];

//   let counter = document.getElementById("counter");
//   if (currentIndex === 0 || currentIndex === flashcardContents.length - 1) {
//       counter.innerText = ""; // 시작과 끝에서는 번호를 표시하지 않음
//   } else {
//       let currentNumber = Math.floor((currentIndex + 1) / 2); // 정수 나눗셈
//       let totalNumber = Math.floor((flashcardContents.length - 2) / 2);
//       counter.innerText = `${currentNumber}/${totalNumber}`;
//   }
// }

function flipCard(event) {
  let flashcard = document.getElementById("flashcard");
  let rect = flashcard.getBoundingClientRect();
  let xClick = event.clientX;

  if (xClick < rect.left + rect.width / 2) {
      if (currentIndex > 0) currentIndex--;
  } else {
      if (currentIndex < flashcardContents.length - 1) currentIndex++;
      else currentIndex = 0; // 처음으로 돌아감
  }

  updateFlashcard();
}

document.addEventListener("DOMContentLoaded", updateFlashcard);
