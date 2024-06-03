// src/controls/FormManager.ts
import { useMemo as useMemo3 } from "react";

// src/controls/context/runWithGlobalForm.ts
import { nanoid } from "nanoid";
var GlobalFormCtx = class {
  constructor() {
    this.id = nanoid();
    this.currentForm = null;
  }
};
var globalCtx = new GlobalFormCtx();
globalThis.globalCtx = globalCtx;
var runWithGlobalForm = (form, f) => {
  if (globalCtx.currentForm === form)
    return f();
  const prev = globalCtx.currentForm;
  globalCtx.currentForm = form;
  const res = f();
  globalCtx.currentForm = prev;
  return res;
};
var getCurrentForm_IMPL = () => {
  if (globalCtx.currentForm == null) {
    console.log(`[\u{1F459}] `, globalCtx);
    debugger;
    throw new Error(`No form in context !`);
  }
  return globalCtx.currentForm;
};

// src/controls/Form.ts
import { action, isObservable, makeAutoObservable as makeAutoObservable3, observable as observable4, toJS } from "mobx";
import { nanoid as nanoid2 } from "nanoid";
import { createElement as createElement2 } from "react";

// src/panels/Panel_Gallery/FormAsDropdownConfigUI.tsx
import { observer as observer8 } from "mobx-react-lite";

// src/controls/FormUI.tsx
import { observer as observer5 } from "mobx-react-lite";

// src/rsuite/button/Button.tsx
import { makeAutoObservable, observable as observable2, runInAction } from "mobx";
import { observer as observer2 } from "mobx-react-lite";
import { useEffect, useMemo } from "react";

// src/rsuite/frame/Frame.tsx
import { observer } from "mobx-react-lite";
import { forwardRef, useContext } from "react";

// src/icons/iconHelpers.tsx
import * as icons2 from "@mdi/js";
import { Icon } from "@mdi/react";

// src/icons/icons.ts
import * as icons from "@mdi/js";
var myCustomIcons = {
  cdiTest: "M 2.40,7.20 A 20,20 0,0,1 12.00,7.20 A 20,20 0,0,1 21.60,7.20 Q 21.60,14.40 12.00,21.60 Q 2.40,14.40 2.40,7.20 z"
};
var allIcons = {
  ...icons,
  ...myCustomIcons
};

// src/utils/custom-jsx/jsx-runtime.js
import { jsx as jsx_, jsxs as jsxs_ } from "react/jsx-runtime";
import { Fragment } from "react/jsx-runtime";
var joinCls = (tw) => {
  if (typeof tw === "string")
    return tw;
  if (Array.isArray(tw)) {
    const out = [];
    for (const arg of tw) {
      if (arg == null)
        continue;
      if (typeof arg === "string")
        out.push(arg);
      if (typeof arg === "object") {
        for (const key of Object.keys(arg)) {
          if (arg[key])
            out.push(key);
        }
      }
    }
    return out.join(" ");
  }
  return "";
};
function jsx(type, props, key) {
  if (props.tw == null)
    return jsx_(type, props, key);
  const { tw, className, ...rest } = props;
  if (className)
    return jsx_(type, { ...rest, className: `${className} ${joinCls(tw)}` }, key);
  return jsx_(type, { ...rest, className: joinCls(tw) }, key);
}
function jsxs(type, props, key) {
  if (props.tw == null)
    return jsxs_(type, props, key);
  const { tw, className, ...rest } = props;
  if (className)
    return jsxs_(type, { ...rest, className: `${className} ${joinCls(tw)}` }, key);
  return jsxs_(type, { ...rest, className: joinCls(tw) }, key);
}

// src/icons/iconHelpers.tsx
var Ikon = new Proxy({}, {
  get(target, key) {
    if (key in target)
      return target[key];
    return target[key] = (p) => /* @__PURE__ */ jsx(Icon, { path: allIcons[key], size: "1.1em", ...p });
  }
});
var IkonOf = function IkonOf_({ name, ...p }) {
  return /* @__PURE__ */ jsx(Icon, { path: allIcons[name], size: "1.1em", ...p });
};

// src/controls/utils/clamp.ts
var clamp = (v, min, max) => Math.min(Math.max(v, min), max);
var clampOpt = (v, min, max) => {
  if (v == null)
    return min ?? 0;
  if (min == null && max == null)
    return v;
  if (min == null)
    return Math.min(v, max);
  if (max == null)
    return Math.max(v, min);
  return Math.min(Math.max(v, min), max);
};

// src/rsuite/kolor/getLCHFromString.tsx
import Color from "colorjs.io";
function getLCHFromString(str) {
  try {
    const color = new Color(str);
    const [l, c, h] = color.oklch;
    return {
      lightness: l,
      chroma: c,
      hue: isNaN(h) ? 0 : h
    };
  } catch (e) {
    console.error(`[\u{1F534}] getLCHFromString FAILURE (string is: "${str}")`);
    return { lightness: 0.5, chroma: 0.1, hue: 0 };
  }
}

// src/rsuite/box/BoxNormalized.tsx
function extractNormalizeBox(box) {
  return {
    base: normalizeBoxKolor(box.base),
    hover: normalizeBoxKolor(box.hover),
    // ----------
    text: normalizeBoxKolor(box.text),
    textShadow: normalizeBoxKolor(box.textShadow),
    shadow: normalizeBoxKolor(box.shadow),
    border: normalizeBoxKolor(box.border)
  };
}
function normalizeBoxKolor(kolor) {
  if (kolor == null)
    return null;
  if (typeof kolor === "boolean")
    return { contrast: kolor ? (
      /* 0.2 */
      0.03
    ) : 0 };
  if (typeof kolor === "number")
    return { contrast: clamp(kolor / 100, 0, 1) };
  if (typeof kolor === "string")
    return getLCHFromString(kolor);
  return kolor;
}

// src/rsuite/theme/CSSVar.tsx
import { computed, makeObservable, observable } from "mobx";
var NumberVar = class {
  constructor(name, value_) {
    this.name = name;
    this.value_ = value_;
    makeObservable(this, { value_: observable, value: computed });
  }
  get value() {
    return this.value_ instanceof Function ? this.value_() : this.value_;
  }
  toString() {
    return `var(--${this.name})`;
  }
};
function getNum(a, def) {
  if (a == null)
    return def;
  return typeof a === "number" ? a : a.value;
}

// src/rsuite/kolor/applyRelative.tsx
var applyKolorToOKLCH = (a, b) => {
  if (b == null)
    return a;
  const lightness = getNum(b.lightness) ?? _autoContrast(a.lightness, getNum(b.contrast, 0));
  const chroma = getNum(b.chroma) ?? a.chroma * getNum(b.chromaBlend, 1);
  const hue = getNum(b.hue) ?? a.hue + getNum(b.hueShift, 0);
  return { lightness, chroma: clamp(chroma, 0, 0.4), hue };
};
function _autoContrast(lightness, contrast) {
  const start = lightness;
  const dir = Math.sign(0.5 - lightness - 1e-5);
  const final = start + dir * contrast;
  return clamp(final, 0, 1);
}

// src/rsuite/kolor/overrideKolor.tsx
var overrideKolor = (a, b) => {
  if (a == null && b == null)
    return null;
  if (a == null)
    return b;
  if (b == null)
    return a;
  let out = {};
  if (b.lightness != null)
    out.lightness = b.lightness;
  else if (b.contrast != null)
    out.contrast = b.contrast;
  else if (a.lightness != null)
    out.lightness = a.lightness;
  else if (a.contrast != null)
    out.contrast = a.contrast;
  if (b.chroma != null)
    out.chroma = b.chroma;
  else if (b.chromaBlend != null)
    out.chromaBlend = b.chromaBlend;
  else if (a.chroma != null)
    out.chroma = a.chroma;
  else if (a.chromaBlend != null)
    out.chromaBlend = a.chromaBlend;
  if (b.hue != null)
    out.hue = b.hue;
  else if (b.hueShift != null)
    out.hueShift = b.hueShift;
  else if (a.hue != null)
    out.hue = a.hue;
  else if (a.hueShift != null)
    out.hueShift = a.hueShift;
  return out;
};

// src/rsuite/box/compileBoxClassName.tsx
var applyBoxToCtx = (ctx, box) => {
  const nextBase = applyKolorToOKLCH(ctx.base, box.base);
  const nextBaseH = applyKolorToOKLCH(nextBase, box.hover);
  const lightness = nextBase.lightness;
  return {
    dir: ctx.dir === 1 && lightness > 0.7 ? -1 : ctx.dir === -1 && lightness < 0.45 ? 1 : ctx.dir,
    base: nextBase,
    baseH: nextBaseH,
    text: overrideKolor(ctx.text, box.text)
  };
};
var hashKolor = (k) => {
  let out = [];
  if (k.lightness)
    out.push(`l=${k.lightness}`);
  else if (k.contrast)
    out.push(`l->${k.contrast}`);
  if (k.chroma)
    out.push(`c=${k.chroma}`);
  else if (k.chromaBlend)
    out.push(`c*${k.chromaBlend}`);
  if (k.hue)
    out.push(`h=${k.hue}`);
  else if (k.hueShift)
    out.push(`h->${k.hueShift}`);
  return `(${out.join(",")})`;
};

// src/rsuite/box/CurrentStyleCtx.tsx
import { createContext } from "react";
var CurrentStyleCtx = createContext({
  base: { lightness: 0.1, chroma: 0.05, hue: 0 },
  baseH: { lightness: 0.1, chroma: 0.05, hue: 0 },
  text: { contrast: 1, chromaBlend: 0, hueShift: 0 },
  dir: 1
  /**
   * if we want to handle that though CSS, it HAS to always be present
   * so we can seamlessly switch to it, when any part of the tree becomes hovered;
   *
   * potential problems
   * 🔶 it may not handle properly Reveals:
   *       => 2024-06-03 rvion: I think we should be good to go to force override
   *          the revealed content context to the base non-hovered color in every
   *          situation; should be the safest option to assumem hover must be
   *          computed from the last DOM root only
   */
});

// src/rsuite/button/usePressLogic.ts
var draggedElement = null;
var startingState = false;
var isDraggingListener = (ev) => {
  if (ev.button == 0) {
    draggedElement = null;
    window.removeEventListener("mouseup", isDraggingListener, true);
  }
};
var usePressLogic = (p, value) => {
  if (p.onClick == null)
    return {
      onMouseDown: p.onMouseDown,
      onMouseEnter: p.onMouseEnter
    };
  return {
    onMouseDown: (ev) => {
      if (ev.button == 0) {
        p.onMouseDown?.(ev);
        p.onClick?.(ev);
        draggedElement = ev.currentTarget;
        startingState = !value;
        window.addEventListener("mouseup", isDraggingListener, true);
      }
    },
    onMouseEnter: (ev) => {
      if (startingState === value)
        return;
      if (draggedElement != null)
        p.onClick?.(ev);
    }
  };
};

// src/rsuite/kolor/compileKolorToCSSExpression.tsx
var compileKolorToCSSExpression = (from, kolor) => {
  const l = kolor.lightness != null ? kolor.lightness : kolor.contrast ? `calc(l + ${kolor.contrast} * var(--DIR))` : "l";
  const c = kolor.chroma != null ? kolor.chroma : kolor.chromaBlend ? `calc(c * ${kolor.chromaBlend})` : "c";
  const h = kolor.hue != null ? kolor.hue : kolor.hueShift ? `calc(l + ${kolor.hueShift})` : "h";
  return `oklch(from var(--${from}) ${l} ${c} ${h})`;
};

// src/rsuite/kolor/formatOKLCH.tsx
function formatOKLCH(col) {
  const l = clamp(col.lightness, 1e-4, 0.9999).toFixed(3);
  const c = col.chroma.toFixed(3);
  const h = col.hue.toFixed(3);
  return `oklch(${l} ${c} ${h})`;
}

// src/rsuite/tinyCSS/compileOrRetrieveClassName.tsx
var knownRules = /* @__PURE__ */ new Set();
var hasRule = (selector) => knownRules.has(selector);
function addRule(selector, block = "") {
  const styleSheet = getStyleElement().sheet;
  const rules = styleSheet.cssRules;
  if (rules == null)
    throw new Error("\u274C no rules");
  console.log(`[\u{1F3DB}\uFE0F] add ${knownRules.size}th rule (no check)`, selector, knownRules.has(selector));
  knownRules.add(selector);
  const index = styleSheet.insertRule(`${selector} {${block}}`, styleSheet.cssRules.length);
  return styleSheet.cssRules[index];
}
var _styleElement = null;
function getStyleElement() {
  if (_styleElement != null)
    return _styleElement;
  if (_styleElement) {
    _styleElement = _styleElement;
  } else {
    _styleElement = _styleElement ?? document.createElement("style");
    _styleElement.title = "dynamic-theme-css";
    document.head.appendChild(_styleElement);
  }
  return _styleElement;
}

// src/utils/misc/exhaust.ts
var exhaust = (x) => x;

// src/rsuite/frame/FrameSize.tsx
function getClassNameForSize(p) {
  if (p.square) {
    if (p.size === "input")
      return `h-input`;
    if (p.size === "xs")
      return "w-6 h-6";
    if (p.size === "sm")
      return "w-8 h-8";
    if (p.size === "md")
      return "w-10 h-10";
    if (p.size === "lg")
      return "w-12 h-12";
    if (p.size === "xl")
      return "w-14 h-14";
    if (p.size == null)
      return;
    exhaust(p.size);
  } else {
    if (p.size === "input")
      return `w-input h-input`;
    if (p.size === "xs")
      return "text-xs px-0.5 py-0.5 line-height-[1.1em]";
    if (p.size === "sm")
      return "text-sm px-1   py-1   line-height-[1.1em]";
    if (p.size === "md")
      return "        px-2   py-1   line-height-[1.1em]";
    if (p.size === "lg")
      return "text-lg px-4   py-2   line-height-[1.1em]";
    if (p.size === "xl")
      return "text-xl px-8   py-8   line-height-[1.1em]";
    if (p.size == null)
      return;
    exhaust(p.size);
  }
  return "";
}

// src/rsuite/frame/FrameTemplates.ts
var frame_ghost = extractNormalizeBox({
  textShadow: 100,
  border: 10,
  base: 0
});
var frame_subtle = extractNormalizeBox({
  textShadow: 100,
  border: 0.05,
  base: 0
});
var frame_default = extractNormalizeBox({
  textShadow: 100,
  border: 0.25,
  base: 0.2
});
var frame_primary = extractNormalizeBox({
  textShadow: 100,
  base: { contrast: 0.2, chroma: 0.1 },
  border: 0.1
});
var frame_secondary = extractNormalizeBox({
  border: 0.3,
  base: { contrast: 0.3, chroma: 0.2, hueShift: 180 }
});
var frames = {
  ghost: frame_ghost,
  subtle: frame_subtle,
  default: frame_default,
  primary: frame_primary,
  secondary: frame_secondary
};

// src/rsuite/frame/Frame.tsx
var Frame = observer(
  forwardRef(function Frame_(p, ref) {
    const {
      active,
      disabled,
      // built-in state & style modifiers
      icon,
      suffixIcon,
      loading,
      // addons
      expand,
      square,
      /* inline, */
      size,
      // size
      look,
      // templates
      base,
      hover,
      border,
      text,
      textShadow,
      shadow,
      // box stuff
      onMouseDown,
      onMouseEnter,
      onClick,
      triggerOnPress,
      style,
      className,
      ...rest
    } = p;
    const box = extractNormalizeBox(p);
    if (look != null) {
      const template = frames[look];
      if (template.base)
        box.base = overrideKolor(template.base, box.base);
      if (template.border)
        box.border = overrideKolor(template.border, box.border);
      if (template.text)
        box.border = overrideKolor(template.text, box.text);
    }
    const isDisabled = disabled || false;
    if (isDisabled) {
      box.text = { contrast: 0.1 };
      box.base = { contrast: 0 };
      box.border = null;
    }
    if (active) {
      box.border = { contrast: 0.5 };
      box.text = { contrast: 0.9 };
    }
    const prevCtx = useContext(CurrentStyleCtx);
    const nextCtx = applyBoxToCtx(prevCtx, box);
    const variables = {
      "--KLR": formatOKLCH(nextCtx.base),
      "--KLRH": formatOKLCH(nextCtx.baseH),
      "--DIR": nextCtx.dir?.toString()
      // === -1 ? -1 : 1,
      // '--PREV_BASE_L': prevCtx.base.lightness, // === -1 ? -1 : 1,
      // '--NEXT_BASE_L': nextCtx.base.lightness, // === -1 ? -1 : 1,
    };
    const classes = [];
    const boxText = box.text ?? prevCtx.text;
    if (boxText) {
      const clsName = "text" + hashKolor(boxText);
      const selector = `.${CSS.escape(clsName)}`;
      if (!hasRule(selector))
        addRule(selector, `color: ${compileKolorToCSSExpression("KLR", boxText)};`);
      classes.push(clsName);
    }
    if (box.textShadow) {
      const clsName = "textShadow" + hashKolor(box.textShadow);
      const selector = `.${CSS.escape(clsName)}`;
      if (!hasRule(selector))
        addRule(selector, `text-shadow: 0px 0px 2px ${compileKolorToCSSExpression("KLR", box.textShadow)};`);
      classes.push(clsName);
    }
    if (box.border) {
      const clsName = "border" + hashKolor(box.border);
      const selector = `.${CSS.escape(clsName)}`;
      if (!hasRule(selector))
        addRule(selector, `border: 1px solid ${compileKolorToCSSExpression("KLR", box.border)};`);
      classes.push(clsName);
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ...rest,
        ref,
        tw: [
          //
          "BOX",
          look && `box-${look}`,
          getClassNameForSize(p),
          expand && "flex-1",
          // inline && 'inline-flex',
          ...classes,
          className
        ],
        style: { ...style, ...variables },
        ...rest,
        ...triggerOnPress != null ? usePressLogic({ onMouseDown, onMouseEnter, onClick }, triggerOnPress.startingState) : { onMouseDown, onMouseEnter, onClick },
        children: /* @__PURE__ */ jsxs(CurrentStyleCtx.Provider, { value: nextCtx, children: [
          icon && /* @__PURE__ */ jsx(IkonOf, { tw: "pointer-events-none", name: icon }),
          p.children,
          suffixIcon && /* @__PURE__ */ jsx(IkonOf, { tw: "pointer-events-none", name: suffixIcon }),
          loading && /* @__PURE__ */ jsx("div", { tw: "loading loading-spinner loading-sm" })
        ] })
      }
    );
  })
);

// src/rsuite/button/Button.tsx
var Button = observer2(function Button_(p) {
  const uist = useMemo(() => new ButtonState(p), []);
  runInAction(() => uist.props = p);
  useEffect(() => uist.release, []);
  const { size, square, look, ...rest } = p;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      size: size ?? "sm",
      look,
      base: p.subtle ? 0 : 5,
      border: 10,
      hover: p.disabled ? false : 3,
      active: uist.visuallyActive,
      loading: p.loading,
      tabIndex: p.tabIndex ?? -1,
      ...rest,
      tw: [
        "inline-flex",
        "font-semibold",
        "ui-button",
        "rounded-sm gap-2 items-center",
        p.disabled ? null : "cursor-pointer",
        "whitespace-nowrap",
        "justify-center"
      ],
      onMouseDown: uist.press
    }
  );
});
var ButtonState = class {
  constructor(props) {
    this.props = props;
    this.pressed = false;
    this.press = (_ev) => {
      this.pressed = true;
      window.addEventListener("pointerup", this.release, true);
    };
    this.release = () => {
      this.pressed = false;
      window.removeEventListener("pointerup", this.release, true);
    };
    makeAutoObservable(this, { props: observable2.ref });
  }
  get visuallyActive() {
    if (this.props.disabled)
      return false;
    return this.pressed ? !this.props.active : this.props.active;
  }
};

// src/rsuite/messages/MessageErrorUI.tsx
import { observer as observer4 } from "mobx-react-lite";

// src/rsuite/MarkdownUI.tsx
import { marked } from "marked";
import { observer as observer3 } from "mobx-react-lite";
var MarkdownUI = observer3(function MarkdownUI_(p) {
  if (p.markdown == null)
    return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: "_MD",
      className: p.className,
      dangerouslySetInnerHTML: { __html: marked(p.markdown) }
    }
  );
});

// src/rsuite/messages/MessageErrorUI.tsx
var MessageErrorUI = observer4(function MessageErrorUI_(p) {
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      base: { contrast: 0.05, hue: 220, chroma: 0.04 },
      tw: "virtualBorder p-1 rounded flex items-center gap-2",
      className: p.className,
      children: [
        /* @__PURE__ */ jsx(Ikon.mdiAlertBox, {}),
        p.title ? /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { tw: "text-xl w-full font-bold", children: p.title }),
          p.children,
          /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          p.children,
          /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
        ] })
      ]
    }
  );
});

// src/controls/FormUI.tsx
var FormUI = observer5(function FormUI_(p) {
  const form = p.form;
  if (form == null)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: `form is not yet initialized` });
  if (form.error)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: form.error });
  if (form.root == null)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: "form.root is null" });
  const submitAction = p.submitAction;
  return /* @__PURE__ */ jsxs(Frame, { ...p.theme, className: p.className, style: p.style, children: [
    form.root.ui(),
    p.submitButton ?? (submitAction == null ? null : submitAction === "confetti" ? /* @__PURE__ */ jsx("div", { tw: "flex", children: /* @__PURE__ */ jsx(
      Button,
      {
        look: "primary",
        tw: "ml-auto",
        onClick: async () => {
          const fire = (await import("https://cdn.skypack.dev/canvas-confetti")).default;
          fire({ zIndex: 1e5, particleCount: 100, spread: 70 });
        },
        children: p.submitLabel ?? "Submit"
      }
    ) }) : /* @__PURE__ */ jsx("div", { tw: "flex", children: /* @__PURE__ */ jsx(Button, { look: "primary", tw: "ml-auto", onClick: () => submitAction(form), children: p.submitLabel ?? "Submit" }) }))
  ] });
});

// src/rsuite/reveal/RevealUI.tsx
import { observer as observer7 } from "mobx-react-lite";
import { createElement, useEffect as useEffect2, useMemo as useMemo2, useRef } from "react";
import { createPortal } from "react-dom";

