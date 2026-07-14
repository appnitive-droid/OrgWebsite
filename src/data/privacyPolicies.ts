import { siteConfig } from "@/src/config/site";

export type PolicySection = {
  readonly title: string;
  readonly description: string;
};

export type ThirdPartyService = {
  readonly name: string;
  readonly purpose: string;
  readonly privacyPolicyUrl?: string;
  readonly enabled?: boolean;
};

export type PrivacyPolicyConfig = {
  readonly slug: string;
  readonly appName: string;
  readonly summary: string;
  readonly developerName: string;
  readonly effectiveDate: string;
  readonly lastUpdated: string;
  readonly introduction: string;
  readonly dataCollected: readonly PolicySection[];
  readonly permissions: readonly PolicySection[];
  readonly dataUsage: readonly string[];
  readonly thirdPartyServices: readonly ThirdPartyService[];
  readonly dataSharing: readonly string[];
  readonly dataRetention: readonly string[];
  readonly security: readonly string[];
  readonly childrenPrivacy: string;
  readonly userRights: readonly string[];
  readonly policyChanges: string;
  readonly contactEmail: string;
};

const initialPolicyDate = "July 14, 2026";

// Before publishing, verify every permission, SDK, data type, retention statement and third-party service against the final production application and Google Play Data safety form.
export const privacyPolicies = [
  {
    slug: "step-tracker",
    appName: "Step Tracker",
    summary: "How Step Tracker handles activity information, route location, notifications, and locally stored progress.",
    developerName: siteConfig.companyName,
    effectiveDate: initialPolicyDate,
    lastUpdated: initialPolicyDate,
    introduction:
      "This Privacy Policy explains how Step Tracker processes information when you use the application. Step Tracker is designed as a local-first activity companion. Most activity records and preferences are stored on your device, while specific platform or map services are used only for the features described below.",
    dataCollected: [
      {
        title: "Activity and progress information",
        description:
          "The app processes step counts, goals, activity sessions, distance, estimated calories, reminder preferences, and related progress history so it can present activity summaries and trends.",
      },
      {
        title: "Route information",
        description:
          "When you actively start an outdoor walk or run, the app processes location points needed to record and display that route. Location is not continuously collected by Step Tracker while route tracking is inactive.",
      },
      {
        title: "App settings",
        description:
          "Settings such as goals, units, notification choices, widget preferences, and tracking options are stored locally so the app can operate as you configured it.",
      },
    ],
    permissions: [
      {
        title: "Physical activity / activity recognition",
        description:
          "Used to detect steps and support activity tracking on compatible Android devices.",
      },
      {
        title: "Precise or approximate location",
        description:
          "Used only when you actively start an outdoor route-tracking session, so the app can measure and display the route, distance, and related session details.",
      },
      {
        title: "Notifications",
        description:
          "Used for reminders, tracking status, and progress notifications that you enable or that are required to keep an active tracking session visible.",
      },
    ],
    dataUsage: [
      "Count steps and calculate activity progress, distance, and estimated calories.",
      "Record and display an outdoor walk or run only after you start route tracking.",
      "Save goals, history, settings, widgets, and reminder preferences on your device.",
      "Provide activity reminders and active-session notifications.",
      "Maintain and improve the reliability of the features you use.",
    ],
    thirdPartyServices: [
      {
        name: "Google Maps Platform and Google Play services",
        purpose:
          "Used to obtain device location during an active route session and to display the recorded route on a map. Google may process technical and map-request information under its own terms and privacy policy.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    dataSharing: [
      "Step Tracker does not sell health or activity information.",
      "Route-related information may be processed by the map and location services described above when you use route tracking.",
      "Information may be disclosed if required by applicable law or a valid legal process.",
      "Information may be shared only when you deliberately use an Android sharing feature or otherwise direct the app to share it.",
    ],
    dataRetention: [
      "Activity history, goals, sessions, and settings are stored locally for as long as they remain in the app's local storage.",
      "You can remove records using available app controls or clear the app's storage through Android settings. Uninstalling the app generally removes local app data, subject to your device and account backup settings.",
      "Map and platform providers may retain information according to their own policies when their services are used.",
    ],
    security: [
      "Step Tracker limits processing to the permissions and features described in this policy and relies on Android's application storage protections for local records.",
      "No method of electronic storage or processing is completely secure, so absolute security cannot be guaranteed.",
    ],
    childrenPrivacy:
      "Step Tracker is not directed to children under 13. If you are a parent or guardian and believe a child has provided information through the app, contact us so we can review the situation and take appropriate action.",
    userRights: [
      "Choose whether to grant activity, location, and notification permissions through Android settings.",
      "Stop route-location processing by ending the active route session or revoking location permission.",
      "Review or delete locally stored records using available app controls, or clear the app's storage from device settings.",
      "Contact us with questions or requests concerning this policy.",
    ],
    policyChanges:
      "We may update this policy when Step Tracker's features, permissions, service providers, or legal obligations change. The revised policy will be posted at this URL with an updated date. Material changes may also be communicated in the app when appropriate.",
    contactEmail: siteConfig.privacyEmail,
  },
  {
    slug: "auto-brightness",
    appName: "Auto Brightness",
    summary: "How Auto Brightness handles display profiles, automation settings, usage access, and accessibility features.",
    developerName: siteConfig.companyName,
    effectiveDate: initialPolicyDate,
    lastUpdated: initialPolicyDate,
    introduction:
      "This Privacy Policy explains how Auto Brightness processes information to manage brightness, screen filters, profiles, schedules, widgets, and per-app automation. The app is designed to keep its profiles and settings on your device and requests elevated Android access only for features you choose to enable.",
    dataCollected: [
      {
        title: "Brightness profiles and preferences",
        description:
          "The app stores brightness levels, screen-filter settings, extra-dim preferences, profiles, widget settings, and other display choices locally on your device.",
      },
      {
        title: "Schedules and automation state",
        description:
          "The app stores schedules, active automation state, and related timing preferences so it can apply your selected display behavior.",
      },
      {
        title: "Foreground-app information",
        description:
          "If you enable per-app profiles, the app uses usage access and an accessibility service to identify the foreground app and apply the brightness or filter profile you assigned to it. This information is used for that on-device automation.",
      },
    ],
    permissions: [
      {
        title: "Modify system settings",
        description:
          "Used to change the device's screen-brightness setting when you apply a profile, schedule, widget action, or automation.",
      },
      {
        title: "Display over other apps",
        description:
          "Used only when a screen filter or extra-dim overlay is enabled so the selected visual filter can appear above other apps.",
      },
      {
        title: "Usage access",
        description:
          "Used for foreground-app detection when per-app brightness or filter automation is enabled.",
      },
      {
        title: "Accessibility service",
        description:
          "Used to detect foreground-app changes so Auto Brightness can apply the profile you assigned to that app. Accessibility data is not used for advertising or user profiling and is not sold.",
      },
      {
        title: "Notifications",
        description:
          "Used to show active profile, schedule, overlay, or background-functionality status and related controls where Android requires or supports them.",
      },
    ],
    dataUsage: [
      "Apply brightness, screen-filter, and extra-dim settings selected by you.",
      "Run schedules and device-local automation that you configure.",
      "Detect the foreground app for per-app profiles when you enable that feature.",
      "Save profiles, schedules, preferences, widget configuration, and active automation state locally.",
      "Provide operational notifications and controls for enabled background functionality.",
    ],
    thirdPartyServices: [],
    dataSharing: [
      "Accessibility and foreground-app information is not sold, shared for advertising, or used outside the app's core display-automation functionality.",
      "The current core implementation does not transmit profiles, schedules, or display preferences to an Appnitive server.",
      "Information may be disclosed if required by applicable law or a valid legal process.",
      "Information is shared only when you deliberately use a system sharing feature or otherwise direct the app to do so.",
    ],
    dataRetention: [
      "Profiles, schedules, settings, and automation state remain in local app storage until you delete them, reset the app, clear app storage, or uninstall the app.",
      "Android or account backup features may retain or restore some app data according to your device settings and the platform provider's policies.",
      "Foreground-app events are used to apply enabled automation and are not retained as an advertising or behavioral profile.",
    ],
    security: [
      "Auto Brightness limits accessibility and usage-access processing to the on-device features described above and relies on Android's application storage and permission controls.",
      "Because no storage or processing method is completely secure, absolute security cannot be guaranteed.",
    ],
    childrenPrivacy:
      "Auto Brightness is not directed to children under 13. If you are a parent or guardian and believe a child has provided information through the app, contact us so we can review the situation and take appropriate action.",
    userRights: [
      "Enable or disable system-settings, overlay, usage-access, accessibility, and notification access through Android settings.",
      "Disable per-app automation to stop foreground-app detection for that feature.",
      "Edit or delete profiles, schedules, and preferences using available app controls, or clear the app's storage from device settings.",
      "Contact us with questions or requests concerning this policy.",
    ],
    policyChanges:
      "We may update this policy when Auto Brightness's features, permissions, service providers, or legal obligations change. The revised policy will be posted at this URL with an updated date. Material changes may also be communicated in the app when appropriate.",
    contactEmail: siteConfig.privacyEmail,
  },
  {
    slug: "focusguard",
    appName: "FocusGuard",
    summary: "How FocusGuard handles app-usage information, blocking rules, focus sessions, and accessibility access.",
    developerName: siteConfig.companyName,
    effectiveDate: initialPolicyDate,
    lastUpdated: initialPolicyDate,
    introduction:
      "This Privacy Policy explains how FocusGuard processes information to show app-usage insights and enforce the focus rules you create. FocusGuard is designed to perform its core usage analysis and blocking functions on your device and to keep rules, sessions, and summaries in local app storage.",
    dataCollected: [
      {
        title: "Application usage information",
        description:
          "The app processes which applications are used and for how long so it can calculate usage summaries, evaluate limits, and determine when a configured focus rule applies.",
      },
      {
        title: "Focus rules and sessions",
        description:
          "Blocked-app selections, limits, schedules, focus sessions, preferences, and related rule state are stored locally so the app can provide the controls you configure.",
      },
      {
        title: "Blocking events and summaries",
        description:
          "The app processes foreground-app changes and device-local rule events to detect selected distracting apps, enforce limits, and present usage or focus summaries.",
      },
    ],
    permissions: [
      {
        title: "Usage access",
        description:
          "Used to calculate application usage, show device-local usage summaries, evaluate configured limits, and support focus-rule enforcement.",
      },
      {
        title: "Accessibility service",
        description:
          "Used to detect when a selected distracting app opens and apply the focus rule or blocking behavior you configured. Accessibility data is not sold, shared for advertising, or used outside FocusGuard's core blocking functionality.",
      },
      {
        title: "Notifications",
        description:
          "Used for focus-session status, reminders, rule activity, and other operational information that you enable or Android requires for background work.",
      },
    ],
    dataUsage: [
      "Calculate application-usage summaries and progress on your device.",
      "Detect selected distracting apps and enforce the limits, schedules, or focus rules you configure.",
      "Store blocked-app selections, rules, limits, schedules, focus sessions, preferences, and summaries locally.",
      "Provide focus-session and reminder notifications.",
      "Maintain and improve the reliability of core focus and blocking features.",
    ],
    thirdPartyServices: [],
    dataSharing: [
      "Accessibility data and app-usage information are not sold, shared for advertising, or used outside the app's core usage-insight and blocking functionality.",
      "The current core implementation does not transmit focus rules, app-usage summaries, or session history to an Appnitive server.",
      "Information may be disclosed if required by applicable law or a valid legal process.",
      "Information is shared only when you deliberately use a system sharing feature or otherwise direct the app to do so.",
    ],
    dataRetention: [
      "Rules, schedules, focus sessions, and usage summaries remain in local app storage until removed through available app controls or until app storage is cleared.",
      "Uninstalling the app generally removes local app data, subject to Android and account backup settings that may retain or restore some information.",
      "Usage-access information is queried and processed as needed for enabled features; any summaries retained by FocusGuard are stored locally.",
    ],
    security: [
      "FocusGuard limits accessibility and usage-access processing to the device-local purposes described in this policy and relies on Android's storage and permission protections.",
      "No electronic storage or processing method is completely secure, so absolute security cannot be guaranteed.",
    ],
    childrenPrivacy:
      "FocusGuard is not directed to children under 13. If you are a parent or guardian and believe a child has provided information through the app, contact us so we can review the situation and take appropriate action.",
    userRights: [
      "Grant or revoke usage access, accessibility access, and notification permission through Android settings.",
      "Pause or remove configured focus rules and blocked-app selections using available app controls.",
      "Delete locally stored sessions, summaries, or settings where the app provides that control, or clear app storage through device settings.",
      "Contact us with questions or requests concerning this policy.",
    ],
    policyChanges:
      "We may update this policy when FocusGuard's features, permissions, service providers, or legal obligations change. The revised policy will be posted at this URL with an updated date. Material changes may also be communicated in the app when appropriate.",
    contactEmail: siteConfig.privacyEmail,
  },
  {
    slug: "geotag-camera",
    appName: "GeoTag Camera",
    summary: "How GeoTag Camera handles camera media, location details, on-device storage, and map services.",
    developerName: siteConfig.companyName,
    effectiveDate: initialPolicyDate,
    lastUpdated: initialPolicyDate,
    introduction:
      "This Privacy Policy explains how GeoTag Camera processes information when you capture or work with geotagged photos and videos. Media and related settings are handled on your device unless you deliberately use a feature that shares or uploads them. Location is used when you capture or process geotagged media and for the related map features described below.",
    dataCollected: [
      {
        title: "Photos, videos, and media details",
        description:
          "The app processes photos and videos you capture or select, along with presentation details such as timestamps, overlays, and available media metadata, so you can create and manage geotagged media.",
      },
      {
        title: "Location information",
        description:
          "When you use geotagging or related map features, the app processes precise or approximate location to add coordinates and location context to the media you are capturing or processing.",
      },
      {
        title: "Camera preferences",
        description:
          "Camera, overlay, display, and related application settings are stored locally so the app can remember your choices.",
      },
      {
        title: "Audio for video recording",
        description:
          "If you record video with sound, the app processes microphone audio as part of the video you choose to create.",
      },
    ],
    permissions: [
      {
        title: "Camera",
        description:
          "Used to preview the camera and capture photos or videos when you choose to do so.",
      },
      {
        title: "Precise or approximate location",
        description:
          "Used when you capture or process geotagged media and when a location or map feature requires coordinates.",
      },
      {
        title: "Photos, videos, or device media",
        description:
          "Used to save captured media and to let you select, view, or process compatible media already on your device, subject to the Android version and permission model.",
      },
      {
        title: "Microphone",
        description:
          "Used only when you choose to record video with audio. It is not required for taking a still photo.",
      },
    ],
    dataUsage: [
      "Capture, save, display, and process photos or videos selected by you.",
      "Add coordinates and available location context to geotagged media when you use that feature.",
      "Show location context on a map where the app provides a map view.",
      "Apply your selected timestamp, location, or visual-overlay settings.",
      "Prepare media for sharing only after you initiate a system share or another explicit export action.",
    ],
    thirdPartyServices: [
      {
        name: "Google Maps Platform and Google Play services",
        purpose:
          "Used for device-location functionality and map display when you use geotagging or a map view. Google may process technical, location, and map-request information under its own terms and privacy policy.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "External weather provider",
        purpose:
          "Reserved for a future weather feature. Enable and identify the production provider here only after the feature and its data flow have been verified.",
        enabled: false,
      },
    ],
    dataSharing: [
      "Photos and videos remain on your device unless you explicitly share, export, or upload them using a feature you choose.",
      "Location and map-request information may be processed by the Google services described above when you use geotagging or map features.",
      "Information may be disclosed if required by applicable law or a valid legal process.",
      "GeoTag Camera does not automatically upload your media to an Appnitive server as part of the core functionality described in this policy.",
    ],
    dataRetention: [
      "Captured or selected media remains in device storage until you delete it using the app, a gallery or file-management tool, or another available device control.",
      "App preferences remain in local app storage until reset, cleared, or removed. Android or account backup settings may retain or restore some app data.",
      "Map and platform providers may retain information according to their own policies when their services are used.",
    ],
    security: [
      "GeoTag Camera relies on Android's permission, application-storage, and media-storage protections and processes camera, location, and microphone access only for the features described above.",
      "Media may contain sensitive visual, audio, location, or metadata information. Review media before sharing it with another person or service.",
      "No electronic storage or processing method is completely secure, so absolute security cannot be guaranteed.",
    ],
    childrenPrivacy:
      "GeoTag Camera is not directed to children under 13. If you are a parent or guardian and believe a child has provided information through the app, contact us so we can review the situation and take appropriate action.",
    userRights: [
      "Grant or revoke camera, location, media, and microphone permissions through Android settings.",
      "Use the app without adding location where the selected feature permits, or revoke location access to stop app-level location processing.",
      "Review and delete media through available app or device controls and clear local preferences through Android settings.",
      "Decide whether to share or export any photo or video.",
      "Contact us with questions or requests concerning this policy.",
    ],
    policyChanges:
      "We may update this policy when GeoTag Camera's features, permissions, service providers, or legal obligations change. The revised policy will be posted at this URL with an updated date. Material changes may also be communicated in the app when appropriate.",
    contactEmail: siteConfig.privacyEmail,
  },
] as const satisfies readonly PrivacyPolicyConfig[];

export function isValidPrivacyPolicy(
  policy: PrivacyPolicyConfig,
): boolean {
  return Boolean(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(policy.slug) &&
      policy.appName.trim() &&
      policy.summary.trim() &&
      policy.introduction.trim() &&
      policy.dataCollected.length &&
      policy.permissions.length &&
      policy.contactEmail.trim(),
  );
}

export const validPrivacyPolicies: readonly PrivacyPolicyConfig[] =
  privacyPolicies.filter(isValidPrivacyPolicy);

export function getPrivacyPolicy(
  slug: string,
): PrivacyPolicyConfig | undefined {
  return validPrivacyPolicies.find((policy) => policy.slug === slug);
}

export function getEnabledThirdPartyServices(
  policy: PrivacyPolicyConfig,
): readonly ThirdPartyService[] {
  return policy.thirdPartyServices.filter((service) => service.enabled !== false);
}
