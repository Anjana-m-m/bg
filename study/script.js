document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON"){
      const cage=document.createElement("div");
      cage.classList.add("cage");
      cage.style.position = "absolute";
      cage.style.left = `${e.clientX -100}px`;
      cage.style.top = `${e.clientY -100}px`;

      const heading = document.createElement("h2");
      heading.innerText = "OOOPS!";
      heading.style.fontSize = "10px";
      heading.style.textAlign = "center";
      heading.style.color = "#fff";
      heading.style.padding="20px";

      cage.appendChild(heading);
      document.body.appendChild(cage);


      setTimeout(() => {
        cage.remove();
      }, 8000);
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
  