// src/rsuite/reveal/ModalShell.tsx
import { observer as observer6 } from "mobx-react-lite";
var ModalShellUI = observer6(function ModalShellUI_(p) {
  return /* @__PURE__ */ jsxs(Frame, { border: true, className: p.className, tw: ["animate-in fade-in", "p-4 shadow-xl"], onClick: (ev) => ev.stopPropagation(), children: [
    /* @__PURE__ */ jsxs("div", { tw: "flex", children: [
      /* @__PURE__ */ jsx("div", { tw: "text-xl", children: p.title }),
      /* @__PURE__ */ jsx("div", { tw: "flex-1" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          look: "subtle",
          square: true,
          icon: "mdiClose",
          onClick: (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            p.close();
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "divider my-0" }),
    /* @__PURE__ */ jsx("div", { tw: "_ModalBody", children: p.children }),
    /* @__PURE__ */ jsx("div", { tw: "_ModalFooter", children: p.footer })
  ] });
});

// src/rsuite/reveal/RevealCtx.ts
import { createContext as createContext2, useContext as useContext2 } from "react";
var RevealCtx = createContext2(null);
var useRevealOrNull = () => {
  const val = useContext2(RevealCtx);
  return val;
};

// src/rsuite/reveal/RevealStack.ts
var global_RevealStack = [];

// src/rsuite/reveal/RevealState.tsx
import { makeAutoObservable as makeAutoObservable2, observable as observable3 } from "mobx";

// src/rsuite/reveal/RevealPlacement.tsx
var computePlacement = (placement, rect) => {
  if (placement === "popup-xs")
    return { top: 0, left: 0 };
  if (placement === "popup-sm")
    return { top: 0, left: 0 };
  if (placement === "popup-lg")
    return { top: 0, left: 0 };
  if (placement === "autoHorizontalStart") {
    placement = rect.left + rect.width / 2 < window.innerWidth / 2 ? "rightStart" : "leftStart";
  }
  if (placement === "autoHorizontalEnd") {
    placement = rect.left + rect.width / 2 < window.innerWidth / 2 ? "rightEnd" : "leftEnd";
  }
  if (placement === "autoVerticalStart") {
    placement = rect.top + rect.height / 2 < window.innerHeight / 2 ? "bottomStart" : "topStart";
  }
  if (placement === "autoVerticalEnd") {
    placement = rect.top + rect.height / 2 < window.innerHeight / 2 ? "bottomEnd" : "topEnd";
  }
  if (placement === "auto") {
    placement = (() => {
      const top = rect.top;
      const bottom = window.innerHeight - rect.bottom;
      const left = rect.left;
      const right = window.innerWidth - rect.right;
      const minX = Math.min(left, right);
      const minY = Math.min(top, bottom);
      return minY == top ? minX == left ? "bottomStart" : "bottomEnd" : minX == left ? "topStart" : "topEnd";
    })();
  }
  if (placement == "bottomStart")
    return { top: rect.bottom, left: rect.left };
  if (placement == "bottom")
    return { top: rect.bottom, left: rect.left + rect.width / 2, transform: "translate(-50%)" };
  if (placement == "bottomEnd")
    return { top: rect.bottom, left: rect.right, transform: "translate(-100%)" };
  if (placement == "topStart")
    return { top: rect.top, left: rect.left, transform: "translateY(-100%)" };
  if (placement == "top")
    return { top: rect.top, left: rect.left + rect.width / 2, transform: "translate(-50%, -100%)" };
  if (placement == "topEnd")
    return { top: rect.top, left: rect.right, transform: "translate(-100%, -100%)" };
  if (placement == "leftStart")
    return { top: rect.top, left: rect.left, transform: "translateX(-100%)" };
  if (placement == "left")
    return { top: rect.top + rect.height / 2, left: rect.left, transform: "translate(-100%, -50%)" };
  if (placement == "leftEnd")
    return { top: rect.bottom, left: rect.left, transform: "translate(-100%, -100%)" };
  if (placement == "rightStart")
    return { top: rect.top, left: rect.right };
  if (placement == "right")
    return { top: rect.top + rect.height / 2, left: rect.right, transform: "translateY(-50%)" };
  if (placement == "rightEnd")
    return { top: rect.bottom, left: rect.right, transform: "translateY(-100%)" };
  return { top: rect.bottom, left: rect.left };
};

// src/rsuite/reveal/RevealState.tsx
var defaultShowDelay_whenRoot = 100;
var defaultHideDelay_whenRoot = 300;
var defaultShowDelay_whenNested = 0;
var defaultHideDelay_whenNested = 0;
var DEBUG_REVEAL = false;
var RevealStateLazy = class {
  constructor(p, parents) {
    this.p = p;
    this.parents = parents;
    this.uistOrNull = null;
    this.getUist = () => {
      if (this.uistOrNull)
        return this.uistOrNull;
      if (DEBUG_REVEAL)
        console.log(`[\u{1F499}] init RevealUI`);
      this.uistOrNull = new RevealState({ ...this.p }, this.parents);
      return this.uistOrNull;
    };
    makeAutoObservable2(this, { p: false });
  }
};
var RevealState = class _RevealState {
  constructor(p, parents) {
    this.p = p;
    this.parents = parents;
    this.uid = _RevealState.nextUID++;
    this.onMiddleClick = (ev) => {
    };
    this.onRightClick = (ev) => {
      this.onLeftClick(ev);
    };
    this.onLeftClick = (ev) => {
      const toc = this.triggerOnClick;
      if (!toc)
        return;
      ev.stopPropagation();
      if (this.visible)
        this.leaveAnchor();
      else
        this.enterAnchor();
    };
    // ------------------------------------------------
    this.inAnchor = false;
    this.inTooltip = false;
    this.inChildren = /* @__PURE__ */ new Set();
    // prettier-ignore
    // position --------------------------------------------
    this.tooltipPosition = { top: 0, left: 0 };
    this.setPosition = (rect) => {
      this.tooltipPosition = computePlacement(this.placement, rect);
    };
    // lock --------------------------------------------
    this._lock = false;
    this.toggleLock = () => {
      this._lock = !this._lock;
    };
    // anchor --------------------------------------------
    this.enterAnchorTimeoutId = null;
    this.leaveAnchorTimeoutId = null;
    this.onMouseEnterAnchor = () => {
      if (!this.triggerOnHover && !this.visible)
        return;
      if (_RevealState.shared.current)
        return this.enterAnchor();
      this._resetAllAnchorTimouts();
      this.enterAnchorTimeoutId = setTimeout(this.enterAnchor, this.showDelay);
    };
    this.onMouseLeaveAnchor = () => {
      if (this.placement.startsWith("popup"))
        return;
      this._resetAllAnchorTimouts();
      this.leaveAnchorTimeoutId = setTimeout(this.leaveAnchor, this.hideDelay);
    };
    // ---
    this.enterAnchor = () => {
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] ENTERING anchor ${this.ix}`);
      if (_RevealState.shared.current != this && !this.parents.includes(_RevealState.shared.current))
        _RevealState.shared.current?.close();
      _RevealState.shared.current = this;
      this._resetAllAnchorTimouts();
      this.inAnchor = true;
    };
    this.leaveAnchor = () => {
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] LEAVING anchor  ${this.ix}`);
      if (_RevealState.shared.current == this)
        _RevealState.shared.current = null;
      this._resetAllAnchorTimouts();
      this.inAnchor = false;
    };
    // ---
    this._resetAllAnchorTimouts = () => {
      this._resetAnchorEnterTimeout();
      this._resetAnchorLeaveTimeout();
    };
    this._resetAnchorEnterTimeout = () => {
      if (this.enterAnchorTimeoutId) {
        clearTimeout(this.enterAnchorTimeoutId);
        this.enterAnchorTimeoutId = null;
      }
    };
    this._resetAnchorLeaveTimeout = () => {
      if (this.leaveAnchorTimeoutId) {
        clearTimeout(this.leaveAnchorTimeoutId);
        this.leaveAnchorTimeoutId = null;
      }
    };
    // tooltip --------------------------------------------
    this.enterTooltipTimeoutId = null;
    this.leaveTooltipTimeoutId = null;
    this.onMouseEnterTooltip = () => {
      this._resetAllTooltipTimouts();
      this.enterTooltipTimeoutId = setTimeout(this.enterTooltip, this.showDelay);
    };
    this.onMouseLeaveTooltip = () => {
      if (this.placement.startsWith("popup"))
        return;
      this._resetAllTooltipTimouts();
      this.leaveTooltipTimeoutId = setTimeout(this.leaveTooltip, this.hideDelay);
    };
    // ---
    this.enterTooltip = () => {
      this._resetAllTooltipTimouts();
      for (const [ix, p] of this.parents.entries())
        p.enterChildren(ix);
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] enter tooltip of ${this.ix}`);
      this.inTooltip = true;
    };
    this.leaveTooltip = () => {
      this._resetAllTooltipTimouts();
      for (const [ix, p] of this.parents.entries())
        p.leaveChildren(ix);
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] leaving tooltip of ${this.ix}`);
      this.inTooltip = false;
    };
    // ---
    this._resetAllTooltipTimouts = () => {
      this._resetTooltipEnterTimeout();
      this._resetTooltipLeaveTimeout();
    };
    this._resetTooltipEnterTimeout = () => {
      if (this.enterTooltipTimeoutId) {
        clearTimeout(this.enterTooltipTimeoutId);
        this.enterTooltipTimeoutId = null;
      }
    };
    this._resetTooltipLeaveTimeout = () => {
      if (this.leaveTooltipTimeoutId) {
        clearTimeout(this.leaveTooltipTimeoutId);
        this.leaveTooltipTimeoutId = null;
      }
    };
    // --------------------
    this.enterChildren = (depth) => {
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] entering children (of ${this.ix}) ${depth}`);
      this.inChildren.add(depth);
    };
    this.leaveChildren = (depth) => {
      if (DEBUG_REVEAL)
        console.log(`[\u{1F920}] leaving children (of ${this.ix}) ${depth}`);
      this.inChildren.delete(depth);
    };
    this.contentFn = () => p.content(this);
    makeAutoObservable2(this, { uid: false, p: false });
  }
  static {
    this.nextUID = 1;
  }
  static {
    this.shared = observable3({ current: null }, { current: observable3.ref });
  }
  /** how deep in the reveal stack we are */
  get ix() {
    return this.parents.length;
  }
  // prettier-ignore
  get debugColor() {
    return {
      borderLeft: this.inAnchor ? `3px solid red` : void 0,
      borderTop: this.inTooltip ? `3px solid cyan` : void 0,
      borderBottom: this.inChildren.size > 0 ? `3px solid orange` : void 0
    };
  }
  /** toolip is visible if either inAnchor or inTooltip */
  get visible() {
    if (this._lock)
      return true;
    return this.inAnchor || this.inTooltip || this.inChildren.size > 0;
  }
  close() {
    this._resetAllAnchorTimouts();
    this._resetAllTooltipTimouts();
    this.inAnchor = false;
    this.inTooltip = false;
    this.inChildren.clear();
  }
  get triggerOnClick() {
    return this.p.trigger == null || this.p.trigger == "click" || //
    this.p.trigger == "clickAndHover";
  }
  get triggerOnHover() {
    return this.p.trigger == "hover" || //
    this.p.trigger == "clickAndHover";
  }
  get showDelay() {
    return this.p.showDelay ?? (this.ix ? defaultShowDelay_whenNested : defaultShowDelay_whenRoot);
  }
  get hideDelay() {
    return this.p.hideDelay ?? (this.ix ? defaultHideDelay_whenNested : defaultHideDelay_whenRoot);
  }
  get placement() {
    return this.p.placement ?? "auto";
  }
  // UI --------------------------------------------
  get defaultCursor() {
    if (!this.triggerOnHover)
      return "cursor-pointer";
    return "cursor-help";
  }
};

// src/rsuite/reveal/RevealUI.tsx
var RevealUI = observer7(function RevealUI_(p) {
  const ref = useRef(null);
  const parents = useRevealOrNull()?.tower ?? [];
  const SELF = useMemo2(() => new RevealStateLazy(p, parents.map((p2) => p2.getUist())), []);
  const { uistOrNull, getUist: uist2 } = SELF;
  const nextTower = useMemo2(() => ({ tower: [...parents, SELF] }), []);
  useEffect2(() => {
    const x = uistOrNull;
    if (x == null)
      return;
    if (p.content !== x.p.content)
      x.contentFn = () => p.content(x);
    if (p.trigger !== x.p.trigger)
      x.p.trigger = p.trigger;
    if (p.placement !== x.p.placement)
      x.p.placement = p.placement;
    if (p.showDelay !== x.p.showDelay)
      x.p.showDelay = p.showDelay;
    if (p.hideDelay !== x.p.hideDelay)
      x.p.hideDelay = p.hideDelay;
  }, [p.content, p.trigger, p.placement, p.showDelay, p.hideDelay]);
  useEffect2(() => {
    if (uistOrNull?.visible && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      uistOrNull.setPosition(rect);
    }
  }, [uistOrNull?.visible]);
  const anchor = p.children;
  const tooltip = mkTooltip(uistOrNull);
  return /* @__PURE__ */ jsx(RevealCtx.Provider, { value: nextTower, children: /* @__PURE__ */ jsxs(
    "div",
    {
      tw: ["inline-flex", uistOrNull?.defaultCursor ?? "cursor-pointer"],
      className: p.className,
      ref,
      style: p.style,
      onContextMenu: (ev) => {
        if (ev.shiftKey) {
          uist2().toggleLock();
          ev.preventDefault();
          ev.stopPropagation();
        }
      },
      onClick: (ev) => uist2().onLeftClick(ev),
      onAuxClick: (ev) => {
        if (ev.button === 1)
          return uist2().onMiddleClick(ev);
        if (ev.button === 2)
          return uist2().onRightClick(ev);
      },
      onMouseEnter: () => uist2().onMouseEnterAnchor(),
      onMouseLeave: () => uist2().onMouseLeaveAnchor(),
      children: [
        anchor,
        tooltip
      ]
    }
  ) });
});
var mkTooltip = (uist) => {
  if (uist == null)
    return null;
  if (!uist?.visible)
    return null;
  const element = document.getElementById(
    uist.p.placement?.startsWith("#") ? uist.p.placement.slice(1) : "tooltip-root"
  );
  const pos = uist.tooltipPosition;
  const p = uist.p;
  const hiddenContent = createElement(uist.contentFn);
  const revealedContent = (
    // VIA PORTAL --------------------------------------------------------------------------------
    uist.placement.startsWith("#") ? /* @__PURE__ */ jsx(
      "div",
      {
        ref: (e) => {
          if (e == null)
            return global_RevealStack.filter((p2) => p2 !== uist);
          global_RevealStack.push(uist);
        },
        onKeyUp: (ev) => {
          if (ev.key === "Escape") {
            uist.close();
            ev.stopPropagation();
            ev.preventDefault();
          }
        },
        onClick: (ev) => {
          p.onClick?.(ev);
          uist.close();
          ev.stopPropagation();
          ev.preventDefault();
        },
        style: { zIndex: 99999999, backgroundColor: "#0000003d" },
        tw: "pointer-events-auto w-full h-full flex items-center justify-center z-50",
        children: hiddenContent
      }
    ) : (
      // VIA POPUP --------------------------------------------------------------------------------
      uist.placement.startsWith("popup") ? /* @__PURE__ */ jsx(
        "div",
        {
          ref: (e) => {
            if (e == null)
              return global_RevealStack.filter((p2) => p2 !== uist);
            global_RevealStack.push(uist);
          },
          onKeyUp: (ev) => {
            if (ev.key === "Escape") {
              uist.close();
              ev.stopPropagation();
              ev.preventDefault();
            }
          },
          onClick: (ev) => {
            p.onClick?.(ev);
            uist.close();
            ev.stopPropagation();
          },
          style: { zIndex: 99999999, backgroundColor: "#0000003d" },
          tw: "pointer-events-auto absolute w-full h-full flex items-center justify-center z-50",
          children: /* @__PURE__ */ jsx(
            ModalShellUI,
            {
              close: () => {
                uist.close();
              },
              title: p.title,
              children: hiddenContent
            }
          )
        }
      ) : (
        // VIA POPOVER --------------------------------------------------------------------------------
        /* @__PURE__ */ jsxs(
          Frame,
          {
            className: p.tooltipWrapperClassName,
            tw: ["_RevealUI shadow-xl pointer-events-auto"],
            onClick: (ev) => ev.stopPropagation(),
            onMouseEnter: uist.onMouseEnterTooltip,
            onMouseLeave: uist.onMouseLeaveTooltip,
            onContextMenu: uist.enterAnchor,
            style: {
              position: "absolute",
              zIndex: 99999999,
              top: pos.top ? `${pos.top}px` : void 0,
              bottom: pos.bottom ? `${pos.bottom}px` : void 0,
              left: pos.left ? `${pos.left}px` : void 0,
              right: pos.right ? `${pos.right}px` : void 0,
              transform: pos.transform
            },
            children: [
              p.title != null && /* @__PURE__ */ jsxs("div", { tw: "px-2", children: [
                /* @__PURE__ */ jsx("div", { tw: "py-0.5", children: p.title }),
                /* @__PURE__ */ jsx("div", { tw: "w-full rounded bg-neutral-content", style: { height: "1px" } })
              ] }),
              hiddenContent,
              uist._lock ? /* @__PURE__ */ jsxs("span", { tw: "opacity-50 italic text-sm flex gap-1 items-center justify-center", children: [
                /* @__PURE__ */ jsx(Ikon.mdiLock, {}),
                "shift+right-click to unlock"
              ] }) : null
            ]
          }
        )
      )
    )
  );
  return createPortal(revealedContent, element);
};

// src/panels/Panel_Gallery/FormAsDropdownConfigUI.tsx
var FormAsDropdownConfigUI = observer8(function FormAsDropdownConfigUI_(p) {
  return /* @__PURE__ */ jsx(
    RevealUI,
    {
      tw: "WIDGET-FIELD",
      title: p.title,
      content: () => /* @__PURE__ */ jsx("div", { style: { width: "500px" }, tw: "flex-shrink-0", children: /* @__PURE__ */ jsx(FormUI, { form: p.form }) }),
      children: /* @__PURE__ */ jsxs(
        Frame,
        {
          hover: true,
          tw: "flex px-1 w-full h-full items-center justify-center hover:brightness-125 border border-base-100",
          children: [
            /* @__PURE__ */ jsx(Ikon.mdiCog, {}),
            /* @__PURE__ */ jsx(Ikon.mdiChevronDown, {})
          ]
        }
      )
    }
  );
});

// src/utils/misc/debounce.ts
function debounce(func, delay, maxWait) {
  let timeoutId = null;
  let lastInvokeTime = Date.now();
  return (...args) => {
    const now = Date.now();
    const needInvoke = maxWait !== void 0 && now - lastInvokeTime >= maxWait;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (needInvoke) {
      func(...args);
      lastInvokeTime = now;
    } else {
      timeoutId = setTimeout(() => {
        func(...args);
        lastInvokeTime = Date.now();
      }, delay);
    }
  };
}

// src/controls/widgets/WidgetUI.DI.ts
var WidgetDI = {};
var registerWidgetClass = (type, kls) => {
  WidgetDI[type] = kls;
};
var isWidgetOptional = (widget) => widget.type === "optional";
var isWidgetShared = (widget) => widget.type === "shared";
var isWidgetGroup = (widget) => widget.type === "group";

// src/controls/Form.ts
var Form = class {
  constructor(manager, ui, formConfig) {
    this.manager = manager;
    this.ui = ui;
    this.formConfig = formConfig;
    this.uid = nanoid2();
    /** loading error  */
    this.error = null;
    /** shortcut to access the <FormUI /> component without having to import it first */
    this.FormUI = FormUI;
    /**
     * allow to quickly render the form in a react component
     * without having to import any component; usage:
     * | <div>{x.render()}</div>
     */
    this.render = (p = {}) => createElement2(FormUI, { form: this, ...p });
    /**
     * allow to quickly render the form in a dropdown button
     * without having to import any component; usage:
     * | <div>{x.renderAsConfigBtn()}</div>
     */
    this.renderAsConfigBtn = () => createElement2(FormAsDropdownConfigUI, { form: this });
    /** Out of Tree unmounted serials  */
    this.shared = {};
    // Change tracking ------------------------------------
    /** timestamp at which form value was last updated, or 0 when form still pristine */
    this.valueLastUpdatedAt = 0;
    /** timestamp at which form serial was last updated, or 0 when form still pristine */
    this.serialLastUpdatedAt = 0;
    this._onSerialChange = this.formConfig.onSerialChange ? debounce(this.formConfig.onSerialChange, 200) : null;
    this._onValueChange = this.formConfig.onValueChange ? debounce(this.formConfig.onValueChange, 5) : null;
    /** every widget node must call this function once it's value change */
    this.valueChanged = (widget) => {
      this.valueLastUpdatedAt = Date.now();
      this.serialChanged(widget);
      this._onValueChange?.(this);
    };
    this.knownShared = /* @__PURE__ */ new Map();
    /** every widget node must call this function once it's serial changed */
    this.serialChanged = (_widget) => {
      this.serialLastUpdatedAt = Date.now();
      this._onSerialChange?.(this);
    };
    this.ready = false;
    this.init = () => {
      console.log(`[\u{1F950}] Building form ${this.formConfig.name}`);
      const formBuilder = this.builder;
      try {
        let formSerial = this.formConfig.initialSerial?.();
        if (formSerial && !isObservable(formSerial))
          formSerial = observable4(formSerial);
        if (formSerial != null && Object.keys(formSerial).length === 0) {
          formSerial = null;
        }
        if (formSerial != null && //
        formSerial.type !== "FormSerial" && "values_" in formSerial) {
          console.log(`[\u{1F534}\u{1F534}\u{1F534}\u{1F534}\u{1F534}\u{1F534}\u{1F534}] `, toJS(formSerial));
          const oldSerial = formSerial;
          const oldsharedSerial = {};
          for (const [k, v] of Object.entries(oldSerial.values_)) {
            if (k.startsWith("__")) {
              oldsharedSerial[k.slice(2, -2)] = v;
              delete oldSerial.values_[k];
            }
          }
          formSerial = {
            name: this.formConfig.name,
            type: "FormSerial",
            root: formSerial,
            shared: oldsharedSerial,
            serialLastUpdatedAt: 0,
            valueLastUpdatedAt: 0
          };
          console.log(`[\u{1F534}] MIGRATED formSerial:`, JSON.stringify(formSerial, null, 3).slice(0, 800));
        }
        if (formSerial != null && formSerial.type !== "FormSerial") {
          throw new Error("\u274C INVALID form serial");
        }
        this.shared = formSerial?.shared || {};
        const spec = this.ui?.(formBuilder);
        const rootWidget = formBuilder._HYDRATE(null, spec, formSerial?.root);
        this.ready = true;
        this.error = null;
        return rootWidget;
      } catch (e) {
        console.error(`[\u{1F459}\u{1F534}] Building form ${this.formConfig.name} FAILED`, this);
        console.error(e);
        this.error = "invalid form definition";
        const spec = this.ui?.(formBuilder);
        return formBuilder._HYDRATE(null, spec, null);
      }
    };
    this.builder = manager.getBuilder(this);
    makeAutoObservable3(this, {
      //
      // builder: false,
      root: false,
      init: action
    });
  }
  get value() {
    return this.root.value;
  }
  get serial() {
    return {
      type: "FormSerial",
      name: this.formConfig.name,
      root: this.root.serial,
      shared: this.shared,
      serialLastUpdatedAt: this.serialLastUpdatedAt,
      valueLastUpdatedAt: this.valueLastUpdatedAt
    };
  }
  /** @deprecated ; only work when root is a Widget_group */
  get fields() {
    if (isWidgetGroup(this.root))
      return this.root.fields;
    throw new Error("\u{1F534} root is not a group");
  }
  // 🔴 👇 remove that
  get root() {
    const root = this.init();
    Object.defineProperty(this, "root", { value: root });
    return root;
  }
};

// src/controls/FormManager.ts
var FormManager = class {
  constructor(builderCtor) {
    this.builderCtor = builderCtor;
    this._builders = /* @__PURE__ */ new WeakMap();
    this.getBuilder = (form) => {
      const prev = this._builders.get(form);
      if (prev)
        return prev;
      const builder = new this.builderCtor(form);
      this._builders.set(form, builder);
      return builder;
    };
    /** LEGACY API; TYPES ARE COMPLICATED DUE TO MAINTAINING BACKWARD COMPAT */
    this.fields = (ui, formProperties = { name: "unnamed" }) => {
      const FN = (builder) => {
        return runWithGlobalForm(
          builder,
          () => builder.group({
            label: false,
            items: ui(builder),
            topLevel: true,
            collapsed: false
          })
        );
      };
      const form = new Form(this, FN, formProperties);
      return form;
    };
    /** simple alias to create a new Form */
    this.form = (ui, formProperties = { name: "unnamed" }) => {
      return new Form(this, ui, formProperties);
    };
    /** simple way to defined forms and in react components */
    this.use = (ui, formProperties = { name: "unnamed" }, deps = []) => {
      return useMemo3(() => {
        return new Form(this, ui, formProperties);
      }, deps);
    };
  }
};

// src/controls/SimpleFormBuilder.ts
import { makeAutoObservable as makeAutoObservable12, reaction as reaction2 } from "mobx";

// src/llm/OpenRouter_infos.ts
var openRouterInfos = {
  "openrouter/auto": {
    id: "openrouter/auto",
    name: "Auto (best for prompt)",
    pricing: { prompt: "-1", completion: "-1" },
    context_length: 128e3,
    architecture: { tokenizer: "Router", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: null
  },
  "mistralai/mistral-7b-instruct": {
    id: "mistralai/mistral-7b-instruct",
    name: "Mistral 7B Instruct",
    pricing: { prompt: "0", completion: "0" },
    context_length: 8192,
    architecture: { tokenizer: "Mistral", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "mistralai/mixtral-8x7b-instruct": {
    id: "mistralai/mixtral-8x7b-instruct",
    name: "Mistral 8x7b",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32e3,
    architecture: { tokenizer: "Mistral", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "mistralai/mistral-large": {
    id: "mistralai/mistral-large",
    name: "Mistral Large",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32e3,
    architecture: { tokenizer: "Mistral", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "huggingfaceh4/zephyr-7b-beta": {
    id: "huggingfaceh4/zephyr-7b-beta",
    name: "Hugging Face: Zephyr 7B",
    pricing: { prompt: "0", completion: "0" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "zephyr" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "openchat/openchat-7b": {
    id: "openchat/openchat-7b",
    name: "OpenChat 3.5",
    pricing: { prompt: "0", completion: "0" },
    context_length: 8192,
    architecture: { tokenizer: "Mistral", instruct_type: "openchat" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "undi95/toppy-m-7b": {
    id: "undi95/toppy-m-7b",
    name: "Toppy M 7B",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32768,
    architecture: { tokenizer: "Mistral", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 2048 },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "gryphe/mythomist-7b": {
    id: "gryphe/mythomist-7b",
    name: "MythoMist 7B",
    pricing: { prompt: "0", completion: "0" },
    context_length: 32768,
    architecture: { tokenizer: "Mistral", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 2048 },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "nousresearch/nous-capybara-34b": {
    id: "nousresearch/nous-capybara-34b",
    name: "Nous: Capybara 34B",
    pricing: { prompt: "0.000002", completion: "0.000002" },
    context_length: 32e3,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1569799", completion_tokens: "1569799" }
  },
  "jebcarter/psyfighter-13b": {
    id: "jebcarter/psyfighter-13b",
    name: "Psyfighter 13B",
    pricing: { prompt: "0.000001", completion: "0.000001" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "3139598" }
  },
  "nousresearch/nous-hermes-llama2-13b": {
    id: "nousresearch/nous-hermes-llama2-13b",
    name: "Nous: Hermes 13B",
    pricing: { prompt: "0.00000015", completion: "0.00000015" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "20930657", completion_tokens: "20930657" }
  },
  "phind/phind-codellama-34b": {
    id: "phind/phind-codellama-34b",
    name: "Phind: CodeLlama 34B v2",
    pricing: { prompt: "0.0000004", completion: "0.0000004" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "7848996", completion_tokens: "7848996" }
  },
  "intel/neural-chat-7b": {
    id: "intel/neural-chat-7b",
    name: "Neural Chat 7B v3.1",
    pricing: { prompt: "0.000005", completion: "0.000005" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "neural" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "627919", completion_tokens: "627919" }
  },
  "haotian-liu/llava-13b": {
    id: "haotian-liu/llava-13b",
    name: "Llava 13B",
    pricing: { prompt: "0.000005", completion: "0.000005" },
    context_length: 2048,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "627919", completion_tokens: "627919" }
  },
  "meta-llama/llama-2-13b-chat": {
    id: "meta-llama/llama-2-13b-chat",
    name: "Meta: Llama v2 13B Chat",
    pricing: { prompt: "0.0000002345", completion: "0.0000002345" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "13388480", completion_tokens: "13388480" }
  },
  "alpindale/goliath-120b": {
    id: "alpindale/goliath-120b",
    name: "Goliath 120B",
    pricing: { prompt: "0.00000703125", completion: "0.00000703125" },
    context_length: 6144,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "446520", completion_tokens: "446520" }
  },
  "lizpreciatior/lzlv-70b-fp16-hf": {
    id: "lizpreciatior/lzlv-70b-fp16-hf",
    name: "lzlv 70B",
    pricing: { prompt: "0.00000056", completion: "0.00000076" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "5606426", completion_tokens: "4131050" }
  },
  "openai/gpt-3.5-turbo": {
    id: "openai/gpt-3.5-turbo",
    name: "OpenAI: GPT-3.5 Turbo",
    pricing: { prompt: "0.000001", completion: "0.000002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "1569799" }
  },
  "openai/gpt-3.5-turbo-1106": {
    id: "openai/gpt-3.5-turbo-1106",
    name: "OpenAI: GPT-3.5 Turbo 16k (preview)",
    pricing: { prompt: "0.000001", completion: "0.000002" },
    context_length: 16385,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: 4096 },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "1569799" }
  },
  "openai/gpt-3.5-turbo-0301": {
    id: "openai/gpt-3.5-turbo-0301",
    name: "OpenAI: GPT-3.5 Turbo (older v0301)",
    pricing: { prompt: "0.000001", completion: "0.000002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3139598", completion_tokens: "1569799" }
  },
  "openai/gpt-3.5-turbo-16k": {
    id: "openai/gpt-3.5-turbo-16k",
    name: "OpenAI: GPT-3.5 Turbo 16k",
    pricing: { prompt: "0.000003", completion: "0.000004" },
    context_length: 16385,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1046532", completion_tokens: "784899" }
  },
  "openai/gpt-4-1106-preview": {
    id: "openai/gpt-4-1106-preview",
    name: "OpenAI: GPT-4 Turbo (preview)",
    pricing: { prompt: "0.00001", completion: "0.00003" },
    context_length: 128e3,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: 4096 },
    per_request_limits: { prompt_tokens: "313959", completion_tokens: "104653" }
  },
  "openai/gpt-4": {
    id: "openai/gpt-4",
    name: "OpenAI: GPT-4",
    pricing: { prompt: "0.00003", completion: "0.00006" },
    context_length: 8191,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "104653", completion_tokens: "52326" }
  },
  "openai/gpt-4-0314": {
    id: "openai/gpt-4-0314",
    name: "OpenAI: GPT-4 (older v0314)",
    pricing: { prompt: "0.00003", completion: "0.00006" },
    context_length: 8191,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "104653", completion_tokens: "52326" }
  },
  "openai/gpt-4-32k": {
    id: "openai/gpt-4-32k",
    name: "OpenAI: GPT-4 32k",
    pricing: { prompt: "0.00006", completion: "0.00012" },
    context_length: 32767,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "52326", completion_tokens: "26163" }
  },
  "openai/gpt-4-32k-0314": {
    id: "openai/gpt-4-32k-0314",
    name: "OpenAI: GPT-4 32k (older v0314)",
    pricing: { prompt: "0.00006", completion: "0.00012" },
    context_length: 32767,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "52326", completion_tokens: "26163" }
  },
  "openai/gpt-4-vision-preview": {
    id: "openai/gpt-4-vision-preview",
    name: "OpenAI: GPT-4 Vision (preview)",
    pricing: { prompt: "0.00001", completion: "0.00003" },
    context_length: 128e3,
    architecture: { tokenizer: "GPT", instruct_type: null },
    top_provider: { max_completion_tokens: 4096 },
    per_request_limits: { prompt_tokens: "313959", completion_tokens: "104653" }
  },
  "openai/text-davinci-002": {
    id: "openai/text-davinci-002",
    name: "OpenAI: Davinci 2",
    pricing: { prompt: "0.00002", completion: "0.00002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "156979", completion_tokens: "156979" }
  },
  "openai/gpt-3.5-turbo-instruct": {
    id: "openai/gpt-3.5-turbo-instruct",
    name: "OpenAI: GPT-3.5 Turbo Instruct",
    pricing: { prompt: "0.0000015", completion: "0.000002" },
    context_length: 4095,
    architecture: { tokenizer: "GPT", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "2093065", completion_tokens: "1569799" }
  },
  "google/palm-2-chat-bison": {
    id: "google/palm-2-chat-bison",
    name: "Google: PaLM 2 Chat",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 9216,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 1024 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "google/palm-2-codechat-bison": {
    id: "google/palm-2-codechat-bison",
    name: "Google: PaLM 2 Code Chat",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 7168,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 1024 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "google/palm-2-chat-bison-32k": {
    id: "google/palm-2-chat-bison-32k",
    name: "Google: PaLM 2 Chat 32k",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 32e3,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 8192 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "google/palm-2-codechat-bison-32k": {
    id: "google/palm-2-codechat-bison-32k",
    name: "Google: PaLM 2 Code Chat 32k",
    pricing: { prompt: "0.0000005", completion: "0.0000005" },
    context_length: 32e3,
    architecture: { tokenizer: "PaLM", instruct_type: null },
    top_provider: { max_completion_tokens: 8192 },
    per_request_limits: { prompt_tokens: "6279197", completion_tokens: "6279197" }
  },
  "perplexity/pplx-70b-online": {
    id: "perplexity/pplx-70b-online",
    name: "Perplexity: PPLX 70B Online",
    pricing: { prompt: "0", completion: "0.0000028" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "perplexity/pplx-7b-online": {
    id: "perplexity/pplx-7b-online",
    name: "Perplexity: PPLX 7B Online",
    pricing: { prompt: "0", completion: "0.00000028" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "Infinity", completion_tokens: "Infinity" }
  },
  "perplexity/pplx-7b-chat": {
    id: "perplexity/pplx-7b-chat",
    name: "Perplexity: PPLX 7B Chat",
    pricing: { prompt: "0.00000007", completion: "0.00000028" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "44851408", completion_tokens: "11212852" }
  },
  "perplexity/pplx-70b-chat": {
    id: "perplexity/pplx-70b-chat",
    name: "Perplexity: PPLX 70B Chat",
    pricing: { prompt: "0.0000007", completion: "0.0000028" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: null },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "4485140", completion_tokens: "1121285" }
  },
  "meta-llama/llama-2-70b-chat": {
    id: "meta-llama/llama-2-70b-chat",
    name: "Meta: Llama v2 70B Chat",
    pricing: { prompt: "0.0000007", completion: "0.00000095" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "4485140", completion_tokens: "3304840" }
  },
  "nousresearch/nous-hermes-llama2-70b": {
    id: "nousresearch/nous-hermes-llama2-70b",
    name: "Nous: Hermes 70B",
    pricing: { prompt: "0.0000009", completion: "0.0000009" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "3488442", completion_tokens: "3488442" }
  },
  "meta-llama/codellama-34b-instruct": {
    id: "meta-llama/codellama-34b-instruct",
    name: "Meta: CodeLlama 34B Instruct",
    pricing: { prompt: "0.00000035", completion: "0.0000014" },
    context_length: 16384,
    architecture: { tokenizer: "Llama2", instruct_type: "llama2" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "8970281", completion_tokens: "2242570" }
  },
  "jondurbin/airoboros-l2-70b": {
    id: "jondurbin/airoboros-l2-70b",
    name: "Airoboros 70B",
    pricing: { prompt: "0.0000007", completion: "0.00000095" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "airoboros" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "4485140", completion_tokens: "3304840" }
  },
  "migtissera/synthia-70b": {
    id: "migtissera/synthia-70b",
    name: "Synthia 70B",
    pricing: { prompt: "0.0000065625", completion: "0.0000065625" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "478415", completion_tokens: "478415" }
  },
  "open-orca/mistral-7b-openorca": {
    id: "open-orca/mistral-7b-openorca",
    name: "Mistral OpenOrca 7B",
    pricing: { prompt: "0.0000002", completion: "0.0000002" },
    context_length: 8192,
    architecture: { tokenizer: "Mistral", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "15697993", completion_tokens: "15697993" }
  },
  "teknium/openhermes-2-mistral-7b": {
    id: "teknium/openhermes-2-mistral-7b",
    name: "OpenHermes 2 Mistral 7B",
    pricing: { prompt: "0.0000002", completion: "0.0000002" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "15697993", completion_tokens: "15697993" }
  },
  "teknium/openhermes-2.5-mistral-7b": {
    id: "teknium/openhermes-2.5-mistral-7b",
    name: "OpenHermes 2.5 Mistral 7B",
    pricing: { prompt: "0.0000002", completion: "0.0000002" },
    context_length: 4096,
    architecture: { tokenizer: "Mistral", instruct_type: "gpt" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "15697993", completion_tokens: "15697993" }
  },
  "pygmalionai/mythalion-13b": {
    id: "pygmalionai/mythalion-13b",
    name: "Pygmalion: Mythalion 13B",
    pricing: { prompt: "0.000001125", completion: "0.000001125" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 250 },
    per_request_limits: { prompt_tokens: "2790754", completion_tokens: "2790754" }
  },
  "undi95/remm-slerp-l2-13b": {
    id: "undi95/remm-slerp-l2-13b",
    name: "ReMM SLERP 13B",
    pricing: { prompt: "0.000001125", completion: "0.000001125" },
    context_length: 6144,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 250 },
    per_request_limits: { prompt_tokens: "2790754", completion_tokens: "2790754" }
  },
  "xwin-lm/xwin-lm-70b": {
    id: "xwin-lm/xwin-lm-70b",
    name: "Xwin 70B",
    pricing: { prompt: "0.0000065625", completion: "0.0000065625" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "vicuna" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "478415", completion_tokens: "478415" }
  },
  "gryphe/mythomax-l2-13b-8k": {
    id: "gryphe/mythomax-l2-13b-8k",
    name: "MythoMax 13B 8k",
    pricing: { prompt: "0.000001125", completion: "0.000001125" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 250 },
    per_request_limits: { prompt_tokens: "2790754", completion_tokens: "2790754" }
  },
  "neversleep/noromaid-20b": {
    id: "neversleep/noromaid-20b",
    name: "Noromaid 20B",
    pricing: { prompt: "0.00000225", completion: "0.00000225" },
    context_length: 8192,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 300 },
    per_request_limits: { prompt_tokens: "1395377", completion_tokens: "1395377" }
  },
  "anthropic/claude-2": {
    id: "anthropic/claude-2",
    name: "Anthropic: Claude v2.1",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 2e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-2.0": {
    id: "anthropic/claude-2.0",
    name: "Anthropic: Claude v2.0",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-instant-v1": {
    id: "anthropic/claude-instant-v1",
    name: "Anthropic: Claude Instant v1",
    pricing: { prompt: "0.00000163", completion: "0.00000551" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1926134", completion_tokens: "569800" }
  },
  "anthropic/claude-v1": {
    id: "anthropic/claude-v1",
    name: "Anthropic: Claude v1",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 9e3,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-1.2": {
    id: "anthropic/claude-1.2",
    name: "Anthropic: Claude (older v1)",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 9e3,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-instant-v1-100k": {
    id: "anthropic/claude-instant-v1-100k",
    name: "Anthropic: Claude Instant 100k v1",
    pricing: { prompt: "0.00000163", completion: "0.00000551" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1926134", completion_tokens: "569800" }
  },
  "anthropic/claude-v1-100k": {
    id: "anthropic/claude-v1-100k",
    name: "Anthropic: Claude 100k v1",
    pricing: { prompt: "0.000008", completion: "0.000024" },
    context_length: 1e5,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "392449", completion_tokens: "130816" }
  },
  "anthropic/claude-instant-1.0": {
    id: "anthropic/claude-instant-1.0",
    name: "Anthropic: Claude Instant (older v1)",
    pricing: { prompt: "0.00000163", completion: "0.00000551" },
    context_length: 9e3,
    architecture: { tokenizer: "Claude", instruct_type: "claude" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "1926134", completion_tokens: "569800" }
  },
  "mancer/weaver": {
    id: "mancer/weaver",
    name: "Mancer: Weaver (alpha)",
    pricing: { prompt: "0.0000045", completion: "0.0000045" },
    context_length: 8e3,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: 350 },
    per_request_limits: { prompt_tokens: "697688", completion_tokens: "697688" }
  },
  "gryphe/mythomax-l2-13b": {
    id: "gryphe/mythomax-l2-13b",
    name: "MythoMax 13B",
    pricing: { prompt: "0.0000006", completion: "0.0000006" },
    context_length: 4096,
    architecture: { tokenizer: "Llama2", instruct_type: "alpaca" },
    top_provider: { max_completion_tokens: null },
    per_request_limits: { prompt_tokens: "5232664", completion_tokens: "5232664" }
  }
};

// src/controls/SimpleSpec.ts
import { makeObservable as makeObservable2 } from "mobx";
var SimpleSpec = class _SimpleSpec {
  constructor(type, config) {
    this.type = type;
    this.config = config;
    this.LabelExtraUI = (p) => null;
    // PubSub -----------------------------------------------------
    this.producers = [];
    this.reactions = [];
    // -----------------------------------------------------
    this.Make = (type, config) => new _SimpleSpec(type, config);
    /** wrap widget spec to list stuff */
    this.list = (config = {}) => new _SimpleSpec("list", {
      ...config,
      element: this
    });
    this.optional = (startActive = false) => new _SimpleSpec("optional", {
      widget: this,
      startActive,
      label: this.config.label,
      // requirements: this.config.requirements,
      startCollapsed: this.config.startCollapsed,
      collapsed: this.config.collapsed,
      border: this.config.border
    });
    this.shared = (key) => getCurrentForm_IMPL().shared(key, this);
    /** clone the spec, and patch the cloned config */
    this.withConfig = (config) => {
      const mergedConfig = { ...this.config, ...config };
      const cloned = new _SimpleSpec(this.type, mergedConfig);
      cloned.producers = this.producers;
      cloned.reactions = this.reactions;
      return cloned;
    };
    this.hidden = () => this.withConfig({ hidden: true });
    makeObservable2(this, { config: true });
  }
  publish(chan, produce) {
    this.producers.push({ chan, produce });
    return this;
  }
  subscribe(chan, effect) {
    return this.addReaction(
      (self) => self.consume(chan),
      (arg, self) => {
        if (arg == null)
          return;
        effect(arg, self);
      }
    );
  }
  addReaction(expr, effect) {
    this.reactions.push({ expr, effect });
    return this;
  }
};

// src/controls/widgets/bool/WidgetBool.tsx
import { computed as computed3, observable as observable8, runInAction as runInAction4 } from "mobx";
import { nanoid as nanoid6 } from "nanoid";

// src/controls/BaseWidget.tsx
import { observer as observer33 } from "mobx-react-lite";

// src/panels/libraryUI/tree/nodes/TreeWidget.tsx
import { makeAutoObservable as makeAutoObservable4 } from "mobx";
var TreeWidget = class {
  constructor(widgetWithKey) {
    this.widgetWithKey = widgetWithKey;
    /** packed with a bunch of sane default for now; we'll see if this is ever */
    // get icon() {
    //     const w = this.widget
    //     if (w.type === 'choices') return <Ikon.mdiCheckboxMultipleMarked />
    //     if (w.type === 'choice') return <Ikon.mdiCheckboxMarked />
    //     if (isWidgetGroup(w)) {
    //         if (Object.keys(w.fields).length === 0) return <Ikon.mdiCircle />
    //         return <Ikon.mdiFolder />
    //     }
    //     if (w.type === 'optional') return <Ikon.mdiCheckboxBlankOutline />
    //     if (w.type === 'list') return <Ikon.mdiFormatListBulleted />
    //     if (w.type === 'enum') return <Ikon.mdiFormatListBulletedSquare />
    //     if (w.type === 'markdown') return <Ikon.mdiFormatListBulletedSquare />
    //     if (isWidgetString(w)) {
    //         const it = w.config.inputType
    //         if (it === 'color') return <Ikon.mdiPalette />
    //         if (it === 'date') return <Ikon.mdiCalendar />
    //         if (it === 'datetime-local') return <Ikon.mdiCalendarClock />
    //         if (it === 'email') return <Ikon.mdiEmailOutline />
    //         if (it === 'password') return <Ikon.mdiLockOutline />
    //         if (it === 'tel') return <Ikon.mdiPhoneOutline />
    //         if (it === 'text') return <Ikon.mdiTextBoxOutline />
    //         if (it === 'time') return <Ikon.mdiClockOutline />
    //         if (it === 'url') return <Ikon.mdiWeb />
    //         return <Ikon.mdiTextBoxOutline />
    //     }
    //     if (w.type === 'number') return <Ikon.mdiNumeric />
    //     if (w.type === 'boolean') return <Ikon.mdiCheckboxBlankOutline />
    //     //
    //     return <Ikon.mdiBatteryUnknown tw='text-red-400' />
    //     // return <span className='material-symbols-outlined'>Draft</span>
    // }
    this.onPrimaryAction = (n) => {
    };
    this.children = () => {
      return this.widget.subWidgetsWithKeys.map((w) => w.widget.asTreeElement(w.key));
    };
    // extra = () => (
    //     <>
    //         {this.app?.isLoadedInMemory ? <span className='material-symbols-outlined text-green-500'>memory</span> : null}
    //         <TreeApp_BtnFavUI entry={this} />
    //     </>
    // )
    this.actions = [
      // {
      //     name: 'add Draft',
      //     icon: 'add',
      //     mode: 'small',
      //     onClick: (node) => {
      //         if (this.app == null) return
      //         this.app.createDraft()
      //         node.open()
      //     },
      // },
    ];
    makeAutoObservable4(this);
  }
  get widget() {
    return this.widgetWithKey.widget;
  }
  /** config label, or parent key */
  get label() {
    if (this.widget.config.label)
      return this.widget.config.label;
    return this.widgetWithKey.key;
  }
  get name() {
    return `${this.label} = ${this.widget.summary}`;
  }
  get isFolder() {
    return this.widget.subWidgets.length > 0;
  }
};

// src/utils/mobx-store-inheritance.ts
import { $mobx, isObservable as isObservable2, makeObservable as makeObservable3 } from "mobx";
var annotationsSymbol = Symbol();
var objectPrototype = Object.prototype;
var makeAutoObservableInheritance = (target, overrides, options) => {
  if (isObservable2(target)) {
    throw new Error("Target must not be observable");
  }
  let annotations = target[annotationsSymbol];
  if (!annotations) {
    annotations = {};
    let current = target;
    while (current && current !== objectPrototype) {
      Reflect.ownKeys(current).forEach((key) => {
        if (key === $mobx || key === "constructor")
          return;
        annotations[key] = !overrides ? true : key in overrides ? overrides[key] : true;
      });
      current = Object.getPrototypeOf(current);
    }
    const proto = Object.getPrototypeOf(target);
    if (proto && proto !== objectPrototype) {
      Object.defineProperty(proto, annotationsSymbol, { value: annotations });
    }
  } else {
    const tmp = {};
    for (const key in target) {
      if (annotations[key]) {
        tmp[key] = annotations[key];
      }
    }
    annotations = tmp;
  }
  return makeObservable3(target, annotations, options);
};

// src/controls/IWidget.ts
var isWidget = (x) => {
  return x != null && //
  typeof x === "object" && "$WidgetSym" in x && x.$WidgetSym === $WidgetSym;
};
var $WidgetSym = Symbol("Widget");

// src/controls/shared/getActualWidgetToDisplay.tsx
function getActualWidgetToDisplay(originalWidget) {
  if (isWidgetOptional(originalWidget))
    return getActualWidgetToDisplay(originalWidget.child);
  if (isWidgetShared(originalWidget))
    return getActualWidgetToDisplay(originalWidget.shared);
  return originalWidget;
}

// src/controls/shared/Widget_ToggleUI.tsx
import { observer as observer12 } from "mobx-react-lite";

// src/rsuite/checkbox/InputBoolUI.tsx
import { observer as observer11 } from "mobx-react-lite";
import { createElement as createElement3 } from "react";

// src/rsuite/checkbox/InputBoolCheckboxUI.tsx
import { observer as observer9 } from "mobx-react-lite";
var InputBoolCheckboxUI = observer9(function InputBoolCheckboxUI_(p) {
  const isActive = p.value ?? false;
  const label = p.text;
  const mode = p.mode ?? false;
  const chroma = isActive ? 0.08 : 0.01;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      style: p.style,
      className: p.className,
      disabled: p.disabled,
      hover: true,
      triggerOnPress: { startingState: isActive },
      expand: p.expand,
      tw: ["flex flex-row !select-none cursor-pointer"],
      onClick: (ev) => {
        if (!p.onValueChange)
          return;
        ev.stopPropagation();
        p.onValueChange(!isActive);
      },
      children: [
        /* @__PURE__ */ jsx(
          Frame,
          {
            icon: p.icon ?? (isActive ? "mdiCheckBold" : null),
            tw: ["!select-none object-contain WIDGET-FIELD", mode === "radio" ? "rounded-full" : "rounded-sm"],
            border: { contrast: 0.2, chroma },
            style: {
              width: "var(--input-height)"
              /* hacky */
            },
            base: { contrast: isActive ? 0.09 : 0, chroma },
            size: "sm",
            hover: true,
            ...p.box
          }
        ),
        label ? label : null
      ]
    }
  );
});

// src/rsuite/checkbox/InputBoolToggleButtonUI.tsx
import { observer as observer10 } from "mobx-react-lite";
var InputBoolToggleButtonUI = observer10(function InputBoolToggleButtonUI_(p) {
  const isActive = p.value ?? false;
  const expand = p.expand;
  const label = p.text;
  const chroma = isActive ? 0.08 : 0.02;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      tw: "WIDGET-FIELD !select-none cursor-pointer justify-center px-1 py-1 text-sm flex items-center",
      className: p.className,
      triggerOnPress: { startingState: isActive },
      look: "default",
      base: { contrast: isActive ? 0.09 : 0.05, chroma },
      border: isActive ? 20 : 0,
      hover: !p.disabled,
      expand,
      style: p.style,
      icon: p.icon,
      ...p.box,
      onClick: (ev) => {
        ev.stopPropagation();
        p.onValueChange?.(!isActive);
      },
      children: /* @__PURE__ */ jsx("p", { tw: "w-full text-center line-clamp-1", children: label })
    }
  );
});

// src/rsuite/checkbox/InputBoolUI.tsx
var InputBoolUI = observer11(function InputBoolUI_(p) {
  const display = p.display ?? "check";
  if (display === "check")
    return createElement3(InputBoolCheckboxUI, p);
  return createElement3(InputBoolToggleButtonUI, p);
});

// src/controls/shared/Widget_ToggleUI.tsx
var Widget_ToggleUI = observer12(function Widget_ToggleUI_(p) {
  if (!isWidgetOptional(p.widget))
    return null;
  const widget = p.widget;
  return /* @__PURE__ */ jsx(
    InputBoolUI,
    {
      className: p.className,
      value: widget.serial.active,
      expand: false,
      onValueChange: (value) => widget.setActive(value)
    }
  );
});

// src/controls/shared/WidgetErrorsUI.tsx
import { observer as observer13 } from "mobx-react-lite";
var WidgetErrorsUI = observer13(function WidgerErrorsUI_(p) {
  const widget = p.widget;
  if (widget.hasErrors === false)
    return null;
  return /* @__PURE__ */ jsx("div", { tw: "widget-error-ui", children: widget.errors.map((e, i) => /* @__PURE__ */ jsxs("div", { tw: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "error" }),
    e.message
  ] }, i)) });
});

// src/controls/shared/WidgetHeaderContainerUI.tsx
import { observer as observer14 } from "mobx-react-lite";
var isDragging = false;
var wasEnabled = false;
var isDraggingListener2 = (ev) => {
  if (ev.button == 0) {
    isDragging = false;
    window.removeEventListener("mouseup", isDraggingListener2, true);
  }
};
var WidgetHeaderContainerUI = observer14(function WidgetHeaderContainerUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "WIDGET-HEADER COLLAPSE-PASSTHROUGH",
      tw: ["flex items-center gap-0.5 select-none"],
      onMouseDown: (ev) => {
        if (ev.button != 0 || !widget.isCollapsible)
          return;
        const target = ev.target;
        if (!target.classList.contains("COLLAPSE-PASSTHROUGH"))
          return;
        isDragging = true;
        window.addEventListener("mouseup", isDraggingListener2, true);
        wasEnabled = !widget.serial.collapsed;
        widget.setCollapsed(wasEnabled);
      },
      onMouseMove: (ev) => {
        if (!isDragging || !widget.isCollapsible)
          return;
        widget.setCollapsed(wasEnabled);
      },
      children: p.children
    }
  );
});

// src/controls/shared/WidgetLabelCaretUI.tsx
import { observer as observer15 } from "mobx-react-lite";
var WidgetLabelCaretUI = observer15(function WidgetLabelCaretUI_(p) {
  if (!p.widget.isCollapsed && !p.widget.isCollapsible)
    return null;
  return /* @__PURE__ */ jsx(WidgetLabelCaretAlwaysUI, { isCollapsed: p.widget.isCollapsed });
});
var WidgetLabelCaretAlwaysUI = observer15(function WidgetLabelCaretAlways_({ isCollapsed }) {
  if (isCollapsed)
    return /* @__PURE__ */ jsx(Ikon.mdiChevronRight, { tw: "COLLAPSE-PASSTHROUGH" });
  return /* @__PURE__ */ jsx(Ikon.mdiChevronDown, { tw: "COLLAPSE-PASSTHROUGH" });
});

// src/controls/shared/WidgetLabelContainerUI.tsx
import { observer as observer16 } from "mobx-react-lite";

// src/rsuite/theme/useTheme.tsx
import { useContext as useContext3 } from "react";

// src/rsuite/theme/ThemeCtx.tsx
import { createContext as createContext3 } from "react";
var defaultDarkTheme = {
  // NEW
  inputBorder: new NumberVar(
    "input-border",
    10
    /* % */
  ),
  // LEGACY
  /* 🔴 */
  base: { lightness: 0.1, chroma: 0.05, hue: 0 },
  /* 🔴 */
  text: { contrast: 1, chroma: 0.1 },
  /* 🔴 */
  labelText: { contrast: 0.6, hueShift: 0, chroma: 0.1 },
  /* 🔴 */
  primary: { base: { chroma: 0.2 }, border: { contrast: 0.1 } },
  /* 🔴 */
  shiftDirection: 1
};
var ThemeCtx = createContext3({ value: defaultDarkTheme });

// src/rsuite/theme/useTheme.tsx
var useTheme = () => {
  const ctx = useContext3(ThemeCtx);
  return ctx;
};

// src/controls/shared/WidgetLabelContainerUI.tsx
var WidgetLabelContainerUI = observer16(function WidgetLabelContainerUI_(p) {
  const theme = useTheme();
  return /* @__PURE__ */ jsx(
    Frame,
    {
      tw: "COLLAPSE-PASSTHROUGH flex justify-end gap-0.5 flex-none items-center shrink-0 flex-1 items-center py-1",
      style: p.justify ? justifyStyle : void 0,
      text: theme.value.labelText,
      children: p.children
    }
  );
});
var justifyStyle = {
  textAlign: "right",
  minWidth: "8rem",
  width: (
    /* alignLabel && HeaderUI ? */
    "35%"
  ),
  marginRight: (
    /* alignLabel && HeaderUI ? */
    "0.25rem"
  )
};

// src/controls/shared/WidgetLabelIconUI.tsx
import { observer as observer17 } from "mobx-react-lite";
var WidgetLabelIconUI = observer17(function WidgetLabelIconUI_(p) {
  const iconName = p.widget.icon;
  if (iconName == null)
    return null;
  return /* @__PURE__ */ jsx(Frame, { tw: "mr-1", text: { chroma: 0.2, contrast: 0.9 }, children: /* @__PURE__ */ jsx(IkonOf, { name: iconName }) });
});

// src/controls/shared/WidgetWithLabelUI.tsx
import { observer as observer32 } from "mobx-react-lite";

// src/rsuite/errors/ErrorBoundaryUI.tsx
import { observer as observer19 } from "mobx-react-lite";
import { ErrorBoundary } from "react-error-boundary";

// src/widgets/workspace/JsonViewUI.tsx
import JsonView from "@uiw/react-json-view";
import { observer as observer18 } from "mobx-react-lite";
var JsonViewUI = observer18(function JsonViewUI_(p) {
  JSON.stringify(p.value);
  return /* @__PURE__ */ jsx(
    JsonView,
    {
      shortenTextAfterLength: 100,
      style: _githubDarkTheme,
      value: p.value ?? {},
      enableClipboard: false
    }
  );
});
var _githubDarkTheme = {
  "--w-rjv-font-family": "monospace",
  "--w-rjv-color": "#79c0ff",
  "--w-rjv-key-string": "#79c0ff",
  "--w-rjv-background-color": "#0d1117",
  "--w-rjv-line-color": "#94949480",
  "--w-rjv-arrow-color": "#ccc",
  "--w-rjv-edit-color": "var(--w-rjv-color)",
  "--w-rjv-info-color": "#7b7b7b",
  "--w-rjv-update-color": "#ebcb8b",
  "--w-rjv-copied-color": "#79c0ff",
  "--w-rjv-copied-success-color": "#28a745",
  "--w-rjv-curlybraces-color": "#8b949e",
  "--w-rjv-colon-color": "#c9d1d9",
  "--w-rjv-brackets-color": "#8b949e",
  "--w-rjv-quotes-color": "var(--w-rjv-key-string)",
  "--w-rjv-quotes-string-color": "var(--w-rjv-type-string-color)",
  "--w-rjv-type-string-color": "#a5d6ff",
  "--w-rjv-type-int-color": "#79c0ff",
  "--w-rjv-type-float-color": "#79c0ff",
  "--w-rjv-type-bigint-color": "#79c0ff",
  "--w-rjv-type-boolean-color": "#ffab70",
  "--w-rjv-type-date-color": "#79c0ff",
  "--w-rjv-type-url-color": "#4facff",
  "--w-rjv-type-null-color": "#ff7b72",
  "--w-rjv-type-nan-color": "#859900",
  "--w-rjv-type-undefined-color": "#79c0ff"
};

// src/rsuite/errors/ErrorBoundaryFallback.tsx
var ErrorBoundaryFallback = (p) => {
  return /* @__PURE__ */ jsxs("div", { role: "alert", children: [
    /* @__PURE__ */ jsxs("p", { tw: "flex gap-2 items-center", children: [
      /* @__PURE__ */ jsx("span", { onClick: () => p.resetErrorBoundary(), tw: "btn btn-square btn-sm btn-error rounded", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "refresh" }) }),
      "Something went wrong:"
    ] }),
    /* @__PURE__ */ jsx("pre", { style: { color: "red" }, children: p.error?.message }),
    p.error.extraJSON && /* @__PURE__ */ jsx(JsonViewUI, { value: p.error.extraJSON }),
    p.error?.stack && typeof p.error.stack === "string" && /* @__PURE__ */ jsx("pre", { tw: "text-sm", children: p.error.stack.split("\n").map((line, i) => /* @__PURE__ */ jsx("div", { children: line }, i)) })
  ] });
};

// src/rsuite/errors/ErrorBoundaryUI.tsx
var ErrorBoundaryUI = observer19(function CushyErrorBoundarySimpleUI_(p) {
  return /* @__PURE__ */ jsx(
    ErrorBoundary,
    {
      FallbackComponent: ErrorBoundaryFallback,
      onReset: (details) => {
      },
      children: p.children
    }
  );
});

// src/utils/misc/makeLabelFromFieldName.tsx
function makeLabelFromFieldName(s) {
  if (typeof s !== "string") {
    console.log(`[\u274C] makeLabelFromFieldName: expected string, got ${typeof s} (${s})`);
  }
  if (s == null)
    return "";
  if (s.length === 0)
    return s;
  s = s.replace(/([a-z])([A-Z])/g, "$1 $2");
  s = s.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  s = s.replace(/_/g, " ");
  s = s.replace(/([a-z])([A-Z])/g, "$1 $2");
  s = s.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  s = s.replace(/([0-9])([a-zA-Z])/g, "$1 $2");
  s = s.replace(/([a-zA-Z])([0-9])/g, "$1 $2");
  return s[0].toUpperCase() + s.slice(1);
}

// src/controls/context/CushyKitCtx.ts
import { createContext as createContext4, useContext as useContext4 } from "react";
var CushyKitCtx = createContext4(null);
var useCushyKit = () => {
  const val = useContext4(CushyKitCtx);
  if (val == null)
    throw new Error("missing CushyKit in current context");
  return val;
};
var useCushyKitOrNull = () => {
  return useContext4(CushyKitCtx);
};

// src/controls/utils/AnimatedSizeUI.tsx
import { observer as observer20 } from "mobx-react-lite";

// src/controls/utils/useSizeOf.tsx
import { runInAction as runInAction2 } from "mobx";
import { useLocalObservable } from "mobx-react-lite";

// src/utils/misc/bang.ts
var bang = (x, msg = "") => {
  if (x == null) {
    console.error(`[\u{1F534}] BANG FAILED`, msg);
    throw new Error("bang: " + (msg ?? "no message"));
  }
  return x;
};

// src/controls/utils/useSizeOf.tsx
var useSizeOf = () => {
  const size = useLocalObservable(
    () => ({
      observer: new ResizeObserver((e, obs) => {
        const e0 = bang(e[0]);
        runInAction2(() => {
          const width = e0.contentRect.width;
          const height = e0.contentRect.height;
          size.width = width;
          size.height = height;
        });
      }),
      width: void 0,
      height: void 0
    })
  );
  const ro = size.observer;
  const refFn = (e) => {
    if (e == null)
      return ro.disconnect();
    ro.observe(e);
  };
  return { ref: refFn, size };
};

// src/controls/utils/AnimatedSizeUI.tsx
var AnimatedSizeUI = observer20(function AnimatedSizeUI_(p) {
  const { ref: refFn, size } = useSizeOf();
  return /* @__PURE__ */ jsx("div", { className: p.className, tw: "smooth-resize-container animated overflow-hidden", style: { height: `${size.height}px` }, children: /* @__PURE__ */ jsx("div", { className: "smooth-resize-content", ref: refFn, children: p.children }) });
});

// src/controls/shared/getIfWidgetNeedAlignedLabel.tsx
var getIfWidgetNeedAlignedLabel = (widget) => {
  if (widget.config.alignLabel != null)
    return widget.config.alignLabel;
  if (widget.alignLabel != null)
    return widget.alignLabel;
  if (widget.DefaultBodyUI)
    return false;
  return true;
};

// src/controls/shared/WidgetHeaderControlsContainerUI.tsx
import { observer as observer21 } from "mobx-react-lite";
var WidgetHeaderControlsContainerUI = observer21(function WidgetHeaderControlsContainerUI_(p) {
  return /* @__PURE__ */ jsx("div", { className: p.className, tw: "widget-header-container-ui COLLAPSE-PASSTHROUGH flex items-center gap-0.5 flex-1", children: p.children });
});

// src/controls/shared/WidgetMenu.tsx
import { observer as observer29 } from "mobx-react-lite";

// src/operators/Menu.ts
import { nanoid as nanoid3 } from "nanoid";
import { createElement as createElement5, useMemo as useMemo4 } from "react";

// src/operators/Activity.ts
import { makeAutoObservable as makeAutoObservable5 } from "mobx";
var ActivityManager = class {
  constructor() {
    /** currently active activities */
    this._stack = [];
    this.startActivity = (activity) => {
      this._stack.push(activity);
      activity.onStart?.();
      return "SUCCESS" /* Success */;
    };
    this.stopCurrentActivity = () => {
      const activity = this._stack.pop();
      activity?.onStop?.();
    };
    this.current = () => this._stack[this._stack.length - 1];
    makeAutoObservable5(this);
  }
  stopActivity(activity) {
    const ix = this._stack.indexOf(activity);
    if (ix === -1)
      return;
    this._stack.splice(ix, 1);
    activity.onStop?.();
  }
};
var activityManager = new ActivityManager();

// src/app/shortcuts/CommandManager.ts
import { computed as computed2, makeObservable as makeObservable5, observable as observable6 } from "mobx";

// src/utils/misc/ManualPromise.ts
import { action as action2, makeObservable as makeObservable4, observable as observable5, runInAction as runInAction3 } from "mobx";
var isPromise = (p) => {
  return p != null && typeof p.then === "function";
};

// src/app/shortcuts/_OS.ts
var _os;
function getOS() {
  if (_os)
    return _os;
  _os = getOS_();
  return _os;
}
function getOS_() {
  try {
    const userAgent = window.navigator.userAgent;
    const platform2 = window.navigator.platform;
    if (["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(platform2) !== -1)
      return "Mac";
    else if (["iPhone", "iPad", "iPod"].indexOf(platform2) !== -1)
      return "iOS";
    else if (["Win32", "Win64", "Windows", "WinCE"].indexOf(platform2) !== -1)
      return "Windows";
    else if (/Android/.test(userAgent))
      return "Android";
    else if (/Linux/.test(platform2))
      return "Linux";
    return "unknown";
  } catch (e) {
    return "unknown";
  }
}

// src/app/shortcuts/META_NAME.ts
var platform = getOS();
var MOD_KEY = platform === "Mac" ? "cmd" : "ctrl";
var META_NAME = platform === "Mac" ? "cmd" : "win";

// src/app/shortcuts/CommandManager.ts
var CommandManager = class {
  constructor(conf = {}) {
    this.conf = conf;
    this.commands = /* @__PURE__ */ new Map();
    this.commandByShortcut = /* @__PURE__ */ new Map();
    this.contextByName = /* @__PURE__ */ new Map();
    this.registerCommand = (op) => {
      this.contextByName.set(op.ctx.name, op.ctx);
      this.commands.set(op.id, op);
      const combos = op.combos == null ? [] : Array.isArray(op.combos) ? op.combos : [op.combos];
      for (const k of combos) {
        const key = normalizeCushyShortcut(k);
        const list = this.commandByShortcut.get(key) || [];
        const next = list.filter((o) => o.id !== op.id);
        next.push(op);
        this.commandByShortcut.set(key, next);
      }
    };
    this.getCommandById = (id) => this.commands.get(id);
    this.inputHistory = [];
    this.log = (...content) => console.log(`[Shortcut-Watcher #${this.name}`, ...content);
    this.evInInput = (ev) => {
      const element = ev.target;
      const inInput = element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA" || Boolean(element.contentEditable) && element.contentEditable === "true";
      return inInput;
    };
    this.inputToken = (ev) => {
      const inputAccum = [];
      if (ev.ctrlKey)
        inputAccum.push("ctrl");
      if (ev.shiftKey)
        inputAccum.push("shift");
      if (ev.altKey)
        inputAccum.push("alt");
      if (ev.metaKey)
        inputAccum.push(META_NAME);
      const key = ev.key;
      if (key) {
        if (key === " ")
          inputAccum.push("space");
        else
          inputAccum.push(key.toLowerCase());
      }
      const input = inputAccum.sort(sortKeyNamesFn).join("+").toLowerCase();
      return input;
    };
    this.processKeyDownEvent = (ev) => {
      const input = this.inputToken(ev);
      if (this.conf.log)
        this.log(input);
      if (this.inputHistory.length > 3)
        this.inputHistory.shift();
      this.inputHistory.push(input);
      const inInput = this.evInInput(ev);
      const lastX = this.inputHistory.slice(-5);
      for (let x = 0; x < lastX.length; x++) {
        const shortcut = lastX.slice(x).join(" ");
        const matches = this.commandByShortcut.get(shortcut);
        for (const s of matches || []) {
          if (inInput && !s.validInInput)
            continue;
          if (this.conf.log || s.action == null)
            this.log(shortcut, `triggered (${s.label})`);
          const done = this.tryToRun(s, ev);
          if (done)
            return "SUCCESS" /* Success */;
        }
      }
      if (this.conf.log)
        this.log("nothing found");
      return "UNMATCHED" /* UNMATCHED */;
    };
    this.tryToRun = (s, ev) => {
      if (s.action == null)
        return false;
      const res = s.execute();
      if (isPromise(res)) {
        return true;
      }
      if (this.conf.log) {
        if (res === "SUCCESS" /* Success */)
          this.log("          -> executed");
      }
      if (res === "UNMATCHED" /* UNMATCHED */)
        return false;
      if (res === "DONE" /* FAILED */)
        return false;
      if (res === "SUCCESS" /* Success */ && s.continueAfterSuccess)
        return false;
      if (res === "SUCCESS" /* Success */) {
        ev.stopPropagation();
        ev.preventDefault();
        return true;
      }
      exhaust2(res);
      throw new Error(`INVALID CASE`);
    };
    makeObservable5(this, {
      inputHistory: true,
      contextByName: observable6.shallow,
      commandByShortcut: observable6.shallow,
      knownContexts: computed2
    });
    this.name = this.conf.name || "no-name";
  }
  get knownContexts() {
    return Array.from(this.contextByName.values());
  }
};
var exhaust2 = (_) => _;
function parseShortcutToInputSequence(combo) {
  return combo.split(" ").map(normalizeInputToken);
}
var normalizeCushyShortcut = (combo) => {
  return combo.split(" ").map(normalizeInputToken).join(" ");
};
function normalizeInputToken(input) {
  if (input.includes(" "))
    throw new Error(`invalid raw input token: "${input}"`);
  return input.split("+").map(normalizeKey).sort(sortKeyNamesFn).join("+").toLowerCase();
}
function normalizeKey(key) {
  if (key === "up")
    return "ArrowUp";
  if (key === "down")
    return "ArrowDown";
  if (key === "left")
    return "ArrowLeft";
  if (key === "right")
    return "ArrowRight";
  if (key === "mod")
    return MOD_KEY;
  if (key === "meta")
    return META_NAME;
  return key;
}
var keyPriorityWhenSorting = (key) => {
  if (key === "ctrl")
    return "__1ctrl";
  if (key === "win")
    return "__1win";
  if (key === "cmd")
    return "__1cmd";
  if (key === "shift")
    return "__2shift";
  if (key === "alt")
    return "__3alt";
  return key;
};
var sortKeyNamesFn = (a, b) => {
  const a1 = keyPriorityWhenSorting(a);
  const b1 = keyPriorityWhenSorting(b);
  return a1.localeCompare(b1);
};
var commandManager = new CommandManager({});

// src/operators/introspect/_isBoundCommand.tsx
var BoundCommandSym = Symbol("BoundCommand");
var isBoundCommand = (x) => x != null && //
typeof x === "object" && "$SYM" in x && x.$SYM === BoundCommandSym;

// src/operators/introspect/_isCommand.tsx
var CommandSym = Symbol("Command");
var isCommand = (x) => x != null && //
typeof x === "object" && "$SYM" in x && x.$SYM === CommandSym;

// src/operators/Command.tsx
var Command = class {
  constructor(conf) {
    this.conf = conf;
    this.$SYM = CommandSym;
    /**
     * method to programmatically call a command,
     * using when to both extract context and check if command can run
     * */
    this.execute = () => {
      console.info(`[CMD] \u2623\uFE0F TRYING TO RUN... ${this.label}`);
      const context = this.conf.ctx.check();
      if (context === "UNMATCHED" /* UNMATCHED */) {
        console.warn(`[CMD] \u{1F534} FAILED TO RUN`);
        return "UNMATCHED" /* UNMATCHED */;
      }
      const res = this.conf.action?.(context);
      return res;
    };
    this.NavBarBtnUI = (p) => {
      return /* @__PURE__ */ jsx(Button, { border: false, onClick: () => this.execute(), children: p.label ?? this.label });
    };
    Object.assign(this, conf);
  }
  /** bind a command to a static context, bypassing its context provider */
  bind(ctx) {
    return new BoundCommand(this, ctx);
  }
};
var BoundCommand = class {
  constructor(command, ctx, ui) {
    this.command = command;
    this.ctx = ctx;
    this.ui = ui;
    this.$SYM = BoundCommandSym;
    this.execute = () => {
      return this.command.conf.action(this.ctx);
    };
    this.NavBarBtnUI = (p) => {
      return /* @__PURE__ */ jsx("div", { onClick: () => this.execute(), children: p.label ?? this.label });
    };
  }
  get label() {
    return this.ui?.label ?? this.command.label;
  }
};

// src/operators/introspect/_isBoundMenu.tsx
var BoundMenuSym = Symbol("BoundMenu");
var isBoundMenu = (x) => x != null && //
typeof x === "object" && "$SYM" in x && x.$SYM === BoundMenuSym;

// src/operators/menuSystem/SimpleMenuAction.ts
var SimpleMenuAction = class {
  constructor(opts) {
    this.opts = opts;
  }
};

// src/operators/MenuUI.tsx
import { observer as observer24 } from "mobx-react-lite";
import { createElement as createElement4 } from "react";
import { Fragment as Fragment3 } from "react/jsx-runtime";

// src/rsuite/dropdown/MenuItem.tsx
import { observer as observer23 } from "mobx-react-lite";

// src/app/shortcuts/ComboUI.tsx
import { observer as observer22 } from "mobx-react-lite";
import { Fragment as Fragment2 } from "react";
var ComboUI = observer22(function ComboUI_(p) {
  if (p.combo == null)
    return null;
  const iss = parseShortcutToInputSequence(p.combo);
  return /* @__PURE__ */ jsx("div", { tw: "whitespace-nowrap flex gap-2", children: iss.map((token) => {
    const keys = token.split("+");
    return /* @__PURE__ */ jsx("div", { tw: "flex items-center text-xs", children: keys.map((keyName, ix) => /* @__PURE__ */ jsxs(Fragment2, { children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          tw: [
            //
            // 'kbd',
            // p.primary && 'kbd-primary',
            // p.size === 'xs' ? 'kbd-xs' : 'kbd-sm',
          ],
          children: formatKeyName(keyName)
        },
        keyName
      ),
      ix !== keys.length - 1 && /* @__PURE__ */ jsx("div", { tw: "opacity-50", children: "+" })
    ] }, ix)) }, token);
  }) });
});
var formatKeyName = (keyName) => {
  if (keyName === "arrowup")
    return "\u2191";
  if (keyName === "arrowdown")
    return "\u2193";
  if (keyName === "arrowleft")
    return "\u2190";
  if (keyName === "arrowright")
    return "\u2192";
  if (keyName === "alt")
    return "\u2325";
  if (keyName === "shift")
    return "\u21E7";
  if (keyName === "cmd")
    return "\u2318";
  if (keyName === "ctrl")
    return "\u2303";
  if (keyName === "win")
    return "win";
  return keyName.toUpperCase();
};

