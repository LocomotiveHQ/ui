// src/controls/FormManager.ts
import { useMemo as useMemo2 } from "react";

// src/controls/Form.ts
import { action, isObservable, makeAutoObservable as makeAutoObservable2, observable as observable2, toJS } from "mobx";
import { nanoid } from "nanoid";
import { createElement } from "react";

// src/panels/Panel_Gallery/FormAsDropdownConfigUI.tsx
import { observer as observer7 } from "mobx-react-lite";

// src/controls/FormUI.tsx
import { observer as observer4 } from "mobx-react-lite";

// src/panels/MessageUI.tsx
import { observer as observer2 } from "mobx-react-lite";

// src/rsuite/MarkdownUI.tsx
import { marked } from "marked";
import { observer } from "mobx-react-lite";

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

// src/rsuite/MarkdownUI.tsx
var MarkdownUI = observer(function MarkdownUI_(p) {
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

// src/panels/MessageUI.tsx
var MessageInfoUI = observer2(function MessageInfoUI_(p) {
  return /* @__PURE__ */ jsxs("div", { className: p.className, tw: "virtualBorder p-1 rounded flex items-center gap-2 bg-info-2", children: [
    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "info" }),
    p.title ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { tw: "text-xl w-full font-bold", children: p.title }),
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] })
  ] });
});
var MessageErrorUI = observer2(function MessageErrorUI_(p) {
  return /* @__PURE__ */ jsxs("div", { tw: "virtualBorder p-1 rounded flex items-center gap-2 bg-error-2", children: [
    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "error" }),
    p.title ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { tw: "text-xl w-full font-bold", children: p.title }),
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] })
  ] });
});
var MessageWarningUI = observer2(function MessageWarningUI_(p) {
  return /* @__PURE__ */ jsxs("div", { tw: "virtualBorder p-1 rounded flex items-center gap-2 bg-warning-2", children: [
    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "warning" }),
    p.title ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { tw: "text-xl w-full font-bold", children: p.title }),
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      p.children,
      /* @__PURE__ */ jsx(MarkdownUI, { markdown: p.markdown })
    ] })
  ] });
});

// src/theme/colorEngine/Box.tsx
import { observer as observer3 } from "mobx-react-lite";

// src/theme/colorEngine/AbsoluteStyle.tsx
import { createContext } from "react";
var ThemeCtx = createContext({
  background: {
    type: "absolute",
    lightness: 0.1,
    chroma: 0.05,
    hue: 0
  },
  text: {
    type: "relative",
    contrast: 1,
    chromaBlend: 0,
    hueShift: 0
  }
  // text: { type: 'absolute', lightness: 0, chroma: 0.5, hue: 180, },
  // shadow: null,
  // border: null,
});

// src/theme/colorEngine/useColor.tsx
import Color from "colorjs.io";
import { createHash } from "crypto";
import { useContext } from "react";

// src/controls/widgets/list/clamp.ts
var clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// src/theme/colorEngine/applyRelative.tsx
var applyRelative = (a, b) => {
  const xxx = autoContrast(a.lightness, b.contrast);
  const lightness = xxx;
  const chroma = clamp(b.chroma ?? a.chroma * (b.chromaBlend ?? 1), 0, 0.4);
  const hue = b.hue ?? a.hue + (b.hueShift ?? 0);
  return { type: "absolute", lightness, chroma, hue };
};
function autoContrast(lightness, contrast) {
  const start = lightness;
  const end = Math.round(lightness) - Math.sign(lightness - 0.5 + 1e-5);
  return start * (1 - contrast) + end * contrast;
}

// src/theme/colorEngine/formatColor.tsx
function formatColor(col) {
  return `oklch(${clamp(col.lightness, 1e-4, 0.9999)} ${col.chroma} ${col.hue})`;
}

// src/theme/colorEngine/useColor.tsx
var useColor = (p = {}) => {
  const ctx = useContext(ThemeCtx);
  const baseStyle = (() => {
    if (p.base) {
      if (typeof p.base === "number") {
        return applyRelative(ctx.background, { contrast: clamp(p.base / 100, 0, 1) });
      }
      if (typeof p.base === "string") {
        const color2 = new Color(p.base);
        const [l, c, h] = color2.oklch;
        return { type: "absolute", lightness: l, chroma: c, hue: h };
      }
      return applyRelative(ctx.background, p.base);
    }
    return ctx.background;
  })();
  const textStyle = (() => {
    if (p.text) {
      if (typeof p.text === "string") {
        const color2 = new Color(p.text);
        const [l, c, h] = color2.oklch;
        return { type: "absolute", lightness: l, chroma: c, hue: h };
      }
      return applyRelative(baseStyle, p.text);
    } else {
      if (ctx.text.type === "absolute")
        return ctx.text;
      return applyRelative(baseStyle, ctx.text);
    }
  })();
  const borderStyle = (() => {
    if (p.border) {
      if (typeof p.border === "boolean") {
        return applyRelative(baseStyle, { contrast: 0.2 });
      }
      if (typeof p.border === "number") {
        return applyRelative(baseStyle, { contrast: clamp(p.border / 10, 0, 1) });
      }
      if (typeof p.border === "string") {
        const color2 = new Color(p.border);
        const [l, c, h] = color2.oklch;
        return { type: "absolute", lightness: l, chroma: c, hue: h };
      }
      return applyRelative(baseStyle, p.border);
    }
    return null;
  })();
  const textForCtx = typeof p.text === "object" ? p.text : ctx.text;
  const border = borderStyle ? `1px solid ${formatColor(borderStyle)}` : void 0;
  const color = formatColor(textStyle);
  const background = p.base != null ? formatColor(baseStyle) : void 0;
  let baseHover;
  let textHover;
  let borderHover;
  if (p.hover) {
    const baseHoverStyle = applyRelative(baseStyle, { contrast: 0.2 });
    baseHover = formatColor(baseHoverStyle);
    if (borderStyle) {
      const borderHoverStyle = applyRelative(borderStyle, { contrast: 0.2 });
      borderHover = formatColor(borderHoverStyle);
    }
    const textHoverStyle = applyRelative(baseHoverStyle, { contrast: 0.9, chromaBlend: 2 });
    textHover = formatColor(textHoverStyle);
  }
  const styles = {
    border,
    background,
    color
  };
  const variables = {
    "--box-base": styles.background ?? "initial",
    "--box-text": styles.color ?? "initial",
    "--box-border": styles.border ?? "initial",
    "--box-hover-base": baseHover ?? background ?? "initial",
    "--box-hover-text": textHover ?? color ?? "initial",
    "--box-hover-border": borderHover ?? border ?? "initial"
  };
  return {
    background: baseStyle,
    text: textStyle,
    textForCtx,
    border: borderStyle,
    get className() {
      return compileOrRetrieveClassName(styles);
    },
    styles,
    variables
  };
};
var cache = {};
var compileOrRetrieveClassName = (appearance) => {
  const vals = JSON.stringify(appearance);
  const hash = "col-" + createHash("md5").update(vals).digest("hex");
  if (hash in cache)
    return cache[hash];
  console.log(`[\u{1F308}] `, `.${hash}`, appearance);
  const cssBlock = Object.entries(appearance).map(([key, val]) => {
    if (val == null)
      return "";
    return `${key}: ${val};`;
  }).join("\n");
  setRule(`.${hash}`, cssBlock);
  cache[hash] = hash;
  return hash;
};
var styleElement = null;
function getStyleElement() {
  if (styleElement != null)
    return styleElement;
  if (styleElement) {
    styleElement = styleElement;
  } else {
    styleElement = styleElement ?? document.createElement("style");
    styleElement.title = "dynamic-theme-css";
    document.head.appendChild(styleElement);
  }
  return styleElement;
}
function setRule(selector, block = "") {
  const styleSheet = getStyleElement().sheet;
  const rules = styleSheet.cssRules;
  if (rules == null)
    throw new Error("\u274C no rules");
  const rule = Array.from(rules).find((r) => r.selectorText === selector);
  if (rule == null) {
    const index = styleSheet.insertRule(`${selector} {${block}}`, styleSheet.cssRules.length);
    return styleSheet.cssRules[index];
  } else {
    rule.style.cssText = block;
    return rule;
  }
}

// src/theme/colorEngine/Box.tsx
var BoxBase = observer3(function BoxTitleUI_({ children, ...rest }) {
  return /* @__PURE__ */ jsx(Box, { ...rest, base: { contrast: 0.05 }, children });
});
var BoxTitle = observer3(function BoxTitleUI_2({ children, ...rest }) {
  return /* @__PURE__ */ jsx(Box, { ...rest, text: { contrast: 1, chromaBlend: 100, hueShift: 0 }, children });
});
var BoxSubtle = observer3(function BoxSubtle_({ children, ...rest }) {
  return /* @__PURE__ */ jsx(Box, { ...rest, text: { contrast: 0.4, chromaBlend: 1, hueShift: 0 }, children });
});
var Box = observer3(
  function BoxUI_(p, ref) {
    const {
      // to merge:
      style,
      className,
      // to ignore:
      base,
      hover,
      text,
      shadow,
      border,
      // others:
      ...rest
    } = p;
    const {
      background,
      textForCtx,
      /* styles, */
      variables
    } = useColor(p);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ...rest,
        ref,
        tw: [
          /* className, */
          className,
          "Box"
        ],
        style: {
          /* ...styles, */
          ...style,
          ...variables
        },
        children: /* @__PURE__ */ jsx(
          ThemeCtx.Provider,
          {
            value: {
              background,
              // ~~text must always remaian relative~~ => nope anymore ? ⁉️
              text: textForCtx
            },
            children: p.children
          }
        )
      }
    );
  },
  { forwardRef: true }
);

// src/controls/FormUI.tsx
var FormUI = observer4(function FormUI_(p) {
  const form = p.form;
  if (form == null)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: `form is not yet initialized` });
  if (form.error)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: form.error });
  if (form.root == null)
    return /* @__PURE__ */ jsx(MessageErrorUI, { markdown: "form.root is null" });
  const submitAction = p.submitAction;
  return /* @__PURE__ */ jsxs(Box, { ...p.theme, className: p.className, style: p.style, children: [
    form.root.ui(),
    p.submitButton ?? (submitAction == null ? null : submitAction === "confetti" ? /* @__PURE__ */ jsx("div", { tw: "flex", children: /* @__PURE__ */ jsx(
      "div",
      {
        tw: "btn btn-primary ml-auto",
        onClick: async () => {
          const fire = (await import("https://cdn.skypack.dev/canvas-confetti")).default;
          fire({ zIndex: 1e5, particleCount: 100, spread: 70 });
        },
        children: p.submitLabel ?? "Submit"
      }
    ) }) : /* @__PURE__ */ jsx("div", { tw: "flex", children: /* @__PURE__ */ jsx("div", { tw: "btn btn-primary ml-auto", onClick: () => submitAction(form), children: p.submitLabel ?? "Submit" }) }))
  ] });
});

