let menu = require("../conf/menu")


let validateSession = function (req, res, next) {

    if (req.session.user) {

        let dataUser = req.session.user

        const level = dataUser.userConf.usersTypes

        let meenu

        if (level == 'shipping') {
            res.redirect('/');

        }
        if (level == 'admin') {

            meenu = menu.filter(menuItem => menuItem.access.includes('admin'));
            req.session.menu = meenu
            next();
        }
        if (level == 'accountant') {
            meenu = menu.filter(menuItem => menuItem.access.includes('accountant'));
            req.session.menu = meenu
            next();

        }

    } else {
        res.redirect('/cpanel');
    }
}

module.exports = validateSession