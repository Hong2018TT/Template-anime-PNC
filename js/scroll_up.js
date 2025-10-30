var btn = $('#button_up');
    $(window).scroll(function(){
        if($(window).scrollTop() > 400){
            btn.addClass('show');
        }else{
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '400');
    })

    // Elements selection
        const modeToggle = document.querySelector(".dark-light");
        const body = document.body;

        // Apply user's saved mode preference on initial load
        if(localStorage.getItem("mode") === "dark-mode"){
            modeToggle.classList.add("active");
            body.classList.add("dark");
        }

        // Dark/Light mode toggle event
        modeToggle.addEventListener("click", () => {
            body.classList.toggle("dark");
            modeToggle.classList.toggle("active");

            // Store user preference
            if(body.classList.contains("dark")){
                localStorage.setItem("mode", "dark-mode");
            } else {
                localStorage.setItem("mode", "light-mode");
            }
        });