// src/rsuite/reveal/RevealUI.tsx
import { observer as observer6 } from "mobx-react-lite";
import { useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";

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

// src/rsuite/reveal/ModalShell.tsx
import { observer as observer5 } from "mobx-react-lite";
var ModalShellUI = observer5(function ModalShellUI_(p) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: p.className,
      tw: [
        //
        "animate-in fade-in",
        "virtualBorder p-4 rounded-xl bg-base-100 shadow-xl"
      ],
      onClick: (ev) => ev.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxs("div", { tw: "flex", children: [
          /* @__PURE__ */ jsx("div", { tw: "text-xl", children: p.title }),
          /* @__PURE__ */ jsx("div", { tw: "flex-1" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              tw: "btn btn-sm btn-square",
              onClick: (ev) => {
                ev.stopPropagation();
                ev.preventDefault();
                p.close();
              },
              children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "close" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "divider my-0" }),
        /* @__PURE__ */ jsx("div", { tw: "_ModalBody", children: p.children }),
        /* @__PURE__ */ jsx("div", { tw: "_ModalFooter", children: p.footer })
      ]
    }
  );
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
import { makeAutoObservable, observable } from "mobx";

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
    makeAutoObservable(this, { p: false });
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
    this.contentFn = p.content;
    makeAutoObservable(this, { uid: false, p: false });
  }
  static {
    this.nextUID = 1;
  }
  static {
    this.shared = observable({ current: null }, { current: observable.ref });
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
var RevealUI = observer6(function RevealUI_(p) {
  const ref = useRef(null);
  const parents = useRevealOrNull()?.tower ?? [];
  const self = useMemo(() => new RevealStateLazy(p, parents.map((p2) => p2.getUist())), []);
  const { uistOrNull, getUist: uist2 } = self;
  const nextTower = useMemo(() => ({ tower: [...parents, self] }), []);
  useEffect(() => {
    const x = uistOrNull;
    if (x == null)
      return;
    if (p.content !== x.p.content)
      x.contentFn = p.content;
    if (p.trigger !== x.p.trigger)
      x.p.trigger = p.trigger;
    if (p.placement !== x.p.placement)
      x.p.placement = p.placement;
    if (p.showDelay !== x.p.showDelay)
      x.p.showDelay = p.showDelay;
    if (p.hideDelay !== x.p.hideDelay)
      x.p.hideDelay = p.hideDelay;
  }, [p.content, p.trigger, p.placement, p.showDelay, p.hideDelay]);
  useEffect(() => {
    if (uistOrNull?.visible && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      uistOrNull.setPosition(rect);
    }
  }, [uistOrNull?.visible]);
  const content = p.children;
  const tooltip = mkTooltip(uistOrNull);
  const anchor = /* @__PURE__ */ jsxs(
    "span",
    {
      tw: ["inline-block ui-reveal-anchor", uistOrNull?.defaultCursor ?? "cursor-pointer"],
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
        content,
        tooltip
      ]
    }
  );
  return /* @__PURE__ */ jsx(RevealCtx.Provider, { value: nextTower, children: anchor });
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
  const hiddenContent = uist.contentFn();
  const revealedContent = uist.placement.startsWith("#") ? /* @__PURE__ */ jsx(
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
  ) : uist.placement.startsWith("popup") ? /* @__PURE__ */ jsx(
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
  ) : /* @__PURE__ */ jsxs(
    "div",
    {
      className: p.tooltipWrapperClassName,
      tw: ["_RevealUI card card-bordered bg-base-100 shadow-xl pointer-events-auto"],
      onClick: (ev) => {
        ev.stopPropagation();
      },
      onMouseEnter: uist.onMouseEnterTooltip,
      onMouseLeave: uist.onMouseLeaveTooltip,
      onContextMenu: uist.enterAnchor,
      style: {
        //   borderTop: uist._lock ? '1px dashed yellow' : undefined,
        position: "absolute",
        zIndex: 99999999,
        top: pos.top ? `${pos.top}px` : void 0,
        bottom: pos.bottom ? `${pos.bottom}px` : void 0,
        left: pos.left ? `${pos.left}px` : void 0,
        right: pos.right ? `${pos.right}px` : void 0,
        transform: pos.transform
        // Adjust positioning as needed
      },
      children: [
        p.title ? /* @__PURE__ */ jsxs("div", { tw: "px-2", children: [
          /* @__PURE__ */ jsx("div", { tw: "py-0.5", children: p.title }),
          /* @__PURE__ */ jsx("div", { tw: "w-full rounded bg-neutral-content", style: { height: "1px" } })
        ] }) : /* @__PURE__ */ jsx(Fragment, {}),
        hiddenContent,
        uist._lock ? /* @__PURE__ */ jsxs("span", { tw: "opacity-50 italic text-sm flex gap-1 items-center justify-center", children: [
          /* @__PURE__ */ jsx(Ikon.mdiLock, {}),
          "shift+right-click to unlock"
        ] }) : /* @__PURE__ */ jsxs("span", { tw: "opacity-50 italic text-sm flex gap-1 items-center justify-center", children: [
          /* @__PURE__ */ jsx(Ikon.mdiLockOff, {}),
          "shift+right-click to lock"
        ] })
      ]
    }
  );
  return createPortal(revealedContent, element);
};

// src/panels/Panel_Gallery/FormAsDropdownConfigUI.tsx
var FormAsDropdownConfigUI = observer7(function FormAsDropdownConfigUI_(p) {
  return /* @__PURE__ */ jsx(
    RevealUI,
    {
      tw: "WIDGET-FIELD",
      title: p.title,
      content: () => /* @__PURE__ */ jsx("div", { style: { width: "500px" }, tw: "flex-shrink-0", children: /* @__PURE__ */ jsx(FormUI, { form: p.form }) }),
      children: /* @__PURE__ */ jsxs("div", { tw: "flex px-1 cursor-default bg-base-200 rounded w-full h-full items-center justify-center hover:brightness-125 border border-base-100", children: [
        /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "settings" }),
        /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "expand_more" })
      ] })
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
    this.uid = nanoid();
    /** loading error  */
    this.error = null;
    /** shortcut to access the <FormUI /> component without having to import it first */
    this.FormUI = FormUI;
    /**
     * allow to quickly render the form in a react component
     * without having to import any component; usage:
     * | <div>{x.render()}</div>
     */
    this.render = (p = {}) => createElement(FormUI, { form: this, ...p });
    this.renderAsConfigBtn = () => createElement(FormAsDropdownConfigUI, {
      form: this
    });
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
      console.log(`[\u{1F98A}] value changed`);
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
          formSerial = observable2(formSerial);
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
    makeAutoObservable2(this, {
      //
      // builder: false,
      root: false,
      init: action
    });
  }
  get value() {
    return this.root.value;
  }
  // get rootSerial(): ROOT['$Serial'] {
  //     return this.root.serial
  // }
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

// src/controls/shared/runWithGlobalForm.ts
import { nanoid as nanoid2 } from "nanoid";
var GlobalFormCtx = class {
  constructor() {
    this.id = nanoid2();
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
      return useMemo2(() => {
        return new Form(this, ui, formProperties);
      }, deps);
    };
  }
};

// src/controls/SimpleFormBuilder.ts
import { makeAutoObservable as makeAutoObservable11, reaction as reaction2 } from "mobx";

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
import { makeObservable } from "mobx";
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
    makeObservable(this, { config: true });
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
import { computed as computed2, observable as observable6, runInAction as runInAction3 } from "mobx";
import { nanoid as nanoid6 } from "nanoid";

// src/controls/BaseWidget.tsx
import { observer as observer21 } from "mobx-react-lite";

// src/panels/libraryUI/tree/xxx/TreeWidget.tsx
import { makeAutoObservable as makeAutoObservable3 } from "mobx";
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
    makeAutoObservable3(this);
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
import { $mobx, isObservable as isObservable2, makeObservable as makeObservable2 } from "mobx";
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
  return makeObservable2(target, annotations, options);
};

// src/controls/IWidget.ts
var isWidget = (x) => {
  return x != null && //
  typeof x === "object" && "$WidgetSym" in x && x.$WidgetSym === $WidgetSym;
};
var $WidgetSym = Symbol("Widget");

// src/controls/shared/WidgetWithLabelUI.tsx
import { observer as observer20 } from "mobx-react-lite";
import { ErrorBoundary } from "react-error-boundary";

