function showMore() {
    var content = document.getElementsByClassName("content")[0];
    var button = content.getElementsByTagName("button")[0];
    if (content.classList.contains("show-more")) {
      content.classList.remove("show-more");
      button.innerHTML = "Show More";
    } else {
      content.classList.add("show-more");
      button.innerHTML = "Show Less";
    }
  }
  
  
  