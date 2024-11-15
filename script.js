




document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
  
    let noBtnClicks = 0;
  
    noBtn.addEventListener("click", () => {
      noBtnClicks++;
      
     
      if (noBtnClicks === 2) {
        noBtn.addEventListener("mouseover", () => {
          const randomX = Math.random() * 80;
          const randomY = Math.random() * 80;
          noBtn.style.position = "absolute";
          noBtn.style.left = `${randomX}vw`;
          noBtn.style.top = `${randomY}vh`;
        });
      }
      
     
      window.location.href = "reject.html";
    });
  
    yesBtn.addEventListener("click", () => {
      window.location.href = "party.html";
    });
  });
  