// src/utils/misc/makeLabelFromFieldName.tsx
function makeLabelFromFieldName(s) {
  if (typeof s !== "string") {
    console.log(`[\u{1F534}] makeLabelFromFieldName: expected string, got ${typeof s} (${s})`);
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
  return s[0].toUpperCase() + s.slice(1);
}

// src/widgets/workspace/JsonViewUI.tsx
import JsonView from "@uiw/react-json-view";
import { observer as observer8 } from "mobx-react-lite";
var JsonViewUI = observer8(function JsonViewUI_(p) {
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

// src/widgets/misc/ErrorBoundary.tsx
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

// src/controls/utils/AnimatedSizeUI.tsx
import { observer as observer9 } from "mobx-react-lite";

// src/controls/utils/useSizeOf.tsx
import { runInAction } from "mobx";
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
        runInAction(() => {
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
var AnimatedSizeUI = observer9(function AnimatedSizeUI_(p) {
  const { ref: refFn, size } = useSizeOf();
  return /* @__PURE__ */ jsx("div", { className: p.className, tw: "animated overflow-hidden", style: { height: `${size.height}px` }, children: /* @__PURE__ */ jsx("div", { ref: refFn, children: p.children }) });
});

// src/controls/shared/getActualWidgetToDisplay.tsx
function getActualWidgetToDisplay(originalWidget) {
  if (isWidgetOptional(originalWidget))
    return getActualWidgetToDisplay(originalWidget.child);
  if (isWidgetShared(originalWidget))
    return getActualWidgetToDisplay(originalWidget.shared);
  return originalWidget;
}

// src/controls/shared/getBorderStatusForWidget.ts
var getBorderStatusForWidget = (widget) => {
  if (isWidgetGroup(widget) && widget.config.topLevel)
    return false;
  if (widget.config.border != null)
    return widget.config.border;
  if (widget.border != null)
    return widget.border;
  if (widget.DefaultBodyUI == null)
    return false;
  return true;
};

// src/controls/shared/getIfWidgetIsCollapsible.tsx
var getIfWidgetIsCollapsible = (widget) => {
  if (widget.config.collapsed != null)
    return widget.config.collapsed;
  if (widget.collapsible != null)
    return widget.collapsible;
  if (!widget.DefaultBodyUI)
    return false;
  if (widget.config.label === false)
    return false;
  return true;
};

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

// src/controls/shared/Widget_ToggleUI.tsx
import { observer as observer11 } from "mobx-react-lite";

// src/controls/widgets/bool/InputBoolUI.tsx
import { observer as observer10 } from "mobx-react-lite";
var isDragging = false;
var wasEnabled = false;
var InputBoolUI = observer10(function InputBoolUI_(p) {
  const isActive = p.active ?? false;
  const display = p.display ?? "check";
  const expand = p.expand;
  const icon = p.icon;
  const label = p.text;
  const isDraggingListener = (ev) => {
    if (ev.button == 0) {
      isDragging = false;
      window.removeEventListener("mouseup", isDraggingListener, true);
    }
  };
  return /* @__PURE__ */ jsx(
    Box,
    {
      base: { contrast: 0.1 },
      className: p.className,
      style: p.style,
      tw: [
        "WIDGET-FIELD select-none cursor-pointer",
        "flex items-center",
        "!outline-none",
        "hover:brightness-110",
        isActive && "brightness-110",
        // Make the click-able area take up the entire width when as a checkmark and haven't explicitly set expand to false.
        (display == "check" && expand === void 0 || expand) && "w-full"
      ],
      tabIndex: -1,
      onMouseDown: (ev) => {
        if (ev.button == 0) {
          wasEnabled = !isActive;
          isDragging = true;
          ev.stopPropagation();
          window.addEventListener("mouseup", isDraggingListener, true);
          if (!p.onValueChange)
            return;
          p.onValueChange(!isActive);
        }
      },
      onMouseEnter: (ev) => {
        if (!isDragging)
          return;
        if (!p.onValueChange)
          return;
        p.onValueChange(wasEnabled);
      },
      children: display == "check" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: [
              //
              "flex items-center rounded-sm bg-base-100",
              "border border-base-200",
              "border-b-2 border-b-base-300 box-content"
            ],
            children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                checked: isActive,
                tw: ["checkbox checkbox-primary h-5 w-5 rounded-sm !outline-none cursor-default"],
                tabIndex: -1,
                readOnly: true
              }
            )
          }
        ),
        icon && /* @__PURE__ */ jsx("span", { tw: "pl-1.5", className: "material-symbols-outlined", children: icon }),
        label && /* @__PURE__ */ jsx("div", { tw: ["line-clamp-1", icon ? "pl-1" : "pl-1.5"], children: label })
      ] }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        Box,
        {
          base: { contrast: isActive ? 0.5 : 0 },
          tw: [
            //
            "flex items-center h-full p-1 px-2 rounded",
            "bg-base-200 border border-base-100 text-shadow",
            "border-b-2 border-b-base-300",
            isActive && "text-shadow-inv",
            icon && "pl-1.5",
            expand && "w-full justify-center",
            "grid gap-0"
          ],
          style: icon ? { gridTemplateColumns: "24px 1fr" } : {},
          children: [
            icon && /* @__PURE__ */ jsx("span", { tw: "flex-shrink-0 h-full pr-1.5 shadow-inherit", className: "material-symbols-outlined", children: icon }),
            /* @__PURE__ */ jsx("p", { tw: "w-full text-center line-clamp-1", children: label ? label : /* @__PURE__ */ jsx(Fragment, {}) })
          ]
        }
      ) })
    }
  );
});

// src/controls/shared/Widget_ToggleUI.tsx
var Widget_ToggleUI = observer11(function Widget_ToggleUI_(p) {
  if (!isWidgetOptional(p.widget))
    return null;
  const widget = p.widget;
  return /* @__PURE__ */ jsx(
    InputBoolUI,
    {
      active: widget.serial.active,
      expand: false,
      onValueChange: (value) => widget.setActive(value)
    }
  );
});

// src/operators/Menu.ts
import { nanoid as nanoid3 } from "nanoid";
import { createElement as createElement3, useMemo as useMemo3 } from "react";

// src/operators/Activity.ts
import { makeAutoObservable as makeAutoObservable4 } from "mobx";
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
    makeAutoObservable4(this);
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
import { computed, makeObservable as makeObservable4, observable as observable4 } from "mobx";

