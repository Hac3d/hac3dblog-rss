// ==UserScript==
// @name         Syncr
// @namespace    https://addons.pancake.ca/syncr/
// @version      2024-07-18
// @description  Allows users to sync Hac3dNetwork data to the cloud.
// @author       YustinJustin
// @match        https://addons.pancake.ca/syncr/
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// Check if the specific element exists
const pancakeElement = document.querySelector('extension-install[id="syncr"]');

if (pancakeElement) {
  // Replace the content
  pancakeElement.innerHTML = `
    <button onclick="removeExtension();" class="app-btn new-extension-content">
        <i class="icons10-cross"></i>
        <span>Remove from Hac3dNetwork</span>
    </button>
  `;

  // Optionally, you can define the new function here
  function yourFunction() {
    console.log("New function triggered!");
    // Add your functionality here
  }
}

})();
