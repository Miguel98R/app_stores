const express = require('express')
const router = express.Router()
const resources = require('../public/js/cdnRecurses').website;

//const validateSession = require('./../middleware/validateSession')

const url_js_files = '/public/js'
///------------------------- RUTAS PARA CONTROLPANEL----------------------- ///

//LOGIN PAGE C.PANEL
router.get('/', (req, res) => {


    res.render("login", {
        title: 'MyScentJourney | Home Panel',
        resources,
        url_js_files
    })

    /* if (req?.query?.theme) {
         theme = req.query.theme
     }

     let message_error = ''

     if (req?.query?.message_error) {
         message_error = req.query.message_error
     }


     if(req?.session?.user){
         let menu = req?.session?.menu
         res.render("panelControl/home", {
             title: 'MyScentJourney | Control Panel',
             resources,
             theme,
             menu,
             url_js_files,
             url_prefijo,
             url_js,
         });
     }else{

     }*/

});

router.get( "/panel", (req, res) => {


    res.render("panel", {
        title: 'MyScentJourney | Control Panel',
        resources,
        url_js_files,

    });

});


router.get( "/newSale", (req, res) => {


    res.render("newSale", {
        title: 'MyScentJourney | Control Panel',
        resources,
        url_js_files,

    });

});



/*router.get(url_prefijo + "/panel", validateSession, (req, res) => {

    if (req?.query?.theme) {
        theme = req.query.theme
    }
    let menu = req?.session?.menu


    res.render("panelControl/home", {
        title: 'MyScentJourney | Control Panel',
        resources,
        theme,
        menu,
        url_js_files,
        url_prefijo,
        url_js,
    });

});*/


module.exports = router