const btn_dm = document.querySelector ('.dark-mode-btn')


if(localStorage.getItem('darkMode',) === 'dark') {
    btn_dm.classList.add("dark-mode-btn--acrive")
    document.body.classList.add("dark")
} 

btn_dm.onclick = function() {
    btn_dm.classList.toggle("dark-mode-btn--acrive")
    const isdark = document.body.classList.toggle("dark") 
    
    
    
    if (isdark) {
        localStorage.setItem('darkMode', 'dark')

    }

    else {
        localStorage.setItem('darkMode', 'light')
    }
        
}
