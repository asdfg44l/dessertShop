// 表單驗證
(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
            form.classList.add('was-validated');
          }, false);
      });
    }, false);
  })();
  
// 電子郵票與郵寄發票切換
$(".receipt a").on('click', function(e){
  e.preventDefault();
  $(this).siblings().removeClass('active');
  $(this).tab('show');
  $(this).toggleClass('active');
})


// 首頁按鈕切換
$(".frosted-wrap").on('click', function(e){
  e.preventDefault()
  var target =e.currentTarget.dataset.name;
  localStorage.setItem("target", target);
  window.location.href = "product.html#product"
})