// src/utils/misc/ManualPromise.ts
import { action as action2, makeObservable as makeObservable3, observable as observable3, runInAction as runInAction2 } from "mobx";
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
      exhaust(res);
      throw new Error(`INVALID CASE`);
    };
    makeObservable4(this, {
      inputHistory: true,
      contextByName: observable4.shallow,
      commandByShortcut: observable4.shallow,
      knownContexts: computed
    });
    this.name = this.conf.name || "no-name";
  }
  get knownContexts() {
    return Array.from(this.contextByName.values());
  }
};
var exhaust = (_) => _;
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
      console.warn(`[CMD] \u2623\uFE0F TRYING TO RUN... ${this.label}`);
      const context = this.conf.ctx.check();
      if (context === "UNMATCHED" /* UNMATCHED */) {
        console.warn(`[CMD] \u{1F534} FAILED TO RUN`);
        return "UNMATCHED" /* UNMATCHED */;
      }
      const res = this.conf.action?.(context);
      return res;
    };
    this.NavBarBtnUI = (p) => {
      return /* @__PURE__ */ jsx("div", { onClick: () => this.execute(), children: p.label ?? this.label });
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
import { observer as observer14 } from "mobx-react-lite";
import { createElement as createElement2 } from "react";
import { Fragment as Fragment3 } from "react/jsx-runtime";

// src/rsuite/Dropdown.tsx
import { observer as observer13 } from "mobx-react-lite";

// src/app/shortcuts/ComboUI.tsx
import { observer as observer12 } from "mobx-react-lite";
import { Fragment as Fragment2 } from "react";
var ComboUI = observer12(function ComboUI_(p) {
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

// src/rsuite/Dropdown.tsx
var MenuItem = observer13(function DropdownItem_(p) {
  const { size, label, disabled, icon, children, active, onClick, ...rest } = p;
  return /* @__PURE__ */ jsxs(
    Box,
    {
      text: { contrast: disabled ? 0.5 : 1 },
      base: {
        contrast: active ? 0.9 : 0.05,
        chroma: active ? 0.5 : void 0
      },
      hover: true,
      onClick: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        p.onClick?.(ev);
      },
      style: { lineHeight: "1.6rem" },
      tw: ["_MenuItem", "px-1 flex items-center gap-2 whitespace-nowrap cursor-pointer"],
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
var MenuRootUI = observer14(function MenuRootUI_(p) {
  return /* @__PURE__ */ jsx(RevealUI, { className: "dropdown", placement: "bottomStart", content: () => /* @__PURE__ */ jsx(p.menu.UI, {}), children: /* @__PURE__ */ jsx("label", { tabIndex: 0, tw: [`flex-nowrap btn btn-ghost btn-sm py-0 px-1.5`], children: p.menu.menu.title }) });
});
var MenuUI = observer14(function MenuUI_(p) {
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
          return /* @__PURE__ */ jsx(Fragment3, { children: createElement2(entry) }, ix);
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
    this.UI = (p) => createElement3(MenuUI, { menu: useMemo3(() => new MenuInstance(this, p.props), []) });
    this.DropDownUI = (p) => createElement3(MenuRootUI, { menu: useMemo3(() => new MenuInstance(this, p.props), []) });
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
    this.UI = () => createElement3(MenuUI, { menu: this });
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
import { makeAutoObservable as makeAutoObservable6, observable as observable5 } from "mobx";
import { nanoid as nanoid4 } from "nanoid";

// src/db/SQLITE_boolean.ts
var SQLITE_true = 1;
var SQLITE_false = 0;

// src/panels/libraryUI/tree/xxx/TreeNode.ts
import { makeAutoObservable as makeAutoObservable5 } from "mobx";

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
    makeAutoObservable5(this, { _children_: false });
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
  return observable5({
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
    makeAutoObservable6(this, {
      // indexNode: action
    });
  }
};

// src/panels/libraryUI/tree/xxx/TreeUI.tsx
import { observer as observer18 } from "mobx-react-lite";

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
import { createContext as createContext3, useContext as useContext3 } from "react";
var TreeViewCtx = createContext3(null);
var useTreeView = () => {
  const val = useContext3(TreeViewCtx);
  if (val == null)
    throw new Error("missing editor in current widget react contexts");
  return val;
};

// src/panels/libraryUI/tree/xxx/TreeEntryUI.tsx
import { observer as observer17 } from "mobx-react-lite";
import { Fragment as Fragment4 } from "react";

// src/panels/libraryUI/tree/RenderItemTitleUI.tsx
import { observer as observer16 } from "mobx-react-lite";

// src/panels/libraryUI/tree/RenderTreeIcon1.tsx
import { observer as observer15 } from "mobx-react-lite";
var TreeIcon1UI = observer15(function TreeIcon1UI_(p) {
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
var RenderItemTitleUI = observer16(function RenderItemTitleUI_(p) {
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
var TreeEntryUI = observer17(function TreeEntryUI_(p) {
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
var TreeUI = observer18(function TreeEditorUI_(p) {
  const tv = p.treeView;
  return /* @__PURE__ */ jsx(TreeViewCtx.Provider, { value: tv, children: /* @__PURE__ */ jsxs("div", { tw: "_TreeUI flex flex-col", className: p.className, children: [
    /* @__PURE__ */ jsxs("div", { tw: "flex items-center gap-1 bg-base-300", children: [
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
import { makeAutoObservable as makeAutoObservable7 } from "mobx";
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
    makeAutoObservable7(this, { filterRef: false, id: false });
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

// src/controls/shared/WidgetMenu.tsx
var menu_widgetActions = menu({
  title: "widget actions",
  entries: (widget) => {
    const createPreset = new SimpleMenuModal({
      label: "Create Preset",
      submit: () => {
        console.log(`[\u{1F920}] values`);
      },
      UI: () => {
        const tree = new Tree([widget.asTreeElement("root")]);
        const treeView = new TreeView(tree, { selectable: true });
        return /* @__PURE__ */ jsx(TreeUI, { title: "Select values to include in preset", treeView });
      }
    });
    const presets = widget.config.presets;
    if (presets == null)
      return [createPreset];
    const entries = presets;
    if (entries.length === 0)
      return [createPreset];
    return [
      //
      createPreset,
      ...entries.map(
        (entry) => new SimpleMenuAction({
          label: entry.label,
          icon: entry.icon,
          onPick: () => entry.apply(widget)
        })
      )
    ];
  }
});

// src/controls/shared/WidgetTooltipUI.tsx
import { observer as observer19 } from "mobx-react-lite";
var WidgetTooltipUI = observer19(function WidgetTooltipUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(RevealUI, { content: () => /* @__PURE__ */ jsx("div", { children: widget.config.tooltip }), children: /* @__PURE__ */ jsx("div", { className: "btn btn-sm btn-square btn-ghost", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "info" }) }) });
});

// src/controls/shared/WidgetWithLabelUI.tsx
var isDragging2 = false;
var wasEnabled2 = false;
var WidgetWithLabelUI = observer20(function WidgetWithLabelUI_(p) {
  if (p.widget.config.hidden)
    return null;
  const rootKey = p.rootKey;
  const originalWidget = p.widget;
  const widget = getActualWidgetToDisplay(originalWidget);
  const isDisabled = isWidgetOptional(originalWidget) && !originalWidget.serial.active;
  const HeaderUI = widget.header();
  const BodyUI = widget.body();
  const isCollapsible = getIfWidgetIsCollapsible(widget);
  const isCollapsed = (widget.serial.collapsed ?? isDisabled) && isCollapsible;
  const alignLabel = p.alignLabel ?? getIfWidgetNeedAlignedLabel(widget);
  const k = widget;
  if (isWidgetGroup(k) && //
  Object.keys(k.fields).length === 0) {
    return null;
  }
  const showBorder = getBorderStatusForWidget(widget);
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
        tw: [isCollapsed || isCollapsible ? "cursor-pointer" : null],
        className: "COLLAPSE-PASSTHROUGH",
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
  const styleDISABLED = isDisabled ? { pointerEvents: "none", opacity: 0.3, backgroundColor: "rgba(0,0,0,0.05)" } : void 0;
  const isDraggingListener = (ev) => {
    if (ev.button == 0) {
      isDragging2 = false;
      window.removeEventListener("mouseup", isDraggingListener, true);
    }
  };
  const iconName = widget.icon;
  return /* @__PURE__ */ jsx(
    Box,
    {
      tw: [
        // widget.background && (isCollapsible || showBorder) && 'bg-base-100',
        showBorder && "WIDGET-GROUP-BORDERED",
        p.isTopLevel ? "TOP-LEVEL-FIELD" : "SUB-FIELD",
        widget.type
      ],
      base: widget.background && (isCollapsible || showBorder) ? { contrast: 0.04 } : void 0,
      ...p.widget.config.box,
      children: /* @__PURE__ */ jsxs(AnimatedSizeUI, { children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "WIDGET-HEADER COLLAPSE-PASSTHROUGH",
            tw: ["flex items-center gap-0.5 select-none"],
            onMouseDown: (ev) => {
              if (ev.button != 0 || !isCollapsible)
                return;
              const target = ev.target;
              if (!target.classList.contains("COLLAPSE-PASSTHROUGH"))
                return;
              isDragging2 = true;
              window.addEventListener("mouseup", isDraggingListener, true);
              wasEnabled2 = !widget.serial.collapsed;
              widget.setCollapsed(wasEnabled2);
            },
            onMouseMove: (ev) => {
              if (!isDragging2 || !isCollapsible)
                return;
              widget.setCollapsed(wasEnabled2);
            },
            children: [
              /* @__PURE__ */ jsxs(
                "span",
                {
                  tw: [
                    "flex justify-end gap-0.5 flex-none items-center shrink-0"
                    // p.isTopLevel && !isDisabled ? 'font-bold' : 'text-base',
                    // 🔴 label COLOR here
                    // isDisabled ? undefined : 'text-primary',
                  ],
                  style: alignLabel ? {
                    textAlign: "right",
                    minWidth: "8rem",
                    width: alignLabel && HeaderUI ? "35%" : void 0,
                    marginRight: alignLabel && HeaderUI ? "0.25rem" : void 0
                  } : void 0,
                  children: [
                    /* @__PURE__ */ jsxs(Box, { tw: "flex items-center", text: { hueShift: 0, contrast: 0.9, chromaBlend: 1 }, children: [
                      (isCollapsed || isCollapsible) && /* @__PURE__ */ jsx("span", { className: "WIDGET-COLLAPSE-BTN COLLAPSE-PASSTHROUGH material-symbols-outlined opacity-70 hover:opacity-100 cursor-pointer", children: isCollapsed ? "chevron_right" : "expand_more" }),
                      iconName && /* @__PURE__ */ jsx(Box, { tw: "mr-1", text: { chroma: 0.2, contrast: 0.9 }, children: /* @__PURE__ */ jsx(IkonOf, { name: iconName }) }),
                      BodyUI && /* @__PURE__ */ jsx(Widget_ToggleUI, { widget: originalWidget }),
                      widget.spec.LabelExtraUI && /* @__PURE__ */ jsx(widget.spec.LabelExtraUI, { widget }),
                      widget.config.tooltip && /* @__PURE__ */ jsx(WidgetTooltipUI, { widget }),
                      LABEL
                    ] }),
                    !BodyUI && /* @__PURE__ */ jsx(Widget_ToggleUI, { widget: originalWidget })
                  ]
                }
              ),
              HeaderUI && /* @__PURE__ */ jsx("div", { className: "COLLAPSE-PASSTHROUGH", tw: "flex items-center gap-0.5 flex-1", style: styleDISABLED, children: /* @__PURE__ */ jsx(ErrorBoundary, { FallbackComponent: ErrorBoundaryFallback, onReset: (details) => {
              }, children: HeaderUI }) }),
              widget.config.presets && /* @__PURE__ */ jsx(
                RevealUI,
                {
                  content: () => /* @__PURE__ */ jsx(menu_widgetActions.UI, { props: widget }),
                  children: /* @__PURE__ */ jsx(Ikon.mdiBook, {})
                }
              )
            ]
          }
        ),
        BodyUI && !isCollapsed && /* @__PURE__ */ jsx(ErrorBoundary, { FallbackComponent: ErrorBoundaryFallback, onReset: (details) => {
        }, children: /* @__PURE__ */ jsx("div", { style: styleDISABLED, tw: [isCollapsible && "WIDGET-BLOCK"], children: BodyUI }) }),
        widget.hasErrors && /* @__PURE__ */ jsx("div", { tw: "widget-error-ui", children: widget.errors.map((e, i) => /* @__PURE__ */ jsxs("div", { tw: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "error" }),
          e.message
        ] }, i)) })
      ] })
    },
    rootKey
  );
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
  const FmtUI = isObserver ? fn : observer21(fn);
  return FmtUI;
};
var BaseWidget = class {
  constructor() {
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
import { observer as observer23 } from "mobx-react-lite";

// src/controls/widgets/spacer/SpacerUI.tsx
import { observer as observer22 } from "mobx-react-lite";
var SpacerUI = observer22(function SpacerUI_(p) {
  return /* @__PURE__ */ jsx("div", { tw: ["ml-auto"] });
});

// src/controls/widgets/bool/WidgetBoolUI.tsx
var WidgetBoolUI = observer23(function WidgetBoolUI_(p) {
  const widget = p.widget;
  if (widget.config.label2) {
    console.warn("label2 is deprecated, please use the text option instead. label2 will be removed in the future");
  }
  return /* @__PURE__ */ jsxs("div", { tw: "flex w-full h-full ", children: [
    /* @__PURE__ */ jsx(
      InputBoolUI,
      {
        display: widget.config.display,
        expand: widget.config.expand,
        icon: widget.icon,
        text: widget.config.text ?? widget.config.label2,
        active: widget.value,
        onValueChange: (value) => widget.value = value
      }
    ),
    /* @__PURE__ */ jsx(SpacerUI, {}),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: [widget.isChanged ? void 0 : "btn-disabled opacity-50"],
        onClick: () => widget.reset(),
        className: "btn btn-xs btn-narrower btn-ghost",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "undo" })
      }
    )
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
    // prettier-ignore
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
      serial: observable6,
      value: computed2,
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get config() {
    return this.spec.config;
  }
  get baseErrors() {
    return null;
  }
  get isChanged() {
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
    runInAction3(() => {
      this.serial.active = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("bool", Widget_bool);

// src/controls/widgets/button/WidgetButton.ts
import { runInAction as runInAction5 } from "mobx";
import { nanoid as nanoid7 } from "nanoid";

// src/controls/widgets/button/WidgetButtonUI.tsx
import { runInAction as runInAction4 } from "mobx";
import { observer as observer24 } from "mobx-react-lite";
var WidgetInlineRunUI = observer24(function WidgetInlineRunUI_(p) {
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
      onClick: () => runInAction4(() => p.widget.config.onClick?.(context)),
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
    // prettier-ignore
    this.type = "button";
    const config = spec.config;
    if (config.text) {
      config.label = config.label ?? ` `;
    }
    this.id = serial?.id ?? nanoid7();
    this.serial = serial ?? {
      type: "button",
      collapsed: config.startCollapsed,
      id: this.id,
      val: false
    };
    this.init({
      DefaultHeaderUI: false,
      DefaultBodyUI: false
    });
  }
  get config() {
    return this.spec.config;
  }
  get baseErrors() {
    return null;
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
    runInAction5(() => {
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
import { observer as observer26 } from "mobx-react-lite";

// src/rsuite/SelectUI.tsx
import { makeAutoObservable as makeAutoObservable8 } from "mobx";
import { observer as observer25 } from "mobx-react-lite";
import React, { useMemo as useMemo4 } from "react";
import { createPortal as createPortal2 } from "react-dom";

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

// src/rsuite/SelectUI.tsx
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
    makeAutoObservable8(this, {
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
var SelectUI = observer25(function SelectUI_(p) {
  const s = useMemo4(() => new AutoCompleteSelectState(
    /* st, */
    p
  ), []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      tabIndex: -1,
      tw: [
        "WIDGET-FIELD bg-base-100",
        "flex flex-1 items-center relative",
        "rounded overflow-clip text-shadow",
        "border border-base-100 hover:brightness-110",
        "hover:border-base-200",
        "border-1",
        "border-b-2 border-b-base-200 hover:border-b-base-300"
      ],
      className: p.className,
      ref: s.anchorRef,
      onKeyUp: s.onRealInputKeyUp,
      onMouseDown: s.onRealWidgetMouseDown,
      onChange: s.handleInputChange,
      onKeyDown: s.handleTooltipKeyDown,
      onFocus: (ev) => {
        s.isFocused = true;
        if (ev.relatedTarget != null && !(ev.relatedTarget instanceof Window)) {
          s.openMenu();
        }
      },
      onBlur: s.onBlur,
      style: { background: s.searchQuery === "" ? "none" : void 0 },
      children: /* @__PURE__ */ jsxs("div", { className: "flex-1 h-full ", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            tabIndex: -1,
            tw: [
              "input input-xs text-sm",
              "flex items-center gap-1",
              "p-0 h-full bg-transparent",
              "select-none pointer-events-none overflow-clip"
            ],
            children: s.isOpen || s.isFocused ? null : (
              /* Using grid here to make sure that inner text will truncate instead of pushing the right-most icon out of the container. */
              /* @__PURE__ */ jsxs("div", { tw: "grid w-full items-center", style: { gridTemplateColumns: "24px 1fr 24px" }, children: [
                /* @__PURE__ */ jsx("div", { tw: "btn btn-square btn-xs bg-transparent border-0", children: /* @__PURE__ */ jsx("span", { className: "prefix material-symbols-outlined", children: "search" }) }),
                /* @__PURE__ */ jsx("div", { tw: "overflow-hidden", children: s.displayValue }),
                /* @__PURE__ */ jsx("div", { tw: "btn btn-square btn-xs ml-auto bg-transparent border-0", children: /* @__PURE__ */ jsx("span", { className: "suffix material-symbols-outlined ml-auto", children: "arrow_drop_down" }) })
              ] })
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { tw: "absolute top-0 left-0 right-0 z-50 h-full", children: /* @__PURE__ */ jsx(
          "input",
          {
            placeholder: s.isOpen ? p.placeholder : void 0,
            ref: s.inputRef,
            tw: "input input-sm w-full h-full !outline-none",
            type: "text",
            value: s.searchQuery,
            onChange: () => {
            }
          }
        ) }),
        s.isOpen && /* @__PURE__ */ jsx(SelectPopupUI, { s })
      ] })
    }
  );
});
var SelectPopupUI = observer25(function SelectPopupUI_(p) {
  const s = p.s;
  const isDraggingListener = (ev) => {
    if (ev.button != 0)
      return;
    s.isDragging = false;
    window.removeEventListener("mouseup", isDraggingListener, true);
  };
  return createPortal2(
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: s.popupRef,
        tw: [
          "MENU-ROOT _SelectPopupUI bg-base-100 flex",
          "border-l border-r border-base-300 overflow-auto",
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
        children: /* @__PURE__ */ jsxs("ul", { className: "bg-base-100 max-h-96", tw: "flex-col w-full", children: [
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
                  window.addEventListener("mouseup", isDraggingListener, true);
                },
                children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    tw: [
                      "WIDGET-FIELD pl-0.5 flex w-full items-center rounded overflow-auto",
                      "active:bg-base-300 cursor-default text-shadow",
                      index === s.selectedIndex ? "bg-base-300" : null
                      /* index === s.selectedIndex && */
                      // isSelected ? '!text-primary-content text-shadow' : 'bg-base-300',
                      // !isSelected && 'active:bg-base-100',
                      // isSelected && 'bg-primary text-primary-content hover:text-neutral-content text-shadow-inv active:bg-primary', // prettier-ignore
                    ],
                    children: [
                      /* @__PURE__ */ jsx(InputBoolUI, { active: isSelected, expand: false }),
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

// src/controls/widgets/choices/WidgetChoicesUI.tsx
var WidgetChoices_HeaderUI = observer26(function WidgetChoices_LineUI_(p) {
  if (p.widget.config.appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetChoices_TabHeaderUI, { widget: p.widget });
  else
    return /* @__PURE__ */ jsx(WidgetChoices_SelectHeaderUI, { widget: p.widget });
});
var WidgetChoices_BodyUI = observer26(function WidgetChoices_BodyUI_(p) {
  const widget = p.widget;
  const activeSubwidgets = Object.entries(widget.children).map(([branch, subWidget]) => ({ branch, subWidget }));
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(AnimatedSizeUI, { children: /* @__PURE__ */ jsx(
    "div",
    {
      tw: [widget.config.layout === "H" ? "flex" : null],
      className: widget.config.className,
      children: activeSubwidgets.map((val) => {
        const subWidget = val.subWidget;
        if (subWidget == null)
          return /* @__PURE__ */ jsx(Fragment, { children: "\u274C error" });
        return /* @__PURE__ */ jsx(
          WidgetWithLabelUI,
          {
            rootKey: val.branch,
            widget: subWidget,
            label: widget.isSingle ? false : void 0
          },
          val.branch
        );
      })
    }
  ) }) });
});
var WidgetChoices_TabHeaderUI = observer26(function WidgetChoicesTab_LineUI_(p) {
  const widget = p.widget;
  const choices = widget.choicesWithLabels;
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        justifyContent: widget.config.tabPosition === "start" ? "flex-start" : widget.config.tabPosition === "center" ? "center" : widget.config.tabPosition === "end" ? "flex-end" : "flex-end"
      },
      tw: "rounded select-none flex flex-1 flex-wrap gap-x-0.5 gap-y-0",
      children: choices.map((c) => {
        const isSelected = widget.serial.branches[c.key];
        return /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            active: isSelected,
            display: "button",
            text: c.label,
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
var WidgetChoices_SelectHeaderUI = observer26(function WidgetChoices_SelectLineUI_(p) {
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
    this.DefaultHeaderUI = WidgetChoices_HeaderUI;
    this.DefaultBodyUI = WidgetChoices_BodyUI;
    /* override */
    this.background = true;
    // prettier-ignore
    this.type = "choices";
    this.expand = this.config.expand ?? false;
    this.children = {};
    this.isBranchDisabled = (branch) => !this.serial.branches[branch];
    const config = spec.config;
    this.id = serial?.id ?? nanoid8();
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
  get config() {
    return this.spec.config;
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
import { runInAction as runInAction6 } from "mobx";
import { nanoid as nanoid9 } from "nanoid";

// src/controls/widgets/color/WidgetColorUI.tsx
import { observer as observer27 } from "mobx-react-lite";
var WidgetColorUI = observer27(function WidgetColorUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        value: widget.serial.value,
        type: "color",
        onChange: (ev) => widget.value = ev.target.value
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: [widget.isChanged ? void 0 : "btn-disabled opacity-50"],
        onClick: () => widget.reset(),
        className: "btn btn-xs btn-narrower btn-ghost",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "undo" })
      }
    )
  ] });
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
    // prettier-ignore
    this.type = "color";
    this.defaultValue = this.config.default ?? "#000000";
    // prettier-ignore
    this.reset = () => this.value = this.defaultValue;
    const config = spec.config;
    this.id = serial?.id ?? nanoid9();
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
  get config() {
    return this.spec.config;
  }
  get baseErrors() {
    return null;
  }
  get isChanged() {
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
    runInAction6(() => {
      this.serial.value = next;
      this.bumpValue();
    });
  }
};
registerWidgetClass("color", Widget_color);

// src/controls/widgets/group/WidgetGroup.tsx
import { runInAction as runInAction7 } from "mobx";
import { nanoid as nanoid10 } from "nanoid";

// src/controls/widgets/group/WidgetGroupUI.tsx
import { observer as observer28 } from "mobx-react-lite";
var WidgetGroup_LineUI = observer28(function WidgetGroup_LineUI_(p) {
  if (!p.widget.serial.collapsed)
    return null;
  return /* @__PURE__ */ jsx(BoxSubtle, { className: "COLLAPSE-PASSTHROUGH", tw: "line-clamp-1 italic", children: p.widget.summary });
});
var WidgetGroup_BlockUI = observer28(function WidgetGroup_BlockUI_(p) {
  const widget = p.widget;
  const isTopLevel = widget.config.topLevel;
  const groupFields = Object.entries(widget.fields);
  const isHorizontal = widget.config.layout === "H";
  return /* @__PURE__ */ jsx(
    Box,
    {
      className: p.className,
      tw: ["WIDGET-GROUP", "flex items-start w-full text-base-content"],
      children: widget.serial.collapsed ? null : /* @__PURE__ */ jsx(
        "div",
        {
          className: widget.config.className,
          tw: [
            "_WidgetGroupUI w-full",
            isHorizontal ? `GROUP-HORIZONTAL flex gap-1 flex-wrap` : `GROUP-VERTICAL   flex gap-1 flex-col`
          ],
          children: groupFields.map(([rootKey, sub], ix) => /* @__PURE__ */ jsx(
            WidgetWithLabelUI,
            {
              isTopLevel,
              rootKey,
              alignLabel: isHorizontal ? false : widget.config.alignLabel,
              widget: bang(sub)
            },
            rootKey
          ))
        }
      )
    }
  );
});

// src/controls/widgets/group/WidgetGroup.tsx
var Widget_group = class extends BaseWidget {
  constructor(form, parent, spec, serial, preHydrate) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetGroup_LineUI;
    // prettier-ignore
    this.type = "group";
    this.collapseAllEntries = () => {
      for (const [key, _item] of this.entries) {
        const item = getActualWidgetToDisplay(_item);
        if (item.serial.collapsed)
          continue;
        const isCollapsible = getIfWidgetIsCollapsible(item);
        if (isCollapsible)
          item.setCollapsed(true);
      }
    };
    this.expandAllEntries = () => {
      for (const [key, _item] of this.entries) {
        const item = getActualWidgetToDisplay(_item);
        item.setCollapsed(void 0);
      }
    };
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
  get summary() {
    return this.config.summary?.(this.value) ?? "";
  }
  get config() {
    return this.spec.config;
  }
  /** all [key,value] pairs */
  get entries() {
    return Object.entries(this.fields);
  }
  setValue(val) {
    this.value = val;
  }
  setPartialValue(val) {
    runInAction7(() => {
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
    runInAction7(() => {
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
import { observable as observable7, reaction } from "mobx";
import { nanoid as nanoid11 } from "nanoid";

// src/controls/widgets/list/WidgetListUI.tsx
import { forwardRef } from "react";
import { observer as observer30 } from "mobx-react-lite";
import { ErrorBoundary as ErrorBoundary2 } from "react-error-boundary";

// src/controls/widgets/list/ListControlsUI.tsx
import { observer as observer29 } from "mobx-react-lite";
var ListControlsUI = observer29(function ListControlsUI_(p) {
  const widget = p.widget;
  const max = widget.config.max;
  const min = widget.config.min;
  const canAdd = max ? widget.items.length < max : true;
  const canClear = min ? widget.items.length > min : true;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      tw: "sticky top-0 flex gap-1 z-[50] w-full",
      onMouseDown: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: [!canAdd && "btn-disabled", "btn btn-xs btn-narrow btn-ghost"],
            onClick: (ev) => {
              if (!canAdd)
                return;
              ev.stopPropagation();
              widget.addItem();
            },
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "add" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: [!canClear && "btn-disabled", "btn btn-xs btn-narrow btn-ghost"],
            onClick: (ev) => {
              if (!canClear)
                return;
              ev.stopPropagation();
              widget.removeAllItems();
            },
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "delete_forever" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: ["btn btn-xs btn-narrow btn-ghost"],
            onClick: (ev) => {
              ev.stopPropagation();
              widget.expandAllItems();
            },
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "unfold_more" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            tw: ["btn btn-xs btn-narrow btn-ghost"],
            onClick: (ev) => {
              ev.stopPropagation();
              widget.collapseAllItems();
            },
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "unfold_less" })
          }
        )
      ]
    }
  );
});

// src/controls/widgets/list/WidgetListUI.tsx
var { default: SortableList, SortableItem, SortableKnob } = await import("react-easy-sort");
var WidgetList_LineUI = observer30(function WidgetList_LineUI_(p) {
  return /* @__PURE__ */ jsxs("div", { tw: "flex flex-1 items-center", children: [
    /* @__PURE__ */ jsxs("div", { tw: "text-sm text-gray-500 italic", children: [
      p.widget.length,
      " items"
    ] }),
    p.widget.isAuto ? null : /* @__PURE__ */ jsx("div", { tw: "ml-auto", children: /* @__PURE__ */ jsx(ListControlsUI, { widget: p.widget }) })
  ] });
});
var WidgetList_BodyUI = observer30(function WidgetList_BodyUI_(p) {
  const widget = p.widget;
  const subWidgets = widget.items;
  const min = widget.config.min;
  return /* @__PURE__ */ jsx("div", { className: "_WidgetListUI", tw: "flex-grow w-full", children: /* @__PURE__ */ jsx(SortableList, { onSortEnd: p.widget.moveItem, className: "list", draggedItemClassName: "dragged", children: /* @__PURE__ */ jsx("div", { tw: "flex flex-col gap-0.5", children: subWidgets.map((subWidget, ix) => {
    const widgetHeader = subWidget.header();
    const widgetBody = subWidget.body();
    const collapsed = subWidget.serial.collapsed ?? false;
    return /* @__PURE__ */ jsx(SortableItem, { children: /* @__PURE__ */ jsxs("div", { tw: ["flex flex-col", getBorderStatusForWidget(subWidget) && "WIDGET-GROUP-BORDERED"], children: [
      /* @__PURE__ */ jsxs("div", { tw: "flex items-center ", children: [
        /* @__PURE__ */ jsx(SortableKnob, { children: /* @__PURE__ */ jsx(ListDragHandleUI, { widget: subWidget, ix }) }),
        p.widget.config.showID ? /* @__PURE__ */ jsx("div", { className: "divider flex-1 border-top", children: /* @__PURE__ */ jsxs("div", { id: subWidget.id, tw: "opacity-20 italic", children: [
          "#",
          ix,
          ":",
          subWidget.id
        ] }) }) : null,
        widgetHeader && /* @__PURE__ */ jsx(ErrorBoundary2, { FallbackComponent: ErrorBoundaryFallback, onReset: (details) => {
        }, children: widgetHeader }),
        subWidget.config.presets && /* @__PURE__ */ jsx(
          RevealUI,
          {
            content: () => /* @__PURE__ */ jsx(menu_widgetActions.UI, { props: subWidget }),
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "more_vert" })
          }
        ),
        p.widget.isAuto ? null : /* @__PURE__ */ jsx(
          "div",
          {
            tw: [
              "btn btn-sm btn-narrower btn-ghost opacity-50",
              min != null && widget.items.length <= min ? "btn-disabled" : null
            ],
            onClick: () => widget.removeItem(subWidget),
            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "delete" })
          }
        ),
        subWidget.collapsible && /* @__PURE__ */ jsx(ListItemCollapseBtnUI, { widget: subWidget })
      ] }),
      widgetBody && !collapsed && subWidget != null && /* @__PURE__ */ jsx(ErrorBoundary2, { FallbackComponent: ErrorBoundaryFallback, onReset: (details) => {
      }, children: /* @__PURE__ */ jsx("div", { tw: "ml-2 pl-2", children: widgetBody }) })
    ] }) }, subWidget.id);
  }) }) }) });
});
var ListDragHandleUI = forwardRef((p, ref) => {
  const widget = p.widget;
  return /* @__PURE__ */ jsx("div", { tw: "btn btn-narrower btn-ghost btn-square btn-xs", ref, onClick: () => widget.toggleCollapsed(), children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "menu" }) });
});
var ListItemCollapseBtnUI = observer30(function ListItemCollapseBtnUI_(p) {
  const widget = p.widget;
  const isCollapsible = widget.DefaultBodyUI;
  if (!isCollapsible)
    return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tw: "btn btn-ghost btn-square btn-sm",
      onClick: () => widget.toggleCollapsed(),
      children: widget.serial.collapsed ? (
        //
        /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "keyboard_arrow_right" })
      ) : /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "keyboard_arrow_down" })
    }
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
    // prettier-ignore
    this.type = "list";
    /* override */
    this.background = true;
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
    this.serial = serial ?? observable7({ type: "list", id: this.id, active: true, items_: [] });
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
  get config() {
    return this.spec.config;
  }
  get length() {
    return this.items.length;
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
import { observer as observer31 } from "mobx-react-lite";
var WidgetMardownUI = observer31(function WidgetMardownUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsx(MarkdownUI, { tw: [widget.config.inHeader && "bg-base-300", "_WidgetMardownUI w-full"], markdown: widget.markdown });
});

// src/controls/widgets/markdown/WidgetMarkdown.ts
var Widget_markdown = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    // prettier-ignore
    this.type = "markdown";
    const config = spec.config;
    this.id = serial?.id ?? nanoid12();
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
  get config() {
    return this.spec.config;
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
import { runInAction as runInAction8 } from "mobx";
import { nanoid as nanoid13 } from "nanoid";

// src/controls/widgets/matrix/WidgetMatrixUI.tsx
import { observer as observer32 } from "mobx-react-lite";
var WidgetMatrixUI = observer32(function WidgetStrUI_(p) {
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
          className: "bg-base-200 virtualBorder",
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
    // prettier-ignore
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
    const config = spec.config;
    this.id = serial?.id ?? nanoid13();
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
  get config() {
    return this.spec.config;
  }
  get baseErrors() {
    return null;
  }
  setValue(val) {
    this.value = val;
  }
  /** 🔶 this is inneficient */
  set value(val) {
    runInAction8(() => {
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
import { computed as computed3, observable as observable8, runInAction as runInAction10 } from "mobx";
import { nanoid as nanoid14 } from "nanoid";

// src/controls/widgets/number/WidgetNumberUI.tsx
import { observer as observer34 } from "mobx-react-lite";

// src/controls/widgets/number/InputNumberUI.tsx
import { makeAutoObservable as makeAutoObservable9, runInAction as runInAction9 } from "mobx";
import { observer as observer33 } from "mobx-react-lite";
import React2, { useEffect as useEffect2, useMemo as useMemo5 } from "react";

// src/utils/misc/parseFloatNoRoundingErr.ts
var parseFloatNoRoundingErr = (str, maxDigitsAfterDot = 3) => {
  const result = typeof str === "number" ? str : parseFloat(str);
  if (isNaN(result))
    return 0;
  const out = Number(result.toFixed(maxDigitsAfterDot));
  return out;
};

// src/controls/shared/CushyKitCtx.ts
import { createContext as createContext4, useContext as useContext4 } from "react";
var CushyKitCtx = createContext4(null);
var useCushyKitOrNull = () => {
  return useContext4(CushyKitCtx);
};

// src/controls/widgets/number/InputNumberUI.tsx
var clamp2 = (x, min, max) => Math.max(min, Math.min(max, x));
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
    this.inputRef = React2.createRef();
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
        num = clamp2(num, this.rangeMin, this.rangeMax);
      } else {
        num = clamp2(num, this.props.min ?? -Infinity, this.props.max ?? Infinity);
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
    makeAutoObservable9(this);
  }
  get value() {
    return this.props.value ?? clamp2(1, this.props.min ?? -Infinity, this.props.max ?? Infinity);
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
var InputNumberUI = observer33(function InputNumberUI_(p) {
  const kit = useCushyKitOrNull();
  const uist = useMemo5(() => new InputNumberStableState(p, kit), []);
  runInAction9(() => Object.assign(uist.props, p));
  useEffect2(() => uist.onPointerUpListener, []);
  const val = uist.value;
  const step = uist.step;
  const rounding = uist.rounding;
  const isEditing = uist.isEditing;
  const kolor = useColor({ base: 5, border: true });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: p.className,
      style: kolor.styles,
      tw: [
        "WIDGET-FIELD relative",
        // 'theme-number-field',
        // '!shadow-md !shadow-white',
        "input-number-ui input-number-roundness",
        "flex-1 select-none min-w-16 cursor-ew-resize overflow-clip",
        // 'bg-primary/30 border border-base-100 border-b-2 border-b-base-200',
        !isEditing && "hover:border-base-200 hover:border-b-base-300 hover:bg-primary/40"
      ],
      onWheel: (ev) => {
        if (ev.ctrlKey) {
          let num = uist.isInteger ? step * -Math.sign(ev.deltaY) : step * -Math.sign(ev.deltaY) * 0.1;
          num = val + num;
          num = uist.isInteger ? Math.round(num) : parseFloatNoRoundingErr(num, rounding);
          num = clamp2(num, p.min ?? -Infinity, p.max ?? Infinity);
          uist.syncValues(num, void 0);
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            className: "inui-foreground",
            base: { contrast: !p.hideSlider && !isEditing ? 0.4 : 0 },
            tw: ["z-10 absolute left-0 WIDGET-FIELD"],
            style: { width: `${(val - uist.rangeMin) / (uist.rangeMax - uist.rangeMin) * 100}%` }
          }
        ),
        /* @__PURE__ */ jsxs("div", { tw: "grid w-full h-full items-center z-20", style: { gridTemplateColumns: "16px 1fr 16px" }, children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              tw: [
                "h-full flex rounded-none text-center justify-center items-center z-20",
                `border border-base-200 opacity-0 bg-base-200 hover:brightness-125`
              ],
              tabIndex: -1,
              onClick: uist.decrement,
              children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "arrow_left" })
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              tw: [
                //
                "th-text",
                `flex px-1 items-center justify-center text-sm text-shadow truncate z-20 h-full`
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
                      "text-shadow outline-0",
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
            "button",
            {
              tw: [
                "h-full flex rounded-none text-center justify-center items-center z-20",
                `border border-base-200 opacity-0 bg-base-200 hover:brightness-125`
              ],
              tabIndex: -1,
              onClick: uist.increment,
              children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "arrow_right" })
            }
          )
        ] })
      ]
    }
  );
});

// src/controls/widgets/number/WidgetNumberUI.tsx
var WidgetNumberUI = observer34(function WidgetNumberUI_(p) {
  const widget = p.widget;
  const value = widget.serial.val;
  const mode = widget.config.mode;
  const step = widget.config.step ?? (mode === "int" ? 1 : 0.1);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
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
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: [widget.isChanged ? void 0 : "btn-disabled opacity-50"],
        onClick: () => widget.reset(),
        className: "btn btn-xs btn-narrower btn-ghost",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "undo" })
      }
    )
  ] });
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
    // prettier-ignore
    this.type = "number";
    this.forceSnap = false;
    this.defaultValue = this.config.default ?? 0;
    // prettier-ignore
    this.reset = () => {
      if (this.serial.val === this.defaultValue)
        return;
      this.value = this.defaultValue;
    };
    const config = spec.config;
    this.id = serial?.id ?? nanoid14();
    this.serial = serial ?? {
      type: "number",
      collapsed: config.startCollapsed,
      id: this.id,
      val: config.default ?? 0
    };
    this.init({
      serial: observable8,
      value: computed3
    });
  }
  get config() {
    return this.spec.config;
  }
  get isChanged() {
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
    runInAction10(() => {
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
import { computed as computed4, observable as observable9 } from "mobx";
import { nanoid as nanoid15 } from "nanoid";
var Widget_optional = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = void 0;
    this.DefaultBodyUI = void 0;
    // prettier-ignore
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
    const config = spec.config;
    this.id = serial?.id ?? nanoid15();
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
    this.init({ serial: observable9, value: computed4 });
  }
  get config() {
    return this.spec.config;
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
import { observer as observer36 } from "mobx-react-lite";

// src/rsuite/shims.tsx
import { observer as observer35 } from "mobx-react-lite";

// src/utils/misc/exhaust.ts
var exhaust2 = (x) => x;

// src/rsuite/shims.tsx
var Button = (p) => {
  const { icon, active, size, loading, disabled, appearance, ...rest } = p;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ...rest,
      tw: [
        "btn",
        p.loading || p.disabled ? "btn-disabled" : null,
        p.active ? "btn-active" : null,
        appearance ? (() => {
          if (appearance === "primary")
            return "btn-primary";
          if (appearance === "ghost")
            return "btn-outline";
          if (appearance === "link")
            return "btn-link";
          if (appearance === "default")
            return null;
          if (appearance === "subtle")
            return null;
          return exhaust2(appearance);
        })() : null,
        p.size ? (() => {
          if (p.size === "sm")
            return "btn-sm";
          if (p.size === "xs")
            return "btn-xs";
          if (p.size === "lg")
            return "btn-lg";
          if (p.size === "md")
            return null;
          return exhaust2(p.size);
        })() : null,
        ...p?.tw ?? []
      ],
      children: [
        p.icon,
        p.children
      ]
    }
  );
};
var InputNumberBase = observer35(function InputNumberBase_(p) {
  const sizeClass = p._size ? `input-${p._size}` : null;
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "number",
      tw: ["input input-sm", sizeClass],
      ...p
    }
  );
});
var Slider = observer35(function Slider_(p) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "range",
      ...p,
      tw: ["range range-sm range-primary"]
    }
  );
});
var Radio = observer35(function Radio_(p) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "radio",
      ...p
    }
  );
});
var Toggle = observer35(function Toggle_(p) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "checkbox",
      ...p,
      tw: [
        //
        "toggle toggle-primary"
        // p.checked && 'toggle-success',
      ]
    }
  );
});
var ProgressLine = observer35(function ProgressLine_(p) {
  const status = p.status === "success" ? "progress-success" : "progress-info";
  return /* @__PURE__ */ jsx(
    "progress",
    {
      tw: [status, "m-0 progress", p.className],
      value: p.percent,
      max: 100
    }
  );
});
var messageIcon = (type) => {
  if (type === "error")
    return /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined !text-xl", children: "error" });
  if (type === "info")
    return /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined !text-xl", children: "info" });
  if (type === "warning")
    return /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined !text-xl", children: "warning" });
  exhaust2(type);
  return null;
};
var Message = observer35(function Message_(p) {
  const { showIcon, ...rest } = p;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      tw: [
        p.type === "error" ? "bg-error text-error-content" : p.type === "warning" ? "bg-warning text-warning-content" : "bg-base text-base-content"
      ],
      ...rest,
      children: [
        p.header,
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex flex-wrap items-center gap-2 p-2",
            children: [
              messageIcon(p.type),
              /* @__PURE__ */ jsx("div", { children: p.children })
            ]
          }
        )
      ]
    }
  );
});
var Loader = observer35((p) => /* @__PURE__ */ jsx(
  "span",
  {
    className: p.className,
    tw: [`loading loading-spinner loading-${p.size ?? "sm"}`]
  }
));

