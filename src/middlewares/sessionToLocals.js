const db = require('../database/models');

async function sessionToLocals(req, res, next) {
    if(req.session.userSession != undefined) {
        let user = await db.User.findByPk(req.session.userSession)
        if(user) {
            res.locals.userLog = {
                id: user.id,
                role: user.role
            }
        }
    }
    next()
}

module.exports = sessionToLocals;