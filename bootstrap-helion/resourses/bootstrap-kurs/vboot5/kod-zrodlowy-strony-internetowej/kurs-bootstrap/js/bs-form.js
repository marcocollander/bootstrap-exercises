const form = document.querySelectorAll('form');

form.forEach((element, index, array) => {
    element.addEventListener('submit', e => {
        e.preventDefault();

        if ( element.checkValidity() ) {
            if ( confirm('Czy na pewno chcesz wysłać formularz?') ) {
                location.reload();
            } else {
                return false;
            }
        }

        element.classList.add('was-validated');
    });
});