// src/rsuite/dropdown/MenuItem.tsx
var MenuItem = observer23(function DropdownItem_(p) {
  const { size, label, disabled, icon, children, active, onClick, ...rest } = p;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      text: { contrast: disabled ? 0.5 : 1 },
      base: {
        contrast: active ? 0.1 : 0,
        chroma: active ? 0.1 : void 0
      },
      hover: true,
      onClick: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        p.onClick?.(ev);
      },
      style: { lineHeight: "1.6rem" },
      tw: ["_MenuItem", "px-2 py-0.5 flex items-center gap-2 whitespace-nowrap cursor-pointer"],
      ...rest,
      children: [
        icon,
        label,
        children,
        p.shortcut ? /* @__PURE__ */ jsx("div", { tw: "ml-auto pl-2 text-xs italic", children: p.shortcut && /* @__PURE__ */ jsx(ComboUI, { combo: p.shortcut }) }) : null
      ]
    }
  );
});

// src/operators/menuSystem/SimpleMenuModal.ts
var SimpleMenuModal = class {
  constructor(p) {
    this.p = p;
  }
};

// src/operators/MenuUI.tsx
var MenuRootUI = observer24(function MenuRootUI_(p) {
  return /* @__PURE__ */ jsx(RevealUI, { className: "dropdown", placement: "bottomStart", content: () => /* @__PURE__ */ jsx(p.menu.UI, {}), children: /* @__PURE__ */ jsx("label", { tabIndex: 0, tw: [`flex-nowrap btn btn-ghost btn-sm py-0 px-1.5`], children: p.menu.menu.title }) });
});
var MenuUI = observer24(function MenuUI_(p) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "_MenuUI",
      tabIndex: -1,
      autoFocus: true,
      tw: "w-fit",
      onKeyDown: (ev) => {
        const key = ev.key;
        for (const entry of p.menu.entriesWithKb) {
          if (entry.char === key) {
            if (entry.entry instanceof SimpleMenuAction)
              entry.entry.opts.onPick();
            else if (isBoundCommand(entry.entry))
              entry.entry.execute();
            else if (isCommand(entry.entry))
              entry.entry.execute();
            p.menu.onStop();
            ev.stopPropagation();
            ev.preventDefault();
            return;
          }
        }
      },
      children: p.menu.entriesWithKb.map(({ entry, char, charIx }, ix) => {
        if (entry instanceof SimpleMenuAction) {
          return /* @__PURE__ */ jsx(
            MenuItem,
            {
              tw: "_SimpleMenuAction min-w-60",
              shortcut: char,
              label: entry.opts.label,
              icon: entry.opts.icon ? /* @__PURE__ */ jsx(IkonOf, { name: entry.opts.icon }) : void 0,
              onClick: () => {
                entry.opts.onPick();
                p.menu.onStop();
              }
            },
            ix
          );
        }
        if (entry instanceof SimpleMenuModal) {
          return /* @__PURE__ */ jsx(
            MenuItem,
            {
              tw: "_SimpleMenuModal min-w-60",
              shortcut: char,
              label: entry.p.label,
              onClick: (event) => {
                activityManager.startActivity({
                  event,
                  uid: "createPreset",
                  placement: "auto",
                  shell: "popup-lg",
                  UI: (p2) => /* @__PURE__ */ jsx(
                    entry.p.UI,
                    {
                      close: () => p2.stop(),
                      submit: entry.p.submit,
                      submitLabel: entry.p.submitLabel
                    }
                  )
                });
              }
            },
            ix
          );
        }
        if (isBoundCommand(entry) || isCommand(entry)) {
          const label = entry.label;
          return /* @__PURE__ */ jsx(
            MenuItem,
            {
              tw: "min-w-60",
              shortcut: char,
              onClick: () => {
                entry.execute();
                p.menu.onStop();
              },
              label: charIx != null ? /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { children: label.slice(0, charIx) }),
                /* @__PURE__ */ jsx("span", { tw: "underline text-red", children: label[charIx] }),
                /* @__PURE__ */ jsx("span", { children: label.slice(charIx + 1) })
              ] }) : label
            },
            ix
          );
        } else if (isBoundMenu(entry)) {
          const label = entry.title;
          return /* @__PURE__ */ jsx(
            RevealUI,
            {
              trigger: "hover",
              tw: "min-w-60",
              placement: "rightStart",
              content: () => /* @__PURE__ */ jsx(MenuUI, { menu: entry.init(p.menu.allocatedKeys) }),
              children: /* @__PURE__ */ jsx(
                MenuItem,
                {
                  shortcut: char,
                  label: /* @__PURE__ */ jsxs(Fragment, { children: [
                    charIx != null ? /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { children: label.slice(0, charIx) }),
                      /* @__PURE__ */ jsx("span", { tw: "underline text-red", children: label[charIx] }),
                      /* @__PURE__ */ jsx("span", { children: label.slice(charIx + 1) })
                    ] }) : label,
                    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "keyboard_arrow_right" })
                  ] })
                },
                ix
              )
            }
          );
        } else if (isWidget(entry)) {
          return entry.ui();
        } else {
          return /* @__PURE__ */ jsx(Fragment3, { children: createElement4(entry) }, ix);
        }
      })
    }
  );
});

