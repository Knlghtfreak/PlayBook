document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 0;
    const pages = [
        document.getElementById('page0'),
        document.getElementById('page1'),
        document.getElementById('page2'),
        document.getElementById('page3'),
        document.getElementById('page4'),
        document.getElementById('page5'),
        document.getElementById('page6'),
        document.getElementById('page7'),
        document.getElementById('page8')
    ];

    
    function updateNavButtons() {
        const centerPage = document.getElementsByClassName('flipbook')[0];;
        const prev = document.getElementById('prev'); 
        const next = document.getElementById('next'); 
        prev.style.display = currentPage === 0 ? 'none' : 'inline-block';
        next.style.display = currentPage === pages.length  ? 'none' : 'inline-block';
        if (currentPage === 0 ) {
            centerPage.style.translate = '25%';
        } else if( currentPage === pages.length) {
            centerPage.style.translate = '75%';
        }else{
            centerPage.style.translate = '50%';
        }
    }



    document.getElementById('next').addEventListener('click', () => {
        if (currentPage < pages.length) {
            pages[currentPage].classList.add('flipped');
            pages[currentPage].style.zIndex = 0;
            currentPage++;
            updateNavButtons();
        }
    });

    document.getElementById('prev').addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            pages[currentPage].classList.remove('flipped');
            pages[currentPage].style.zIndex = pages.length - currentPage;
            updateNavButtons();
        }
    });


    // Prevent zooming
    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
            e.preventDefault();
            return false;
        }
    });

    document.addEventListener('touchmove', function (e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    function counterZoom() {
        const scale = 1 / (window.devicePixelRatio || 1);
        document.getElementById('zoom-content').style.transform = `scale(${scale})`;
    }

    window.addEventListener('resize', counterZoom);
    setInterval(counterZoom, 100);
    counterZoom();
});