let toasterTrigger = document.getElementById('submit-message');
let toastSuccess = document.getElementById('successToast');

if (toasterTrigger) {
  toasterTrigger.addEventListener('click', function () {
    let toaster = new bootstrap.Toast(toastSuccess);

    toaster.show();
  });
}