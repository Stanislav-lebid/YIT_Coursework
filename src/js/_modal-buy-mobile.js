import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-mobile-buy-open]'),
    closeModalBtn: document.querySelector('[data-modal-mobile-buy-close]'),
    modal: document.querySelector('[data-modal-mobile-buy]'),
    form: document.querySelector('.modal-buy__form-field'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.form.addEventListener('submit', handleFormSubmit);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
  
    // Збір даних з input та select елементів
    const inputs = refs.form.querySelectorAll('.modal-buy__input');
    inputs.forEach(input => {
      formData.append(input.name, input.value);
    });
  
    const selects = refs.form.querySelectorAll('.modal-buy__select');
    selects.forEach(select => {
      formData.append(select.name, select.value);
    });
  
    // Перевірка вмісту FormData
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    await postOrder(formData);
  }

  async function postOrder(formData) {
    console.log(formData,'12')
    try {
      const response = await axios.post('http://13.38.72.193/save_order/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
});