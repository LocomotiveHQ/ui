/// <reference types="react" />
/// <reference types="node" />
import * as react from 'react';
import react__default, { ReactNode, DependencyList, CSSProperties, FC, KeyboardEvent as KeyboardEvent$1, MouseEvent as MouseEvent$1 } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare function debounce<T extends (...args: any[]) => any>(func: T, delay: number, maxWait?: number): (...funcArgs: Parameters<T>) => void;

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

type CovariantFn<out In, out Out> = {
    covarianceHack(_: In): Out;
}['covarianceHack'];

type CovariantFC<out P> = {
    covarianceHack(_: P): ReactNode;
}['covarianceHack'];

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
interface IWidget<K extends $WidgetTypes = $WidgetTypes> extends IWidgetMixins {
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
/**
 * those properties will be dynamically injected in every widget
 * by calling `applyWidgetMixinV2(this)` in the constructor,
 * Before the makeAutoObservable(this) call. If you're adding a new
 * base widget, you're expected to do that too.
 */
type IWidgetMixins = {
    $WidgetSym: typeof $WidgetSym;
    ui(): JSX.Element;
    body(): JSX.Element | undefined;
    header(): JSX.Element | undefined;
    defaultBody(): JSX.Element | undefined;
    defaultHeader(): JSX.Element | undefined;
    setCollapsed(
    /** true: collapse; false: expanded */
    val: boolean | undefined): void;
    /** toggle widget fold <-> unfolded */
    toggleCollapsed(): void;
    /**
     * Notify form that the value has been udpated
     * (and bump serial.lastUpdatedAt to Date.now())
     * 👉 Every widget must call this when value has been updated
     * */
    bumpValue(): void;
    /**
     * Notify form that a non-value serial has been udpated
     * 👉 every widget must call this when non-value serial has been updated
     * */
    bumpSerial(): void;
    readonly hasErrors: boolean;
    readonly customErrors: Problem[];
    readonly errors: Problem[];
};
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
};
type WidgetSerialFields<X> = X & SharedWidgetSerial;
type WidgetConfigFields<X, T extends $WidgetTypes> = X & SharedWidgetConfig<T>;
type SharedWidgetConfig<T extends $WidgetTypes> = {
    /** allow to specify custom headers */
    header?: null | ((p: {
        widget: T['$Widget'];
    }) => JSX.Element);
    /** allow to specify custom body */
    body?: null | ((p: {
        widget: T['$Widget'];
    }) => JSX.Element);
    /** will be called when value changed */
    onValueChange?: (val: T['$Value']) => void;
    presets?: Record<string, (form: T['$Widget']) => void>;
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
    items?: T | (() => T);
    topLevel?: boolean;
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
interface Widget_group<T extends SchemaDict> extends Widget_group_types<T>, IWidgetMixins {
}
declare class Widget_group<T extends SchemaDict> implements IWidget<Widget_group_types<T>> {
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
    set value(val: Widget_group_value<T>);
    get value(): Widget_group_value<T>;
    private valueLazy;
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
interface Widget_shared<T extends ISpec = ISpec> extends Widget_shared_types<T>, IWidgetMixins {
}
declare class Widget_shared<T extends ISpec = ISpec> implements IWidget<Widget_shared_types<T>> {
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
    FormUI: react.FunctionComponent<{
        form: Maybe<Form<ISpec<any>, IFormBuilder>>;
        theme?: string | undefined;
        className?: string | undefined;
        style?: react.CSSProperties | undefined;
    }>;
    /**
     * allow to quickly render the form in a react component
     * without having to import any component; usage:
     * | <div>{x.render()}</div>
     */
    render: () => ReactNode;
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

declare const FormUI: react.FunctionComponent<{
    form: Maybe<Form>;
    /** from your daisy-ui config */
    theme?: string | undefined;
    className?: string | undefined;
    style?: CSSProperties | undefined;
}>;

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
interface Widget_optional<T extends ISpec = ISpec> extends Widget_optional_types<T>, IWidgetMixins {
}
declare class Widget_optional<T extends ISpec = ISpec> implements IWidget<Widget_optional_types<T>> {
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
    set value(next: Widget_optional_value<T>);
    get value(): Widget_optional_value<T>;
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

type Widget_list_config<T extends ISpec> = WidgetConfigFields<{
    element: ((ix: number) => T) | T;
    min?: number;
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
interface Widget_list<T extends ISpec> extends Widget_list_types<T>, IWidgetMixins {
}
declare class Widget_list<T extends ISpec> implements IWidget<Widget_list_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    readonly spec: ISpec<Widget_list<T>>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_list<any>;
    }>;
    get DefaultBodyUI(): (<T_1 extends ISpec<IWidget<$WidgetTypes>>>(p: {
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
    schemaAt: (ix: number) => T;
    constructor(form: Form, parent: IWidget | null, spec: ISpec<Widget_list<T>>, serial?: Widget_list_serial<T>);
    setValue(val: Widget_list_value<T>): void;
    get value(): Widget_list_value<T>;
    collapseAllItems: () => void;
    expandAllItems: () => void;
    get baseErrors(): string[];
    addItem(p?: {
        skipBump?: true;
    }): void;
    removeAllItems: () => void;
    removeItem: (item: T['$Widget']) => void;
    moveItem: (oldIndex: number, newIndex: number) => void;
}

declare class SimpleSpec<W extends IWidget = IWidget> implements ISpec<W> {
    readonly type: W['type'];
    readonly config: W['$Config'];
    $Widget: W;
    $Type: W['type'];
    $Config: W['$Config'];
    $Serial: W['$Serial'];
    $Value: W['$Value'];
    LabelExtraUI: (p: {}) => null;
    Make: <X extends IWidget<$WidgetTypes>>(type: X['type'], config: X['$Config']) => SimpleSpec<X>;
    constructor(type: W['type'], config: W['$Config']);
    /** wrap widget spec to list stuff */
    list: (config?: Omit<Widget_list_config<any>, 'element'>) => SimpleSpec<Widget_list<this>>;
    optional: <const T extends SimpleSpec<IWidget<$WidgetTypes>>>(startActive?: boolean) => SimpleSpec<Widget_optional<this>>;
    shared: (key: string) => Widget_shared<this>;
    /** clone the spec, and patch the cloned config to make it hidden */
    hidden: () => SimpleSpec<W>;
}

declare const ModalShellUI: react.FunctionComponent<{
    title?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
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
    display?: "button" | "check" | undefined;
    expand?: boolean | undefined;
    icon?: string | undefined;
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
    stack: Activity[];
    push: (activity: Activity) => Trigger;
    pop: () => void;
    current: () => Activity | undefined;
    constructor();
}
declare const activityManger: ActivityManager;
interface Activity {
    /** uniquer activity uid */
    uid: string;
    /** if given, the activity is bound the the given ID */
    bound?: DomId | null;
    onStart?: () => void;
    onEvent?: (event: Event) => Trigger | null;
    onStop?: () => void;
    UI: FC<{}>;
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
    execute(): Trigger | Promise<Trigger>;
    NavBarBtnUI(p: {
        label?: string;
    }): react_jsx_runtime.JSX.Element;
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

type NO_PROPS = Record<string, never>;

/**
 * a simple Menu entry for when you don't want to resort to commands nor custom widgets
 * label will be used for shortcut binding and fuzzy menu search
 */
declare class SimpleMenuEntry {
    label: string;
    onPick: () => void;
    constructor(label: string, onPick: () => void);
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
 | SimpleMenuEntry;
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
        menu: MenuInstance<any>;
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

declare const applyWidgetMixinV2: (self: IWidget) => void;

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
    /** Set the icon of the button
     *  - Uses "material-symbols-outlined" as the icon set
     */
    icon?: string | undefined;
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
interface Widget_bool extends Widget_bool_types, IWidgetMixins {
}
declare class Widget_bool implements IWidget<Widget_bool_types> {
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

declare const WidgetBoolUI: react.FunctionComponent<{
    widget: Widget_bool;
}>;

type Widget_button_context<K> = {
    context: K;
    widget: Widget_button<K>;
};
type Widget_button_config<K = any> = WidgetConfigFields<{
    text?: string;
    kind?: `primary` | `special` | `warning`;
    useContext?: () => K;
    icon?: (ctx: Widget_button_context<K>) => string;
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
interface Widget_button<K> extends Widget_button_types<K>, IWidgetMixins {
}
declare class Widget_button<K> implements IWidget<Widget_button_types<K>> {
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
    top: number | undefined;
    bottom: number | undefined;
    left: number | undefined;
    right: number | undefined;
}
type SelectProps<T> = {
    label?: string;
    /** callback when a new option is added */
    onChange: null | ((next: T, self: AutoCompleteSelectState<T>) => void);
    /** list of all options */
    options?: (query: string) => T[];
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
interface Widget_choices<T extends SchemaDict = SchemaDict> extends Widget_choices_types<T>, IWidgetMixins {
}
declare class Widget_choices<T extends SchemaDict = SchemaDict> implements IWidget<Widget_choices_types<T>> {
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
interface Widget_color extends Widget_color_types, IWidgetMixins {
}
declare class Widget_color implements IWidget<Widget_color_types> {
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
interface Widget_markdown extends Widget_markdown_types, IWidgetMixins {
}
declare class Widget_markdown implements IWidget<Widget_markdown_types> {
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

declare const WidgetMardownUI: react.FunctionComponent<{
    widget: Widget_markdown;
}>;

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
interface Widget_matrix extends Widget_matrix_types, IWidgetMixins {
}
declare class Widget_matrix implements IWidget<Widget_matrix_types> {
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
interface Widget_number extends Widget_number_types, IWidgetMixins {
}
declare class Widget_number implements IWidget<Widget_number_types> {
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
declare const SelectPicker: (p: any) => react_jsx_runtime.JSX.Element;
declare const TagPicker: (p: any) => react_jsx_runtime.JSX.Element;
declare const MultiCascader: (p: any) => react_jsx_runtime.JSX.Element;
declare const Tree: (p: any) => react_jsx_runtime.JSX.Element;
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
interface Widget_seed extends Widget_seed_types, IWidgetMixins {
}
declare class Widget_seed implements IWidget<Widget_seed_types> {
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

declare const WidgetSeedUI: react.FunctionComponent<{
    widget: Widget_seed;
}>;

type BaseSelectEntry<T = string> = {
    id: T;
    label?: string;
};
type Widget_selectOne_config<T extends BaseSelectEntry> = WidgetConfigFields<{
    default?: T;
    choices: T[] | ((form: Form, self: Widget_selectOne<T>) => T[]);
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
interface Widget_selectOne<T> extends Widget_selectOne_types<T>, IWidgetMixins {
}
declare class Widget_selectOne<T extends BaseSelectEntry> implements IWidget<Widget_selectOne_types<T>> {
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
    choices: T[] | ((formRoot: Maybe<IWidget>) => T[]);
    appearance?: 'select' | 'tab';
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
interface Widget_selectMany<T extends BaseSelectEntry> extends Widget_selectMany_types<T>, IWidgetMixins {
}
declare class Widget_selectMany<T extends BaseSelectEntry> implements IWidget<Widget_selectMany_types<T>> {
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
interface Widget_size extends Widget_size_types, IWidgetMixins {
}
declare class Widget_size implements IWidget<Widget_size_types> {
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
interface Widget_spacer extends Widget_spacer_types, IWidgetMixins {
}
declare class Widget_spacer implements IWidget<Widget_spacer_types> {
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

declare const WidgetSpacerUI: react.FunctionComponent<{
    widget: Widget_spacer;
}>;

type Widget_string_config = WidgetConfigFields<{
    default?: string;
    textarea?: boolean;
    placeHolder?: string;
    pattern?: string;
    inputType?: 'text' | 'password' | 'email' | 'tel' | 'url' | 'time' | 'date' | 'datetime-local' | 'color';
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
interface Widget_string extends Widget_string_types, IWidgetMixins {
}
declare class Widget_string implements IWidget<Widget_string_types> {
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

declare const WidgetString_TextareaHeaderUI: react.FunctionComponent<{
    widget: Widget_string;
}>;
declare const WidgetString_TextareaBodyUI: react.FunctionComponent<{
    widget: Widget_string;
}>;
declare const WidgetString_HeaderUI: react.FunctionComponent<{
    widget: Widget_string;
}>;

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

declare class SimpleFormBuilder implements IFormBuilder {
    form: Form<IWidget, SimpleFormBuilder>;
    /** (@internal) DO NOT USE YOURSELF */
    SpecCtor: typeof SimpleSpec;
    /** (@internal) don't call this yourself */
    constructor(form: Form<IWidget, SimpleFormBuilder>);
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
    _HYDRATE: <T extends ISpec<IWidget<$WidgetTypes>>>(parent: IWidget | null, spec: T, serial: any | null) => T['$Widget'];
}

declare const SimpleFormManager: FormManager<SimpleFormBuilder>;

export { $WidgetSym, type $WidgetTypes, ASSERT_ARRAY, ASSERT_EQUAL, ASSERT_STRING, type Activity, AnimatedSizeUI, AspectLockButtonUI, AspectRatioSquareUI, type BaseSelectEntry, BoundCommand, type BoundCommandOpts, BoundCommandSym, BoundMenu, type BoundMenuOpts, BoundMenuSym, Button, ComboUI, Command, CommandContext, CommandManager, CommandSym, CushyKitCtx, type CushyShortcut, type DomId, Dropdown, ErrorBoundaryFallback, Form, FormHelpTextUI, FormManager, type FormProperties, type FormSerial, FormUI, type GetWidgetResult, type GetWidgetState, GlobalFormCtx, type IFormBuilder, type ISpec, type IWidget, type IWidgetListLike, type IWidgetMixins, Input, InputBoolUI, InputNumberBase, InputNumberUI, type InstructType, JsonViewUI, type KeyName, ListControlsUI, ListItemCollapseBtnUI, Loader, META_NAME, MOD_KEY, ManualPromise, MarkdownUI, Menu, type MenuDef, type MenuEntry, type MenuEntryWithKey, type MenuID, MenuInstance, MenuItem, MenuRootUI, MenuUI, MenuWithoutProps, Message, MessageErrorUI, MessageInfoUI, MessageWarningUI, ModalShellUI, MultiCascader, type OopenRouter_ModelInfo, type OpenRouter_Models, Panel, type Problem, type Problem_Ext, ProgressLine, Radio, Rate, ResolutionState, RevealCtx, type RevealPlacement, type RevealStack, RevealState, RevealStateLazy, RevealUI, type SBool, type SButton, type SChoices, type SColor, type SGroup, type SList, type SMarkdown, type SMatrix, type SNumber, type SOptional, type SSeed, type SSelectMany, type SSelectMany_, type SSelectOne, type SSelectOne_, type SSize, type SSpacer, type SString, type SchemaDict, SelectPicker, SelectPopupUI, SelectUI, Severity, type SharedWidgetConfig, type SharedWidgetSerial, SimpleFormBuilder, SimpleFormManager, SimpleMenuEntry, SimpleSpec, type SizeAble, Slider, SpacerUI, type TabPositionConfig, Tag, TagPicker, Toggle, Tree, Trigger, Whisper, WidgetBoolUI, WidgetChoices_BodyUI, WidgetChoices_HeaderUI, WidgetChoices_SelectHeaderUI, WidgetColorUI, type WidgetConfigFields, WidgetGroup_BlockUI, WidgetGroup_LineUI, WidgetInlineRunUI, WidgetList_BodyUI, WidgetList_LineUI, WidgetMardownUI, WidgetMatrixUI, WidgetNumberUI, WidgetSeedUI, WidgetSelectManyUI, WidgetSelectMany_SelectUI, WidgetSelectMany_TabUI, WidgetSelectOneUI, WidgetSelectOne_SelectUI, WidgetSelectOne_TabUI, type WidgetSerialFields, WidgetSizeX_LineUI, WidgetSpacerUI, WidgetString_HeaderUI, WidgetString_TextareaBodyUI, WidgetString_TextareaHeaderUI, WidgetTooltipUI, WidgetWithLabelUI, Widget_ToggleUI, Widget_bool, type Widget_bool_config, type Widget_bool_serial, type Widget_bool_types, type Widget_bool_value, Widget_button, type Widget_button_config, type Widget_button_context, type Widget_button_serial, type Widget_button_types, type Widget_button_value, Widget_choices, type Widget_choices_config, type Widget_choices_serial, type Widget_choices_types, type Widget_choices_value, Widget_color, type Widget_color_config, type Widget_color_serial, type Widget_color_types, type Widget_color_value, Widget_group, type Widget_group_config, type Widget_group_serial, type Widget_group_types, type Widget_group_value, Widget_list, type Widget_list_config, type Widget_list_serial, type Widget_list_types, type Widget_list_value, Widget_markdown, type Widget_markdown_config, type Widget_markdown_serial, type Widget_markdown_types, type Widget_markdown_value, Widget_matrix, type Widget_matrix_cell, type Widget_matrix_config, type Widget_matrix_serial, type Widget_matrix_types, type Widget_matrix_value, Widget_number, type Widget_number_config, type Widget_number_serial, type Widget_number_types, type Widget_number_value, Widget_optional, type Widget_optional_config, type Widget_optional_serial, type Widget_optional_types, type Widget_optional_value, Widget_seed, type Widget_seed_config, Widget_seed_fromValue, type Widget_seed_serial, type Widget_seed_types, type Widget_seed_value, Widget_selectMany, type Widget_selectMany_config, Widget_selectMany_fromValue, type Widget_selectMany_serial, type Widget_selectMany_types, type Widget_selectMany_value, Widget_selectOne, type Widget_selectOne_config, Widget_selectOne_fromValue, type Widget_selectOne_serial, type Widget_selectOne_types, type Widget_selectOne_value, Widget_shared, type Widget_shared_config, Widget_shared_fromValue, type Widget_shared_serial, type Widget_shared_types, type Widget_shared_value, Widget_size, type Widget_size_config, Widget_size_fromValue, type Widget_size_serial, type Widget_size_types, type Widget_size_value, Widget_spacer, type Widget_spacer_config, Widget_spacer_fromValue, type Widget_spacer_serial, type Widget_spacer_types, type Widget_spacer_value, Widget_string, type Widget_string_config, Widget_string_fromValue, type Widget_string_serial, type Widget_string_types, type Widget_string_value, WigetSizeXUI, WigetSize_BlockUI, WigetSize_LineUI, activityManger, applyWidgetMixinV2, asSTRING_orCrash, bang, command, commandManager, computePlacement, debounce, defaultHideDelay_whenNested, defaultHideDelay_whenRoot, defaultShowDelay_whenNested, defaultShowDelay_whenRoot, exhaust, getActualWidgetToDisplay, getBorderStatusForWidget, getCurrentForm_IMPL, getIfWidgetIsCollapsible, getIfWidgetNeedAlignedLabel, getWidgetClass, global_RevealStack, hasMod, isBoundCommand, isBoundMenu, isCommand, isPromise, isWidget, isWidgetGroup, isWidgetOptional, isWidgetShared, makeLabelFromFieldName, menu, menuWithoutProps, menu_widgetActions, normalizeCushyShortcut, normalizeProblem, normalizeText, openRouterInfos, parseFloatNoRoundingErr, parseShortcutToInputSequence, registerWidgetClass, runWithGlobalForm, searchMatches, toastError, toastImage, toastInfo, toastSuccess, unaccent, useCushyKit, useCushyKitOrNull, useReveal, useRevealOrNull, useSizeOf };
