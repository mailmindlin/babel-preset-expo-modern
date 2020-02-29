
import { ExpoModernConfig } from './types';

function isTargetWeb(caller): boolean;

function getPlatformOptions(options: object, isWeb: boolean): ExpoModernConfig;

export = { isTargetWeb, getPlatformOptions };