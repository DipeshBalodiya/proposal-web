




document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
  
    let noBtnClicks = 0; // Counter to track how many times "No" button has been clicked
  
    noBtn.addEventListener("click", () => {
      noBtnClicks++;
      
      // If "No" has been clicked twice, make it start moving
      if (noBtnClicks === 2) {
        noBtn.addEventListener("mouseover", () => {
          const randomX = Math.random() * 80;
          const randomY = Math.random() * 80;
          noBtn.style.position = "absolute";
          noBtn.style.left = `${randomX}vw`;
          noBtn.style.top = `${randomY}vh`;
        });
      }
      
      // After 2 clicks, redirect to the reject page
      window.location.href = "reject.html";
    });
  
    yesBtn.addEventListener("click", () => {
      window.location.href = "party.html";
    });
  });
  