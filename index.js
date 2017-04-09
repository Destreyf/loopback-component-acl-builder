// Copyright IBM Corp. 2013,2016. All Rights Reserved.
// Node module: loopback-component-explorer
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';
/*!
 * Adds dynamically-updated docs as /explorer
 */
const path = require('path');
const _defaults = require('lodash').defaults;
const ACL_BUILDER_UI_ROOT = path.resolve(__dirname, 'dist');
const STATIC_ROOT = path.join(__dirname, 'public');

'use strict';

module.exports = aclbuilder;
aclbuilder.routes = routes;

/**
 * Example usage:
 *
 * var explorer = require('loopback-component-explorer');
 * explorer(app, options);
 */

function aclbuilder(loopbackApplication, options) {
  options = _defaults({}, options, {mountPath: '/acl-builder'});
  loopbackApplication.use(options.mountPath, routes(loopbackApplication, options));
  loopbackApplication.set('loopback-component-acl-builder', options);
}

function routes(loopbackApplication, options) {
  let loopback = loopbackApplication.loopback;
  let loopbackMajor = loopback && loopback.version && loopback.version.split('.')[0] || 1;

  if (loopbackMajor < 2) {
    throw new Error(g.f('{{loopback-component-acl-builder}} requires {{loopback}} 2.0 or newer'));
  }

  let router = new loopback.Router();

  // File in node_modules are overridden by a few customizations
  router.use(loopback.static(STATIC_ROOT));

  // Swagger UI distribution
  router.use(loopback.static(ACL_BUILDER_UI_ROOT));

  console.log("Setting Up Models /acl-builder/api/models");
  router.get('/api/models', function (req, res) {
    res.send(JSON.stringify(getModels(loopbackApplication)));
  });

  router.get('/api/models/:model', function (req, res) {
    res.send(JSON.stringify(getModel(loopbackApplication, req.params['model'])));
  });

  return router;
}

function getModels(app) {
  let models = Object.keys(app.models);
  let data = {};
  for (let i = 0; i < models.length; i++) {
    let m = models[i];
    data[m] = getModel(app, m);
  }

  return data;
}

function getModel(app, m) {
  let model = app.models[m].definition.toJSON();
  let methods = app.models[m].sharedClass.methods();

  model.settings.methods = methods.map(m => {
    return {
      name: m.name,
      description: m.description
    };
  });

  return model;
}
