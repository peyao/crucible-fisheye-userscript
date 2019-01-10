// ==UserScript==
// @name Crucible Fisheye Styles
// @namespace Violentmonkey Scripts
// @include http*://yourdomain.com/*
// @grant none
// ==/UserScript==

const DEFAULT_FONT_SIZE = "18px";
const DEFAULT_LINE_HEIGHT = "30px";

const addStyleNode = (css) => {
  const styleNode = document.createElement("style");

  styleNode.type = "text/css";
  styleNode.innerHTML = css;

  document.body.appendChild(styleNode);
}

const setFontSize = () => {
  addStyleNode(`
    td.lineContent {
      font-size: ${DEFAULT_FONT_SIZE};
    }
  `);
}

const setLineHeight = () => {
  addStyleNode(`
    tr.sourceLine {
      height: ${DEFAULT_LINE_HEIGHT};
    }
  `);
};

setFontSize();
setLineHeight();