// src/controls/widgets/seed/WidgetSeedUI.tsx
var isDragging3 = false;
var WidgetSeedUI = observer36(function WidgetSeedUI_(p) {
  const widget = p.widget;
  const val = widget.serial.val;
  const isDraggingListener = (ev) => {
    if (ev.button == 0) {
      isDragging3 = false;
      window.removeEventListener("mouseup", isDraggingListener, true);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        tw: [
          "WIDGET-FIELD",
          "flex-1 flex items-center join",
          "rounded overflow-clip text-shadow",
          "border border-base-200 hover:border-base-200",
          "bg-primary/5",
          "border-b-2 border-b-base-200 hover:border-b-base-300",
          "!outline-none"
        ],
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              tw: [
                "flex items-center gap-1 whitespace-nowrap join-item btn-sm btn-ghost text-shadow px-2",
                "bg-base-200 hover:bg-base-200 hover:brightness-110",
                "border-0 !outline-none",
                widget.serial.mode === "randomize" && "btn-active !bg-primary text-shadow-inv text-primary-content"
              ],
              onMouseDown: (ev) => {
                if (ev.button == 0) {
                  widget.setToRandomize();
                  isDragging3 = true;
                  window.addEventListener("mouseup", isDraggingListener, true);
                }
              },
              onMouseEnter: (_ev) => {
                if (isDragging3)
                  widget.setToRandomize();
              },
              children: [
                /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "shuffle" }),
                /* @__PURE__ */ jsx("div", { children: "Random" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              tw: [
                "flex items-center gap-1 flex-shrink whitespace-nowrap join-item btn-sm btn-ghost text-shadow px-2",
                "bg-base-200 hover:bg-base-200 hover:brightness-110",
                "border-0 !outline-none",
                widget.serial.mode === "fixed" && "btn-active !bg-primary text-shadow-inv text-primary-content"
              ],
              onMouseDown: (ev) => {
                if (ev.button == 0) {
                  widget.setToFixed();
                  isDragging3 = true;
                  window.addEventListener("mouseup", isDraggingListener, true);
                }
              },
              onMouseEnter: (ev) => {
                if (isDragging3)
                  widget.setToFixed();
              },
              children: [
                /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "input" }),
                /* @__PURE__ */ jsx("div", { children: "Fixed" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { tw: ["flex-1", widget.serial.mode == "randomize" && "pointer-events-none opacity-25"], children: /* @__PURE__ */ jsx(
            InputNumberUI,
            {
              tw: "!border-none join-item",
              min: widget.config.min,
              max: widget.config.max,
              step: 1,
              value: val,
              mode: "int",
              onValueChange: (value) => widget.setValue(value)
            }
          ) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              tw: "flex w-7 !outline-none",
              size: "sm",
              appearance: "subtle",
              onClick: () => widget.setToFixed(Math.floor(Math.random() * 1e6)),
              icon: /* @__PURE__ */ jsx("span", { tw: "flex-1 pt-0.5", className: "material-symbols-outlined", children: "autorenew" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: "opacity-0 cursor-default",
        className: "btn btn-xs btn-narrower btn-ghost",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "undo" })
      }
    )
  ] });
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
    // prettier-ignore
    this.type = "seed";
    this.setToFixed = (val) => {
      if (this.serial.mode === "fixed")
        return;
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
    const config = spec.config;
    this.id = serial?.id ?? nanoid16();
    this.serial = serial ?? {
      type: "seed",
      id: this.id,
      val: config.default ?? 0,
      mode: config.defaultMode ?? "randomize"
    };
    makeAutoObservableInheritance(this);
  }
  get baseErrors() {
    return null;
  }
  get config() {
    return this.spec.config;
  }
  get value() {
    const count = this.form.builder._cache.count;
    return this.serial.mode === "randomize" ? Math.floor(Math.random() * 9999999) : this.serial.val;
  }
};
registerWidgetClass("seed", Widget_seed);

// src/controls/widgets/selectMany/WidgetSelectMany.tsx
import { runInAction as runInAction11 } from "mobx";
import { nanoid as nanoid17 } from "nanoid";

// src/controls/widgets/selectMany/WidgetSelectManyUI.tsx
import { observer as observer37 } from "mobx-react-lite";
var WidgetSelectManyUI = observer37(function WidgetSelectManyUI_(p) {
  const widget = p.widget;
  if (widget.config.appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetSelectMany_TabUI, { widget });
  return /* @__PURE__ */ jsx(WidgetSelectMany_SelectUI, { widget });
});
var WidgetSelectMany_TabUI = observer37(function WidgetSelectMany_TabUI_(p) {
  const widget = p.widget;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { tw: "rounded select-none flex flex-wrap gap-x-0.5 gap-y-0", children: [
      widget.choices.map((c) => {
        const isSelected = Boolean(widget.serial.values.find((item) => item.id === c.id));
        return /* @__PURE__ */ jsx(
          InputBoolUI,
          {
            active: isSelected,
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
          active: true,
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
var WidgetSelectMany_SelectUI = observer37(function WidgetSelectMany_SelectUI_(p) {
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
    // prettier-ignore
    this.type = "selectMany";
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
    const config = spec.config;
    this.id = serial?.id ?? nanoid17();
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
  get config() {
    return this.spec.config;
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
    runInAction11(() => {
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
import { runInAction as runInAction12 } from "mobx";
import { nanoid as nanoid18 } from "nanoid";

// src/controls/widgets/selectOne/WidgetSelectOneUI.tsx
import { observer as observer38 } from "mobx-react-lite";
var WidgetSelectOneUI = observer38(function WidgetSelectOneUI_(p) {
  const widget = p.widget;
  if (widget.config.appearance === "tab")
    return /* @__PURE__ */ jsx(WidgetSelectOne_TabUI, { widget });
  return /* @__PURE__ */ jsx(WidgetSelectOne_SelectUI, { widget });
});
var WidgetSelectOne_TabUI = observer38(function WidgetSelectOne_TabUI_(p) {
  const widget = p.widget;
  const selected = widget.serial.val;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { tw: "rounded select-none ml-auto justify-end flex flex-wrap gap-x-0.5 gap-y-0", children: widget.choices.map((c) => {
      const isSelected = selected?.id === c.id;
      return /* @__PURE__ */ jsx(
        InputBoolUI,
        {
          active: isSelected,
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
var WidgetSelectOne_SelectUI = observer38(function WidgetSelectOne_SelectUI_(p) {
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
var Widget_selectOne = class extends BaseWidget {
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.DefaultHeaderUI = WidgetSelectOneUI;
    this.DefaultBodyUI = void 0;
    // prettier-ignore
    this.type = "selectOne";
    const config = spec.config;
    this.id = serial?.id ?? nanoid18();
    const choices = this.choices;
    this.serial = serial ?? {
      type: "selectOne",
      collapsed: config.startCollapsed,
      id: this.id,
      query: "",
      val: config.default ?? choices[0]
    };
    if (this.serial.val == null && Array.isArray(this.config.choices))
      this.serial.val = choices[0];
    makeAutoObservableInheritance(this);
  }
  get config() {
    return this.spec.config;
  }
  get baseErrors() {
    if (this.serial.val == null)
      return "no value selected";
    const selected = this.choices.find((c) => c.id === this.serial.val.id);
    if (selected == null)
      return "selected value not in choices";
    return;
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
    runInAction12(() => {
      this.serial.val = next;
      this.bumpValue();
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
    const config = spec.config;
    this.id = serial?.id ?? nanoid19();
    this.serial = serial ?? { id: this.id, type: "shared", collapsed: config.startCollapsed };
    makeAutoObservableInheritance(this);
  }
  get config() {
    return this.spec.config;
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
import { runInAction as runInAction13 } from "mobx";
import { nanoid as nanoid20 } from "nanoid";

// src/controls/widgets/size/ResolutionState.tsx
import { makeAutoObservable as makeAutoObservable10 } from "mobx";
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
    makeAutoObservable10(this);
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
import { observer as observer39 } from "mobx-react-lite";
var WigetSize_BlockUI = observer39(function WigetSize_BlockUI_(p) {
  return /* @__PURE__ */ jsx(WigetSizeXUI, { sizeHelper: p.widget.sizeHelper, bounds: p.widget.config });
});
var WigetSize_LineUI = observer39(function WigetSize_LineUI_(p) {
  return /* @__PURE__ */ jsx(WidgetSizeX_LineUI, { sizeHelper: p.widget.sizeHelper, bounds: p.widget.config });
});
var WidgetSizeX_LineUI = observer39(function WidgetSize_LineUI_(p) {
  const uist = p.sizeHelper;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-1", children: /* @__PURE__ */ jsxs(
    "div",
    {
      tw: [
        "WIDGET-FIELD w-full h-full flex items-center join rounded gap-0.5 overflow-clip",
        "border border-base-100 border-b-base-200",
        "border-b-2 hover:border-base-200 hover:border-b-base-300"
      ],
      children: [
        /* @__PURE__ */ jsx(AspectLockButtonUI, { sizeHelper: uist }),
        /* @__PURE__ */ jsx(
          InputNumberUI,
          {
            min: p.bounds?.min ?? 128,
            max: p.bounds?.max ?? 4096,
            step: p.bounds?.step ?? 32,
            mode: "int",
            tw: "join-item !border-none",
            value: uist.width,
            hideSlider: true,
            onValueChange: (next) => uist.setWidth(next),
            forceSnap: true,
            text: "Width",
            suffix: "px"
          }
        ),
        /* @__PURE__ */ jsx(
          InputNumberUI,
          {
            tw: "join-item !border-none",
            min: p.bounds?.min ?? 128,
            max: p.bounds?.max ?? 4096,
            step: p.bounds?.step ?? 32,
            hideSlider: true,
            mode: "int",
            value: uist.height,
            onValueChange: (next) => uist.setHeight(next),
            forceSnap: true,
            text: "Height",
            suffix: "px"
          }
        ),
        /* @__PURE__ */ jsx(AspectRatioSquareUI, { sizeHelper: uist })
      ]
    }
  ) });
});
var AspectLockButtonUI = observer39(function AspectLockButtonUI_(p) {
  const uist = p.sizeHelper;
  return /* @__PURE__ */ jsx(
    "button",
    {
      tw: [
        "btn btn-xs h-8 rounded-none join-item !border-none !outline-none",
        uist.isAspectRatioLocked && "bg-primary hover:bg-primary text-primary-content !border-none"
      ],
      onClick: (ev) => {
        uist.isAspectRatioLocked = !uist.isAspectRatioLocked;
        if (!uist.isAspectRatioLocked) {
          return;
        }
        if (uist.wasHeightAdjustedLast) {
          uist.setHeight(uist.height);
        } else {
          uist.setWidth(uist.width);
        }
      },
      children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: uist.isAspectRatioLocked ? "link" : "link_off" })
    }
  );
});
var AspectRatioSquareUI = observer39(function AspectRatioSquareUI_(p) {
  const uist = p.sizeHelper;
  const ratioDisplaySize = 26;
  return /* @__PURE__ */ jsx(
    Box,
    {
      border: true,
      tw: [
        //
        "flex rounded-sm",
        "overflow-clip",
        "items-center justify-center"
      ],
      style: { width: `${ratioDisplaySize}px`, height: `${ratioDisplaySize}px` },
      children: /* @__PURE__ */ jsx(
        Box,
        {
          base: { contrast: 0.5 },
          tw: "relative",
          style: {
            //
            width: "100%",
            height: "100%",
            // Use transform here because it works with floats and will not cause popping/mis-alignments.
            transform: `
        scaleX(${uist.width < uist.height ? Math.round(uist.width / uist.height * ratioDisplaySize) / ratioDisplaySize : "1"})
        scaleY(${uist.height < uist.width ? Math.round(uist.height / uist.width * ratioDisplaySize) / ratioDisplaySize : "1"})`
          }
        }
      )
    }
  );
});
var WigetSizeXUI = observer39(function WigetSizeXUI_(p) {
  const uist = p.sizeHelper;
  const resoBtn = (ar) => /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      tw: ["btn btn-xs join-item", uist.desiredAspectRatio === ar ? "btn-primary" : "btn-ghost"],
      onClick: () => uist.setAspectRatio(ar),
      children: ar
    }
  );
  const modelBtn = (model) => /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      tw: ["btn btn-xs join-item", uist.desiredModelType === model ? "btn-primary" : "btn-ghost"],
      onClick: () => uist.setModelType(model),
      children: model
    }
  );
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1 mt-0.5 rounded-b", children: /* @__PURE__ */ jsxs("div", { tw: "flex items-start gap-2", children: [
    /* @__PURE__ */ jsxs("div", { tw: "join virtualBorder", children: [
      modelBtn("1.5"),
      modelBtn("xl")
    ] }),
    /* @__PURE__ */ jsx("div", { tw: "btn btn-xs", onClick: () => uist.flip(), children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "rotate_right" }) }),
    /* @__PURE__ */ jsxs("div", { tw: "ml-auto flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("div", { tw: "join virtualBorder", children: resoBtn("1:1") }),
      /* @__PURE__ */ jsxs("div", { tw: "join virtualBorder", children: [
        resoBtn("16:9"),
        resoBtn("9:16")
      ] }),
      /* @__PURE__ */ jsxs("div", { tw: "join virtualBorder", children: [
        resoBtn("4:3"),
        resoBtn("3:4")
      ] }),
      /* @__PURE__ */ jsxs("div", { tw: "join virtualBorder", children: [
        resoBtn("3:2"),
        resoBtn("2:3")
      ] })
    ] })
  ] }) });
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
    // prettier-ignore
    this.type = "size";
    const config = spec.config;
    this.id = serial?.id ?? nanoid20();
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
    this.init({ sizeHelper: false });
  }
  get baseErrors() {
    return null;
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
    runInAction13(() => {
      this.serial.width = next;
      this.bumpValue();
    });
  }
  set height(next) {
    if (next === this.serial.height)
      return;
    runInAction13(() => {
      this.serial.height = next;
      this.bumpValue();
    });
  }
  get sizeHelper() {
    const state = new ResolutionState(this);
    Object.defineProperty(this, "sizeHelper", { value: state });
    return state;
  }
  get config() {
    return this.spec.config;
  }
  setValue(val) {
    this.value = val;
  }
  set value(val) {
    if (val.width === this.serial.width && //
    val.height === this.serial.height && val.aspectRatio === this.serial.aspectRatio) {
      return;
    }
    runInAction13(() => {
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
import { observable as observable10 } from "mobx";
import { nanoid as nanoid21 } from "nanoid";

// src/controls/widgets/spacer/WidgetSpacerUI.tsx
import { observer as observer40 } from "mobx-react-lite";
var WidgetSpacerUI = observer40(function WidgetSpacerUI_(p) {
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
    // prettier-ignore
    this.type = "spacer";
    this.id = serial?.id ?? nanoid21();
    this.serial = serial ?? {
      id: this.id,
      type: "spacer",
      collapsed: false
    };
    this.init({ serial: observable10 });
  }
  get baseErrors() {
    return null;
  }
  get config() {
    return this.spec.config;
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
import { runInAction as runInAction14 } from "mobx";
import { nanoid as nanoid22 } from "nanoid";

// src/controls/widgets/string/WidgetStringUI.tsx
import { observer as observer41 } from "mobx-react-lite";
var WidgetString_TextareaHeaderUI = observer41(function WidgetString_TextareaHeaderUI_(p) {
  const widget = p.widget;
  if (!widget.config.textarea)
    return null;
  if (!p.widget.serial.collapsed)
    return null;
  return /* @__PURE__ */ jsx("div", { tw: "line-clamp-1 italic opacity-50", children: p.widget.value });
});
var WidgetString_TextareaBodyUI = observer41(function WidgetString_TextareaBodyUI_(p) {
  const widget = p.widget;
  if (!widget.config.textarea)
    return null;
  const val = widget.value;
  const kolor = useColor({ base: 5 });
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      style: {
        ...kolor.styles,
        /* ...p.widget.config.style, */
        lineHeight: "1.3rem",
        resize: p.widget.config.resize ?? "both"
      },
      tw: "textarea textarea-bordered textarea-sm w-full ",
      placeholder: widget.config.placeHolder,
      rows: 3,
      value: val,
      onChange: (ev) => {
        widget.value = ev.target.value;
      }
    }
  );
});
var WidgetString_HeaderUI = observer41(function WidgetStringUI_(p) {
  const widget = p.widget;
  const val = widget.value;
  let inputTailwind;
  let visualHelper;
  let highlight = true;
  const color = useColor({
    base: 5,
    text: {
      contrast: 1,
      /* hueShift: 150, chromaBlend: 899 */
      chromaBlend: 1
    },
    border: true
  });
  switch (widget.config.inputType) {
    case "color":
      inputTailwind = "absolute w-full h-full opacity-0";
      visualHelper = /* @__PURE__ */ jsx("div", { tw: "w-full h-full", style: { background: val } });
      highlight = false;
      break;
    default:
      inputTailwind = "input input-sm w-full h-full !outline-none text-shadow";
      break;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: color.styles,
        tw: [
          // color.className,
          "WIDGET-FIELD",
          "h-full w-full",
          "flex flex-1 items-center relative",
          "rounded overflow-clip text-shadow",
          // 'border border-base-100 hover:border-base-300',
          // 'bg-primary/5',
          highlight && "hover:brightness-110",
          // 'border-b-2 border-b-base-200 hover:border-b-base-300',
          "p-0 m-0"
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
                if (widget.config.buffered) {
                  widget.setTemporaryValue(ev.target.value);
                } else {
                  widget.value = ev.currentTarget.value;
                }
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
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        tw: [widget.isChanged ? void 0 : "btn-disabled opacity-50"],
        onClick: () => widget.reset(),
        className: "btn btn-xs btn-narrower btn-ghost",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "undo" })
      }
    )
  ] });
});

// src/controls/widgets/string/WidgetString.tsx
var Widget_string = class extends BaseWidget {
  // prettier-ignore
  constructor(form, parent, spec, serial) {
    super();
    this.form = form;
    this.parent = parent;
    this.spec = spec;
    this.border = false;
    // prettier-ignore
    this.type = "str";
    // --------------
    this.temporaryValue = null;
    this.setTemporaryValue = (next) => this.temporaryValue = next;
    this.defaultValue = this.config.default ?? "";
    // prettier-ignore
    this.reset = () => {
      this.value = this.defaultValue;
    };
    const config = spec.config;
    this.id = serial?.id ?? nanoid22();
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
  get config() {
    return this.spec.config;
  }
  get isChanged() {
    return this.serial.val !== this.defaultValue;
  }
  setValue(val) {
    this.value = val;
  }
  set value(next) {
    if (this.serial.val === next)
      return;
    runInAction14(() => {
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
    makeAutoObservable11(this, {
      SpecCtor: false
    });
  }
};

// src/controls/SimpleForm.ts
var SimpleFormManager = new FormManager(SimpleFormBuilder);
export {
  SimpleFormManager
};
