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
  {
    slug: "properpdf",
    appName: "ProperPdf",
    summary: "How ProperPdf handles documents, images, scans, signatures, recent-file details, and locally processed PDF tools.",
    developerName: siteConfig.companyName,
    effectiveDate: "July 29, 2026",
    lastUpdated: "July 29, 2026",
    introduction:
      "This Privacy Policy explains how ProperPdf processes information when you read, scan, create, edit, protect, sign, convert, save, or share PDF documents. The PDF tools described in this policy are designed to process your selected documents on your device. ProperPdf accesses only files, images, folders, or scanner results that you deliberately select through an app or Android system workflow.",
    dataCollected: [
      {
        title: "Documents and images selected by you",
        description:
          "The app processes PDFs and images that you choose so it can read documents; merge, split, crop, compress, lock, unlock, or remove pages; convert between PDFs and images; and create other outputs requested by you.",
      },
      {
        title: "Scanned documents",
        description:
          "When you start the Scan Document tool, the scanner workflow processes the pages you capture and returns a PDF result for you to review, save, or continue processing.",
      },
      {
        title: "Signatures and document edits",
        description:
          "If you use the signing tool, the app processes the signature you draw or enter, its placement, and the selected document so it can create the signed output you request.",
      },
      {
        title: "Recent-file information and preferences",
        description:
          "The app stores limited local details such as file name, file location or document URI, tool used, timestamp, file size when available, recent saved outputs, and application preferences so you can reopen recent work and retain your settings.",
      },
    ],
    permissions: [
      {
        title: "Files, documents, images, and folders selected by you",
        description:
          "ProperPdf uses Android's document and folder pickers to access only the source files and output locations you choose. The app does not require broad access to scan your entire device library for these workflows.",
      },
      {
        title: "Document scanner and camera workflow",
        description:
          "When you start document scanning, Google Play services provides the scanner and camera workflow. ProperPdf receives the scan result you approve; the app does not declare its own direct camera permission for this feature.",
      },
      {
        title: "Network access",
        description:
          "The app declares internet access to support platform-service availability, including the Google document-scanner service. The PDF editing and conversion operations described in this policy are designed to run on your device.",
      },
    ],
    dataUsage: [
      "Open and render documents that you deliberately select or send to ProperPdf.",
      "Create the PDF, image, scan, signature, security, compression, page, or conversion output requested by you.",
      "Save outputs to the document, folder, or sharing destination you choose.",
      "Maintain a device-local recent-files list and local copies of saved outputs for convenient reopening.",
      "Remember application preferences and support reliable operation of the document tools.",
    ],
    thirdPartyServices: [
      {
        name: "Google ML Kit Document Scanner and Google Play services",
        purpose:
          "Provides the document-scanning interface when you deliberately start the Scan Document tool. Google may process technical service information under its own terms and privacy policy.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    dataSharing: [
      "ProperPdf does not sell your documents, images, signatures, or recent-file information.",
      "The document tools described in this policy do not automatically upload selected files to an Appnitive server.",
      "Information needed for document scanning may be processed by the Google service identified above when you use that feature.",
      "A document or image is shared only when you choose a system sharing, export, save, or open-with destination.",
      "Information may be disclosed if required by applicable law or a valid legal process.",
    ],
    dataRetention: [
      "Source documents and images remain in their original device or provider locations unless you delete or change them using the relevant device, storage-provider, or file-management controls.",
      "Generated files remain in the output location you select until you delete them. ProperPdf may also keep device-local copies of recent saved outputs so they can be reopened from the app.",
      "Clearing the recent-files list removes its local metadata and locally retained output copies, but does not necessarily delete files saved to other locations you selected.",
      "Clearing app storage or uninstalling the app generally removes app-local data, subject to Android and account backup settings that may retain or restore some information.",
      "Google may retain service information according to its own policies when the document scanner is used.",
    ],
    security: [
      "ProperPdf relies on Android's scoped document access, application storage, and content-sharing controls and limits file processing to the workflows described in this policy.",
      "Password protection can help restrict access to a PDF, but users remain responsible for safeguarding passwords, source files, outputs, and sharing destinations.",
      "No electronic storage or processing method is completely secure, so absolute security cannot be guaranteed.",
    ],
    childrenPrivacy:
      "ProperPdf is not directed to children under 13. If you are a parent or guardian and believe a child has provided information through the app, contact us so we can review the situation and take appropriate action.",
    userRights: [
      "Choose which documents, images, scans, folders, and output destinations ProperPdf may access through Android's system workflows.",
      "Cancel a picker or scanner workflow without providing a document to the app.",
      "Review, move, share, or delete generated files using the app and available device or storage-provider controls.",
      "Clear recent-file information and local app data using available app or Android settings.",
      "Contact us with questions or requests concerning this policy.",
    ],
    policyChanges:
      "We may update this policy when ProperPdf's document tools, permissions, service providers, or legal obligations change. The revised policy will be posted at this URL with an updated date. Material changes may also be communicated in the app when appropriate.",
    contactEmail: siteConfig.privacyEmail,
  },
  {
    slug: "pictionary",
    appName: "Pictionary",
    summary: "How Pictionary handles anonymous sign-in, player names, multiplayer rooms, drawings, guesses, scores, and presence.",
    developerName: siteConfig.companyName,
    effectiveDate: "July 29, 2026",
    lastUpdated: "July 29, 2026",
    introduction:
      "This Privacy Policy explains how Pictionary processes information to create and synchronize private multiplayer drawing-and-guessing rooms. The app uses an anonymous account identifier and cloud database services so invited players can see the same room, drawings, guesses, scores, and game status in real time.",
    dataCollected: [
      {
        title: "Anonymous account identifier",
        description:
          "The app signs the device in anonymously through Firebase Authentication and receives a unique identifier used to associate the player with rooms and game actions. It does not require an email address or password for this sign-in flow.",
      },
      {
        title: "Player and room information",
        description:
          "The app processes the player name you enter or the generated default name, anonymous player and host identifiers, room code, selected game mode, online status, join time, scores, round number, round timing, and other room state needed to run a game.",
      },
      {
        title: "Drawings and game actions",
        description:
          "The app processes drawing strokes and points, colors, brush width, clear or undo events, timestamps, and the anonymous identifier of the player creating the event so drawings can be synchronized with the room.",
      },
      {
        title: "Guesses and results",
        description:
          "The app processes guess text, player name and identifier, whether a guess was correct, timestamps, scores, and round results so players can participate and see game progress.",
      },
    ],
    permissions: [
      {
        title: "Internet access",
        description:
          "Required to sign in anonymously, create or join a room, synchronize drawings and guesses, update scores and presence, and receive real-time room changes through Firebase.",
      },
      {
        title: "No camera, microphone, location, or media permission",
        description:
          "The current app manifest does not request camera, microphone, location, contacts, or device-media access for the multiplayer drawing gameplay described in this policy.",
      },
    ],
    dataUsage: [
      "Create an anonymous Firebase session for the device.",
      "Create a private game room or locate a room using the code entered by a player.",
      "Synchronize player names, presence, drawings, guesses, scores, prompts, timers, and round state among room participants.",
      "Determine correct guesses and update game progress and scores.",
      "Remove or mark room and presence information when players or hosts leave where the app's current cleanup flow applies.",
      "Maintain the reliability and security of the multiplayer service.",
    ],
    thirdPartyServices: [
      {
        name: "Google Firebase Authentication",
        purpose:
          "Creates and maintains the anonymous account identifier used for multiplayer room participation. Google processes related authentication and technical information under its own terms and privacy policy.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "Google Firebase Realtime Database",
        purpose:
          "Stores and synchronizes temporary room, player, presence, drawing, guess, score, prompt, and round information so participants can play together in real time.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    dataSharing: [
      "Player names, drawings, guesses, scores, presence, and game status are shared with other participants in the same room as part of gameplay.",
      "Firebase processes authentication, technical, and room information as the service provider used to operate multiplayer games.",
      "Pictionary does not sell player, drawing, guess, or room information.",
      "Do not enter sensitive personal information as a player name or guess, and share room codes only with people you intend to invite.",
      "Information may be disclosed if required by applicable law or a valid legal process.",
    ],
    dataRetention: [
      "Drawing events and guesses are cleared when the current game flow starts a new round or otherwise performs room cleanup.",
      "Room data is intended to be temporary. The app requests room deletion when the host ends or leaves the room, and its current host-disconnection flow is designed to remove the room; actual deletion timing can be affected by connectivity, app termination, database configuration, or provider operations.",
      "A non-host player's online status is updated when the player leaves or disconnects where the presence flow succeeds.",
      "Firebase may retain anonymous authentication and database information according to the project's configuration, backups, operational requirements, and Google's applicable policies.",
      "Clearing app data or uninstalling the app removes device-local app state but may not immediately delete information already synchronized to Firebase.",
    ],
    security: [
      "Pictionary uses anonymous Firebase Authentication and Firebase Realtime Database to operate multiplayer rooms. Access controls and database rules must be maintained to limit unauthorized room access and writes.",
      "Room codes are intended for invitation and convenience; they should not be treated as a guarantee that a room or its content is confidential.",
      "No electronic transmission, authentication, or storage method is completely secure, so absolute security cannot be guaranteed.",
    ],
    childrenPrivacy:
      "Pictionary is not directed to children under 13. If you are a parent or guardian and believe a child has provided information through the app, contact us so we can review the situation and take appropriate action.",
    userRights: [
      "Choose the player name displayed to other participants and avoid entering personal or sensitive information.",
      "Choose whether to create a room, join using a room code, submit a guess, or draw during a round.",
      "Leave a room at any time; hosts can end their room using the available app controls.",
      "Clear device-local app data through Android settings to reset local state and the locally stored anonymous session.",
      "Contact us with questions or requests concerning synchronized room information or this policy.",
    ],
    policyChanges:
      "We may update this policy when Pictionary's multiplayer features, data flows, permissions, service providers, or legal obligations change. The revised policy will be posted at this URL with an updated date. Material changes may also be communicated in the app when appropriate.",
    contactEmail: siteConfig.privacyEmail,
  },
  {
    slug: "crosswords-puzzle-english",
    appName: "Crosswords Puzzle English",
    summary:
      "How Crosswords Puzzle English handles locally stored puzzle progress, answers, hints, play times, points, and daily rewards.",
    developerName: siteConfig.companyName,
    effectiveDate: "July 31, 2026",
    lastUpdated: "July 31, 2026",
    introduction:
      "This Privacy Policy explains how Crosswords Puzzle English processes information while you solve its bundled English crossword puzzles. The current version is designed to work locally on your device without an account, advertising, analytics, cloud synchronization, or network-based gameplay. It stores gameplay progress so you can continue puzzles, use hints, earn points, and review completion progress.",
    dataCollected: [
      {
        title: "Puzzle progress and answers",
        description:
          "The app stores the puzzle identifier and difficulty, entered letters, revealed cells, selected word or grid position, solved-word count, completion status, and hint count needed to save and restore your progress.",
      },
      {
        title: "Play and completion information",
        description:
          "The app stores local timestamps and timing information such as when a puzzle was started or last played, accumulated play time, completion time, best time, and completion date when applicable.",
      },
      {
        title: "Points and daily rewards",
        description:
          "The app stores the local points balance through transaction records, including the transaction type, amount, related puzzle or word when applicable, timestamp, and description. It also stores the local calendar date on which the most recent daily reward was claimed.",
      },
    ],
    permissions: [],
    dataUsage: [
      "Save entered letters, revealed cells, hints, and selection state so an unfinished puzzle can be continued.",
      "Calculate completion progress, solved-word counts, elapsed time, completion time, and best time.",
      "Award and spend locally managed points for puzzle completions, daily rewards, and hints.",
      "Determine whether the daily reward is currently available using the device's local calendar date.",
      "Display bundled puzzles, difficulty groups, level progress, and gameplay history on the device.",
    ],
    thirdPartyServices: [],
    dataSharing: [
      "Crosswords Puzzle English does not sell locally stored gameplay information.",
      "The current app does not transmit puzzle progress, answers, timing information, points, or daily-reward information to Appnitive Technologies or a third-party service as part of its core functionality.",
      "Android backup or device-transfer services may process app data according to your device, account, and platform settings. Those platform services are controlled by their providers rather than by the app's core gameplay.",
      "Information may be disclosed if required by applicable law or a valid legal process and if it is available to us, although the current app does not ordinarily receive the locally stored gameplay records described above.",
    ],
    dataRetention: [
      "Puzzle progress, timing information, points transactions, and daily-reward information remain in the app's local database until they are removed through available app or Android controls, app storage is cleared, or the app is uninstalled.",
      "Clearing app storage or uninstalling the app generally removes device-local gameplay information, subject to Android backup and device-transfer settings that may retain or later restore some app data.",
      "Because the current backup configuration must be verified before release, the exact backup and restoration behavior can vary by Android version, device, account, and final production configuration.",
    ],
    security: [
      "Gameplay information is stored in the app's private local database and is not intentionally transmitted by the current app's core functionality.",
      "Device security, operating-system protections, backup settings, and access to the device can affect the confidentiality of locally stored information.",
      "No electronic storage method is completely secure, so absolute security cannot be guaranteed.",
    ],
    childrenPrivacy:
      "Crosswords Puzzle English is not directed to children under 13. The current app does not request an account or personal contact details. If you are a parent or guardian and have a privacy concern about a child's use of the app, contact us so we can review the situation and take appropriate action.",
    userRights: [
      "Play the bundled puzzles without creating an account or providing personal contact information.",
      "Choose whether to enter answers, use hints, claim daily rewards, or continue saved puzzles.",
      "Clear the app's local information using available app or Android storage controls.",
      "Review and manage Android backup or device-transfer settings through your device or account controls.",
      "Contact us with questions or requests concerning this policy.",
    ],
    policyChanges:
      "We may update this policy if Crosswords Puzzle English adds permissions, online services, analytics, advertising, cloud features, new data practices, or if legal obligations change. The revised policy will be posted at this URL with an updated date. Material changes may also be communicated in the app when appropriate.",
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
