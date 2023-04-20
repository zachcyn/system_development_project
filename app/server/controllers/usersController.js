const conn = require('../dbConn');

const user = conn.AccDB.models['Users']

const login = function(username, password) {
    acc = user.findOne({Userame:username})
    if (acc !=  null) {
        if (acc["Password"] ==  password) {
            return acc
        }
        else {
            return err => "Invalid Credentials"}
        }
        else return err => "Invalid Credentials"
}

const signup = function(username, password, type) {
    acc = user.findOne({Userame:username})
    if (acc==null) {
        if ((username==null) || (password==null) || (type==null))
        {
            return err => "Invalid input data"
        } else {
            const u = new user ({
                Username:username,
                Password:password,
                Type:type
            })

            u.save().then(() => {
                return true
              }).catch(err => {
                console.error("Error Saving Account",err)
              });
        }
    }
    else {
        return err => "Account already exists"
    }

}
