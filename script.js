let windo = document.querySelectorAll(".window");
      windo.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.target.classList.toggle("active");
        });
      });