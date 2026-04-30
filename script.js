let count = 0;
let answer = Math.floor(Math.random() * 100) + 1;

function check() { /*予想機能*/
  count++;
  let guess = document.getElementById("input").value;

  if (guess == answer) {
    document.getElementById("result").textContent = "正解！";
  } else if (guess < answer) {
    document.getElementById("result").textContent = "もっと大きい";
  } else {
    document.getElementById("result").textContent = "もっと小さい";
  }
  document.getElementById("count").textContent = count + "回目";
}

function resetGame() {
  answer = Math.floor(Math.random() * 100) + 1;
  count = 0;

  document.getElementById("result").textContent = "";
  document.getElementById("count").textContent = "";
  document.getElementById("input").textContent = "";
}