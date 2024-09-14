(function () {
  var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
  var skillsList = document.getElementById("skillsList");
  // Initially hide the skills list
  skillsList.style.display = "none";
  toggleSkillsBtn.addEventListener("click", function () {
      if (skillsList.style.display === "none") {
          skillsList.style.display = "flex";
          toggleSkillsBtn.textContent = "Hide Skills";
      }
      else {
          skillsList.style.display = "none";
          toggleSkillsBtn.textContent = "Show Skills";
      }
  });
})();



