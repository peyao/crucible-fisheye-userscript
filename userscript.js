// ==UserScript==
// @name Crucible Fisheye Styles
// @namespace Userscripts
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

// Set fit to browser width when viewing image attachments.
const setImageWidth = () => {
  addStyleNode(`
    a.mime-image > img {
      width: 100%;
    }
  `);
}

setFontSize();
setLineHeight();
setImageWidth();