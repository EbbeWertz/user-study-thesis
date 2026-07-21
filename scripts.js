const STORAGE_KEY = 'study_participant_id';

/**
 * Generates a short, random, URL-friendly ID.
 * @param {number} length - The length of the ID (default 9).
 * @returns {string} A random alphanumeric string.
 */
function generateShortID(length = 6) {
  // Excluded easily confused characters like l, 1, O, 0 for safety
  const alphabet = '23456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ';
  const alphabetLength = alphabet.length;

  const randomBytes = new Uint32Array(length);
  window.crypto.getRandomValues(randomBytes);
  
  let result = '';
  for (let i = 0; i < length; i++) {
    // Use modulo to map the massive random integer down to our alphabet size
    const randomIndex = randomBytes[i] % alphabetLength;
    result += alphabet.charAt(randomIndex);
  }
  return result;
}

/**
 * Retrieves the participant ID from localStorage, or generates
 * a new one if it doesn't exist yet.
 * @returns {string} The unique participant ID.
 */
export function getID() {
  let id = localStorage.getItem(STORAGE_KEY);
  
  if (!id) {
    id = generateShortID();
    localStorage.setItem(STORAGE_KEY, id);
  }
  
  return id;
}

/**
 * Validates that the device is running in landscape mode and has a fine pointer 
 * (mouse, trackpad, or stylus), which allows hybrid laptops while filtering out pure touch phones/tablets.
 */
export function isDesktopDevice() {
  // 1. Must be in landscape orientation (width greater than height)
  const isLandscape = window.innerWidth > window.innerHeight;
  // 2. Must support a fine pointer (mouse, trackpad, or stylus).
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  return isLandscape && hasFinePointer;
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Controleer apparaat. Indien ongeldig, toon blokkering.
  if (!isDesktopDevice()) {
    const blocker = document.createElement('div');
    blocker.className = "fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-6 text-center";
    blocker.innerHTML = `
      <div class="max-w-md bg-red-50 p-8 rounded-2xl border border-red-200 shadow-sm font-sans text-gray-800">
          <i class="fa-solid fa-desktop text-red-500 text-5xl mb-4"></i>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Desktop of Laptop Vereist</h2>
          <p class="text-gray-600 mb-4">Dit onderzoek vereist een computerscherm in landschapsmodus en een fysieke muis of trackpad om betrouwbare UX-metingen te garanderen.</p>
          <p class="text-sm font-semibold text-red-700 bg-red-100 p-2 rounded">Open deze link a.u.b. opnieuw op een geschikte computer.</p>
      </div>
    `;
    document.body.prepend(blocker);
    return; // Stop verdere uitvoering
  }

  // 2. Injecteer de Topbar bovenaan de body
  const participantId = getID();
  const header = document.createElement('header');
  header.className = "bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs font-sans";
  header.innerHTML = `
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="index.html" class="flex items-center space-x-2 text-indigo-600 font-bold text-lg hover:opacity-80">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>Masterproef onderzoek 360° media in de narratieve geneeskunde</span>
        </a>
        <div class="flex items-center space-x-3 bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
            <span class="text-xs font-semibold text-gray-500 tracking-wider uppercase">Uw Deelnemers ID:</span>
            <span class="font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 text-sm">${participantId}</span>
        </div>
    </div>
  `;
  document.body.prepend(header);
});