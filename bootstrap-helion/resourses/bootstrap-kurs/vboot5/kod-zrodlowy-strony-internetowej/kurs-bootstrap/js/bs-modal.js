const modal = document.querySelector('#modal');

modal.addEventListener('show.bs.modal', e => {
    const a = e.relatedTarget;

    if ( a.getAttribute('data-bs-title') ) {
        const title = a.getAttribute('data-bs-title');
        const modalTitle = modal.querySelector('.modal-title');
        modalTitle.innerHTML = `Gra pt. &bdquo;${title}&rdquo;`;
    }

    if ( a.getAttribute('data-bs-src') ) {
        const img = document.createElement('img');
        const src = a.getAttribute('data-bs-src');
        const alt = a.getAttribute('data-bs-title');

        img.classList.add('img-fluid');
        img.setAttribute('src', src);
        img.setAttribute('alt', src);

        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = '';
        modalBody.appendChild(img);
    }
});

modal.addEventListener('hidden.bs.modal', () => {
    const modalTitle = modal.querySelector('.modal-title');
    modalTitle.innerHTML = 'Polityka prywatności';

    const modalBody = modal.querySelector('.modal-body');
    modalBody.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut aliquet urna, sit amet mattis libero. Sed non ligula ullamcorper, sodales lorem in, imperdiet ex. Duis non elit lobortis, viverra est sit amet, aliquet orci. Aenean aliquam consectetur est eget ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut augue sapien, mattis sed augue sed, cursus sollicitudin tellus. Quisque congue urna non sodales pretium. Aliquam erat volutpat.';
});