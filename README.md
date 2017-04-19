# Switcher for Umbraco 7

Switcher is a simple property editor that works as an alternative to the core true/false datatype.
It can be used for different kinds of true/false values e.g. on/off, active/deactive or enabled/disabled and gives a more visual feedback to the content editor. Furthermore it is great for content editors, who edit content from tablets, where the switch-button is touch friendly.

Install via NuGet or the Umbraco Package Installer: https://github.com/bjarnef/Switcher/releases

## Setup

### Install Dependencies

```bash
npm install -g grunt-cli
npm install
```

### Build

```bash
grunt
```

### Changelog

**v1.0.3**
- New: Nuget package build
- New: Updated colours and switch styles
- New: Added option to show on/off icon in toggle button

**v1.0.2**
- Fix: Set form $dirty property to true, so the editor see the prompt warning about unsaved changes.

**v1.0.1**
- New: Localization support for labels
- Fix: Switch class conflicted with class on datepicker in Umbraco 7.1.x

**v1.0.0**
- Initial release