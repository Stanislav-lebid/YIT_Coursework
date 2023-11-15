(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-franchisel-open]"),
      closeModalBtn: document.querySelector("[data-modal-franchisel-close]"),
      modal: document.querySelector("[data-modal-franchisel]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open")
      refs.modal.classList.toggle("is-hidden");
    }
  })();