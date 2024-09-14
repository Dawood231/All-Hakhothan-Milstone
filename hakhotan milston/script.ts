(function () {
    const toggleSkillsBtn = document.getElementById(
      "toggleSkillsBtn"
    ) as HTMLButtonElement;
    const skillsList = document.getElementById("skillsList") as HTMLUListElement;
  
    // Initially hide the skills list
    skillsList.style.display = "none";
  
    toggleSkillsBtn.addEventListener("click", () => {
      if (skillsList.style.display === "none") {
        skillsList.style.display = "flex";
        toggleSkillsBtn.textContent = "Hide Skills";
      } else {
        skillsList.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
      }
    });
  })();