// src/operators/Menu.ts
var MenuManager = class {
  constructor() {
    this.operators = [];
    this.registerMenu = (menu2) => this.operators.push(menu2);
    this.getMenuById = (id) => this.operators.find((op) => op.def.id === id);
  }
};
var menuManager = new MenuManager();
var Menu = class {
  // prettier-ignore
  constructor(def) {
    this.def = def;
    this.UI = (p) => createElement5(MenuUI, { menu: useMemo4(() => new MenuInstance(this, p.props), []) });
    this.DropDownUI = (p) => createElement5(MenuRootUI, { menu: useMemo4(() => new MenuInstance(this, p.props), []) });
    // prettier-ignore
    /** bind a menu to give props */
    this.bind = (props, ui) => new BoundMenu(this, props, ui);
    this.id = def.id ?? nanoid3();
    menuManager.registerMenu(this);
  }
  get title() {
    return this.def.title;
  }
  /** push the menu to current activity */
  open(props) {
    const instance = new MenuInstance(this, props);
    return activityManager.startActivity(instance);
  }
};
var MenuInstance = class {
  constructor(menu2, props, keysTaken = /* @__PURE__ */ new Set()) {
    this.menu = menu2;
    this.props = props;
    this.keysTaken = keysTaken;
    this.onStart = () => {
    };
    this.UI = () => createElement5(MenuUI, { menu: this });
    this.onEvent = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
      return null;
    };
    this.onStop = () => {
    };
    this.uid = nanoid3();
    this.findSuitableKeys = (label, allocatedKeys) => {
      let ix = 0;
      for (const char of [...label]) {
        const key = char.toLowerCase();
        if (!allocatedKeys.has(key)) {
          allocatedKeys.add(key);
          return { char: key, pos: ix };
        }
        ix++;
      }
    };
  }
  get entries() {
    return this.menu.def.entries(this.props);
  }
  get entriesWithKb() {
    return this.acceleratedEntries.out;
  }
  get allocatedKeys() {
    return this.acceleratedEntries.allocatedKeys;
  }
  get acceleratedEntries() {
    const allocatedKeys = /* @__PURE__ */ new Set([...this.keysTaken]);
    const out = [];
    for (const entry of this.entries) {
      if (entry instanceof SimpleMenuAction) {
        const res = this.findSuitableKeys(entry.opts.label, allocatedKeys);
        if (res == null)
          continue;
        out.push({ entry, char: res.char, charIx: res.pos });
      } else if (entry instanceof Command) {
        const res = this.findSuitableKeys(entry.label, allocatedKeys);
        if (res == null)
          continue;
        out.push({ entry, char: res.char, charIx: res.pos });
      } else if (entry instanceof BoundMenu) {
        const res = this.findSuitableKeys(entry.menu.title, allocatedKeys);
        if (res == null)
          continue;
        out.push({ entry, char: res.char, charIx: res.pos });
      } else {
        out.push({ entry });
      }
    }
    return { out, allocatedKeys };
  }
};
var menu = (def) => new Menu(def);
var BoundMenu = class {
  constructor(menu2, props, ui) {
    this.menu = menu2;
    this.props = props;
    this.ui = ui;
    this.$SYM = BoundMenuSym;
    this.open = () => this.menu.open(this.props);
    this.init = (keysTaken) => new MenuInstance(this.menu, this.props, keysTaken);
  }
  get title() {
    return this.ui?.title ?? this.menu.title;
  }
};

// src/panels/libraryUI/tree/xxx/Tree.ts
import { makeAutoObservable as makeAutoObservable7, observable as observable7 } from "mobx";
import { nanoid as nanoid4 } from "nanoid";

// src/db/SQLITE_boolean.ts
var SQLITE_true = 1;
var SQLITE_false = 0;

// src/panels/libraryUI/tree/xxx/TreeNode.ts
import { makeAutoObservable as makeAutoObservable6 } from "mobx";

// src/panels/libraryUI/tree/xxx/utils.ts
import { customAlphabet } from "nanoid";
var genUID = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 5);
var FAIL = (msg, data) => {
  throw new Error(`\u{1F534} ${msg}`, data);
};

// src/panels/libraryUI/tree/xxx/TreeNode.ts
var TreeNode = class _TreeNode {
  constructor(tree, elem, parent) {
    this.tree = tree;
    this.elem = elem;
    this.parent = parent;
    this.onPrimaryAction = () => this.data.onPrimaryAction?.(this);
    this.onFocusItem = () => this.data.onFocusItem?.(this);
    this._children_ = {};
    /** remove node from module */
    this.delete = () => {
      return this.data.delete?.(this) ?? false;
    };
    const key = elem.key;
    this.id = (parent?.id ?? "") + "/" + key;
    this.entryL = tree.config.getNodeState(this);
    const ctor = elem.ctor;
    const isRealClass = Boolean(Object.getOwnPropertyDescriptors(ctor).prototype);
    this.data = isRealClass ? (
      // @ts-ignore
      new ctor(elem.props)
    ) : (
      // @ts-ignore
      ctor(elem.props)
    );
    makeAutoObservable6(this, { _children_: false });
  }
  scrollIntoView(p) {
    document.getElementById(this.id)?.scrollIntoView({
      behavior: p?.behavior ?? "instant",
      block: p?.block ?? "nearest"
    });
  }
  get isOpen() {
    return this.entryL.data.isExpanded ?? false;
  }
  open() {
    this.data.onExpand?.(this);
    this.entryL.update({ isExpanded: SQLITE_true });
  }
  close() {
    this.entryL.update({ isExpanded: SQLITE_false });
  }
  toggle() {
    if (this.isOpen)
      this.close();
    else
      this.open();
  }
  get valid() {
    return true;
  }
  // intermediary representation
  get childElements() {
    return this.data.children?.() ?? [];
  }
  get childKeys() {
    return this.childElements.map((i) => i.key);
  }
  get children() {
    const childElements = this.childElements;
    const out = [];
    for (const childElem of childElements) {
      const childKey = childElem.key;
      const child = this._children_[childKey];
      if (child) {
        out.push(child);
      } else {
        const node = new _TreeNode(this.tree, childElem, this);
        this._children_[childKey] = node;
        out.push(node);
      }
    }
    return out;
  }
  get depth() {
    if (this.parent == null)
      return 0;
    return 1 + this.parent.depth;
  }
  get siblingsIncludingSelf() {
    if (this.parent == null)
      return this.tree.topLevelNodes;
    return this.parent.children;
  }
  get siblingsExcludingSelf() {
    return this.siblingsIncludingSelf.filter((i) => i !== this);
  }
  get nextSibling() {
    let siblings = this.siblingsIncludingSelf;
    if (siblings.length === 0)
      FAIL("IMPOSSIBLE 1");
    if (siblings[siblings.length - 1] === this)
      return;
    for (let i = 0; i < siblings.length - 1; i++) {
      if (siblings[i] === this)
        return siblings[i + 1];
    }
    return;
  }
  get prevSibling() {
    let siblings = this.siblingsIncludingSelf;
    let SELF = this;
    if (siblings.length === 0)
      FAIL("IMPOSSIBLE 2");
    if (siblings[0] === SELF)
      return;
    for (let i = siblings.length - 1; i > 0; i--) {
      if (siblings[i] === SELF)
        return siblings[i - 1];
    }
    return;
  }
  /** return the first child of a given node
   * or undefined if node has no child */
  get firstChild() {
    const children = this.children;
    if (children.length === 0)
      return;
    return children[0];
  }
  get_descendant_and_self(mode) {
    const stack = [this];
    let ix = 0;
    let at;
    while (at = stack[ix++]) {
      if (mode === "bfs")
        stack.push(...at.children);
      else
        stack.splice(ix, 0, ...at.children);
    }
    return stack;
  }
  get lastChild() {
    if (this.children.length === 0)
      return;
    return this.children[this.children.length - 1];
  }
  /** return the last descendant
   * [a[b,c],x[y,z]] => z */
  get lastDescendant() {
    let at = this;
    let out;
    while (at = at.lastChild)
      out = at;
    return out;
  }
  get isRoot() {
    return this.parent == null;
  }
  get root() {
    let at = this;
    while (at.parent) {
      at = at.parent;
    }
    return at;
  }
  get rootOrSelf() {
    return this.root ?? this;
  }
  get path_v1() {
    return this.parent ? [this.elem.key, this.parent.path_v1] : [this.elem.key];
  }
  get path_v2() {
    return this.parent ? [...this.parent.path_v2, this.elem.key] : [this.elem.key];
  }
  get lastOpenedDescendant() {
    let at = this;
    let out;
    if (!at.isOpen)
      return;
    while (at = at.lastChild) {
      out = at;
      if (!at.isOpen)
        break;
    }
    return out;
  }
  get_descendant(mode) {
    return this.get_descendant_and_self(mode).slice(1);
  }
  get descendantBFS() {
    return this.get_descendant("bfs");
  }
  get descendantDFS() {
    return this.get_descendant("dfs");
  }
  get nodeAboveInView() {
    return this.prevSibling?.lastOpenedDescendant ?? this.prevSibling ?? this.parent;
  }
  get nodeBelowInView() {
    if (this.isOpen && this.firstChild)
      return this.firstChild;
    if (this.nextSibling)
      return this.nextSibling;
    let at = this;
    while (at = at.parent)
      if (at.nextSibling)
        return at.nextSibling;
  }
};

// src/panels/libraryUI/tree/xxx/Tree.ts
var defaultTreeStorage = (node) => {
  const data = { isExpanded: SQLITE_false };
  return observable7({
    data,
    update: (next) => data.isExpanded = next.isExpanded
  });
};
var Tree = class {
  constructor(rootNodes, config = { getNodeState: defaultTreeStorage }) {
    this.config = config;
    this.topLevelNodes = [];
    this.KeyboardNavigableDomNodeID = nanoid4();
    for (let uid of rootNodes) {
      const node = new TreeNode(this, uid, void 0);
      this.topLevelNodes.push(node);
    }
    makeAutoObservable7(this, {
      // indexNode: action
    });
  }
};

// src/panels/libraryUI/tree/xxx/TreeUI.tsx
import { observer as observer28 } from "mobx-react-lite";

// src/app/shortcuts/shorcutKeys.ts
var KEYS = {
  search: "mod+f",
  // misc
  closeCurrentTab: "mod+w",
  closeDialogOrPopupsOrFullScreenPanel: "escape",
  // tree navigation -------------------------------------------------------------------------------
  // navigation -------------------------------------------------------------------------------------
  openFull_Library: "mod+p",
  openPage_Config: "mod+,",
  openPage_Hosts: "mod+shift+,",
  openPage_Shortcuts: "mod+k mod+s",
  //
  openPage_Civitai: "mod+k 1",
  openPage_Squoosh: "mod+k 2",
  openPage_Posemy: "mod+k 3",
  openPage_Paint: "mod+k 4",
  openPage_Unsplash: "mod+k 5",
  openPage_ComfyUI: "mod+4",
  openPage_Gallery: "mod+5",
  openPage_Models: "mod+6",
  openPage_Marketplace: "mod+7",
  // draft actions
  duplicateCurrentDraft: "mod+shift+d",
  resizeWindowForVideoCapture: "mod+u mod+2",
  resizeWindowForLaptop: "mod+u mod+3",
  resetLayout: "mod+u mod+1",
  // tree actions
  // global
  focusAppAndDraftTree: ["mod+1", "mod+shift+e", "mod+b"],
  focusFileExplorerTree: "mod+2",
  collapseAllTree: "mod+shift+k",
  // in-tree stuff
  // tree_focusFilter:                 '/',
  tree_moveUp: "ArrowUp",
  tree_moveDown: "ArrowDown",
  tree_moveRight: "ArrowRight",
  tree_moveLeft: "ArrowLeft",
  tree_deleteNodeAndFocusNodeAbove: "Backspace",
  tree_deleteNodeAndFocusNodeBelow: "Delete",
  tree_onPrimaryAction: "Enter",
  tree_movePageUp: "PageUp",
  tree_movePageDown: "PageDown"
};

// src/panels/libraryUI/tree/xxx/TreeCtx.ts
import { createContext as createContext5, useContext as useContext5 } from "react";
var TreeViewCtx = createContext5(null);
var useTreeView = () => {
  const val = useContext5(TreeViewCtx);
  if (val == null)
    throw new Error("missing editor in current widget react contexts");
  return val;
};

// src/panels/libraryUI/tree/xxx/TreeEntryUI.tsx
import { observer as observer27 } from "mobx-react-lite";
import { Fragment as Fragment4 } from "react";

// src/panels/libraryUI/tree/RenderItemTitleUI.tsx
import { observer as observer26 } from "mobx-react-lite";

// src/panels/libraryUI/tree/RenderTreeIcon1.tsx
import { observer as observer25 } from "mobx-react-lite";
var TreeIcon1UI = observer25(function TreeIcon1UI_(p) {
  const action3 = p;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: p.className,
      tw: "btn btn-xs btn-square btn-ghost",
      onClick: (e) => {
        e.stopPropagation();
        action3.onClick?.(p.node);
      },
      children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: action3.icon })
    },
    action3.name
  );
});

// src/panels/libraryUI/tree/RenderItemTitleUI.tsx
var RenderItemTitleUI = observer26(function RenderItemTitleUI_(p) {
  const node = p.node;
  const item = node.data;
  let icon = node.isOpen ? item.iconExpanded ?? item.icon : item.icon ?? item.iconExpanded;
  if (typeof icon === "string") {
    icon = /* @__PURE__ */ jsx("img", { src: icon, style: { width: "1.3rem", height: "1.3rem" } });
  }
  return /* @__PURE__ */ jsxs("div", { tw: "flex flex-grow items-center gap-0.5 whitespace-nowrap overflow-ellipsis", children: [
    icon,
    /* @__PURE__ */ jsxs(
      "div",
      {
        tw: [
          //
          "_TreeItemTitle",
          "cursor-pointer",
          "flex-grow relative overflow-hidden overflow-ellipsis"
        ],
        onClick: () => {
          item.onPrimaryAction?.(node);
        },
        children: [
          "\xA0",
          /* @__PURE__ */ jsx("div", { tw: "absolute inset-0", children: item.name })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { tw: "ml-auto opacity-40 hover:opacity-100", children: [
      item.extra?.(),
      item.actions?.map((action3, ix) => {
        return /* @__PURE__ */ jsx(TreeIcon1UI, { node, ...action3 }, ix);
      })
    ] })
  ] });
});

// src/panels/libraryUI/tree/xxx/TreeEntryUI.tsx
var TreeEntryUI = observer27(function TreeEntryUI_(p) {
  const n = p.node;
  const children = n.childKeys;
  const hasChildren = children.length > 0;
  const tv = useTreeView();
  const selected = tv.at === n;
  return /* @__PURE__ */ jsxs(Fragment4, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        id: n.id,
        style: { paddingLeft: `${p.depth ?? 0}rem` },
        onClick: () => tv.setFocusAt(n),
        tw: [
          // 'py-1',
          // selected ? 'virtualBorder' : null,
          {
            _line: true,
            _hasChildren: hasChildren,
            _selected: selected,
            _opened: n.isOpen,
            _closed: !n.isOpen
          }
        ],
        children: [
          hasChildren ? /* @__PURE__ */ jsx("label", { onClick: () => n.toggle(), className: "swap swap-rotate opacity-50", children: n.isOpen ? /* @__PURE__ */ jsx(Ikon.mdiChevronDown, {}) : /* @__PURE__ */ jsx(Ikon.mdiChevronRight, {}) }) : /* @__PURE__ */ jsx("div", { tw: "[width:1.3rem]", children: "\xA0" }),
          tv.conf.selectable && /* @__PURE__ */ jsx("input", { checked: true, type: "checkbox", tw: "checkbox" }),
          /* @__PURE__ */ jsx(RenderItemTitleUI, { node: n })
        ]
      }
    ),
    hasChildren && n.isOpen ? (
      //
      /* @__PURE__ */ jsx(
        "div",
        {
          tw: "cushy-borderLeft",
          style: {
            // marginLeft: '.5rem',
            marginLeft: ".5rem",
            paddingLeft: ".5rem"
          },
          children: n.children.map((c) => /* @__PURE__ */ jsx(TreeEntryUI, { node: c }, c.id))
        }
      )
    ) : null
  ] }, n.id);
});

