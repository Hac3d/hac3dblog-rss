// ==UserScript==
// @name         Syncr
// @namespace    https://addons.pancake.ca/syncr/
// @version      2024-07-18
// @description  Allows users to sync Hac3dNetwork data to the cloud.
// @author       YustinJustin
// @match        https://addons.pancake.ca/syncr/
// @icon         https://addons.pancake.ca/syncr/icon.png
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