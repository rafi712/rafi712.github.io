const scriptURL = 'https://script.google.com/macros/s/AKfycbxYwNxgtxIP393jTfS7Iy7EJ5Pr5impe6V9t7Zk1U5nLqGshLAdpZ0RnR7nSfvVnQyO/exec'
const form = document.forms['submit-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.alert');
const divBefore = document.querySelector('#before');


form.addEventListener('submit', e => {
  e.preventDefault();
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      console.log('Success!', response);
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      const alertContainer = document.createElement('div');
      alertContainer.classList.add('row', 'justify-content-center');
      alertContainer.setAttribute('id', 'alert-box');
      alertContainer.innerHTML = '<div class="col-sm-6"><div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Terima kasih.</strong> Pesan anda sudah kami terima.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div></div>';
      divBefore.after(alertContainer);
      const btnClose = document.querySelector('.btn-close');
      btnClose.addEventListener('click', () => {
        btnClose.parentElement.parentElement.parentElement.remove();
      })
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))

})