(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-third]'),
    closeModalBtn: document.querySelector('[data-modal-close-third]'),
    modal: document.querySelector('[data-modal-third]'),
  };

  refs.openModalBtn?.addEventListener('click', toggleModal);
  refs.closeModalBtn?.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-third');
  }
})();
