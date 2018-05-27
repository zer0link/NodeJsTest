'use strict';
const UserAttribute = require('./../models/userAttribute');

class UserAttributeController {

    get(userEmail) {
        return UserAttribute.findOne({ userEmail })
            .then((ua) => {
                if (!ua || ua.Attributes.length === 0){
                    return 'No user attributes found';
                }else{
                    var elements = [];
                    var elementCount = 0;
                    (ua.Attributes).forEach(userAttribute => {
                        let element = {"$elemMatch": {attribute: userAttribute.attribute, rating: userAttribute.rating}};
                        elements.push(element);
                        elementCount ++;
                    });

                    const query = UserAttribute
                    .find({})
                    .where('userEmail').ne(userEmail)
                    .where('Attributes').all(elements)
                    .where('Attributes').size(elementCount);

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