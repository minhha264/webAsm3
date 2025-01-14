// Code tham khảo của Xter Lê Y khoa
function handleSubmit() {
  // Lấy và chuyển giá trị input email thành in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");
  // định dạng kiểm tra format email input
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // kiểm tra email input với format
  const check = emailValue.match(checkMail);

  // lấy phần chứa thông tin đã ẩn
  const sectionContent = document.querySelector("#info .section-content");

  // lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Email sai định dạng";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  if (viewMore.innerHTML == "View less") {
    viewMore.style.display = "block";
  } else {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const parentElement = element.closest(".job-box-grid");
  const sectionContent = parentElement.querySelector(".job-content");
  if (element.innerHTML == "View more") {
    sectionContent.style.display = "block";
    element.innerHTML = "View less";
  } else {
    sectionContent.style.display = "none";
    element.innerHTML = "View more";
  }
}