// src/panels/libraryUI/tree/xxx/TreeUI.tsx
var TreeUI = observer28(function TreeEditorUI_(p) {
  const tv = p.treeView;
  return /* @__PURE__ */ jsx(TreeViewCtx.Provider, { value: tv, children: /* @__PURE__ */ jsxs("div", { tw: "_TreeUI flex flex-col", className: p.className, children: [
    /* @__PURE__ */ jsxs("div", { tw: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-1 gap-1 items-center", children: p.title && /* @__PURE__ */ jsx("div", { tw: "text-sm", children: p.title }) }),
      p.shortcut && /* @__PURE__ */ jsx(ComboUI, { primary: true, size: "xs", combo: p.shortcut }),
      /* @__PURE__ */ jsx(
        RevealUI,
        {
          trigger: "hover",
          content: () => /* @__PURE__ */ jsxs("div", { tw: "flex gap-1 whitespace-nowrap p-2", children: [
            "collapse tree: ",
            /* @__PURE__ */ jsx(ComboUI, { combo: KEYS.collapseAllTree })
          ] }),
          children: tv.tree.config.updateAll && /* @__PURE__ */ jsx(
            "div",
            {
              tw: "btn btn-square btn-ghost btn-xs shrink-0",
              onClick: () => tv.tree.config.updateAll?.({ isExpanded: null }),
              children: /* @__PURE__ */ jsx(Ikon.mdiUnfoldLessHorizontal, {})
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: "flex-1 overflow-auto",
        id: tv.tree.KeyboardNavigableDomNodeID,
        onKeyDown: tv.onKeyDown,
        tabIndex: -1,
        autoFocus: p.autofocus,
        children: tv.nodes.map((n) => /* @__PURE__ */ jsx(TreeEntryUI, { node: n }, n.id))
      }
    )
  ] }) });
});

// src/panels/libraryUI/tree/xxx/TreeView.ts
import { makeAutoObservable as makeAutoObservable8 } from "mobx";
import { nanoid as nanoid5 } from "nanoid";
import { createRef } from "react";

// src/panels/libraryUI/tree/xxx/TreeShortcuts.ts
var onKeyDownHandlers = (ev, view) => {
  if (ev.key === KEYS.tree_deleteNodeAndFocusNodeAbove)
    return view.deleteNodeAndFocusNodeAbove;
  if (ev.key === KEYS.tree_deleteNodeAndFocusNodeBelow)
    return view.deleteNodeAndFocusNodeBelow;
  if (ev.key === KEYS.tree_onPrimaryAction)
    return view.at?.onPrimaryAction;
  if (ev.key === KEYS.tree_movePageUp)
    return view.movePageUp;
  if (ev.key === KEYS.tree_movePageDown)
    return view.movePageDown;
  if (ev.key === KEYS.tree_moveUp)
    return view.moveUp;
  if (ev.key === KEYS.tree_moveDown)
    return view.moveDown;
  if (ev.key === KEYS.tree_moveRight)
    return view.moveRight;
  if (ev.key === KEYS.tree_moveLeft)
    return view.moveLeft;
};

// src/panels/libraryUI/tree/xxx/TreeView.ts
var TreeView = class {
  constructor(tree, conf = {}) {
    this.tree = tree;
    this.conf = conf;
    /** treeview id; only for debugging purpose */
    this.id = nanoid5(4);
    this.filterRef = createRef();
    this.updateFilter = (xPath) => this.filter = xPath;
    this.focusFilter = () => {
      const curr = this.filterRef.current;
      if (!(curr instanceof HTMLElement))
        return;
      curr.focus();
    };
    this.revealAndFocusAtPath = (path_v2) => {
      const [k, ...rest] = path_v2;
      let at = this.tree.topLevelNodes.find((i) => i.elem.key === k);
      if (at == null) {
        console.log(`[\u274C] no top level node matching first key "${k}"`);
        return;
      }
      at.open();
      for (const x of rest) {
        const children = at.children;
        at = children.find((i) => i.elem.key === x);
        if (at == null) {
          console.log(`[\u274C] no child node matching key "${x}" (available: ${children.map((i) => i.elem.key).join(", ")})`);
          return;
        }
        at.open();
      }
      this.setFocusAt(at, { block: "nearest" });
      return at;
    };
    this.setFocusAt = (at, p) => {
      this.at = at;
      this.at?.scrollIntoView(p);
      this.conf.onFocusChange?.(at);
    };
    this.onKeyDown = (ev) => {
      const handler = this.onKeyDownHandlers(ev);
      if (handler) {
        ev.stopPropagation();
        ev.preventDefault();
        return handler();
      }
      console.log("key-pressed:", ev.key);
    };
    this.onKeyDownHandlers = (ev) => onKeyDownHandlers(ev, this);
    this.deleteNodeAndFocusNodeAbove = () => {
      if (this.at == null)
        return this.resetCaretPos();
      const parent = this.at.nodeAboveInView;
      this.at.delete();
      this.setFocusAt(parent);
    };
    this.deleteNodeAndFocusNodeBelow = () => {
      if (this.at == null)
        return this.resetCaretPos();
      let parent = this.at.nodeAboveInView;
      this.at.delete();
      this.setFocusAt(parent?.nodeBelowInView ?? parent);
    };
    this.resetCaretPos = () => {
      this.setFocusAt(this.tree.topLevelNodes[0]);
    };
    this.moveUp = () => {
      if (this.at == null)
        return this.resetCaretPos();
      const nextAt = this.at.nodeAboveInView;
      if (nextAt)
        this.setFocusAt(nextAt);
    };
    this.movePageUp = () => {
      return this.resetCaretPos();
    };
    this.movePageDown = () => {
      if (this.at == null)
        return this.resetCaretPos();
      let ptr = this.at;
      let max = 100;
      let final = this.at;
      while ((ptr = ptr.nodeBelowInView) && max-- > 0) {
        final = ptr;
      }
      this.setFocusAt(final);
    };
    this.moveDown = () => {
      if (this.at == null)
        return this.resetCaretPos();
      const nextAt = this.at.nodeBelowInView;
      if (nextAt)
        this.setFocusAt(nextAt);
    };
    this.moveRight = () => {
      if (this.at == null)
        return this.resetCaretPos();
      const children = this.at.children;
      if (children.length > 0) {
        if (this.at.isOpen)
          return this.setFocusAt(children[0]);
        else
          return this.at.open();
      }
      return this.moveDown();
    };
    this.moveLeft = () => {
      if (this.at == null)
        return this.resetCaretPos();
      if (this.at.isOpen)
        return this.at.close();
      if (this.at.parent)
        return this.at = this.at.parent;
    };
    this.resetCaretPos();
    makeAutoObservable8(this, { filterRef: false, id: false });
  }
  get nodes() {
    return this.tree.topLevelNodes;
  }
  get cursorInfos() {
    const at = this.at;
    if (at == null)
      return null;
    return {
      nodeAboveInTreeview: at.nodeAboveInView?.id,
      nodeBelowInTreeview: at.nodeBelowInView?.id,
      lastDescendant: at.lastDescendant?.id,
      lastChild: at.lastChild?.id,
      descendant_bfs: at.descendantBFS.map((i) => i.id),
      descendant_dfs: at.descendantDFS.map((i) => i.id),
      depth: at.depth,
      parent: at.parent?.id,
      pathStr: at.id,
      siblingsIncludingSelf: at.siblingsIncludingSelf.map((i) => i.id),
      siblingsExcludingSelf: at.siblingsExcludingSelf.map((i) => i.id),
      nextSibling: at.nextSibling?.id,
      prevSibling: at.prevSibling?.id,
      firstChild: at.firstChild?.id
    };
  }
};

// src/rsuite/dropdown/MenuDividerUI.tsx
function MenuDividerUI_() {
  return /* @__PURE__ */ jsx("div", { tw: "divider my-0" });
}

// src/controls/shared/WidgetMenu.tsx
var WidgetMenuUI = observer29(function WidgetMenuUI_(p) {
  return /* @__PURE__ */ jsx(RevealUI, { className: p.className, content: () => /* @__PURE__ */ jsx(menu_widgetActions.UI, { props: p.widget }), children: /* @__PURE__ */ jsx(Button, { subtle: true, icon: "mdiDotsVertical", look: "ghost", square: true, size: "input" }) });
});
var menu_widgetActions = menu({
  title: "widget actions",
  entries: (widget) => {
    const out = [];
    out.push(
      new SimpleMenuAction({
        label: "Reset",
        icon: "mdiUndoVariant",
        disabled: () => !widget.hasChanges,
        onPick: () => widget.reset()
      })
    );
    out.push(MenuDividerUI_);
    out.push(
      new SimpleMenuAction({
        label: "Expand All",
        icon: "mdiExpandAll",
        disabled: widget.hasNoChild,
        onPick: () => widget.expandAllChildren()
      })
    );
    out.push(
      new SimpleMenuAction({
        label: "Collapse All",
        icon: "mdiCollapseAll",
        onPick: () => widget.collapseAllChildren()
      })
    );
    out.push(MenuDividerUI_);
    out.push(
      new SimpleMenuModal({
        label: "Create Preset",
        submit: () => {
          console.log(`[\u{1F920}] values`);
        },
        UI: () => {
          const tree = new Tree([widget.asTreeElement("root")]);
          const treeView = new TreeView(tree, { selectable: true });
          return /* @__PURE__ */ jsx(
            TreeUI,
            {
              title: "Select values to include in preset",
              treeView
            }
          );
        }
      })
    );
    out.push(MenuDividerUI_);
    const presets = widget.config.presets ?? [];
    for (const entry of presets) {
      out.push(
        new SimpleMenuAction({
          label: entry.label,
          icon: entry.icon,
          onPick: () => entry.apply(widget)
        })
      );
    }
    return out;
  }
});

// src/controls/shared/WidgetTooltipUI.tsx
import { observer as observer30 } from "mobx-react-lite";
var WidgetTooltipUI = observer30(function WidgetTooltipUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(RevealUI, { content: () => /* @__PURE__ */ jsx("div", { children: widget.config.tooltip }), children: /* @__PURE__ */ jsx(Frame, { square: true, icon: "mdiInformationOutline" }) });
});

// src/controls/shared/WidgetUndoChangesButtonUI.tsx
import { observer as observer31 } from "mobx-react-lite";
var WidgetUndoChangesButtonUI = observer31(function WidgetUndoChangesButtonUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(
    Button,
    {
      subtle: true,
      className: p.className,
      onClick: () => widget?.reset(),
      disabled: !(widget?.hasChanges ?? false),
      icon: "mdiUndoVariant",
      look: "ghost",
      size: "input",
      square: true
    }
  );
});

// src/controls/shared/WidgetWithLabelUI.tsx
var WidgetWithLabelUI = observer32(function WidgetWithLabelUI_(p) {
  if (p.widget.isHidden)
    return null;
  const rootKey = p.rootKey;
  const originalWidget = p.widget;
  const widget = getActualWidgetToDisplay(originalWidget);
  const HeaderUI = widget.header();
  const BodyUI = widget.body();
  const justify = p.alignLabel ?? getIfWidgetNeedAlignedLabel(widget);
  const showBorder = widget.border;
  const labelText = (() => {
    if (p.label != null)
      return p.label;
    if (widget.config.label != null)
      return widget.config.label;
    return makeLabelFromFieldName(p.rootKey);
  })();
  const LABEL = (
    // <span onClick={onLabelClick} style={{ lineHeight: '1rem' }}>
    /* @__PURE__ */ jsxs(
      "span",
      {
        tw: [widget.isCollapsed || widget.isCollapsible ? "cursor-pointer" : null],
        className: "COLLAPSE-PASSTHROUGH whitespace-nowrap",
        style: { lineHeight: "1rem" },
        children: [
          labelText,
          widget.config.showID ? /* @__PURE__ */ jsxs("span", { tw: "opacity-50 italic text-sm", children: [
            "#",
            widget.id.slice(0, 3)
          ] }) : null
        ]
      }
    )
  );
  const extraClass = originalWidget.isDisabled ? "pointer-events-none opacity-30 bg-[#00000005]" : void 0;
  const kit = useCushyKit();
  const boxBase = widget.background && widget.isCollapsible || showBorder ? { contrast: 0.05 } : void 0;
  const WUI = /* @__PURE__ */ jsxs(
    Frame,
    {
      base: boxBase,
      ...p.widget.config.box,
      children: [
        /* @__PURE__ */ jsxs(WidgetHeaderContainerUI, { widget, children: [
          /* @__PURE__ */ jsxs(WidgetLabelContainerUI, { justify, children: [
            /* @__PURE__ */ jsx(WidgetLabelCaretUI, { widget }),
            /* @__PURE__ */ jsx(WidgetLabelIconUI, { widget }),
            BodyUI && /* @__PURE__ */ jsx(Widget_ToggleUI, { tw: "mr-1", widget: originalWidget }),
            widget.config.tooltip && /* @__PURE__ */ jsx(WidgetTooltipUI, { widget }),
            LABEL,
            !BodyUI && /* @__PURE__ */ jsx(Widget_ToggleUI, { tw: "ml-1", widget: originalWidget })
          ] }),
          HeaderUI && /* @__PURE__ */ jsx(WidgetHeaderControlsContainerUI, { className: extraClass, children: /* @__PURE__ */ jsx(ErrorBoundaryUI, { children: HeaderUI }) }),
          /* @__PURE__ */ jsx("div", { tw: "ml-auto" }),
          widget.spec.LabelExtraUI && /* @__PURE__ */ jsx(widget.spec.LabelExtraUI, { widget }),
          kit.showWidgetUndo && /* @__PURE__ */ jsx(WidgetUndoChangesButtonUI, { widget }),
          kit.showWidgetMenu && /* @__PURE__ */ jsx(WidgetMenuUI, { widget })
        ] }),
        BodyUI && !widget.isCollapsed && /* @__PURE__ */ jsx(ErrorBoundaryUI, { children: /* @__PURE__ */ jsx("div", { className: extraClass, tw: [widget.isCollapsible && "WIDGET-BLOCK"], children: BodyUI }) }),
        /* @__PURE__ */ jsx(WidgetErrorsUI, { widget })
      ]
    },
    rootKey
  );
  if (widget.animateResize)
    return /* @__PURE__ */ jsx(AnimatedSizeUI, { children: WUI });
  return WUI;
});

// src/controls/Validation.ts
var normalizeProblem = (problem) => {
  if (problem === true)
    return [];
  if (problem === false)
    return [{ message: "Error" }];
  if (problem == null)
    return [];
  if (typeof problem === "string")
    return [{ message: problem }];
  if (Array.isArray(problem))
    return problem.flatMap((p) => normalizeProblem(p));
  return [problem];
};

// src/controls/BaseWidget.tsx
var ensureObserver = (fn) => {
  if (fn == null)
    return null;
  const isObserver = "$$typeof" in fn && fn.$$typeof === Symbol.for("react.memo");
  const FmtUI = isObserver ? fn : observer33(fn);
  return FmtUI;
};
var BaseWidget = class {
  constructor() {
    this.UIToggle = (p) => /* @__PURE__ */ jsx(Widget_ToggleUI, { widget: this, ...p });
    this.UIErrors = () => /* @__PURE__ */ jsx(WidgetErrorsUI, { widget: this });
    this.UILabelCaret = () => /* @__PURE__ */ jsx(WidgetLabelCaretUI, { widget: this });
    this.UILabelIcon = () => /* @__PURE__ */ jsx(WidgetLabelIconUI, { widget: this });
    this.UILabelContainer = (p) => /* @__PURE__ */ jsx(WidgetLabelContainerUI, { ...p });
    this.UIHeaderContainer = (p) => /* @__PURE__ */ jsx(WidgetHeaderContainerUI, { widget: this, children: p.children });
    this.collapseAllChildren = () => {
      for (const _item of this.subWidgets) {
        const item = getActualWidgetToDisplay(_item);
        if (item.serial.collapsed)
          continue;
        const isCollapsible = item.isCollapsible;
        if (isCollapsible)
          item.setCollapsed(true);
      }
    };
    this.expandAllChildren = () => {
      for (const _item of this.subWidgets) {
        const item = getActualWidgetToDisplay(_item);
        item.setCollapsed(void 0);
      }
    };
    /**
     * 2024-05-24 rvion: do we want some abstract defaultValue() too ?
     * feels like it's going to be PITA to use for higher level objects 🤔
     * but also... why not...
     * 🔶 some widget like `WidgetPrompt` would not work with such logic
     * 🔶 some widget like `Optional` have no simple way to retrieve the default value
     */
    // abstract readonly defaultValue: this['spec']['$Value'] |
    this.$WidgetSym = $WidgetSym;
    /**
     * when this widget or one of its descendant publishes a value,
     * it will be stored here and possibly consumed by other descendants
     */
    this._advertisedValues = {};
  }
  // abstract readonly id: string
  asTreeElement(key) {
    return {
      key: this.id,
      ctor: TreeWidget,
      props: { key, widget: this }
    };
  }
  /** shorthand access to config */
  get config() {
    return this.spec.config;
  }
  get animateResize() {
    return true;
  }
  /**
   * return true when widget has no child
   * return flase when widget has one or more child
   * */
  get hasNoChild() {
    return this.subWidgets.length === 0;
  }
  /**
   * when consuming an advertised value, walk upward the parent chain, and look for
   * a value stored in the advsertised values
   */
  // 🚴🏠 -> consume / pull / receive / fetch / ... ?
  consume(chan) {
    const channelId = typeof chan === "string" ? chan : chan.id;
    let at = this;
    while (at != null) {
      if (channelId in at._advertisedValues)
        return at._advertisedValues[channelId];
      at = at.parent;
    }
    return null;
  }
  /** true if errors.length > 0 */
  get hasErrors() {
    const errors = this.errors;
    return errors.length > 0;
  }
  /**
   * return a short string summary
   * expected to be overriden in child classes
   */
  get summary() {
    return JSON.stringify(this.value);
  }
  /** all errors: base (built-in widget) + custom (user-defined in config) */
  get errors() {
    const SELF = this;
    const baseErrors = normalizeProblem(SELF.baseErrors);
    return [...baseErrors, ...this.customErrors];
  }
  get customErrors() {
    const SELF = this;
    if (SELF.config.check == null)
      return [
        /* { message: 'No check function provided' } */
      ];
    const res = SELF.config.check(this);
    return normalizeProblem(res);
  }
  // BUMP ----------------------------------------------------
  bumpSerial() {
    this.form.serialChanged(this);
  }
  // 💬 2024-03-15 rvion: use this regexp to quickly review manual serial set patterns
  // | `serial\.[a-zA-Z_]+(\[[a-zA-Z_]+\])? = `
  bumpValue() {
    this.serial.lastUpdatedAt = Date.now();
    this.form.valueChanged(this);
    this.config.onValueChange?.(this.value, this);
    this.publishValue();
  }
  /**
   * this method can be heavilly optimized
   * todo:
   *  - by storing the published value locally
   *  - by defining a getter on the _advertisedValues object of all parents
   *  - by only setting this getter up once.
   * */
  publishValue() {
    const producers = this.spec.producers;
    if (producers.length === 0)
      return;
    const producedValues = {};
    for (const producer of producers) {
      const channelId = typeof producer.chan === "string" ? producer.chan : producer.chan.id;
      producedValues[channelId] = producer.produce(this);
    }
    let at = this;
    while (at != null) {
      Object.assign(at._advertisedValues, producedValues);
      at = at.parent;
    }
  }
  get isHidden() {
    if (this.config.hidden != null)
      return this.config.hidden;
    if (isWidgetGroup(this) && Object.keys(this.fields).length === 0)
      return true;
    return false;
  }
  /** whether the widget should be considered inactive */
  get isDisabled() {
    return isWidgetOptional(this) && !this.serial.active;
  }
  get isCollapsed() {
    if (!this.isCollapsible)
      return false;
    if (this.serial.collapsed != null)
      return this.serial.collapsed;
    if (this.parent?.isDisabled)
      return true;
    return false;
  }
  /** if specified, override the default algorithm to decide if the widget should have borders */
  get isCollapsible() {
    if (this.config.collapsed != null)
      return this.config.collapsed;
    if (!this.DefaultBodyUI)
      return false;
    if (this.config.label === false)
      return false;
    return true;
  }
  /** if provided, override the default logic to decide if the widget need to be bordered */
  get border() {
    if (this.parent == null)
      return false;
    if (this.config.border != null)
      return this.config.border;
    if (this.DefaultBodyUI == null)
      return false;
    return true;
  }
  // FOLD ----------------------------------------------------
  setCollapsed(val) {
    if (this.serial.collapsed === val)
      return;
    this.serial.collapsed = val;
    this.form.serialChanged(this);
  }
  toggleCollapsed() {
    this.serial.collapsed = !this.serial.collapsed;
    this.form.serialChanged(this);
  }
  // UI ----------------------------------------------------
  ui() {
    return /* @__PURE__ */ jsx(WidgetWithLabelUI, { isTopLevel: true, widget: this, rootKey: "_" }, this.id);
  }
  defaultHeader() {
    if (this.DefaultHeaderUI == null)
      return;
    return /* @__PURE__ */ jsx(this.DefaultHeaderUI, { widget: this });
  }
  defaultBody() {
    if (this.DefaultBodyUI == null)
      return;
    return /* @__PURE__ */ jsx(this.DefaultBodyUI, { widget: this });
  }
  header() {
    const HeaderUI = "header" in this.config ? ensureObserver(this.config.header) : this.DefaultHeaderUI;
    if (HeaderUI == null)
      return;
    return /* @__PURE__ */ jsx(HeaderUI, { widget: this });
  }
  body() {
    const BodyUI = "body" in this.config ? ensureObserver(this.config.body) : this.DefaultBodyUI;
    if (BodyUI == null)
      return;
    return /* @__PURE__ */ jsx(BodyUI, { widget: this });
  }
  /** list of all subwidgets, without named keys */
  get subWidgets() {
    return [];
  }
  /** list of all subwidgets, without named keys */
  get subWidgetsWithKeys() {
    return [];
  }
  // --------------------------------------------------------------------------------
  // 🔶 the 5 getters bellow are temporary hacks to make shared keep working
  // until every shared usage has been migrated
  /** getter that resolve to `this.spec.producers` */
  get producers() {
    return this.spec.producers;
  }
  /** getter that resolve to `this.spec.publish` */
  get publish() {
    return this.spec.publish;
  }
  /** getter that resolve to `this.spec.subscribe` */
  get subscribe() {
    return this.spec.subscribe;
  }
  /** getter that resolve to `this.spec.reactions` */
  get reactions() {
    return this.spec.reactions;
  }
  /** getter that resolve to `this.spec.addReaction` */
  get addReaction() {
    return this.spec.addReaction;
  }
  get icon() {
    const x = this.spec.config.icon;
    if (x == null)
      return null;
    if (typeof x === "string")
      return x;
    return x(this);
  }
  /** this function MUST be called at the end of every widget constructor */
  init(mobxOverrides) {
    makeAutoObservableInheritance(this, mobxOverrides);
    const self = this;
    const config = self.config;
    const serial = self.serial;
    if (config.onCreate) {
      const oldKey = serial._creationKey;
      const newKey = config.onCreate.evaluationKey ?? "default";
      if (oldKey !== newKey) {
        config.onCreate(this);
        serial._creationKey = newKey;
      }
    }
    if (config.onInit) {
      config.onInit(this);
    }
  }
};

// src/controls/widgets/bool/WidgetBoolUI.tsx
import { observer as observer35 } from "mobx-react-lite";

// src/controls/widgets/spacer/SpacerUI.tsx
import { observer as observer34 } from "mobx-react-lite";
var SpacerUI = observer34(function SpacerUI_(p) {
  return /* @__PURE__ */ jsx("div", { tw: ["ml-auto"] });
});

// src/controls/widgets/bool/WidgetBoolUI.tsx
var WidgetBoolUI = observer35(function WidgetBoolUI_(p) {
  const widget = p.widget;
  if (widget.config.label2) {
    console.warn("label2 is deprecated, please use the text option instead. label2 will be removed in the future");
  }
  return /* @__PURE__ */ jsxs("div", { tw: "flex w-full h-full ", children: [
    /* @__PURE__ */ jsx(
      InputBoolUI,
      {
        display: widget.config.display,
        expand: widget.config.display === "button" ? widget.config.expand : true,
        icon: widget.icon,
        text: widget.config.text ?? widget.config.label2,
        value: widget.value,
        onValueChange: (value) => widget.value = value
      }
    ),
    /* @__PURE__ */ jsx(SpacerUI, {})
  ] });
});

// src/controls/widgets/bool/WidgetBool.tsx
var Widget_bool = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetBoolUI;
    this.DefaultBodyUI = void 0;
    this.type = "bool";
    this.setOn = () => this.value = true;
    this.setOff = () => this.value = false;
    this.toggle = () => this.value = !this.value;
    this.defaultValue = this.config.default ?? false;
    // prettier-ignore
    this.reset = () => this.value = this.defaultValue;
    this.id = serial?.id ?? nanoid6();
    this.serial = serial ?? {
      id: this.id,
      type: "bool",
      active: this.spec.config.default ?? false,
      collapsed: this.spec.config.startCollapsed
    };
    this.init({
      serial: observable8,
      value: computed3,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    return this.value !== this.defaultValue;
  }
  get value() {
    return this.serial.active ?? false;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.active === next)
      return;
    runInAction4(() => {
      this.serial.active = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("bool", Widget_bool);

// src/controls/widgets/button/WidgetButton.ts
import { runInAction as runInAction6 } from "mobx";
import { nanoid as nanoid7 } from "nanoid";

// src/controls/widgets/button/WidgetButtonUI.tsx
import { runInAction as runInAction5 } from "mobx";
import { observer as observer36 } from "mobx-react-lite";
var WidgetInlineRunUI = observer36(function WidgetInlineRunUI_(p) {
  const extra = p.widget.config.useContext?.();
  const context = { widget: p.widget, context: extra };
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: [
        "btn btn-sm join-item",
        p.widget.config.kind === `special` ? `btn-secondary` : p.widget.config.kind === `warning` ? `btn-warning` : `btn-primary`
      ],
      className: "self-start",
      onClick: () => runInAction5(() => p.widget.config.onClick?.(context)),
      children: p.widget.config.text ?? `Run`
    }
  );
});

// src/controls/widgets/button/WidgetButton.ts
var Widget_button = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetInlineRunUI;
    this.DefaultBodyUI = void 0;
    this.type = "button";
    // prettier-ignore
    this.reset = () => this.value = this.defaultValue;
    this.id = serial?.id ?? nanoid7();
    const config = spec.config;
    if (config.text) {
      config.label = config.label ?? ` `;
    }
    this.serial = serial ?? {
      type: "button",
      collapsed: config.startCollapsed,
      id: this.id,
      val: config.default ?? false
    };
    this.init({
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get defaultValue() {
    return this.config.default ?? false;
  }
  // prettier-ignore
  get hasChanges() {
    return this.serial.val !== this.defaultValue;
  }
  get value() {
    return this.serial.val;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction6(() => {
      this.serial.val = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("button", Widget_button);

// src/controls/widgets/choices/WidgetChoices.tsx
import { nanoid as nanoid8 } from "nanoid";

// src/utils/misc/toasts.tsx
import { toast } from "react-toastify";
var position = "bottom-right";
var toastError = (msg) => void toast(msg, { type: "error", position });

// src/controls/widgets/choices/WidgetChoicesUI.tsx
import { observer as observer41 } from "mobx-react-lite";

// src/rsuite/select/SelectUI.tsx
import { observer as observer38 } from "mobx-react-lite";
import { useMemo as useMemo5 } from "react";

// src/rsuite/select/SelectPopupUI.tsx
import { observer as observer37 } from "mobx-react-lite";
import { createPortal as createPortal2 } from "react-dom";
var SelectPopupUI = observer37(function SelectPopupUI_(p) {
  const s = p.s;
  const isDraggingListener3 = (ev) => {
    if (ev.button != 0)
      return;
    s.isDragging = false;
    window.removeEventListener("mouseup", isDraggingListener3, true);
  };
  return createPortal2(
    /* @__PURE__ */ jsx(
      Frame,
      {
        ref: s.popupRef,
        tw: [
          "MENU-ROOT _SelectPopupUI  flex",
          // 'border-l border-r border-base-300',
          "overflow-auto",
          s.tooltipPosition.bottom != null ? "rounded-t border-t" : "rounded-b border-b"
        ],
        style: {
          minWidth: s.anchorRef.current?.clientWidth ?? "100%",
          maxWidth: window.innerWidth - (s.tooltipPosition.left != null ? s.tooltipPosition.left : s.tooltipPosition.right ?? 0),
          pointerEvents: "initial",
          position: "absolute",
          zIndex: 99999999,
          top: s.tooltipPosition.top != null ? `${s.tooltipPosition.top}px` : "unset",
          bottom: s.tooltipPosition.bottom != null ? `${s.tooltipPosition.bottom}px` : "unset",
          left: s.tooltipPosition.left != null ? `${s.tooltipPosition.left}px` : "unset",
          right: s.tooltipPosition.right != null ? `${s.tooltipPosition.right}px` : "unset",
          maxHeight: `${s.tooltipMaxHeight}px`
          // Adjust positioning as needed
        },
        onMouseDown: (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
        },
        onMouseEnter: (ev) => {
          if (s.isOpen) {
            s.hasMouseEntered = true;
          }
        },
        children: /* @__PURE__ */ jsxs("ul", { className: " max-h-96", tw: "flex-col w-full", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("div", { tw: "overflow-hidden", children: s.displayValue }) }),
          s.filteredOptions.length === 0 ? /* @__PURE__ */ jsx("li", { className: "WIDGET-FIELD text-base", children: "No results" }) : null,
          s.filteredOptions.map((option, index) => {
            const isSelected = s.values.find((v) => s.isEqual(v, option)) != null;
            return /* @__PURE__ */ jsx(
              "li",
              {
                style: { minWidth: "10rem" },
                tw: ["flex rounded py-0.5", "h-auto"],
                onMouseEnter: (ev) => {
                  s.setNavigationIndex(index);
                  if (!s.isDragging || isSelected == s.wasEnabled)
                    return;
                  s.onMenuEntryClick(ev, index);
                },
                onMouseDown: (ev) => {
                  if (ev.button != 0)
                    return;
                  s.isDragging = true;
                  s.wasEnabled = !isSelected;
                  s.onMenuEntryClick(ev, index);
                  window.addEventListener("mouseup", isDraggingListener3, true);
                },
                children: /* @__PURE__ */ jsxs(
                  Frame,
                  {
                    base: {
                      contrast: isSelected ? s.selectedIndex === index ? 0.75 : 0.7 : s.selectedIndex === index ? 0.05 : 0
                    },
                    tw: [
                      "WIDGET-FIELD pl-0.5 flex w-full items-center rounded",
                      "active:cursor-default cursor-pointer",
                      index === s.selectedIndex ? "bg-base-300" : null
                    ],
                    children: [
                      s.isMultiSelect && /* @__PURE__ */ jsx(InputBoolCheckboxUI, { mode: "checkbox", value: isSelected, expand: false }),
                      /* @__PURE__ */ jsx("div", { tw: "pl-0.5 flex w-full h-full items-center truncate", children: s.p.getLabelUI ? s.p.getLabelUI(option) : s.p.getLabelText(option) })
                    ]
                  }
                )
              },
              index
            );
          })
        ] })
      }
    ),
    document.getElementById("tooltip-root")
  );
});

// src/rsuite/select/SelectState.tsx
import { makeAutoObservable as makeAutoObservable9 } from "mobx";
import React from "react";

// src/utils/misc/searchMatches.ts
function unaccent(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function normalizeText(text) {
  return unaccent(text.toLowerCase());
}
function searchMatches(haystack, needle) {
  return normalizeText(haystack).includes(normalizeText(needle));
}

// src/rsuite/select/SelectState.tsx
var AutoCompleteSelectState = class {
  constructor(p) {
    this.p = p;
    this.isMultiSelect = this.p.multiple ?? false;
    this._searchQuery = "";
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
    this.isEqual = (a, b) => {
      if (this.p.equalityCheck)
        return this.p.equalityCheck(a, b);
      return a === b;
    };
    this.anchorRef = React.createRef();
    this.inputRef = React.createRef();
    this.popupRef = React.createRef();
    this.selectedIndex = 0;
    this.isOpen = false;
    this.isDragging = false;
    this.isFocused = false;
    this.wasEnabled = false;
    this.hasMouseEntered = false;
    this.tooltipPosition = { top: void 0, bottom: void 0, left: void 0, right: void 0 };
    this.tooltipMaxHeight = 100;
    this.updatePosition = () => {
      const rect = this.anchorRef.current?.getBoundingClientRect();
      if (rect == null)
        return;
      this.tooltipPosition = {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        right: void 0,
        bottom: void 0
      };
      const onBottom = window.innerHeight * 0.5 < (rect.top + rect.bottom) * 0.5;
      const onLeft = window.innerWidth * 0.5 < (rect.left + rect.right) * 0.5;
      this.tooltipMaxHeight = (window.innerHeight - rect.bottom) * 0.99;
      const inputHeight = parseInt(window.getComputedStyle(document.body).getPropertyValue("--input-height"));
      const desiredHeight = Math.min(this.options.length * inputHeight * 1.25);
      const bottomSpace = window.innerHeight - rect.bottom;
      if (onBottom && desiredHeight > bottomSpace) {
        this.tooltipMaxHeight = rect.top * 0.99;
        this.tooltipPosition.top = void 0;
        this.tooltipPosition.bottom = window.innerHeight - rect.top;
      }
      if (onLeft) {
        this.tooltipPosition.left = void 0;
        this.tooltipPosition.right = window.innerWidth - rect.right;
      }
    };
    this.onRealWidgetMouseDown = (ev) => {
      this.hasMouseEntered = true;
      this.openMenu();
    };
    this.openMenu = () => {
      this.isOpen = true;
      this.updatePosition();
      this.inputRef.current?.focus();
      window.addEventListener("mousemove", this.MouseMoveTooFar, true);
    };
    // click means focus change => means need to refocus the input
    this.onMenuEntryClick = (ev, index) => {
      ev.preventDefault();
      ev.stopPropagation();
      this.selectOption(index);
      this.inputRef.current?.focus();
    };
    this.handleInputChange = (event) => {
      this.filterOptions(event.target.value);
      this.updatePosition();
    };
    // Close pop-up if too far outside
    // 💬 2024-02-29 rvion:
    // | this code was a good idea; but it's really
    // | not pleasant when working mostly with keyboard and using tab to open selects.
    // | as soon as the moouse move just one pixel, popup close.
    // |  =>  commenting it out until we find a solution confortable in all cases
    this.MouseMoveTooFar = (event) => {
      const popup = this.popupRef?.current;
      const anchor = this.anchorRef?.current;
      if (!popup || !anchor || !this.hasMouseEntered) {
        return;
      }
      const x = event.clientX;
      const y = event.clientY;
      const maxDistance = 75;
      if (
        // left
        popup.offsetLeft - x > maxDistance || // top
        popup.offsetTop - y > maxDistance || // right
        x - (popup.offsetLeft + popup.offsetWidth) > maxDistance || // bottom
        y - (popup.offsetTop + popup.offsetHeight) > maxDistance
      ) {
        this.closeMenu();
      }
    };
    this.onBlur = () => this.closeMenu();
    this.handleTooltipKeyDown = (ev) => {
      if (ev.key === "ArrowDown")
        this.navigateSelection("down");
      else if (ev.key === "ArrowUp")
        this.navigateSelection("up");
      else if (ev.key === "Enter" && !ev.metaKey && !ev.ctrlKey)
        this.selectOption(this.selectedIndex);
    };
    this.onRealInputKeyUp = (ev) => {
      if (ev.key === "Enter" && !this.isOpen) {
        this.openMenu();
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      if (ev.key === "Escape") {
        this.closeMenu();
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      if (!this.isOpen) {
        this.openMenu();
        this.setNavigationIndex(0);
        ev.preventDefault();
        ev.stopPropagation();
      }
    };
    makeAutoObservable9(this, {
      popupRef: false,
      anchorRef: false,
      inputRef: false
    });
  }
  get options() {
    return this.p.options?.(this.searchQuery) ?? [];
  }
  get searchQuery() {
    return this.p.getSearchQuery?.() ?? this._searchQuery;
  }
  set searchQuery(value) {
    if (this.p.setSearchQuery)
      this.p.setSearchQuery(value);
    else
      this._searchQuery = value;
  }
  get filteredOptions() {
    if (this.searchQuery === "")
      return this.options;
    if (this.p.disableLocalFiltering)
      return this.options;
    return this.options.filter((p) => {
      const label = this.p.getLabelText(p);
      return searchMatches(label, this.searchQuery);
    });
  }
  /**
   * return the index of the first selected Item amongst options;
   * just in case the name wasn't clear enough.
   * TODO: rename this funciton, and remove this comment about the function name.
   */
  get indexOfFirstSelectedItemAmongstOptions() {
    const firstSelection = this.firstValue;
    if (firstSelection == null)
      return null;
    return this.options.findIndex((o) => this.isEqual(o, firstSelection));
  }
  /** return the first selected value */
  get firstValue() {
    const v = this.value;
    if (v == null)
      return null;
    if (Array.isArray(v)) {
      if (v.length === 0)
        return null;
      return v[0];
    }
    return v;
  }
  /** currently selected value or values */
  get value() {
    return this.p.value?.();
  }
  /** list of all selected values */
  get values() {
    const v = this.value;
    if (v == null)
      return [];
    return Array.isArray(v) ? v : [v];
  }
  get displayValue() {
    if (this.p.hideValue)
      return this.p.placeholder ?? "";
    let value = this.value;
    const placeHolderStr = this.p.placeholder ?? "Select...";
    if (value == null)
      return placeHolderStr;
    value = Array.isArray(value) ? value : [value];
    const str = value.length === 0 ? placeHolderStr : value.map((i) => {
      const label = this.p.getLabelText(i);
      if (!this.p.multiple)
        return label;
      return /* @__PURE__ */ jsx(
        "div",
        {
          tw: "badge badge-primary text-shadow-inv cursor-not-allowed line-clamp-1",
          onClick: () => this.p.onChange?.(i, this),
          children: label
        },
        label
      );
    });
    if (this.p.label)
      return /* @__PURE__ */ jsxs("div", { tw: "flex gap-1", children: [
        this.p.label,
        ": ",
        str
      ] });
    return /* @__PURE__ */ jsx("div", { tw: "flex gap-1", children: str });
  }
  closeMenu() {
    this.isOpen = false;
    this.isFocused = false;
    this.selectedIndex = 0;
    this.searchQuery = "";
    this.isDragging = false;
    this.hasMouseEntered = false;
    window.removeEventListener("mousemove", this.MouseMoveTooFar, true);
  }
  filterOptions(inputValue) {
    this.searchQuery = inputValue;
    this.isOpen = true;
    this.setNavigationIndex(0);
  }
  selectOption(index) {
    const selectedOption = this.filteredOptions[index];
    if (selectedOption != null) {
      this.p.onChange?.(selectedOption, this);
      const shouldResetQuery = this.p.resetQueryOnPick ?? false;
      const shouldCloseMenu = this.p.closeOnPick ?? !this.isMultiSelect;
      if (shouldResetQuery)
        this.searchQuery = "";
      if (shouldCloseMenu)
        this.closeMenu();
    }
  }
  navigateSelection(direction) {
    this.updatePosition();
    if (direction === "up" && this.selectedIndex > 0) {
      this.selectedIndex--;
    } else if (direction === "down" && this.selectedIndex < this.filteredOptions.length - 1) {
      this.selectedIndex++;
    }
  }
  setNavigationIndex(value) {
    this.updatePosition();
    this.selectedIndex = value;
  }
};

// src/rsuite/select/SelectUI.tsx
var SelectUI = observer38(function SelectUI_(p) {
  const s = useMemo5(() => new AutoCompleteSelectState(
    /* st, */
    p
  ), []);
  return /* @__PURE__ */ jsx(
    Frame,
    {
      base: { contrast: 0.05 },
      hover: true,
      tabIndex: -1,
      tw: ["WIDGET-FIELD ", "flex flex-1 items-center relative"],
      border: true,
      className: p.className,
      ref: s.anchorRef,
      onKeyUp: s.onRealInputKeyUp,
      onMouseDown: s.onRealWidgetMouseDown,
      onKeyDown: s.handleTooltipKeyDown,
      onFocus: (ev) => {
        s.isFocused = true;
        if (ev.relatedTarget != null && !(ev.relatedTarget instanceof Window)) {
          s.openMenu();
        }
      },
      onBlur: s.onBlur,
      children: /* @__PURE__ */ jsxs("div", { className: "flex-1 h-full ", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            tabIndex: -1,
            tw: [
              "text-sm",
              "flex items-center gap-1",
              "p-0 h-full bg-transparent",
              "select-none pointer-events-none overflow-clip"
            ],
            children: s.isOpen || s.isFocused ? null : (
              /* Using grid here to make sure that inner text will truncate instead of pushing the right-most icon out of the container. */
              /* @__PURE__ */ jsxs(
                "div",
                {
                  tw: [
                    //
                    " h-full w-full items-center",
                    "px-0.5",
                    "grid"
                  ],
                  style: { gridTemplateColumns: "24px 1fr 24px" },
                  children: [
                    /* @__PURE__ */ jsx(Ikon.mdiTextBoxSearchOutline, { size: "18px" }),
                    /* @__PURE__ */ jsx("div", { tw: "overflow-hidden line-clamp-1 text-ellipsis flex-grow", children: s.displayValue }),
                    /* @__PURE__ */ jsx(Ikon.mdiChevronDown, { size: "18px" })
                  ]
                }
              )
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { tw: "absolute top-0 left-0 right-0 z-50 h-full", children: /* @__PURE__ */ jsx(
          "input",
          {
            placeholder: s.isOpen ? p.placeholder : void 0,
            ref: s.inputRef,
            onChange: s.handleInputChange,
            tw: "w-full h-full !outline-none bg-transparent",
            type: "text",
            value: s.searchQuery
          }
        ) }),
        s.isOpen && /* @__PURE__ */ jsx(SelectPopupUI, { s })
      ] })
    }
  );
});

// src/controls/widgets/group/WidgetGroupUI.tsx
import { observer as observer40 } from "mobx-react-lite";

// src/rsuite/box/BoxMisc.tsx
import { observer as observer39 } from "mobx-react-lite";
var BoxBase = observer39(function BoxTitleUI_({ children, ...rest }) {
  return /* @__PURE__ */ jsx(Frame, { ...rest, base: { contrast: 0.05 }, children });
});
var BoxTitle = observer39(function BoxTitleUI_2({ children, ...rest }) {
  return /* @__PURE__ */ jsx(Frame, { ...rest, text: { contrast: 1, chromaBlend: 100, hueShift: 0 }, children });
});
var BoxSubtle = observer39(function BoxSubtle_({ children, ...rest }) {
  return /* @__PURE__ */ jsx(Frame, { ...rest, text: { contrast: 0.4, chromaBlend: 1, hueShift: 0 }, children });
});

// src/controls/widgets/group/WidgetGroupUI.tsx
var WidgetGroup_LineUI = observer40(function WidgetGroup_LineUI_(p) {
  if (!p.widget.serial.collapsed)
    return null;
  return /* @__PURE__ */ jsx(BoxSubtle, { className: "COLLAPSE-PASSTHROUGH", tw: "line-clamp-1 italic", children: p.widget.summary });
});
var WidgetGroup_BlockUI = observer40(function WidgetGroup_BlockUI_(p) {
  const widget = p.widget;
  const isTopLevel = widget.config.topLevel;
  const groupFields = Object.entries(widget.fields);
  const isHorizontal = widget.config.layout === "H";
  return /* @__PURE__ */ jsx(WidgetFieldsContainerUI, { layout: p.widget.config.layout, tw: [widget.config.className, p.className], children: groupFields.map(([rootKey, sub], ix) => /* @__PURE__ */ jsx(
    WidgetWithLabelUI,
    {
      isTopLevel,
      rootKey,
      alignLabel: isHorizontal ? false : widget.config.alignLabel,
      widget: bang(sub)
    },
    rootKey
  )) });
});
var WidgetFieldsContainerUI = observer40(function WidgetFieldsContainerUI_(p) {
  const isHorizontal = p.layout === "H";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: p.className,
      tw: [
        //
        isHorizontal ? `flex gap-1 flex-wrap` : `flex gap-1 flex-col`,
        "w-full",
        p.className
      ],
      children: p.children
    }
  );
});

// src/controls/widgets/choices/WidgetChoicesUI.tsx
var WidgetChoices_HeaderUI = observer41(function WidgetChoices_LineUI_(p) {
  if (p.widget.config.appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetChoices_TabHeaderUI, { widget: p.widget });
  else
    return /* @__PURE__ */ jsx(WidgetChoices_SelectHeaderUI, { widget: p.widget });
});
var WidgetChoices_BodyUI = observer41(function WidgetChoices_BodyUI_(p) {
  const widget = p.widget;
  const activeSubwidgets = Object.entries(widget.children).map(([branch, subWidget]) => ({ branch, subWidget }));
  return /* @__PURE__ */ jsx(
    WidgetFieldsContainerUI,
    {
      layout: widget.config.layout,
      tw: [widget.config.className, p.className],
      children: activeSubwidgets.map((val) => {
        const subWidget = val.subWidget;
        if (subWidget == null)
          return /* @__PURE__ */ jsx(Fragment, { children: "\u274C error" });
        return /* @__PURE__ */ jsx(
          WidgetWithLabelUI,
          {
            alignLabel: p.alignLabel,
            rootKey: val.branch,
            widget: subWidget,
            label: widget.isSingle ? false : void 0
          },
          val.branch
        );
      })
    }
  );
});
var WidgetChoices_TabHeaderUI = observer41(function WidgetChoicesTab_LineUI_(p) {
  const widget = p.widget;
  const choices = widget.choicesWithLabels;
  const theme = useTheme();
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: "rounded select-none flex flex-1 flex-wrap gap-x-1 gap-y-0",
      style: {
        justifyContent: widget.config.tabPosition === "start" ? "flex-start" : widget.config.tabPosition === "center" ? "center" : widget.config.tabPosition === "end" ? "flex-end" : "flex-end"
      },
      children: choices.map((c) => {
        const isSelected = widget.serial.branches[c.key];
        return /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            value: isSelected,
            display: "button",
            mode: p.widget.isMulti ? "checkbox" : "radio",
            text: c.label,
            box: isSelected ? void 0 : { text: theme.value.labelText },
            onValueChange: (value) => {
              if (value != isSelected) {
                widget.toggleBranch(c.key);
              }
            }
          },
          c.key
        );
      })
    }
  );
});
var WidgetChoices_SelectHeaderUI = observer41(function WidgetChoices_SelectLineUI_(p) {
  const widget = p.widget;
  const choices = widget.choicesWithLabels;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: [
        //
        "relative",
        p.widget.expand || p.widget.config.alignLabel ? "w-full" : "w-64"
      ],
      onMouseDown: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      },
      children: /* @__PURE__ */ jsx(
        SelectUI,
        {
          tw: "flex-grow",
          placeholder: p.widget.config.placeholder,
          value: () => Object.entries(widget.serial.branches).filter(([_, value]) => value).map(([key, _]) => ({ key, label: choices.find((v) => v.key === key)?.label ?? key })),
          options: () => choices,
          getLabelText: (v) => v.label,
          getLabelUI: (v) => /* @__PURE__ */ jsx("div", { tw: "flex flex-1 justify-between", children: /* @__PURE__ */ jsx("div", { tw: "flex-1", children: v.label }) }),
          equalityCheck: (a, b) => a.key === b.key,
          multiple: widget.config.multi ?? false,
          closeOnPick: false,
          resetQueryOnPick: false,
          onChange: (v) => widget.toggleBranch(v.key)
        }
      )
    }
  );
});

