import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'org.nativescript.plugindemo.healthdata',
	appPath: 'src',
	appResourcesPath: 'App_Resources',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
	},
	useLegacyWorkflow: false,
} as NativeScriptConfig;
