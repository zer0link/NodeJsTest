'use strict';
const UserAttribute = require('./../models/userAttribute');

class UserAnswerController {

    get(userEmail) {
        return UserAttribute.findOne({ userEmail })
            .then((ua) => {
                return ua;
            })
    }

    submit(userAttribute) {
        return UserAttribute.findOne({ userEmail: userAttribute.userEmail })
            .then((ua) => {
                if (!ua) {
                    ua = new UserAttribute();
                    ua.userEmail = userAttribute.userEmail;
                }

                let uaIndex = ua.Attributes.findIndex((attribute) => attribute.attribute == userAttribute.attribute)
                if(!uaIndex) {
                    ua.Attributes[uaIndex].rating += userAttribute.value;
                }else{
                    ua.Attributes.push({
                        attribute: userAttribute.attribute,
                        rating: 5 + userAttribute.value
                    })
                }
                
                return ua.save();
            })
    }
}

module.exports = UserAnswerController;