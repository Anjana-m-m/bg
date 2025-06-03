document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON"){
      const cage=document.createElement("div");
      cage.classList.add("cage");
      

      const heading = document.createElement("h2");
      heading.innerText = "OOPS!";
  heading.style.color = "white";
  heading.style.textAlign = "center";

      cage.appendChild(heading);
      document.body.appendChild(cage);


      setTimeout(() => {
        cage.remove();
      }, 4000);
    }
  else{
    const butterfly = document.createElement("div");
    butterfly.classList.add("butterfly");
    butterfly.style.left = `${e.clientX - 20}px`;
    butterfly.style.top = `${e.clientY - 20}px`;
  
    document.body.appendChild(butterfly);
  
  
    setTimeout(() => {
      butterfly.remove();
    }, 2000);
  }
});
  
