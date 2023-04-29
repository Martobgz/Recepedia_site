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
  
  // Ne e zadylvitelen koda(toj e za show more/less, kojto e premahnat)
  