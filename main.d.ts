/// <reference types="react" />
/// <reference types="node" />
import * as react from 'react';
import react__default, { CSSProperties, ReactNode, DependencyList, FC, KeyboardEvent as KeyboardEvent$1, MouseEvent as MouseEvent$1 } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _mdi_react_dist_IconProps_d_ts from '@mdi/react/dist/IconProps.d.ts';
import { CreateObservableOptions, AnnotationsMap } from 'mobx';

declare const MarkdownUI: react.FunctionComponent<{
    className?: string | undefined;
    markdown?: string | undefined;
}>;

declare const MessageInfoUI: react.FunctionComponent<{
    title?: string | undefined;
    children?: React.ReactNode;
    markdown?: string | undefined;
    className?: string | undefined;
}>;
declare const MessageErrorUI: react.FunctionComponent<{
    title?: string | undefined;
    children?: React.ReactNode;
    markdown?: string | undefined;
}>;
declare const MessageWarningUI: react.FunctionComponent<{
    title?: string | undefined;
    children?: React.ReactNode;
    markdown?: string | undefined;
}>;

/** oklch */
type AbsoluteStyle = {
    type: 'absolute';
    /** 0 to 1 */
    lightness: number;
    /** 0 to 1 */
    chroma: number;
    /** 0 to 360 or -180 to 180 */
    hue: number;
};
/** contrast+accent bleed + hue shift */
type RelativeStyle = {
    type?: 'relative';
    /**
     * -1 to 1
     * eg. 0 for background from parent bg
     * eg. 1 for text to it's background
     * */
    contrast: number;
    /**
     * 0 to 1
     * multiplier for chroma (saturation)
     * how much colorfulness to retain from the background
     */
    chromaBlend?: number;
    chroma?: number;
    /** 0 to 360 */
    hueShift?: number;
    hue?: number;
    /** TBD */
    opacity?: number;
};
declare const ThemeCtx: react.Context<{
    background: AbsoluteStyle;
    text: RelativeStyle | AbsoluteStyle;
    /** shiftDirection will change at threesholds (0.25 when pos, .75 when neg) */
    shiftDirection?: "pos" | "neg" | undefined;
}>;

declare const clamp: (v: number, min: number, max: number) => number;

declare const applyRelative: (a: AbsoluteStyle, b: RelativeStyle) => AbsoluteStyle;
declare function autoContrast(lightness: number, contrast: number): number;

declare function formatColor(col: AbsoluteStyle): string;

declare const BoxBase: react.FunctionComponent<BoxUIProps>;
declare const BoxTitle: react.FunctionComponent<BoxUIProps>;
declare const BoxSubtle: react.FunctionComponent<BoxUIProps>;
type BoxProps = {
    /**
     * - string: absolute color
     * - relative: relative to parent
     * - number: = relative({ contrast: x / 100, chromaBlend: 1, hueShift: 0 })
     * - null: inherit parent's background
     * */
    base?: RelativeStyle | string | number;
    /**
     * @default { contrast: 1, chromaBlend: 1, hueShift: 0}
     * relative to base; when relative, carry to children as default strategy */
    text?: RelativeStyle | string;
    shadow?: RelativeStyle | string;
    /**
     * - string: absolute color
     * - relative: relative to parent
     * - number: = relative({ contrast: x / 10 })
     * - boolean: = relative({ contrast: 0.2 })
     * - null: inherit parent's background
     * */
    border?: RelativeStyle | string | number | boolean;
    /** if true; will add some contrast on hover */
    hover?: boolean;
};
type BoxUIProps = BoxProps & {
    className?: string;
    style?: React.CSSProperties;
    children?: any;
    tabIndex?: number;
    id?: string;
    ref?: React.Ref<HTMLDivElement>;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
    onMouseDown?: (ev: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (ev: React.MouseEvent<HTMLDivElement>) => void;
};
declare const Box: react.MemoExoticComponent<react.ForwardRefExoticComponent<Omit<BoxUIProps, "ref"> & react.RefAttributes<HTMLDivElement>>>;

type BoxAppearance = {
    background: AbsoluteStyle;
    text: AbsoluteStyle;
    textForCtx: AbsoluteStyle | RelativeStyle;
    border: AbsoluteStyle | null;
};
declare const useColor: (p?: BoxProps) => BoxAppearance & {
    /** auto-generated from BoxAppearance */
    className?: string;
    /** in case you prefer BoxAppearance as css object */
    styles: Readonly<CSSProperties>;
    /** in case you prefer BoxAppearance as css variables */
    variables: Record<string, any>;
};

type CovariantFn<out In, out Out> = {
    covarianceHack(_: In): Out;
}['covarianceHack'];

type CovariantFC<out P> = {
    covarianceHack(_: P): ReactNode;
}['covarianceHack'];

declare const allIcons: {
    cdiTest: string;
    mdiAbTesting: string;
    mdiAbacus: string;
    mdiAbjadArabic: string;
    mdiAbjadHebrew: string;
    mdiAbugidaDevanagari: string;
    mdiAbugidaThai: string;
    mdiAccessPoint: string;
    mdiAccessPointCheck: string;
    mdiAccessPointMinus: string;
    mdiAccessPointNetwork: string;
    mdiAccessPointNetworkOff: string;
    mdiAccessPointOff: string;
    mdiAccessPointPlus: string;
    mdiAccessPointRemove: string;
    mdiAccount: string;
    mdiAccountAlert: string;
    mdiAccountAlertOutline: string;
    mdiAccountArrowDown: string;
    mdiAccountArrowDownOutline: string;
    mdiAccountArrowLeft: string;
    mdiAccountArrowLeftOutline: string;
    mdiAccountArrowRight: string;
    mdiAccountArrowRightOutline: string;
    mdiAccountArrowUp: string;
    mdiAccountArrowUpOutline: string;
    mdiAccountBadge: string;
    mdiAccountBadgeOutline: string;
    mdiAccountBox: string;
    mdiAccountBoxEditOutline: string;
    mdiAccountBoxMinusOutline: string;
    mdiAccountBoxMultiple: string;
    mdiAccountBoxMultipleOutline: string;
    mdiAccountBoxOutline: string;
    mdiAccountBoxPlusOutline: string;
    mdiAccountCancel: string;
    mdiAccountCancelOutline: string;
    mdiAccountCard: string;
    mdiAccountCardOutline: string;
    mdiAccountCash: string;
    mdiAccountCashOutline: string;
    mdiAccountCheck: string;
    mdiAccountCheckOutline: string;
    mdiAccountChild: string;
    mdiAccountChildCircle: string;
    mdiAccountChildOutline: string;
    mdiAccountCircle: string;
    mdiAccountCircleOutline: string;
    mdiAccountClock: string;
    mdiAccountClockOutline: string;
    mdiAccountCog: string;
    mdiAccountCogOutline: string;
    mdiAccountConvert: string;
    mdiAccountConvertOutline: string;
    mdiAccountCowboyHat: string;
    mdiAccountCowboyHatOutline: string;
    mdiAccountCreditCard: string;
    mdiAccountCreditCardOutline: string;
    mdiAccountDetails: string;
    mdiAccountDetailsOutline: string;
    mdiAccountEdit: string;
    mdiAccountEditOutline: string;
    mdiAccountEye: string;
    mdiAccountEyeOutline: string;
    mdiAccountFile: string;
    mdiAccountFileOutline: string;
    mdiAccountFileText: string;
    mdiAccountFileTextOutline: string;
    mdiAccountFilter: string;
    mdiAccountFilterOutline: string;
    mdiAccountGroup: string;
    mdiAccountGroupOutline: string;
    mdiAccountHardHat: string;
    mdiAccountHardHatOutline: string;
    mdiAccountHeart: string;
    mdiAccountHeartOutline: string;
    mdiAccountInjury: string;
    mdiAccountInjuryOutline: string;
    mdiAccountKey: string;
    mdiAccountKeyOutline: string;
    mdiAccountLock: string;
    mdiAccountLockOpen: string;
    mdiAccountLockOpenOutline: string;
    mdiAccountLockOutline: string;
    mdiAccountMinus: string;
    mdiAccountMinusOutline: string;
    mdiAccountMultiple: string;
    mdiAccountMultipleCheck: string;
    mdiAccountMultipleCheckOutline: string;
    mdiAccountMultipleMinus: string;
    mdiAccountMultipleMinusOutline: string;
    mdiAccountMultipleOutline: string;
    mdiAccountMultiplePlus: string;
    mdiAccountMultiplePlusOutline: string;
    mdiAccountMultipleRemove: string;
    mdiAccountMultipleRemoveOutline: string;
    mdiAccountMusic: string;
    mdiAccountMusicOutline: string;
    mdiAccountNetwork: string;
    mdiAccountNetworkOff: string;
    mdiAccountNetworkOffOutline: string;
    mdiAccountNetworkOutline: string;
    mdiAccountOff: string;
    mdiAccountOffOutline: string;
    mdiAccountOutline: string;
    mdiAccountPlus: string;
    mdiAccountPlusOutline: string;
    mdiAccountQuestion: string;
    mdiAccountQuestionOutline: string;
    mdiAccountReactivate: string;
    mdiAccountReactivateOutline: string;
    mdiAccountRemove: string;
    mdiAccountRemoveOutline: string;
    mdiAccountSchool: string;
    mdiAccountSchoolOutline: string;
    mdiAccountSearch: string;
    mdiAccountSearchOutline: string;
    mdiAccountSettings: string;
    mdiAccountSettingsOutline: string;
    mdiAccountStar: string;
    mdiAccountStarOutline: string;
    mdiAccountSupervisor: string;
    mdiAccountSupervisorCircle: string;
    mdiAccountSupervisorCircleOutline: string;
    mdiAccountSupervisorOutline: string;
    mdiAccountSwitch: string;
    mdiAccountSwitchOutline: string;
    mdiAccountSync: string;
    mdiAccountSyncOutline: string;
    mdiAccountTag: string;
    mdiAccountTagOutline: string;
    mdiAccountTie: string;
    mdiAccountTieHat: string;
    mdiAccountTieHatOutline: string;
    mdiAccountTieOutline: string;
    mdiAccountTieVoice: string;
    mdiAccountTieVoiceOff: string;
    mdiAccountTieVoiceOffOutline: string;
    mdiAccountTieVoiceOutline: string;
    mdiAccountTieWoman: string;
    mdiAccountVoice: string;
    mdiAccountVoiceOff: string;
    mdiAccountWrench: string;
    mdiAccountWrenchOutline: string;
    mdiAdjust: string;
    mdiAdvertisements: string;
    mdiAdvertisementsOff: string;
    mdiAirConditioner: string;
    mdiAirFilter: string;
    mdiAirHorn: string;
    mdiAirHumidifier: string;
    mdiAirHumidifierOff: string;
    mdiAirPurifier: string;
    mdiAirPurifierOff: string;
    mdiAirbag: string;
    mdiAirballoon: string;
    mdiAirballoonOutline: string;
    mdiAirplane: string;
    mdiAirplaneAlert: string;
    mdiAirplaneCheck: string;
    mdiAirplaneClock: string;
    mdiAirplaneCog: string;
    mdiAirplaneEdit: string;
    mdiAirplaneLanding: string;
    mdiAirplaneMarker: string;
    mdiAirplaneMinus: string;
    mdiAirplaneOff: string;
    mdiAirplanePlus: string;
    mdiAirplaneRemove: string;
    mdiAirplaneSearch: string;
    mdiAirplaneSettings: string;
    mdiAirplaneTakeoff: string;
    mdiAirport: string;
    mdiAlarm: string;
    mdiAlarmBell: string;
    mdiAlarmCheck: string;
    mdiAlarmLight: string;
    mdiAlarmLightOff: string;
    mdiAlarmLightOffOutline: string;
    mdiAlarmLightOutline: string;
    mdiAlarmMultiple: string;
    mdiAlarmNote: string;
    mdiAlarmNoteOff: string;
    mdiAlarmOff: string;
    mdiAlarmPanel: string;
    mdiAlarmPanelOutline: string;
    mdiAlarmPlus: string;
    mdiAlarmSnooze: string;
    mdiAlbum: string;
    mdiAlert: string;
    mdiAlertBox: string;
    mdiAlertBoxOutline: string;
    mdiAlertCircle: string;
    mdiAlertCircleCheck: string;
    mdiAlertCircleCheckOutline: string;
    mdiAlertCircleOutline: string;
    mdiAlertDecagram: string;
    mdiAlertDecagramOutline: string;
    mdiAlertMinus: string;
    mdiAlertMinusOutline: string;
    mdiAlertOctagon: string;
    mdiAlertOctagonOutline: string;
    mdiAlertOctagram: string;
    mdiAlertOctagramOutline: string;
    mdiAlertOutline: string;
    mdiAlertPlus: string;
    mdiAlertPlusOutline: string;
    mdiAlertRemove: string;
    mdiAlertRemoveOutline: string;
    mdiAlertRhombus: string;
    mdiAlertRhombusOutline: string;
    mdiAlien: string;
    mdiAlienOutline: string;
    mdiAlignHorizontalCenter: string;
    mdiAlignHorizontalDistribute: string;
    mdiAlignHorizontalLeft: string;
    mdiAlignHorizontalRight: string;
    mdiAlignVerticalBottom: string;
    mdiAlignVerticalCenter: string;
    mdiAlignVerticalDistribute: string;
    mdiAlignVerticalTop: string;
    mdiAllInclusive: string;
    mdiAllInclusiveBox: string;
    mdiAllInclusiveBoxOutline: string;
    mdiAllergy: string;
    mdiAlpha: string;
    mdiAlphaA: string;
    mdiAlphaABox: string;
    mdiAlphaABoxOutline: string;
    mdiAlphaACircle: string;
    mdiAlphaACircleOutline: string;
    mdiAlphaB: string;
    mdiAlphaBBox: string;
    mdiAlphaBBoxOutline: string;
    mdiAlphaBCircle: string;
    mdiAlphaBCircleOutline: string;
    mdiAlphaC: string;
    mdiAlphaCBox: string;
    mdiAlphaCBoxOutline: string;
    mdiAlphaCCircle: string;
    mdiAlphaCCircleOutline: string;
    mdiAlphaD: string;
    mdiAlphaDBox: string;
    mdiAlphaDBoxOutline: string;
    mdiAlphaDCircle: string;
    mdiAlphaDCircleOutline: string;
    mdiAlphaE: string;
    mdiAlphaEBox: string;
    mdiAlphaEBoxOutline: string;
    mdiAlphaECircle: string;
    mdiAlphaECircleOutline: string;
    mdiAlphaF: string;
    mdiAlphaFBox: string;
    mdiAlphaFBoxOutline: string;
    mdiAlphaFCircle: string;
    mdiAlphaFCircleOutline: string;
    mdiAlphaG: string;
    mdiAlphaGBox: string;
    mdiAlphaGBoxOutline: string;
    mdiAlphaGCircle: string;
    mdiAlphaGCircleOutline: string;
    mdiAlphaH: string;
    mdiAlphaHBox: string;
    mdiAlphaHBoxOutline: string;
    mdiAlphaHCircle: string;
    mdiAlphaHCircleOutline: string;
    mdiAlphaI: string;
    mdiAlphaIBox: string;
    mdiAlphaIBoxOutline: string;
    mdiAlphaICircle: string;
    mdiAlphaICircleOutline: string;
    mdiAlphaJ: string;
    mdiAlphaJBox: string;
    mdiAlphaJBoxOutline: string;
    mdiAlphaJCircle: string;
    mdiAlphaJCircleOutline: string;
    mdiAlphaK: string;
    mdiAlphaKBox: string;
    mdiAlphaKBoxOutline: string;
    mdiAlphaKCircle: string;
    mdiAlphaKCircleOutline: string;
    mdiAlphaL: string;
    mdiAlphaLBox: string;
    mdiAlphaLBoxOutline: string;
    mdiAlphaLCircle: string;
    mdiAlphaLCircleOutline: string;
    mdiAlphaM: string;
    mdiAlphaMBox: string;
    mdiAlphaMBoxOutline: string;
    mdiAlphaMCircle: string;
    mdiAlphaMCircleOutline: string;
    mdiAlphaN: string;
    mdiAlphaNBox: string;
    mdiAlphaNBoxOutline: string;
    mdiAlphaNCircle: string;
    mdiAlphaNCircleOutline: string;
    mdiAlphaO: string;
    mdiAlphaOBox: string;
    mdiAlphaOBoxOutline: string;
    mdiAlphaOCircle: string;
    mdiAlphaOCircleOutline: string;
    mdiAlphaP: string;
    mdiAlphaPBox: string;
    mdiAlphaPBoxOutline: string;
    mdiAlphaPCircle: string;
    mdiAlphaPCircleOutline: string;
    mdiAlphaQ: string;
    mdiAlphaQBox: string;
    mdiAlphaQBoxOutline: string;
    mdiAlphaQCircle: string;
    mdiAlphaQCircleOutline: string;
    mdiAlphaR: string;
    mdiAlphaRBox: string;
    mdiAlphaRBoxOutline: string;
    mdiAlphaRCircle: string;
    mdiAlphaRCircleOutline: string;
    mdiAlphaS: string;
    mdiAlphaSBox: string;
    mdiAlphaSBoxOutline: string;
    mdiAlphaSCircle: string;
    mdiAlphaSCircleOutline: string;
    mdiAlphaT: string;
    mdiAlphaTBox: string;
    mdiAlphaTBoxOutline: string;
    mdiAlphaTCircle: string;
    mdiAlphaTCircleOutline: string;
    mdiAlphaU: string;
    mdiAlphaUBox: string;
    mdiAlphaUBoxOutline: string;
    mdiAlphaUCircle: string;
    mdiAlphaUCircleOutline: string;
    mdiAlphaV: string;
    mdiAlphaVBox: string;
    mdiAlphaVBoxOutline: string;
    mdiAlphaVCircle: string;
    mdiAlphaVCircleOutline: string;
    mdiAlphaW: string;
    mdiAlphaWBox: string;
    mdiAlphaWBoxOutline: string;
    mdiAlphaWCircle: string;
    mdiAlphaWCircleOutline: string;
    mdiAlphaX: string;
    mdiAlphaXBox: string;
    mdiAlphaXBoxOutline: string;
    mdiAlphaXCircle: string;
    mdiAlphaXCircleOutline: string;
    mdiAlphaY: string;
    mdiAlphaYBox: string;
    mdiAlphaYBoxOutline: string;
    mdiAlphaYCircle: string;
    mdiAlphaYCircleOutline: string;
    mdiAlphaZ: string;
    mdiAlphaZBox: string;
    mdiAlphaZBoxOutline: string;
    mdiAlphaZCircle: string;
    mdiAlphaZCircleOutline: string;
    mdiAlphabetAurebesh: string;
    mdiAlphabetCyrillic: string;
    mdiAlphabetGreek: string;
    mdiAlphabetLatin: string;
    mdiAlphabetPiqad: string;
    mdiAlphabetTengwar: string;
    mdiAlphabetical: string;
    mdiAlphabeticalOff: string;
    mdiAlphabeticalVariant: string;
    mdiAlphabeticalVariantOff: string;
    mdiAltimeter: string;
    mdiAmbulance: string;
    mdiAmmunition: string;
    mdiAmpersand: string;
    mdiAmplifier: string;
    mdiAmplifierOff: string;
    mdiAnchor: string;
    mdiAndroid: string;
    mdiAndroidStudio: string;
    mdiAngleAcute: string;
    mdiAngleObtuse: string;
    mdiAngleRight: string;
    mdiAngular: string;
    mdiAngularjs: string;
    mdiAnimation: string;
    mdiAnimationOutline: string;
    mdiAnimationPlay: string;
    mdiAnimationPlayOutline: string;
    mdiAnsible: string;
    mdiAntenna: string;
    mdiAnvil: string;
    mdiApacheKafka: string;
    mdiApi: string;
    mdiApiOff: string;
    mdiApple: string;
    mdiAppleFinder: string;
    mdiAppleIcloud: string;
    mdiAppleIos: string;
    mdiAppleKeyboardCaps: string;
    mdiAppleKeyboardCommand: string;
    mdiAppleKeyboardControl: string;
    mdiAppleKeyboardOption: string;
    mdiAppleKeyboardShift: string;
    mdiAppleSafari: string;
    mdiApplication: string;
    mdiApplicationArray: string;
    mdiApplicationArrayOutline: string;
    mdiApplicationBraces: string;
    mdiApplicationBracesOutline: string;
    mdiApplicationBrackets: string;
    mdiApplicationBracketsOutline: string;
    mdiApplicationCog: string;
    mdiApplicationCogOutline: string;
    mdiApplicationEdit: string;
    mdiApplicationEditOutline: string;
    mdiApplicationExport: string;
    mdiApplicationImport: string;
    mdiApplicationOutline: string;
    mdiApplicationParentheses: string;
    mdiApplicationParenthesesOutline: string;
    mdiApplicationSettings: string;
    mdiApplicationSettingsOutline: string;
    mdiApplicationVariable: string;
    mdiApplicationVariableOutline: string;
    mdiApproximatelyEqual: string;
    mdiApproximatelyEqualBox: string;
    mdiApps: string;
    mdiAppsBox: string;
    mdiArch: string;
    mdiArchive: string;
    mdiArchiveAlert: string;
    mdiArchiveAlertOutline: string;
    mdiArchiveArrowDown: string;
    mdiArchiveArrowDownOutline: string;
    mdiArchiveArrowUp: string;
    mdiArchiveArrowUpOutline: string;
    mdiArchiveCancel: string;
    mdiArchiveCancelOutline: string;
    mdiArchiveCheck: string;
    mdiArchiveCheckOutline: string;
    mdiArchiveClock: string;
    mdiArchiveClockOutline: string;
    mdiArchiveCog: string;
    mdiArchiveCogOutline: string;
    mdiArchiveEdit: string;
    mdiArchiveEditOutline: string;
    mdiArchiveEye: string;
    mdiArchiveEyeOutline: string;
    mdiArchiveLock: string;
    mdiArchiveLockOpen: string;
    mdiArchiveLockOpenOutline: string;
    mdiArchiveLockOutline: string;
    mdiArchiveMarker: string;
    mdiArchiveMarkerOutline: string;
    mdiArchiveMinus: string;
    mdiArchiveMinusOutline: string;
    mdiArchiveMusic: string;
    mdiArchiveMusicOutline: string;
    mdiArchiveOff: string;
    mdiArchiveOffOutline: string;
    mdiArchiveOutline: string;
    mdiArchivePlus: string;
    mdiArchivePlusOutline: string;
    mdiArchiveRefresh: string;
    mdiArchiveRefreshOutline: string;
    mdiArchiveRemove: string;
    mdiArchiveRemoveOutline: string;
    mdiArchiveSearch: string;
    mdiArchiveSearchOutline: string;
    mdiArchiveSettings: string;
    mdiArchiveSettingsOutline: string;
    mdiArchiveStar: string;
    mdiArchiveStarOutline: string;
    mdiArchiveSync: string;
    mdiArchiveSyncOutline: string;
    mdiArmFlex: string;
    mdiArmFlexOutline: string;
    mdiArrangeBringForward: string;
    mdiArrangeBringToFront: string;
    mdiArrangeSendBackward: string;
    mdiArrangeSendToBack: string;
    mdiArrowAll: string;
    mdiArrowBottomLeft: string;
    mdiArrowBottomLeftBoldBox: string;
    mdiArrowBottomLeftBoldBoxOutline: string;
    mdiArrowBottomLeftBoldOutline: string;
    mdiArrowBottomLeftThick: string;
    mdiArrowBottomLeftThin: string;
    mdiArrowBottomLeftThinCircleOutline: string;
    mdiArrowBottomRight: string;
    mdiArrowBottomRightBoldBox: string;
    mdiArrowBottomRightBoldBoxOutline: string;
    mdiArrowBottomRightBoldOutline: string;
    mdiArrowBottomRightThick: string;
    mdiArrowBottomRightThin: string;
    mdiArrowBottomRightThinCircleOutline: string;
    mdiArrowCollapse: string;
    mdiArrowCollapseAll: string;
    mdiArrowCollapseDown: string;
    mdiArrowCollapseHorizontal: string;
    mdiArrowCollapseLeft: string;
    mdiArrowCollapseRight: string;
    mdiArrowCollapseUp: string;
    mdiArrowCollapseVertical: string;
    mdiArrowDecision: string;
    mdiArrowDecisionAuto: string;
    mdiArrowDecisionAutoOutline: string;
    mdiArrowDecisionOutline: string;
    mdiArrowDown: string;
    mdiArrowDownBold: string;
    mdiArrowDownBoldBox: string;
    mdiArrowDownBoldBoxOutline: string;
    mdiArrowDownBoldCircle: string;
    mdiArrowDownBoldCircleOutline: string;
    mdiArrowDownBoldHexagonOutline: string;
    mdiArrowDownBoldOutline: string;
    mdiArrowDownBox: string;
    mdiArrowDownCircle: string;
    mdiArrowDownCircleOutline: string;
    mdiArrowDownDropCircle: string;
    mdiArrowDownDropCircleOutline: string;
    mdiArrowDownLeft: string;
    mdiArrowDownLeftBold: string;
    mdiArrowDownRight: string;
    mdiArrowDownRightBold: string;
    mdiArrowDownThick: string;
    mdiArrowDownThin: string;
    mdiArrowDownThinCircleOutline: string;
    mdiArrowExpand: string;
    mdiArrowExpandAll: string;
    mdiArrowExpandDown: string;
    mdiArrowExpandHorizontal: string;
    mdiArrowExpandLeft: string;
    mdiArrowExpandRight: string;
    mdiArrowExpandUp: string;
    mdiArrowExpandVertical: string;
    mdiArrowHorizontalLock: string;
    mdiArrowLeft: string;
    mdiArrowLeftBold: string;
    mdiArrowLeftBoldBox: string;
    mdiArrowLeftBoldBoxOutline: string;
    mdiArrowLeftBoldCircle: string;
    mdiArrowLeftBoldCircleOutline: string;
    mdiArrowLeftBoldHexagonOutline: string;
    mdiArrowLeftBoldOutline: string;
    mdiArrowLeftBottom: string;
    mdiArrowLeftBottomBold: string;
    mdiArrowLeftBox: string;
    mdiArrowLeftCircle: string;
    mdiArrowLeftCircleOutline: string;
    mdiArrowLeftDropCircle: string;
    mdiArrowLeftDropCircleOutline: string;
    mdiArrowLeftRight: string;
    mdiArrowLeftRightBold: string;
    mdiArrowLeftRightBoldOutline: string;
    mdiArrowLeftThick: string;
    mdiArrowLeftThin: string;
    mdiArrowLeftThinCircleOutline: string;
    mdiArrowLeftTop: string;
    mdiArrowLeftTopBold: string;
    mdiArrowOscillating: string;
    mdiArrowOscillatingOff: string;
    mdiArrowProjectile: string;
    mdiArrowProjectileMultiple: string;
    mdiArrowRight: string;
    mdiArrowRightBold: string;
    mdiArrowRightBoldBox: string;
    mdiArrowRightBoldBoxOutline: string;
    mdiArrowRightBoldCircle: string;
    mdiArrowRightBoldCircleOutline: string;
    mdiArrowRightBoldHexagonOutline: string;
    mdiArrowRightBoldOutline: string;
    mdiArrowRightBottom: string;
    mdiArrowRightBottomBold: string;
    mdiArrowRightBox: string;
    mdiArrowRightCircle: string;
    mdiArrowRightCircleOutline: string;
    mdiArrowRightDropCircle: string;
    mdiArrowRightDropCircleOutline: string;
    mdiArrowRightThick: string;
    mdiArrowRightThin: string;
    mdiArrowRightThinCircleOutline: string;
    mdiArrowRightTop: string;
    mdiArrowRightTopBold: string;
    mdiArrowSplitHorizontal: string;
    mdiArrowSplitVertical: string;
    mdiArrowTopLeft: string;
    mdiArrowTopLeftBoldBox: string;
    mdiArrowTopLeftBoldBoxOutline: string;
    mdiArrowTopLeftBoldOutline: string;
    mdiArrowTopLeftBottomRight: string;
    mdiArrowTopLeftBottomRightBold: string;
    mdiArrowTopLeftThick: string;
    mdiArrowTopLeftThin: string;
    mdiArrowTopLeftThinCircleOutline: string;
    mdiArrowTopRight: string;
    mdiArrowTopRightBoldBox: string;
    mdiArrowTopRightBoldBoxOutline: string;
    mdiArrowTopRightBoldOutline: string;
    mdiArrowTopRightBottomLeft: string;
    mdiArrowTopRightBottomLeftBold: string;
    mdiArrowTopRightThick: string;
    mdiArrowTopRightThin: string;
    mdiArrowTopRightThinCircleOutline: string;
    mdiArrowUDownLeft: string;
    mdiArrowUDownLeftBold: string;
    mdiArrowUDownRight: string;
    mdiArrowUDownRightBold: string;
    mdiArrowULeftBottom: string;
    mdiArrowULeftBottomBold: string;
    mdiArrowULeftTop: string;
    mdiArrowULeftTopBold: string;
    mdiArrowURightBottom: string;
    mdiArrowURightBottomBold: string;
    mdiArrowURightTop: string;
    mdiArrowURightTopBold: string;
    mdiArrowUUpLeft: string;
    mdiArrowUUpLeftBold: string;
    mdiArrowUUpRight: string;
    mdiArrowUUpRightBold: string;
    mdiArrowUp: string;
    mdiArrowUpBold: string;
    mdiArrowUpBoldBox: string;
    mdiArrowUpBoldBoxOutline: string;
    mdiArrowUpBoldCircle: string;
    mdiArrowUpBoldCircleOutline: string;
    mdiArrowUpBoldHexagonOutline: string;
    mdiArrowUpBoldOutline: string;
    mdiArrowUpBox: string;
    mdiArrowUpCircle: string;
    mdiArrowUpCircleOutline: string;
    mdiArrowUpDown: string;
    mdiArrowUpDownBold: string;
    mdiArrowUpDownBoldOutline: string;
    mdiArrowUpDropCircle: string;
    mdiArrowUpDropCircleOutline: string;
    mdiArrowUpLeft: string;
    mdiArrowUpLeftBold: string;
    mdiArrowUpRight: string;
    mdiArrowUpRightBold: string;
    mdiArrowUpThick: string;
    mdiArrowUpThin: string;
    mdiArrowUpThinCircleOutline: string;
    mdiArrowVerticalLock: string;
    mdiArtboard: string;
    mdiArtstation: string;
    mdiAspectRatio: string;
    mdiAssistant: string;
    mdiAsterisk: string;
    mdiAsteriskCircleOutline: string;
    mdiAt: string;
    mdiAtlassian: string;
    mdiAtm: string;
    mdiAtom: string;
    mdiAtomVariant: string;
    mdiAttachment: string;
    mdiAttachmentCheck: string;
    mdiAttachmentLock: string;
    mdiAttachmentMinus: string;
    mdiAttachmentOff: string;
    mdiAttachmentPlus: string;
    mdiAttachmentRemove: string;
    mdiAtv: string;
    mdiAudioInputRca: string;
    mdiAudioInputStereoMinijack: string;
    mdiAudioInputXlr: string;
    mdiAudioVideo: string;
    mdiAudioVideoOff: string;
    mdiAugmentedReality: string;
    mdiAurora: string;
    mdiAutoDownload: string;
    mdiAutoFix: string;
    mdiAutoMode: string;
    mdiAutoUpload: string;
    mdiAutorenew: string;
    mdiAutorenewOff: string;
    mdiAvTimer: string;
    mdiAwning: string;
    mdiAwningOutline: string;
    mdiAws: string;
    mdiAxe: string;
    mdiAxeBattle: string;
    mdiAxis: string;
    mdiAxisArrow: string;
    mdiAxisArrowInfo: string;
    mdiAxisArrowLock: string;
    mdiAxisLock: string;
    mdiAxisXArrow: string;
    mdiAxisXArrowLock: string;
    mdiAxisXRotateClockwise: string;
    mdiAxisXRotateCounterclockwise: string;
    mdiAxisXYArrowLock: string;
    mdiAxisYArrow: string;
    mdiAxisYArrowLock: string;
    mdiAxisYRotateClockwise: string;
    mdiAxisYRotateCounterclockwise: string;
    mdiAxisZArrow: string;
    mdiAxisZArrowLock: string;
    mdiAxisZRotateClockwise: string;
    mdiAxisZRotateCounterclockwise: string;
    mdiBabel: string;
    mdiBaby: string;
    mdiBabyBottle: string;
    mdiBabyBottleOutline: string;
    mdiBabyBuggy: string;
    mdiBabyBuggyOff: string;
    mdiBabyCarriage: string;
    mdiBabyCarriageOff: string;
    mdiBabyFace: string;
    mdiBabyFaceOutline: string;
    mdiBackburger: string;
    mdiBackspace: string;
    mdiBackspaceOutline: string;
    mdiBackspaceReverse: string;
    mdiBackspaceReverseOutline: string;
    mdiBackupRestore: string;
    mdiBacteria: string;
    mdiBacteriaOutline: string;
    mdiBadgeAccount: string;
    mdiBadgeAccountAlert: string;
    mdiBadgeAccountAlertOutline: string;
    mdiBadgeAccountHorizontal: string;
    mdiBadgeAccountHorizontalOutline: string;
    mdiBadgeAccountOutline: string;
    mdiBadminton: string;
    mdiBagCarryOn: string;
    mdiBagCarryOnCheck: string;
    mdiBagCarryOnOff: string;
    mdiBagChecked: string;
    mdiBagPersonal: string;
    mdiBagPersonalOff: string;
    mdiBagPersonalOffOutline: string;
    mdiBagPersonalOutline: string;
    mdiBagPersonalPlus: string;
    mdiBagPersonalPlusOutline: string;
    mdiBagPersonalTag: string;
    mdiBagPersonalTagOutline: string;
    mdiBagSuitcase: string;
    mdiBagSuitcaseOff: string;
    mdiBagSuitcaseOffOutline: string;
    mdiBagSuitcaseOutline: string;
    mdiBaguette: string;
    mdiBalcony: string;
    mdiBalloon: string;
    mdiBallot: string;
    mdiBallotOutline: string;
    mdiBallotRecount: string;
    mdiBallotRecountOutline: string;
    mdiBandage: string;
    mdiBank: string;
    mdiBankCheck: string;
    mdiBankCircle: string;
    mdiBankCircleOutline: string;
    mdiBankMinus: string;
    mdiBankOff: string;
    mdiBankOffOutline: string;
    mdiBankOutline: string;
    mdiBankPlus: string;
    mdiBankRemove: string;
    mdiBankTransfer: string;
    mdiBankTransferIn: string;
    mdiBankTransferOut: string;
    mdiBarcode: string;
    mdiBarcodeOff: string;
    mdiBarcodeScan: string;
    mdiBarley: string;
    mdiBarleyOff: string;
    mdiBarn: string;
    mdiBarrel: string;
    mdiBarrelOutline: string;
    mdiBaseball: string;
    mdiBaseballBat: string;
    mdiBaseballDiamond: string;
    mdiBaseballDiamondOutline: string;
    mdiBaseballOutline: string;
    mdiBash: string;
    mdiBasket: string;
    mdiBasketCheck: string;
    mdiBasketCheckOutline: string;
    mdiBasketFill: string;
    mdiBasketMinus: string;
    mdiBasketMinusOutline: string;
    mdiBasketOff: string;
    mdiBasketOffOutline: string;
    mdiBasketOutline: string;
    mdiBasketPlus: string;
    mdiBasketPlusOutline: string;
    mdiBasketRemove: string;
    mdiBasketRemoveOutline: string;
    mdiBasketUnfill: string;
    mdiBasketball: string;
    mdiBasketballHoop: string;
    mdiBasketballHoopOutline: string;
    mdiBat: string;
    mdiBathtub: string;
    mdiBathtubOutline: string;
    mdiBattery: string;
    mdiBattery10: string;
    mdiBattery10Bluetooth: string;
    mdiBattery20: string;
    mdiBattery20Bluetooth: string;
    mdiBattery30: string;
    mdiBattery30Bluetooth: string;
    mdiBattery40: string;
    mdiBattery40Bluetooth: string;
    mdiBattery50: string;
    mdiBattery50Bluetooth: string;
    mdiBattery60: string;
    mdiBattery60Bluetooth: string;
    mdiBattery70: string;
    mdiBattery70Bluetooth: string;
    mdiBattery80: string;
    mdiBattery80Bluetooth: string;
    mdiBattery90: string;
    mdiBattery90Bluetooth: string;
    mdiBatteryAlert: string;
    mdiBatteryAlertBluetooth: string;
    mdiBatteryAlertVariant: string;
    mdiBatteryAlertVariantOutline: string;
    mdiBatteryArrowDown: string;
    mdiBatteryArrowDownOutline: string;
    mdiBatteryArrowUp: string;
    mdiBatteryArrowUpOutline: string;
    mdiBatteryBluetooth: string;
    mdiBatteryBluetoothVariant: string;
    mdiBatteryCharging: string;
    mdiBatteryCharging10: string;
    mdiBatteryCharging100: string;
    mdiBatteryCharging20: string;
    mdiBatteryCharging30: string;
    mdiBatteryCharging40: string;
    mdiBatteryCharging50: string;
    mdiBatteryCharging60: string;
    mdiBatteryCharging70: string;
    mdiBatteryCharging80: string;
    mdiBatteryCharging90: string;
    mdiBatteryChargingHigh: string;
    mdiBatteryChargingLow: string;
    mdiBatteryChargingMedium: string;
    mdiBatteryChargingOutline: string;
    mdiBatteryChargingWireless: string;
    mdiBatteryChargingWireless10: string;
    mdiBatteryChargingWireless20: string;
    mdiBatteryChargingWireless30: string;
    mdiBatteryChargingWireless40: string;
    mdiBatteryChargingWireless50: string;
    mdiBatteryChargingWireless60: string;
    mdiBatteryChargingWireless70: string;
    mdiBatteryChargingWireless80: string;
    mdiBatteryChargingWireless90: string;
    mdiBatteryChargingWirelessAlert: string;
    mdiBatteryChargingWirelessOutline: string;
    mdiBatteryCheck: string;
    mdiBatteryCheckOutline: string;
    mdiBatteryClock: string;
    mdiBatteryClockOutline: string;
    mdiBatteryHeart: string;
    mdiBatteryHeartOutline: string;
    mdiBatteryHeartVariant: string;
    mdiBatteryHigh: string;
    mdiBatteryLock: string;
    mdiBatteryLockOpen: string;
    mdiBatteryLow: string;
    mdiBatteryMedium: string;
    mdiBatteryMinus: string;
    mdiBatteryMinusOutline: string;
    mdiBatteryMinusVariant: string;
    mdiBatteryNegative: string;
    mdiBatteryOff: string;
    mdiBatteryOffOutline: string;
    mdiBatteryOutline: string;
    mdiBatteryPlus: string;
    mdiBatteryPlusOutline: string;
    mdiBatteryPlusVariant: string;
    mdiBatteryPositive: string;
    mdiBatteryRemove: string;
    mdiBatteryRemoveOutline: string;
    mdiBatterySync: string;
    mdiBatterySyncOutline: string;
    mdiBatteryUnknown: string;
    mdiBatteryUnknownBluetooth: string;
    mdiBeach: string;
    mdiBeaker: string;
    mdiBeakerAlert: string;
    mdiBeakerAlertOutline: string;
    mdiBeakerCheck: string;
    mdiBeakerCheckOutline: string;
    mdiBeakerMinus: string;
    mdiBeakerMinusOutline: string;
    mdiBeakerOutline: string;
    mdiBeakerPlus: string;
    mdiBeakerPlusOutline: string;
    mdiBeakerQuestion: string;
    mdiBeakerQuestionOutline: string;
    mdiBeakerRemove: string;
    mdiBeakerRemoveOutline: string;
    mdiBed: string;
    mdiBedClock: string;
    mdiBedDouble: string;
    mdiBedDoubleOutline: string;
    mdiBedEmpty: string;
    mdiBedKing: string;
    mdiBedKingOutline: string;
    mdiBedOutline: string;
    mdiBedQueen: string;
    mdiBedQueenOutline: string;
    mdiBedSingle: string;
    mdiBedSingleOutline: string;
    mdiBee: string;
    mdiBeeFlower: string;
    mdiBeehiveOffOutline: string;
    mdiBeehiveOutline: string;
    mdiBeekeeper: string;
    mdiBeer: string;
    mdiBeerOutline: string;
    mdiBell: string;
    mdiBellAlert: string;
    mdiBellAlertOutline: string;
    mdiBellBadge: string;
    mdiBellBadgeOutline: string;
    mdiBellCancel: string;
    mdiBellCancelOutline: string;
    mdiBellCheck: string;
    mdiBellCheckOutline: string;
    mdiBellCircle: string;
    mdiBellCircleOutline: string;
    mdiBellCog: string;
    mdiBellCogOutline: string;
    mdiBellMinus: string;
    mdiBellMinusOutline: string;
    mdiBellOff: string;
    mdiBellOffOutline: string;
    mdiBellOutline: string;
    mdiBellPlus: string;
    mdiBellPlusOutline: string;
    mdiBellRemove: string;
    mdiBellRemoveOutline: string;
    mdiBellRing: string;
    mdiBellRingOutline: string;
    mdiBellSleep: string;
    mdiBellSleepOutline: string;
    mdiBench: string;
    mdiBenchBack: string;
    mdiBeta: string;
    mdiBetamax: string;
    mdiBiathlon: string;
    mdiBicycle: string;
    mdiBicycleBasket: string;
    mdiBicycleCargo: string;
    mdiBicycleElectric: string;
    mdiBicyclePennyFarthing: string;
    mdiBike: string;
    mdiBikeFast: string;
    mdiBikePedal: string;
    mdiBikePedalClipless: string;
    mdiBikePedalMountain: string;
    mdiBillboard: string;
    mdiBilliards: string;
    mdiBilliardsRack: string;
    mdiBinoculars: string;
    mdiBio: string;
    mdiBiohazard: string;
    mdiBird: string;
    mdiBitbucket: string;
    mdiBitcoin: string;
    mdiBlackMesa: string;
    mdiBlender: string;
    mdiBlenderOutline: string;
    mdiBlenderSoftware: string;
    mdiBlinds: string;
    mdiBlindsHorizontal: string;
    mdiBlindsHorizontalClosed: string;
    mdiBlindsOpen: string;
    mdiBlindsVertical: string;
    mdiBlindsVerticalClosed: string;
    mdiBlockHelper: string;
    mdiBloodBag: string;
    mdiBluetooth: string;
    mdiBluetoothAudio: string;
    mdiBluetoothConnect: string;
    mdiBluetoothOff: string;
    mdiBluetoothSettings: string;
    mdiBluetoothTransfer: string;
    mdiBlur: string;
    mdiBlurLinear: string;
    mdiBlurOff: string;
    mdiBlurRadial: string;
    mdiBolt: string;
    mdiBomb: string;
    mdiBombOff: string;
    mdiBone: string;
    mdiBoneOff: string;
    mdiBook: string;
    mdiBookAccount: string;
    mdiBookAccountOutline: string;
    mdiBookAlert: string;
    mdiBookAlertOutline: string;
    mdiBookAlphabet: string;
    mdiBookArrowDown: string;
    mdiBookArrowDownOutline: string;
    mdiBookArrowLeft: string;
    mdiBookArrowLeftOutline: string;
    mdiBookArrowRight: string;
    mdiBookArrowRightOutline: string;
    mdiBookArrowUp: string;
    mdiBookArrowUpOutline: string;
    mdiBookCancel: string;
    mdiBookCancelOutline: string;
    mdiBookCheck: string;
    mdiBookCheckOutline: string;
    mdiBookClock: string;
    mdiBookClockOutline: string;
    mdiBookCog: string;
    mdiBookCogOutline: string;
    mdiBookCross: string;
    mdiBookEdit: string;
    mdiBookEditOutline: string;
    mdiBookEducation: string;
    mdiBookEducationOutline: string;
    mdiBookHeart: string;
    mdiBookHeartOutline: string;
    mdiBookInformationVariant: string;
    mdiBookLock: string;
    mdiBookLockOpen: string;
    mdiBookLockOpenOutline: string;
    mdiBookLockOutline: string;
    mdiBookMarker: string;
    mdiBookMarkerOutline: string;
    mdiBookMinus: string;
    mdiBookMinusMultiple: string;
    mdiBookMinusMultipleOutline: string;
    mdiBookMinusOutline: string;
    mdiBookMultiple: string;
    mdiBookMultipleOutline: string;
    mdiBookMusic: string;
    mdiBookMusicOutline: string;
    mdiBookOff: string;
    mdiBookOffOutline: string;
    mdiBookOpen: string;
    mdiBookOpenBlankVariant: string;
    mdiBookOpenBlankVariantOutline: string;
    mdiBookOpenOutline: string;
    mdiBookOpenPageVariant: string;
    mdiBookOpenPageVariantOutline: string;
    mdiBookOpenVariant: string;
    mdiBookOpenVariantOutline: string;
    mdiBookOutline: string;
    mdiBookPlay: string;
    mdiBookPlayOutline: string;
    mdiBookPlus: string;
    mdiBookPlusMultiple: string;
    mdiBookPlusMultipleOutline: string;
    mdiBookPlusOutline: string;
    mdiBookRefresh: string;
    mdiBookRefreshOutline: string;
    mdiBookRemove: string;
    mdiBookRemoveMultiple: string;
    mdiBookRemoveMultipleOutline: string;
    mdiBookRemoveOutline: string;
    mdiBookSearch: string;
    mdiBookSearchOutline: string;
    mdiBookSettings: string;
    mdiBookSettingsOutline: string;
    mdiBookSync: string;
    mdiBookSyncOutline: string;
    mdiBookVariant: string;
    mdiBookmark: string;
    mdiBookmarkBox: string;
    mdiBookmarkBoxMultiple: string;
    mdiBookmarkBoxMultipleOutline: string;
    mdiBookmarkBoxOutline: string;
    mdiBookmarkCheck: string;
    mdiBookmarkCheckOutline: string;
    mdiBookmarkMinus: string;
    mdiBookmarkMinusOutline: string;
    mdiBookmarkMultiple: string;
    mdiBookmarkMultipleOutline: string;
    mdiBookmarkMusic: string;
    mdiBookmarkMusicOutline: string;
    mdiBookmarkOff: string;
    mdiBookmarkOffOutline: string;
    mdiBookmarkOutline: string;
    mdiBookmarkPlus: string;
    mdiBookmarkPlusOutline: string;
    mdiBookmarkRemove: string;
    mdiBookmarkRemoveOutline: string;
    mdiBookshelf: string;
    mdiBoomGate: string;
    mdiBoomGateAlert: string;
    mdiBoomGateAlertOutline: string;
    mdiBoomGateArrowDown: string;
    mdiBoomGateArrowDownOutline: string;
    mdiBoomGateArrowUp: string;
    mdiBoomGateArrowUpOutline: string;
    mdiBoomGateOutline: string;
    mdiBoomGateUp: string;
    mdiBoomGateUpOutline: string;
    mdiBoombox: string;
    mdiBoomerang: string;
    mdiBootstrap: string;
    mdiBorderAll: string;
    mdiBorderAllVariant: string;
    mdiBorderBottom: string;
    mdiBorderBottomVariant: string;
    mdiBorderColor: string;
    mdiBorderHorizontal: string;
    mdiBorderInside: string;
    mdiBorderLeft: string;
    mdiBorderLeftVariant: string;
    mdiBorderNone: string;
    mdiBorderNoneVariant: string;
    mdiBorderOutside: string;
    mdiBorderRadius: string;
    mdiBorderRight: string;
    mdiBorderRightVariant: string;
    mdiBorderStyle: string;
    mdiBorderTop: string;
    mdiBorderTopVariant: string;
    mdiBorderVertical: string;
    mdiBottleSoda: string;
    mdiBottleSodaClassic: string;
    mdiBottleSodaClassicOutline: string;
    mdiBottleSodaOutline: string;
    mdiBottleTonic: string;
    mdiBottleTonicOutline: string;
    mdiBottleTonicPlus: string;
    mdiBottleTonicPlusOutline: string;
    mdiBottleTonicSkull: string;
    mdiBottleTonicSkullOutline: string;
    mdiBottleWine: string;
    mdiBottleWineOutline: string;
    mdiBowArrow: string;
    mdiBowTie: string;
    mdiBowl: string;
    mdiBowlMix: string;
    mdiBowlMixOutline: string;
    mdiBowlOutline: string;
    mdiBowling: string;
    mdiBox: string;
    mdiBoxCutter: string;
    mdiBoxCutterOff: string;
    mdiBoxShadow: string;
    mdiBoxingGlove: string;
    mdiBraille: string;
    mdiBrain: string;
    mdiBreadSlice: string;
    mdiBreadSliceOutline: string;
    mdiBridge: string;
    mdiBriefcase: string;
    mdiBriefcaseAccount: string;
    mdiBriefcaseAccountOutline: string;
    mdiBriefcaseArrowLeftRight: string;
    mdiBriefcaseArrowLeftRightOutline: string;
    mdiBriefcaseArrowUpDown: string;
    mdiBriefcaseArrowUpDownOutline: string;
    mdiBriefcaseCheck: string;
    mdiBriefcaseCheckOutline: string;
    mdiBriefcaseClock: string;
    mdiBriefcaseClockOutline: string;
    mdiBriefcaseDownload: string;
    mdiBriefcaseDownloadOutline: string;
    mdiBriefcaseEdit: string;
    mdiBriefcaseEditOutline: string;
    mdiBriefcaseEye: string;
    mdiBriefcaseEyeOutline: string;
    mdiBriefcaseMinus: string;
    mdiBriefcaseMinusOutline: string;
    mdiBriefcaseOff: string;
    mdiBriefcaseOffOutline: string;
    mdiBriefcaseOutline: string;
    mdiBriefcasePlus: string;
    mdiBriefcasePlusOutline: string;
    mdiBriefcaseRemove: string;
    mdiBriefcaseRemoveOutline: string;
    mdiBriefcaseSearch: string;
    mdiBriefcaseSearchOutline: string;
    mdiBriefcaseUpload: string;
    mdiBriefcaseUploadOutline: string;
    mdiBriefcaseVariant: string;
    mdiBriefcaseVariantOff: string;
    mdiBriefcaseVariantOffOutline: string;
    mdiBriefcaseVariantOutline: string;
    mdiBrightness1: string;
    mdiBrightness2: string;
    mdiBrightness3: string;
    mdiBrightness4: string;
    mdiBrightness5: string;
    mdiBrightness6: string;
    mdiBrightness7: string;
    mdiBrightnessAuto: string;
    mdiBrightnessPercent: string;
    mdiBroadcast: string;
    mdiBroadcastOff: string;
    mdiBroom: string;
    mdiBrush: string;
    mdiBrushOff: string;
    mdiBrushOutline: string;
    mdiBrushVariant: string;
    mdiBucket: string;
    mdiBucketOutline: string;
    mdiBuffet: string;
    mdiBug: string;
    mdiBugCheck: string;
    mdiBugCheckOutline: string;
    mdiBugOutline: string;
    mdiBugPause: string;
    mdiBugPauseOutline: string;
    mdiBugPlay: string;
    mdiBugPlayOutline: string;
    mdiBugStop: string;
    mdiBugStopOutline: string;
    mdiBugle: string;
    mdiBulkheadLight: string;
    mdiBulldozer: string;
    mdiBullet: string;
    mdiBulletinBoard: string;
    mdiBullhorn: string;
    mdiBullhornOutline: string;
    mdiBullhornVariant: string;
    mdiBullhornVariantOutline: string;
    mdiBullseye: string;
    mdiBullseyeArrow: string;
    mdiBulma: string;
    mdiBunkBed: string;
    mdiBunkBedOutline: string;
    mdiBus: string;
    mdiBusAlert: string;
    mdiBusArticulatedEnd: string;
    mdiBusArticulatedFront: string;
    mdiBusClock: string;
    mdiBusDoubleDecker: string;
    mdiBusElectric: string;
    mdiBusMarker: string;
    mdiBusMultiple: string;
    mdiBusSchool: string;
    mdiBusSide: string;
    mdiBusSign: string;
    mdiBusStop: string;
    mdiBusStopCovered: string;
    mdiBusStopUncovered: string;
    mdiBusWrench: string;
    mdiButterfly: string;
    mdiButterflyOutline: string;
    mdiButtonCursor: string;
    mdiButtonPointer: string;
    mdiCabinAFrame: string;
    mdiCableData: string;
    mdiCached: string;
    mdiCactus: string;
    mdiCake: string;
    mdiCakeLayered: string;
    mdiCakeVariant: string;
    mdiCakeVariantOutline: string;
    mdiCalculator: string;
    mdiCalculatorVariant: string;
    mdiCalculatorVariantOutline: string;
    mdiCalendar: string;
    mdiCalendarAccount: string;
    mdiCalendarAccountOutline: string;
    mdiCalendarAlert: string;
    mdiCalendarAlertOutline: string;
    mdiCalendarArrowLeft: string;
    mdiCalendarArrowRight: string;
    mdiCalendarBadge: string;
    mdiCalendarBadgeOutline: string;
    mdiCalendarBlank: string;
    mdiCalendarBlankMultiple: string;
    mdiCalendarBlankOutline: string;
    mdiCalendarCheck: string;
    mdiCalendarCheckOutline: string;
    mdiCalendarClock: string;
    mdiCalendarClockOutline: string;
    mdiCalendarCollapseHorizontal: string;
    mdiCalendarCollapseHorizontalOutline: string;
    mdiCalendarCursor: string;
    mdiCalendarCursorOutline: string;
    mdiCalendarEdit: string;
    mdiCalendarEditOutline: string;
    mdiCalendarEnd: string;
    mdiCalendarEndOutline: string;
    mdiCalendarExpandHorizontal: string;
    mdiCalendarExpandHorizontalOutline: string;
    mdiCalendarExport: string;
    mdiCalendarExportOutline: string;
    mdiCalendarFilter: string;
    mdiCalendarFilterOutline: string;
    mdiCalendarHeart: string;
    mdiCalendarHeartOutline: string;
    mdiCalendarImport: string;
    mdiCalendarImportOutline: string;
    mdiCalendarLock: string;
    mdiCalendarLockOpen: string;
    mdiCalendarLockOpenOutline: string;
    mdiCalendarLockOutline: string;
    mdiCalendarMinus: string;
    mdiCalendarMinusOutline: string;
    mdiCalendarMonth: string;
    mdiCalendarMonthOutline: string;
    mdiCalendarMultiple: string;
    mdiCalendarMultipleCheck: string;
    mdiCalendarMultiselect: string;
    mdiCalendarMultiselectOutline: string;
    mdiCalendarOutline: string;
    mdiCalendarPlus: string;
    mdiCalendarPlusOutline: string;
    mdiCalendarQuestion: string;
    mdiCalendarQuestionOutline: string;
    mdiCalendarRange: string;
    mdiCalendarRangeOutline: string;
    mdiCalendarRefresh: string;
    mdiCalendarRefreshOutline: string;
    mdiCalendarRemove: string;
    mdiCalendarRemoveOutline: string;
    mdiCalendarSearch: string;
    mdiCalendarSearchOutline: string;
    mdiCalendarStar: string;
    mdiCalendarStarFourPoints: string;
    mdiCalendarStarOutline: string;
    mdiCalendarStart: string;
    mdiCalendarStartOutline: string;
    mdiCalendarSync: string;
    mdiCalendarSyncOutline: string;
    mdiCalendarText: string;
    mdiCalendarTextOutline: string;
    mdiCalendarToday: string;
    mdiCalendarTodayOutline: string;
    mdiCalendarWeek: string;
    mdiCalendarWeekBegin: string;
    mdiCalendarWeekBeginOutline: string;
    mdiCalendarWeekOutline: string;
    mdiCalendarWeekend: string;
    mdiCalendarWeekendOutline: string;
    mdiCallMade: string;
    mdiCallMerge: string;
    mdiCallMissed: string;
    mdiCallReceived: string;
    mdiCallSplit: string;
    mdiCamcorder: string;
    mdiCamcorderOff: string;
    mdiCamera: string;
    mdiCameraAccount: string;
    mdiCameraBurst: string;
    mdiCameraControl: string;
    mdiCameraDocument: string;
    mdiCameraDocumentOff: string;
    mdiCameraEnhance: string;
    mdiCameraEnhanceOutline: string;
    mdiCameraFlip: string;
    mdiCameraFlipOutline: string;
    mdiCameraFront: string;
    mdiCameraFrontVariant: string;
    mdiCameraGopro: string;
    mdiCameraImage: string;
    mdiCameraIris: string;
    mdiCameraLock: string;
    mdiCameraLockOpen: string;
    mdiCameraLockOpenOutline: string;
    mdiCameraLockOutline: string;
    mdiCameraMarker: string;
    mdiCameraMarkerOutline: string;
    mdiCameraMeteringCenter: string;
    mdiCameraMeteringMatrix: string;
    mdiCameraMeteringPartial: string;
    mdiCameraMeteringSpot: string;
    mdiCameraOff: string;
    mdiCameraOffOutline: string;
    mdiCameraOutline: string;
    mdiCameraPartyMode: string;
    mdiCameraPlus: string;
    mdiCameraPlusOutline: string;
    mdiCameraRear: string;
    mdiCameraRearVariant: string;
    mdiCameraRetake: string;
    mdiCameraRetakeOutline: string;
    mdiCameraSwitch: string;
    mdiCameraSwitchOutline: string;
    mdiCameraTimer: string;
    mdiCameraWireless: string;
    mdiCameraWirelessOutline: string;
    mdiCampfire: string;
    mdiCancel: string;
    mdiCandelabra: string;
    mdiCandelabraFire: string;
    mdiCandle: string;
    mdiCandy: string;
    mdiCandyOff: string;
    mdiCandyOffOutline: string;
    mdiCandyOutline: string;
    mdiCandycane: string;
    mdiCannabis: string;
    mdiCannabisOff: string;
    mdiCapsLock: string;
    mdiCar: string;
    mdiCar2Plus: string;
    mdiCar3Plus: string;
    mdiCarArrowLeft: string;
    mdiCarArrowRight: string;
    mdiCarBack: string;
    mdiCarBattery: string;
    mdiCarBrakeAbs: string;
    mdiCarBrakeAlert: string;
    mdiCarBrakeFluidLevel: string;
    mdiCarBrakeHold: string;
    mdiCarBrakeLowPressure: string;
    mdiCarBrakeParking: string;
    mdiCarBrakeRetarder: string;
    mdiCarBrakeTemperature: string;
    mdiCarBrakeWornLinings: string;
    mdiCarChildSeat: string;
    mdiCarClock: string;
    mdiCarClutch: string;
    mdiCarCog: string;
    mdiCarConnected: string;
    mdiCarConvertible: string;
    mdiCarCoolantLevel: string;
    mdiCarCruiseControl: string;
    mdiCarDefrostFront: string;
    mdiCarDefrostRear: string;
    mdiCarDoor: string;
    mdiCarDoorLock: string;
    mdiCarDoorLockOpen: string;
    mdiCarElectric: string;
    mdiCarElectricOutline: string;
    mdiCarEmergency: string;
    mdiCarEsp: string;
    mdiCarEstate: string;
    mdiCarHatchback: string;
    mdiCarInfo: string;
    mdiCarKey: string;
    mdiCarLiftedPickup: string;
    mdiCarLightAlert: string;
    mdiCarLightDimmed: string;
    mdiCarLightFog: string;
    mdiCarLightHigh: string;
    mdiCarLimousine: string;
    mdiCarMultiple: string;
    mdiCarOff: string;
    mdiCarOutline: string;
    mdiCarParkingLights: string;
    mdiCarPickup: string;
    mdiCarSearch: string;
    mdiCarSearchOutline: string;
    mdiCarSeat: string;
    mdiCarSeatCooler: string;
    mdiCarSeatHeater: string;
    mdiCarSelect: string;
    mdiCarSettings: string;
    mdiCarShiftPattern: string;
    mdiCarSide: string;
    mdiCarSpeedLimiter: string;
    mdiCarSports: string;
    mdiCarTireAlert: string;
    mdiCarTractionControl: string;
    mdiCarTurbocharger: string;
    mdiCarWash: string;
    mdiCarWindshield: string;
    mdiCarWindshieldOutline: string;
    mdiCarWireless: string;
    mdiCarWrench: string;
    mdiCarabiner: string;
    mdiCaravan: string;
    mdiCard: string;
    mdiCardAccountDetails: string;
    mdiCardAccountDetailsOutline: string;
    mdiCardAccountDetailsStar: string;
    mdiCardAccountDetailsStarOutline: string;
    mdiCardAccountMail: string;
    mdiCardAccountMailOutline: string;
    mdiCardAccountPhone: string;
    mdiCardAccountPhoneOutline: string;
    mdiCardBulleted: string;
    mdiCardBulletedOff: string;
    mdiCardBulletedOffOutline: string;
    mdiCardBulletedOutline: string;
    mdiCardBulletedSettings: string;
    mdiCardBulletedSettingsOutline: string;
    mdiCardMinus: string;
    mdiCardMinusOutline: string;
    mdiCardMultiple: string;
    mdiCardMultipleOutline: string;
    mdiCardOff: string;
    mdiCardOffOutline: string;
    mdiCardOutline: string;
    mdiCardPlus: string;
    mdiCardPlusOutline: string;
    mdiCardRemove: string;
    mdiCardRemoveOutline: string;
    mdiCardSearch: string;
    mdiCardSearchOutline: string;
    mdiCardText: string;
    mdiCardTextOutline: string;
    mdiCards: string;
    mdiCardsClub: string;
    mdiCardsClubOutline: string;
    mdiCardsDiamond: string;
    mdiCardsDiamondOutline: string;
    mdiCardsHeart: string;
    mdiCardsHeartOutline: string;
    mdiCardsOutline: string;
    mdiCardsPlaying: string;
    mdiCardsPlayingClub: string;
    mdiCardsPlayingClubMultiple: string;
    mdiCardsPlayingClubMultipleOutline: string;
    mdiCardsPlayingClubOutline: string;
    mdiCardsPlayingDiamond: string;
    mdiCardsPlayingDiamondMultiple: string;
    mdiCardsPlayingDiamondMultipleOutline: string;
    mdiCardsPlayingDiamondOutline: string;
    mdiCardsPlayingHeart: string;
    mdiCardsPlayingHeartMultiple: string;
    mdiCardsPlayingHeartMultipleOutline: string;
    mdiCardsPlayingHeartOutline: string;
    mdiCardsPlayingOutline: string;
    mdiCardsPlayingSpade: string;
    mdiCardsPlayingSpadeMultiple: string;
    mdiCardsPlayingSpadeMultipleOutline: string;
    mdiCardsPlayingSpadeOutline: string;
    mdiCardsSpade: string;
    mdiCardsSpadeOutline: string;
    mdiCardsVariant: string;
    mdiCarrot: string;
    mdiCart: string;
    mdiCartArrowDown: string;
    mdiCartArrowRight: string;
    mdiCartArrowUp: string;
    mdiCartCheck: string;
    mdiCartHeart: string;
    mdiCartMinus: string;
    mdiCartOff: string;
    mdiCartOutline: string;
    mdiCartPercent: string;
    mdiCartPlus: string;
    mdiCartRemove: string;
    mdiCartVariant: string;
    mdiCaseSensitiveAlt: string;
    mdiCash: string;
    mdiCash100: string;
    mdiCashCheck: string;
    mdiCashClock: string;
    mdiCashEdit: string;
    mdiCashFast: string;
    mdiCashLock: string;
    mdiCashLockOpen: string;
    mdiCashMarker: string;
    mdiCashMinus: string;
    mdiCashMultiple: string;
    mdiCashOff: string;
    mdiCashPlus: string;
    mdiCashRefund: string;
    mdiCashRegister: string;
    mdiCashRemove: string;
    mdiCashSync: string;
    mdiCassette: string;
    mdiCast: string;
    mdiCastAudio: string;
    mdiCastAudioVariant: string;
    mdiCastConnected: string;
    mdiCastEducation: string;
    mdiCastOff: string;
    mdiCastVariant: string;
    mdiCastle: string;
    mdiCat: string;
    mdiCctv: string;
    mdiCctvOff: string;
    mdiCeilingFan: string;
    mdiCeilingFanLight: string;
    mdiCeilingLight: string;
    mdiCeilingLightMultiple: string;
    mdiCeilingLightMultipleOutline: string;
    mdiCeilingLightOutline: string;
    mdiCellphone: string;
    mdiCellphoneArrowDown: string;
    mdiCellphoneArrowDownVariant: string;
    mdiCellphoneBasic: string;
    mdiCellphoneCharging: string;
    mdiCellphoneCheck: string;
    mdiCellphoneCog: string;
    mdiCellphoneDock: string;
    mdiCellphoneInformation: string;
    mdiCellphoneKey: string;
    mdiCellphoneLink: string;
    mdiCellphoneLinkOff: string;
    mdiCellphoneLock: string;
    mdiCellphoneMarker: string;
    mdiCellphoneMessage: string;
    mdiCellphoneMessageOff: string;
    mdiCellphoneNfc: string;
    mdiCellphoneNfcOff: string;
    mdiCellphoneOff: string;
    mdiCellphonePlay: string;
    mdiCellphoneRemove: string;
    mdiCellphoneScreenshot: string;
    mdiCellphoneSettings: string;
    mdiCellphoneSound: string;
    mdiCellphoneText: string;
    mdiCellphoneWireless: string;
    mdiCentos: string;
    mdiCertificate: string;
    mdiCertificateOutline: string;
    mdiChairRolling: string;
    mdiChairSchool: string;
    mdiChandelier: string;
    mdiCharity: string;
    mdiCharitySearch: string;
    mdiChartArc: string;
    mdiChartAreaspline: string;
    mdiChartAreasplineVariant: string;
    mdiChartBar: string;
    mdiChartBarStacked: string;
    mdiChartBellCurve: string;
    mdiChartBellCurveCumulative: string;
    mdiChartBox: string;
    mdiChartBoxMultiple: string;
    mdiChartBoxMultipleOutline: string;
    mdiChartBoxOutline: string;
    mdiChartBoxPlusOutline: string;
    mdiChartBubble: string;
    mdiChartDonut: string;
    mdiChartDonutVariant: string;
    mdiChartGantt: string;
    mdiChartHistogram: string;
    mdiChartLine: string;
    mdiChartLineStacked: string;
    mdiChartLineVariant: string;
    mdiChartMultiline: string;
    mdiChartMultiple: string;
    mdiChartPie: string;
    mdiChartPieOutline: string;
    mdiChartPpf: string;
    mdiChartSankey: string;
    mdiChartSankeyVariant: string;
    mdiChartScatterPlot: string;
    mdiChartScatterPlotHexbin: string;
    mdiChartTimeline: string;
    mdiChartTimelineVariant: string;
    mdiChartTimelineVariantShimmer: string;
    mdiChartTree: string;
    mdiChartWaterfall: string;
    mdiChat: string;
    mdiChatAlert: string;
    mdiChatAlertOutline: string;
    mdiChatMinus: string;
    mdiChatMinusOutline: string;
    mdiChatOutline: string;
    mdiChatPlus: string;
    mdiChatPlusOutline: string;
    mdiChatProcessing: string;
    mdiChatProcessingOutline: string;
    mdiChatQuestion: string;
    mdiChatQuestionOutline: string;
    mdiChatRemove: string;
    mdiChatRemoveOutline: string;
    mdiChatSleep: string;
    mdiChatSleepOutline: string;
    mdiCheck: string;
    mdiCheckAll: string;
    mdiCheckBold: string;
    mdiCheckCircle: string;
    mdiCheckCircleOutline: string;
    mdiCheckDecagram: string;
    mdiCheckDecagramOutline: string;
    mdiCheckNetwork: string;
    mdiCheckNetworkOutline: string;
    mdiCheckOutline: string;
    mdiCheckUnderline: string;
    mdiCheckUnderlineCircle: string;
    mdiCheckUnderlineCircleOutline: string;
    mdiCheckbook: string;
    mdiCheckbookArrowLeft: string;
    mdiCheckbookArrowRight: string;
    mdiCheckboxBlank: string;
    mdiCheckboxBlankBadge: string;
    mdiCheckboxBlankBadgeOutline: string;
    mdiCheckboxBlankCircle: string;
    mdiCheckboxBlankCircleOutline: string;
    mdiCheckboxBlankOff: string;
    mdiCheckboxBlankOffOutline: string;
    mdiCheckboxBlankOutline: string;
    mdiCheckboxIntermediate: string;
    mdiCheckboxIntermediateVariant: string;
    mdiCheckboxMarked: string;
    mdiCheckboxMarkedCircle: string;
    mdiCheckboxMarkedCircleAutoOutline: string;
    mdiCheckboxMarkedCircleMinusOutline: string;
    mdiCheckboxMarkedCircleOutline: string;
    mdiCheckboxMarkedCirclePlusOutline: string;
    mdiCheckboxMarkedOutline: string;
    mdiCheckboxMultipleBlank: string;
    mdiCheckboxMultipleBlankCircle: string;
    mdiCheckboxMultipleBlankCircleOutline: string;
    mdiCheckboxMultipleBlankOutline: string;
    mdiCheckboxMultipleMarked: string;
    mdiCheckboxMultipleMarkedCircle: string;
    mdiCheckboxMultipleMarkedCircleOutline: string;
    mdiCheckboxMultipleMarkedOutline: string;
    mdiCheckboxMultipleOutline: string;
    mdiCheckboxOutline: string;
    mdiCheckerboard: string;
    mdiCheckerboardMinus: string;
    mdiCheckerboardPlus: string;
    mdiCheckerboardRemove: string;
    mdiCheese: string;
    mdiCheeseOff: string;
    mdiChefHat: string;
    mdiChemicalWeapon: string;
    mdiChessBishop: string;
    mdiChessKing: string;
    mdiChessKnight: string;
    mdiChessPawn: string;
    mdiChessQueen: string;
    mdiChessRook: string;
    mdiChevronDoubleDown: string;
    mdiChevronDoubleLeft: string;
    mdiChevronDoubleRight: string;
    mdiChevronDoubleUp: string;
    mdiChevronDown: string;
    mdiChevronDownBox: string;
    mdiChevronDownBoxOutline: string;
    mdiChevronDownCircle: string;
    mdiChevronDownCircleOutline: string;
    mdiChevronLeft: string;
    mdiChevronLeftBox: string;
    mdiChevronLeftBoxOutline: string;
    mdiChevronLeftCircle: string;
    mdiChevronLeftCircleOutline: string;
    mdiChevronRight: string;
    mdiChevronRightBox: string;
    mdiChevronRightBoxOutline: string;
    mdiChevronRightCircle: string;
    mdiChevronRightCircleOutline: string;
    mdiChevronTripleDown: string;
    mdiChevronTripleLeft: string;
    mdiChevronTripleRight: string;
    mdiChevronTripleUp: string;
    mdiChevronUp: string;
    mdiChevronUpBox: string;
    mdiChevronUpBoxOutline: string;
    mdiChevronUpCircle: string;
    mdiChevronUpCircleOutline: string;
    mdiChiliAlert: string;
    mdiChiliAlertOutline: string;
    mdiChiliHot: string;
    mdiChiliHotOutline: string;
    mdiChiliMedium: string;
    mdiChiliMediumOutline: string;
    mdiChiliMild: string;
    mdiChiliMildOutline: string;
    mdiChiliOff: string;
    mdiChiliOffOutline: string;
    mdiChip: string;
    mdiChurch: string;
    mdiChurchOutline: string;
    mdiCigar: string;
    mdiCigarOff: string;
    mdiCircle: string;
    mdiCircleBox: string;
    mdiCircleBoxOutline: string;
    mdiCircleDouble: string;
    mdiCircleEditOutline: string;
    mdiCircleExpand: string;
    mdiCircleHalf: string;
    mdiCircleHalfFull: string;
    mdiCircleMedium: string;
    mdiCircleMultiple: string;
    mdiCircleMultipleOutline: string;
    mdiCircleOffOutline: string;
    mdiCircleOpacity: string;
    mdiCircleOutline: string;
    mdiCircleSlice1: string;
    mdiCircleSlice2: string;
    mdiCircleSlice3: string;
    mdiCircleSlice4: string;
    mdiCircleSlice5: string;
    mdiCircleSlice6: string;
    mdiCircleSlice7: string;
    mdiCircleSlice8: string;
    mdiCircleSmall: string;
    mdiCircularSaw: string;
    mdiCity: string;
    mdiCitySwitch: string;
    mdiCityVariant: string;
    mdiCityVariantOutline: string;
    mdiClipboard: string;
    mdiClipboardAccount: string;
    mdiClipboardAccountOutline: string;
    mdiClipboardAlert: string;
    mdiClipboardAlertOutline: string;
    mdiClipboardArrowDown: string;
    mdiClipboardArrowDownOutline: string;
    mdiClipboardArrowLeft: string;
    mdiClipboardArrowLeftOutline: string;
    mdiClipboardArrowRight: string;
    mdiClipboardArrowRightOutline: string;
    mdiClipboardArrowUp: string;
    mdiClipboardArrowUpOutline: string;
    mdiClipboardCheck: string;
    mdiClipboardCheckMultiple: string;
    mdiClipboardCheckMultipleOutline: string;
    mdiClipboardCheckOutline: string;
    mdiClipboardClock: string;
    mdiClipboardClockOutline: string;
    mdiClipboardEdit: string;
    mdiClipboardEditOutline: string;
    mdiClipboardFile: string;
    mdiClipboardFileOutline: string;
    mdiClipboardFlow: string;
    mdiClipboardFlowOutline: string;
    mdiClipboardList: string;
    mdiClipboardListOutline: string;
    mdiClipboardMinus: string;
    mdiClipboardMinusOutline: string;
    mdiClipboardMultiple: string;
    mdiClipboardMultipleOutline: string;
    mdiClipboardOff: string;
    mdiClipboardOffOutline: string;
    mdiClipboardOutline: string;
    mdiClipboardPlay: string;
    mdiClipboardPlayMultiple: string;
    mdiClipboardPlayMultipleOutline: string;
    mdiClipboardPlayOutline: string;
    mdiClipboardPlus: string;
    mdiClipboardPlusOutline: string;
    mdiClipboardPulse: string;
    mdiClipboardPulseOutline: string;
    mdiClipboardRemove: string;
    mdiClipboardRemoveOutline: string;
    mdiClipboardSearch: string;
    mdiClipboardSearchOutline: string;
    mdiClipboardText: string;
    mdiClipboardTextClock: string;
    mdiClipboardTextClockOutline: string;
    mdiClipboardTextMultiple: string;
    mdiClipboardTextMultipleOutline: string;
    mdiClipboardTextOff: string;
    mdiClipboardTextOffOutline: string;
    mdiClipboardTextOutline: string;
    mdiClipboardTextPlay: string;
    mdiClipboardTextPlayOutline: string;
    mdiClipboardTextSearch: string;
    mdiClipboardTextSearchOutline: string;
    mdiClippy: string;
    mdiClock: string;
    mdiClockAlert: string;
    mdiClockAlertOutline: string;
    mdiClockCheck: string;
    mdiClockCheckOutline: string;
    mdiClockDigital: string;
    mdiClockEdit: string;
    mdiClockEditOutline: string;
    mdiClockEnd: string;
    mdiClockFast: string;
    mdiClockIn: string;
    mdiClockMinus: string;
    mdiClockMinusOutline: string;
    mdiClockOut: string;
    mdiClockOutline: string;
    mdiClockPlus: string;
    mdiClockPlusOutline: string;
    mdiClockRemove: string;
    mdiClockRemoveOutline: string;
    mdiClockStarFourPoints: string;
    mdiClockStarFourPointsOutline: string;
    mdiClockStart: string;
    mdiClockTimeEight: string;
    mdiClockTimeEightOutline: string;
    mdiClockTimeEleven: string;
    mdiClockTimeElevenOutline: string;
    mdiClockTimeFive: string;
    mdiClockTimeFiveOutline: string;
    mdiClockTimeFour: string;
    mdiClockTimeFourOutline: string;
    mdiClockTimeNine: string;
    mdiClockTimeNineOutline: string;
    mdiClockTimeOne: string;
    mdiClockTimeOneOutline: string;
    mdiClockTimeSeven: string;
    mdiClockTimeSevenOutline: string;
    mdiClockTimeSix: string;
    mdiClockTimeSixOutline: string;
    mdiClockTimeTen: string;
    mdiClockTimeTenOutline: string;
    mdiClockTimeThree: string;
    mdiClockTimeThreeOutline: string;
    mdiClockTimeTwelve: string;
    mdiClockTimeTwelveOutline: string;
    mdiClockTimeTwo: string;
    mdiClockTimeTwoOutline: string;
    mdiClose: string;
    mdiCloseBox: string;
    mdiCloseBoxMultiple: string;
    mdiCloseBoxMultipleOutline: string;
    mdiCloseBoxOutline: string;
    mdiCloseCircle: string;
    mdiCloseCircleMultiple: string;
    mdiCloseCircleMultipleOutline: string;
    mdiCloseCircleOutline: string;
    mdiCloseNetwork: string;
    mdiCloseNetworkOutline: string;
    mdiCloseOctagon: string;
    mdiCloseOctagonOutline: string;
    mdiCloseOutline: string;
    mdiCloseThick: string;
    mdiClosedCaption: string;
    mdiClosedCaptionOutline: string;
    mdiCloud: string;
    mdiCloudAlert: string;
    mdiCloudAlertOutline: string;
    mdiCloudArrowDown: string;
    mdiCloudArrowDownOutline: string;
    mdiCloudArrowLeft: string;
    mdiCloudArrowLeftOutline: string;
    mdiCloudArrowRight: string;
    mdiCloudArrowRightOutline: string;
    mdiCloudArrowUp: string;
    mdiCloudArrowUpOutline: string;
    mdiCloudBraces: string;
    mdiCloudCancel: string;
    mdiCloudCancelOutline: string;
    mdiCloudCheck: string;
    mdiCloudCheckOutline: string;
    mdiCloudCheckVariant: string;
    mdiCloudCheckVariantOutline: string;
    mdiCloudCircle: string;
    mdiCloudCircleOutline: string;
    mdiCloudClock: string;
    mdiCloudClockOutline: string;
    mdiCloudCog: string;
    mdiCloudCogOutline: string;
    mdiCloudDownload: string;
    mdiCloudDownloadOutline: string;
    mdiCloudKey: string;
    mdiCloudKeyOutline: string;
    mdiCloudLock: string;
    mdiCloudLockOpen: string;
    mdiCloudLockOpenOutline: string;
    mdiCloudLockOutline: string;
    mdiCloudMinus: string;
    mdiCloudMinusOutline: string;
    mdiCloudOff: string;
    mdiCloudOffOutline: string;
    mdiCloudOutline: string;
    mdiCloudPercent: string;
    mdiCloudPercentOutline: string;
    mdiCloudPlus: string;
    mdiCloudPlusOutline: string;
    mdiCloudPrint: string;
    mdiCloudPrintOutline: string;
    mdiCloudQuestion: string;
    mdiCloudQuestionOutline: string;
    mdiCloudRefresh: string;
    mdiCloudRefreshOutline: string;
    mdiCloudRefreshVariant: string;
    mdiCloudRefreshVariantOutline: string;
    mdiCloudRemove: string;
    mdiCloudRemoveOutline: string;
    mdiCloudSearch: string;
    mdiCloudSearchOutline: string;
    mdiCloudSync: string;
    mdiCloudSyncOutline: string;
    mdiCloudTags: string;
    mdiCloudUpload: string;
    mdiCloudUploadOutline: string;
    mdiClouds: string;
    mdiClover: string;
    mdiCloverOutline: string;
    mdiCoachLamp: string;
    mdiCoachLampVariant: string;
    mdiCoatRack: string;
    mdiCodeArray: string;
    mdiCodeBlockBraces: string;
    mdiCodeBlockBrackets: string;
    mdiCodeBlockParentheses: string;
    mdiCodeBlockTags: string;
    mdiCodeBraces: string;
    mdiCodeBracesBox: string;
    mdiCodeBrackets: string;
    mdiCodeEqual: string;
    mdiCodeGreaterThan: string;
    mdiCodeGreaterThanOrEqual: string;
    mdiCodeJson: string;
    mdiCodeLessThan: string;
    mdiCodeLessThanOrEqual: string;
    mdiCodeNotEqual: string;
    mdiCodeNotEqualVariant: string;
    mdiCodeParentheses: string;
    mdiCodeParenthesesBox: string;
    mdiCodeString: string;
    mdiCodeTags: string;
    mdiCodeTagsCheck: string;
    mdiCodepen: string;
    mdiCoffee: string;
    mdiCoffeeMaker: string;
    mdiCoffeeMakerCheck: string;
    mdiCoffeeMakerCheckOutline: string;
    mdiCoffeeMakerOutline: string;
    mdiCoffeeOff: string;
    mdiCoffeeOffOutline: string;
    mdiCoffeeOutline: string;
    mdiCoffeeToGo: string;
    mdiCoffeeToGoOutline: string;
    mdiCoffin: string;
    mdiCog: string;
    mdiCogBox: string;
    mdiCogClockwise: string;
    mdiCogCounterclockwise: string;
    mdiCogOff: string;
    mdiCogOffOutline: string;
    mdiCogOutline: string;
    mdiCogPause: string;
    mdiCogPauseOutline: string;
    mdiCogPlay: string;
    mdiCogPlayOutline: string;
    mdiCogRefresh: string;
    mdiCogRefreshOutline: string;
    mdiCogStop: string;
    mdiCogStopOutline: string;
    mdiCogSync: string;
    mdiCogSyncOutline: string;
    mdiCogTransfer: string;
    mdiCogTransferOutline: string;
    mdiCogs: string;
    mdiCollage: string;
    mdiCollapseAll: string;
    mdiCollapseAllOutline: string;
    mdiColorHelper: string;
    mdiComma: string;
    mdiCommaBox: string;
    mdiCommaBoxOutline: string;
    mdiCommaCircle: string;
    mdiCommaCircleOutline: string;
    mdiComment: string;
    mdiCommentAccount: string;
    mdiCommentAccountOutline: string;
    mdiCommentAlert: string;
    mdiCommentAlertOutline: string;
    mdiCommentArrowLeft: string;
    mdiCommentArrowLeftOutline: string;
    mdiCommentArrowRight: string;
    mdiCommentArrowRightOutline: string;
    mdiCommentBookmark: string;
    mdiCommentBookmarkOutline: string;
    mdiCommentCheck: string;
    mdiCommentCheckOutline: string;
    mdiCommentEdit: string;
    mdiCommentEditOutline: string;
    mdiCommentEye: string;
    mdiCommentEyeOutline: string;
    mdiCommentFlash: string;
    mdiCommentFlashOutline: string;
    mdiCommentMinus: string;
    mdiCommentMinusOutline: string;
    mdiCommentMultiple: string;
    mdiCommentMultipleOutline: string;
    mdiCommentOff: string;
    mdiCommentOffOutline: string;
    mdiCommentOutline: string;
    mdiCommentPlus: string;
    mdiCommentPlusOutline: string;
    mdiCommentProcessing: string;
    mdiCommentProcessingOutline: string;
    mdiCommentQuestion: string;
    mdiCommentQuestionOutline: string;
    mdiCommentQuote: string;
    mdiCommentQuoteOutline: string;
    mdiCommentRemove: string;
    mdiCommentRemoveOutline: string;
    mdiCommentSearch: string;
    mdiCommentSearchOutline: string;
    mdiCommentText: string;
    mdiCommentTextMultiple: string;
    mdiCommentTextMultipleOutline: string;
    mdiCommentTextOutline: string;
    mdiCompare: string;
    mdiCompareHorizontal: string;
    mdiCompareRemove: string;
    mdiCompareVertical: string;
    mdiCompass: string;
    mdiCompassOff: string;
    mdiCompassOffOutline: string;
    mdiCompassOutline: string;
    mdiCompassRose: string;
    mdiCompost: string;
    mdiCone: string;
    mdiConeOff: string;
    mdiConnection: string;
    mdiConsole: string;
    mdiConsoleLine: string;
    mdiConsoleNetwork: string;
    mdiConsoleNetworkOutline: string;
    mdiConsolidate: string;
    mdiContactlessPayment: string;
    mdiContactlessPaymentCircle: string;
    mdiContactlessPaymentCircleOutline: string;
    mdiContacts: string;
    mdiContactsOutline: string;
    mdiContain: string;
    mdiContainEnd: string;
    mdiContainStart: string;
    mdiContentCopy: string;
    mdiContentCut: string;
    mdiContentDuplicate: string;
    mdiContentPaste: string;
    mdiContentSave: string;
    mdiContentSaveAlert: string;
    mdiContentSaveAlertOutline: string;
    mdiContentSaveAll: string;
    mdiContentSaveAllOutline: string;
    mdiContentSaveCheck: string;
    mdiContentSaveCheckOutline: string;
    mdiContentSaveCog: string;
    mdiContentSaveCogOutline: string;
    mdiContentSaveEdit: string;
    mdiContentSaveEditOutline: string;
    mdiContentSaveMinus: string;
    mdiContentSaveMinusOutline: string;
    mdiContentSaveMove: string;
    mdiContentSaveMoveOutline: string;
    mdiContentSaveOff: string;
    mdiContentSaveOffOutline: string;
    mdiContentSaveOutline: string;
    mdiContentSavePlus: string;
    mdiContentSavePlusOutline: string;
    mdiContentSaveSettings: string;
    mdiContentSaveSettingsOutline: string;
    mdiContrast: string;
    mdiContrastBox: string;
    mdiContrastCircle: string;
    mdiController: string;
    mdiControllerClassic: string;
    mdiControllerClassicOutline: string;
    mdiControllerOff: string;
    mdiCookie: string;
    mdiCookieAlert: string;
    mdiCookieAlertOutline: string;
    mdiCookieCheck: string;
    mdiCookieCheckOutline: string;
    mdiCookieClock: string;
    mdiCookieClockOutline: string;
    mdiCookieCog: string;
    mdiCookieCogOutline: string;
    mdiCookieEdit: string;
    mdiCookieEditOutline: string;
    mdiCookieLock: string;
    mdiCookieLockOutline: string;
    mdiCookieMinus: string;
    mdiCookieMinusOutline: string;
    mdiCookieOff: string;
    mdiCookieOffOutline: string;
    mdiCookieOutline: string;
    mdiCookiePlus: string;
    mdiCookiePlusOutline: string;
    mdiCookieRefresh: string;
    mdiCookieRefreshOutline: string;
    mdiCookieRemove: string;
    mdiCookieRemoveOutline: string;
    mdiCookieSettings: string;
    mdiCookieSettingsOutline: string;
    mdiCoolantTemperature: string;
    mdiCopyleft: string;
    mdiCopyright: string;
    mdiCordova: string;
    mdiCorn: string;
    mdiCornOff: string;
    mdiCosineWave: string;
    mdiCounter: string;
    mdiCountertop: string;
    mdiCountertopOutline: string;
    mdiCow: string;
    mdiCowOff: string;
    mdiCpu32Bit: string;
    mdiCpu64Bit: string;
    mdiCradle: string;
    mdiCradleOutline: string;
    mdiCrane: string;
    mdiCreation: string;
    mdiCreationOutline: string;
    mdiCreativeCommons: string;
    mdiCreditCard: string;
    mdiCreditCardCheck: string;
    mdiCreditCardCheckOutline: string;
    mdiCreditCardChip: string;
    mdiCreditCardChipOutline: string;
    mdiCreditCardClock: string;
    mdiCreditCardClockOutline: string;
    mdiCreditCardEdit: string;
    mdiCreditCardEditOutline: string;
    mdiCreditCardFast: string;
    mdiCreditCardFastOutline: string;
    mdiCreditCardLock: string;
    mdiCreditCardLockOutline: string;
    mdiCreditCardMarker: string;
    mdiCreditCardMarkerOutline: string;
    mdiCreditCardMinus: string;
    mdiCreditCardMinusOutline: string;
    mdiCreditCardMultiple: string;
    mdiCreditCardMultipleOutline: string;
    mdiCreditCardOff: string;
    mdiCreditCardOffOutline: string;
    mdiCreditCardOutline: string;
    mdiCreditCardPlus: string;
    mdiCreditCardPlusOutline: string;
    mdiCreditCardRefresh: string;
    mdiCreditCardRefreshOutline: string;
    mdiCreditCardRefund: string;
    mdiCreditCardRefundOutline: string;
    mdiCreditCardRemove: string;
    mdiCreditCardRemoveOutline: string;
    mdiCreditCardScan: string;
    mdiCreditCardScanOutline: string;
    mdiCreditCardSearch: string;
    mdiCreditCardSearchOutline: string;
    mdiCreditCardSettings: string;
    mdiCreditCardSettingsOutline: string;
    mdiCreditCardSync: string;
    mdiCreditCardSyncOutline: string;
    mdiCreditCardWireless: string;
    mdiCreditCardWirelessOff: string;
    mdiCreditCardWirelessOffOutline: string;
    mdiCreditCardWirelessOutline: string;
    mdiCricket: string;
    mdiCrop: string;
    mdiCropFree: string;
    mdiCropLandscape: string;
    mdiCropPortrait: string;
    mdiCropRotate: string;
    mdiCropSquare: string;
    mdiCross: string;
    mdiCrossBolnisi: string;
    mdiCrossCeltic: string;
    mdiCrossOutline: string;
    mdiCrosshairs: string;
    mdiCrosshairsGps: string;
    mdiCrosshairsOff: string;
    mdiCrosshairsQuestion: string;
    mdiCrowd: string;
    mdiCrown: string;
    mdiCrownCircle: string;
    mdiCrownCircleOutline: string;
    mdiCrownOutline: string;
    mdiCryengine: string;
    mdiCrystalBall: string;
    mdiCube: string;
    mdiCubeOff: string;
    mdiCubeOffOutline: string;
    mdiCubeOutline: string;
    mdiCubeScan: string;
    mdiCubeSend: string;
    mdiCubeUnfolded: string;
    mdiCup: string;
    mdiCupOff: string;
    mdiCupOffOutline: string;
    mdiCupOutline: string;
    mdiCupWater: string;
    mdiCupboard: string;
    mdiCupboardOutline: string;
    mdiCupcake: string;
    mdiCurling: string;
    mdiCurrencyBdt: string;
    mdiCurrencyBrl: string;
    mdiCurrencyBtc: string;
    mdiCurrencyCny: string;
    mdiCurrencyEth: string;
    mdiCurrencyEur: string;
    mdiCurrencyEurOff: string;
    mdiCurrencyFra: string;
    mdiCurrencyGbp: string;
    mdiCurrencyIls: string;
    mdiCurrencyInr: string;
    mdiCurrencyJpy: string;
    mdiCurrencyKrw: string;
    mdiCurrencyKzt: string;
    mdiCurrencyMnt: string;
    mdiCurrencyNgn: string;
    mdiCurrencyPhp: string;
    mdiCurrencyRial: string;
    mdiCurrencyRub: string;
    mdiCurrencyRupee: string;
    mdiCurrencySign: string;
    mdiCurrencyThb: string;
    mdiCurrencyTry: string;
    mdiCurrencyTwd: string;
    mdiCurrencyUah: string;
    mdiCurrencyUsd: string;
    mdiCurrencyUsdOff: string;
    mdiCurrentAc: string;
    mdiCurrentDc: string;
    mdiCursorDefault: string;
    mdiCursorDefaultClick: string;
    mdiCursorDefaultClickOutline: string;
    mdiCursorDefaultGesture: string;
    mdiCursorDefaultGestureOutline: string;
    mdiCursorDefaultOutline: string;
    mdiCursorMove: string;
    mdiCursorPointer: string;
    mdiCursorText: string;
    mdiCurtains: string;
    mdiCurtainsClosed: string;
    mdiCylinder: string;
    mdiCylinderOff: string;
    mdiDanceBallroom: string;
    mdiDancePole: string;
    mdiDataMatrix: string;
    mdiDataMatrixEdit: string;
    mdiDataMatrixMinus: string;
    mdiDataMatrixPlus: string;
    mdiDataMatrixRemove: string;
    mdiDataMatrixScan: string;
    mdiDatabase: string;
    mdiDatabaseAlert: string;
    mdiDatabaseAlertOutline: string;
    mdiDatabaseArrowDown: string;
    mdiDatabaseArrowDownOutline: string;
    mdiDatabaseArrowLeft: string;
    mdiDatabaseArrowLeftOutline: string;
    mdiDatabaseArrowRight: string;
    mdiDatabaseArrowRightOutline: string;
    mdiDatabaseArrowUp: string;
    mdiDatabaseArrowUpOutline: string;
    mdiDatabaseCheck: string;
    mdiDatabaseCheckOutline: string;
    mdiDatabaseClock: string;
    mdiDatabaseClockOutline: string;
    mdiDatabaseCog: string;
    mdiDatabaseCogOutline: string;
    mdiDatabaseEdit: string;
    mdiDatabaseEditOutline: string;
    mdiDatabaseExport: string;
    mdiDatabaseExportOutline: string;
    mdiDatabaseEye: string;
    mdiDatabaseEyeOff: string;
    mdiDatabaseEyeOffOutline: string;
    mdiDatabaseEyeOutline: string;
    mdiDatabaseImport: string;
    mdiDatabaseImportOutline: string;
    mdiDatabaseLock: string;
    mdiDatabaseLockOutline: string;
    mdiDatabaseMarker: string;
    mdiDatabaseMarkerOutline: string;
    mdiDatabaseMinus: string;
    mdiDatabaseMinusOutline: string;
    mdiDatabaseOff: string;
    mdiDatabaseOffOutline: string;
    mdiDatabaseOutline: string;
    mdiDatabasePlus: string;
    mdiDatabasePlusOutline: string;
    mdiDatabaseRefresh: string;
    mdiDatabaseRefreshOutline: string;
    mdiDatabaseRemove: string;
    mdiDatabaseRemoveOutline: string;
    mdiDatabaseSearch: string;
    mdiDatabaseSearchOutline: string;
    mdiDatabaseSettings: string;
    mdiDatabaseSettingsOutline: string;
    mdiDatabaseSync: string;
    mdiDatabaseSyncOutline: string;
    mdiDeathStar: string;
    mdiDeathStarVariant: string;
    mdiDeathlyHallows: string;
    mdiDebian: string;
    mdiDebugStepInto: string;
    mdiDebugStepOut: string;
    mdiDebugStepOver: string;
    mdiDecagram: string;
    mdiDecagramOutline: string;
    mdiDecimal: string;
    mdiDecimalComma: string;
    mdiDecimalCommaDecrease: string;
    mdiDecimalCommaIncrease: string;
    mdiDecimalDecrease: string;
    mdiDecimalIncrease: string;
    mdiDelete: string;
    mdiDeleteAlert: string;
    mdiDeleteAlertOutline: string;
    mdiDeleteCircle: string;
    mdiDeleteCircleOutline: string;
    mdiDeleteClock: string;
    mdiDeleteClockOutline: string;
    mdiDeleteEmpty: string;
    mdiDeleteEmptyOutline: string;
    mdiDeleteForever: string;
    mdiDeleteForeverOutline: string;
    mdiDeleteOff: string;
    mdiDeleteOffOutline: string;
    mdiDeleteOutline: string;
    mdiDeleteRestore: string;
    mdiDeleteSweep: string;
    mdiDeleteSweepOutline: string;
    mdiDeleteVariant: string;
    mdiDelta: string;
    mdiDesk: string;
    mdiDeskLamp: string;
    mdiDeskLampOff: string;
    mdiDeskLampOn: string;
    mdiDeskphone: string;
    mdiDesktopClassic: string;
    mdiDesktopTower: string;
    mdiDesktopTowerMonitor: string;
    mdiDetails: string;
    mdiDevTo: string;
    mdiDeveloperBoard: string;
    mdiDeviantart: string;
    mdiDevices: string;
    mdiDharmachakra: string;
    mdiDiabetes: string;
    mdiDialpad: string;
    mdiDiameter: string;
    mdiDiameterOutline: string;
    mdiDiameterVariant: string;
    mdiDiamond: string;
    mdiDiamondOutline: string;
    mdiDiamondStone: string;
    mdiDiaperOutline: string;
    mdiDice1: string;
    mdiDice1Outline: string;
    mdiDice2: string;
    mdiDice2Outline: string;
    mdiDice3: string;
    mdiDice3Outline: string;
    mdiDice4: string;
    mdiDice4Outline: string;
    mdiDice5: string;
    mdiDice5Outline: string;
    mdiDice6: string;
    mdiDice6Outline: string;
    mdiDiceD10: string;
    mdiDiceD10Outline: string;
    mdiDiceD12: string;
    mdiDiceD12Outline: string;
    mdiDiceD20: string;
    mdiDiceD20Outline: string;
    mdiDiceD4: string;
    mdiDiceD4Outline: string;
    mdiDiceD6: string;
    mdiDiceD6Outline: string;
    mdiDiceD8: string;
    mdiDiceD8Outline: string;
    mdiDiceMultiple: string;
    mdiDiceMultipleOutline: string;
    mdiDigitalOcean: string;
    mdiDipSwitch: string;
    mdiDirections: string;
    mdiDirectionsFork: string;
    mdiDisc: string;
    mdiDiscAlert: string;
    mdiDiscPlayer: string;
    mdiDishwasher: string;
    mdiDishwasherAlert: string;
    mdiDishwasherOff: string;
    mdiDisqus: string;
    mdiDistributeHorizontalCenter: string;
    mdiDistributeHorizontalLeft: string;
    mdiDistributeHorizontalRight: string;
    mdiDistributeVerticalBottom: string;
    mdiDistributeVerticalCenter: string;
    mdiDistributeVerticalTop: string;
    mdiDiversify: string;
    mdiDiving: string;
    mdiDivingFlippers: string;
    mdiDivingHelmet: string;
    mdiDivingScuba: string;
    mdiDivingScubaFlag: string;
    mdiDivingScubaMask: string;
    mdiDivingScubaTank: string;
    mdiDivingScubaTankMultiple: string;
    mdiDivingSnorkel: string;
    mdiDivision: string;
    mdiDivisionBox: string;
    mdiDlna: string;
    mdiDna: string;
    mdiDns: string;
    mdiDnsOutline: string;
    mdiDockBottom: string;
    mdiDockLeft: string;
    mdiDockRight: string;
    mdiDockTop: string;
    mdiDockWindow: string;
    mdiDocker: string;
    mdiDoctor: string;
    mdiDog: string;
    mdiDogService: string;
    mdiDogSide: string;
    mdiDogSideOff: string;
    mdiDolby: string;
    mdiDolly: string;
    mdiDolphin: string;
    mdiDomain: string;
    mdiDomainOff: string;
    mdiDomainPlus: string;
    mdiDomainRemove: string;
    mdiDomainSwitch: string;
    mdiDomeLight: string;
    mdiDominoMask: string;
    mdiDonkey: string;
    mdiDoor: string;
    mdiDoorClosed: string;
    mdiDoorClosedCancel: string;
    mdiDoorClosedLock: string;
    mdiDoorOpen: string;
    mdiDoorSliding: string;
    mdiDoorSlidingLock: string;
    mdiDoorSlidingOpen: string;
    mdiDoorbell: string;
    mdiDoorbellVideo: string;
    mdiDotNet: string;
    mdiDotsCircle: string;
    mdiDotsGrid: string;
    mdiDotsHexagon: string;
    mdiDotsHorizontal: string;
    mdiDotsHorizontalCircle: string;
    mdiDotsHorizontalCircleOutline: string;
    mdiDotsSquare: string;
    mdiDotsTriangle: string;
    mdiDotsVertical: string;
    mdiDotsVerticalCircle: string;
    mdiDotsVerticalCircleOutline: string;
    mdiDownload: string;
    mdiDownloadBox: string;
    mdiDownloadBoxOutline: string;
    mdiDownloadCircle: string;
    mdiDownloadCircleOutline: string;
    mdiDownloadLock: string;
    mdiDownloadLockOutline: string;
    mdiDownloadMultiple: string;
    mdiDownloadMultipleOutline: string;
    mdiDownloadNetwork: string;
    mdiDownloadNetworkOutline: string;
    mdiDownloadOff: string;
    mdiDownloadOffOutline: string;
    mdiDownloadOutline: string;
    mdiDrag: string;
    mdiDragHorizontal: string;
    mdiDragHorizontalVariant: string;
    mdiDragVariant: string;
    mdiDragVertical: string;
    mdiDragVerticalVariant: string;
    mdiDramaMasks: string;
    mdiDraw: string;
    mdiDrawPen: string;
    mdiDrawing: string;
    mdiDrawingBox: string;
    mdiDresser: string;
    mdiDresserOutline: string;
    mdiDrone: string;
    mdiDropbox: string;
    mdiDrupal: string;
    mdiDuck: string;
    mdiDumbbell: string;
    mdiDumpTruck: string;
    mdiEarHearing: string;
    mdiEarHearingLoop: string;
    mdiEarHearingOff: string;
    mdiEarbuds: string;
    mdiEarbudsOff: string;
    mdiEarbudsOffOutline: string;
    mdiEarbudsOutline: string;
    mdiEarth: string;
    mdiEarthArrowDown: string;
    mdiEarthArrowLeft: string;
    mdiEarthArrowRight: string;
    mdiEarthArrowUp: string;
    mdiEarthBox: string;
    mdiEarthBoxMinus: string;
    mdiEarthBoxOff: string;
    mdiEarthBoxPlus: string;
    mdiEarthBoxRemove: string;
    mdiEarthMinus: string;
    mdiEarthOff: string;
    mdiEarthPlus: string;
    mdiEarthRemove: string;
    mdiEgg: string;
    mdiEggEaster: string;
    mdiEggFried: string;
    mdiEggOff: string;
    mdiEggOffOutline: string;
    mdiEggOutline: string;
    mdiEiffelTower: string;
    mdiEightTrack: string;
    mdiEject: string;
    mdiEjectCircle: string;
    mdiEjectCircleOutline: string;
    mdiEjectOutline: string;
    mdiElectricSwitch: string;
    mdiElectricSwitchClosed: string;
    mdiElectronFramework: string;
    mdiElephant: string;
    mdiElevationDecline: string;
    mdiElevationRise: string;
    mdiElevator: string;
    mdiElevatorDown: string;
    mdiElevatorPassenger: string;
    mdiElevatorPassengerOff: string;
    mdiElevatorPassengerOffOutline: string;
    mdiElevatorPassengerOutline: string;
    mdiElevatorUp: string;
    mdiEllipse: string;
    mdiEllipseOutline: string;
    mdiEmail: string;
    mdiEmailAlert: string;
    mdiEmailAlertOutline: string;
    mdiEmailArrowLeft: string;
    mdiEmailArrowLeftOutline: string;
    mdiEmailArrowRight: string;
    mdiEmailArrowRightOutline: string;
    mdiEmailBox: string;
    mdiEmailCheck: string;
    mdiEmailCheckOutline: string;
    mdiEmailEdit: string;
    mdiEmailEditOutline: string;
    mdiEmailFast: string;
    mdiEmailFastOutline: string;
    mdiEmailHeartOutline: string;
    mdiEmailLock: string;
    mdiEmailLockOutline: string;
    mdiEmailMarkAsUnread: string;
    mdiEmailMinus: string;
    mdiEmailMinusOutline: string;
    mdiEmailMultiple: string;
    mdiEmailMultipleOutline: string;
    mdiEmailNewsletter: string;
    mdiEmailOff: string;
    mdiEmailOffOutline: string;
    mdiEmailOpen: string;
    mdiEmailOpenHeartOutline: string;
    mdiEmailOpenMultiple: string;
    mdiEmailOpenMultipleOutline: string;
    mdiEmailOpenOutline: string;
    mdiEmailOutline: string;
    mdiEmailPlus: string;
    mdiEmailPlusOutline: string;
    mdiEmailRemove: string;
    mdiEmailRemoveOutline: string;
    mdiEmailSeal: string;
    mdiEmailSealOutline: string;
    mdiEmailSearch: string;
    mdiEmailSearchOutline: string;
    mdiEmailSync: string;
    mdiEmailSyncOutline: string;
    mdiEmailVariant: string;
    mdiEmber: string;
    mdiEmby: string;
    mdiEmoticon: string;
    mdiEmoticonAngry: string;
    mdiEmoticonAngryOutline: string;
    mdiEmoticonConfused: string;
    mdiEmoticonConfusedOutline: string;
    mdiEmoticonCool: string;
    mdiEmoticonCoolOutline: string;
    mdiEmoticonCry: string;
    mdiEmoticonCryOutline: string;
    mdiEmoticonDead: string;
    mdiEmoticonDeadOutline: string;
    mdiEmoticonDevil: string;
    mdiEmoticonDevilOutline: string;
    mdiEmoticonExcited: string;
    mdiEmoticonExcitedOutline: string;
    mdiEmoticonFrown: string;
    mdiEmoticonFrownOutline: string;
    mdiEmoticonHappy: string;
    mdiEmoticonHappyOutline: string;
    mdiEmoticonKiss: string;
    mdiEmoticonKissOutline: string;
    mdiEmoticonLol: string;
    mdiEmoticonLolOutline: string;
    mdiEmoticonMinus: string;
    mdiEmoticonMinusOutline: string;
    mdiEmoticonNeutral: string;
    mdiEmoticonNeutralOutline: string;
    mdiEmoticonOutline: string;
    mdiEmoticonPlus: string;
    mdiEmoticonPlusOutline: string;
    mdiEmoticonPoop: string;
    mdiEmoticonPoopOutline: string;
    mdiEmoticonRemove: string;
    mdiEmoticonRemoveOutline: string;
    mdiEmoticonSad: string;
    mdiEmoticonSadOutline: string;
    mdiEmoticonSick: string;
    mdiEmoticonSickOutline: string;
    mdiEmoticonTongue: string;
    mdiEmoticonTongueOutline: string;
    mdiEmoticonWink: string;
    mdiEmoticonWinkOutline: string;
    mdiEngine: string;
    mdiEngineOff: string;
    mdiEngineOffOutline: string;
    mdiEngineOutline: string;
    mdiEpsilon: string;
    mdiEqual: string;
    mdiEqualBox: string;
    mdiEqualizer: string;
    mdiEqualizerOutline: string;
    mdiEraser: string;
    mdiEraserVariant: string;
    mdiEscalator: string;
    mdiEscalatorBox: string;
    mdiEscalatorDown: string;
    mdiEscalatorUp: string;
    mdiEslint: string;
    mdiEt: string;
    mdiEthereum: string;
    mdiEthernet: string;
    mdiEthernetCable: string;
    mdiEthernetCableOff: string;
    mdiEthernetOff: string;
    mdiEvPlugCcs1: string;
    mdiEvPlugCcs2: string;
    mdiEvPlugChademo: string;
    mdiEvPlugTesla: string;
    mdiEvPlugType1: string;
    mdiEvPlugType2: string;
    mdiEvStation: string;
    mdiEvernote: string;
    mdiExcavator: string;
    mdiExclamation: string;
    mdiExclamationThick: string;
    mdiExitRun: string;
    mdiExitToApp: string;
    mdiExpandAll: string;
    mdiExpandAllOutline: string;
    mdiExpansionCard: string;
    mdiExpansionCardVariant: string;
    mdiExponent: string;
    mdiExponentBox: string;
    mdiExport: string;
    mdiExportVariant: string;
    mdiEye: string;
    mdiEyeArrowLeft: string;
    mdiEyeArrowLeftOutline: string;
    mdiEyeArrowRight: string;
    mdiEyeArrowRightOutline: string;
    mdiEyeCheck: string;
    mdiEyeCheckOutline: string;
    mdiEyeCircle: string;
    mdiEyeCircleOutline: string;
    mdiEyeClosed: string;
    mdiEyeLock: string;
    mdiEyeLockOpen: string;
    mdiEyeLockOpenOutline: string;
    mdiEyeLockOutline: string;
    mdiEyeMinus: string;
    mdiEyeMinusOutline: string;
    mdiEyeOff: string;
    mdiEyeOffOutline: string;
    mdiEyeOutline: string;
    mdiEyePlus: string;
    mdiEyePlusOutline: string;
    mdiEyeRefresh: string;
    mdiEyeRefreshOutline: string;
    mdiEyeRemove: string;
    mdiEyeRemoveOutline: string;
    mdiEyeSettings: string;
    mdiEyeSettingsOutline: string;
    mdiEyedropper: string;
    mdiEyedropperMinus: string;
    mdiEyedropperOff: string;
    mdiEyedropperPlus: string;
    mdiEyedropperRemove: string;
    mdiEyedropperVariant: string;
    mdiFaceAgent: string;
    mdiFaceMan: string;
    mdiFaceManOutline: string;
    mdiFaceManProfile: string;
    mdiFaceManShimmer: string;
    mdiFaceManShimmerOutline: string;
    mdiFaceMask: string;
    mdiFaceMaskOutline: string;
    mdiFaceRecognition: string;
    mdiFaceWoman: string;
    mdiFaceWomanOutline: string;
    mdiFaceWomanProfile: string;
    mdiFaceWomanShimmer: string;
    mdiFaceWomanShimmerOutline: string;
    mdiFacebook: string;
    mdiFacebookGaming: string;
    mdiFacebookMessenger: string;
    mdiFacebookWorkplace: string;
    mdiFactory: string;
    mdiFamilyTree: string;
    mdiFan: string;
    mdiFanAlert: string;
    mdiFanAuto: string;
    mdiFanChevronDown: string;
    mdiFanChevronUp: string;
    mdiFanClock: string;
    mdiFanMinus: string;
    mdiFanOff: string;
    mdiFanPlus: string;
    mdiFanRemove: string;
    mdiFanSpeed1: string;
    mdiFanSpeed2: string;
    mdiFanSpeed3: string;
    mdiFastForward: string;
    mdiFastForward10: string;
    mdiFastForward15: string;
    mdiFastForward30: string;
    mdiFastForward45: string;
    mdiFastForward5: string;
    mdiFastForward60: string;
    mdiFastForwardOutline: string;
    mdiFaucet: string;
    mdiFaucetVariant: string;
    mdiFax: string;
    mdiFeather: string;
    mdiFeatureSearch: string;
    mdiFeatureSearchOutline: string;
    mdiFedora: string;
    mdiFence: string;
    mdiFenceElectric: string;
    mdiFencing: string;
    mdiFerrisWheel: string;
    mdiFerry: string;
    mdiFile: string;
    mdiFileAccount: string;
    mdiFileAccountOutline: string;
    mdiFileAlert: string;
    mdiFileAlertOutline: string;
    mdiFileArrowLeftRight: string;
    mdiFileArrowLeftRightOutline: string;
    mdiFileArrowUpDown: string;
    mdiFileArrowUpDownOutline: string;
    mdiFileCabinet: string;
    mdiFileCad: string;
    mdiFileCadBox: string;
    mdiFileCancel: string;
    mdiFileCancelOutline: string;
    mdiFileCertificate: string;
    mdiFileCertificateOutline: string;
    mdiFileChart: string;
    mdiFileChartCheck: string;
    mdiFileChartCheckOutline: string;
    mdiFileChartOutline: string;
    mdiFileCheck: string;
    mdiFileCheckOutline: string;
    mdiFileClock: string;
    mdiFileClockOutline: string;
    mdiFileCloud: string;
    mdiFileCloudOutline: string;
    mdiFileCode: string;
    mdiFileCodeOutline: string;
    mdiFileCog: string;
    mdiFileCogOutline: string;
    mdiFileCompare: string;
    mdiFileDelimited: string;
    mdiFileDelimitedOutline: string;
    mdiFileDocument: string;
    mdiFileDocumentAlert: string;
    mdiFileDocumentAlertOutline: string;
    mdiFileDocumentArrowRight: string;
    mdiFileDocumentArrowRightOutline: string;
    mdiFileDocumentCheck: string;
    mdiFileDocumentCheckOutline: string;
    mdiFileDocumentEdit: string;
    mdiFileDocumentEditOutline: string;
    mdiFileDocumentMinus: string;
    mdiFileDocumentMinusOutline: string;
    mdiFileDocumentMultiple: string;
    mdiFileDocumentMultipleOutline: string;
    mdiFileDocumentOutline: string;
    mdiFileDocumentPlus: string;
    mdiFileDocumentPlusOutline: string;
    mdiFileDocumentRefresh: string;
    mdiFileDocumentRefreshOutline: string;
    mdiFileDocumentRemove: string;
    mdiFileDocumentRemoveOutline: string;
    mdiFileDownload: string;
    mdiFileDownloadOutline: string;
    mdiFileEdit: string;
    mdiFileEditOutline: string;
    mdiFileExcel: string;
    mdiFileExcelBox: string;
    mdiFileExcelBoxOutline: string;
    mdiFileExcelOutline: string;
    mdiFileExport: string;
    mdiFileExportOutline: string;
    mdiFileEye: string;
    mdiFileEyeOutline: string;
    mdiFileFind: string;
    mdiFileFindOutline: string;
    mdiFileGifBox: string;
    mdiFileHidden: string;
    mdiFileImage: string;
    mdiFileImageMarker: string;
    mdiFileImageMarkerOutline: string;
    mdiFileImageMinus: string;
    mdiFileImageMinusOutline: string;
    mdiFileImageOutline: string;
    mdiFileImagePlus: string;
    mdiFileImagePlusOutline: string;
    mdiFileImageRemove: string;
    mdiFileImageRemoveOutline: string;
    mdiFileImport: string;
    mdiFileImportOutline: string;
    mdiFileJpgBox: string;
    mdiFileKey: string;
    mdiFileKeyOutline: string;
    mdiFileLink: string;
    mdiFileLinkOutline: string;
    mdiFileLock: string;
    mdiFileLockOpen: string;
    mdiFileLockOpenOutline: string;
    mdiFileLockOutline: string;
    mdiFileMarker: string;
    mdiFileMarkerOutline: string;
    mdiFileMinus: string;
    mdiFileMinusOutline: string;
    mdiFileMove: string;
    mdiFileMoveOutline: string;
    mdiFileMultiple: string;
    mdiFileMultipleOutline: string;
    mdiFileMusic: string;
    mdiFileMusicOutline: string;
    mdiFileOutline: string;
    mdiFilePdfBox: string;
    mdiFilePercent: string;
    mdiFilePercentOutline: string;
    mdiFilePhone: string;
    mdiFilePhoneOutline: string;
    mdiFilePlus: string;
    mdiFilePlusOutline: string;
    mdiFilePngBox: string;
    mdiFilePowerpoint: string;
    mdiFilePowerpointBox: string;
    mdiFilePowerpointBoxOutline: string;
    mdiFilePowerpointOutline: string;
    mdiFilePresentationBox: string;
    mdiFileQuestion: string;
    mdiFileQuestionOutline: string;
    mdiFileRefresh: string;
    mdiFileRefreshOutline: string;
    mdiFileRemove: string;
    mdiFileRemoveOutline: string;
    mdiFileReplace: string;
    mdiFileReplaceOutline: string;
    mdiFileRestore: string;
    mdiFileRestoreOutline: string;
    mdiFileRotateLeft: string;
    mdiFileRotateLeftOutline: string;
    mdiFileRotateRight: string;
    mdiFileRotateRightOutline: string;
    mdiFileSearch: string;
    mdiFileSearchOutline: string;
    mdiFileSend: string;
    mdiFileSendOutline: string;
    mdiFileSettings: string;
    mdiFileSettingsOutline: string;
    mdiFileSign: string;
    mdiFileStar: string;
    mdiFileStarFourPoints: string;
    mdiFileStarFourPointsOutline: string;
    mdiFileStarOutline: string;
    mdiFileSwap: string;
    mdiFileSwapOutline: string;
    mdiFileSync: string;
    mdiFileSyncOutline: string;
    mdiFileTable: string;
    mdiFileTableBox: string;
    mdiFileTableBoxMultiple: string;
    mdiFileTableBoxMultipleOutline: string;
    mdiFileTableBoxOutline: string;
    mdiFileTableOutline: string;
    mdiFileTree: string;
    mdiFileTreeOutline: string;
    mdiFileUndo: string;
    mdiFileUndoOutline: string;
    mdiFileUpload: string;
    mdiFileUploadOutline: string;
    mdiFileVideo: string;
    mdiFileVideoOutline: string;
    mdiFileWord: string;
    mdiFileWordBox: string;
    mdiFileWordBoxOutline: string;
    mdiFileWordOutline: string;
    mdiFileXmlBox: string;
    mdiFilm: string;
    mdiFilmstrip: string;
    mdiFilmstripBox: string;
    mdiFilmstripBoxMultiple: string;
    mdiFilmstripOff: string;
    mdiFilter: string;
    mdiFilterCheck: string;
    mdiFilterCheckOutline: string;
    mdiFilterCog: string;
    mdiFilterCogOutline: string;
    mdiFilterMenu: string;
    mdiFilterMenuOutline: string;
    mdiFilterMinus: string;
    mdiFilterMinusOutline: string;
    mdiFilterMultiple: string;
    mdiFilterMultipleOutline: string;
    mdiFilterOff: string;
    mdiFilterOffOutline: string;
    mdiFilterOutline: string;
    mdiFilterPlus: string;
    mdiFilterPlusOutline: string;
    mdiFilterRemove: string;
    mdiFilterRemoveOutline: string;
    mdiFilterSettings: string;
    mdiFilterSettingsOutline: string;
    mdiFilterVariant: string;
    mdiFilterVariantMinus: string;
    mdiFilterVariantPlus: string;
    mdiFilterVariantRemove: string;
    mdiFinance: string;
    mdiFindReplace: string;
    mdiFingerprint: string;
    mdiFingerprintOff: string;
    mdiFire: string;
    mdiFireAlert: string;
    mdiFireCircle: string;
    mdiFireExtinguisher: string;
    mdiFireHydrant: string;
    mdiFireHydrantAlert: string;
    mdiFireHydrantOff: string;
    mdiFireOff: string;
    mdiFireStation: string;
    mdiFireTruck: string;
    mdiFirebase: string;
    mdiFirefox: string;
    mdiFireplace: string;
    mdiFireplaceOff: string;
    mdiFirewire: string;
    mdiFirework: string;
    mdiFireworkOff: string;
    mdiFish: string;
    mdiFishOff: string;
    mdiFishbowl: string;
    mdiFishbowlOutline: string;
    mdiFitToPage: string;
    mdiFitToPageOutline: string;
    mdiFitToScreen: string;
    mdiFitToScreenOutline: string;
    mdiFlag: string;
    mdiFlagCheckered: string;
    mdiFlagMinus: string;
    mdiFlagMinusOutline: string;
    mdiFlagOff: string;
    mdiFlagOffOutline: string;
    mdiFlagOutline: string;
    mdiFlagPlus: string;
    mdiFlagPlusOutline: string;
    mdiFlagRemove: string;
    mdiFlagRemoveOutline: string;
    mdiFlagTriangle: string;
    mdiFlagVariant: string;
    mdiFlagVariantMinus: string;
    mdiFlagVariantMinusOutline: string;
    mdiFlagVariantOff: string;
    mdiFlagVariantOffOutline: string;
    mdiFlagVariantOutline: string;
    mdiFlagVariantPlus: string;
    mdiFlagVariantPlusOutline: string;
    mdiFlagVariantRemove: string;
    mdiFlagVariantRemoveOutline: string;
    mdiFlare: string;
    mdiFlash: string;
    mdiFlashAlert: string;
    mdiFlashAlertOutline: string;
    mdiFlashAuto: string;
    mdiFlashOff: string;
    mdiFlashOffOutline: string;
    mdiFlashOutline: string;
    mdiFlashRedEye: string;
    mdiFlashTriangle: string;
    mdiFlashTriangleOutline: string;
    mdiFlashlight: string;
    mdiFlashlightOff: string;
    mdiFlask: string;
    mdiFlaskEmpty: string;
    mdiFlaskEmptyMinus: string;
    mdiFlaskEmptyMinusOutline: string;
    mdiFlaskEmptyOff: string;
    mdiFlaskEmptyOffOutline: string;
    mdiFlaskEmptyOutline: string;
    mdiFlaskEmptyPlus: string;
    mdiFlaskEmptyPlusOutline: string;
    mdiFlaskEmptyRemove: string;
    mdiFlaskEmptyRemoveOutline: string;
    mdiFlaskMinus: string;
    mdiFlaskMinusOutline: string;
    mdiFlaskOff: string;
    mdiFlaskOffOutline: string;
    mdiFlaskOutline: string;
    mdiFlaskPlus: string;
    mdiFlaskPlusOutline: string;
    mdiFlaskRemove: string;
    mdiFlaskRemoveOutline: string;
    mdiFlaskRoundBottom: string;
    mdiFlaskRoundBottomEmpty: string;
    mdiFlaskRoundBottomEmptyOutline: string;
    mdiFlaskRoundBottomOutline: string;
    mdiFleurDeLis: string;
    mdiFlipHorizontal: string;
    mdiFlipToBack: string;
    mdiFlipToFront: string;
    mdiFlipVertical: string;
    mdiFloorLamp: string;
    mdiFloorLampDual: string;
    mdiFloorLampDualOutline: string;
    mdiFloorLampOutline: string;
    mdiFloorLampTorchiere: string;
    mdiFloorLampTorchiereOutline: string;
    mdiFloorLampTorchiereVariant: string;
    mdiFloorLampTorchiereVariantOutline: string;
    mdiFloorPlan: string;
    mdiFloppy: string;
    mdiFloppyVariant: string;
    mdiFlower: string;
    mdiFlowerOutline: string;
    mdiFlowerPollen: string;
    mdiFlowerPollenOutline: string;
    mdiFlowerPoppy: string;
    mdiFlowerTulip: string;
    mdiFlowerTulipOutline: string;
    mdiFocusAuto: string;
    mdiFocusField: string;
    mdiFocusFieldHorizontal: string;
    mdiFocusFieldVertical: string;
    mdiFolder: string;
    mdiFolderAccount: string;
    mdiFolderAccountOutline: string;
    mdiFolderAlert: string;
    mdiFolderAlertOutline: string;
    mdiFolderArrowDown: string;
    mdiFolderArrowDownOutline: string;
    mdiFolderArrowLeft: string;
    mdiFolderArrowLeftOutline: string;
    mdiFolderArrowLeftRight: string;
    mdiFolderArrowLeftRightOutline: string;
    mdiFolderArrowRight: string;
    mdiFolderArrowRightOutline: string;
    mdiFolderArrowUp: string;
    mdiFolderArrowUpDown: string;
    mdiFolderArrowUpDownOutline: string;
    mdiFolderArrowUpOutline: string;
    mdiFolderCancel: string;
    mdiFolderCancelOutline: string;
    mdiFolderCheck: string;
    mdiFolderCheckOutline: string;
    mdiFolderClock: string;
    mdiFolderClockOutline: string;
    mdiFolderCog: string;
    mdiFolderCogOutline: string;
    mdiFolderDownload: string;
    mdiFolderDownloadOutline: string;
    mdiFolderEdit: string;
    mdiFolderEditOutline: string;
    mdiFolderEye: string;
    mdiFolderEyeOutline: string;
    mdiFolderFile: string;
    mdiFolderFileOutline: string;
    mdiFolderGoogleDrive: string;
    mdiFolderHeart: string;
    mdiFolderHeartOutline: string;
    mdiFolderHidden: string;
    mdiFolderHome: string;
    mdiFolderHomeOutline: string;
    mdiFolderImage: string;
    mdiFolderInformation: string;
    mdiFolderInformationOutline: string;
    mdiFolderKey: string;
    mdiFolderKeyNetwork: string;
    mdiFolderKeyNetworkOutline: string;
    mdiFolderKeyOutline: string;
    mdiFolderLock: string;
    mdiFolderLockOpen: string;
    mdiFolderLockOpenOutline: string;
    mdiFolderLockOutline: string;
    mdiFolderMarker: string;
    mdiFolderMarkerOutline: string;
    mdiFolderMinus: string;
    mdiFolderMinusOutline: string;
    mdiFolderMove: string;
    mdiFolderMoveOutline: string;
    mdiFolderMultiple: string;
    mdiFolderMultipleImage: string;
    mdiFolderMultipleOutline: string;
    mdiFolderMultiplePlus: string;
    mdiFolderMultiplePlusOutline: string;
    mdiFolderMusic: string;
    mdiFolderMusicOutline: string;
    mdiFolderNetwork: string;
    mdiFolderNetworkOutline: string;
    mdiFolderOff: string;
    mdiFolderOffOutline: string;
    mdiFolderOpen: string;
    mdiFolderOpenOutline: string;
    mdiFolderOutline: string;
    mdiFolderPlay: string;
    mdiFolderPlayOutline: string;
    mdiFolderPlus: string;
    mdiFolderPlusOutline: string;
    mdiFolderPound: string;
    mdiFolderPoundOutline: string;
    mdiFolderQuestion: string;
    mdiFolderQuestionOutline: string;
    mdiFolderRefresh: string;
    mdiFolderRefreshOutline: string;
    mdiFolderRemove: string;
    mdiFolderRemoveOutline: string;
    mdiFolderSearch: string;
    mdiFolderSearchOutline: string;
    mdiFolderSettings: string;
    mdiFolderSettingsOutline: string;
    mdiFolderStar: string;
    mdiFolderStarMultiple: string;
    mdiFolderStarMultipleOutline: string;
    mdiFolderStarOutline: string;
    mdiFolderSwap: string;
    mdiFolderSwapOutline: string;
    mdiFolderSync: string;
    mdiFolderSyncOutline: string;
    mdiFolderTable: string;
    mdiFolderTableOutline: string;
    mdiFolderText: string;
    mdiFolderTextOutline: string;
    mdiFolderUpload: string;
    mdiFolderUploadOutline: string;
    mdiFolderWrench: string;
    mdiFolderWrenchOutline: string;
    mdiFolderZip: string;
    mdiFolderZipOutline: string;
    mdiFontAwesome: string;
    mdiFood: string;
    mdiFoodApple: string;
    mdiFoodAppleOutline: string;
    mdiFoodCroissant: string;
    mdiFoodDrumstick: string;
    mdiFoodDrumstickOff: string;
    mdiFoodDrumstickOffOutline: string;
    mdiFoodDrumstickOutline: string;
    mdiFoodForkDrink: string;
    mdiFoodHalal: string;
    mdiFoodHotDog: string;
    mdiFoodKosher: string;
    mdiFoodOff: string;
    mdiFoodOffOutline: string;
    mdiFoodOutline: string;
    mdiFoodSteak: string;
    mdiFoodSteakOff: string;
    mdiFoodTakeoutBox: string;
    mdiFoodTakeoutBoxOutline: string;
    mdiFoodTurkey: string;
    mdiFoodVariant: string;
    mdiFoodVariantOff: string;
    mdiFootPrint: string;
    mdiFootball: string;
    mdiFootballAustralian: string;
    mdiFootballHelmet: string;
    mdiForest: string;
    mdiForestOutline: string;
    mdiForklift: string;
    mdiFormDropdown: string;
    mdiFormSelect: string;
    mdiFormTextarea: string;
    mdiFormTextbox: string;
    mdiFormTextboxLock: string;
    mdiFormTextboxPassword: string;
    mdiFormatAlignBottom: string;
    mdiFormatAlignCenter: string;
    mdiFormatAlignJustify: string;
    mdiFormatAlignLeft: string;
    mdiFormatAlignMiddle: string;
    mdiFormatAlignRight: string;
    mdiFormatAlignTop: string;
    mdiFormatAnnotationMinus: string;
    mdiFormatAnnotationPlus: string;
    mdiFormatBold: string;
    mdiFormatClear: string;
    mdiFormatColorFill: string;
    mdiFormatColorHighlight: string;
    mdiFormatColorMarkerCancel: string;
    mdiFormatColorText: string;
    mdiFormatColumns: string;
    mdiFormatFloatCenter: string;
    mdiFormatFloatLeft: string;
    mdiFormatFloatNone: string;
    mdiFormatFloatRight: string;
    mdiFormatFont: string;
    mdiFormatFontSizeDecrease: string;
    mdiFormatFontSizeIncrease: string;
    mdiFormatHeader1: string;
    mdiFormatHeader2: string;
    mdiFormatHeader3: string;
    mdiFormatHeader4: string;
    mdiFormatHeader5: string;
    mdiFormatHeader6: string;
    mdiFormatHeaderDecrease: string;
    mdiFormatHeaderEqual: string;
    mdiFormatHeaderIncrease: string;
    mdiFormatHeaderPound: string;
    mdiFormatHorizontalAlignCenter: string;
    mdiFormatHorizontalAlignLeft: string;
    mdiFormatHorizontalAlignRight: string;
    mdiFormatIndentDecrease: string;
    mdiFormatIndentIncrease: string;
    mdiFormatItalic: string;
    mdiFormatLetterCase: string;
    mdiFormatLetterCaseLower: string;
    mdiFormatLetterCaseUpper: string;
    mdiFormatLetterEndsWith: string;
    mdiFormatLetterMatches: string;
    mdiFormatLetterSpacing: string;
    mdiFormatLetterSpacingVariant: string;
    mdiFormatLetterStartsWith: string;
    mdiFormatLineHeight: string;
    mdiFormatLineSpacing: string;
    mdiFormatLineStyle: string;
    mdiFormatLineWeight: string;
    mdiFormatListBulleted: string;
    mdiFormatListBulletedSquare: string;
    mdiFormatListBulletedTriangle: string;
    mdiFormatListBulletedType: string;
    mdiFormatListCheckbox: string;
    mdiFormatListChecks: string;
    mdiFormatListGroup: string;
    mdiFormatListGroupPlus: string;
    mdiFormatListNumbered: string;
    mdiFormatListNumberedRtl: string;
    mdiFormatListText: string;
    mdiFormatOverline: string;
    mdiFormatPageBreak: string;
    mdiFormatPageSplit: string;
    mdiFormatPaint: string;
    mdiFormatParagraph: string;
    mdiFormatParagraphSpacing: string;
    mdiFormatPilcrow: string;
    mdiFormatPilcrowArrowLeft: string;
    mdiFormatPilcrowArrowRight: string;
    mdiFormatQuoteClose: string;
    mdiFormatQuoteCloseOutline: string;
    mdiFormatQuoteOpen: string;
    mdiFormatQuoteOpenOutline: string;
    mdiFormatRotate90: string;
    mdiFormatSection: string;
    mdiFormatSize: string;
    mdiFormatStrikethrough: string;
    mdiFormatStrikethroughVariant: string;
    mdiFormatSubscript: string;
    mdiFormatSuperscript: string;
    mdiFormatText: string;
    mdiFormatTextRotationAngleDown: string;
    mdiFormatTextRotationAngleUp: string;
    mdiFormatTextRotationDown: string;
    mdiFormatTextRotationDownVertical: string;
    mdiFormatTextRotationNone: string;
    mdiFormatTextRotationUp: string;
    mdiFormatTextRotationVertical: string;
    mdiFormatTextVariant: string;
    mdiFormatTextVariantOutline: string;
    mdiFormatTextWrappingClip: string;
    mdiFormatTextWrappingOverflow: string;
    mdiFormatTextWrappingWrap: string;
    mdiFormatTextbox: string;
    mdiFormatTitle: string;
    mdiFormatUnderline: string;
    mdiFormatUnderlineWavy: string;
    mdiFormatVerticalAlignBottom: string;
    mdiFormatVerticalAlignCenter: string;
    mdiFormatVerticalAlignTop: string;
    mdiFormatWrapInline: string;
    mdiFormatWrapSquare: string;
    mdiFormatWrapTight: string;
    mdiFormatWrapTopBottom: string;
    mdiForum: string;
    mdiForumMinus: string;
    mdiForumMinusOutline: string;
    mdiForumOutline: string;
    mdiForumPlus: string;
    mdiForumPlusOutline: string;
    mdiForumRemove: string;
    mdiForumRemoveOutline: string;
    mdiForward: string;
    mdiForwardburger: string;
    mdiFountain: string;
    mdiFountainPen: string;
    mdiFountainPenTip: string;
    mdiFractionOneHalf: string;
    mdiFreebsd: string;
    mdiFrenchFries: string;
    mdiFrequentlyAskedQuestions: string;
    mdiFridge: string;
    mdiFridgeAlert: string;
    mdiFridgeAlertOutline: string;
    mdiFridgeBottom: string;
    mdiFridgeIndustrial: string;
    mdiFridgeIndustrialAlert: string;
    mdiFridgeIndustrialAlertOutline: string;
    mdiFridgeIndustrialOff: string;
    mdiFridgeIndustrialOffOutline: string;
    mdiFridgeIndustrialOutline: string;
    mdiFridgeOff: string;
    mdiFridgeOffOutline: string;
    mdiFridgeOutline: string;
    mdiFridgeTop: string;
    mdiFridgeVariant: string;
    mdiFridgeVariantAlert: string;
    mdiFridgeVariantAlertOutline: string;
    mdiFridgeVariantOff: string;
    mdiFridgeVariantOffOutline: string;
    mdiFridgeVariantOutline: string;
    mdiFruitCherries: string;
    mdiFruitCherriesOff: string;
    mdiFruitCitrus: string;
    mdiFruitCitrusOff: string;
    mdiFruitGrapes: string;
    mdiFruitGrapesOutline: string;
    mdiFruitPear: string;
    mdiFruitPineapple: string;
    mdiFruitWatermelon: string;
    mdiFuel: string;
    mdiFuelCell: string;
    mdiFullscreen: string;
    mdiFullscreenExit: string;
    mdiFunction: string;
    mdiFunctionVariant: string;
    mdiFuriganaHorizontal: string;
    mdiFuriganaVertical: string;
    mdiFuse: string;
    mdiFuseAlert: string;
    mdiFuseBlade: string;
    mdiFuseOff: string;
    mdiGamepad: string;
    mdiGamepadCircle: string;
    mdiGamepadCircleDown: string;
    mdiGamepadCircleLeft: string;
    mdiGamepadCircleOutline: string;
    mdiGamepadCircleRight: string;
    mdiGamepadCircleUp: string;
    mdiGamepadDown: string;
    mdiGamepadLeft: string;
    mdiGamepadOutline: string;
    mdiGamepadRight: string;
    mdiGamepadRound: string;
    mdiGamepadRoundDown: string;
    mdiGamepadRoundLeft: string;
    mdiGamepadRoundOutline: string;
    mdiGamepadRoundRight: string;
    mdiGamepadRoundUp: string;
    mdiGamepadSquare: string;
    mdiGamepadSquareOutline: string;
    mdiGamepadUp: string;
    mdiGamepadVariant: string;
    mdiGamepadVariantOutline: string;
    mdiGamma: string;
    mdiGantryCrane: string;
    mdiGarage: string;
    mdiGarageAlert: string;
    mdiGarageAlertVariant: string;
    mdiGarageLock: string;
    mdiGarageOpen: string;
    mdiGarageOpenVariant: string;
    mdiGarageVariant: string;
    mdiGarageVariantLock: string;
    mdiGasBurner: string;
    mdiGasCylinder: string;
    mdiGasStation: string;
    mdiGasStationInUse: string;
    mdiGasStationInUseOutline: string;
    mdiGasStationOff: string;
    mdiGasStationOffOutline: string;
    mdiGasStationOutline: string;
    mdiGate: string;
    mdiGateAlert: string;
    mdiGateAnd: string;
    mdiGateArrowLeft: string;
    mdiGateArrowRight: string;
    mdiGateBuffer: string;
    mdiGateNand: string;
    mdiGateNor: string;
    mdiGateNot: string;
    mdiGateOpen: string;
    mdiGateOr: string;
    mdiGateXnor: string;
    mdiGateXor: string;
    mdiGatsby: string;
    mdiGauge: string;
    mdiGaugeEmpty: string;
    mdiGaugeFull: string;
    mdiGaugeLow: string;
    mdiGavel: string;
    mdiGenderFemale: string;
    mdiGenderMale: string;
    mdiGenderMaleFemale: string;
    mdiGenderMaleFemaleVariant: string;
    mdiGenderNonBinary: string;
    mdiGenderTransgender: string;
    mdiGeneratorMobile: string;
    mdiGeneratorPortable: string;
    mdiGeneratorStationary: string;
    mdiGentoo: string;
    mdiGesture: string;
    mdiGestureDoubleTap: string;
    mdiGesturePinch: string;
    mdiGestureSpread: string;
    mdiGestureSwipe: string;
    mdiGestureSwipeDown: string;
    mdiGestureSwipeHorizontal: string;
    mdiGestureSwipeLeft: string;
    mdiGestureSwipeRight: string;
    mdiGestureSwipeUp: string;
    mdiGestureSwipeVertical: string;
    mdiGestureTap: string;
    mdiGestureTapBox: string;
    mdiGestureTapButton: string;
    mdiGestureTapHold: string;
    mdiGestureTwoDoubleTap: string;
    mdiGestureTwoTap: string;
    mdiGhost: string;
    mdiGhostOff: string;
    mdiGhostOffOutline: string;
    mdiGhostOutline: string;
    mdiGift: string;
    mdiGiftOff: string;
    mdiGiftOffOutline: string;
    mdiGiftOpen: string;
    mdiGiftOpenOutline: string;
    mdiGiftOutline: string;
    mdiGit: string;
    mdiGithub: string;
    mdiGitlab: string;
    mdiGlassCocktail: string;
    mdiGlassCocktailOff: string;
    mdiGlassFlute: string;
    mdiGlassFragile: string;
    mdiGlassMug: string;
    mdiGlassMugOff: string;
    mdiGlassMugVariant: string;
    mdiGlassMugVariantOff: string;
    mdiGlassPintOutline: string;
    mdiGlassStange: string;
    mdiGlassTulip: string;
    mdiGlassWine: string;
    mdiGlasses: string;
    mdiGlobeLight: string;
    mdiGlobeLightOutline: string;
    mdiGlobeModel: string;
    mdiGmail: string;
    mdiGnome: string;
    mdiGoKart: string;
    mdiGoKartTrack: string;
    mdiGog: string;
    mdiGold: string;
    mdiGolf: string;
    mdiGolfCart: string;
    mdiGolfTee: string;
    mdiGondola: string;
    mdiGoodreads: string;
    mdiGoogle: string;
    mdiGoogleAds: string;
    mdiGoogleAnalytics: string;
    mdiGoogleAssistant: string;
    mdiGoogleCardboard: string;
    mdiGoogleChrome: string;
    mdiGoogleCircles: string;
    mdiGoogleCirclesCommunities: string;
    mdiGoogleCirclesExtended: string;
    mdiGoogleCirclesGroup: string;
    mdiGoogleClassroom: string;
    mdiGoogleCloud: string;
    mdiGoogleDownasaur: string;
    mdiGoogleDrive: string;
    mdiGoogleEarth: string;
    mdiGoogleFit: string;
    mdiGoogleGlass: string;
    mdiGoogleHangouts: string;
    mdiGoogleKeep: string;
    mdiGoogleLens: string;
    mdiGoogleMaps: string;
    mdiGoogleMyBusiness: string;
    mdiGoogleNearby: string;
    mdiGooglePlay: string;
    mdiGooglePlus: string;
    mdiGooglePodcast: string;
    mdiGoogleSpreadsheet: string;
    mdiGoogleStreetView: string;
    mdiGoogleTranslate: string;
    mdiGradientHorizontal: string;
    mdiGradientVertical: string;
    mdiGrain: string;
    mdiGraph: string;
    mdiGraphOutline: string;
    mdiGraphql: string;
    mdiGrass: string;
    mdiGraveStone: string;
    mdiGreasePencil: string;
    mdiGreaterThan: string;
    mdiGreaterThanOrEqual: string;
    mdiGreenhouse: string;
    mdiGrid: string;
    mdiGridLarge: string;
    mdiGridOff: string;
    mdiGrill: string;
    mdiGrillOutline: string;
    mdiGroup: string;
    mdiGuitarAcoustic: string;
    mdiGuitarElectric: string;
    mdiGuitarPick: string;
    mdiGuitarPickOutline: string;
    mdiGuyFawkesMask: string;
    mdiGymnastics: string;
    mdiHail: string;
    mdiHairDryer: string;
    mdiHairDryerOutline: string;
    mdiHalloween: string;
    mdiHamburger: string;
    mdiHamburgerCheck: string;
    mdiHamburgerMinus: string;
    mdiHamburgerOff: string;
    mdiHamburgerPlus: string;
    mdiHamburgerRemove: string;
    mdiHammer: string;
    mdiHammerScrewdriver: string;
    mdiHammerSickle: string;
    mdiHammerWrench: string;
    mdiHandBackLeft: string;
    mdiHandBackLeftOff: string;
    mdiHandBackLeftOffOutline: string;
    mdiHandBackLeftOutline: string;
    mdiHandBackRight: string;
    mdiHandBackRightOff: string;
    mdiHandBackRightOffOutline: string;
    mdiHandBackRightOutline: string;
    mdiHandClap: string;
    mdiHandClapOff: string;
    mdiHandCoin: string;
    mdiHandCoinOutline: string;
    mdiHandCycle: string;
    mdiHandExtended: string;
    mdiHandExtendedOutline: string;
    mdiHandFrontLeft: string;
    mdiHandFrontLeftOutline: string;
    mdiHandFrontRight: string;
    mdiHandFrontRightOutline: string;
    mdiHandHeart: string;
    mdiHandHeartOutline: string;
    mdiHandOkay: string;
    mdiHandPeace: string;
    mdiHandPeaceVariant: string;
    mdiHandPointingDown: string;
    mdiHandPointingLeft: string;
    mdiHandPointingRight: string;
    mdiHandPointingUp: string;
    mdiHandSaw: string;
    mdiHandWash: string;
    mdiHandWashOutline: string;
    mdiHandWater: string;
    mdiHandWave: string;
    mdiHandWaveOutline: string;
    mdiHandball: string;
    mdiHandcuffs: string;
    mdiHandsPray: string;
    mdiHandshake: string;
    mdiHandshakeOutline: string;
    mdiHanger: string;
    mdiHardHat: string;
    mdiHarddisk: string;
    mdiHarddiskPlus: string;
    mdiHarddiskRemove: string;
    mdiHatFedora: string;
    mdiHazardLights: string;
    mdiHdmiPort: string;
    mdiHdr: string;
    mdiHdrOff: string;
    mdiHead: string;
    mdiHeadAlert: string;
    mdiHeadAlertOutline: string;
    mdiHeadCheck: string;
    mdiHeadCheckOutline: string;
    mdiHeadCog: string;
    mdiHeadCogOutline: string;
    mdiHeadDotsHorizontal: string;
    mdiHeadDotsHorizontalOutline: string;
    mdiHeadFlash: string;
    mdiHeadFlashOutline: string;
    mdiHeadHeart: string;
    mdiHeadHeartOutline: string;
    mdiHeadLightbulb: string;
    mdiHeadLightbulbOutline: string;
    mdiHeadMinus: string;
    mdiHeadMinusOutline: string;
    mdiHeadOutline: string;
    mdiHeadPlus: string;
    mdiHeadPlusOutline: string;
    mdiHeadQuestion: string;
    mdiHeadQuestionOutline: string;
    mdiHeadRemove: string;
    mdiHeadRemoveOutline: string;
    mdiHeadSnowflake: string;
    mdiHeadSnowflakeOutline: string;
    mdiHeadSync: string;
    mdiHeadSyncOutline: string;
    mdiHeadphones: string;
    mdiHeadphonesBluetooth: string;
    mdiHeadphonesBox: string;
    mdiHeadphonesOff: string;
    mdiHeadphonesSettings: string;
    mdiHeadset: string;
    mdiHeadsetDock: string;
    mdiHeadsetOff: string;
    mdiHeart: string;
    mdiHeartBox: string;
    mdiHeartBoxOutline: string;
    mdiHeartBroken: string;
    mdiHeartBrokenOutline: string;
    mdiHeartCircle: string;
    mdiHeartCircleOutline: string;
    mdiHeartCog: string;
    mdiHeartCogOutline: string;
    mdiHeartFlash: string;
    mdiHeartHalf: string;
    mdiHeartHalfFull: string;
    mdiHeartHalfOutline: string;
    mdiHeartMinus: string;
    mdiHeartMinusOutline: string;
    mdiHeartMultiple: string;
    mdiHeartMultipleOutline: string;
    mdiHeartOff: string;
    mdiHeartOffOutline: string;
    mdiHeartOutline: string;
    mdiHeartPlus: string;
    mdiHeartPlusOutline: string;
    mdiHeartPulse: string;
    mdiHeartRemove: string;
    mdiHeartRemoveOutline: string;
    mdiHeartSearch: string;
    mdiHeartSettings: string;
    mdiHeartSettingsOutline: string;
    mdiHeatPump: string;
    mdiHeatPumpOutline: string;
    mdiHeatWave: string;
    mdiHeatingCoil: string;
    mdiHelicopter: string;
    mdiHelp: string;
    mdiHelpBox: string;
    mdiHelpBoxMultiple: string;
    mdiHelpBoxMultipleOutline: string;
    mdiHelpBoxOutline: string;
    mdiHelpCircle: string;
    mdiHelpCircleOutline: string;
    mdiHelpNetwork: string;
    mdiHelpNetworkOutline: string;
    mdiHelpRhombus: string;
    mdiHelpRhombusOutline: string;
    mdiHexadecimal: string;
    mdiHexagon: string;
    mdiHexagonMultiple: string;
    mdiHexagonMultipleOutline: string;
    mdiHexagonOutline: string;
    mdiHexagonSlice1: string;
    mdiHexagonSlice2: string;
    mdiHexagonSlice3: string;
    mdiHexagonSlice4: string;
    mdiHexagonSlice5: string;
    mdiHexagonSlice6: string;
    mdiHexagram: string;
    mdiHexagramOutline: string;
    mdiHighDefinition: string;
    mdiHighDefinitionBox: string;
    mdiHighway: string;
    mdiHiking: string;
    mdiHistory: string;
    mdiHockeyPuck: string;
    mdiHockeySticks: string;
    mdiHololens: string;
    mdiHome: string;
    mdiHomeAccount: string;
    mdiHomeAlert: string;
    mdiHomeAlertOutline: string;
    mdiHomeAnalytics: string;
    mdiHomeAssistant: string;
    mdiHomeAutomation: string;
    mdiHomeBattery: string;
    mdiHomeBatteryOutline: string;
    mdiHomeCircle: string;
    mdiHomeCircleOutline: string;
    mdiHomeCity: string;
    mdiHomeCityOutline: string;
    mdiHomeClock: string;
    mdiHomeClockOutline: string;
    mdiHomeEdit: string;
    mdiHomeEditOutline: string;
    mdiHomeExportOutline: string;
    mdiHomeFlood: string;
    mdiHomeFloor0: string;
    mdiHomeFloor1: string;
    mdiHomeFloor2: string;
    mdiHomeFloor3: string;
    mdiHomeFloorA: string;
    mdiHomeFloorB: string;
    mdiHomeFloorG: string;
    mdiHomeFloorL: string;
    mdiHomeFloorNegative1: string;
    mdiHomeGroup: string;
    mdiHomeGroupMinus: string;
    mdiHomeGroupPlus: string;
    mdiHomeGroupRemove: string;
    mdiHomeHeart: string;
    mdiHomeImportOutline: string;
    mdiHomeLightbulb: string;
    mdiHomeLightbulbOutline: string;
    mdiHomeLightningBolt: string;
    mdiHomeLightningBoltOutline: string;
    mdiHomeLock: string;
    mdiHomeLockOpen: string;
    mdiHomeMapMarker: string;
    mdiHomeMinus: string;
    mdiHomeMinusOutline: string;
    mdiHomeModern: string;
    mdiHomeOff: string;
    mdiHomeOffOutline: string;
    mdiHomeOutline: string;
    mdiHomePercent: string;
    mdiHomePercentOutline: string;
    mdiHomePlus: string;
    mdiHomePlusOutline: string;
    mdiHomeRemove: string;
    mdiHomeRemoveOutline: string;
    mdiHomeRoof: string;
    mdiHomeSearch: string;
    mdiHomeSearchOutline: string;
    mdiHomeSilo: string;
    mdiHomeSiloOutline: string;
    mdiHomeSoundIn: string;
    mdiHomeSoundInOutline: string;
    mdiHomeSoundOut: string;
    mdiHomeSoundOutOutline: string;
    mdiHomeSwitch: string;
    mdiHomeSwitchOutline: string;
    mdiHomeThermometer: string;
    mdiHomeThermometerOutline: string;
    mdiHomeVariant: string;
    mdiHomeVariantOutline: string;
    mdiHook: string;
    mdiHookOff: string;
    mdiHoopHouse: string;
    mdiHops: string;
    mdiHorizontalRotateClockwise: string;
    mdiHorizontalRotateCounterclockwise: string;
    mdiHorse: string;
    mdiHorseHuman: string;
    mdiHorseVariant: string;
    mdiHorseVariantFast: string;
    mdiHorseshoe: string;
    mdiHospital: string;
    mdiHospitalBox: string;
    mdiHospitalBoxOutline: string;
    mdiHospitalBuilding: string;
    mdiHospitalMarker: string;
    mdiHotTub: string;
    mdiHours12: string;
    mdiHours24: string;
    mdiHub: string;
    mdiHubOutline: string;
    mdiHubspot: string;
    mdiHulu: string;
    mdiHuman: string;
    mdiHumanBabyChangingTable: string;
    mdiHumanCane: string;
    mdiHumanCapacityDecrease: string;
    mdiHumanCapacityIncrease: string;
    mdiHumanChild: string;
    mdiHumanDolly: string;
    mdiHumanEdit: string;
    mdiHumanFemale: string;
    mdiHumanFemaleBoy: string;
    mdiHumanFemaleDance: string;
    mdiHumanFemaleFemale: string;
    mdiHumanFemaleFemaleChild: string;
    mdiHumanFemaleGirl: string;
    mdiHumanGreeting: string;
    mdiHumanGreetingProximity: string;
    mdiHumanGreetingVariant: string;
    mdiHumanHandsdown: string;
    mdiHumanHandsup: string;
    mdiHumanMale: string;
    mdiHumanMaleBoard: string;
    mdiHumanMaleBoardPoll: string;
    mdiHumanMaleBoy: string;
    mdiHumanMaleChild: string;
    mdiHumanMaleFemale: string;
    mdiHumanMaleFemaleChild: string;
    mdiHumanMaleGirl: string;
    mdiHumanMaleHeight: string;
    mdiHumanMaleHeightVariant: string;
    mdiHumanMaleMale: string;
    mdiHumanMaleMaleChild: string;
    mdiHumanNonBinary: string;
    mdiHumanPregnant: string;
    mdiHumanQueue: string;
    mdiHumanScooter: string;
    mdiHumanWalker: string;
    mdiHumanWheelchair: string;
    mdiHumanWhiteCane: string;
    mdiHumbleBundle: string;
    mdiHvac: string;
    mdiHvacOff: string;
    mdiHydraulicOilLevel: string;
    mdiHydraulicOilTemperature: string;
    mdiHydroPower: string;
    mdiHydrogenStation: string;
    mdiIceCream: string;
    mdiIceCreamOff: string;
    mdiIcePop: string;
    mdiIdCard: string;
    mdiIdentifier: string;
    mdiIdeogramCjk: string;
    mdiIdeogramCjkVariant: string;
    mdiImage: string;
    mdiImageAlbum: string;
    mdiImageArea: string;
    mdiImageAreaClose: string;
    mdiImageAutoAdjust: string;
    mdiImageBroken: string;
    mdiImageBrokenVariant: string;
    mdiImageCheck: string;
    mdiImageCheckOutline: string;
    mdiImageEdit: string;
    mdiImageEditOutline: string;
    mdiImageFilterBlackWhite: string;
    mdiImageFilterCenterFocus: string;
    mdiImageFilterCenterFocusStrong: string;
    mdiImageFilterCenterFocusStrongOutline: string;
    mdiImageFilterCenterFocusWeak: string;
    mdiImageFilterDrama: string;
    mdiImageFilterDramaOutline: string;
    mdiImageFilterFrames: string;
    mdiImageFilterHdr: string;
    mdiImageFilterHdrOutline: string;
    mdiImageFilterNone: string;
    mdiImageFilterTiltShift: string;
    mdiImageFilterVintage: string;
    mdiImageFrame: string;
    mdiImageLock: string;
    mdiImageLockOutline: string;
    mdiImageMarker: string;
    mdiImageMarkerOutline: string;
    mdiImageMinus: string;
    mdiImageMinusOutline: string;
    mdiImageMove: string;
    mdiImageMultiple: string;
    mdiImageMultipleOutline: string;
    mdiImageOff: string;
    mdiImageOffOutline: string;
    mdiImageOutline: string;
    mdiImagePlus: string;
    mdiImagePlusOutline: string;
    mdiImageRefresh: string;
    mdiImageRefreshOutline: string;
    mdiImageRemove: string;
    mdiImageRemoveOutline: string;
    mdiImageSearch: string;
    mdiImageSearchOutline: string;
    mdiImageSizeSelectActual: string;
    mdiImageSizeSelectLarge: string;
    mdiImageSizeSelectSmall: string;
    mdiImageSync: string;
    mdiImageSyncOutline: string;
    mdiImageText: string;
    mdiImport: string;
    mdiInbox: string;
    mdiInboxArrowDown: string;
    mdiInboxArrowDownOutline: string;
    mdiInboxArrowUp: string;
    mdiInboxArrowUpOutline: string;
    mdiInboxFull: string;
    mdiInboxFullOutline: string;
    mdiInboxMultiple: string;
    mdiInboxMultipleOutline: string;
    mdiInboxOutline: string;
    mdiInboxRemove: string;
    mdiInboxRemoveOutline: string;
    mdiIncognito: string;
    mdiIncognitoCircle: string;
    mdiIncognitoCircleOff: string;
    mdiIncognitoOff: string;
    mdiInduction: string;
    mdiInfinity: string;
    mdiInformation: string;
    mdiInformationBox: string;
    mdiInformationBoxOutline: string;
    mdiInformationOff: string;
    mdiInformationOffOutline: string;
    mdiInformationOutline: string;
    mdiInformationSlabBox: string;
    mdiInformationSlabBoxOutline: string;
    mdiInformationSlabCircle: string;
    mdiInformationSlabCircleOutline: string;
    mdiInformationSlabSymbol: string;
    mdiInformationSymbol: string;
    mdiInformationVariant: string;
    mdiInformationVariantBox: string;
    mdiInformationVariantBoxOutline: string;
    mdiInformationVariantCircle: string;
    mdiInformationVariantCircleOutline: string;
    mdiInstagram: string;
    mdiInstrumentTriangle: string;
    mdiIntegratedCircuitChip: string;
    mdiInvertColors: string;
    mdiInvertColorsOff: string;
    mdiInvoice: string;
    mdiInvoiceArrowLeft: string;
    mdiInvoiceArrowLeftOutline: string;
    mdiInvoiceArrowRight: string;
    mdiInvoiceArrowRightOutline: string;
    mdiInvoiceCheck: string;
    mdiInvoiceCheckOutline: string;
    mdiInvoiceClock: string;
    mdiInvoiceClockOutline: string;
    mdiInvoiceEdit: string;
    mdiInvoiceEditOutline: string;
    mdiInvoiceExportOutline: string;
    mdiInvoiceFast: string;
    mdiInvoiceFastOutline: string;
    mdiInvoiceImport: string;
    mdiInvoiceImportOutline: string;
    mdiInvoiceList: string;
    mdiInvoiceListOutline: string;
    mdiInvoiceMinus: string;
    mdiInvoiceMinusOutline: string;
    mdiInvoiceMultiple: string;
    mdiInvoiceMultipleOutline: string;
    mdiInvoiceOutline: string;
    mdiInvoicePlus: string;
    mdiInvoicePlusOutline: string;
    mdiInvoiceRemove: string;
    mdiInvoiceRemoveOutline: string;
    mdiInvoiceSend: string;
    mdiInvoiceSendOutline: string;
    mdiInvoiceText: string;
    mdiInvoiceTextArrowLeft: string;
    mdiInvoiceTextArrowLeftOutline: string;
    mdiInvoiceTextArrowRight: string;
    mdiInvoiceTextArrowRightOutline: string;
    mdiInvoiceTextCheck: string;
    mdiInvoiceTextCheckOutline: string;
    mdiInvoiceTextClock: string;
    mdiInvoiceTextClockOutline: string;
    mdiInvoiceTextEdit: string;
    mdiInvoiceTextEditOutline: string;
    mdiInvoiceTextFast: string;
    mdiInvoiceTextFastOutline: string;
    mdiInvoiceTextMinus: string;
    mdiInvoiceTextMinusOutline: string;
    mdiInvoiceTextMultiple: string;
    mdiInvoiceTextMultipleOutline: string;
    mdiInvoiceTextOutline: string;
    mdiInvoiceTextPlus: string;
    mdiInvoiceTextPlusOutline: string;
    mdiInvoiceTextRemove: string;
    mdiInvoiceTextRemoveOutline: string;
    mdiInvoiceTextSend: string;
    mdiInvoiceTextSendOutline: string;
    mdiIobroker: string;
    mdiIp: string;
    mdiIpNetwork: string;
    mdiIpNetworkOutline: string;
    mdiIpOutline: string;
    mdiIpod: string;
    mdiIron: string;
    mdiIronBoard: string;
    mdiIronOutline: string;
    mdiIsland: string;
    mdiIslandVariant: string;
    mdiIvBag: string;
    mdiJabber: string;
    mdiJeepney: string;
    mdiJellyfish: string;
    mdiJellyfishOutline: string;
    mdiJira: string;
    mdiJquery: string;
    mdiJsfiddle: string;
    mdiJumpRope: string;
    mdiKabaddi: string;
    mdiKangaroo: string;
    mdiKarate: string;
    mdiKayaking: string;
    mdiKeg: string;
    mdiKettle: string;
    mdiKettleAlert: string;
    mdiKettleAlertOutline: string;
    mdiKettleOff: string;
    mdiKettleOffOutline: string;
    mdiKettleOutline: string;
    mdiKettlePourOver: string;
    mdiKettleSteam: string;
    mdiKettleSteamOutline: string;
    mdiKettlebell: string;
    mdiKey: string;
    mdiKeyAlert: string;
    mdiKeyAlertOutline: string;
    mdiKeyArrowRight: string;
    mdiKeyChain: string;
    mdiKeyChainVariant: string;
    mdiKeyChange: string;
    mdiKeyLink: string;
    mdiKeyMinus: string;
    mdiKeyOutline: string;
    mdiKeyPlus: string;
    mdiKeyRemove: string;
    mdiKeyStar: string;
    mdiKeyVariant: string;
    mdiKeyWireless: string;
    mdiKeyboard: string;
    mdiKeyboardBackspace: string;
    mdiKeyboardCaps: string;
    mdiKeyboardClose: string;
    mdiKeyboardCloseOutline: string;
    mdiKeyboardEsc: string;
    mdiKeyboardF1: string;
    mdiKeyboardF10: string;
    mdiKeyboardF11: string;
    mdiKeyboardF12: string;
    mdiKeyboardF2: string;
    mdiKeyboardF3: string;
    mdiKeyboardF4: string;
    mdiKeyboardF5: string;
    mdiKeyboardF6: string;
    mdiKeyboardF7: string;
    mdiKeyboardF8: string;
    mdiKeyboardF9: string;
    mdiKeyboardOff: string;
    mdiKeyboardOffOutline: string;
    mdiKeyboardOutline: string;
    mdiKeyboardReturn: string;
    mdiKeyboardSettings: string;
    mdiKeyboardSettingsOutline: string;
    mdiKeyboardSpace: string;
    mdiKeyboardTab: string;
    mdiKeyboardTabReverse: string;
    mdiKeyboardVariant: string;
    mdiKhanda: string;
    mdiKickstarter: string;
    mdiKite: string;
    mdiKiteOutline: string;
    mdiKitesurfing: string;
    mdiKlingon: string;
    mdiKnife: string;
    mdiKnifeMilitary: string;
    mdiKnob: string;
    mdiKoala: string;
    mdiKodi: string;
    mdiKubernetes: string;
    mdiLabel: string;
    mdiLabelMultiple: string;
    mdiLabelMultipleOutline: string;
    mdiLabelOff: string;
    mdiLabelOffOutline: string;
    mdiLabelOutline: string;
    mdiLabelPercent: string;
    mdiLabelPercentOutline: string;
    mdiLabelVariant: string;
    mdiLabelVariantOutline: string;
    mdiLadder: string;
    mdiLadybug: string;
    mdiLambda: string;
    mdiLamp: string;
    mdiLampOutline: string;
    mdiLamps: string;
    mdiLampsOutline: string;
    mdiLan: string;
    mdiLanCheck: string;
    mdiLanConnect: string;
    mdiLanDisconnect: string;
    mdiLanPending: string;
    mdiLandFields: string;
    mdiLandPlots: string;
    mdiLandPlotsCircle: string;
    mdiLandPlotsCircleVariant: string;
    mdiLandPlotsMarker: string;
    mdiLandRowsHorizontal: string;
    mdiLandRowsVertical: string;
    mdiLandslide: string;
    mdiLandslideOutline: string;
    mdiLanguageC: string;
    mdiLanguageCpp: string;
    mdiLanguageCsharp: string;
    mdiLanguageCss3: string;
    mdiLanguageFortran: string;
    mdiLanguageGo: string;
    mdiLanguageHaskell: string;
    mdiLanguageHtml5: string;
    mdiLanguageJava: string;
    mdiLanguageJavascript: string;
    mdiLanguageKotlin: string;
    mdiLanguageLua: string;
    mdiLanguageMarkdown: string;
    mdiLanguageMarkdownOutline: string;
    mdiLanguagePhp: string;
    mdiLanguagePython: string;
    mdiLanguageR: string;
    mdiLanguageRuby: string;
    mdiLanguageRubyOnRails: string;
    mdiLanguageRust: string;
    mdiLanguageSwift: string;
    mdiLanguageTypescript: string;
    mdiLanguageXaml: string;
    mdiLaptop: string;
    mdiLaptopAccount: string;
    mdiLaptopOff: string;
    mdiLaravel: string;
    mdiLaserPointer: string;
    mdiLasso: string;
    mdiLastpass: string;
    mdiLatitude: string;
    mdiLaunch: string;
    mdiLavaLamp: string;
    mdiLayers: string;
    mdiLayersEdit: string;
    mdiLayersMinus: string;
    mdiLayersOff: string;
    mdiLayersOffOutline: string;
    mdiLayersOutline: string;
    mdiLayersPlus: string;
    mdiLayersRemove: string;
    mdiLayersSearch: string;
    mdiLayersSearchOutline: string;
    mdiLayersTriple: string;
    mdiLayersTripleOutline: string;
    mdiLeadPencil: string;
    mdiLeaf: string;
    mdiLeafCircle: string;
    mdiLeafCircleOutline: string;
    mdiLeafMaple: string;
    mdiLeafMapleOff: string;
    mdiLeafOff: string;
    mdiLeak: string;
    mdiLeakOff: string;
    mdiLectern: string;
    mdiLedOff: string;
    mdiLedOn: string;
    mdiLedOutline: string;
    mdiLedStrip: string;
    mdiLedStripVariant: string;
    mdiLedStripVariantOff: string;
    mdiLedVariantOff: string;
    mdiLedVariantOn: string;
    mdiLedVariantOutline: string;
    mdiLeek: string;
    mdiLessThan: string;
    mdiLessThanOrEqual: string;
    mdiLibrary: string;
    mdiLibraryOutline: string;
    mdiLibraryShelves: string;
    mdiLicense: string;
    mdiLifebuoy: string;
    mdiLightFloodDown: string;
    mdiLightFloodUp: string;
    mdiLightRecessed: string;
    mdiLightSwitch: string;
    mdiLightSwitchOff: string;
    mdiLightbulb: string;
    mdiLightbulbAlert: string;
    mdiLightbulbAlertOutline: string;
    mdiLightbulbAuto: string;
    mdiLightbulbAutoOutline: string;
    mdiLightbulbCfl: string;
    mdiLightbulbCflOff: string;
    mdiLightbulbCflSpiral: string;
    mdiLightbulbCflSpiralOff: string;
    mdiLightbulbFluorescentTube: string;
    mdiLightbulbFluorescentTubeOutline: string;
    mdiLightbulbGroup: string;
    mdiLightbulbGroupOff: string;
    mdiLightbulbGroupOffOutline: string;
    mdiLightbulbGroupOutline: string;
    mdiLightbulbMultiple: string;
    mdiLightbulbMultipleOff: string;
    mdiLightbulbMultipleOffOutline: string;
    mdiLightbulbMultipleOutline: string;
    mdiLightbulbNight: string;
    mdiLightbulbNightOutline: string;
    mdiLightbulbOff: string;
    mdiLightbulbOffOutline: string;
    mdiLightbulbOn: string;
    mdiLightbulbOn10: string;
    mdiLightbulbOn20: string;
    mdiLightbulbOn30: string;
    mdiLightbulbOn40: string;
    mdiLightbulbOn50: string;
    mdiLightbulbOn60: string;
    mdiLightbulbOn70: string;
    mdiLightbulbOn80: string;
    mdiLightbulbOn90: string;
    mdiLightbulbOnOutline: string;
    mdiLightbulbOutline: string;
    mdiLightbulbQuestion: string;
    mdiLightbulbQuestionOutline: string;
    mdiLightbulbSpot: string;
    mdiLightbulbSpotOff: string;
    mdiLightbulbVariant: string;
    mdiLightbulbVariantOutline: string;
    mdiLighthouse: string;
    mdiLighthouseOn: string;
    mdiLightningBolt: string;
    mdiLightningBoltCircle: string;
    mdiLightningBoltOutline: string;
    mdiLineScan: string;
    mdiLingerie: string;
    mdiLink: string;
    mdiLinkBox: string;
    mdiLinkBoxOutline: string;
    mdiLinkBoxVariant: string;
    mdiLinkBoxVariantOutline: string;
    mdiLinkCircle: string;
    mdiLinkCircleOutline: string;
    mdiLinkEdit: string;
    mdiLinkLock: string;
    mdiLinkOff: string;
    mdiLinkPlus: string;
    mdiLinkVariant: string;
    mdiLinkVariantMinus: string;
    mdiLinkVariantOff: string;
    mdiLinkVariantPlus: string;
    mdiLinkVariantRemove: string;
    mdiLinkedin: string;
    mdiLinux: string;
    mdiLinuxMint: string;
    mdiLipstick: string;
    mdiLiquidSpot: string;
    mdiLiquor: string;
    mdiListBox: string;
    mdiListBoxOutline: string;
    mdiListStatus: string;
    mdiLitecoin: string;
    mdiLoading: string;
    mdiLocationEnter: string;
    mdiLocationExit: string;
    mdiLock: string;
    mdiLockAlert: string;
    mdiLockAlertOutline: string;
    mdiLockCheck: string;
    mdiLockCheckOutline: string;
    mdiLockClock: string;
    mdiLockMinus: string;
    mdiLockMinusOutline: string;
    mdiLockOff: string;
    mdiLockOffOutline: string;
    mdiLockOpen: string;
    mdiLockOpenAlert: string;
    mdiLockOpenAlertOutline: string;
    mdiLockOpenCheck: string;
    mdiLockOpenCheckOutline: string;
    mdiLockOpenMinus: string;
    mdiLockOpenMinusOutline: string;
    mdiLockOpenOutline: string;
    mdiLockOpenPlus: string;
    mdiLockOpenPlusOutline: string;
    mdiLockOpenRemove: string;
    mdiLockOpenRemoveOutline: string;
    mdiLockOpenVariant: string;
    mdiLockOpenVariantOutline: string;
    mdiLockOutline: string;
    mdiLockPattern: string;
    mdiLockPercent: string;
    mdiLockPercentOpen: string;
    mdiLockPercentOpenOutline: string;
    mdiLockPercentOpenVariant: string;
    mdiLockPercentOpenVariantOutline: string;
    mdiLockPercentOutline: string;
    mdiLockPlus: string;
    mdiLockPlusOutline: string;
    mdiLockQuestion: string;
    mdiLockRemove: string;
    mdiLockRemoveOutline: string;
    mdiLockReset: string;
    mdiLockSmart: string;
    mdiLocker: string;
    mdiLockerMultiple: string;
    mdiLogin: string;
    mdiLoginVariant: string;
    mdiLogout: string;
    mdiLogoutVariant: string;
    mdiLongitude: string;
    mdiLooks: string;
    mdiLotion: string;
    mdiLotionOutline: string;
    mdiLotionPlus: string;
    mdiLotionPlusOutline: string;
    mdiLoupe: string;
    mdiLumx: string;
    mdiLungs: string;
    mdiMace: string;
    mdiMagazinePistol: string;
    mdiMagazineRifle: string;
    mdiMagicStaff: string;
    mdiMagnet: string;
    mdiMagnetOn: string;
    mdiMagnify: string;
    mdiMagnifyClose: string;
    mdiMagnifyExpand: string;
    mdiMagnifyMinus: string;
    mdiMagnifyMinusCursor: string;
    mdiMagnifyMinusOutline: string;
    mdiMagnifyPlus: string;
    mdiMagnifyPlusCursor: string;
    mdiMagnifyPlusOutline: string;
    mdiMagnifyRemoveCursor: string;
    mdiMagnifyRemoveOutline: string;
    mdiMagnifyScan: string;
    mdiMail: string;
    mdiMailbox: string;
    mdiMailboxOpen: string;
    mdiMailboxOpenOutline: string;
    mdiMailboxOpenUp: string;
    mdiMailboxOpenUpOutline: string;
    mdiMailboxOutline: string;
    mdiMailboxUp: string;
    mdiMailboxUpOutline: string;
    mdiManjaro: string;
    mdiMap: string;
    mdiMapCheck: string;
    mdiMapCheckOutline: string;
    mdiMapClock: string;
    mdiMapClockOutline: string;
    mdiMapLegend: string;
    mdiMapMarker: string;
    mdiMapMarkerAccount: string;
    mdiMapMarkerAccountOutline: string;
    mdiMapMarkerAlert: string;
    mdiMapMarkerAlertOutline: string;
    mdiMapMarkerCheck: string;
    mdiMapMarkerCheckOutline: string;
    mdiMapMarkerCircle: string;
    mdiMapMarkerDistance: string;
    mdiMapMarkerDown: string;
    mdiMapMarkerLeft: string;
    mdiMapMarkerLeftOutline: string;
    mdiMapMarkerMinus: string;
    mdiMapMarkerMinusOutline: string;
    mdiMapMarkerMultiple: string;
    mdiMapMarkerMultipleOutline: string;
    mdiMapMarkerOff: string;
    mdiMapMarkerOffOutline: string;
    mdiMapMarkerOutline: string;
    mdiMapMarkerPath: string;
    mdiMapMarkerPlus: string;
    mdiMapMarkerPlusOutline: string;
    mdiMapMarkerQuestion: string;
    mdiMapMarkerQuestionOutline: string;
    mdiMapMarkerRadius: string;
    mdiMapMarkerRadiusOutline: string;
    mdiMapMarkerRemove: string;
    mdiMapMarkerRemoveOutline: string;
    mdiMapMarkerRemoveVariant: string;
    mdiMapMarkerRight: string;
    mdiMapMarkerRightOutline: string;
    mdiMapMarkerStar: string;
    mdiMapMarkerStarOutline: string;
    mdiMapMarkerUp: string;
    mdiMapMinus: string;
    mdiMapOutline: string;
    mdiMapPlus: string;
    mdiMapSearch: string;
    mdiMapSearchOutline: string;
    mdiMapbox: string;
    mdiMargin: string;
    mdiMarker: string;
    mdiMarkerCancel: string;
    mdiMarkerCheck: string;
    mdiMastodon: string;
    mdiMaterialDesign: string;
    mdiMaterialUi: string;
    mdiMathCompass: string;
    mdiMathCos: string;
    mdiMathIntegral: string;
    mdiMathIntegralBox: string;
    mdiMathLog: string;
    mdiMathNorm: string;
    mdiMathNormBox: string;
    mdiMathSin: string;
    mdiMathTan: string;
    mdiMatrix: string;
    mdiMedal: string;
    mdiMedalOutline: string;
    mdiMedicalBag: string;
    mdiMedicalCottonSwab: string;
    mdiMedication: string;
    mdiMedicationOutline: string;
    mdiMeditation: string;
    mdiMemory: string;
    mdiMemoryArrowDown: string;
    mdiMenorah: string;
    mdiMenorahFire: string;
    mdiMenu: string;
    mdiMenuClose: string;
    mdiMenuDown: string;
    mdiMenuDownOutline: string;
    mdiMenuLeft: string;
    mdiMenuLeftOutline: string;
    mdiMenuOpen: string;
    mdiMenuRight: string;
    mdiMenuRightOutline: string;
    mdiMenuSwap: string;
    mdiMenuSwapOutline: string;
    mdiMenuUp: string;
    mdiMenuUpOutline: string;
    mdiMerge: string;
    mdiMessage: string;
    mdiMessageAlert: string;
    mdiMessageAlertOutline: string;
    mdiMessageArrowLeft: string;
    mdiMessageArrowLeftOutline: string;
    mdiMessageArrowRight: string;
    mdiMessageArrowRightOutline: string;
    mdiMessageBadge: string;
    mdiMessageBadgeOutline: string;
    mdiMessageBookmark: string;
    mdiMessageBookmarkOutline: string;
    mdiMessageBulleted: string;
    mdiMessageBulletedOff: string;
    mdiMessageCheck: string;
    mdiMessageCheckOutline: string;
    mdiMessageCog: string;
    mdiMessageCogOutline: string;
    mdiMessageDraw: string;
    mdiMessageFast: string;
    mdiMessageFastOutline: string;
    mdiMessageFlash: string;
    mdiMessageFlashOutline: string;
    mdiMessageImage: string;
    mdiMessageImageOutline: string;
    mdiMessageLock: string;
    mdiMessageLockOutline: string;
    mdiMessageMinus: string;
    mdiMessageMinusOutline: string;
    mdiMessageOff: string;
    mdiMessageOffOutline: string;
    mdiMessageOutline: string;
    mdiMessagePlus: string;
    mdiMessagePlusOutline: string;
    mdiMessageProcessing: string;
    mdiMessageProcessingOutline: string;
    mdiMessageQuestion: string;
    mdiMessageQuestionOutline: string;
    mdiMessageReply: string;
    mdiMessageReplyOutline: string;
    mdiMessageReplyText: string;
    mdiMessageReplyTextOutline: string;
    mdiMessageSettings: string;
    mdiMessageSettingsOutline: string;
    mdiMessageStar: string;
    mdiMessageStarOutline: string;
    mdiMessageText: string;
    mdiMessageTextClock: string;
    mdiMessageTextClockOutline: string;
    mdiMessageTextFast: string;
    mdiMessageTextFastOutline: string;
    mdiMessageTextLock: string;
    mdiMessageTextLockOutline: string;
    mdiMessageTextOutline: string;
    mdiMessageVideo: string;
    mdiMeteor: string;
    mdiMeterElectric: string;
    mdiMeterElectricOutline: string;
    mdiMeterGas: string;
    mdiMeterGasOutline: string;
    mdiMetronome: string;
    mdiMetronomeTick: string;
    mdiMicroSd: string;
    mdiMicrophone: string;
    mdiMicrophoneMessage: string;
    mdiMicrophoneMessageOff: string;
    mdiMicrophoneMinus: string;
    mdiMicrophoneOff: string;
    mdiMicrophoneOutline: string;
    mdiMicrophonePlus: string;
    mdiMicrophoneQuestion: string;
    mdiMicrophoneQuestionOutline: string;
    mdiMicrophoneSettings: string;
    mdiMicrophoneVariant: string;
    mdiMicrophoneVariantOff: string;
    mdiMicroscope: string;
    mdiMicrosoft: string;
    mdiMicrosoftAccess: string;
    mdiMicrosoftAzure: string;
    mdiMicrosoftAzureDevops: string;
    mdiMicrosoftBing: string;
    mdiMicrosoftDynamics365: string;
    mdiMicrosoftEdge: string;
    mdiMicrosoftExcel: string;
    mdiMicrosoftInternetExplorer: string;
    mdiMicrosoftOffice: string;
    mdiMicrosoftOnedrive: string;
    mdiMicrosoftOnenote: string;
    mdiMicrosoftOutlook: string;
    mdiMicrosoftPowerpoint: string;
    mdiMicrosoftSharepoint: string;
    mdiMicrosoftTeams: string;
    mdiMicrosoftVisualStudio: string;
    mdiMicrosoftVisualStudioCode: string;
    mdiMicrosoftWindows: string;
    mdiMicrosoftWindowsClassic: string;
    mdiMicrosoftWord: string;
    mdiMicrosoftXbox: string;
    mdiMicrosoftXboxController: string;
    mdiMicrosoftXboxControllerBatteryAlert: string;
    mdiMicrosoftXboxControllerBatteryCharging: string;
    mdiMicrosoftXboxControllerBatteryEmpty: string;
    mdiMicrosoftXboxControllerBatteryFull: string;
    mdiMicrosoftXboxControllerBatteryLow: string;
    mdiMicrosoftXboxControllerBatteryMedium: string;
    mdiMicrosoftXboxControllerBatteryUnknown: string;
    mdiMicrosoftXboxControllerMenu: string;
    mdiMicrosoftXboxControllerOff: string;
    mdiMicrosoftXboxControllerView: string;
    mdiMicrowave: string;
    mdiMicrowaveOff: string;
    mdiMiddleware: string;
    mdiMiddlewareOutline: string;
    mdiMidi: string;
    mdiMidiPort: string;
    mdiMine: string;
    mdiMinecraft: string;
    mdiMiniSd: string;
    mdiMinidisc: string;
    mdiMinus: string;
    mdiMinusBox: string;
    mdiMinusBoxMultiple: string;
    mdiMinusBoxMultipleOutline: string;
    mdiMinusBoxOutline: string;
    mdiMinusCircle: string;
    mdiMinusCircleMultiple: string;
    mdiMinusCircleMultipleOutline: string;
    mdiMinusCircleOff: string;
    mdiMinusCircleOffOutline: string;
    mdiMinusCircleOutline: string;
    mdiMinusNetwork: string;
    mdiMinusNetworkOutline: string;
    mdiMinusThick: string;
    mdiMirror: string;
    mdiMirrorRectangle: string;
    mdiMirrorVariant: string;
    mdiMixedMartialArts: string;
    mdiMixedReality: string;
    mdiMolecule: string;
    mdiMoleculeCo: string;
    mdiMoleculeCo2: string;
    mdiMonitor: string;
    mdiMonitorAccount: string;
    mdiMonitorArrowDown: string;
    mdiMonitorArrowDownVariant: string;
    mdiMonitorCellphone: string;
    mdiMonitorCellphoneStar: string;
    mdiMonitorDashboard: string;
    mdiMonitorEdit: string;
    mdiMonitorEye: string;
    mdiMonitorLock: string;
    mdiMonitorMultiple: string;
    mdiMonitorOff: string;
    mdiMonitorScreenshot: string;
    mdiMonitorShare: string;
    mdiMonitorShimmer: string;
    mdiMonitorSmall: string;
    mdiMonitorSpeaker: string;
    mdiMonitorSpeakerOff: string;
    mdiMonitorStar: string;
    mdiMonitorVertical: string;
    mdiMoonFirstQuarter: string;
    mdiMoonFull: string;
    mdiMoonLastQuarter: string;
    mdiMoonNew: string;
    mdiMoonWaningCrescent: string;
    mdiMoonWaningGibbous: string;
    mdiMoonWaxingCrescent: string;
    mdiMoonWaxingGibbous: string;
    mdiMoped: string;
    mdiMopedElectric: string;
    mdiMopedElectricOutline: string;
    mdiMopedOutline: string;
    mdiMore: string;
    mdiMortarPestle: string;
    mdiMortarPestlePlus: string;
    mdiMosque: string;
    mdiMosqueOutline: string;
    mdiMotherHeart: string;
    mdiMotherNurse: string;
    mdiMotion: string;
    mdiMotionOutline: string;
    mdiMotionPause: string;
    mdiMotionPauseOutline: string;
    mdiMotionPlay: string;
    mdiMotionPlayOutline: string;
    mdiMotionSensor: string;
    mdiMotionSensorOff: string;
    mdiMotorbike: string;
    mdiMotorbikeElectric: string;
    mdiMotorbikeOff: string;
    mdiMouse: string;
    mdiMouseBluetooth: string;
    mdiMouseLeftClick: string;
    mdiMouseLeftClickOutline: string;
    mdiMouseMoveDown: string;
    mdiMouseMoveUp: string;
    mdiMouseMoveVertical: string;
    mdiMouseOff: string;
    mdiMouseOutline: string;
    mdiMouseRightClick: string;
    mdiMouseRightClickOutline: string;
    mdiMouseScrollWheel: string;
    mdiMouseVariant: string;
    mdiMouseVariantOff: string;
    mdiMoveResize: string;
    mdiMoveResizeVariant: string;
    mdiMovie: string;
    mdiMovieCheck: string;
    mdiMovieCheckOutline: string;
    mdiMovieCog: string;
    mdiMovieCogOutline: string;
    mdiMovieEdit: string;
    mdiMovieEditOutline: string;
    mdiMovieFilter: string;
    mdiMovieFilterOutline: string;
    mdiMovieMinus: string;
    mdiMovieMinusOutline: string;
    mdiMovieOff: string;
    mdiMovieOffOutline: string;
    mdiMovieOpen: string;
    mdiMovieOpenCheck: string;
    mdiMovieOpenCheckOutline: string;
    mdiMovieOpenCog: string;
    mdiMovieOpenCogOutline: string;
    mdiMovieOpenEdit: string;
    mdiMovieOpenEditOutline: string;
    mdiMovieOpenMinus: string;
    mdiMovieOpenMinusOutline: string;
    mdiMovieOpenOff: string;
    mdiMovieOpenOffOutline: string;
    mdiMovieOpenOutline: string;
    mdiMovieOpenPlay: string;
    mdiMovieOpenPlayOutline: string;
    mdiMovieOpenPlus: string;
    mdiMovieOpenPlusOutline: string;
    mdiMovieOpenRemove: string;
    mdiMovieOpenRemoveOutline: string;
    mdiMovieOpenSettings: string;
    mdiMovieOpenSettingsOutline: string;
    mdiMovieOpenStar: string;
    mdiMovieOpenStarOutline: string;
    mdiMovieOutline: string;
    mdiMoviePlay: string;
    mdiMoviePlayOutline: string;
    mdiMoviePlus: string;
    mdiMoviePlusOutline: string;
    mdiMovieRemove: string;
    mdiMovieRemoveOutline: string;
    mdiMovieRoll: string;
    mdiMovieSearch: string;
    mdiMovieSearchOutline: string;
    mdiMovieSettings: string;
    mdiMovieSettingsOutline: string;
    mdiMovieStar: string;
    mdiMovieStarOutline: string;
    mdiMower: string;
    mdiMowerBag: string;
    mdiMowerBagOn: string;
    mdiMowerOn: string;
    mdiMuffin: string;
    mdiMulticast: string;
    mdiMultimedia: string;
    mdiMultiplication: string;
    mdiMultiplicationBox: string;
    mdiMushroom: string;
    mdiMushroomOff: string;
    mdiMushroomOffOutline: string;
    mdiMushroomOutline: string;
    mdiMusic: string;
    mdiMusicAccidentalDoubleFlat: string;
    mdiMusicAccidentalDoubleSharp: string;
    mdiMusicAccidentalFlat: string;
    mdiMusicAccidentalNatural: string;
    mdiMusicAccidentalSharp: string;
    mdiMusicBox: string;
    mdiMusicBoxMultiple: string;
    mdiMusicBoxMultipleOutline: string;
    mdiMusicBoxOutline: string;
    mdiMusicCircle: string;
    mdiMusicCircleOutline: string;
    mdiMusicClefAlto: string;
    mdiMusicClefBass: string;
    mdiMusicClefTreble: string;
    mdiMusicNote: string;
    mdiMusicNoteBluetooth: string;
    mdiMusicNoteBluetoothOff: string;
    mdiMusicNoteEighth: string;
    mdiMusicNoteEighthDotted: string;
    mdiMusicNoteHalf: string;
    mdiMusicNoteHalfDotted: string;
    mdiMusicNoteMinus: string;
    mdiMusicNoteOff: string;
    mdiMusicNoteOffOutline: string;
    mdiMusicNoteOutline: string;
    mdiMusicNotePlus: string;
    mdiMusicNoteQuarter: string;
    mdiMusicNoteQuarterDotted: string;
    mdiMusicNoteSixteenth: string;
    mdiMusicNoteSixteenthDotted: string;
    mdiMusicNoteWhole: string;
    mdiMusicNoteWholeDotted: string;
    mdiMusicOff: string;
    mdiMusicRestEighth: string;
    mdiMusicRestHalf: string;
    mdiMusicRestQuarter: string;
    mdiMusicRestSixteenth: string;
    mdiMusicRestWhole: string;
    mdiMustache: string;
    mdiNail: string;
    mdiNas: string;
    mdiNativescript: string;
    mdiNature: string;
    mdiNatureOutline: string;
    mdiNaturePeople: string;
    mdiNaturePeopleOutline: string;
    mdiNavigation: string;
    mdiNavigationOutline: string;
    mdiNavigationVariant: string;
    mdiNavigationVariantOutline: string;
    mdiNearMe: string;
    mdiNecklace: string;
    mdiNeedle: string;
    mdiNeedleOff: string;
    mdiNetflix: string;
    mdiNetwork: string;
    mdiNetworkOff: string;
    mdiNetworkOffOutline: string;
    mdiNetworkOutline: string;
    mdiNetworkPos: string;
    mdiNetworkStrength1: string;
    mdiNetworkStrength1Alert: string;
    mdiNetworkStrength2: string;
    mdiNetworkStrength2Alert: string;
    mdiNetworkStrength3: string;
    mdiNetworkStrength3Alert: string;
    mdiNetworkStrength4: string;
    mdiNetworkStrength4Alert: string;
    mdiNetworkStrength4Cog: string;
    mdiNetworkStrengthOff: string;
    mdiNetworkStrengthOffOutline: string;
    mdiNetworkStrengthOutline: string;
    mdiNewBox: string;
    mdiNewspaper: string;
    mdiNewspaperCheck: string;
    mdiNewspaperMinus: string;
    mdiNewspaperPlus: string;
    mdiNewspaperRemove: string;
    mdiNewspaperVariant: string;
    mdiNewspaperVariantMultiple: string;
    mdiNewspaperVariantMultipleOutline: string;
    mdiNewspaperVariantOutline: string;
    mdiNfc: string;
    mdiNfcSearchVariant: string;
    mdiNfcTap: string;
    mdiNfcVariant: string;
    mdiNfcVariantOff: string;
    mdiNinja: string;
    mdiNintendoGameBoy: string;
    mdiNintendoSwitch: string;
    mdiNintendoWii: string;
    mdiNintendoWiiu: string;
    mdiNix: string;
    mdiNodejs: string;
    mdiNoodles: string;
    mdiNotEqual: string;
    mdiNotEqualVariant: string;
    mdiNote: string;
    mdiNoteAlert: string;
    mdiNoteAlertOutline: string;
    mdiNoteCheck: string;
    mdiNoteCheckOutline: string;
    mdiNoteEdit: string;
    mdiNoteEditOutline: string;
    mdiNoteMinus: string;
    mdiNoteMinusOutline: string;
    mdiNoteMultiple: string;
    mdiNoteMultipleOutline: string;
    mdiNoteOff: string;
    mdiNoteOffOutline: string;
    mdiNoteOutline: string;
    mdiNotePlus: string;
    mdiNotePlusOutline: string;
    mdiNoteRemove: string;
    mdiNoteRemoveOutline: string;
    mdiNoteSearch: string;
    mdiNoteSearchOutline: string;
    mdiNoteText: string;
    mdiNoteTextOutline: string;
    mdiNotebook: string;
    mdiNotebookCheck: string;
    mdiNotebookCheckOutline: string;
    mdiNotebookEdit: string;
    mdiNotebookEditOutline: string;
    mdiNotebookHeart: string;
    mdiNotebookHeartOutline: string;
    mdiNotebookMinus: string;
    mdiNotebookMinusOutline: string;
    mdiNotebookMultiple: string;
    mdiNotebookOutline: string;
    mdiNotebookPlus: string;
    mdiNotebookPlusOutline: string;
    mdiNotebookRemove: string;
    mdiNotebookRemoveOutline: string;
    mdiNotificationClearAll: string;
    mdiNpm: string;
    mdiNuke: string;
    mdiNull: string;
    mdiNumeric: string;
    mdiNumeric0: string;
    mdiNumeric0Box: string;
    mdiNumeric0BoxMultiple: string;
    mdiNumeric0BoxMultipleOutline: string;
    mdiNumeric0BoxOutline: string;
    mdiNumeric0Circle: string;
    mdiNumeric0CircleOutline: string;
    mdiNumeric1: string;
    mdiNumeric1Box: string;
    mdiNumeric1BoxMultiple: string;
    mdiNumeric1BoxMultipleOutline: string;
    mdiNumeric1BoxOutline: string;
    mdiNumeric1Circle: string;
    mdiNumeric1CircleOutline: string;
    mdiNumeric10: string;
    mdiNumeric10Box: string;
    mdiNumeric10BoxMultiple: string;
    mdiNumeric10BoxMultipleOutline: string;
    mdiNumeric10BoxOutline: string;
    mdiNumeric10Circle: string;
    mdiNumeric10CircleOutline: string;
    mdiNumeric2: string;
    mdiNumeric2Box: string;
    mdiNumeric2BoxMultiple: string;
    mdiNumeric2BoxMultipleOutline: string;
    mdiNumeric2BoxOutline: string;
    mdiNumeric2Circle: string;
    mdiNumeric2CircleOutline: string;
    mdiNumeric3: string;
    mdiNumeric3Box: string;
    mdiNumeric3BoxMultiple: string;
    mdiNumeric3BoxMultipleOutline: string;
    mdiNumeric3BoxOutline: string;
    mdiNumeric3Circle: string;
    mdiNumeric3CircleOutline: string;
    mdiNumeric4: string;
    mdiNumeric4Box: string;
    mdiNumeric4BoxMultiple: string;
    mdiNumeric4BoxMultipleOutline: string;
    mdiNumeric4BoxOutline: string;
    mdiNumeric4Circle: string;
    mdiNumeric4CircleOutline: string;
    mdiNumeric5: string;
    mdiNumeric5Box: string;
    mdiNumeric5BoxMultiple: string;
    mdiNumeric5BoxMultipleOutline: string;
    mdiNumeric5BoxOutline: string;
    mdiNumeric5Circle: string;
    mdiNumeric5CircleOutline: string;
    mdiNumeric6: string;
    mdiNumeric6Box: string;
    mdiNumeric6BoxMultiple: string;
    mdiNumeric6BoxMultipleOutline: string;
    mdiNumeric6BoxOutline: string;
    mdiNumeric6Circle: string;
    mdiNumeric6CircleOutline: string;
    mdiNumeric7: string;
    mdiNumeric7Box: string;
    mdiNumeric7BoxMultiple: string;
    mdiNumeric7BoxMultipleOutline: string;
    mdiNumeric7BoxOutline: string;
    mdiNumeric7Circle: string;
    mdiNumeric7CircleOutline: string;
    mdiNumeric8: string;
    mdiNumeric8Box: string;
    mdiNumeric8BoxMultiple: string;
    mdiNumeric8BoxMultipleOutline: string;
    mdiNumeric8BoxOutline: string;
    mdiNumeric8Circle: string;
    mdiNumeric8CircleOutline: string;
    mdiNumeric9: string;
    mdiNumeric9Box: string;
    mdiNumeric9BoxMultiple: string;
    mdiNumeric9BoxMultipleOutline: string;
    mdiNumeric9BoxOutline: string;
    mdiNumeric9Circle: string;
    mdiNumeric9CircleOutline: string;
    mdiNumeric9Plus: string;
    mdiNumeric9PlusBox: string;
    mdiNumeric9PlusBoxMultiple: string;
    mdiNumeric9PlusBoxMultipleOutline: string;
    mdiNumeric9PlusBoxOutline: string;
    mdiNumeric9PlusCircle: string;
    mdiNumeric9PlusCircleOutline: string;
    mdiNumericNegative1: string;
    mdiNumericOff: string;
    mdiNumericPositive1: string;
    mdiNut: string;
    mdiNutrition: string;
    mdiNuxt: string;
    mdiOar: string;
    mdiOcarina: string;
    mdiOci: string;
    mdiOcr: string;
    mdiOctagon: string;
    mdiOctagonOutline: string;
    mdiOctagram: string;
    mdiOctagramEdit: string;
    mdiOctagramEditOutline: string;
    mdiOctagramMinus: string;
    mdiOctagramMinusOutline: string;
    mdiOctagramOutline: string;
    mdiOctagramPlus: string;
    mdiOctagramPlusOutline: string;
    mdiOctahedron: string;
    mdiOctahedronOff: string;
    mdiOdnoklassniki: string;
    mdiOffer: string;
    mdiOfficeBuilding: string;
    mdiOfficeBuildingCog: string;
    mdiOfficeBuildingCogOutline: string;
    mdiOfficeBuildingMarker: string;
    mdiOfficeBuildingMarkerOutline: string;
    mdiOfficeBuildingMinus: string;
    mdiOfficeBuildingMinusOutline: string;
    mdiOfficeBuildingOutline: string;
    mdiOfficeBuildingPlus: string;
    mdiOfficeBuildingPlusOutline: string;
    mdiOfficeBuildingRemove: string;
    mdiOfficeBuildingRemoveOutline: string;
    mdiOil: string;
    mdiOilLamp: string;
    mdiOilLevel: string;
    mdiOilTemperature: string;
    mdiOm: string;
    mdiOmega: string;
    mdiOneUp: string;
    mdiOnepassword: string;
    mdiOpacity: string;
    mdiOpenInApp: string;
    mdiOpenInNew: string;
    mdiOpenSourceInitiative: string;
    mdiOpenid: string;
    mdiOpera: string;
    mdiOrbit: string;
    mdiOrbitVariant: string;
    mdiOrderAlphabeticalAscending: string;
    mdiOrderAlphabeticalDescending: string;
    mdiOrderBoolAscending: string;
    mdiOrderBoolAscendingVariant: string;
    mdiOrderBoolDescending: string;
    mdiOrderBoolDescendingVariant: string;
    mdiOrderNumericAscending: string;
    mdiOrderNumericDescending: string;
    mdiOrigin: string;
    mdiOrnament: string;
    mdiOrnamentVariant: string;
    mdiOutdoorLamp: string;
    mdiOverscan: string;
    mdiOwl: string;
    mdiPacMan: string;
    mdiPackage: string;
    mdiPackageCheck: string;
    mdiPackageDown: string;
    mdiPackageUp: string;
    mdiPackageVariant: string;
    mdiPackageVariantClosed: string;
    mdiPackageVariantClosedCheck: string;
    mdiPackageVariantClosedMinus: string;
    mdiPackageVariantClosedPlus: string;
    mdiPackageVariantClosedRemove: string;
    mdiPackageVariantMinus: string;
    mdiPackageVariantPlus: string;
    mdiPackageVariantRemove: string;
    mdiPageFirst: string;
    mdiPageLast: string;
    mdiPageLayoutBody: string;
    mdiPageLayoutFooter: string;
    mdiPageLayoutHeader: string;
    mdiPageLayoutHeaderFooter: string;
    mdiPageLayoutSidebarLeft: string;
    mdiPageLayoutSidebarRight: string;
    mdiPageNext: string;
    mdiPageNextOutline: string;
    mdiPagePrevious: string;
    mdiPagePreviousOutline: string;
    mdiPail: string;
    mdiPailMinus: string;
    mdiPailMinusOutline: string;
    mdiPailOff: string;
    mdiPailOffOutline: string;
    mdiPailOutline: string;
    mdiPailPlus: string;
    mdiPailPlusOutline: string;
    mdiPailRemove: string;
    mdiPailRemoveOutline: string;
    mdiPalette: string;
    mdiPaletteAdvanced: string;
    mdiPaletteOutline: string;
    mdiPaletteSwatch: string;
    mdiPaletteSwatchOutline: string;
    mdiPaletteSwatchVariant: string;
    mdiPalmTree: string;
    mdiPan: string;
    mdiPanBottomLeft: string;
    mdiPanBottomRight: string;
    mdiPanDown: string;
    mdiPanHorizontal: string;
    mdiPanLeft: string;
    mdiPanRight: string;
    mdiPanTopLeft: string;
    mdiPanTopRight: string;
    mdiPanUp: string;
    mdiPanVertical: string;
    mdiPanda: string;
    mdiPandora: string;
    mdiPanorama: string;
    mdiPanoramaFisheye: string;
    mdiPanoramaHorizontal: string;
    mdiPanoramaHorizontalOutline: string;
    mdiPanoramaOutline: string;
    mdiPanoramaSphere: string;
    mdiPanoramaSphereOutline: string;
    mdiPanoramaVariant: string;
    mdiPanoramaVariantOutline: string;
    mdiPanoramaVertical: string;
    mdiPanoramaVerticalOutline: string;
    mdiPanoramaWideAngle: string;
    mdiPanoramaWideAngleOutline: string;
    mdiPaperCutVertical: string;
    mdiPaperRoll: string;
    mdiPaperRollOutline: string;
    mdiPaperclip: string;
    mdiPaperclipCheck: string;
    mdiPaperclipLock: string;
    mdiPaperclipMinus: string;
    mdiPaperclipOff: string;
    mdiPaperclipPlus: string;
    mdiPaperclipRemove: string;
    mdiParachute: string;
    mdiParachuteOutline: string;
    mdiParagliding: string;
    mdiParking: string;
    mdiPartyPopper: string;
    mdiPassport: string;
    mdiPassportAlert: string;
    mdiPassportBiometric: string;
    mdiPassportCancel: string;
    mdiPassportCheck: string;
    mdiPassportMinus: string;
    mdiPassportPlus: string;
    mdiPassportRemove: string;
    mdiPasta: string;
    mdiPatioHeater: string;
    mdiPatreon: string;
    mdiPause: string;
    mdiPauseBox: string;
    mdiPauseBoxOutline: string;
    mdiPauseCircle: string;
    mdiPauseCircleOutline: string;
    mdiPauseOctagon: string;
    mdiPauseOctagonOutline: string;
    mdiPaw: string;
    mdiPawOff: string;
    mdiPawOffOutline: string;
    mdiPawOutline: string;
    mdiPeace: string;
    mdiPeanut: string;
    mdiPeanutOff: string;
    mdiPeanutOffOutline: string;
    mdiPeanutOutline: string;
    mdiPen: string;
    mdiPenLock: string;
    mdiPenMinus: string;
    mdiPenOff: string;
    mdiPenPlus: string;
    mdiPenRemove: string;
    mdiPencil: string;
    mdiPencilBox: string;
    mdiPencilBoxMultiple: string;
    mdiPencilBoxMultipleOutline: string;
    mdiPencilBoxOutline: string;
    mdiPencilCircle: string;
    mdiPencilCircleOutline: string;
    mdiPencilLock: string;
    mdiPencilLockOutline: string;
    mdiPencilMinus: string;
    mdiPencilMinusOutline: string;
    mdiPencilOff: string;
    mdiPencilOffOutline: string;
    mdiPencilOutline: string;
    mdiPencilPlus: string;
    mdiPencilPlusOutline: string;
    mdiPencilRemove: string;
    mdiPencilRemoveOutline: string;
    mdiPencilRuler: string;
    mdiPencilRulerOutline: string;
    mdiPenguin: string;
    mdiPentagon: string;
    mdiPentagonOutline: string;
    mdiPentagram: string;
    mdiPercent: string;
    mdiPercentBox: string;
    mdiPercentBoxOutline: string;
    mdiPercentCircle: string;
    mdiPercentCircleOutline: string;
    mdiPercentOutline: string;
    mdiPeriodicTable: string;
    mdiPerspectiveLess: string;
    mdiPerspectiveMore: string;
    mdiPh: string;
    mdiPhone: string;
    mdiPhoneAlert: string;
    mdiPhoneAlertOutline: string;
    mdiPhoneBluetooth: string;
    mdiPhoneBluetoothOutline: string;
    mdiPhoneCancel: string;
    mdiPhoneCancelOutline: string;
    mdiPhoneCheck: string;
    mdiPhoneCheckOutline: string;
    mdiPhoneClassic: string;
    mdiPhoneClassicOff: string;
    mdiPhoneClock: string;
    mdiPhoneDial: string;
    mdiPhoneDialOutline: string;
    mdiPhoneForward: string;
    mdiPhoneForwardOutline: string;
    mdiPhoneHangup: string;
    mdiPhoneHangupOutline: string;
    mdiPhoneInTalk: string;
    mdiPhoneInTalkOutline: string;
    mdiPhoneIncoming: string;
    mdiPhoneIncomingOutgoing: string;
    mdiPhoneIncomingOutgoingOutline: string;
    mdiPhoneIncomingOutline: string;
    mdiPhoneLock: string;
    mdiPhoneLockOutline: string;
    mdiPhoneLog: string;
    mdiPhoneLogOutline: string;
    mdiPhoneMessage: string;
    mdiPhoneMessageOutline: string;
    mdiPhoneMinus: string;
    mdiPhoneMinusOutline: string;
    mdiPhoneMissed: string;
    mdiPhoneMissedOutline: string;
    mdiPhoneOff: string;
    mdiPhoneOffOutline: string;
    mdiPhoneOutgoing: string;
    mdiPhoneOutgoingOutline: string;
    mdiPhoneOutline: string;
    mdiPhonePaused: string;
    mdiPhonePausedOutline: string;
    mdiPhonePlus: string;
    mdiPhonePlusOutline: string;
    mdiPhoneRefresh: string;
    mdiPhoneRefreshOutline: string;
    mdiPhoneRemove: string;
    mdiPhoneRemoveOutline: string;
    mdiPhoneReturn: string;
    mdiPhoneReturnOutline: string;
    mdiPhoneRing: string;
    mdiPhoneRingOutline: string;
    mdiPhoneRotateLandscape: string;
    mdiPhoneRotatePortrait: string;
    mdiPhoneSettings: string;
    mdiPhoneSettingsOutline: string;
    mdiPhoneSync: string;
    mdiPhoneSyncOutline: string;
    mdiPhoneVoip: string;
    mdiPi: string;
    mdiPiBox: string;
    mdiPiHole: string;
    mdiPiano: string;
    mdiPianoOff: string;
    mdiPickaxe: string;
    mdiPictureInPictureBottomRight: string;
    mdiPictureInPictureBottomRightOutline: string;
    mdiPictureInPictureTopRight: string;
    mdiPictureInPictureTopRightOutline: string;
    mdiPier: string;
    mdiPierCrane: string;
    mdiPig: string;
    mdiPigVariant: string;
    mdiPigVariantOutline: string;
    mdiPiggyBank: string;
    mdiPiggyBankOutline: string;
    mdiPill: string;
    mdiPillMultiple: string;
    mdiPillOff: string;
    mdiPillar: string;
    mdiPin: string;
    mdiPinOff: string;
    mdiPinOffOutline: string;
    mdiPinOutline: string;
    mdiPineTree: string;
    mdiPineTreeBox: string;
    mdiPineTreeFire: string;
    mdiPineTreeVariant: string;
    mdiPineTreeVariantOutline: string;
    mdiPinterest: string;
    mdiPinwheel: string;
    mdiPinwheelOutline: string;
    mdiPipe: string;
    mdiPipeDisconnected: string;
    mdiPipeLeak: string;
    mdiPipeValve: string;
    mdiPipeWrench: string;
    mdiPirate: string;
    mdiPistol: string;
    mdiPiston: string;
    mdiPitchfork: string;
    mdiPizza: string;
    mdiPlaneCar: string;
    mdiPlaneTrain: string;
    mdiPlay: string;
    mdiPlayBox: string;
    mdiPlayBoxEditOutline: string;
    mdiPlayBoxLock: string;
    mdiPlayBoxLockOpen: string;
    mdiPlayBoxLockOpenOutline: string;
    mdiPlayBoxLockOutline: string;
    mdiPlayBoxMultiple: string;
    mdiPlayBoxMultipleOutline: string;
    mdiPlayBoxOutline: string;
    mdiPlayCircle: string;
    mdiPlayCircleOutline: string;
    mdiPlayNetwork: string;
    mdiPlayNetworkOutline: string;
    mdiPlayOutline: string;
    mdiPlayPause: string;
    mdiPlayProtectedContent: string;
    mdiPlaySpeed: string;
    mdiPlaylistCheck: string;
    mdiPlaylistEdit: string;
    mdiPlaylistMinus: string;
    mdiPlaylistMusic: string;
    mdiPlaylistMusicOutline: string;
    mdiPlaylistPlay: string;
    mdiPlaylistPlus: string;
    mdiPlaylistRemove: string;
    mdiPlaylistStar: string;
    mdiPlex: string;
    mdiPliers: string;
    mdiPlus: string;
    mdiPlusBox: string;
    mdiPlusBoxMultiple: string;
    mdiPlusBoxMultipleOutline: string;
    mdiPlusBoxOutline: string;
    mdiPlusCircle: string;
    mdiPlusCircleMultiple: string;
    mdiPlusCircleMultipleOutline: string;
    mdiPlusCircleOutline: string;
    mdiPlusLock: string;
    mdiPlusLockOpen: string;
    mdiPlusMinus: string;
    mdiPlusMinusBox: string;
    mdiPlusMinusVariant: string;
    mdiPlusNetwork: string;
    mdiPlusNetworkOutline: string;
    mdiPlusOutline: string;
    mdiPlusThick: string;
    mdiPocket: string;
    mdiPodcast: string;
    mdiPodium: string;
    mdiPodiumBronze: string;
    mdiPodiumGold: string;
    mdiPodiumSilver: string;
    mdiPointOfSale: string;
    mdiPokeball: string;
    mdiPokemonGo: string;
    mdiPokerChip: string;
    mdiPolaroid: string;
    mdiPoliceBadge: string;
    mdiPoliceBadgeOutline: string;
    mdiPoliceStation: string;
    mdiPoll: string;
    mdiPolo: string;
    mdiPolymer: string;
    mdiPool: string;
    mdiPoolThermometer: string;
    mdiPopcorn: string;
    mdiPost: string;
    mdiPostLamp: string;
    mdiPostOutline: string;
    mdiPostageStamp: string;
    mdiPot: string;
    mdiPotMix: string;
    mdiPotMixOutline: string;
    mdiPotOutline: string;
    mdiPotSteam: string;
    mdiPotSteamOutline: string;
    mdiPound: string;
    mdiPoundBox: string;
    mdiPoundBoxOutline: string;
    mdiPower: string;
    mdiPowerCycle: string;
    mdiPowerOff: string;
    mdiPowerOn: string;
    mdiPowerPlug: string;
    mdiPowerPlugBattery: string;
    mdiPowerPlugBatteryOutline: string;
    mdiPowerPlugOff: string;
    mdiPowerPlugOffOutline: string;
    mdiPowerPlugOutline: string;
    mdiPowerSettings: string;
    mdiPowerSleep: string;
    mdiPowerSocket: string;
    mdiPowerSocketAu: string;
    mdiPowerSocketCh: string;
    mdiPowerSocketDe: string;
    mdiPowerSocketEu: string;
    mdiPowerSocketFr: string;
    mdiPowerSocketIt: string;
    mdiPowerSocketJp: string;
    mdiPowerSocketUk: string;
    mdiPowerSocketUs: string;
    mdiPowerStandby: string;
    mdiPowershell: string;
    mdiPrescription: string;
    mdiPresentation: string;
    mdiPresentationPlay: string;
    mdiPretzel: string;
    mdiPrinter: string;
    mdiPrinter3d: string;
    mdiPrinter3dNozzle: string;
    mdiPrinter3dNozzleAlert: string;
    mdiPrinter3dNozzleAlertOutline: string;
    mdiPrinter3dNozzleHeat: string;
    mdiPrinter3dNozzleHeatOutline: string;
    mdiPrinter3dNozzleOff: string;
    mdiPrinter3dNozzleOffOutline: string;
    mdiPrinter3dNozzleOutline: string;
    mdiPrinter3dOff: string;
    mdiPrinterAlert: string;
    mdiPrinterCheck: string;
    mdiPrinterEye: string;
    mdiPrinterOff: string;
    mdiPrinterOffOutline: string;
    mdiPrinterOutline: string;
    mdiPrinterPos: string;
    mdiPrinterPosAlert: string;
    mdiPrinterPosAlertOutline: string;
    mdiPrinterPosCancel: string;
    mdiPrinterPosCancelOutline: string;
    mdiPrinterPosCheck: string;
    mdiPrinterPosCheckOutline: string;
    mdiPrinterPosCog: string;
    mdiPrinterPosCogOutline: string;
    mdiPrinterPosEdit: string;
    mdiPrinterPosEditOutline: string;
    mdiPrinterPosMinus: string;
    mdiPrinterPosMinusOutline: string;
    mdiPrinterPosNetwork: string;
    mdiPrinterPosNetworkOutline: string;
    mdiPrinterPosOff: string;
    mdiPrinterPosOffOutline: string;
    mdiPrinterPosOutline: string;
    mdiPrinterPosPause: string;
    mdiPrinterPosPauseOutline: string;
    mdiPrinterPosPlay: string;
    mdiPrinterPosPlayOutline: string;
    mdiPrinterPosPlus: string;
    mdiPrinterPosPlusOutline: string;
    mdiPrinterPosRefresh: string;
    mdiPrinterPosRefreshOutline: string;
    mdiPrinterPosRemove: string;
    mdiPrinterPosRemoveOutline: string;
    mdiPrinterPosStar: string;
    mdiPrinterPosStarOutline: string;
    mdiPrinterPosStop: string;
    mdiPrinterPosStopOutline: string;
    mdiPrinterPosSync: string;
    mdiPrinterPosSyncOutline: string;
    mdiPrinterPosWrench: string;
    mdiPrinterPosWrenchOutline: string;
    mdiPrinterSearch: string;
    mdiPrinterSettings: string;
    mdiPrinterWireless: string;
    mdiPriorityHigh: string;
    mdiPriorityLow: string;
    mdiProfessionalHexagon: string;
    mdiProgressAlert: string;
    mdiProgressCheck: string;
    mdiProgressClock: string;
    mdiProgressClose: string;
    mdiProgressDownload: string;
    mdiProgressHelper: string;
    mdiProgressPencil: string;
    mdiProgressQuestion: string;
    mdiProgressStar: string;
    mdiProgressStarFourPoints: string;
    mdiProgressTag: string;
    mdiProgressUpload: string;
    mdiProgressWrench: string;
    mdiProjector: string;
    mdiProjectorOff: string;
    mdiProjectorScreen: string;
    mdiProjectorScreenOff: string;
    mdiProjectorScreenOffOutline: string;
    mdiProjectorScreenOutline: string;
    mdiProjectorScreenVariant: string;
    mdiProjectorScreenVariantOff: string;
    mdiProjectorScreenVariantOffOutline: string;
    mdiProjectorScreenVariantOutline: string;
    mdiPropaneTank: string;
    mdiPropaneTankOutline: string;
    mdiProtocol: string;
    mdiPublish: string;
    mdiPublishOff: string;
    mdiPulse: string;
    mdiPump: string;
    mdiPumpOff: string;
    mdiPumpkin: string;
    mdiPurse: string;
    mdiPurseOutline: string;
    mdiPuzzle: string;
    mdiPuzzleCheck: string;
    mdiPuzzleCheckOutline: string;
    mdiPuzzleEdit: string;
    mdiPuzzleEditOutline: string;
    mdiPuzzleHeart: string;
    mdiPuzzleHeartOutline: string;
    mdiPuzzleMinus: string;
    mdiPuzzleMinusOutline: string;
    mdiPuzzleOutline: string;
    mdiPuzzlePlus: string;
    mdiPuzzlePlusOutline: string;
    mdiPuzzleRemove: string;
    mdiPuzzleRemoveOutline: string;
    mdiPuzzleStar: string;
    mdiPuzzleStarOutline: string;
    mdiPyramid: string;
    mdiPyramidOff: string;
    mdiQi: string;
    mdiQqchat: string;
    mdiQrcode: string;
    mdiQrcodeEdit: string;
    mdiQrcodeMinus: string;
    mdiQrcodePlus: string;
    mdiQrcodeRemove: string;
    mdiQrcodeScan: string;
    mdiQuadcopter: string;
    mdiQualityHigh: string;
    mdiQualityLow: string;
    mdiQualityMedium: string;
    mdiQueueFirstInLastOut: string;
    mdiQuora: string;
    mdiRabbit: string;
    mdiRabbitVariant: string;
    mdiRabbitVariantOutline: string;
    mdiRacingHelmet: string;
    mdiRacquetball: string;
    mdiRadar: string;
    mdiRadiator: string;
    mdiRadiatorDisabled: string;
    mdiRadiatorOff: string;
    mdiRadio: string;
    mdiRadioAm: string;
    mdiRadioFm: string;
    mdiRadioHandheld: string;
    mdiRadioOff: string;
    mdiRadioTower: string;
    mdiRadioactive: string;
    mdiRadioactiveCircle: string;
    mdiRadioactiveCircleOutline: string;
    mdiRadioactiveOff: string;
    mdiRadioboxBlank: string;
    mdiRadioboxIndeterminateVariant: string;
    mdiRadioboxMarked: string;
    mdiRadiologyBox: string;
    mdiRadiologyBoxOutline: string;
    mdiRadius: string;
    mdiRadiusOutline: string;
    mdiRailroadLight: string;
    mdiRake: string;
    mdiRaspberryPi: string;
    mdiRaw: string;
    mdiRawOff: string;
    mdiRayEnd: string;
    mdiRayEndArrow: string;
    mdiRayStart: string;
    mdiRayStartArrow: string;
    mdiRayStartEnd: string;
    mdiRayStartVertexEnd: string;
    mdiRayVertex: string;
    mdiRazorDoubleEdge: string;
    mdiRazorSingleEdge: string;
    mdiReact: string;
    mdiRead: string;
    mdiReceipt: string;
    mdiReceiptClock: string;
    mdiReceiptClockOutline: string;
    mdiReceiptOutline: string;
    mdiReceiptSend: string;
    mdiReceiptSendOutline: string;
    mdiReceiptText: string;
    mdiReceiptTextArrowLeft: string;
    mdiReceiptTextArrowLeftOutline: string;
    mdiReceiptTextArrowRight: string;
    mdiReceiptTextArrowRightOutline: string;
    mdiReceiptTextCheck: string;
    mdiReceiptTextCheckOutline: string;
    mdiReceiptTextClock: string;
    mdiReceiptTextClockOutline: string;
    mdiReceiptTextEdit: string;
    mdiReceiptTextEditOutline: string;
    mdiReceiptTextMinus: string;
    mdiReceiptTextMinusOutline: string;
    mdiReceiptTextOutline: string;
    mdiReceiptTextPlus: string;
    mdiReceiptTextPlusOutline: string;
    mdiReceiptTextRemove: string;
    mdiReceiptTextRemoveOutline: string;
    mdiReceiptTextSend: string;
    mdiReceiptTextSendOutline: string;
    mdiRecord: string;
    mdiRecordCircle: string;
    mdiRecordCircleOutline: string;
    mdiRecordPlayer: string;
    mdiRecordRec: string;
    mdiRectangle: string;
    mdiRectangleOutline: string;
    mdiRecycle: string;
    mdiRecycleVariant: string;
    mdiReddit: string;
    mdiRedhat: string;
    mdiRedo: string;
    mdiRedoVariant: string;
    mdiReflectHorizontal: string;
    mdiReflectVertical: string;
    mdiRefresh: string;
    mdiRefreshAuto: string;
    mdiRefreshCircle: string;
    mdiRegex: string;
    mdiRegisteredTrademark: string;
    mdiReiterate: string;
    mdiRelationManyToMany: string;
    mdiRelationManyToOne: string;
    mdiRelationManyToOneOrMany: string;
    mdiRelationManyToOnlyOne: string;
    mdiRelationManyToZeroOrMany: string;
    mdiRelationManyToZeroOrOne: string;
    mdiRelationOneOrManyToMany: string;
    mdiRelationOneOrManyToOne: string;
    mdiRelationOneOrManyToOneOrMany: string;
    mdiRelationOneOrManyToOnlyOne: string;
    mdiRelationOneOrManyToZeroOrMany: string;
    mdiRelationOneOrManyToZeroOrOne: string;
    mdiRelationOneToMany: string;
    mdiRelationOneToOne: string;
    mdiRelationOneToOneOrMany: string;
    mdiRelationOneToOnlyOne: string;
    mdiRelationOneToZeroOrMany: string;
    mdiRelationOneToZeroOrOne: string;
    mdiRelationOnlyOneToMany: string;
    mdiRelationOnlyOneToOne: string;
    mdiRelationOnlyOneToOneOrMany: string;
    mdiRelationOnlyOneToOnlyOne: string;
    mdiRelationOnlyOneToZeroOrMany: string;
    mdiRelationOnlyOneToZeroOrOne: string;
    mdiRelationZeroOrManyToMany: string;
    mdiRelationZeroOrManyToOne: string;
    mdiRelationZeroOrManyToOneOrMany: string;
    mdiRelationZeroOrManyToOnlyOne: string;
    mdiRelationZeroOrManyToZeroOrMany: string;
    mdiRelationZeroOrManyToZeroOrOne: string;
    mdiRelationZeroOrOneToMany: string;
    mdiRelationZeroOrOneToOne: string;
    mdiRelationZeroOrOneToOneOrMany: string;
    mdiRelationZeroOrOneToOnlyOne: string;
    mdiRelationZeroOrOneToZeroOrMany: string;
    mdiRelationZeroOrOneToZeroOrOne: string;
    mdiRelativeScale: string;
    mdiReload: string;
    mdiReloadAlert: string;
    mdiReminder: string;
    mdiRemote: string;
    mdiRemoteDesktop: string;
    mdiRemoteOff: string;
    mdiRemoteTv: string;
    mdiRemoteTvOff: string;
    mdiRename: string;
    mdiRenameBox: string;
    mdiRenameBoxOutline: string;
    mdiRenameOutline: string;
    mdiReorderHorizontal: string;
    mdiReorderVertical: string;
    mdiRepeat: string;
    mdiRepeatOff: string;
    mdiRepeatOnce: string;
    mdiRepeatVariant: string;
    mdiReplay: string;
    mdiReply: string;
    mdiReplyAll: string;
    mdiReplyAllOutline: string;
    mdiReplyCircle: string;
    mdiReplyOutline: string;
    mdiReproduction: string;
    mdiResistor: string;
    mdiResistorNodes: string;
    mdiResize: string;
    mdiResizeBottomRight: string;
    mdiResponsive: string;
    mdiRestart: string;
    mdiRestartAlert: string;
    mdiRestartOff: string;
    mdiRestore: string;
    mdiRestoreAlert: string;
    mdiRewind: string;
    mdiRewind10: string;
    mdiRewind15: string;
    mdiRewind30: string;
    mdiRewind45: string;
    mdiRewind5: string;
    mdiRewind60: string;
    mdiRewindOutline: string;
    mdiRhombus: string;
    mdiRhombusMedium: string;
    mdiRhombusMediumOutline: string;
    mdiRhombusOutline: string;
    mdiRhombusSplit: string;
    mdiRhombusSplitOutline: string;
    mdiRibbon: string;
    mdiRice: string;
    mdiRickshaw: string;
    mdiRickshawElectric: string;
    mdiRing: string;
    mdiRivet: string;
    mdiRoad: string;
    mdiRoadVariant: string;
    mdiRobber: string;
    mdiRobot: string;
    mdiRobotAngry: string;
    mdiRobotAngryOutline: string;
    mdiRobotConfused: string;
    mdiRobotConfusedOutline: string;
    mdiRobotDead: string;
    mdiRobotDeadOutline: string;
    mdiRobotExcited: string;
    mdiRobotExcitedOutline: string;
    mdiRobotHappy: string;
    mdiRobotHappyOutline: string;
    mdiRobotIndustrial: string;
    mdiRobotIndustrialOutline: string;
    mdiRobotLove: string;
    mdiRobotLoveOutline: string;
    mdiRobotMower: string;
    mdiRobotMowerOutline: string;
    mdiRobotOff: string;
    mdiRobotOffOutline: string;
    mdiRobotOutline: string;
    mdiRobotVacuum: string;
    mdiRobotVacuumAlert: string;
    mdiRobotVacuumOff: string;
    mdiRobotVacuumVariant: string;
    mdiRobotVacuumVariantAlert: string;
    mdiRobotVacuumVariantOff: string;
    mdiRocket: string;
    mdiRocketLaunch: string;
    mdiRocketLaunchOutline: string;
    mdiRocketOutline: string;
    mdiRodent: string;
    mdiRollerShade: string;
    mdiRollerShadeClosed: string;
    mdiRollerSkate: string;
    mdiRollerSkateOff: string;
    mdiRollerblade: string;
    mdiRollerbladeOff: string;
    mdiRollupjs: string;
    mdiRolodex: string;
    mdiRolodexOutline: string;
    mdiRomanNumeral1: string;
    mdiRomanNumeral10: string;
    mdiRomanNumeral2: string;
    mdiRomanNumeral3: string;
    mdiRomanNumeral4: string;
    mdiRomanNumeral5: string;
    mdiRomanNumeral6: string;
    mdiRomanNumeral7: string;
    mdiRomanNumeral8: string;
    mdiRomanNumeral9: string;
    mdiRoomService: string;
    mdiRoomServiceOutline: string;
    mdiRotate360: string;
    mdiRotate3d: string;
    mdiRotate3dVariant: string;
    mdiRotateLeft: string;
    mdiRotateLeftVariant: string;
    mdiRotateOrbit: string;
    mdiRotateRight: string;
    mdiRotateRightVariant: string;
    mdiRoundedCorner: string;
    mdiRouter: string;
    mdiRouterNetwork: string;
    mdiRouterNetworkWireless: string;
    mdiRouterWireless: string;
    mdiRouterWirelessOff: string;
    mdiRouterWirelessSettings: string;
    mdiRoutes: string;
    mdiRoutesClock: string;
    mdiRowing: string;
    mdiRss: string;
    mdiRssBox: string;
    mdiRssOff: string;
    mdiRug: string;
    mdiRugby: string;
    mdiRuler: string;
    mdiRulerSquare: string;
    mdiRulerSquareCompass: string;
    mdiRun: string;
    mdiRunFast: string;
    mdiRvTruck: string;
    mdiSack: string;
    mdiSackOutline: string;
    mdiSackPercent: string;
    mdiSafe: string;
    mdiSafeSquare: string;
    mdiSafeSquareOutline: string;
    mdiSafetyGoggles: string;
    mdiSailBoat: string;
    mdiSailBoatSink: string;
    mdiSale: string;
    mdiSaleOutline: string;
    mdiSalesforce: string;
    mdiSass: string;
    mdiSatellite: string;
    mdiSatelliteUplink: string;
    mdiSatelliteVariant: string;
    mdiSausage: string;
    mdiSausageOff: string;
    mdiSawBlade: string;
    mdiSawtoothWave: string;
    mdiSaxophone: string;
    mdiScale: string;
    mdiScaleBalance: string;
    mdiScaleBathroom: string;
    mdiScaleOff: string;
    mdiScaleUnbalanced: string;
    mdiScanHelper: string;
    mdiScanner: string;
    mdiScannerOff: string;
    mdiScatterPlot: string;
    mdiScatterPlotOutline: string;
    mdiScent: string;
    mdiScentOff: string;
    mdiSchool: string;
    mdiSchoolOutline: string;
    mdiScissorsCutting: string;
    mdiScooter: string;
    mdiScooterElectric: string;
    mdiScoreboard: string;
    mdiScoreboardOutline: string;
    mdiScreenRotation: string;
    mdiScreenRotationLock: string;
    mdiScrewFlatTop: string;
    mdiScrewLag: string;
    mdiScrewMachineFlatTop: string;
    mdiScrewMachineRoundTop: string;
    mdiScrewRoundTop: string;
    mdiScrewdriver: string;
    mdiScript: string;
    mdiScriptOutline: string;
    mdiScriptText: string;
    mdiScriptTextKey: string;
    mdiScriptTextKeyOutline: string;
    mdiScriptTextOutline: string;
    mdiScriptTextPlay: string;
    mdiScriptTextPlayOutline: string;
    mdiSd: string;
    mdiSeal: string;
    mdiSealVariant: string;
    mdiSearchWeb: string;
    mdiSeat: string;
    mdiSeatFlat: string;
    mdiSeatFlatAngled: string;
    mdiSeatIndividualSuite: string;
    mdiSeatLegroomExtra: string;
    mdiSeatLegroomNormal: string;
    mdiSeatLegroomReduced: string;
    mdiSeatOutline: string;
    mdiSeatPassenger: string;
    mdiSeatReclineExtra: string;
    mdiSeatReclineNormal: string;
    mdiSeatbelt: string;
    mdiSecurity: string;
    mdiSecurityNetwork: string;
    mdiSeed: string;
    mdiSeedOff: string;
    mdiSeedOffOutline: string;
    mdiSeedOutline: string;
    mdiSeedPlus: string;
    mdiSeedPlusOutline: string;
    mdiSeesaw: string;
    mdiSegment: string;
    mdiSelect: string;
    mdiSelectAll: string;
    mdiSelectArrowDown: string;
    mdiSelectArrowUp: string;
    mdiSelectColor: string;
    mdiSelectCompare: string;
    mdiSelectDrag: string;
    mdiSelectGroup: string;
    mdiSelectInverse: string;
    mdiSelectMarker: string;
    mdiSelectMultiple: string;
    mdiSelectMultipleMarker: string;
    mdiSelectOff: string;
    mdiSelectPlace: string;
    mdiSelectRemove: string;
    mdiSelectSearch: string;
    mdiSelection: string;
    mdiSelectionDrag: string;
    mdiSelectionEllipse: string;
    mdiSelectionEllipseArrowInside: string;
    mdiSelectionEllipseRemove: string;
    mdiSelectionMarker: string;
    mdiSelectionMultiple: string;
    mdiSelectionMultipleMarker: string;
    mdiSelectionOff: string;
    mdiSelectionRemove: string;
    mdiSelectionSearch: string;
    mdiSemanticWeb: string;
    mdiSend: string;
    mdiSendCheck: string;
    mdiSendCheckOutline: string;
    mdiSendCircle: string;
    mdiSendCircleOutline: string;
    mdiSendClock: string;
    mdiSendClockOutline: string;
    mdiSendLock: string;
    mdiSendLockOutline: string;
    mdiSendOutline: string;
    mdiSendVariant: string;
    mdiSendVariantClock: string;
    mdiSendVariantClockOutline: string;
    mdiSendVariantOutline: string;
    mdiSerialPort: string;
    mdiServer: string;
    mdiServerMinus: string;
    mdiServerMinusOutline: string;
    mdiServerNetwork: string;
    mdiServerNetworkOff: string;
    mdiServerNetworkOutline: string;
    mdiServerOff: string;
    mdiServerOutline: string;
    mdiServerPlus: string;
    mdiServerPlusOutline: string;
    mdiServerRemove: string;
    mdiServerSecurity: string;
    mdiSetAll: string;
    mdiSetCenter: string;
    mdiSetCenterRight: string;
    mdiSetLeft: string;
    mdiSetLeftCenter: string;
    mdiSetLeftRight: string;
    mdiSetMerge: string;
    mdiSetNone: string;
    mdiSetRight: string;
    mdiSetSplit: string;
    mdiSetSquare: string;
    mdiSetTopBox: string;
    mdiSettingsHelper: string;
    mdiShaker: string;
    mdiShakerOutline: string;
    mdiShape: string;
    mdiShapeCirclePlus: string;
    mdiShapeOutline: string;
    mdiShapeOvalPlus: string;
    mdiShapePlus: string;
    mdiShapePlusOutline: string;
    mdiShapePolygonPlus: string;
    mdiShapeRectanglePlus: string;
    mdiShapeSquarePlus: string;
    mdiShapeSquareRoundedPlus: string;
    mdiShare: string;
    mdiShareAll: string;
    mdiShareAllOutline: string;
    mdiShareCircle: string;
    mdiShareOff: string;
    mdiShareOffOutline: string;
    mdiShareOutline: string;
    mdiShareVariant: string;
    mdiShareVariantOutline: string;
    mdiShark: string;
    mdiSharkFin: string;
    mdiSharkFinOutline: string;
    mdiSharkOff: string;
    mdiSheep: string;
    mdiShield: string;
    mdiShieldAccount: string;
    mdiShieldAccountOutline: string;
    mdiShieldAccountVariant: string;
    mdiShieldAccountVariantOutline: string;
    mdiShieldAirplane: string;
    mdiShieldAirplaneOutline: string;
    mdiShieldAlert: string;
    mdiShieldAlertOutline: string;
    mdiShieldBug: string;
    mdiShieldBugOutline: string;
    mdiShieldCar: string;
    mdiShieldCheck: string;
    mdiShieldCheckOutline: string;
    mdiShieldCross: string;
    mdiShieldCrossOutline: string;
    mdiShieldCrown: string;
    mdiShieldCrownOutline: string;
    mdiShieldEdit: string;
    mdiShieldEditOutline: string;
    mdiShieldHalf: string;
    mdiShieldHalfFull: string;
    mdiShieldHome: string;
    mdiShieldHomeOutline: string;
    mdiShieldKey: string;
    mdiShieldKeyOutline: string;
    mdiShieldLinkVariant: string;
    mdiShieldLinkVariantOutline: string;
    mdiShieldLock: string;
    mdiShieldLockOpen: string;
    mdiShieldLockOpenOutline: string;
    mdiShieldLockOutline: string;
    mdiShieldMoon: string;
    mdiShieldMoonOutline: string;
    mdiShieldOff: string;
    mdiShieldOffOutline: string;
    mdiShieldOutline: string;
    mdiShieldPlus: string;
    mdiShieldPlusOutline: string;
    mdiShieldRefresh: string;
    mdiShieldRefreshOutline: string;
    mdiShieldRemove: string;
    mdiShieldRemoveOutline: string;
    mdiShieldSearch: string;
    mdiShieldStar: string;
    mdiShieldStarOutline: string;
    mdiShieldSun: string;
    mdiShieldSunOutline: string;
    mdiShieldSword: string;
    mdiShieldSwordOutline: string;
    mdiShieldSync: string;
    mdiShieldSyncOutline: string;
    mdiShimmer: string;
    mdiShipWheel: string;
    mdiShippingPallet: string;
    mdiShoeBallet: string;
    mdiShoeCleat: string;
    mdiShoeFormal: string;
    mdiShoeHeel: string;
    mdiShoePrint: string;
    mdiShoeSneaker: string;
    mdiShopping: string;
    mdiShoppingMusic: string;
    mdiShoppingOutline: string;
    mdiShoppingSearch: string;
    mdiShoppingSearchOutline: string;
    mdiShore: string;
    mdiShovel: string;
    mdiShovelOff: string;
    mdiShower: string;
    mdiShowerHead: string;
    mdiShredder: string;
    mdiShuffle: string;
    mdiShuffleDisabled: string;
    mdiShuffleVariant: string;
    mdiShuriken: string;
    mdiSickle: string;
    mdiSigma: string;
    mdiSigmaLower: string;
    mdiSignCaution: string;
    mdiSignDirection: string;
    mdiSignDirectionMinus: string;
    mdiSignDirectionPlus: string;
    mdiSignDirectionRemove: string;
    mdiSignLanguage: string;
    mdiSignLanguageOutline: string;
    mdiSignPole: string;
    mdiSignRealEstate: string;
    mdiSignText: string;
    mdiSignYield: string;
    mdiSignal: string;
    mdiSignal2g: string;
    mdiSignal3g: string;
    mdiSignal4g: string;
    mdiSignal5g: string;
    mdiSignalCellular1: string;
    mdiSignalCellular2: string;
    mdiSignalCellular3: string;
    mdiSignalCellularOutline: string;
    mdiSignalDistanceVariant: string;
    mdiSignalHspa: string;
    mdiSignalHspaPlus: string;
    mdiSignalOff: string;
    mdiSignalVariant: string;
    mdiSignature: string;
    mdiSignatureFreehand: string;
    mdiSignatureImage: string;
    mdiSignatureText: string;
    mdiSilo: string;
    mdiSiloOutline: string;
    mdiSilverware: string;
    mdiSilverwareClean: string;
    mdiSilverwareFork: string;
    mdiSilverwareForkKnife: string;
    mdiSilverwareSpoon: string;
    mdiSilverwareVariant: string;
    mdiSim: string;
    mdiSimAlert: string;
    mdiSimAlertOutline: string;
    mdiSimOff: string;
    mdiSimOffOutline: string;
    mdiSimOutline: string;
    mdiSimpleIcons: string;
    mdiSinaWeibo: string;
    mdiSineWave: string;
    mdiSitemap: string;
    mdiSitemapOutline: string;
    mdiSizeL: string;
    mdiSizeM: string;
    mdiSizeS: string;
    mdiSizeXl: string;
    mdiSizeXs: string;
    mdiSizeXxl: string;
    mdiSizeXxs: string;
    mdiSizeXxxl: string;
    mdiSkate: string;
    mdiSkateOff: string;
    mdiSkateboard: string;
    mdiSkateboarding: string;
    mdiSkewLess: string;
    mdiSkewMore: string;
    mdiSki: string;
    mdiSkiCrossCountry: string;
    mdiSkiWater: string;
    mdiSkipBackward: string;
    mdiSkipBackwardOutline: string;
    mdiSkipForward: string;
    mdiSkipForwardOutline: string;
    mdiSkipNext: string;
    mdiSkipNextCircle: string;
    mdiSkipNextCircleOutline: string;
    mdiSkipNextOutline: string;
    mdiSkipPrevious: string;
    mdiSkipPreviousCircle: string;
    mdiSkipPreviousCircleOutline: string;
    mdiSkipPreviousOutline: string;
    mdiSkull: string;
    mdiSkullCrossbones: string;
    mdiSkullCrossbonesOutline: string;
    mdiSkullOutline: string;
    mdiSkullScan: string;
    mdiSkullScanOutline: string;
    mdiSkype: string;
    mdiSkypeBusiness: string;
    mdiSlack: string;
    mdiSlashForward: string;
    mdiSlashForwardBox: string;
    mdiSledding: string;
    mdiSleep: string;
    mdiSleepOff: string;
    mdiSlide: string;
    mdiSlopeDownhill: string;
    mdiSlopeUphill: string;
    mdiSlotMachine: string;
    mdiSlotMachineOutline: string;
    mdiSmartCard: string;
    mdiSmartCardOff: string;
    mdiSmartCardOffOutline: string;
    mdiSmartCardOutline: string;
    mdiSmartCardReader: string;
    mdiSmartCardReaderOutline: string;
    mdiSmog: string;
    mdiSmoke: string;
    mdiSmokeDetector: string;
    mdiSmokeDetectorAlert: string;
    mdiSmokeDetectorAlertOutline: string;
    mdiSmokeDetectorOff: string;
    mdiSmokeDetectorOffOutline: string;
    mdiSmokeDetectorOutline: string;
    mdiSmokeDetectorVariant: string;
    mdiSmokeDetectorVariantAlert: string;
    mdiSmokeDetectorVariantOff: string;
    mdiSmoking: string;
    mdiSmokingOff: string;
    mdiSmokingPipe: string;
    mdiSmokingPipeOff: string;
    mdiSnail: string;
    mdiSnake: string;
    mdiSnapchat: string;
    mdiSnowboard: string;
    mdiSnowflake: string;
    mdiSnowflakeAlert: string;
    mdiSnowflakeCheck: string;
    mdiSnowflakeMelt: string;
    mdiSnowflakeOff: string;
    mdiSnowflakeThermometer: string;
    mdiSnowflakeVariant: string;
    mdiSnowman: string;
    mdiSnowmobile: string;
    mdiSnowshoeing: string;
    mdiSoccer: string;
    mdiSoccerField: string;
    mdiSocialDistance2Meters: string;
    mdiSocialDistance6Feet: string;
    mdiSofa: string;
    mdiSofaOutline: string;
    mdiSofaSingle: string;
    mdiSofaSingleOutline: string;
    mdiSolarPanel: string;
    mdiSolarPanelLarge: string;
    mdiSolarPower: string;
    mdiSolarPowerVariant: string;
    mdiSolarPowerVariantOutline: string;
    mdiSolderingIron: string;
    mdiSolid: string;
    mdiSonyPlaystation: string;
    mdiSort: string;
    mdiSortAlphabeticalAscending: string;
    mdiSortAlphabeticalAscendingVariant: string;
    mdiSortAlphabeticalDescending: string;
    mdiSortAlphabeticalDescendingVariant: string;
    mdiSortAlphabeticalVariant: string;
    mdiSortAscending: string;
    mdiSortBoolAscending: string;
    mdiSortBoolAscendingVariant: string;
    mdiSortBoolDescending: string;
    mdiSortBoolDescendingVariant: string;
    mdiSortCalendarAscending: string;
    mdiSortCalendarDescending: string;
    mdiSortClockAscending: string;
    mdiSortClockAscendingOutline: string;
    mdiSortClockDescending: string;
    mdiSortClockDescendingOutline: string;
    mdiSortDescending: string;
    mdiSortNumericAscending: string;
    mdiSortNumericAscendingVariant: string;
    mdiSortNumericDescending: string;
    mdiSortNumericDescendingVariant: string;
    mdiSortNumericVariant: string;
    mdiSortReverseVariant: string;
    mdiSortVariant: string;
    mdiSortVariantLock: string;
    mdiSortVariantLockOpen: string;
    mdiSortVariantOff: string;
    mdiSortVariantRemove: string;
    mdiSoundbar: string;
    mdiSoundcloud: string;
    mdiSourceBranch: string;
    mdiSourceBranchCheck: string;
    mdiSourceBranchMinus: string;
    mdiSourceBranchPlus: string;
    mdiSourceBranchRefresh: string;
    mdiSourceBranchRemove: string;
    mdiSourceBranchSync: string;
    mdiSourceCommit: string;
    mdiSourceCommitEnd: string;
    mdiSourceCommitEndLocal: string;
    mdiSourceCommitLocal: string;
    mdiSourceCommitNextLocal: string;
    mdiSourceCommitStart: string;
    mdiSourceCommitStartNextLocal: string;
    mdiSourceFork: string;
    mdiSourceMerge: string;
    mdiSourcePull: string;
    mdiSourceRepository: string;
    mdiSourceRepositoryMultiple: string;
    mdiSoySauce: string;
    mdiSoySauceOff: string;
    mdiSpa: string;
    mdiSpaOutline: string;
    mdiSpaceInvaders: string;
    mdiSpaceStation: string;
    mdiSpade: string;
    mdiSpeaker: string;
    mdiSpeakerBluetooth: string;
    mdiSpeakerMessage: string;
    mdiSpeakerMultiple: string;
    mdiSpeakerOff: string;
    mdiSpeakerPause: string;
    mdiSpeakerPlay: string;
    mdiSpeakerStop: string;
    mdiSpeakerWireless: string;
    mdiSpear: string;
    mdiSpeedometer: string;
    mdiSpeedometerMedium: string;
    mdiSpeedometerSlow: string;
    mdiSpellcheck: string;
    mdiSphere: string;
    mdiSphereOff: string;
    mdiSpider: string;
    mdiSpiderOutline: string;
    mdiSpiderThread: string;
    mdiSpiderWeb: string;
    mdiSpiritLevel: string;
    mdiSpoonSugar: string;
    mdiSpotify: string;
    mdiSpotlight: string;
    mdiSpotlightBeam: string;
    mdiSpray: string;
    mdiSprayBottle: string;
    mdiSprinkler: string;
    mdiSprinklerFire: string;
    mdiSprinklerVariant: string;
    mdiSprout: string;
    mdiSproutOutline: string;
    mdiSquare: string;
    mdiSquareCircle: string;
    mdiSquareCircleOutline: string;
    mdiSquareEditOutline: string;
    mdiSquareMedium: string;
    mdiSquareMediumOutline: string;
    mdiSquareOff: string;
    mdiSquareOffOutline: string;
    mdiSquareOpacity: string;
    mdiSquareOutline: string;
    mdiSquareRoot: string;
    mdiSquareRootBox: string;
    mdiSquareRounded: string;
    mdiSquareRoundedBadge: string;
    mdiSquareRoundedBadgeOutline: string;
    mdiSquareRoundedOutline: string;
    mdiSquareSmall: string;
    mdiSquareWave: string;
    mdiSqueegee: string;
    mdiSsh: string;
    mdiStackExchange: string;
    mdiStackOverflow: string;
    mdiStackpath: string;
    mdiStadium: string;
    mdiStadiumOutline: string;
    mdiStadiumVariant: string;
    mdiStairs: string;
    mdiStairsBox: string;
    mdiStairsDown: string;
    mdiStairsUp: string;
    mdiStamper: string;
    mdiStandardDefinition: string;
    mdiStar: string;
    mdiStarBox: string;
    mdiStarBoxMultiple: string;
    mdiStarBoxMultipleOutline: string;
    mdiStarBoxOutline: string;
    mdiStarCheck: string;
    mdiStarCheckOutline: string;
    mdiStarCircle: string;
    mdiStarCircleOutline: string;
    mdiStarCog: string;
    mdiStarCogOutline: string;
    mdiStarCrescent: string;
    mdiStarDavid: string;
    mdiStarFace: string;
    mdiStarFourPoints: string;
    mdiStarFourPointsBox: string;
    mdiStarFourPointsBoxOutline: string;
    mdiStarFourPointsCircle: string;
    mdiStarFourPointsCircleOutline: string;
    mdiStarFourPointsOutline: string;
    mdiStarFourPointsSmall: string;
    mdiStarHalf: string;
    mdiStarHalfFull: string;
    mdiStarMinus: string;
    mdiStarMinusOutline: string;
    mdiStarOff: string;
    mdiStarOffOutline: string;
    mdiStarOutline: string;
    mdiStarPlus: string;
    mdiStarPlusOutline: string;
    mdiStarRemove: string;
    mdiStarRemoveOutline: string;
    mdiStarSettings: string;
    mdiStarSettingsOutline: string;
    mdiStarShooting: string;
    mdiStarShootingOutline: string;
    mdiStarThreePoints: string;
    mdiStarThreePointsOutline: string;
    mdiStateMachine: string;
    mdiSteam: string;
    mdiSteering: string;
    mdiSteeringOff: string;
    mdiStepBackward: string;
    mdiStepBackward2: string;
    mdiStepForward: string;
    mdiStepForward2: string;
    mdiStethoscope: string;
    mdiSticker: string;
    mdiStickerAlert: string;
    mdiStickerAlertOutline: string;
    mdiStickerCheck: string;
    mdiStickerCheckOutline: string;
    mdiStickerCircleOutline: string;
    mdiStickerEmoji: string;
    mdiStickerMinus: string;
    mdiStickerMinusOutline: string;
    mdiStickerOutline: string;
    mdiStickerPlus: string;
    mdiStickerPlusOutline: string;
    mdiStickerRemove: string;
    mdiStickerRemoveOutline: string;
    mdiStickerText: string;
    mdiStickerTextOutline: string;
    mdiStocking: string;
    mdiStomach: string;
    mdiStool: string;
    mdiStoolOutline: string;
    mdiStop: string;
    mdiStopCircle: string;
    mdiStopCircleOutline: string;
    mdiStorageTank: string;
    mdiStorageTankOutline: string;
    mdiStore: string;
    mdiStore24Hour: string;
    mdiStoreAlert: string;
    mdiStoreAlertOutline: string;
    mdiStoreCheck: string;
    mdiStoreCheckOutline: string;
    mdiStoreClock: string;
    mdiStoreClockOutline: string;
    mdiStoreCog: string;
    mdiStoreCogOutline: string;
    mdiStoreEdit: string;
    mdiStoreEditOutline: string;
    mdiStoreMarker: string;
    mdiStoreMarkerOutline: string;
    mdiStoreMinus: string;
    mdiStoreMinusOutline: string;
    mdiStoreOff: string;
    mdiStoreOffOutline: string;
    mdiStoreOutline: string;
    mdiStorePlus: string;
    mdiStorePlusOutline: string;
    mdiStoreRemove: string;
    mdiStoreRemoveOutline: string;
    mdiStoreSearch: string;
    mdiStoreSearchOutline: string;
    mdiStoreSettings: string;
    mdiStoreSettingsOutline: string;
    mdiStorefront: string;
    mdiStorefrontCheck: string;
    mdiStorefrontCheckOutline: string;
    mdiStorefrontEdit: string;
    mdiStorefrontEditOutline: string;
    mdiStorefrontMinus: string;
    mdiStorefrontMinusOutline: string;
    mdiStorefrontOutline: string;
    mdiStorefrontPlus: string;
    mdiStorefrontPlusOutline: string;
    mdiStorefrontRemove: string;
    mdiStorefrontRemoveOutline: string;
    mdiStove: string;
    mdiStrategy: string;
    mdiStretchToPage: string;
    mdiStretchToPageOutline: string;
    mdiStringLights: string;
    mdiStringLightsOff: string;
    mdiSubdirectoryArrowLeft: string;
    mdiSubdirectoryArrowRight: string;
    mdiSubmarine: string;
    mdiSubtitles: string;
    mdiSubtitlesOutline: string;
    mdiSubway: string;
    mdiSubwayAlertVariant: string;
    mdiSubwayVariant: string;
    mdiSummit: string;
    mdiSunAngle: string;
    mdiSunAngleOutline: string;
    mdiSunClock: string;
    mdiSunClockOutline: string;
    mdiSunCompass: string;
    mdiSunSnowflake: string;
    mdiSunSnowflakeVariant: string;
    mdiSunThermometer: string;
    mdiSunThermometerOutline: string;
    mdiSunWireless: string;
    mdiSunWirelessOutline: string;
    mdiSunglasses: string;
    mdiSurfing: string;
    mdiSurroundSound: string;
    mdiSurroundSound20: string;
    mdiSurroundSound21: string;
    mdiSurroundSound31: string;
    mdiSurroundSound51: string;
    mdiSurroundSound512: string;
    mdiSurroundSound71: string;
    mdiSvg: string;
    mdiSwapHorizontal: string;
    mdiSwapHorizontalBold: string;
    mdiSwapHorizontalCircle: string;
    mdiSwapHorizontalCircleOutline: string;
    mdiSwapHorizontalHidden: string;
    mdiSwapHorizontalVariant: string;
    mdiSwapVertical: string;
    mdiSwapVerticalBold: string;
    mdiSwapVerticalCircle: string;
    mdiSwapVerticalCircleOutline: string;
    mdiSwapVerticalVariant: string;
    mdiSwim: string;
    mdiSwitch: string;
    mdiSword: string;
    mdiSwordCross: string;
    mdiSyllabaryHangul: string;
    mdiSyllabaryHiragana: string;
    mdiSyllabaryKatakana: string;
    mdiSyllabaryKatakanaHalfwidth: string;
    mdiSymbol: string;
    mdiSymfony: string;
    mdiSynagogue: string;
    mdiSynagogueOutline: string;
    mdiSync: string;
    mdiSyncAlert: string;
    mdiSyncCircle: string;
    mdiSyncOff: string;
    mdiTab: string;
    mdiTabMinus: string;
    mdiTabPlus: string;
    mdiTabRemove: string;
    mdiTabSearch: string;
    mdiTabUnselected: string;
    mdiTable: string;
    mdiTableAccount: string;
    mdiTableAlert: string;
    mdiTableArrowDown: string;
    mdiTableArrowLeft: string;
    mdiTableArrowRight: string;
    mdiTableArrowUp: string;
    mdiTableBorder: string;
    mdiTableCancel: string;
    mdiTableChair: string;
    mdiTableCheck: string;
    mdiTableClock: string;
    mdiTableCog: string;
    mdiTableColumn: string;
    mdiTableColumnPlusAfter: string;
    mdiTableColumnPlusBefore: string;
    mdiTableColumnRemove: string;
    mdiTableColumnWidth: string;
    mdiTableEdit: string;
    mdiTableEye: string;
    mdiTableEyeOff: string;
    mdiTableFilter: string;
    mdiTableFurniture: string;
    mdiTableHeadersEye: string;
    mdiTableHeadersEyeOff: string;
    mdiTableHeart: string;
    mdiTableKey: string;
    mdiTableLarge: string;
    mdiTableLargePlus: string;
    mdiTableLargeRemove: string;
    mdiTableLock: string;
    mdiTableMergeCells: string;
    mdiTableMinus: string;
    mdiTableMultiple: string;
    mdiTableNetwork: string;
    mdiTableOfContents: string;
    mdiTableOff: string;
    mdiTablePicnic: string;
    mdiTablePivot: string;
    mdiTablePlus: string;
    mdiTableQuestion: string;
    mdiTableRefresh: string;
    mdiTableRemove: string;
    mdiTableRow: string;
    mdiTableRowHeight: string;
    mdiTableRowPlusAfter: string;
    mdiTableRowPlusBefore: string;
    mdiTableRowRemove: string;
    mdiTableSearch: string;
    mdiTableSettings: string;
    mdiTableSplitCell: string;
    mdiTableStar: string;
    mdiTableSync: string;
    mdiTableTennis: string;
    mdiTablet: string;
    mdiTabletCellphone: string;
    mdiTabletDashboard: string;
    mdiTaco: string;
    mdiTag: string;
    mdiTagArrowDown: string;
    mdiTagArrowDownOutline: string;
    mdiTagArrowLeft: string;
    mdiTagArrowLeftOutline: string;
    mdiTagArrowRight: string;
    mdiTagArrowRightOutline: string;
    mdiTagArrowUp: string;
    mdiTagArrowUpOutline: string;
    mdiTagCheck: string;
    mdiTagCheckOutline: string;
    mdiTagEdit: string;
    mdiTagEditOutline: string;
    mdiTagFaces: string;
    mdiTagHeart: string;
    mdiTagHeartOutline: string;
    mdiTagHidden: string;
    mdiTagMinus: string;
    mdiTagMinusOutline: string;
    mdiTagMultiple: string;
    mdiTagMultipleOutline: string;
    mdiTagOff: string;
    mdiTagOffOutline: string;
    mdiTagOutline: string;
    mdiTagPlus: string;
    mdiTagPlusOutline: string;
    mdiTagRemove: string;
    mdiTagRemoveOutline: string;
    mdiTagSearch: string;
    mdiTagSearchOutline: string;
    mdiTagText: string;
    mdiTagTextOutline: string;
    mdiTailwind: string;
    mdiTallyMark1: string;
    mdiTallyMark2: string;
    mdiTallyMark3: string;
    mdiTallyMark4: string;
    mdiTallyMark5: string;
    mdiTangram: string;
    mdiTank: string;
    mdiTankerTruck: string;
    mdiTapeDrive: string;
    mdiTapeMeasure: string;
    mdiTarget: string;
    mdiTargetAccount: string;
    mdiTargetVariant: string;
    mdiTaxi: string;
    mdiTea: string;
    mdiTeaOutline: string;
    mdiTeamviewer: string;
    mdiTeddyBear: string;
    mdiTelescope: string;
    mdiTelevision: string;
    mdiTelevisionAmbientLight: string;
    mdiTelevisionBox: string;
    mdiTelevisionClassic: string;
    mdiTelevisionClassicOff: string;
    mdiTelevisionGuide: string;
    mdiTelevisionOff: string;
    mdiTelevisionPause: string;
    mdiTelevisionPlay: string;
    mdiTelevisionShimmer: string;
    mdiTelevisionSpeaker: string;
    mdiTelevisionSpeakerOff: string;
    mdiTelevisionStop: string;
    mdiTemperatureCelsius: string;
    mdiTemperatureFahrenheit: string;
    mdiTemperatureKelvin: string;
    mdiTempleBuddhist: string;
    mdiTempleBuddhistOutline: string;
    mdiTempleHindu: string;
    mdiTempleHinduOutline: string;
    mdiTennis: string;
    mdiTennisBall: string;
    mdiTennisBallOutline: string;
    mdiTent: string;
    mdiTerraform: string;
    mdiTerrain: string;
    mdiTestTube: string;
    mdiTestTubeEmpty: string;
    mdiTestTubeOff: string;
    mdiText: string;
    mdiTextAccount: string;
    mdiTextBox: string;
    mdiTextBoxCheck: string;
    mdiTextBoxCheckOutline: string;
    mdiTextBoxEdit: string;
    mdiTextBoxEditOutline: string;
    mdiTextBoxMinus: string;
    mdiTextBoxMinusOutline: string;
    mdiTextBoxMultiple: string;
    mdiTextBoxMultipleOutline: string;
    mdiTextBoxOutline: string;
    mdiTextBoxPlus: string;
    mdiTextBoxPlusOutline: string;
    mdiTextBoxRemove: string;
    mdiTextBoxRemoveOutline: string;
    mdiTextBoxSearch: string;
    mdiTextBoxSearchOutline: string;
    mdiTextLong: string;
    mdiTextRecognition: string;
    mdiTextSearch: string;
    mdiTextSearchVariant: string;
    mdiTextShadow: string;
    mdiTextShort: string;
    mdiTexture: string;
    mdiTextureBox: string;
    mdiTheater: string;
    mdiThemeLightDark: string;
    mdiThermometer: string;
    mdiThermometerAlert: string;
    mdiThermometerAuto: string;
    mdiThermometerBluetooth: string;
    mdiThermometerCheck: string;
    mdiThermometerChevronDown: string;
    mdiThermometerChevronUp: string;
    mdiThermometerHigh: string;
    mdiThermometerLines: string;
    mdiThermometerLow: string;
    mdiThermometerMinus: string;
    mdiThermometerOff: string;
    mdiThermometerPlus: string;
    mdiThermometerProbe: string;
    mdiThermometerProbeOff: string;
    mdiThermometerWater: string;
    mdiThermostat: string;
    mdiThermostatAuto: string;
    mdiThermostatBox: string;
    mdiThermostatBoxAuto: string;
    mdiThermostatCog: string;
    mdiThoughtBubble: string;
    mdiThoughtBubbleOutline: string;
    mdiThumbDown: string;
    mdiThumbDownOutline: string;
    mdiThumbUp: string;
    mdiThumbUpOutline: string;
    mdiThumbsUpDown: string;
    mdiThumbsUpDownOutline: string;
    mdiTicket: string;
    mdiTicketAccount: string;
    mdiTicketConfirmation: string;
    mdiTicketConfirmationOutline: string;
    mdiTicketOutline: string;
    mdiTicketPercent: string;
    mdiTicketPercentOutline: string;
    mdiTie: string;
    mdiTilde: string;
    mdiTildeOff: string;
    mdiTimelapse: string;
    mdiTimeline: string;
    mdiTimelineAlert: string;
    mdiTimelineAlertOutline: string;
    mdiTimelineCheck: string;
    mdiTimelineCheckOutline: string;
    mdiTimelineClock: string;
    mdiTimelineClockOutline: string;
    mdiTimelineMinus: string;
    mdiTimelineMinusOutline: string;
    mdiTimelineOutline: string;
    mdiTimelinePlus: string;
    mdiTimelinePlusOutline: string;
    mdiTimelineQuestion: string;
    mdiTimelineQuestionOutline: string;
    mdiTimelineRemove: string;
    mdiTimelineRemoveOutline: string;
    mdiTimelineText: string;
    mdiTimelineTextOutline: string;
    mdiTimer: string;
    mdiTimer10: string;
    mdiTimer3: string;
    mdiTimerAlert: string;
    mdiTimerAlertOutline: string;
    mdiTimerCancel: string;
    mdiTimerCancelOutline: string;
    mdiTimerCheck: string;
    mdiTimerCheckOutline: string;
    mdiTimerCog: string;
    mdiTimerCogOutline: string;
    mdiTimerEdit: string;
    mdiTimerEditOutline: string;
    mdiTimerLock: string;
    mdiTimerLockOpen: string;
    mdiTimerLockOpenOutline: string;
    mdiTimerLockOutline: string;
    mdiTimerMarker: string;
    mdiTimerMarkerOutline: string;
    mdiTimerMinus: string;
    mdiTimerMinusOutline: string;
    mdiTimerMusic: string;
    mdiTimerMusicOutline: string;
    mdiTimerOff: string;
    mdiTimerOffOutline: string;
    mdiTimerOutline: string;
    mdiTimerPause: string;
    mdiTimerPauseOutline: string;
    mdiTimerPlay: string;
    mdiTimerPlayOutline: string;
    mdiTimerPlus: string;
    mdiTimerPlusOutline: string;
    mdiTimerRefresh: string;
    mdiTimerRefreshOutline: string;
    mdiTimerRemove: string;
    mdiTimerRemoveOutline: string;
    mdiTimerSand: string;
    mdiTimerSandComplete: string;
    mdiTimerSandEmpty: string;
    mdiTimerSandFull: string;
    mdiTimerSandPaused: string;
    mdiTimerSettings: string;
    mdiTimerSettingsOutline: string;
    mdiTimerStar: string;
    mdiTimerStarOutline: string;
    mdiTimerStop: string;
    mdiTimerStopOutline: string;
    mdiTimerSync: string;
    mdiTimerSyncOutline: string;
    mdiTimetable: string;
    mdiTire: string;
    mdiToaster: string;
    mdiToasterOff: string;
    mdiToasterOven: string;
    mdiToggleSwitch: string;
    mdiToggleSwitchOff: string;
    mdiToggleSwitchOffOutline: string;
    mdiToggleSwitchOutline: string;
    mdiToggleSwitchVariant: string;
    mdiToggleSwitchVariantOff: string;
    mdiToilet: string;
    mdiToolbox: string;
    mdiToolboxOutline: string;
    mdiTools: string;
    mdiTooltip: string;
    mdiTooltipAccount: string;
    mdiTooltipCellphone: string;
    mdiTooltipCheck: string;
    mdiTooltipCheckOutline: string;
    mdiTooltipEdit: string;
    mdiTooltipEditOutline: string;
    mdiTooltipImage: string;
    mdiTooltipImageOutline: string;
    mdiTooltipMinus: string;
    mdiTooltipMinusOutline: string;
    mdiTooltipOutline: string;
    mdiTooltipPlus: string;
    mdiTooltipPlusOutline: string;
    mdiTooltipQuestion: string;
    mdiTooltipQuestionOutline: string;
    mdiTooltipRemove: string;
    mdiTooltipRemoveOutline: string;
    mdiTooltipText: string;
    mdiTooltipTextOutline: string;
    mdiTooth: string;
    mdiToothOutline: string;
    mdiToothbrush: string;
    mdiToothbrushElectric: string;
    mdiToothbrushPaste: string;
    mdiTorch: string;
    mdiTortoise: string;
    mdiToslink: string;
    mdiTouchTextOutline: string;
    mdiTournament: string;
    mdiTowTruck: string;
    mdiTowerBeach: string;
    mdiTowerFire: string;
    mdiTownHall: string;
    mdiToyBrick: string;
    mdiToyBrickMarker: string;
    mdiToyBrickMarkerOutline: string;
    mdiToyBrickMinus: string;
    mdiToyBrickMinusOutline: string;
    mdiToyBrickOutline: string;
    mdiToyBrickPlus: string;
    mdiToyBrickPlusOutline: string;
    mdiToyBrickRemove: string;
    mdiToyBrickRemoveOutline: string;
    mdiToyBrickSearch: string;
    mdiToyBrickSearchOutline: string;
    mdiTrackLight: string;
    mdiTrackLightOff: string;
    mdiTrackpad: string;
    mdiTrackpadLock: string;
    mdiTractor: string;
    mdiTractorVariant: string;
    mdiTrademark: string;
    mdiTrafficCone: string;
    mdiTrafficLight: string;
    mdiTrafficLightOutline: string;
    mdiTrain: string;
    mdiTrainBus: string;
    mdiTrainCar: string;
    mdiTrainCarAutorack: string;
    mdiTrainCarBox: string;
    mdiTrainCarBoxFull: string;
    mdiTrainCarBoxOpen: string;
    mdiTrainCarCaboose: string;
    mdiTrainCarCenterbeam: string;
    mdiTrainCarCenterbeamFull: string;
    mdiTrainCarContainer: string;
    mdiTrainCarFlatbed: string;
    mdiTrainCarFlatbedCar: string;
    mdiTrainCarFlatbedTank: string;
    mdiTrainCarGondola: string;
    mdiTrainCarGondolaFull: string;
    mdiTrainCarHopper: string;
    mdiTrainCarHopperCovered: string;
    mdiTrainCarHopperFull: string;
    mdiTrainCarIntermodal: string;
    mdiTrainCarPassenger: string;
    mdiTrainCarPassengerDoor: string;
    mdiTrainCarPassengerDoorOpen: string;
    mdiTrainCarPassengerVariant: string;
    mdiTrainCarTank: string;
    mdiTrainVariant: string;
    mdiTram: string;
    mdiTramSide: string;
    mdiTranscribe: string;
    mdiTranscribeClose: string;
    mdiTransfer: string;
    mdiTransferDown: string;
    mdiTransferLeft: string;
    mdiTransferRight: string;
    mdiTransferUp: string;
    mdiTransitConnection: string;
    mdiTransitConnectionHorizontal: string;
    mdiTransitConnectionVariant: string;
    mdiTransitDetour: string;
    mdiTransitSkip: string;
    mdiTransitTransfer: string;
    mdiTransition: string;
    mdiTransitionMasked: string;
    mdiTranslate: string;
    mdiTranslateOff: string;
    mdiTranslateVariant: string;
    mdiTransmissionTower: string;
    mdiTransmissionTowerExport: string;
    mdiTransmissionTowerImport: string;
    mdiTransmissionTowerOff: string;
    mdiTrashCan: string;
    mdiTrashCanOutline: string;
    mdiTray: string;
    mdiTrayAlert: string;
    mdiTrayArrowDown: string;
    mdiTrayArrowUp: string;
    mdiTrayFull: string;
    mdiTrayMinus: string;
    mdiTrayPlus: string;
    mdiTrayRemove: string;
    mdiTreasureChest: string;
    mdiTreasureChestOutline: string;
    mdiTree: string;
    mdiTreeOutline: string;
    mdiTrello: string;
    mdiTrendingDown: string;
    mdiTrendingNeutral: string;
    mdiTrendingUp: string;
    mdiTriangle: string;
    mdiTriangleDown: string;
    mdiTriangleDownOutline: string;
    mdiTriangleOutline: string;
    mdiTriangleSmallDown: string;
    mdiTriangleSmallUp: string;
    mdiTriangleWave: string;
    mdiTriforce: string;
    mdiTrophy: string;
    mdiTrophyAward: string;
    mdiTrophyBroken: string;
    mdiTrophyOutline: string;
    mdiTrophyVariant: string;
    mdiTrophyVariantOutline: string;
    mdiTruck: string;
    mdiTruckAlert: string;
    mdiTruckAlertOutline: string;
    mdiTruckCargoContainer: string;
    mdiTruckCheck: string;
    mdiTruckCheckOutline: string;
    mdiTruckDelivery: string;
    mdiTruckDeliveryOutline: string;
    mdiTruckFast: string;
    mdiTruckFastOutline: string;
    mdiTruckFlatbed: string;
    mdiTruckMinus: string;
    mdiTruckMinusOutline: string;
    mdiTruckOffRoad: string;
    mdiTruckOffRoadOff: string;
    mdiTruckOutline: string;
    mdiTruckPlus: string;
    mdiTruckPlusOutline: string;
    mdiTruckRemove: string;
    mdiTruckRemoveOutline: string;
    mdiTruckSnowflake: string;
    mdiTruckTrailer: string;
    mdiTrumpet: string;
    mdiTshirtCrew: string;
    mdiTshirtCrewOutline: string;
    mdiTshirtV: string;
    mdiTshirtVOutline: string;
    mdiTsunami: string;
    mdiTumbleDryer: string;
    mdiTumbleDryerAlert: string;
    mdiTumbleDryerOff: string;
    mdiTune: string;
    mdiTuneVariant: string;
    mdiTuneVertical: string;
    mdiTuneVerticalVariant: string;
    mdiTunnel: string;
    mdiTunnelOutline: string;
    mdiTurbine: string;
    mdiTurkey: string;
    mdiTurnstile: string;
    mdiTurnstileOutline: string;
    mdiTurtle: string;
    mdiTwitch: string;
    mdiTwitter: string;
    mdiTwoFactorAuthentication: string;
    mdiTypewriter: string;
    mdiUbisoft: string;
    mdiUbuntu: string;
    mdiUfo: string;
    mdiUfoOutline: string;
    mdiUltraHighDefinition: string;
    mdiUmbraco: string;
    mdiUmbrella: string;
    mdiUmbrellaBeach: string;
    mdiUmbrellaBeachOutline: string;
    mdiUmbrellaClosed: string;
    mdiUmbrellaClosedOutline: string;
    mdiUmbrellaClosedVariant: string;
    mdiUmbrellaOutline: string;
    mdiUnderwearOutline: string;
    mdiUndo: string;
    mdiUndoVariant: string;
    mdiUnfoldLessHorizontal: string;
    mdiUnfoldLessVertical: string;
    mdiUnfoldMoreHorizontal: string;
    mdiUnfoldMoreVertical: string;
    mdiUngroup: string;
    mdiUnicode: string;
    mdiUnicorn: string;
    mdiUnicornVariant: string;
    mdiUnicycle: string;
    mdiUnity: string;
    mdiUnreal: string;
    mdiUpdate: string;
    mdiUpload: string;
    mdiUploadBox: string;
    mdiUploadBoxOutline: string;
    mdiUploadCircle: string;
    mdiUploadCircleOutline: string;
    mdiUploadLock: string;
    mdiUploadLockOutline: string;
    mdiUploadMultiple: string;
    mdiUploadMultipleOutline: string;
    mdiUploadNetwork: string;
    mdiUploadNetworkOutline: string;
    mdiUploadOff: string;
    mdiUploadOffOutline: string;
    mdiUploadOutline: string;
    mdiUsb: string;
    mdiUsbCPort: string;
    mdiUsbFlashDrive: string;
    mdiUsbFlashDriveOutline: string;
    mdiUsbPort: string;
    mdiVacuum: string;
    mdiVacuumOutline: string;
    mdiValve: string;
    mdiValveClosed: string;
    mdiValveOpen: string;
    mdiVanPassenger: string;
    mdiVanUtility: string;
    mdiVanish: string;
    mdiVanishQuarter: string;
    mdiVanityLight: string;
    mdiVariable: string;
    mdiVariableBox: string;
    mdiVectorArrangeAbove: string;
    mdiVectorArrangeBelow: string;
    mdiVectorBezier: string;
    mdiVectorCircle: string;
    mdiVectorCircleVariant: string;
    mdiVectorCombine: string;
    mdiVectorCurve: string;
    mdiVectorDifference: string;
    mdiVectorDifferenceAb: string;
    mdiVectorDifferenceBa: string;
    mdiVectorEllipse: string;
    mdiVectorIntersection: string;
    mdiVectorLine: string;
    mdiVectorLink: string;
    mdiVectorPoint: string;
    mdiVectorPointEdit: string;
    mdiVectorPointMinus: string;
    mdiVectorPointPlus: string;
    mdiVectorPointSelect: string;
    mdiVectorPolygon: string;
    mdiVectorPolygonVariant: string;
    mdiVectorPolyline: string;
    mdiVectorPolylineEdit: string;
    mdiVectorPolylineMinus: string;
    mdiVectorPolylinePlus: string;
    mdiVectorPolylineRemove: string;
    mdiVectorRadius: string;
    mdiVectorRectangle: string;
    mdiVectorSelection: string;
    mdiVectorSquare: string;
    mdiVectorSquareClose: string;
    mdiVectorSquareEdit: string;
    mdiVectorSquareMinus: string;
    mdiVectorSquareOpen: string;
    mdiVectorSquarePlus: string;
    mdiVectorSquareRemove: string;
    mdiVectorTriangle: string;
    mdiVectorUnion: string;
    mdiVhs: string;
    mdiVibrate: string;
    mdiVibrateOff: string;
    mdiVideo: string;
    mdiVideo2d: string;
    mdiVideo3d: string;
    mdiVideo3dOff: string;
    mdiVideo3dVariant: string;
    mdiVideo4kBox: string;
    mdiVideoAccount: string;
    mdiVideoBox: string;
    mdiVideoBoxOff: string;
    mdiVideoCheck: string;
    mdiVideoCheckOutline: string;
    mdiVideoHighDefinition: string;
    mdiVideoImage: string;
    mdiVideoInputAntenna: string;
    mdiVideoInputComponent: string;
    mdiVideoInputHdmi: string;
    mdiVideoInputScart: string;
    mdiVideoInputSvideo: string;
    mdiVideoMarker: string;
    mdiVideoMarkerOutline: string;
    mdiVideoMinus: string;
    mdiVideoMinusOutline: string;
    mdiVideoOff: string;
    mdiVideoOffOutline: string;
    mdiVideoOutline: string;
    mdiVideoPlus: string;
    mdiVideoPlusOutline: string;
    mdiVideoStabilization: string;
    mdiVideoStandardDefinition: string;
    mdiVideoSwitch: string;
    mdiVideoSwitchOutline: string;
    mdiVideoVintage: string;
    mdiVideoWireless: string;
    mdiVideoWirelessOutline: string;
    mdiViewAgenda: string;
    mdiViewAgendaOutline: string;
    mdiViewArray: string;
    mdiViewArrayOutline: string;
    mdiViewCarousel: string;
    mdiViewCarouselOutline: string;
    mdiViewColumn: string;
    mdiViewColumnOutline: string;
    mdiViewComfy: string;
    mdiViewComfyOutline: string;
    mdiViewCompact: string;
    mdiViewCompactOutline: string;
    mdiViewDashboard: string;
    mdiViewDashboardEdit: string;
    mdiViewDashboardEditOutline: string;
    mdiViewDashboardOutline: string;
    mdiViewDashboardVariant: string;
    mdiViewDashboardVariantOutline: string;
    mdiViewDay: string;
    mdiViewDayOutline: string;
    mdiViewGallery: string;
    mdiViewGalleryOutline: string;
    mdiViewGrid: string;
    mdiViewGridCompact: string;
    mdiViewGridOutline: string;
    mdiViewGridPlus: string;
    mdiViewGridPlusOutline: string;
    mdiViewHeadline: string;
    mdiViewList: string;
    mdiViewListOutline: string;
    mdiViewModule: string;
    mdiViewModuleOutline: string;
    mdiViewParallel: string;
    mdiViewParallelOutline: string;
    mdiViewQuilt: string;
    mdiViewQuiltOutline: string;
    mdiViewSequential: string;
    mdiViewSequentialOutline: string;
    mdiViewSplitHorizontal: string;
    mdiViewSplitVertical: string;
    mdiViewStream: string;
    mdiViewStreamOutline: string;
    mdiViewWeek: string;
    mdiViewWeekOutline: string;
    mdiVimeo: string;
    mdiViolin: string;
    mdiVirtualReality: string;
    mdiVirus: string;
    mdiVirusOff: string;
    mdiVirusOffOutline: string;
    mdiVirusOutline: string;
    mdiVlc: string;
    mdiVoicemail: string;
    mdiVolcano: string;
    mdiVolcanoOutline: string;
    mdiVolleyball: string;
    mdiVolumeEqual: string;
    mdiVolumeHigh: string;
    mdiVolumeLow: string;
    mdiVolumeMedium: string;
    mdiVolumeMinus: string;
    mdiVolumeMute: string;
    mdiVolumeOff: string;
    mdiVolumePlus: string;
    mdiVolumeSource: string;
    mdiVolumeVariantOff: string;
    mdiVolumeVibrate: string;
    mdiVote: string;
    mdiVoteOutline: string;
    mdiVpn: string;
    mdiVuejs: string;
    mdiVuetify: string;
    mdiWalk: string;
    mdiWall: string;
    mdiWallFire: string;
    mdiWallSconce: string;
    mdiWallSconceFlat: string;
    mdiWallSconceFlatOutline: string;
    mdiWallSconceFlatVariant: string;
    mdiWallSconceFlatVariantOutline: string;
    mdiWallSconceOutline: string;
    mdiWallSconceRound: string;
    mdiWallSconceRoundOutline: string;
    mdiWallSconceRoundVariant: string;
    mdiWallSconceRoundVariantOutline: string;
    mdiWallet: string;
    mdiWalletBifold: string;
    mdiWalletBifoldOutline: string;
    mdiWalletGiftcard: string;
    mdiWalletMembership: string;
    mdiWalletOutline: string;
    mdiWalletPlus: string;
    mdiWalletPlusOutline: string;
    mdiWalletTravel: string;
    mdiWallpaper: string;
    mdiWan: string;
    mdiWardrobe: string;
    mdiWardrobeOutline: string;
    mdiWarehouse: string;
    mdiWashingMachine: string;
    mdiWashingMachineAlert: string;
    mdiWashingMachineOff: string;
    mdiWatch: string;
    mdiWatchExport: string;
    mdiWatchExportVariant: string;
    mdiWatchImport: string;
    mdiWatchImportVariant: string;
    mdiWatchVariant: string;
    mdiWatchVibrate: string;
    mdiWatchVibrateOff: string;
    mdiWater: string;
    mdiWaterAlert: string;
    mdiWaterAlertOutline: string;
    mdiWaterBoiler: string;
    mdiWaterBoilerAlert: string;
    mdiWaterBoilerAuto: string;
    mdiWaterBoilerOff: string;
    mdiWaterCheck: string;
    mdiWaterCheckOutline: string;
    mdiWaterCircle: string;
    mdiWaterMinus: string;
    mdiWaterMinusOutline: string;
    mdiWaterOff: string;
    mdiWaterOffOutline: string;
    mdiWaterOpacity: string;
    mdiWaterOutline: string;
    mdiWaterPercent: string;
    mdiWaterPercentAlert: string;
    mdiWaterPlus: string;
    mdiWaterPlusOutline: string;
    mdiWaterPolo: string;
    mdiWaterPump: string;
    mdiWaterPumpOff: string;
    mdiWaterRemove: string;
    mdiWaterRemoveOutline: string;
    mdiWaterSync: string;
    mdiWaterThermometer: string;
    mdiWaterThermometerOutline: string;
    mdiWaterWell: string;
    mdiWaterWellOutline: string;
    mdiWaterfall: string;
    mdiWateringCan: string;
    mdiWateringCanOutline: string;
    mdiWatermark: string;
    mdiWave: string;
    mdiWaveArrowDown: string;
    mdiWaveArrowUp: string;
    mdiWaveUndercurrent: string;
    mdiWaveform: string;
    mdiWaves: string;
    mdiWavesArrowLeft: string;
    mdiWavesArrowRight: string;
    mdiWavesArrowUp: string;
    mdiWaze: string;
    mdiWeatherCloudy: string;
    mdiWeatherCloudyAlert: string;
    mdiWeatherCloudyArrowRight: string;
    mdiWeatherCloudyClock: string;
    mdiWeatherDust: string;
    mdiWeatherFog: string;
    mdiWeatherHail: string;
    mdiWeatherHazy: string;
    mdiWeatherHurricane: string;
    mdiWeatherHurricaneOutline: string;
    mdiWeatherLightning: string;
    mdiWeatherLightningRainy: string;
    mdiWeatherMoonset: string;
    mdiWeatherMoonsetDown: string;
    mdiWeatherMoonsetUp: string;
    mdiWeatherNight: string;
    mdiWeatherNightPartlyCloudy: string;
    mdiWeatherPartlyCloudy: string;
    mdiWeatherPartlyLightning: string;
    mdiWeatherPartlyRainy: string;
    mdiWeatherPartlySnowy: string;
    mdiWeatherPartlySnowyRainy: string;
    mdiWeatherPouring: string;
    mdiWeatherRainy: string;
    mdiWeatherSnowy: string;
    mdiWeatherSnowyHeavy: string;
    mdiWeatherSnowyRainy: string;
    mdiWeatherSunny: string;
    mdiWeatherSunnyAlert: string;
    mdiWeatherSunnyOff: string;
    mdiWeatherSunset: string;
    mdiWeatherSunsetDown: string;
    mdiWeatherSunsetUp: string;
    mdiWeatherTornado: string;
    mdiWeatherWindy: string;
    mdiWeatherWindyVariant: string;
    mdiWeb: string;
    mdiWebBox: string;
    mdiWebCancel: string;
    mdiWebCheck: string;
    mdiWebClock: string;
    mdiWebMinus: string;
    mdiWebOff: string;
    mdiWebPlus: string;
    mdiWebRefresh: string;
    mdiWebRemove: string;
    mdiWebSync: string;
    mdiWebcam: string;
    mdiWebcamOff: string;
    mdiWebhook: string;
    mdiWebpack: string;
    mdiWebrtc: string;
    mdiWechat: string;
    mdiWeight: string;
    mdiWeightGram: string;
    mdiWeightKilogram: string;
    mdiWeightLifter: string;
    mdiWeightPound: string;
    mdiWhatsapp: string;
    mdiWheelBarrow: string;
    mdiWheelchair: string;
    mdiWheelchairAccessibility: string;
    mdiWhistle: string;
    mdiWhistleOutline: string;
    mdiWhiteBalanceAuto: string;
    mdiWhiteBalanceIncandescent: string;
    mdiWhiteBalanceIridescent: string;
    mdiWhiteBalanceSunny: string;
    mdiWidgets: string;
    mdiWidgetsOutline: string;
    mdiWifi: string;
    mdiWifiAlert: string;
    mdiWifiArrowDown: string;
    mdiWifiArrowLeft: string;
    mdiWifiArrowLeftRight: string;
    mdiWifiArrowRight: string;
    mdiWifiArrowUp: string;
    mdiWifiArrowUpDown: string;
    mdiWifiCancel: string;
    mdiWifiCheck: string;
    mdiWifiCog: string;
    mdiWifiLock: string;
    mdiWifiLockOpen: string;
    mdiWifiMarker: string;
    mdiWifiMinus: string;
    mdiWifiOff: string;
    mdiWifiPlus: string;
    mdiWifiRefresh: string;
    mdiWifiRemove: string;
    mdiWifiSettings: string;
    mdiWifiStar: string;
    mdiWifiStrength1: string;
    mdiWifiStrength1Alert: string;
    mdiWifiStrength1Lock: string;
    mdiWifiStrength1LockOpen: string;
    mdiWifiStrength2: string;
    mdiWifiStrength2Alert: string;
    mdiWifiStrength2Lock: string;
    mdiWifiStrength2LockOpen: string;
    mdiWifiStrength3: string;
    mdiWifiStrength3Alert: string;
    mdiWifiStrength3Lock: string;
    mdiWifiStrength3LockOpen: string;
    mdiWifiStrength4: string;
    mdiWifiStrength4Alert: string;
    mdiWifiStrength4Lock: string;
    mdiWifiStrength4LockOpen: string;
    mdiWifiStrengthAlertOutline: string;
    mdiWifiStrengthLockOpenOutline: string;
    mdiWifiStrengthLockOutline: string;
    mdiWifiStrengthOff: string;
    mdiWifiStrengthOffOutline: string;
    mdiWifiStrengthOutline: string;
    mdiWifiSync: string;
    mdiWikipedia: string;
    mdiWindPower: string;
    mdiWindPowerOutline: string;
    mdiWindTurbine: string;
    mdiWindTurbineAlert: string;
    mdiWindTurbineCheck: string;
    mdiWindowClose: string;
    mdiWindowClosed: string;
    mdiWindowClosedVariant: string;
    mdiWindowMaximize: string;
    mdiWindowMinimize: string;
    mdiWindowOpen: string;
    mdiWindowOpenVariant: string;
    mdiWindowRestore: string;
    mdiWindowShutter: string;
    mdiWindowShutterAlert: string;
    mdiWindowShutterAuto: string;
    mdiWindowShutterCog: string;
    mdiWindowShutterOpen: string;
    mdiWindowShutterSettings: string;
    mdiWindsock: string;
    mdiWiper: string;
    mdiWiperWash: string;
    mdiWiperWashAlert: string;
    mdiWizardHat: string;
    mdiWordpress: string;
    mdiWrap: string;
    mdiWrapDisabled: string;
    mdiWrench: string;
    mdiWrenchCheck: string;
    mdiWrenchCheckOutline: string;
    mdiWrenchClock: string;
    mdiWrenchClockOutline: string;
    mdiWrenchCog: string;
    mdiWrenchCogOutline: string;
    mdiWrenchOutline: string;
    mdiXamarin: string;
    mdiXml: string;
    mdiXmpp: string;
    mdiYahoo: string;
    mdiYeast: string;
    mdiYinYang: string;
    mdiYoga: string;
    mdiYoutube: string;
    mdiYoutubeGaming: string;
    mdiYoutubeStudio: string;
    mdiYoutubeSubscription: string;
    mdiYoutubeTv: string;
    mdiYurt: string;
    mdiZWave: string;
    mdiZend: string;
    mdiZigbee: string;
    mdiZipBox: string;
    mdiZipBoxOutline: string;
    mdiZipDisk: string;
    mdiZodiacAquarius: string;
    mdiZodiacAries: string;
    mdiZodiacCancer: string;
    mdiZodiacCapricorn: string;
    mdiZodiacGemini: string;
    mdiZodiacLeo: string;
    mdiZodiacLibra: string;
    mdiZodiacPisces: string;
    mdiZodiacSagittarius: string;
    mdiZodiacScorpio: string;
    mdiZodiacTaurus: string;
    mdiZodiacVirgo: string;
};
type IconName = keyof typeof allIcons;

type ChannelId = string;
declare class Channel<T> {
    id: ChannelId;
    $type: T;
    constructor(id?: ChannelId);
}
interface Producer<T, W> {
    chan: Channel<T> | ChannelId;
    produce: CovariantFn<W, T>;
}

type SQLITE_boolean = Branded<number, {
    SQLITE_boolean: true;
}>;
type SQLITE_boolean_ = number;
declare const SQLITE_true: SQLITE_boolean;
declare const SQLITE_false: SQLITE_boolean;

type INodeStore = {
    data: {
        isExpanded?: Maybe<SQLITE_boolean_>;
    };
    update: (data: {
        isExpanded: SQLITE_boolean_;
    }) => void;
};
type TreeStorageConfig = {
    /**
     * @since 2024-05-21
     * called once at construction time to get a
     * hold on some persistent storage object, in case you want to persist the tree state
     * easilly
     * */
    getNodeState: (node: TreeNode) => INodeStore;
    /**
     */
    updateAll?: (data: {
        isExpanded: SQLITE_boolean_ | null;
    }) => void;
};
declare const defaultTreeStorage: (node: TreeNode) => INodeStore;
declare class Tree {
    config: TreeStorageConfig;
    topLevelNodes: TreeNode[];
    KeyboardNavigableDomNodeID: string;
    constructor(rootNodes: ITreeElement[], config?: TreeStorageConfig);
}

type NodeId = string;
type NodeKey = string;
type NodeKeyKind = 'Property' | 'ArrayIndex' | 'unknown';
type MoveConflictResolution = 'disambiguate' | 'overwrite' | 'fail';
type NodeData = ITreeEntry;
type IArrayLike = {
    [x: number]: TreeNode;
};
declare const getId: (node: TreeNode | NodeId) => string;
/** nested array that looks like [child, [parent..]]
 * i.e. ["0",["Foo",["3",["D",["A"]]]]] */
type NodePath = [NodeKey] | [NodeKey, NodePath];
type TreeScrollOptions = {
    /** defaults to 'instant' */
    behavior?: ScrollBehavior;
    /** default to 'nearest' */
    block?: ScrollLogicalPosition;
};
interface TreeNode extends IArrayLike {
}
declare class TreeNode {
    tree: Tree;
    elem: ITreeElement;
    parent: TreeNode | undefined;
    scrollIntoView(p?: TreeScrollOptions): void;
    get isOpen(): number | false;
    open(): void;
    close(): void;
    toggle(): void;
    onPrimaryAction: () => void | undefined;
    onFocusItem: () => void | undefined;
    data: ITreeEntry;
    id: string;
    entryL: INodeStore;
    constructor(tree: Tree, elem: ITreeElement, parent: TreeNode | undefined);
    get valid(): boolean;
    get childElements(): ITreeElement[];
    get childKeys(): NodeKey[];
    _children_: {
        [key: string]: TreeNode;
    };
    get children(): TreeNode[];
    get depth(): number;
    /** remove node from module */
    delete: () => boolean;
    get siblingsIncludingSelf(): TreeNode[];
    get siblingsExcludingSelf(): TreeNode[];
    get nextSibling(): TreeNode | undefined;
    get prevSibling(): TreeNode | undefined;
    /** return the first child of a given node
     * or undefined if node has no child */
    get firstChild(): TreeNode | undefined;
    get_descendant_and_self(mode: 'dfs' | 'bfs'): TreeNode[];
    get lastChild(): TreeNode | undefined;
    /** return the last descendant
     * [a[b,c],x[y,z]] => z */
    get lastDescendant(): TreeNode | undefined;
    get isRoot(): boolean;
    get root(): TreeNode | undefined;
    get rootOrSelf(): TreeNode;
    get path_v1(): NodePath;
    get path_v2(): string[];
    get lastOpenedDescendant(): TreeNode | undefined;
    get_descendant(mode: 'dfs' | 'bfs'): TreeNode[];
    get descendantBFS(): TreeNode[];
    get descendantDFS(): TreeNode[];
    get nodeAboveInView(): TreeNode | undefined;
    get nodeBelowInView(): TreeNode | undefined;
}

type ITreeElement<P = any> = {
    key: string;
    ctor: {
        new (p: P): ITreeEntry;
    } | ((p: P) => ITreeEntry);
    props: P;
};
interface ITreeEntry<P = any> {
    children?: () => ITreeElement[];
    name: string;
    icon?: Maybe<string | ReactNode>;
    iconExpanded?: Maybe<string | ReactNode>;
    isOpened?: boolean;
    /**
     * if implemented, will allow user to delete entry via backspace or delete
     * function must return true if deletion succeeded
     * function must return false if deletion fail
     */
    delete?: (n: TreeNode) => boolean;
    onPrimaryAction?: (n: TreeNode) => void;
    onFocusItem?: (n: TreeNode) => void;
    onExpand?: (n: TreeNode) => void;
    actions?: TreeEntryAction[];
    extra?: () => ReactNode;
}
type TreeEntryAction = {
    name: string;
    mode: 'small' | 'full';
    icon: string;
    onClick: (node: TreeNode) => void;
    className?: string;
};

type SchemaDict = {
    [key: string]: ISpec;
};
interface ISpec<W extends IWidget = IWidget> {
    type: W['type'];
    config: W['$Config'];
    $Widget: W;
    $Type: W['type'];
    $Config: W['$Config'];
    $Serial: W['$Serial'];
    $Value: W['$Value'];
    LabelExtraUI?: CovariantFC<{
        widget: W;
    }>;
    producers: Producer<any, any>[];
    publish<T>(chan: Channel<T> | ChannelId, produce: (self: W['$Widget']) => T): this;
    subscribe<T>(chan: Channel<T> | ChannelId, effect: (arg: T, self: W['$Widget']) => void): this;
    reactions: {
        expr: (self: any) => any;
        effect: (arg: any, self: any) => void;
    }[];
    addReaction<T>(expr: (self: W['$Widget']) => T, effect: (arg: T, self: W['$Widget']) => void): this;
}

/** custom type checking;
 * valid:
 *  - true,
 *  - [],
 * invalid:
 *  - false,
 *  - ["errMsg", ...]
 *  - "errMsg"
 * */
type Problem_Ext = boolean | string | Problem | null | undefined | Problem_Ext[];
type Problem = {
    severity?: Severity;
    message: string;
    data?: any;
};
declare const normalizeProblem: (problem: Problem_Ext) => Problem[];
declare enum Severity {
    Error = "Error",
    Warning = "Warning",
    Info = "Info",
    Success = "Success"
}

declare abstract class BaseWidget {
    abstract spec: ISpec;
    asTreeElement(key: string): ITreeElement<{
        widget: IWidget;
        key: string;
    }>;
    $WidgetSym: typeof $WidgetSym;
    /**
     * when this widget or one of its descendant publishes a value,
     * it will be stored here and possibly consumed by other descendants
     */
    _advertisedValues: Record<ChannelId, any>;
    /**
     * when consuming an advertised value, walk upward the parent chain, and look for
     * a value stored in the advsertised values
     */
    consume<T extends any>(chan: Channel<T> | ChannelId): Maybe<T>;
    /** true if errors.length > 0 */
    get hasErrors(): boolean;
    abstract value: unknown;
    /**
     * return a short string summary
     * expected to be overriden in child classes
     */
    get summary(): string;
    /** all errors: base (built-in widget) + custom (user-defined in config) */
    get errors(): Problem[];
    get customErrors(): Problem[];
    bumpSerial(this: IWidget): void;
    bumpValue(this: IWidget): void;
    /**
     * this method can be heavilly optimized
     * todo:
     *  - by storing the published value locally
     *  - by defining a getter on the _advertisedValues object of all parents
     *  - by only setting this getter up once.
     * */
    publishValue(this: IWidget): void;
    setCollapsed(this: IWidget, val?: boolean): void;
    toggleCollapsed(this: IWidget): void;
    ui(this: IWidget): JSX.Element;
    defaultHeader(this: IWidget): JSX.Element | undefined;
    defaultBody(this: IWidget): JSX.Element | undefined;
    header(this: IWidget): JSX.Element | undefined;
    body(this: IWidget): JSX.Element | undefined;
    /** list of all subwidgets, without named keys */
    get subWidgets(): IWidget[];
    /** list of all subwidgets, without named keys */
    get subWidgetsWithKeys(): {
        key: string;
        widget: IWidget;
    }[];
    /** getter that resolve to `this.spec.producers` */
    get producers(): Producer<any, any>[];
    /** getter that resolve to `this.spec.publish` */
    get publish(): <T>(chan: string | Channel<T>, produce: (self: IWidget<$WidgetTypes>) => T) => ISpec<IWidget<$WidgetTypes>>;
    /** getter that resolve to `this.spec.subscribe` */
    get subscribe(): <T>(chan: string | Channel<T>, effect: (arg: T, self: IWidget<$WidgetTypes>) => void) => ISpec<IWidget<$WidgetTypes>>;
    /** getter that resolve to `this.spec.reactions` */
    get reactions(): {
        expr: (self: any) => any;
        effect: (arg: any, self: any) => void;
    }[];
    /** getter that resolve to `this.spec.addReaction` */
    get addReaction(): <T>(expr: (self: IWidget<$WidgetTypes>) => T, effect: (arg: T, self: IWidget<$WidgetTypes>) => void) => ISpec<IWidget<$WidgetTypes>>;
    get icon(): Maybe<IconName>;
    /** this function MUST be called at the end of every widget constructor */
    init(mobxOverrides: any): void;
}

/**
 * base widget type; default type-level param when we work with unknown widget
 * still allow to use SharedConfig properties, and SharedSerial properties
 * */
type $WidgetTypes = {
    $Type: string;
    $Config: SharedWidgetConfig<any>;
    $Serial: SharedWidgetSerial;
    $Value: any;
    $Widget: IWidget<$WidgetTypes>;
};
declare const isWidget: (x: any) => x is IWidget<$WidgetTypes>;
interface IWidget<K extends $WidgetTypes = $WidgetTypes> extends BaseWidget {
    $Type: K['$Type']; /** type only properties; do not use directly; used to make typings good and fast */
    $Config: K['$Config']; /** type only properties; do not use directly; used to make typings good and fast */
    $Serial: K['$Serial']; /** type only properties; do not use directly; used to make typings good and fast */
    $Value: K['$Value']; /** type only properties; do not use directly; used to make typings good and fast */
    $Widget: K['$Widget']; /** type only properties; do not use directly; used to make typings good and fast */
    /** unique ID; each node in the form tree has one; persisted in serial */
    readonly id: string;
    /** spec used to instanciate this widget */
    readonly spec: ISpec<any>;
    /** widget type; can be used instead of `instanceof` to known which wiget it is */
    readonly type: K['$Type'];
    /** the provided config  */
    readonly config: K['$Config'];
    /** wiget value is the simple/easy-to-use representation of that widget  */
    readonly value: K['$Value'];
    /** wiget serial is the full serialized representation of that widget  */
    readonly serial: K['$Serial'];
    /** root form this widget has benn registered to */
    readonly form: Form;
    /** parent widget of this widget, if any */
    readonly parent: IWidget | null;
    /** base validation errors specific to this widget; */
    readonly baseErrors: Problem_Ext;
    /** unified api to allow setting serial from value */
    setValue(val: K['$Value']): void;
    /** if specified, override the default algorithm to decide if the widget should have borders */
    border?: boolean;
    /** if specified, override the default algorithm to decide if the widget should have borders */
    collapsible?: boolean;
    /** if specified, override the default algorithm to decide if the widget should have label aligned */
    alignLabel?: boolean;
    /** if specified, override the default algorithm to decide if the widget container should have a background of base-100 */
    background?: boolean;
    /** default header UI */
    readonly DefaultHeaderUI: CovariantFC<{
        widget: K['$Widget'];
    }> | undefined;
    /** default body UI */
    readonly DefaultBodyUI: CovariantFC<{
        widget: K['$Widget'];
    }> | undefined;
}
declare const $WidgetSym: unique symbol;
/** 🔶 2024-03-13 rvion: TODO: remove that function; use ['$Value'] instead */
type GetWidgetResult<Widget> = Widget extends {
    $Value: infer Value;
} ? Value : never;
/** 🔶 2024-03-13 rvion: TODO: remove that function; use ['$Serial'] instead */
type GetWidgetState<Widget> = Widget extends {
    $Serial: infer Serial;
} ? Serial : never;
/** common properties we expect to see in a widget serial */
type SharedWidgetSerial = {
    id?: string;
    /** name of the widget, so we can later re-instanciate a widget from this */
    type: string;
    /** if true, widget should be displayed folded when it make sense in given context */
    collapsed?: boolean;
    /** timestap this widget was last updated */
    lastUpdatedAt?: number;
    /** unused internally, here so you can add whatever you want inside */
    custom?: any;
    /**
     * DO NOT MANUALLY SET THIS VALUE;
     * this value will be set by the init() function (BaseWidget class)
     * use to know if the onCreate function should be re-run or not
     * */
    _creationKey?: string;
};
type WidgetSerialFields<X> = X & SharedWidgetSerial;
type WidgetConfigFields<X, T extends $WidgetTypes> = X & SharedWidgetConfig<T>;
type WidgetMenuAction<T extends $WidgetTypes> = {
    /** https://pictogrammers.com/library/mdi/ */
    label: string;
    icon?: IconName;
    apply: (form: T['$Widget']) => void;
};
type SharedWidgetConfig<T extends $WidgetTypes> = {
    /**
     * @since 2024-05-20
     * @stability beta
     * Icon name from the icon library.
     *   - "mdi..." for Material design icons - 7000+ icons https://pictogrammers.com/library/mdi/)
     *   - "cdi..." for Cushy design icons - 1+ custom icon by the cushy team
     */
    icon?: IconName | CovariantFn<T['$Widget'], IconName>;
    /**
     * @since 2024-05-19
     * @stability beta
     * Appearance box props
     */
    box?: BoxProps;
    /**
     * @since 2024-05-14
     * @stability beta
     * This function will be executed either on first creation, or when the
     * evaluationKey changes. The evaluationKey is stored in the group serial.
     */
    onCreate?: CovariantFn<T['$Widget'], void> & {
        evaluationKey?: string;
    };
    /**
     * @since 2024-05-14
     * @stability beta
     * This function will be executed either on every widget instanciation.
     */
    onInit?: CovariantFn<T['$Widget'], void>;
    /** allow to specify custom headers */
    header?: null | ((p: {
        widget: T['$Widget'];
    }) => JSX.Element);
    /** allow to specify custom body */
    body?: null | ((p: {
        widget: T['$Widget'];
    }) => JSX.Element);
    /** will be called when value changed */
    onValueChange?: (val: T['$Value'], self: T['$Widget']) => void;
    /** allow to set custom actions on your widgets */
    presets?: WidgetMenuAction<T>[];
    /** custom type checking;
     * valid:
     *  - true,
     *  - [],
     * invalid:
     *  - false,
     *  - ["errMsg", ...]
     *  - "errMsg"
     * */
    check?: (val: T['$Widget']) => Problem_Ext;
    /**
     * The label to display.
     * If none provided, the parent key is going to be converted as label.
     * - use false to disable
     * - use "" for an emtpy string label
     */
    label?: string | false;
    /** The layout direction, H for 'horizontal' or V for 'vertical' */
    layout?: 'H' | 'V';
    /** if provided, will dispaly a tooltip when hovering over the label */
    tooltip?: string;
    /**
     * Will be injected around the widget;
     * Allow you to customize look and feel a bit without having
     * to use custom widgets
     * */
    className?: string;
    /**
     * [DEBUG FEATURE] show the ID right after the label
     * may be usefull when debugging dynamic widgets referencing themselves.
     */
    showID?: boolean;
    /**
     * override the default `collapsed` status
     * only taken into account when widget is collapsible
     */
    startCollapsed?: boolean;
    /** if false, the widget will always be expanded */
    collapsed?: false;
    /** if provided, override the default logic to decide if the widget need to be bordered */
    border?: boolean;
    /** if provided, override the default logic to decide if the widget need to be bordered */
    alignLabel?: boolean;
    /** if provided, widget will be hidden */
    hidden?: boolean;
    /** unused internally, here so you can add whatever you want inside */
    custom?: any;
};

type Widget_group_config<T extends SchemaDict> = WidgetConfigFields<{
    /**
     * lambda function is deprecated, prefer passing the items as an object
     * directly
     */
    items?: T | (() => T);
    /**
     * legacy property, will be removed soon
     * you can alreay check if you're a top-level property
     * by checking if this.parent is null
     * @deprecated
     */
    topLevel?: boolean;
    /** if provided, will be used in the header when fields are folded */
    summary?: (items: {
        [k in keyof T]: GetWidgetResult<T[k]>;
    }) => string;
}, Widget_group_types<T>>;
type Widget_group_serial<T extends SchemaDict> = WidgetSerialFields<{
    type: 'group';
    values_: {
        [K in keyof T]?: T[K]['$Serial'];
    };
}>;
type Widget_group_value<T extends SchemaDict> = {
    [k in keyof T]: GetWidgetResult<T[k]>;
};
type Widget_group_types<T extends SchemaDict> = {
    $Type: 'group';
    $Config: Widget_group_config<T>;
    $Serial: Widget_group_serial<T>;
    $Value: Widget_group_value<T>;
    $Widget: Widget_group<T>;
};
interface Widget_group<T extends SchemaDict> extends Widget_group_types<T> {
}
declare class Widget_group<T extends SchemaDict> extends BaseWidget implements IWidget<Widget_group_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_group<T>>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_group<any>;
    }>;
    get DefaultBodyUI(): ((<T_1 extends SchemaDict>(p: {
        className?: string | undefined;
        widget: Widget_group<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    }) | undefined;
    get baseErrors(): Problem_Ext;
    get summary(): string;
    readonly id: string;
    get config(): Widget_group_config<T>;
    readonly type: 'group';
    collapseAllEntries: () => void;
    expandAllEntries: () => void;
    /** all [key,value] pairs */
    get entries(): [string, IWidget<$WidgetTypes>][];
    at: <K extends keyof T>(key: K) => T[K]['$Widget'];
    get: <K extends keyof T>(key: K) => T[K]['$Value'];
    /** the dict of all child widgets */
    fields: {
        [k in keyof T]: T[k]['$Widget'];
    };
    serial: Widget_group_serial<T>;
    background: boolean;
    private _defaultSerial;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_group<T>>, serial?: Widget_group_serial<T>, 
    /** used to register self as the root, before we start instanciating anything */
    preHydrate?: (self: Widget_group<any>) => void);
    setValue(val: Widget_group_value<T>): void;
    setPartialValue(val: Partial<Widget_group_value<T>>): void;
    get subWidgets(): any[];
    get subWidgetsWithKeys(): {
        key: string;
        widget: any;
    }[];
    set value(val: Widget_group_value<T>);
    get value(): Widget_group_value<T>;
    __value: {
        [k in keyof T]: GetWidgetResult<T[k]>;
    };
}

type Widget_shared_config<T extends ISpec = ISpec> = WidgetConfigFields<{
    /** shared widgets must be registered in the form root group */
    rootKey: string;
    widget: T['$Widget'];
}, Widget_shared_types<T>>;
type Widget_shared_serial = WidgetSerialFields<{
    type: 'shared';
}>;
declare const Widget_shared_fromValue: (val: Widget_shared_value) => Widget_shared_serial;
type Widget_shared_value<T extends ISpec = ISpec> = T['$Value'];
type Widget_shared_types<T extends ISpec = ISpec> = {
    $Type: 'shared';
    $Config: Widget_shared_config<T>;
    $Serial: Widget_shared_serial;
    $Value: Widget_shared_value<T>;
    $Widget: ISpec['$Widget'];
};
interface Widget_shared<T extends ISpec = ISpec> extends Widget_shared_types<T> {
}
declare class Widget_shared<T extends ISpec = ISpec> extends BaseWidget implements IWidget<Widget_shared_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_shared<T>>;
    readonly id: string;
    get config(): Widget_shared_config<T>;
    readonly type: 'shared';
    readonly DefaultHeaderUI: undefined;
    readonly DefaultBodyUI: undefined;
    $Widget: T['$Widget'];
    serial: Widget_shared_serial;
    get shared(): T['$Widget'];
    get baseErrors(): Problem_Ext;
    hidden: () => void;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_shared<T>>, serial?: Widget_shared_serial);
    setValue(val: Widget_shared_value<T>): void;
    set value(val: Widget_shared_value<T>);
    get value(): Widget_shared_value<T>;
}

interface IFormBuilder {
    _cache: {
        count: number;
    };
    _HYDRATE: <T extends ISpec<any>>(self: IWidget | null, spec: T, serial: any | null) => T['$Widget'];
    form: Form;
    shared: <W extends ISpec<any>>(key: string, spec: W) => Widget_shared<W>;
    group: (config: Widget_group_config<any>) => ISpec<Widget_group<any>>;
    SpecCtor: {
        new <T extends IWidget>(type: T['$Type'], config: T['$Config']): ISpec<T>;
    };
}

/**
 * you need one per project;
 * singleton.
 * allow to inject the proper form config for your specific project.
 * to avoid problem with hot-reload, export an instance from a module directly and use it from there.
 */
declare class FormManager<BUILDER extends IFormBuilder> {
    builderCtor: {
        new (form: Form<any, BUILDER>): BUILDER;
    };
    constructor(builderCtor: {
        new (form: Form<any, BUILDER>): BUILDER;
    });
    _builders: WeakMap<Form<ISpec<any>, IFormBuilder>, BUILDER>;
    getBuilder: (form: Form<any, BUILDER>) => BUILDER;
    /** LEGACY API; TYPES ARE COMPLICATED DUE TO MAINTAINING BACKWARD COMPAT */
    fields: <FIELDS extends SchemaDict>(ui: (form: BUILDER) => FIELDS, formProperties?: FormProperties<ISpec<Widget_group<FIELDS>>, BUILDER>) => Form<ISpec<Widget_group<FIELDS>>, BUILDER>;
    /** simple alias to create a new Form */
    form: <ROOT extends ISpec<IWidget<$WidgetTypes>>>(ui: (form: BUILDER) => ROOT, formProperties?: FormProperties<ROOT, BUILDER>) => Form<ROOT, BUILDER>;
    /** simple way to defined forms and in react components */
    use: <ROOT extends ISpec<IWidget<$WidgetTypes>>>(ui: (form: BUILDER) => ROOT, formProperties?: FormProperties<ROOT, BUILDER>, deps?: DependencyList) => Form<ROOT, BUILDER>;
}

/** quick type alias used for unknown serial; for now, default to shared fields */
type AnyWidgetSerial = SharedWidgetSerial;
/** a form serial ready to be persisted somewhere */
type FormSerial = {
    type: 'FormSerial';
    name: string;
    root: AnyWidgetSerial;
    shared: Record<string, AnyWidgetSerial>;
    valueLastUpdatedAt: Timestamp;
    serialLastUpdatedAt: Timestamp;
};

type FormProperties<ROOT extends ISpec<any>, BUILDER extends IFormBuilder> = {
    name: string;
    onSerialChange?: (form: Form<ROOT, BUILDER>) => void;
    onValueChange?: (form: Form<ROOT, BUILDER>) => void;
    initialSerial?: () => Maybe<FormSerial>;
};
declare class Form<
/** shape of the form, to preserve type safety down to nested children */
ROOT extends ISpec<any> = ISpec<any>, 
/**
 * project-specific builder, allowing to have modular form setups with different widgets
 * Cushy BUILDER is `FormBuilder` in `src/controls/FormBuilder.ts`
 * */
BUILDER extends IFormBuilder = IFormBuilder> {
    manager: FormManager<BUILDER>;
    ui: CovariantFn<BUILDER, ROOT>;
    formConfig: FormProperties<ROOT, BUILDER>;
    uid: string;
    constructor(manager: FormManager<BUILDER>, ui: CovariantFn<BUILDER, ROOT>, formConfig: FormProperties<ROOT, BUILDER>);
    /** loading error  */
    error: Maybe<string>;
    /** shortcut to access the <FormUI /> component without having to import it first */
    FormUI: react.FunctionComponent<FormUIProps>;
    /**
     * allow to quickly render the form in a react component
     * without having to import any component; usage:
     * | <div>{x.render()}</div>
     */
    render: (p?: Omit<FormUIProps, 'form'>) => ReactNode;
    renderAsConfigBtn: () => ReactNode;
    get value(): ROOT['$Value'];
    get serial(): FormSerial;
    /** @deprecated ; only work when root is a Widget_group */
    get fields(): ROOT extends ISpec<Widget_group<infer FIELDS>> ? {
        [k in keyof FIELDS]: FIELDS[k]['$Widget'];
    } : never;
    get root(): ROOT['$Widget'];
    /** Out of Tree unmounted serials  */
    shared: {
        [key: string]: any;
    };
    /** timestamp at which form value was last updated, or 0 when form still pristine */
    valueLastUpdatedAt: Timestamp;
    /** timestamp at which form serial was last updated, or 0 when form still pristine */
    serialLastUpdatedAt: Timestamp;
    private _onSerialChange;
    private _onValueChange;
    /** every widget node must call this function once it's value change */
    valueChanged: (widget: IWidget) => void;
    knownShared: Map<string, IWidget>;
    /** every widget node must call this function once it's serial changed */
    serialChanged: (_widget: IWidget) => void;
    /** from builder, offering simple API for your project specifc widgets  */
    builder: BUILDER;
    /** (@internal) will be set at builer creation, to allow for dyanmic recursive forms */
    _ROOT: ROOT['$Widget'];
    ready: boolean;
    init: () => ROOT;
}

type FormUIProps = {
    form: Maybe<Form>;
    /** from your daisy-ui config */
    theme?: BoxProps;
    className?: string;
    style?: CSSProperties;
    /** any react children passed to this widget will be displayed at the end of the form */
    children?: ReactNode;
    /**
     * override default label.
     * @default 'Submit'
     * only used when
     *  - submitButton is not provided
     *  - submitAction is provided (no submitAction => no button => no label needed)
     */
    submitLabel?: string;
    /**
     * override default ac
     */
    submitAction?: CovariantFn<Form, void> | 'confetti';
    /** if provided, submitLabel and submitActinod will not be used */
    submitButton?: CovariantFC<{
        form: Form;
    }>;
};
declare const FormUI: react.FunctionComponent<FormUIProps>;

type RawIconProps = _mdi_react_dist_IconProps_d_ts.IconProps;
type MyIconProps = Omit<RawIconProps, 'path'>;
declare const Ikon: {
    [key in keyof typeof allIcons]: FC<MyIconProps>;
};
declare const IkonOf: ({ name, ...p }: {
    name: IconName;
} & MyIconProps) => react_jsx_runtime.JSX.Element;
declare const getAllIcons: () => ("mdiAbTesting" | "mdiAbacus" | "mdiAbjadArabic" | "mdiAbjadHebrew" | "mdiAbugidaDevanagari" | "mdiAbugidaThai" | "mdiAccessPoint" | "mdiAccessPointCheck" | "mdiAccessPointMinus" | "mdiAccessPointNetwork" | "mdiAccessPointNetworkOff" | "mdiAccessPointOff" | "mdiAccessPointPlus" | "mdiAccessPointRemove" | "mdiAccount" | "mdiAccountAlert" | "mdiAccountAlertOutline" | "mdiAccountArrowDown" | "mdiAccountArrowDownOutline" | "mdiAccountArrowLeft" | "mdiAccountArrowLeftOutline" | "mdiAccountArrowRight" | "mdiAccountArrowRightOutline" | "mdiAccountArrowUp" | "mdiAccountArrowUpOutline" | "mdiAccountBadge" | "mdiAccountBadgeOutline" | "mdiAccountBox" | "mdiAccountBoxEditOutline" | "mdiAccountBoxMinusOutline" | "mdiAccountBoxMultiple" | "mdiAccountBoxMultipleOutline" | "mdiAccountBoxOutline" | "mdiAccountBoxPlusOutline" | "mdiAccountCancel" | "mdiAccountCancelOutline" | "mdiAccountCard" | "mdiAccountCardOutline" | "mdiAccountCash" | "mdiAccountCashOutline" | "mdiAccountCheck" | "mdiAccountCheckOutline" | "mdiAccountChild" | "mdiAccountChildCircle" | "mdiAccountChildOutline" | "mdiAccountCircle" | "mdiAccountCircleOutline" | "mdiAccountClock" | "mdiAccountClockOutline" | "mdiAccountCog" | "mdiAccountCogOutline" | "mdiAccountConvert" | "mdiAccountConvertOutline" | "mdiAccountCowboyHat" | "mdiAccountCowboyHatOutline" | "mdiAccountCreditCard" | "mdiAccountCreditCardOutline" | "mdiAccountDetails" | "mdiAccountDetailsOutline" | "mdiAccountEdit" | "mdiAccountEditOutline" | "mdiAccountEye" | "mdiAccountEyeOutline" | "mdiAccountFile" | "mdiAccountFileOutline" | "mdiAccountFileText" | "mdiAccountFileTextOutline" | "mdiAccountFilter" | "mdiAccountFilterOutline" | "mdiAccountGroup" | "mdiAccountGroupOutline" | "mdiAccountHardHat" | "mdiAccountHardHatOutline" | "mdiAccountHeart" | "mdiAccountHeartOutline" | "mdiAccountInjury" | "mdiAccountInjuryOutline" | "mdiAccountKey" | "mdiAccountKeyOutline" | "mdiAccountLock" | "mdiAccountLockOpen" | "mdiAccountLockOpenOutline" | "mdiAccountLockOutline" | "mdiAccountMinus" | "mdiAccountMinusOutline" | "mdiAccountMultiple" | "mdiAccountMultipleCheck" | "mdiAccountMultipleCheckOutline" | "mdiAccountMultipleMinus" | "mdiAccountMultipleMinusOutline" | "mdiAccountMultipleOutline" | "mdiAccountMultiplePlus" | "mdiAccountMultiplePlusOutline" | "mdiAccountMultipleRemove" | "mdiAccountMultipleRemoveOutline" | "mdiAccountMusic" | "mdiAccountMusicOutline" | "mdiAccountNetwork" | "mdiAccountNetworkOff" | "mdiAccountNetworkOffOutline" | "mdiAccountNetworkOutline" | "mdiAccountOff" | "mdiAccountOffOutline" | "mdiAccountOutline" | "mdiAccountPlus" | "mdiAccountPlusOutline" | "mdiAccountQuestion" | "mdiAccountQuestionOutline" | "mdiAccountReactivate" | "mdiAccountReactivateOutline" | "mdiAccountRemove" | "mdiAccountRemoveOutline" | "mdiAccountSchool" | "mdiAccountSchoolOutline" | "mdiAccountSearch" | "mdiAccountSearchOutline" | "mdiAccountSettings" | "mdiAccountSettingsOutline" | "mdiAccountStar" | "mdiAccountStarOutline" | "mdiAccountSupervisor" | "mdiAccountSupervisorCircle" | "mdiAccountSupervisorCircleOutline" | "mdiAccountSupervisorOutline" | "mdiAccountSwitch" | "mdiAccountSwitchOutline" | "mdiAccountSync" | "mdiAccountSyncOutline" | "mdiAccountTag" | "mdiAccountTagOutline" | "mdiAccountTie" | "mdiAccountTieHat" | "mdiAccountTieHatOutline" | "mdiAccountTieOutline" | "mdiAccountTieVoice" | "mdiAccountTieVoiceOff" | "mdiAccountTieVoiceOffOutline" | "mdiAccountTieVoiceOutline" | "mdiAccountTieWoman" | "mdiAccountVoice" | "mdiAccountVoiceOff" | "mdiAccountWrench" | "mdiAccountWrenchOutline" | "mdiAdjust" | "mdiAdvertisements" | "mdiAdvertisementsOff" | "mdiAirConditioner" | "mdiAirFilter" | "mdiAirHorn" | "mdiAirHumidifier" | "mdiAirHumidifierOff" | "mdiAirPurifier" | "mdiAirPurifierOff" | "mdiAirbag" | "mdiAirballoon" | "mdiAirballoonOutline" | "mdiAirplane" | "mdiAirplaneAlert" | "mdiAirplaneCheck" | "mdiAirplaneClock" | "mdiAirplaneCog" | "mdiAirplaneEdit" | "mdiAirplaneLanding" | "mdiAirplaneMarker" | "mdiAirplaneMinus" | "mdiAirplaneOff" | "mdiAirplanePlus" | "mdiAirplaneRemove" | "mdiAirplaneSearch" | "mdiAirplaneSettings" | "mdiAirplaneTakeoff" | "mdiAirport" | "mdiAlarm" | "mdiAlarmBell" | "mdiAlarmCheck" | "mdiAlarmLight" | "mdiAlarmLightOff" | "mdiAlarmLightOffOutline" | "mdiAlarmLightOutline" | "mdiAlarmMultiple" | "mdiAlarmNote" | "mdiAlarmNoteOff" | "mdiAlarmOff" | "mdiAlarmPanel" | "mdiAlarmPanelOutline" | "mdiAlarmPlus" | "mdiAlarmSnooze" | "mdiAlbum" | "mdiAlert" | "mdiAlertBox" | "mdiAlertBoxOutline" | "mdiAlertCircle" | "mdiAlertCircleCheck" | "mdiAlertCircleCheckOutline" | "mdiAlertCircleOutline" | "mdiAlertDecagram" | "mdiAlertDecagramOutline" | "mdiAlertMinus" | "mdiAlertMinusOutline" | "mdiAlertOctagon" | "mdiAlertOctagonOutline" | "mdiAlertOctagram" | "mdiAlertOctagramOutline" | "mdiAlertOutline" | "mdiAlertPlus" | "mdiAlertPlusOutline" | "mdiAlertRemove" | "mdiAlertRemoveOutline" | "mdiAlertRhombus" | "mdiAlertRhombusOutline" | "mdiAlien" | "mdiAlienOutline" | "mdiAlignHorizontalCenter" | "mdiAlignHorizontalDistribute" | "mdiAlignHorizontalLeft" | "mdiAlignHorizontalRight" | "mdiAlignVerticalBottom" | "mdiAlignVerticalCenter" | "mdiAlignVerticalDistribute" | "mdiAlignVerticalTop" | "mdiAllInclusive" | "mdiAllInclusiveBox" | "mdiAllInclusiveBoxOutline" | "mdiAllergy" | "mdiAlpha" | "mdiAlphaA" | "mdiAlphaABox" | "mdiAlphaABoxOutline" | "mdiAlphaACircle" | "mdiAlphaACircleOutline" | "mdiAlphaB" | "mdiAlphaBBox" | "mdiAlphaBBoxOutline" | "mdiAlphaBCircle" | "mdiAlphaBCircleOutline" | "mdiAlphaC" | "mdiAlphaCBox" | "mdiAlphaCBoxOutline" | "mdiAlphaCCircle" | "mdiAlphaCCircleOutline" | "mdiAlphaD" | "mdiAlphaDBox" | "mdiAlphaDBoxOutline" | "mdiAlphaDCircle" | "mdiAlphaDCircleOutline" | "mdiAlphaE" | "mdiAlphaEBox" | "mdiAlphaEBoxOutline" | "mdiAlphaECircle" | "mdiAlphaECircleOutline" | "mdiAlphaF" | "mdiAlphaFBox" | "mdiAlphaFBoxOutline" | "mdiAlphaFCircle" | "mdiAlphaFCircleOutline" | "mdiAlphaG" | "mdiAlphaGBox" | "mdiAlphaGBoxOutline" | "mdiAlphaGCircle" | "mdiAlphaGCircleOutline" | "mdiAlphaH" | "mdiAlphaHBox" | "mdiAlphaHBoxOutline" | "mdiAlphaHCircle" | "mdiAlphaHCircleOutline" | "mdiAlphaI" | "mdiAlphaIBox" | "mdiAlphaIBoxOutline" | "mdiAlphaICircle" | "mdiAlphaICircleOutline" | "mdiAlphaJ" | "mdiAlphaJBox" | "mdiAlphaJBoxOutline" | "mdiAlphaJCircle" | "mdiAlphaJCircleOutline" | "mdiAlphaK" | "mdiAlphaKBox" | "mdiAlphaKBoxOutline" | "mdiAlphaKCircle" | "mdiAlphaKCircleOutline" | "mdiAlphaL" | "mdiAlphaLBox" | "mdiAlphaLBoxOutline" | "mdiAlphaLCircle" | "mdiAlphaLCircleOutline" | "mdiAlphaM" | "mdiAlphaMBox" | "mdiAlphaMBoxOutline" | "mdiAlphaMCircle" | "mdiAlphaMCircleOutline" | "mdiAlphaN" | "mdiAlphaNBox" | "mdiAlphaNBoxOutline" | "mdiAlphaNCircle" | "mdiAlphaNCircleOutline" | "mdiAlphaO" | "mdiAlphaOBox" | "mdiAlphaOBoxOutline" | "mdiAlphaOCircle" | "mdiAlphaOCircleOutline" | "mdiAlphaP" | "mdiAlphaPBox" | "mdiAlphaPBoxOutline" | "mdiAlphaPCircle" | "mdiAlphaPCircleOutline" | "mdiAlphaQ" | "mdiAlphaQBox" | "mdiAlphaQBoxOutline" | "mdiAlphaQCircle" | "mdiAlphaQCircleOutline" | "mdiAlphaR" | "mdiAlphaRBox" | "mdiAlphaRBoxOutline" | "mdiAlphaRCircle" | "mdiAlphaRCircleOutline" | "mdiAlphaS" | "mdiAlphaSBox" | "mdiAlphaSBoxOutline" | "mdiAlphaSCircle" | "mdiAlphaSCircleOutline" | "mdiAlphaT" | "mdiAlphaTBox" | "mdiAlphaTBoxOutline" | "mdiAlphaTCircle" | "mdiAlphaTCircleOutline" | "mdiAlphaU" | "mdiAlphaUBox" | "mdiAlphaUBoxOutline" | "mdiAlphaUCircle" | "mdiAlphaUCircleOutline" | "mdiAlphaV" | "mdiAlphaVBox" | "mdiAlphaVBoxOutline" | "mdiAlphaVCircle" | "mdiAlphaVCircleOutline" | "mdiAlphaW" | "mdiAlphaWBox" | "mdiAlphaWBoxOutline" | "mdiAlphaWCircle" | "mdiAlphaWCircleOutline" | "mdiAlphaX" | "mdiAlphaXBox" | "mdiAlphaXBoxOutline" | "mdiAlphaXCircle" | "mdiAlphaXCircleOutline" | "mdiAlphaY" | "mdiAlphaYBox" | "mdiAlphaYBoxOutline" | "mdiAlphaYCircle" | "mdiAlphaYCircleOutline" | "mdiAlphaZ" | "mdiAlphaZBox" | "mdiAlphaZBoxOutline" | "mdiAlphaZCircle" | "mdiAlphaZCircleOutline" | "mdiAlphabetAurebesh" | "mdiAlphabetCyrillic" | "mdiAlphabetGreek" | "mdiAlphabetLatin" | "mdiAlphabetPiqad" | "mdiAlphabetTengwar" | "mdiAlphabetical" | "mdiAlphabeticalOff" | "mdiAlphabeticalVariant" | "mdiAlphabeticalVariantOff" | "mdiAltimeter" | "mdiAmbulance" | "mdiAmmunition" | "mdiAmpersand" | "mdiAmplifier" | "mdiAmplifierOff" | "mdiAnchor" | "mdiAndroid" | "mdiAndroidStudio" | "mdiAngleAcute" | "mdiAngleObtuse" | "mdiAngleRight" | "mdiAngular" | "mdiAngularjs" | "mdiAnimation" | "mdiAnimationOutline" | "mdiAnimationPlay" | "mdiAnimationPlayOutline" | "mdiAnsible" | "mdiAntenna" | "mdiAnvil" | "mdiApacheKafka" | "mdiApi" | "mdiApiOff" | "mdiApple" | "mdiAppleFinder" | "mdiAppleIcloud" | "mdiAppleIos" | "mdiAppleKeyboardCaps" | "mdiAppleKeyboardCommand" | "mdiAppleKeyboardControl" | "mdiAppleKeyboardOption" | "mdiAppleKeyboardShift" | "mdiAppleSafari" | "mdiApplication" | "mdiApplicationArray" | "mdiApplicationArrayOutline" | "mdiApplicationBraces" | "mdiApplicationBracesOutline" | "mdiApplicationBrackets" | "mdiApplicationBracketsOutline" | "mdiApplicationCog" | "mdiApplicationCogOutline" | "mdiApplicationEdit" | "mdiApplicationEditOutline" | "mdiApplicationExport" | "mdiApplicationImport" | "mdiApplicationOutline" | "mdiApplicationParentheses" | "mdiApplicationParenthesesOutline" | "mdiApplicationSettings" | "mdiApplicationSettingsOutline" | "mdiApplicationVariable" | "mdiApplicationVariableOutline" | "mdiApproximatelyEqual" | "mdiApproximatelyEqualBox" | "mdiApps" | "mdiAppsBox" | "mdiArch" | "mdiArchive" | "mdiArchiveAlert" | "mdiArchiveAlertOutline" | "mdiArchiveArrowDown" | "mdiArchiveArrowDownOutline" | "mdiArchiveArrowUp" | "mdiArchiveArrowUpOutline" | "mdiArchiveCancel" | "mdiArchiveCancelOutline" | "mdiArchiveCheck" | "mdiArchiveCheckOutline" | "mdiArchiveClock" | "mdiArchiveClockOutline" | "mdiArchiveCog" | "mdiArchiveCogOutline" | "mdiArchiveEdit" | "mdiArchiveEditOutline" | "mdiArchiveEye" | "mdiArchiveEyeOutline" | "mdiArchiveLock" | "mdiArchiveLockOpen" | "mdiArchiveLockOpenOutline" | "mdiArchiveLockOutline" | "mdiArchiveMarker" | "mdiArchiveMarkerOutline" | "mdiArchiveMinus" | "mdiArchiveMinusOutline" | "mdiArchiveMusic" | "mdiArchiveMusicOutline" | "mdiArchiveOff" | "mdiArchiveOffOutline" | "mdiArchiveOutline" | "mdiArchivePlus" | "mdiArchivePlusOutline" | "mdiArchiveRefresh" | "mdiArchiveRefreshOutline" | "mdiArchiveRemove" | "mdiArchiveRemoveOutline" | "mdiArchiveSearch" | "mdiArchiveSearchOutline" | "mdiArchiveSettings" | "mdiArchiveSettingsOutline" | "mdiArchiveStar" | "mdiArchiveStarOutline" | "mdiArchiveSync" | "mdiArchiveSyncOutline" | "mdiArmFlex" | "mdiArmFlexOutline" | "mdiArrangeBringForward" | "mdiArrangeBringToFront" | "mdiArrangeSendBackward" | "mdiArrangeSendToBack" | "mdiArrowAll" | "mdiArrowBottomLeft" | "mdiArrowBottomLeftBoldBox" | "mdiArrowBottomLeftBoldBoxOutline" | "mdiArrowBottomLeftBoldOutline" | "mdiArrowBottomLeftThick" | "mdiArrowBottomLeftThin" | "mdiArrowBottomLeftThinCircleOutline" | "mdiArrowBottomRight" | "mdiArrowBottomRightBoldBox" | "mdiArrowBottomRightBoldBoxOutline" | "mdiArrowBottomRightBoldOutline" | "mdiArrowBottomRightThick" | "mdiArrowBottomRightThin" | "mdiArrowBottomRightThinCircleOutline" | "mdiArrowCollapse" | "mdiArrowCollapseAll" | "mdiArrowCollapseDown" | "mdiArrowCollapseHorizontal" | "mdiArrowCollapseLeft" | "mdiArrowCollapseRight" | "mdiArrowCollapseUp" | "mdiArrowCollapseVertical" | "mdiArrowDecision" | "mdiArrowDecisionAuto" | "mdiArrowDecisionAutoOutline" | "mdiArrowDecisionOutline" | "mdiArrowDown" | "mdiArrowDownBold" | "mdiArrowDownBoldBox" | "mdiArrowDownBoldBoxOutline" | "mdiArrowDownBoldCircle" | "mdiArrowDownBoldCircleOutline" | "mdiArrowDownBoldHexagonOutline" | "mdiArrowDownBoldOutline" | "mdiArrowDownBox" | "mdiArrowDownCircle" | "mdiArrowDownCircleOutline" | "mdiArrowDownDropCircle" | "mdiArrowDownDropCircleOutline" | "mdiArrowDownLeft" | "mdiArrowDownLeftBold" | "mdiArrowDownRight" | "mdiArrowDownRightBold" | "mdiArrowDownThick" | "mdiArrowDownThin" | "mdiArrowDownThinCircleOutline" | "mdiArrowExpand" | "mdiArrowExpandAll" | "mdiArrowExpandDown" | "mdiArrowExpandHorizontal" | "mdiArrowExpandLeft" | "mdiArrowExpandRight" | "mdiArrowExpandUp" | "mdiArrowExpandVertical" | "mdiArrowHorizontalLock" | "mdiArrowLeft" | "mdiArrowLeftBold" | "mdiArrowLeftBoldBox" | "mdiArrowLeftBoldBoxOutline" | "mdiArrowLeftBoldCircle" | "mdiArrowLeftBoldCircleOutline" | "mdiArrowLeftBoldHexagonOutline" | "mdiArrowLeftBoldOutline" | "mdiArrowLeftBottom" | "mdiArrowLeftBottomBold" | "mdiArrowLeftBox" | "mdiArrowLeftCircle" | "mdiArrowLeftCircleOutline" | "mdiArrowLeftDropCircle" | "mdiArrowLeftDropCircleOutline" | "mdiArrowLeftRight" | "mdiArrowLeftRightBold" | "mdiArrowLeftRightBoldOutline" | "mdiArrowLeftThick" | "mdiArrowLeftThin" | "mdiArrowLeftThinCircleOutline" | "mdiArrowLeftTop" | "mdiArrowLeftTopBold" | "mdiArrowOscillating" | "mdiArrowOscillatingOff" | "mdiArrowProjectile" | "mdiArrowProjectileMultiple" | "mdiArrowRight" | "mdiArrowRightBold" | "mdiArrowRightBoldBox" | "mdiArrowRightBoldBoxOutline" | "mdiArrowRightBoldCircle" | "mdiArrowRightBoldCircleOutline" | "mdiArrowRightBoldHexagonOutline" | "mdiArrowRightBoldOutline" | "mdiArrowRightBottom" | "mdiArrowRightBottomBold" | "mdiArrowRightBox" | "mdiArrowRightCircle" | "mdiArrowRightCircleOutline" | "mdiArrowRightDropCircle" | "mdiArrowRightDropCircleOutline" | "mdiArrowRightThick" | "mdiArrowRightThin" | "mdiArrowRightThinCircleOutline" | "mdiArrowRightTop" | "mdiArrowRightTopBold" | "mdiArrowSplitHorizontal" | "mdiArrowSplitVertical" | "mdiArrowTopLeft" | "mdiArrowTopLeftBoldBox" | "mdiArrowTopLeftBoldBoxOutline" | "mdiArrowTopLeftBoldOutline" | "mdiArrowTopLeftBottomRight" | "mdiArrowTopLeftBottomRightBold" | "mdiArrowTopLeftThick" | "mdiArrowTopLeftThin" | "mdiArrowTopLeftThinCircleOutline" | "mdiArrowTopRight" | "mdiArrowTopRightBoldBox" | "mdiArrowTopRightBoldBoxOutline" | "mdiArrowTopRightBoldOutline" | "mdiArrowTopRightBottomLeft" | "mdiArrowTopRightBottomLeftBold" | "mdiArrowTopRightThick" | "mdiArrowTopRightThin" | "mdiArrowTopRightThinCircleOutline" | "mdiArrowUDownLeft" | "mdiArrowUDownLeftBold" | "mdiArrowUDownRight" | "mdiArrowUDownRightBold" | "mdiArrowULeftBottom" | "mdiArrowULeftBottomBold" | "mdiArrowULeftTop" | "mdiArrowULeftTopBold" | "mdiArrowURightBottom" | "mdiArrowURightBottomBold" | "mdiArrowURightTop" | "mdiArrowURightTopBold" | "mdiArrowUUpLeft" | "mdiArrowUUpLeftBold" | "mdiArrowUUpRight" | "mdiArrowUUpRightBold" | "mdiArrowUp" | "mdiArrowUpBold" | "mdiArrowUpBoldBox" | "mdiArrowUpBoldBoxOutline" | "mdiArrowUpBoldCircle" | "mdiArrowUpBoldCircleOutline" | "mdiArrowUpBoldHexagonOutline" | "mdiArrowUpBoldOutline" | "mdiArrowUpBox" | "mdiArrowUpCircle" | "mdiArrowUpCircleOutline" | "mdiArrowUpDown" | "mdiArrowUpDownBold" | "mdiArrowUpDownBoldOutline" | "mdiArrowUpDropCircle" | "mdiArrowUpDropCircleOutline" | "mdiArrowUpLeft" | "mdiArrowUpLeftBold" | "mdiArrowUpRight" | "mdiArrowUpRightBold" | "mdiArrowUpThick" | "mdiArrowUpThin" | "mdiArrowUpThinCircleOutline" | "mdiArrowVerticalLock" | "mdiArtboard" | "mdiArtstation" | "mdiAspectRatio" | "mdiAssistant" | "mdiAsterisk" | "mdiAsteriskCircleOutline" | "mdiAt" | "mdiAtlassian" | "mdiAtm" | "mdiAtom" | "mdiAtomVariant" | "mdiAttachment" | "mdiAttachmentCheck" | "mdiAttachmentLock" | "mdiAttachmentMinus" | "mdiAttachmentOff" | "mdiAttachmentPlus" | "mdiAttachmentRemove" | "mdiAtv" | "mdiAudioInputRca" | "mdiAudioInputStereoMinijack" | "mdiAudioInputXlr" | "mdiAudioVideo" | "mdiAudioVideoOff" | "mdiAugmentedReality" | "mdiAurora" | "mdiAutoDownload" | "mdiAutoFix" | "mdiAutoMode" | "mdiAutoUpload" | "mdiAutorenew" | "mdiAutorenewOff" | "mdiAvTimer" | "mdiAwning" | "mdiAwningOutline" | "mdiAws" | "mdiAxe" | "mdiAxeBattle" | "mdiAxis" | "mdiAxisArrow" | "mdiAxisArrowInfo" | "mdiAxisArrowLock" | "mdiAxisLock" | "mdiAxisXArrow" | "mdiAxisXArrowLock" | "mdiAxisXRotateClockwise" | "mdiAxisXRotateCounterclockwise" | "mdiAxisXYArrowLock" | "mdiAxisYArrow" | "mdiAxisYArrowLock" | "mdiAxisYRotateClockwise" | "mdiAxisYRotateCounterclockwise" | "mdiAxisZArrow" | "mdiAxisZArrowLock" | "mdiAxisZRotateClockwise" | "mdiAxisZRotateCounterclockwise" | "mdiBabel" | "mdiBaby" | "mdiBabyBottle" | "mdiBabyBottleOutline" | "mdiBabyBuggy" | "mdiBabyBuggyOff" | "mdiBabyCarriage" | "mdiBabyCarriageOff" | "mdiBabyFace" | "mdiBabyFaceOutline" | "mdiBackburger" | "mdiBackspace" | "mdiBackspaceOutline" | "mdiBackspaceReverse" | "mdiBackspaceReverseOutline" | "mdiBackupRestore" | "mdiBacteria" | "mdiBacteriaOutline" | "mdiBadgeAccount" | "mdiBadgeAccountAlert" | "mdiBadgeAccountAlertOutline" | "mdiBadgeAccountHorizontal" | "mdiBadgeAccountHorizontalOutline" | "mdiBadgeAccountOutline" | "mdiBadminton" | "mdiBagCarryOn" | "mdiBagCarryOnCheck" | "mdiBagCarryOnOff" | "mdiBagChecked" | "mdiBagPersonal" | "mdiBagPersonalOff" | "mdiBagPersonalOffOutline" | "mdiBagPersonalOutline" | "mdiBagPersonalPlus" | "mdiBagPersonalPlusOutline" | "mdiBagPersonalTag" | "mdiBagPersonalTagOutline" | "mdiBagSuitcase" | "mdiBagSuitcaseOff" | "mdiBagSuitcaseOffOutline" | "mdiBagSuitcaseOutline" | "mdiBaguette" | "mdiBalcony" | "mdiBalloon" | "mdiBallot" | "mdiBallotOutline" | "mdiBallotRecount" | "mdiBallotRecountOutline" | "mdiBandage" | "mdiBank" | "mdiBankCheck" | "mdiBankCircle" | "mdiBankCircleOutline" | "mdiBankMinus" | "mdiBankOff" | "mdiBankOffOutline" | "mdiBankOutline" | "mdiBankPlus" | "mdiBankRemove" | "mdiBankTransfer" | "mdiBankTransferIn" | "mdiBankTransferOut" | "mdiBarcode" | "mdiBarcodeOff" | "mdiBarcodeScan" | "mdiBarley" | "mdiBarleyOff" | "mdiBarn" | "mdiBarrel" | "mdiBarrelOutline" | "mdiBaseball" | "mdiBaseballBat" | "mdiBaseballDiamond" | "mdiBaseballDiamondOutline" | "mdiBaseballOutline" | "mdiBash" | "mdiBasket" | "mdiBasketCheck" | "mdiBasketCheckOutline" | "mdiBasketFill" | "mdiBasketMinus" | "mdiBasketMinusOutline" | "mdiBasketOff" | "mdiBasketOffOutline" | "mdiBasketOutline" | "mdiBasketPlus" | "mdiBasketPlusOutline" | "mdiBasketRemove" | "mdiBasketRemoveOutline" | "mdiBasketUnfill" | "mdiBasketball" | "mdiBasketballHoop" | "mdiBasketballHoopOutline" | "mdiBat" | "mdiBathtub" | "mdiBathtubOutline" | "mdiBattery" | "mdiBattery10" | "mdiBattery10Bluetooth" | "mdiBattery20" | "mdiBattery20Bluetooth" | "mdiBattery30" | "mdiBattery30Bluetooth" | "mdiBattery40" | "mdiBattery40Bluetooth" | "mdiBattery50" | "mdiBattery50Bluetooth" | "mdiBattery60" | "mdiBattery60Bluetooth" | "mdiBattery70" | "mdiBattery70Bluetooth" | "mdiBattery80" | "mdiBattery80Bluetooth" | "mdiBattery90" | "mdiBattery90Bluetooth" | "mdiBatteryAlert" | "mdiBatteryAlertBluetooth" | "mdiBatteryAlertVariant" | "mdiBatteryAlertVariantOutline" | "mdiBatteryArrowDown" | "mdiBatteryArrowDownOutline" | "mdiBatteryArrowUp" | "mdiBatteryArrowUpOutline" | "mdiBatteryBluetooth" | "mdiBatteryBluetoothVariant" | "mdiBatteryCharging" | "mdiBatteryCharging10" | "mdiBatteryCharging100" | "mdiBatteryCharging20" | "mdiBatteryCharging30" | "mdiBatteryCharging40" | "mdiBatteryCharging50" | "mdiBatteryCharging60" | "mdiBatteryCharging70" | "mdiBatteryCharging80" | "mdiBatteryCharging90" | "mdiBatteryChargingHigh" | "mdiBatteryChargingLow" | "mdiBatteryChargingMedium" | "mdiBatteryChargingOutline" | "mdiBatteryChargingWireless" | "mdiBatteryChargingWireless10" | "mdiBatteryChargingWireless20" | "mdiBatteryChargingWireless30" | "mdiBatteryChargingWireless40" | "mdiBatteryChargingWireless50" | "mdiBatteryChargingWireless60" | "mdiBatteryChargingWireless70" | "mdiBatteryChargingWireless80" | "mdiBatteryChargingWireless90" | "mdiBatteryChargingWirelessAlert" | "mdiBatteryChargingWirelessOutline" | "mdiBatteryCheck" | "mdiBatteryCheckOutline" | "mdiBatteryClock" | "mdiBatteryClockOutline" | "mdiBatteryHeart" | "mdiBatteryHeartOutline" | "mdiBatteryHeartVariant" | "mdiBatteryHigh" | "mdiBatteryLock" | "mdiBatteryLockOpen" | "mdiBatteryLow" | "mdiBatteryMedium" | "mdiBatteryMinus" | "mdiBatteryMinusOutline" | "mdiBatteryMinusVariant" | "mdiBatteryNegative" | "mdiBatteryOff" | "mdiBatteryOffOutline" | "mdiBatteryOutline" | "mdiBatteryPlus" | "mdiBatteryPlusOutline" | "mdiBatteryPlusVariant" | "mdiBatteryPositive" | "mdiBatteryRemove" | "mdiBatteryRemoveOutline" | "mdiBatterySync" | "mdiBatterySyncOutline" | "mdiBatteryUnknown" | "mdiBatteryUnknownBluetooth" | "mdiBeach" | "mdiBeaker" | "mdiBeakerAlert" | "mdiBeakerAlertOutline" | "mdiBeakerCheck" | "mdiBeakerCheckOutline" | "mdiBeakerMinus" | "mdiBeakerMinusOutline" | "mdiBeakerOutline" | "mdiBeakerPlus" | "mdiBeakerPlusOutline" | "mdiBeakerQuestion" | "mdiBeakerQuestionOutline" | "mdiBeakerRemove" | "mdiBeakerRemoveOutline" | "mdiBed" | "mdiBedClock" | "mdiBedDouble" | "mdiBedDoubleOutline" | "mdiBedEmpty" | "mdiBedKing" | "mdiBedKingOutline" | "mdiBedOutline" | "mdiBedQueen" | "mdiBedQueenOutline" | "mdiBedSingle" | "mdiBedSingleOutline" | "mdiBee" | "mdiBeeFlower" | "mdiBeehiveOffOutline" | "mdiBeehiveOutline" | "mdiBeekeeper" | "mdiBeer" | "mdiBeerOutline" | "mdiBell" | "mdiBellAlert" | "mdiBellAlertOutline" | "mdiBellBadge" | "mdiBellBadgeOutline" | "mdiBellCancel" | "mdiBellCancelOutline" | "mdiBellCheck" | "mdiBellCheckOutline" | "mdiBellCircle" | "mdiBellCircleOutline" | "mdiBellCog" | "mdiBellCogOutline" | "mdiBellMinus" | "mdiBellMinusOutline" | "mdiBellOff" | "mdiBellOffOutline" | "mdiBellOutline" | "mdiBellPlus" | "mdiBellPlusOutline" | "mdiBellRemove" | "mdiBellRemoveOutline" | "mdiBellRing" | "mdiBellRingOutline" | "mdiBellSleep" | "mdiBellSleepOutline" | "mdiBench" | "mdiBenchBack" | "mdiBeta" | "mdiBetamax" | "mdiBiathlon" | "mdiBicycle" | "mdiBicycleBasket" | "mdiBicycleCargo" | "mdiBicycleElectric" | "mdiBicyclePennyFarthing" | "mdiBike" | "mdiBikeFast" | "mdiBikePedal" | "mdiBikePedalClipless" | "mdiBikePedalMountain" | "mdiBillboard" | "mdiBilliards" | "mdiBilliardsRack" | "mdiBinoculars" | "mdiBio" | "mdiBiohazard" | "mdiBird" | "mdiBitbucket" | "mdiBitcoin" | "mdiBlackMesa" | "mdiBlender" | "mdiBlenderOutline" | "mdiBlenderSoftware" | "mdiBlinds" | "mdiBlindsHorizontal" | "mdiBlindsHorizontalClosed" | "mdiBlindsOpen" | "mdiBlindsVertical" | "mdiBlindsVerticalClosed" | "mdiBlockHelper" | "mdiBloodBag" | "mdiBluetooth" | "mdiBluetoothAudio" | "mdiBluetoothConnect" | "mdiBluetoothOff" | "mdiBluetoothSettings" | "mdiBluetoothTransfer" | "mdiBlur" | "mdiBlurLinear" | "mdiBlurOff" | "mdiBlurRadial" | "mdiBolt" | "mdiBomb" | "mdiBombOff" | "mdiBone" | "mdiBoneOff" | "mdiBook" | "mdiBookAccount" | "mdiBookAccountOutline" | "mdiBookAlert" | "mdiBookAlertOutline" | "mdiBookAlphabet" | "mdiBookArrowDown" | "mdiBookArrowDownOutline" | "mdiBookArrowLeft" | "mdiBookArrowLeftOutline" | "mdiBookArrowRight" | "mdiBookArrowRightOutline" | "mdiBookArrowUp" | "mdiBookArrowUpOutline" | "mdiBookCancel" | "mdiBookCancelOutline" | "mdiBookCheck" | "mdiBookCheckOutline" | "mdiBookClock" | "mdiBookClockOutline" | "mdiBookCog" | "mdiBookCogOutline" | "mdiBookCross" | "mdiBookEdit" | "mdiBookEditOutline" | "mdiBookEducation" | "mdiBookEducationOutline" | "mdiBookHeart" | "mdiBookHeartOutline" | "mdiBookInformationVariant" | "mdiBookLock" | "mdiBookLockOpen" | "mdiBookLockOpenOutline" | "mdiBookLockOutline" | "mdiBookMarker" | "mdiBookMarkerOutline" | "mdiBookMinus" | "mdiBookMinusMultiple" | "mdiBookMinusMultipleOutline" | "mdiBookMinusOutline" | "mdiBookMultiple" | "mdiBookMultipleOutline" | "mdiBookMusic" | "mdiBookMusicOutline" | "mdiBookOff" | "mdiBookOffOutline" | "mdiBookOpen" | "mdiBookOpenBlankVariant" | "mdiBookOpenBlankVariantOutline" | "mdiBookOpenOutline" | "mdiBookOpenPageVariant" | "mdiBookOpenPageVariantOutline" | "mdiBookOpenVariant" | "mdiBookOpenVariantOutline" | "mdiBookOutline" | "mdiBookPlay" | "mdiBookPlayOutline" | "mdiBookPlus" | "mdiBookPlusMultiple" | "mdiBookPlusMultipleOutline" | "mdiBookPlusOutline" | "mdiBookRefresh" | "mdiBookRefreshOutline" | "mdiBookRemove" | "mdiBookRemoveMultiple" | "mdiBookRemoveMultipleOutline" | "mdiBookRemoveOutline" | "mdiBookSearch" | "mdiBookSearchOutline" | "mdiBookSettings" | "mdiBookSettingsOutline" | "mdiBookSync" | "mdiBookSyncOutline" | "mdiBookVariant" | "mdiBookmark" | "mdiBookmarkBox" | "mdiBookmarkBoxMultiple" | "mdiBookmarkBoxMultipleOutline" | "mdiBookmarkBoxOutline" | "mdiBookmarkCheck" | "mdiBookmarkCheckOutline" | "mdiBookmarkMinus" | "mdiBookmarkMinusOutline" | "mdiBookmarkMultiple" | "mdiBookmarkMultipleOutline" | "mdiBookmarkMusic" | "mdiBookmarkMusicOutline" | "mdiBookmarkOff" | "mdiBookmarkOffOutline" | "mdiBookmarkOutline" | "mdiBookmarkPlus" | "mdiBookmarkPlusOutline" | "mdiBookmarkRemove" | "mdiBookmarkRemoveOutline" | "mdiBookshelf" | "mdiBoomGate" | "mdiBoomGateAlert" | "mdiBoomGateAlertOutline" | "mdiBoomGateArrowDown" | "mdiBoomGateArrowDownOutline" | "mdiBoomGateArrowUp" | "mdiBoomGateArrowUpOutline" | "mdiBoomGateOutline" | "mdiBoomGateUp" | "mdiBoomGateUpOutline" | "mdiBoombox" | "mdiBoomerang" | "mdiBootstrap" | "mdiBorderAll" | "mdiBorderAllVariant" | "mdiBorderBottom" | "mdiBorderBottomVariant" | "mdiBorderColor" | "mdiBorderHorizontal" | "mdiBorderInside" | "mdiBorderLeft" | "mdiBorderLeftVariant" | "mdiBorderNone" | "mdiBorderNoneVariant" | "mdiBorderOutside" | "mdiBorderRadius" | "mdiBorderRight" | "mdiBorderRightVariant" | "mdiBorderStyle" | "mdiBorderTop" | "mdiBorderTopVariant" | "mdiBorderVertical" | "mdiBottleSoda" | "mdiBottleSodaClassic" | "mdiBottleSodaClassicOutline" | "mdiBottleSodaOutline" | "mdiBottleTonic" | "mdiBottleTonicOutline" | "mdiBottleTonicPlus" | "mdiBottleTonicPlusOutline" | "mdiBottleTonicSkull" | "mdiBottleTonicSkullOutline" | "mdiBottleWine" | "mdiBottleWineOutline" | "mdiBowArrow" | "mdiBowTie" | "mdiBowl" | "mdiBowlMix" | "mdiBowlMixOutline" | "mdiBowlOutline" | "mdiBowling" | "mdiBox" | "mdiBoxCutter" | "mdiBoxCutterOff" | "mdiBoxShadow" | "mdiBoxingGlove" | "mdiBraille" | "mdiBrain" | "mdiBreadSlice" | "mdiBreadSliceOutline" | "mdiBridge" | "mdiBriefcase" | "mdiBriefcaseAccount" | "mdiBriefcaseAccountOutline" | "mdiBriefcaseArrowLeftRight" | "mdiBriefcaseArrowLeftRightOutline" | "mdiBriefcaseArrowUpDown" | "mdiBriefcaseArrowUpDownOutline" | "mdiBriefcaseCheck" | "mdiBriefcaseCheckOutline" | "mdiBriefcaseClock" | "mdiBriefcaseClockOutline" | "mdiBriefcaseDownload" | "mdiBriefcaseDownloadOutline" | "mdiBriefcaseEdit" | "mdiBriefcaseEditOutline" | "mdiBriefcaseEye" | "mdiBriefcaseEyeOutline" | "mdiBriefcaseMinus" | "mdiBriefcaseMinusOutline" | "mdiBriefcaseOff" | "mdiBriefcaseOffOutline" | "mdiBriefcaseOutline" | "mdiBriefcasePlus" | "mdiBriefcasePlusOutline" | "mdiBriefcaseRemove" | "mdiBriefcaseRemoveOutline" | "mdiBriefcaseSearch" | "mdiBriefcaseSearchOutline" | "mdiBriefcaseUpload" | "mdiBriefcaseUploadOutline" | "mdiBriefcaseVariant" | "mdiBriefcaseVariantOff" | "mdiBriefcaseVariantOffOutline" | "mdiBriefcaseVariantOutline" | "mdiBrightness1" | "mdiBrightness2" | "mdiBrightness3" | "mdiBrightness4" | "mdiBrightness5" | "mdiBrightness6" | "mdiBrightness7" | "mdiBrightnessAuto" | "mdiBrightnessPercent" | "mdiBroadcast" | "mdiBroadcastOff" | "mdiBroom" | "mdiBrush" | "mdiBrushOff" | "mdiBrushOutline" | "mdiBrushVariant" | "mdiBucket" | "mdiBucketOutline" | "mdiBuffet" | "mdiBug" | "mdiBugCheck" | "mdiBugCheckOutline" | "mdiBugOutline" | "mdiBugPause" | "mdiBugPauseOutline" | "mdiBugPlay" | "mdiBugPlayOutline" | "mdiBugStop" | "mdiBugStopOutline" | "mdiBugle" | "mdiBulkheadLight" | "mdiBulldozer" | "mdiBullet" | "mdiBulletinBoard" | "mdiBullhorn" | "mdiBullhornOutline" | "mdiBullhornVariant" | "mdiBullhornVariantOutline" | "mdiBullseye" | "mdiBullseyeArrow" | "mdiBulma" | "mdiBunkBed" | "mdiBunkBedOutline" | "mdiBus" | "mdiBusAlert" | "mdiBusArticulatedEnd" | "mdiBusArticulatedFront" | "mdiBusClock" | "mdiBusDoubleDecker" | "mdiBusElectric" | "mdiBusMarker" | "mdiBusMultiple" | "mdiBusSchool" | "mdiBusSide" | "mdiBusSign" | "mdiBusStop" | "mdiBusStopCovered" | "mdiBusStopUncovered" | "mdiBusWrench" | "mdiButterfly" | "mdiButterflyOutline" | "mdiButtonCursor" | "mdiButtonPointer" | "mdiCabinAFrame" | "mdiCableData" | "mdiCached" | "mdiCactus" | "mdiCake" | "mdiCakeLayered" | "mdiCakeVariant" | "mdiCakeVariantOutline" | "mdiCalculator" | "mdiCalculatorVariant" | "mdiCalculatorVariantOutline" | "mdiCalendar" | "mdiCalendarAccount" | "mdiCalendarAccountOutline" | "mdiCalendarAlert" | "mdiCalendarAlertOutline" | "mdiCalendarArrowLeft" | "mdiCalendarArrowRight" | "mdiCalendarBadge" | "mdiCalendarBadgeOutline" | "mdiCalendarBlank" | "mdiCalendarBlankMultiple" | "mdiCalendarBlankOutline" | "mdiCalendarCheck" | "mdiCalendarCheckOutline" | "mdiCalendarClock" | "mdiCalendarClockOutline" | "mdiCalendarCollapseHorizontal" | "mdiCalendarCollapseHorizontalOutline" | "mdiCalendarCursor" | "mdiCalendarCursorOutline" | "mdiCalendarEdit" | "mdiCalendarEditOutline" | "mdiCalendarEnd" | "mdiCalendarEndOutline" | "mdiCalendarExpandHorizontal" | "mdiCalendarExpandHorizontalOutline" | "mdiCalendarExport" | "mdiCalendarExportOutline" | "mdiCalendarFilter" | "mdiCalendarFilterOutline" | "mdiCalendarHeart" | "mdiCalendarHeartOutline" | "mdiCalendarImport" | "mdiCalendarImportOutline" | "mdiCalendarLock" | "mdiCalendarLockOpen" | "mdiCalendarLockOpenOutline" | "mdiCalendarLockOutline" | "mdiCalendarMinus" | "mdiCalendarMinusOutline" | "mdiCalendarMonth" | "mdiCalendarMonthOutline" | "mdiCalendarMultiple" | "mdiCalendarMultipleCheck" | "mdiCalendarMultiselect" | "mdiCalendarMultiselectOutline" | "mdiCalendarOutline" | "mdiCalendarPlus" | "mdiCalendarPlusOutline" | "mdiCalendarQuestion" | "mdiCalendarQuestionOutline" | "mdiCalendarRange" | "mdiCalendarRangeOutline" | "mdiCalendarRefresh" | "mdiCalendarRefreshOutline" | "mdiCalendarRemove" | "mdiCalendarRemoveOutline" | "mdiCalendarSearch" | "mdiCalendarSearchOutline" | "mdiCalendarStar" | "mdiCalendarStarFourPoints" | "mdiCalendarStarOutline" | "mdiCalendarStart" | "mdiCalendarStartOutline" | "mdiCalendarSync" | "mdiCalendarSyncOutline" | "mdiCalendarText" | "mdiCalendarTextOutline" | "mdiCalendarToday" | "mdiCalendarTodayOutline" | "mdiCalendarWeek" | "mdiCalendarWeekBegin" | "mdiCalendarWeekBeginOutline" | "mdiCalendarWeekOutline" | "mdiCalendarWeekend" | "mdiCalendarWeekendOutline" | "mdiCallMade" | "mdiCallMerge" | "mdiCallMissed" | "mdiCallReceived" | "mdiCallSplit" | "mdiCamcorder" | "mdiCamcorderOff" | "mdiCamera" | "mdiCameraAccount" | "mdiCameraBurst" | "mdiCameraControl" | "mdiCameraDocument" | "mdiCameraDocumentOff" | "mdiCameraEnhance" | "mdiCameraEnhanceOutline" | "mdiCameraFlip" | "mdiCameraFlipOutline" | "mdiCameraFront" | "mdiCameraFrontVariant" | "mdiCameraGopro" | "mdiCameraImage" | "mdiCameraIris" | "mdiCameraLock" | "mdiCameraLockOpen" | "mdiCameraLockOpenOutline" | "mdiCameraLockOutline" | "mdiCameraMarker" | "mdiCameraMarkerOutline" | "mdiCameraMeteringCenter" | "mdiCameraMeteringMatrix" | "mdiCameraMeteringPartial" | "mdiCameraMeteringSpot" | "mdiCameraOff" | "mdiCameraOffOutline" | "mdiCameraOutline" | "mdiCameraPartyMode" | "mdiCameraPlus" | "mdiCameraPlusOutline" | "mdiCameraRear" | "mdiCameraRearVariant" | "mdiCameraRetake" | "mdiCameraRetakeOutline" | "mdiCameraSwitch" | "mdiCameraSwitchOutline" | "mdiCameraTimer" | "mdiCameraWireless" | "mdiCameraWirelessOutline" | "mdiCampfire" | "mdiCancel" | "mdiCandelabra" | "mdiCandelabraFire" | "mdiCandle" | "mdiCandy" | "mdiCandyOff" | "mdiCandyOffOutline" | "mdiCandyOutline" | "mdiCandycane" | "mdiCannabis" | "mdiCannabisOff" | "mdiCapsLock" | "mdiCar" | "mdiCar2Plus" | "mdiCar3Plus" | "mdiCarArrowLeft" | "mdiCarArrowRight" | "mdiCarBack" | "mdiCarBattery" | "mdiCarBrakeAbs" | "mdiCarBrakeAlert" | "mdiCarBrakeFluidLevel" | "mdiCarBrakeHold" | "mdiCarBrakeLowPressure" | "mdiCarBrakeParking" | "mdiCarBrakeRetarder" | "mdiCarBrakeTemperature" | "mdiCarBrakeWornLinings" | "mdiCarChildSeat" | "mdiCarClock" | "mdiCarClutch" | "mdiCarCog" | "mdiCarConnected" | "mdiCarConvertible" | "mdiCarCoolantLevel" | "mdiCarCruiseControl" | "mdiCarDefrostFront" | "mdiCarDefrostRear" | "mdiCarDoor" | "mdiCarDoorLock" | "mdiCarDoorLockOpen" | "mdiCarElectric" | "mdiCarElectricOutline" | "mdiCarEmergency" | "mdiCarEsp" | "mdiCarEstate" | "mdiCarHatchback" | "mdiCarInfo" | "mdiCarKey" | "mdiCarLiftedPickup" | "mdiCarLightAlert" | "mdiCarLightDimmed" | "mdiCarLightFog" | "mdiCarLightHigh" | "mdiCarLimousine" | "mdiCarMultiple" | "mdiCarOff" | "mdiCarOutline" | "mdiCarParkingLights" | "mdiCarPickup" | "mdiCarSearch" | "mdiCarSearchOutline" | "mdiCarSeat" | "mdiCarSeatCooler" | "mdiCarSeatHeater" | "mdiCarSelect" | "mdiCarSettings" | "mdiCarShiftPattern" | "mdiCarSide" | "mdiCarSpeedLimiter" | "mdiCarSports" | "mdiCarTireAlert" | "mdiCarTractionControl" | "mdiCarTurbocharger" | "mdiCarWash" | "mdiCarWindshield" | "mdiCarWindshieldOutline" | "mdiCarWireless" | "mdiCarWrench" | "mdiCarabiner" | "mdiCaravan" | "mdiCard" | "mdiCardAccountDetails" | "mdiCardAccountDetailsOutline" | "mdiCardAccountDetailsStar" | "mdiCardAccountDetailsStarOutline" | "mdiCardAccountMail" | "mdiCardAccountMailOutline" | "mdiCardAccountPhone" | "mdiCardAccountPhoneOutline" | "mdiCardBulleted" | "mdiCardBulletedOff" | "mdiCardBulletedOffOutline" | "mdiCardBulletedOutline" | "mdiCardBulletedSettings" | "mdiCardBulletedSettingsOutline" | "mdiCardMinus" | "mdiCardMinusOutline" | "mdiCardMultiple" | "mdiCardMultipleOutline" | "mdiCardOff" | "mdiCardOffOutline" | "mdiCardOutline" | "mdiCardPlus" | "mdiCardPlusOutline" | "mdiCardRemove" | "mdiCardRemoveOutline" | "mdiCardSearch" | "mdiCardSearchOutline" | "mdiCardText" | "mdiCardTextOutline" | "mdiCards" | "mdiCardsClub" | "mdiCardsClubOutline" | "mdiCardsDiamond" | "mdiCardsDiamondOutline" | "mdiCardsHeart" | "mdiCardsHeartOutline" | "mdiCardsOutline" | "mdiCardsPlaying" | "mdiCardsPlayingClub" | "mdiCardsPlayingClubMultiple" | "mdiCardsPlayingClubMultipleOutline" | "mdiCardsPlayingClubOutline" | "mdiCardsPlayingDiamond" | "mdiCardsPlayingDiamondMultiple" | "mdiCardsPlayingDiamondMultipleOutline" | "mdiCardsPlayingDiamondOutline" | "mdiCardsPlayingHeart" | "mdiCardsPlayingHeartMultiple" | "mdiCardsPlayingHeartMultipleOutline" | "mdiCardsPlayingHeartOutline" | "mdiCardsPlayingOutline" | "mdiCardsPlayingSpade" | "mdiCardsPlayingSpadeMultiple" | "mdiCardsPlayingSpadeMultipleOutline" | "mdiCardsPlayingSpadeOutline" | "mdiCardsSpade" | "mdiCardsSpadeOutline" | "mdiCardsVariant" | "mdiCarrot" | "mdiCart" | "mdiCartArrowDown" | "mdiCartArrowRight" | "mdiCartArrowUp" | "mdiCartCheck" | "mdiCartHeart" | "mdiCartMinus" | "mdiCartOff" | "mdiCartOutline" | "mdiCartPercent" | "mdiCartPlus" | "mdiCartRemove" | "mdiCartVariant" | "mdiCaseSensitiveAlt" | "mdiCash" | "mdiCash100" | "mdiCashCheck" | "mdiCashClock" | "mdiCashEdit" | "mdiCashFast" | "mdiCashLock" | "mdiCashLockOpen" | "mdiCashMarker" | "mdiCashMinus" | "mdiCashMultiple" | "mdiCashOff" | "mdiCashPlus" | "mdiCashRefund" | "mdiCashRegister" | "mdiCashRemove" | "mdiCashSync" | "mdiCassette" | "mdiCast" | "mdiCastAudio" | "mdiCastAudioVariant" | "mdiCastConnected" | "mdiCastEducation" | "mdiCastOff" | "mdiCastVariant" | "mdiCastle" | "mdiCat" | "mdiCctv" | "mdiCctvOff" | "mdiCeilingFan" | "mdiCeilingFanLight" | "mdiCeilingLight" | "mdiCeilingLightMultiple" | "mdiCeilingLightMultipleOutline" | "mdiCeilingLightOutline" | "mdiCellphone" | "mdiCellphoneArrowDown" | "mdiCellphoneArrowDownVariant" | "mdiCellphoneBasic" | "mdiCellphoneCharging" | "mdiCellphoneCheck" | "mdiCellphoneCog" | "mdiCellphoneDock" | "mdiCellphoneInformation" | "mdiCellphoneKey" | "mdiCellphoneLink" | "mdiCellphoneLinkOff" | "mdiCellphoneLock" | "mdiCellphoneMarker" | "mdiCellphoneMessage" | "mdiCellphoneMessageOff" | "mdiCellphoneNfc" | "mdiCellphoneNfcOff" | "mdiCellphoneOff" | "mdiCellphonePlay" | "mdiCellphoneRemove" | "mdiCellphoneScreenshot" | "mdiCellphoneSettings" | "mdiCellphoneSound" | "mdiCellphoneText" | "mdiCellphoneWireless" | "mdiCentos" | "mdiCertificate" | "mdiCertificateOutline" | "mdiChairRolling" | "mdiChairSchool" | "mdiChandelier" | "mdiCharity" | "mdiCharitySearch" | "mdiChartArc" | "mdiChartAreaspline" | "mdiChartAreasplineVariant" | "mdiChartBar" | "mdiChartBarStacked" | "mdiChartBellCurve" | "mdiChartBellCurveCumulative" | "mdiChartBox" | "mdiChartBoxMultiple" | "mdiChartBoxMultipleOutline" | "mdiChartBoxOutline" | "mdiChartBoxPlusOutline" | "mdiChartBubble" | "mdiChartDonut" | "mdiChartDonutVariant" | "mdiChartGantt" | "mdiChartHistogram" | "mdiChartLine" | "mdiChartLineStacked" | "mdiChartLineVariant" | "mdiChartMultiline" | "mdiChartMultiple" | "mdiChartPie" | "mdiChartPieOutline" | "mdiChartPpf" | "mdiChartSankey" | "mdiChartSankeyVariant" | "mdiChartScatterPlot" | "mdiChartScatterPlotHexbin" | "mdiChartTimeline" | "mdiChartTimelineVariant" | "mdiChartTimelineVariantShimmer" | "mdiChartTree" | "mdiChartWaterfall" | "mdiChat" | "mdiChatAlert" | "mdiChatAlertOutline" | "mdiChatMinus" | "mdiChatMinusOutline" | "mdiChatOutline" | "mdiChatPlus" | "mdiChatPlusOutline" | "mdiChatProcessing" | "mdiChatProcessingOutline" | "mdiChatQuestion" | "mdiChatQuestionOutline" | "mdiChatRemove" | "mdiChatRemoveOutline" | "mdiChatSleep" | "mdiChatSleepOutline" | "mdiCheck" | "mdiCheckAll" | "mdiCheckBold" | "mdiCheckCircle" | "mdiCheckCircleOutline" | "mdiCheckDecagram" | "mdiCheckDecagramOutline" | "mdiCheckNetwork" | "mdiCheckNetworkOutline" | "mdiCheckOutline" | "mdiCheckUnderline" | "mdiCheckUnderlineCircle" | "mdiCheckUnderlineCircleOutline" | "mdiCheckbook" | "mdiCheckbookArrowLeft" | "mdiCheckbookArrowRight" | "mdiCheckboxBlank" | "mdiCheckboxBlankBadge" | "mdiCheckboxBlankBadgeOutline" | "mdiCheckboxBlankCircle" | "mdiCheckboxBlankCircleOutline" | "mdiCheckboxBlankOff" | "mdiCheckboxBlankOffOutline" | "mdiCheckboxBlankOutline" | "mdiCheckboxIntermediate" | "mdiCheckboxIntermediateVariant" | "mdiCheckboxMarked" | "mdiCheckboxMarkedCircle" | "mdiCheckboxMarkedCircleAutoOutline" | "mdiCheckboxMarkedCircleMinusOutline" | "mdiCheckboxMarkedCircleOutline" | "mdiCheckboxMarkedCirclePlusOutline" | "mdiCheckboxMarkedOutline" | "mdiCheckboxMultipleBlank" | "mdiCheckboxMultipleBlankCircle" | "mdiCheckboxMultipleBlankCircleOutline" | "mdiCheckboxMultipleBlankOutline" | "mdiCheckboxMultipleMarked" | "mdiCheckboxMultipleMarkedCircle" | "mdiCheckboxMultipleMarkedCircleOutline" | "mdiCheckboxMultipleMarkedOutline" | "mdiCheckboxMultipleOutline" | "mdiCheckboxOutline" | "mdiCheckerboard" | "mdiCheckerboardMinus" | "mdiCheckerboardPlus" | "mdiCheckerboardRemove" | "mdiCheese" | "mdiCheeseOff" | "mdiChefHat" | "mdiChemicalWeapon" | "mdiChessBishop" | "mdiChessKing" | "mdiChessKnight" | "mdiChessPawn" | "mdiChessQueen" | "mdiChessRook" | "mdiChevronDoubleDown" | "mdiChevronDoubleLeft" | "mdiChevronDoubleRight" | "mdiChevronDoubleUp" | "mdiChevronDown" | "mdiChevronDownBox" | "mdiChevronDownBoxOutline" | "mdiChevronDownCircle" | "mdiChevronDownCircleOutline" | "mdiChevronLeft" | "mdiChevronLeftBox" | "mdiChevronLeftBoxOutline" | "mdiChevronLeftCircle" | "mdiChevronLeftCircleOutline" | "mdiChevronRight" | "mdiChevronRightBox" | "mdiChevronRightBoxOutline" | "mdiChevronRightCircle" | "mdiChevronRightCircleOutline" | "mdiChevronTripleDown" | "mdiChevronTripleLeft" | "mdiChevronTripleRight" | "mdiChevronTripleUp" | "mdiChevronUp" | "mdiChevronUpBox" | "mdiChevronUpBoxOutline" | "mdiChevronUpCircle" | "mdiChevronUpCircleOutline" | "mdiChiliAlert" | "mdiChiliAlertOutline" | "mdiChiliHot" | "mdiChiliHotOutline" | "mdiChiliMedium" | "mdiChiliMediumOutline" | "mdiChiliMild" | "mdiChiliMildOutline" | "mdiChiliOff" | "mdiChiliOffOutline" | "mdiChip" | "mdiChurch" | "mdiChurchOutline" | "mdiCigar" | "mdiCigarOff" | "mdiCircle" | "mdiCircleBox" | "mdiCircleBoxOutline" | "mdiCircleDouble" | "mdiCircleEditOutline" | "mdiCircleExpand" | "mdiCircleHalf" | "mdiCircleHalfFull" | "mdiCircleMedium" | "mdiCircleMultiple" | "mdiCircleMultipleOutline" | "mdiCircleOffOutline" | "mdiCircleOpacity" | "mdiCircleOutline" | "mdiCircleSlice1" | "mdiCircleSlice2" | "mdiCircleSlice3" | "mdiCircleSlice4" | "mdiCircleSlice5" | "mdiCircleSlice6" | "mdiCircleSlice7" | "mdiCircleSlice8" | "mdiCircleSmall" | "mdiCircularSaw" | "mdiCity" | "mdiCitySwitch" | "mdiCityVariant" | "mdiCityVariantOutline" | "mdiClipboard" | "mdiClipboardAccount" | "mdiClipboardAccountOutline" | "mdiClipboardAlert" | "mdiClipboardAlertOutline" | "mdiClipboardArrowDown" | "mdiClipboardArrowDownOutline" | "mdiClipboardArrowLeft" | "mdiClipboardArrowLeftOutline" | "mdiClipboardArrowRight" | "mdiClipboardArrowRightOutline" | "mdiClipboardArrowUp" | "mdiClipboardArrowUpOutline" | "mdiClipboardCheck" | "mdiClipboardCheckMultiple" | "mdiClipboardCheckMultipleOutline" | "mdiClipboardCheckOutline" | "mdiClipboardClock" | "mdiClipboardClockOutline" | "mdiClipboardEdit" | "mdiClipboardEditOutline" | "mdiClipboardFile" | "mdiClipboardFileOutline" | "mdiClipboardFlow" | "mdiClipboardFlowOutline" | "mdiClipboardList" | "mdiClipboardListOutline" | "mdiClipboardMinus" | "mdiClipboardMinusOutline" | "mdiClipboardMultiple" | "mdiClipboardMultipleOutline" | "mdiClipboardOff" | "mdiClipboardOffOutline" | "mdiClipboardOutline" | "mdiClipboardPlay" | "mdiClipboardPlayMultiple" | "mdiClipboardPlayMultipleOutline" | "mdiClipboardPlayOutline" | "mdiClipboardPlus" | "mdiClipboardPlusOutline" | "mdiClipboardPulse" | "mdiClipboardPulseOutline" | "mdiClipboardRemove" | "mdiClipboardRemoveOutline" | "mdiClipboardSearch" | "mdiClipboardSearchOutline" | "mdiClipboardText" | "mdiClipboardTextClock" | "mdiClipboardTextClockOutline" | "mdiClipboardTextMultiple" | "mdiClipboardTextMultipleOutline" | "mdiClipboardTextOff" | "mdiClipboardTextOffOutline" | "mdiClipboardTextOutline" | "mdiClipboardTextPlay" | "mdiClipboardTextPlayOutline" | "mdiClipboardTextSearch" | "mdiClipboardTextSearchOutline" | "mdiClippy" | "mdiClock" | "mdiClockAlert" | "mdiClockAlertOutline" | "mdiClockCheck" | "mdiClockCheckOutline" | "mdiClockDigital" | "mdiClockEdit" | "mdiClockEditOutline" | "mdiClockEnd" | "mdiClockFast" | "mdiClockIn" | "mdiClockMinus" | "mdiClockMinusOutline" | "mdiClockOut" | "mdiClockOutline" | "mdiClockPlus" | "mdiClockPlusOutline" | "mdiClockRemove" | "mdiClockRemoveOutline" | "mdiClockStarFourPoints" | "mdiClockStarFourPointsOutline" | "mdiClockStart" | "mdiClockTimeEight" | "mdiClockTimeEightOutline" | "mdiClockTimeEleven" | "mdiClockTimeElevenOutline" | "mdiClockTimeFive" | "mdiClockTimeFiveOutline" | "mdiClockTimeFour" | "mdiClockTimeFourOutline" | "mdiClockTimeNine" | "mdiClockTimeNineOutline" | "mdiClockTimeOne" | "mdiClockTimeOneOutline" | "mdiClockTimeSeven" | "mdiClockTimeSevenOutline" | "mdiClockTimeSix" | "mdiClockTimeSixOutline" | "mdiClockTimeTen" | "mdiClockTimeTenOutline" | "mdiClockTimeThree" | "mdiClockTimeThreeOutline" | "mdiClockTimeTwelve" | "mdiClockTimeTwelveOutline" | "mdiClockTimeTwo" | "mdiClockTimeTwoOutline" | "mdiClose" | "mdiCloseBox" | "mdiCloseBoxMultiple" | "mdiCloseBoxMultipleOutline" | "mdiCloseBoxOutline" | "mdiCloseCircle" | "mdiCloseCircleMultiple" | "mdiCloseCircleMultipleOutline" | "mdiCloseCircleOutline" | "mdiCloseNetwork" | "mdiCloseNetworkOutline" | "mdiCloseOctagon" | "mdiCloseOctagonOutline" | "mdiCloseOutline" | "mdiCloseThick" | "mdiClosedCaption" | "mdiClosedCaptionOutline" | "mdiCloud" | "mdiCloudAlert" | "mdiCloudAlertOutline" | "mdiCloudArrowDown" | "mdiCloudArrowDownOutline" | "mdiCloudArrowLeft" | "mdiCloudArrowLeftOutline" | "mdiCloudArrowRight" | "mdiCloudArrowRightOutline" | "mdiCloudArrowUp" | "mdiCloudArrowUpOutline" | "mdiCloudBraces" | "mdiCloudCancel" | "mdiCloudCancelOutline" | "mdiCloudCheck" | "mdiCloudCheckOutline" | "mdiCloudCheckVariant" | "mdiCloudCheckVariantOutline" | "mdiCloudCircle" | "mdiCloudCircleOutline" | "mdiCloudClock" | "mdiCloudClockOutline" | "mdiCloudCog" | "mdiCloudCogOutline" | "mdiCloudDownload" | "mdiCloudDownloadOutline" | "mdiCloudKey" | "mdiCloudKeyOutline" | "mdiCloudLock" | "mdiCloudLockOpen" | "mdiCloudLockOpenOutline" | "mdiCloudLockOutline" | "mdiCloudMinus" | "mdiCloudMinusOutline" | "mdiCloudOff" | "mdiCloudOffOutline" | "mdiCloudOutline" | "mdiCloudPercent" | "mdiCloudPercentOutline" | "mdiCloudPlus" | "mdiCloudPlusOutline" | "mdiCloudPrint" | "mdiCloudPrintOutline" | "mdiCloudQuestion" | "mdiCloudQuestionOutline" | "mdiCloudRefresh" | "mdiCloudRefreshOutline" | "mdiCloudRefreshVariant" | "mdiCloudRefreshVariantOutline" | "mdiCloudRemove" | "mdiCloudRemoveOutline" | "mdiCloudSearch" | "mdiCloudSearchOutline" | "mdiCloudSync" | "mdiCloudSyncOutline" | "mdiCloudTags" | "mdiCloudUpload" | "mdiCloudUploadOutline" | "mdiClouds" | "mdiClover" | "mdiCloverOutline" | "mdiCoachLamp" | "mdiCoachLampVariant" | "mdiCoatRack" | "mdiCodeArray" | "mdiCodeBlockBraces" | "mdiCodeBlockBrackets" | "mdiCodeBlockParentheses" | "mdiCodeBlockTags" | "mdiCodeBraces" | "mdiCodeBracesBox" | "mdiCodeBrackets" | "mdiCodeEqual" | "mdiCodeGreaterThan" | "mdiCodeGreaterThanOrEqual" | "mdiCodeJson" | "mdiCodeLessThan" | "mdiCodeLessThanOrEqual" | "mdiCodeNotEqual" | "mdiCodeNotEqualVariant" | "mdiCodeParentheses" | "mdiCodeParenthesesBox" | "mdiCodeString" | "mdiCodeTags" | "mdiCodeTagsCheck" | "mdiCodepen" | "mdiCoffee" | "mdiCoffeeMaker" | "mdiCoffeeMakerCheck" | "mdiCoffeeMakerCheckOutline" | "mdiCoffeeMakerOutline" | "mdiCoffeeOff" | "mdiCoffeeOffOutline" | "mdiCoffeeOutline" | "mdiCoffeeToGo" | "mdiCoffeeToGoOutline" | "mdiCoffin" | "mdiCog" | "mdiCogBox" | "mdiCogClockwise" | "mdiCogCounterclockwise" | "mdiCogOff" | "mdiCogOffOutline" | "mdiCogOutline" | "mdiCogPause" | "mdiCogPauseOutline" | "mdiCogPlay" | "mdiCogPlayOutline" | "mdiCogRefresh" | "mdiCogRefreshOutline" | "mdiCogStop" | "mdiCogStopOutline" | "mdiCogSync" | "mdiCogSyncOutline" | "mdiCogTransfer" | "mdiCogTransferOutline" | "mdiCogs" | "mdiCollage" | "mdiCollapseAll" | "mdiCollapseAllOutline" | "mdiColorHelper" | "mdiComma" | "mdiCommaBox" | "mdiCommaBoxOutline" | "mdiCommaCircle" | "mdiCommaCircleOutline" | "mdiComment" | "mdiCommentAccount" | "mdiCommentAccountOutline" | "mdiCommentAlert" | "mdiCommentAlertOutline" | "mdiCommentArrowLeft" | "mdiCommentArrowLeftOutline" | "mdiCommentArrowRight" | "mdiCommentArrowRightOutline" | "mdiCommentBookmark" | "mdiCommentBookmarkOutline" | "mdiCommentCheck" | "mdiCommentCheckOutline" | "mdiCommentEdit" | "mdiCommentEditOutline" | "mdiCommentEye" | "mdiCommentEyeOutline" | "mdiCommentFlash" | "mdiCommentFlashOutline" | "mdiCommentMinus" | "mdiCommentMinusOutline" | "mdiCommentMultiple" | "mdiCommentMultipleOutline" | "mdiCommentOff" | "mdiCommentOffOutline" | "mdiCommentOutline" | "mdiCommentPlus" | "mdiCommentPlusOutline" | "mdiCommentProcessing" | "mdiCommentProcessingOutline" | "mdiCommentQuestion" | "mdiCommentQuestionOutline" | "mdiCommentQuote" | "mdiCommentQuoteOutline" | "mdiCommentRemove" | "mdiCommentRemoveOutline" | "mdiCommentSearch" | "mdiCommentSearchOutline" | "mdiCommentText" | "mdiCommentTextMultiple" | "mdiCommentTextMultipleOutline" | "mdiCommentTextOutline" | "mdiCompare" | "mdiCompareHorizontal" | "mdiCompareRemove" | "mdiCompareVertical" | "mdiCompass" | "mdiCompassOff" | "mdiCompassOffOutline" | "mdiCompassOutline" | "mdiCompassRose" | "mdiCompost" | "mdiCone" | "mdiConeOff" | "mdiConnection" | "mdiConsole" | "mdiConsoleLine" | "mdiConsoleNetwork" | "mdiConsoleNetworkOutline" | "mdiConsolidate" | "mdiContactlessPayment" | "mdiContactlessPaymentCircle" | "mdiContactlessPaymentCircleOutline" | "mdiContacts" | "mdiContactsOutline" | "mdiContain" | "mdiContainEnd" | "mdiContainStart" | "mdiContentCopy" | "mdiContentCut" | "mdiContentDuplicate" | "mdiContentPaste" | "mdiContentSave" | "mdiContentSaveAlert" | "mdiContentSaveAlertOutline" | "mdiContentSaveAll" | "mdiContentSaveAllOutline" | "mdiContentSaveCheck" | "mdiContentSaveCheckOutline" | "mdiContentSaveCog" | "mdiContentSaveCogOutline" | "mdiContentSaveEdit" | "mdiContentSaveEditOutline" | "mdiContentSaveMinus" | "mdiContentSaveMinusOutline" | "mdiContentSaveMove" | "mdiContentSaveMoveOutline" | "mdiContentSaveOff" | "mdiContentSaveOffOutline" | "mdiContentSaveOutline" | "mdiContentSavePlus" | "mdiContentSavePlusOutline" | "mdiContentSaveSettings" | "mdiContentSaveSettingsOutline" | "mdiContrast" | "mdiContrastBox" | "mdiContrastCircle" | "mdiController" | "mdiControllerClassic" | "mdiControllerClassicOutline" | "mdiControllerOff" | "mdiCookie" | "mdiCookieAlert" | "mdiCookieAlertOutline" | "mdiCookieCheck" | "mdiCookieCheckOutline" | "mdiCookieClock" | "mdiCookieClockOutline" | "mdiCookieCog" | "mdiCookieCogOutline" | "mdiCookieEdit" | "mdiCookieEditOutline" | "mdiCookieLock" | "mdiCookieLockOutline" | "mdiCookieMinus" | "mdiCookieMinusOutline" | "mdiCookieOff" | "mdiCookieOffOutline" | "mdiCookieOutline" | "mdiCookiePlus" | "mdiCookiePlusOutline" | "mdiCookieRefresh" | "mdiCookieRefreshOutline" | "mdiCookieRemove" | "mdiCookieRemoveOutline" | "mdiCookieSettings" | "mdiCookieSettingsOutline" | "mdiCoolantTemperature" | "mdiCopyleft" | "mdiCopyright" | "mdiCordova" | "mdiCorn" | "mdiCornOff" | "mdiCosineWave" | "mdiCounter" | "mdiCountertop" | "mdiCountertopOutline" | "mdiCow" | "mdiCowOff" | "mdiCpu32Bit" | "mdiCpu64Bit" | "mdiCradle" | "mdiCradleOutline" | "mdiCrane" | "mdiCreation" | "mdiCreationOutline" | "mdiCreativeCommons" | "mdiCreditCard" | "mdiCreditCardCheck" | "mdiCreditCardCheckOutline" | "mdiCreditCardChip" | "mdiCreditCardChipOutline" | "mdiCreditCardClock" | "mdiCreditCardClockOutline" | "mdiCreditCardEdit" | "mdiCreditCardEditOutline" | "mdiCreditCardFast" | "mdiCreditCardFastOutline" | "mdiCreditCardLock" | "mdiCreditCardLockOutline" | "mdiCreditCardMarker" | "mdiCreditCardMarkerOutline" | "mdiCreditCardMinus" | "mdiCreditCardMinusOutline" | "mdiCreditCardMultiple" | "mdiCreditCardMultipleOutline" | "mdiCreditCardOff" | "mdiCreditCardOffOutline" | "mdiCreditCardOutline" | "mdiCreditCardPlus" | "mdiCreditCardPlusOutline" | "mdiCreditCardRefresh" | "mdiCreditCardRefreshOutline" | "mdiCreditCardRefund" | "mdiCreditCardRefundOutline" | "mdiCreditCardRemove" | "mdiCreditCardRemoveOutline" | "mdiCreditCardScan" | "mdiCreditCardScanOutline" | "mdiCreditCardSearch" | "mdiCreditCardSearchOutline" | "mdiCreditCardSettings" | "mdiCreditCardSettingsOutline" | "mdiCreditCardSync" | "mdiCreditCardSyncOutline" | "mdiCreditCardWireless" | "mdiCreditCardWirelessOff" | "mdiCreditCardWirelessOffOutline" | "mdiCreditCardWirelessOutline" | "mdiCricket" | "mdiCrop" | "mdiCropFree" | "mdiCropLandscape" | "mdiCropPortrait" | "mdiCropRotate" | "mdiCropSquare" | "mdiCross" | "mdiCrossBolnisi" | "mdiCrossCeltic" | "mdiCrossOutline" | "mdiCrosshairs" | "mdiCrosshairsGps" | "mdiCrosshairsOff" | "mdiCrosshairsQuestion" | "mdiCrowd" | "mdiCrown" | "mdiCrownCircle" | "mdiCrownCircleOutline" | "mdiCrownOutline" | "mdiCryengine" | "mdiCrystalBall" | "mdiCube" | "mdiCubeOff" | "mdiCubeOffOutline" | "mdiCubeOutline" | "mdiCubeScan" | "mdiCubeSend" | "mdiCubeUnfolded" | "mdiCup" | "mdiCupOff" | "mdiCupOffOutline" | "mdiCupOutline" | "mdiCupWater" | "mdiCupboard" | "mdiCupboardOutline" | "mdiCupcake" | "mdiCurling" | "mdiCurrencyBdt" | "mdiCurrencyBrl" | "mdiCurrencyBtc" | "mdiCurrencyCny" | "mdiCurrencyEth" | "mdiCurrencyEur" | "mdiCurrencyEurOff" | "mdiCurrencyFra" | "mdiCurrencyGbp" | "mdiCurrencyIls" | "mdiCurrencyInr" | "mdiCurrencyJpy" | "mdiCurrencyKrw" | "mdiCurrencyKzt" | "mdiCurrencyMnt" | "mdiCurrencyNgn" | "mdiCurrencyPhp" | "mdiCurrencyRial" | "mdiCurrencyRub" | "mdiCurrencyRupee" | "mdiCurrencySign" | "mdiCurrencyThb" | "mdiCurrencyTry" | "mdiCurrencyTwd" | "mdiCurrencyUah" | "mdiCurrencyUsd" | "mdiCurrencyUsdOff" | "mdiCurrentAc" | "mdiCurrentDc" | "mdiCursorDefault" | "mdiCursorDefaultClick" | "mdiCursorDefaultClickOutline" | "mdiCursorDefaultGesture" | "mdiCursorDefaultGestureOutline" | "mdiCursorDefaultOutline" | "mdiCursorMove" | "mdiCursorPointer" | "mdiCursorText" | "mdiCurtains" | "mdiCurtainsClosed" | "mdiCylinder" | "mdiCylinderOff" | "mdiDanceBallroom" | "mdiDancePole" | "mdiDataMatrix" | "mdiDataMatrixEdit" | "mdiDataMatrixMinus" | "mdiDataMatrixPlus" | "mdiDataMatrixRemove" | "mdiDataMatrixScan" | "mdiDatabase" | "mdiDatabaseAlert" | "mdiDatabaseAlertOutline" | "mdiDatabaseArrowDown" | "mdiDatabaseArrowDownOutline" | "mdiDatabaseArrowLeft" | "mdiDatabaseArrowLeftOutline" | "mdiDatabaseArrowRight" | "mdiDatabaseArrowRightOutline" | "mdiDatabaseArrowUp" | "mdiDatabaseArrowUpOutline" | "mdiDatabaseCheck" | "mdiDatabaseCheckOutline" | "mdiDatabaseClock" | "mdiDatabaseClockOutline" | "mdiDatabaseCog" | "mdiDatabaseCogOutline" | "mdiDatabaseEdit" | "mdiDatabaseEditOutline" | "mdiDatabaseExport" | "mdiDatabaseExportOutline" | "mdiDatabaseEye" | "mdiDatabaseEyeOff" | "mdiDatabaseEyeOffOutline" | "mdiDatabaseEyeOutline" | "mdiDatabaseImport" | "mdiDatabaseImportOutline" | "mdiDatabaseLock" | "mdiDatabaseLockOutline" | "mdiDatabaseMarker" | "mdiDatabaseMarkerOutline" | "mdiDatabaseMinus" | "mdiDatabaseMinusOutline" | "mdiDatabaseOff" | "mdiDatabaseOffOutline" | "mdiDatabaseOutline" | "mdiDatabasePlus" | "mdiDatabasePlusOutline" | "mdiDatabaseRefresh" | "mdiDatabaseRefreshOutline" | "mdiDatabaseRemove" | "mdiDatabaseRemoveOutline" | "mdiDatabaseSearch" | "mdiDatabaseSearchOutline" | "mdiDatabaseSettings" | "mdiDatabaseSettingsOutline" | "mdiDatabaseSync" | "mdiDatabaseSyncOutline" | "mdiDeathStar" | "mdiDeathStarVariant" | "mdiDeathlyHallows" | "mdiDebian" | "mdiDebugStepInto" | "mdiDebugStepOut" | "mdiDebugStepOver" | "mdiDecagram" | "mdiDecagramOutline" | "mdiDecimal" | "mdiDecimalComma" | "mdiDecimalCommaDecrease" | "mdiDecimalCommaIncrease" | "mdiDecimalDecrease" | "mdiDecimalIncrease" | "mdiDelete" | "mdiDeleteAlert" | "mdiDeleteAlertOutline" | "mdiDeleteCircle" | "mdiDeleteCircleOutline" | "mdiDeleteClock" | "mdiDeleteClockOutline" | "mdiDeleteEmpty" | "mdiDeleteEmptyOutline" | "mdiDeleteForever" | "mdiDeleteForeverOutline" | "mdiDeleteOff" | "mdiDeleteOffOutline" | "mdiDeleteOutline" | "mdiDeleteRestore" | "mdiDeleteSweep" | "mdiDeleteSweepOutline" | "mdiDeleteVariant" | "mdiDelta" | "mdiDesk" | "mdiDeskLamp" | "mdiDeskLampOff" | "mdiDeskLampOn" | "mdiDeskphone" | "mdiDesktopClassic" | "mdiDesktopTower" | "mdiDesktopTowerMonitor" | "mdiDetails" | "mdiDevTo" | "mdiDeveloperBoard" | "mdiDeviantart" | "mdiDevices" | "mdiDharmachakra" | "mdiDiabetes" | "mdiDialpad" | "mdiDiameter" | "mdiDiameterOutline" | "mdiDiameterVariant" | "mdiDiamond" | "mdiDiamondOutline" | "mdiDiamondStone" | "mdiDiaperOutline" | "mdiDice1" | "mdiDice1Outline" | "mdiDice2" | "mdiDice2Outline" | "mdiDice3" | "mdiDice3Outline" | "mdiDice4" | "mdiDice4Outline" | "mdiDice5" | "mdiDice5Outline" | "mdiDice6" | "mdiDice6Outline" | "mdiDiceD10" | "mdiDiceD10Outline" | "mdiDiceD12" | "mdiDiceD12Outline" | "mdiDiceD20" | "mdiDiceD20Outline" | "mdiDiceD4" | "mdiDiceD4Outline" | "mdiDiceD6" | "mdiDiceD6Outline" | "mdiDiceD8" | "mdiDiceD8Outline" | "mdiDiceMultiple" | "mdiDiceMultipleOutline" | "mdiDigitalOcean" | "mdiDipSwitch" | "mdiDirections" | "mdiDirectionsFork" | "mdiDisc" | "mdiDiscAlert" | "mdiDiscPlayer" | "mdiDishwasher" | "mdiDishwasherAlert" | "mdiDishwasherOff" | "mdiDisqus" | "mdiDistributeHorizontalCenter" | "mdiDistributeHorizontalLeft" | "mdiDistributeHorizontalRight" | "mdiDistributeVerticalBottom" | "mdiDistributeVerticalCenter" | "mdiDistributeVerticalTop" | "mdiDiversify" | "mdiDiving" | "mdiDivingFlippers" | "mdiDivingHelmet" | "mdiDivingScuba" | "mdiDivingScubaFlag" | "mdiDivingScubaMask" | "mdiDivingScubaTank" | "mdiDivingScubaTankMultiple" | "mdiDivingSnorkel" | "mdiDivision" | "mdiDivisionBox" | "mdiDlna" | "mdiDna" | "mdiDns" | "mdiDnsOutline" | "mdiDockBottom" | "mdiDockLeft" | "mdiDockRight" | "mdiDockTop" | "mdiDockWindow" | "mdiDocker" | "mdiDoctor" | "mdiDog" | "mdiDogService" | "mdiDogSide" | "mdiDogSideOff" | "mdiDolby" | "mdiDolly" | "mdiDolphin" | "mdiDomain" | "mdiDomainOff" | "mdiDomainPlus" | "mdiDomainRemove" | "mdiDomainSwitch" | "mdiDomeLight" | "mdiDominoMask" | "mdiDonkey" | "mdiDoor" | "mdiDoorClosed" | "mdiDoorClosedCancel" | "mdiDoorClosedLock" | "mdiDoorOpen" | "mdiDoorSliding" | "mdiDoorSlidingLock" | "mdiDoorSlidingOpen" | "mdiDoorbell" | "mdiDoorbellVideo" | "mdiDotNet" | "mdiDotsCircle" | "mdiDotsGrid" | "mdiDotsHexagon" | "mdiDotsHorizontal" | "mdiDotsHorizontalCircle" | "mdiDotsHorizontalCircleOutline" | "mdiDotsSquare" | "mdiDotsTriangle" | "mdiDotsVertical" | "mdiDotsVerticalCircle" | "mdiDotsVerticalCircleOutline" | "mdiDownload" | "mdiDownloadBox" | "mdiDownloadBoxOutline" | "mdiDownloadCircle" | "mdiDownloadCircleOutline" | "mdiDownloadLock" | "mdiDownloadLockOutline" | "mdiDownloadMultiple" | "mdiDownloadMultipleOutline" | "mdiDownloadNetwork" | "mdiDownloadNetworkOutline" | "mdiDownloadOff" | "mdiDownloadOffOutline" | "mdiDownloadOutline" | "mdiDrag" | "mdiDragHorizontal" | "mdiDragHorizontalVariant" | "mdiDragVariant" | "mdiDragVertical" | "mdiDragVerticalVariant" | "mdiDramaMasks" | "mdiDraw" | "mdiDrawPen" | "mdiDrawing" | "mdiDrawingBox" | "mdiDresser" | "mdiDresserOutline" | "mdiDrone" | "mdiDropbox" | "mdiDrupal" | "mdiDuck" | "mdiDumbbell" | "mdiDumpTruck" | "mdiEarHearing" | "mdiEarHearingLoop" | "mdiEarHearingOff" | "mdiEarbuds" | "mdiEarbudsOff" | "mdiEarbudsOffOutline" | "mdiEarbudsOutline" | "mdiEarth" | "mdiEarthArrowDown" | "mdiEarthArrowLeft" | "mdiEarthArrowRight" | "mdiEarthArrowUp" | "mdiEarthBox" | "mdiEarthBoxMinus" | "mdiEarthBoxOff" | "mdiEarthBoxPlus" | "mdiEarthBoxRemove" | "mdiEarthMinus" | "mdiEarthOff" | "mdiEarthPlus" | "mdiEarthRemove" | "mdiEgg" | "mdiEggEaster" | "mdiEggFried" | "mdiEggOff" | "mdiEggOffOutline" | "mdiEggOutline" | "mdiEiffelTower" | "mdiEightTrack" | "mdiEject" | "mdiEjectCircle" | "mdiEjectCircleOutline" | "mdiEjectOutline" | "mdiElectricSwitch" | "mdiElectricSwitchClosed" | "mdiElectronFramework" | "mdiElephant" | "mdiElevationDecline" | "mdiElevationRise" | "mdiElevator" | "mdiElevatorDown" | "mdiElevatorPassenger" | "mdiElevatorPassengerOff" | "mdiElevatorPassengerOffOutline" | "mdiElevatorPassengerOutline" | "mdiElevatorUp" | "mdiEllipse" | "mdiEllipseOutline" | "mdiEmail" | "mdiEmailAlert" | "mdiEmailAlertOutline" | "mdiEmailArrowLeft" | "mdiEmailArrowLeftOutline" | "mdiEmailArrowRight" | "mdiEmailArrowRightOutline" | "mdiEmailBox" | "mdiEmailCheck" | "mdiEmailCheckOutline" | "mdiEmailEdit" | "mdiEmailEditOutline" | "mdiEmailFast" | "mdiEmailFastOutline" | "mdiEmailHeartOutline" | "mdiEmailLock" | "mdiEmailLockOutline" | "mdiEmailMarkAsUnread" | "mdiEmailMinus" | "mdiEmailMinusOutline" | "mdiEmailMultiple" | "mdiEmailMultipleOutline" | "mdiEmailNewsletter" | "mdiEmailOff" | "mdiEmailOffOutline" | "mdiEmailOpen" | "mdiEmailOpenHeartOutline" | "mdiEmailOpenMultiple" | "mdiEmailOpenMultipleOutline" | "mdiEmailOpenOutline" | "mdiEmailOutline" | "mdiEmailPlus" | "mdiEmailPlusOutline" | "mdiEmailRemove" | "mdiEmailRemoveOutline" | "mdiEmailSeal" | "mdiEmailSealOutline" | "mdiEmailSearch" | "mdiEmailSearchOutline" | "mdiEmailSync" | "mdiEmailSyncOutline" | "mdiEmailVariant" | "mdiEmber" | "mdiEmby" | "mdiEmoticon" | "mdiEmoticonAngry" | "mdiEmoticonAngryOutline" | "mdiEmoticonConfused" | "mdiEmoticonConfusedOutline" | "mdiEmoticonCool" | "mdiEmoticonCoolOutline" | "mdiEmoticonCry" | "mdiEmoticonCryOutline" | "mdiEmoticonDead" | "mdiEmoticonDeadOutline" | "mdiEmoticonDevil" | "mdiEmoticonDevilOutline" | "mdiEmoticonExcited" | "mdiEmoticonExcitedOutline" | "mdiEmoticonFrown" | "mdiEmoticonFrownOutline" | "mdiEmoticonHappy" | "mdiEmoticonHappyOutline" | "mdiEmoticonKiss" | "mdiEmoticonKissOutline" | "mdiEmoticonLol" | "mdiEmoticonLolOutline" | "mdiEmoticonMinus" | "mdiEmoticonMinusOutline" | "mdiEmoticonNeutral" | "mdiEmoticonNeutralOutline" | "mdiEmoticonOutline" | "mdiEmoticonPlus" | "mdiEmoticonPlusOutline" | "mdiEmoticonPoop" | "mdiEmoticonPoopOutline" | "mdiEmoticonRemove" | "mdiEmoticonRemoveOutline" | "mdiEmoticonSad" | "mdiEmoticonSadOutline" | "mdiEmoticonSick" | "mdiEmoticonSickOutline" | "mdiEmoticonTongue" | "mdiEmoticonTongueOutline" | "mdiEmoticonWink" | "mdiEmoticonWinkOutline" | "mdiEngine" | "mdiEngineOff" | "mdiEngineOffOutline" | "mdiEngineOutline" | "mdiEpsilon" | "mdiEqual" | "mdiEqualBox" | "mdiEqualizer" | "mdiEqualizerOutline" | "mdiEraser" | "mdiEraserVariant" | "mdiEscalator" | "mdiEscalatorBox" | "mdiEscalatorDown" | "mdiEscalatorUp" | "mdiEslint" | "mdiEt" | "mdiEthereum" | "mdiEthernet" | "mdiEthernetCable" | "mdiEthernetCableOff" | "mdiEthernetOff" | "mdiEvPlugCcs1" | "mdiEvPlugCcs2" | "mdiEvPlugChademo" | "mdiEvPlugTesla" | "mdiEvPlugType1" | "mdiEvPlugType2" | "mdiEvStation" | "mdiEvernote" | "mdiExcavator" | "mdiExclamation" | "mdiExclamationThick" | "mdiExitRun" | "mdiExitToApp" | "mdiExpandAll" | "mdiExpandAllOutline" | "mdiExpansionCard" | "mdiExpansionCardVariant" | "mdiExponent" | "mdiExponentBox" | "mdiExport" | "mdiExportVariant" | "mdiEye" | "mdiEyeArrowLeft" | "mdiEyeArrowLeftOutline" | "mdiEyeArrowRight" | "mdiEyeArrowRightOutline" | "mdiEyeCheck" | "mdiEyeCheckOutline" | "mdiEyeCircle" | "mdiEyeCircleOutline" | "mdiEyeClosed" | "mdiEyeLock" | "mdiEyeLockOpen" | "mdiEyeLockOpenOutline" | "mdiEyeLockOutline" | "mdiEyeMinus" | "mdiEyeMinusOutline" | "mdiEyeOff" | "mdiEyeOffOutline" | "mdiEyeOutline" | "mdiEyePlus" | "mdiEyePlusOutline" | "mdiEyeRefresh" | "mdiEyeRefreshOutline" | "mdiEyeRemove" | "mdiEyeRemoveOutline" | "mdiEyeSettings" | "mdiEyeSettingsOutline" | "mdiEyedropper" | "mdiEyedropperMinus" | "mdiEyedropperOff" | "mdiEyedropperPlus" | "mdiEyedropperRemove" | "mdiEyedropperVariant" | "mdiFaceAgent" | "mdiFaceMan" | "mdiFaceManOutline" | "mdiFaceManProfile" | "mdiFaceManShimmer" | "mdiFaceManShimmerOutline" | "mdiFaceMask" | "mdiFaceMaskOutline" | "mdiFaceRecognition" | "mdiFaceWoman" | "mdiFaceWomanOutline" | "mdiFaceWomanProfile" | "mdiFaceWomanShimmer" | "mdiFaceWomanShimmerOutline" | "mdiFacebook" | "mdiFacebookGaming" | "mdiFacebookMessenger" | "mdiFacebookWorkplace" | "mdiFactory" | "mdiFamilyTree" | "mdiFan" | "mdiFanAlert" | "mdiFanAuto" | "mdiFanChevronDown" | "mdiFanChevronUp" | "mdiFanClock" | "mdiFanMinus" | "mdiFanOff" | "mdiFanPlus" | "mdiFanRemove" | "mdiFanSpeed1" | "mdiFanSpeed2" | "mdiFanSpeed3" | "mdiFastForward" | "mdiFastForward10" | "mdiFastForward15" | "mdiFastForward30" | "mdiFastForward45" | "mdiFastForward5" | "mdiFastForward60" | "mdiFastForwardOutline" | "mdiFaucet" | "mdiFaucetVariant" | "mdiFax" | "mdiFeather" | "mdiFeatureSearch" | "mdiFeatureSearchOutline" | "mdiFedora" | "mdiFence" | "mdiFenceElectric" | "mdiFencing" | "mdiFerrisWheel" | "mdiFerry" | "mdiFile" | "mdiFileAccount" | "mdiFileAccountOutline" | "mdiFileAlert" | "mdiFileAlertOutline" | "mdiFileArrowLeftRight" | "mdiFileArrowLeftRightOutline" | "mdiFileArrowUpDown" | "mdiFileArrowUpDownOutline" | "mdiFileCabinet" | "mdiFileCad" | "mdiFileCadBox" | "mdiFileCancel" | "mdiFileCancelOutline" | "mdiFileCertificate" | "mdiFileCertificateOutline" | "mdiFileChart" | "mdiFileChartCheck" | "mdiFileChartCheckOutline" | "mdiFileChartOutline" | "mdiFileCheck" | "mdiFileCheckOutline" | "mdiFileClock" | "mdiFileClockOutline" | "mdiFileCloud" | "mdiFileCloudOutline" | "mdiFileCode" | "mdiFileCodeOutline" | "mdiFileCog" | "mdiFileCogOutline" | "mdiFileCompare" | "mdiFileDelimited" | "mdiFileDelimitedOutline" | "mdiFileDocument" | "mdiFileDocumentAlert" | "mdiFileDocumentAlertOutline" | "mdiFileDocumentArrowRight" | "mdiFileDocumentArrowRightOutline" | "mdiFileDocumentCheck" | "mdiFileDocumentCheckOutline" | "mdiFileDocumentEdit" | "mdiFileDocumentEditOutline" | "mdiFileDocumentMinus" | "mdiFileDocumentMinusOutline" | "mdiFileDocumentMultiple" | "mdiFileDocumentMultipleOutline" | "mdiFileDocumentOutline" | "mdiFileDocumentPlus" | "mdiFileDocumentPlusOutline" | "mdiFileDocumentRefresh" | "mdiFileDocumentRefreshOutline" | "mdiFileDocumentRemove" | "mdiFileDocumentRemoveOutline" | "mdiFileDownload" | "mdiFileDownloadOutline" | "mdiFileEdit" | "mdiFileEditOutline" | "mdiFileExcel" | "mdiFileExcelBox" | "mdiFileExcelBoxOutline" | "mdiFileExcelOutline" | "mdiFileExport" | "mdiFileExportOutline" | "mdiFileEye" | "mdiFileEyeOutline" | "mdiFileFind" | "mdiFileFindOutline" | "mdiFileGifBox" | "mdiFileHidden" | "mdiFileImage" | "mdiFileImageMarker" | "mdiFileImageMarkerOutline" | "mdiFileImageMinus" | "mdiFileImageMinusOutline" | "mdiFileImageOutline" | "mdiFileImagePlus" | "mdiFileImagePlusOutline" | "mdiFileImageRemove" | "mdiFileImageRemoveOutline" | "mdiFileImport" | "mdiFileImportOutline" | "mdiFileJpgBox" | "mdiFileKey" | "mdiFileKeyOutline" | "mdiFileLink" | "mdiFileLinkOutline" | "mdiFileLock" | "mdiFileLockOpen" | "mdiFileLockOpenOutline" | "mdiFileLockOutline" | "mdiFileMarker" | "mdiFileMarkerOutline" | "mdiFileMinus" | "mdiFileMinusOutline" | "mdiFileMove" | "mdiFileMoveOutline" | "mdiFileMultiple" | "mdiFileMultipleOutline" | "mdiFileMusic" | "mdiFileMusicOutline" | "mdiFileOutline" | "mdiFilePdfBox" | "mdiFilePercent" | "mdiFilePercentOutline" | "mdiFilePhone" | "mdiFilePhoneOutline" | "mdiFilePlus" | "mdiFilePlusOutline" | "mdiFilePngBox" | "mdiFilePowerpoint" | "mdiFilePowerpointBox" | "mdiFilePowerpointBoxOutline" | "mdiFilePowerpointOutline" | "mdiFilePresentationBox" | "mdiFileQuestion" | "mdiFileQuestionOutline" | "mdiFileRefresh" | "mdiFileRefreshOutline" | "mdiFileRemove" | "mdiFileRemoveOutline" | "mdiFileReplace" | "mdiFileReplaceOutline" | "mdiFileRestore" | "mdiFileRestoreOutline" | "mdiFileRotateLeft" | "mdiFileRotateLeftOutline" | "mdiFileRotateRight" | "mdiFileRotateRightOutline" | "mdiFileSearch" | "mdiFileSearchOutline" | "mdiFileSend" | "mdiFileSendOutline" | "mdiFileSettings" | "mdiFileSettingsOutline" | "mdiFileSign" | "mdiFileStar" | "mdiFileStarFourPoints" | "mdiFileStarFourPointsOutline" | "mdiFileStarOutline" | "mdiFileSwap" | "mdiFileSwapOutline" | "mdiFileSync" | "mdiFileSyncOutline" | "mdiFileTable" | "mdiFileTableBox" | "mdiFileTableBoxMultiple" | "mdiFileTableBoxMultipleOutline" | "mdiFileTableBoxOutline" | "mdiFileTableOutline" | "mdiFileTree" | "mdiFileTreeOutline" | "mdiFileUndo" | "mdiFileUndoOutline" | "mdiFileUpload" | "mdiFileUploadOutline" | "mdiFileVideo" | "mdiFileVideoOutline" | "mdiFileWord" | "mdiFileWordBox" | "mdiFileWordBoxOutline" | "mdiFileWordOutline" | "mdiFileXmlBox" | "mdiFilm" | "mdiFilmstrip" | "mdiFilmstripBox" | "mdiFilmstripBoxMultiple" | "mdiFilmstripOff" | "mdiFilter" | "mdiFilterCheck" | "mdiFilterCheckOutline" | "mdiFilterCog" | "mdiFilterCogOutline" | "mdiFilterMenu" | "mdiFilterMenuOutline" | "mdiFilterMinus" | "mdiFilterMinusOutline" | "mdiFilterMultiple" | "mdiFilterMultipleOutline" | "mdiFilterOff" | "mdiFilterOffOutline" | "mdiFilterOutline" | "mdiFilterPlus" | "mdiFilterPlusOutline" | "mdiFilterRemove" | "mdiFilterRemoveOutline" | "mdiFilterSettings" | "mdiFilterSettingsOutline" | "mdiFilterVariant" | "mdiFilterVariantMinus" | "mdiFilterVariantPlus" | "mdiFilterVariantRemove" | "mdiFinance" | "mdiFindReplace" | "mdiFingerprint" | "mdiFingerprintOff" | "mdiFire" | "mdiFireAlert" | "mdiFireCircle" | "mdiFireExtinguisher" | "mdiFireHydrant" | "mdiFireHydrantAlert" | "mdiFireHydrantOff" | "mdiFireOff" | "mdiFireStation" | "mdiFireTruck" | "mdiFirebase" | "mdiFirefox" | "mdiFireplace" | "mdiFireplaceOff" | "mdiFirewire" | "mdiFirework" | "mdiFireworkOff" | "mdiFish" | "mdiFishOff" | "mdiFishbowl" | "mdiFishbowlOutline" | "mdiFitToPage" | "mdiFitToPageOutline" | "mdiFitToScreen" | "mdiFitToScreenOutline" | "mdiFlag" | "mdiFlagCheckered" | "mdiFlagMinus" | "mdiFlagMinusOutline" | "mdiFlagOff" | "mdiFlagOffOutline" | "mdiFlagOutline" | "mdiFlagPlus" | "mdiFlagPlusOutline" | "mdiFlagRemove" | "mdiFlagRemoveOutline" | "mdiFlagTriangle" | "mdiFlagVariant" | "mdiFlagVariantMinus" | "mdiFlagVariantMinusOutline" | "mdiFlagVariantOff" | "mdiFlagVariantOffOutline" | "mdiFlagVariantOutline" | "mdiFlagVariantPlus" | "mdiFlagVariantPlusOutline" | "mdiFlagVariantRemove" | "mdiFlagVariantRemoveOutline" | "mdiFlare" | "mdiFlash" | "mdiFlashAlert" | "mdiFlashAlertOutline" | "mdiFlashAuto" | "mdiFlashOff" | "mdiFlashOffOutline" | "mdiFlashOutline" | "mdiFlashRedEye" | "mdiFlashTriangle" | "mdiFlashTriangleOutline" | "mdiFlashlight" | "mdiFlashlightOff" | "mdiFlask" | "mdiFlaskEmpty" | "mdiFlaskEmptyMinus" | "mdiFlaskEmptyMinusOutline" | "mdiFlaskEmptyOff" | "mdiFlaskEmptyOffOutline" | "mdiFlaskEmptyOutline" | "mdiFlaskEmptyPlus" | "mdiFlaskEmptyPlusOutline" | "mdiFlaskEmptyRemove" | "mdiFlaskEmptyRemoveOutline" | "mdiFlaskMinus" | "mdiFlaskMinusOutline" | "mdiFlaskOff" | "mdiFlaskOffOutline" | "mdiFlaskOutline" | "mdiFlaskPlus" | "mdiFlaskPlusOutline" | "mdiFlaskRemove" | "mdiFlaskRemoveOutline" | "mdiFlaskRoundBottom" | "mdiFlaskRoundBottomEmpty" | "mdiFlaskRoundBottomEmptyOutline" | "mdiFlaskRoundBottomOutline" | "mdiFleurDeLis" | "mdiFlipHorizontal" | "mdiFlipToBack" | "mdiFlipToFront" | "mdiFlipVertical" | "mdiFloorLamp" | "mdiFloorLampDual" | "mdiFloorLampDualOutline" | "mdiFloorLampOutline" | "mdiFloorLampTorchiere" | "mdiFloorLampTorchiereOutline" | "mdiFloorLampTorchiereVariant" | "mdiFloorLampTorchiereVariantOutline" | "mdiFloorPlan" | "mdiFloppy" | "mdiFloppyVariant" | "mdiFlower" | "mdiFlowerOutline" | "mdiFlowerPollen" | "mdiFlowerPollenOutline" | "mdiFlowerPoppy" | "mdiFlowerTulip" | "mdiFlowerTulipOutline" | "mdiFocusAuto" | "mdiFocusField" | "mdiFocusFieldHorizontal" | "mdiFocusFieldVertical" | "mdiFolder" | "mdiFolderAccount" | "mdiFolderAccountOutline" | "mdiFolderAlert" | "mdiFolderAlertOutline" | "mdiFolderArrowDown" | "mdiFolderArrowDownOutline" | "mdiFolderArrowLeft" | "mdiFolderArrowLeftOutline" | "mdiFolderArrowLeftRight" | "mdiFolderArrowLeftRightOutline" | "mdiFolderArrowRight" | "mdiFolderArrowRightOutline" | "mdiFolderArrowUp" | "mdiFolderArrowUpDown" | "mdiFolderArrowUpDownOutline" | "mdiFolderArrowUpOutline" | "mdiFolderCancel" | "mdiFolderCancelOutline" | "mdiFolderCheck" | "mdiFolderCheckOutline" | "mdiFolderClock" | "mdiFolderClockOutline" | "mdiFolderCog" | "mdiFolderCogOutline" | "mdiFolderDownload" | "mdiFolderDownloadOutline" | "mdiFolderEdit" | "mdiFolderEditOutline" | "mdiFolderEye" | "mdiFolderEyeOutline" | "mdiFolderFile" | "mdiFolderFileOutline" | "mdiFolderGoogleDrive" | "mdiFolderHeart" | "mdiFolderHeartOutline" | "mdiFolderHidden" | "mdiFolderHome" | "mdiFolderHomeOutline" | "mdiFolderImage" | "mdiFolderInformation" | "mdiFolderInformationOutline" | "mdiFolderKey" | "mdiFolderKeyNetwork" | "mdiFolderKeyNetworkOutline" | "mdiFolderKeyOutline" | "mdiFolderLock" | "mdiFolderLockOpen" | "mdiFolderLockOpenOutline" | "mdiFolderLockOutline" | "mdiFolderMarker" | "mdiFolderMarkerOutline" | "mdiFolderMinus" | "mdiFolderMinusOutline" | "mdiFolderMove" | "mdiFolderMoveOutline" | "mdiFolderMultiple" | "mdiFolderMultipleImage" | "mdiFolderMultipleOutline" | "mdiFolderMultiplePlus" | "mdiFolderMultiplePlusOutline" | "mdiFolderMusic" | "mdiFolderMusicOutline" | "mdiFolderNetwork" | "mdiFolderNetworkOutline" | "mdiFolderOff" | "mdiFolderOffOutline" | "mdiFolderOpen" | "mdiFolderOpenOutline" | "mdiFolderOutline" | "mdiFolderPlay" | "mdiFolderPlayOutline" | "mdiFolderPlus" | "mdiFolderPlusOutline" | "mdiFolderPound" | "mdiFolderPoundOutline" | "mdiFolderQuestion" | "mdiFolderQuestionOutline" | "mdiFolderRefresh" | "mdiFolderRefreshOutline" | "mdiFolderRemove" | "mdiFolderRemoveOutline" | "mdiFolderSearch" | "mdiFolderSearchOutline" | "mdiFolderSettings" | "mdiFolderSettingsOutline" | "mdiFolderStar" | "mdiFolderStarMultiple" | "mdiFolderStarMultipleOutline" | "mdiFolderStarOutline" | "mdiFolderSwap" | "mdiFolderSwapOutline" | "mdiFolderSync" | "mdiFolderSyncOutline" | "mdiFolderTable" | "mdiFolderTableOutline" | "mdiFolderText" | "mdiFolderTextOutline" | "mdiFolderUpload" | "mdiFolderUploadOutline" | "mdiFolderWrench" | "mdiFolderWrenchOutline" | "mdiFolderZip" | "mdiFolderZipOutline" | "mdiFontAwesome" | "mdiFood" | "mdiFoodApple" | "mdiFoodAppleOutline" | "mdiFoodCroissant" | "mdiFoodDrumstick" | "mdiFoodDrumstickOff" | "mdiFoodDrumstickOffOutline" | "mdiFoodDrumstickOutline" | "mdiFoodForkDrink" | "mdiFoodHalal" | "mdiFoodHotDog" | "mdiFoodKosher" | "mdiFoodOff" | "mdiFoodOffOutline" | "mdiFoodOutline" | "mdiFoodSteak" | "mdiFoodSteakOff" | "mdiFoodTakeoutBox" | "mdiFoodTakeoutBoxOutline" | "mdiFoodTurkey" | "mdiFoodVariant" | "mdiFoodVariantOff" | "mdiFootPrint" | "mdiFootball" | "mdiFootballAustralian" | "mdiFootballHelmet" | "mdiForest" | "mdiForestOutline" | "mdiForklift" | "mdiFormDropdown" | "mdiFormSelect" | "mdiFormTextarea" | "mdiFormTextbox" | "mdiFormTextboxLock" | "mdiFormTextboxPassword" | "mdiFormatAlignBottom" | "mdiFormatAlignCenter" | "mdiFormatAlignJustify" | "mdiFormatAlignLeft" | "mdiFormatAlignMiddle" | "mdiFormatAlignRight" | "mdiFormatAlignTop" | "mdiFormatAnnotationMinus" | "mdiFormatAnnotationPlus" | "mdiFormatBold" | "mdiFormatClear" | "mdiFormatColorFill" | "mdiFormatColorHighlight" | "mdiFormatColorMarkerCancel" | "mdiFormatColorText" | "mdiFormatColumns" | "mdiFormatFloatCenter" | "mdiFormatFloatLeft" | "mdiFormatFloatNone" | "mdiFormatFloatRight" | "mdiFormatFont" | "mdiFormatFontSizeDecrease" | "mdiFormatFontSizeIncrease" | "mdiFormatHeader1" | "mdiFormatHeader2" | "mdiFormatHeader3" | "mdiFormatHeader4" | "mdiFormatHeader5" | "mdiFormatHeader6" | "mdiFormatHeaderDecrease" | "mdiFormatHeaderEqual" | "mdiFormatHeaderIncrease" | "mdiFormatHeaderPound" | "mdiFormatHorizontalAlignCenter" | "mdiFormatHorizontalAlignLeft" | "mdiFormatHorizontalAlignRight" | "mdiFormatIndentDecrease" | "mdiFormatIndentIncrease" | "mdiFormatItalic" | "mdiFormatLetterCase" | "mdiFormatLetterCaseLower" | "mdiFormatLetterCaseUpper" | "mdiFormatLetterEndsWith" | "mdiFormatLetterMatches" | "mdiFormatLetterSpacing" | "mdiFormatLetterSpacingVariant" | "mdiFormatLetterStartsWith" | "mdiFormatLineHeight" | "mdiFormatLineSpacing" | "mdiFormatLineStyle" | "mdiFormatLineWeight" | "mdiFormatListBulleted" | "mdiFormatListBulletedSquare" | "mdiFormatListBulletedTriangle" | "mdiFormatListBulletedType" | "mdiFormatListCheckbox" | "mdiFormatListChecks" | "mdiFormatListGroup" | "mdiFormatListGroupPlus" | "mdiFormatListNumbered" | "mdiFormatListNumberedRtl" | "mdiFormatListText" | "mdiFormatOverline" | "mdiFormatPageBreak" | "mdiFormatPageSplit" | "mdiFormatPaint" | "mdiFormatParagraph" | "mdiFormatParagraphSpacing" | "mdiFormatPilcrow" | "mdiFormatPilcrowArrowLeft" | "mdiFormatPilcrowArrowRight" | "mdiFormatQuoteClose" | "mdiFormatQuoteCloseOutline" | "mdiFormatQuoteOpen" | "mdiFormatQuoteOpenOutline" | "mdiFormatRotate90" | "mdiFormatSection" | "mdiFormatSize" | "mdiFormatStrikethrough" | "mdiFormatStrikethroughVariant" | "mdiFormatSubscript" | "mdiFormatSuperscript" | "mdiFormatText" | "mdiFormatTextRotationAngleDown" | "mdiFormatTextRotationAngleUp" | "mdiFormatTextRotationDown" | "mdiFormatTextRotationDownVertical" | "mdiFormatTextRotationNone" | "mdiFormatTextRotationUp" | "mdiFormatTextRotationVertical" | "mdiFormatTextVariant" | "mdiFormatTextVariantOutline" | "mdiFormatTextWrappingClip" | "mdiFormatTextWrappingOverflow" | "mdiFormatTextWrappingWrap" | "mdiFormatTextbox" | "mdiFormatTitle" | "mdiFormatUnderline" | "mdiFormatUnderlineWavy" | "mdiFormatVerticalAlignBottom" | "mdiFormatVerticalAlignCenter" | "mdiFormatVerticalAlignTop" | "mdiFormatWrapInline" | "mdiFormatWrapSquare" | "mdiFormatWrapTight" | "mdiFormatWrapTopBottom" | "mdiForum" | "mdiForumMinus" | "mdiForumMinusOutline" | "mdiForumOutline" | "mdiForumPlus" | "mdiForumPlusOutline" | "mdiForumRemove" | "mdiForumRemoveOutline" | "mdiForward" | "mdiForwardburger" | "mdiFountain" | "mdiFountainPen" | "mdiFountainPenTip" | "mdiFractionOneHalf" | "mdiFreebsd" | "mdiFrenchFries" | "mdiFrequentlyAskedQuestions" | "mdiFridge" | "mdiFridgeAlert" | "mdiFridgeAlertOutline" | "mdiFridgeBottom" | "mdiFridgeIndustrial" | "mdiFridgeIndustrialAlert" | "mdiFridgeIndustrialAlertOutline" | "mdiFridgeIndustrialOff" | "mdiFridgeIndustrialOffOutline" | "mdiFridgeIndustrialOutline" | "mdiFridgeOff" | "mdiFridgeOffOutline" | "mdiFridgeOutline" | "mdiFridgeTop" | "mdiFridgeVariant" | "mdiFridgeVariantAlert" | "mdiFridgeVariantAlertOutline" | "mdiFridgeVariantOff" | "mdiFridgeVariantOffOutline" | "mdiFridgeVariantOutline" | "mdiFruitCherries" | "mdiFruitCherriesOff" | "mdiFruitCitrus" | "mdiFruitCitrusOff" | "mdiFruitGrapes" | "mdiFruitGrapesOutline" | "mdiFruitPear" | "mdiFruitPineapple" | "mdiFruitWatermelon" | "mdiFuel" | "mdiFuelCell" | "mdiFullscreen" | "mdiFullscreenExit" | "mdiFunction" | "mdiFunctionVariant" | "mdiFuriganaHorizontal" | "mdiFuriganaVertical" | "mdiFuse" | "mdiFuseAlert" | "mdiFuseBlade" | "mdiFuseOff" | "mdiGamepad" | "mdiGamepadCircle" | "mdiGamepadCircleDown" | "mdiGamepadCircleLeft" | "mdiGamepadCircleOutline" | "mdiGamepadCircleRight" | "mdiGamepadCircleUp" | "mdiGamepadDown" | "mdiGamepadLeft" | "mdiGamepadOutline" | "mdiGamepadRight" | "mdiGamepadRound" | "mdiGamepadRoundDown" | "mdiGamepadRoundLeft" | "mdiGamepadRoundOutline" | "mdiGamepadRoundRight" | "mdiGamepadRoundUp" | "mdiGamepadSquare" | "mdiGamepadSquareOutline" | "mdiGamepadUp" | "mdiGamepadVariant" | "mdiGamepadVariantOutline" | "mdiGamma" | "mdiGantryCrane" | "mdiGarage" | "mdiGarageAlert" | "mdiGarageAlertVariant" | "mdiGarageLock" | "mdiGarageOpen" | "mdiGarageOpenVariant" | "mdiGarageVariant" | "mdiGarageVariantLock" | "mdiGasBurner" | "mdiGasCylinder" | "mdiGasStation" | "mdiGasStationInUse" | "mdiGasStationInUseOutline" | "mdiGasStationOff" | "mdiGasStationOffOutline" | "mdiGasStationOutline" | "mdiGate" | "mdiGateAlert" | "mdiGateAnd" | "mdiGateArrowLeft" | "mdiGateArrowRight" | "mdiGateBuffer" | "mdiGateNand" | "mdiGateNor" | "mdiGateNot" | "mdiGateOpen" | "mdiGateOr" | "mdiGateXnor" | "mdiGateXor" | "mdiGatsby" | "mdiGauge" | "mdiGaugeEmpty" | "mdiGaugeFull" | "mdiGaugeLow" | "mdiGavel" | "mdiGenderFemale" | "mdiGenderMale" | "mdiGenderMaleFemale" | "mdiGenderMaleFemaleVariant" | "mdiGenderNonBinary" | "mdiGenderTransgender" | "mdiGeneratorMobile" | "mdiGeneratorPortable" | "mdiGeneratorStationary" | "mdiGentoo" | "mdiGesture" | "mdiGestureDoubleTap" | "mdiGesturePinch" | "mdiGestureSpread" | "mdiGestureSwipe" | "mdiGestureSwipeDown" | "mdiGestureSwipeHorizontal" | "mdiGestureSwipeLeft" | "mdiGestureSwipeRight" | "mdiGestureSwipeUp" | "mdiGestureSwipeVertical" | "mdiGestureTap" | "mdiGestureTapBox" | "mdiGestureTapButton" | "mdiGestureTapHold" | "mdiGestureTwoDoubleTap" | "mdiGestureTwoTap" | "mdiGhost" | "mdiGhostOff" | "mdiGhostOffOutline" | "mdiGhostOutline" | "mdiGift" | "mdiGiftOff" | "mdiGiftOffOutline" | "mdiGiftOpen" | "mdiGiftOpenOutline" | "mdiGiftOutline" | "mdiGit" | "mdiGithub" | "mdiGitlab" | "mdiGlassCocktail" | "mdiGlassCocktailOff" | "mdiGlassFlute" | "mdiGlassFragile" | "mdiGlassMug" | "mdiGlassMugOff" | "mdiGlassMugVariant" | "mdiGlassMugVariantOff" | "mdiGlassPintOutline" | "mdiGlassStange" | "mdiGlassTulip" | "mdiGlassWine" | "mdiGlasses" | "mdiGlobeLight" | "mdiGlobeLightOutline" | "mdiGlobeModel" | "mdiGmail" | "mdiGnome" | "mdiGoKart" | "mdiGoKartTrack" | "mdiGog" | "mdiGold" | "mdiGolf" | "mdiGolfCart" | "mdiGolfTee" | "mdiGondola" | "mdiGoodreads" | "mdiGoogle" | "mdiGoogleAds" | "mdiGoogleAnalytics" | "mdiGoogleAssistant" | "mdiGoogleCardboard" | "mdiGoogleChrome" | "mdiGoogleCircles" | "mdiGoogleCirclesCommunities" | "mdiGoogleCirclesExtended" | "mdiGoogleCirclesGroup" | "mdiGoogleClassroom" | "mdiGoogleCloud" | "mdiGoogleDownasaur" | "mdiGoogleDrive" | "mdiGoogleEarth" | "mdiGoogleFit" | "mdiGoogleGlass" | "mdiGoogleHangouts" | "mdiGoogleKeep" | "mdiGoogleLens" | "mdiGoogleMaps" | "mdiGoogleMyBusiness" | "mdiGoogleNearby" | "mdiGooglePlay" | "mdiGooglePlus" | "mdiGooglePodcast" | "mdiGoogleSpreadsheet" | "mdiGoogleStreetView" | "mdiGoogleTranslate" | "mdiGradientHorizontal" | "mdiGradientVertical" | "mdiGrain" | "mdiGraph" | "mdiGraphOutline" | "mdiGraphql" | "mdiGrass" | "mdiGraveStone" | "mdiGreasePencil" | "mdiGreaterThan" | "mdiGreaterThanOrEqual" | "mdiGreenhouse" | "mdiGrid" | "mdiGridLarge" | "mdiGridOff" | "mdiGrill" | "mdiGrillOutline" | "mdiGroup" | "mdiGuitarAcoustic" | "mdiGuitarElectric" | "mdiGuitarPick" | "mdiGuitarPickOutline" | "mdiGuyFawkesMask" | "mdiGymnastics" | "mdiHail" | "mdiHairDryer" | "mdiHairDryerOutline" | "mdiHalloween" | "mdiHamburger" | "mdiHamburgerCheck" | "mdiHamburgerMinus" | "mdiHamburgerOff" | "mdiHamburgerPlus" | "mdiHamburgerRemove" | "mdiHammer" | "mdiHammerScrewdriver" | "mdiHammerSickle" | "mdiHammerWrench" | "mdiHandBackLeft" | "mdiHandBackLeftOff" | "mdiHandBackLeftOffOutline" | "mdiHandBackLeftOutline" | "mdiHandBackRight" | "mdiHandBackRightOff" | "mdiHandBackRightOffOutline" | "mdiHandBackRightOutline" | "mdiHandClap" | "mdiHandClapOff" | "mdiHandCoin" | "mdiHandCoinOutline" | "mdiHandCycle" | "mdiHandExtended" | "mdiHandExtendedOutline" | "mdiHandFrontLeft" | "mdiHandFrontLeftOutline" | "mdiHandFrontRight" | "mdiHandFrontRightOutline" | "mdiHandHeart" | "mdiHandHeartOutline" | "mdiHandOkay" | "mdiHandPeace" | "mdiHandPeaceVariant" | "mdiHandPointingDown" | "mdiHandPointingLeft" | "mdiHandPointingRight" | "mdiHandPointingUp" | "mdiHandSaw" | "mdiHandWash" | "mdiHandWashOutline" | "mdiHandWater" | "mdiHandWave" | "mdiHandWaveOutline" | "mdiHandball" | "mdiHandcuffs" | "mdiHandsPray" | "mdiHandshake" | "mdiHandshakeOutline" | "mdiHanger" | "mdiHardHat" | "mdiHarddisk" | "mdiHarddiskPlus" | "mdiHarddiskRemove" | "mdiHatFedora" | "mdiHazardLights" | "mdiHdmiPort" | "mdiHdr" | "mdiHdrOff" | "mdiHead" | "mdiHeadAlert" | "mdiHeadAlertOutline" | "mdiHeadCheck" | "mdiHeadCheckOutline" | "mdiHeadCog" | "mdiHeadCogOutline" | "mdiHeadDotsHorizontal" | "mdiHeadDotsHorizontalOutline" | "mdiHeadFlash" | "mdiHeadFlashOutline" | "mdiHeadHeart" | "mdiHeadHeartOutline" | "mdiHeadLightbulb" | "mdiHeadLightbulbOutline" | "mdiHeadMinus" | "mdiHeadMinusOutline" | "mdiHeadOutline" | "mdiHeadPlus" | "mdiHeadPlusOutline" | "mdiHeadQuestion" | "mdiHeadQuestionOutline" | "mdiHeadRemove" | "mdiHeadRemoveOutline" | "mdiHeadSnowflake" | "mdiHeadSnowflakeOutline" | "mdiHeadSync" | "mdiHeadSyncOutline" | "mdiHeadphones" | "mdiHeadphonesBluetooth" | "mdiHeadphonesBox" | "mdiHeadphonesOff" | "mdiHeadphonesSettings" | "mdiHeadset" | "mdiHeadsetDock" | "mdiHeadsetOff" | "mdiHeart" | "mdiHeartBox" | "mdiHeartBoxOutline" | "mdiHeartBroken" | "mdiHeartBrokenOutline" | "mdiHeartCircle" | "mdiHeartCircleOutline" | "mdiHeartCog" | "mdiHeartCogOutline" | "mdiHeartFlash" | "mdiHeartHalf" | "mdiHeartHalfFull" | "mdiHeartHalfOutline" | "mdiHeartMinus" | "mdiHeartMinusOutline" | "mdiHeartMultiple" | "mdiHeartMultipleOutline" | "mdiHeartOff" | "mdiHeartOffOutline" | "mdiHeartOutline" | "mdiHeartPlus" | "mdiHeartPlusOutline" | "mdiHeartPulse" | "mdiHeartRemove" | "mdiHeartRemoveOutline" | "mdiHeartSearch" | "mdiHeartSettings" | "mdiHeartSettingsOutline" | "mdiHeatPump" | "mdiHeatPumpOutline" | "mdiHeatWave" | "mdiHeatingCoil" | "mdiHelicopter" | "mdiHelp" | "mdiHelpBox" | "mdiHelpBoxMultiple" | "mdiHelpBoxMultipleOutline" | "mdiHelpBoxOutline" | "mdiHelpCircle" | "mdiHelpCircleOutline" | "mdiHelpNetwork" | "mdiHelpNetworkOutline" | "mdiHelpRhombus" | "mdiHelpRhombusOutline" | "mdiHexadecimal" | "mdiHexagon" | "mdiHexagonMultiple" | "mdiHexagonMultipleOutline" | "mdiHexagonOutline" | "mdiHexagonSlice1" | "mdiHexagonSlice2" | "mdiHexagonSlice3" | "mdiHexagonSlice4" | "mdiHexagonSlice5" | "mdiHexagonSlice6" | "mdiHexagram" | "mdiHexagramOutline" | "mdiHighDefinition" | "mdiHighDefinitionBox" | "mdiHighway" | "mdiHiking" | "mdiHistory" | "mdiHockeyPuck" | "mdiHockeySticks" | "mdiHololens" | "mdiHome" | "mdiHomeAccount" | "mdiHomeAlert" | "mdiHomeAlertOutline" | "mdiHomeAnalytics" | "mdiHomeAssistant" | "mdiHomeAutomation" | "mdiHomeBattery" | "mdiHomeBatteryOutline" | "mdiHomeCircle" | "mdiHomeCircleOutline" | "mdiHomeCity" | "mdiHomeCityOutline" | "mdiHomeClock" | "mdiHomeClockOutline" | "mdiHomeEdit" | "mdiHomeEditOutline" | "mdiHomeExportOutline" | "mdiHomeFlood" | "mdiHomeFloor0" | "mdiHomeFloor1" | "mdiHomeFloor2" | "mdiHomeFloor3" | "mdiHomeFloorA" | "mdiHomeFloorB" | "mdiHomeFloorG" | "mdiHomeFloorL" | "mdiHomeFloorNegative1" | "mdiHomeGroup" | "mdiHomeGroupMinus" | "mdiHomeGroupPlus" | "mdiHomeGroupRemove" | "mdiHomeHeart" | "mdiHomeImportOutline" | "mdiHomeLightbulb" | "mdiHomeLightbulbOutline" | "mdiHomeLightningBolt" | "mdiHomeLightningBoltOutline" | "mdiHomeLock" | "mdiHomeLockOpen" | "mdiHomeMapMarker" | "mdiHomeMinus" | "mdiHomeMinusOutline" | "mdiHomeModern" | "mdiHomeOff" | "mdiHomeOffOutline" | "mdiHomeOutline" | "mdiHomePercent" | "mdiHomePercentOutline" | "mdiHomePlus" | "mdiHomePlusOutline" | "mdiHomeRemove" | "mdiHomeRemoveOutline" | "mdiHomeRoof" | "mdiHomeSearch" | "mdiHomeSearchOutline" | "mdiHomeSilo" | "mdiHomeSiloOutline" | "mdiHomeSoundIn" | "mdiHomeSoundInOutline" | "mdiHomeSoundOut" | "mdiHomeSoundOutOutline" | "mdiHomeSwitch" | "mdiHomeSwitchOutline" | "mdiHomeThermometer" | "mdiHomeThermometerOutline" | "mdiHomeVariant" | "mdiHomeVariantOutline" | "mdiHook" | "mdiHookOff" | "mdiHoopHouse" | "mdiHops" | "mdiHorizontalRotateClockwise" | "mdiHorizontalRotateCounterclockwise" | "mdiHorse" | "mdiHorseHuman" | "mdiHorseVariant" | "mdiHorseVariantFast" | "mdiHorseshoe" | "mdiHospital" | "mdiHospitalBox" | "mdiHospitalBoxOutline" | "mdiHospitalBuilding" | "mdiHospitalMarker" | "mdiHotTub" | "mdiHours12" | "mdiHours24" | "mdiHub" | "mdiHubOutline" | "mdiHubspot" | "mdiHulu" | "mdiHuman" | "mdiHumanBabyChangingTable" | "mdiHumanCane" | "mdiHumanCapacityDecrease" | "mdiHumanCapacityIncrease" | "mdiHumanChild" | "mdiHumanDolly" | "mdiHumanEdit" | "mdiHumanFemale" | "mdiHumanFemaleBoy" | "mdiHumanFemaleDance" | "mdiHumanFemaleFemale" | "mdiHumanFemaleFemaleChild" | "mdiHumanFemaleGirl" | "mdiHumanGreeting" | "mdiHumanGreetingProximity" | "mdiHumanGreetingVariant" | "mdiHumanHandsdown" | "mdiHumanHandsup" | "mdiHumanMale" | "mdiHumanMaleBoard" | "mdiHumanMaleBoardPoll" | "mdiHumanMaleBoy" | "mdiHumanMaleChild" | "mdiHumanMaleFemale" | "mdiHumanMaleFemaleChild" | "mdiHumanMaleGirl" | "mdiHumanMaleHeight" | "mdiHumanMaleHeightVariant" | "mdiHumanMaleMale" | "mdiHumanMaleMaleChild" | "mdiHumanNonBinary" | "mdiHumanPregnant" | "mdiHumanQueue" | "mdiHumanScooter" | "mdiHumanWalker" | "mdiHumanWheelchair" | "mdiHumanWhiteCane" | "mdiHumbleBundle" | "mdiHvac" | "mdiHvacOff" | "mdiHydraulicOilLevel" | "mdiHydraulicOilTemperature" | "mdiHydroPower" | "mdiHydrogenStation" | "mdiIceCream" | "mdiIceCreamOff" | "mdiIcePop" | "mdiIdCard" | "mdiIdentifier" | "mdiIdeogramCjk" | "mdiIdeogramCjkVariant" | "mdiImage" | "mdiImageAlbum" | "mdiImageArea" | "mdiImageAreaClose" | "mdiImageAutoAdjust" | "mdiImageBroken" | "mdiImageBrokenVariant" | "mdiImageCheck" | "mdiImageCheckOutline" | "mdiImageEdit" | "mdiImageEditOutline" | "mdiImageFilterBlackWhite" | "mdiImageFilterCenterFocus" | "mdiImageFilterCenterFocusStrong" | "mdiImageFilterCenterFocusStrongOutline" | "mdiImageFilterCenterFocusWeak" | "mdiImageFilterDrama" | "mdiImageFilterDramaOutline" | "mdiImageFilterFrames" | "mdiImageFilterHdr" | "mdiImageFilterHdrOutline" | "mdiImageFilterNone" | "mdiImageFilterTiltShift" | "mdiImageFilterVintage" | "mdiImageFrame" | "mdiImageLock" | "mdiImageLockOutline" | "mdiImageMarker" | "mdiImageMarkerOutline" | "mdiImageMinus" | "mdiImageMinusOutline" | "mdiImageMove" | "mdiImageMultiple" | "mdiImageMultipleOutline" | "mdiImageOff" | "mdiImageOffOutline" | "mdiImageOutline" | "mdiImagePlus" | "mdiImagePlusOutline" | "mdiImageRefresh" | "mdiImageRefreshOutline" | "mdiImageRemove" | "mdiImageRemoveOutline" | "mdiImageSearch" | "mdiImageSearchOutline" | "mdiImageSizeSelectActual" | "mdiImageSizeSelectLarge" | "mdiImageSizeSelectSmall" | "mdiImageSync" | "mdiImageSyncOutline" | "mdiImageText" | "mdiImport" | "mdiInbox" | "mdiInboxArrowDown" | "mdiInboxArrowDownOutline" | "mdiInboxArrowUp" | "mdiInboxArrowUpOutline" | "mdiInboxFull" | "mdiInboxFullOutline" | "mdiInboxMultiple" | "mdiInboxMultipleOutline" | "mdiInboxOutline" | "mdiInboxRemove" | "mdiInboxRemoveOutline" | "mdiIncognito" | "mdiIncognitoCircle" | "mdiIncognitoCircleOff" | "mdiIncognitoOff" | "mdiInduction" | "mdiInfinity" | "mdiInformation" | "mdiInformationBox" | "mdiInformationBoxOutline" | "mdiInformationOff" | "mdiInformationOffOutline" | "mdiInformationOutline" | "mdiInformationSlabBox" | "mdiInformationSlabBoxOutline" | "mdiInformationSlabCircle" | "mdiInformationSlabCircleOutline" | "mdiInformationSlabSymbol" | "mdiInformationSymbol" | "mdiInformationVariant" | "mdiInformationVariantBox" | "mdiInformationVariantBoxOutline" | "mdiInformationVariantCircle" | "mdiInformationVariantCircleOutline" | "mdiInstagram" | "mdiInstrumentTriangle" | "mdiIntegratedCircuitChip" | "mdiInvertColors" | "mdiInvertColorsOff" | "mdiInvoice" | "mdiInvoiceArrowLeft" | "mdiInvoiceArrowLeftOutline" | "mdiInvoiceArrowRight" | "mdiInvoiceArrowRightOutline" | "mdiInvoiceCheck" | "mdiInvoiceCheckOutline" | "mdiInvoiceClock" | "mdiInvoiceClockOutline" | "mdiInvoiceEdit" | "mdiInvoiceEditOutline" | "mdiInvoiceExportOutline" | "mdiInvoiceFast" | "mdiInvoiceFastOutline" | "mdiInvoiceImport" | "mdiInvoiceImportOutline" | "mdiInvoiceList" | "mdiInvoiceListOutline" | "mdiInvoiceMinus" | "mdiInvoiceMinusOutline" | "mdiInvoiceMultiple" | "mdiInvoiceMultipleOutline" | "mdiInvoiceOutline" | "mdiInvoicePlus" | "mdiInvoicePlusOutline" | "mdiInvoiceRemove" | "mdiInvoiceRemoveOutline" | "mdiInvoiceSend" | "mdiInvoiceSendOutline" | "mdiInvoiceText" | "mdiInvoiceTextArrowLeft" | "mdiInvoiceTextArrowLeftOutline" | "mdiInvoiceTextArrowRight" | "mdiInvoiceTextArrowRightOutline" | "mdiInvoiceTextCheck" | "mdiInvoiceTextCheckOutline" | "mdiInvoiceTextClock" | "mdiInvoiceTextClockOutline" | "mdiInvoiceTextEdit" | "mdiInvoiceTextEditOutline" | "mdiInvoiceTextFast" | "mdiInvoiceTextFastOutline" | "mdiInvoiceTextMinus" | "mdiInvoiceTextMinusOutline" | "mdiInvoiceTextMultiple" | "mdiInvoiceTextMultipleOutline" | "mdiInvoiceTextOutline" | "mdiInvoiceTextPlus" | "mdiInvoiceTextPlusOutline" | "mdiInvoiceTextRemove" | "mdiInvoiceTextRemoveOutline" | "mdiInvoiceTextSend" | "mdiInvoiceTextSendOutline" | "mdiIobroker" | "mdiIp" | "mdiIpNetwork" | "mdiIpNetworkOutline" | "mdiIpOutline" | "mdiIpod" | "mdiIron" | "mdiIronBoard" | "mdiIronOutline" | "mdiIsland" | "mdiIslandVariant" | "mdiIvBag" | "mdiJabber" | "mdiJeepney" | "mdiJellyfish" | "mdiJellyfishOutline" | "mdiJira" | "mdiJquery" | "mdiJsfiddle" | "mdiJumpRope" | "mdiKabaddi" | "mdiKangaroo" | "mdiKarate" | "mdiKayaking" | "mdiKeg" | "mdiKettle" | "mdiKettleAlert" | "mdiKettleAlertOutline" | "mdiKettleOff" | "mdiKettleOffOutline" | "mdiKettleOutline" | "mdiKettlePourOver" | "mdiKettleSteam" | "mdiKettleSteamOutline" | "mdiKettlebell" | "mdiKey" | "mdiKeyAlert" | "mdiKeyAlertOutline" | "mdiKeyArrowRight" | "mdiKeyChain" | "mdiKeyChainVariant" | "mdiKeyChange" | "mdiKeyLink" | "mdiKeyMinus" | "mdiKeyOutline" | "mdiKeyPlus" | "mdiKeyRemove" | "mdiKeyStar" | "mdiKeyVariant" | "mdiKeyWireless" | "mdiKeyboard" | "mdiKeyboardBackspace" | "mdiKeyboardCaps" | "mdiKeyboardClose" | "mdiKeyboardCloseOutline" | "mdiKeyboardEsc" | "mdiKeyboardF1" | "mdiKeyboardF10" | "mdiKeyboardF11" | "mdiKeyboardF12" | "mdiKeyboardF2" | "mdiKeyboardF3" | "mdiKeyboardF4" | "mdiKeyboardF5" | "mdiKeyboardF6" | "mdiKeyboardF7" | "mdiKeyboardF8" | "mdiKeyboardF9" | "mdiKeyboardOff" | "mdiKeyboardOffOutline" | "mdiKeyboardOutline" | "mdiKeyboardReturn" | "mdiKeyboardSettings" | "mdiKeyboardSettingsOutline" | "mdiKeyboardSpace" | "mdiKeyboardTab" | "mdiKeyboardTabReverse" | "mdiKeyboardVariant" | "mdiKhanda" | "mdiKickstarter" | "mdiKite" | "mdiKiteOutline" | "mdiKitesurfing" | "mdiKlingon" | "mdiKnife" | "mdiKnifeMilitary" | "mdiKnob" | "mdiKoala" | "mdiKodi" | "mdiKubernetes" | "mdiLabel" | "mdiLabelMultiple" | "mdiLabelMultipleOutline" | "mdiLabelOff" | "mdiLabelOffOutline" | "mdiLabelOutline" | "mdiLabelPercent" | "mdiLabelPercentOutline" | "mdiLabelVariant" | "mdiLabelVariantOutline" | "mdiLadder" | "mdiLadybug" | "mdiLambda" | "mdiLamp" | "mdiLampOutline" | "mdiLamps" | "mdiLampsOutline" | "mdiLan" | "mdiLanCheck" | "mdiLanConnect" | "mdiLanDisconnect" | "mdiLanPending" | "mdiLandFields" | "mdiLandPlots" | "mdiLandPlotsCircle" | "mdiLandPlotsCircleVariant" | "mdiLandPlotsMarker" | "mdiLandRowsHorizontal" | "mdiLandRowsVertical" | "mdiLandslide" | "mdiLandslideOutline" | "mdiLanguageC" | "mdiLanguageCpp" | "mdiLanguageCsharp" | "mdiLanguageCss3" | "mdiLanguageFortran" | "mdiLanguageGo" | "mdiLanguageHaskell" | "mdiLanguageHtml5" | "mdiLanguageJava" | "mdiLanguageJavascript" | "mdiLanguageKotlin" | "mdiLanguageLua" | "mdiLanguageMarkdown" | "mdiLanguageMarkdownOutline" | "mdiLanguagePhp" | "mdiLanguagePython" | "mdiLanguageR" | "mdiLanguageRuby" | "mdiLanguageRubyOnRails" | "mdiLanguageRust" | "mdiLanguageSwift" | "mdiLanguageTypescript" | "mdiLanguageXaml" | "mdiLaptop" | "mdiLaptopAccount" | "mdiLaptopOff" | "mdiLaravel" | "mdiLaserPointer" | "mdiLasso" | "mdiLastpass" | "mdiLatitude" | "mdiLaunch" | "mdiLavaLamp" | "mdiLayers" | "mdiLayersEdit" | "mdiLayersMinus" | "mdiLayersOff" | "mdiLayersOffOutline" | "mdiLayersOutline" | "mdiLayersPlus" | "mdiLayersRemove" | "mdiLayersSearch" | "mdiLayersSearchOutline" | "mdiLayersTriple" | "mdiLayersTripleOutline" | "mdiLeadPencil" | "mdiLeaf" | "mdiLeafCircle" | "mdiLeafCircleOutline" | "mdiLeafMaple" | "mdiLeafMapleOff" | "mdiLeafOff" | "mdiLeak" | "mdiLeakOff" | "mdiLectern" | "mdiLedOff" | "mdiLedOn" | "mdiLedOutline" | "mdiLedStrip" | "mdiLedStripVariant" | "mdiLedStripVariantOff" | "mdiLedVariantOff" | "mdiLedVariantOn" | "mdiLedVariantOutline" | "mdiLeek" | "mdiLessThan" | "mdiLessThanOrEqual" | "mdiLibrary" | "mdiLibraryOutline" | "mdiLibraryShelves" | "mdiLicense" | "mdiLifebuoy" | "mdiLightFloodDown" | "mdiLightFloodUp" | "mdiLightRecessed" | "mdiLightSwitch" | "mdiLightSwitchOff" | "mdiLightbulb" | "mdiLightbulbAlert" | "mdiLightbulbAlertOutline" | "mdiLightbulbAuto" | "mdiLightbulbAutoOutline" | "mdiLightbulbCfl" | "mdiLightbulbCflOff" | "mdiLightbulbCflSpiral" | "mdiLightbulbCflSpiralOff" | "mdiLightbulbFluorescentTube" | "mdiLightbulbFluorescentTubeOutline" | "mdiLightbulbGroup" | "mdiLightbulbGroupOff" | "mdiLightbulbGroupOffOutline" | "mdiLightbulbGroupOutline" | "mdiLightbulbMultiple" | "mdiLightbulbMultipleOff" | "mdiLightbulbMultipleOffOutline" | "mdiLightbulbMultipleOutline" | "mdiLightbulbNight" | "mdiLightbulbNightOutline" | "mdiLightbulbOff" | "mdiLightbulbOffOutline" | "mdiLightbulbOn" | "mdiLightbulbOn10" | "mdiLightbulbOn20" | "mdiLightbulbOn30" | "mdiLightbulbOn40" | "mdiLightbulbOn50" | "mdiLightbulbOn60" | "mdiLightbulbOn70" | "mdiLightbulbOn80" | "mdiLightbulbOn90" | "mdiLightbulbOnOutline" | "mdiLightbulbOutline" | "mdiLightbulbQuestion" | "mdiLightbulbQuestionOutline" | "mdiLightbulbSpot" | "mdiLightbulbSpotOff" | "mdiLightbulbVariant" | "mdiLightbulbVariantOutline" | "mdiLighthouse" | "mdiLighthouseOn" | "mdiLightningBolt" | "mdiLightningBoltCircle" | "mdiLightningBoltOutline" | "mdiLineScan" | "mdiLingerie" | "mdiLink" | "mdiLinkBox" | "mdiLinkBoxOutline" | "mdiLinkBoxVariant" | "mdiLinkBoxVariantOutline" | "mdiLinkCircle" | "mdiLinkCircleOutline" | "mdiLinkEdit" | "mdiLinkLock" | "mdiLinkOff" | "mdiLinkPlus" | "mdiLinkVariant" | "mdiLinkVariantMinus" | "mdiLinkVariantOff" | "mdiLinkVariantPlus" | "mdiLinkVariantRemove" | "mdiLinkedin" | "mdiLinux" | "mdiLinuxMint" | "mdiLipstick" | "mdiLiquidSpot" | "mdiLiquor" | "mdiListBox" | "mdiListBoxOutline" | "mdiListStatus" | "mdiLitecoin" | "mdiLoading" | "mdiLocationEnter" | "mdiLocationExit" | "mdiLock" | "mdiLockAlert" | "mdiLockAlertOutline" | "mdiLockCheck" | "mdiLockCheckOutline" | "mdiLockClock" | "mdiLockMinus" | "mdiLockMinusOutline" | "mdiLockOff" | "mdiLockOffOutline" | "mdiLockOpen" | "mdiLockOpenAlert" | "mdiLockOpenAlertOutline" | "mdiLockOpenCheck" | "mdiLockOpenCheckOutline" | "mdiLockOpenMinus" | "mdiLockOpenMinusOutline" | "mdiLockOpenOutline" | "mdiLockOpenPlus" | "mdiLockOpenPlusOutline" | "mdiLockOpenRemove" | "mdiLockOpenRemoveOutline" | "mdiLockOpenVariant" | "mdiLockOpenVariantOutline" | "mdiLockOutline" | "mdiLockPattern" | "mdiLockPercent" | "mdiLockPercentOpen" | "mdiLockPercentOpenOutline" | "mdiLockPercentOpenVariant" | "mdiLockPercentOpenVariantOutline" | "mdiLockPercentOutline" | "mdiLockPlus" | "mdiLockPlusOutline" | "mdiLockQuestion" | "mdiLockRemove" | "mdiLockRemoveOutline" | "mdiLockReset" | "mdiLockSmart" | "mdiLocker" | "mdiLockerMultiple" | "mdiLogin" | "mdiLoginVariant" | "mdiLogout" | "mdiLogoutVariant" | "mdiLongitude" | "mdiLooks" | "mdiLotion" | "mdiLotionOutline" | "mdiLotionPlus" | "mdiLotionPlusOutline" | "mdiLoupe" | "mdiLumx" | "mdiLungs" | "mdiMace" | "mdiMagazinePistol" | "mdiMagazineRifle" | "mdiMagicStaff" | "mdiMagnet" | "mdiMagnetOn" | "mdiMagnify" | "mdiMagnifyClose" | "mdiMagnifyExpand" | "mdiMagnifyMinus" | "mdiMagnifyMinusCursor" | "mdiMagnifyMinusOutline" | "mdiMagnifyPlus" | "mdiMagnifyPlusCursor" | "mdiMagnifyPlusOutline" | "mdiMagnifyRemoveCursor" | "mdiMagnifyRemoveOutline" | "mdiMagnifyScan" | "mdiMail" | "mdiMailbox" | "mdiMailboxOpen" | "mdiMailboxOpenOutline" | "mdiMailboxOpenUp" | "mdiMailboxOpenUpOutline" | "mdiMailboxOutline" | "mdiMailboxUp" | "mdiMailboxUpOutline" | "mdiManjaro" | "mdiMap" | "mdiMapCheck" | "mdiMapCheckOutline" | "mdiMapClock" | "mdiMapClockOutline" | "mdiMapLegend" | "mdiMapMarker" | "mdiMapMarkerAccount" | "mdiMapMarkerAccountOutline" | "mdiMapMarkerAlert" | "mdiMapMarkerAlertOutline" | "mdiMapMarkerCheck" | "mdiMapMarkerCheckOutline" | "mdiMapMarkerCircle" | "mdiMapMarkerDistance" | "mdiMapMarkerDown" | "mdiMapMarkerLeft" | "mdiMapMarkerLeftOutline" | "mdiMapMarkerMinus" | "mdiMapMarkerMinusOutline" | "mdiMapMarkerMultiple" | "mdiMapMarkerMultipleOutline" | "mdiMapMarkerOff" | "mdiMapMarkerOffOutline" | "mdiMapMarkerOutline" | "mdiMapMarkerPath" | "mdiMapMarkerPlus" | "mdiMapMarkerPlusOutline" | "mdiMapMarkerQuestion" | "mdiMapMarkerQuestionOutline" | "mdiMapMarkerRadius" | "mdiMapMarkerRadiusOutline" | "mdiMapMarkerRemove" | "mdiMapMarkerRemoveOutline" | "mdiMapMarkerRemoveVariant" | "mdiMapMarkerRight" | "mdiMapMarkerRightOutline" | "mdiMapMarkerStar" | "mdiMapMarkerStarOutline" | "mdiMapMarkerUp" | "mdiMapMinus" | "mdiMapOutline" | "mdiMapPlus" | "mdiMapSearch" | "mdiMapSearchOutline" | "mdiMapbox" | "mdiMargin" | "mdiMarker" | "mdiMarkerCancel" | "mdiMarkerCheck" | "mdiMastodon" | "mdiMaterialDesign" | "mdiMaterialUi" | "mdiMathCompass" | "mdiMathCos" | "mdiMathIntegral" | "mdiMathIntegralBox" | "mdiMathLog" | "mdiMathNorm" | "mdiMathNormBox" | "mdiMathSin" | "mdiMathTan" | "mdiMatrix" | "mdiMedal" | "mdiMedalOutline" | "mdiMedicalBag" | "mdiMedicalCottonSwab" | "mdiMedication" | "mdiMedicationOutline" | "mdiMeditation" | "mdiMemory" | "mdiMemoryArrowDown" | "mdiMenorah" | "mdiMenorahFire" | "mdiMenu" | "mdiMenuClose" | "mdiMenuDown" | "mdiMenuDownOutline" | "mdiMenuLeft" | "mdiMenuLeftOutline" | "mdiMenuOpen" | "mdiMenuRight" | "mdiMenuRightOutline" | "mdiMenuSwap" | "mdiMenuSwapOutline" | "mdiMenuUp" | "mdiMenuUpOutline" | "mdiMerge" | "mdiMessage" | "mdiMessageAlert" | "mdiMessageAlertOutline" | "mdiMessageArrowLeft" | "mdiMessageArrowLeftOutline" | "mdiMessageArrowRight" | "mdiMessageArrowRightOutline" | "mdiMessageBadge" | "mdiMessageBadgeOutline" | "mdiMessageBookmark" | "mdiMessageBookmarkOutline" | "mdiMessageBulleted" | "mdiMessageBulletedOff" | "mdiMessageCheck" | "mdiMessageCheckOutline" | "mdiMessageCog" | "mdiMessageCogOutline" | "mdiMessageDraw" | "mdiMessageFast" | "mdiMessageFastOutline" | "mdiMessageFlash" | "mdiMessageFlashOutline" | "mdiMessageImage" | "mdiMessageImageOutline" | "mdiMessageLock" | "mdiMessageLockOutline" | "mdiMessageMinus" | "mdiMessageMinusOutline" | "mdiMessageOff" | "mdiMessageOffOutline" | "mdiMessageOutline" | "mdiMessagePlus" | "mdiMessagePlusOutline" | "mdiMessageProcessing" | "mdiMessageProcessingOutline" | "mdiMessageQuestion" | "mdiMessageQuestionOutline" | "mdiMessageReply" | "mdiMessageReplyOutline" | "mdiMessageReplyText" | "mdiMessageReplyTextOutline" | "mdiMessageSettings" | "mdiMessageSettingsOutline" | "mdiMessageStar" | "mdiMessageStarOutline" | "mdiMessageText" | "mdiMessageTextClock" | "mdiMessageTextClockOutline" | "mdiMessageTextFast" | "mdiMessageTextFastOutline" | "mdiMessageTextLock" | "mdiMessageTextLockOutline" | "mdiMessageTextOutline" | "mdiMessageVideo" | "mdiMeteor" | "mdiMeterElectric" | "mdiMeterElectricOutline" | "mdiMeterGas" | "mdiMeterGasOutline" | "mdiMetronome" | "mdiMetronomeTick" | "mdiMicroSd" | "mdiMicrophone" | "mdiMicrophoneMessage" | "mdiMicrophoneMessageOff" | "mdiMicrophoneMinus" | "mdiMicrophoneOff" | "mdiMicrophoneOutline" | "mdiMicrophonePlus" | "mdiMicrophoneQuestion" | "mdiMicrophoneQuestionOutline" | "mdiMicrophoneSettings" | "mdiMicrophoneVariant" | "mdiMicrophoneVariantOff" | "mdiMicroscope" | "mdiMicrosoft" | "mdiMicrosoftAccess" | "mdiMicrosoftAzure" | "mdiMicrosoftAzureDevops" | "mdiMicrosoftBing" | "mdiMicrosoftDynamics365" | "mdiMicrosoftEdge" | "mdiMicrosoftExcel" | "mdiMicrosoftInternetExplorer" | "mdiMicrosoftOffice" | "mdiMicrosoftOnedrive" | "mdiMicrosoftOnenote" | "mdiMicrosoftOutlook" | "mdiMicrosoftPowerpoint" | "mdiMicrosoftSharepoint" | "mdiMicrosoftTeams" | "mdiMicrosoftVisualStudio" | "mdiMicrosoftVisualStudioCode" | "mdiMicrosoftWindows" | "mdiMicrosoftWindowsClassic" | "mdiMicrosoftWord" | "mdiMicrosoftXbox" | "mdiMicrosoftXboxController" | "mdiMicrosoftXboxControllerBatteryAlert" | "mdiMicrosoftXboxControllerBatteryCharging" | "mdiMicrosoftXboxControllerBatteryEmpty" | "mdiMicrosoftXboxControllerBatteryFull" | "mdiMicrosoftXboxControllerBatteryLow" | "mdiMicrosoftXboxControllerBatteryMedium" | "mdiMicrosoftXboxControllerBatteryUnknown" | "mdiMicrosoftXboxControllerMenu" | "mdiMicrosoftXboxControllerOff" | "mdiMicrosoftXboxControllerView" | "mdiMicrowave" | "mdiMicrowaveOff" | "mdiMiddleware" | "mdiMiddlewareOutline" | "mdiMidi" | "mdiMidiPort" | "mdiMine" | "mdiMinecraft" | "mdiMiniSd" | "mdiMinidisc" | "mdiMinus" | "mdiMinusBox" | "mdiMinusBoxMultiple" | "mdiMinusBoxMultipleOutline" | "mdiMinusBoxOutline" | "mdiMinusCircle" | "mdiMinusCircleMultiple" | "mdiMinusCircleMultipleOutline" | "mdiMinusCircleOff" | "mdiMinusCircleOffOutline" | "mdiMinusCircleOutline" | "mdiMinusNetwork" | "mdiMinusNetworkOutline" | "mdiMinusThick" | "mdiMirror" | "mdiMirrorRectangle" | "mdiMirrorVariant" | "mdiMixedMartialArts" | "mdiMixedReality" | "mdiMolecule" | "mdiMoleculeCo" | "mdiMoleculeCo2" | "mdiMonitor" | "mdiMonitorAccount" | "mdiMonitorArrowDown" | "mdiMonitorArrowDownVariant" | "mdiMonitorCellphone" | "mdiMonitorCellphoneStar" | "mdiMonitorDashboard" | "mdiMonitorEdit" | "mdiMonitorEye" | "mdiMonitorLock" | "mdiMonitorMultiple" | "mdiMonitorOff" | "mdiMonitorScreenshot" | "mdiMonitorShare" | "mdiMonitorShimmer" | "mdiMonitorSmall" | "mdiMonitorSpeaker" | "mdiMonitorSpeakerOff" | "mdiMonitorStar" | "mdiMonitorVertical" | "mdiMoonFirstQuarter" | "mdiMoonFull" | "mdiMoonLastQuarter" | "mdiMoonNew" | "mdiMoonWaningCrescent" | "mdiMoonWaningGibbous" | "mdiMoonWaxingCrescent" | "mdiMoonWaxingGibbous" | "mdiMoped" | "mdiMopedElectric" | "mdiMopedElectricOutline" | "mdiMopedOutline" | "mdiMore" | "mdiMortarPestle" | "mdiMortarPestlePlus" | "mdiMosque" | "mdiMosqueOutline" | "mdiMotherHeart" | "mdiMotherNurse" | "mdiMotion" | "mdiMotionOutline" | "mdiMotionPause" | "mdiMotionPauseOutline" | "mdiMotionPlay" | "mdiMotionPlayOutline" | "mdiMotionSensor" | "mdiMotionSensorOff" | "mdiMotorbike" | "mdiMotorbikeElectric" | "mdiMotorbikeOff" | "mdiMouse" | "mdiMouseBluetooth" | "mdiMouseLeftClick" | "mdiMouseLeftClickOutline" | "mdiMouseMoveDown" | "mdiMouseMoveUp" | "mdiMouseMoveVertical" | "mdiMouseOff" | "mdiMouseOutline" | "mdiMouseRightClick" | "mdiMouseRightClickOutline" | "mdiMouseScrollWheel" | "mdiMouseVariant" | "mdiMouseVariantOff" | "mdiMoveResize" | "mdiMoveResizeVariant" | "mdiMovie" | "mdiMovieCheck" | "mdiMovieCheckOutline" | "mdiMovieCog" | "mdiMovieCogOutline" | "mdiMovieEdit" | "mdiMovieEditOutline" | "mdiMovieFilter" | "mdiMovieFilterOutline" | "mdiMovieMinus" | "mdiMovieMinusOutline" | "mdiMovieOff" | "mdiMovieOffOutline" | "mdiMovieOpen" | "mdiMovieOpenCheck" | "mdiMovieOpenCheckOutline" | "mdiMovieOpenCog" | "mdiMovieOpenCogOutline" | "mdiMovieOpenEdit" | "mdiMovieOpenEditOutline" | "mdiMovieOpenMinus" | "mdiMovieOpenMinusOutline" | "mdiMovieOpenOff" | "mdiMovieOpenOffOutline" | "mdiMovieOpenOutline" | "mdiMovieOpenPlay" | "mdiMovieOpenPlayOutline" | "mdiMovieOpenPlus" | "mdiMovieOpenPlusOutline" | "mdiMovieOpenRemove" | "mdiMovieOpenRemoveOutline" | "mdiMovieOpenSettings" | "mdiMovieOpenSettingsOutline" | "mdiMovieOpenStar" | "mdiMovieOpenStarOutline" | "mdiMovieOutline" | "mdiMoviePlay" | "mdiMoviePlayOutline" | "mdiMoviePlus" | "mdiMoviePlusOutline" | "mdiMovieRemove" | "mdiMovieRemoveOutline" | "mdiMovieRoll" | "mdiMovieSearch" | "mdiMovieSearchOutline" | "mdiMovieSettings" | "mdiMovieSettingsOutline" | "mdiMovieStar" | "mdiMovieStarOutline" | "mdiMower" | "mdiMowerBag" | "mdiMowerBagOn" | "mdiMowerOn" | "mdiMuffin" | "mdiMulticast" | "mdiMultimedia" | "mdiMultiplication" | "mdiMultiplicationBox" | "mdiMushroom" | "mdiMushroomOff" | "mdiMushroomOffOutline" | "mdiMushroomOutline" | "mdiMusic" | "mdiMusicAccidentalDoubleFlat" | "mdiMusicAccidentalDoubleSharp" | "mdiMusicAccidentalFlat" | "mdiMusicAccidentalNatural" | "mdiMusicAccidentalSharp" | "mdiMusicBox" | "mdiMusicBoxMultiple" | "mdiMusicBoxMultipleOutline" | "mdiMusicBoxOutline" | "mdiMusicCircle" | "mdiMusicCircleOutline" | "mdiMusicClefAlto" | "mdiMusicClefBass" | "mdiMusicClefTreble" | "mdiMusicNote" | "mdiMusicNoteBluetooth" | "mdiMusicNoteBluetoothOff" | "mdiMusicNoteEighth" | "mdiMusicNoteEighthDotted" | "mdiMusicNoteHalf" | "mdiMusicNoteHalfDotted" | "mdiMusicNoteMinus" | "mdiMusicNoteOff" | "mdiMusicNoteOffOutline" | "mdiMusicNoteOutline" | "mdiMusicNotePlus" | "mdiMusicNoteQuarter" | "mdiMusicNoteQuarterDotted" | "mdiMusicNoteSixteenth" | "mdiMusicNoteSixteenthDotted" | "mdiMusicNoteWhole" | "mdiMusicNoteWholeDotted" | "mdiMusicOff" | "mdiMusicRestEighth" | "mdiMusicRestHalf" | "mdiMusicRestQuarter" | "mdiMusicRestSixteenth" | "mdiMusicRestWhole" | "mdiMustache" | "mdiNail" | "mdiNas" | "mdiNativescript" | "mdiNature" | "mdiNatureOutline" | "mdiNaturePeople" | "mdiNaturePeopleOutline" | "mdiNavigation" | "mdiNavigationOutline" | "mdiNavigationVariant" | "mdiNavigationVariantOutline" | "mdiNearMe" | "mdiNecklace" | "mdiNeedle" | "mdiNeedleOff" | "mdiNetflix" | "mdiNetwork" | "mdiNetworkOff" | "mdiNetworkOffOutline" | "mdiNetworkOutline" | "mdiNetworkPos" | "mdiNetworkStrength1" | "mdiNetworkStrength1Alert" | "mdiNetworkStrength2" | "mdiNetworkStrength2Alert" | "mdiNetworkStrength3" | "mdiNetworkStrength3Alert" | "mdiNetworkStrength4" | "mdiNetworkStrength4Alert" | "mdiNetworkStrength4Cog" | "mdiNetworkStrengthOff" | "mdiNetworkStrengthOffOutline" | "mdiNetworkStrengthOutline" | "mdiNewBox" | "mdiNewspaper" | "mdiNewspaperCheck" | "mdiNewspaperMinus" | "mdiNewspaperPlus" | "mdiNewspaperRemove" | "mdiNewspaperVariant" | "mdiNewspaperVariantMultiple" | "mdiNewspaperVariantMultipleOutline" | "mdiNewspaperVariantOutline" | "mdiNfc" | "mdiNfcSearchVariant" | "mdiNfcTap" | "mdiNfcVariant" | "mdiNfcVariantOff" | "mdiNinja" | "mdiNintendoGameBoy" | "mdiNintendoSwitch" | "mdiNintendoWii" | "mdiNintendoWiiu" | "mdiNix" | "mdiNodejs" | "mdiNoodles" | "mdiNotEqual" | "mdiNotEqualVariant" | "mdiNote" | "mdiNoteAlert" | "mdiNoteAlertOutline" | "mdiNoteCheck" | "mdiNoteCheckOutline" | "mdiNoteEdit" | "mdiNoteEditOutline" | "mdiNoteMinus" | "mdiNoteMinusOutline" | "mdiNoteMultiple" | "mdiNoteMultipleOutline" | "mdiNoteOff" | "mdiNoteOffOutline" | "mdiNoteOutline" | "mdiNotePlus" | "mdiNotePlusOutline" | "mdiNoteRemove" | "mdiNoteRemoveOutline" | "mdiNoteSearch" | "mdiNoteSearchOutline" | "mdiNoteText" | "mdiNoteTextOutline" | "mdiNotebook" | "mdiNotebookCheck" | "mdiNotebookCheckOutline" | "mdiNotebookEdit" | "mdiNotebookEditOutline" | "mdiNotebookHeart" | "mdiNotebookHeartOutline" | "mdiNotebookMinus" | "mdiNotebookMinusOutline" | "mdiNotebookMultiple" | "mdiNotebookOutline" | "mdiNotebookPlus" | "mdiNotebookPlusOutline" | "mdiNotebookRemove" | "mdiNotebookRemoveOutline" | "mdiNotificationClearAll" | "mdiNpm" | "mdiNuke" | "mdiNull" | "mdiNumeric" | "mdiNumeric0" | "mdiNumeric0Box" | "mdiNumeric0BoxMultiple" | "mdiNumeric0BoxMultipleOutline" | "mdiNumeric0BoxOutline" | "mdiNumeric0Circle" | "mdiNumeric0CircleOutline" | "mdiNumeric1" | "mdiNumeric1Box" | "mdiNumeric1BoxMultiple" | "mdiNumeric1BoxMultipleOutline" | "mdiNumeric1BoxOutline" | "mdiNumeric1Circle" | "mdiNumeric1CircleOutline" | "mdiNumeric10" | "mdiNumeric10Box" | "mdiNumeric10BoxMultiple" | "mdiNumeric10BoxMultipleOutline" | "mdiNumeric10BoxOutline" | "mdiNumeric10Circle" | "mdiNumeric10CircleOutline" | "mdiNumeric2" | "mdiNumeric2Box" | "mdiNumeric2BoxMultiple" | "mdiNumeric2BoxMultipleOutline" | "mdiNumeric2BoxOutline" | "mdiNumeric2Circle" | "mdiNumeric2CircleOutline" | "mdiNumeric3" | "mdiNumeric3Box" | "mdiNumeric3BoxMultiple" | "mdiNumeric3BoxMultipleOutline" | "mdiNumeric3BoxOutline" | "mdiNumeric3Circle" | "mdiNumeric3CircleOutline" | "mdiNumeric4" | "mdiNumeric4Box" | "mdiNumeric4BoxMultiple" | "mdiNumeric4BoxMultipleOutline" | "mdiNumeric4BoxOutline" | "mdiNumeric4Circle" | "mdiNumeric4CircleOutline" | "mdiNumeric5" | "mdiNumeric5Box" | "mdiNumeric5BoxMultiple" | "mdiNumeric5BoxMultipleOutline" | "mdiNumeric5BoxOutline" | "mdiNumeric5Circle" | "mdiNumeric5CircleOutline" | "mdiNumeric6" | "mdiNumeric6Box" | "mdiNumeric6BoxMultiple" | "mdiNumeric6BoxMultipleOutline" | "mdiNumeric6BoxOutline" | "mdiNumeric6Circle" | "mdiNumeric6CircleOutline" | "mdiNumeric7" | "mdiNumeric7Box" | "mdiNumeric7BoxMultiple" | "mdiNumeric7BoxMultipleOutline" | "mdiNumeric7BoxOutline" | "mdiNumeric7Circle" | "mdiNumeric7CircleOutline" | "mdiNumeric8" | "mdiNumeric8Box" | "mdiNumeric8BoxMultiple" | "mdiNumeric8BoxMultipleOutline" | "mdiNumeric8BoxOutline" | "mdiNumeric8Circle" | "mdiNumeric8CircleOutline" | "mdiNumeric9" | "mdiNumeric9Box" | "mdiNumeric9BoxMultiple" | "mdiNumeric9BoxMultipleOutline" | "mdiNumeric9BoxOutline" | "mdiNumeric9Circle" | "mdiNumeric9CircleOutline" | "mdiNumeric9Plus" | "mdiNumeric9PlusBox" | "mdiNumeric9PlusBoxMultiple" | "mdiNumeric9PlusBoxMultipleOutline" | "mdiNumeric9PlusBoxOutline" | "mdiNumeric9PlusCircle" | "mdiNumeric9PlusCircleOutline" | "mdiNumericNegative1" | "mdiNumericOff" | "mdiNumericPositive1" | "mdiNut" | "mdiNutrition" | "mdiNuxt" | "mdiOar" | "mdiOcarina" | "mdiOci" | "mdiOcr" | "mdiOctagon" | "mdiOctagonOutline" | "mdiOctagram" | "mdiOctagramEdit" | "mdiOctagramEditOutline" | "mdiOctagramMinus" | "mdiOctagramMinusOutline" | "mdiOctagramOutline" | "mdiOctagramPlus" | "mdiOctagramPlusOutline" | "mdiOctahedron" | "mdiOctahedronOff" | "mdiOdnoklassniki" | "mdiOffer" | "mdiOfficeBuilding" | "mdiOfficeBuildingCog" | "mdiOfficeBuildingCogOutline" | "mdiOfficeBuildingMarker" | "mdiOfficeBuildingMarkerOutline" | "mdiOfficeBuildingMinus" | "mdiOfficeBuildingMinusOutline" | "mdiOfficeBuildingOutline" | "mdiOfficeBuildingPlus" | "mdiOfficeBuildingPlusOutline" | "mdiOfficeBuildingRemove" | "mdiOfficeBuildingRemoveOutline" | "mdiOil" | "mdiOilLamp" | "mdiOilLevel" | "mdiOilTemperature" | "mdiOm" | "mdiOmega" | "mdiOneUp" | "mdiOnepassword" | "mdiOpacity" | "mdiOpenInApp" | "mdiOpenInNew" | "mdiOpenSourceInitiative" | "mdiOpenid" | "mdiOpera" | "mdiOrbit" | "mdiOrbitVariant" | "mdiOrderAlphabeticalAscending" | "mdiOrderAlphabeticalDescending" | "mdiOrderBoolAscending" | "mdiOrderBoolAscendingVariant" | "mdiOrderBoolDescending" | "mdiOrderBoolDescendingVariant" | "mdiOrderNumericAscending" | "mdiOrderNumericDescending" | "mdiOrigin" | "mdiOrnament" | "mdiOrnamentVariant" | "mdiOutdoorLamp" | "mdiOverscan" | "mdiOwl" | "mdiPacMan" | "mdiPackage" | "mdiPackageCheck" | "mdiPackageDown" | "mdiPackageUp" | "mdiPackageVariant" | "mdiPackageVariantClosed" | "mdiPackageVariantClosedCheck" | "mdiPackageVariantClosedMinus" | "mdiPackageVariantClosedPlus" | "mdiPackageVariantClosedRemove" | "mdiPackageVariantMinus" | "mdiPackageVariantPlus" | "mdiPackageVariantRemove" | "mdiPageFirst" | "mdiPageLast" | "mdiPageLayoutBody" | "mdiPageLayoutFooter" | "mdiPageLayoutHeader" | "mdiPageLayoutHeaderFooter" | "mdiPageLayoutSidebarLeft" | "mdiPageLayoutSidebarRight" | "mdiPageNext" | "mdiPageNextOutline" | "mdiPagePrevious" | "mdiPagePreviousOutline" | "mdiPail" | "mdiPailMinus" | "mdiPailMinusOutline" | "mdiPailOff" | "mdiPailOffOutline" | "mdiPailOutline" | "mdiPailPlus" | "mdiPailPlusOutline" | "mdiPailRemove" | "mdiPailRemoveOutline" | "mdiPalette" | "mdiPaletteAdvanced" | "mdiPaletteOutline" | "mdiPaletteSwatch" | "mdiPaletteSwatchOutline" | "mdiPaletteSwatchVariant" | "mdiPalmTree" | "mdiPan" | "mdiPanBottomLeft" | "mdiPanBottomRight" | "mdiPanDown" | "mdiPanHorizontal" | "mdiPanLeft" | "mdiPanRight" | "mdiPanTopLeft" | "mdiPanTopRight" | "mdiPanUp" | "mdiPanVertical" | "mdiPanda" | "mdiPandora" | "mdiPanorama" | "mdiPanoramaFisheye" | "mdiPanoramaHorizontal" | "mdiPanoramaHorizontalOutline" | "mdiPanoramaOutline" | "mdiPanoramaSphere" | "mdiPanoramaSphereOutline" | "mdiPanoramaVariant" | "mdiPanoramaVariantOutline" | "mdiPanoramaVertical" | "mdiPanoramaVerticalOutline" | "mdiPanoramaWideAngle" | "mdiPanoramaWideAngleOutline" | "mdiPaperCutVertical" | "mdiPaperRoll" | "mdiPaperRollOutline" | "mdiPaperclip" | "mdiPaperclipCheck" | "mdiPaperclipLock" | "mdiPaperclipMinus" | "mdiPaperclipOff" | "mdiPaperclipPlus" | "mdiPaperclipRemove" | "mdiParachute" | "mdiParachuteOutline" | "mdiParagliding" | "mdiParking" | "mdiPartyPopper" | "mdiPassport" | "mdiPassportAlert" | "mdiPassportBiometric" | "mdiPassportCancel" | "mdiPassportCheck" | "mdiPassportMinus" | "mdiPassportPlus" | "mdiPassportRemove" | "mdiPasta" | "mdiPatioHeater" | "mdiPatreon" | "mdiPause" | "mdiPauseBox" | "mdiPauseBoxOutline" | "mdiPauseCircle" | "mdiPauseCircleOutline" | "mdiPauseOctagon" | "mdiPauseOctagonOutline" | "mdiPaw" | "mdiPawOff" | "mdiPawOffOutline" | "mdiPawOutline" | "mdiPeace" | "mdiPeanut" | "mdiPeanutOff" | "mdiPeanutOffOutline" | "mdiPeanutOutline" | "mdiPen" | "mdiPenLock" | "mdiPenMinus" | "mdiPenOff" | "mdiPenPlus" | "mdiPenRemove" | "mdiPencil" | "mdiPencilBox" | "mdiPencilBoxMultiple" | "mdiPencilBoxMultipleOutline" | "mdiPencilBoxOutline" | "mdiPencilCircle" | "mdiPencilCircleOutline" | "mdiPencilLock" | "mdiPencilLockOutline" | "mdiPencilMinus" | "mdiPencilMinusOutline" | "mdiPencilOff" | "mdiPencilOffOutline" | "mdiPencilOutline" | "mdiPencilPlus" | "mdiPencilPlusOutline" | "mdiPencilRemove" | "mdiPencilRemoveOutline" | "mdiPencilRuler" | "mdiPencilRulerOutline" | "mdiPenguin" | "mdiPentagon" | "mdiPentagonOutline" | "mdiPentagram" | "mdiPercent" | "mdiPercentBox" | "mdiPercentBoxOutline" | "mdiPercentCircle" | "mdiPercentCircleOutline" | "mdiPercentOutline" | "mdiPeriodicTable" | "mdiPerspectiveLess" | "mdiPerspectiveMore" | "mdiPh" | "mdiPhone" | "mdiPhoneAlert" | "mdiPhoneAlertOutline" | "mdiPhoneBluetooth" | "mdiPhoneBluetoothOutline" | "mdiPhoneCancel" | "mdiPhoneCancelOutline" | "mdiPhoneCheck" | "mdiPhoneCheckOutline" | "mdiPhoneClassic" | "mdiPhoneClassicOff" | "mdiPhoneClock" | "mdiPhoneDial" | "mdiPhoneDialOutline" | "mdiPhoneForward" | "mdiPhoneForwardOutline" | "mdiPhoneHangup" | "mdiPhoneHangupOutline" | "mdiPhoneInTalk" | "mdiPhoneInTalkOutline" | "mdiPhoneIncoming" | "mdiPhoneIncomingOutgoing" | "mdiPhoneIncomingOutgoingOutline" | "mdiPhoneIncomingOutline" | "mdiPhoneLock" | "mdiPhoneLockOutline" | "mdiPhoneLog" | "mdiPhoneLogOutline" | "mdiPhoneMessage" | "mdiPhoneMessageOutline" | "mdiPhoneMinus" | "mdiPhoneMinusOutline" | "mdiPhoneMissed" | "mdiPhoneMissedOutline" | "mdiPhoneOff" | "mdiPhoneOffOutline" | "mdiPhoneOutgoing" | "mdiPhoneOutgoingOutline" | "mdiPhoneOutline" | "mdiPhonePaused" | "mdiPhonePausedOutline" | "mdiPhonePlus" | "mdiPhonePlusOutline" | "mdiPhoneRefresh" | "mdiPhoneRefreshOutline" | "mdiPhoneRemove" | "mdiPhoneRemoveOutline" | "mdiPhoneReturn" | "mdiPhoneReturnOutline" | "mdiPhoneRing" | "mdiPhoneRingOutline" | "mdiPhoneRotateLandscape" | "mdiPhoneRotatePortrait" | "mdiPhoneSettings" | "mdiPhoneSettingsOutline" | "mdiPhoneSync" | "mdiPhoneSyncOutline" | "mdiPhoneVoip" | "mdiPi" | "mdiPiBox" | "mdiPiHole" | "mdiPiano" | "mdiPianoOff" | "mdiPickaxe" | "mdiPictureInPictureBottomRight" | "mdiPictureInPictureBottomRightOutline" | "mdiPictureInPictureTopRight" | "mdiPictureInPictureTopRightOutline" | "mdiPier" | "mdiPierCrane" | "mdiPig" | "mdiPigVariant" | "mdiPigVariantOutline" | "mdiPiggyBank" | "mdiPiggyBankOutline" | "mdiPill" | "mdiPillMultiple" | "mdiPillOff" | "mdiPillar" | "mdiPin" | "mdiPinOff" | "mdiPinOffOutline" | "mdiPinOutline" | "mdiPineTree" | "mdiPineTreeBox" | "mdiPineTreeFire" | "mdiPineTreeVariant" | "mdiPineTreeVariantOutline" | "mdiPinterest" | "mdiPinwheel" | "mdiPinwheelOutline" | "mdiPipe" | "mdiPipeDisconnected" | "mdiPipeLeak" | "mdiPipeValve" | "mdiPipeWrench" | "mdiPirate" | "mdiPistol" | "mdiPiston" | "mdiPitchfork" | "mdiPizza" | "mdiPlaneCar" | "mdiPlaneTrain" | "mdiPlay" | "mdiPlayBox" | "mdiPlayBoxEditOutline" | "mdiPlayBoxLock" | "mdiPlayBoxLockOpen" | "mdiPlayBoxLockOpenOutline" | "mdiPlayBoxLockOutline" | "mdiPlayBoxMultiple" | "mdiPlayBoxMultipleOutline" | "mdiPlayBoxOutline" | "mdiPlayCircle" | "mdiPlayCircleOutline" | "mdiPlayNetwork" | "mdiPlayNetworkOutline" | "mdiPlayOutline" | "mdiPlayPause" | "mdiPlayProtectedContent" | "mdiPlaySpeed" | "mdiPlaylistCheck" | "mdiPlaylistEdit" | "mdiPlaylistMinus" | "mdiPlaylistMusic" | "mdiPlaylistMusicOutline" | "mdiPlaylistPlay" | "mdiPlaylistPlus" | "mdiPlaylistRemove" | "mdiPlaylistStar" | "mdiPlex" | "mdiPliers" | "mdiPlus" | "mdiPlusBox" | "mdiPlusBoxMultiple" | "mdiPlusBoxMultipleOutline" | "mdiPlusBoxOutline" | "mdiPlusCircle" | "mdiPlusCircleMultiple" | "mdiPlusCircleMultipleOutline" | "mdiPlusCircleOutline" | "mdiPlusLock" | "mdiPlusLockOpen" | "mdiPlusMinus" | "mdiPlusMinusBox" | "mdiPlusMinusVariant" | "mdiPlusNetwork" | "mdiPlusNetworkOutline" | "mdiPlusOutline" | "mdiPlusThick" | "mdiPocket" | "mdiPodcast" | "mdiPodium" | "mdiPodiumBronze" | "mdiPodiumGold" | "mdiPodiumSilver" | "mdiPointOfSale" | "mdiPokeball" | "mdiPokemonGo" | "mdiPokerChip" | "mdiPolaroid" | "mdiPoliceBadge" | "mdiPoliceBadgeOutline" | "mdiPoliceStation" | "mdiPoll" | "mdiPolo" | "mdiPolymer" | "mdiPool" | "mdiPoolThermometer" | "mdiPopcorn" | "mdiPost" | "mdiPostLamp" | "mdiPostOutline" | "mdiPostageStamp" | "mdiPot" | "mdiPotMix" | "mdiPotMixOutline" | "mdiPotOutline" | "mdiPotSteam" | "mdiPotSteamOutline" | "mdiPound" | "mdiPoundBox" | "mdiPoundBoxOutline" | "mdiPower" | "mdiPowerCycle" | "mdiPowerOff" | "mdiPowerOn" | "mdiPowerPlug" | "mdiPowerPlugBattery" | "mdiPowerPlugBatteryOutline" | "mdiPowerPlugOff" | "mdiPowerPlugOffOutline" | "mdiPowerPlugOutline" | "mdiPowerSettings" | "mdiPowerSleep" | "mdiPowerSocket" | "mdiPowerSocketAu" | "mdiPowerSocketCh" | "mdiPowerSocketDe" | "mdiPowerSocketEu" | "mdiPowerSocketFr" | "mdiPowerSocketIt" | "mdiPowerSocketJp" | "mdiPowerSocketUk" | "mdiPowerSocketUs" | "mdiPowerStandby" | "mdiPowershell" | "mdiPrescription" | "mdiPresentation" | "mdiPresentationPlay" | "mdiPretzel" | "mdiPrinter" | "mdiPrinter3d" | "mdiPrinter3dNozzle" | "mdiPrinter3dNozzleAlert" | "mdiPrinter3dNozzleAlertOutline" | "mdiPrinter3dNozzleHeat" | "mdiPrinter3dNozzleHeatOutline" | "mdiPrinter3dNozzleOff" | "mdiPrinter3dNozzleOffOutline" | "mdiPrinter3dNozzleOutline" | "mdiPrinter3dOff" | "mdiPrinterAlert" | "mdiPrinterCheck" | "mdiPrinterEye" | "mdiPrinterOff" | "mdiPrinterOffOutline" | "mdiPrinterOutline" | "mdiPrinterPos" | "mdiPrinterPosAlert" | "mdiPrinterPosAlertOutline" | "mdiPrinterPosCancel" | "mdiPrinterPosCancelOutline" | "mdiPrinterPosCheck" | "mdiPrinterPosCheckOutline" | "mdiPrinterPosCog" | "mdiPrinterPosCogOutline" | "mdiPrinterPosEdit" | "mdiPrinterPosEditOutline" | "mdiPrinterPosMinus" | "mdiPrinterPosMinusOutline" | "mdiPrinterPosNetwork" | "mdiPrinterPosNetworkOutline" | "mdiPrinterPosOff" | "mdiPrinterPosOffOutline" | "mdiPrinterPosOutline" | "mdiPrinterPosPause" | "mdiPrinterPosPauseOutline" | "mdiPrinterPosPlay" | "mdiPrinterPosPlayOutline" | "mdiPrinterPosPlus" | "mdiPrinterPosPlusOutline" | "mdiPrinterPosRefresh" | "mdiPrinterPosRefreshOutline" | "mdiPrinterPosRemove" | "mdiPrinterPosRemoveOutline" | "mdiPrinterPosStar" | "mdiPrinterPosStarOutline" | "mdiPrinterPosStop" | "mdiPrinterPosStopOutline" | "mdiPrinterPosSync" | "mdiPrinterPosSyncOutline" | "mdiPrinterPosWrench" | "mdiPrinterPosWrenchOutline" | "mdiPrinterSearch" | "mdiPrinterSettings" | "mdiPrinterWireless" | "mdiPriorityHigh" | "mdiPriorityLow" | "mdiProfessionalHexagon" | "mdiProgressAlert" | "mdiProgressCheck" | "mdiProgressClock" | "mdiProgressClose" | "mdiProgressDownload" | "mdiProgressHelper" | "mdiProgressPencil" | "mdiProgressQuestion" | "mdiProgressStar" | "mdiProgressStarFourPoints" | "mdiProgressTag" | "mdiProgressUpload" | "mdiProgressWrench" | "mdiProjector" | "mdiProjectorOff" | "mdiProjectorScreen" | "mdiProjectorScreenOff" | "mdiProjectorScreenOffOutline" | "mdiProjectorScreenOutline" | "mdiProjectorScreenVariant" | "mdiProjectorScreenVariantOff" | "mdiProjectorScreenVariantOffOutline" | "mdiProjectorScreenVariantOutline" | "mdiPropaneTank" | "mdiPropaneTankOutline" | "mdiProtocol" | "mdiPublish" | "mdiPublishOff" | "mdiPulse" | "mdiPump" | "mdiPumpOff" | "mdiPumpkin" | "mdiPurse" | "mdiPurseOutline" | "mdiPuzzle" | "mdiPuzzleCheck" | "mdiPuzzleCheckOutline" | "mdiPuzzleEdit" | "mdiPuzzleEditOutline" | "mdiPuzzleHeart" | "mdiPuzzleHeartOutline" | "mdiPuzzleMinus" | "mdiPuzzleMinusOutline" | "mdiPuzzleOutline" | "mdiPuzzlePlus" | "mdiPuzzlePlusOutline" | "mdiPuzzleRemove" | "mdiPuzzleRemoveOutline" | "mdiPuzzleStar" | "mdiPuzzleStarOutline" | "mdiPyramid" | "mdiPyramidOff" | "mdiQi" | "mdiQqchat" | "mdiQrcode" | "mdiQrcodeEdit" | "mdiQrcodeMinus" | "mdiQrcodePlus" | "mdiQrcodeRemove" | "mdiQrcodeScan" | "mdiQuadcopter" | "mdiQualityHigh" | "mdiQualityLow" | "mdiQualityMedium" | "mdiQueueFirstInLastOut" | "mdiQuora" | "mdiRabbit" | "mdiRabbitVariant" | "mdiRabbitVariantOutline" | "mdiRacingHelmet" | "mdiRacquetball" | "mdiRadar" | "mdiRadiator" | "mdiRadiatorDisabled" | "mdiRadiatorOff" | "mdiRadio" | "mdiRadioAm" | "mdiRadioFm" | "mdiRadioHandheld" | "mdiRadioOff" | "mdiRadioTower" | "mdiRadioactive" | "mdiRadioactiveCircle" | "mdiRadioactiveCircleOutline" | "mdiRadioactiveOff" | "mdiRadioboxBlank" | "mdiRadioboxIndeterminateVariant" | "mdiRadioboxMarked" | "mdiRadiologyBox" | "mdiRadiologyBoxOutline" | "mdiRadius" | "mdiRadiusOutline" | "mdiRailroadLight" | "mdiRake" | "mdiRaspberryPi" | "mdiRaw" | "mdiRawOff" | "mdiRayEnd" | "mdiRayEndArrow" | "mdiRayStart" | "mdiRayStartArrow" | "mdiRayStartEnd" | "mdiRayStartVertexEnd" | "mdiRayVertex" | "mdiRazorDoubleEdge" | "mdiRazorSingleEdge" | "mdiReact" | "mdiRead" | "mdiReceipt" | "mdiReceiptClock" | "mdiReceiptClockOutline" | "mdiReceiptOutline" | "mdiReceiptSend" | "mdiReceiptSendOutline" | "mdiReceiptText" | "mdiReceiptTextArrowLeft" | "mdiReceiptTextArrowLeftOutline" | "mdiReceiptTextArrowRight" | "mdiReceiptTextArrowRightOutline" | "mdiReceiptTextCheck" | "mdiReceiptTextCheckOutline" | "mdiReceiptTextClock" | "mdiReceiptTextClockOutline" | "mdiReceiptTextEdit" | "mdiReceiptTextEditOutline" | "mdiReceiptTextMinus" | "mdiReceiptTextMinusOutline" | "mdiReceiptTextOutline" | "mdiReceiptTextPlus" | "mdiReceiptTextPlusOutline" | "mdiReceiptTextRemove" | "mdiReceiptTextRemoveOutline" | "mdiReceiptTextSend" | "mdiReceiptTextSendOutline" | "mdiRecord" | "mdiRecordCircle" | "mdiRecordCircleOutline" | "mdiRecordPlayer" | "mdiRecordRec" | "mdiRectangle" | "mdiRectangleOutline" | "mdiRecycle" | "mdiRecycleVariant" | "mdiReddit" | "mdiRedhat" | "mdiRedo" | "mdiRedoVariant" | "mdiReflectHorizontal" | "mdiReflectVertical" | "mdiRefresh" | "mdiRefreshAuto" | "mdiRefreshCircle" | "mdiRegex" | "mdiRegisteredTrademark" | "mdiReiterate" | "mdiRelationManyToMany" | "mdiRelationManyToOne" | "mdiRelationManyToOneOrMany" | "mdiRelationManyToOnlyOne" | "mdiRelationManyToZeroOrMany" | "mdiRelationManyToZeroOrOne" | "mdiRelationOneOrManyToMany" | "mdiRelationOneOrManyToOne" | "mdiRelationOneOrManyToOneOrMany" | "mdiRelationOneOrManyToOnlyOne" | "mdiRelationOneOrManyToZeroOrMany" | "mdiRelationOneOrManyToZeroOrOne" | "mdiRelationOneToMany" | "mdiRelationOneToOne" | "mdiRelationOneToOneOrMany" | "mdiRelationOneToOnlyOne" | "mdiRelationOneToZeroOrMany" | "mdiRelationOneToZeroOrOne" | "mdiRelationOnlyOneToMany" | "mdiRelationOnlyOneToOne" | "mdiRelationOnlyOneToOneOrMany" | "mdiRelationOnlyOneToOnlyOne" | "mdiRelationOnlyOneToZeroOrMany" | "mdiRelationOnlyOneToZeroOrOne" | "mdiRelationZeroOrManyToMany" | "mdiRelationZeroOrManyToOne" | "mdiRelationZeroOrManyToOneOrMany" | "mdiRelationZeroOrManyToOnlyOne" | "mdiRelationZeroOrManyToZeroOrMany" | "mdiRelationZeroOrManyToZeroOrOne" | "mdiRelationZeroOrOneToMany" | "mdiRelationZeroOrOneToOne" | "mdiRelationZeroOrOneToOneOrMany" | "mdiRelationZeroOrOneToOnlyOne" | "mdiRelationZeroOrOneToZeroOrMany" | "mdiRelationZeroOrOneToZeroOrOne" | "mdiRelativeScale" | "mdiReload" | "mdiReloadAlert" | "mdiReminder" | "mdiRemote" | "mdiRemoteDesktop" | "mdiRemoteOff" | "mdiRemoteTv" | "mdiRemoteTvOff" | "mdiRename" | "mdiRenameBox" | "mdiRenameBoxOutline" | "mdiRenameOutline" | "mdiReorderHorizontal" | "mdiReorderVertical" | "mdiRepeat" | "mdiRepeatOff" | "mdiRepeatOnce" | "mdiRepeatVariant" | "mdiReplay" | "mdiReply" | "mdiReplyAll" | "mdiReplyAllOutline" | "mdiReplyCircle" | "mdiReplyOutline" | "mdiReproduction" | "mdiResistor" | "mdiResistorNodes" | "mdiResize" | "mdiResizeBottomRight" | "mdiResponsive" | "mdiRestart" | "mdiRestartAlert" | "mdiRestartOff" | "mdiRestore" | "mdiRestoreAlert" | "mdiRewind" | "mdiRewind10" | "mdiRewind15" | "mdiRewind30" | "mdiRewind45" | "mdiRewind5" | "mdiRewind60" | "mdiRewindOutline" | "mdiRhombus" | "mdiRhombusMedium" | "mdiRhombusMediumOutline" | "mdiRhombusOutline" | "mdiRhombusSplit" | "mdiRhombusSplitOutline" | "mdiRibbon" | "mdiRice" | "mdiRickshaw" | "mdiRickshawElectric" | "mdiRing" | "mdiRivet" | "mdiRoad" | "mdiRoadVariant" | "mdiRobber" | "mdiRobot" | "mdiRobotAngry" | "mdiRobotAngryOutline" | "mdiRobotConfused" | "mdiRobotConfusedOutline" | "mdiRobotDead" | "mdiRobotDeadOutline" | "mdiRobotExcited" | "mdiRobotExcitedOutline" | "mdiRobotHappy" | "mdiRobotHappyOutline" | "mdiRobotIndustrial" | "mdiRobotIndustrialOutline" | "mdiRobotLove" | "mdiRobotLoveOutline" | "mdiRobotMower" | "mdiRobotMowerOutline" | "mdiRobotOff" | "mdiRobotOffOutline" | "mdiRobotOutline" | "mdiRobotVacuum" | "mdiRobotVacuumAlert" | "mdiRobotVacuumOff" | "mdiRobotVacuumVariant" | "mdiRobotVacuumVariantAlert" | "mdiRobotVacuumVariantOff" | "mdiRocket" | "mdiRocketLaunch" | "mdiRocketLaunchOutline" | "mdiRocketOutline" | "mdiRodent" | "mdiRollerShade" | "mdiRollerShadeClosed" | "mdiRollerSkate" | "mdiRollerSkateOff" | "mdiRollerblade" | "mdiRollerbladeOff" | "mdiRollupjs" | "mdiRolodex" | "mdiRolodexOutline" | "mdiRomanNumeral1" | "mdiRomanNumeral10" | "mdiRomanNumeral2" | "mdiRomanNumeral3" | "mdiRomanNumeral4" | "mdiRomanNumeral5" | "mdiRomanNumeral6" | "mdiRomanNumeral7" | "mdiRomanNumeral8" | "mdiRomanNumeral9" | "mdiRoomService" | "mdiRoomServiceOutline" | "mdiRotate360" | "mdiRotate3d" | "mdiRotate3dVariant" | "mdiRotateLeft" | "mdiRotateLeftVariant" | "mdiRotateOrbit" | "mdiRotateRight" | "mdiRotateRightVariant" | "mdiRoundedCorner" | "mdiRouter" | "mdiRouterNetwork" | "mdiRouterNetworkWireless" | "mdiRouterWireless" | "mdiRouterWirelessOff" | "mdiRouterWirelessSettings" | "mdiRoutes" | "mdiRoutesClock" | "mdiRowing" | "mdiRss" | "mdiRssBox" | "mdiRssOff" | "mdiRug" | "mdiRugby" | "mdiRuler" | "mdiRulerSquare" | "mdiRulerSquareCompass" | "mdiRun" | "mdiRunFast" | "mdiRvTruck" | "mdiSack" | "mdiSackOutline" | "mdiSackPercent" | "mdiSafe" | "mdiSafeSquare" | "mdiSafeSquareOutline" | "mdiSafetyGoggles" | "mdiSailBoat" | "mdiSailBoatSink" | "mdiSale" | "mdiSaleOutline" | "mdiSalesforce" | "mdiSass" | "mdiSatellite" | "mdiSatelliteUplink" | "mdiSatelliteVariant" | "mdiSausage" | "mdiSausageOff" | "mdiSawBlade" | "mdiSawtoothWave" | "mdiSaxophone" | "mdiScale" | "mdiScaleBalance" | "mdiScaleBathroom" | "mdiScaleOff" | "mdiScaleUnbalanced" | "mdiScanHelper" | "mdiScanner" | "mdiScannerOff" | "mdiScatterPlot" | "mdiScatterPlotOutline" | "mdiScent" | "mdiScentOff" | "mdiSchool" | "mdiSchoolOutline" | "mdiScissorsCutting" | "mdiScooter" | "mdiScooterElectric" | "mdiScoreboard" | "mdiScoreboardOutline" | "mdiScreenRotation" | "mdiScreenRotationLock" | "mdiScrewFlatTop" | "mdiScrewLag" | "mdiScrewMachineFlatTop" | "mdiScrewMachineRoundTop" | "mdiScrewRoundTop" | "mdiScrewdriver" | "mdiScript" | "mdiScriptOutline" | "mdiScriptText" | "mdiScriptTextKey" | "mdiScriptTextKeyOutline" | "mdiScriptTextOutline" | "mdiScriptTextPlay" | "mdiScriptTextPlayOutline" | "mdiSd" | "mdiSeal" | "mdiSealVariant" | "mdiSearchWeb" | "mdiSeat" | "mdiSeatFlat" | "mdiSeatFlatAngled" | "mdiSeatIndividualSuite" | "mdiSeatLegroomExtra" | "mdiSeatLegroomNormal" | "mdiSeatLegroomReduced" | "mdiSeatOutline" | "mdiSeatPassenger" | "mdiSeatReclineExtra" | "mdiSeatReclineNormal" | "mdiSeatbelt" | "mdiSecurity" | "mdiSecurityNetwork" | "mdiSeed" | "mdiSeedOff" | "mdiSeedOffOutline" | "mdiSeedOutline" | "mdiSeedPlus" | "mdiSeedPlusOutline" | "mdiSeesaw" | "mdiSegment" | "mdiSelect" | "mdiSelectAll" | "mdiSelectArrowDown" | "mdiSelectArrowUp" | "mdiSelectColor" | "mdiSelectCompare" | "mdiSelectDrag" | "mdiSelectGroup" | "mdiSelectInverse" | "mdiSelectMarker" | "mdiSelectMultiple" | "mdiSelectMultipleMarker" | "mdiSelectOff" | "mdiSelectPlace" | "mdiSelectRemove" | "mdiSelectSearch" | "mdiSelection" | "mdiSelectionDrag" | "mdiSelectionEllipse" | "mdiSelectionEllipseArrowInside" | "mdiSelectionEllipseRemove" | "mdiSelectionMarker" | "mdiSelectionMultiple" | "mdiSelectionMultipleMarker" | "mdiSelectionOff" | "mdiSelectionRemove" | "mdiSelectionSearch" | "mdiSemanticWeb" | "mdiSend" | "mdiSendCheck" | "mdiSendCheckOutline" | "mdiSendCircle" | "mdiSendCircleOutline" | "mdiSendClock" | "mdiSendClockOutline" | "mdiSendLock" | "mdiSendLockOutline" | "mdiSendOutline" | "mdiSendVariant" | "mdiSendVariantClock" | "mdiSendVariantClockOutline" | "mdiSendVariantOutline" | "mdiSerialPort" | "mdiServer" | "mdiServerMinus" | "mdiServerMinusOutline" | "mdiServerNetwork" | "mdiServerNetworkOff" | "mdiServerNetworkOutline" | "mdiServerOff" | "mdiServerOutline" | "mdiServerPlus" | "mdiServerPlusOutline" | "mdiServerRemove" | "mdiServerSecurity" | "mdiSetAll" | "mdiSetCenter" | "mdiSetCenterRight" | "mdiSetLeft" | "mdiSetLeftCenter" | "mdiSetLeftRight" | "mdiSetMerge" | "mdiSetNone" | "mdiSetRight" | "mdiSetSplit" | "mdiSetSquare" | "mdiSetTopBox" | "mdiSettingsHelper" | "mdiShaker" | "mdiShakerOutline" | "mdiShape" | "mdiShapeCirclePlus" | "mdiShapeOutline" | "mdiShapeOvalPlus" | "mdiShapePlus" | "mdiShapePlusOutline" | "mdiShapePolygonPlus" | "mdiShapeRectanglePlus" | "mdiShapeSquarePlus" | "mdiShapeSquareRoundedPlus" | "mdiShare" | "mdiShareAll" | "mdiShareAllOutline" | "mdiShareCircle" | "mdiShareOff" | "mdiShareOffOutline" | "mdiShareOutline" | "mdiShareVariant" | "mdiShareVariantOutline" | "mdiShark" | "mdiSharkFin" | "mdiSharkFinOutline" | "mdiSharkOff" | "mdiSheep" | "mdiShield" | "mdiShieldAccount" | "mdiShieldAccountOutline" | "mdiShieldAccountVariant" | "mdiShieldAccountVariantOutline" | "mdiShieldAirplane" | "mdiShieldAirplaneOutline" | "mdiShieldAlert" | "mdiShieldAlertOutline" | "mdiShieldBug" | "mdiShieldBugOutline" | "mdiShieldCar" | "mdiShieldCheck" | "mdiShieldCheckOutline" | "mdiShieldCross" | "mdiShieldCrossOutline" | "mdiShieldCrown" | "mdiShieldCrownOutline" | "mdiShieldEdit" | "mdiShieldEditOutline" | "mdiShieldHalf" | "mdiShieldHalfFull" | "mdiShieldHome" | "mdiShieldHomeOutline" | "mdiShieldKey" | "mdiShieldKeyOutline" | "mdiShieldLinkVariant" | "mdiShieldLinkVariantOutline" | "mdiShieldLock" | "mdiShieldLockOpen" | "mdiShieldLockOpenOutline" | "mdiShieldLockOutline" | "mdiShieldMoon" | "mdiShieldMoonOutline" | "mdiShieldOff" | "mdiShieldOffOutline" | "mdiShieldOutline" | "mdiShieldPlus" | "mdiShieldPlusOutline" | "mdiShieldRefresh" | "mdiShieldRefreshOutline" | "mdiShieldRemove" | "mdiShieldRemoveOutline" | "mdiShieldSearch" | "mdiShieldStar" | "mdiShieldStarOutline" | "mdiShieldSun" | "mdiShieldSunOutline" | "mdiShieldSword" | "mdiShieldSwordOutline" | "mdiShieldSync" | "mdiShieldSyncOutline" | "mdiShimmer" | "mdiShipWheel" | "mdiShippingPallet" | "mdiShoeBallet" | "mdiShoeCleat" | "mdiShoeFormal" | "mdiShoeHeel" | "mdiShoePrint" | "mdiShoeSneaker" | "mdiShopping" | "mdiShoppingMusic" | "mdiShoppingOutline" | "mdiShoppingSearch" | "mdiShoppingSearchOutline" | "mdiShore" | "mdiShovel" | "mdiShovelOff" | "mdiShower" | "mdiShowerHead" | "mdiShredder" | "mdiShuffle" | "mdiShuffleDisabled" | "mdiShuffleVariant" | "mdiShuriken" | "mdiSickle" | "mdiSigma" | "mdiSigmaLower" | "mdiSignCaution" | "mdiSignDirection" | "mdiSignDirectionMinus" | "mdiSignDirectionPlus" | "mdiSignDirectionRemove" | "mdiSignLanguage" | "mdiSignLanguageOutline" | "mdiSignPole" | "mdiSignRealEstate" | "mdiSignText" | "mdiSignYield" | "mdiSignal" | "mdiSignal2g" | "mdiSignal3g" | "mdiSignal4g" | "mdiSignal5g" | "mdiSignalCellular1" | "mdiSignalCellular2" | "mdiSignalCellular3" | "mdiSignalCellularOutline" | "mdiSignalDistanceVariant" | "mdiSignalHspa" | "mdiSignalHspaPlus" | "mdiSignalOff" | "mdiSignalVariant" | "mdiSignature" | "mdiSignatureFreehand" | "mdiSignatureImage" | "mdiSignatureText" | "mdiSilo" | "mdiSiloOutline" | "mdiSilverware" | "mdiSilverwareClean" | "mdiSilverwareFork" | "mdiSilverwareForkKnife" | "mdiSilverwareSpoon" | "mdiSilverwareVariant" | "mdiSim" | "mdiSimAlert" | "mdiSimAlertOutline" | "mdiSimOff" | "mdiSimOffOutline" | "mdiSimOutline" | "mdiSimpleIcons" | "mdiSinaWeibo" | "mdiSineWave" | "mdiSitemap" | "mdiSitemapOutline" | "mdiSizeL" | "mdiSizeM" | "mdiSizeS" | "mdiSizeXl" | "mdiSizeXs" | "mdiSizeXxl" | "mdiSizeXxs" | "mdiSizeXxxl" | "mdiSkate" | "mdiSkateOff" | "mdiSkateboard" | "mdiSkateboarding" | "mdiSkewLess" | "mdiSkewMore" | "mdiSki" | "mdiSkiCrossCountry" | "mdiSkiWater" | "mdiSkipBackward" | "mdiSkipBackwardOutline" | "mdiSkipForward" | "mdiSkipForwardOutline" | "mdiSkipNext" | "mdiSkipNextCircle" | "mdiSkipNextCircleOutline" | "mdiSkipNextOutline" | "mdiSkipPrevious" | "mdiSkipPreviousCircle" | "mdiSkipPreviousCircleOutline" | "mdiSkipPreviousOutline" | "mdiSkull" | "mdiSkullCrossbones" | "mdiSkullCrossbonesOutline" | "mdiSkullOutline" | "mdiSkullScan" | "mdiSkullScanOutline" | "mdiSkype" | "mdiSkypeBusiness" | "mdiSlack" | "mdiSlashForward" | "mdiSlashForwardBox" | "mdiSledding" | "mdiSleep" | "mdiSleepOff" | "mdiSlide" | "mdiSlopeDownhill" | "mdiSlopeUphill" | "mdiSlotMachine" | "mdiSlotMachineOutline" | "mdiSmartCard" | "mdiSmartCardOff" | "mdiSmartCardOffOutline" | "mdiSmartCardOutline" | "mdiSmartCardReader" | "mdiSmartCardReaderOutline" | "mdiSmog" | "mdiSmoke" | "mdiSmokeDetector" | "mdiSmokeDetectorAlert" | "mdiSmokeDetectorAlertOutline" | "mdiSmokeDetectorOff" | "mdiSmokeDetectorOffOutline" | "mdiSmokeDetectorOutline" | "mdiSmokeDetectorVariant" | "mdiSmokeDetectorVariantAlert" | "mdiSmokeDetectorVariantOff" | "mdiSmoking" | "mdiSmokingOff" | "mdiSmokingPipe" | "mdiSmokingPipeOff" | "mdiSnail" | "mdiSnake" | "mdiSnapchat" | "mdiSnowboard" | "mdiSnowflake" | "mdiSnowflakeAlert" | "mdiSnowflakeCheck" | "mdiSnowflakeMelt" | "mdiSnowflakeOff" | "mdiSnowflakeThermometer" | "mdiSnowflakeVariant" | "mdiSnowman" | "mdiSnowmobile" | "mdiSnowshoeing" | "mdiSoccer" | "mdiSoccerField" | "mdiSocialDistance2Meters" | "mdiSocialDistance6Feet" | "mdiSofa" | "mdiSofaOutline" | "mdiSofaSingle" | "mdiSofaSingleOutline" | "mdiSolarPanel" | "mdiSolarPanelLarge" | "mdiSolarPower" | "mdiSolarPowerVariant" | "mdiSolarPowerVariantOutline" | "mdiSolderingIron" | "mdiSolid" | "mdiSonyPlaystation" | "mdiSort" | "mdiSortAlphabeticalAscending" | "mdiSortAlphabeticalAscendingVariant" | "mdiSortAlphabeticalDescending" | "mdiSortAlphabeticalDescendingVariant" | "mdiSortAlphabeticalVariant" | "mdiSortAscending" | "mdiSortBoolAscending" | "mdiSortBoolAscendingVariant" | "mdiSortBoolDescending" | "mdiSortBoolDescendingVariant" | "mdiSortCalendarAscending" | "mdiSortCalendarDescending" | "mdiSortClockAscending" | "mdiSortClockAscendingOutline" | "mdiSortClockDescending" | "mdiSortClockDescendingOutline" | "mdiSortDescending" | "mdiSortNumericAscending" | "mdiSortNumericAscendingVariant" | "mdiSortNumericDescending" | "mdiSortNumericDescendingVariant" | "mdiSortNumericVariant" | "mdiSortReverseVariant" | "mdiSortVariant" | "mdiSortVariantLock" | "mdiSortVariantLockOpen" | "mdiSortVariantOff" | "mdiSortVariantRemove" | "mdiSoundbar" | "mdiSoundcloud" | "mdiSourceBranch" | "mdiSourceBranchCheck" | "mdiSourceBranchMinus" | "mdiSourceBranchPlus" | "mdiSourceBranchRefresh" | "mdiSourceBranchRemove" | "mdiSourceBranchSync" | "mdiSourceCommit" | "mdiSourceCommitEnd" | "mdiSourceCommitEndLocal" | "mdiSourceCommitLocal" | "mdiSourceCommitNextLocal" | "mdiSourceCommitStart" | "mdiSourceCommitStartNextLocal" | "mdiSourceFork" | "mdiSourceMerge" | "mdiSourcePull" | "mdiSourceRepository" | "mdiSourceRepositoryMultiple" | "mdiSoySauce" | "mdiSoySauceOff" | "mdiSpa" | "mdiSpaOutline" | "mdiSpaceInvaders" | "mdiSpaceStation" | "mdiSpade" | "mdiSpeaker" | "mdiSpeakerBluetooth" | "mdiSpeakerMessage" | "mdiSpeakerMultiple" | "mdiSpeakerOff" | "mdiSpeakerPause" | "mdiSpeakerPlay" | "mdiSpeakerStop" | "mdiSpeakerWireless" | "mdiSpear" | "mdiSpeedometer" | "mdiSpeedometerMedium" | "mdiSpeedometerSlow" | "mdiSpellcheck" | "mdiSphere" | "mdiSphereOff" | "mdiSpider" | "mdiSpiderOutline" | "mdiSpiderThread" | "mdiSpiderWeb" | "mdiSpiritLevel" | "mdiSpoonSugar" | "mdiSpotify" | "mdiSpotlight" | "mdiSpotlightBeam" | "mdiSpray" | "mdiSprayBottle" | "mdiSprinkler" | "mdiSprinklerFire" | "mdiSprinklerVariant" | "mdiSprout" | "mdiSproutOutline" | "mdiSquare" | "mdiSquareCircle" | "mdiSquareCircleOutline" | "mdiSquareEditOutline" | "mdiSquareMedium" | "mdiSquareMediumOutline" | "mdiSquareOff" | "mdiSquareOffOutline" | "mdiSquareOpacity" | "mdiSquareOutline" | "mdiSquareRoot" | "mdiSquareRootBox" | "mdiSquareRounded" | "mdiSquareRoundedBadge" | "mdiSquareRoundedBadgeOutline" | "mdiSquareRoundedOutline" | "mdiSquareSmall" | "mdiSquareWave" | "mdiSqueegee" | "mdiSsh" | "mdiStackExchange" | "mdiStackOverflow" | "mdiStackpath" | "mdiStadium" | "mdiStadiumOutline" | "mdiStadiumVariant" | "mdiStairs" | "mdiStairsBox" | "mdiStairsDown" | "mdiStairsUp" | "mdiStamper" | "mdiStandardDefinition" | "mdiStar" | "mdiStarBox" | "mdiStarBoxMultiple" | "mdiStarBoxMultipleOutline" | "mdiStarBoxOutline" | "mdiStarCheck" | "mdiStarCheckOutline" | "mdiStarCircle" | "mdiStarCircleOutline" | "mdiStarCog" | "mdiStarCogOutline" | "mdiStarCrescent" | "mdiStarDavid" | "mdiStarFace" | "mdiStarFourPoints" | "mdiStarFourPointsBox" | "mdiStarFourPointsBoxOutline" | "mdiStarFourPointsCircle" | "mdiStarFourPointsCircleOutline" | "mdiStarFourPointsOutline" | "mdiStarFourPointsSmall" | "mdiStarHalf" | "mdiStarHalfFull" | "mdiStarMinus" | "mdiStarMinusOutline" | "mdiStarOff" | "mdiStarOffOutline" | "mdiStarOutline" | "mdiStarPlus" | "mdiStarPlusOutline" | "mdiStarRemove" | "mdiStarRemoveOutline" | "mdiStarSettings" | "mdiStarSettingsOutline" | "mdiStarShooting" | "mdiStarShootingOutline" | "mdiStarThreePoints" | "mdiStarThreePointsOutline" | "mdiStateMachine" | "mdiSteam" | "mdiSteering" | "mdiSteeringOff" | "mdiStepBackward" | "mdiStepBackward2" | "mdiStepForward" | "mdiStepForward2" | "mdiStethoscope" | "mdiSticker" | "mdiStickerAlert" | "mdiStickerAlertOutline" | "mdiStickerCheck" | "mdiStickerCheckOutline" | "mdiStickerCircleOutline" | "mdiStickerEmoji" | "mdiStickerMinus" | "mdiStickerMinusOutline" | "mdiStickerOutline" | "mdiStickerPlus" | "mdiStickerPlusOutline" | "mdiStickerRemove" | "mdiStickerRemoveOutline" | "mdiStickerText" | "mdiStickerTextOutline" | "mdiStocking" | "mdiStomach" | "mdiStool" | "mdiStoolOutline" | "mdiStop" | "mdiStopCircle" | "mdiStopCircleOutline" | "mdiStorageTank" | "mdiStorageTankOutline" | "mdiStore" | "mdiStore24Hour" | "mdiStoreAlert" | "mdiStoreAlertOutline" | "mdiStoreCheck" | "mdiStoreCheckOutline" | "mdiStoreClock" | "mdiStoreClockOutline" | "mdiStoreCog" | "mdiStoreCogOutline" | "mdiStoreEdit" | "mdiStoreEditOutline" | "mdiStoreMarker" | "mdiStoreMarkerOutline" | "mdiStoreMinus" | "mdiStoreMinusOutline" | "mdiStoreOff" | "mdiStoreOffOutline" | "mdiStoreOutline" | "mdiStorePlus" | "mdiStorePlusOutline" | "mdiStoreRemove" | "mdiStoreRemoveOutline" | "mdiStoreSearch" | "mdiStoreSearchOutline" | "mdiStoreSettings" | "mdiStoreSettingsOutline" | "mdiStorefront" | "mdiStorefrontCheck" | "mdiStorefrontCheckOutline" | "mdiStorefrontEdit" | "mdiStorefrontEditOutline" | "mdiStorefrontMinus" | "mdiStorefrontMinusOutline" | "mdiStorefrontOutline" | "mdiStorefrontPlus" | "mdiStorefrontPlusOutline" | "mdiStorefrontRemove" | "mdiStorefrontRemoveOutline" | "mdiStove" | "mdiStrategy" | "mdiStretchToPage" | "mdiStretchToPageOutline" | "mdiStringLights" | "mdiStringLightsOff" | "mdiSubdirectoryArrowLeft" | "mdiSubdirectoryArrowRight" | "mdiSubmarine" | "mdiSubtitles" | "mdiSubtitlesOutline" | "mdiSubway" | "mdiSubwayAlertVariant" | "mdiSubwayVariant" | "mdiSummit" | "mdiSunAngle" | "mdiSunAngleOutline" | "mdiSunClock" | "mdiSunClockOutline" | "mdiSunCompass" | "mdiSunSnowflake" | "mdiSunSnowflakeVariant" | "mdiSunThermometer" | "mdiSunThermometerOutline" | "mdiSunWireless" | "mdiSunWirelessOutline" | "mdiSunglasses" | "mdiSurfing" | "mdiSurroundSound" | "mdiSurroundSound20" | "mdiSurroundSound21" | "mdiSurroundSound31" | "mdiSurroundSound51" | "mdiSurroundSound512" | "mdiSurroundSound71" | "mdiSvg" | "mdiSwapHorizontal" | "mdiSwapHorizontalBold" | "mdiSwapHorizontalCircle" | "mdiSwapHorizontalCircleOutline" | "mdiSwapHorizontalHidden" | "mdiSwapHorizontalVariant" | "mdiSwapVertical" | "mdiSwapVerticalBold" | "mdiSwapVerticalCircle" | "mdiSwapVerticalCircleOutline" | "mdiSwapVerticalVariant" | "mdiSwim" | "mdiSwitch" | "mdiSword" | "mdiSwordCross" | "mdiSyllabaryHangul" | "mdiSyllabaryHiragana" | "mdiSyllabaryKatakana" | "mdiSyllabaryKatakanaHalfwidth" | "mdiSymbol" | "mdiSymfony" | "mdiSynagogue" | "mdiSynagogueOutline" | "mdiSync" | "mdiSyncAlert" | "mdiSyncCircle" | "mdiSyncOff" | "mdiTab" | "mdiTabMinus" | "mdiTabPlus" | "mdiTabRemove" | "mdiTabSearch" | "mdiTabUnselected" | "mdiTable" | "mdiTableAccount" | "mdiTableAlert" | "mdiTableArrowDown" | "mdiTableArrowLeft" | "mdiTableArrowRight" | "mdiTableArrowUp" | "mdiTableBorder" | "mdiTableCancel" | "mdiTableChair" | "mdiTableCheck" | "mdiTableClock" | "mdiTableCog" | "mdiTableColumn" | "mdiTableColumnPlusAfter" | "mdiTableColumnPlusBefore" | "mdiTableColumnRemove" | "mdiTableColumnWidth" | "mdiTableEdit" | "mdiTableEye" | "mdiTableEyeOff" | "mdiTableFilter" | "mdiTableFurniture" | "mdiTableHeadersEye" | "mdiTableHeadersEyeOff" | "mdiTableHeart" | "mdiTableKey" | "mdiTableLarge" | "mdiTableLargePlus" | "mdiTableLargeRemove" | "mdiTableLock" | "mdiTableMergeCells" | "mdiTableMinus" | "mdiTableMultiple" | "mdiTableNetwork" | "mdiTableOfContents" | "mdiTableOff" | "mdiTablePicnic" | "mdiTablePivot" | "mdiTablePlus" | "mdiTableQuestion" | "mdiTableRefresh" | "mdiTableRemove" | "mdiTableRow" | "mdiTableRowHeight" | "mdiTableRowPlusAfter" | "mdiTableRowPlusBefore" | "mdiTableRowRemove" | "mdiTableSearch" | "mdiTableSettings" | "mdiTableSplitCell" | "mdiTableStar" | "mdiTableSync" | "mdiTableTennis" | "mdiTablet" | "mdiTabletCellphone" | "mdiTabletDashboard" | "mdiTaco" | "mdiTag" | "mdiTagArrowDown" | "mdiTagArrowDownOutline" | "mdiTagArrowLeft" | "mdiTagArrowLeftOutline" | "mdiTagArrowRight" | "mdiTagArrowRightOutline" | "mdiTagArrowUp" | "mdiTagArrowUpOutline" | "mdiTagCheck" | "mdiTagCheckOutline" | "mdiTagEdit" | "mdiTagEditOutline" | "mdiTagFaces" | "mdiTagHeart" | "mdiTagHeartOutline" | "mdiTagHidden" | "mdiTagMinus" | "mdiTagMinusOutline" | "mdiTagMultiple" | "mdiTagMultipleOutline" | "mdiTagOff" | "mdiTagOffOutline" | "mdiTagOutline" | "mdiTagPlus" | "mdiTagPlusOutline" | "mdiTagRemove" | "mdiTagRemoveOutline" | "mdiTagSearch" | "mdiTagSearchOutline" | "mdiTagText" | "mdiTagTextOutline" | "mdiTailwind" | "mdiTallyMark1" | "mdiTallyMark2" | "mdiTallyMark3" | "mdiTallyMark4" | "mdiTallyMark5" | "mdiTangram" | "mdiTank" | "mdiTankerTruck" | "mdiTapeDrive" | "mdiTapeMeasure" | "mdiTarget" | "mdiTargetAccount" | "mdiTargetVariant" | "mdiTaxi" | "mdiTea" | "mdiTeaOutline" | "mdiTeamviewer" | "mdiTeddyBear" | "mdiTelescope" | "mdiTelevision" | "mdiTelevisionAmbientLight" | "mdiTelevisionBox" | "mdiTelevisionClassic" | "mdiTelevisionClassicOff" | "mdiTelevisionGuide" | "mdiTelevisionOff" | "mdiTelevisionPause" | "mdiTelevisionPlay" | "mdiTelevisionShimmer" | "mdiTelevisionSpeaker" | "mdiTelevisionSpeakerOff" | "mdiTelevisionStop" | "mdiTemperatureCelsius" | "mdiTemperatureFahrenheit" | "mdiTemperatureKelvin" | "mdiTempleBuddhist" | "mdiTempleBuddhistOutline" | "mdiTempleHindu" | "mdiTempleHinduOutline" | "mdiTennis" | "mdiTennisBall" | "mdiTennisBallOutline" | "mdiTent" | "mdiTerraform" | "mdiTerrain" | "mdiTestTube" | "mdiTestTubeEmpty" | "mdiTestTubeOff" | "mdiText" | "mdiTextAccount" | "mdiTextBox" | "mdiTextBoxCheck" | "mdiTextBoxCheckOutline" | "mdiTextBoxEdit" | "mdiTextBoxEditOutline" | "mdiTextBoxMinus" | "mdiTextBoxMinusOutline" | "mdiTextBoxMultiple" | "mdiTextBoxMultipleOutline" | "mdiTextBoxOutline" | "mdiTextBoxPlus" | "mdiTextBoxPlusOutline" | "mdiTextBoxRemove" | "mdiTextBoxRemoveOutline" | "mdiTextBoxSearch" | "mdiTextBoxSearchOutline" | "mdiTextLong" | "mdiTextRecognition" | "mdiTextSearch" | "mdiTextSearchVariant" | "mdiTextShadow" | "mdiTextShort" | "mdiTexture" | "mdiTextureBox" | "mdiTheater" | "mdiThemeLightDark" | "mdiThermometer" | "mdiThermometerAlert" | "mdiThermometerAuto" | "mdiThermometerBluetooth" | "mdiThermometerCheck" | "mdiThermometerChevronDown" | "mdiThermometerChevronUp" | "mdiThermometerHigh" | "mdiThermometerLines" | "mdiThermometerLow" | "mdiThermometerMinus" | "mdiThermometerOff" | "mdiThermometerPlus" | "mdiThermometerProbe" | "mdiThermometerProbeOff" | "mdiThermometerWater" | "mdiThermostat" | "mdiThermostatAuto" | "mdiThermostatBox" | "mdiThermostatBoxAuto" | "mdiThermostatCog" | "mdiThoughtBubble" | "mdiThoughtBubbleOutline" | "mdiThumbDown" | "mdiThumbDownOutline" | "mdiThumbUp" | "mdiThumbUpOutline" | "mdiThumbsUpDown" | "mdiThumbsUpDownOutline" | "mdiTicket" | "mdiTicketAccount" | "mdiTicketConfirmation" | "mdiTicketConfirmationOutline" | "mdiTicketOutline" | "mdiTicketPercent" | "mdiTicketPercentOutline" | "mdiTie" | "mdiTilde" | "mdiTildeOff" | "mdiTimelapse" | "mdiTimeline" | "mdiTimelineAlert" | "mdiTimelineAlertOutline" | "mdiTimelineCheck" | "mdiTimelineCheckOutline" | "mdiTimelineClock" | "mdiTimelineClockOutline" | "mdiTimelineMinus" | "mdiTimelineMinusOutline" | "mdiTimelineOutline" | "mdiTimelinePlus" | "mdiTimelinePlusOutline" | "mdiTimelineQuestion" | "mdiTimelineQuestionOutline" | "mdiTimelineRemove" | "mdiTimelineRemoveOutline" | "mdiTimelineText" | "mdiTimelineTextOutline" | "mdiTimer" | "mdiTimer10" | "mdiTimer3" | "mdiTimerAlert" | "mdiTimerAlertOutline" | "mdiTimerCancel" | "mdiTimerCancelOutline" | "mdiTimerCheck" | "mdiTimerCheckOutline" | "mdiTimerCog" | "mdiTimerCogOutline" | "mdiTimerEdit" | "mdiTimerEditOutline" | "mdiTimerLock" | "mdiTimerLockOpen" | "mdiTimerLockOpenOutline" | "mdiTimerLockOutline" | "mdiTimerMarker" | "mdiTimerMarkerOutline" | "mdiTimerMinus" | "mdiTimerMinusOutline" | "mdiTimerMusic" | "mdiTimerMusicOutline" | "mdiTimerOff" | "mdiTimerOffOutline" | "mdiTimerOutline" | "mdiTimerPause" | "mdiTimerPauseOutline" | "mdiTimerPlay" | "mdiTimerPlayOutline" | "mdiTimerPlus" | "mdiTimerPlusOutline" | "mdiTimerRefresh" | "mdiTimerRefreshOutline" | "mdiTimerRemove" | "mdiTimerRemoveOutline" | "mdiTimerSand" | "mdiTimerSandComplete" | "mdiTimerSandEmpty" | "mdiTimerSandFull" | "mdiTimerSandPaused" | "mdiTimerSettings" | "mdiTimerSettingsOutline" | "mdiTimerStar" | "mdiTimerStarOutline" | "mdiTimerStop" | "mdiTimerStopOutline" | "mdiTimerSync" | "mdiTimerSyncOutline" | "mdiTimetable" | "mdiTire" | "mdiToaster" | "mdiToasterOff" | "mdiToasterOven" | "mdiToggleSwitch" | "mdiToggleSwitchOff" | "mdiToggleSwitchOffOutline" | "mdiToggleSwitchOutline" | "mdiToggleSwitchVariant" | "mdiToggleSwitchVariantOff" | "mdiToilet" | "mdiToolbox" | "mdiToolboxOutline" | "mdiTools" | "mdiTooltip" | "mdiTooltipAccount" | "mdiTooltipCellphone" | "mdiTooltipCheck" | "mdiTooltipCheckOutline" | "mdiTooltipEdit" | "mdiTooltipEditOutline" | "mdiTooltipImage" | "mdiTooltipImageOutline" | "mdiTooltipMinus" | "mdiTooltipMinusOutline" | "mdiTooltipOutline" | "mdiTooltipPlus" | "mdiTooltipPlusOutline" | "mdiTooltipQuestion" | "mdiTooltipQuestionOutline" | "mdiTooltipRemove" | "mdiTooltipRemoveOutline" | "mdiTooltipText" | "mdiTooltipTextOutline" | "mdiTooth" | "mdiToothOutline" | "mdiToothbrush" | "mdiToothbrushElectric" | "mdiToothbrushPaste" | "mdiTorch" | "mdiTortoise" | "mdiToslink" | "mdiTouchTextOutline" | "mdiTournament" | "mdiTowTruck" | "mdiTowerBeach" | "mdiTowerFire" | "mdiTownHall" | "mdiToyBrick" | "mdiToyBrickMarker" | "mdiToyBrickMarkerOutline" | "mdiToyBrickMinus" | "mdiToyBrickMinusOutline" | "mdiToyBrickOutline" | "mdiToyBrickPlus" | "mdiToyBrickPlusOutline" | "mdiToyBrickRemove" | "mdiToyBrickRemoveOutline" | "mdiToyBrickSearch" | "mdiToyBrickSearchOutline" | "mdiTrackLight" | "mdiTrackLightOff" | "mdiTrackpad" | "mdiTrackpadLock" | "mdiTractor" | "mdiTractorVariant" | "mdiTrademark" | "mdiTrafficCone" | "mdiTrafficLight" | "mdiTrafficLightOutline" | "mdiTrain" | "mdiTrainBus" | "mdiTrainCar" | "mdiTrainCarAutorack" | "mdiTrainCarBox" | "mdiTrainCarBoxFull" | "mdiTrainCarBoxOpen" | "mdiTrainCarCaboose" | "mdiTrainCarCenterbeam" | "mdiTrainCarCenterbeamFull" | "mdiTrainCarContainer" | "mdiTrainCarFlatbed" | "mdiTrainCarFlatbedCar" | "mdiTrainCarFlatbedTank" | "mdiTrainCarGondola" | "mdiTrainCarGondolaFull" | "mdiTrainCarHopper" | "mdiTrainCarHopperCovered" | "mdiTrainCarHopperFull" | "mdiTrainCarIntermodal" | "mdiTrainCarPassenger" | "mdiTrainCarPassengerDoor" | "mdiTrainCarPassengerDoorOpen" | "mdiTrainCarPassengerVariant" | "mdiTrainCarTank" | "mdiTrainVariant" | "mdiTram" | "mdiTramSide" | "mdiTranscribe" | "mdiTranscribeClose" | "mdiTransfer" | "mdiTransferDown" | "mdiTransferLeft" | "mdiTransferRight" | "mdiTransferUp" | "mdiTransitConnection" | "mdiTransitConnectionHorizontal" | "mdiTransitConnectionVariant" | "mdiTransitDetour" | "mdiTransitSkip" | "mdiTransitTransfer" | "mdiTransition" | "mdiTransitionMasked" | "mdiTranslate" | "mdiTranslateOff" | "mdiTranslateVariant" | "mdiTransmissionTower" | "mdiTransmissionTowerExport" | "mdiTransmissionTowerImport" | "mdiTransmissionTowerOff" | "mdiTrashCan" | "mdiTrashCanOutline" | "mdiTray" | "mdiTrayAlert" | "mdiTrayArrowDown" | "mdiTrayArrowUp" | "mdiTrayFull" | "mdiTrayMinus" | "mdiTrayPlus" | "mdiTrayRemove" | "mdiTreasureChest" | "mdiTreasureChestOutline" | "mdiTree" | "mdiTreeOutline" | "mdiTrello" | "mdiTrendingDown" | "mdiTrendingNeutral" | "mdiTrendingUp" | "mdiTriangle" | "mdiTriangleDown" | "mdiTriangleDownOutline" | "mdiTriangleOutline" | "mdiTriangleSmallDown" | "mdiTriangleSmallUp" | "mdiTriangleWave" | "mdiTriforce" | "mdiTrophy" | "mdiTrophyAward" | "mdiTrophyBroken" | "mdiTrophyOutline" | "mdiTrophyVariant" | "mdiTrophyVariantOutline" | "mdiTruck" | "mdiTruckAlert" | "mdiTruckAlertOutline" | "mdiTruckCargoContainer" | "mdiTruckCheck" | "mdiTruckCheckOutline" | "mdiTruckDelivery" | "mdiTruckDeliveryOutline" | "mdiTruckFast" | "mdiTruckFastOutline" | "mdiTruckFlatbed" | "mdiTruckMinus" | "mdiTruckMinusOutline" | "mdiTruckOffRoad" | "mdiTruckOffRoadOff" | "mdiTruckOutline" | "mdiTruckPlus" | "mdiTruckPlusOutline" | "mdiTruckRemove" | "mdiTruckRemoveOutline" | "mdiTruckSnowflake" | "mdiTruckTrailer" | "mdiTrumpet" | "mdiTshirtCrew" | "mdiTshirtCrewOutline" | "mdiTshirtV" | "mdiTshirtVOutline" | "mdiTsunami" | "mdiTumbleDryer" | "mdiTumbleDryerAlert" | "mdiTumbleDryerOff" | "mdiTune" | "mdiTuneVariant" | "mdiTuneVertical" | "mdiTuneVerticalVariant" | "mdiTunnel" | "mdiTunnelOutline" | "mdiTurbine" | "mdiTurkey" | "mdiTurnstile" | "mdiTurnstileOutline" | "mdiTurtle" | "mdiTwitch" | "mdiTwitter" | "mdiTwoFactorAuthentication" | "mdiTypewriter" | "mdiUbisoft" | "mdiUbuntu" | "mdiUfo" | "mdiUfoOutline" | "mdiUltraHighDefinition" | "mdiUmbraco" | "mdiUmbrella" | "mdiUmbrellaBeach" | "mdiUmbrellaBeachOutline" | "mdiUmbrellaClosed" | "mdiUmbrellaClosedOutline" | "mdiUmbrellaClosedVariant" | "mdiUmbrellaOutline" | "mdiUnderwearOutline" | "mdiUndo" | "mdiUndoVariant" | "mdiUnfoldLessHorizontal" | "mdiUnfoldLessVertical" | "mdiUnfoldMoreHorizontal" | "mdiUnfoldMoreVertical" | "mdiUngroup" | "mdiUnicode" | "mdiUnicorn" | "mdiUnicornVariant" | "mdiUnicycle" | "mdiUnity" | "mdiUnreal" | "mdiUpdate" | "mdiUpload" | "mdiUploadBox" | "mdiUploadBoxOutline" | "mdiUploadCircle" | "mdiUploadCircleOutline" | "mdiUploadLock" | "mdiUploadLockOutline" | "mdiUploadMultiple" | "mdiUploadMultipleOutline" | "mdiUploadNetwork" | "mdiUploadNetworkOutline" | "mdiUploadOff" | "mdiUploadOffOutline" | "mdiUploadOutline" | "mdiUsb" | "mdiUsbCPort" | "mdiUsbFlashDrive" | "mdiUsbFlashDriveOutline" | "mdiUsbPort" | "mdiVacuum" | "mdiVacuumOutline" | "mdiValve" | "mdiValveClosed" | "mdiValveOpen" | "mdiVanPassenger" | "mdiVanUtility" | "mdiVanish" | "mdiVanishQuarter" | "mdiVanityLight" | "mdiVariable" | "mdiVariableBox" | "mdiVectorArrangeAbove" | "mdiVectorArrangeBelow" | "mdiVectorBezier" | "mdiVectorCircle" | "mdiVectorCircleVariant" | "mdiVectorCombine" | "mdiVectorCurve" | "mdiVectorDifference" | "mdiVectorDifferenceAb" | "mdiVectorDifferenceBa" | "mdiVectorEllipse" | "mdiVectorIntersection" | "mdiVectorLine" | "mdiVectorLink" | "mdiVectorPoint" | "mdiVectorPointEdit" | "mdiVectorPointMinus" | "mdiVectorPointPlus" | "mdiVectorPointSelect" | "mdiVectorPolygon" | "mdiVectorPolygonVariant" | "mdiVectorPolyline" | "mdiVectorPolylineEdit" | "mdiVectorPolylineMinus" | "mdiVectorPolylinePlus" | "mdiVectorPolylineRemove" | "mdiVectorRadius" | "mdiVectorRectangle" | "mdiVectorSelection" | "mdiVectorSquare" | "mdiVectorSquareClose" | "mdiVectorSquareEdit" | "mdiVectorSquareMinus" | "mdiVectorSquareOpen" | "mdiVectorSquarePlus" | "mdiVectorSquareRemove" | "mdiVectorTriangle" | "mdiVectorUnion" | "mdiVhs" | "mdiVibrate" | "mdiVibrateOff" | "mdiVideo" | "mdiVideo2d" | "mdiVideo3d" | "mdiVideo3dOff" | "mdiVideo3dVariant" | "mdiVideo4kBox" | "mdiVideoAccount" | "mdiVideoBox" | "mdiVideoBoxOff" | "mdiVideoCheck" | "mdiVideoCheckOutline" | "mdiVideoHighDefinition" | "mdiVideoImage" | "mdiVideoInputAntenna" | "mdiVideoInputComponent" | "mdiVideoInputHdmi" | "mdiVideoInputScart" | "mdiVideoInputSvideo" | "mdiVideoMarker" | "mdiVideoMarkerOutline" | "mdiVideoMinus" | "mdiVideoMinusOutline" | "mdiVideoOff" | "mdiVideoOffOutline" | "mdiVideoOutline" | "mdiVideoPlus" | "mdiVideoPlusOutline" | "mdiVideoStabilization" | "mdiVideoStandardDefinition" | "mdiVideoSwitch" | "mdiVideoSwitchOutline" | "mdiVideoVintage" | "mdiVideoWireless" | "mdiVideoWirelessOutline" | "mdiViewAgenda" | "mdiViewAgendaOutline" | "mdiViewArray" | "mdiViewArrayOutline" | "mdiViewCarousel" | "mdiViewCarouselOutline" | "mdiViewColumn" | "mdiViewColumnOutline" | "mdiViewComfy" | "mdiViewComfyOutline" | "mdiViewCompact" | "mdiViewCompactOutline" | "mdiViewDashboard" | "mdiViewDashboardEdit" | "mdiViewDashboardEditOutline" | "mdiViewDashboardOutline" | "mdiViewDashboardVariant" | "mdiViewDashboardVariantOutline" | "mdiViewDay" | "mdiViewDayOutline" | "mdiViewGallery" | "mdiViewGalleryOutline" | "mdiViewGrid" | "mdiViewGridCompact" | "mdiViewGridOutline" | "mdiViewGridPlus" | "mdiViewGridPlusOutline" | "mdiViewHeadline" | "mdiViewList" | "mdiViewListOutline" | "mdiViewModule" | "mdiViewModuleOutline" | "mdiViewParallel" | "mdiViewParallelOutline" | "mdiViewQuilt" | "mdiViewQuiltOutline" | "mdiViewSequential" | "mdiViewSequentialOutline" | "mdiViewSplitHorizontal" | "mdiViewSplitVertical" | "mdiViewStream" | "mdiViewStreamOutline" | "mdiViewWeek" | "mdiViewWeekOutline" | "mdiVimeo" | "mdiViolin" | "mdiVirtualReality" | "mdiVirus" | "mdiVirusOff" | "mdiVirusOffOutline" | "mdiVirusOutline" | "mdiVlc" | "mdiVoicemail" | "mdiVolcano" | "mdiVolcanoOutline" | "mdiVolleyball" | "mdiVolumeEqual" | "mdiVolumeHigh" | "mdiVolumeLow" | "mdiVolumeMedium" | "mdiVolumeMinus" | "mdiVolumeMute" | "mdiVolumeOff" | "mdiVolumePlus" | "mdiVolumeSource" | "mdiVolumeVariantOff" | "mdiVolumeVibrate" | "mdiVote" | "mdiVoteOutline" | "mdiVpn" | "mdiVuejs" | "mdiVuetify" | "mdiWalk" | "mdiWall" | "mdiWallFire" | "mdiWallSconce" | "mdiWallSconceFlat" | "mdiWallSconceFlatOutline" | "mdiWallSconceFlatVariant" | "mdiWallSconceFlatVariantOutline" | "mdiWallSconceOutline" | "mdiWallSconceRound" | "mdiWallSconceRoundOutline" | "mdiWallSconceRoundVariant" | "mdiWallSconceRoundVariantOutline" | "mdiWallet" | "mdiWalletBifold" | "mdiWalletBifoldOutline" | "mdiWalletGiftcard" | "mdiWalletMembership" | "mdiWalletOutline" | "mdiWalletPlus" | "mdiWalletPlusOutline" | "mdiWalletTravel" | "mdiWallpaper" | "mdiWan" | "mdiWardrobe" | "mdiWardrobeOutline" | "mdiWarehouse" | "mdiWashingMachine" | "mdiWashingMachineAlert" | "mdiWashingMachineOff" | "mdiWatch" | "mdiWatchExport" | "mdiWatchExportVariant" | "mdiWatchImport" | "mdiWatchImportVariant" | "mdiWatchVariant" | "mdiWatchVibrate" | "mdiWatchVibrateOff" | "mdiWater" | "mdiWaterAlert" | "mdiWaterAlertOutline" | "mdiWaterBoiler" | "mdiWaterBoilerAlert" | "mdiWaterBoilerAuto" | "mdiWaterBoilerOff" | "mdiWaterCheck" | "mdiWaterCheckOutline" | "mdiWaterCircle" | "mdiWaterMinus" | "mdiWaterMinusOutline" | "mdiWaterOff" | "mdiWaterOffOutline" | "mdiWaterOpacity" | "mdiWaterOutline" | "mdiWaterPercent" | "mdiWaterPercentAlert" | "mdiWaterPlus" | "mdiWaterPlusOutline" | "mdiWaterPolo" | "mdiWaterPump" | "mdiWaterPumpOff" | "mdiWaterRemove" | "mdiWaterRemoveOutline" | "mdiWaterSync" | "mdiWaterThermometer" | "mdiWaterThermometerOutline" | "mdiWaterWell" | "mdiWaterWellOutline" | "mdiWaterfall" | "mdiWateringCan" | "mdiWateringCanOutline" | "mdiWatermark" | "mdiWave" | "mdiWaveArrowDown" | "mdiWaveArrowUp" | "mdiWaveUndercurrent" | "mdiWaveform" | "mdiWaves" | "mdiWavesArrowLeft" | "mdiWavesArrowRight" | "mdiWavesArrowUp" | "mdiWaze" | "mdiWeatherCloudy" | "mdiWeatherCloudyAlert" | "mdiWeatherCloudyArrowRight" | "mdiWeatherCloudyClock" | "mdiWeatherDust" | "mdiWeatherFog" | "mdiWeatherHail" | "mdiWeatherHazy" | "mdiWeatherHurricane" | "mdiWeatherHurricaneOutline" | "mdiWeatherLightning" | "mdiWeatherLightningRainy" | "mdiWeatherMoonset" | "mdiWeatherMoonsetDown" | "mdiWeatherMoonsetUp" | "mdiWeatherNight" | "mdiWeatherNightPartlyCloudy" | "mdiWeatherPartlyCloudy" | "mdiWeatherPartlyLightning" | "mdiWeatherPartlyRainy" | "mdiWeatherPartlySnowy" | "mdiWeatherPartlySnowyRainy" | "mdiWeatherPouring" | "mdiWeatherRainy" | "mdiWeatherSnowy" | "mdiWeatherSnowyHeavy" | "mdiWeatherSnowyRainy" | "mdiWeatherSunny" | "mdiWeatherSunnyAlert" | "mdiWeatherSunnyOff" | "mdiWeatherSunset" | "mdiWeatherSunsetDown" | "mdiWeatherSunsetUp" | "mdiWeatherTornado" | "mdiWeatherWindy" | "mdiWeatherWindyVariant" | "mdiWeb" | "mdiWebBox" | "mdiWebCancel" | "mdiWebCheck" | "mdiWebClock" | "mdiWebMinus" | "mdiWebOff" | "mdiWebPlus" | "mdiWebRefresh" | "mdiWebRemove" | "mdiWebSync" | "mdiWebcam" | "mdiWebcamOff" | "mdiWebhook" | "mdiWebpack" | "mdiWebrtc" | "mdiWechat" | "mdiWeight" | "mdiWeightGram" | "mdiWeightKilogram" | "mdiWeightLifter" | "mdiWeightPound" | "mdiWhatsapp" | "mdiWheelBarrow" | "mdiWheelchair" | "mdiWheelchairAccessibility" | "mdiWhistle" | "mdiWhistleOutline" | "mdiWhiteBalanceAuto" | "mdiWhiteBalanceIncandescent" | "mdiWhiteBalanceIridescent" | "mdiWhiteBalanceSunny" | "mdiWidgets" | "mdiWidgetsOutline" | "mdiWifi" | "mdiWifiAlert" | "mdiWifiArrowDown" | "mdiWifiArrowLeft" | "mdiWifiArrowLeftRight" | "mdiWifiArrowRight" | "mdiWifiArrowUp" | "mdiWifiArrowUpDown" | "mdiWifiCancel" | "mdiWifiCheck" | "mdiWifiCog" | "mdiWifiLock" | "mdiWifiLockOpen" | "mdiWifiMarker" | "mdiWifiMinus" | "mdiWifiOff" | "mdiWifiPlus" | "mdiWifiRefresh" | "mdiWifiRemove" | "mdiWifiSettings" | "mdiWifiStar" | "mdiWifiStrength1" | "mdiWifiStrength1Alert" | "mdiWifiStrength1Lock" | "mdiWifiStrength1LockOpen" | "mdiWifiStrength2" | "mdiWifiStrength2Alert" | "mdiWifiStrength2Lock" | "mdiWifiStrength2LockOpen" | "mdiWifiStrength3" | "mdiWifiStrength3Alert" | "mdiWifiStrength3Lock" | "mdiWifiStrength3LockOpen" | "mdiWifiStrength4" | "mdiWifiStrength4Alert" | "mdiWifiStrength4Lock" | "mdiWifiStrength4LockOpen" | "mdiWifiStrengthAlertOutline" | "mdiWifiStrengthLockOpenOutline" | "mdiWifiStrengthLockOutline" | "mdiWifiStrengthOff" | "mdiWifiStrengthOffOutline" | "mdiWifiStrengthOutline" | "mdiWifiSync" | "mdiWikipedia" | "mdiWindPower" | "mdiWindPowerOutline" | "mdiWindTurbine" | "mdiWindTurbineAlert" | "mdiWindTurbineCheck" | "mdiWindowClose" | "mdiWindowClosed" | "mdiWindowClosedVariant" | "mdiWindowMaximize" | "mdiWindowMinimize" | "mdiWindowOpen" | "mdiWindowOpenVariant" | "mdiWindowRestore" | "mdiWindowShutter" | "mdiWindowShutterAlert" | "mdiWindowShutterAuto" | "mdiWindowShutterCog" | "mdiWindowShutterOpen" | "mdiWindowShutterSettings" | "mdiWindsock" | "mdiWiper" | "mdiWiperWash" | "mdiWiperWashAlert" | "mdiWizardHat" | "mdiWordpress" | "mdiWrap" | "mdiWrapDisabled" | "mdiWrench" | "mdiWrenchCheck" | "mdiWrenchCheckOutline" | "mdiWrenchClock" | "mdiWrenchClockOutline" | "mdiWrenchCog" | "mdiWrenchCogOutline" | "mdiWrenchOutline" | "mdiXamarin" | "mdiXml" | "mdiXmpp" | "mdiYahoo" | "mdiYeast" | "mdiYinYang" | "mdiYoga" | "mdiYoutube" | "mdiYoutubeGaming" | "mdiYoutubeStudio" | "mdiYoutubeSubscription" | "mdiYoutubeTv" | "mdiYurt" | "mdiZWave" | "mdiZend" | "mdiZigbee" | "mdiZipBox" | "mdiZipBoxOutline" | "mdiZipDisk" | "mdiZodiacAquarius" | "mdiZodiacAries" | "mdiZodiacCancer" | "mdiZodiacCapricorn" | "mdiZodiacGemini" | "mdiZodiacLeo" | "mdiZodiacLibra" | "mdiZodiacPisces" | "mdiZodiacSagittarius" | "mdiZodiacScorpio" | "mdiZodiacTaurus" | "mdiZodiacVirgo")[];

declare const ModalShellUI: react.FunctionComponent<{
    title?: React.ReactNode;
    className?: string | undefined;
    children?: React.ReactNode;
    footer?: React.ReactNode | undefined;
    close: () => void;
}>;

type RevealPlacement = 'popup-sm' | 'popup-xs' | 'popup-lg' | 'top' | 'bottom' | 'right' | 'left' | 'bottomStart' | 'bottomEnd' | 'topStart' | 'topEnd' | 'leftStart' | 'leftEnd' | 'rightStart' | 'rightEnd' | 'auto' | 'autoVerticalStart' | 'autoVerticalEnd' | 'autoHorizontalStart' | 'autoHorizontalEnd' | `#${string}`;
declare const computePlacement: (placement: RevealPlacement, rect: DOMRect) => {
    top: number;
    left: number;
    transform?: string;
};

type RevealProps = {
    /**
     * @deprecated
     * unused for now, backword compatibility with rsuite
     */
    enterable?: boolean;
    content: () => react__default.ReactNode;
    children: react__default.ReactNode;
    title?: react__default.ReactNode;
    placement?: RevealPlacement;
    onClick?: (ev: react__default.MouseEvent) => void;
    showDelay?: number; /** only for hover */
    hideDelay?: number; /** only for hover */
    trigger?: Maybe<'hover' | 'click' | 'clickAndHover'>;
    tooltipWrapperClassName?: string;
    className?: string;
    style?: react__default.CSSProperties;
};

declare const defaultShowDelay_whenRoot = 100;
declare const defaultHideDelay_whenRoot = 300;
declare const defaultShowDelay_whenNested = 0;
declare const defaultHideDelay_whenNested = 0;
/**
 * state wrapper that laziy initializes the actual state when actually required
 * it's important to keep that class lighweight.
 */
declare class RevealStateLazy {
    p: RevealProps;
    parents: RevealState[];
    constructor(p: RevealProps, parents: RevealState[]);
    uistOrNull: RevealState | null;
    getUist: () => RevealState;
}
declare class RevealState {
    p: RevealProps;
    parents: RevealState[];
    static nextUID: number;
    static shared: {
        current: Maybe<RevealState>;
    };
    uid: number;
    onMiddleClick: (ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    onRightClick: (ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    onLeftClick: (ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    /**
     * manuall assigned here on init so it can be made observable
     * on its own, without the need to make the entire props observable
     * so we can then hot-reload it nicely and have a nicer dev experience
     */
    contentFn: () => ReactNode;
    constructor(p: RevealProps, parents: RevealState[]);
    inAnchor: boolean;
    inTooltip: boolean;
    inChildren: Set<number>;
    /** how deep in the reveal stack we are */
    get ix(): number;
    get debugColor(): CSSProperties;
    /** toolip is visible if either inAnchor or inTooltip */
    get visible(): boolean;
    close(): void;
    get triggerOnClick(): boolean;
    get triggerOnHover(): boolean;
    get showDelay(): number;
    get hideDelay(): number;
    get placement(): RevealPlacement;
    tooltipPosition: any;
    setPosition: (rect: DOMRect) => void;
    _lock: boolean;
    toggleLock: () => void;
    get defaultCursor(): "cursor-pointer" | "cursor-help";
    enterAnchorTimeoutId: NodeJS.Timeout | null;
    leaveAnchorTimeoutId: NodeJS.Timeout | null;
    onMouseEnterAnchor: () => void;
    onMouseLeaveAnchor: () => void;
    enterAnchor: () => void;
    leaveAnchor: () => void;
    private _resetAllAnchorTimouts;
    private _resetAnchorEnterTimeout;
    private _resetAnchorLeaveTimeout;
    enterTooltipTimeoutId: NodeJS.Timeout | null;
    leaveTooltipTimeoutId: NodeJS.Timeout | null;
    onMouseEnterTooltip: () => void;
    onMouseLeaveTooltip: () => void;
    enterTooltip: () => void;
    leaveTooltip: () => void;
    private _resetAllTooltipTimouts;
    private _resetTooltipEnterTimeout;
    private _resetTooltipLeaveTimeout;
    enterChildren: (depth: number) => void;
    leaveChildren: (depth: number) => void;
}

type RevealStack = {
    tower: RevealStateLazy[];
};
declare const RevealCtx: react.Context<RevealStack | null>;
/** use this to get the current reveal stack, or null if none yet */
declare const useRevealOrNull: () => Maybe<RevealStack>;
/** use this to get the current reveal stack, or throw if none yet */
declare const useReveal: () => RevealStack;

declare const global_RevealStack: RevealState[];

declare const RevealUI: react.FunctionComponent<RevealProps>;

declare const FormAsDropdownConfigUI: react.FunctionComponent<{
    title?: string | undefined;
    form: Form<any>;
}>;

declare function debounce<T extends (...args: any[]) => any>(func: T, delay: number, maxWait?: number): (...funcArgs: Parameters<T>) => void;

type Widget_optional_config<T extends ISpec = ISpec> = WidgetConfigFields<{
    startActive?: boolean;
    widget: T;
}, Widget_optional_types<T>>;
type Widget_optional_serial<T extends ISpec = ISpec> = WidgetSerialFields<{
    type: 'optional';
    child?: Maybe<T['$Serial']>;
    active: boolean;
}>;
type Widget_optional_value<T extends ISpec = ISpec> = Maybe<T['$Value']>;
type Widget_optional_types<T extends ISpec = ISpec> = {
    $Type: 'optional';
    $Config: Widget_optional_config<T>;
    $Serial: Widget_optional_serial<T>;
    $Value: Widget_optional_value<T>;
    $Widget: Widget_optional<T>;
};
interface Widget_optional<T extends ISpec = ISpec> extends Widget_optional_types<T> {
}
declare class Widget_optional<T extends ISpec = ISpec> extends BaseWidget implements IWidget<Widget_optional_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_optional<T>>;
    DefaultHeaderUI: undefined;
    DefaultBodyUI: undefined;
    readonly id: string;
    get config(): Widget_optional_config<T>;
    readonly type: 'optional';
    get baseErrors(): Problem_Ext;
    serial: Widget_optional_serial<T>;
    child: T['$Widget'];
    get childOrThrow(): T['$Widget'];
    setActive: (value: boolean) => void;
    /**
     * as of 2024-03-14, this is only called in the constructor
     * TODO: inline ?
     */
    private _ensureChildIsHydrated;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_optional<T>>, serial?: Widget_optional_serial<T>);
    setValue(val: Widget_optional_value<T>): void;
    get subWidgets(): T["$Widget"][];
    get subWidgetsWithKeys(): {
        key: string;
        widget: T["$Widget"];
    }[];
    set value(next: Widget_optional_value<T>);
    get value(): Widget_optional_value<T>;
}

type CssProprtyGlobals = '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset';
type CssProprtyResize = CssProprtyGlobals | 'block' | 'both' | 'horizontal' | 'inline' | 'none' | 'vertical';
type Widget_string_config = WidgetConfigFields<{
    default?: string;
    textarea?: boolean;
    placeHolder?: string;
    pattern?: string;
    inputType?: 'text' | 'password' | 'email' | 'tel' | 'url' | 'time' | 'date' | 'datetime-local' | 'color';
    resize?: CssProprtyResize;
    /**
     * if set to true, widget will commit values on enter; not before.
     * hitting esc will revert to the last committed value
     * */
    buffered?: boolean;
}, Widget_string_types>;
type Widget_string_serial = WidgetSerialFields<{
    type: 'str';
    val?: string;
}>;
declare const Widget_string_fromValue: (val: string) => Widget_string_serial;
type Widget_string_value = string;
type Widget_string_types = {
    $Type: 'str';
    $Config: Widget_string_config;
    $Serial: Widget_string_serial;
    $Value: Widget_string_value;
    $Widget: Widget_string;
};
interface Widget_string extends Widget_string_types {
}
declare class Widget_string extends BaseWidget implements IWidget<Widget_string_types> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_string>;
    get DefaultHeaderUI(): react.FunctionComponent<{
        widget: Widget_string;
    }>;
    get DefaultBodyUI(): react.FunctionComponent<{
        widget: Widget_string;
    }> | undefined;
    get baseErrors(): Problem_Ext;
    readonly border = false;
    readonly id: string;
    get config(): Widget_string_config;
    readonly type: 'str';
    temporaryValue: string | null;
    setTemporaryValue: (next: string | null) => string | null;
    serial: Widget_string_serial;
    readonly defaultValue: string;
    get isChanged(): boolean;
    reset: () => void;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_string>, serial?: Widget_string_serial);
    setValue(val: Widget_string_value): void;
    set value(next: Widget_string_value);
    get value(): Widget_string_value;
}

declare const getWidgetClass: <Type extends {
    $Type: string;
}>(widgetName: Type['$Type']) => Type;
declare const registerWidgetClass: <T extends {
    $Type: string;
}>(type: T['$Type'], kls: {
    new (...args: any[]): T;
}) => void;
declare const isWidgetOptional: (widget: any) => widget is Widget_optional<ISpec<IWidget<$WidgetTypes>>>;
declare const isWidgetShared: (widget: any) => widget is Widget_shared<ISpec<IWidget<$WidgetTypes>>>;
declare const isWidgetGroup: (widget: any) => widget is Widget_group<any>;
declare const isWidgetString: (widget: any) => widget is Widget_string;

declare class GlobalFormCtx {
    id: string;
    currentForm: Maybe<IFormBuilder>;
}
/** every function that may potentially call prefab form needs to be wrapped with that */
declare const runWithGlobalForm: <T>(form: IFormBuilder, f: () => T) => T;
/**
 * ❌ DO NOT USE DIRECTLY
 *
 * @internal
 *
 * You need to use `getCurrentForm` instead if building a CushyApp.
 * It is magically available in app context, and does not need to be imported.
 *
 * 2024-03-12 rvion: now that form library is going to be usable outside of cushy
 *   | type here must be generic (IFormBuilder) => but it's ok, cause it's going
 *   | to be properly typed soon
 *
 * */
declare const getCurrentForm_IMPL: () => IFormBuilder;

type OpenRouter_Models = 'openrouter/auto' | 'mistralai/mistral-7b-instruct' | 'mistralai/mixtral-8x7b-instruct' | 'mistralai/mistral-large' | 'huggingfaceh4/zephyr-7b-beta' | 'openchat/openchat-7b' | 'undi95/toppy-m-7b' | 'gryphe/mythomist-7b' | 'nousresearch/nous-capybara-34b' | 'jebcarter/psyfighter-13b' | 'nousresearch/nous-hermes-llama2-13b' | 'phind/phind-codellama-34b' | 'intel/neural-chat-7b' | 'haotian-liu/llava-13b' | 'meta-llama/llama-2-13b-chat' | 'alpindale/goliath-120b' | 'lizpreciatior/lzlv-70b-fp16-hf' | 'openai/gpt-3.5-turbo' | 'openai/gpt-3.5-turbo-1106' | 'openai/gpt-3.5-turbo-0301' | 'openai/gpt-3.5-turbo-16k' | 'openai/gpt-4-1106-preview' | 'openai/gpt-4' | 'openai/gpt-4-0314' | 'openai/gpt-4-32k' | 'openai/gpt-4-32k-0314' | 'openai/gpt-4-vision-preview' | 'openai/text-davinci-002' | 'openai/gpt-3.5-turbo-instruct' | 'google/palm-2-chat-bison' | 'google/palm-2-codechat-bison' | 'google/palm-2-chat-bison-32k' | 'google/palm-2-codechat-bison-32k' | 'perplexity/pplx-70b-online' | 'perplexity/pplx-7b-online' | 'perplexity/pplx-7b-chat' | 'perplexity/pplx-70b-chat' | 'meta-llama/llama-2-70b-chat' | 'nousresearch/nous-hermes-llama2-70b' | 'meta-llama/codellama-34b-instruct' | 'jondurbin/airoboros-l2-70b' | 'migtissera/synthia-70b' | 'open-orca/mistral-7b-openorca' | 'teknium/openhermes-2-mistral-7b' | 'teknium/openhermes-2.5-mistral-7b' | 'pygmalionai/mythalion-13b' | 'undi95/remm-slerp-l2-13b' | 'xwin-lm/xwin-lm-70b' | 'gryphe/mythomax-l2-13b-8k' | 'neversleep/noromaid-20b' | 'anthropic/claude-2' | 'anthropic/claude-2.0' | 'anthropic/claude-instant-v1' | 'anthropic/claude-v1' | 'anthropic/claude-1.2' | 'anthropic/claude-instant-v1-100k' | 'anthropic/claude-v1-100k' | 'anthropic/claude-instant-1.0' | 'mancer/weaver' | 'gryphe/mythomax-l2-13b';

type OopenRouter_ModelInfo = {
    id: OpenRouter_Models;
    name: string;
    pricing: {
        prompt: string;
        completion: string;
    };
    context_length: number;
    architecture: {
        tokenizer: string;
        instruct_type: InstructType | null;
    };
    top_provider: {
        max_completion_tokens: number | null;
    };
    per_request_limits?: Maybe<{
        prompt_tokens: string;
        completion_tokens: string;
    }>;
};
type InstructType = //
'llama2' | 'zephyr' | 'openchat' | 'alpaca' | 'vicuna' | 'neural' | 'gpt' | 'airoboros' | 'claude';
declare const openRouterInfos: {
    [key in OpenRouter_Models]: OopenRouter_ModelInfo;
};

/**
 * Bool Config
 * @property {string} label2 - test
 */
type Widget_bool_config = WidgetConfigFields<{
    /**
     * default value; true or false
     * @default: false
     */
    default?: boolean;
    /** (legacy ?) Label to display to the right of the widget. */
    label2?: string;
    /** Text to display, drawn by the widget itself. */
    text?: string;
    /**
     * The display style of the widget.
     * - `check `: Shows a simple checkbox.
     * - `button`: Shows a toggle-able button.
     *
     *  Defaults to 'check'
     */
    display?: 'check' | 'button';
    /** Whether or not to expand the widget to take up as much space as possible
     *
     *      If `display` is 'check'
     *          undefined and true will expand
     *          false will disable expansion
     *
     *      If `display` is 'button'
     *          undefined and false will not expand
     *          true will enable expansion
     */
    expand?: boolean;
}, Widget_bool_types>;
type Widget_bool_serial = WidgetSerialFields<{
    type: 'bool';
    active: boolean;
}>;
type Widget_bool_value = boolean;
type Widget_bool_types = {
    $Type: 'bool';
    $Config: Widget_bool_config;
    $Serial: Widget_bool_serial;
    $Value: Widget_bool_value;
    $Widget: Widget_bool;
};
interface Widget_bool extends Widget_bool_types {
}
declare class Widget_bool extends BaseWidget implements IWidget<Widget_bool_types> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_bool>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_bool;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    get config(): Widget_bool_config;
    readonly type: 'bool';
    get baseErrors(): Problem_Ext;
    serial: Widget_bool_serial;
    setOn: () => boolean;
    setOff: () => boolean;
    toggle: () => boolean;
    readonly defaultValue: boolean;
    get isChanged(): boolean;
    reset: () => boolean;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_bool>, serial?: Widget_bool_serial);
    get value(): Widget_bool_value;
    setValue(val: Widget_bool_value): void;
    set value(next: Widget_bool_value);
}

type Widget_button_context<K> = {
    context: K;
    widget: Widget_button<K>;
};
type Widget_button_config<K = any> = WidgetConfigFields<{
    text?: string;
    kind?: `primary` | `special` | `warning`;
    useContext?: () => K;
    onClick?: (ctx: Widget_button_context<K>) => void;
}, Widget_button_types<K>>;
type Widget_button_serial = WidgetSerialFields<{
    type: 'button';
    val: boolean;
}>;
type Widget_button_value = boolean;
type Widget_button_types<K> = {
    $Type: 'button';
    $Config: Widget_button_config<K>;
    $Serial: Widget_button_serial;
    $Value: Widget_button_value;
    $Widget: Widget_button<K>;
};
interface Widget_button<K> extends Widget_button_types<K> {
}
declare class Widget_button<K> extends BaseWidget implements IWidget<Widget_button_types<K>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_button<K>>;
    DefaultHeaderUI: (<K_1 extends unknown>(p: {
        widget: Widget_button<K_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    DefaultBodyUI: undefined;
    readonly id: string;
    get config(): Widget_button_config<K>;
    readonly type: 'button';
    readonly serial: Widget_button_serial;
    get baseErrors(): Problem_Ext;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_button<K>>, serial?: Widget_button_serial);
    get value(): Widget_button_value;
    setValue(val: boolean): void;
    set value(next: boolean);
}

type TabPositionConfig = 'start' | 'center' | 'end';
type Widget_choices_config<T extends SchemaDict = SchemaDict> = WidgetConfigFields<{
    expand?: boolean;
    items: T;
    multi: boolean;
    default?: {
        [k in keyof T]?: boolean;
    } | keyof T;
    placeholder?: string;
    appearance?: 'select' | 'tab';
    tabPosition?: TabPositionConfig;
}, Widget_choices_types<T>>;
type Widget_choices_serial<T extends SchemaDict = SchemaDict> = WidgetSerialFields<{
    type: 'choices';
    active: true;
    branches: {
        [k in keyof T]?: boolean;
    };
    values_: {
        [k in keyof T]?: T[k]['$Serial'];
    };
}>;
type Widget_choices_value<T extends SchemaDict = SchemaDict> = {
    [k in keyof T]?: T[k]['$Value'];
};
type Widget_choices_types<T extends SchemaDict = SchemaDict> = {
    $Type: 'choices';
    $Config: Widget_choices_config<T>;
    $Serial: Widget_choices_serial<T>;
    $Value: Widget_choices_value<T>;
    $Widget: Widget_choices<T>;
};
interface Widget_choices<T extends SchemaDict = SchemaDict> extends Widget_choices_types<T> {
}
declare class Widget_choices<T extends SchemaDict = SchemaDict> extends BaseWidget implements IWidget<Widget_choices_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_choices<T>>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_choices<any>;
    }>;
    DefaultBodyUI: (<T_1 extends SchemaDict>(p: {
        widget: Widget_choices<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    background: boolean;
    readonly id: string;
    get config(): Widget_choices_config<T>;
    readonly type: 'choices';
    readonly expand: boolean;
    get baseErrors(): Problem_Ext;
    get isMulti(): boolean;
    get isSingle(): boolean;
    children: {
        [k in keyof T]?: T[k]['$Widget'];
    };
    serial: Widget_choices_serial<T>;
    get firstChoice(): (keyof T & string) | undefined;
    get choices(): (keyof T & string)[];
    get choicesWithLabels(): {
        key: keyof T & string;
        label: string;
    }[];
    /** array of all active branch keys */
    get activeBranches(): (keyof T & string)[];
    get firstActiveBranchName(): (keyof T & string) | undefined;
    get firstActiveBranchWidget(): T[keyof T]['$Widget'] | undefined;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_choices<T>>, serial?: Widget_choices_serial<T>);
    get subWidgets(): any[];
    get subWidgetsWithKeys(): {
        key: string;
        widget: any;
    }[];
    toggleBranch(branch: keyof T & string): void;
    isBranchDisabled: (branch: keyof T & string) => boolean;
    disableBranch(branch: keyof T & string, p?: {
        skipBump?: boolean;
    }): void;
    enableBranch(branch: keyof T & string, p?: {
        skipBump?: boolean;
    }): void;
    setValue(val: Widget_choices_value<T>): void;
    /** results, but only for active branches */
    get value(): Widget_choices_value<T>;
}

type Widget_color_config = WidgetConfigFields<{
    default?: string;
}, Widget_color_types>;
type Widget_color_serial = WidgetSerialFields<{
    type: 'color';
    /** color, stored as string */
    value: string;
}>;
type Widget_color_value = string;
type Widget_color_types = {
    $Type: 'color';
    $Config: Widget_color_config;
    $Serial: Widget_color_serial;
    $Value: Widget_color_value;
    $Widget: Widget_color;
};
interface Widget_color extends Widget_color_types {
}
declare class Widget_color extends BaseWidget implements IWidget<Widget_color_types> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_color>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_color;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    get config(): Widget_color_config;
    readonly type: 'color';
    get baseErrors(): Problem_Ext;
    readonly defaultValue: string;
    get isChanged(): boolean;
    reset: () => string;
    serial: Widget_color_serial;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_color>, serial?: Widget_color_serial);
    get value(): Widget_color_value;
    setValue(val: Widget_color_value): void;
    set value(next: Widget_color_value);
}

/** */
type AutoBehaviour<T extends ISpec> = {
    /** list of keys that must be present */
    keys: (self: T['$Widget']) => string[];
    /** for every item given by the list above */
    getKey: (self: T['$Widget'], ix: number) => string;
    /** once an item if  */
    init: (key: string) => T['$Value'];
};
type Widget_list_config<T extends ISpec> = WidgetConfigFields<{
    element: ((ix: number) => T) | T;
    /**
     * when specified, the list will work in some AUTOMATIC mode
     *  - disable the "add" button
     *  - disable the "remove" button
     *  - disable the "clear" button
     *  - automatically add or remove missing items when reaction
     *  - subscribe via mobx to anything you want
     */
    auto?: AutoBehaviour<T>;
    /** @default: true */
    sortable?: boolean;
    /**
     * mininum length;
     * if min > 0, list will be populated on creation
     * if length < min, list will be populated with empty items
     * if length <= min, list will not be clearable
     * */
    min?: number;
    /** max length */
    max?: number;
    defaultLength?: number;
}, Widget_list_types<T>>;
type Widget_list_serial<T extends ISpec> = WidgetSerialFields<{
    type: 'list';
    items_: T['$Serial'][];
}>;
type Widget_list_value<T extends ISpec> = T['$Value'][];
type Widget_list_types<T extends ISpec> = {
    $Type: 'list';
    $Config: Widget_list_config<T>;
    $Serial: Widget_list_serial<T>;
    $Value: Widget_list_value<T>;
    $Widget: Widget_list<T>;
};
interface Widget_list<T extends ISpec> extends Widget_list_types<T> {
}
declare class Widget_list<T extends ISpec> extends BaseWidget implements IWidget<Widget_list_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_list<T>>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_list<any>;
    }>;
    DefaultBodyUI: (<T_1 extends ISpec<IWidget<$WidgetTypes>>>(p: {
        widget: Widget_list<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    readonly id: string;
    get config(): Widget_list_config<T>;
    readonly type: 'list';
    get length(): number;
    items: T['$Widget'][];
    serial: Widget_list_serial<T>;
    background: boolean;
    findItemIndexContaining: (widget: IWidget) => number | null;
    get subWidgets(): T["$Widget"][];
    get subWidgetsWithKeys(): {
        key: string;
        widget: T["$Widget"];
    }[];
    schemaAt: (ix: number) => T;
    get isAuto(): boolean;
    startAutoBehaviour: () => void;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_list<T>>, serial?: Widget_list_serial<T>);
    setValue(val: Widget_list_value<T>): void;
    get value(): Widget_list_value<T>;
    collapseAllItems: () => void;
    expandAllItems: () => void;
    get baseErrors(): string[];
    addItem(p?: {
        skipBump?: true;
        at?: number;
        value?: T['$Value'];
    }): void;
    removeAllItems: () => void;
    removeItem: (item: T['$Widget']) => void;
    moveItem: (oldIndex: number, newIndex: number) => void;
}

type Widget_markdown_config = WidgetConfigFields<{
    markdown: string | ((form: Form) => string);
    inHeader?: boolean;
}, Widget_markdown_types>;
type Widget_markdown_serial = WidgetSerialFields<{
    type: 'markdown';
    active: true;
}>;
type Widget_markdown_value = {
    type: 'markdown';
};
type Widget_markdown_types = {
    $Type: 'markdown';
    $Config: Widget_markdown_config;
    $Serial: Widget_markdown_serial;
    $Value: Widget_markdown_value;
    $Widget: Widget_markdown;
};
interface Widget_markdown extends Widget_markdown_types {
}
declare class Widget_markdown extends BaseWidget implements IWidget<Widget_markdown_types> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_markdown>;
    get DefaultHeaderUI(): react.FunctionComponent<{
        widget: Widget_markdown;
    }> | undefined;
    get DefaultBodyUI(): react.FunctionComponent<{
        widget: Widget_markdown;
    }> | undefined;
    get alignLabel(): false | undefined;
    get baseErrors(): Problem_Ext;
    readonly id: string;
    get config(): Widget_markdown_config;
    readonly type: 'markdown';
    readonly serial: Widget_markdown_serial;
    get markdown(): string;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_markdown>, serial?: Widget_markdown_serial);
    setValue(val: Widget_markdown_value): void;
    set value(val: Widget_markdown_value);
    get value(): Widget_markdown_value;
}

type Widget_matrix_cell = {
    x: number;
    y: number;
    row: string;
    col: string;
    value: boolean;
};
type Widget_matrix_config = WidgetConfigFields<{
    default?: {
        row: string;
        col: string;
    }[];
    rows: string[];
    cols: string[];
}, Widget_matrix_types>;
type Widget_matrix_serial = WidgetSerialFields<{
    type: 'matrix';
    active: true;
    selected: Widget_matrix_cell[];
}>;
type Widget_matrix_value = Widget_matrix_cell[];
type Widget_matrix_types = {
    $Type: 'matrix';
    $Config: Widget_matrix_config;
    $Serial: Widget_matrix_serial;
    $Value: Widget_matrix_value;
    $Widget: Widget_matrix;
};
interface Widget_matrix extends Widget_matrix_types {
}
declare class Widget_matrix extends BaseWidget implements IWidget<Widget_matrix_types> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_matrix>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_matrix;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    get config(): Widget_matrix_config;
    readonly type: 'matrix';
    readonly serial: Widget_matrix_serial;
    get baseErrors(): Problem_Ext;
    rows: string[];
    cols: string[];
    alignLabel: boolean;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_matrix>, serial?: Widget_matrix_serial);
    setValue(val: Widget_matrix_value): void;
    /** 🔶 this is inneficient */
    set value(val: Widget_matrix_value);
    get value(): Widget_matrix_value;
    private sep;
    private store;
    private key;
    get allCells(): Widget_matrix_cell[];
    UPDATE: () => void;
    /** list of all cells that are ON */
    get RESULT(): Widget_matrix_cell[];
    /** whether the first grid cell is ON */
    get firstValue(): boolean;
    setAll: (value: boolean) => void;
    setRow: (row: string, val: boolean) => void;
    setCol: (col: string, val: boolean) => void;
    /** get cell at {rol x col} */
    getCell: (row: string, col: string) => Widget_matrix_cell;
    /** set cell at {rol x col} to given value */
    setCell: (row: string, col: string, value: boolean) => void;
}

type Widget_number_config = WidgetConfigFields<{
    mode: 'int' | 'float';
    default?: number;
    min?: number;
    max?: number;
    softMin?: number;
    softMax?: number;
    step?: number;
    suffix?: string;
    text?: string;
    hideSlider?: boolean;
    forceSnap?: boolean;
    /** used as suffix */
    unit?: string;
}, Widget_number_types>;
type Widget_number_serial = WidgetSerialFields<{
    type: 'number';
    val: number;
}>;
type Widget_number_value = number;
type Widget_number_types = {
    $Type: 'number';
    $Config: Widget_number_config;
    $Serial: Widget_number_serial;
    $Value: Widget_number_value;
    $Widget: Widget_number;
};
interface Widget_number extends Widget_number_types {
}
declare class Widget_number extends BaseWidget implements IWidget<Widget_number_types> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_number>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_number;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    get config(): Widget_number_config;
    readonly type: 'number';
    readonly forceSnap: boolean;
    serial: Widget_number_serial;
    readonly defaultValue: number;
    get isChanged(): boolean;
    reset: () => void;
    get baseErrors(): string | null;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_number>, serial?: Widget_number_serial);
    setValue(val: Widget_number_value): void;
    set value(next: Widget_number_value);
    get value(): Widget_number_value;
}

type Widget_seed_config = WidgetConfigFields<{
    default?: number;
    defaultMode?: 'randomize' | 'fixed' | 'last';
    min?: number;
    max?: number;
}, Widget_seed_types>;
type Widget_seed_serial = WidgetSerialFields<{
    type: 'seed';
    val: number;
    mode: 'randomize' | 'fixed' | 'last';
}>;
declare const Widget_seed_fromValue: (value: Widget_seed_value) => Widget_seed_serial;
type Widget_seed_value = number;
type Widget_seed_types = {
    $Type: 'seed';
    $Config: Widget_seed_config;
    $Serial: Widget_seed_serial;
    $Value: Widget_seed_value;
    $Widget: Widget_seed;
};
interface Widget_seed extends Widget_seed_types {
}
declare class Widget_seed extends BaseWidget implements IWidget<Widget_seed_types> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_seed>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_seed;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    get baseErrors(): Problem_Ext;
    get config(): Widget_seed_config;
    readonly type: 'seed';
    readonly serial: Widget_seed_serial;
    setToFixed: (val?: number) => void;
    setToRandomize: () => void;
    setValue: (val: number) => void;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_seed>, serial?: Widget_seed_serial);
    get value(): Widget_seed_value;
}

type BaseSelectEntry<T = string> = {
    id: T;
    label?: string;
};
type Widget_selectOne_config<T extends BaseSelectEntry> = WidgetConfigFields<{
    default?: T;
    /**
     * list of all choices
     * 👉 you can use a lambda if you want the option to to dynamic
     *    the lambda will receive the widget instance as argument, from
     *    which you can access variosu stuff like
     *      - `self.serial.query`: the current filtering text
     *      - `self.form`: the form instance
     *      - `self.form.root`: the root of the widget
     *      - `self.parent...`: natigate the widget tree
     *      - `self.useKontext('...')`: any named dynamic chanel for cross-widget communication
     * 👉 If the list of options is generated from the query directly,
     *    you should also set `disableLocalFiltering: true`, to avoid
     *    filtering the options twice.
     */
    choices: T[] | ((self: Widget_selectOne<T>) => T[]);
    /** set this to true if your choices are dynamically generated from the query directly, to disable local filtering */
    disableLocalFiltering?: boolean;
    getLabelUI?: (t: T) => React.ReactNode;
    appearance?: 'select' | 'tab';
}, Widget_selectOne_types<T>>;
declare const Widget_selectOne_fromValue: <T extends BaseSelectEntry<string>>(val: Widget_selectOne_value<T>) => Widget_selectOne_serial<T>;
type Widget_selectOne_serial<T extends BaseSelectEntry> = WidgetSerialFields<{
    type: 'selectOne';
    query: string;
    val: T;
}>;
type Widget_selectOne_value<T extends BaseSelectEntry> = T;
type Widget_selectOne_types<T extends BaseSelectEntry> = {
    $Type: 'selectOne';
    $Config: Widget_selectOne_config<T>;
    $Serial: Widget_selectOne_serial<T>;
    $Value: Widget_selectOne_value<T>;
    $Widget: Widget_selectOne<T>;
};
interface Widget_selectOne<T> extends Widget_selectOne_types<T> {
}
declare class Widget_selectOne<T extends BaseSelectEntry> extends BaseWidget implements IWidget<Widget_selectOne_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_selectOne<T>>;
    DefaultHeaderUI: (<T_1 extends BaseSelectEntry>(p: {
        widget: Widget_selectOne<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    DefaultBodyUI: undefined;
    readonly id: string;
    get config(): Widget_selectOne_config<T>;
    readonly type: 'selectOne';
    readonly serial: Widget_selectOne_serial<T>;
    get baseErrors(): Maybe<string>;
    get choices(): T[];
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_selectOne<T>>, serial?: Widget_selectOne_serial<T>);
    setValue(val: Widget_selectOne_value<T>): void;
    set value(next: Widget_selectOne_value<T>);
    get value(): Widget_selectOne_value<T>;
}

type Widget_selectMany_config<T extends BaseSelectEntry> = WidgetConfigFields<{
    default?: T[];
    /**
     * list of all choices
     * 👉 you can use a lambda if you want the option to to dynamic
     *    the lambda will receive the widget instance as argument, from
     *    which you can access variosu stuff like
     *      - `self.serial.query`: the current filtering text
     *      - `self.form`: the form instance
     *      - `self.form.root`: the root of the widget
     *      - `self.parent...`: natigate the widget tree
     *      - `self.useKontext('...')`: any named dynamic chanel for cross-widget communication
     * 👉 If the list of options is generated from the query directly,
     *    you should also set `disableLocalFiltering: true`, to avoid
     *    filtering the options twice.
     */
    choices: T[] | ((self: Widget_selectMany<T>) => T[]);
    /** set this to true if your choices are dynamically generated from the query directly, to disable local filtering */
    disableLocalFiltering?: boolean;
    appearance?: 'select' | 'tab';
    getLabelUI?: (t: T) => React.ReactNode;
}, Widget_selectMany_types<T>>;
type Widget_selectMany_serial<T extends BaseSelectEntry> = WidgetSerialFields<{
    type: 'selectMany';
    query: string;
    values: T[];
}>;
declare const Widget_selectMany_fromValue: <T extends BaseSelectEntry>(values: Widget_selectMany_value<T>) => Widget_selectMany_serial<T>;
type Widget_selectMany_value<T extends BaseSelectEntry> = T[];
type Widget_selectMany_types<T extends BaseSelectEntry> = {
    $Type: 'selectMany';
    $Config: Widget_selectMany_config<T>;
    $Serial: Widget_selectMany_serial<T>;
    $Value: Widget_selectMany_value<T>;
    $Widget: Widget_selectMany<T>;
};
interface Widget_selectMany<T extends BaseSelectEntry> extends Widget_selectMany_types<T> {
}
declare class Widget_selectMany<T extends BaseSelectEntry> extends BaseWidget implements IWidget<Widget_selectMany_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_selectMany<T>>;
    DefaultHeaderUI: (<T_1 extends BaseSelectEntry>(p: {
        widget: Widget_selectMany<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    DefaultBodyUI: undefined;
    readonly id: string;
    get config(): Widget_selectMany_config<T>;
    readonly type: 'selectMany';
    readonly serial: Widget_selectMany_serial<T>;
    get choices(): T[];
    get baseErrors(): Maybe<string[]>;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_selectMany<T>>, serial?: Widget_selectMany_serial<T>);
    /** un-select given item */
    removeItem: (item: T) => void;
    /** select given item */
    addItem: (item: T) => void;
    /** select item if item was not selected, un-select if item was selected */
    toggleItem: (item: T) => void;
    setValue(val: Widget_selectMany_value<T>): void;
    set value(next: Widget_selectMany_value<T>);
    get value(): Widget_selectMany_value<T>;
}

type SDModelType = 'SD1.5 512' | 'SD2.1 768' | 'SDXL 1024';
type CushySizeByRatio = {
    modelType?: SDModelType;
    aspectRatio?: AspectRatio;
    width?: number;
    height?: number;
};
type CushySize = {
    type: 'size';
    width: number;
    height: number;
    modelType: SDModelType;
    aspectRatio: AspectRatio;
};
type ModelType = 'xl' | '1.5' | 'custom';
type AspectRatio = '1:1' | '16:9' | '4:3' | '3:2' | '9:16' | '3:4' | '2:3';

type SizeAble = {
    width: number;
    height: number;
};
declare class ResolutionState {
    req: SizeAble;
    private idealSizeforModelType;
    flip: () => void;
    get width(): number;
    get height(): number;
    set width(next: number);
    set height(next: number);
    desiredModelType: ModelType;
    desiredAspectRatio: AspectRatio;
    isAspectRatioLocked: boolean;
    wasHeightAdjustedLast: boolean;
    constructor(req: SizeAble);
    setWidth(width: number): void;
    setHeight(height: number): void;
    get realAspectRatio(): number;
    setModelType(modelType: ModelType): void;
    setAspectRatio(aspectRatio: AspectRatio): void;
    private updateHeightBasedOnAspectRatio;
    private updateWidthBasedOnAspectRatio;
}

type Widget_size_config = WidgetConfigFields<{
    default?: CushySizeByRatio;
    min?: number;
    max?: number;
    step?: number;
}, Widget_size_types>;
type Widget_size_serial = WidgetSerialFields<CushySize>;
declare const Widget_size_fromValue: (val: Widget_size_value) => Widget_size_serial;
type Widget_size_value = CushySize;
type Widget_size_types = {
    $Type: 'size';
    $Config: Widget_size_config;
    $Serial: Widget_size_serial;
    $Value: Widget_size_value;
    $Widget: Widget_size;
};
interface Widget_size extends Widget_size_types {
}
declare class Widget_size extends BaseWidget implements IWidget<Widget_size_types> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_size>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_size;
    }>;
    DefaultBodyUI: react.FunctionComponent<{
        widget: Widget_size;
    }>;
    get baseErrors(): Problem_Ext;
    get width(): number;
    get height(): number;
    set width(next: number);
    set height(next: number);
    get sizeHelper(): ResolutionState;
    readonly id: string;
    get config(): Widget_size_config;
    readonly type: 'size';
    readonly serial: Widget_size_serial;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_size>, serial?: Widget_size_serial);
    setValue(val: Widget_size_value): void;
    set value(val: Widget_size_value);
    get value(): Widget_size_value;
}

/**
 * Bool Config
 * @property {string} label2 - test
 */
type Widget_spacer_config = WidgetConfigFields<{}, Widget_spacer_types>;
type Widget_spacer_serial = WidgetSerialFields<{
    type: 'spacer';
}>;
declare const Widget_spacer_fromValue: (val: Widget_spacer_value) => Widget_spacer_serial;
type Widget_spacer_value = boolean;
type Widget_spacer_types = {
    $Type: 'spacer';
    $Config: Widget_spacer_config;
    $Serial: Widget_spacer_serial;
    $Value: Widget_spacer_value;
    $Widget: Widget_spacer;
};
interface Widget_spacer extends Widget_spacer_types {
}
declare class Widget_spacer extends BaseWidget implements IWidget<Widget_spacer_types> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_spacer>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_spacer;
    }>;
    DefaultBodyUI: undefined;
    get baseErrors(): Problem_Ext;
    readonly id: string;
    get config(): SharedWidgetConfig<Widget_spacer_types>;
    readonly type: 'spacer';
    serial: Widget_spacer_serial;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_spacer>, serial?: Widget_spacer_serial);
    get value(): boolean;
    setValue(val: boolean): void;
    set value(val: boolean);
}

type SGroup<T extends SchemaDict> = SimpleSpec<Widget_group<T>>;
type SOptional<T extends ISpec> = SimpleSpec<Widget_optional<T>>;
type SBool = SimpleSpec<Widget_bool>;
type SString = SimpleSpec<Widget_string>;
type SChoices<T extends SchemaDict = SchemaDict> = SimpleSpec<Widget_choices<T>>;
type SNumber = SimpleSpec<Widget_number>;
type SColor = SimpleSpec<Widget_color>;
type SList<T extends ISpec> = SimpleSpec<Widget_list<T>>;
type SButton<T> = SimpleSpec<Widget_button<T>>;
type SSeed = SimpleSpec<Widget_seed>;
type SMatrix = SimpleSpec<Widget_matrix>;
type SSelectOne<T extends BaseSelectEntry> = SimpleSpec<Widget_selectOne<T>>;
type SSelectMany<T extends BaseSelectEntry> = SimpleSpec<Widget_selectMany<T>>;
type SSelectOne_<T extends string> = SimpleSpec<Widget_selectOne<BaseSelectEntry<T>>>;
type SSelectMany_<T extends string> = SimpleSpec<Widget_selectMany<BaseSelectEntry<T>>>;
type SSize = SimpleSpec<Widget_size>;
type SSpacer = SimpleSpec<Widget_spacer>;
type SMarkdown = SimpleSpec<Widget_markdown>;

declare class SimpleSpec<W extends IWidget = IWidget> implements ISpec<W> {
    readonly type: W['type'];
    readonly config: W['$Config'];
    $Widget: W;
    $Type: W['type'];
    $Config: W['$Config'];
    $Serial: W['$Serial'];
    $Value: W['$Value'];
    LabelExtraUI: (p: {}) => null;
    producers: Producer<any, W['$Widget']>[];
    publish<T>(chan: Channel<T> | ChannelId, produce: (self: W['$Widget']) => T): this;
    subscribe<T>(chan: Channel<T> | ChannelId, effect: (arg: T, self: W['$Widget']) => void): this;
    reactions: {
        expr: (self: W['$Widget']) => any;
        effect: (arg: any, self: W['$Widget']) => void;
    }[];
    addReaction<T>(expr: (self: W['$Widget']) => T, effect: (arg: T, self: W['$Widget']) => void): this;
    Make: <X extends IWidget<$WidgetTypes>>(type: X['type'], config: X['$Config']) => SimpleSpec<X>;
    constructor(type: W['type'], config: W['$Config']);
    /** wrap widget spec to list stuff */
    list: (config?: Omit<Widget_list_config<this>, 'element'>) => SList<this>;
    optional: (startActive?: boolean) => SOptional<this>;
    shared: (key: string) => Widget_shared<this>;
    /** clone the spec, and patch the cloned config */
    withConfig: (config: Partial<W['$Config']>) => SimpleSpec<W>;
    hidden: () => SimpleSpec<W>;
}

declare class TreeWidget implements ITreeEntry {
    widgetWithKey: {
        widget: IWidget;
        key: string;
    };
    constructor(widgetWithKey: {
        widget: IWidget;
        key: string;
    });
    get widget(): IWidget<$WidgetTypes>;
    /** config label, or parent key */
    get label(): string;
    get name(): string;
    get isFolder(): boolean;
    /** packed with a bunch of sane default for now; we'll see if this is ever */
    onPrimaryAction: (n: TreeNode) => void;
    children: () => ITreeElement<any>[];
    actions: TreeEntryAction[];
}

declare const annotationsSymbol: unique symbol;
type Annotations<T extends Object = Object, U extends PropertyKey = never> = AnnotationsMap<T, U>;
declare const makeAutoObservableInheritance: <T extends object & {
    [annotationsSymbol]?: any;
}, AdditionalKeys extends PropertyKey = never>(target: T, overrides?: Annotations<T, NoInfer<AdditionalKeys>>, options?: CreateObservableOptions) => T;

declare function makeLabelFromFieldName(s: string): string;

declare const JsonViewUI: react.FunctionComponent<{
    value?: Maybe<object>;
}>;

declare const ErrorBoundaryFallback: (p: {
    error: any;
    resetErrorBoundary: (...args: any[]) => void;
}) => react_jsx_runtime.JSX.Element;

/** assertNotNull */
declare const bang: <T>(x: Maybe<T>, msg?: string) => T;
declare function ASSERT_ARRAY(a: any): a is any[];
declare function ASSERT_EQUAL(a: any, b: any): a is any[];
declare function ASSERT_STRING(a: any): a is string;
declare function asSTRING_orCrash(a: any, errMsg?: string): string;

type RefFn = (e: HTMLDivElement | null) => void;
type DynamicSize = {
    width: Maybe<number>;
    height: Maybe<number>;
    observer: ResizeObserver;
};
declare const useSizeOf: () => {
    ref: RefFn;
    size: DynamicSize;
};

declare const AnimatedSizeUI: react.FunctionComponent<{
    className?: string | undefined;
    children?: ReactNode;
}>;

/** allow to handle shared and optionals */
declare function getActualWidgetToDisplay(originalWidget: IWidget): IWidget;

declare const getBorderStatusForWidget: (widget: IWidget) => boolean;

declare const getIfWidgetIsCollapsible: (widget: IWidget) => boolean;

declare const getIfWidgetNeedAlignedLabel: (widget: IWidget) => boolean;

declare const InputBoolUI: react.FunctionComponent<{
    active?: Maybe<boolean>;
    display?: "check" | "button" | undefined;
    expand?: boolean | undefined;
    icon?: Maybe<string>;
    text?: string | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
    onValueChange?: ((next: boolean) => void) | undefined;
}>;

declare const Widget_ToggleUI: react.FunctionComponent<{
    widget: IWidget;
}>;

type DomId = string;
declare enum Trigger {
    UNMATCHED = "UNMATCHED",
    Success = "SUCCESS",
    FAILED = "DONE"
}

declare class ActivityManager {
    /** currently active activities */
    _stack: Activity[];
    startActivity: (activity: Activity) => Trigger;
    stopActivity(activity: Activity): void;
    stopCurrentActivity: () => void;
    current: () => Activity | undefined;
    constructor();
}
declare const activityManager: ActivityManager;
interface Activity {
    /** human-readable activity title */
    title?: string;
    /** uniquer activity uid */
    uid: string;
    /** if specified, the activity is bound the the given ID */
    bound?: DomId | null;
    /** will be executed when activity start */
    onStart?: () => void;
    /** will be executed when activity end */
    onStop?: () => void;
    /**
     * everytime an event bubbles upward to the activity root, it will
     * pass through this function
     */
    onEvent?: (event: Event) => Trigger | null;
    /**
     * @since 2024-05-21
     * @default null
     * how shells are wrapped
     */
    shell?: Maybe<'popup-lg' | 'popup-sm' | 'popup-full'>;
    /** activity UI */
    UI: FC<{
        activity: Activity;
        /** call that function to stop the activity */
        stop: () => void;
    }>;
    /**
     * @since 2024-05-21
     * mouse event this activity was started from
     * if specified, allow the activity to position itself relative to the mouse if need be
     */
    event?: React.MouseEvent<HTMLElement, MouseEvent>;
    /**
     * @since 2024-05-21
     * use placement position the activity container origin
     */
    placement?: RevealPlacement;
}

declare class ManualPromise<T = any> implements PromiseLike<T> {
    done: boolean;
    value: T | null;
    resolve: (t: T | PromiseLike<T>) => void;
    reject: (err: any) => void;
    promise: Promise<T>;
    then: Promise<T>['then'];
    isRunning: boolean;
    setValue: (t: T) => void;
    constructor();
}
declare const isPromise: (p: any) => p is Promise<any>;

type _OS = 'Mac' | 'iOS' | 'Windows' | 'Android' | 'Linux' | 'unknown';
declare function getOS(): _OS;

type Command_<Ctx = any> = {
    combos?: CushyShortcut | CushyShortcut[];
    label: string;
    id: string;
    description?: string;
    ctx: CommandContext<Ctx>;
    action: (t: Ctx) => Trigger | Promise<Trigger>;
    /** placeholder; unused for now */
    undo?: (t: Ctx) => Trigger | Promise<Trigger>;
    validInInput?: boolean;
    continueAfterSuccess?: boolean;
};
interface Command<Ctx = any> extends Command_<Ctx> {
}
declare class Command<Ctx = any> {
    conf: Command_<Ctx>;
    $SYM: symbol;
    constructor(conf: Command_<Ctx>);
    /** bind a command to a static context, bypassing its context provider */
    bind(ctx: Ctx): BoundCommand<Ctx>;
    /**
     * method to programmatically call a command,
     * using when to both extract context and check if command can run
     * */
    execute: () => Trigger | Promise<Trigger>;
    NavBarBtnUI: (p: {
        label?: string;
    }) => react_jsx_runtime.JSX.Element;
}
declare class CommandContext<Ctx = any> {
    /** display name */
    name: string;
    /** actual function code */
    check: () => Ctx | Trigger.UNMATCHED;
    constructor(
    /** display name */
    name: string, 
    /** actual function code */
    check: () => Ctx | Trigger.UNMATCHED);
}
declare function command<Ctx extends any>(t: Omit<Command_<Ctx>, 'type'>): Command<Ctx>;
type BoundCommandOpts = {
    label?: string;
};
declare class BoundCommand<Ctx = any> {
    private command;
    private ctx;
    private ui?;
    $SYM: symbol;
    constructor(command: Command<Ctx>, ctx: Ctx, ui?: BoundCommandOpts | undefined);
    execute: () => Trigger | Promise<Trigger>;
    NavBarBtnUI: (p: {
        label?: string;
    }) => react_jsx_runtime.JSX.Element;
    get label(): string;
}

/** @todo improve to detect shortkey without order */

type CushyShortcut = Tagged<string, 'CushyShortcut'>;
type KeyName = Branded<string, {
    KeyAllowedInShortcut: true;
}>;
type InputToken = Branded<string, {
    InputToken: true;
}>;
type InputSequence = InputToken[];
declare class CommandManager {
    conf: {
        log?: boolean;
        name?: string;
    };
    commands: Map<Command['id'], Command>;
    commandByShortcut: Map<string, Command[]>;
    contextByName: Map<string, CommandContext>;
    get knownContexts(): CommandContext[];
    registerCommand: (op: Command) => void;
    getCommandById: (id: string) => Command<any> | undefined;
    inputHistory: InputSequence;
    name: string;
    constructor(conf?: {
        log?: boolean;
        name?: string;
    });
    log: (...content: any[]) => void;
    private evInInput;
    private inputToken;
    processKeyDownEvent: (ev: KeyboardEvent$1<HTMLElement>) => Trigger;
    tryToRun: (s: Command, ev: KeyboardEvent$1<HTMLElement>) => boolean;
}
declare function parseShortcutToInputSequence(combo: CushyShortcut): InputSequence;
declare const normalizeCushyShortcut: (combo: CushyShortcut) => CushyShortcut;
declare const commandManager: CommandManager;

declare const MOD_KEY: KeyName;
declare const META_NAME: KeyName;
declare const hasMod: (ev: MouseEvent$1<any, any> | KeyboardEvent) => boolean;

/** this module helps break the import cycle between MenuUI and Command  */

declare const BoundCommandSym: unique symbol;
declare const isBoundCommand: (x: any) => x is BoundCommand<any>;

/** this module helps break the import cycle between MenuUI and Command  */

declare const CommandSym: unique symbol;
declare const isCommand: (x: any) => x is Command<any>;

/**
 * a simple Menu entry that open a popup for when you don't want to resort to commands nor custom widgets
 * label will be used for shortcut binding and fuzzy menu search
 */
declare class SimpleMenuModal {
    p: {
        label: string;
        submit?: () => void;
        submitLabel?: string;
        UI: FC<{
            /** will be called both when submitted and not */
            close: (p: {
                didSubmit?: boolean;
            }) => void;
            /** if present, a submit button will be added */
            submit?: () => void;
            /** only taken into account if submit function is also given */
            submitLabel?: string;
        }>;
    };
    constructor(p: {
        label: string;
        submit?: () => void;
        submitLabel?: string;
        UI: FC<{
            /** will be called both when submitted and not */
            close: (p: {
                didSubmit?: boolean;
            }) => void;
            /** if present, a submit button will be added */
            submit?: () => void;
            /** only taken into account if submit function is also given */
            submitLabel?: string;
        }>;
    });
}

type NO_PROPS = Record<string, never>;

/**
 * a simple Menu entry for when you don't want to resort to commands nor custom widgets
 * label will be used for shortcut binding and fuzzy menu search
 */
declare class SimpleMenuAction {
    opts: {
        label: string;
        icon?: IconName;
        onPick: () => void;
    };
    constructor(opts: {
        label: string;
        icon?: IconName;
        onPick: () => void;
    });
}

type MenuEntryWithKey = {
    entry: MenuEntry;
    char?: string;
    charIx?: number;
};
type MenuEntry = 
/** inline subform  */
IWidget
/** custom component  */
 | FC<{}>
/** a command */
 | Command | BoundCommand | BoundMenu
/** simple MenuEntry */
 | SimpleMenuAction | SimpleMenuModal;
/** supplied menu definition */
type MenuDef<Props> = {
    /**
     * used to register menu into menu manager so you can open menu by ref
     * required for hot performant / simple hot reload
     */
    id?: string;
    title: string;
    entries: (props: Props) => MenuEntry[];
};
type MenuID = Tagged<string, 'MenuID'>;
declare class Menu<Props> {
    def: MenuDef<Props>;
    id: MenuID;
    get title(): string;
    constructor(def: MenuDef<Props>);
    UI: (p: {
        props: Props;
    }) => JSX.Element;
    DropDownUI: (p: {
        props: Props;
    }) => JSX.Element;
    /** bind a menu to give props */
    bind: (props: Props, ui?: BoundMenuOpts) => BoundMenu;
    /** push the menu to current activity */
    open(props: Props): Trigger | Promise<Trigger>;
}
declare class MenuWithoutProps {
    def: MenuDef<NO_PROPS>;
    id: MenuID;
    get title(): string;
    constructor(def: MenuDef<NO_PROPS>);
    UI: () => JSX.Element;
    DropDownUI: () => JSX.Element;
    /** bind a menu to give props */
    bind: (ui?: BoundMenuOpts) => BoundMenu;
    /** push the menu to current activity */
    open(): Trigger | Promise<Trigger>;
}
declare class MenuInstance<Props> implements Activity {
    menu: Menu<Props>;
    props: Props;
    keysTaken: Set<string>;
    onStart: () => void;
    UI: () => react.FunctionComponentElement<{
        menu: MenuInstance<any>; /** custom component  */
    }>;
    onEvent: (event: Event) => Trigger | null;
    onStop: () => void;
    uid: string;
    constructor(menu: Menu<Props>, props: Props, keysTaken?: Set<string>);
    get entries(): MenuEntry[];
    get entriesWithKb(): MenuEntryWithKey[];
    get allocatedKeys(): Set<string>;
    private get acceleratedEntries();
    findSuitableKeys: (label: string, allocatedKeys: Set<string>) => Maybe<{
        char: string;
        pos: number;
    }>;
}
declare const menu: <P>(def: MenuDef<P>) => Menu<P>;
declare const menuWithoutProps: (def: MenuDef<NO_PROPS>) => MenuWithoutProps;
type BoundMenuOpts = {
    title?: string;
};
declare class BoundMenu<Ctx = any, Props = any> {
    menu: Menu<Props>;
    props: Props;
    ui?: BoundMenuOpts | undefined;
    $SYM: symbol;
    get title(): string;
    constructor(menu: Menu<Props>, props: Props, ui?: BoundMenuOpts | undefined);
    open: () => Trigger | Promise<Trigger>;
    init: (keysTaken?: Set<string>) => MenuInstance<Props>;
}

/** this module helps break the import cycle between MenuUI and Menu  */

declare const BoundMenuSym: unique symbol;
declare const isBoundMenu: (x: any) => x is BoundMenu<any, any>;

declare const ComboUI: react.FunctionComponent<{
    size?: "sm" | "xs" | undefined;
    primary?: boolean | undefined;
    combo: CushyShortcut;
}>;

declare const Dropdown: (p: {
    className?: string;
    startIcon?: Maybe<ReactNode>;
    title: ReactNode;
    content?: () => ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const MenuItem: react.FunctionComponent<{
    onClick?: ((ev: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    /** ⚠️ unused for now */
    size?: "sm" | "xs" | "md" | "lg" | undefined;
    icon?: Maybe<ReactNode>;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    className?: string | undefined;
    children?: ReactNode;
    label?: ReactNode;
    shortcut?: CushyShortcut | undefined;
}>;

declare const MenuRootUI: react.FunctionComponent<{
    menu: MenuInstance<any>;
}>;
declare const MenuUI: react.FunctionComponent<{
    menu: MenuInstance<any>;
}>;

declare const genUID: (size?: number | undefined) => string;
declare const FAIL: (msg: string, data?: any) => never;
declare const VIOLATION: (msg: string, data?: any) => never;

declare const KEYS: {
    search: string;
    closeCurrentTab: string;
    closeDialogOrPopupsOrFullScreenPanel: string;
    openFull_Library: string;
    openPage_Config: string;
    openPage_Hosts: string;
    openPage_Shortcuts: string;
    openPage_Civitai: string;
    openPage_Squoosh: string;
    openPage_Posemy: string;
    openPage_Paint: string;
    openPage_Unsplash: string;
    openPage_ComfyUI: string;
    openPage_Gallery: string;
    openPage_Models: string;
    openPage_Marketplace: string;
    duplicateCurrentDraft: string;
    resizeWindowForVideoCapture: string;
    resizeWindowForLaptop: string;
    resetLayout: string;
    focusAppAndDraftTree: string[];
    focusFileExplorerTree: string;
    collapseAllTree: string;
    tree_moveUp: string;
    tree_moveDown: string;
    tree_moveRight: string;
    tree_moveLeft: string;
    tree_deleteNodeAndFocusNodeAbove: string;
    tree_deleteNodeAndFocusNodeBelow: string;
    tree_onPrimaryAction: string;
    tree_movePageUp: string;
    tree_movePageDown: string;
};

type KeyEv = React.KeyboardEvent<HTMLDivElement>;
declare const onKeyDownHandlers: (ev: KeyEv, view: TreeView) => undefined | (() => void);

declare class TreeView {
    tree: Tree;
    conf: {
        /** focus is when you use arrow to navigate, or mouse to click on entries.  */
        onFocusChange?: (node: TreeNode | undefined) => void;
        onSelectionChange?: (
        /** node that have just been selected  */
        newlySelectedNode: TreeNode[], 
        /** node that have just been UN-selected  */
        newlyUnselectedNode: TreeNode[], 
        /** all remaining selected node  */
        allSelectedNodes: TreeNode[]) => void;
        selectable?: boolean;
    };
    /** treeview id; only for debugging purpose */
    id: string;
    constructor(tree: Tree, conf?: {
        /** focus is when you use arrow to navigate, or mouse to click on entries.  */
        onFocusChange?: (node: TreeNode | undefined) => void;
        onSelectionChange?: (
        /** node that have just been selected  */
        newlySelectedNode: TreeNode[], 
        /** node that have just been UN-selected  */
        newlyUnselectedNode: TreeNode[], 
        /** all remaining selected node  */
        allSelectedNodes: TreeNode[]) => void;
        selectable?: boolean;
    });
    filterRef: react.RefObject<HTMLInputElement>;
    filter: string | undefined;
    updateFilter: (xPath: string) => string;
    focusFilter: () => void;
    get nodes(): TreeNode[];
    revealAndFocusAtPath: (path_v2: string[]) => Maybe<TreeNode>;
    at: TreeNode | undefined;
    get cursorInfos(): {
        nodeAboveInTreeview: string | undefined;
        nodeBelowInTreeview: string | undefined;
        lastDescendant: string | undefined;
        lastChild: string | undefined;
        descendant_bfs: string[];
        descendant_dfs: string[];
        depth: number;
        parent: string | undefined;
        pathStr: string;
        siblingsIncludingSelf: string[];
        siblingsExcludingSelf: string[];
        nextSibling: string | undefined;
        prevSibling: string | undefined;
        firstChild: string | undefined;
    } | null;
    setFocusAt: (at: TreeNode | undefined, p?: TreeScrollOptions) => void;
    onKeyDown: (ev: KeyEv) => void;
    private onKeyDownHandlers;
    deleteNodeAndFocusNodeAbove: () => undefined;
    deleteNodeAndFocusNodeBelow: () => undefined;
    resetCaretPos: () => undefined;
    moveUp: () => undefined;
    movePageUp: () => undefined;
    movePageDown: () => undefined;
    moveDown: () => undefined;
    moveRight: () => void;
    moveLeft: () => void | TreeNode;
}

declare const TreeViewCtx: react.Context<TreeView | null>;
declare const useTreeView: () => TreeView;

declare const TreeIcon1UI: react.FunctionComponent<TreeEntryAction & {
    node: TreeNode;
}>;

declare const RenderItemTitleUI: react.FunctionComponent<{
    node: TreeNode;
}>;

declare const TreeEntryUI: react.FunctionComponent<{
    depth?: number | undefined;
    node: TreeNode;
}>;

declare const TreeUI: react.FunctionComponent<{
    title?: string | undefined;
    shortcut?: string | undefined;
    className?: string | undefined;
    treeView: TreeView;
    autofocus?: boolean | undefined;
}>;

declare const menu_widgetActions: Menu<IWidget>;

declare const WidgetTooltipUI: react.FunctionComponent<{
    widget: IWidget;
}>;

declare const WidgetWithLabelUI: react.FunctionComponent<{
    widget: IWidget;
    rootKey: string;
    isTopLevel?: boolean | undefined;
    alignLabel?: boolean | undefined;
    /**
     * override the label (false to force disable the label)
     * some widget like `choice`, already display the selected header in their own way
     * so they may want to skip the label.
     * */
    label?: string | false | undefined;
}>;

/** Push things after this to the right as much as possible. If used twice, widgets after the first usage will be centered.
 *
 * Example:
 *
 * ```
 *  <HeaderUI>
 *      <div tw='btn btn-sm'>Left!</div>
 *      <SpacerUI />
 *      <div tw='btn btn-sm'>Centered!</div>
 *      <SpacerUI />
 *      <div tw='btn btn-sm'>Right!</div>
 *  </HeaderUI>
 * ```
 */
declare const SpacerUI: react.FunctionComponent<{}>;

declare const WidgetBoolUI: react.FunctionComponent<{
    widget: Widget_bool;
}>;

declare const WidgetInlineRunUI: (<K extends unknown>(p: {
    widget: Widget_button<K>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};

declare const toastSuccess: (msg: string) => undefined;
declare const toastInfo: (msg: string) => undefined;
declare const toastError: (msg: string) => undefined;
declare const toastImage: (imageSrc: string | Buffer, message: string) => void;

declare function unaccent(text: string): string;
declare function normalizeText(text: string): string;
declare function searchMatches(haystack: string, needle: string): boolean;

interface ToolTipPosition {
    top?: number | undefined;
    bottom?: number | undefined;
    left?: number | undefined;
    right?: number | undefined;
}
type SelectProps<T> = {
    label?: string;
    /** callback when a new option is added */
    onChange: null | ((next: T, self: AutoCompleteSelectState<T>) => void);
    /**
     * list of all choices
     * 👉 If the list of options is generated from the query directly,
     *    you should also set `disableLocalFiltering: true`, to avoid
     *    filtering the options twice.
     */
    options?: (query: string) => T[];
    /** set this to true if your choices */
    disableLocalFiltering?: boolean;
    /** if provided, is used to compare options with selected values */
    equalityCheck?: (a: T, b: T) => boolean;
    /** used to search/filter & for UI if no getLabelUI provided */
    getLabelText: (t: T) => string;
    /** if provided, is used to display the options */
    getLabelUI?: (t: T) => react__default.ReactNode;
    /** the selected value / list of values if multiple values provided */
    value?: () => Maybe<T | T[]>;
    /** if true, this widget is considered a multi-select */
    multiple?: boolean;
    /** text to show when no value yet nor filter query */
    placeholder?: string;
    disabled?: boolean;
    cleanable?: boolean;
    hideValue?: boolean;
    className?: string;
    /**
     * @default: false if multi-select, true if single select
     */
    closeOnPick?: boolean;
    /**
     * @default: false
     * (previous default before 2024-02-29: false if multi-select, true if single select)
     */
    resetQueryOnPick?: boolean;
    /** hooks required to plug search query from/into some other system */
    getSearchQuery?: () => string;
    setSearchQuery?: (val: string) => void;
};
declare class AutoCompleteSelectState<T> {
    p: SelectProps<T>;
    constructor(p: SelectProps<T>);
    isMultiSelect: boolean;
    get options(): T[];
    private _searchQuery;
    get searchQuery(): string;
    set searchQuery(value: string);
    get filteredOptions(): T[];
    /**
     * function to compare value or options,
     * using the provided equality check  if provided.
     *
     * '===' check if the object is exactly the same.
     * It work in some cases like those:
     * case 1: 🟢
     *   | const myvar = {a:1}
     *   | <SelectUI options={[myvar, {a:2}]}, value={myvar} />
     * case 2: 🟢
     *   | <SelectUI options={[1,2]}, value={1} />
     *   (because primitve type are always compared by value)
     *
     * but not here
     *
     * case 3: ❌
     *   | <SelectUI options={[{a:1}, {a:2}]}, value={{a:1}} />
     *                          👆   is NOT '===' to  👆 (not the same instance object)
     *                                but is "equal" according to human logic
     *
     */
    isEqual: (a: T, b: T) => boolean;
    /**
     * return the index of the first selected Item amongst options;
     * just in case the name wasn't clear enough.
     * TODO: rename this funciton, and remove this comment about the function name.
     */
    get indexOfFirstSelectedItemAmongstOptions(): Maybe<number>;
    /** return the first selected value */
    get firstValue(): Maybe<T>;
    /** currently selected value or values */
    get value(): Maybe<T | T[]>;
    /** list of all selected values */
    get values(): T[];
    get displayValue(): ReactNode;
    anchorRef: react__default.RefObject<HTMLInputElement>;
    inputRef: react__default.RefObject<HTMLInputElement>;
    popupRef: react__default.RefObject<HTMLDivElement>;
    selectedIndex: number;
    isOpen: boolean;
    isDragging: boolean;
    isFocused: boolean;
    wasEnabled: boolean;
    hasMouseEntered: boolean;
    tooltipPosition: ToolTipPosition;
    tooltipMaxHeight: number;
    updatePosition: () => void;
    onRealWidgetMouseDown: (ev: react__default.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    openMenu: () => void;
    closeMenu(): void;
    filterOptions(inputValue: string): void;
    onMenuEntryClick: (ev: react__default.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => void;
    selectOption(index: number): void;
    navigateSelection(direction: 'up' | 'down'): void;
    setNavigationIndex(value: number): void;
    handleInputChange: (event: react__default.ChangeEvent<HTMLInputElement>) => void;
    MouseMoveTooFar: (event: MouseEvent) => void;
    onBlur: () => void;
    handleTooltipKeyDown: (ev: react__default.KeyboardEvent) => void;
    onRealInputKeyUp: (ev: react__default.KeyboardEvent) => void;
}
declare const SelectUI: (<T>(p: SelectProps<T>) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};
declare const SelectPopupUI: (<T>(p: {
    s: AutoCompleteSelectState<T>;
}) => react__default.ReactPortal) & {
    displayName: string;
};

declare const WidgetChoices_HeaderUI: react.FunctionComponent<{
    widget: Widget_choices<any>;
}>;
declare const WidgetChoices_BodyUI: (<T extends SchemaDict>(p: {
    widget: Widget_choices<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};
declare const WidgetChoices_SelectHeaderUI: (<T extends SchemaDict>(p: {
    widget: Widget_choices<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};

declare const WidgetColorUI: react.FunctionComponent<{
    widget: Widget_color;
}>;

declare const WidgetGroup_LineUI: react.FunctionComponent<{
    widget: Widget_group<any>;
}>;
declare const WidgetGroup_BlockUI: (<T extends SchemaDict>(p: {
    className?: string;
    widget: Widget_group<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};

type IWidgetListLike = {
    addItem(): void;
    removeAllItems(): void;
    expandAllItems(): void;
    collapseAllItems(): void;
    items: unknown[];
    readonly length: number;
    config: {
        max?: number;
        min?: number;
    };
};
declare const ListControlsUI: react.FunctionComponent<{
    widget: IWidgetListLike;
}>;

declare const WidgetList_LineUI: react.FunctionComponent<{
    widget: Widget_list<any>;
}>;
declare const WidgetList_BodyUI: (<T extends ISpec<IWidget<$WidgetTypes>>>(p: {
    widget: Widget_list<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};
declare const ListItemCollapseBtnUI: react.FunctionComponent<{
    widget: IWidget;
}>;

declare const WidgetMardownUI: react.FunctionComponent<{
    widget: Widget_markdown;
}>;

declare const WidgetMatrixUI: react.FunctionComponent<{
    widget: Widget_matrix;
}>;

declare const parseFloatNoRoundingErr: (str: string | number, maxDigitsAfterDot?: number) => number;

/**
 * set of shared configuration used by cushy kit;
 * to be injected via context
 * can be configured by project
 */
interface CushyKit {
    clickAndSlideMultiplicator?: number;
}

declare const CushyKitCtx: react.Context<CushyKit | null>;
declare const useCushyKit: () => CushyKit;
declare const useCushyKitOrNull: () => Maybe<CushyKit>;

type InputNumberProps = {
    value?: Maybe<number>;
    mode: 'int' | 'float';
    onValueChange: (next: number) => void;
    step?: number;
    min?: number;
    max?: number;
    softMin?: number;
    softMax?: number;
    text?: string;
    suffix?: string;
    debug?: string;
    hideSlider?: boolean;
    style?: react__default.CSSProperties;
    placeholder?: string;
    forceSnap?: boolean;
    className?: string;
};
declare const InputNumberUI: react__default.FunctionComponent<InputNumberProps>;

declare const WidgetNumberUI: react.FunctionComponent<{
    widget: Widget_number;
}>;

declare const exhaust: (x: never) => never;

type RSSize = 'sm' | 'xs' | 'md' | 'lg';
type RSAppearance = 'default' | 'subtle' | 'ghost' | 'link' | 'primary';

declare const FormHelpTextUI: (p: any) => react_jsx_runtime.JSX.Element;
declare const Button: (p: JSX.IntrinsicElements['button'] & {
    icon?: Maybe<ReactNode>;
    active?: Maybe<boolean>;
    size?: Maybe<RSSize>;
    loading?: boolean;
    disabled?: boolean;
    appearance?: Maybe<RSAppearance>;
}) => react_jsx_runtime.JSX.Element;
declare const Input: (p: JSX.IntrinsicElements['input']) => react_jsx_runtime.JSX.Element;
declare const InputNumberBase: react.FunctionComponent<react.ClassAttributes<HTMLInputElement> & react.InputHTMLAttributes<HTMLInputElement> & {
    _size?: RSSize | undefined;
}>;
declare const Slider: react.FunctionComponent<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
declare const Radio: react.FunctionComponent<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
declare const Toggle: react.FunctionComponent<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
declare const Rate: (p: {
    value?: number;
    name: string;
    disabled?: boolean;
    max?: number;
    onChange?: (value: number) => void;
}) => react_jsx_runtime.JSX.Element;
declare const Whisper: (p: {
    /** @deprecated */
    enterable?: boolean;
    /** @deprecated */
    placement?: string;
    speaker: ReactNode;
    children: ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const Panel: (p: {
    header?: ReactNode;
    className?: string;
    children: ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const ProgressLine: react.FunctionComponent<{
    className?: string | undefined;
    percent?: number | undefined;
    status: 'success' | 'active';
}>;
type MessageType = 'error' | 'info' | 'warning';
declare const Message: react.FunctionComponent<{
    type: MessageType;
    header?: ReactNode;
    showIcon?: boolean | undefined;
    children?: ReactNode;
}>;
declare const Tag: (p: any) => react_jsx_runtime.JSX.Element;
declare const Loader: ((p: {
    size?: RSSize;
    className?: string;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};

declare const WidgetSeedUI: react.FunctionComponent<{
    widget: Widget_seed;
}>;

declare const WidgetSelectManyUI: (<T extends BaseSelectEntry>(p: {
    widget: Widget_selectMany<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};
declare const WidgetSelectMany_TabUI: (<T extends BaseSelectEntry>(p: {
    widget: Widget_selectMany<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};
declare const WidgetSelectMany_SelectUI: (<T extends BaseSelectEntry>(p: {
    widget: Widget_selectMany<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};

declare const WidgetSelectOneUI: (<T extends BaseSelectEntry>(p: {
    widget: Widget_selectOne<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};
declare const WidgetSelectOne_TabUI: (<T extends BaseSelectEntry>(p: {
    widget: Widget_selectOne<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};
declare const WidgetSelectOne_SelectUI: (<T extends BaseSelectEntry>(p: {
    widget: Widget_selectOne<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};

declare const WigetSize_BlockUI: react.FunctionComponent<{
    widget: Widget_size;
}>;
declare const WigetSize_LineUI: react.FunctionComponent<{
    widget: Widget_size;
}>;
declare const WidgetSizeX_LineUI: react.FunctionComponent<{
    sizeHelper: ResolutionState;
    bounds?: {
        min?: number | undefined;
        max?: number | undefined;
        step?: number | undefined;
    } | undefined;
}>;
declare const AspectLockButtonUI: react.FunctionComponent<{
    sizeHelper: ResolutionState;
}>;
declare const AspectRatioSquareUI: react.FunctionComponent<{
    sizeHelper: ResolutionState;
}>;
declare const WigetSizeXUI: react.FunctionComponent<{
    sizeHelper: ResolutionState;
    bounds?: {
        min?: number | undefined;
        max?: number | undefined;
        step?: number | undefined;
    } | undefined;
}>;

declare const WidgetSpacerUI: react.FunctionComponent<{
    widget: Widget_spacer;
}>;

declare const WidgetString_TextareaHeaderUI: react.FunctionComponent<{
    widget: Widget_string;
}>;
declare const WidgetString_TextareaBodyUI: react.FunctionComponent<{
    widget: Widget_string;
}>;
declare const WidgetString_HeaderUI: react.FunctionComponent<{
    widget: Widget_string;
}>;

declare class SimpleFormBuilder implements IFormBuilder {
    form: Form<ISpec, SimpleFormBuilder>;
    /** (@internal) DO NOT USE YOURSELF */
    SpecCtor: typeof SimpleSpec;
    /** (@internal) don't call this yourself */
    constructor(form: Form<ISpec, SimpleFormBuilder>);
    time: (config?: Widget_string_config) => SString;
    date: (config?: Widget_string_config) => SString;
    datetime: (config?: Widget_string_config) => SString;
    password: (config?: Widget_string_config) => SString;
    email: (config?: Widget_string_config) => SString;
    url: (config?: Widget_string_config) => SString;
    string: (config?: Widget_string_config) => SString;
    text: (config?: Widget_string_config) => SString;
    textarea: (config?: Widget_string_config) => SString;
    boolean: (config?: Widget_bool_config) => SBool;
    bool: (config?: Widget_bool_config) => SBool;
    size: (config?: Widget_size_config) => SSize;
    seed: (config?: Widget_seed_config) => SSeed;
    color: (config?: Widget_color_config) => SColor;
    colorV2: (config?: Widget_string_config) => SString;
    matrix: (config: Widget_matrix_config) => SMatrix;
    button: <K>(config: Widget_button_config) => SButton<K>;
    /** variants: `header` */
    markdown: (config: Widget_markdown_config | string) => SMarkdown;
    /** [markdown variant]: inline=true, label=false */
    header: (config: Widget_markdown_config | string) => SMarkdown;
    int: (config?: Omit<Widget_number_config, 'mode'>) => SNumber;
    /** [number variant] precent = mode=int, default=100, step=10, min=1, max=100, suffix='%', */
    percent: (config?: Omit<Widget_number_config, 'mode'>) => SNumber;
    float: (config?: Omit<Widget_number_config, 'mode'>) => SNumber;
    number: (config?: Omit<Widget_number_config, 'mode'>) => SNumber;
    list: <const T extends ISpec<IWidget<$WidgetTypes>>>(config: Widget_list_config<T>) => SList<T>;
    selectOne: <const T extends BaseSelectEntry>(config: Widget_selectOne_config<T>) => SSelectOne<T>;
    selectOneV2: (p: string[]) => SSelectOne<BaseSelectEntry>;
    selectOneV3: <T extends string>(p: T[], config?: Omit<Widget_selectOne_config<BaseSelectEntry<T>>, 'choices'>) => SSelectOne_<T>;
    selectMany: <const T extends BaseSelectEntry>(config: Widget_selectMany_config<T>) => SSelectMany<T>;
    /** see also: `fields` for a more practical api */
    group: <const T extends SchemaDict>(config?: Widget_group_config<T>) => SGroup<T>;
    fields: <const T extends SchemaDict>(fields: T, config?: Omit<Widget_group_config<T>, 'items'>) => SGroup<T>;
    choice: <const T extends {
        [key: string]: ISpec<IWidget<$WidgetTypes>>;
    }>(config: Omit<Widget_choices_config<T>, 'multi'>) => SChoices<T>;
    choices: <const T extends {
        [key: string]: ISpec<IWidget<$WidgetTypes>>;
    }>(config: Omit<Widget_choices_config<T>, 'multi'>) => SChoices<T>;
    ok: <const T extends SchemaDict>(config?: Widget_group_config<T>) => SimpleSpec<Widget_group<T>>;
    /** simple choice alternative api */
    tabs: <const T extends {
        [key: string]: ISpec<IWidget<$WidgetTypes>>;
    }>(items: Widget_choices_config<T>['items'], config?: Omit<Widget_choices_config<T>, 'multi' | 'items'>) => SimpleSpec<Widget_choices<T>>;
    optional: <const T extends ISpec<IWidget<$WidgetTypes>>>(p: Widget_optional_config<T>) => SOptional<T>;
    llmModel: (p?: {
        default?: OpenRouter_Models;
    }) => SSelectOne<{
        id: OpenRouter_Models;
        label: string;
    }>;
    /**
     * Calling this function will mount and instanciate the subform right away
     * Subform will be register in the root form `group`, using `__${key}__` as the key
     * This is a core abstraction that enables features like
     *  - mountting a widget at several places in the form
     *  - recursive forms
     *  - dynamic widgets depending on other widgets values
     * */
    shared: <W extends ISpec<IWidget<$WidgetTypes>>>(key: string, spec: W) => Widget_shared<W>;
    /** (@internal); */ _cache: {
        count: number;
    };
    /** (@internal) advanced way to restore form state. used internally */
    private __HYDRATE;
    _HYDRATE: <T extends ISpec<IWidget<$WidgetTypes>>>(parent: IWidget | null, spec: T, serial: any | null) => T['$Widget'];
}

declare const SimpleFormManager: FormManager<SimpleFormBuilder>;

export { $WidgetSym, type $WidgetTypes, ASSERT_ARRAY, ASSERT_EQUAL, ASSERT_STRING, type AbsoluteStyle, type Activity, AnimatedSizeUI, AspectLockButtonUI, AspectRatioSquareUI, type BaseSelectEntry, BaseWidget, BoundCommand, type BoundCommandOpts, BoundCommandSym, BoundMenu, type BoundMenuOpts, BoundMenuSym, Box, BoxBase, type BoxProps, BoxSubtle, BoxTitle, type BoxUIProps, Button, ComboUI, Command, CommandContext, CommandManager, CommandSym, CushyKitCtx, type CushyShortcut, type DomId, Dropdown, ErrorBoundaryFallback, FAIL, Form, FormAsDropdownConfigUI, FormHelpTextUI, FormManager, type FormProperties, type FormSerial, FormUI, type FormUIProps, type GetWidgetResult, type GetWidgetState, GlobalFormCtx, type IFormBuilder, type INodeStore, type ISpec, type IWidget, type IWidgetListLike, type IconName, Ikon, IkonOf, Input, InputBoolUI, InputNumberBase, InputNumberUI, type InstructType, JsonViewUI, KEYS, type KeyEv, type KeyName, ListControlsUI, ListItemCollapseBtnUI, Loader, META_NAME, MOD_KEY, ManualPromise, MarkdownUI, Menu, type MenuDef, type MenuEntry, type MenuEntryWithKey, type MenuID, MenuInstance, MenuItem, MenuRootUI, MenuUI, MenuWithoutProps, Message, MessageErrorUI, MessageInfoUI, MessageWarningUI, ModalShellUI, type MoveConflictResolution, type NodeData, type NodeId, type NodeKey, type NodeKeyKind, type OopenRouter_ModelInfo, type OpenRouter_Models, Panel, type Problem, type Problem_Ext, ProgressLine, Radio, Rate, type RelativeStyle, RenderItemTitleUI, ResolutionState, RevealCtx, type RevealPlacement, type RevealStack, RevealState, RevealStateLazy, RevealUI, type SBool, type SButton, type SChoices, type SColor, type SGroup, type SList, type SMarkdown, type SMatrix, type SNumber, type SOptional, type SQLITE_boolean, type SQLITE_boolean_, SQLITE_false, SQLITE_true, type SSeed, type SSelectMany, type SSelectMany_, type SSelectOne, type SSelectOne_, type SSize, type SSpacer, type SString, type SchemaDict, SelectPopupUI, SelectUI, Severity, type SharedWidgetConfig, type SharedWidgetSerial, SimpleFormBuilder, SimpleFormManager, SimpleMenuAction, SimpleMenuModal, SimpleSpec, type SizeAble, Slider, SpacerUI, type TabPositionConfig, Tag, ThemeCtx, Toggle, Tree, TreeEntryUI, TreeIcon1UI, TreeNode, type TreeScrollOptions, type TreeStorageConfig, TreeUI, TreeView, TreeViewCtx, TreeWidget, Trigger, VIOLATION, Whisper, WidgetBoolUI, WidgetChoices_BodyUI, WidgetChoices_HeaderUI, WidgetChoices_SelectHeaderUI, WidgetColorUI, type WidgetConfigFields, WidgetGroup_BlockUI, WidgetGroup_LineUI, WidgetInlineRunUI, WidgetList_BodyUI, WidgetList_LineUI, WidgetMardownUI, WidgetMatrixUI, type WidgetMenuAction, WidgetNumberUI, WidgetSeedUI, WidgetSelectManyUI, WidgetSelectMany_SelectUI, WidgetSelectMany_TabUI, WidgetSelectOneUI, WidgetSelectOne_SelectUI, WidgetSelectOne_TabUI, type WidgetSerialFields, WidgetSizeX_LineUI, WidgetSpacerUI, WidgetString_HeaderUI, WidgetString_TextareaBodyUI, WidgetString_TextareaHeaderUI, WidgetTooltipUI, WidgetWithLabelUI, Widget_ToggleUI, Widget_bool, type Widget_bool_config, type Widget_bool_serial, type Widget_bool_types, type Widget_bool_value, Widget_button, type Widget_button_config, type Widget_button_context, type Widget_button_serial, type Widget_button_types, type Widget_button_value, Widget_choices, type Widget_choices_config, type Widget_choices_serial, type Widget_choices_types, type Widget_choices_value, Widget_color, type Widget_color_config, type Widget_color_serial, type Widget_color_types, type Widget_color_value, Widget_group, type Widget_group_config, type Widget_group_serial, type Widget_group_types, type Widget_group_value, Widget_list, type Widget_list_config, type Widget_list_serial, type Widget_list_types, type Widget_list_value, Widget_markdown, type Widget_markdown_config, type Widget_markdown_serial, type Widget_markdown_types, type Widget_markdown_value, Widget_matrix, type Widget_matrix_cell, type Widget_matrix_config, type Widget_matrix_serial, type Widget_matrix_types, type Widget_matrix_value, Widget_number, type Widget_number_config, type Widget_number_serial, type Widget_number_types, type Widget_number_value, Widget_optional, type Widget_optional_config, type Widget_optional_serial, type Widget_optional_types, type Widget_optional_value, Widget_seed, type Widget_seed_config, Widget_seed_fromValue, type Widget_seed_serial, type Widget_seed_types, type Widget_seed_value, Widget_selectMany, type Widget_selectMany_config, Widget_selectMany_fromValue, type Widget_selectMany_serial, type Widget_selectMany_types, type Widget_selectMany_value, Widget_selectOne, type Widget_selectOne_config, Widget_selectOne_fromValue, type Widget_selectOne_serial, type Widget_selectOne_types, type Widget_selectOne_value, Widget_shared, type Widget_shared_config, Widget_shared_fromValue, type Widget_shared_serial, type Widget_shared_types, type Widget_shared_value, Widget_size, type Widget_size_config, Widget_size_fromValue, type Widget_size_serial, type Widget_size_types, type Widget_size_value, Widget_spacer, type Widget_spacer_config, Widget_spacer_fromValue, type Widget_spacer_serial, type Widget_spacer_types, type Widget_spacer_value, Widget_string, type Widget_string_config, Widget_string_fromValue, type Widget_string_serial, type Widget_string_types, type Widget_string_value, WigetSizeXUI, WigetSize_BlockUI, WigetSize_LineUI, activityManager, allIcons, applyRelative, asSTRING_orCrash, autoContrast, bang, clamp, command, commandManager, computePlacement, debounce, defaultHideDelay_whenNested, defaultHideDelay_whenRoot, defaultShowDelay_whenNested, defaultShowDelay_whenRoot, defaultTreeStorage, exhaust, formatColor, genUID, getActualWidgetToDisplay, getAllIcons, getBorderStatusForWidget, getCurrentForm_IMPL, getId, getIfWidgetIsCollapsible, getIfWidgetNeedAlignedLabel, getOS, getWidgetClass, global_RevealStack, hasMod, isBoundCommand, isBoundMenu, isCommand, isPromise, isWidget, isWidgetGroup, isWidgetOptional, isWidgetShared, isWidgetString, makeAutoObservableInheritance, makeLabelFromFieldName, menu, menuWithoutProps, menu_widgetActions, normalizeCushyShortcut, normalizeProblem, normalizeText, onKeyDownHandlers, openRouterInfos, parseFloatNoRoundingErr, parseShortcutToInputSequence, registerWidgetClass, runWithGlobalForm, searchMatches, toastError, toastImage, toastInfo, toastSuccess, unaccent, useColor, useCushyKit, useCushyKitOrNull, useReveal, useRevealOrNull, useSizeOf, useTreeView };
