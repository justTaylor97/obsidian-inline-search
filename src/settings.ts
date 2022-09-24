import { App, PluginSettingTab, Setting } from "obsidian";
import { CustomPlugin } from "src/types";

class InlineSearchSettingsTab extends PluginSettingTab {
	plugin: CustomPlugin;

	constructor(app: App, plugin: CustomPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl("h2", { text: "Inline Search Settings" });

		new Setting(containerEl)
			.setName("Setting #1")
			.setDesc("It's a secret")
			.addText((text) =>
				text
					.setPlaceholder("Enter your secret")
					.setValue(this.plugin.settings.mySetting)
					.onChange(async (value) => {
						console.log("Secret: " + value);
						this.plugin.settings.mySetting = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Setting #2")
			.setDesc("It's a different thing")
			.addText((text) =>
				text
					.setPlaceholder("Update mechanism")
					.setValue(this.plugin.settings.updateMechanism)
					.onChange(async (value) => {
						console.log("Something: " + value);
						this.plugin.settings.updateMechanism = value;
						await this.plugin.saveSettings();
					})
			);
	}
}

export default InlineSearchSettingsTab;