// src/controls/widgets/choices/WidgetChoices.tsx
var Widget_choices = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.UITab = () => /* @__PURE__ */ jsx(WidgetChoices_TabHeaderUI, { widget: this });
    this.UISelect = () => /* @__PURE__ */ jsx(WidgetChoices_HeaderUI, { widget: this });
    this.UIChildren = () => /* @__PURE__ */ jsx(WidgetChoices_BodyUI, { widget: this, alignLabel: false });
    this.DefaultHeaderUI = WidgetChoices_HeaderUI;
    this.DefaultBodyUI = WidgetChoices_BodyUI;
    /* override */
    this.background = true;
    this.type = "choices";
    this.expand = this.config.expand ?? false;
    this.children = {};
    this.isBranchDisabled = (branch) => !this.serial.branches[branch];
    this.id = serial?.id ?? nanoid8();
    const config = spec.config;
    if (typeof config.items === "function") {
      toastError('\u{1F534} ChoicesWidget "items" property should now be an object, not a function');
      debugger;
    }
    this.serial = serial ?? {
      type: "choices",
      id: this.id,
      active: true,
      values_: {},
      branches: {}
    };
    const allBranches = Object.keys(config.items);
    const def = this.config.default;
    const isMulti = this.config.multi;
    if (isMulti) {
      for (const branch of allBranches) {
        const isActive = this.serial.branches[branch] ?? (typeof def === "string" ? branch === def : typeof def === "object" ? def?.[branch] ?? false : null);
        if (isActive)
          this.enableBranch(branch, { skipBump: true });
      }
    } else {
      const allBranches2 = Object.keys(this.config.items);
      const activeBranch = allBranches2.find((x) => this.serial.branches[x]) ?? (def == null ? allBranches2[0] : typeof def === "string" ? def : typeof def === "object" ? Object.entries(def).find(([, v]) => v)?.[0] ?? allBranches2[0] : allBranches2[0]);
      if (activeBranch == null)
        toastError(`\u274C No active branch found for single choice widget "${this.config.label}"`);
      else
        this.enableBranch(activeBranch, { skipBump: true });
    }
    this.init({
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get isMulti() {
    return this.config.multi;
  }
  get isSingle() {
    return !this.config.multi;
  }
  get firstChoice() {
    return this.choices[0];
  }
  get choices() {
    return Object.keys(this.config.items);
  }
  get choicesWithLabels() {
    return Object.entries(this.config.items).map(([key, spec]) => ({
      key,
      // note:
      // if child.config.label === false => makeLabelFromFieldName(key)
      // if child.config.label === '' => makeLabelFromFieldName(key)
      label: spec.config.label || makeLabelFromFieldName(key)
    }));
  }
  /** array of all active branch keys */
  get activeBranches() {
    return Object.keys(this.serial.branches).filter((x) => this.serial.branches[x]);
  }
  get firstActiveBranchName() {
    return this.activeBranches[0];
  }
  get firstActiveBranchWidget() {
    if (this.firstActiveBranchName == null)
      return void 0;
    return this.children[this.firstActiveBranchName];
  }
  get hasChanges() {
    const def = this.config.default;
    for (const branchName of this.choices) {
      const shouldBeActive = def == null ? false : typeof def === "string" ? branchName === def : def[branchName];
      const child = this.children[branchName];
      if (child && !shouldBeActive)
        return true;
      if (!child && shouldBeActive)
        return true;
      if (child && shouldBeActive && child.hasChanges)
        return true;
    }
    return false;
  }
  reset() {
    const def = this.config.default;
    for (const branchName of this.choices) {
      const shouldBeActive = def == null ? false : typeof def === "string" ? branchName === def : def[branchName];
      const child = this.children[branchName];
      if (child && !shouldBeActive)
        this.disableBranch(branchName, { skipBump: true });
      if (!child && shouldBeActive)
        this.enableBranch(branchName, { skipBump: true });
      const childAfter = this.children[branchName];
      if (childAfter && childAfter.hasChanges)
        return true;
    }
    this.bumpValue();
  }
  get subWidgets() {
    return Object.values(this.children);
  }
  get subWidgetsWithKeys() {
    return Object.entries(this.children).map(([key, widget]) => ({ key, widget }));
  }
  toggleBranch(branch) {
    if (this.children[branch]) {
      if (this.isMulti)
        this.disableBranch(branch);
    } else
      this.enableBranch(branch);
  }
  disableBranch(branch, p) {
    if (!this.children[branch])
      throw new Error(`\u274C Branch "${branch}" not enabled`);
    delete this.children[branch];
    this.serial.branches[branch] = false;
    if (!p?.skipBump)
      this.bumpValue();
  }
  enableBranch(branch, p) {
    if (!this.config.multi) {
      for (const key in this.children) {
        this.disableBranch(key);
      }
    }
    if (this.children[branch])
      throw new Error(`\u274C Branch "${branch}" already enabled`);
    let schema = this.config.items[branch];
    if (typeof schema === "function")
      schema = schema();
    if (schema == null)
      throw new Error(`\u274C Branch "${branch}" has no initializer function`);
    const prevBranchSerial = this.serial.values_?.[branch];
    if (prevBranchSerial && schema.type === prevBranchSerial.type) {
      this.children[branch] = this.form.builder._HYDRATE(this, schema, prevBranchSerial);
    } else {
      this.children[branch] = this.form.builder._HYDRATE(this, schema, null);
      this.serial.values_[branch] = this.children[branch]?.serial;
    }
    this.serial.branches[branch] = true;
    if (!p?.skipBump)
      this.bumpValue();
  }
  setValue(val) {
    for (const branch of this.choices) {
      if (val[branch] == null) {
        if (!this.isBranchDisabled(branch)) {
          this.disableBranch(branch);
        }
      } else {
        if (this.isBranchDisabled(branch)) {
          this.enableBranch(branch);
        }
        this.children[branch].setValue(val[branch]);
      }
    }
    this.bumpValue();
  }
  /** results, but only for active branches */
  get value() {
    const out = {};
    for (const branch in this.children) {
      out[branch] = this.children[branch].value;
    }
    return out;
  }
};
registerWidgetClass("choices", Widget_choices);

// src/controls/widgets/color/WidgetColor.tsx
import { runInAction as runInAction7 } from "mobx";
import { nanoid as nanoid9 } from "nanoid";

// src/controls/widgets/color/WidgetColorUI.tsx
import { observer as observer42 } from "mobx-react-lite";
var WidgetColorUI = observer42(function WidgetColorUI_(p) {
  const widget = p.widget;
  return (
    // <div>
    /* @__PURE__ */ jsx(
      "input",
      {
        value: widget.serial.value,
        type: "color",
        onChange: (ev) => widget.value = ev.target.value
      }
    )
  );
});

// src/controls/widgets/color/WidgetColor.tsx
var Widget_color = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetColorUI;
    this.DefaultBodyUI = void 0;
    this.type = "color";
    this.defaultValue = this.config.default ?? "#000000";
    // prettier-ignore
    this.reset = () => this.value = this.defaultValue;
    this.id = serial?.id ?? nanoid9();
    const config = spec.config;
    this.serial = serial ?? {
      type: "color",
      collapsed: config.startCollapsed,
      id: this.id,
      value: config.default ?? "#000000"
    };
    this.init({
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    return this.value !== this.defaultValue;
  }
  get value() {
    return this.serial.value;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.value === next)
      return;
    runInAction7(() => {
      this.serial.value = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("color", Widget_color);

// src/controls/widgets/group/WidgetGroup.tsx
import { runInAction as runInAction8 } from "mobx";
import { nanoid as nanoid10 } from "nanoid";
var Widget_group = class extends BaseWidget {
  constructor(form, parent, spec, serial, preHydrate) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetGroup_LineUI;
    this.reset = () => {
      for (const sub of this.subWidgets)
        sub.reset();
    };
    this.type = "group";
    this.at = (key) => this.fields[key];
    this.get = (key) => this.fields[key].value;
    /** the dict of all child widgets */
    this.fields = {};
    // will be filled during constructor
    this.serial = {};
    /* override */
    this.background = true;
    this._defaultSerial = () => {
      return {
        type: "group",
        id: this.id,
        collapsed: this.config.startCollapsed,
        values_: {}
      };
    };
    // @internal
    this.__value = new Proxy({}, {
      ownKeys: (target) => {
        return Object.keys(this.fields);
      },
      get: (target, prop) => {
        if (typeof prop !== "string")
          return;
        const subWidget = this.fields[prop];
        if (subWidget == null)
          return;
        return subWidget.value;
      },
      getOwnPropertyDescriptor: (target, prop) => {
        if (typeof prop !== "string")
          return;
        const subWidget = this.fields[prop];
        if (subWidget == null)
          return;
        return {
          enumerable: true,
          configurable: true,
          get() {
            return subWidget.value;
          }
        };
      }
    });
    this.id = serial?.id ?? nanoid10();
    this.serial = serial && serial.type === "group" ? serial : this._defaultSerial();
    if (this.serial.values_ == null)
      this.serial.values_ = {};
    preHydrate?.(this);
    const prevFieldSerials = this.serial.values_;
    const itemsDef = this.config.items;
    const _newValues = typeof itemsDef === "function" ? runWithGlobalForm(this.form.builder, itemsDef) ?? {} : itemsDef ?? {};
    const childKeys = Object.keys(_newValues);
    for (const key of childKeys) {
      const unmounted = bang(_newValues[key]);
      const prevFieldSerial = prevFieldSerials[key];
      if (prevFieldSerial && unmounted.type === prevFieldSerial.type) {
        this.fields[key] = this.form.builder._HYDRATE(this, unmounted, prevFieldSerial);
      } else {
        if (prevFieldSerial != null)
          console.log(
            `[\u{1F536}] invalid serial for "${key}": (${unmounted.type} != ${prevFieldSerial?.type}) => using fresh one instead`,
            prevFieldSerials
          );
        this.fields[key] = this.form.builder._HYDRATE(this, unmounted, null);
        this.serial.values_[key] = this.fields[key].serial;
      }
    }
    this.init({
      value: false,
      __value: false,
      DefaultHeaderUI: false
    });
  }
  get DefaultBodyUI() {
    if (Object.keys(this.fields).length === 0)
      return;
    return WidgetGroup_BlockUI;
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    return Object.values(this.fields).some((f) => f.hasChanges);
  }
  get summary() {
    return this.config.summary?.(this.value) ?? "";
  }
  /** all [key,value] pairs */
  get entries() {
    return Object.entries(this.fields);
  }
  setValue(val) {
    this.value = val;
  }
  setPartialValue(val) {
    runInAction8(() => {
      for (const key in val)
        this.fields[key].setValue(val[key]);
      this.bumpValue();
    });
  }
  get subWidgets() {
    return Object.values(this.fields);
  }
  get subWidgetsWithKeys() {
    return Object.entries(this.fields).map(([key, widget]) => ({ key, widget }));
  }
  set value(val) {
    runInAction8(() => {
      for (const key in val)
        this.fields[key].setValue(val[key]);
      this.bumpValue();
    });
  }
  get value() {
    return this.__value;
  }
  // 💬 2024-03-13 rvion: no setter for groups; groups can not be set; only their child can
};
registerWidgetClass("group", Widget_group);

// src/controls/widgets/list/WidgetList.ts
import { observable as observable9, reaction } from "mobx";
import { nanoid as nanoid11 } from "nanoid";

// src/controls/widgets/list/WidgetListUI.tsx
import { observer as observer44 } from "mobx-react-lite";
import { forwardRef as forwardRef2 } from "react";

// src/controls/widgets/list/ListControlsUI.tsx
import { observer as observer43 } from "mobx-react-lite";
var ListControlsUI = observer43(function ListControlsUI_(p) {
  const widget = p.widget;
  const max = widget.config.max;
  const min = widget.config.min;
  const canAdd = max ? widget.items.length < max : true;
  const canClear = min ? widget.items.length > min : true;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      tw: "sticky flex gap-0.5 top-0 flex z-[50] w-full",
      onMouseDown: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      },
      children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "xs",
            look: "ghost",
            disabled: !canAdd,
            square: true,
            icon: "mdiPlus",
            onClick: (ev) => {
              if (!canAdd)
                return;
              ev.stopPropagation();
              widget.addItem();
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "xs",
            look: "ghost",
            disabled: !canClear,
            square: true,
            icon: "mdiDeleteForever",
            onClick: (ev) => {
              if (!canClear)
                return;
              ev.stopPropagation();
              widget.removeAllItems();
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "xs",
            look: "ghost",
            square: true,
            icon: "mdiUnfoldMoreHorizontal",
            onClick: (ev) => {
              ev.stopPropagation();
              widget.expandAllItems();
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "xs",
            look: "ghost",
            square: true,
            icon: "mdiUnfoldLessHorizontal",
            onClick: (ev) => {
              ev.stopPropagation();
              widget.collapseAllItems();
            }
          }
        )
      ]
    }
  );
});

// src/controls/widgets/list/WidgetListUI.tsx
var { default: SortableList, SortableItem, SortableKnob } = await import("react-easy-sort");
var WidgetList_LineUI = observer44(function WidgetList_LineUI_(p) {
  return /* @__PURE__ */ jsxs("div", { tw: "flex flex-1 items-center COLLAPSE-PASSTHROUGH", children: [
    /* @__PURE__ */ jsxs("div", { tw: "text-sm text-gray-500 italic", children: [
      p.widget.length,
      " items"
    ] }),
    p.widget.isAuto ? null : /* @__PURE__ */ jsx("div", { tw: "ml-auto", children: /* @__PURE__ */ jsx(ListControlsUI, { widget: p.widget }) })
  ] });
});
var WidgetList_BodyUI = observer44(function WidgetList_BodyUI_(p) {
  const widget = p.widget;
  const subWidgets = widget.items;
  const min = widget.config.min;
  return /* @__PURE__ */ jsx("div", { className: "_WidgetListUI", tw: "flex-grow w-full", children: /* @__PURE__ */ jsx(SortableList, { onSortEnd: p.widget.moveItem, className: "list", draggedItemClassName: "dragged", children: /* @__PURE__ */ jsx("div", { tw: "flex flex-col gap-0.5", children: subWidgets.map((subWidget, ix) => {
    const widgetHeader = subWidget.header();
    const widgetBody = subWidget.body();
    const collapsed = subWidget.serial.collapsed ?? false;
    const showBorder = subWidget.border;
    const isCollapsible = subWidget.isCollapsible;
    const boxBorder = showBorder ? 20 : 0;
    const boxBase = subWidget.background && (isCollapsible || showBorder) ? { contrast: 0.04 } : void 0;
    return /* @__PURE__ */ jsx(SortableItem, { children: /* @__PURE__ */ jsxs(Frame, { border: boxBorder, tw: "flex flex-col", base: boxBase, children: [
      /* @__PURE__ */ jsxs("div", { tw: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            look: "ghost",
            square: true,
            size: "xs",
            icon: "mdiChevronRight",
            onClick: () => subWidget.toggleCollapsed()
          }
        ),
        /* @__PURE__ */ jsx(SpacerUI, {}),
        subWidget.config.showID ? /* @__PURE__ */ jsx("div", { className: "divider flex-1 border-top", children: /* @__PURE__ */ jsxs("div", { id: subWidget.id, tw: "opacity-20 italic", children: [
          "#",
          ix,
          ":",
          subWidget.id
        ] }) }) : null,
        widgetHeader && /* @__PURE__ */ jsx(ErrorBoundaryUI, { children: widgetHeader }),
        p.widget.isAuto ? null : /* @__PURE__ */ jsx(
          Button,
          {
            disabled: min != null && widget.items.length <= min,
            square: true,
            size: "xs",
            look: "ghost",
            icon: "mdiDeleteOutline",
            onClick: () => widget.removeItem(subWidget)
          }
        ),
        /* @__PURE__ */ jsx(SortableKnob, { children: /* @__PURE__ */ jsx(ListDragHandleUI, { widget: subWidget, ix }) }),
        /* @__PURE__ */ jsx(RevealUI, { content: () => /* @__PURE__ */ jsx(menu_widgetActions.UI, { props: subWidget }), children: /* @__PURE__ */ jsx(Button, { icon: "mdiDotsVertical", look: "ghost", square: true, size: "xs" }) })
      ] }),
      widgetBody && !collapsed && subWidget != null && /* @__PURE__ */ jsx(ErrorBoundaryUI, { children: /* @__PURE__ */ jsx("div", { tw: "ml-2 pl-2", children: widgetBody }) })
    ] }) }, subWidget.id);
  }) }) }) });
});
var ListDragHandleUI = forwardRef2((p, ref) => {
  return (
    //TODO (bird_d): FIX UI - Needs to be Button when ref is implemented.
    /* @__PURE__ */ jsx("div", { ref, onClick: () => p.widget.toggleCollapsed(), children: /* @__PURE__ */ jsx(Button, { size: "xs", look: "ghost", square: true, icon: "mdiDragHorizontalVariant" }) })
  );
});

// src/controls/widgets/list/WidgetList.ts
var Widget_list = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetList_LineUI;
    this.DefaultBodyUI = WidgetList_BodyUI;
    this.type = "list";
    /* override */
    this.background = true;
    this.reset = () => {
      if (!this.config.auto) {
        const defaultLength = clampOpt(this.config.defaultLength, this.config.min, this.config.max);
        for (let i = this.items.length; i > defaultLength; i--)
          this.removeItem(this.items[i - 1]);
        for (let i = this.items.length; i < defaultLength; i++)
          this.addItem({ skipBump: true });
      }
      for (const i of this.items)
        i.reset();
    };
    this.findItemIndexContaining = (widget) => {
      let at = widget;
      let child = at;
      while (at != null) {
        at = at.parent;
        if (at === this) {
          return this.items.indexOf(child);
        }
        child = at;
      }
      return null;
    };
    this.schemaAt = (ix) => {
      const _schema = this.config.element;
      const schema = typeof _schema === "function" ? runWithGlobalForm(this.form.builder, () => _schema(ix)) : _schema;
      return schema;
    };
    // probably slow and clunky; TODO: rewrite this piece of crap
    this.startAutoBehaviour = () => {
      const auto = this.config.auto;
      if (auto == null)
        return;
      reaction(
        () => auto.keys(this),
        (keys) => {
          const currentKeys = this.items.map((i, ix2) => auto.getKey(i, ix2));
          const missingKeys = keys.filter((k) => !currentKeys.includes(k));
          let needBump = false;
          for (const k of missingKeys) {
            this.addItem({ value: auto.init(k), skipBump: true });
            needBump = true;
          }
          let ix = 0;
          for (const item of this.items.slice()) {
            const isExtra = !keys.includes(auto.getKey(item, ix++));
            if (!isExtra)
              continue;
            this.removeItem(item);
            needBump = true;
          }
          if (needBump)
            this.bumpValue();
        },
        { fireImmediately: true }
      );
    };
    // HELPERS =======================================================
    // FOLDING -------------------------------------------------------
    this.collapseAllItems = () => {
      for (const i of this.items)
        i.setCollapsed(true);
    };
    this.expandAllItems = () => {
      for (const i of this.items)
        i.setCollapsed(false);
    };
    // REMOVING ITEMS ------------------------------------------------
    this.removeAllItems = () => {
      if (this.length === 0)
        return console.log(`[\u{1F536}] list.removeAllItems: list is already empty`);
      const minLen = this.config.min ?? 0;
      if (this.length <= minLen)
        return console.log(`[\u{1F536}] list.removeAllItems: list is already at min lenght`);
      this.serial.items_ = this.serial.items_.slice(0, minLen);
      this.items = this.items.slice(0, minLen);
      this.bumpValue();
    };
    this.removeItem = (item) => {
      const i = this.items.indexOf(item);
      if (i === -1)
        return console.log(`[\u{1F536}] list.removeItem: item not found`);
      this.serial.items_.splice(i, 1);
      this.items.splice(i, 1);
      this.bumpValue();
    };
    // MOVING ITEMS ---------------------------------------------------
    this.moveItem = (oldIndex, newIndex) => {
      if (oldIndex === newIndex)
        return console.log(`[\u{1F536}] list.moveItem: oldIndex === newIndex`);
      if (oldIndex < 0 || oldIndex >= this.length)
        return console.log(`[\u{1F536}] list.moveItem: oldIndex out of bounds`);
      if (newIndex < 0 || newIndex >= this.length)
        return console.log(`[\u{1F536}] list.moveItem: newIndex out of bounds`);
      const serials = this.serial.items_;
      serials.splice(newIndex, 0, bang(serials.splice(oldIndex, 1)[0]));
      const instances = this.items;
      instances.splice(newIndex, 0, bang(instances.splice(oldIndex, 1)[0]));
      this.bumpValue();
    };
    this.id = serial?.id ?? nanoid11();
    this.serial = serial ?? observable9({ type: "list", id: this.id, active: true, items_: [] });
    if (this.serial.items_ == null)
      this.serial.items_ = [];
    this.items = [];
    if (serial == null && this.config.defaultLength != null) {
      for (let i = 0; i < this.config.defaultLength; i++)
        this.addItem({ skipBump: true });
    } else {
      const unmounted = this.schemaAt(0);
      for (const subSerial of this.serial.items_) {
        if (subSerial == null || // ⁉️ when can this happen ?
        subSerial.type !== unmounted.type) {
          console.log(`[\u274C] SKIPPING form item because it has an incompatible entry from a previous app definition`);
          continue;
        }
        const subWidget = form.builder._HYDRATE(this, unmounted, subSerial);
        this.items.push(subWidget);
      }
    }
    const missingItems = (this.config.min ?? 0) - this.items.length;
    for (let i = 0; i < missingItems; i++)
      this.addItem({ skipBump: true });
    this.init({
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
    this.startAutoBehaviour();
  }
  get length() {
    return this.items.length;
  }
  get hasChanges() {
    if (!this.config.auto) {
      const defaultLength = clampOpt(this.config.defaultLength, this.config.min, this.config.max);
      if (this.items.length !== defaultLength)
        return true;
    }
    return this.items.some((i) => i.hasChanges);
  }
  get subWidgets() {
    return this.items;
  }
  get subWidgetsWithKeys() {
    return this.items.map((widget, ix) => ({ key: ix.toString(), widget }));
  }
  get isAuto() {
    return this.config.auto != null;
  }
  setValue(val) {
    for (let i = 0; i < val.length; i++) {
      if (i < this.items.length) {
        this.items[i].setValue(val[i]);
      } else {
        this.addItem({ skipBump: true });
        this.items[i].setValue(val[i]);
      }
    }
    this.serial.items_.splice(val.length);
    this.items.splice(val.length);
    this.bumpValue();
  }
  get value() {
    return this.items.map((i) => i.value);
  }
  // ERRORS --------------------------------------------------------
  get baseErrors() {
    const out = [];
    if (this.config.min != null && this.length < this.config.min) {
      out.push(`List is too short`);
    }
    if (this.config.max != null && this.length > this.config.max) {
      out.push(`List is too long`);
    }
    return out;
  }
  // ADDING ITEMS -------------------------------------------------
  addItem(p = {}) {
    if (this.config.max != null && this.items.length >= this.config.max)
      return console.log(`[\u{1F536}] list.addItem: list is already at max length`);
    if (p.at != null && p.at < 0)
      return console.log(`[\u{1F536}] list.addItem: at is negative`);
    if (p.at != null && p.at > this.items.length)
      return console.log(`[\u{1F536}] list.addItem: at is out of bounds`);
    const schema = this.schemaAt(p.at ?? this.serial.items_.length);
    const element = this.form.builder._HYDRATE(this, schema, null);
    if (p.value) {
      element.setValue(p.value);
    }
    if (p.at == null) {
      this.items.push(element);
      this.serial.items_.push(element.serial);
    } else {
      this.items.splice(p.at, 0, element);
      this.serial.items_.splice(p.at, 0, element.serial);
    }
    if (!p?.skipBump)
      this.bumpValue();
  }
};
registerWidgetClass("list", Widget_list);

// src/controls/widgets/markdown/WidgetMarkdown.ts
import { nanoid as nanoid12 } from "nanoid";

// src/controls/widgets/markdown/WidgetMarkdownUI.tsx
import { observer as observer45 } from "mobx-react-lite";
var WidgetMardownUI = observer45(function WidgetMardownUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(MarkdownUI, { tw: "_WidgetMardownUI w-full", markdown: widget.markdown });
});

