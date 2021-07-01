
    const darkCv = document.querySelector('.cv.dark');
    
    var opt = {
        margin:       0,
        filename:     `hello.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
      };

    function pdf(cv) {
        html2pdf().set(opt).from(cv).save()
    }


