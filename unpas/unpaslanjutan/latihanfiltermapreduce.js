//ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]')); // array from merubah bentuk nodeList menjadi Array




// pilih hanya yang 'javascript lanjutan'
let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')) // array pada video di filter



    // ambil durasi masing2 video
    .map(item => item.dataset.duration)


    // ubah durasi menjadi int, ubah menit menjadi detik
    .map(waktu => {
        // dari bentu 10:30 menjadi [10, 30] namanya di split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })


    // jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam ${menit} menit ${detik} detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video.`;


console.log(jmlVideo)