// src/controls/widgets/markdown/WidgetMarkdown.ts
var Widget_markdown = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.type = "markdown";
    /** always return false */
    this.hasChanges = false;
    /** do nothing */
    this.reset = () => {
    };
    this.id = serial?.id ?? nanoid12();
    const config = spec.config;
    this.serial = serial ?? { type: "markdown", collapsed: config.startCollapsed, active: true, id: this.id };
    makeAutoObservableInheritance(this);
  }
  get DefaultHeaderUI() {
    if (this.config.inHeader)
      return WidgetMardownUI;
    return void 0;
  }
  get DefaultBodyUI() {
    if (this.config.inHeader)
      return void 0;
    return WidgetMardownUI;
  }
  get alignLabel() {
    if (this.config.inHeader)
      return false;
  }
  get baseErrors() {
    return null;
  }
  get markdown() {
    const md = this.config.markdown;
    if (typeof md === "string")
      return md;
    return md(this.form);
  }
  setValue(val) {
    this.value = val;
  }
  set value(val) {
  }
  get value() {
    return this.serial;
  }
};
registerWidgetClass("markdown", Widget_markdown);

// src/controls/widgets/matrix/WidgetMatrix.ts
import { runInAction as runInAction9 } from "mobx";
import { nanoid as nanoid13 } from "nanoid";

// src/controls/widgets/matrix/WidgetMatrixUI.tsx
import { observer as observer46 } from "mobx-react-lite";
var WidgetMatrixUI = observer46(function WidgetStrUI_(p) {
  const widget = p.widget;
  const cols = widget.cols;
  const rows = widget.rows;
  if (cols.length === 0)
    return /* @__PURE__ */ jsx("div", { children: "\u274C no cols" });
  if (rows.length === 0)
    return /* @__PURE__ */ jsx("div", { children: "\u274C no rows" });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("table", { cellSpacing: 0, cellPadding: 0, children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx(
        "th",
        {
          className: "cursor-pointer hover:text-red-600 virtualBorder",
          onClick: () => widget.setAll(!widget.firstValue),
          children: "all"
        }
      ),
      cols.map((col, ix) => /* @__PURE__ */ jsx(
        "th",
        {
          className: "virtualBorder",
          onClick: () => widget.setCol(col, !widget.getCell(rows[0], col).value),
          children: col
        },
        ix
      ))
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: rows.map((row, rowIx) => /* @__PURE__ */ jsxs("tr", { className: "p-0 m-0", children: [
      /* @__PURE__ */ jsx(
        "td",
        {
          onClick: () => widget.setRow(row, !widget.getCell(row, cols[0]).value),
          className: "bg-base-302 virtualBorder cursor-pointer",
          children: row
        }
      ),
      cols.map((col, colIx) => {
        const checked = widget.getCell(row, col).value;
        return /* @__PURE__ */ jsx(
          "td",
          {
            className: "hover:bg-gray-400 cursor-pointer virtualBorder",
            onClick: () => widget.setCell(row, col, !checked),
            tw: [checked ? void 0 : "bg-base-200"],
            style: {
              background: checked ? "oklch(var(--p)/.5)" : void 0,
              height: "2rem",
              width: "2rem"
            }
          },
          colIx
        );
      })
    ] }, rowIx)) })
  ] }) });
});

// src/controls/widgets/matrix/WidgetMatrix.ts
var Widget_matrix = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetMatrixUI;
    this.DefaultBodyUI = void 0;
    this.type = "matrix";
    this.alignLabel = false;
    this.sep = " &&& ";
    this.store = /* @__PURE__ */ new Map();
    this.key = (row, col) => `${row}${this.sep}${col}`;
    // prettier-ignore
    this.UPDATE = () => {
      this.serial.selected = this.RESULT;
      this.bumpValue();
    };
    this.setAll = (value) => {
      for (const v of this.allCells)
        v.value = value;
      this.UPDATE();
    };
    this.setRow = (row, val) => {
      for (const v of this.cols) {
        const cell = this.getCell(row, v);
        cell.value = val;
      }
      this.UPDATE();
    };
    this.setCol = (col, val) => {
      for (const r of this.rows) {
        const cell = this.getCell(r, col);
        cell.value = val;
      }
      this.UPDATE();
    };
    /** get cell at {rol x col} */
    this.getCell = (row, col) => {
      return bang(this.store.get(this.key(row, col)));
    };
    /** set cell at {rol x col} to given value */
    this.setCell = (row, col, value) => {
      const cell = this.getCell(row, col);
      cell.value = value;
      this.UPDATE();
    };
    this.id = serial?.id ?? nanoid13();
    const config = spec.config;
    this.serial = serial ?? { type: "matrix", collapsed: config.startCollapsed, id: this.id, active: true, selected: [] };
    const rows = config.rows;
    const cols = config.cols;
    for (const [rowIx, row] of rows.entries()) {
      for (const [colIx, col] of cols.entries()) {
        this.store.set(this.key(row, col), { x: rowIx, y: colIx, col, row, value: false });
      }
    }
    const values = this.serial.selected;
    if (values)
      for (const v of values) {
        this.store.set(this.key(rows[v.x], cols[v.y]), v);
      }
    this.rows = config.rows;
    this.cols = config.cols;
    makeAutoObservableInheritance(this);
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    const def = this.config.default;
    if (def == null)
      return this.value.length != 0;
    else {
      if (def.length != this.value.length)
        return true;
      for (const v of this.value) {
        if (!def.find((d) => d.row == v.row && d.col == v.col))
          return true;
      }
      return false;
    }
  }
  reset() {
    this.setAll(false);
    for (const i of this.config.default ?? []) {
      this.setCell(i.row, i.col, true);
    }
  }
  setValue(val) {
    this.value = val;
  }
  /** 🔶 this is inneficient */
  set value(val) {
    runInAction9(() => {
      for (const c of this.allCells) {
        c.value = false;
      }
      for (const v of val) {
        this.store.set(this.key(v.row, v.col), v);
      }
      this.UPDATE();
    });
  }
  get value() {
    return this.serial.selected;
  }
  get allCells() {
    return Array.from(this.store.values());
  }
  /** list of all cells that are ON */
  get RESULT() {
    return this.allCells.filter((v) => v.value);
  }
  /** whether the first grid cell is ON */
  get firstValue() {
    return this.allCells[0]?.value ?? false;
  }
};
registerWidgetClass("matrix", Widget_matrix);

// src/controls/widgets/number/WidgetNumber.tsx
import { computed as computed4, observable as observable10, runInAction as runInAction11 } from "mobx";
import { nanoid as nanoid14 } from "nanoid";

// src/controls/widgets/number/WidgetNumberUI.tsx
import { observer as observer48 } from "mobx-react-lite";

// src/controls/widgets/number/InputNumberUI.tsx
import { makeAutoObservable as makeAutoObservable10, runInAction as runInAction10 } from "mobx";
import { observer as observer47 } from "mobx-react-lite";
import React3, { useEffect as useEffect3, useMemo as useMemo6 } from "react";

// src/utils/misc/parseFloatNoRoundingErr.ts
var parseFloatNoRoundingErr = (str, maxDigitsAfterDot = 3) => {
  const result = typeof str === "number" ? str : parseFloat(str);
  if (isNaN(result))
    return 0;
  const out = Number(result.toFixed(maxDigitsAfterDot));
  return out;
};

// src/controls/widgets/number/InputNumberUI.tsx
var clamp3 = (x, min, max) => Math.max(min, Math.min(max, x));
var startValue = 0;
var dragged = false;
var cumulativeOffset = 0;
var lastShiftState = false;
var lastControlState = false;
var lastValue = 0;
var activeSlider = null;
var cancelled = false;
var InputNumberStableState = class {
  constructor(props, kit) {
    this.props = props;
    this.kit = kit;
    /* Used for making sure you can type whatever you want in to the value, but it gets validated when pressing Enter. */
    this.inputValue = this.value.toString();
    /* When editing the number <input> this will make it display inputValue instead of val.*/
    this.isEditing = false;
    this.inputRef = React3.createRef();
    this.syncValues = (value, opts = {}) => {
      const soft = opts.soft ?? false;
      const roundingModifier = opts.roundingModifier ?? 1;
      const skipRounding = opts.skipRounding ?? false;
      let num = typeof value === "string" ? this.mode == "int" ? parseInt(value, 10) : parseFloat(value) : value;
      if (isNaN(num) || typeof num != "number") {
        console.log(`${JSON.stringify(value)} is not a number`);
        return startValue;
      }
      if (this.forceSnap) {
        num = this.mode == "int" ? Math.round(num / this.step) * this.step : num;
      }
      if (this.mode === "int")
        num = Math.round(num);
      if (soft && startValue <= this.rangeMax && startValue >= this.rangeMin) {
        num = clamp3(num, this.rangeMin, this.rangeMax);
      } else {
        num = clamp3(num, this.props.min ?? -Infinity, this.props.max ?? Infinity);
      }
      if (!skipRounding) {
        const roundingPrecise = Math.ceil(-Math.log10(this.step * 0.01 * roundingModifier));
        num = parseFloatNoRoundingErr(num, roundingPrecise);
      }
      this.props.onValueChange(num);
      this.inputValue = num.toString();
    };
    this.increment = () => {
      startValue = this.value;
      let num = this.value + (this.isInteger ? this.step : this.step * 0.1);
      this.syncValues(num, { soft: true });
    };
    this.decrement = () => {
      startValue = this.value;
      let num = this.value - (this.isInteger ? this.step : this.step * 0.1);
      this.syncValues(num, { soft: true });
    };
    this.mouseMoveListener = (e) => {
      if (dragged && (lastShiftState !== e.shiftKey || lastControlState !== e.ctrlKey)) {
        lastValue = this.value;
        cumulativeOffset = 0;
      }
      dragged = true;
      cumulativeOffset += e.movementX;
      let precision = (e.shiftKey ? 1e-3 : 0.01) * this.step;
      let offset = this.numberSliderSpeed * cumulativeOffset * precision;
      const next = lastValue + offset;
      let num = typeof next === "string" ? this.mode == "int" ? parseInt(next, 10) : parseFloatNoRoundingErr(next, this.rounding) : next;
      if (e.ctrlKey) {
        const inverval = e.shiftKey ? 0.1 * this.step : this.step;
        num = Math.round(num / inverval) * inverval;
      }
      lastShiftState = e.shiftKey;
      lastControlState = e.ctrlKey;
      this.syncValues(num, { soft: true, roundingModifier: e.shiftKey ? 0.01 : 1 });
    };
    this.cancelListener = (e) => {
      if (e.button == 2) {
        activeSlider = null;
        document.exitPointerLock();
      }
    };
    this.onPointerUpListener = () => {
      if (activeSlider && !dragged) {
        this.inputRef.current?.focus();
      } else {
        activeSlider = null;
      }
      window.removeEventListener("pointerup", this.onPointerUpListener, true);
      window.removeEventListener("pointerlockchange", this.onPointerLockChange, true);
      window.removeEventListener("mousemove", this.mouseMoveListener, true);
      window.removeEventListener("mousedown", this.cancelListener, true);
      document.exitPointerLock();
    };
    this.onPointerLockChange = (e) => {
      const isPointerLocked = document.pointerLockElement === activeSlider;
      if (!(activeSlider && isPointerLocked)) {
        window.removeEventListener("mousemove", this.mouseMoveListener, true);
        window.removeEventListener("mousedown", this.cancelListener, true);
        this.syncValues(startValue);
      }
    };
    makeAutoObservable10(this);
  }
  get value() {
    return this.props.value ?? clamp3(1, this.props.min ?? -Infinity, this.props.max ?? Infinity);
  }
  get mode() {
    return this.props.mode;
  }
  get step() {
    return this.props.step ?? (this.mode === "int" ? 1 : 0.1);
  }
  get rounding() {
    return Math.ceil(-Math.log10(this.step * 0.01));
  }
  get forceSnap() {
    return this.props.forceSnap ?? false;
  }
  get rangeMin() {
    return this.props.softMin ?? this.props.min ?? -Infinity;
  }
  get rangeMax() {
    return this.props.softMax ?? this.props.max ?? Infinity;
  }
  get numberSliderSpeed() {
    return this.kit?.clickAndSlideMultiplicator ?? 1;
  }
  get isInteger() {
    return this.mode === "int";
  }
};
var InputNumberUI = observer47(function InputNumberUI_(p) {
  const kit = useCushyKitOrNull();
  const uist = useMemo6(() => new InputNumberStableState(p, kit), []);
  runInAction10(() => Object.assign(uist.props, p));
  useEffect3(() => uist.onPointerUpListener, []);
  const val = uist.value;
  const step = uist.step;
  const rounding = uist.rounding;
  const isEditing = uist.isEditing;
  const theme = useTheme();
  const border = theme.value.inputBorder;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      style: p.style,
      base: { contrast: isEditing ? -0.1 : 0.05 },
      border: { contrast: border },
      hover: true,
      className: p.className,
      tw: [
        p.disabled && "pointer-events-none opacity-25",
        "WIDGET-FIELD relative",
        "input-number-ui",
        "flex-1 select-none min-w-16 cursor-ew-resize overflow-clip",
        !isEditing && "hover:border-base-200 hover:border-b-base-300 hover:bg-primary/40"
      ],
      onWheel: (ev) => {
        if (ev.ctrlKey) {
          let num = uist.isInteger ? step * -Math.sign(ev.deltaY) : step * -Math.sign(ev.deltaY) * 0.1;
          num = val + num;
          num = uist.isInteger ? Math.round(num) : parseFloatNoRoundingErr(num, rounding);
          num = clamp3(num, p.min ?? -Infinity, p.max ?? Infinity);
          uist.syncValues(num, void 0);
          ev.preventDefault();
          ev.stopPropagation();
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          Frame,
          {
            className: "inui-foreground",
            base: { contrast: !p.hideSlider && !isEditing ? 0.08 : 0, chroma: 0.06 },
            tw: ["z-10 absolute left-0 WIDGET-FIELD"],
            style: { width: `${(val - uist.rangeMin) / (uist.rangeMax - uist.rangeMin) * 100}%` }
          }
        ),
        /* @__PURE__ */ jsxs("div", { tw: "grid w-full h-full items-center z-20", style: { gridTemplateColumns: "16px 1fr 16px" }, children: [
          /* @__PURE__ */ jsx(
            Frame,
            {
              className: "control",
              hover: -0.1,
              base: 25,
              border: true,
              tw: ["h-full flex rounded-none text-center justify-center items-center z-20", `opacity-0`],
              tabIndex: -1,
              onClick: uist.decrement,
              children: /* @__PURE__ */ jsx(Ikon.mdiChevronLeft, {})
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              tw: [
                //
                "th-text",
                `flex px-1 items-center justify-center text-sm truncate z-20 h-full`
              ],
              onMouseDown: (ev) => {
                if (isEditing || ev.button != 0)
                  return;
                activeSlider = ev.currentTarget;
                lastValue = startValue = val;
                cumulativeOffset = 0;
                dragged = false;
                window.addEventListener("mousemove", uist.mouseMoveListener, true);
                window.addEventListener("pointerup", uist.onPointerUpListener, true);
                window.addEventListener("pointerlockchange", uist.onPointerLockChange, true);
                window.addEventListener("mousedown", uist.cancelListener, true);
                activeSlider?.requestPointerLock({ unadjustedMovement: true }).catch((error) => {
                  console.log(
                    "[InputNumberUI] Obtaining raw mouse input is not supported on this platform. Using processed mouse input, you may need to adjust the number input drag multiplier."
                  );
                  activeSlider?.requestPointerLock();
                });
              },
              children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    draggable: "false",
                    ref: uist.inputRef,
                    onDragStart: (ev) => ev.preventDefault(),
                    tw: [
                      // 'text-shadow outline-0',
                      /* `absolute opacity-0` is a bit of a hack around not being able to figure out why the input kept taking up so much width.
                       * Can't use `hidden` here because it messes up focusing. */
                      !isEditing && "cursor-not-allowed pointer-events-none absolute opacity-0",
                      !isEditing && p.text ? "text-right" : "text-center"
                    ],
                    value: isEditing ? uist.inputValue : val,
                    placeholder: p.placeholder,
                    style: {
                      fontFamily: "monospace",
                      zIndex: 2,
                      background: "transparent",
                      MozWindowDragging: "no-drag"
                    },
                    min: p.min,
                    max: p.max,
                    step,
                    onChange: (ev) => {
                      uist.inputValue = ev?.target.value;
                    },
                    onFocus: (ev) => {
                      let textInput = ev.currentTarget;
                      activeSlider = textInput.parentElement;
                      textInput.select();
                      startValue = val;
                      uist.inputValue = val.toString();
                      uist.isEditing = true;
                    },
                    onBlur: (ev) => {
                      uist.isEditing = false;
                      const next = ev.currentTarget.value;
                      activeSlider = null;
                      if (cancelled) {
                        cancelled = false;
                        uist.syncValues(startValue, void 0);
                        return;
                      }
                      uist.syncValues(ev.currentTarget.value, { skipRounding: true });
                    },
                    onKeyDown: (ev) => {
                      if (ev.key === "Enter") {
                        ev.currentTarget.blur();
                      } else if (ev.key === "Escape") {
                        cancelled = true;
                        ev.currentTarget.blur();
                      }
                      if (uist.isEditing) {
                        if (ev.key === "ArrowUp") {
                          uist.increment();
                          ev.preventDefault();
                        } else if (ev.key === "ArrowDown") {
                          uist.decrement();
                          ev.preventDefault();
                        } else {
                          ev.stopPropagation();
                        }
                      }
                    }
                  }
                ),
                !isEditing && /* @__PURE__ */ jsxs(Fragment, { children: [
                  p.text && /* @__PURE__ */ jsx(
                    "div",
                    {
                      tw: ["w-full pr-1 outline-0 border-0 border-transparent z-10 text-left truncate"],
                      children: p.text
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { style: { fontFamily: "monospace" }, children: p.value }),
                  !isEditing && p.suffix ? /* @__PURE__ */ jsx("div", { tw: "pl-0.5", children: p.suffix }) : /* @__PURE__ */ jsx(Fragment, {})
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Frame,
            {
              className: "control",
              hover: -0.1,
              base: 25,
              border: true,
              tw: ["h-full flex rounded-none text-center justify-center items-center z-20", `opacity-0`],
              tabIndex: -1,
              onClick: uist.increment,
              children: /* @__PURE__ */ jsx(Ikon.mdiChevronRight, {})
            }
          )
        ] })
      ]
    }
  );
});

// src/controls/widgets/number/WidgetNumberUI.tsx
var WidgetNumberUI = observer48(function WidgetNumberUI_(p) {
  const widget = p.widget;
  const value = widget.serial.val;
  const mode = widget.config.mode;
  const step = widget.config.step ?? (mode === "int" ? 1 : 0.1);
  return /* @__PURE__ */ jsx(
    InputNumberUI,
    {
      mode,
      value,
      hideSlider: widget.config.hideSlider,
      max: widget.config.max,
      min: widget.config.min,
      softMin: widget.config.softMin,
      softMax: widget.config.softMax,
      step,
      suffix: widget.config.suffix,
      text: widget.config.text,
      onValueChange: (next) => widget.value = next,
      forceSnap: widget.config.forceSnap
    }
  );
});

// src/controls/widgets/number/WidgetNumber.tsx
var Widget_number = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetNumberUI;
    this.DefaultBodyUI = void 0;
    this.type = "number";
    this.forceSnap = false;
    this.defaultValue = this.config.default ?? 0;
    // prettier-ignore
    this.reset = () => {
      if (this.serial.val === this.defaultValue)
        return;
      this.value = this.defaultValue;
    };
    this.id = serial?.id ?? nanoid14();
    const config = spec.config;
    this.serial = serial ?? {
      type: "number",
      collapsed: config.startCollapsed,
      id: this.id,
      val: config.default ?? 0
    };
    this.init({
      serial: observable10,
      value: computed4,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get hasChanges() {
    return this.serial.val !== this.defaultValue;
  }
  get baseErrors() {
    if (this.config.min !== void 0 && this.value < this.config.min)
      return `Value is less than ${this.config.min}`;
    if (this.config.max !== void 0 && this.value > this.config.max)
      return `Value is greater than ${this.config.max}`;
    return null;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction11(() => {
      this.serial.val = next;
      this.bumpValue();
    });
  }
  get value() {
    return this.serial.val;
  }
};
registerWidgetClass("number", Widget_number);

// src/controls/widgets/optional/WidgetOptional.tsx
import { computed as computed5, observable as observable11 } from "mobx";
import { nanoid as nanoid15 } from "nanoid";
var Widget_optional = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = void 0;
    this.DefaultBodyUI = void 0;
    this.reset = () => {
      if (this.config.startActive) {
        if (!this.serial.active)
          this.setActive(true);
        if (this.child.hasChanges)
          this.child.reset();
        return;
      } else {
        if (this.serial.active)
          this.setActive(false);
        return;
      }
    };
    this.type = "optional";
    this.setActive = (value) => {
      if (this.serial.active === value)
        return;
      this.serial.active = value;
      this.bumpValue();
      if (value)
        this.child.setCollapsed(false);
      else
        this.child.setCollapsed(true);
    };
    /**
     * as of 2024-03-14, this is only called in the constructor
     * TODO: inline ?
     */
    this._ensureChildIsHydrated = () => {
      if (this.child)
        return;
      const spec = this.config.widget;
      const prevSerial = this.serial.child;
      if (prevSerial && spec.type === prevSerial.type) {
        this.child = this.form.builder._HYDRATE(this, spec, prevSerial);
      } else {
        this.child = this.form.builder._HYDRATE(this, spec, null);
        this.serial.child = this.child.serial;
      }
    };
    this.id = serial?.id ?? nanoid15();
    const config = spec.config;
    const defaultActive = config.startActive;
    this.serial = serial ?? {
      id: this.id,
      type: "optional",
      active: defaultActive ?? false,
      collapsed: config.startCollapsed
    };
    const isActive = serial?.active ?? defaultActive;
    if (isActive)
      this.serial.active = true;
    this._ensureChildIsHydrated();
    this.init({
      serial: observable11,
      value: computed5,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get hasChanges() {
    if (this.config.startActive) {
      if (!this.serial.active)
        return false;
      return this.child.hasChanges;
    } else {
      if (!this.serial.active)
        return false;
      return true;
    }
  }
  get baseErrors() {
    return null;
  }
  get childOrThrow() {
    if (this.child == null)
      throw new Error("\u274C optional active but child is null");
    return this.child;
  }
  setValue(val) {
    this.value = val;
  }
  get subWidgets() {
    return this.serial.active ? [this.child] : [];
  }
  get subWidgetsWithKeys() {
    return this.serial.active ? [{ key: "child", widget: this.child }] : [];
  }
  set value(next) {
    if (next == null) {
      this.setActive(false);
      return;
    } else {
      this.setActive(true);
      this.child.setValue(next);
    }
  }
  get value() {
    if (!this.serial.active)
      return null;
    return this.childOrThrow.value;
  }
};
registerWidgetClass("optional", Widget_optional);

// src/controls/widgets/seed/WidgetSeed.ts
import { nanoid as nanoid16 } from "nanoid";

// src/controls/widgets/seed/WidgetSeedUI.tsx
import { observer as observer49 } from "mobx-react-lite";
var WidgetSeedUI = observer49(function WidgetSeedUI_(p) {
  const widget = p.widget;
  const val = widget.serial.val;
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      border: true,
      tw: [
        "WIDGET-FIELD",
        "flex-1 flex items-center",
        "rounded overflow-clip text-shadow"
        // 'border border-base-200 hover:border-base-200',
        // 'bg-primary/5',
        // 'border-b-2 border-b-base-200 hover:border-b-base-300',
        // '!outline-none',
      ],
      children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            tw: "!border-l-0",
            icon: "mdiShuffle",
            active: widget.serial.mode === "randomize",
            onClick: () => widget.setToRandomize(),
            children: "Random"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            tw: "!border-l !border-r",
            icon: "mdiAccessPoint",
            active: widget.serial.mode === "fixed",
            onClick: () => widget.setToFixed(),
            children: "Fixed"
          }
        ),
        /* @__PURE__ */ jsx(
          InputNumberUI,
          {
            disabled: widget.serial.mode === "randomize",
            tw: ["!border-none flex-1"],
            min: widget.config.min,
            max: widget.config.max,
            step: 1,
            value: val,
            mode: "int",
            onValueChange: (value) => widget.setValue(value)
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            tw: "!border-l !border-r-0",
            onClick: () => widget.setToFixed(Math.floor(Math.random() * 1e8)),
            icon: "mdiAutorenew",
            square: true
          }
        )
      ]
    }
  );
});

// src/controls/widgets/seed/WidgetSeed.ts
var Widget_seed = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetSeedUI;
    this.DefaultBodyUI = void 0;
    this.defaultValue = this.config.default ?? 0;
    // prettier-ignore
    this.reset = () => this.value = this.defaultValue;
    this.type = "seed";
    this.setToFixed = (val) => {
      this.serial.mode = "fixed";
      if (val)
        this.serial.val = val;
      this.bumpValue();
    };
    this.setToRandomize = () => {
      if (this.serial.mode === "randomize")
        return;
      this.serial.mode = "randomize";
      this.bumpValue();
    };
    this.setValue = (val) => {
      this.serial.val = val;
      this.bumpValue();
    };
    this.id = serial?.id ?? nanoid16();
    const config = spec.config;
    this.serial = serial ?? {
      type: "seed",
      id: this.id,
      val: config.default ?? 0,
      mode: config.defaultMode ?? "randomize"
    };
    makeAutoObservableInheritance(this, {
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    return this.value !== this.defaultValue;
  }
  set value(val) {
    this.serial.val = val;
    this.bumpValue();
  }
  get value() {
    const count = this.form.builder._cache.count;
    return this.serial.mode === "randomize" ? Math.floor(Math.random() * 9999999) : this.serial.val;
  }
};
registerWidgetClass("seed", Widget_seed);

// src/controls/widgets/selectMany/WidgetSelectMany.tsx
import { runInAction as runInAction12 } from "mobx";
import { nanoid as nanoid17 } from "nanoid";

// src/controls/widgets/selectMany/WidgetSelectManyUI.tsx
import { observer as observer50 } from "mobx-react-lite";
var WidgetSelectManyUI = observer50(function WidgetSelectManyUI_(p) {
  const widget = p.widget;
  if (widget.config.appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetSelectMany_TabUI, { widget });
  return /* @__PURE__ */ jsx(WidgetSelectMany_SelectUI, { widget });
});
var WidgetSelectMany_TabUI = observer50(function WidgetSelectMany_TabUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { tw: "rounded select-none flex flex-wrap gap-x-0.5 gap-y-0", children: [
      widget.choices.map((c) => {
        const isSelected = Boolean(widget.serial.values.find((item) => item.id === c.id));
        return /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            value: isSelected,
            display: "button",
            text: c.label,
            onValueChange: (value) => {
              if (value != isSelected)
                widget.toggleItem(c);
            }
          }
        );
      }),
      widget.serial.values.filter((v) => widget.choices.find((i) => i.id === v.id) == null).map((item) => /* @__PURE__ */ jsx(
        InputBoolUI,
        {
          value: true,
          style: { border: "1px solid oklch(var(--er))" },
          display: "button",
          text: item.label ?? "no label",
          onValueChange: (value) => widget.toggleItem(item)
        }
      ))
    ] }),
    widget.baseErrors && /* @__PURE__ */ jsx(MessageErrorUI, { children: /* @__PURE__ */ jsx("ul", { children: widget.baseErrors.map((e, ix) => /* @__PURE__ */ jsx("li", { children: e }, ix)) }) })
  ] });
});
var WidgetSelectMany_SelectUI = observer50(function WidgetSelectMany_SelectUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsxs("div", { tw: "flex-1", children: [
    /* @__PURE__ */ jsx(
      SelectUI,
      {
        multiple: true,
        tw: [widget.baseErrors && "rsx-field-error"],
        getLabelText: (t) => t.label ?? t.id,
        getLabelUI: widget.config.getLabelUI,
        getSearchQuery: () => widget.serial.query ?? "",
        setSearchQuery: (query) => widget.serial.query = query,
        disableLocalFiltering: widget.config.disableLocalFiltering,
        options: () => widget.choices,
        value: () => widget.serial.values,
        equalityCheck: (a, b) => a.id === b.id,
        onChange: (selectOption) => widget.toggleItem(selectOption)
      }
    ),
    widget.baseErrors && /* @__PURE__ */ jsxs("div", { tw: "text-red-500 flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "error" }),
      widget.baseErrors
    ] })
  ] });
});

// src/controls/widgets/selectMany/WidgetSelectMany.tsx
var Widget_selectMany = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetSelectManyUI;
    this.DefaultBodyUI = void 0;
    this.type = "selectMany";
    this.reset = () => {
      this.value = this.defaultValue;
    };
    /** un-select given item */
    this.removeItem = (item) => {
      const indexOf = this.serial.values.findIndex((i) => i.id === item.id);
      if (indexOf < 0)
        return console.log(`[\u{1F536}] WidgetSelectMany.removeItem: item not found`);
      this.serial.values = this.serial.values.filter((v) => v.id !== item.id);
      this.bumpValue();
    };
    /** select given item */
    this.addItem = (item) => {
      const i = this.serial.values.indexOf(item);
      if (i >= 0)
        return console.log(`[\u{1F536}] WidgetSelectMany.addItem: item already in list`);
      this.serial.values.push(item);
      this.bumpValue();
    };
    /** select item if item was not selected, un-select if item was selected */
    this.toggleItem = (item) => {
      const i = this.serial.values.findIndex((i2) => i2.id === item.id);
      if (i < 0) {
        this.serial.values.push(item);
        this.bumpValue();
      } else {
        this.serial.values = this.serial.values.filter((v) => v.id !== item.id);
        this.bumpValue();
      }
    };
    this.id = serial?.id ?? nanoid17();
    const config = spec.config;
    this.serial = serial ?? {
      type: "selectMany",
      collapsed: config.startCollapsed,
      id: this.id,
      query: "",
      values: config.default ?? []
    };
    if (this.serial.values == null)
      this.serial.values = [];
    makeAutoObservableInheritance(this);
  }
  get defaultValue() {
    return this.config.default ?? [];
  }
  get hasChanges() {
    if (this.serial.values.length !== this.defaultValue.length)
      return true;
    for (const item of this.serial.values) {
      if (!this.defaultValue.find((i) => i.id === item.id))
        return true;
    }
    return false;
  }
  get choices() {
    const _choices = this.config.choices;
    return typeof _choices === "function" ? _choices(this) : _choices;
  }
  get baseErrors() {
    if (this.serial.values == null)
      return null;
    const errors = [];
    for (const value of this.serial.values) {
      if (!this.choices.find((choice) => choice.id === value.id)) {
        errors.push(`value ${value.id} (label: ${value.label}) not in choices`);
      }
    }
    if (errors.length > 0)
      return errors;
    return null;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.values === next)
      return;
    runInAction12(() => {
      this.serial.values = next;
      this.bumpValue();
    });
  }
  get value() {
    return this.serial.values;
  }
};
registerWidgetClass("selectMany", Widget_selectMany);

// src/controls/widgets/selectOne/WidgetSelectOne.ts
import { runInAction as runInAction13 } from "mobx";
import { nanoid as nanoid18 } from "nanoid";

