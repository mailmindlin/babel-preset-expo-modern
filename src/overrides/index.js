const tfBlacklistOverride = require('./transform-blacklist');
const flowStripTypesOverride = require('./flow-strip-types');
const defaultPluginOverride = require('./default-plugins');
const typescriptOverride = require('./typescript');
const extraPluginsOverride = require('./extra-plugins');

/** @type {Array<import('../types').OverrideProvider>} */
const overrides = [
	tfBlacklistOverride,
	flowStripTypesOverride,
	defaultPluginOverride,
	typescriptOverride,
	extraPluginsOverride,
];

module.exports = overrides;