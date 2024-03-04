function handleDropdownClick() {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownMenu = document.getElementById('dropdown');

    dropdownButton.addEventListener('click', () => {
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'flex';
            dropdownButton.style.borderBottomLeftRadius = '0';
            dropdownButton.style.borderBottomRightRadius = '0';
        } else {
            dropdownMenu.style.display = 'none';
            dropdownButton.style.borderBottomLeftRadius = '';
            dropdownButton.style.borderBottomRightRadius = '';
        }
    });
}

export { handleDropdownClick }