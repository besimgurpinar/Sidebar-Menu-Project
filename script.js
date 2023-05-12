
    const openSidebarButton = document.querySelector('#open-sidebar-button');
    const sidebar = document.querySelector('#sidebar');

    openSidebarButton.addEventListener('click', () => {
      sidebar.classList.add('show');
    });

    window.addEventListener('click', (event) => {
      if (!event.target.matches('#open-sidebar-button') && !event.target.closest('.sidebar')) {
        sidebar.classList.remove('show');
      }
    });
  