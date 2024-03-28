/// <reference types="react" />
/// <reference types="node" />
import * as react from 'react';
import react__default, { ReactNode, DependencyList, FC, CSSProperties } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { FallbackProps } from 'react-error-boundary';
import * as react_toastify from 'react-toastify';

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

declare const _FIX_INDENTATION: (str: TemplateStringsArray) => string;

declare function debounce<T extends (...args: any[]) => any>(func: T, delay: number, maxWait?: number): (...funcArgs: Parameters<T>) => void;

declare function makeLabelFromFieldName(s: string): string;

declare const JsonViewUI: react.FunctionComponent<{
    value?: Maybe<object>;
}>;

declare const ErrorBoundaryFallback: (p: FallbackProps) => react_jsx_runtime.JSX.Element;

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
    refFn: RefFn;
    size: DynamicSize;
};

declare const AnimatedSizeUI: react.FunctionComponent<{
    className?: string | undefined;
    children?: ReactNode;
}>;

/**
 * you need one per project;
 * singleton.
 * allow to inject the proper form config for your specific project.
 * to avoid problem with hot-reload, export an instance from a module directly and use it from there.
 */
declare class FormManager<MyFormBuilder extends IFormBuilder> {
    builderCtor: {
        new (form: Form<SchemaDict, MyFormBuilder>): MyFormBuilder;
    };
    constructor(builderCtor: {
        new (form: Form<SchemaDict, MyFormBuilder>): MyFormBuilder;
    });
    _builders: WeakMap<Form<SchemaDict, IFormBuilder>, MyFormBuilder>;
    getBuilder: (form: Form<any, any>) => MyFormBuilder;
    form: <FIELDS extends SchemaDict>(ui: (form: MyFormBuilder) => FIELDS, formProperties?: FormProperties<FIELDS>) => Form<FIELDS, MyFormBuilder>;
    useForm: <FIELDS extends SchemaDict>(ui: (form: MyFormBuilder) => FIELDS, formProperties?: FormProperties<FIELDS>, deps?: DependencyList) => Form<FIELDS, MyFormBuilder>;
    /**
     * copy pasted from useForm, with a better name
     * intented to be used as `cushy.forms.use(...)`
     */
    use: <FIELDS extends SchemaDict>(ui: (form: MyFormBuilder) => FIELDS, formProperties?: FormProperties<FIELDS>, deps?: DependencyList) => Form<FIELDS, MyFormBuilder>;
}

type Widget_group_config<T extends SchemaDict> = WidgetConfigFields<{
    items?: (() => T) | T;
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
    config: Widget_group_config<T>;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_group<any>;
    }>;
    get DefaultBodyUI(): ((<T_1 extends SchemaDict>(p: {
        className?: string | undefined;
        widget: Widget_group<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    }) | undefined;
    static Prop: <T_1 extends SchemaDict>(config: Widget_group_config<T_1>) => Spec<IWidget<$WidgetTypes>>;
    get summary(): string;
    readonly id: string;
    readonly type: 'group';
    collapseAllEntries: () => void;
    expandAllEntries: () => void;
    /** all [key,value] pairs */
    get entries(): [string, IWidget<$WidgetTypes>][];
    at: <K extends keyof T>(key: K) => T[K]["$Widget"];
    get: <K extends keyof T>(key: K) => T[K]["$Value"];
    /** the dict of all child widgets */
    fields: {
        [k in keyof T]: T[k]['$Widget'];
    };
    serial: Widget_group_serial<T>;
    background: boolean;
    private _defaultSerial;
    constructor(form: Form, parent: IWidget | null, config: Widget_group_config<T>, serial?: Widget_group_serial<T>, 
    /** used to register self as the root, before we start instanciating anything */
    preHydrate?: (self: Widget_group<any>) => void);
    value: {
        [k in keyof T]: GetWidgetResult<T[k]>;
    };
}

type Widget_optional_config<T extends Spec = Spec> = WidgetConfigFields<{
    startActive?: boolean;
    widget: T;
}, Widget_optional_types<T>>;
type Widget_optional_serial<T extends Spec = Spec> = WidgetSerialFields<{
    type: 'optional';
    child?: Maybe<T['$Serial']>;
    active: boolean;
}>;
type Widget_optional_value<T extends Spec = Spec> = Maybe<T['$Value']>;
type Widget_optional_types<T extends Spec = Spec> = {
    $Type: 'optional';
    $Config: Widget_optional_config<T>;
    $Serial: Widget_optional_serial<T>;
    $Value: Widget_optional_value<T>;
    $Widget: Widget_optional_value<T>;
};
interface Widget_optional<T extends Spec = Spec> extends Widget_optional_types<T>, IWidgetMixins {
}
declare class Widget_optional<T extends Spec = Spec> implements IWidget<Widget_optional_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    config: Widget_optional_config<T>;
    DefaultHeaderUI: undefined;
    DefaultBodyUI: undefined;
    readonly id: string;
    readonly type: 'optional';
    serial: Widget_optional_serial<T>;
    child: T['$Widget'];
    get childOrThrow(): T['$Widget'];
    setActive: (value: boolean) => void;
    /**
     * as of 2024-03-14, this is only called in the constructor
     * TODO: inline ?
     */
    private _ensureChildIsHydrated;
    constructor(form: Form, parent: IWidget | null, config: Widget_optional_config<T>, serial?: Widget_optional_serial<T>);
    get value(): Widget_optional_value<T>;
}

type Widget_shared_config<T extends Spec = Spec> = WidgetConfigFields<{
    /** shared widgets must be registered in the form root group */
    rootKey: string;
    widget: T['$Widget'];
}, Widget_shared_types<T>>;
type Widget_shared_serial = WidgetSerialFields<{
    type: 'shared';
}>;
type Widget_shared_value<T extends Spec = Spec> = T['$Value'];
type Widget_shared_types<T extends Spec = Spec> = {
    $Type: 'shared';
    $Config: Widget_shared_config<T>;
    $Serial: Widget_shared_serial;
    $Value: Widget_shared_value<T>;
    $Widget: Spec['$Widget'];
};
interface Widget_shared<T extends Spec = Spec> extends Widget_shared_types<T>, IWidgetMixins {
}
declare class Widget_shared<T extends Spec = Spec> implements IWidget<Widget_shared_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    config: Widget_shared_config<T>;
    readonly id: string;
    readonly type: 'shared';
    readonly DefaultHeaderUI: undefined;
    readonly DefaultBodyUI: undefined;
    $Widget: T['$Widget'];
    serial: Widget_shared_serial;
    get shared(): T['$Widget'];
    hidden: () => Widget_shared<T>;
    constructor(form: Form, parent: IWidget | null, config: Widget_shared_config<T>, serial?: Widget_shared_serial);
    get value(): Widget_shared_value<T>;
}

interface IFormBuilder {
    _cache: {
        count: number;
    };
    _HYDRATE: <T extends ISpec>(self: IWidget | null, unmounted: T, serial: any | null) => T['$Widget'];
    optional: <const T extends Spec<IWidget<$WidgetTypes>>>(p: Widget_optional_config<T>) => Spec<Widget_optional<T>>;
    shared: <W extends Spec<IWidget<$WidgetTypes>>>(key: string, unmounted: W) => Widget_shared<W>;
}
type FormProperties<FIELDS extends SchemaDict> = {
    name: string;
    onSerialChange?: (form: Widget_group<FIELDS>) => void;
    onValueChange?: (form: Widget_group<FIELDS>) => void;
    initialValue?: () => Maybe<object>;
};
declare class Form<const FIELDS extends SchemaDict = SchemaDict, const out MyFormBuilder extends IFormBuilder = IFormBuilder> {
    manager: FormManager<any>;
    ui: (form: IFormBuilder) => FIELDS;
    formConfig: FormProperties<FIELDS>;
    error: Maybe<string>;
    /** shortcut to access the <FormUI /> component without having to import it first */
    FormUI: react.FunctionComponent<{
        className?: string | undefined;
        form: Maybe<Form<any, any>>;
    }>;
    /**
     * allow to quickly render the form in a react component
     * without having to import any component; usage:
     * | <div>{x.render()}</div>
     */
    render: () => ReactNode;
    at: <K extends keyof FIELDS>(key: K) => FIELDS[K]["$Widget"];
    get: <K extends keyof FIELDS>(key: K) => FIELDS[K]["$Value"];
    get value(): Widget_group_value<FIELDS>;
    get serial(): Widget_group_serial<FIELDS>;
    get fields(): {
        [k in keyof FIELDS]: FIELDS[k]['$Widget'];
    };
    get root(): Widget_group<FIELDS>;
    private valueLastUpdatedAt;
    private serialLastUpdatedAt;
    private _onSerialChange;
    private _onValueChange;
    /** every widget node must call this function once it's value change */
    valueChanged: (widget: IWidget) => void;
    /** every widget node must call this function once it's serial changed */
    serialChanged: (_widget: IWidget) => void;
    valueUpdatedAt?: Timestamp;
    formUpdatedAt?: Timestamp;
    builder: MyFormBuilder;
    /** (@internal) will be set at builer creation, to allow for dyanmic recursive forms */
    _ROOT: Widget_group<FIELDS>;
    knownShared: Map<string, IWidget<$WidgetTypes>>;
    constructor(manager: FormManager<any>, ui: (form: IFormBuilder) => FIELDS, formConfig: FormProperties<FIELDS>);
    ready: boolean;
    init: () => Widget_group<FIELDS>;
}

type KnownCustomNode_File = "" | "https://civitai.com/api/download/models/158997" | "https://civitai.com/api/download/models/23296" | "https://civitai.com/api/download/models/23467" | "https://civitai.com/api/download/models/23649" | "https://civitai.com/api/download/models/23884" | "https://civitai.com/api/download/models/24154" | "https://civitai.com/api/download/models/24679" | "https://civitai.com/api/download/models/25114" | "https://civitai.com/api/download/models/29750" | "https://civitai.com/api/download/models/29755" | "https://civitai.com/api/download/models/29772" | "https://civitai.com/api/download/models/29773" | "https://civitai.com/api/download/models/29774" | "https://civitai.com/api/download/models/31591" | "https://civitai.com/api/download/models/31618" | "https://civitai.com/api/download/models/32717" | "https://civitai.com/api/download/models/47776" | "https://gist.github.com/alkemann/7361b8eb966f29c8238fd323409efb68/raw/f9605be0b38d38d3e3a2988f89248ff557010076/alkemann.py" | "https://git.mmaker.moe/mmaker/sd-webui-color-enhance" | "https://github.com/0xbitches/ComfyUI-LCM" | "https://github.com/1038lab/ComfyUI-GPT2P" | "https://github.com/11cafe/comfyui-workspace-manager" | "https://github.com/11dogzi/Comfyui-ergouzi-Nodes" | "https://github.com/1shadow1/hayo_comfyui_nodes/raw/main/LZCNodes.py" | "https://github.com/42lux/ComfyUI-safety-checker" | "https://github.com/438443467/ComfyUI-GPT4V-Image-Captioner" | "https://github.com/54rt1n/ComfyUI-DareMerge" | "https://github.com/80sVectorz/ComfyUI-Static-Primitives" | "https://github.com/a1lazydog/ComfyUI-AudioScheduler" | "https://github.com/AbdullahAlfaraj/Comfy-Photoshop-SD" | "https://github.com/AbyssYuan0/ComfyUI_BadgerTools" | "https://github.com/abyz22/image_control" | "https://github.com/Acly/comfyui-inpaint-nodes" | "https://github.com/Acly/comfyui-tooling-nodes" | "https://github.com/adbrasi/ComfyUI-TrashNodes-DownloadHuggingface" | "https://github.com/adieyal/comfyui-dynamicprompts" | "https://github.com/adriflex/ComfyUI_Blender_Texdiff" | "https://github.com/aegis72/aegisflow_utility_nodes" | "https://github.com/aegis72/comfyui-styles-all" | "https://github.com/ai-liam/comfyui_liam_util" | "https://github.com/AI2lab/comfyUI-tool-2lab" | "https://github.com/aianimation55/ComfyUI-FatLabels" | "https://github.com/AIGCTeam/ComfyUI_kkTranslator_nodes" | "https://github.com/AIGODLIKE/AIGODLIKE-ComfyUI-Studio" | "https://github.com/AIGODLIKE/AIGODLIKE-COMFYUI-TRANSLATION" | "https://github.com/AIGODLIKE/ComfyUI-CUP" | "https://github.com/ailex000/ComfyUI-Extensions/raw/main/image-gallery/imageGallery.js" | "https://github.com/AiMiDi/ComfyUI-Aimidi-nodes" | "https://github.com/AInseven/ComfyUI-fastblend" | "https://github.com/AIrjen/OneButtonPrompt" | "https://github.com/AlekPet/ComfyUI_Custom_Nodes_AlekPet" | "https://github.com/alexopus/ComfyUI-Image-Saver" | "https://github.com/ali1234/comfyui-job-iterator" | "https://github.com/alisson-anjos/ComfyUI-LLaVA-Describer" | "https://github.com/alpertunga-bile/prompt-generator-comfyui" | "https://github.com/alsritter/asymmetric-tiling-comfyui" | "https://github.com/alt-key-project/comfyui-dream-project" | "https://github.com/alt-key-project/comfyui-dream-video-batches" | "https://github.com/Alysondao/Comfyui-Yolov8-JSON" | "https://github.com/Amorano/Jovimetrix" | "https://github.com/an90ray/ComfyUI_RErouter_CustomNodes" | "https://github.com/andersxa/comfyui-PromptAttention" | "https://github.com/angeloshredder/StableCascadeResizer" | "https://github.com/ansonkao/comfyui-geometry" | "https://github.com/antrobot1234/antrobots-comfyUI-nodepack" | "https://github.com/ArdeniusAI/CPlus_Ardenius" | "https://github.com/aria1th/ComfyUI-LogicUtils" | "https://github.com/ArtBot2023/CharacterFaceSwap" | "https://github.com/ArtVentureX/comfyui-animatediff" | "https://github.com/asagi4/ComfyUI-CADS" | "https://github.com/asagi4/comfyui-prompt-control" | "https://github.com/asagi4/comfyui-utility-nodes" | "https://github.com/AshMartian/ComfyUI-DirGir/raw/main/dir_loop.py" | "https://github.com/AshMartian/ComfyUI-DirGir/raw/main/dir_picker.py" | "https://github.com/aszc-dev/ComfyUI-CoreMLSuite" | "https://github.com/atmaranto/ComfyUI-SaveAsScript" | "https://github.com/AuroBit/ComfyUI-AnimateAnyone-reproduction" | "https://github.com/AuroBit/ComfyUI-OOTDiffusion" | "https://github.com/AustinMroz/ComfyUI-SpliceTools" | "https://github.com/avatechai/avatar-graph-comfyui" | "https://github.com/azure-dragon-ai/ComfyUI-ClipScore-Nodes" | "https://github.com/BadCafeCode/masquerade-nodes-comfyui" | "https://github.com/badjeff/comfyui_lora_tag_loader" | "https://github.com/banodoco/steerable-motion" | "https://github.com/bash-j/mikey_nodes" | "https://github.com/bedovyy/ComfyUI_NAIDGenerator" | "https://github.com/Beinsezii/bsz-cui-extras" | "https://github.com/BennyKok/comfyui-deploy" | "https://github.com/biegert/ComfyUI-CLIPSeg/raw/main/custom_nodes/clipseg.py" | "https://github.com/Big-Idea-Technology/ComfyUI_Image_Text_Overlay" | "https://github.com/Big-Idea-Technology/ComfyUI_T5_LLM_Node" | "https://github.com/Bikecicle/ComfyUI-Waveform-Extensions/raw/main/EXT_AudioManipulation.py" | "https://github.com/Bikecicle/ComfyUI-Waveform-Extensions/raw/main/EXT_VariationUtils.py" | "https://github.com/bilal-arikan/ComfyUI_TextAssets" | "https://github.com/Billius-AI/ComfyUI-Path-Helper" | "https://github.com/bkunbargi/BrevImage/raw/main/BrevLoadImage.py" | "https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb" | "https://github.com/BlenderNeko/ComfyUI_Cutoff" | "https://github.com/BlenderNeko/ComfyUI_Noise" | "https://github.com/BlenderNeko/ComfyUI_SeeCoder" | "https://github.com/BlenderNeko/ComfyUI_TiledKSampler" | "https://github.com/blepping/ComfyUI-bleh" | "https://github.com/blepping/ComfyUI-sonar" | "https://github.com/bmad4ever/comfyui_ab_samplercustom" | "https://github.com/bmad4ever/comfyui_bmad_nodes" | "https://github.com/bmad4ever/comfyui_lists_cartesian_product" | "https://github.com/bmad4ever/comfyui_quilting" | "https://github.com/bmad4ever/comfyui_wfc_like" | "https://github.com/bmad4ever/ComfyUI-Bmad-DirtyUndoRedo" | "https://github.com/bradsec/ComfyUI_ResolutionSelector" | "https://github.com/braintacles/braintacles-comfyui-nodes" | "https://github.com/brianfitzgerald/style_aligned_comfy" | "https://github.com/bronkula/comfyui-fitsize" | "https://github.com/bruefire/ComfyUI-SeqImageLoader" | "https://github.com/budihartono/comfyui_otonx_nodes" | "https://github.com/bvhari/ComfyUI_ImageProcessing" | "https://github.com/bvhari/ComfyUI_LatentToRGB" | "https://github.com/bvhari/ComfyUI_PerpWeight" | "https://github.com/BXYMartin/ComfyUI-InstantIDUtils" | "https://github.com/CaptainGrock/ComfyUIInvisibleWatermark/raw/main/Invisible%20Watermark.py" | "https://github.com/catscandrive/comfyui-imagesubfolders/raw/main/loadImageWithSubfolders.py" | "https://github.com/CC-BryanOttho/ComfyUI_API_Manager" | "https://github.com/cdb-boop/ComfyUI-Bringing-Old-Photos-Back-to-Life" | "https://github.com/cdb-boop/comfyui-image-round" | "https://github.com/celsojr2013/comfyui_simpletools/raw/main/google_translator.py" | "https://github.com/celsojr2013/comfyui_simpletools/raw/main/parameters.py" | "https://github.com/celsojr2013/comfyui_simpletools/raw/main/resolution_solver.py" | "https://github.com/cerspense/ComfyUI_cspnodes" | "https://github.com/ceruleandeep/ComfyUI-LLaVA-Captioner" | "https://github.com/Chan-0312/ComfyUI-EasyDeforum" | "https://github.com/Chan-0312/ComfyUI-IPAnimate" | "https://github.com/Chan-0312/ComfyUI-Prompt-Preview" | "https://github.com/chaojie/ComfyUI-Champ" | "https://github.com/chaojie/ComfyUI-DragAnything" | "https://github.com/chaojie/ComfyUI-DragNUWA" | "https://github.com/chaojie/ComfyUI-dust3r" | "https://github.com/chaojie/ComfyUI-DynamiCrafter" | "https://github.com/chaojie/ComfyUI-Gemma" | "https://github.com/chaojie/ComfyUI-I2VGEN-XL" | "https://github.com/chaojie/ComfyUI-LightGlue" | "https://github.com/chaojie/ComfyUI-Moore-AnimateAnyone" | "https://github.com/chaojie/ComfyUI-Motion-Vector-Extractor" | "https://github.com/chaojie/ComfyUI-MotionCtrl" | "https://github.com/chaojie/ComfyUI-MotionCtrl-SVD" | "https://github.com/chaojie/ComfyUI-Open-Sora" | "https://github.com/chaojie/ComfyUI-Panda3d" | "https://github.com/chaojie/ComfyUI-Pymunk" | "https://github.com/chaojie/ComfyUI-RAFT" | "https://github.com/chaojie/ComfyUI-Trajectory" | "https://github.com/chaosaiart/Chaosaiart-Nodes" | "https://github.com/Chaoses-Ib/ComfyUI_Ib_CustomNodes" | "https://github.com/chflame163/ComfyUI_FaceSimilarity" | "https://github.com/chflame163/ComfyUI_LayerStyle" | "https://github.com/chflame163/ComfyUI_MSSpeech_TTS" | "https://github.com/chflame163/ComfyUI_WordCloud" | "https://github.com/chibiace/ComfyUI-Chibi-Nodes" | "https://github.com/chrisgoringe/cg-image-picker" | "https://github.com/chrisgoringe/cg-noise" | "https://github.com/chrisgoringe/cg-prompt-info" | "https://github.com/chrisgoringe/cg-use-everywhere" | "https://github.com/chrish-slingshot/CrasHUtils" | "https://github.com/city96/ComfyUI_ColorMod" | "https://github.com/city96/ComfyUI_DiT" | "https://github.com/city96/ComfyUI_ExtraModels" | "https://github.com/city96/ComfyUI_NetDist" | "https://github.com/city96/SD-Advanced-Noise" | "https://github.com/city96/SD-Latent-Interposer" | "https://github.com/city96/SD-Latent-Upscaler" | "https://github.com/civitai/comfy-nodes" | "https://github.com/Clybius/ComfyUI-Extra-Samplers" | "https://github.com/Clybius/ComfyUI-Latent-Modifiers" | "https://github.com/comfyanonymous/ComfyUI" | "https://github.com/comfyanonymous/ComfyUI_experiments" | "https://github.com/concarne000/ConCarneNode" | "https://github.com/coreyryanhanson/ComfyQR" | "https://github.com/coreyryanhanson/ComfyQR-scanning-nodes" | "https://github.com/CosmicLaca/ComfyUI_Primere_Nodes" | "https://github.com/cozymantis/cozy-utils-comfyui-nodes" | "https://github.com/cozymantis/human-parser-comfyui-node" | "https://github.com/cozymantis/pose-generator-comfyui-node" | "https://github.com/crystian/ComfyUI-Crystools" | "https://github.com/crystian/ComfyUI-Crystools-save" | "https://github.com/cubiq/ComfyUI_essentials" | "https://github.com/cubiq/ComfyUI_FaceAnalysis" | "https://github.com/cubiq/ComfyUI_InstantID" | "https://github.com/cubiq/ComfyUI_IPAdapter_plus" | "https://github.com/cubiq/ComfyUI_SimpleMath" | "https://github.com/CYBERLOOM-INC/ComfyUI-nodes-hnmr" | "https://github.com/czcz1024/Comfyui-FaceCompare" | "https://github.com/dagthomas/comfyui_dagthomas" | "https://github.com/Danand/ComfyUI-ComfyCouple" | "https://github.com/daniel-lewis-ab/ComfyUI-Llama" | "https://github.com/daniel-lewis-ab/ComfyUI-TTS" | "https://github.com/darkpixel/darkprompts" | "https://github.com/davask/ComfyUI-MarasIT-Nodes" | "https://github.com/dave-palt/comfyui_DSP_imagehelpers" | "https://github.com/Davemane42/ComfyUI_Dave_CustomNode" | "https://github.com/dawangraoming/ComfyUI_ksampler_gpu/raw/main/ksampler_gpu.py" | "https://github.com/daxcay/ComfyUI-JDCN" | "https://github.com/daxthin/DZ-FaceDetailer" | "https://github.com/dchatel/comfyui_facetools" | "https://github.com/Derfuu/Derfuu_ComfyUI_ModdedNodes" | "https://github.com/deroberon/demofusion-comfyui" | "https://github.com/deroberon/StableZero123-comfyui" | "https://github.com/dfl/comfyui-clip-with-break" | "https://github.com/dfl/comfyui-tcd-scheduler" | "https://github.com/diffus3/ComfyUI-extensions/raw/main/multiReroute/multireroute.js" | "https://github.com/diffus3/ComfyUI-extensions/raw/main/setget/setget.js" | "https://github.com/DigitalIO/ComfyUI-stable-wildcards" | "https://github.com/digitaljohn/comfyui-propost" | "https://github.com/DimaChaichan/LAizypainter-Exporter-ComfyUI" | "https://github.com/dimtoneff/ComfyUI-PixelArt-Detector" | "https://github.com/diontimmer/ComfyUI-Vextra-Nodes" | "https://github.com/discopixel-studio/comfyui-discopixel" | "https://github.com/diStyApps/ComfyUI_FrameMaker" | "https://github.com/djbielejeski/a-person-mask-generator" | "https://github.com/dmarx/ComfyUI-AudioReactive" | "https://github.com/dmarx/ComfyUI-Keyframed" | "https://github.com/dmMaze/sketch2manga" | "https://github.com/DonBaronFactory/ComfyUI-Cre8it-Nodes" | "https://github.com/drago87/ComfyUI_Dragos_Nodes" | "https://github.com/DrJKL/ComfyUI-Anchors" | "https://github.com/drustan-hawk/primitive-types" | "https://github.com/ealkanat/comfyui_easy_padding" | "https://github.com/edenartlab/eden_comfy_pipelines" | "https://github.com/Electrofried/ComfyUI-OpenAINode" | "https://github.com/EllangoK/ComfyUI-post-processing-nodes" | "https://github.com/evanspearman/ComfyMath" | "https://github.com/ExponentialML/ComfyUI_ModelScopeT2V" | "https://github.com/ExponentialML/ComfyUI_Native_DynamiCrafter" | "https://github.com/ExponentialML/ComfyUI_VisualStylePrompting" | "https://github.com/Extraltodeus/ComfyUI-AutomaticCFG" | "https://github.com/Extraltodeus/LoadLoraWithTags" | "https://github.com/Extraltodeus/noise_latent_perlinpinpin" | "https://github.com/Extraltodeus/sigmas_tools_and_the_golden_scheduler" | "https://github.com/failfa-st/failfast-comfyui-extensions" | "https://github.com/Fannovel16/comfyui_controlnet_aux" | "https://github.com/Fannovel16/ComfyUI-Frame-Interpolation" | "https://github.com/Fannovel16/ComfyUI-Loopchain" | "https://github.com/Fannovel16/ComfyUI-MotionDiff" | "https://github.com/Fannovel16/ComfyUI-Video-Matting" | "https://github.com/fearnworks/ComfyUI_FearnworksNodes/raw/main/fw_nodes.py" | "https://github.com/Feidorian/feidorian-ComfyNodes" | "https://github.com/fexli/fexli-util-node-comfyui" | "https://github.com/Fictiverse/ComfyUI_Fictiverse" | "https://github.com/filipemeneses/comfy_pixelization" | "https://github.com/filliptm/ComfyUI_Fill-Nodes" | "https://github.com/fitCorder/fcSuite/raw/main/fcSuite.py" | "https://github.com/FizzleDorf/ComfyUI_FizzNodes" | "https://github.com/FizzleDorf/ComfyUI-AIT" | "https://github.com/florestefano1975/comfyui-portrait-master" | "https://github.com/florestefano1975/comfyui-prompt-composer" | "https://github.com/flowtyone/ComfyUI-Flowty-CRM" | "https://github.com/flowtyone/ComfyUI-Flowty-LDSR" | "https://github.com/flowtyone/ComfyUI-Flowty-TripoSR" | "https://github.com/FlyingFireCo/tiled_ksampler" | "https://github.com/flyingshutter/As_ComfyUI_CustomNodes" | "https://github.com/ForeignGods/ComfyUI-Mana-Nodes" | "https://github.com/foxtrot-roger/comfyui-rf-nodes" | "https://github.com/Franck-Demongin/NX_PromptStyler" | "https://github.com/GavChap/ComfyUI-CascadeResolutions" | "https://github.com/gemell1/ComfyUI_GMIC" | "https://github.com/get-salt-AI/SaltAI" | "https://github.com/ggpid/idpark_custom_node" | "https://github.com/ginlov/segment_to_mask_comfyui" | "https://github.com/giriss/comfy-image-saver" | "https://github.com/glibsonoran/Plush-for-ComfyUI" | "https://github.com/glifxyz/ComfyUI-GlifNodes" | "https://github.com/glowcone/comfyui-base64-to-image" | "https://github.com/GMapeSplat/ComfyUI_ezXY" | "https://github.com/godspede/ComfyUI_Substring" | "https://github.com/gokayfem/ComfyUI_VLM_nodes" | "https://github.com/gokayfem/ComfyUI-Depth-Visualization" | "https://github.com/gokayfem/ComfyUI-Dream-Interpreter" | "https://github.com/gokayfem/ComfyUI-Texture-Simple" | "https://github.com/Gourieff/comfyui-reactor-node" | "https://github.com/GTSuya-Studio/ComfyUI-Gtsuya-Nodes" | "https://github.com/guill/abracadabra-comfyui" | "https://github.com/Guillaume-Fgt/ComfyUI_StableCascadeLatentRatio" | "https://github.com/guoyk93/yk-node-suite-comfyui" | "https://github.com/hackkhai/ComfyUI-Image-Matting" | "https://github.com/HAL41/ComfyUI-aichemy-nodes" | "https://github.com/Hangover3832/ComfyUI-Hangover-Moondream" | "https://github.com/Hangover3832/ComfyUI-Hangover-Nodes" | "https://github.com/Haoming02/comfyui-clear-screen" | "https://github.com/Haoming02/comfyui-diffusion-cg" | "https://github.com/Haoming02/comfyui-floodgate" | "https://github.com/Haoming02/comfyui-menu-anchor" | "https://github.com/Haoming02/comfyui-prompt-format" | "https://github.com/Haoming02/comfyui-tab-handler" | "https://github.com/hayden-fr/ComfyUI-Image-Browsing" | "https://github.com/hayden-fr/ComfyUI-Model-Manager" | "https://github.com/HaydenReeve/ComfyUI-Better-Strings" | "https://github.com/HebelHuber/comfyui-enhanced-save-node" | "https://github.com/hhhzzyang/Comfyui_Lama" | "https://github.com/Hiero207/ComfyUI-Hiero-Nodes" | "https://github.com/hiforce/comfyui-hiforce-plugin" | "https://github.com/hinablue/ComfyUI_3dPoseEditor" | "https://github.com/holchan/ComfyUI-ModelDownloader" | "https://github.com/huchenlei/ComfyUI_DanTagGen" | "https://github.com/huchenlei/ComfyUI-layerdiffuse" | "https://github.com/hughescr/ComfyUI-OpenPose-Keypoint-Extractor" | "https://github.com/hustille/ComfyUI_Fooocus_KSampler" | "https://github.com/hustille/ComfyUI_hus_utils" | "https://github.com/hylarucoder/ComfyUI-Eagle-PNGInfo" | "https://github.com/IDGallagher/ComfyUI-IG-Nodes" | "https://github.com/idrirap/ComfyUI-Lora-Auto-Trigger-Words" | "https://github.com/if-ai/ComfyUI-IF_AI_tools" | "https://github.com/imb101/ComfyUI-FaceSwap" | "https://github.com/Inzaniak/comfyui-ranbooru" | "https://github.com/IsItDanOrAi/ComfyUI-Stereopsis/raw/main/Dan%20Frame%20Delay.py" | "https://github.com/IsItDanOrAi/ComfyUI-Stereopsis/raw/main/Dan%20Side-By-Side.py" | "https://github.com/jags111/ComfyUI_Jags_Audiotools" | "https://github.com/jags111/ComfyUI_Jags_VectorMagic" | "https://github.com/jags111/efficiency-nodes-comfyui" | "https://github.com/jamal-alkharrat/ComfyUI_rotate_image" | "https://github.com/jamesWalker55/comfyui-p2ldgan" | "https://github.com/jamesWalker55/comfyui-various" | "https://github.com/Jannchie/ComfyUI-J" | "https://github.com/JaredTherriault/ComfyUI-JNodes" | "https://github.com/JcandZero/ComfyUI_GLM4Node" | "https://github.com/Jcd1230/rembg-comfyui-node" | "https://github.com/JerryOrbachJr/ComfyUI-RandomSize" | "https://github.com/jesenzhang/ComfyUI_StreamDiffusion" | "https://github.com/jitcoder/lora-info" | "https://github.com/jjkramhoeft/ComfyUI-Jjk-Nodes" | "https://github.com/jkrauss82/ultools-comfyui" | "https://github.com/jmkl/ComfyUI-ricing" | "https://github.com/jojkaart/ComfyUI-sampler-lcm-alternative" | "https://github.com/Jordach/comfy-plasma" | "https://github.com/jordoh/ComfyUI-Deepface" | "https://github.com/JPS-GER/ComfyUI_JPS-Nodes" | "https://github.com/jtrue/ComfyUI-JaRue" | "https://github.com/jw782cn/ComfyUI-Catcat" | "https://github.com/ka-puna/comfyui-yanc" | "https://github.com/kadirnar/ComfyUI-Transformers" | "https://github.com/Kaharos94/ComfyUI-Saveaswebp" | "https://github.com/Kangkang625/ComfyUI-paint-by-example" | "https://github.com/kenjiqq/qq-nodes-comfyui" | "https://github.com/kft334/Knodes" | "https://github.com/kijai/ComfyUI-ADMotionDirector" | "https://github.com/kijai/ComfyUI-CCSR" | "https://github.com/kijai/ComfyUI-DDColor" | "https://github.com/kijai/ComfyUI-depth-fm" | "https://github.com/kijai/ComfyUI-DynamiCrafterWrapper" | "https://github.com/kijai/ComfyUI-KJNodes" | "https://github.com/kijai/ComfyUI-Marigold" | "https://github.com/kijai/ComfyUI-moondream" | "https://github.com/kijai/ComfyUI-SUPIR" | "https://github.com/kijai/ComfyUI-SVD" | "https://github.com/kinfolk0117/ComfyUI_GradientDeepShrink" | "https://github.com/kinfolk0117/ComfyUI_Pilgram" | "https://github.com/kinfolk0117/ComfyUI_SimpleTiles" | "https://github.com/kinfolk0117/ComfyUI_TiledIPAdapter" | "https://github.com/klinter007/klinter_nodes" | "https://github.com/knuknX/ComfyUI-Image-Tools" | "https://github.com/kohya-ss/ControlNet-LLLite-ComfyUI" | "https://github.com/komojini/ComfyUI_SDXL_DreamBooth_LoRA_CustomNodes" | "https://github.com/komojini/komojini-comfyui-nodes" | "https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet" | "https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved" | "https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite" | "https://github.com/kwaroran/abg-comfyui" | "https://github.com/laksjdjf/attention-couple-ComfyUI" | "https://github.com/laksjdjf/Batch-Condition-ComfyUI" | "https://github.com/laksjdjf/cd-tuner_negpip-ComfyUI" | "https://github.com/laksjdjf/LCMSampler-ComfyUI" | "https://github.com/laksjdjf/LoRA-Merger-ComfyUI" | "https://github.com/laksjdjf/LoRTnoC-ComfyUI" | "https://github.com/laksjdjf/pfg-ComfyUI" | "https://github.com/LarryJane491/Image-Captioning-in-ComfyUI" | "https://github.com/LarryJane491/Lora-Training-in-Comfy" | "https://github.com/Layer-norm/comfyui-lama-remover" | "https://github.com/leoleelxh/ComfyUI-LLMs" | "https://github.com/Lerc/canvas_tab" | "https://github.com/LEv145/images-grid-comfy-plugin" | "https://github.com/lilly1987/ComfyUI_node_Lilly" | "https://github.com/Limitex/ComfyUI-Calculation" | "https://github.com/Limitex/ComfyUI-Diffusers" | "https://github.com/ljleb/comfy-mecha" | "https://github.com/lldacing/comfyui-easyapi-nodes" | "https://github.com/Loewen-Hob/rembg-comfyui-node-better" | "https://github.com/logtd/ComfyUI-InstanceDiffusion" | "https://github.com/logtd/ComfyUI-InversedNoise" | "https://github.com/logtd/ComfyUI-TrackingNodes" | "https://github.com/longgui0318/comfyui-llm-assistant" | "https://github.com/longgui0318/comfyui-mask-util" | "https://github.com/LonicaMewinsky/ComfyUI-MakeFrame" | "https://github.com/LonicaMewinsky/ComfyUI-RawSaver" | "https://github.com/lordgasmic/ComfyUI-Wildcards/raw/master/wildcards.py" | "https://github.com/lrzjason/ComfyUIJasonNode/raw/main/LatentByRatio.py" | "https://github.com/lrzjason/ComfyUIJasonNode/raw/main/SDXLMixSampler.py" | "https://github.com/ltdrdata/ComfyUI-Impact-Pack" | "https://github.com/ltdrdata/ComfyUI-Inspire-Pack" | "https://github.com/ltdrdata/ComfyUI-Manager" | "https://github.com/Ludobico/ComfyUI-ScenarioPrompt" | "https://github.com/LyazS/comfyui-anime-seg" | "https://github.com/LykosAI/ComfyUI-Inference-Core-Nodes" | "https://github.com/m-sokes/ComfyUI-Sokes-Nodes" | "https://github.com/M1kep/Comfy_KepKitchenSink" | "https://github.com/M1kep/Comfy_KepListStuff" | "https://github.com/M1kep/Comfy_KepMatteAnything" | "https://github.com/M1kep/ComfyLiterals" | "https://github.com/M1kep/ComfyUI-KepOpenAI" | "https://github.com/M1kep/ComfyUI-OtherVAEs" | "https://github.com/M1kep/KepPromptLang" | "https://github.com/m957ymj75urz/ComfyUI-Custom-Nodes/raw/main/clip-text-encode-split/clip_text_encode_split.py" | "https://github.com/m957ymj75urz/ComfyUI-Custom-Nodes/raw/main/colors/colors.js" | "https://github.com/madtunebk/ComfyUI-ControlnetAux" | "https://github.com/Mamaaaamooooo/batchImg-rembg-ComfyUI-nodes" | "https://github.com/ManglerFTW/ComfyI2I" | "https://github.com/mape/ComfyUI-mape-Helpers" | "https://github.com/maracman/ComfyUI-SubjectStyle-CSV" | "https://github.com/marhensa/sdxl-recommended-res-calc" | "https://github.com/MarkoCa1/ComfyUI_Segment_Mask" | "https://github.com/MarkoCa1/ComfyUI-Text" | "https://github.com/martijnat/comfyui-previewlatent" | "https://github.com/massao000/ComfyUI_aspect_ratios" | "https://github.com/matan1905/ComfyUI-Serving-Toolkit" | "https://github.com/mav-rik/facerestore_cf" | "https://github.com/mbrostami/ComfyUI-HF" | "https://github.com/mcmonkeyprojects/sd-dynamic-thresholding" | "https://github.com/meap158/ComfyUI-Background-Replacement" | "https://github.com/meap158/ComfyUI-GPU-temperature-protection" | "https://github.com/meap158/ComfyUI-Prompt-Expansion" | "https://github.com/melMass/comfy_mtb" | "https://github.com/meshmesh-io/ComfyUI-MeshMesh" | "https://github.com/meshmesh-io/mm-comfyui-loopback" | "https://github.com/meshmesh-io/mm-comfyui-megamask" | "https://github.com/mihaiiancu/ComfyUI_Inpaint" | "https://github.com/mikkel/comfyui-mask-boundingbox" | "https://github.com/mikkel/ComfyUI-text-overlay" | "https://github.com/Millyarde/Pomfy" | "https://github.com/Miosp/ComfyUI-FBCNN" | "https://github.com/mirabarukaso/ComfyUI_Mira" | "https://github.com/MitoshiroPJ/comfyui_slothful_attention" | "https://github.com/mlinmg/ComfyUI-LaMA-Preprocessor" | "https://github.com/MNeMoNiCuZ/ComfyUI-mnemic-nodes" | "https://github.com/modusCell/ComfyUI-dimension-node-modusCell" | "https://github.com/MokkaBoss1/LandscapeBackgrounds/raw/main/IndoorBackgrounds.py" | "https://github.com/MokkaBoss1/LandscapeBackgrounds/raw/main/LandscapeBackgrounds.py" | "https://github.com/mozman/ComfyUI_mozman_nodes" | "https://github.com/mpiquero7164/ComfyUI-SaveImgPrompt" | "https://github.com/MrForExample/ComfyUI-3D-Pack" | "https://github.com/MrForExample/ComfyUI-AnimateAnyone-Evolved" | "https://github.com/Munkyfoot/ComfyUI-TextOverlay" | "https://github.com/nagolinc/ComfyUI_FastVAEDecorder_SDXL" | "https://github.com/nathannlu/ComfyUI-Cloud" | "https://github.com/nathannlu/ComfyUI-Pets" | "https://github.com/natto-maki/ComfyUI-NegiTools" | "https://github.com/Nevysha/ComfyUI-nevysha-top-menu" | "https://github.com/NicholasMcCarthy/ComfyUI_TravelSuite" | "https://github.com/nicolai256/comfyUI_Nodes_nicolai256/raw/main/yugioh-presets.py" | "https://github.com/NimaNzrii/comfyui-photoshop" | "https://github.com/NimaNzrii/comfyui-popup_preview" | "https://github.com/ningxiaoxiao/comfyui-NDI" | "https://github.com/Niutonian/ComfyUi-NoodleWebcam" | "https://github.com/nkchocoai/ComfyUI-Dart" | "https://github.com/nkchocoai/ComfyUI-PromptUtilities" | "https://github.com/nkchocoai/ComfyUI-SaveImageWithMetaData" | "https://github.com/nkchocoai/ComfyUI-SizeFromPresets" | "https://github.com/nkchocoai/ComfyUI-TextOnSegs" | "https://github.com/Nlar/ComfyUI_CartoonSegmentation" | "https://github.com/noembryo/ComfyUI-noEmbryo" | "https://github.com/nosiu/comfyui-instantId-faceswap" | "https://github.com/NotHarroweD/Harronode" | "https://github.com/Nourepide/ComfyUI-Allor" | "https://github.com/noxinias/ComfyUI_NoxinNodes" | "https://github.com/ntc-ai/ComfyUI-DARE-LoRA-Merge" | "https://github.com/ntdviet/comfyui-ext/raw/main/custom_nodes/gcLatentTunnel/gcLatentTunnel.py" | "https://github.com/Nuked88/ComfyUI-N-Nodes" | "https://github.com/Nuked88/ComfyUI-N-Sidebar" | "https://github.com/Off-Live/ComfyUI-off-suite" | "https://github.com/olduvai-jp/ComfyUI-HfLoader" | "https://github.com/omar92/ComfyUI-QualityOfLifeSuit_Omar92" | "https://github.com/Onierous/QRNG_Node_ComfyUI/raw/main/qrng_node.py" | "https://github.com/OpenArt-AI/ComfyUI-Assistant" | "https://github.com/ostris/ostris_nodes_comfyui" | "https://github.com/ownimage/ComfyUI-ownimage" | "https://github.com/oyvindg/ComfyUI-TrollSuite" | "https://github.com/palant/extended-saveimage-comfyui" | "https://github.com/palant/image-resize-comfyui" | "https://github.com/palant/integrated-nodes-comfyui" | "https://github.com/pants007/comfy-pants" | "https://github.com/ParmanBabra/ComfyUI-Malefish-Custom-Scripts" | "https://github.com/paulo-coronado/comfy_clip_blip_node" | "https://github.com/PCMonsterx/ComfyUI-CSV-Loader" | "https://github.com/Pfaeff/pfaeff-comfyui" | "https://github.com/phineas-pta/comfyui-auto-nodes-layout" | "https://github.com/picturesonpictures/comfy_PoP" | "https://github.com/pkpkTech/ComfyUI-ngrok" | "https://github.com/pkpkTech/ComfyUI-SaveAVIF" | "https://github.com/pkpkTech/ComfyUI-SaveQueues" | "https://github.com/pkpkTech/ComfyUI-TemporaryLoader" | "https://github.com/Pos13/comfyui-cyclist" | "https://github.com/prodogape/ComfyUI-Minio" | "https://github.com/prozacgod/comfyui-pzc-multiworkspace" | "https://github.com/pythongosssss/ComfyUI-Custom-Scripts" | "https://github.com/pythongosssss/ComfyUI-WD14-Tagger" | "https://github.com/QaisMalkawi/ComfyUI-QaisHelper" | "https://github.com/qwixiwp/queuetools" | "https://github.com/ramyma/A8R8_ComfyUI_nodes" | "https://github.com/ratulrafsan/Comfyui-SAL-VTON" | "https://github.com/rcfcu2000/zhihuige-nodes-comfyui" | "https://github.com/rcsaquino/comfyui-custom-nodes" | "https://github.com/receyuki/comfyui-prompt-reader-node" | "https://github.com/redhottensors/ComfyUI-Prediction" | "https://github.com/RenderRift/ComfyUI-RenderRiftNodes" | "https://github.com/rgthree/rgthree-comfy" | "https://github.com/richinsley/Comfy-LFO" | "https://github.com/ricklove/comfyui-ricklove" | "https://github.com/rklaffehn/rk-comfy-nodes" | "https://github.com/rock-land/graphNavigator/raw/main/graphNavigator/graphNavigator.js" | "https://github.com/RomanKuschanow/ComfyUI-Advanced-Latent-Control" | "https://github.com/romeobuilderotti/ComfyUI-PNG-Metadata" | "https://github.com/rui40000/RUI-Nodes" | "https://github.com/Ryuukeisyou/comfyui_face_parsing" | "https://github.com/Ryuukeisyou/comfyui_io_helpers" | "https://github.com/s1dlx/comfy_meh/raw/main/meh.py" | "https://github.com/SadaleNet/CLIPTextEncodeA1111-ComfyUI/raw/master/custom_nodes/clip_text_encoder_a1111.py" | "https://github.com/Scholar01/ComfyUI-Keyframe" | "https://github.com/seanlynch/comfyui-optical-flow" | "https://github.com/seanlynch/srl-nodes" | "https://github.com/SeargeDP/SeargeSDXL" | "https://github.com/Seedsa/Fooocus_Nodes" | "https://github.com/Ser-Hilary/SDXL_sizing/raw/main/conditioning_sizing_for_SDXL.py" | "https://github.com/sergekatzmann/ComfyUI_Nimbus-Pack" | "https://github.com/Shadetail/ComfyUI_Eagleshadow" | "https://github.com/shadowcz007/comfyui-consistency-decoder" | "https://github.com/shadowcz007/comfyui-Image-reward" | "https://github.com/shadowcz007/comfyui-mixlab-nodes" | "https://github.com/shadowcz007/comfyui-ultralytics-yolo" | "https://github.com/shi3z/ComfyUI_Memeplex_DALLE" | "https://github.com/shiimizu/ComfyUI_smZNodes" | "https://github.com/shiimizu/ComfyUI-PhotoMaker-Plus" | "https://github.com/shiimizu/ComfyUI-TiledDiffusion" | "https://github.com/shingo1228/ComfyUI-SDXL-EmptyLatentImage" | "https://github.com/shingo1228/ComfyUI-send-eagle-slim" | "https://github.com/ShmuelRonen/ComfyUI-SVDResizer" | "https://github.com/shockz0rz/comfy-easy-grids" | "https://github.com/shockz0rz/ComfyUI_InterpolateEverything" | "https://github.com/Shraknard/ComfyUI-Remover" | "https://github.com/Siberpone/lazy-pony-prompter" | "https://github.com/siliconflow/onediff_comfy_nodes" | "https://github.com/sipherxyz/comfyui-art-venture" | "https://github.com/skfoo/ComfyUI-Coziness" | "https://github.com/SLAPaper/ComfyUI-Image-Selector" | "https://github.com/smagnetize/kb-comfyui-nodes" | "https://github.com/Smuzzies/comfyui_chatbox_overlay/raw/main/chatbox_overlay.py" | "https://github.com/SOELexicon/ComfyUI-LexMSDBNodes" | "https://github.com/SOELexicon/ComfyUI-LexTools" | "https://github.com/SoftMeng/ComfyUI_Mexx_Poster" | "https://github.com/SoftMeng/ComfyUI_Mexx_Styler" | "https://github.com/space-nuko/ComfyUI-Disco-Diffusion" | "https://github.com/space-nuko/ComfyUI-OpenPose-Editor" | "https://github.com/space-nuko/nui-suite" | "https://github.com/SpaceKendo/ComfyUI-svd_txt2vid" | "https://github.com/spacepxl/ComfyUI-HQ-Image-Save" | "https://github.com/spacepxl/ComfyUI-Image-Filters" | "https://github.com/spacepxl/ComfyUI-RAVE" | "https://github.com/spinagon/ComfyUI-seam-carving" | "https://github.com/spinagon/ComfyUI-seamless-tiling" | "https://github.com/spro/comfyui-mirror" | "https://github.com/ssitu/ComfyUI_fabric" | "https://github.com/ssitu/ComfyUI_restart_sampling" | "https://github.com/ssitu/ComfyUI_roop" | "https://github.com/ssitu/ComfyUI_UltimateSDUpscale" | "https://github.com/Stability-AI/stability-ComfyUI-nodes" | "https://github.com/StartHua/Comfyui_joytag" | "https://github.com/StartHua/ComfyUI_OOTDiffusion_CXH" | "https://github.com/StartHua/ComfyUI_Seg_VITON" | "https://github.com/StartHua/Comfyui_segformer_b2_clothes" | "https://github.com/stavsap/comfyui-ollama" | "https://github.com/storyicon/comfyui_segment_anything" | "https://github.com/strimmlarn/ComfyUI_Strimmlarns_aesthetic_score" | "https://github.com/styler00dollar/ComfyUI-deepcache" | "https://github.com/styler00dollar/ComfyUI-sudo-latent-upscale" | "https://github.com/subtleGradient/TinkerBot-tech-for-ComfyUI-Touchpad" | "https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes" | "https://github.com/Sxela/ComfyWarp" | "https://github.com/syllebra/bilbox-comfyui" | "https://github.com/sylym/comfy_vid2vid" | "https://github.com/szhublox/ambw_comfyui" | "https://github.com/taabata/Comfy_Syrian_Falcon_Nodes/raw/main/SyrianFalconNodes.py" | "https://github.com/taabata/LCM_Inpaint-Outpaint_Comfy" | "https://github.com/talesofai/comfyui-browser" | "https://github.com/Taremin/comfyui-prompt-extranetworks" | "https://github.com/Taremin/comfyui-string-tools" | "https://github.com/Taremin/webui-monaco-prompt" | "https://github.com/TeaCrab/ComfyUI-TeaNodes" | "https://github.com/TemryL/ComfyS3" | "https://github.com/TGu-97/ComfyUI-TGu-utils" | "https://github.com/TheBarret/ZSuite" | "https://github.com/TheBill2001/comfyui-upscale-by-model" | "https://github.com/thecooltechguy/ComfyUI-ComfyRun" | "https://github.com/thecooltechguy/ComfyUI-ComfyWorkflows" | "https://github.com/thecooltechguy/ComfyUI-MagicAnimate" | "https://github.com/thecooltechguy/ComfyUI-Stable-Video-Diffusion" | "https://github.com/thedyze/save-image-extended-comfyui" | "https://github.com/theUpsider/ComfyUI-Logic" | "https://github.com/theUpsider/ComfyUI-Styles_CSV_Loader" | "https://github.com/THtianhao/ComfyUI-FaceChain" | "https://github.com/THtianhao/ComfyUI-Portrait-Maker" | "https://github.com/TinyTerra/ComfyUI_tinyterraNodes" | "https://github.com/tocubed/ComfyUI-AudioReactor" | "https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes" | "https://github.com/TRI3D-LC/tri3d-comfyui-nodes" | "https://github.com/TripleHeadedMonkey/ComfyUI_MileHighStyler" | "https://github.com/trojblue/trNodes" | "https://github.com/Tropfchen/ComfyUI-Embedding_Picker" | "https://github.com/Tropfchen/ComfyUI-yaResolutionSelector" | "https://github.com/trumanwong/ComfyUI-NSFW-Detection" | "https://github.com/Trung0246/ComfyUI-0246" | "https://github.com/Ttl/ComfyUi_NNLatentUpscale" | "https://github.com/ttulttul/ComfyUI-Iterative-Mixer" | "https://github.com/ttulttul/ComfyUI-Tensor-Operations" | "https://github.com/tudal/Hakkun-ComfyUI-nodes/raw/main/hakkun_nodes.py" | "https://github.com/tusharbhutt/Endless-Nodes" | "https://github.com/twri/sdxl_prompt_styler" | "https://github.com/tzwm/comfyui-profiler" | "https://github.com/uarefans/ComfyUI-Fans" | "https://github.com/uetuluk/comfyui-webcam-node" | "https://github.com/Umikaze-job/select_folder_path_easy" | "https://github.com/underclockeddev/ComfyUI-PreviewSubselection-Node/raw/master/preview_subselection.py" | "https://github.com/vanillacode314/SimpleWildcardsComfyUI" | "https://github.com/victorchall/comfyui_webcamcapture" | "https://github.com/vienteck/ComfyUI-Chat-GPT-Integration" | "https://github.com/violet-chen/comfyui-psd2png" | "https://github.com/viperyl/ComfyUI-BiRefNet" | "https://github.com/vivax3794/ComfyUI-Vivax-Nodes" | "https://github.com/vsevolod-oparin/comfyui-kandinsky22" | "https://github.com/wallish77/wlsh_nodes" | "https://github.com/WASasquatch/ASTERR" | "https://github.com/WASasquatch/ComfyUI_Preset_Merger" | "https://github.com/WASasquatch/FreeU_Advanced" | "https://github.com/WASasquatch/PowerNoiseSuite" | "https://github.com/WASasquatch/PPF_Noise_ComfyUI" | "https://github.com/WASasquatch/WAS_Extras" | "https://github.com/WASasquatch/was-node-suite-comfyui" | "https://github.com/WebDev9000/WebDev9000-Nodes" | "https://github.com/whatbirdisthat/cyberdolphin" | "https://github.com/whmc76/ComfyUI-Openpose-Editor-Plus" | "https://github.com/wmatson/easy-comfy-nodes" | "https://github.com/wolfden/ComfyUi_PromptStylers" | "https://github.com/wolfden/ComfyUi_String_Function_Tree" | "https://github.com/wsippel/comfyui_ws/raw/main/sdxl_utility.py" | "https://github.com/wutipong/ComfyUI-TextUtils" | "https://github.com/wwwins/ComfyUI-Simple-Aspect-Ratio" | "https://github.com/xiaoxiaodesha/hd_node" | "https://github.com/XmYx/deforum-comfy-nodes" | "https://github.com/xXAdonesXx/NodeGPT" | "https://github.com/Xyem/Xycuno-Oobabooga" | "https://github.com/yffyhk/comfyui_auto_danbooru" | "https://github.com/YinBailiang/MergeBlockWeighted_fo_ComfyUI" | "https://github.com/YMC-GitHub/ymc-node-suite-comfyui" | "https://github.com/yolain/ComfyUI-Easy-Use" | "https://github.com/yolanother/DTAIComfyImageSubmit" | "https://github.com/yolanother/DTAIComfyLoaders" | "https://github.com/yolanother/DTAIComfyPromptAgent" | "https://github.com/yolanother/DTAIComfyQRCodes" | "https://github.com/yolanother/DTAIComfyVariables" | "https://github.com/yolanother/DTAIImageToTextNode" | "https://github.com/YOUR-WORST-TACO/ComfyUI-TacoNodes" | "https://github.com/youyegit/tdxh_node_comfyui" | "https://github.com/yuvraj108c/ComfyUI-Pronodes" | "https://github.com/yuvraj108c/ComfyUI-Vsgan" | "https://github.com/yuvraj108c/ComfyUI-Whisper" | "https://github.com/yytdfc/ComfyUI-Bedrock" | "https://github.com/ZaneA/ComfyUI-ImageReward" | "https://github.com/zcfrank1st/comfyui_visual_anagrams" | "https://github.com/zcfrank1st/Comfyui-Toolbox" | "https://github.com/zcfrank1st/Comfyui-Yolov8" | "https://github.com/zer0TF/cute-comfy" | "https://github.com/zfkun/ComfyUI_zfkun" | "https://github.com/zhangp365/ComfyUI-utils-nodes" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-ArtGallery" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-BRIA_AI-RMBG" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-DepthFM" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Gemini" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-InstantID" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-PhotoMaker-ZHO" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-PixArt-alpha-Diffusers" | "https://github.com/ZHO-ZHO-ZHO/comfyui-portrait-master-zh-cn" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Q-Align" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Qwen-VL-API" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-SegMoE" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-SVD-ZHO" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Text_Image-Composite" | "https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM" | "https://github.com/zhongpei/Comfyui_image2prompt" | "https://github.com/zhongpei/ComfyUI-InstructIR" | "https://github.com/zhuanqianfish/ComfyUI-EasyNode" | "https://github.com/Zuellni/ComfyUI-Custom-Nodes" | "https://github.com/Zuellni/ComfyUI-ExLlama" | "https://github.com/Zuellni/ComfyUI-PickScore-Nodes" | "https://raw.githubusercontent.com/throttlekitty/SDXLCustomAspectRatio/main/SDXLAspectRatio.py";

type KnownCustomNode_Title = "🐰 MarasIT Nodes" | "a-person-mask-generator" | "A8R8 ComfyUI Nodes" | "abg-comfyui" | "abracadabra-comfyui" | "Advanced CLIP Text Encode" | "Advanced Latent Control" | "AegisFlow Utility Nodes" | "AIGODLIKE-ComfyUI-Studio" | "AIGODLIKE-COMFYUI-TRANSLATION" | "AlekPet/ComfyUI_Custom_Nodes_AlekPet" | "alkemann nodes" | "Allor Plugin" | "Amazon Bedrock nodes for for ComfyUI" | "AnimateDiff" | "AnimateDiff Evolved" | "Animatediff MotionLoRA Trainer" | "Anime Character Segmentation node for comfyui" | "antrobots ComfyUI Nodepack" | "APISR IN COMFYUI" | "As_ComfyUI_CustomNodes" | "asagi4/comfyui-utility-nodes" | "ASTERR" | "asymmetric-tiling-comfyui" | "attention-couple-ComfyUI" | "auto nodes layout" | "Auto-MBW" | "avatar-graph-comfyui" | "Backgrounds (Landscape,Indoor)" | "Batch Rembg for ComfyUI" | "Batch-Condition-ComfyUI" | "BilboX's ComfyUI Custom Nodes" | "Bmad Nodes" | "braintacles-nodes" | "BrevImage" | "bsz-cui-extras" | "Canvas Tab" | "cd-tuner_negpip-ComfyUI" | "Chaosaiart-Nodes" | "Character Face Swap" | "Chatbox Overlay node for ComfyUI" | "CLIP Directional Prompt Attention" | "CLIPSeg" | "Color Enhance" | "Comfy AI DoubTech.ai Image Sumission Node" | "Comfy Cloud" | "Comfy UI FatLabels" | "Comfy UI Online Loaders" | "Comfy UI Prompt Agent" | "Comfy UI QR Codes" | "comfy_clip_blip_node" | "Comfy_KepKitchenSink" | "Comfy_KepListStuff" | "Comfy_KepMatteAnything" | "comfy_meh" | "comfy_PoP" | "comfy-easy-grids" | "Comfy-LFO" | "comfy-mecha" | "comfy-nodes" | "Comfy-Photoshop-SD" | "comfy-plasma" | "ComfyBreakAnim" | "ComfyI2I" | "ComfyLiterals" | "ComfyMath" | "ComfyQR" | "ComfyQR-scanning-nodes" | "ComfyS3" | "ComfyUI - Apply LoRA Stacker with DARE" | "ComfyUI - Mask Bounding Box" | "ComfyUI - Native DynamiCrafter" | "ComfyUI - P2LDGAN Node" | "ComfyUI - Text Overlay Plugin" | "ComfyUI 3D Pose Editor" | "ComfyUI A1111-like Prompt Custom Node Solution" | "ComfyUI aichemy nodes" | "ComfyUI Assistant" | "ComfyUI Better Strings" | "ComfyUI Bringing Old Photos Back to Life" | "ComfyUI Browser" | "ComfyUI Clear Screen" | "ComfyUI Cutoff" | "ComfyUI Deepface" | "ComfyUI Deploy" | "ComfyUI Diffusion Color Grading" | "ComfyUI Discopixel Nodes" | "ComfyUI Easy Padding" | "ComfyUI Easy Use" | "ComfyUI Essentials" | "ComfyUI Extra Samplers" | "ComfyUI fabric" | "ComfyUI Face Similarity" | "ComfyUI Fictiverse Nodes" | "ComfyUI Floodgate" | "ComfyUI Fooocus Nodes" | "ComfyUI for InstructIR" | "ComfyUI Frame Interpolation" | "ComfyUI Frame Maker" | "Comfyui HiFORCE Plugin" | "ComfyUI Image Saver" | "ComfyUI Impact Pack" | "ComfyUI Inpaint Nodes" | "ComfyUI Inspire Pack" | "ComfyUI InstantID (Native Support)" | "ComfyUI InstantID Faceswapper" | "ComfyUI Iterative Mixing Nodes" | "Comfyui lama remover" | "ComfyUI Layer Style" | "ComfyUI LLaVA Captioner" | "ComfyUI Loopchain" | "ComfyUI Menu Anchor" | "ComfyUI MotionDiff" | "ComfyUI Multi-Workspace" | "ComfyUI Neural Network Latent Upscale" | "ComfyUI Nodes for External Tooling" | "ComfyUI Nodes for Inference.Core" | "ComfyUI Noise" | "ComfyUI Ollama" | "ComfyUI OOTDiffusion" | "ComfyUI Optical Flow" | "ComfyUI Pets" | "ComfyUI PhotoMaker (ZHO)" | "ComfyUI PhotoMaker Plus" | "ComfyUI PickScore Nodes" | "ComfyUI PixelArt Detector" | "ComfyUI PNG Metadata" | "ComfyUI Preset Merger" | "ComfyUI Profiler" | "ComfyUI prompt control" | "ComfyUI Prompt ExtraNetworks" | "ComfyUI Ricing" | "ComfyUI roop" | "ComfyUI SegMoE" | "ComfyUI Sequential Image Loader" | "ComfyUI Serving toolkit" | "ComfyUI SimpleTools Suit" | "ComfyUI Slothful Attention" | "ComfyUI Sokes Nodes" | "ComfyUI Stable Video Diffusion" | "ComfyUI String Tools" | "ComfyUI Substring" | "ComfyUI Tab Handler" | "ComfyUI WD 1.4 Tagger" | "Comfyui Webcam capture node" | "ComfyUI Whisper" | "ComfyUI Workspace Manager - Comfyspace" | "ComfyUI Yolov8" | "ComfyUI YoloWorld-EfficientSAM" | "comfyui_ab_sampler" | "ComfyUI_API_Manager" | "ComfyUI_aspect_ratios" | "comfyui_auto_danbooru" | "ComfyUI_BadgerTools" | "ComfyUI_Blender_Texdiff" | "ComfyUI_CartoonSegmentation" | "ComfyUI_ColorMod" | "ComfyUI_Comfyroll_CustomNodes" | "ComfyUI_DanTagGen" | "ComfyUI_DiT [WIP]" | "ComfyUI_Dragos_Nodes" | "comfyui_DSP_imagehelpers" | "ComfyUI_experiments" | "comfyui_face_parsing" | "comfyui_facetools" | "ComfyUI_FastVAEDecorder_SDXL" | "ComfyUI_Fill-Nodes" | "ComfyUI_Fooocus_KSampler" | "ComfyUI_GLM4Node" | "ComfyUI_GMIC" | "ComfyUI_GradientDeepShrink" | "ComfyUI_Ib_CustomNodes" | "Comfyui_image2prompt" | "comfyui_io_helpers" | "ComfyUI_IPAdapter_plus" | "ComfyUI_Jags_Audiotools" | "ComfyUI_Jags_VectorMagic" | "Comfyui_joytag" | "ComfyUI_kkTranslator_nodes" | "ComfyUI_Memeplex_DALLE" | "ComfyUI_Mexx_Poster" | "ComfyUI_Mexx_Styler" | "ComfyUI_MileHighStyler" | "ComfyUI_Mira" | "ComfyUI_ModelScopeT2V" | "ComfyUI_mozman_nodes" | "ComfyUI_MSSpeech_TTS" | "ComfyUI_NAIDGenerator" | "ComfyUI_NetDist" | "ComfyUI_Nimbus-Pack" | "comfyUI_Nodes_nicolai256" | "ComfyUI_NoxinNodes" | "ComfyUI_OOTDiffusion_CXH" | "ComfyUI_PerpWeight" | "ComfyUI_Pilgram" | "comfyui_quilting" | "ComfyUI_RErouter_CustomNodes" | "ComfyUI_rotate_image" | "ComfyUI_SDXL_DreamBooth_LoRA_CustomNodes" | "ComfyUI_Seg_VITON" | "comfyui_segformer_b2_clothes" | "ComfyUI_Segment_Mask" | "ComfyUI_StreamDiffusion" | "ComfyUI_Strimmlarns_aesthetic_score" | "ComfyUi_String_Function_Tree" | "ComfyUI_Text" | "ComfyUI_TextAssets" | "ComfyUI_toyxyz_test_nodes" | "ComfyUI_TravelSuite" | "comfyui_visual_anagram" | "ComfyUI_VisualStylePrompting" | "comfyui_wfc_like" | "ComfyUI_WordCloud" | "ComfyUI_zfkun" | "ComfyUI-0246" | "ComfyUI-3D-Pack" | "ComfyUI-Advanced-ControlNet" | "ComfyUI-Aimidi-nodes" | "ComfyUI-AIT" | "ComfyUI-Anchors" | "ComfyUI-AnimateAnyone-Evolved" | "ComfyUI-AnimateAnyone-reproduction" | "comfyui-art-venture" | "ComfyUI-ArtGallery" | "ComfyUI-AudioReactive" | "ComfyUI-AudioReactor" | "ComfyUI-AudioScheduler" | "ComfyUI-AutomaticCFG" | "ComfyUI-Background-Replacement" | "ComfyUI-BiRefNet" | "ComfyUI-bleh" | "ComfyUI-Bmad-DirtyUndoRedo" | "ComfyUI-BRIA_AI-RMBG" | "ComfyUI-CADS" | "ComfyUI-Calculation" | "ComfyUI-CascadeResolutions" | "ComfyUI-Catcat" | "ComfyUI-CCSR" | "ComfyUI-Champ" | "ComfyUI-Chat-GPT-Integration" | "ComfyUI-Chibi-Nodes" | "comfyui-clip-with-break" | "ComfyUI-ClipScore-Nodes" | "ComfyUI-ComfyCouple" | "ComfyUI-ComfyRun" | "ComfyUI-ComfyWorkflows" | "ComfyUI-Coziness" | "ComfyUI-Cre8it-Nodes" | "ComfyUI-CSV-Loader" | "ComfyUI-CUP" | "ComfyUI-DareMerge" | "ComfyUI-Dart" | "ComfyUI-DDColor" | "ComfyUI-deepcache" | "ComfyUI-depth-fm" | "ComfyUI-Depth-Visualization" | "ComfyUI-Diffusers" | "ComfyUI-DragAnything" | "ComfyUI-DragNUWA" | "ComfyUI-Dream-Interpreter" | "ComfyUI-dust3r" | "ComfyUI-DynamiCrafter" | "ComfyUI-DynamiCrafterWrapper" | "comfyui-easyapi-nodes" | "ComfyUI-EasyDeforum" | "comfyui-enhanced-save-node" | "Comfyui-ergouzi-Nodes" | "ComfyUI-ExLlama" | "ComfyUI-FaceChain" | "Comfyui-FaceCompare" | "ComfyUI-Fans" | "ComfyUI-fastblend" | "ComfyUI-FBCNN" | "comfyui-fitsize" | "ComfyUI-Flowty-CRM" | "ComfyUI-Flowty-LDSR" | "ComfyUI-Flowty-TripoSR" | "ComfyUI-Gemini" | "ComfyUI-Gemma" | "comfyui-geometry" | "ComfyUI-GlifNodes" | "ComfyUI-GPT2P" | "ComfyUI-GPT4V-Image-Captioner" | "ComfyUI-GTSuya-Nodes" | "ComfyUI-Hangover-Moondream" | "ComfyUI-Hangover-Nodes" | "ComfyUI-HF" | "ComfyUI-HfLoader" | "ComfyUI-Hiero-Nodes" | "ComfyUI-HQ-Image-Save" | "ComfyUI-I2VGEN-XL" | "ComfyUI-IF_AI_tools" | "ComfyUI-Image-Browsing" | "ComfyUI-Image-Filters" | "ComfyUI-Image-Matting" | "comfyui-Image-reward" | "comfyui-image-round" | "ComfyUI-Image-Selector" | "ComfyUI-Image-Tools" | "ComfyUI-InstantID" | "ComfyUI-InversedNoise" | "ComfyUI-IPAnimate" | "ComfyUI-J" | "ComfyUI-JaRue" | "ComfyUI-JDCN" | "ComfyUI-Jjk-Nodes" | "ComfyUI-JNodes" | "comfyui-job-iterator" | "ComfyUI-KepOpenAI" | "ComfyUI-Keyframed" | "Comfyui-Lama" | "ComfyUI-Latent-Modifiers" | "ComfyUI-layerdiffuse (layerdiffusion)" | "ComfyUI-LexTools" | "ComfyUI-LightGlue" | "ComfyUI-Llama" | "ComfyUI-LLaVA-Describer" | "comfyui-llm-assistant" | "ComfyUI-LLMs" | "ComfyUI-Logic" | "ComfyUI-LogicUtils" | "ComfyUI-Lora-Auto-Trigger-Words" | "ComfyUI-MagicAnimate" | "ComfyUI-Malefish-Custom-Scripts" | "ComfyUI-Mana-Nodes" | "ComfyUI-Manager" | "comfyui-mask-util" | "ComfyUI-MeshMesh" | "Comfyui-Minio" | "comfyui-mixlab-nodes" | "ComfyUI-mnemic-nodes" | "ComfyUI-Model-Manager" | "ComfyUI-ModelDownloader" | "ComfyUI-moondream" | "ComfyUI-Moore-AnimateAnyone" | "ComfyUI-Motion-Vector-Extractor" | "ComfyUI-MotionCtrl" | "ComfyUI-MotionCtrl-SVD" | "ComfyUI-N-Nodes" | "ComfyUI-N-Sidebar" | "comfyui-NDI" | "ComfyUI-NegiTools" | "ComfyUI-nevysha-top-menu" | "ComfyUI-ngrok" | "ComfyUI-nodes-hnmr" | "ComfyUi-NoodleWebcam" | "ComfyUI-NSFW-Detection" | "ComfyUI-off-suite" | "ComfyUI-Open-Sora" | "ComfyUI-Openpose-Editor-Plus" | "ComfyUI-OtherVAEs" | "ComfyUI-ownimage" | "ComfyUI-Paint-by-Example" | "ComfyUI-Panda3d" | "ComfyUI-Path-Helper" | "comfyui-photoshop" | "ComfyUI-PixArt-alpha-Diffusers" | "comfyui-popup_preview" | "ComfyUI-Portrait-Maker" | "comfyui-portrait-master" | "comfyui-portrait-master-zh-cn" | "ComfyUI-post-processing-nodes" | "ComfyUI-Prediction" | "comfyui-previewlatent" | "comfyui-prompt-composer" | "ComfyUI-Prompt-Expansion" | "comfyui-prompt-format" | "ComfyUI-Prompt-Preview" | "comfyui-prompt-reader-node" | "ComfyUI-PromptUtilities" | "ComfyUI-Pronodes" | "ComfyUI-ProPost" | "comfyui-psd2png" | "ComfyUI-Pymunk" | "ComfyUI-Q-Align" | "ComfyUI-Qais-Helper" | "ComfyUI-Qwen-VL-API" | "ComfyUI-RAFT" | "ComfyUI-RandomSize" | "ComfyUI-RAVE" | "ComfyUI-RawSaver" | "ComfyUI-Remover" | "ComfyUI-RenderRiftNodes" | "comfyui-ricklove" | "ComfyUI-safety-checker" | "Comfyui-SAL-VTON" | "ComfyUI-sampler-lcm-alternative" | "ComfyUI-Saveaswebp" | "ComfyUI-SaveAVIF" | "ComfyUI-SaveImageWithMetaData" | "ComfyUI-SaveQueues" | "ComfyUI-ScenarioPrompt" | "ComfyUI-SDXL-EmptyLatentImage" | "ComfyUI-seam-carving" | "ComfyUI-send-Eagle(slim)" | "ComfyUI-Simple-Aspect-Ratio" | "ComfyUI-SizeFromPresets" | "ComfyUI-sonar" | "ComfyUI-stable-wildcards" | "ComfyUI-Static-Primitives" | "ComfyUI-Stereopsis" | "ComfyUI-styles-all" | "ComfyUI-SubjectStyle-CSV" | "ComfyUI-sudo-latent-upscale" | "ComfyUI-SUPIR" | "ComfyUI-SVD" | "ComfyUI-SVD-ZHO (WIP)" | "ComfyUI-SVDResizer" | "ComfyUI-TacoNodes" | "ComfyUI-TCD-scheduler" | "ComfyUI-TeaNodes" | "ComfyUI-TemporaryLoader" | "ComfyUI-Tensor-Operations" | "ComfyUI-Text_Image-Composite [WIP]" | "ComfyUI-TextOnSegs" | "ComfyUI-TextOverlay" | "ComfyUI-Texture-Simple" | "ComfyUI-TextUtils" | "comfyUI-tool-2lab" | "Comfyui-Toolbox" | "ComfyUI-Trajectory" | "ComfyUI-Transformers" | "ComfyUI-TrashNodes-DownloadHuggingface" | "ComfyUI-TrollSuite" | "ComfyUI-TTS" | "comfyui-ultralytics-yolo" | "comfyui-upscale-by-model" | "ComfyUI-Vextra-Nodes" | "ComfyUI-Video-Matting" | "ComfyUI-VideoHelperSuite" | "ComfyUI-Vivax-Nodes" | "ComfyUI-Vsgan" | "comfyui-webcam-node" | "comfyui-yanc" | "Comfyui-Yolov8-JSON" | "ComfyUI's ControlNet Auxiliary Preprocessors" | "ComfyUIInvisibleWatermark" | "ComfyUIJasonNode" | "ComfyWarp" | "ConCarneNode" | "Consistency Decoder" | "ControlNet Auxiliar" | "ControlNet-LLLite-ComfyUI" | "Core ML Suite for ComfyUI" | "Cozy Human Parser" | "Cozy Reference Pose Generator" | "Cozy Utils" | "CPlus_Ardenius ComfyUI Control Box" | "CrasH Utils" | "Crystools" | "Crystools-save" | "cspnodes" | "Custom Nodes by xss" | "Cute Comfy" | "cyberdolphin" | "Cyclist" | "DarkPrompts" | "Deforum Nodes" | "demofusion-comfyui" | "DepthFM IN COMFYUI" | "Derfuu_ComfyUI_ModdedNodes" | "diffus3/ComfyUI-extensions" | "Dir Gir" | "Disco Diffusion" | "Dream Project Animation Nodes" | "Dream Video Batches" | "DynamicPrompts Custom Nodes" | "DZ-FaceDetailer" | "Eagle PNGInfo" | "Eagleshadow Custom Nodes" | "easy-comfy-nodes" | "EasyCaptureNode for ComfyUI" | "eden_comfy_pipelines" | "Efficiency Nodes for ComfyUI Version 2.0+" | "Embedding Picker" | "Endless ️🌊✨ Nodes" | "Extended Save Image for ComfyUI" | "Extra Models for ComfyUI" | "ezXY scripts and nodes" | "Face Analysis for ComfyUI" | "Facerestore CF (Code Former)" | "FaceSwap" | "failfast-comfyui-extensions" | "fcSuite" | "Fearnworks Custom Nodes" | "feidorian-ComfyNodes" | "fexli-util-node-comfyui" | "FizzNodes" | "FreeU_Advanced" | "GPU temperature protection" | "graphNavigator" | "Hakkun-ComfyUI-nodes" | "Harronode" | "Hayo comfyui nodes" | "hd-nodes-comfyui" | "hus' utils for ComfyUI" | "idpark_custom_node" | "IG Interpolation Nodes" | "Image chooser" | "Image Gallery" | "Image loader with subfolders" | "Image Resize for ComfyUI" | "Image Text Overlay Node for ComfyUI" | "Image to Text Node" | "image_control" | "Image-Captioning-in-ComfyUI" | "Image2Halftone Node for ComfyUI" | "ImageProcessing" | "ImageReward" | "ImagesGrid" | "ImageTextOverlay Node for ComfyUI" | "InstanceDiffusion Nodes" | "Integrated Nodes for ComfyUI" | "InterpolateEverything" | "Jovimetrix Composition Nodes" | "JPS Custom Nodes for ComfyUI" | "Kandinsky 2.2 ComfyUI Plugin" | "kb-comfyui-nodes" | "KepPromptLang" | "KJNodes for ComfyUI" | "Klinter_nodes" | "Knodes" | "komojini-comfyui-nodes" | "KSampler GPU" | "LAizypainter-Exporter-ComfyUI" | "LaMa Preprocessor [WIP]" | "Latent Consistency Model for ComfyUI" | "Latent Mirror node for ComfyUI" | "Latent-Interposer" | "LatentToRGB" | "Lazy Pony Prompter" | "LCM_Inpaint-Outpaint_Comfy" | "LCMSampler-ComfyUI" | "LexMSDBNodes" | "LiamUtil" | "Lists Cartesian Product" | "LLM_Node for ComfyUI" | "Load Image From Base64 URI" | "LoadLoraWithTags" | "LoRA Tag Loader for ComfyUI" | "LoRA-Merger-ComfyUI" | "Lora-Training-in-Comfy" | "LoraInfo" | "LoRTnoC-ComfyUI" | "m957ymj75urz/ComfyUI-Custom-Nodes" | "mape's ComfyUI Helpers" | "Marigold depth estimation in ComfyUI" | "Masquerade Nodes" | "MergeBlockWeighted_fo_ComfyUI" | "mihaiiancu/Inpaint" | "Mikey Nodes" | "mm-comfyui-loopback" | "mm-comfyui-megamask" | "MTB Nodes" | "NodeGPT" | "noEmbryo nodes" | "noise latent perlinpinpin" | "ntdviet/comfyui-ext" | "nui suite" | "NX_PromptStyler" | "One Button Prompt" | "OneDiff Nodes" | "OpenAINode" | "OpenPose Editor" | "OpenPose Keypoint Extractor" | "Ostris Nodes ComfyUI" | "Otonx's Custom Nodes" | "pants" | "pfaeff-comfyui" | "pfg-ComfyUI" | "Pixelization" | "Plush-for-ComfyUI" | "Pomfy - Photoshop and ComfyUI 2-way sync" | "Power Noise Suite for ComfyUI" | "PPF_Noise_ComfyUI" | "Preset Dimensions" | "Preview Subselection Node for ComfyUI" | "Primere nodes for ComfyUI" | "primitive-types" | "Prompt Info" | "prompt-generator" | "pythongosssss/ComfyUI-Custom-Scripts" | "qq-nodes-comfyui" | "QRNG_Node_ComfyUI" | "Quality of life Suit:V2" | "queuetools" | "Ranbooru for ComfyUI" | "rcsaquino/comfyui-custom-nodes" | "ReActor Node for ComfyUI" | "Recommended Resolution Calculator" | "Rembg Background Removal Node for ComfyUI" | "ResolutionSelector for ComfyUI" | "Restart Sampling" | "RF Nodes" | "rgthree's ComfyUI Nodes" | "rk-comfy-nodes" | "RUI-Nodes" | "SaltAI-Open-Resources" | "Save Image Extended for ComfyUI" | "Save Image with Generation Metadata" | "SaveAsScript" | "SaveImgPrompt" | "SComfyUI-Keyframe" | "SD-Advanced-Noise" | "SD-Latent-Upscaler" | "SDXL Auto Prompter" | "SDXL Prompt Styler" | "SDXL Prompt Styler (customized version by wolfden)" | "SDXL_sizing" | "SDXLCustomAspectRatio" | "SDXLResolutionPresets" | "Seamless tiling Node for ComfyUI" | "SeargeSDXL" | "SeeCoder [WIP]" | "segment anything" | "segment_to_mask_comfyui" | "select_folder_path_easy" | "sigmas_tools_and_the_golden_scheduler" | "Simple Math" | "Simple Wildcard" | "simple wildcard for ComfyUI" | "SimpleTiles" | "Sketch2Manga" | "smZNodes" | "SpliceTools" | "SRL's nodes" | "stability-ComfyUI-nodes" | "Stable Diffusion Dynamic Thresholding (CFG Scale Fix)" | "StableCascadeResizer" | "StableZero123-comfyui" | "Steerable Motion" | "StyleAligned for ComfyUI" | "Styles CSV Loader Extension for ComfyUI" | "Syrian Falcon Nodes" | "tdxh_node_comfyui" | "TEMP_ComfyUI-BRIA_AI-RMBG" | "Text to video for Stable Video Diffusion in ComfyUI" | "TGu Utilities" | "TheAlly's Custom Nodes" | "Tiled Diffusion & VAE for ComfyUI" | "Tiled sampling for ComfyUI" | "tiled_ksampler" | "TiledIPAdapter" | "tinyterraNodes" | "Touchpad two-finger gesture support for macOS" | "Tracking Nodes for Videos" | "tri3d-comfyui-nodes" | "trNodes" | "UltimateSDUpscale" | "ULTools for ComfyUI" | "Use Everywhere (UE Nodes)" | "Variables for Comfy UI" | "Variation seeds" | "Various ComfyUI Nodes by Type" | "Vid2vid" | "Visual Area Conditioning / Latent composition" | "VLM_nodes" | "WAS Node Suite" | "WAS_Extras" | "Waveform Extensions" | "WebDev9000-Nodes" | "WebUI Monaco Prompt" | "Wildcards" | "wlsh_nodes" | "Xycuno Oobabooga" | "y.k.'s ComfyUI node suite" | "YARS: Yet Another Resolution Selector" | "ymc-node-suite-comfyui" | "zhangp365/Some Utils for ComfyUI" | "zhihuige-nodes-comfyui" | "ZSuite" | "Zuellni/ComfyUI-Custom-Nodes";

type KnownCustomNode_CushyName = "_0246$5Beautify" | "_0246$5BoxRange" | "_0246$5CastReroute" | "_0246$5Cloud" | "_0246$5Convert" | "_0246$5Count" | "_0246$5Highway" | "_0246$5HighwayBatch" | "_0246$5Hold" | "_0246$5Hub" | "_0246$5Junction" | "_0246$5JunctionBatch" | "_0246$5Loop" | "_0246$5Merge" | "_0246$5Meta" | "_0246$5Pick" | "_0246$5RandomInt" | "_0246$5Script" | "_0246$5ScriptNode" | "_0246$5ScriptPile" | "_0246$5ScriptRule" | "_0246$5Stringify" | "_0246$5Switch" | "_0246$5Tag" | "_3DImage" | "_3way_Prompt_Styler" | "$$267E$$FE0F$$D83C$$2728_Image_Saver_with_JSON" | "$$5B58$$50A8" | "$$5BFC$$5165" | "$$622A$$56FE" | "$$6750$$8D28$$56FE" | "$$8F93$$5165$$56FE$$50CF" | "$$9884$$89C8" | "$$D83D_Gradio_ChatInterface" | "$$D83D_LLMs$_Chat" | "$$D83D_LLMs$_Chat$_GLM4$_Only" | "$$D83D_OpenAI_Advanced" | "$$D83D_OpenAI_Compatible" | "$$D83D_OpenAI_DALL$$B7E" | "$$D83D_OpenAI_Simple" | "$$D83D$$FE0F_LLMs$_Vison$_Ali" | "$$D83D$$FE0F_LLMs$_Vison$_Gemini" | "$$D83D$$FE0F_LLMs$_Vison$_GLM4" | "AB_SamplerCustom_$1experimental$2" | "ABCondition" | "ABGRemover" | "AbracadabraNode" | "AbracadabraNodeDefSummary" | "AbsCosWave" | "ABSNode$_DF" | "Absolute_value" | "AbsSinWave" | "abyz22$_blend$_onecolor" | "abyz22$_blendimages" | "abyz22$_bypass" | "abyz22$_Convertpipe" | "abyz22$_drawmask" | "abyz22$_Editpipe" | "abyz22$_FirstNonNull" | "abyz22$_FromBasicPipe$_v2" | "abyz22$_Frompipe" | "abyz22$_ImpactWildcardEncode" | "abyz22$_ImpactWildcardEncode$_GetPrompt" | "abyz22$_Ksampler" | "abyz22$_lamaInpaint" | "abyz22$_lamaPreprocessor" | "abyz22$_makecircles" | "abyz22$_Padding_Image" | "abyz22$_RemoveControlnet" | "abyz22$_SaveImage" | "abyz22$_setimageinfo" | "abyz22$_SetQueue" | "abyz22$_smallhead" | "abyz22$_ToBasicPipe" | "abyz22$_Topipe" | "ACN$_AdvancedControlNetApply" | "ACN$_ControlNetLoaderWithLoraAdvanced" | "ACN$_DefaultUniversalWeights" | "ACN$_SparseCtrlIndexMethodNode" | "ACN$_SparseCtrlLoaderAdvanced" | "ACN$_SparseCtrlMergedLoaderAdvanced" | "ACN$_SparseCtrlRGBPreprocessor" | "ACN$_SparseCtrlSpreadMethodNode" | "AdainImage" | "AdainLatent" | "AdaptiveCannyDetector$_PoP" | "AdaptiveThresholding" | "Add_File_Name_Prefix" | "Add_File_Name_Prefix_Advanced" | "Add_Folder" | "Add_Folder_Advanced" | "Add_Noise_to_Image_with_Mask" | "Add_String_To_Many" | "Add_Subtitles_To_Background" | "Add_Subtitles_To_Frames" | "Add_Tag" | "Add_Text_To_Image" | "AddAlpha" | "AddLabel" | "AddMask" | "AddMetaData" | "ADE$_AdjustPEFullStretch" | "ADE$_AdjustPEManual" | "ADE$_AdjustPESweetspotStretch" | "ADE$_AdjustWeightAllAdd" | "ADE$_AdjustWeightAllMult" | "ADE$_AdjustWeightIndivAdd" | "ADE$_AdjustWeightIndivAttnAdd" | "ADE$_AdjustWeightIndivAttnMult" | "ADE$_AdjustWeightIndivMult" | "ADE$_AnimateDiffCombine" | "ADE$_AnimateDiffKeyframe" | "ADE$_AnimateDiffLoaderGen1" | "ADE$_AnimateDiffLoaderV1Advanced" | "ADE$_AnimateDiffLoaderWithContext" | "ADE$_AnimateDiffLoRALoader" | "ADE$_AnimateDiffModelSettings" | "ADE$_AnimateDiffModelSettings$_Release" | "ADE$_AnimateDiffModelSettingsAdvancedAttnStrengths" | "ADE$_AnimateDiffModelSettingsSimple" | "ADE$_AnimateDiffSamplingSettings" | "ADE$_AnimateDiffSettings" | "ADE$_AnimateDiffUniformContextOptions" | "ADE$_AnimateDiffUnload" | "ADE$_ApplyAnimateDiffModel" | "ADE$_ApplyAnimateDiffModelSimple" | "ADE$_ApplyAnimateLCMI2VModel" | "ADE$_BatchedContextOptions" | "ADE$_CustomCFG" | "ADE$_CustomCFGKeyframe" | "ADE$_EmptyLatentImageLarge" | "ADE$_InjectI2VIntoAnimateDiffModel" | "ADE$_IterationOptsDefault" | "ADE$_IterationOptsFreeInit" | "ADE$_LoadAnimateDiffModel" | "ADE$_LoadAnimateLCMI2VModel" | "ADE$_LoopedUniformContextOptions" | "ADE$_LoopedUniformViewOptions" | "ADE$_MaskedLoadLora" | "ADE$_MultivalDynamic" | "ADE$_MultivalScaledMask" | "ADE$_NoiseLayerAdd" | "ADE$_NoiseLayerAddWeighted" | "ADE$_NoiseLayerReplace" | "ADE$_RawSigmaSchedule" | "ADE$_SigmaSchedule" | "ADE$_SigmaScheduleSplitAndCombine" | "ADE$_SigmaScheduleWeightedAverage" | "ADE$_SigmaScheduleWeightedAverageInterp" | "ADE$_StandardStaticContextOptions" | "ADE$_StandardStaticViewOptions" | "ADE$_StandardUniformContextOptions" | "ADE$_StandardUniformViewOptions" | "ADE$_UpscaleAndVAEEncode" | "ADE$_UseEvolvedSampling" | "ADE$_ViewsOnlyContextOptions" | "AdjustRect" | "ADMD$_AdditionalModelSelect" | "ADMD$_CheckpointLoader" | "ADMD$_DiffusersLoader" | "ADMD$_InitializeTraining" | "ADMD$_LoadLora" | "ADMD$_SaveLora" | "ADMD$_TrainLora" | "ADMD$_ValidationSampler" | "ADMD$_ValidationSettings" | "AdvancedCLIPTextEncodeWithBreak" | "AdvPromptEnhancer" | "Aegisflow_CLIP_Pass" | "Aegisflow_Conditioning_Pass" | "Aegisflow_controlnet_preprocessor_bus" | "Aegisflow_Image_Pass" | "Aegisflow_Latent_Pass" | "Aegisflow_Mask_Pass" | "Aegisflow_Model_Pass" | "aegisflow_Multi$_Pass" | "aegisflow_Multi$_Pass_XL" | "Aegisflow_Pos$3Neg_Pass" | "Aegisflow_SDXL_Tuple_Pass" | "Aegisflow_VAE_Pass" | "AesthetlcScoreSorter" | "af$_pipe$_in$_15" | "af$_pipe$_in$_xl" | "af$_pipe$_out$_15" | "af$_pipe$_out$_xl" | "AgeClassifierNode" | "aichemyYOLOv8Segmentation" | "AIO$_Preprocessor" | "AIT$_Unet$_Loader" | "AIT$_VAE$_Encode$_Loader" | "AlignFaces" | "AlphaChanelAdd" | "AlphaChanelAddByMask" | "AlphaChanelAsMask" | "AlphaChanelRemove" | "AlphaChanelRestore" | "AlphaClean" | "AlphaMatte" | "Alternating_KSampler_$1WLSH$2" | "AmplitudeToGraph" | "AmplitudeToNumber" | "AMT_VFI" | "AnalyseMetadata" | "Analyze_Palette_$$5BDream$$5D" | "AnimalPosePreprocessor" | "AnimateAnyone" | "AnimateDiff_Script" | "AnimateDiffCombine" | "AnimateDiffLoaderV1" | "AnimateDiffLoraLoader" | "AnimateDiffModuleLoader" | "AnimateDiffSampler" | "AnimateDiffSlidingWindowOptions" | "Animation_Builder_$1mtb$2" | "Anime_Character_Seg" | "AnimeFace$_SemSegPreprocessor" | "AnimeLineArt$_Preprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "AnimeLineArtPreprocessor" | "AnimeSegmentation" | "Any_Converter" | "Any_List" | "Any_List_Iterator" | "Any_String" | "Any_To_Any" | "Any_To_String_$1mtb$2" | "AnyAspectRatio" | "AnyListCartesianProduct" | "AnyToAny" | "APersonMaskGenerator" | "APIRequestNode" | "APISR$_Lterative$_Zho" | "APISR$_ModelLoader$_Zho" | "APISR$_Zho" | "AppendAgent" | "AppInfo" | "Apply_CLAHE" | "Apply_ControlNet_Stack" | "Apply_Instagram_Filter" | "Apply_Invisible_Watermark" | "Apply_LoRA" | "Apply_optical_flow" | "Apply_Whisper" | "Apply_Yolov8_Model" | "Apply_Yolov8_Model_Seg" | "ApplyInstantID" | "ApplyInstantIDAdvanced" | "ApplyInstantIDControlNet" | "ApplyMaskToImage$7badger" | "ApplyMatting" | "ApplyMeshTransformAsShapeKey" | "ApplyRegionalIPAdapters_$3$3Inspire" | "ApplyScaleUModelNode" | "ApplySerialPrompter" | "ApplyVisualStyle" | "ApplyVisualStylePrompting$_" | "APS$_LatentBatch" | "APS$_Seed" | "AreaToMask" | "ArithmeticBlend" | "ArtGallery$_Zho" | "ArtistsImage$_Zho" | "ArtOrHumanClassifierNode" | "AsciiArt" | "Aspect_Ratios_Node" | "AspectRatioSelector" | "Assistant" | "ASTERR" | "AstropulsePixelDetector" | "Asymmetric_Tiled_KSampler" | "Asymmetric$_Tiling$_KSampler" | "Attention_couple" | "audio2video" | "AudioFrameTransformBeats" | "AudioFrameTransformShadertoy" | "AudioLDM2Node" | "AudioLoadPath" | "AudioToAmplitudeGraph" | "AudioToFFTs" | "Auto_Merge_Block_Weighted" | "Automatic_CFG" | "AutomaticMask$1segment_anything$2" | "AutoNegativePrompt" | "AV$_CheckpointMerge" | "AV$_CheckpointModelsToParametersPipe" | "AV$_CheckpointSave" | "AV$_ControlNetEfficientLoader" | "AV$_ControlNetEfficientLoaderAdvanced" | "AV$_ControlNetEfficientStacker" | "AV$_ControlNetEfficientStackerSimple" | "AV$_ControlNetLoader" | "AV$_ControlNetPreprocessor" | "AV$_LoraListLoader" | "AV$_LoraListStacker" | "AV$_LoraLoader" | "AV$_ParametersPipeToCheckpointModels" | "AV$_ParametersPipeToPrompts" | "AV$_PromptsToParametersPipe" | "AV$_SAMLoader" | "AV$_VAELoader" | "AvoidErasePrediction" | "Axis_Pack" | "Axis_To_Any" | "Axis_Unpack" | "B$_ENUM" | "B$_VECTOR3" | "B$_VECTOR4" | "BackgroundRemover" | "BackgroundRemover_$8_rcsaquino" | "BackgroundReplacement" | "BAE$7NormalMapPreprocessor" | "Base64ImageInput" | "Base64ImageOutput" | "Base64ToImage" | "Base64ToMask" | "BaseModel$_Loader$_fromhub" | "BaseModel$_Loader$_local" | "BasicPipeToDetailerPipe" | "BasicPipeToDetailerPipeSDXL" | "BasicScheduler" | "Batch_12_Images" | "Batch_Crop_Image" | "Batch_Crop_Resize_Inplace" | "Batch_Float_$1mtb$2" | "Batch_Float_Assemble_$1mtb$2" | "Batch_Float_Fill_$1mtb$2" | "Batch_Load_Images" | "Batch_Make_$1mtb$2" | "Batch_Merge_$1mtb$2" | "Batch_Resize_Image_for_SDXL" | "Batch_Shake_$1mtb$2" | "Batch_Shape_$1mtb$2" | "Batch_State" | "Batch_String" | "Batch_Transform_$1mtb$2" | "Batch_Unsampler" | "BatchAlign" | "BatchAmplitudeSchedule" | "BatchAverageImage" | "BatchAverageUnJittered" | "BatchCLIPSeg" | "BatchCount$6" | "BatchCreativeInterpolation" | "BatchCreativeInterpolationNodeDynamicSettings" | "BatchCropFromMask" | "BatchCropFromMaskAdvanced" | "BatchGLIGENSchedule" | "BatchImagePathLoader" | "BatchIndex$_AS" | "BatchJoinAudio" | "BatchNormalizeImage" | "BatchNormalizeLatent" | "BatchPromptSchedule" | "BatchPromptScheduleEncodeSDXL" | "BatchPromptScheduleLatentInput" | "BatchPromptScheduleNodeFlowEnd" | "BatchPromptScheduleSDXLLatentInput" | "BatchStringSchedule" | "BatchToList" | "BatchUncrop" | "BatchUncropAdvanced" | "BatchValueSchedule" | "BatchValueScheduleLatentInput" | "Bbox_$1mtb$2" | "Bbox_From_Mask_$1mtb$2" | "BboxDetectorCombined" | "BboxDetectorCombined$_v2" | "BboxDetectorForEach" | "BboxDetectorSEGS" | "BBoxListItemSelect$1FaceParsing$2" | "BBoxResize$1FaceParsing$2" | "BboxToInt" | "Beat_Curve_$$5BDream$$5D" | "Bedrock_$7_Claude" | "Bedrock_$7_SDXL" | "Bedrock_$7_Titan_Image" | "BetterFilmGrain" | "BetterString" | "Big_Float_Switch_$$5BDream$$5D" | "Big_Image_Switch_$$5BDream$$5D" | "Big_Int_Switch_$$5BDream$$5D" | "Big_Latent_Switch_$$5BDream$$5D" | "Big_Palette_Switch_$$5BDream$$5D" | "Big_Text_Switch_$$5BDream$$5D" | "BilateralFilter" | "BilboXLut" | "BilboXPhotoPrompt" | "BilboXVignette" | "Binary_INT_Switch" | "BinaryImageMask" | "BinaryPreprocessor" | "BindImageListPromptList_$3$3Inspire" | "BingImageGrabber" | "BiRefNet" | "BitCrushAudioFX" | "BitwiseAndMask" | "BitwiseAndMaskForEach" | "BlehDeepShrink" | "BlehDiscardPenultimateSigma" | "BlehForceSeedSampler" | "BlehHyperTile" | "BlehInsaneChainSampler" | "BlehModelPatchConditional" | "Blend" | "Blend_Latents" | "Blend_Latents_$1PPF_Noise$2" | "Blended_Transition_$$5BDVB$$5D" | "BlendScreentone" | "BLIP_Analyze_Image" | "BLIP_Model_Loader" | "BLIPCaption" | "BLIPLoader" | "Blocks_Mecha_Hyper" | "Blur" | "Blur_$1mtb$2" | "BlurImageFast" | "BlurMaskFast" | "BLVAEEncode" | "BNK$_AddCLIPSDXLParams" | "BNK$_AddCLIPSDXLRParams" | "BNK$_CLIPTextEncodeAdvanced" | "BNK$_CLIPTextEncodeSDXLAdvanced" | "BNK$_CutoffBasePrompt" | "BNK$_CutoffRegionsToConditioning" | "BNK$_CutoffRegionsToConditioning$_ADV" | "BNK$_CutoffSetRegions" | "BNK$_DuplicateBatchIndex" | "BNK$_GetSigma" | "BNK$_InjectNoise" | "BNK$_NoisyLatentImage" | "BNK$_SlerpLatent" | "BNK$_TiledKSampler" | "BNK$_TiledKSamplerAdvanced" | "BNK$_Unsampler" | "Bool" | "Bool_Binary_Operation" | "Bool_Unary_Operation" | "Boolean_To_Float_$$5BDream$$5D" | "Boolean_To_Int_$$5BDream$$5D" | "Boolean_To_Text" | "BooleanPrimitive" | "BOPBTL$_BlendFaces" | "BOPBTL$_DetectEnhanceBlendFaces" | "BOPBTL$_DetectFaces" | "BOPBTL$_EnhanceFaces" | "BOPBTL$_EnhanceFacesAdvanced" | "BOPBTL$_LoadFaceDetectorModel" | "BOPBTL$_LoadFaceEnhancerModel" | "BOPBTL$_LoadRestoreOldPhotosModel" | "BOPBTL$_LoadScratchMaskModel" | "BOPBTL$_RestoreOldPhotos" | "BOPBTL$_ScratchMask" | "Bounded_Image_Blend" | "Bounded_Image_Blend_with_Mask" | "Bounded_Image_Crop" | "Bounded_Image_Crop_with_Mask" | "BoundingRect_$1contours$2" | "BreakFrames" | "BreakGrid" | "BrevImage" | "BRIA$_RMBG$_ModelLoader$_Zho" | "BRIA$_RMBG$_Zho" | "BRIAAI_Matting" | "Brightness" | "Brightness$_Contrast$_Ally" | "BrushMotion" | "BSZAbsoluteHires" | "BSZAspectHires" | "BSZColoredLatentImageXL" | "BSZCombinedHires" | "BSZHueChromaXL" | "BSZInjectionKSampler" | "BSZLatentbuster" | "BSZLatentDebug" | "BSZLatentFill" | "BSZLatentGradient" | "BSZLatentHSVAImage" | "BSZLatentOffsetXL" | "BSZLatentRGBAImage" | "BSZPixelbuster" | "BSZPixelbusterHelp" | "BSZPrincipledConditioning" | "BSZPrincipledSampler" | "BSZPrincipledScale" | "BSZStrangeResample" | "Build_Filename_String_$1WLSH$2" | "Build_Gif" | "Build_Prompt_$$5BDream$$5D" | "BuildColorRangeAdvanced_$1hsv$2" | "BuildColorRangeHSV_$1hsv$2" | "BulkVariation" | "Bus_Node" | "Cache_Node" | "CacheBackendData_$3$3Inspire" | "CacheBackendDataList_$3$3Inspire" | "CacheBackendDataNumberKey_$3$3Inspire" | "CacheBackendDataNumberKeyList_$3$3Inspire" | "Cached_Image_Load_From_URL" | "CachedGetter" | "Caching_Image_Loader" | "CADS" | "CAIN_VFI" | "CalcMaskBound" | "CalcMaxFontSize" | "Calculate_Upscale" | "CalculateAestheticScore" | "CalculateFrameOffset" | "Calculation_$$5BDream$$5D" | "Calculation_$$5BDVB$$5D" | "Call_LLM_Advanced" | "Call_LLM_Basic" | "CamerasImage$_Zho" | "Canny" | "Canny$_Preprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "CannyEdgeMask" | "CannyEdgePreprocessor" | "Canvas$_Tab" | "canvas$7util$7cal$7size" | "CanvasCreatorAdvanced" | "CanvasCreatorBasic" | "CanvasCreatorSimple" | "CaptureWebcam" | "CascadeResize" | "CascadeResolutions" | "CCMSampler" | "CCSR$_Model$_Select" | "CCSR$_Upscale" | "CDL$5OpenPoseEditorPlus" | "CDTuner" | "Ceil" | "CeilNode$_DF" | "CenterCalculation" | "CenterImage" | "Cfg_Literal" | "Cfg_Literal_$1Image_Saver$2" | "CFGPrediction" | "CfgScheduleHookProvider" | "ChameleonMask" | "ChampLoader" | "ChampRun" | "Change_Channel_Count" | "ChangeImageBatchSize_$3$3Inspire" | "ChangeLatentBatchSize_$3$3Inspire" | "chaosaiart$_ADD$_Prompt" | "chaosaiart$_adjust$_color" | "chaosaiart$_any$_array2input$_1Input" | "chaosaiart$_any$_array2input$_all$_big" | "chaosaiart$_any$_array2input$_all$_small" | "chaosaiart$_Any$_Display" | "chaosaiart$_any$_input2array$_big" | "chaosaiart$_any$_input2array$_small" | "chaosaiart$_Any$_Switch" | "chaosaiart$_Any$_Switch$_Big$_Number" | "chaosaiart$_Batch$_Loader$_Number$_Override" | "chaosaiart$_CheckpointLoader" | "chaosaiart$_CheckpointPrompt" | "chaosaiart$_CheckpointPrompt$_Frame" | "chaosaiart$_CheckpointPrompt$_FrameMixer" | "chaosaiart$_CheckpointPrompt2" | "chaosaiart$_cn$_math" | "chaosaiart$_controlnet$_weidgth" | "chaosaiart$_ControlNetApply" | "chaosaiart$_ControlNetApply2" | "chaosaiart$_convert" | "chaosaiart$_Denoising$_Switch" | "chaosaiart$_EmptyLatentImage" | "chaosaiart$_ImageHolder$_loop" | "chaosaiart$_img2video" | "chaosaiart$_imgHolder" | "chaosaiart$_KSampler" | "chaosaiart$_KSampler1" | "chaosaiart$_KSampler2" | "chaosaiart$_KSampler3" | "chaosaiart$_Load$_Image$_Batch" | "chaosaiart$_Load$_Image$_Batch$_2img" | "chaosaiart$_main$_Prompt" | "chaosaiart$_Number" | "chaosaiart$_Number$_Counter" | "chaosaiart$_Number$_Switch" | "chaosaiart$_Prompt" | "chaosaiart$_Prompt$_Frame" | "chaosaiart$_Prompt$_mixer" | "chaosaiart$_Prompt$_mixer$_byFrame" | "chaosaiart$_reloadAny$_Load" | "chaosaiart$_reloadAny$_Save" | "chaosaiart$_reloadIMG$_Load" | "chaosaiart$_reloadIMG$_Load2" | "chaosaiart$_reloadIMG$_Save" | "chaosaiart$_reloadLatent$_Load" | "chaosaiart$_reloadLatent$_Load2" | "chaosaiart$_reloadLatent$_Save" | "chaosaiart$_restarter" | "chaosaiart$_restarter$_advanced" | "chaosaiart$_SaveImage" | "chaosaiart$_saveImagePrefix" | "chaosaiart$_Show$_Any" | "chaosaiart$_Show$_Info" | "chaosaiart$_ShowInput" | "chaosaiart$_Simple$_Prompt" | "chaosaiart$_test" | "chaosaiart$_test2" | "chaosaiart$_TextCLIPEncode" | "chaosaiart$_TextCLIPEncode$_simple" | "chaosaiart$_video2img1" | "chaosaiart$_video2img2" | "CharacterCount" | "CharacterInText" | "Chat" | "Chat_completion_$_O" | "Chat_With_LLM" | "Chat$_Completion_$_O" | "Chat$_Message_$_O" | "Chat$_Message$_fromString_$_O" | "Chatbox_Overlay" | "ChatGPT" | "ChatGPT_$_O" | "ChatGPT_compact_$_O" | "ChatGPT_Simple_$_O" | "ChatGPTOpenAI" | "ChatGptPrompt" | "ChatMusician" | "Checkpoint" | "Checkpoint_Loader" | "Checkpoint_Loader_$1Simple$2" | "Checkpoint_Loader_Simple_Mikey" | "Checkpoint_Loader_w$3Name_$1WLSH$2" | "Checkpoint_Loader_with_Name_$1Image_Saver$2" | "Checkpoint_Selector" | "CheckpointHash" | "CheckpointLoader" | "CheckpointLoader_$1dirty$2" | "CheckpointLoader$8pysssss" | "CheckpointLoaderSimple" | "CheckpointLoaderSimple_$1dirty$2" | "CheckpointLoaderSimpleSequence" | "CheckpointLoaderSimpleShared_$3$3Inspire" | "CheckpointLoaderSimpleText" | "CheckpointLoaderSimpleWithNoiseSelect" | "CheckpointSave" | "ChorusAudioFX" | "ChromaticAberration" | "Chunk_Up" | "CinematicLook" | "Circular_VAEDecode" | "CircularVAEDecode" | "CivitAI$_Checkpoint$_Loader" | "CivitAI$_Lora$_Loader" | "CkptNames$_" | "CLAHE" | "ClampOutliers" | "Clear_Tag" | "CLIP_$6$3$7_w$3Text_Unified_$1WLSH$2" | "CLIP_AdvancedTextEncode$8fofo" | "CLIP_Input_Switch" | "CLIP_Positive$7Negative_$1WLSH$2" | "CLIP_Positive$7Negative_w$3Text_$1WLSH$2" | "CLIP_Positive$7Negative_XL_$1WLSH$2" | "CLIP_Positive$7Negative_XL_w$3Text_$1WLSH$2" | "CLIP_PromptConditioning$8fofo" | "CLIP_Text_Encode_$1Batch$2" | "CLIP_Vision_Input_Switch" | "CLIP$_Interrogator" | "ClipAmplitude" | "CLIPAttentionMaskEncode" | "ClipClamp" | "CLIPEncodeMultiple" | "CLIPEncodeMultipleAdvanced" | "CLIPIter" | "CLIPLoader" | "CLIPMergeAdd" | "CLIPMergeSimple" | "CLIPMergeSubtract" | "ClippingAudioFX" | "CLIPSave" | "CLIPSeg" | "CLIPSeg_Batch_Masking" | "CLIPSeg_Masking" | "CLIPSeg_Model_Loader" | "CLIPSegDetectorProvider" | "CLIPSetLastLayer" | "CLIPStringEncode_$_O" | "CLIPTextEncode" | "CLIPTextEncode_$1BlenderNeko_Advanced_$6_NSP$2" | "CLIPTextEncode_$1NSP$2" | "CLIPTextEncode_$1RE$2" | "CLIPTextEncodeA1111" | "CLIPTextEncodeAdvancedNSuite_$$5Bn$7suite$$5D" | "CLIPTextEncodeAIO" | "CLIPTextEncodeBLIP" | "CLIPTextEncodeBLIP$72" | "CLIPTextEncodeControlnet" | "CLIPTextEncodeList" | "CLIPTextEncodePerpWeight" | "CLIPTextEncodeSDXL" | "CLIPTextEncodeSDXL_$1RE$2" | "CLIPTextEncodeSDXL$6" | "CLIPTextEncodeSDXL$7Multi$7IO" | "CLIPTextEncodeSDXL$7Pipe" | "CLIPTextEncodeSDXLRefiner" | "CLIPTextEncodeSDXLRefiner_$1RE$2" | "CLIPTextEncodeSequence2" | "CLIPTextEncodeWithBreak" | "CLIPTextEncodeWithStats" | "CLIPTextEncodeWithWeight_$3$3Inspire" | "CLIPTextEncodeWithWildcards" | "ClipVisionClamp" | "CLIPVisionEncode" | "CLIPVisionLoader" | "ClipVisionOutputClamp" | "CM$_BoolBinaryOperation" | "CM$_BoolToInt" | "CM$_BoolUnaryOperation" | "CM$_BreakoutVec2" | "CM$_BreakoutVec3" | "CM$_BreakoutVec4" | "CM$_ComposeVec2" | "CM$_ComposeVec3" | "CM$_ComposeVec4" | "CM$_FloatBinaryCondition" | "CM$_FloatBinaryOperation" | "CM$_FloatToInt" | "CM$_FloatToNumber" | "CM$_FloatUnaryCondition" | "CM$_FloatUnaryOperation" | "CM$_IntBinaryCondition" | "CM$_IntBinaryOperation" | "CM$_IntToBool" | "CM$_IntToFloat" | "CM$_IntToNumber" | "CM$_IntUnaryCondition" | "CM$_IntUnaryOperation" | "CM$_NearestSDXLResolution" | "CM$_NumberBinaryCondition" | "CM$_NumberBinaryOperation" | "CM$_NumberToFloat" | "CM$_NumberToInt" | "CM$_NumberUnaryCondition" | "CM$_NumberUnaryOperation" | "CM$_SDXLResolution" | "CM$_Vec2BinaryCondition" | "CM$_Vec2BinaryOperation" | "CM$_Vec2ScalarOperation" | "CM$_Vec2ToScalarBinaryOperation" | "CM$_Vec2ToScalarUnaryOperation" | "CM$_Vec2UnaryCondition" | "CM$_Vec2UnaryOperation" | "CM$_Vec3BinaryCondition" | "CM$_Vec3BinaryOperation" | "CM$_Vec3ScalarOperation" | "CM$_Vec3ToScalarBinaryOperation" | "CM$_Vec3ToScalarUnaryOperation" | "CM$_Vec3UnaryCondition" | "CM$_Vec3UnaryOperation" | "CM$_Vec4BinaryCondition" | "CM$_Vec4BinaryOperation" | "CM$_Vec4ScalarOperation" | "CM$_Vec4ToScalarBinaryOperation" | "CM$_Vec4ToScalarUnaryOperation" | "CM$_Vec4UnaryCondition" | "CM$_Vec4UnaryOperation" | "Color" | "Color_$1hexadecimal$2" | "Color_$1RGB$2" | "Color_Blend" | "Color_Clip" | "Color_Clip_$1advanced$2" | "Color_Clip_ADE20k" | "Color_Correct_$1mtb$2" | "Color_correction" | "Color_Transfer" | "color$_drop" | "Color$_Preprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "ColorAdjust$1FaceParsing$2" | "ColorBlend" | "ColorCorrect" | "ColorDictionary" | "ColorDictionary_$1custom$2" | "Colored_Image_$1mtb$2" | "ColorizeDepthmap" | "ColorListMaskToImage" | "ColorMatch" | "ColorMatchImage" | "ColorModEdges" | "ColorModPivot" | "ColorPicker" | "ColorPreprocessor" | "ColorTint" | "ColorToMask" | "CombinationText" | "Combine_and_Paste" | "Combine_HDMasks" | "Combine_Masks" | "Combine_Points" | "Combine_ZHGMasks" | "combine$_chat$_messages_$_O" | "CombineImageBatch" | "CombineInput" | "CombineNoiseLatentNode" | "CombinePredictions" | "CombinePrompt" | "CombineRegionalPrompts" | "CombineSegMasks" | "Comfy_Couple" | "comfy$7kandinsky22$7decoder$7loader" | "comfy$7kandinsky22$7hint$7combiner" | "comfy$7kandinsky22$7image$7encoder" | "comfy$7kandinsky22$7img$7latents" | "comfy$7kandinsky22$7latents" | "comfy$7kandinsky22$7movq$7decoder" | "comfy$7kandinsky22$7positive$7text$7encoder" | "comfy$7kandinsky22$7prior$7averaging$72" | "comfy$7kandinsky22$7prior$7averaging$73" | "comfy$7kandinsky22$7prior$7averaging$74" | "comfy$7kandinsky22$7prior$7loader" | "comfy$7kandinsky22$7text$7encoder" | "comfy$7kandinsky22$7unet$7decoder" | "comfy$7qr$7by$7image$7size" | "comfy$7qr$7by$7module$7size" | "comfy$7qr$7by$7module$7split" | "comfy$7qr$7mask$_errors" | "comfy$7qr$7read" | "comfy$7qr$7validate" | "ComfyDeployWebscoketImageInput" | "ComfyDeployWebscoketImageOutput" | "ComfyNodesToSaveCanvas" | "ComfyUI$_Image$_Round$_$_ImageCropAdvanced" | "ComfyUI$_Image$_Round$_$_ImageRound" | "ComfyUI$_Image$_Round$_$_ImageRoundAdvanced" | "ComfyUI$_Mexx$_Poster" | "comfyui$7easy$7padding" | "ComfyUIDeployExternalCheckpoint" | "ComfyUIDeployExternalImage" | "ComfyUIDeployExternalImageAlpha" | "ComfyUIDeployExternalLora" | "ComfyUIDeployExternalNumber" | "ComfyUIDeployExternalNumberInt" | "ComfyUIDeployExternalText" | "ComfyWordCloud" | "Common_Frame_Dimensions_$$5BDream$$5D" | "Compare" | "Compare_Palettes_$$5BDream$$5D" | "CompareModel" | "compine$_chat$_messages_$_O" | "composite" | "CompositeImage" | "CompositeMotionBrush" | "CompositeMotionBrushWithoutModel" | "CompressorAudioFX" | "Compute_optical_flow" | "concat" | "Concat_Images_$1mtb$2" | "concat_Strings_$_O" | "Concat_Text_$_O" | "concat$_klinter" | "ConcatAudioList" | "ConcatConditioning" | "ConcatConditioningsWithMultiplier_$3$3Inspire" | "ConcatenateString" | "ConcatRandomNSP$_O" | "ConcatStringSingle" | "ConcatText" | "ConcatText$_Zho" | "ConditionedPrediction" | "Conditioning" | "Conditioning_$1combine_multiple$2" | "Conditioning_$1combine_selective$2" | "Conditioning_area_scale_by_ratio" | "Conditioning_Grid_$1cond$2" | "Conditioning_Grid_$1string$2" | "Conditioning_Grid_$1string$2_Advanced" | "Conditioning_Input_Switch" | "Conditioning_Switch_$1JPS$2" | "conditioning$7util$7input$7switch" | "ConditioningAverage" | "ConditioningBlend" | "ConditioningClamp" | "ConditioningCombine" | "ConditioningConcat" | "ConditioningDebug" | "ConditioningMultiCombine" | "ConditioningMultiplier$_PoP" | "ConditioningNormalizer$_PoP" | "ConditioningSetArea" | "ConditioningSetArea_with_tuples" | "ConditioningSetArea$_DF" | "ConditioningSetAreaEXT$_DF" | "ConditioningSetAreaPercentage" | "ConditioningSetAreaStrength" | "ConditioningSetMask" | "ConditioningSetMaskAndCombine" | "ConditioningSetMaskAndCombine3" | "ConditioningSetMaskAndCombine4" | "ConditioningSetMaskAndCombine5" | "ConditioningSetTimestepRange" | "ConditioningStretch" | "ConditioningUpscale" | "ConditioningZeroOut" | "ConditionText" | "ConditionTextMulti" | "CondPassThrough" | "ConsoleDebug$6" | "Constant_Mask" | "Constant_Number" | "ConstrainImage$8pysssss" | "ConstrainImageforVideo$8pysssss" | "ContentMaskLatent" | "Contour_To_Mask" | "Contours" | "Control_Net_Model_Input_Switch" | "Control_Net_Stacker" | "Control$_Box" | "ControlLoraSave" | "ControlNet_Switch_$1JPS$2" | "ControlNetApply" | "ControlNetApplyAdvanced" | "ControlNetClamp" | "ControlNetGraphLoader" | "ControlNetGraphSaver" | "ControlNetHadamard" | "ControlNetHadamard_$1manual$2" | "ControlNetLoader" | "ControlNetLoaderAdvanced" | "ControlNetScript" | "ControlNetSpeedup" | "ControlnetUnit" | "Convert_Color_Space" | "Convert_Masks_to_Images" | "ConvertImg" | "convertKeyframeKeysToBatchKeys" | "ConvertNormals" | "ConvertToGrayscale" | "ConvolutionAudioFX" | "CopyMakeBorder" | "Core_ML_Converter" | "Core_ML_LCM_Converter" | "Core_ML_LoRA_Loader" | "CoreMLDetailerHookProvider" | "CoreMLModelAdapter" | "CoreMLSampler" | "CoreMLSamplerAdvanced" | "CoreMLUNetLoader" | "Cosines" | "CosNode$_DF" | "CostumeAgent$_1" | "CostumeAgent$_2" | "CostumeMaster$_1" | "CosWave" | "Count_Files_in_Directory_$1FW$2" | "Count_Tokens_$1FW$2" | "Cover_HDMasks" | "Cover_ZHGMasks" | "Cozy_Human_Parser_ATR" | "Cozy_Human_Parser_LIP" | "Cozy_Human_Parser_Pascal" | "Cozy_Pose_Body_Reference" | "Cozy_Pose_Face_Reference" | "Cozy_Sampler_Options" | "CR_8_Channel_In" | "CR_8_Channel_Out" | "CR_Apply_ControlNet" | "CR_Apply_LoRA_Stack" | "CR_Apply_Model_Merge" | "CR_Apply_Multi_Upscale" | "CR_Apply_Multi$7ControlNet" | "CR_Arabic_Text_RTL" | "CR_Aspect_Ratio" | "CR_Aspect_Ratio_Banners" | "CR_Aspect_Ratio_SDXL" | "CR_Aspect_Ratio_Social_Media" | "CR_Batch_Images_From_List" | "CR_Batch_Process_Switch" | "CR_Binary_Pattern" | "CR_Binary_To_Bit_List" | "CR_Bit_Schedule" | "CR_Central_Schedule" | "CR_Checker_Pattern" | "CR_Clamp_Value" | "CR_Clip_Input_Switch" | "CR_Color_Bars" | "CR_Color_Gradient" | "CR_Color_Panel" | "CR_Color_Tint" | "CR_Combine_Prompt" | "CR_Combine_Schedules" | "CR_Comic_Panel_Templates" | "CR_Composite_Text" | "CR_Conditioning_Input_Switch" | "CR_Conditioning_Mixer" | "CR_ControlNet_Input_Switch" | "CR_Current_Frame" | "CR_Cycle_Images" | "CR_Cycle_Images_Simple" | "CR_Cycle_LoRAs" | "CR_Cycle_Models" | "CR_Cycle_Text" | "CR_Cycle_Text_Simple" | "CR_Data_Bus_In" | "CR_Data_Bus_Out" | "CR_Debatch_Frames" | "CR_Diamond_Panel" | "CR_Draw_Perspective_Text" | "CR_Draw_Pie" | "CR_Draw_Shape" | "CR_Draw_Text" | "CR_Encode_Scheduled_Prompts" | "CR_Feathered_Border" | "CR_Float_Range_List" | "CR_Float_To_Integer" | "CR_Float_To_String" | "CR_Font_File_List" | "CR_Get_Parameter_From_Prompt" | "CR_Gradient_Float" | "CR_Gradient_Integer" | "CR_Half_Drop_Panel" | "CR_Halftone_Filter" | "CR_Halftone_Grid" | "CR_Hires_Fix_Process_Switch" | "CR_Image_Border" | "CR_Image_Grid_Panel" | "CR_Image_Input_Switch" | "CR_Image_Input_Switch_$14_way$2" | "CR_Image_List" | "CR_Image_List_Simple" | "CR_Image_Output" | "CR_Image_Panel" | "CR_Image_Pipe_Edit" | "CR_Image_Pipe_In" | "CR_Image_Pipe_Out" | "CR_Image_Size" | "CR_Img2Img_Process_Switch" | "CR_Increment_Float" | "CR_Increment_Integer" | "CR_Index" | "CR_Index_Increment" | "CR_Index_Multiply" | "CR_Index_Reset" | "CR_Input_Text_List" | "CR_Integer_Multiple" | "CR_Integer_Range_List" | "CR_Integer_To_String" | "CR_Interpolate_Latents" | "CR_Intertwine_Lists" | "CR_Keyframe_List" | "CR_Latent_Batch_Size" | "CR_Latent_Input_Switch" | "CR_Load_Animation_Frames" | "CR_Load_Flow_Frames" | "CR_Load_GIF_As_List" | "CR_Load_Image_List" | "CR_Load_Image_List_Plus" | "CR_Load_LoRA" | "CR_Load_Prompt_Style" | "CR_Load_Schedule_From_File" | "CR_Load_Scheduled_ControlNets" | "CR_Load_Scheduled_LoRAs" | "CR_Load_Scheduled_Models" | "CR_Load_Text_List" | "CR_LoRA_List" | "CR_LoRA_Stack" | "CR_Mask_Text" | "CR_Math_Operation" | "CR_Model_Input_Switch" | "CR_Model_List" | "CR_Model_Merge_Stack" | "CR_Module_Input" | "CR_Module_Output" | "CR_Module_Pipe_Loader" | "CR_Multi_Upscale_Stack" | "CR_Multi$7ControlNet_Stack" | "CR_Multiline_Text" | "CR_Output_Flow_Frames" | "CR_Output_Schedule_To_File" | "CR_Overlay_Text" | "CR_Overlay_Transparent_Image" | "CR_Page_Layout" | "CR_Pipe_Switch" | "CR_Polygons" | "CR_Prompt_List" | "CR_Prompt_List_Keyframes" | "CR_Prompt_Scheduler" | "CR_Prompt_Text" | "CR_Radial_Gradient" | "CR_Random_Hex_Color" | "CR_Random_LoRA_Stack" | "CR_Random_Multiline_Colors" | "CR_Random_Multiline_Values" | "CR_Random_Panel_Codes" | "CR_Random_RGB" | "CR_Random_RGB_Gradient" | "CR_Random_Shape_Pattern" | "CR_Random_Weight_LoRA" | "CR_Repeater" | "CR_Save_Text_To_File" | "CR_Schedule_Input_Switch" | "CR_Schedule_To_ScheduleList" | "CR_SD1$55_Aspect_Ratio" | "CR_SDXL_Aspect_Ratio" | "CR_SDXL_Base_Prompt_Encoder" | "CR_SDXL_Prompt_Mix_Presets" | "CR_SDXL_Prompt_Mixer" | "CR_SDXL_Style_Text" | "CR_Seamless_Checker" | "CR_Seed" | "CR_Seed_to_Int" | "CR_Select_Font" | "CR_Select_ISO_Size" | "CR_Select_Model" | "CR_Select_Resize_Method" | "CR_Set_Switch_From_String" | "CR_Set_Value_On_Binary" | "CR_Set_Value_On_Boolean" | "CR_Set_Value_on_String" | "CR_Simple_Banner" | "CR_Simple_Binary_Pattern" | "CR_Simple_Binary_Pattern_Simple" | "CR_Simple_Image_Compare" | "CR_Simple_List" | "CR_Simple_Meme_Template" | "CR_Simple_Prompt_List" | "CR_Simple_Prompt_List_Keyframes" | "CR_Simple_Prompt_Scheduler" | "CR_Simple_Schedule" | "CR_Simple_Text_Panel" | "CR_Simple_Text_Scheduler" | "CR_Simple_Text_Watermark" | "CR_Simple_Titles" | "CR_Simple_Value_Scheduler" | "CR_Split_String" | "CR_Starburst_Colors" | "CR_Starburst_Lines" | "CR_String_To_Boolean" | "CR_String_To_Combo" | "CR_String_To_Number" | "CR_Style_Bars" | "CR_Switch_Model_and_CLIP" | "CR_Text" | "CR_Text_Blacklist" | "CR_Text_Concatenate" | "CR_Text_Cycler" | "CR_Text_Input_Switch" | "CR_Text_Input_Switch_$14_way$2" | "CR_Text_Length" | "CR_Text_List" | "CR_Text_List_Simple" | "CR_Text_List_To_String" | "CR_Text_Operation" | "CR_Text_Replace" | "CR_Text_Scheduler" | "CR_Thumbnail_Preview" | "CR_Trigger" | "CR_Upscale_Image" | "CR_VAE_Decode" | "CR_VAE_Input_Switch" | "CR_Value" | "CR_Value_Cycler" | "CR_Value_Scheduler" | "CR_Vignette_Filter" | "CR_XY_From_Folder" | "CR_XY_Index" | "CR_XY_Interpolate" | "CR_XY_List" | "CR_XY_Product" | "CR_XY_Save_Grid_Image" | "CR_XYZ_Index" | "CR$_Aspect_Ratio_For_Print" | "Create_Frame_Set_$$5BDVB$$5D" | "Create_Grid_Image" | "Create_Grid_Image_from_Batch" | "create_image_$_O" | "Create_Morph_Image" | "Create_Morph_Image_from_Path" | "Create_Project_Root" | "Create_QR_Code" | "Create_Rect_Mask" | "Create_Solid_Color" | "Create_Video_from_Path" | "create$_image_$_O" | "CreateAudioMask" | "CreateFadeMask" | "CreateFadeMaskAdvanced" | "CreateFluidMask" | "CreateGradientMask" | "CreateIntListNode" | "CreateMagicMask" | "CreateMaskWithCanvas" | "CreatePromptVariant" | "CreateQRCode" | "CreateRegionalPNGMask" | "CreateRequestMetadata" | "CreateShapeFlow" | "CreateShapeMask" | "CreateTextMask" | "CreateTrimap" | "CreateVoronoiMask" | "CreativeArtPromptGenerator" | "Critic" | "CRMModeler" | "CRMModelerCuda" | "CRMModelLoader" | "CRMPoserConfig" | "CRMPoseSampler" | "CRMPreprocessForPoser" | "CRMViewer" | "crop" | "Crop_$1mtb$2" | "Crop_Center_wigh_SEGS" | "Crop_Center_with_SEGS" | "Crop_Face" | "Crop_Image_Pipe_$1JPS$2" | "Crop_Image_Settings_$1JPS$2" | "Crop_Image_Square_$1JPS$2" | "Crop_Image_TargetSize_$1JPS$2" | "CropFace" | "CropFaces" | "CropImage$_AS" | "CropImageByMask$7badger" | "CropMask" | "Cross$7Hatch_Power_Fractal_$1PPF_Noise$2" | "Cross$7Hatch_Power_Fractal_Settings_$1PPF_Noise$2" | "CrossFadeImages" | "CSL" | "CSV_Curve_$$5BDream$$5D" | "CSV_Generator_$$5BDream$$5D" | "CSVPromptGenerator" | "CSVPromptProcessor" | "CSVPromptsLoader" | "CtrlNet_CannyEdge_Pipe_$1JPS$2" | "CtrlNet_CannyEdge_Settings_$1JPS$2" | "CtrlNet_MiDaS_Pipe_$1JPS$2" | "CtrlNet_MiDaS_Settings_$1JPS$2" | "CtrlNet_OpenPose_Pipe_$1JPS$2" | "CtrlNet_OpenPose_Settings_$1JPS$2" | "CtrlNet_ZoeDepth_Pipe_$1JPS$2" | "CtrlNet_ZoeDepth_Settings_$1JPS$2" | "Custom_Code_Mecha_Recipe" | "Custom_Date_Format_$8_sokes_$$D83E" | "CustomControlNetWeights" | "CustomT2IAdapterWeights" | "Cut_By_Mask" | "CutAudio" | "CutByMaskFixed" | "Cute$5Placeholder" | "cutoff$7region$7util" | "CXH$_JoyTag" | "CyclistCompare" | "CyclistMathFloat" | "CyclistMathInt" | "CyclistTimer" | "CyclistTimerStop" | "CyclistTypeCast" | "DallE3$_PoP" | "DalleImage" | "DallERender" | "Danbooru_$1ID$2" | "Danbooru_$1Random$2" | "DanbooruTagsTransformerBanTagsFromRegex" | "DanbooruTagsTransformerComposePrompt" | "DanbooruTagsTransformerDecode" | "DanbooruTagsTransformerDecodeBySplitedParts" | "DanbooruTagsTransformerGenerate" | "DanbooruTagsTransformerGenerateAdvanced" | "DanbooruTagsTransformerGenerationConfig" | "DanbooruTagsTransformerRearrangedByAnimagine" | "DanbooruTagsTransformerRemoveTagToken" | "DARE_Merge_LoRA_Stack" | "DarkCheckpointRandomizer" | "DarkCheckpointSwitcher" | "DarkCombine" | "DarkFaceIndexGenerator" | "DarkFaceIndexShuffle" | "DarkFolders" | "DarkLoRALoader" | "DarkPrompt" | "Date_Time_Format" | "DateIntegerNode" | "DDColor$_Colorize" | "DdimInversionSequence" | "Debug_$1mtb$2" | "debug_Completeion_$_O" | "Debug_Extra" | "debug_messages$_O" | "Debug_Number_to_Console" | "Debug_String_$_O" | "Debug_Text_$_O" | "Debug_Text_route_$_O" | "DebugInput" | "DebugPrint" | "DebugTensorShape$6" | "Deep_Bump_$1mtb$2" | "DeepCache" | "DeepDanbooruCaption" | "DeepfaceExtractFaces" | "DeepfaceVerify" | "DeforumAddNoiseNode" | "DeforumAnimParamsNode" | "DeforumAreaPromptNode" | "DeforumBaseParamsNode" | "DeforumCacheLatentNode" | "DeforumCadenceNode" | "DeforumCadenceParamsNode" | "DeforumColorMatchNode" | "DeforumColorParamsNode" | "DeforumConditioningBlendNode" | "DeforumDepthParamsNode" | "DeforumDiffusionParamsNode" | "DeforumFILMInterpolationNode" | "DeforumFrameWarpNode" | "DeforumGetCachedLatentNode" | "DeforumHybridMotionNode" | "DeforumHybridParamsNode" | "DeforumHybridScheduleNode" | "DeforumIteratorNode" | "DeforumKSampler" | "DeforumLoadVideo" | "DeforumNoiseParamsNode" | "DeforumPromptNode" | "DeforumSeedNode" | "DeforumSetVAEDownscaleRatioNode" | "DeforumSimpleInterpolationNode" | "DeforumSingleSampleNode" | "DeforumTranslationParamsNode" | "DeforumVideoSaveNode" | "DelayAudioFX" | "deleteDir$7badger" | "Demofusion" | "Demofusion_From_Single_File" | "DenoiseScheduleHookProvider" | "DenoiseSchedulerDetailerHookProvider" | "DensePosePreprocessor" | "DependenciesEdit" | "Depth$_fm" | "DepthAnythingPreprocessor" | "DepthAnythingTrtNode" | "DepthEstimationPipeline" | "DepthFM$_Literative$_Zho" | "DepthFM$_ModelLoader$_Zho" | "DepthFM$_Zho" | "DepthViewer" | "DetailerForEach" | "DetailerForEachDebug" | "DetailerForEachDebugPipe" | "DetailerForEachPipe" | "DetailerForEachPipeForAnimateDiff" | "DetailerHookCombine" | "DetailerPipeToBasicPipe" | "DetectByLabel" | "DetectFaces" | "Dict2Model" | "Dictionary_to_Console" | "DiffControlNetLoader" | "DiffControlNetLoaderAdvanced" | "DifferenceChecker" | "DifferentialDiffusion" | "Diffusers_Hub_Model_Down$7Loader" | "Diffusers_Model_Loader" | "DiffusersClipTextEncode" | "DiffusersCompelPromptEmbedding" | "DiffusersControlnetLoader" | "DiffusersControlnetUnit" | "DiffusersControlnetUnitStack" | "DiffusersDecoder" | "DiffusersGenerator" | "DiffusersLoader" | "DiffusersModelMakeup" | "DiffusersPipeline" | "DiffusersPipelineLoader" | "DiffusersPrepareLatents" | "DiffusersSampler" | "DiffusersSchedulerLoader" | "DiffusersTextureInversionLoader" | "DiffusersVaeLoader" | "DiffusionEdge$_Preprocessor" | "DifyTextGenerator_$3$3Browser" | "Dilate_Mask_for_Each_Face" | "DilateErodeMask" | "DimensionProviderFree_modusCell" | "DimensionProviderRatio_modusCell" | "Disable_Enable_Switch_$1JPS$2" | "DiscoDiffusion$_DiscoDiffusion" | "DiscoDiffusion$_DiscoDiffusionExtraSettings" | "DiscoDiffusion$_GuidedDiffusionLoader" | "DiscoDiffusion$_OpenAICLIPLoader" | "DiscordServing" | "Displace_Image_with_Depth" | "Displace_Images_with_Mask" | "DisplayMetaOptions" | "DisplayString" | "DisplayText$_Zho" | "DisplayTextAsImage" | "Dissolve" | "DistanceTransform" | "DistortionAudioFX" | "DiTCheckpointLoader" | "DitCheckpointLoader" | "DiTCheckpointLoaderSimple" | "DiTCondLabelEmpty" | "DiTCondLabelSelect" | "Dither" | "DiTLabelCombine" | "DiTLabelSelect" | "DiTSampler" | "Divide" | "Divide_$$5BDVB$$5D" | "DivideNode$_DF" | "DM$_AdvancedDareModelMerger" | "DM$_AdvancedModelMerger" | "DM$_AttentionGradient" | "DM$_BlockGradient" | "DM$_BlockModelMerger" | "DM$_DareClipMerger" | "DM$_DareModelMergerBlock" | "DM$_DareModelMergerElement" | "DM$_DareModelMergerMBW" | "DM$_GradientEdit" | "DM$_GradientOperations" | "DM$_GradientReporting" | "DM$_InjectNoise" | "DM$_LoRALoaderTags" | "DM$_LoRAReporting" | "DM$_MagnitudeMasker" | "DM$_MaskEdit" | "DM$_MaskOperations" | "DM$_MaskReporting" | "DM$_MBWGradient" | "DM$_ModelReporting" | "DM$_NormalizeModel" | "DM$_QuadMasker" | "DM$_ShellGradient" | "DM$_SimpleMasker" | "DocumentClassificationNode" | "DodgeAndBurn" | "DownloadFileS3" | "DownloadLinkChecker" | "DPCombinatorialGenerator" | "DPFeelingLucky" | "DPJinja" | "DPMagicPrompt" | "DPOutput" | "DPRandomGenerator" | "DragAnythingLoader" | "DragAnythingPipelineRun" | "DragAnythingPipelineRunRandom" | "DragAnythingRun" | "DragAnythingRunRandom" | "DragNUWA_Run" | "DragNUWA_Run_MotionBrush" | "DragNUWAImageCanvas" | "Draw_Contour$1s$2" | "DrawText$6" | "DreamViewer" | "DSINE$7NormalMapPreprocessor" | "dsp$7imagehelpers$7concat" | "DTAIImageToTextNode" | "DTAIImageUrlToTextNode" | "DTCheckpointLoader" | "DTCheckpointLoaderSimple" | "DTCLIPLoader" | "DTCLIPTextEncode" | "DTCLIPVisionLoader" | "DTControlNetLoader" | "DTDiffControlNetLoader" | "DTDiffusersLoader" | "DTGLIGENLoader" | "DTLoadImage" | "DTLoadImageMask" | "DTLoadLatent" | "DTLoraLoader" | "DTLorasLoader" | "DTPromptAgent" | "DTPromptAgentString" | "DTSimpleSubmitImage" | "DTSingleLineStringVariable" | "DTSingleLineStringVariableNoClip" | "DTStyleModelLoader" | "DTSubmitImage" | "DTunCLIPCheckpointLoader" | "DTUpscaleModelLoader" | "DTVAELoader" | "DualCLIPLoader" | "DummyLatentOut" | "DuplicateAudio" | "Dust3rLoader" | "Dust3rRun" | "DWPreprocessor" | "DWPreprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "DynamicDelayProcessor" | "DynamicPrompt_$$5Bn$7suite$$5D" | "DynamiCrafter_Simple" | "DynamiCrafterBatchInterpolation" | "DynamiCrafterI2V" | "DynamiCrafterInterp_Simple" | "DynamiCrafterInterpLoader" | "DynamiCrafterLoader" | "DynamiCrafterModelLoader" | "DynamiCrafterProcessor" | "DynamicThresholdingFull" | "dynamicThresholdingFull" | "DynamicThresholdingSimple" | "DynamicTileMerge" | "DynamicTileSplit" | "DZ$_Face$_Detailer" | "EagleImageNode" | "easy_a1111Loader" | "easy_boolean" | "easy_cascadeKSampler" | "easy_cascadeLoader" | "easy_cleanGpuUsed" | "easy_comfyLoader" | "easy_compare" | "easy_controlnetLoader" | "easy_controlnetLoaderADV" | "easy_convertAnything" | "easy_detailerFix" | "easy_float" | "easy_fooocusInpaintLoader" | "easy_fullCascadeKSampler" | "easy_fullkSampler" | "easy_fullLoader" | "easy_globalSeed" | "easy_hiresFix" | "easy_if" | "easy_imageInsetCrop" | "easy_imagePixelPerfect" | "easy_imageRemBg" | "easy_imageRemoveBG" | "easy_imageSave" | "easy_imageScaleDown" | "easy_imageScaleDownBy" | "easy_imageScaleDownToSize" | "easy_imageSize" | "easy_imageSizeByLongerSide" | "easy_imageSizeBySide" | "easy_imageSplitList" | "easy_imageSwitch" | "easy_imageToMask" | "easy_instantIDApply" | "easy_instantIDApplyADV" | "easy_int" | "easy_isSDXL" | "easy_joinImageBatch" | "easy_kSampler" | "easy_kSamplerDownscaleUnet" | "easy_kSamplerInpainting" | "easy_kSamplerLayerDiffusion" | "easy_kSamplerSDTurbo" | "easy_kSamplerTiled" | "easy_latentCompositeMaskedWithCond" | "easy_latentNoisy" | "easy_LLLiteLoader" | "easy_loraStack" | "easy_negative" | "easy_pipeBatchIndex" | "easy_pipeEdit" | "easy_pipeIn" | "easy_pipeOut" | "easy_pipeToBasicPipe" | "easy_portraitMaster" | "easy_poseEditor" | "easy_positive" | "easy_preDetailerFix" | "easy_preSampling" | "easy_preSamplingAdvanced" | "easy_preSamplingCascade" | "easy_preSamplingDynamicCFG" | "easy_preSamplingLayerDiffusion" | "easy_preSamplingLayerDiffusionADDTL" | "easy_preSamplingNoiseIn" | "easy_preSamplingSdTurbo" | "easy_promptList" | "easy_rangeFloat" | "easy_rangeInt" | "easy_samLoaderPipe" | "easy_seed" | "easy_showAnything" | "easy_showLoaderSettingsNames" | "easy_showSpentTime" | "easy_showTensorShape" | "easy_string" | "easy_stylesSelector" | "easy_svdLoader" | "easy_ultralyticsDetectorPipe" | "easy_unSampler" | "easy_wildcards" | "easy_xyAny" | "easy_XYInputs$4_CFG_Scale" | "easy_XYInputs$4_Checkpoint" | "easy_XYInputs$4_ControlNet" | "easy_XYInputs$4_Denoise" | "easy_XYInputs$4_Lora" | "easy_XYInputs$4_ModelMergeBlocks" | "easy_XYInputs$4_NegativeCond" | "easy_XYInputs$4_NegativeCondList" | "easy_XYInputs$4_PositiveCond" | "easy_XYInputs$4_PositiveCondList" | "easy_XYInputs$4_PromptSR" | "easy_XYInputs$4_Sampler$3Scheduler" | "easy_XYInputs$4_Seeds$6$6_Batch" | "easy_XYInputs$4_Steps" | "easy_XYPlot" | "easy_XYPlotAdvanced" | "easy_zero123Loader" | "Easy2DDeforum" | "EasyCaptureNode" | "EasyVideoOutputNode" | "Eden$_Bool" | "Eden$_Compare" | "Eden$_DebugPrint" | "Eden$_Float" | "Eden$_Int" | "Eden$_String" | "Edit$_image_$_O" | "EditableCLIPEncode" | "EditBasicPipe" | "EditDetailerPipe" | "EditDetailerPipeSDXL" | "Eff$5_Loader_SDXL" | "Efficient_Loader" | "EG$_CPSYTJ" | "EG$_FX$_BDAPI" | "EG$_HT$_YSTZ" | "EG$_JF$_ZZSC" | "EG$_JXFZ$_node" | "EG$_K$_LATENT" | "EG$_RY$_HT" | "EG$_SCQY$_BHDQY" | "EG$_SCQY$_QBQY" | "EG$_SCQY$_SXQY" | "EG$_SJ" | "EG$_SJPJ$_Node" | "EG$_SS$_RYZH" | "EG$_SZ$_JDYS" | "EG$_TC$_Node" | "EG$_TSCDS$_CJ" | "EG$_TSCDS$_DG" | "EG$_TSCDS$_FG" | "EG$_TSCDS$_JT" | "EG$_TSCDS$_QT" | "EG$_TSCDS$_RW" | "EG$_TSCDS$_WP" | "EG$_TSCDS$_ZL" | "EG$_TSCMB$_GL" | "EG$_TX$_CCHQ" | "EG$_TX$_CJPJ" | "EG$_TX$_JZRY" | "EG$_TX$_LJ" | "EG$_TX$_LJBC" | "EG$_TX$_SFBLS" | "EG$_TX$_WHLJ" | "EG$_TXZZ$_ZH" | "EG$_WB$_KSH" | "EG$_WXZ$_QH" | "EG$_XZ$_QH" | "EG$_YSQY$_BBLLD" | "EG$_YSQY$_BLLD" | "EG$_ZY$_WBK" | "EG$_ZZ$_BSYH" | "EG$_ZZ$_BYYH" | "EG$_ZZ$_HSYH" | "EG$_ZZ$_SSKZ" | "EG$_ZZHBCJ" | "EG$_ZZKZ$_HT$_node" | "EG$7YSZT$7ZT" | "EightFloats" | "EISAI_VFI" | "EmbeddingPicker" | "EmbeddingPrompt" | "Empty_Images" | "Empty_Latent_by_Pixels_$1WLSH$2" | "Empty_Latent_by_Ratio_$1WLSH$2" | "Empty_Latent_by_Size_$1WLSH$2" | "Empty_Latent_Image_from_Aspect$7Ratio" | "Empty_Latent_Ratio_Custom_SDXL" | "Empty_Latent_Ratio_Select_SDXL" | "EmptyImage" | "EmptyLatentImage" | "EmptyLatentImage$_DF" | "EmptyLatentImageAdvanced" | "EmptyLatentImageFromPresetsSD15" | "EmptyLatentImageFromPresetsSDXL" | "EmptyLatentImageLoop" | "EmptyLatentImagePresets" | "EmptyMotionData" | "EmptySegs" | "Enable_Disable_Switch_$1JPS$2" | "Engineer" | "EnhanceDetail" | "EnhancedSaveNode" | "EnhanceImage" | "Enhancer" | "EqualizeHistogram" | "Equation1param_$_O" | "Equation2params_$_O" | "ER$_JBCH" | "ER$_TX$_ZZCJ" | "ESAM$_ModelLoader$_Zho" | "ESS_Aesthetic_Scoring" | "ESS_Aesthetic_Scoring_Auto" | "ESS_Combo_Parameterizer" | "ESS_Combo_Parameterizer_$And_Prompts" | "ESS_Eight_Input_Random" | "ESS_Eight_Input_Text_Switch" | "ESS_Float_to_Integer" | "ESS_Float_to_Number" | "ESS_Float_to_String" | "ESS_Float_to_X" | "ESS_Global_Envoy" | "ESS_Image_Reward" | "ESS_Image_Reward_Auto" | "ESS_Image_Saver_with_JSON" | "ESS_Integer_to_Float" | "ESS_Integer_to_Number" | "ESS_Integer_to_String" | "ESS_Integer_to_X" | "ESS_Number_to_Float" | "ESS_Number_to_Integer" | "ESS_Number_to_String" | "ESS_Number_to_X" | "ESS_Parameterizer" | "ESS_Parameterizer_$And_Prompts" | "ESS_Six_Float_Output" | "ESS_Six_Input_Random" | "ESS_Six_Input_Text_Switch" | "ESS_Six_Integer_IO_Switch" | "ESS_Six_Integer_IO_Widget" | "ESS_String_to_Float" | "ESS_String_to_Integer" | "ESS_String_to_Num" | "ESS_String_to_X" | "ETN$_ApplyMaskToImage" | "ETN$_CropImage" | "ETN$_LoadImageBase64" | "ETN$_LoadMaskBase64" | "ETN$_SendImageWebSocket" | "EVAL" | "Eval$_AS" | "EvalFloats" | "Example" | "Exclude_Facial_Feature" | "Executor" | "ExpandImageWithColor$7badger" | "ExponentialScheduler" | "Export_API" | "Export_With_Ffmpeg_$1mtb$2" | "ExportBlendshapes" | "ExportGLTF" | "ExportSMPLTo3DSoftware" | "ExposureAdjust" | "ExtendColorList" | "ExtendCondList" | "ExtendFloatList" | "ExtendImageList" | "ExtendIntList" | "ExtendLatentList" | "ExtendMaskList" | "ExtendModelList" | "ExtendStringList" | "Extract_Boundary_Points" | "Extract_Watermark" | "ExtractDominantColor" | "ExtractKeyframes$6" | "ExtractOpticalFlow" | "ExtraVAELoader" | "EZAssocDictNode" | "EZAssocImgNode" | "EZAssocStrNode" | "EZEmptyDictNode" | "EZHttpPostNode" | "EZLoadImgBatchFromUrlsNode" | "EZLoadImgFromUrlNode" | "ezMath" | "EZRemoveImgBackground" | "EZS3Uploader" | "EZVideoCombiner" | "ezXY$_AssemblePlot" | "ezXY$_Driver" | "FABRICPatchModel" | "FABRICPatchModelAdv" | "Face_Similarity" | "Face_Swap_$1mtb$2" | "FaceAnalysisModels" | "FaceBBoxDetect$1FaceParsing$2" | "FaceBBoxDetectorLoader$1FaceParsing$2" | "FaceBoundingBox" | "FaceCompare" | "FaceDetailer" | "FaceDetailerPipe" | "FaceDetails" | "FaceEmbed" | "FaceEmbedDistance" | "FaceFixerOpenCV" | "FaceKeypointsPreprocessor" | "FaceParse$1FaceParsing$2" | "FaceParsingModelLoader$1FaceParsing$2" | "FaceParsingProcessorLoader$1FaceParsing$2" | "FaceParsingResultsParser$1FaceParsing$2" | "FaceRestoreCFWithModel" | "FaceRestoreModelLoader" | "FaceSwapGenerationInpaint" | "FaceSwapNode" | "FaceSwapSetupPipeline" | "FaceToMask" | "FacialPartColoringFromPoseKps" | "Fade_From_Black_$$5BDVB$$5D" | "Fade_To_Black_$$5BDVB$$5D" | "FadeMaskEdges" | "FakeScribblePreprocessor" | "FakeScribblePreprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "Fans_Prompt_Styler_Negative" | "Fans_Prompt_Styler_Positive" | "Fans_Styler" | "Fans_Text_Concatenate" | "FastLatentToImage" | "FastSAMGenerator" | "FatLabels" | "FC_CropAndPaste" | "FC_CropBottom" | "FC_CropToOrigin" | "FC_FaceDetectCrop" | "FC_FaceFusion" | "FC_FaceSegAndReplace" | "FC_FaceSegment" | "FC_MaskOP" | "FC_RemoveCannyFace" | "FC_ReplaceByMask" | "FC_StyleLoraLoad" | "fcFloat" | "fcFloatMatic" | "fcHex" | "fcInteger" | "FeatheredMask" | "FeatherMask" | "FEBatchGenStringBCDocker" | "FEBCPrompt" | "FEColor2Image" | "FEColorOut" | "FEDataInsertor" | "FEDataPacker" | "FEDataUnpacker" | "FEDeepClone" | "FEDictPacker" | "FEDictUnpacker" | "FEEncLoraLoader" | "FEExtraInfoAdd" | "FEGenStringBCDocker" | "FEGenStringGPT" | "FEImageNoiseGenerate" | "FEImagePadForOutpaint" | "FEImagePadForOutpaintByImage" | "FEOperatorIf" | "FEPythonStrOp" | "FERandomBool" | "FERandomizedColor2Image" | "FERandomizedColorOut" | "FERandomLoraSelect" | "FERandomPrompt" | "FERerouteWithName" | "FESaveEncryptImage" | "Fetch_widget_value" | "FetchRemote" | "FETextCombine" | "FETextCombine2Any" | "FETextInput" | "FFMPEG_Video_Encoder_$$5BDream$$5D" | "File_Count_$$5BDream$$5D" | "file$_padding" | "FileNamePrefix" | "FileNamePrefixDateDirFirst" | "FillDarkMask" | "Film_Interpolation_$1mtb$2" | "FILM_VFI" | "FilmGrain" | "FilmsImage$_Zho" | "Filter" | "Filter_Contour" | "FilterSchedule" | "FilterZeroMasksAndCorrespondingImages" | "Finalize_Prompt_$$5BDream$$5D" | "findCenterOfMask$7badger" | "FindComplementaryColor" | "FindThickLinesFromCanny$7badger" | "FindThreshold" | "Fit_Number_$1mtb$2" | "Fix_Checkpoint_Name" | "FizzFrame" | "FizzFrameConcatenate" | "FL$_ImageCaptionSaver" | "FL$_ImageDimensionDisplay" | "FL$_ImageRandomizer" | "FlatLatentsIntoSingleGrid" | "Flatten_Colors" | "FlattenAndCombineMaskImages" | "FLAVR_VFI" | "FlipSigmas" | "FlipSigmasAdjusted" | "Float" | "float" | "float_$_O" | "Float_debug_print" | "Float_Input_$$5BDream$$5D" | "Float_Input_$$5BDVB$$5D" | "Float_Literal_$1Image_Saver$2" | "Float_to_Log_Entry_$$5BDream$$5D" | "Float_To_Number_$1mtb$2" | "Float_to_String" | "Float_Variable_$$5Bn$7suite$$5D" | "Float2Tuple$_DF" | "FloatConstant" | "FloatDebugPrint$_DF" | "FloatingVideo" | "FloatMultiplier" | "FloatNode$_DF" | "FloatNumber" | "FloatRange_$3$3Inspire" | "FloatSlider" | "FloatStaticPrimitive" | "floatToInt_$_O" | "FloatToInt$7badger" | "FloatToString$7badger" | "FloatToText" | "floatToText_$_O" | "FloatVariable" | "FloodGate" | "Floor" | "FloorNode$_DF" | "FlowBuilder" | "FlowBuilder_$1adv$2" | "FlowBuilder_$1advanced$2" | "FlowBuilder_$1advanced$2_Setter" | "FlowBuilderSetter" | "FlowBuilderSetter_$1adv$2" | "FolderToImageStorage" | "Font" | "font2img" | "FoodCategoryClassifierNode" | "Fooocus_ApplyImagePrompt" | "Fooocus_Controlnet" | "Fooocus_ImagePrompt" | "Fooocus_Inpaint" | "Fooocus_KSampler" | "Fooocus_Loader" | "Fooocus_LoraStack" | "Fooocus_negative" | "Fooocus_PipeOut" | "Fooocus_positive" | "Fooocus_PreKSampler" | "Fooocus_Styles" | "Fooocus_Upscale" | "Fooocus$_KSampler" | "Fooocus$_KSamplerAdvanced" | "For_Each_Done_$$5BDVB$$5D" | "For_Each_Filename_$$5BDVB$$5D" | "FourBooleanTrigger" | "FourFloats" | "Frame_Count_Calculator_$$5BDream$$5D" | "Frame_Counter_$1Directory$2_$$5BDream$$5D" | "Frame_Counter_$1Simple$2_$$5BDream$$5D" | "Frame_Counter_Info_$$5BDream$$5D" | "Frame_Counter_Offset_$$5BDream$$5D" | "Frame_Counter_Time_Offset_$$5BDream$$5D" | "Frame_Set_Append_$$5BDVB$$5D" | "Frame_Set_Frame_Dimensions_Scaled_$$5BDVB$$5D" | "Frame_Set_Index_Offset_$$5BDVB$$5D" | "Frame_Set_Merger_$$5BDVB$$5D" | "Frame_Set_Reindex_$$5BDVB$$5D" | "Frame_Set_Repeat_$$5BDVB$$5D" | "Frame_Set_Reverse_$$5BDVB$$5D" | "Frame_Set_Split_Beginning_$$5BDVB$$5D" | "Frame_Set_Split_End_$$5BDVB$$5D" | "Frame_Set_Splitter_$$5BDVB$$5D" | "Framed_Mask_Grab_Cut" | "Framed_Mask_Grab_Cut_2" | "FrameInterpolator_$$5Bn$7suite$$5D" | "FrameMaker" | "FrameMakerBatch" | "FrameToVideo$7badger" | "FreeU" | "FreeU_$1Advanced$2" | "FreeU$_LCM" | "FreeU$_V2" | "FreeU$_V2_$1Advanced$2" | "From_ZHG_pip" | "FromBasicPipe" | "FromBasicPipe$_v2" | "FromDetailerPipe" | "FromDetailerPipe$_v2" | "FromDetailerPipeSDXL" | "FromIPAdapterPipe_$3$3Inspire" | "FromListGet1Color" | "FromListGet1Cond" | "FromListGet1Float" | "FromListGet1Image" | "FromListGet1Int" | "FromListGet1Latent" | "FromListGet1Mask" | "FromListGet1Model" | "FromListGet1String" | "FromListGetColors" | "FromListGetConds" | "FromListGetFloats" | "FromListGetImages" | "FromListGetInts" | "FromListGetLatents" | "FromListGetMasks" | "FromListGetModels" | "FromListGetStrings" | "FS$4_Crop_Image_Into_Even_Pieces" | "FS$4_Fit_Image_And_Resize" | "FS$4_Fit_Size_From_Image" | "FS$4_Fit_Size_From_Int" | "FS$4_Image_Region_To_Mask" | "FS$4_Load_Image_And_Resize_To_Fit" | "FS$4_Pick_Image_From_Batch" | "FS$4_Pick_Image_From_Batches" | "FS$4_Pick_Image_From_List" | "FusionText" | "GainAudioFX" | "GamePal" | "Gamma" | "GarbageCollect$7badger" | "GateNormalizedAmplitude" | "Gaussian_Blur$_Ally" | "GaussianLatentImage" | "gcLatentTunnel" | "Gemini$_API$_Chat$_Zho" | "Gemini$_API$_S$_Chat$_Zho" | "Gemini$_API$_S$_Vsion$_ImgURL$_Zho" | "Gemini$_API$_S$_Zho" | "Gemini$_API$_Vsion$_ImgURL$_Zho" | "Gemini$_API$_Zho" | "GemmaLoader" | "GemmaRun" | "GenderFaceFilter" | "Generate_Border_Mask_$1WLSH$2" | "Generate_Inbetween_Frames_$$5BDVB$$5D" | "Generate_Negative_Prompt$_mne" | "Generate_Noise_Image" | "Generate_Stable_Diffsution_Prompt_With_LLM" | "GenerateAudioSample" | "GenerateAudioWave" | "GenerateNAID" | "GenerateNoise" | "Generation_Parameter_Input" | "Generation_Parameter_Output" | "Generation_TXT_IMG_Settings_$1JPS$2" | "Get_Batch_From_History_$1mtb$2" | "Get_Chunk" | "Get_Contour_from_list" | "Get_Date_Time_String_$1JPS$2" | "Get_First_Image" | "Get_Image_Size" | "Get_image_size" | "Get_Image_Size_$1JPS$2" | "Get_Last_Image" | "Get_latent_size" | "Get_Models" | "Get_Prompt" | "Get_sigmas_as_float" | "get$_aspect$_from$_image" | "get$_aspect$_from$_ints" | "GetAudioFromFolderIndex" | "GetAverageColorFromImage" | "GetBoolFromJson" | "GetColorFromBorder$7badger" | "GetComplementaryColor" | "GetConfig" | "GetDanbooru" | "GetDirName$7badger" | "GetFilledColorImage" | "GetFloatFromJson" | "GetImage$_$1Width$AndHeight$2_$_O" | "GetImageBatchSize" | "GetImageRangeFromBatch" | "GetImagesFromBatchIndexed" | "getImageSide$7badger" | "GetImageSize" | "GetImageSize$_" | "GetImageSize$_DF" | "GetImageSize$6" | "GetIntFromJson" | "GetKeyFrames" | "GetLatent$_$1Width$AndHeight$2_$_O" | "GetLatentsFromBatchIndexed" | "GetLatentSize$_DF" | "GetObjectFromJson" | "getParentDir$7badger" | "GetSAMEmbedding" | "GetSingle" | "GetStringByIndex" | "Getter" | "GetTextFromJson" | "GetUUID$7badger" | "GlifConsistencyDecoder" | "GlifPatchConsistencyDecoderTiled" | "GligenClamp" | "GLIGENLoader" | "GLIGENTextBoxApply" | "GLIGENTextBoxApply$_Advanced" | "GLIGENTextBoxApplyBatch" | "GlitchThis_Effect" | "GLM3$_turbo$_CHAT" | "GLM4$_CHAT" | "GLM4$_Vsion$_IMGURL" | "GlobalSampler_$3$3Inspire" | "GlobalSeed_$3$3Inspire" | "Glow" | "GMFSS_Fortuna_VFI" | "GmicCliWrapper" | "GmicQtWrapper" | "GoogleTranslator" | "GPT" | "GPT_Loader_Simple_$$5Bn$7suite$$5D" | "GPT_Sampler_$$5Bn$7suite$$5D" | "GPT2Node" | "GPT2PNode" | "GPT4VCaptioner" | "GPUTemperatureProtection" | "GradientImage" | "GradientPatchModelAddDownscale" | "GradientPatchModelAddDownscaleAdvanced" | "Graph_sigmas" | "Grayscale_Image_$1WLSH$2" | "Grid_Image_from_batch_$1OFF$2" | "GridAnnotation" | "GridDisplayAndSave" | "GridFloatList" | "GridFloats" | "GridImage" | "GridInput" | "GridIntList" | "GridInts" | "GridLoras" | "GridOutput" | "GridStringList" | "GridStrings" | "GroundingDinoModelLoader_$1segment_anything$2" | "GroundingDinoModelLoader_$1zhihuige$2" | "GroundingDinoPIPESegment_$1zhihuige$2" | "GroundingDinoSAMSegment_$1segment_anything$2" | "GroundingDinoSAMSegment_$1zhihuige$2" | "GroupChat" | "GrowMask" | "GrowMaskWithBlur" | "GuidedFilter$1FaceParsing$2" | "GuidedFilterAlpha" | "GW_Number_Formatting" | "HaldCLUT" | "HaojihuiClipScoreFakeImageProcessor" | "HaojihuiClipScoreImageProcessor" | "HaojihuiClipScoreImageScore" | "HaojihuiClipScoreLoader" | "HaojihuiClipScoreRealImageProcessor" | "HaojihuiClipScoreTextProcessor" | "Harronode" | "HD_FaceIndex" | "HD_GetMaskArea" | "HD_Image_Levels" | "HD_SmoothEdge" | "HD_UltimateSDUpscale" | "HEDPreprocessor" | "HEDPreprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "HfBoolSwitchKSampleStatus" | "HfImageAutoExpansionSquare" | "HfImageToRGB" | "HfImageToRGBA" | "HfInitImageWithMaxSize" | "HfIterativeLatentUpscale" | "HfLoadImageWithCropper" | "HfLookbackSamplerLoader" | "HfLoopback" | "HfResizeImage" | "HfSampler" | "HfSamplerLoader" | "HfSamplerLoopback" | "HfSaveImage" | "HfSwitchKSampleStatus" | "HfTwoSamplersForMask" | "HfTwoStepSamplers" | "HighpassFilter" | "HighRes$7Fix_Script" | "HighShelfFilter" | "Hijack" | "Hina$5PoseEditor3D" | "HintImageEnchance" | "hks$7util$7cal$7denoise$7step" | "HSVThresholdMask" | "Hue" | "Hue_Rotation" | "HypernetworkLoader" | "HypernetworkLoader_$1dirty$2" | "HyperTile" | "HyperTile_$3$3Inspire" | "I2VGEN$7XL_Simple" | "ID$_Prompt$_Styler" | "IDBaseModelLoader$_fromhub" | "IDBaseModelLoader$_local" | "IDControlNetLoader" | "IdentifyBorderColorToMask$7badger" | "IdentifyColorToMask$7badger" | "IDGenerationNode" | "If_ANY_execute_A_else_B" | "IF$_DisplayText" | "IF$_ImagePrompt" | "IF$_PromptMkr" | "IF$_SaveText" | "IF$_saveText" | "IFRNet_VFI" | "IFUnet_VFI" | "IG_Analyze_SSIM" | "IG_Cross_Fade_Images" | "IG_Explorer" | "IG_Float" | "IG_Folder" | "IG_Int" | "IG_Load_Image" | "IG_Load_Images" | "IG_Multiply" | "IG_Path_Join" | "IG_String" | "IG_ZFill" | "IgnoreBraces" | "Image_Accumulator_End" | "Image_Accumulator_Start" | "Image_Adaptive_Crop_M$AndR" | "Image_Alpha_Mask_Merge" | "Image_Analyze" | "Image_Aspect_Ratio" | "Image_Batch" | "Image_Blank" | "Image_Blend" | "Image_Blend_by_Mask" | "Image_Blending_Mode" | "Image_Bloom_Filter" | "Image_Bounds" | "Image_Bounds_to_Console" | "Image_Brightness_Adjustment_$$5BDream$$5D" | "Image_Canny_Filter" | "Image_Caption" | "Image_Change_Device" | "Image_Chromatic_Aberration" | "Image_Color_Palette" | "Image_Color_Shift_$$5BDream$$5D" | "Image_Compare_$1mtb$2" | "Image_Contrast_Adjustment_$$5BDream$$5D" | "Image_Crop_Face" | "Image_Crop_Fit" | "Image_Crop_Location" | "Image_Crop_Square_Location" | "Image_Displacement_Warp" | "Image_Dragan_Photography_Filter" | "Image_Edge_Detection_Filter" | "Image_fDOF_Filter" | "Image_Film_Grain" | "Image_Filter_Adjustments" | "Image_Flip" | "Image_Flip$_ally" | "Image_From_S3" | "Image_From_URL" | "Image_Full_BBox" | "Image_Generate_Gradient" | "Image_Gradient_Map" | "Image_High_Pass_Filter" | "Image_History_Loader" | "Image_Input_Switch" | "Image_Levels_Adjustment" | "Image_Load" | "Image_Load_with_Metadata" | "Image_Load_with_Metadata_$1WLSH$2" | "Image_Lucy_Sharpen" | "Image_Make_Square" | "Image_Match_Normalize" | "Image_Median_Filter" | "Image_Mix_RGB_Channels" | "Image_Monitor_Effects_Filter" | "Image_Motion_$$5BDream$$5D" | "Image_Nova_Filter" | "Image_Overlay" | "Image_Padding" | "Image_Paste_Crop" | "Image_Paste_Crop_by_Location" | "Image_Paste_Face" | "Image_Perlin_Noise" | "Image_Perlin_Power_Fractal" | "Image_Pixelate" | "Image_Power_Noise" | "Image_Premultiply_$1mtb$2" | "Image_Rembg_$1Remove_Background$2" | "Image_Remove_Background_$1Alpha$2" | "Image_Remove_Background_$1rembg$2" | "Image_Remove_Background_Rembg_$1mtb$2" | "Image_Remove_Color" | "Image_Resize" | "Image_Resize_Factor_$1mtb$2" | "Image_Resize_Fit" | "Image_Resize_To_Height" | "Image_Resize_To_Width" | "Image_Resolution_Adaptive_With_X" | "Image_Resolution_Limit_With_8K" | "Image_Rotate" | "Image_Rotate_Hue" | "Image_Save" | "Image_Save_with_Prompt_$1WLSH$2" | "Image_Save_with_Prompt_File_$1WLSH$2" | "Image_Save_with_Prompt$3Info_$1WLSH$2" | "Image_Save_with_Prompt$3Info_File_$1WLSH$2" | "Image_Saver" | "Image_Scale_Bounding_Box" | "Image_Scale_By_Factor_$1WLSH$2" | "Image_scale_by_ratio" | "Image_Scale_by_Shortside_$1WLSH$2" | "Image_scale_to_side" | "Image_Seamless_Texture" | "Image_Select_Channel" | "Image_Select_Color" | "Image_Sequence_Blend_$$5BDream$$5D" | "Image_Sequence_Loader_$$5BDream$$5D" | "Image_Sequence_Saver_$$5BDream$$5D" | "Image_Sequence_Tweening_$$5BDream$$5D" | "Image_Shadows_and_Highlights" | "Image_Size_to_Number" | "Image_size_to_string" | "Image_SSAO_$1Ambient_Occlusion$2" | "Image_SSDO_$1Direct_Occlusion$2" | "Image_Stitch" | "Image_Style_Filter" | "Image_Switch_$1JPS$2" | "Image_Text_Overlay" | "Image_Threshold" | "Image_Tile_Offset_$1mtb$2" | "Image_Tiled" | "Image_to_Latent_Mask" | "Image_To_Mask" | "Image_to_Noise" | "Image_To_S3" | "Image_to_Seed" | "Image_Transpose" | "Image_Voronoi_Noise_Filter" | "Image$_generation$_Conditioning" | "image$_info" | "Image$1s$2_To_Websocket_$1Base64$2" | "Image2Text" | "Image2TextWithTags" | "ImageAddText" | "ImageAlphaComposite" | "ImageApplyChannel" | "ImageApplyLUT$6" | "ImageAspectPadNode" | "ImageBatch" | "ImageBatchCopy" | "ImageBatchFork" | "ImageBatchGet" | "ImageBatchJoin" | "ImageBatchOneOrMore" | "ImageBatchPermute" | "ImageBatchRemove" | "ImageBatchRepeatInterleaving" | "ImageBatchSplitter_$3$3Inspire" | "ImageBatchTestPattern" | "ImageBatchToList" | "ImageBatchToList$_" | "ImageBatchToList$8fofo" | "ImageBgRemoveProcessor" | "ImageBlend" | "ImageBlend2" | "ImageBlur" | "ImageBorder" | "ImageBridge" | "ImageCaptioning" | "ImageCASharpening$6" | "ImageCheveretoUploader" | "ImageClamp" | "ImageClassificationPipeline" | "ImageColorToMask" | "ImageColorTransfer" | "ImageCombine" | "ImageComposite" | "ImageComposite$_BG$_Zho" | "ImageComposite$_Zho" | "ImageCompositeAbsolute" | "ImageCompositeAbsoluteByContainer" | "ImageCompositeBy$_BG$_Zho" | "ImageCompositeBy$_Zho" | "ImageCompositeFromMaskBatch$6" | "ImageCompositeMasked" | "ImageCompositeRelative" | "ImageCompositeRelativeByContainer" | "ImageConcanate" | "ImageConstant" | "ImageConstantHSV" | "ImageContainer" | "ImageContainerInheritanceAdd" | "ImageContainerInheritanceMax" | "ImageContainerInheritanceScale" | "ImageContainerInheritanceSum" | "ImageCrop" | "ImageCrop$6" | "ImageCropByAlpha" | "ImageCropByRatio" | "ImageCropByRatioAndResize" | "ImageCropWithBBox$1FaceParsing$2" | "ImageDesaturate$6" | "ImageDirIterator" | "ImageDrawArc" | "ImageDrawArcByContainer" | "ImageDrawChord" | "ImageDrawChordByContainer" | "ImageDrawEllipse" | "ImageDrawEllipseByContainer" | "ImageDrawLine" | "ImageDrawLineByContainer" | "ImageDrawPieslice" | "ImageDrawPiesliceByContainer" | "ImageDrawPolygon" | "ImageDrawRectangle" | "ImageDrawRectangleByContainer" | "ImageDrawRectangleRounded" | "ImageDrawRectangleRoundedByContainer" | "ImageDuplicator" | "ImageEffectsAdjustment" | "ImageEffectsGrayscale" | "ImageEffectsLensBokeh" | "ImageEffectsLensChromaticAberration" | "ImageEffectsLensOpticAxis" | "ImageEffectsLensVignette" | "ImageEffectsLensZoomBurst" | "ImageEffectsNegative" | "ImageEffectsSepia" | "ImageEnhanceDifference$6" | "ImageExpandBatch$6" | "ImageExtractChannel" | "ImageFilterBilateralBlur" | "ImageFilterBlur" | "ImageFilterBoxBlur" | "ImageFilterByFloatScoreNode" | "ImageFilterByIntScoreNode" | "ImageFilterContour" | "ImageFilterDetail" | "ImageFilterEdgeEnhance" | "ImageFilterEdgeEnhanceMore" | "ImageFilterEmboss" | "ImageFilterFindEdges" | "ImageFilterGaussianBlur" | "ImageFilterGaussianBlurAdvanced" | "ImageFilterMax" | "ImageFilterMedianBlur" | "ImageFilterMin" | "ImageFilterMode" | "ImageFilterRank" | "ImageFilterSharpen" | "ImageFilterSmooth" | "ImageFilterSmoothMore" | "ImageFilterStackBlur" | "ImageFlip$6" | "ImageFromBatch" | "ImageFromBatch$6" | "ImageFromURL" | "ImageGaussianBlur" | "ImageGenResolutionFromImage" | "ImageGenResolutionFromLatent" | "ImageGetter" | "ImageGrabPIL" | "ImageGridCommander" | "ImageGridCompose" | "ImageGridComposite2x2" | "ImageGridComposite3x3" | "ImageGridDecompose" | "ImageInsertWithBBox$1FaceParsing$2" | "ImageIntensityDetector" | "ImageInvert" | "ImageLinearGammaCompositeMasked" | "ImageListLoader" | "ImageListReplace$_" | "ImageListSelect$1FaceParsing$2" | "ImageListToBatch$6" | "ImageListToImageBatch" | "ImageLoadAsMaskByPath$1IOHelpers$2" | "ImageLoadByPath$1IOHelpers$2" | "ImageLoadFromBase64$1IOHelpers$2" | "ImageLuminanceDetector" | "ImageMaskSwitch" | "ImageMerger" | "ImageMixMasked$_As" | "ImageMuxer" | "ImageNoiseBeta" | "ImageNoiseBinomial" | "ImageNoiseBytes" | "ImageNoiseGaussian" | "ImageNormalization$7badger" | "ImageNormalize$_Neg1$_To$_1" | "ImageOnlyCheckpointLoader" | "ImageOnlyCheckpointSave" | "ImageOutput" | "ImageOutputToComfyNodes" | "ImageOverlap$7badger" | "ImageOverlay" | "ImagePadding" | "ImagePadForBetterOutpaint" | "ImagePadForOutpaint" | "ImagePadForOutpaintAdvanced_$$5Bn$7suite$$5D" | "ImagePadWithBBox$1FaceParsing$2" | "ImagePaste" | "ImagePosterize$6" | "ImageQualityScoreNode" | "ImageQuantize" | "ImageQuilting$_Bmad" | "ImageRankingNode" | "ImageReceiver" | "ImageRemoveBackground$6" | "ImageRepeat" | "ImageResize" | "ImageResize$6" | "ImageResizeAndCropNode" | "ImageResizeCalculator$1FaceParsing$2" | "ImageResizeWithBBox$1FaceParsing$2" | "ImageRewardLoader" | "ImageRewardScore" | "ImageRewardScore$_" | "ImageRewardScore$8fofo" | "Images_as_Latents_$1PPF_Noise$2" | "Images_Masks_MultiPipe_$1JPS$2" | "Images_to_Linear" | "Images_to_RGB" | "ImageSaveAsBase64$1IOHelpers$2" | "ImageSaveToPath$1IOHelpers$2" | "ImageScale" | "ImageScale$_Ratio$_DF" | "ImageScale$_Side$_DF" | "ImageScaleBy" | "ImageScaleDown" | "ImageScaleDownBy" | "ImageScaleDownToSize" | "ImageScaleFactor_$_O" | "ImageScaleFactorSimple_$_O" | "ImageScaleToMegapixels" | "ImageScaleToMin" | "ImageScaleToSide$7badger" | "ImageScaleToTotalPixels" | "ImagesCropByRatioAndResizeBatch" | "ImageSeamCarving$6" | "ImageSegmentation" | "ImageSegmentationCustom" | "ImageSegmentationCustomAdvanced" | "ImageSegmentationPipeline" | "ImageSelector" | "ImageSender" | "ImagesFromBatchSchedule" | "ImagesGridByColumns" | "ImagesGridByRows" | "ImageSharpen" | "ImageShuffle" | "ImageSimpleResize" | "ImageSize$1FaceParsing$2" | "ImageSizeAndBatchSize" | "ImageSizeInfo" | "ImageSizer" | "ImagesPrompt$_" | "ImageSquareAdapterNode" | "ImageStandardResizeProcessor" | "ImageStorageExportLoop" | "ImageStorageImport" | "ImageStorageReset" | "ImageSwitch" | "ImageText" | "ImageTextMultiline" | "ImageTextMultilineOutlined" | "ImageTextOutlined" | "ImageToBase64" | "ImageToBase64Advanced" | "ImageToImage_Pipe_$1JPS$2" | "ImageToImage_Settings_$1JPS$2" | "ImageToMask" | "ImageToMask$_AS" | "ImageToMultipleOf" | "ImageTool" | "ImageToPIL" | "ImageToSpectral" | "ImageTransformByNormalizedAmplitude" | "ImageTransformCropAbsolute" | "ImageTransformCropCorners" | "ImageTransformCropRelative" | "ImageTransformPaddingAbsolute" | "ImageTransformPaddingRelative" | "ImageTransformResizeAbsolute" | "ImageTransformResizeClip" | "ImageTransformResizeRelative" | "ImageTransformRotate" | "ImageTransformTranspose" | "ImageUpscaleWithModel" | "ImageUpscaleWithModelBatched" | "IMG$_blender" | "IMG$_padder" | "IMG$_scaler" | "IMG$_unpadder" | "img$7util$7get$7image$7size" | "img$7util$7switch$7input$7image" | "Img2ImgOptionNAID" | "ImgTextSwitch" | "ImpactAssembleSEGS" | "ImpactCombineConditionings" | "ImpactCompare" | "ImpactConcatConditionings" | "ImpactConditionalBranch" | "ImpactConditionalBranchSelMode" | "ImpactConditionalStopIteration" | "ImpactControlBridge" | "ImpactControlNetApplyAdvancedSEGS" | "ImpactControlNetApplySEGS" | "ImpactControlNetClearSEGS" | "ImpactConvertDataType" | "ImpactDecomposeSEGS" | "ImpactDilate$_Mask$_SEG$_ELT" | "ImpactDilateMask" | "ImpactDilateMaskInSEGS" | "ImpactDummyInput" | "ImpactEdit$_SEG$_ELT" | "ImpactFloat" | "ImpactFrom$_SEG$_ELT" | "ImpactFrom$_SEG$_ELT$_bbox" | "ImpactFrom$_SEG$_ELT$_crop$_region" | "ImpactGaussianBlurMask" | "ImpactGaussianBlurMaskInSEGS" | "ImpactHFTransformersClassifierProvider" | "ImpactIfNone" | "ImpactImageBatchToImageList" | "ImpactImageInfo" | "ImpactInt" | "ImpactInversedSwitch" | "ImpactIPAdapterApplySEGS" | "ImpactIsNotEmptySEGS" | "ImpactKSamplerAdvancedBasicPipe" | "ImpactKSamplerBasicPipe" | "ImpactLatentInfo" | "ImpactLogger" | "ImpactLogicalOperators" | "ImpactMakeImageBatch" | "ImpactMakeImageList" | "ImpactMakeTileSEGS" | "ImpactMinMax" | "ImpactNeg" | "ImpactNodeSetMuteState" | "ImpactQueueTrigger" | "ImpactQueueTriggerCountdown" | "ImpactRemoteBoolean" | "ImpactRemoteInt" | "ImpactScaleBy$_BBOX$_SEG$_ELT" | "ImpactSegsAndMask" | "ImpactSegsAndMaskForEach" | "ImpactSEGSClassify" | "ImpactSEGSConcat" | "ImpactSEGSLabelAssign" | "ImpactSEGSLabelFilter" | "ImpactSEGSOrderedFilter" | "ImpactSEGSPicker" | "ImpactSEGSRangeFilter" | "ImpactSEGSToMaskBatch" | "ImpactSEGSToMaskList" | "ImpactSetWidgetValue" | "ImpactSimpleDetectorSEGS" | "ImpactSimpleDetectorSEGS$_for$_AD" | "ImpactSimpleDetectorSEGSPipe" | "ImpactSleep" | "ImpactStringSelector" | "ImpactSwitch" | "ImpactValueReceiver" | "ImpactValueSender" | "ImpactWildcardEncode" | "ImpactWildcardProcessor" | "Increment$_AS" | "Init_FizzFrame" | "InjectNoiseToLatent" | "Inpaint" | "Inpaint_Segments" | "INPAINT$_ApplyFooocusInpaint" | "INPAINT$_DenoiseToCompositingMask" | "INPAINT$_InpaintWithModel" | "INPAINT$_LoadFooocusInpaint" | "INPAINT$_LoadInpaintModel" | "INPAINT$_MaskedBlur" | "INPAINT$_MaskedFill" | "INPAINT$_VAEEncodeInpaintConditioning" | "Inpainting" | "InpaintingOptionNAID" | "InpaintingPipelineLoader" | "InpaintMediapipe" | "InpaintModelConditioning" | "InpaintPreprocessor" | "InpaintPreprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "Input_Trigger" | "Input$3String_to_Int_Array" | "InRange_$1hsv$2" | "InsertImageBatchByIndexes" | "Inset_Image_Bounds" | "InsightFaceBBOXDetect" | "InsightFaceLoader$_Zho" | "Inspect" | "InstanceDiffusionTrackingPrompt" | "InstantCameraMotionBrush" | "InstantIDAttentionPatch" | "InstantIDFaceAnalysis" | "InstantIDModelLoader" | "InstantObjectMotionBrush" | "InstructIRProcess" | "Int" | "int" | "int_$_O" | "Int_$1RE$2" | "Int_debug_print" | "Int_Input_$$5BDream$$5D" | "Int_Input_$$5BDVB$$5D" | "Int_Literal" | "Int_Literal_$1Image_Saver$2" | "Int_To_Bool_$1mtb$2" | "Int_to_float" | "Int_to_Log_Entry_$$5BDream$$5D" | "Int_To_Number_$1mtb$2" | "Int_to_String" | "Int_to_Text" | "Int_to_tuple" | "Int2Any$_AS" | "Int2Float$_DF" | "Int2String" | "INTConstant" | "IntDebugPrint$_DF" | "Integer" | "Integer_place_counter" | "Integer_Switch_$1JPS$2" | "Integer_Variable_$$5Bn$7suite$$5D" | "IntegerNode$_DF" | "Internlm" | "Interpolate_Clip_Sequential_$1mtb$2" | "InterpolateKeyFrame" | "Interrupt" | "IntMultiplier" | "IntNumber" | "Intrinsic$_lora$_sampling" | "IntStaticPrimitive" | "intToFloat_$_O" | "IntToList" | "IntToNumber" | "IntToString$7badger" | "IntToText" | "IntVariable" | "InvCosWave" | "InvertAudioFX" | "InvertMask" | "InvertMask_$1segment_anything$2" | "InvertMask_$1zhihuige$2" | "InvSinWave" | "io$7image$7save" | "io$7text$7save" | "io$7util$7file$7list$7get" | "io$7util$7file$7list$7get$7text" | "IP_Adapter_Settings_$1JPS$2" | "IP_Adapter_Settings_Pipe_$1JPS$2" | "IP_Adapter_Single_Settings_$1JPS$2" | "IP_Adapter_Single_Settings_Pipe_$1JPS$2" | "IPA_Switch_$1JPS$2" | "IPAAdapterFaceIDBatch" | "IPAdapter" | "Ipadapter$_instantidLoader" | "IPAdapterAdvanced" | "IPAdapterAnimate" | "IPAdapterBatch" | "IPAdapterCombineEmbeds" | "IPAdapterEmbeds" | "IPAdapterEncoder" | "IPAdapterFaceID" | "IPAdapterInsightFaceLoader" | "IPAdapterLoadEmbeds" | "IPAdapterModelHelper_$3$3Inspire" | "IPAdapterModelLoader" | "IPAdapterNoise" | "IPAdapterSaveEmbeds" | "IPAdapterTiled" | "IPAdapterTiledBatch" | "IPAdapterUnifiedLoader" | "IPAdapterUnifiedLoaderFaceID" | "IsMaskEmpty" | "ISNetLoader" | "ISNetSegment" | "Item_Debugger" | "Item_Switch" | "ItemFromDropdown" | "IterationDriver" | "Iterative_Mixing_KSampler" | "Iterative_Mixing_KSampler_Advanced" | "IterativeImageUpscale" | "IterativeLatentUpscale" | "IterativeMixingSampler" | "IterativeMixingScheduler" | "IterativeMixingSchedulerAdvanced" | "JagsCLIPSeg" | "JagsClipseg" | "JagsCombineMasks" | "JDC$_AutoContrast" | "JDC$_BlendImages" | "JDC$_BrownNoise" | "JDC$_Contrast" | "JDC$_EqualizeGrey" | "JDC$_GaussianBlur" | "JDC$_GreyNoise" | "JDC$_Greyscale" | "JDC$_ImageLoader" | "JDC$_ImageLoaderMeta" | "JDC$_PinkNoise" | "JDC$_Plasma" | "JDC$_PlasmaSampler" | "JDC$_PowerImage" | "JDC$_RandNoise" | "JDC$_ResizeFactor" | "JDCN$_AnyFileList" | "JDCN$_AnyFileSelector" | "JDCN$_BatchImageLoadFromList" | "JDCN$_BatchLatentLoadFromDir" | "JDCN$_BatchSaveLatent" | "JDCN$_FileMover" | "JDCN$_ImageSaver" | "JDCN$_ListToString" | "JDCN$_ReBatch" | "JDCN$_SeamlessExperience" | "JDCN$_SplitString" | "JDCN$_StringToList" | "JDCN$_VHSFileMover" | "JitterImage" | "JjkConcat" | "JjkShowText" | "JjkText" | "JNodes$_AddOrSetMetaDataKey" | "JNodes$_AnyToString" | "JNodes$_AppendReversedFrames" | "JNodes$_BooleanSelectorWithString" | "JNodes$_CheckpointSelectorWithString" | "JNodes$_GetOutputDirectory" | "JNodes$_GetParameterFromList" | "JNodes$_GetParameterGlobal" | "JNodes$_GetTempDirectory" | "JNodes$_ImageFormatSelector" | "JNodes$_ImageSizeSelector" | "JNodes$_LoadVideo" | "JNodes$_LoraExtractor" | "JNodes$_OutVideoInfo" | "JNodes$_ParseDynamicPrompts" | "JNodes$_ParseParametersToGlobalList" | "JNodes$_ParseWildcards" | "JNodes$_PromptBuilderSingleSubject" | "JNodes$_RemoveCommentedText" | "JNodes$_RemoveMetaDataKey" | "JNodes$_RemoveParseableDataForInference" | "JNodes$_SamplerSelectorWithString" | "JNodes$_SaveImageWithOutput" | "JNodes$_SaveVideo" | "JNodes$_SchedulerSelectorWithString" | "JNodes$_SearchAndReplace" | "JNodes$_SearchAndReplaceFromFile" | "JNodes$_SearchAndReplaceFromList" | "JNodes$_SetNegativePromptInMetaData" | "JNodes$_SetPositivePromptInMetaData" | "JNodes$_SplitAndJoin" | "JNodes$_StringLiteral" | "JNodes$_SyncedStringLiteral" | "JNodes$_TokenCounter" | "JNodes$_TrimAndStrip" | "JNodes$_UploadVideo" | "JNodes$_VaeSelectorWithString" | "Join_Chunks" | "Join_Float_Lists" | "Join_Image_Lists" | "Join_Variables" | "Join_XY_Inputs_of_Same_Type" | "JoinAudio" | "JoinImages" | "JoinImageWithAlpha" | "JoinList" | "JoinWithDelimiter" | "JOJR$_RandomSize" | "Joytag" | "JPEG_artifacts_removal_FBCNN" | "JpgConvertNode" | "JSONMessageNotifyTool" | "JsonToText" | "KarrasScheduler" | "KenBurns$_Processor" | "KenBurnsConfigLoader" | "Kep$_JoinListAny" | "Kep$_RepeatList" | "Kep$_ReverseList" | "Kep$_VariableImageBuilder" | "KepOpenAI$_ImageWithPrompt" | "KepRotateImage" | "KepStringList" | "KepStringListFromNewline" | "KepStringLiteral" | "Keyer" | "KeyframeApply" | "KeyframeInterpolationPart" | "KeyframePart" | "KeywordExtraction" | "KfAddCurveToPGroup" | "KfAddCurveToPGroupx10" | "KfApplyCurveToCond" | "KfConditioningAdd" | "KfConditioningAddx10" | "KfCurveConstant" | "KfCurveDraw" | "KfCurveFromString" | "KfCurveFromYAML" | "KfCurveInverse" | "KfCurvesAdd" | "KfCurvesAddx10" | "KfCurvesDivide" | "KfCurvesMultiply" | "KfCurvesMultiplyx10" | "KfCurvesSubtract" | "KfCurveToAcnLatentKeyframe" | "KfDebug$_Clip" | "KfDebug$_Cond" | "KfDebug$_Curve" | "KfDebug$_Float" | "KfDebug$_Image" | "KfDebug$_Int" | "KfDebug$_Latent" | "KfDebug$_Model" | "KfDebug$_Passthrough" | "KfDebug$_Segs" | "KfDebug$_String" | "KfDebug$_Vae" | "KfDrawSchedule" | "KfEvaluateCurveAtT" | "KfGetCurveFromPGroup" | "KfGetScheduleConditionAtTime" | "KfGetScheduleConditionSlice" | "KfKeyframedCondition" | "KfKeyframedConditionWithText" | "KfPGroupCurveAdd" | "KfPGroupCurveMultiply" | "KfPGroupDraw" | "KfPGroupProd" | "KfPGroupSum" | "KfSetCurveLabel" | "KfSetKeyframe" | "KfSinusoidalAdjustAmplitude" | "KfSinusoidalAdjustFrequency" | "KfSinusoidalAdjustPhase" | "KfSinusoidalAdjustWavelength" | "KfSinusoidalEntangledZeroOneFromFrequencyx2" | "KfSinusoidalEntangledZeroOneFromFrequencyx3" | "KfSinusoidalEntangledZeroOneFromFrequencyx4" | "KfSinusoidalEntangledZeroOneFromFrequencyx5" | "KfSinusoidalEntangledZeroOneFromFrequencyx6" | "KfSinusoidalEntangledZeroOneFromFrequencyx7" | "KfSinusoidalEntangledZeroOneFromFrequencyx8" | "KfSinusoidalEntangledZeroOneFromFrequencyx9" | "KfSinusoidalEntangledZeroOneFromWavelengthx2" | "KfSinusoidalEntangledZeroOneFromWavelengthx3" | "KfSinusoidalEntangledZeroOneFromWavelengthx4" | "KfSinusoidalEntangledZeroOneFromWavelengthx5" | "KfSinusoidalEntangledZeroOneFromWavelengthx6" | "KfSinusoidalEntangledZeroOneFromWavelengthx7" | "KfSinusoidalEntangledZeroOneFromWavelengthx8" | "KfSinusoidalEntangledZeroOneFromWavelengthx9" | "KfSinusoidalGetAmplitude" | "KfSinusoidalGetFrequency" | "KfSinusoidalGetPhase" | "KfSinusoidalGetWavelength" | "KfSinusoidalWithFrequency" | "KfSinusoidalWithWavelength" | "KMeansColor" | "KMeansQuantize" | "Kosmos2model" | "KRestartSampler" | "KRestartSamplerAdv" | "KRestartSamplerCustom" | "KRestartSamplerSimple" | "KSampler" | "KSampler_$1Efficient$2" | "KSampler_$1WAS$2" | "KSampler_$3$3Inspire" | "KSampler_Adv$5_$1Efficient$2" | "KSampler_Advanced_with_Variations" | "KSampler_Cycle" | "KSampler_Gradually_Adding_More_Denoise_$1efficient$2" | "KSampler_Same_Noise" | "KSampler_SDXL_$1Eff$5$2" | "KSampler_With_Refiner_$1Fooocus$2" | "KSampler_with_Variations" | "KSamplerAdvanced" | "KSamplerAdvanced_$1WLSH$2" | "KSamplerAdvanced_$3$3Inspire" | "KSamplerAdvancedCacheable" | "KSamplerAdvancedGPU" | "KSamplerAdvancedPipe_$3$3Inspire" | "KSamplerAdvancedProgress_$3$3Inspire" | "KSamplerAdvancedProvider" | "KSamplerAdvFABRICAdv" | "KSamplerAlternate" | "KSamplerCacheable" | "KSamplerFABRIC" | "KSamplerFABRICAdv" | "KSamplerGPU" | "KSamplerOverrided" | "KSamplerPipe_$3$3Inspire" | "KSamplerProgress_$3$3Inspire" | "KSamplerPromptEdit" | "KSamplerPromptEditAndAlternate" | "KSamplerProvider" | "KSamplerRAVE" | "KSamplerSelect" | "KSamplerSeq" | "KSamplerSeq2" | "KSamplerSequence" | "KSamplerSetting" | "KSamplerVariationsStochastic$6" | "KSamplerVariationsWithNoise$6" | "KSamplerXYZ" | "KuwaharaBlur" | "Laboratory_$$5BDream$$5D" | "LadderFilter" | "LamaApply" | "LaMaInpaint" | "LaMaInpainting" | "LamaModelLoader" | "LaMaPreprocessor" | "lamaPreprocessor" | "LamaRemover" | "LamaRemoverIMG" | "LandscapeBackgrounds" | "Largest_Int_$1JPS$2" | "Latent_Adjustment_$1PPF_Noise$2" | "Latent_Batch" | "Latent_Batch_Comparison_Plot" | "Latent_Batch_Statistics_Plot" | "Latent_Diffusion_Mega_Modifier" | "Latent_Input_Switch" | "Latent_Lerp_$1mtb$2" | "Latent_Match_Normalize" | "Latent_Noise_Injection" | "Latent_Scale_by_ratio" | "Latent_Scale_to_side" | "Latent_Size_to_Number" | "Latent_Switch_$1JPS$2" | "Latent_Switch_x9_$8_sokes_$$D83E" | "Latent_Upscale_by_Factor_$1WAS$2" | "LatentAdd" | "LatentAdd$_AS" | "LatentAddTransform" | "LatentBatch" | "LatentBatchSeedBehavior" | "LatentBatchSplitter_$3$3Inspire" | "LatentBlend" | "LatentClamp" | "LatentCombine" | "LatentComposite" | "LatentComposite_with_tuples" | "LatentCompositeMasked" | "LatentCrop" | "LatentCropWithBBox$1FaceParsing$2" | "LatentDelay" | "LatentDuplicator" | "LatentFlip" | "LatentFromBatch" | "LatentGaussianNoise" | "LatentGridCompose" | "LatentGridDecompose" | "LatentInsertWithBBox$1FaceParsing$2" | "LatentInterpolate" | "LatentInterpolateTransform" | "LatentInterposer" | "LatentKeyframe" | "LatentKeyframeBatchedGroup" | "LatentKeyframeGroup" | "LatentKeyframeTiming" | "LatentMirror" | "LatentMix$_AS" | "LatentMixMasked$_As" | "LatentMultiply" | "LatentNormalize" | "LatentPixelScale" | "LatentQuilting$_Bmad" | "LatentReceiver" | "LatentRotate" | "Latents_to_CPU_$1PPF_Noise$2" | "LatentScale$_Ratio$_DF" | "LatentScale$_Side$_DF" | "LatentSelector" | "LatentSender" | "LatentShift" | "LatentSize$1FaceParsing$2" | "LatentStats" | "LatentStorageExportLoop" | "LatentStorageImport" | "LatentStorageReset" | "LatentSubtract" | "LatentSwitch" | "LatentToHist" | "LatentToImage" | "LatentToImages$_AS" | "LatentToRGB" | "LatentTravel" | "LatentTypeConversion" | "LatentUpscale" | "LatentUpscaleBy" | "LatentUpscaleFactor_$_O" | "LatentUpscaleFactorSimple_$_O" | "LatentUpscaleMultiply" | "LatentUpscaler" | "LayerColor$4_Brightness_$And_Contrast" | "LayerColor$4_Color_of_Shadow_$And_Highlight" | "LayerColor$4_ColorAdapter" | "LayerColor$4_Exposure" | "LayerColor$4_Gamma" | "LayerColor$4_HSV" | "LayerColor$4_LAB" | "LayerColor$4_LUT_Apply" | "LayerColor$4_RGB" | "LayerColor$4_YUV" | "LayeredDiffusionApply" | "LayeredDiffusionCondApply" | "LayeredDiffusionCondJointApply" | "LayeredDiffusionDecode" | "LayeredDiffusionDecodeRGBA" | "LayeredDiffusionDecodeSplit" | "LayeredDiffusionDiffApply" | "LayeredDiffusionJointApply" | "LayerFilter$4_ChannelShake" | "LayerFilter$4_ColorMap" | "LayerFilter$4_Film" | "LayerFilter$4_GaussianBlur" | "LayerFilter$4_LightLeak" | "LayerFilter$4_MotionBlur" | "LayerFilter$4_Sharp_$And_Soft" | "LayerFilter$4_SkinBeauty" | "LayerFilter$4_SoftLight" | "LayerFilter$4_WaterColor" | "LayerMask$4_BiRefNetUltra" | "LayerMask$4_CreateGradientMask" | "LayerMask$4_MaskBoxDetect" | "LayerMask$4_MaskByDifferent" | "LayerMask$4_MaskEdgeShrink" | "LayerMask$4_MaskEdgeUltraDetail" | "LayerMask$4_MaskEdgeUltraDetail_V2" | "LayerMask$4_MaskGradient" | "LayerMask$4_MaskGrow" | "LayerMask$4_MaskInvert" | "LayerMask$4_MaskMotionBlur" | "LayerMask$4_MaskPreview" | "LayerMask$4_MaskStroke" | "LayerMask$4_PersonMaskUltra" | "LayerMask$4_PersonMaskUltra_V2" | "LayerMask$4_PixelSpread" | "LayerMask$4_RemBgUltra" | "LayerMask$4_RmBgUltra_V2" | "LayerMask$4_SegmentAnythingUltra" | "LayerMask$4_SegmentAnythingUltra_V2" | "LayerMask$4_Shadow_$And_Highlight_Mask" | "LayerStyle$4_ColorOverlay" | "LayerStyle$4_DropShadow" | "LayerStyle$4_GradientOverlay" | "LayerStyle$4_InnerGlow" | "LayerStyle$4_InnerShadow" | "LayerStyle$4_OuterGlow" | "LayerStyle$4_Stroke" | "LayerUtility$4_ColorImage" | "LayerUtility$4_ColorImage_V2" | "LayerUtility$4_ColorPicker" | "LayerUtility$4_CropByMask" | "LayerUtility$4_CropByMask_V2" | "LayerUtility$4_ExtendCanvas" | "LayerUtility$4_GetColorTone" | "LayerUtility$4_GetImageSize" | "LayerUtility$4_GradientImage" | "LayerUtility$4_GradientImage_V2" | "LayerUtility$4_ImageAutoCrop" | "LayerUtility$4_ImageAutoCrop_V2" | "LayerUtility$4_ImageBlend" | "LayerUtility$4_ImageBlendAdvance" | "LayerUtility$4_ImageChannelMerge" | "LayerUtility$4_ImageChannelSplit" | "LayerUtility$4_ImageCombineAlpha" | "LayerUtility$4_ImageHub" | "LayerUtility$4_ImageMaskScaleAs" | "LayerUtility$4_ImageOpacity" | "LayerUtility$4_ImageRemoveAlpha" | "LayerUtility$4_ImageScaleByAspectRatio" | "LayerUtility$4_ImageScaleByAspectRatio_V2" | "LayerUtility$4_ImageScaleRestore" | "LayerUtility$4_ImageScaleRestore_V2" | "LayerUtility$4_ImageShift" | "LayerUtility$4_LaMa" | "LayerUtility$4_LayerImageTransform" | "LayerUtility$4_LayerMaskTransform" | "LayerUtility$4_PrintInfo" | "LayerUtility$4_PromptEmbellish" | "LayerUtility$4_PromptTagger" | "LayerUtility$4_RestoreCropBox" | "LayerUtility$4_SimpleTextImage" | "LayerUtility$4_TextImage" | "LayerUtility$4_TextJoin" | "LayerUtility$4_XY_to_Percent" | "LCM$_img2img$_Sampler" | "LCM$_img2img$_Sampler$_Advanced" | "LCM$_IPAdapter" | "LCM$_IPAdapter$_inpaint" | "LCM$_outpaint$_prep" | "LCM$_Sampler" | "LCM$_Sampler$_Advanced" | "LCMGenerate" | "LCMGenerate$_img2img" | "LCMGenerate$_img2img$_controlnet" | "LCMGenerate$_img2img$_IPAdapter" | "LCMGenerate$_inpaintv2" | "LCMGenerate$_inpaintv3" | "LCMGenerate$_ReferenceOnly" | "LCMGenerate$_SDTurbo" | "LCMLoader" | "LCMLoader$_controlnet" | "LCMLoader$_controlnet$_inpaint" | "LCMLoader$_img2img" | "LCMLoader$_ReferenceOnly" | "LCMLoader$_RefInpaint" | "LCMLoader$_SDTurbo" | "LCMLora" | "LCMLora$_inpaint" | "LCMLora$_ipadapter" | "LcmLoraLoader" | "LCMLoraLoader$_inpaint" | "LCMLoraLoader$_ipadapter" | "LCMScheduler" | "LCMT2IAdapter" | "LDSRModelLoader" | "LDSRUpscale" | "LDSRUpscaler" | "LeRes$_DepthMap$_Preprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "LeReS$7DepthMapPreprocessor" | "Lerp" | "LFO$_Pulse" | "LFO$_Sawtooth" | "LFO$_Sine" | "LFO$_Square" | "LFO$_Triangle" | "LiamLoadImage" | "LightGlue_Loader" | "LightGlue_Simple" | "LightGlue_Simple_Multi" | "LimiterAudioFX" | "LimitNumber" | "Linear_Camera_Pan_$$5BDVB$$5D" | "Linear_Camera_Roll_$$5BDVB$$5D" | "Linear_Camera_Zoom_$$5BDVB$$5D" | "Linear_Cross$7Hatch_Power_Fractal_$1PPF_Noise$2" | "Linear_Curve_$$5BDream$$5D" | "LineArt$_Preprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "LineArtPreprocessor" | "LineartStandardPreprocessor" | "LineToConsole" | "List_Length" | "ListCounter_$3$3Inspire" | "ListMerge" | "ListOfImages" | "ListSplit$_" | "ListToBatch" | "llama$7cpp" | "llava" | "Llava_Clip_Loader_$$5Bn$7suite$$5D" | "LLava_Loader_Simple" | "LlavaCaptioner" | "LlavaClipLoader" | "LLaVaDescriber" | "LLavaPromptGenerator" | "LLavaSamplerAdvanced" | "LLavaSamplerSimple" | "LLLiteLoader" | "LLM_Pipe_Loader_$7_Ostris" | "LLM_Prompt_Upsampling_$7_Ostris" | "LLM$_Create$_Completion_Advanced" | "LLM$_Detokenize" | "LLM$_Embed" | "LLM$_Eval" | "LLM$_Load$_State" | "LLM$_Node" | "LLM$_Reset" | "LLM$_Sample" | "LLM$_Save$_State" | "LLM$_Token$_BOS" | "LLM$_Token$_EOS" | "LLM$_Tokenize" | "LLMChat" | "LLMChatEngine" | "LLMChatMessageConcat" | "LLMChatMessages" | "LLMChatMessagesAdv" | "LLMComplete" | "LLMDirectoryReader" | "LLMHtmlComposer" | "LLMHtmlRepair" | "LLMJsonComposer" | "LLMJSONQueryEngine" | "LLMJsonRepair" | "LLMLoader" | "LLMMarkdownComposer" | "LLMMarkdownRepair" | "LLMNotionReader" | "LLMPostProcessDocuments" | "LLMPromptGenerator" | "LLMQueryEngine" | "LLMQueryEngineAdv" | "LLMRegexCreator" | "LLMRegexRepair" | "LLMRssReaderNode" | "LLMSampler" | "LLMSemanticSplitterNodeParser" | "LLMSentenceSplitterNodeCreator" | "LLMServiceContextAdv" | "LLMServiceContextDefault" | "LLMSimpleWebPageReader" | "LLMSummaryIndex" | "LLMTrafilaturaWebReader" | "LLMTreeIndex" | "LLMVectorStoreIndex" | "LLMYamlComposer" | "LLMYamlRepair" | "LM$_Studio" | "LMStudioPrompt" | "Load_64_Encoded_Image" | "Load_Artists_CSV" | "Load_Artmovements_CSV" | "Load_BiseNet" | "Load_Cache" | "Load_Characters_CSV" | "Load_CheckPoint_DragNUWA" | "Load_Colors_CSV" | "Load_Composition_CSV" | "Load_Face_Analysis_Model_$1mtb$2" | "Load_Face_Enhance_Model_$1mtb$2" | "Load_Face_Swap_Model_$1mtb$2" | "Load_Film_Model_$1mtb$2" | "Load_Image_$1Base64$2" | "Load_Image_Based_on_Number" | "Load_Image_Batch" | "Load_Image_From_Minio" | "Load_Image_From_Path_$$5BDVB$$5D" | "Load_Image_From_Url_$1mtb$2" | "Load_Image_Sequence_$1mtb$2" | "Load_Images_$1Base64$2" | "load_images_$1queue_tools$2" | "Load_Images_Pair_Batch" | "Load_Lighting_CSV" | "Load_Lines_From_Text_File" | "Load_LLM_Model_Advanced" | "Load_LLM_Model_Basic" | "Load_Lora" | "Load_Motion_Camera_Preset" | "Load_Motion_Traj_Preset" | "Load_MotionBrush" | "Load_MotionBrush_From_Optical_Flow" | "Load_MotionBrush_From_Optical_Flow_Directory" | "Load_MotionBrush_From_Optical_Flow_Without_Model" | "Load_MotionBrush_From_Tracking_Points" | "Load_MotionBrush_From_Tracking_Points_Without_Model" | "Load_Motionctrl_Checkpoint" | "Load_Motionctrl$7SVD_Camera_Preset" | "Load_Motionctrl$7SVD_Checkpoint" | "Load_Negative_CSV" | "Load_Picture_Index" | "Load_Pose_KeyPoints" | "Load_Positive_CSV" | "Load_Random_Image" | "Load_RetinaFace" | "Load_Settings_CSV" | "Load_Styles_CSV" | "Load_Text" | "Load_Text_File" | "Load_Yolov8_Model" | "Load_Yolov8_Model_From_Path" | "load$_openAI_$_O" | "Load$_Piper$_Model" | "LoadAesteticModel" | "LoadAPIconfig" | "LoadAudio" | "LoadAudioDir" | "LoadAudioFile" | "LoadAudioModel_$1DD$2" | "LoadCurrentWorkflowJSON" | "LoadDiskWorkflowJSON" | "LoadEmbedding" | "Loader" | "Loader$_SegmindVega" | "LoadEXR" | "LoadFrame" | "LoadFrameFromDataset" | "LoadFrameFromFolder" | "LoadFramePairFromDataset" | "LoadFrameSequence" | "LoadFramesFromFolder_$$5Bn$7suite$$5D" | "LoadImage" | "LoadImage_$3$3Inspire" | "LoadImage2TextModel" | "LoadImageAsMaskFromUrl" | "LoadImageBase64" | "LoadImageByUrl_$3$3Browser" | "LoadImageExtended" | "LoadImageFilename" | "LoadImageFromBase64" | "LoadImageFromFolder_$$5Bn$7suite$$5D" | "LoadImageFromOutputDirectoryNode" | "LoadImageFromPath" | "LoadImageFromRequest" | "LoadImageFromURL" | "LoadImageFromUrl" | "LoadImageHighPrec" | "LoadImageListFromDir_$3$3Inspire" | "LoadImageMask" | "LoadImageMaskSequence" | "LoadImageNode$_LCM" | "LoadImageResizer$_PoP" | "LoadImageRewardScoreModel$8fofo" | "LoadImageS3" | "LoadImageSequence" | "LoadImagesFromDir_$3$3Inspire" | "LoadImagesFromDirectory" | "LoadImagesFromPath" | "LoadImagesFromURL" | "LoadImageToBase64" | "LoadImageUrl" | "LoadImageWithAlpha" | "LoadImageWithMeta" | "LoadImageWithMetaData" | "LoadImagewithSubfolders" | "LoadImageWithSwitch" | "LoadInstanceFusersNode" | "LoadInstancePositionNetModel" | "LoadInstanceScaleUNode" | "LoadInstructIRModel" | "LoadJsonFromUrl" | "LoadLastImage" | "LoadLatent" | "LoadLatent$_AS" | "LoadLatentEXR" | "LoadLatentNumpy" | "LoadLatentUrl" | "LoadLorasFromPrompt" | "LoadMarianMTCheckPoint" | "LoadMaskFromURL" | "LoadPILImages" | "LoadPromptsFromDir_$3$3Inspire" | "LoadPromptsFromFile_$3$3Inspire" | "LoadRandomImage" | "LoadResAdapterNormalization" | "LoadSinglePromptFromFile_$3$3Inspire" | "LoadTempCheckpoint" | "LoadTempLoRA" | "LoadTempMultiLoRA" | "LoadText" | "LoadText$8pysssss" | "LoadText2PromptModel" | "LoadTextAsset" | "LoadTextFile" | "LoadTXT" | "LoadValueFromRequest" | "LoadVideo" | "LoadVideo_$$5Bn$7suite$$5D" | "LoadVideoAndSegment$_" | "LoadVST3" | "LoadWebcamImage" | "LoadYoutubeVideoNode" | "LockSeed" | "Log_Entry_Joiner_$$5BDream$$5D" | "Log_File_$$5BDream$$5D" | "LogBool" | "LogFloat" | "Logic_Boolean" | "Logic_Boolean_Primitive" | "Logic_Comparison_AND" | "Logic_Comparison_OR" | "Logic_Comparison_XOR" | "Logic_NOT" | "LogicNot" | "LogInt" | "LogNumber" | "LogSigmas" | "LogString" | "LogVec2" | "LogVec3" | "Loop" | "LoopBack" | "LoopEnd" | "LoopEnd$_IMAGE" | "LoopEnd$_SEGIMAGE" | "LoopStart" | "LoopStart$_IMAGE" | "LoopStart$_SEGIMAGE" | "Lora" | "LoRA_Caption_Load" | "LoRA_Caption_Save" | "Lora_Input_Switch" | "Lora_Loader" | "Lora_Loader_$1JPS$2" | "Lora_Loader_From_HF" | "LoRA_Stack_to_String_converter" | "LoRA_Stacker" | "Lora_Training_in_Comfy_$1Advanced$2" | "Lora_Training_in_ComfyUI" | "lora$_loader" | "LoraBlockInfo_$3$3Inspire" | "LoRADownloader" | "LoraInfo" | "LoraListNames" | "LoraLoader" | "LoRALoader" | "LoraLoader_$1dirty$2" | "LoraLoader$8pysssss" | "LoraLoaderAdvanced" | "LoraLoaderBlockWeight_$3$3Inspire" | "LoraLoaderFromWeight" | "LoraLoaderModelOnly" | "LoraLoaderSequence" | "LoraLoaderStackedAdvanced" | "LoraLoaderStackedVanilla" | "LoraLoaderTagsQuery" | "LoraLoaderText" | "LoraLoaderTextRandom" | "LoraLoaderVanilla" | "LoraLoaderWeightOnly" | "LoraMerge" | "LoraNames$_" | "LoraPrompt" | "LoraSave" | "LoRAScheduler" | "LoraStackLoader$_PoP" | "LoraStackLoader10$_PoP" | "LoraSyntaxProcessor" | "LoraTagLoader" | "LoraTagsOnly" | "LoraTextExtractor$7b1f83aa2" | "LortnocLoader" | "LowpassFilter" | "LowShelfFilter" | "LPP$_Deleter" | "LPP$_Derpibooru" | "LPP$_E621" | "LPP$_Loader$_Derpibooru" | "LPP$_Loader$_E621" | "LPP$_Saver" | "M$7LSDPreprocessor" | "M2M_VFI" | "MagicAnimate" | "MagicAnimateModelLoader" | "main$_scaled$_paste" | "Make_Image_Batch" | "Make_Inpaint_Model" | "Make_Interpolation_State_List" | "make$_transparentmask" | "MakeBasicPipe_$3$3Inspire" | "MakeCircularVAE" | "MakeFrameDataset" | "MakeGrid" | "Manga2Anime$_LineArt$_Preprocessor" | "Manga2Anime$_LineArt$_Preprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "Manual_scheduler" | "Manual_XY_Entry_Info" | "mape_Variable" | "MapRange$_AS" | "MarasitAnyBusNode" | "MarigoldDepthEstimation" | "MarigoldDepthEstimationVideo" | "Mask" | "Mask_Arbitrary_Region" | "Mask_Batch" | "Mask_Batch_to_Mask" | "Mask_Bounding_Box" | "Mask_By_Text" | "Mask_Ceiling_Region" | "Mask_Change_Device" | "Mask_Contour" | "Mask_Crop_Dominant_Region" | "Mask_Crop_Minority_Region" | "Mask_Crop_Region" | "Mask_Dilate_Region" | "Mask_Dominant_Region" | "Mask_Erode_Region" | "Mask_Fill_Holes" | "Mask_Floor_Region" | "Mask_Gaussian_Region" | "Mask_Invert" | "Mask_Minority_Region" | "Mask_Morphology" | "Mask_Ops" | "Mask_Paste_Region" | "Mask_Selection_Of_Masks" | "Mask_Smooth_Region" | "Mask_Switch_$1JPS$2" | "Mask_Threshold_Region" | "Mask_To_Image_$1mtb$2" | "Mask_To_Region" | "MaskBatch$6" | "MaskBlur$6" | "MaskClamp" | "MaskComposite" | "MaskComposite$1FaceParsing$2" | "MaskDetailerPipe" | "MaskExpandBatch$6" | "MaskExpansion" | "MaskFlip$6" | "MaskFromBatch$6" | "MaskFromColor$6" | "MaskGlow" | "MaskGrid_N_KSamplers_Advanced" | "MaskImageToBase64" | "MaskImageToNAID" | "MaskListcaptoBatch" | "MaskListComposite$1FaceParsing$2" | "MaskListMerge$_" | "MaskListReplace$_" | "MaskListSelect$1FaceParsing$2" | "MaskListToMaskBatch" | "MaskOptFlow" | "MaskOuterBlur" | "MaskPainter" | "MaskPreview$6" | "Masks_Add" | "Masks_Combine_Batch" | "Masks_Combine_Regions" | "Masks_Subtract" | "MasksToColoredMasks" | "MasksToMaskList" | "MaskToBase64" | "MaskToBase64Image" | "MaskToBBox$1FaceParsing$2" | "MaskToImage" | "MaskToImage$_AS" | "MaskToSEGS" | "MaskToSEGS$_for$_AnimateDiff" | "MasqueradeIncrementer" | "Math_Expression_$1mtb$2" | "Math$_AS" | "MathEncode" | "MathExpression$8pysssss" | "MatteAnything$_DinoBoxes" | "MatteAnything$_GenerateVITMatte" | "MatteAnything$_InitSamPredictor" | "MatteAnything$_LoadDINO" | "MatteAnything$_LoadVITMatteModel" | "MatteAnything$_SAMLoader" | "MatteAnything$_SAMMaskFromBoxes" | "MatteAnything$_ToTrimap" | "MattingModelLoader" | "MCLLaVAModel" | "MD5ImageHashNode" | "Mecha_Merger" | "MediaPipe$_FaceMesh$_Preprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "MediaPipe$7FaceMeshPreprocessor" | "MediaPipeFaceMeshDetectorProvider_$3$3Inspire" | "MediaPipeFaceMeshToSEGS" | "MemeplexCustomSDXLRender" | "MemeplexRender" | "MemGPT" | "MemorizeConditioning" | "MemorizeFloat" | "MemorizeInt" | "MemorizeString" | "Memory$_Excel" | "menus" | "Merge_Latent_Batch_Gridwise" | "Merge_sigmas_by_average" | "Merge_sigmas_gradually" | "Merge_Tag" | "MergeBlockWeighted" | "MergeImages" | "MergeLayers" | "MergeModels" | "MergeWarps" | "MergingExecutionHelper" | "MeshGraphormer$7DepthMapPreprocessor" | "MeshGraphormerDepthMapPreprocessorProvider$_for$_SEGS_$3$3Inspire" | "MetadataOverlayNode" | "MexxSDXLPromptStyler" | "MexxSDXLPromptStylerAdvanced" | "MicrosoftSpeech$_TTS" | "MiDaS_Depth_Approximation" | "MiDaS_Mask_Image" | "MiDaS_Model_Loader" | "MiDaS$_DepthMap$_Preprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "MiDaS$7DepthMapPreprocessor" | "MiDaS$7NormalMapPreprocessor" | "Mikey_Sampler" | "Mikey_Sampler_Base_Only" | "Mikey_Sampler_Base_Only_Advanced" | "Mikey_Sampler_Tiled" | "Mikey_Sampler_Tiled_Base_Only" | "MikeySamplerTiledAdvanced" | "MikeySamplerTiledAdvancedBaseOnly" | "MirroredImage" | "MirrorTransform" | "Mix_Color_By_Mask" | "Mix_Images_By_Mask" | "MixAudioTensors" | "MixConsistencyMaps" | "MixingMaskGenerator" | "MixNoiseNode" | "mkdir$7badger" | "MMakerColorBlend" | "MMakerColorEnhance" | "MMDetDetectorProvider" | "MMDetLoader" | "Model_From_URL" | "Model_Input_Switch" | "Model_Mecha_Recipe" | "Model_Patch_Seamless_$1mtb$2" | "Model_Switch_$1JPS$2" | "Model$_1" | "ModelClamp" | "ModelCompile$6" | "ModelDownloader" | "ModelGraphLoader" | "ModelGraphSaver" | "ModelIter" | "ModelMergeAdd" | "ModelMergeBlockNumber" | "ModelMergeBlocks" | "ModelMergeSDXL" | "ModelMergeSDXLDetailedTransformers" | "ModelMergeSDXLTransformers" | "ModelMergeSimple" | "ModelMergeSubtract" | "ModelOptionNAID" | "ModelSamplerTonemapNoiseTest" | "ModelSamplingContinuousEDM" | "ModelSamplingDiscrete" | "ModelSamplingStableCascade" | "Modelscope_Pipeline_Loader" | "Modelscopet2v" | "ModelScopeT2VLoader" | "Modelscopev2v" | "ModelSpeedup" | "ModuleDeepCacheSpeedup" | "MonoMerge" | "MoonDream" | "Moondream_Interrogator" | "Moondream2model" | "MoondreamQuery" | "MoondreamQueryCaptions" | "Moore$7AnimateAnyone_Denoising_Unet" | "Moore$7AnimateAnyone_Image_Encoder" | "Moore$7AnimateAnyone_Pipeline_Loader" | "Moore$7AnimateAnyone_Pose_Guider" | "Moore$7AnimateAnyone_Reference_Unet" | "Moore$7AnimateAnyone_Simple" | "Moore$7AnimateAnyone_VAE" | "MorphologicOperation" | "MorphologicSkeletoning" | "Morphology" | "MosaicExpandImage" | "Motion_Vector_Extractor" | "MotionCLIPTextEncode" | "Motionctrl_Cond" | "Motionctrl_Sample" | "Motionctrl_Sample_Simple" | "Motionctrl$7SVD_Sample_Simple" | "MotionDataVisualizer" | "MotionDiffLoader" | "MotionDiffSimpleSampler" | "MovementsImage$_Zho" | "MP3CompressorAudioFX" | "MPNReroute" | "MPNSwitch" | "MS_kosmos$72_Interrogator" | "MSSqlSelectNode" | "MSSqlTableNode" | "MUForceCacheClear" | "MUJinjaRender" | "mulTextSwitch" | "Multi_Text_Merge" | "MultiAreaConditioning" | "MultiControlNetConverter" | "MultiLatentComposite" | "MultilineStringNode$_DF" | "MultiLoraLoader" | "MultiLoraLoader$770bf3d77" | "MultiplicationNode" | "Multiply" | "Multiply_$$5BDVB$$5D" | "Multiply_Float_Float_$1JPS$2" | "Multiply_Int_Float_$1JPS$2" | "Multiply_Int_Int_$1JPS$2" | "Multiply_Integer_$1WLSH$2" | "Multiply_sigmas" | "MultiplyNode$_DF" | "MultiplyTransform" | "MultiPrimitive$8pysssss" | "MUReplaceModelWeights" | "MUSimpleWildcard" | "my_unique_name" | "MyOpenPoseNode" | "NaiveAutoKMeansColor" | "NDI$_LoadImage" | "NDI$_SendImage" | "Nearest_SDXL_Resolution" | "NearSightedAttention" | "NearSightedAttentionSimple" | "NearSightedTile" | "Negapip" | "NegiTools$_CompositeImages" | "NegiTools$_DepthEstimationByMarigold" | "NegiTools$_DetectFaceRotationForInpainting" | "NegiTools$_ImageProperties" | "NegiTools$_LatentProperties" | "NegiTools$_NoiseImageGenerator" | "NegiTools$_OpenAiDalle3" | "NegiTools$_OpenAiGpt" | "NegiTools$_OpenAiGpt4v" | "NegiTools$_OpenAiTranslate" | "NegiTools$_OpenPoseToPointList" | "NegiTools$_PointListToMask" | "NegiTools$_RandomImageLoader" | "NegiTools$_SaveImageToDirectory" | "NegiTools$_SeedGenerator" | "NegiTools$_StereoImageGenerator" | "NegiTools$_StringFunction" | "Negpip" | "NEW$_PhotoMaker$_Generation" | "NewLayer" | "NHWC2NCHWTensor" | "NHWCTensor2PIL" | "NNLatentUpscale" | "Noise_Control_Script" | "Noise_from_Area_Palettes_$$5BDream$$5D" | "Noise_from_Palette_$$5BDream$$5D" | "NoiseFromImage$$7E" | "NoiseGateAudioFX" | "NoiseImage" | "NoiseImage$_AS" | "NoiseInjectionDetailerHookProvider" | "NoiseInjectionHookProvider" | "NoiseInversion" | "NoisyLatentLike" | "NoisyLatentPerlin" | "Normalization" | "NormalizationXL" | "NormalizeAmplitude" | "NormalizedAmplitudeDrivenString" | "NormalizedAmplitudeToGraph" | "NormalizedAmplitudeToMask" | "NormalizedAmplitudeToNumber" | "NormalizeLatent" | "NormalMapSimple" | "Note_$_O" | "NoxinChime" | "NoxinPromptLoad" | "NoxinPromptSave" | "NoxinScaledResolution" | "NoxinSimpleMath" | "NoxinSplitPrompt" | "NSFWDetection" | "Nui$5DynamicPromptsTextGen" | "Nui$5FeelingLuckyTextGen" | "Nui$5OpenPoseEditor" | "Nui$5OutputString" | "Number_Counter" | "Number_Input_Condition" | "Number_Input_Switch" | "Number_Multiple_Of" | "Number_Operation" | "Number_PI" | "Number_to_Float" | "Number_to_Int" | "Number_to_Seed" | "Number_to_String" | "Number_to_Text" | "Number$_AS" | "number$7util$7random$7num" | "Number2Float$_AS" | "Number2Int$_AS" | "NumberFromList" | "NumberScaler" | "NumbersToList" | "NumeralToString" | "NX$_PromptStyler" | "ObjectDetectionPipeline" | "OFF_SEGS_to_Image" | "OffsetCombine" | "OffsetImage" | "OffsetLatentImage" | "OffsetMask" | "OffsetMaskByNormalizedAmplitude" | "OffsetNumber" | "Ollama" | "OllamaGenerate" | "OllamaVision" | "One_Seed_$7_Ostris" | "OneButtonArtify" | "OneButtonFlufferize" | "OneButtonPreset" | "OneButtonPrompt" | "OneDiffCheckpointLoaderSimple" | "OneFormer$7ADE20K$7SemSegPreprocessor" | "OneFormer$7COCO$7SemSegPreprocessor" | "OneTimeLatentAddTransform" | "OneTimeLatentInterpolateTransform" | "OneTimeMirrorTransform" | "OneTimeMultiplyTransform" | "OneTimeShiftTransform" | "ONNXDetectorProvider" | "ONNXDetectorSEGS" | "Oobabooga" | "oobaboogaOpenAI" | "OobaPrompt" | "Ood$_CXH" | "OpAbs" | "OPAC" | "OPAC2Floats" | "OPACList2ExecList" | "OPACListVariance" | "OPACPerlinSettings" | "OPACTransformImages" | "OpBandpass" | "OpClamp" | "OPCScheduler" | "OPCSLayerExtractor" | "OpenAIModel" | "OpenAINode" | "OpenPose" | "Openpose_Keypoint_Extractor" | "OpenPose$_Preprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "OpenPoseCanny" | "OpenPoseDepth" | "OpenPoseFace" | "OpenPoseFull" | "OpenPoseFullExtraLimb" | "OpenPoseHand" | "OpenPoseKeyPose" | "OpenPoseLineart" | "OpenPoseMediaPipeFace" | "OpenposePreprocessor" | "OpenposePreprocessorInterpolate" | "OpenPoseTrackerNode" | "OpenSoraLoader" | "OpenSoraRun" | "OpenSoraSampler" | "Operation" | "OpHarmonic" | "OpModulo" | "OpNormalize" | "OpNovelty" | "OpPercussive" | "OpPow" | "OpPow2" | "OpPredominant$_pulse" | "OpQuantize" | "OpRms" | "OpSmoosh" | "OpSmooth" | "OpSqrt" | "OpStretch" | "OpSustain" | "OpThreshold" | "OrderedFaceFilter" | "OtherVAE$_Taesd" | "OtsuThreshold" | "OTTAudioFX" | "OTX_Integer_Multiple_Inputs_4" | "OTX_Integer_Multiple_Inputs_5" | "OTX_Integer_Multiple_Inputs_6" | "OTX_KSampler_Feeder" | "OTX_Versatile_Multiple_Inputs_4" | "OTX_Versatile_Multiple_Inputs_5" | "OTX_Versatile_Multiple_Inputs_6" | "OutlineMask" | "Outpaint_to_Image_$1WLSH$2" | "OutpaintCanvasTool" | "Output2String" | "OverlayInpaintedImage" | "OverlayInpaintedLatent" | "OverrideImage" | "OverrideLatent" | "OverrideModel" | "PA$_BaseModelLoader$_fromhub$_Zho" | "PA$_Generation$_Zho" | "PA$_Styler$_Zho" | "Pack_SDXL_Tuple" | "PaintbyExamplePipeLoader" | "PaintbyExampleSampler" | "Palette_Color_Align_$$5BDream$$5D" | "Palette_Color_Shift_$$5BDream$$5D" | "Panda3dAmbientLight" | "Panda3dAttachNewNode" | "Panda3dBase" | "Panda3dDirectionalLight" | "Panda3dLoadDepthModel" | "Panda3dLoadModel" | "Panda3dLoadTexture" | "Panda3dModelMerge" | "Panda3dTest" | "Panda3dTextureMerge" | "Parabolize" | "ParallaxMotion" | "paste" | "Paste_By_Mask" | "Paste_Face_Segment_to_Image" | "PatchModelAddDownscale" | "PCApplySettings" | "PCPromptFromSchedule" | "PCScheduleSettings" | "PCSplitSampling" | "PeakFilter" | "PencilSketch" | "Perlin_Power_Fractal_Latent_$1PPF_Noise$2" | "Perlin_Power_Fractal_Settings_$1PPF_Noise$2" | "PerpNeg" | "PerpNegPrediction" | "PFG" | "PhaserEffectAudioFX" | "PhotoMaker$_Generation" | "PhotoMakerAdapter$_Loader$_fromhub" | "PhotoMakerAdapter$_Loader$_local" | "PhotoMakerEncode" | "PhotoMakerEncodePlus" | "PhotoMakerLoader" | "PhotoMakerStyles" | "PhotoshopToComfyUI" | "Pick_From_Batch_$1mtb$2" | "PiDiNetPreprocessor" | "PIL2NHWCTensor" | "Pilgram" | "PILToImage" | "PILToMask" | "pipe$7util$7to$7basic$7pipe" | "Piper$_Speak$_Text" | "PitchShiftAudioFX" | "PixArtCheckpointLoader" | "PixArtControlNetCond" | "PixArtDPMSampler" | "PixArtLoraLoader" | "PixArtResolutionCond" | "PixArtResolutionSelect" | "PixArtT5TextEncode" | "Pixel_Sort" | "PixelArtAddDitherPattern" | "PixelArtDetectorConverter" | "PixelArtDetectorSave" | "PixelArtDetectorToImage" | "PixelArtLoadPalettes" | "Pixelization" | "Pixelize" | "PixelKSampleHookCombine" | "PixelKSampleUpscalerProvider" | "PixelKSampleUpscalerProviderPipe" | "PixelPerfectResolution" | "PixelSort" | "PixelTiledKSampleUpscalerProvider" | "PixelTiledKSampleUpscalerProviderPipe" | "Placeholder_Tuple" | "PlaceholderText" | "Planner" | "Play_Sound" | "Play_Sound_$1loop$2" | "Play_Sound_At_Execution" | "PlayMusic" | "PlaySound$8pysssss" | "PlotImages" | "PlotSpectrogram" | "Plush$7Exif_Wrangler" | "PM$_BoxCropImage" | "PM$_ColorTransfer" | "PM$_ExpandMaskBox" | "PM$_FaceFusion" | "PM$_FaceShapMatch" | "PM$_FaceSkin" | "PM$_GetImageInfo" | "PM$_ImageResizeTarget" | "PM$_ImageScaleShort" | "PM$_MakeUpTransfer" | "PM$_MaskDilateErode" | "PM$_MaskMerge2Image" | "PM$_PortraitEnhancement" | "PM$_RatioMerge2Image" | "PM$_ReplaceBoxImg" | "PM$_RetinaFace" | "PM$_Similarity" | "PM$_SkinRetouching" | "PM$_SuperColorTransfer" | "PM$_SuperMakeUpTransfer" | "PngColorMasksToMaskList" | "PngColorMasksToRGB" | "PngColorMasksToString" | "PngColorMasksToStringList" | "PngRectanglesToMask" | "PngRectanglesToMaskList" | "PNSwitch" | "PolyexponentialScheduler" | "PorterDuffImageComposite" | "PortraitMaster" | "PortraitMaster$_$$4E2D$$6587$$7248" | "Post_to_Discord_w$3_Webhook" | "PostImageToAPI" | "Power" | "Power_KSampler_Advanced_$1PPF_Noise$2" | "Power$7Law_Noise_$1PPF_Noise$2" | "PowNode$_DF" | "PrepareImageAndMaskForInpaint" | "PrepImageForClipVision" | "PrepImagesForClipVisionFromPath" | "PresentString" | "Preset$_Model$_Merge" | "PresetRatioSelector" | "Prettify_Prompt_Using_distilgpt2" | "Preview_Chooser" | "Preview_Chooser_Fabric" | "preview$_mask" | "PreviewAudioFile" | "PreviewAudioTensor" | "PreviewBridge" | "PreviewBridgeLatent" | "PreviewDetailerHookProvider" | "PreviewImage" | "PreviewImageHighPrec" | "PreviewJson" | "PreviewJSONNode" | "PreviewLatent" | "PreviewLatentAdvanced" | "PreviewLatentXL" | "PreviewPopup" | "PreviewVHSAudioNode" | "PreviewVideo" | "PrimereAnyDetailer" | "PrimereAnyOutput" | "PrimereCKPT" | "PrimereCKPTLoader" | "PrimereClearPrompt" | "PrimereCLIPEncoder" | "PrimereConceptDataTuple" | "PrimereDynamicParser" | "PrimereEmbedding" | "PrimereEmbeddingHandler" | "PrimereEmbeddingKeywordMerger" | "PrimereEmotionsStyles" | "PrimereHypernetwork" | "PrimereImageSegments" | "PrimereKSampler" | "PrimereLatentNoise" | "PrimereLCMSelector" | "PrimereLORA" | "PrimereLoraKeywordMerger" | "PrimereLoraStackMerger" | "PrimereLYCORIS" | "PrimereLycorisKeywordMerger" | "PrimereLycorisStackMerger" | "PrimereMetaCollector" | "PrimereMetaDistributor" | "PrimereMetaDistributorStage2" | "PrimereMetaHandler" | "PrimereMetaRead" | "PrimereMetaSave" | "PrimereMidjourneyStyles" | "PrimereModelConceptSelector" | "PrimereModelKeyword" | "PrimereNetworkTagLoader" | "PrimerePreviewImage" | "PrimerePrompt" | "PrimerePromptOrganizer" | "PrimerePromptSwitch" | "PrimereRefinerPrompt" | "PrimereResolution" | "PrimereResolutionMultiplier" | "PrimereResolutionMultiplierMPX" | "PrimereSamplers" | "PrimereSamplersSteps" | "PrimereSeed" | "PrimereStepsCfg" | "PrimereStyleLoader" | "PrimereStylePile" | "PrimereTextOutput" | "PrimereVAE" | "PrimereVAELoader" | "PrimereVAESelector" | "PrimereVisualCKPT" | "PrimereVisualEmbedding" | "PrimereVisualHypernetwork" | "PrimereVisualLORA" | "PrimereVisualLYCORIS" | "PrimereVisualStyle" | "Prompt_Generator" | "Prompt_Multiple_Styles_Selector" | "Prompt_Parser" | "Prompt_Regex_Remove" | "Prompt_Styles_Selector" | "Prompt_Template" | "Prompt_Weight_$1WLSH$2" | "Prompt_With_SDXL" | "Prompt_With_Style" | "Prompt_With_Style_V2" | "Prompt_With_Style_V3" | "Prompt$_Styler" | "PromptBackground" | "PromptBaiduFanyiToText" | "PromptBuilder_$3$3Inspire" | "PromptComposerCustomLists" | "PromptComposerEffect" | "PromptComposerGrouping" | "PromptComposerMerge" | "PromptComposerStyler" | "promptComposerTextMultiple" | "PromptComposerTextSingle" | "PromptControlSimple" | "PromptDanTagGen" | "PromptExpansion" | "PromptExtractor_$3$3Inspire" | "PromptExtraNetworks" | "PromptGenerateAPI" | "PromptGenerator" | "PromptImage" | "PromptLimit" | "PromptMix" | "PromptRandomWeight" | "PromptRemove" | "Prompts" | "PromptSchedule" | "PromptScheduleEncodeSDXL" | "PromptScheduleNodeFlow" | "PromptScheduleNodeFlowEnd" | "PromptSimplification" | "PromptSlide" | "PromptTermList1" | "PromptTermList2" | "PromptTermList3" | "PromptTermList4" | "PromptTermList5" | "PromptTermList6" | "PromptToNAID" | "PromptToSchedule" | "PromptTranslateToText" | "PromptUtilitiesConstString" | "PromptUtilitiesConstStringMultiLine" | "PromptUtilitiesFormatString" | "PromptUtilitiesJoinStringList" | "PromptUtilitiesLoadPreset" | "PromptUtilitiesLoadPresetAdvanced" | "PromptUtilitiesRandomPreset" | "PromptUtilitiesRandomPresetAdvanced" | "ProPostApplyLUT" | "ProPostDepthMapBlur" | "ProPostFilmGrain" | "ProPostRadialBlur" | "ProPostVignette" | "Prune_By_Mask" | "Psd2Png" | "PygameRun" | "PygameSurface" | "PymunkDynamicBox" | "PymunkDynamicCircle" | "PymunkRun" | "PymunkShapeMerge" | "PymunkSpace" | "PymunkStaticLine" | "QAlign$_Zho" | "Qr_Code_$1mtb$2" | "QRCode" | "QRCodeGenerator" | "QRGenerate" | "QRNG$_Node$_CSV" | "Quantize" | "Query_Gender_and_Age" | "Quick_Resolution_Multiply_$1WLSH$2" | "QWenVL$_API$_S$_Multi$_Zho" | "QWenVL$_API$_S$_Zho" | "RAFT_Run" | "Ranbooru" | "RanbooruURL" | "Random" | "Random_File_From_Path" | "Random_Find_and_Replace" | "Random_Line" | "Random_Line_4" | "Random_Number" | "Random$_Sampler" | "RandomEmptyLatentImageFromPresetsSD15" | "RandomEmptyLatentImageFromPresetsSDXL" | "RandomFloat" | "RandomFloat$_DF" | "RandomGeneratorForList_$3$3Inspire" | "RandomImageFromDir" | "RandomInt" | "Randomizer" | "RandomLatentImage" | "RandomLayouts" | "RandomMask" | "RandomNSP_$_O" | "RandomPicturePath" | "RandomPrompt" | "RandomResolutionLatent" | "RandomSeedfromList" | "RandomSizeFromPresetsSD15" | "RandomSizeFromPresetsSDXL" | "Range_Float" | "Range_Integer" | "Range$1Num_Steps$2_$7_Float" | "Range$1Num_Steps$2_$7_Int" | "Range$1Step$2_$7_Float" | "Range$1Step$2_$7_Int" | "Ratio_Advanced" | "RawText" | "RawTextCombine" | "RawTextEncode" | "RawTextReplace" | "ReActorBuildFaceModel" | "ReActorFaceSwap" | "ReActorLoadFaceModel" | "ReActorRestoreFace" | "ReActorSaveFaceModel" | "reBatchImage" | "RebatchImages" | "RebatchLatents" | "RecallConditioning" | "RecallFloat" | "RecallInt" | "RecallString" | "Recenter" | "Recenter_XL" | "RecommendedResCalc" | "Rect_Grab_Cut" | "ReencodeLatent" | "ReencodeLatentPipe" | "Ref$_Image$_Preprocessing" | "ReferenceOnlySimple" | "region$7util$7get$7by$7center$7and$7size" | "region$7util$7get$7by$7lt" | "region$7util$7get$7crop$7location$7from$7center$7size$7text" | "region$7util$7get$7pad$7out$7location$7by$7size" | "RegionalConditioningColorMask_$3$3Inspire" | "RegionalConditioningSimple_$3$3Inspire" | "RegionalIPAdapterColorMask_$3$3Inspire" | "RegionalIPAdapterEncodedColorMask_$3$3Inspire" | "RegionalIPAdapterEncodedMask_$3$3Inspire" | "RegionalIPAdapterMask_$3$3Inspire" | "RegionalPrompt" | "RegionalPromptColorMask_$3$3Inspire" | "RegionalPromptSimple_$3$3Inspire" | "RegionalSampler" | "RegionalSamplerAdvanced" | "RegionalSeedExplorerColorMask_$3$3Inspire" | "RegionalSeedExplorerMask_$3$3Inspire" | "RelightSimple" | "ReloadImage" | "ReloadLatent" | "ReloadModel" | "Remap" | "RemapBarrelDistortion" | "RemapDepth" | "RemapFromInsideParabolas" | "RemapFromQuadrilateral_$1homography$2" | "RemapInsideParabolas" | "RemapInsideParabolasAdvanced" | "RemapMaskRange" | "RemapPinch" | "RemapRange" | "RemapReverseBarrelDistortion" | "RemapStretch" | "RemapToInnerCylinder" | "RemapToOuterCylinder" | "RemapToQuadrilateral" | "RemapWarpPolar" | "RemBGSession$6" | "RemoteChainEnd" | "RemoteChainStart" | "RemoteQueueSimple" | "RemoteQueueWorker" | "Remove_Image_Background_$1abg$2" | "RemoveBackendData_$3$3Inspire" | "RemoveBackendDataNumberKey_$3$3Inspire" | "RemoveControlNet_$3$3Inspire" | "RemoveControlNetFromRegionalPrompts_$3$3Inspire" | "RemoveImageFromSEGS" | "RemoveLatentMask$6" | "RemoveNoiseMask" | "Remover" | "RenderSMPLMesh" | "Repeat_Into_Grid_$1image$2" | "Repeat_Into_Grid_$1latent$2" | "Repeater$8pysssss" | "RepeatImageBatch" | "RepeatLatentBatch" | "replace_String_$_O" | "replace_String_advanced_$_O" | "Replace_Strings" | "Replace_Text_$_O" | "ReplaceImagesInBatch" | "ReplaceText" | "RequestInputs" | "RerangeSigmas" | "ReroutePrimitive$8pysssss" | "RErouter_$$3C$$3D" | "RErouter_$$3D$$3E" | "RerouteTextForCLIPTextEncodeA1111" | "ResampleAudio" | "RescaleCFG" | "RescaleClassifierFreeGuidanceTest" | "Resize_Cropped_Subtitles" | "Resize_Image_for_SDXL" | "ResizeImageMixlab" | "ResizeMask" | "ResizeToFit" | "Resolution_Multiply_$1JPS$2" | "Resolutions_by_Ratio_$1WLSH$2" | "ResolutionSelector" | "Restore_Face_$1mtb$2" | "RetrieveBackendData_$3$3Inspire" | "RetrieveBackendDataNumberKey_$3$3Inspire" | "ReverbAudioFX" | "ReverseAudio" | "ReverseImageBatch" | "Revision_Settings_$1JPS$2" | "Revision_Settings_Pipe_$1JPS$2" | "RF$_AtIndexString" | "RF$_BoolToString" | "RF$_FloatToString" | "RF$_IntToString" | "RF$_JsonStyleLoader" | "RF$_MergeLines" | "RF$_NumberToString" | "RF$_OptionsString" | "RF$_RangeFloat" | "RF$_RangeInt" | "RF$_RangeNumber" | "RF$_SavePromptInfo" | "RF$_SplitLines" | "RF$_TextConcatenate" | "RF$_TextInput" | "RF$_TextReplace" | "RF$_Timestamp" | "RF$_ToString" | "RF$_Vec2ToString" | "RF$_Vec3ToString" | "RGB_to_HSV" | "RGB$_Image$_Zho" | "RGB$_Picker" | "RIFE_VFI" | "RK$_CivitAIAddHashes" | "RK$_CivitAIMetaChecker" | "RL$_Crop$_Resize" | "RL$_Crop$_Resize$_Batch" | "RL$_Depth16" | "RL$_Finetune$_Analyze" | "RL$_Finetune$_Analyze$_Batch" | "RL$_Finetune$_Variable" | "RL$_Image$_Shadow" | "RL$_Image$_Threshold$_Channels" | "RL$_Internet$_Search" | "RL$_LoadImageSequence" | "RL$_Optical$_Flow$_Dip" | "RL$_SaveImageSequence" | "RL$_Uncrop" | "RL$_Warp$_Image" | "RL$_Zoe$_Depth$_Map$_Preprocessor" | "RL$_Zoe$_Depth$_Map$_Preprocessor$_Raw$_Infer" | "RL$_Zoe$_Depth$_Map$_Preprocessor$_Raw$_Process" | "Robust_Video_Matting" | "roop" | "RoopImproved" | "RotateImage" | "Round_Float_to_String" | "RoundMask" | "S3_Bucket_LoRA" | "S3Bucket$_Load$_LoRA" | "Safe_Mask_to_Image" | "Safety_Checker" | "SAIPrimitiveConverter" | "SAIStringRegexSearchMatch" | "SAIStringRegexSearchReplace" | "SaltAIStableVideoDiffusion" | "SaltInfo" | "SaltInput" | "SaltOutput" | "SALVTON$_Apply" | "SAM_Image_Mask" | "SAM_Model_Loader" | "SAM_MultiLayer" | "SAM_Parameters" | "SAM_Parameters_Combine" | "SamAutoMaskSEGS" | "SAMDetectorCombined" | "SAMDetectorSegmented" | "SAMEmbeddingToImage" | "SAMGenerator" | "Samin_Counter" | "Samin_Load_Image_Batch" | "SAMIN_SimpleWildcards" | "SAMIN_String_Attribute_Selector" | "SAMLoader" | "SAMModelLoader_$1segment_anything$2" | "SAMModelLoader_$1zhihuige$2" | "Sample_Image_Area_as_Palette_$$5BDream$$5D" | "Sample_Image_as_Palette_$$5BDream$$5D" | "SampleColorHSV" | "Sampler_Scheduler_Settings_$1JPS$2" | "Sampler_Selector" | "Sampler_Selector_$1Image_Saver$2" | "samplerate" | "SamplerCLYB$_4M$_SDE$_Momentumized" | "SamplerConfigOverride" | "SamplerCustom" | "SamplerCustomModelMixtureDuo" | "SamplerCustomNoise" | "SamplerCustomNoiseDuo" | "SamplerCustomPrediction" | "SamplerDPMAdaptative" | "SamplerDPMPP$_2M$_SDE" | "SamplerDPMPP$_3M$_SDE" | "SamplerDPMPP$_3M$_SDE$_DynETA" | "SamplerDPMPP$_DualSDE$_Momentumized" | "SamplerDPMPP$_SDE" | "SamplerEulerAncestral" | "SamplerEulerAncestralDancing$_Experimental" | "SamplerInversedEulerNode" | "SamplerLCM" | "SamplerLCMAlternative" | "SamplerLCMCustom" | "SamplerLCMCycle" | "SamplerLMS" | "SamplerNames$_" | "SamplerPropertiesNode" | "SamplerRES$_Momentumized" | "SamplerSonarDPMPPSDE" | "SamplerSonarEuler" | "SamplerSonarEulerA" | "SamplerSupreme" | "SamplerTCD" | "SamplerTCD_EulerA" | "SamplerTTM" | "Samples_Passthrough_$1Stat_System$2" | "SAMPreprocessor" | "Saturation" | "Save_A1_Image" | "Save_Gif_$1mtb$2" | "Save_Image_$1api$2" | "Save_Image_Grid_$1mtb$2" | "Save_Image_If_True" | "Save_Image_Sequence_$1mtb$2" | "Save_Image_To_Minio" | "Save_Image_w$3Metadata" | "Save_Image_w$3o_Metadata" | "Save_Image_With_Prompt_Data" | "Save_Image_With_Workflow" | "Save_Images_Mikey" | "Save_Images_No_Display" | "Save_Images_Pair" | "Save_Images_Plus_$1JPS$2" | "Save_IMG_Prompt" | "Save_LoRA" | "Save_MotionBrush" | "Save_Positive_Prompt$1WLSH$2" | "Save_Prompt_$1WLSH$2" | "Save_Prompt$3Info_$1WLSH$2" | "Save_Tensors_$1mtb$2" | "Save_Text_File" | "Save_Text_File$_mne" | "Save$_as$_webp" | "SaveAndOverwriteImageNode" | "SaveAnimatedPNG" | "SaveAnimatedWEBP" | "SaveASTERR" | "SaveAudioNode" | "SaveAudioTensor" | "SaveAvif" | "SaveDiskWorkflowJSON" | "SaveEXR" | "SaveFrame" | "SaveImage" | "SaveImage$_Canvas" | "SaveImage$_LCM" | "SaveImage$_Puzzle" | "SaveImage$_PuzzleV2" | "SaveImageAdvanced" | "SaveImageAndMetadata$_" | "SaveImageExtended" | "SaveImageGrid" | "SaveImageHighPrec" | "SaveImageOpenEXR" | "SaveImages" | "SaveImageS3" | "SaveImageToFolder" | "SaveImageToLocal" | "SaveImagetoPath" | "SaveImageUrl" | "SaveImageWebsocket" | "SaveImageWithAlpha" | "SaveImageWithMetaData" | "SaveImgAdv" | "SaveJson" | "SaveLatent" | "SaveLatent$_AS" | "SaveLatentEXR" | "SaveLatentNumpy" | "SaveMetaData" | "SavePoseKpsAsJsonFile" | "SavePromptToFile" | "SaveSMPL" | "SaveStateDict" | "SaveText" | "SaveText$8pysssss" | "saveTextToFile_$_O" | "SaveTiff" | "SaveTifImage" | "SaveVideo_$$5Bn$7suite$$5D" | "SaveVideoFilesS3" | "Saw_Curve_$$5BDream$$5D" | "SawtoothWave" | "scale" | "ScaleBatchPromptSchedule" | "ScaledGuidancePrediction" | "ScaledSoftControlNetWeights" | "ScaledSoftMaskedUniversalWeights" | "ScalePrediction" | "ScenarioPrompt" | "ScheduledImageAdjust" | "Scheduler_Selector" | "Scheduler_Selector_$1Image_Saver$2" | "ScheduleToCond" | "ScheduleToModel" | "Scientist" | "ScoreConverterNode" | "ScoreToNumber" | "ScreenShare" | "Scribble$_XDoG$_Preprocessor" | "ScribblePreprocessor" | "SD$_4XUpscale$_Conditioning" | "SDBatchLoader" | "SDLoraLoader" | "SDLoraSelector" | "SDParameterExtractor" | "SDParameterGenerator" | "SDPromptMerger" | "SDPromptReader" | "SDPromptSaver" | "SDTurboScheduler" | "SDTypeConverter" | "SDXL_Basic_Settings_$1JPS$2" | "SDXL_Basic_Settings_Pipe_$1JPS$2" | "SDXL_Empty_Latent_Image" | "SDXL_Fundamentals_MultiPipe_$1JPS$2" | "SDXL_Prompt_Handling_$1JPS$2" | "SDXL_Prompt_Handling_Plus_$1JPS$2" | "SDXL_Prompt_Styler_$1JPS$2" | "SDXL_Quick_Empty_Latent_$1WLSH$2" | "SDXL_Quick_Image_Scale_$1WLSH$2" | "SDXL_Recommended_Resolution_Calc_$1JPS$2" | "SDXL_Resolution" | "SDXL_Resolutions_$1JPS$2" | "SDXL_Resolutions_$1WLSH$2" | "SDXL_Steps_$1WLSH$2" | "SDXLAspectRatio" | "SDXLAspectRatioSelector" | "SDXLEmptyLatentSizePicker$6" | "SDXLMixSampler" | "SDXLPromptbyCelticArt" | "SDXLPromptbyContemporaryNordicArt" | "SDXLPromptbyFashionArt" | "SDXLPromptbyGothicRevival" | "SDXLPromptbyIrishFolkArt" | "SDXLPromptbyRomanticNationalismArt" | "SDXLPromptbySportsArt" | "SDXLPromptbyStreetArt" | "SDXLPromptbyVikingArt" | "SDXLPromptbyWildlifeArt" | "SDXLPromptStyler" | "SDXLPromptStylerAdvanced" | "SDXLPromptStylerAdvancedPreview" | "SDXLPromptStylerAll" | "SDXLPromptStylerbyArtist" | "SDXLPromptStylerbyCamera" | "SDXLPromptStylerbyComposition" | "SDXLPromptStylerbyCyberpunkSurrealism" | "SDXLPromptStylerbyDepth" | "SDXLPromptStylerbyEnvironment" | "SDXLPromptStylerbyFantasySetting" | "SDXLPromptStylerbyFilter" | "SDXLPromptStylerbyFocus" | "SDXLPromptStylerbyImpressionism" | "SDXLPromptStylerbyLighting" | "SDXLPromptStylerbyMileHigh" | "SDXLPromptStylerbyMood" | "SDXLPromptStylerbyMythicalCreature" | "SDXLPromptStylerbyOriginal" | "SDXLPromptStylerbyQuantumRealism" | "SDXLPromptStylerbySteamPunkRealism" | "SDXLPromptStylerbySubject" | "SDXLPromptStylerbySurrealism" | "SDXLPromptStylerbyTheme" | "SDXLPromptStylerbyTimeofDay" | "SDXLPromptStylerbyWyvern" | "SDXLPromptStylerHorror" | "SDXLPromptStylerMisc" | "SDXLPromptStylerPreview" | "SDXLRecommendedImageSize" | "SDXLResolutionPresets" | "SDZero_ImageSplit" | "SeamCarving" | "SeamlessClone" | "SeamlessClone_$1simple$2" | "SeamlessTile" | "SearchAndReplace" | "SeargeAdvancedParameters" | "SeargeCheckpointLoader" | "SeargeConditioningMuxer2" | "SeargeConditioningMuxer5" | "SeargeConditioningParameters" | "SeargeConditionMixing" | "SeargeControlnetAdapterV2" | "SeargeControlnetModels" | "SeargeCustomAfterUpscaling" | "SeargeCustomAfterVaeDecode" | "SeargeCustomPromptMode" | "SeargeDebugPrinter" | "SeargeEnablerInputs" | "SeargeFloatConstant" | "SeargeFloatMath" | "SeargeFloatPair" | "SeargeFreeU" | "SeargeGenerated1" | "SeargeGenerationParameters" | "SeargeHighResolution" | "SeargeImage2ImageAndInpainting" | "SeargeImageAdapterV2" | "SeargeImageSave" | "SeargeImageSaving" | "SeargeInput1" | "SeargeInput2" | "SeargeInput3" | "SeargeInput4" | "SeargeInput5" | "SeargeInput6" | "SeargeInput7" | "SeargeIntegerConstant" | "SeargeIntegerMath" | "SeargeIntegerPair" | "SeargeIntegerScaler" | "SeargeLatentMuxer3" | "SeargeLoraLoader" | "SeargeLoras" | "SeargeMagicBox" | "SeargeModelSelector" | "SeargeOperatingMode" | "SeargeOutput1" | "SeargeOutput2" | "SeargeOutput3" | "SeargeOutput4" | "SeargeOutput5" | "SeargeOutput6" | "SeargeOutput7" | "SeargeParameterProcessor" | "SeargePipelineStart" | "SeargePipelineTerminator" | "SeargePreviewImage" | "SeargePromptAdapterV2" | "SeargePromptCombiner" | "SeargePromptStyles" | "SeargePromptText" | "SeargeSamplerAdvanced" | "SeargeSamplerInputs" | "SeargeSaveFolderInputs" | "SeargeSDXLBasePromptEncoder" | "SeargeSDXLImage2ImageSampler" | "SeargeSDXLImage2ImageSampler2" | "SeargeSDXLPromptEncoder" | "SeargeSDXLRefinerPromptEncoder" | "SeargeSDXLSampler" | "SeargeSDXLSampler2" | "SeargeSDXLSamplerV3" | "SeargeSeparator" | "SeargeStylePreprocessor" | "SeargeTextInputV2" | "SeargeUpscaleModelLoader" | "SeargeUpscaleModels" | "SeargeVAELoader" | "SEECoderImageEncode" | "Seed" | "seed_$_O" | "Seed_and_Int_$1WLSH$2" | "Seed_Everywhere" | "Seed_Generator" | "Seed_Generator_$1Image_Saver$2" | "Seed_String" | "Seed_to_Number_$1WLSH$2" | "Seed_With_Text" | "Seed$_" | "SeedExplorer_$3$3Inspire" | "SeedGenerator" | "SeedIncrementerNode" | "SeedSelector" | "segformer$_agnostic" | "segformer$_b2$_clothes" | "segformer$_clothes" | "segformer$_remove$_bg" | "SegformerNode" | "SegformerNodeMasks" | "SegformerNodeMergeSegments" | "SegmDetectorCombined" | "SegmDetectorCombined$_v2" | "SegmDetectorForEach" | "SegmDetectorSEGS" | "Segment_Face" | "SegmentToMaskByPoint$7badger" | "SegmindVega" | "Segs__Mask" | "Segs__Mask_ForEach" | "SEGS_to_Face_Crop_Data" | "SEGSDetailer" | "SEGSDetailerForAnimateDiff" | "SEGSLabelFilterDetailerHookProvider" | "SegsMaskCombine" | "SEGSOrderedFilterDetailerHookProvider" | "SEGSPaste" | "SEGSPreview" | "SEGSPreviewCNet" | "SEGSRangeFilterDetailerHookProvider" | "SEGSSwitch" | "SegsToCombinedMask" | "SEGSToImageList" | "SegsToRegion" | "SEGSUpscaler" | "SEGSUpscalerPipe" | "Select_ControlNet" | "Select_Image_Indices" | "SelectFolderPathEasy" | "SelectInputs_$3$3Browser" | "selectLatentFromBatch_$_O" | "SelfAttentionGuidance" | "SemSegPreprocessor" | "Send_Eagle_with_text" | "Send_Webp_Image_to_Eagle" | "Send$_To$_Editor" | "SendImageWebSocket" | "Separate_Mask_Components" | "Sepconv_VFI" | "SequenceVariation" | "SerialPrompter" | "ServingInputNumber" | "ServingInputText" | "ServingOutput" | "Set_Minio_Config" | "SetDefaultImageForSEGS" | "SetLatentNoiseMask" | "SetLatentNoiseSequence" | "SetMetadataAll" | "SetMetadataForSaveVideo_$$5Bn$7suite$$5D" | "SetMetadataString" | "SetRequestStateToComplete" | "Setter" | "SettingsSwitch" | "Shadertoy" | "Sharpen" | "Sharpen_$1mtb$2" | "ShiftTransform" | "Show_Path" | "Show_String" | "ShowCachedInfo_$3$3Inspire" | "ShowFileNames" | "ShowFloat" | "ShowImageDiff" | "ShowInt" | "ShowLayer" | "ShowNumber" | "ShowString" | "ShowText" | "ShowText$_GPT2P" | "ShowText$8fofo" | "ShowText$8pysssss" | "ShowTextForGPT" | "ShuffleChannels" | "ShufflePreprocessor" | "SigmoidCorrection" | "Simple_Load_Image_Batch" | "Simple_Pattern_Replace_$1WLSH$2" | "Simple_String_Combine_$1WLSH$2" | "Simple_Wildcards" | "Simple_Wildcards_$1Dir$5$2" | "SimpleAspectRatio" | "SimpleConcat" | "SimpleExponentialScheduler" | "SimpleMath" | "SimpleMath$6" | "SimpleMathDebug" | "SimpleSampler" | "SimpleText" | "SimpleWildcard" | "Sine_Camera_Pan_$$5BDVB$$5D" | "Sine_Camera_Roll_$$5BDVB$$5D" | "Sine_Camera_Zoom_$$5BDVB$$5D" | "Sine_Curve_$$5BDream$$5D" | "SineWave" | "SingleBooleanTrigger" | "SingleImageDataUrlLoader" | "SingleImagePathLoader" | "SingleImageUrlLoader" | "SingleString" | "SinNode$_DF" | "Sinus" | "SinWave" | "SixBooleanTrigger" | "SixFloats" | "Size_Swapper" | "SizeFromPresetsSD15" | "SizeFromPresetsSDXL" | "SizeSelector" | "sizing$_node" | "sizing$_node$_basic" | "sizing$_node$_unparsed" | "SkinDetectTraditional$1FaceParsing$2" | "Slice_List" | "SliceAudio" | "SlothfulAttention" | "Smart_Step_$1mtb$2" | "SMoE$_Generation$_Zho" | "SMoE$_ModelLoader$_Zho" | "Smooth_Event_Curve_$$5BDream$$5D" | "SmoothMask" | "SmoothVideo" | "SmplifyMotionData" | "SMPLLoader" | "smZ_CLIPTextEncode" | "smZ_Settings" | "SoftControlNetWeights" | "SoftT2IAdapterWeights" | "Solarize" | "SolidMask" | "SomethingToString" | "SonarCustomNoise" | "SonarGuidanceConfig" | "SonarPowerNoise" | "SoundPlayer" | "SoundReactive" | "Special_CLIP_Loader" | "speech2text" | "SpeechRecognition" | "SpeechSynthesis" | "SpliceDenoised" | "SpliceLatents" | "Split_and_concatenate_sigmas" | "Split_Masks" | "Split_Tracking_Points" | "SplitBboxes" | "SplitImage" | "SplitImageWithAlpha" | "SplitLongMask" | "SplitSigmas" | "SqrtNode$_DF" | "Square_root" | "SquareWave" | "SRFloatPromptInput" | "SRIntPromptInput" | "SRL_Conditional_Interrrupt" | "SRL_Eval" | "SRL_Filter_Image_List" | "SRL_Format_String" | "SRStringPromptInput" | "stabel$_vition" | "StableCascade$_CheckpointLoader_$3$3Inspire" | "StableCascade$_EmptyLatentImage" | "StableCascade$_StageB$_Conditioning" | "StableCascade$_StageC$_VAEEncode" | "StableCascade$_SuperResolutionControlnet" | "StableCascadeLatentRatio" | "Stablezero123" | "StableZero123$_BatchSchedule" | "StableZero123$_Conditioning" | "StableZero123$_Conditioning$_Batched" | "Stablezero123WithDepth" | "Stack_Images" | "Stack_Images_$1mtb$2" | "StateDictLoader" | "StateDictMerger" | "StateDictMergerBlockWeighted" | "StateDictMergerBlockWeightedMulti" | "StepCfgIncrementNode" | "StepsAndCfg" | "StepsAndCfgAndWH" | "StepsScheduleHookProvider" | "stitch" | "STMFNet_VFI" | "StreamDiffusion$_Loader" | "StreamDiffusion$_Sampler" | "StreamDiffusionCreateStream" | "StreamDiffusionFastSampler" | "StreamDiffusionSampler" | "StreamDiffusionWarmup" | "StretchAudio" | "String" | "string" | "String_$_O" | "String_$1RE$2" | "String_Concat_modusCell" | "String_debug_print" | "String_Input" | "String_Input_$$5BDream$$5D" | "String_Input_$$5BDVB$$5D" | "String_Literal" | "String_Literal_$1Image_Saver$2" | "String_Replace_$1mtb$2" | "String_to_Float" | "String_to_Integer" | "String_to_Log_Entry_$$5BDream$$5D" | "String_to_Text" | "String_Tokenizer_$$5BDream$$5D" | "String_Variable_$$5Bn$7suite$$5D" | "string$_multiline" | "string2file" | "string2Image_$_O" | "StringConcatenate" | "StringConstant" | "StringFormat" | "StringFormatSingleLine" | "StringFromList" | "StringFunction" | "StringFunction$8pysssss" | "StringListToOneLine$7badger" | "StringMlStaticPrimitive" | "StringNode$_DF" | "StringSchedule" | "StringStaticPrimitive" | "StringsToList" | "StringToFizz$7badger" | "StringToInt" | "StringToLabel" | "StringToList" | "StringToNumber" | "StringToolsBalancedChoice" | "StringToolsConcat" | "StringToolsRandomChoice" | "StringToolsString" | "StringToolsText" | "StringVariable" | "StructuredOutput" | "Style_Conditioner" | "Style_Conditioner_Base_Only" | "StyleAlignedBatchAlign" | "StyleAlignedBatchAlign$_" | "StyleAlignedReferenceSampler" | "StyleAlignedReferenceSampler$_" | "StyleAlignedSampleReferenceLatents" | "StyleAlignedSampleReferenceLatents$_" | "StyleModelApply" | "StyleModelClamp" | "StyleModelLoader" | "Styles_Loader_$1mtb$2" | "StylesImage$_Zho" | "Substract_Int_Int_$1JPS$2" | "SubstringTheory" | "Subtract" | "SubtractMask" | "SubtractMaskForEach" | "SubtractNode$_DF" | "SudoLatentUpscale" | "Suggester" | "Sum" | "SumNode$_DF" | "Superprompt" | "SUPIR$_conditioner" | "SUPIR$_decode" | "SUPIR$_encode" | "SUPIR$_first$_stage" | "SUPIR$_model$_loader" | "SUPIR$_model$_loader$_v2" | "SUPIR$_sample" | "SUPIR$_tiles" | "SUPIR$_Upscale" | "SV$_random" | "SV3D$_BatchSchedule" | "SV3D$_Conditioning" | "SVD$_Aspect$_Ratio$_Zho" | "SVD$_img2vid$_Conditioning" | "SVD$_Steps$_MotionStrength$_Seed$_Zho" | "SVD$_Styler$_Zho" | "SVD$_txt2vid$_ConditioningwithLatent" | "SVDDecoder" | "SVDimg2vid" | "SVDModelLoader" | "SVDRsizer" | "SVDSampler" | "SVDSimpleImg2Vid" | "SVDSpeedup" | "SVG" | "SvgImage" | "Swap_Color_Mode" | "SwitchByIndex" | "T5TextEncode" | "T5v11Loader" | "TacoAnimatedLoader" | "TacoGifMaker" | "TacoImg2ImgAnimatedLoader" | "TacoImg2ImgAnimatedProcessor" | "TacoLatent" | "TAESDLoader" | "TagEncode" | "TagsFormater" | "TagsSelector" | "Tangent" | "TanNode$_DF" | "TC$_ColorFill" | "TC$_EqualizeCLAHE" | "TC$_ImageResize" | "TC$_ImageScale" | "TC$_RandomColorFill" | "TC$_SizeApproximation" | "TCDScheduler" | "TdxhBoolNumber" | "TdxhClipVison" | "TdxhControlNetApply" | "TdxhControlNetProcessor" | "TdxhFloatInput" | "TdxhImageToSize" | "TdxhImageToSizeAdvanced" | "TdxhImg2ImgLatent" | "TdxhIntInput" | "TdxhLoraLoader" | "TdxhOnOrOff" | "TdxhReference" | "TdxhStringInput" | "TdxhStringInputTranslator" | "TEEDPreprocessor" | "TemporalSplice" | "Tensor_Batch_to_Image" | "tensor$_trans$_pil" | "Tensorboard_Access" | "TestJsonPreview" | "TESTNODE$_" | "TESTNODE$_TOKEN" | "Text" | "Text_$_O" | "Text_Add_Token_by_Input" | "Text_Add_Tokens" | "Text_box" | "Text_Box_$7_Ostris" | "Text_Compare" | "Text_Concatenate" | "Text_Concatenate_$1JPS$2" | "Text_Contains" | "Text_Dictionary_Convert" | "Text_Dictionary_Get" | "Text_Dictionary_Keys" | "Text_Dictionary_New" | "Text_Dictionary_To_Text" | "Text_Dictionary_Update" | "Text_File_History_Loader" | "Text_Find_and_Replace" | "Text_Find_and_Replace_by_Dictionary" | "Text_Find_and_Replace_Input" | "Text_Hash" | "Text_Input_$$5BDream$$5D" | "Text_Input_$$5BDVB$$5D" | "Text_Input_Switch" | "Text_List" | "Text_List_Concatenate" | "Text_List_to_Text" | "Text_Load_Line_From_File" | "Text_Multiline" | "Text_Overlay" | "Text_Parse_A1111_Embeddings" | "Text_Parse_Noodle_Soup_Prompts" | "Text_Parse_Tokens" | "Text_Prompt_$1JPS$2" | "Text_Random_Line" | "Text_Random_Prompt" | "Text_Shuffle" | "Text_Splitter" | "Text_String" | "Text_String_Truncate" | "Text_to_Conditioning" | "Text_to_Console" | "Text_To_Image_$1mtb$2" | "Text_to_Number" | "Text_to_String" | "Text_Utils_$7_Join_N$7Elements_of_String_List" | "Text_Utils_$7_Join_String_List" | "Text_Utils_$7_Join_Strings" | "Text_Utils_$7_Split_String_to_List" | "Text$_Image$_Frame$_Zho" | "Text$_Image$_Multiline$_Zho" | "Text$_Image$_Zho" | "text$7preset$7colors" | "text$7util$7join$7text" | "text$7util$7loop$7text" | "text$7util$7path$7list" | "text$7util$7prompt$7add$7prompt" | "text$7util$7prompt$7adv$7dup" | "text$7util$7prompt$7adv$7search" | "text$7util$7prompt$7del" | "text$7util$7prompt$7dup" | "text$7util$7prompt$7join" | "text$7util$7prompt$7search" | "text$7util$7prompt$7shuffle" | "text$7util$7prompt$7std" | "text$7util$7prompt$7unweight" | "text$7util$7random$7text" | "text$7util$7search$7text" | "text$7util$7show$7text" | "text$7util$7switch$7text" | "Text2GPTPrompt" | "Text2Image_$_O" | "Text2Image$_jru" | "Text2InputOr3rdOption" | "Text2Prompt" | "text2speech" | "Textbox" | "TextBox" | "TextBox$8fofo" | "TextCombinations" | "TextCombinations3" | "TextCombine" | "TextCombinerSix" | "TextCombinerTwo" | "TextConcat" | "TextConcatenator" | "TextGeneration" | "TextGenerator" | "TextImage" | "TextInput" | "TextInput$_" | "TextInputBasic" | "TextLine" | "TextListToString$7badger" | "TextOnSegsFloodFill" | "TextOutput" | "TextPreserve" | "TextPromptCombinerNode" | "TextSend" | "TextSplit" | "TextSplitByDelimiter" | "TextToImage$_AS" | "TextToNumber" | "TextureViewer" | "TextWildcardList$_AS" | "TextWithBooleanSwitchAndCommonTextInput" | "The_Golden_Scheduler" | "ThresholdMask" | "TileCalc" | "Tiled_KSampler" | "Tiled_Upscaler_Script" | "TiledDiffusion" | "TiledIPAdapter" | "TiledKSamplerProvider" | "TileMerge" | "TilePreprocessor" | "TilePreprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "TileSplit" | "Time_String_$1WLSH$2" | "TimestampFileName" | "TimestepKeyframe" | "To_ZHG_pip" | "ToBasicPipe" | "ToBinaryMask" | "ToColorList" | "ToCondList" | "ToDetailerPipe" | "ToDetailerPipeSDXL" | "ToFloatList" | "ToImageList" | "ToIntList" | "ToIPAdapterPipe_$3$3Inspire" | "Token_Count_Ranker$1FW$2" | "ToLatentList" | "ToMaskList" | "TomePatchModel" | "ToModelList" | "Tonemap" | "TonemapNoiseWithRescaleCFG" | "ToPixel$7badger" | "ToStringList" | "Trace_Memory_Allocation_$$5BDVB$$5D" | "TrainUnetSequence" | "Trajectory$_Canvas$_Tab" | "Transform_Image_$1mtb$2" | "TransformOffset" | "TransformSampler" | "TransformsCombine" | "TransientAmplitudeBasic" | "TransitionMask$6" | "Translate_Text_With_LLM" | "Translate2Chinese$8fofo" | "TransparentImage" | "trColorCorrection" | "tri3d$7adjust$7neck" | "tri3d$7atr$7parse" | "tri3d$7atr$7parse$7batch" | "tri3d$7clipdrop$7bgremove$7api" | "tri3d$7composite$7image$7splitter" | "tri3d$7dwpose" | "tri3d$7extract$7hand" | "tri3d$7extract$7parts$7batch" | "tri3d$7extract$7parts$7batch2" | "tri3d$7extract$7parts$7mask$7batch" | "tri3d$7face$7recognise" | "tri3d$7float$7to$7image" | "tri3d$7fuzzification" | "tri3d$7HistogramEqualization" | "tri3d$7image$7mask$72$7box" | "tri3d$7image$7mask$7box$72$7image" | "tri3d$7interaction$7canny" | "tri3d$7load$7pose$7json" | "tri3d$7luminosity$7match" | "tri3d$7main$_transparent$_background" | "tri3d$7pose$7adaption" | "tri3d$7pose$7to$7image" | "tri3d$7position$7hands" | "tri3d$7position$7parts$7batch" | "tri3d$7recolor$7mask" | "tri3d$7recolor$7mask$7LAB$_space" | "tri3d$7recolor$7mask$7LAB$_space$_manual" | "tri3d$7recolor$7mask$7RGB$_space" | "tri3d$7scaled$7paste" | "tri3d$7skin$7feathered$7padded$7mask" | "tri3d$7swap$7pixels" | "Triangle_Curve_$$5BDream$$5D" | "Triangle_Event_Curve_$$5BDream$$5D" | "TriangleWave" | "trim_String_$_O" | "Trim_Text_$_O" | "Trim_To_Tokens_$1FW$2" | "TrimTransparentEdges$7badger" | "TripoSRModelLoader" | "TripoSRSampler" | "TripoSRViewer" | "trLayering" | "trRouter" | "trRouterLonger" | "True_Random$5org_Number_Generator" | "TSamplerWithTransform" | "ttN_busIN" | "ttN_busOUT" | "ttN_compareInput" | "ttN_concat" | "ttN_debugInput" | "ttN_float" | "ttN_hiresfixScale" | "ttN_imageOutput" | "ttN_imageREMBG" | "ttN_int" | "ttN_multiModelMerge" | "ttN_pipe2BASIC" | "ttN_pipe2DETAILER" | "ttN_pipeEDIT" | "ttN_pipeEncodeConcat" | "ttN_pipeIN" | "ttN_pipeKSampler" | "ttN_pipeKSamplerAdvanced" | "ttN_pipeKSamplerSDXL" | "ttN_pipeLoader" | "ttN_pipeLoaderSDXL" | "ttN_pipeLoraStack" | "ttN_pipeOUT" | "ttN_seed" | "ttN_seedDebug" | "ttN_text" | "ttN_text3BOX$_3WAYconcat" | "ttN_text7BOX$_concat" | "ttN_textDebug" | "ttN_xyPlot" | "TTSCapcutNode" | "Tuple" | "Tuple_debug_print" | "Tuple_multiply" | "Tuple_swap" | "Tuple_to_floats" | "Tuple_to_ints" | "Tuple2Float$_DF" | "TupleDebugPrint$_DF" | "TupleNode$_DF" | "TwoAdvancedSamplersForMask" | "TwoBooleanTrigger" | "TwoFloats" | "TwoSamplersForMask" | "TwoSamplersForMaskUpscalerProvider" | "TwoSamplersForMaskUpscalerProviderPipe" | "TypeConversion$1IOHelpers$2" | "UformGen2QwenNode" | "UltimateSDUpscale" | "UltimateSDUpscaleNoUpscale" | "UltimateVideoLoader" | "UltimateVideoLoader_$1simple$2" | "UltralyticsDetectorProvider" | "Unary_Image_Op" | "Unary_Mask_Op" | "unCLIP_Checkpoint_Loader" | "unCLIPCheckpointLoader" | "unCLIPConditioning" | "Uncrop_$1mtb$2" | "Uncrop_Face" | "UNETLoader" | "UnGridify_$1image$2" | "UnHijack" | "UniFormer$7SemSegPreprocessor" | "Unimatch$_OptFlowPreprocessor" | "UnJitterImage" | "Unpack_SDXL_Tuple" | "UnsamplerDetailerHookProvider" | "UnsamplerHookProvider" | "UnsharpMask" | "Unsplash_Image_$1mtb$2" | "UnTonemap" | "Unwrap_Frame_Set_$$5BDVB$$5D" | "UnzipPrompt_$3$3Inspire" | "UploadFileS3" | "UploadToRemote_$3$3Browser" | "Upscale_by_Factor_with_Model_$1WLSH$2" | "Upscale_Model_Loader" | "Upscale_Model_Switch" | "Upscale_Tile_Calculator" | "UpscaleImageByUsingModel" | "UpscaleModelClamp" | "UpscaleModelLoader" | "UpscaleVideoTrtNode" | "UserProxy" | "Vae_Decode_$1mtb$2" | "VAE_Decode_Pipe" | "VAE_Decode_Tiled_Pipe" | "VAE_Encode_For_Inpaint_V2" | "VAE_Encode_for_Inpaint_w$3Padding_$1WLSH$2" | "VAE_Encode_Pipe" | "VAE_Encode_Tiled_Pipe" | "VAE_Input_Switch" | "VAE_Switch_$1JPS$2" | "vae$_loader" | "VaeClamp" | "VAEDecode" | "VAEDecode$_to$_folder" | "VAEDecodeBatched" | "VAEDecodeConsistencyDecoder" | "VAEDecodeParallel_$_O" | "VAEDecoderPoP" | "VAEDecodeTiled" | "VAEDecodeTiled$_TiledDiffusion" | "VAEEncode" | "VAEEncodeBatch" | "VAEEncodeBatched" | "VAEEncodeForInpaint" | "VAEEncodeForInpaint_$1WAS$2" | "VAEEncodeForInpaintSequence" | "VAEEncoderPoP" | "VAEEncodeTiled" | "VAEEncodeTiled$_TiledDiffusion" | "VaeGraphLoader" | "VaeGraphSaver" | "VAEIter" | "VAELoader" | "VAELoader_$8_rcsaquino" | "VAELoaderConsistencyDecoder" | "VAELoaderDecode" | "VAEProcessor_$8_rcsaquino" | "VAESave" | "VaeSpeedup" | "ValueSchedule" | "variation$_image_$_O" | "VFrame_Loader_With_Mask_Editor" | "VHS$_BatchManager" | "VHS$_DuplicateImages" | "VHS$_DuplicateLatents" | "VHS$_DuplicateMasks" | "VHS$_FILENAMES$_STRING" | "VHS$_GetImageCount" | "VHS$_GetLatentCount" | "VHS$_GetMaskCount" | "VHS$_LoadAudio" | "VHS$_LoadImages" | "VHS$_LoadImagesPath" | "VHS$_LoadVideo" | "VHS$_LoadVideoPath" | "VHS$_MergeImages" | "VHS$_MergeLatents" | "VHS$_MergeMasks" | "VHS$_PruneOutputs" | "VHS$_SelectEveryNthImage" | "VHS$_SelectEveryNthLatent" | "VHS$_SelectEveryNthMask" | "VHS$_SplitImages" | "VHS$_SplitLatents" | "VHS$_SplitMasks" | "VHS$_VAEDecodeBatched" | "VHS$_VAEEncodeBatched" | "VHS$_VideoCombine" | "VHS$_VideoInfo" | "VHS$_VideoInfoLoaded" | "VHS$_VideoInfoSource" | "VHSFilenamesToPathNode" | "VibeTransferOptionNAID" | "VidDirIterator" | "Video_Dump_Frames" | "Video_Loader_With_Mask_Editor" | "video2audio" | "VideoCombineThenPath" | "VideoCutFromDir$7badger" | "VideoLinearCFGGuidance" | "VideoPathMetaExtraction" | "VideoToFrame$7badger" | "VideoTriangleCFGGuidance" | "ViewportColor" | "ViewportDepth" | "ViewText" | "Vignette" | "VisualAnagramsAnimate" | "VisualAnagramsSample" | "Visualize_optical_flow" | "VividSharpen" | "VizMotionBrush" | "VPScheduler" | "VRAM$_Debug" | "WarpFacesBack" | "WarpFrame" | "Watermarking" | "WAV_Curve_$$5BDream$$5D" | "WD14Tagger$8pysssss" | "webcam$_capture$_node" | "WebcamCapture" | "WebcamNode" | "WebSocketServing" | "WFC$_CustomTemperature$_Bmad" | "WFC$_CustomValueWeights$_Bmad" | "WFC$_Decode$_BMad" | "WFC$_EmptyState$_Bmad" | "WFC$_Encode$_BMad" | "WFC$_Filter$_Bmad" | "WFC$_Generate$_BMad" | "WFC$_GenParallel$_Bmad" | "WFC$_SampleNode$_BMad" | "whitelist" | "WidgetToString" | "Width$3Height_Literal" | "Width$3Height_Literal_$1Image_Saver$2" | "Wildcard_Processor" | "WildcardAndLoraSyntaxProcessor" | "WildcardEncode_$3$3Inspire" | "WildcardOobaPrompt" | "Wildcards" | "Wildcards_Nodes" | "WordAsImage" | "words$_generatee" | "Write_to_GIF" | "Write_to_Video" | "XL_DreamBooth_LoRA" | "XLDB$_LoRA" | "XY_Grid_Helper" | "XY_Input$4_Add$3Return_Noise" | "XY_Input$4_Aesthetic_Score" | "XY_Input$4_CFG_Scale" | "XY_Input$4_Checkpoint" | "XY_Input$4_Clip_Skip" | "XY_Input$4_Control_Net" | "XY_Input$4_Control_Net_Plot" | "XY_Input$4_Denoise" | "XY_Input$4_LoRA" | "XY_Input$4_Lora_Block_Weight_$3$3Inspire" | "XY_Input$4_LoRA_Plot" | "XY_Input$4_LoRA_Stacks" | "XY_Input$4_Manual_XY_Entry" | "XY_Input$4_Prompt_S$3R" | "XY_Input$4_Refiner_On$3Off" | "XY_Input$4_Sampler$3Scheduler" | "XY_Input$4_Seeds$6$6_Batch" | "XY_Input$4_Steps" | "XY_Input$4_VAE" | "XY_Plot" | "xy$_Tiling$_KSampler" | "XYAny" | "XYImage" | "xyz$7util$7txt$7to$7int" | "XyzPlot_$3$3Browser" | "YamlConfigLoader" | "YANC$5ConcatStrings" | "YANC$5FormatDatetimeString" | "YANC$5GetWidgetValueString" | "YANC$5IntegerCaster" | "YANC$5MultilineString" | "YANC$5TruncateString" | "YARS" | "YARSAdv" | "YKImagePadForOutpaint" | "YKMaskToImage" | "YoloSEGdetectionNode" | "YoloSegNode" | "YOLOTrackerNode" | "Yolov8Detection" | "Yolov8Segmentation" | "Yoloworld$_ESAM$_DetectorProvider$_Zho" | "Yoloworld$_ESAM$_Zho" | "Yoloworld$_ModelLoader$_Zho" | "YouTube2Prompt$_jru" | "YouTubeVideoLoader" | "yugioh$_Presets" | "Zephyr" | "ZFLoadImagePath" | "ZFPreviewText" | "ZFPreviewTextMultiline" | "ZFShareScreen" | "ZFTextTranslation" | "ZHG_FaceIndex" | "ZHG_GetMaskArea" | "ZHG_Image_Levels" | "ZHG_SaveImage" | "ZHG_SmoothEdge" | "ZHG_UltimateSDUpscale" | "ZipPrompt_$3$3Inspire" | "Zoe$_DepthAnythingPreprocessor" | "Zoe$_DepthMap$_Preprocessor$_Provider$_for$_SEGS_$3$3Inspire" | "Zoe$7DepthMapPreprocessor" | "Zoom_Image_with_Depth" | "ZSuite$4_Prompter" | "ZSuite$4_RF_Noise" | "ZSuite$4_SeedMod" | "ZuellniExLlamaGenerator" | "ZuellniExLlamaLoader" | "ZuellniPickScoreImageProcessor" | "ZuellniPickScoreLoader" | "ZuellniPickScoreSelector" | "ZuellniPickScoreTextProcessor" | "ZuellniTextPreview" | "ZuellniTextReplace";

type KnownModel_Base = "SDXL" | "SD1.x" | "upscale" | "inswapper" | "deepbump" | "face_restore" | "SVD" | "zero123" | "SD1.5" | "Stable Cascade" | "SD2" | "SD2.1" | "SDXL VAE" | "SD1.5 VAE" | "SD2.1 VAE" | "SSD-1B" | "segmind-vega" | "SDXL 1.0" | "vit-g" | "ViT-L" | "ViT-H" | "ViT-G" | "SAM" | "SEECODER" | "Ultralytics" | "MotionCtrl" | "GFPGAN" | "CodeFormer" | "facexlib" | "efficient_sam" | "DLIB" | "blip_model" | "DINO" | "DynamiCrafter" | "Depth-FM" | "SUPIR";

type KnownModel_Name = "1k3d68.onnx" | "1k3d68.onnx" | "2d106det.onnx" | "2d106det.onnx" | "4x_foolhardy_Remacri" | "4x_NMKD-Siax_200k" | "4x-AnimeSharp" | "4x-UltraSharp" | "8x_NMKD-Superscale_150000_G" | "AbyssOrangeMix2 (hard)" | "AbyssOrangeMix3 A1" | "AbyssOrangeMix3 A3" | "AD_Stabilized_Motion/mm-Stabilized_high.pth (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "AD_Stabilized_Motion/mm-Stabilized_mid.pth (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/mm_sd_v15_v2.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/mm_sd_v15.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/mm_sd_v15.ckpt (comfyui-animatediff) (Updated path)" | "animatediff/mm_sdxl_v10_beta.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/mmd_sd_v14.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/mmd_sd_v14.ckpt (comfyui-animatediff) (Updated path)" | "animatediff/v2_lora_PanLeft.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/v2_lora_PanRight.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/v2_lora_RollingAnticlockwise.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/v2_lora_RollingClockwise.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/v2_lora_TiltDown.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/v2_lora_TiltUp.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/v2_lora_ZoomIn.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/v2_lora_ZoomOut.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/v3_sd15_adapter.ckpt" | "animatediff/v3_sd15_mm.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "animatediff/v3_sd15_sparsectrl_rgb.ckpt (ComfyUI-AnimateDiff-Evolved)" | "animatediff/v3_sd15_sparsectrl_scribble.ckpt" | "bad_prompt Negative Embedding" | "BLIP ImageCaption (COCO) w/ ViT-B and CapFilt-L" | "CiaraRowles/temporaldiff-v1-animatediff.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "CiaraRowles/TemporalNet1XL (1.0)" | "CiaraRowles/TemporalNet2" | "CLIPVision model (IP-Adapter) CLIP-ViT-bigG-14-laion2B-39B-b160k" | "CLIPVision model (IP-Adapter) CLIP-ViT-H-14-laion2B-s32B-b79K" | "CLIPVision model (openai/clip-vit-large)" | "CLIPVision model (stabilityai/clip_vision_g)" | "codeformer.pth" | "control_boxdepth_LooseControlfp16 (fp16)" | "ControlNet-HandRefiner-pruned (inpaint-depth-hand; fp16)" | "controlnet-SargeZT/controlnet-sd-xl-1.0-depth-16bit-zoe" | "controlnet-SargeZT/controlnet-sd-xl-1.0-softedge-dexined" | "ControlNet-v1-1 (anime; fp16)" | "ControlNet-v1-1 (canny; fp16)" | "ControlNet-v1-1 (depth; fp16)" | "ControlNet-v1-1 (inpaint; fp16)" | "ControlNet-v1-1 (ip2p; fp16)" | "ControlNet-v1-1 (lineart; fp16)" | "ControlNet-v1-1 (mlsd; fp16)" | "ControlNet-v1-1 (normalbae; fp16)" | "ControlNet-v1-1 (openpose; fp16)" | "ControlNet-v1-1 (scribble; fp16)" | "ControlNet-v1-1 (seg; fp16)" | "ControlNet-v1-1 (shuffle; fp16)" | "ControlNet-v1-1 (softedge; fp16)" | "ControlNet-v1-1 (tile; fp16; v11f1e)" | "ControlNet-v1-1 (tile; fp16; v11u)" | "Deep Negative V1.75" | "Deepbump" | "deepfashion2_yolov8s (segm)" | "Depth-FM-v1 fp16 safetensors" | "Depth-FM-v1 fp32 safetensors" | "det_10g.onnx" | "detection_mobilenet0.25_Final.pth" | "detection_Resnet50_Final.pth" | "diffusers/stable-diffusion-xl-1.0-inpainting-0.1 (UNET)" | "diffusers/stable-diffusion-xl-1.0-inpainting-0.1 (UNET/fp16)" | "diffusion_pytorch_model.safetensors" | "dlib_face_recognition_resnet_model_v1.dat [Face Analysis]" | "DynamiCrafter 1024 bf16 safetensors" | "DynamiCrafter 512 interpolation bf16 safetensors" | "EasyNegative" | "efficient_sam_s_cpu.jit [ComfyUI-YoloWorld-EfficientSAM]" | "efficient_sam_s_gpu.jit [ComfyUI-YoloWorld-EfficientSAM]" | "ESRGAN x4" | "face_yolov8m (bbox)" | "face_yolov8m-seg_60.pt (segm)" | "face_yolov8n (bbox)" | "face_yolov8n_v2 (bbox)" | "face_yolov8n-seg2_60.pt (segm)" | "face_yolov8s (bbox)" | "genderage.onnx" | "genderage.onnx" | "GFPGAN 1.3" | "GFPGAN 1.4" | "GFPGANv1.4.pth" | "GLIGEN textbox (fp16; pruned)" | "glintr100.onnx" | "GroundingDINO SwinT OGC - CFG File" | "GroundingDINO SwinT OGC - Model" | "hair_yolov8n-seg_60.pt (segm)" | "hand_yolov8n (bbox)" | "hand_yolov8s (bbox)" | "illuminatiDiffusionV1_v11 unCLIP model" | "InstanceDiffusion/fusers" | "InstanceDiffusion/position_net" | "InstanceDiffusion/scaleu" | "Inswapper (face swap)" | "Inswapper-fp16 (face swap)" | "ip-adapter_sd15_light.safetensors" | "ip-adapter_sd15_vit-G.safetensors" | "ip-adapter_sd15.safetensors" | "ip-adapter_sdxl_vit-h.safetensors" | "ip-adapter_sdxl.safetensors" | "ip-adapter-faceid_sd15_lora.safetensors" | "ip-adapter-faceid_sd15.bin" | "ip-adapter-faceid_sdxl_lora.safetensors" | "ip-adapter-faceid_sdxl.bin" | "ip-adapter-faceid-plus_sd15_lora.safetensors" | "ip-adapter-faceid-plus_sd15.bin" | "ip-adapter-faceid-plusv2_sd15_lora.safetensors" | "ip-adapter-faceid-plusv2_sd15.bin" | "ip-adapter-faceid-plusv2_sdxl_lora.safetensors" | "ip-adapter-faceid-plusv2_sdxl.bin" | "ip-adapter-faceid-portrait_sd15.bin" | "ip-adapter-full-face_sd15.safetensors" | "ip-adapter-plus_sd15.safetensors" | "ip-adapter-plus_sdxl_vit-h.safetensors" | "ip-adapter-plus-face_sd15.safetensors" | "ip-adapter-plus-face_sdxl_vit-h.safetensors" | "ip-adapter.bin" | "kl-f8-anime2" | "kohya-ss/ControlNet-LLLite: SDXL Canny Anime" | "LCM LoRA SD1.5" | "LCM LoRA SDXL" | "LCM LoRA SSD-1B" | "LDSR(Latent Diffusion Super Resolution)" | "LongAnimatediff/lt_long_mm_16_64_frames_v1.1.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "LongAnimatediff/lt_long_mm_16_64_frames.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "LongAnimatediff/lt_long_mm_32_frames.ckpt (ComfyUI-AnimateDiff-Evolved) (Updated path)" | "MobileSAM" | "monster-labs - Controlnet QR Code Monster v1 For SDXL" | "negative_hand Negative Embedding" | "OpenAI Consistency Decoder" | "orangemix.vae" | "person_yolov8m (segm)" | "person_yolov8n (segm)" | "person_yolov8s (segm)" | "pfg-novel-n10.pt" | "pfg-wd14-n10.pt" | "pfg-wd15beta2-n10.pt" | "photomaker-v1.bin" | "RealESRGAN x2" | "RealESRGAN x4" | "RestoreFormer" | "scrfd_10g_bnkps.onnx" | "sd_xl_base_1.0_0.9vae.safetensors" | "sd_xl_base_1.0.safetensors" | "sd_xl_offset_example-lora_1.0.safetensors" | "sd_xl_refiner_1.0_0.9vae.safetensors" | "SDXL Lightning LoRA (2step)" | "SDXL Lightning LoRA (4step)" | "SDXL Lightning LoRA (8step)" | "sdxl_vae.safetensors" | "SDXL-controlnet: OpenPose (v2)" | "SDXL-Turbo 1.0" | "SDXL-Turbo 1.0 (fp16)" | "seecoder anime v1.0" | "seecoder pa v1.0" | "seecoder v1.0" | "Segmind-Vega" | "Segmind-VegaRT - Latent Consistency Model (LCM) LoRA of Segmind-Vega" | "shape_predictor_68_face_landmarks.dat [Face Analysis]" | "skin_yolov8m-seg_400.pt (segm)" | "skin_yolov8n-seg_400.pt (segm)" | "skin_yolov8n-seg_800.pt (segm)" | "stabilityai/comfyui_checkpoints/stable_cascade_stage_b.safetensors" | "stabilityai/comfyui_checkpoints/stable_cascade_stage_c.safetensors" | "stabilityai/control-lora-canny-rank128.safetensors" | "stabilityai/control-lora-canny-rank256.safetensors" | "stabilityai/control-lora-depth-rank128.safetensors" | "stabilityai/control-lora-depth-rank256.safetensors" | "stabilityai/control-lora-recolor-rank128.safetensors" | "stabilityai/control-lora-recolor-rank256.safetensors" | "stabilityai/control-lora-sketch-rank128-metadata.safetensors" | "stabilityai/control-lora-sketch-rank256.safetensors" | "stabilityai/Stable Cascade: effnet_encoder.safetensors (VAE)" | "stabilityai/Stable Cascade: stage_a.safetensors (VAE)" | "stabilityai/Stable Cascade: stage_b_bf16.safetensors (UNET)" | "stabilityai/Stable Cascade: stage_b_lite.safetensors (UNET)" | "stabilityai/Stable Cascade: stage_b_lite.safetensors (UNET)" | "stabilityai/Stable Cascade: stage_b.safetensors (UNET)" | "stabilityai/Stable Cascade: stage_c_bf16.safetensors (UNET)" | "stabilityai/Stable Cascade: stage_c_lite.safetensors (UNET)" | "stabilityai/Stable Cascade: stage_c_lite.safetensors (UNET)" | "stabilityai/Stable Cascade: stage_c.safetensors (UNET)" | "stabilityai/Stable Cascade: text_encoder (CLIP)" | "stabilityai/Stable Zero123" | "stabilityai/stable-diffusion-x4-upscaler" | "Stable Video Diffusion Image-to-Video" | "Stable Video Diffusion Image-to-Video (XT)" | "stable-diffusion-xl-refiner-1.0" | "SUPIR-v0F.ckpt" | "SUPIR-v0Q.ckpt" | "T2I-Adapter (canny)" | "T2I-Adapter (color)" | "T2I-Adapter (depth)" | "T2I-Adapter (keypose)" | "T2I-Adapter (openpose)" | "T2I-Adapter (seg)" | "T2I-Adapter (sketch)" | "T2I-Adapter XL (canny)" | "T2I-Adapter XL (canny) FP16" | "T2I-Adapter XL (depth-midas)" | "T2I-Adapter XL (depth-midas) FP16" | "T2I-Adapter XL (depth-zoe)" | "T2I-Adapter XL (depth-zoe) FP16" | "T2I-Adapter XL (lineart)" | "T2I-Adapter XL (lineart) FP16" | "T2I-Adapter XL (openpose)" | "T2I-Adapter XL (sketch)" | "T2I-Adapter XL (sketch) FP16" | "T2I-Style model" | "TAESD Decoder" | "TAESD Encoder" | "TAESDXL Decoder" | "TAESDXL Encoder" | "TEMP_briaai_RMBG-1.4" | "TencentARC/motionctrl.pth" | "Theovercomer8's Contrast Fix (SD1.5)" | "Theovercomer8's Contrast Fix (SD2.1)" | "v1-5-pruned-emaonly.ckpt" | "v2-1_512-ema-pruned.safetensors" | "v2-1_768-ema-pruned.safetensors" | "vae-ft-mse-840000-ema-pruned" | "ViT-B SAM model" | "ViT-H SAM model" | "ViT-H SAM model" | "ViT-L SAM model" | "ViT-L SAM model" | "w600k_r50.onnx" | "Waifu Diffusion 1.5 Beta3 (fp16)" | "Waifu Diffusion 1.5 unCLIP model" | "yolov5l-face.pth" | "yolov5n-face.pth";

type KnownModel_SavePath = "vae_approx" | "default" | "upscale_models/ldsr" | "checkpoints/upscale" | "insightface" | "deepbump" | "face_restore" | "checkpoints/SVD" | "checkpoints/zero123" | "checkpoints/Stable-Cascade" | "vae/Stable-Cascade" | "unet/Stable-Cascade" | "clip/Stable-Cascade" | "checkpoints/SDXL-TURBO" | "unet/xl-inpaint-0.1" | "loras/SDXL-Lightning" | "vae/openai_consistency_decoder" | "loras/lcm/SD1.5" | "loras/lcm/SSD-1B" | "loras/lcm/SDXL" | "checkpoints/segmind-vega" | "loras/segmind-vega" | "controlnet/TemporalNet1XL" | "clip_vision" | "custom_nodes/ControlNet-LLLite-ComfyUI/models" | "sams" | "seecoders" | "ultralytics/bbox" | "ultralytics/segm" | "AnimateDiff" | "animatediff_models" | "animatediff_motion_lora" | "controlnet/SD1.5/animatediff" | "loras/SD1.5/animatediff" | "checkpoints/motionctrl" | "ipadapter" | "loras/ipadapter" | "custom_nodes/pfg-ComfyUI/models" | "facerestore_models" | "facedetection" | "photomaker" | "insightface/models/antelopev2" | "instantid" | "controlnet/instantid" | "custom_nodes/ComfyUI-YoloWorld-EfficientSAM" | "custom_nodes/ComfyUI_FaceAnalysis/dlib" | "instance_models/fuser_models" | "instance_models/positionnet_models" | "instance_models/scaleu_models" | "insightface/models/buffalo_l" | "blip" | "groundingdino" | "checkpoints/dynamicrafter" | "checkpoints/depthfm" | "checkpoints/SUPIR" | "custom_nodes/ComfyUI-BRIA_AI-RMBG/RMBG-1.4";

type KnownModel_Type = "TAESD" | "upscale" | "checkpoints" | "insightface" | "deepbump" | "face_restore" | "zero123" | "embeddings" | "VAE" | "unet" | "clip" | "lora" | "unclip" | "T2I-Adapter" | "T2I-Style" | "controlnet" | "clip_vision" | "gligen" | "sam" | "seecoder" | "Ultralytics" | "animatediff" | "motion lora" | "IP-Adapter" | "PFG" | "GFPGAN" | "CodeFormer" | "facexlib" | "photomaker" | "instantid" | "efficient_sam" | "Shape Predictor" | "Face Recognition" | "InstanceDiffusion" | "BLIP_MODEL" | "GroundingDINO";

type ModelInfo = {
    "name": KnownModel_Name;
    "type": KnownModel_Type;
    "base": KnownModel_Base;
    "save_path": KnownModel_SavePath;
    "description": string;
    "reference": string;
    "filename": string;
    "url": string;
};

/**
 * cushy-specific types to allow
 * 2024-03-13 rvion: TODO: split outside of this file, add a new type-level config for
 * project-specific FormNode metadata
 */
type Requirements = {
    type: 'modelInCivitai';
    civitaiURL: string;
    optional?: true;
    base: KnownModel_Base;
} | {
    type: 'modelInManager';
    modelName: KnownModel_Name;
    optional?: true;
} | {
    type: 'modelCustom';
    infos: ModelInfo;
    optional?: true;
} | {
    type: 'customNodesByTitle';
    title: KnownCustomNode_Title;
    optional?: true;
} | {
    type: 'customNodesByURI';
    uri: KnownCustomNode_File;
    optional?: true;
} | {
    type: 'customNodesByNameInCushy';
    nodeName: KnownCustomNode_CushyName;
    optional?: true;
};

/**
 * base widget type; default type-level param when we work with unknown widget
 * still allow to use SharedConfig properties, and SharedSerial properties
 * */
type $WidgetTypes = {
    $Type: string;
    $Config: SharedWidgetConfig<any>;
    $Serial: SharedWidgetSerial;
    $Value: any;
    $Widget: any;
};
interface IWidget<K extends $WidgetTypes = $WidgetTypes> extends IWidgetMixins {
    $Type: K['$Type']; /** type only properties; do not use directly; used to make typings good and fast */
    $Config: K['$Config']; /** type only properties; do not use directly; used to make typings good and fast */
    $Serial: K['$Serial']; /** type only properties; do not use directly; used to make typings good and fast */
    $Value: K['$Value']; /** type only properties; do not use directly; used to make typings good and fast */
    $Widget: K['$Widget']; /** type only properties; do not use directly; used to make typings good and fast */
    /** unique ID; each node in the form tree has one; persisted in serial */
    readonly id: string;
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
    /** if specified, override the default algorithm to decide if the widget should have borders */
    border?: boolean;
    /** if specified, override the default algorithm to decide if the widget should have label aligned */
    alignLabel?: boolean;
    /** if specified, override the default algorithm to decide if the widget container should have a background of base-100 */
    background?: boolean;
    /** default header UI */
    readonly DefaultHeaderUI: FC<{
        widget: K['$Widget'];
    }> | undefined;
    /** default body UI */
    readonly DefaultBodyUI: FC<{
        widget: K['$Widget'];
    }> | undefined;
}
/**
 * those properties will be dynamically injected in every widget
 * by calling `applyWidgetMixinV2(this)` in the constructor,
 * Before the makeAutoObservable(this) call. If you're adding a new
 * base widget, you're expected to do that too.
 */
type IWidgetMixins = {
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
};
/** 🔶 2024-03-13 rvion: TODO: remove that function; use ['$Value'] instead */
type GetWidgetResult<Widget> = Widget extends {
    $Value: infer Value;
} ? Value : never;
/** common properties we expect to see in a widget serial */
type SharedWidgetSerial = {
    id: string;
    type: string;
    collapsed?: boolean;
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
    /** The widget requirements */
    requirements?: Requirements[];
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

type BoardPosition = {
    x: number;
    y: number;
    z: number;
    width: number;
    height: number;
    depth: number;
    scaleX?: number;
    scaleY?: number;
    scaleZ?: number;
    fill?: string;
    rotation?: number;
    isSelected?: boolean;
    isDragging?: boolean;
    isResizing?: boolean;
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

type Widget_listExt_config<T extends Spec> = WidgetConfigFields<{
    element: T | ((p: {
        ix: number;
        width: number;
        height: number;
    }) => T);
    min?: number;
    max?: number;
    defaultLength?: number;
    initialPosition: (size: {
        ix: number;
        width: number;
        height: number;
    }) => Partial<BoardPosition>;
    mode?: 'regional' | 'timeline';
    width: number; /** default: 100 */
    height: number; /** default: 100 */
}, Widget_listExt_types<T>>;
type Widget_listExt_serial<T extends Spec> = WidgetSerialFields<{
    type: 'listExt';
    entries: {
        serial: T['$Serial'];
        shape: BoardPosition;
    }[];
    width: number;
    height: number;
}>;
type Widget_listExt_output<T extends Spec> = {
    items: {
        value: T['$Value'];
        position: BoardPosition;
    }[];
    width: number;
    height: number;
};
type Widget_listExt_types<T extends Spec> = {
    $Type: 'listExt';
    $Config: Widget_listExt_config<T>;
    $Serial: Widget_listExt_serial<T>;
    $Value: Widget_listExt_output<T>;
    $Widget: Widget_listExt<T>;
};
interface Widget_listExt<T extends Spec> extends Widget_listExt_types<T>, IWidgetMixins {
}
declare class Widget_listExt<T extends Spec> implements IWidget<Widget_listExt_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    config: Widget_listExt_config<T>;
    DefaultHeaderUI: (<T_1 extends Spec<IWidget<$WidgetTypes>>>(p: {
        widget: Widget_list<T_1> | Widget_listExt<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    DefaultBodyUI: (<T_1 extends Spec<IWidget<$WidgetTypes>>>(p: {
        widget: Widget_listExt<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    readonly id: string;
    readonly type: 'listExt';
    get width(): number;
    get height(): number;
    set width(next: number);
    set height(next: number);
    get sizeHelper(): ResolutionState;
    entries: {
        widget: T['$Widget'];
        shape: BoardPosition;
    }[];
    serial: Widget_listExt_serial<T>;
    get items(): T['$Widget'][];
    get length(): number;
    constructor(form: Form, parent: IWidget | null, config: Widget_listExt_config<T>, serial?: Widget_listExt_serial<T>);
    schemaAt: (ix: number) => T;
    collapseAllItems: () => void;
    expandAllItems: () => void;
    addItem(p?: {
        skipBump?: true;
    }): void;
    removeAllItems: () => void;
    removeItem: (item: T['$Widget']) => void;
    get value(): Widget_listExt_output<T>;
}

type Widget_list_config<T extends Spec> = WidgetConfigFields<{
    element: ((ix: number) => T) | T;
    min?: number;
    max?: number;
    defaultLength?: number;
}, Widget_list_types<T>>;
type Widget_list_serial<T extends Spec> = WidgetSerialFields<{
    type: 'list';
    items_: T['$Serial'][];
}>;
type Widget_list_value<T extends Spec> = T['$Value'][];
type Widget_list_types<T extends Spec> = {
    $Type: 'list';
    $Config: Widget_list_config<T>;
    $Serial: Widget_list_serial<T>;
    $Value: Widget_list_value<T>;
    $Widget: Widget_list<T>;
};
interface Widget_list<T extends Spec> extends Widget_list_types<T>, IWidgetMixins {
}
declare class Widget_list<T extends Spec> implements IWidget<Widget_list_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    config: Widget_list_config<T>;
    DefaultHeaderUI: (<T_1 extends Spec<IWidget<$WidgetTypes>>>(p: {
        widget: Widget_list<T_1> | Widget_listExt<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    get DefaultBodyUI(): (<T_1 extends Spec<IWidget<$WidgetTypes>>>(p: {
        widget: Widget_list<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    readonly id: string;
    readonly type: 'list';
    get length(): number;
    items: T['$Widget'][];
    serial: Widget_list_serial<T>;
    background: boolean;
    findItemIndexContaining: (widget: IWidget) => number | null;
    schemaAt: (ix: number) => T;
    constructor(form: Form, parent: IWidget | null, config: Widget_list_config<T>, serial?: Widget_list_serial<T>);
    get value(): Widget_list_value<T>;
    collapseAllItems: () => void;
    expandAllItems: () => void;
    get errors(): string[];
    addItem(p?: {
        skipBump?: true;
    }): void;
    removeAllItems: () => void;
    removeItem: (item: T['$Widget']) => void;
    moveItem: (oldIndex: number, newIndex: number) => void;
}

type SchemaDict = {
    [key: string]: ISpec;
};
interface ISpec<W extends IWidget = IWidget> {
    $Widget: W;
    $Type: W['type'];
    $Config: W['$Config'];
    $Serial: W['$Serial'];
    $Value: W['$Value'];
    type: W['type'];
    config: W['$Config'];
}
declare class Spec<W extends IWidget = IWidget> {
    readonly type: W['type'];
    readonly config: W['$Config'];
    $Widget: W;
    $Type: W['type'];
    $Config: W['$Config'];
    $Serial: W['$Serial'];
    $Value: W['$Value'];
    constructor(type: W['type'], config: W['$Config']);
    /** wrap widget spec to list stuff */
    list: (config?: Omit<Widget_list_config<any>, 'element'>) => Spec<Widget_list<this>>;
    optional: <const T extends Spec<IWidget<$WidgetTypes>>>(startActive?: boolean) => Spec<Widget_optional<this>>;
    shared: (key: string) => Widget_shared<this>;
    /** clone the spec, and patch the cloned config to make it hidden */
    hidden: () => Spec<W>;
}

declare const getWidgetClass: <Type extends {
    $Type: string;
}>(widgetName: Type["$Type"]) => Type;
declare const registerWidgetClass: <T extends {
    $Type: string;
}>(type: T["$Type"], kls: new (...args: any[]) => T) => void;
declare const isWidgetOptional: (widget: any) => widget is Widget_optional<Spec<IWidget<$WidgetTypes>>>;
declare const isWidgetShared: (widget: any) => widget is Widget_shared<Spec<IWidget<$WidgetTypes>>>;
declare const isWidgetGroup: (widget: any) => widget is Widget_group<any>;

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

declare const ModalShellUI: react.FunctionComponent<{
    title?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}>;

type RevealPlacement = 'popup-sm' | 'popup-xs' | 'popup-lg' | 'top' | 'bottom' | 'right' | 'left' | 'bottomStart' | 'bottomEnd' | 'topStart' | 'topEnd' | 'leftStart' | 'leftEnd' | 'rightStart' | 'rightEnd' | 'auto' | 'autoVerticalStart' | 'autoVerticalEnd' | 'autoHorizontalStart' | 'autoHorizontalEnd' | `#${string}`;
declare const computePlacement: (placement: RevealPlacement, rect: DOMRect) => {
    top: number;
    left: number;
    transform?: string;
};

type RevealProps = {
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

declare const defaultShowDelay = 100;
declare const defaultHideDelay = 300;
declare class RevealState {
    p: RevealProps;
    static nextUID: number;
    static shared: {
        current: Maybe<RevealState>;
    };
    uid: number;
    constructor(p: RevealProps);
    inAnchor: boolean;
    inTooltip: boolean;
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
}

declare const useMemoLazy: <T extends unknown>(fn: () => T) => {
    uist: T | null;
    uist2(): T;
};
declare const RevealUI: react.FunctionComponent<RevealProps>;

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
    value?: number | undefined;
    name: string;
    disabled?: boolean | undefined;
    max?: number | undefined;
    onChange?: ((value: number) => void) | undefined;
}) => react_jsx_runtime.JSX.Element;
declare const Whisper: (p: {
    /** @deprecated */
    enterable?: boolean;
    /** @deprecated */
    placement?: string;
    speaker: ReactNode;
    children: ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const Speaker: (p: any) => react_jsx_runtime.JSX.Element;
declare const Popover: (p: any) => react_jsx_runtime.JSX.Element;
declare const Tooltip: (p: any) => react_jsx_runtime.JSX.Element;
declare const Modal: (p: any) => react_jsx_runtime.JSX.Element;
declare const ModalHeader: (p: any) => react_jsx_runtime.JSX.Element;
declare const ModalTitle: (p: any) => react_jsx_runtime.JSX.Element;
declare const ModalBody: (p: any) => react_jsx_runtime.JSX.Element;
declare const ModalFooter: (p: any) => react_jsx_runtime.JSX.Element;
declare const NavItem: (p: any) => react_jsx_runtime.JSX.Element;
declare const Menu: (p: any) => react_jsx_runtime.JSX.Element;
declare const MenuBar: (p: any) => react_jsx_runtime.JSX.Element;
declare const DropdownMenu: (p: any) => react_jsx_runtime.JSX.Element;
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
declare const RadioTile: (p: any) => react_jsx_runtime.JSX.Element;

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

declare const WidgetGroup_LineUI: react.FunctionComponent<{
    widget: Widget_group<any>;
}>;
declare const WidgetGroup_BlockUI: (<T extends SchemaDict>(p: {
    className?: string | undefined;
    widget: Widget_group<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};

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

declare const FormUI: react.FunctionComponent<{
    className?: string | undefined;
    form: Maybe<Form<any, any>>;
}>;

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

declare const applyWidgetMixinV2: (self: IWidget) => void;

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
    config: Widget_bool_config;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_bool;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    readonly type: 'bool';
    serial: Widget_bool_serial;
    setOn: () => boolean;
    setOff: () => boolean;
    toggle: () => boolean;
    readonly defaultValue: boolean;
    get isChanged(): boolean;
    reset: () => boolean;
    constructor(form: Form, parent: IWidget | null, config: Widget_bool_config, serial?: Widget_bool_serial);
    get value(): Widget_bool_value;
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
    config: Widget_button_config<K>;
    DefaultHeaderUI: (<K_1 extends unknown>(p: {
        widget: Widget_button<K_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    DefaultBodyUI: undefined;
    readonly id: string;
    readonly type: 'button';
    readonly serial: Widget_button_serial;
    constructor(form: Form, parent: IWidget | null, config: Widget_button_config<K>, serial?: Widget_button_serial);
    get value(): Widget_button_value;
    set value(next: boolean);
}

declare const WidgetInlineRunUI: (<K extends unknown>(p: {
    widget: Widget_button<K>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};

declare const toastSuccess: (msg: string) => react_toastify.Id;
declare const toastInfo: (msg: string) => react_toastify.Id;
declare const toastError: (msg: string) => void;

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
    options?: () => T[];
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
};
declare class AutoCompleteSelectState<T> {
    p: SelectProps<T>;
    constructor(p: SelectProps<T>);
    isMultiSelect: boolean;
    get options(): T[];
    searchQuery: string;
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
    readonly config: Widget_choices_config<T>;
    DefaultHeaderUI: (<T_1 extends SchemaDict>(p: {
        widget: Widget_choices<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    DefaultBodyUI: (<T_1 extends SchemaDict>(p: {
        widget: Widget_choices<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    background: boolean;
    readonly id: string;
    readonly type: 'choices';
    readonly expand: boolean;
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
    constructor(form: Form, parent: IWidget | null, config: Widget_choices_config<T>, serial?: Widget_choices_serial<T>);
    toggleBranch(branch: keyof T & string): void;
    disableBranch(branch: keyof T & string, p?: {
        skipBump?: boolean;
    }): void;
    enableBranch(branch: keyof T & string, p?: {
        skipBump?: boolean;
    }): void;
    /** results, but only for active branches */
    get value(): Widget_choices_value<T>;
}

declare const WidgetChoices_HeaderUI: (<T extends SchemaDict>(p: {
    widget: Widget_choices<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};
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
    readonly config: Widget_color_config;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_color;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    readonly type: 'color';
    readonly defaultValue: string;
    get isChanged(): boolean;
    reset: () => string;
    serial: Widget_color_serial;
    constructor(form: Form, parent: IWidget | null, config: Widget_color_config, serial?: Widget_color_serial);
    get value(): Widget_color_value;
    set value(next: Widget_color_value);
}

declare const WidgetColorUI: react.FunctionComponent<{
    widget: Widget_color;
}>;

declare const ListControlsUI: react.FunctionComponent<{
    widget: {
        addItem(): void;
        removeAllItems(): void;
        expandAllItems(): void;
        collapseAllItems(): void;
        items: unknown[];
        config: {
            max?: number;
            min?: number;
        };
    };
}>;

declare const WidgetList_LineUI: (<T extends Spec<IWidget<$WidgetTypes>>>(p: {
    widget: Widget_list<T> | Widget_listExt<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};
declare const WidgetList_BodyUI: (<T extends Spec<IWidget<$WidgetTypes>>>(p: {
    widget: Widget_list<T>;
}) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};
declare const ListItemCollapseBtnUI: react.FunctionComponent<{
    widget: IWidget;
}>;

type Widget_markdown_config = WidgetConfigFields<{
    markdown: string | ((formRoot: Widget_group<any>) => string);
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
    config: Widget_markdown_config;
    get DefaultHeaderUI(): react.FunctionComponent<{
        widget: Widget_markdown;
    }> | undefined;
    get DefaultBodyUI(): react.FunctionComponent<{
        widget: Widget_markdown;
    }> | undefined;
    get alignLabel(): false | undefined;
    readonly id: string;
    readonly type: 'markdown';
    readonly serial: Widget_markdown_serial;
    get markdown(): string;
    constructor(form: Form, parent: IWidget | null, config: Widget_markdown_config, serial?: Widget_markdown_serial);
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
    config: Widget_matrix_config;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_matrix;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    readonly type: 'matrix';
    readonly serial: Widget_matrix_serial;
    rows: string[];
    cols: string[];
    alignLabel: boolean;
    constructor(form: Form, parent: IWidget | null, config: Widget_matrix_config, serial?: Widget_matrix_serial);
    get value(): Widget_matrix_value;
    private sep;
    private store;
    private key;
    get allCells(): Widget_matrix_cell[];
    UPDATE: () => void;
    get RESULT(): Widget_matrix_cell[];
    get firstValue(): boolean;
    setAll: (value: boolean) => void;
    setRow: (row: string, val: boolean) => void;
    setCol: (col: string, val: boolean) => void;
    get: (row: string, col: string) => Widget_matrix_cell;
    set: (row: string, col: string, value: boolean) => void;
}

declare const WidgetMatrixUI: react.FunctionComponent<{
    widget: Widget_matrix;
}>;

declare const parseFloatNoRoundingErr: (str: string | number, maxDigitsAfterDot?: number) => number;

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
    readonly config: Widget_number_config;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_number;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    readonly type: 'number';
    readonly forceSnap: boolean;
    serial: Widget_number_serial;
    readonly defaultValue: number;
    get isChanged(): boolean;
    reset: () => void;
    constructor(form: Form, parent: IWidget | null, config: Widget_number_config, serial?: Widget_number_serial);
    set value(next: Widget_number_value);
    get value(): Widget_number_value;
}

declare const WidgetNumberUI: react.FunctionComponent<{
    widget: Widget_number;
}>;

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
    config: Widget_seed_config;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_seed;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    readonly type: 'seed';
    readonly serial: Widget_seed_serial;
    setToFixed: (val?: number) => void;
    setToRandomize: () => void;
    setValue: (val: number) => void;
    constructor(form: Form, parent: IWidget | null, config: Widget_seed_config, serial?: Widget_seed_serial);
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
    choices: T[] | ((formRoot: Widget_group<any>, self: Widget_selectOne<T>) => T[]);
    appearance?: 'select' | 'tab';
}, Widget_selectOne_types<T>>;
type Widget_selectOne_serial<T extends BaseSelectEntry> = WidgetSerialFields<{
    type: 'selectOne';
    query: string;
    val: T;
}>;
type Widget_selectOne_output<T extends BaseSelectEntry> = T;
type Widget_selectOne_types<T extends BaseSelectEntry> = {
    $Type: 'selectOne';
    $Config: Widget_selectOne_config<T>;
    $Serial: Widget_selectOne_serial<T>;
    $Value: Widget_selectOne_output<T>;
    $Widget: Widget_selectOne<T>;
};
interface Widget_selectOne<T> extends Widget_selectOne_types<T>, IWidgetMixins {
}
declare class Widget_selectOne<T extends BaseSelectEntry> implements IWidget<Widget_selectOne_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    config: Widget_selectOne_config<T>;
    DefaultHeaderUI: (<T_1 extends BaseSelectEntry>(p: {
        widget: Widget_selectOne<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    DefaultBodyUI: undefined;
    readonly id: string;
    readonly type: 'selectOne';
    readonly serial: Widget_selectOne_serial<T>;
    get errors(): Maybe<string>;
    get choices(): T[];
    constructor(form: Form, parent: IWidget | null, config: Widget_selectOne_config<T>, serial?: Widget_selectOne_serial<T>);
    set value(next: Widget_selectOne_output<T>);
    get value(): Widget_selectOne_output<T>;
}

type Widget_selectMany_config<T extends BaseSelectEntry> = WidgetConfigFields<{
    default?: T[];
    choices: T[] | ((formRoot: Maybe<Widget_group<any>>) => T[]);
    appearance?: 'select' | 'tab';
}, Widget_selectMany_types<T>>;
type Widget_selectMany_serial<T extends BaseSelectEntry> = WidgetSerialFields<{
    type: 'selectMany';
    query: string;
    values: T[];
}>;
type Widget_selectMany_output<T extends BaseSelectEntry> = T[];
type Widget_selectMany_types<T extends BaseSelectEntry> = {
    $Type: 'selectMany';
    $Config: Widget_selectMany_config<T>;
    $Serial: Widget_selectMany_serial<T>;
    $Value: Widget_selectMany_output<T>;
    $Widget: Widget_selectMany<T>;
};
interface Widget_selectMany<T extends BaseSelectEntry> extends Widget_selectMany_types<T>, IWidgetMixins {
}
declare class Widget_selectMany<T extends BaseSelectEntry> implements IWidget<Widget_selectMany_types<T>> {
    readonly form: Form;
    readonly parent: IWidget | null;
    config: Widget_selectMany_config<T>;
    DefaultHeaderUI: (<T_1 extends BaseSelectEntry>(p: {
        widget: Widget_selectMany<T_1>;
    }) => react_jsx_runtime.JSX.Element) & {
        displayName: string;
    };
    DefaultBodyUI: undefined;
    readonly id: string;
    readonly type: 'selectMany';
    readonly serial: Widget_selectMany_serial<T>;
    get choices(): T[];
    get errors(): Maybe<string[]>;
    constructor(form: Form, parent: IWidget | null, config: Widget_selectMany_config<T>, serial?: Widget_selectMany_serial<T>);
    /** un-select given item */
    removeItem: (item: T) => void;
    /** select given item */
    addItem: (item: T) => void;
    /** select item if item was not selected, un-select if item was selected */
    toggleItem: (item: T) => void;
    get value(): Widget_selectMany_output<T>;
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

type Widget_size_config = WidgetConfigFields<{
    default?: CushySizeByRatio;
    min?: number;
    max?: number;
    step?: number;
}, Widget_size_types>;
type Widget_size_serial = WidgetSerialFields<CushySize>;
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
    config: Widget_size_config;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_size;
    }>;
    DefaultBodyUI: react.FunctionComponent<{
        widget: Widget_size;
    }>;
    get width(): number;
    get height(): number;
    set width(next: number);
    set height(next: number);
    get sizeHelper(): ResolutionState;
    readonly id: string;
    readonly type: 'size';
    readonly serial: Widget_size_serial;
    constructor(form: Form, parent: IWidget | null, config: Widget_size_config, serial?: Widget_size_serial);
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
type Widget_spacer_config = WidgetConfigFields<{}, Widget_spacer_types>;
type Widget_spacer_serial = WidgetSerialFields<{
    type: 'spacer';
}>;
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
    config: Widget_spacer_config;
    DefaultHeaderUI: react.FunctionComponent<{
        widget: Widget_spacer;
    }>;
    DefaultBodyUI: undefined;
    readonly id: string;
    readonly type: 'spacer';
    serial: Widget_spacer_serial;
    constructor(form: Form, parent: IWidget | null, config: Widget_spacer_config, serial?: Widget_spacer_serial);
    get value(): boolean;
    set value(val: boolean);
}

declare const WidgetSpacerUI: react.FunctionComponent<{
    widget: Widget_spacer;
}>;

type Widget_string_config = WidgetConfigFields<{
    default?: string;
    textarea?: boolean;
    placeHolder?: string;
    inputType?: 'text' | 'password' | 'email' | 'tel' | 'url' | 'time' | 'date' | 'datetime-local' | 'color';
}, Widget_string_types>;
type Widget_string_serial = WidgetSerialFields<{
    type: 'str';
    val?: string;
}>;
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
    readonly config: Widget_string_config;
    get DefaultHeaderUI(): react.FunctionComponent<{
        widget: Widget_string;
    }>;
    get DefaultBodyUI(): react.FunctionComponent<{
        widget: Widget_string;
    }> | undefined;
    readonly border = false;
    readonly id: string;
    readonly type: 'str';
    inputValue: string;
    setInputValue: (next: string) => string;
    isEditing: boolean;
    setEditing: (next: boolean) => boolean;
    serial: Widget_string_serial;
    readonly defaultValue: string;
    get isChanged(): boolean;
    reset: () => void;
    constructor(form: Form, parent: IWidget | null, config: Widget_string_config, serial?: Widget_string_serial);
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

declare class FormBuilder_Loco implements IFormBuilder {
    form: Form<SchemaDict, FormBuilder_Loco>;
    /** (@internal) don't call this yourself */
    constructor(form: Form<SchemaDict, FormBuilder_Loco>);
    time: (config?: Widget_string_config) => Spec<Widget_string>;
    date: (config?: Widget_string_config) => Spec<Widget_string>;
    datetime: (config?: Widget_string_config) => Spec<Widget_string>;
    password: (config?: Widget_string_config) => Spec<Widget_string>;
    email: (config?: Widget_string_config) => Spec<Widget_string>;
    url: (config?: Widget_string_config) => Spec<Widget_string>;
    string: (config?: Widget_string_config) => Spec<Widget_string>;
    text: (config?: Widget_string_config) => Spec<Widget_string>;
    textarea: (config?: Widget_string_config) => Spec<Widget_string>;
    boolean: (config?: Widget_bool_config) => Spec<Widget_bool>;
    bool: (config?: Widget_bool_config) => Spec<Widget_bool>;
    size: (config?: Widget_size_config) => Spec<Widget_size>;
    spacer: (config?: Widget_spacer_config) => Spec<Widget_spacer>;
    seed: (config?: Widget_seed_config) => Spec<Widget_seed>;
    color: (config?: Widget_color_config) => Spec<Widget_color>;
    colorV2: (config?: Widget_string_config) => Spec<Widget_string>;
    matrix: (config: Widget_matrix_config) => Spec<Widget_matrix>;
    button: <K>(config: Widget_button_config) => Spec<Widget_button<K>>;
    /** variants: `header` */
    markdown: (config: Widget_markdown_config | string) => Spec<Widget_markdown>;
    /** [markdown variant]: inline=true, label=false */
    header: (config: Widget_markdown_config | string) => Spec<Widget_markdown>;
    int: (config?: Omit<Widget_number_config, 'mode'>) => Spec<Widget_number>;
    /** [number variant] precent = mode=int, default=100, step=10, min=1, max=100, suffix='%', */
    percent: (config?: Omit<Widget_number_config, 'mode'>) => Spec<Widget_number>;
    float: (config?: Omit<Widget_number_config, 'mode'>) => Spec<Widget_number>;
    number: (config?: Omit<Widget_number_config, 'mode'>) => Spec<Widget_number>;
    list: <const T extends Spec<IWidget<$WidgetTypes>>>(config: Widget_list_config<T>) => Spec<Widget_list<T>>;
    selectOneV2: (p: string[]) => Spec<Widget_selectOne<BaseSelectEntry>>;
    selectOne: <const T extends BaseSelectEntry>(config: Widget_selectOne_config<T>) => Spec<Widget_selectOne<T>>;
    selectMany: <const T extends BaseSelectEntry>(config: Widget_selectMany_config<T>) => Spec<Widget_selectMany<T>>;
    /** see also: `fields` for a more practical api */
    group: <const T extends SchemaDict>(config?: Widget_group_config<T>) => Spec<Widget_group<T>>;
    fields: <const T extends SchemaDict>(fields: T, config?: Omit<Widget_group_config<T>, "items">) => Spec<Widget_group<T>>;
    choice: <const T extends {
        [key: string]: Spec<IWidget<$WidgetTypes>>;
    }>(config: Omit<Widget_choices_config<T>, "multi">) => Spec<Widget_choices<T>>;
    choices: <const T extends {
        [key: string]: Spec<IWidget<$WidgetTypes>>;
    }>(config: Omit<Widget_choices_config<T>, "multi">) => Spec<Widget_choices<T>>;
    ok: <const T extends SchemaDict>(config?: Widget_group_config<T>) => Spec<Widget_group<T>>;
    /** simple choice alternative api */
    tabs: <const T extends {
        [key: string]: Spec<IWidget<$WidgetTypes>>;
    }>(items: T, config?: Omit<Widget_choices_config<T>, "items" | "multi">) => Spec<Widget_choices<T>>;
    optional: <const T extends Spec<IWidget<$WidgetTypes>>>(p: Widget_optional_config<T>) => Spec<Widget_optional<T>>;
    llmModel: (p?: {
        default?: OpenRouter_Models;
    }) => Spec<Widget_selectOne<{
        id: OpenRouter_Models;
        label: string;
    }>>;
    /**
     * Calling this function will mount and instanciate the subform right away
     * Subform will be register in the root form `group`, using `__${key}__` as the key
     * This is a core abstraction that enables features like
     *  - mountting a widget at several places in the form
     *  - recursive forms
     *  - dynamic widgets depending on other widgets values
     * */
    shared: <W extends Spec<IWidget<$WidgetTypes>>>(key: string, unmounted: W) => Widget_shared<W>;
    private wrapOptional;
    _FIX_INDENTATION: (str: TemplateStringsArray) => string;
    /** (@internal); */ _cache: {
        count: number;
    };
    /** (@internal) advanced way to restore form state. used internally */
    _HYDRATE: <T extends ISpec<IWidget<$WidgetTypes>>>(parent: IWidget | null, unmounted: T, serial: any | null) => T["$Widget"];
}
declare const LocoFormManager: FormManager<FormBuilder_Loco>;

export { ASSERT_ARRAY, ASSERT_EQUAL, ASSERT_STRING, AnimatedSizeUI, AspectLockButtonUI, AspectRatioSquareUI, type BaseSelectEntry, Button, DropdownMenu, ErrorBoundaryFallback, Form, FormBuilder_Loco, FormHelpTextUI, FormManager, type FormProperties, FormUI, GlobalFormCtx, type IFormBuilder, type ISpec, Input, InputBoolUI, InputNumberBase, InputNumberUI, type InstructType, JsonViewUI, ListControlsUI, ListItemCollapseBtnUI, Loader, LocoFormManager, MarkdownUI, Menu, MenuBar, Message, MessageErrorUI, MessageInfoUI, MessageWarningUI, Modal, ModalBody, ModalFooter, ModalHeader, ModalShellUI, ModalTitle, MultiCascader, NavItem, type OopenRouter_ModelInfo, Panel, Popover, ProgressLine, Radio, RadioTile, Rate, ResolutionState, type RevealPlacement, RevealState, RevealUI, type SchemaDict, SelectPicker, SelectPopupUI, SelectUI, type SizeAble, Slider, SpacerUI, Speaker, Spec, type TabPositionConfig, Tag, TagPicker, Toggle, Tooltip, Tree, Whisper, WidgetBoolUI, WidgetChoices_BodyUI, WidgetChoices_HeaderUI, WidgetChoices_SelectHeaderUI, WidgetColorUI, WidgetGroup_BlockUI, WidgetGroup_LineUI, WidgetInlineRunUI, WidgetList_BodyUI, WidgetList_LineUI, WidgetMardownUI, WidgetMatrixUI, WidgetNumberUI, WidgetSeedUI, WidgetSelectManyUI, WidgetSelectMany_SelectUI, WidgetSelectMany_TabUI, WidgetSelectOneUI, WidgetSelectOne_SelectUI, WidgetSelectOne_TabUI, WidgetSizeX_LineUI, WidgetSpacerUI, WidgetString_HeaderUI, WidgetString_TextareaBodyUI, WidgetString_TextareaHeaderUI, WidgetTooltipUI, WidgetWithLabelUI, Widget_ToggleUI, Widget_bool, type Widget_bool_config, type Widget_bool_serial, type Widget_bool_types, type Widget_bool_value, Widget_button, type Widget_button_config, type Widget_button_context, type Widget_button_serial, type Widget_button_types, type Widget_button_value, Widget_choices, type Widget_choices_config, type Widget_choices_serial, type Widget_choices_types, type Widget_choices_value, Widget_color, type Widget_color_config, type Widget_color_serial, type Widget_color_types, type Widget_color_value, Widget_group, type Widget_group_config, type Widget_group_serial, type Widget_group_types, type Widget_group_value, Widget_list, type Widget_list_config, type Widget_list_serial, type Widget_list_types, type Widget_list_value, Widget_markdown, type Widget_markdown_config, type Widget_markdown_serial, type Widget_markdown_types, type Widget_markdown_value, Widget_matrix, type Widget_matrix_cell, type Widget_matrix_config, type Widget_matrix_serial, type Widget_matrix_types, type Widget_matrix_value, Widget_number, type Widget_number_config, type Widget_number_serial, type Widget_number_types, type Widget_number_value, Widget_optional, type Widget_optional_config, type Widget_optional_serial, type Widget_optional_types, type Widget_optional_value, Widget_seed, type Widget_seed_config, type Widget_seed_serial, type Widget_seed_types, type Widget_seed_value, Widget_selectMany, type Widget_selectMany_config, type Widget_selectMany_output, type Widget_selectMany_serial, type Widget_selectMany_types, Widget_selectOne, type Widget_selectOne_config, type Widget_selectOne_output, type Widget_selectOne_serial, type Widget_selectOne_types, Widget_shared, type Widget_shared_config, type Widget_shared_serial, type Widget_shared_types, type Widget_shared_value, Widget_size, type Widget_size_config, type Widget_size_serial, type Widget_size_types, type Widget_size_value, Widget_spacer, type Widget_spacer_config, type Widget_spacer_serial, type Widget_spacer_types, type Widget_spacer_value, Widget_string, type Widget_string_config, type Widget_string_serial, type Widget_string_types, type Widget_string_value, WigetSizeXUI, WigetSize_BlockUI, WigetSize_LineUI, _FIX_INDENTATION, applyWidgetMixinV2, asSTRING_orCrash, bang, computePlacement, debounce, defaultHideDelay, defaultShowDelay, exhaust, getActualWidgetToDisplay, getBorderStatusForWidget, getCurrentForm_IMPL, getIfWidgetIsCollapsible, getIfWidgetNeedAlignedLabel, getWidgetClass, isWidgetGroup, isWidgetOptional, isWidgetShared, makeLabelFromFieldName, normalizeText, openRouterInfos, parseFloatNoRoundingErr, registerWidgetClass, runWithGlobalForm, searchMatches, toastError, toastInfo, toastSuccess, unaccent, useMemoLazy, useSizeOf };
