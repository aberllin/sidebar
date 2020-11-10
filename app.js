const toggelBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggelBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
})


