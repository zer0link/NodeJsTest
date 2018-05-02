'use strict';
const UserAttribute = require('./../models/userAttribute');

class UserAttributeController {

    get(userEmail) {
        return UserAttribute.findOne({ userEmail })
            .then((ua) => {
                if (!ua || ua.Attributes.length === 0){
                    throw 'No user attributes found';
                }else{
                    console.log(ua.Attributes[0].attribute);
                    const query = UserAttribute
                    .find({})
                    .where('Attributes.attribute').equals(ua.Attributes[0].attribute)
                    .where('userEmail').ne(userEmail);

                    return query.findOne(function (err, matchedUser){
                        if (err) {
                            console.log(err);
                            return null;
                        }
                        if (matchedUser) return matchedUser
                        
                        return 'no matched user';
                    } )
                }
            })
    }
}

module.exports = UserAttributeController;