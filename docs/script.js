function hoodify(sentence) {
  return sentence
    .replace(/you/gi, "ya")
    .replace(/are/gi, "is")
    .replace(/my/gi, "ma")
    .replace(/friend/gi, "homie")
    .replace(/\./g, " derp.");
}

document.getElementById("hoodifyBtn").addEventListener("click", () => {
  const input = document.getElementById("inputSentence").value;
  const result = hoodify(input);
  document.getElementById("output").textContent = result;
});
