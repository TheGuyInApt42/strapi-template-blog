'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    findOneByName: async ctx => {
        const { name } = ctx.params;

        const entity = await strapi.services.category.findOne({ name });
        return sanitizeEntity(entity, { model: strapi.models.category });
    }
};
