const whitelist = new Set([
	'AccessibilityInfo',
	'ActivityIndicator',
	'Button',
	'CheckBox',
	'DatePickerIOS',
	'DrawerLayoutAndroid',
	'FlatList',
	'Image',
	'ImageBackground',
	'InputAccessoryView',
	'KeyboardAvoidingView',
	'MaskedViewIOS',
	'Modal',
	'Picker',
	'PickerIOS',
	'ProgressBarAndroid',
	'ProgressViewIOS',
	'SafeAreaView',
	'ScrollView',
	'SectionList',
	'SegmentedControlIOS',
	'Slider',
	'Switch',
	'RefreshControl',
	'StatusBar',
	'SwipeableFlatList',
	'Text',
	'TextInput',
	'Touchable',
	'TouchableHighlight',
	'TouchableNativeFeedback',
	'TouchableOpacity',
	'TouchableWithoutFeedback',
	'View',
	'VirtualizedList',
  
	// APIs
	'ActionSheetIOS',
	'Alert',
	'Animated',
	'AppRegistry',
	'AppState',
	'AsyncStorage',
	'BackHandler',
	'CameraRoll',
	'Clipboard',
	'DatePickerAndroid',
	'DeviceInfo',
	'Dimensions',
	'Easing',
	'ReactNative',
	'I18nManager',
	'InteractionManager',
	'Keyboard',
	'LayoutAnimation',
	'Linking',
	'NativeEventEmitter',
	'PanResponder',
	'PermissionsAndroid',
	'PixelRatio',
	'PushNotificationIOS',
	'Settings',
	'Share',
	'StatusBarIOS',
	'StyleSheet',
	'Systrace',
	'ToastAndroid',
	'TVEventHandler',
	'UIManager',
	'ReactNative',
	'UTFSequence',
	'Vibration',
	'YellowBox',
  
	// Plugins
	'RCTDeviceEventEmitter',
	'RCTNativeAppEventEmitter',
	'NativeModules',
	'Platform',
	'processColor',
	'requireNativeComponent',
  
	// Prop Types
	'DeprecatedColorPropType',
	'DeprecatedEdgeInsetsPropType',
	'DeprecatedPointPropType',
	'DeprecatedViewPropTypes',
]);

/**
 * Expo packages with side-effects, so they shouldn't be lazily imported
 */
const blacklist = new Set([
	'expo',
	'expo-asset',
	'expo-task-manager',
]);

/** @param {string} importModuleSpecifier */
function filterWhitelist(importModuleSpecifier) {
	// Do not lazy-initialize packages that are local imports (similar to `lazy: true`
	// behavior) or are in the blacklist.
	return !importModuleSpecifier.includes('./') && !blacklist.has(importModuleSpecifier);
}

/** @param {string} importModuleSpecifier */
function filterBlacklist(importModuleSpecifier) {
	return whitelist.has(importModuleSpecifier);
}

module.exports = {
	filterWhitelist,
	filterBlacklist,
};