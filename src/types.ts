import { Plugin } from "obsidian";

export interface CustomPlugin extends Plugin {
	settings: InlineSearchSettings;
	saveSettings: () => Promise<void>;
}

export interface InlineSearchSettings {
	mySetting: string;
	updateMechanism: string;
	defaultTransform?: string;
}
