'use strict';

/**
 * news-mention service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-mention.news-mention');
