const theme = document.querySelector('#theme');

if ( !localStorage.getItem('theme') || localStorage.getItem('theme') === 'light' ) {
    document.documentElement.setAttribute('data-bs-theme', 'light');
} else if ( localStorage.getItem('theme') === 'dark' ) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    theme.setAttribute('checked', 'checked');
}

theme.addEventListener('click', () => {
    if ( !localStorage.getItem('theme') || localStorage.getItem('theme') === 'light' ) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else if ( localStorage.getItem('theme') === 'dark' ) {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});