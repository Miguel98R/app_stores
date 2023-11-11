let rp = '/public/cdn/'
let cdn = {
    cdn_path: rp,
    website: {
        styles: [
            rp + 'Bootstrap/bootstrap.min.css',
            rp + 'Notyf/notyf.min.css',


        ],
        scripts: [
            rp + 'Bootstrap/bootstrap.bundle.min.js',
            rp + 'Jquery/jquery-3.7.1.min.js',
            rp + 'Notyf/notyf.min.js',
        ]
    },

}


module.exports = cdn;
