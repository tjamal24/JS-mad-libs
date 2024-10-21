function generateMadLibs() {
    const bird = document.getElementById("bird").value;
    const roommate = document.getElementById("roommate").value;
    const noun = document.getElementById("noun").value;
    const liquid = document.getElementById("liquid").value;
    const bodyPart = document.getElementById("bodyPart").value;
  
    const madLibsText = `It was a cold October day. I woke to the smell of ${noun} roasting in the kitchen. My roommate said, "See if ${bird} needs a fresh ${liquid}." So I carried a glass of ${liquid} into ${roommate}'s room. When I got there, I couldn't believe my ${bodyPart}!`;
  
    document.getElementById("mad-libs").textContent = madLibsText;
  }