// src/controls/widgets/selectOne/WidgetSelectOneUI.tsx
import { observer as observer51 } from "mobx-react-lite";
var WidgetSelectOneUI = observer51(function WidgetSelectOneUI_(p) {
  const widget = p.widget;
  if (widget.config.appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetSelectOne_TabUI, { widget });
  return /* @__PURE__ */ jsx(WidgetSelectOne_SelectUI, { widget });
});
var WidgetSelectOne_TabUI = observer51(function WidgetSelectOne_TabUI_(p) {
  const widget = p.widget;
  const selected = widget.serial.val;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { tw: "rounded select-none ml-auto justify-end flex flex-wrap gap-x-0.5 gap-y-0", children: widget.choices.map((c) => {
      const isSelected = selected?.id === c.id;
      return /* @__PURE__ */ jsx(
        InputBoolUI,
        {
          value: isSelected,
          display: "button",
          text: c.label ?? c.id,
          onValueChange: (value) => {
            if (value === isSelected)
              return;
            widget.value = c;
          }
        },
        c.id
      );
    }) }),
    widget.baseErrors && /* @__PURE__ */ jsxs("div", { tw: "text-red-500 flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "error" }),
      widget.baseErrors
    ] })
  ] });
});
var WidgetSelectOne_SelectUI = observer51(function WidgetSelectOne_SelectUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx("div", { tw: "flex-1", children: /* @__PURE__ */ jsx(
    SelectUI,
    {
      tw: [widget.baseErrors && "rsx-field-error"],
      getLabelText: (t) => t.label ?? makeLabelFromFieldName(t.id),
      getLabelUI: widget.config.getLabelUI,
      getSearchQuery: () => widget.serial.query ?? "",
      setSearchQuery: (query) => widget.serial.query = query,
      disableLocalFiltering: widget.config.disableLocalFiltering,
      options: () => widget.choices,
      equalityCheck: (a, b) => a.id === b.id,
      value: () => widget.serial.val,
      onChange: (selectOption) => {
        if (selectOption == null) {
          return;
        }
        const next = widget.choices.find((c) => c.id === selectOption.id);
        if (next == null) {
          console.log(`\u274C WidgetSelectOneUI: could not find choice for ${JSON.stringify(selectOption)}`);
          return;
        }
        widget.value = next;
      }
    },
    widget.id
  ) });
});

// src/controls/widgets/selectOne/WidgetSelectOne.ts
var FAILOVER_VALUE = Object.freeze({ id: "\u274C", label: "\u274C" });
var Widget_selectOne = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetSelectOneUI;
    this.DefaultBodyUI = void 0;
    this.type = "selectOne";
    this.reset = () => {
      this.value = this.defaultValue;
    };
    this.id = serial?.id ?? nanoid18();
    const config = spec.config;
    const choices = this.choices;
    this.serial = serial ?? {
      type: "selectOne",
      collapsed: config.startCollapsed,
      id: this.id,
      query: "",
      val: config.default ?? choices[0] ?? FAILOVER_VALUE
    };
    if (this.serial.val == null && Array.isArray(this.config.choices))
      this.serial.val = choices[0] ?? FAILOVER_VALUE;
    makeAutoObservableInheritance(this);
  }
  get baseErrors() {
    if (this.serial.val == null)
      return "no value selected";
    const selected = this.choices.find((c) => c.id === this.serial.val.id);
    if (selected == null)
      return "selected value not in choices";
    return;
  }
  get defaultValue() {
    return this.config.default ?? this.choices[0] ?? FAILOVER_VALUE;
  }
  get hasChanges() {
    return this.serial.val.id !== this.defaultValue.id;
  }
  get choices() {
    const _choices = this.config.choices;
    if (typeof _choices === "function") {
      if (!this.form.ready)
        return [];
      if (this.form._ROOT == null)
        throw new Error("\u274C IMPOSSIBLE: this.form._ROOT is null");
      return _choices(this);
    }
    return _choices;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    const nextHasSameID = this.serial.val.id === next.id;
    runInAction13(() => {
      this.serial.val = next;
      if (!nextHasSameID)
        this.bumpValue();
      else
        this.bumpSerial();
    });
  }
  get value() {
    return this.serial.val;
  }
};
registerWidgetClass("selectOne", Widget_selectOne);

// src/controls/widgets/shared/WidgetShared.tsx
import { nanoid as nanoid19 } from "nanoid";
var Widget_shared = class _Widget_shared extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    // prettier-ignore
    this.type = "shared";
    this.DefaultHeaderUI = void 0;
    this.DefaultBodyUI = void 0;
    // 🔴
    this.hidden = () => {
      const ctor = this.form.builder.SpecCtor;
      const config = { ...this.spec.config, hidden: true };
      const spec2 = new ctor("shared", config);
      new _Widget_shared(this.form, null, spec2, this.serial);
    };
    this.id = serial?.id ?? nanoid19();
    const config = spec.config;
    this.serial = serial ?? { id: this.id, type: "shared", collapsed: config.startCollapsed };
    makeAutoObservableInheritance(this);
  }
  get config() {
    return this.spec.config;
  }
  get hasChanges() {
    return this.config.widget.hasChanges;
  }
  reset() {
    return this.config.widget.reset();
  }
  get shared() {
    return this.config.widget;
  }
  get baseErrors() {
    return null;
  }
  setValue(val) {
    this.value = val;
  }
  set value(val) {
    this.config.widget.setValue(val);
  }
  get value() {
    return this.config.widget.value;
  }
};
registerWidgetClass("shared", Widget_shared);

// src/controls/widgets/size/WidgetSize.ts
import { runInAction as runInAction14 } from "mobx";
import { nanoid as nanoid20 } from "nanoid";

// src/controls/widgets/size/ResolutionState.tsx
import { makeAutoObservable as makeAutoObservable11 } from "mobx";
var ResolutionState = class {
  constructor(req) {
    this.req = req;
    this.idealSizeforModelType = (model) => {
      if (model === "xl")
        return { width: 1024, height: 1024 };
      if (model === "2.0")
        return { width: 768, height: 768 };
      if (model === "2.1")
        return { width: 768, height: 768 };
      if (model === "1.5")
        return { width: 512, height: 512 };
      if (model === "1.4")
        return { width: 512, height: 512 };
      return { width: this.width, height: this.height };
    };
    this.flip = () => {
      const prevWidth = this.width;
      this.req.width = this.height;
      this.req.height = prevWidth;
    };
    // prettier-ignore
    this.desiredModelType = "1.5";
    this.desiredAspectRatio = "1:1";
    this.isAspectRatioLocked = false;
    this.wasHeightAdjustedLast = true;
    this.desiredAspectRatio = (() => {
      const ratio = parseFloatNoRoundingErr(this.realAspectRatio, 2);
      if (ratio === parseFloatNoRoundingErr(1 / 1, 2))
        return "1:1";
      if (ratio === parseFloatNoRoundingErr(16 / 9, 2))
        return "16:9";
      if (ratio === parseFloatNoRoundingErr(4 / 3, 2))
        return "4:3";
      if (ratio === parseFloatNoRoundingErr(3 / 2, 2))
        return "3:2";
      return "1:1";
    })();
    makeAutoObservable11(this);
  }
  get width() {
    return this.req.width;
  }
  // prettier-ignore
  get height() {
    return this.req.height;
  }
  // prettier-ignore
  set width(next) {
    this.req.width = next;
  }
  // prettier-ignore
  set height(next) {
    this.req.height = next;
  }
  setWidth(width) {
    this.width = width;
    this.wasHeightAdjustedLast = false;
    if (this.isAspectRatioLocked) {
      this.updateHeightBasedOnAspectRatio();
    }
  }
  setHeight(height) {
    this.height = height;
    this.wasHeightAdjustedLast = true;
    if (this.isAspectRatioLocked) {
      this.updateWidthBasedOnAspectRatio();
    }
  }
  get realAspectRatio() {
    return this.width / this.height;
  }
  setModelType(modelType) {
    this.desiredModelType = modelType;
    const itgt = this.idealSizeforModelType(modelType);
    const diagPrev = Math.sqrt(this.width ** 2 + this.height ** 2);
    const diagNext = Math.sqrt(itgt.width ** 2 + itgt.height ** 2);
    const factor = diagNext / diagPrev;
    console.log({ modelType, idealTarget: itgt, avg: diagPrev, avg2: diagNext, factor });
    this.width = Math.round(this.width * factor);
    this.height = Math.round(this.height * factor);
    console.log(`final is w=${this.width} x h=${this.height}`);
    console.log(`fixed avg is ${Math.sqrt(this.width ** 2 + this.height ** 2)}`);
  }
  setAspectRatio(aspectRatio) {
    this.desiredAspectRatio = aspectRatio;
    if (this.wasHeightAdjustedLast) {
      this.updateWidthBasedOnAspectRatio();
    } else {
      this.updateHeightBasedOnAspectRatio();
    }
  }
  updateHeightBasedOnAspectRatio() {
    const [widthRatio, heightRatio] = this.desiredAspectRatio.split(":").map(Number);
    this.height = Math.round(this.width * (heightRatio / widthRatio));
  }
  updateWidthBasedOnAspectRatio() {
    const [widthRatio, heightRatio] = this.desiredAspectRatio.split(":").map(Number);
    this.width = Math.round(this.height * (widthRatio / heightRatio));
  }
};

// src/controls/widgets/size/WidgetSizeUI.tsx
import { observer as observer52 } from "mobx-react-lite";
var WigetSize_LineUI = observer52(function WigetSize_LineUI_(p) {
  return /* @__PURE__ */ jsx(WidgetSizeX_LineUI, { sizeHelper: p.widget.sizeHelper, bounds: p.widget.config });
});
var WigetSize_BlockUI = observer52(function WigetSize_BlockUI_(p) {
  return /* @__PURE__ */ jsx(WigetSizeXUI, { sizeHelper: p.widget.sizeHelper, bounds: p.widget.config });
});
var WidgetSizeX_LineUI = observer52(function WidgetSize_LineUI_(p) {
  const uist = p.sizeHelper;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-1", children: /* @__PURE__ */ jsxs(
    Frame,
    {
      hover: true,
      border: { contrast: 0.25 },
      tw: ["WIDGET-FIELD w-full h-full flex gap-2 items-center overflow-clip"],
      style: { padding: "0px" },
      children: [
        /* @__PURE__ */ jsx(
          InputNumberUI,
          {
            min: p.bounds?.min ?? 128,
            max: p.bounds?.max ?? 4096,
            step: p.bounds?.step ?? 32,
            mode: "int",
            tw: "!border-none",
            value: uist.width,
            hideSlider: true,
            onValueChange: (next) => uist.setWidth(next),
            forceSnap: true,
            text: "Width",
            suffix: "px"
          }
        ),
        /* @__PURE__ */ jsx("div", { tw: "h-full", style: { width: "1px" } }),
        /* @__PURE__ */ jsx(
          InputNumberUI,
          {
            min: p.bounds?.min ?? 128,
            max: p.bounds?.max ?? 4096,
            step: p.bounds?.step ?? 32,
            hideSlider: true,
            mode: "int",
            tw: "!border-none",
            value: uist.height,
            onValueChange: (next) => uist.setHeight(next),
            forceSnap: true,
            text: "Height",
            suffix: "px"
          }
        ),
        /* @__PURE__ */ jsx("div", { tw: "h-full", style: { width: "1px" } }),
        /* @__PURE__ */ jsx(AspectRatioSquareUI, { sizeHelper: uist }),
        /* @__PURE__ */ jsx("div", { tw: "h-full", style: { width: "1px" } }),
        /* @__PURE__ */ jsx(AspectLockButtonUI, { sizeHelper: uist })
      ]
    }
  ) });
});
var AspectLockButtonUI = observer52(function AspectLockButtonUI_(p) {
  const uist = p.sizeHelper;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      active: uist.isAspectRatioLocked,
      style: { border: "unset", borderRadius: "0px" },
      icon: uist.isAspectRatioLocked ? "mdiLink" : "mdiLinkOff",
      onMouseDown: (ev) => {
        uist.isAspectRatioLocked = !uist.isAspectRatioLocked;
        if (!uist.isAspectRatioLocked) {
          return;
        }
        if (uist.wasHeightAdjustedLast) {
          uist.setHeight(uist.height);
        } else {
          uist.setWidth(uist.width);
        }
      }
    }
  );
});
var AspectRatioSquareUI = observer52(function AspectRatioSquareUI_(p) {
  const uist = p.sizeHelper;
  const ratioDisplaySize = 26;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      square: true,
      size: "xs",
      border: 10,
      tw: [
        //
        "flex",
        "overflow-clip",
        "items-center justify-center"
      ],
      style: { border: "unset", borderRadius: "0px" },
      onClick: uist.flip,
      children: /* @__PURE__ */ jsx(
        Frame,
        {
          base: 10,
          tw: "!relative w-full h-full",
          style: {
            //
            width: "100%",
            height: "100%",
            borderRadius: "0px",
            // Use transform here because it works with floats and will not cause popping/mis-alignments.
            transform: `
                 scaleX(${uist.width < uist.height ? Math.round(uist.width / uist.height * ratioDisplaySize) / ratioDisplaySize : "1"})
                 scaleY(${uist.height < uist.width ? Math.round(uist.height / uist.width * ratioDisplaySize) / ratioDisplaySize : "1"})`
          },
          square: true
        }
      )
    }
  );
});
var WigetSizeXUI = observer52(function WigetSizeXUI_(p) {
  const uist = p.sizeHelper;
  const resoBtn = (ar) => /* @__PURE__ */ jsx(
    InputBoolUI,
    {
      display: "button",
      value: uist.desiredAspectRatio == ar,
      onValueChange: () => uist.setAspectRatio(ar),
      text: ar
    }
  );
  const modelBtn = (model) => /* @__PURE__ */ jsx(
    InputBoolUI,
    {
      display: "button",
      value: uist.desiredModelType == model,
      onValueChange: () => uist.setModelType(model),
      text: model
    }
  );
  const portrait = uist.height / uist.width > 1;
  return /* @__PURE__ */ jsx(
    Frame,
    {
      children: /* @__PURE__ */ jsxs("div", { tw: "flex", children: [
        /* @__PURE__ */ jsxs("div", { tw: "join", children: [
          modelBtn("1.5"),
          modelBtn("xl")
        ] }),
        /* @__PURE__ */ jsxs("div", { tw: "ml-auto flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("div", { tw: "join", children: resoBtn("1:1") }),
          /* @__PURE__ */ jsxs("div", { tw: "join", children: [
            resoBtn("16:9"),
            resoBtn("9:16")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join", children: [
            resoBtn("4:3"),
            resoBtn("3:4")
          ] }),
          /* @__PURE__ */ jsxs("div", { tw: "join", children: [
            resoBtn("3:2"),
            resoBtn("2:3")
          ] })
        ] })
      ] })
    }
  );
});

// src/controls/widgets/size/WidgetSize.ts
var Widget_size = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WigetSize_LineUI;
    this.DefaultBodyUI = WigetSize_BlockUI;
    this.type = "size";
    this.id = serial?.id ?? nanoid20();
    const config = spec.config;
    if (serial) {
      this.serial = serial;
    } else {
      const aspectRatio = config.default?.aspectRatio ?? "1:1";
      const modelType = config.default?.modelType ?? "SD1.5 512";
      const width = config.default?.width ?? parseInt(modelType.split(" ")[1]);
      const height = config.default?.height ?? parseInt(modelType.split(" ")[1]);
      this.serial = {
        type: "size",
        id: this.id,
        aspectRatio,
        modelType,
        height,
        width
      };
    }
    this.init({
      sizeHelper: false,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get defaultValue() {
    const config = this.spec.config;
    const aspectRatio = config.default?.aspectRatio ?? "1:1";
    const modelType = config.default?.modelType ?? "SD1.5 512";
    const width = config.default?.width ?? parseInt(modelType.split(" ")[1]);
    const height = config.default?.height ?? parseInt(modelType.split(" ")[1]);
    return { type: "size", aspectRatio, modelType, height, width };
  }
  get hasChanges() {
    const def = this.defaultValue;
    if (this.serial.width !== def.width)
      return true;
    if (this.serial.height !== def.height)
      return true;
    if (this.serial.aspectRatio !== def.aspectRatio)
      return true;
    return false;
  }
  reset() {
    this.value = this.defaultValue;
  }
  get width() {
    return this.serial.width;
  }
  // prettier-ignore
  get height() {
    return this.serial.height;
  }
  // prettier-ignore
  set width(next) {
    if (next === this.serial.width)
      return;
    runInAction14(() => {
      this.serial.width = next;
      this.bumpValue();
    });
  }
  set height(next) {
    if (next === this.serial.height)
      return;
    runInAction14(() => {
      this.serial.height = next;
      this.bumpValue();
    });
  }
  get sizeHelper() {
    const state = new ResolutionState(this);
    Object.defineProperty(this, "sizeHelper", { value: state });
    return state;
  }
  setValue(val) {
    this.value = val;
  }
  set value(val) {
    if (val.width === this.serial.width && //
    val.height === this.serial.height && val.aspectRatio === this.serial.aspectRatio) {
      return;
    }
    runInAction14(() => {
      Object.assign(this.serial, val);
      this.bumpValue();
    });
  }
  get value() {
    return this.serial;
  }
};
registerWidgetClass("size", Widget_size);

// src/controls/widgets/spacer/WidgetSpacer.tsx
import { observable as observable12 } from "mobx";
import { nanoid as nanoid21 } from "nanoid";

// src/controls/widgets/spacer/WidgetSpacerUI.tsx
import { observer as observer53 } from "mobx-react-lite";
var WidgetSpacerUI = observer53(function WidgetSpacerUI_(p) {
  return /* @__PURE__ */ jsx(SpacerUI, {});
});

// src/controls/widgets/spacer/WidgetSpacer.tsx
var Widget_spacer = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetSpacerUI;
    this.DefaultBodyUI = void 0;
    this.type = "spacer";
    this.hasChanges = false;
    this.reset = () => {
    };
    this.id = serial?.id ?? nanoid21();
    this.serial = serial ?? {
      id: this.id,
      type: "spacer",
      collapsed: false
    };
    this.init({
      serial: observable12,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get baseErrors() {
    return null;
  }
  get value() {
    return false;
  }
  setValue(val) {
  }
  set value(val) {
  }
};
registerWidgetClass("spacer", Widget_spacer);

// src/controls/widgets/string/WidgetString.tsx
import { runInAction as runInAction15 } from "mobx";
import { nanoid as nanoid22 } from "nanoid";

// src/controls/widgets/string/WidgetStringUI.tsx
import { observer as observer54 } from "mobx-react-lite";

// src/rsuite/kolor/getLCHFromStringAsString.tsx
import Color2 from "colorjs.io";
function getLCHFromStringAsString(str) {
  try {
    const color = new Color2(str);
    const [l, c, h_] = color.oklch;
    const h = isNaN(h_) ? 0 : h_;
    return `lch(${fmtNum1(l * 100)}%, ${fmtNum2(c)}, ${fmtNum1(h)})`;
  } catch (e) {
    console.error(`[\u{1F534}] getLCHFromStringAsString FAILURE (string is: "${str}")`);
    return `lch(.5 1 0)`;
  }
}
var fmtNum2 = (n) => {
  const s = n.toFixed(2);
  return s.endsWith(".00") ? s.slice(0, -3) : s.endsWith("0") ? s.slice(0, -1) : s;
};
var fmtNum1 = (n) => {
  const s = n.toFixed(1);
  return s.endsWith(".0") ? s.slice(0, -2) : s;
};

// src/controls/widgets/string/WidgetStringUI.tsx
var WidgetString_TextareaHeaderUI = observer54(function WidgetString_TextareaHeaderUI_(p) {
  const widget = p.widget;
  if (!widget.config.textarea)
    return null;
  if (!p.widget.serial.collapsed)
    return null;
  return /* @__PURE__ */ jsx("div", { tw: "line-clamp-1 italic opacity-50", children: p.widget.value });
});
var WidgetString_TextareaBodyUI = observer54(function WidgetString_TextareaBodyUI_(p) {
  const widget = p.widget;
  if (!widget.config.textarea)
    return null;
  const val = widget.value;
  return /* @__PURE__ */ jsx(Frame, { base: 5, children: /* @__PURE__ */ jsx(
    "textarea",
    {
      style: {
        /* ...p.widget.config.style, */
        lineHeight: "1.3rem",
        resize: p.widget.config.resize ?? "both"
      },
      tw: "cushy-basic-input w-full p-2",
      placeholder: widget.config.placeHolder,
      rows: 3,
      value: val,
      onChange: (ev) => {
        widget.value = ev.target.value;
      }
    }
  ) });
});
var WidgetString_HeaderUI = observer54(function WidgetStringUI_(p) {
  const widget = p.widget;
  const val = widget.value;
  let inputTailwind;
  let visualHelper;
  switch (widget.config.inputType) {
    case "color":
      inputTailwind = "absolute w-full h-full !bg-transparent opacity-0 !p-0";
      visualHelper = /* @__PURE__ */ jsx(
        Frame,
        {
          tw: "w-full h-full text-xs flex items-center font-mono",
          base: val ? val : void 0,
          text: { contrast: 1 },
          children: /* @__PURE__ */ jsx("div", { children: getLCHFromStringAsString(val) })
        }
      );
      break;
    default:
      inputTailwind = "w-full h-full !outline-none bg-transparent";
      break;
  }
  return /* @__PURE__ */ jsxs(
    Frame,
    {
      base: 5,
      text: { contrast: 1, chromaBlend: 1 },
      border: true,
      tw: [
        //
        "WIDGET-FIELD",
        "h-full w-full",
        "flex flex-1 items-center relative",
        "overflow-clip text-sm"
      ],
      onMouseDown: (ev) => {
        if (ev.button == 1) {
          const textInput = ev.currentTarget.querySelector('input[type="text"');
          textInput.focus();
        }
      },
      children: [
        visualHelper,
        /* @__PURE__ */ jsx(
          "input",
          {
            tw: inputTailwind,
            type: widget.config.inputType,
            pattern: widget.config.pattern,
            placeholder: widget.config.placeHolder,
            value: widget.config.buffered ? widget.temporaryValue ?? val : val,
            onChange: (ev) => {
              if (widget.config.buffered)
                widget.setTemporaryValue(ev.target.value);
              else
                widget.value = ev.currentTarget.value;
            },
            onDragStart: (ev) => ev.preventDefault(),
            onFocus: (ev) => {
              widget.setTemporaryValue(widget.value ?? "");
              ev.currentTarget.select();
            },
            onBlur: () => {
              if (widget.config.buffered && widget.temporaryValue != null) {
                widget.value = widget.temporaryValue;
              }
            },
            onKeyDown: (ev) => {
              if (ev.key === "Enter") {
                ev.currentTarget.blur();
              } else if (ev.key === "Escape") {
                if (!widget.config.buffered && widget.temporaryValue)
                  widget.value = widget.temporaryValue;
                widget.setTemporaryValue(null);
                ev.currentTarget.blur();
              }
            }
          }
        )
      ]
    }
  );
});

// src/controls/widgets/string/WidgetString.tsx
var Widget_string = class extends BaseWidget {
  // prettier-ignore
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.type = "str";
    // --------------
    this.temporaryValue = null;
    this.setTemporaryValue = (next) => this.temporaryValue = next;
    this.defaultValue = this.config.default ?? "";
    // prettier-ignore
    this.reset = () => {
      this.value = this.defaultValue;
    };
    this.id = serial?.id ?? nanoid22();
    const config = spec.config;
    this.serial = serial ?? {
      type: "str",
      val: this.config.default,
      collapsed: config.startCollapsed,
      id: this.id
    };
    makeAutoObservableInheritance(this);
  }
  get DefaultHeaderUI() {
    if (this.config.textarea)
      return WidgetString_TextareaHeaderUI;
    else
      return WidgetString_HeaderUI;
  }
  get DefaultBodyUI() {
    if (this.config.textarea)
      return WidgetString_TextareaBodyUI;
    return void 0;
  }
  get baseErrors() {
    return null;
  }
  get hasChanges() {
    return this.serial.val !== this.defaultValue;
  }
  get animateResize() {
    if (this.config.textarea)
      return false;
    return true;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction15(() => {
      this.serial.val = next;
      this.bumpValue();
    });
  }
  get value() {
    return this.serial.val ?? this.config.default ?? "";
  }
};
registerWidgetClass("str", Widget_string);

// src/controls/SimpleFormBuilder.ts
var SimpleFormBuilder = class {
  /** (@internal) don't call this yourself */
  constructor(form) {
    this.form = form;
    /** (@internal) DO NOT USE YOURSELF */
    this.SpecCtor = SimpleSpec;
    this.time = (config = {}) => {
      return new SimpleSpec("str", { inputType: "time", ...config });
    };
    this.date = (config = {}) => {
      return new SimpleSpec("str", { inputType: "date", ...config });
    };
    this.datetime = (config = {}) => {
      return new SimpleSpec("str", { inputType: "datetime-local", ...config });
    };
    this.password = (config = {}) => {
      return new SimpleSpec("str", { inputType: "password", ...config });
    };
    this.email = (config = {}) => {
      return new SimpleSpec("str", { inputType: "email", ...config });
    };
    this.url = (config = {}) => {
      return new SimpleSpec("str", { inputType: "url", ...config });
    };
    this.string = (config = {}) => {
      return new SimpleSpec("str", config);
    };
    this.text = (config = {}) => {
      return new SimpleSpec("str", config);
    };
    this.textarea = (config = {}) => {
      return new SimpleSpec("str", { textarea: true, ...config });
    };
    this.boolean = (config = {}) => {
      return new SimpleSpec("bool", config);
    };
    this.bool = (config = {}) => {
      return new SimpleSpec("bool", config);
    };
    this.size = (config = {}) => {
      return new SimpleSpec("size", config);
    };
    this.seed = (config = {}) => {
      return new SimpleSpec("seed", config);
    };
    this.color = (config = {}) => {
      return new SimpleSpec("color", config);
    };
    this.colorV2 = (config = {}) => {
      return new SimpleSpec("str", { inputType: "color", ...config });
    };
    this.matrix = (config) => {
      return new SimpleSpec("matrix", config);
    };
    this.button = (config) => {
      return new SimpleSpec("button", config);
    };
    /** variants: `header` */
    this.markdown = (config) => new SimpleSpec("markdown", typeof config === "string" ? { markdown: config } : config);
    /** [markdown variant]: inline=true, label=false */
    this.header = (config) => new SimpleSpec(
      "markdown",
      typeof config === "string" ? { markdown: config, inHeader: true, label: false } : { inHeader: true, label: false, alignLabel: false, ...config }
    );
    this.int = (config = {}) => {
      return new SimpleSpec("number", { mode: "int", ...config });
    };
    /** [number variant] precent = mode=int, default=100, step=10, min=1, max=100, suffix='%', */
    this.percent = (config = {}) => {
      return new SimpleSpec("number", {
        mode: "int",
        default: 100,
        step: 10,
        min: 1,
        max: 100,
        suffix: "%",
        ...config
      });
    };
    this.float = (config = {}) => {
      return new SimpleSpec("number", { mode: "float", ...config });
    };
    this.number = (config = {}) => {
      return new SimpleSpec("number", { mode: "float", ...config });
    };
    this.list = (config) => {
      return new SimpleSpec("list", config);
    };
    this.selectOne = (config) => {
      return new SimpleSpec("selectOne", config);
    };
    this.selectOneV2 = (p) => {
      return new SimpleSpec("selectOne", {
        choices: p.map((id) => ({ id, label: id })),
        appearance: "tab"
      });
    };
    this.selectOneV3 = (p, config = {}) => {
      return new SimpleSpec("selectOne", { choices: p.map((id) => ({ id, label: id })), appearance: "tab", ...config });
    };
    this.selectMany = (config) => {
      return new SimpleSpec("selectMany", config);
    };
    /** see also: `fields` for a more practical api */
    this.group = (config = {}) => {
      return new SimpleSpec("group", config);
    };
    this.fields = (fields, config = {}) => {
      return new SimpleSpec("group", { items: fields, ...config });
    };
    this.choice = (config) => {
      return new SimpleSpec("choices", { multi: false, ...config });
    };
    this.choices = (config) => {
      return new SimpleSpec("choices", { multi: true, ...config });
    };
    this.ok = (config = {}) => new SimpleSpec("group", config);
    /** simple choice alternative api */
    this.tabs = (items, config = {}) => new SimpleSpec("choices", { items, multi: false, ...config, appearance: "tab" });
    // optional wrappers
    this.optional = (p) => {
      return new SimpleSpec("optional", p);
    };
    this.llmModel = (p = {}) => {
      const choices = Object.entries(openRouterInfos).map(([id, info]) => ({ id, label: info.name }));
      const def = p.default ? choices.find((c) => c.id === p.default) : void 0;
      return this.selectOne({ default: def, choices });
    };
    /**
     * Calling this function will mount and instanciate the subform right away
     * Subform will be register in the root form `group`, using `__${key}__` as the key
     * This is a core abstraction that enables features like
     *  - mountting a widget at several places in the form
     *  - recursive forms
     *  - dynamic widgets depending on other widgets values
     * */
    this.shared = (key, spec) => {
      const prevSerial = this.form.shared[key];
      let widget;
      if (prevSerial && prevSerial.type === spec.type) {
        widget = this._HYDRATE(null, spec, prevSerial);
      } else {
        widget = this._HYDRATE(null, spec, null);
      }
      this.form.shared[key] = widget.serial;
      this.form.knownShared.set(key, widget);
      const sharedSpec = new SimpleSpec("shared", { rootKey: key, widget });
      return new Widget_shared(this.form, null, sharedSpec);
    };
    /** (@internal); */
    this._cache = { count: 0 };
    /** (@internal) advanced way to restore form state. used internally */
    this.__HYDRATE = (parent, spec, serial) => {
      if (serial != null && serial.type !== spec.type) {
        console.log(`[\u{1F536}] INVALID SERIAL (expected: ${spec.type}, got: ${serial.type})`);
        serial = null;
      }
      if (spec instanceof Widget_shared)
        return spec;
      if (!(spec instanceof SimpleSpec))
        console.log(`[\u274C] _HYDRATE received an invalid unmounted widget. This is probably a bug.`);
      const type = spec.type;
      const config = spec.config;
      const spec2 = spec;
      if (type === "group")
        return new Widget_group(
          this.form,
          parent,
          spec2,
          serial,
          this.form._ROOT ? void 0 : (x) => {
            this.form._ROOT = x;
          }
        );
      if (type === "shared") {
        throw new Error(`[\u274C] For now, Shared_Widget have been design to bypass spec hydratation completely.`);
      }
      if (type === "optional")
        return new Widget_optional(this.form, parent, spec2, serial);
      if (type === "bool")
        return new Widget_bool(this.form, parent, spec2, serial);
      if (type === "str")
        return new Widget_string(this.form, parent, spec2, serial);
      if (type === "choices")
        return new Widget_choices(this.form, parent, spec2, serial);
      if (type === "number")
        return new Widget_number(this.form, parent, spec2, serial);
      if (type === "color")
        return new Widget_color(this.form, parent, spec2, serial);
      if (type === "list")
        return new Widget_list(this.form, parent, spec2, serial);
      if (type === "button")
        return new Widget_button(this.form, parent, spec2, serial);
      if (type === "seed")
        return new Widget_seed(this.form, parent, spec2, serial);
      if (type === "matrix")
        return new Widget_matrix(this.form, parent, spec2, serial);
      if (type === "selectOne")
        return new Widget_selectOne(this.form, parent, spec2, serial);
      if (type === "selectMany")
        return new Widget_selectMany(this.form, parent, spec2, serial);
      if (type === "size")
        return new Widget_size(this.form, parent, spec2, serial);
      if (type === "spacer")
        return new Widget_spacer(this.form, parent, spec2, serial);
      if (type === "markdown")
        return new Widget_markdown(this.form, parent, spec2, serial);
      console.log(`\u{1F534} unknown widget "${type}" in serial.`);
      return new Widget_markdown(
        this.form,
        parent,
        new SimpleSpec("markdown", { markdown: `\u{1F534} unknown widget "${type}" in serial.` })
      );
    };
    this._HYDRATE = (parent, spec, serial) => {
      const w = this.__HYDRATE(parent, spec, serial);
      w.publishValue();
      for (const { expr, effect } of spec.reactions) {
        reaction2(
          () => expr(w),
          (arg) => effect(arg, w),
          { fireImmediately: true }
        );
      }
      return w;
    };
    makeAutoObservable12(this, {
      SpecCtor: false
    });
  }
};

// src/controls/SimpleForm.ts
var SimpleFormManager = new FormManager(SimpleFormBuilder);
export {
  SimpleFormManager
};
