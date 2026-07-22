const STORAGE_KEY = 'study_participant_id';
const FORM2_BASE_URL = "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=m1hzOUCetU6ADrC2OD0WIbPNL_bNO0VEiDypVKMSBnJUMlQzWFZOVlZITVpENzhPSTg1OUxGNUE5Si4u&r3c52b39b4f2e48fa9f3b80dc7f1ce9ea="

export const presigned_env_urls = {
  hal: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/cubemap_usable/0c5f05ed-8d25-41c8-8aeb-e0620224d040.jpeg?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL2N1YmVtYXBfdXNhYmxlLzBjNWYwNWVkLThkMjUtNDFjOC04YWViLWUwNjIwMjI0ZDA0MC5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDc1ODQwNywiZXhwIjoxODE2Mjk0NDA3fQ.tuHdGqfUQExDyr8mLISqxmw1aNuiwBsvINrt7oGuUG8",
  terras: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/cubemap_usable/18375486-daed-40f4-8961-5844f3ae5a9d.jpeg?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL2N1YmVtYXBfdXNhYmxlLzE4Mzc1NDg2LWRhZWQtNDBmNC04OTYxLTU4NDRmM2FlNWE5ZC5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDc1ODQzNSwiZXhwIjoxODE2Mjk0NDM1fQ.rqudky7ITb1MKiqJ_ap9PXeIm7N44yJJD484Gwg0WPQ",
  tafel: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/cubemap_usable/87cef2b6-9b69-4539-b92f-49c8d687cb9e.jpeg?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL2N1YmVtYXBfdXNhYmxlLzg3Y2VmMmI2LTliNjktNDUzOS1iOTJmLTQ5YzhkNjg3Y2I5ZS5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDc1ODU3MCwiZXhwIjoxODE2Mjk0NTcwfQ.QB1vjeGAe3ini58hsZ8tdhTrSHhHrkA8BN8d8nx5mfQ",
  traphal: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/cubemap_usable/975e2c42-b244-47db-b91e-d28bf974433b.jpeg?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL2N1YmVtYXBfdXNhYmxlLzk3NWUyYzQyLWIyNDQtNDdkYi1iOTFlLWQyOGJmOTc0NDMzYi5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDc1ODU5MiwiZXhwIjoxODE2Mjk0NTkyfQ.30Xy1wgo6hF2h_ziY1WC2SVDE13bBhcrovAY864qM20",
  zetel: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/cubemap_usable/e42a2140-72b4-4eb2-8001-dc0b391737c0.jpg?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL2N1YmVtYXBfdXNhYmxlL2U0MmEyMTQwLTcyYjQtNGViMi04MDAxLWRjMGIzOTE3MzdjMC5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0NzU4NjM1LCJleHAiOjE4MTYyOTQ2MzV9.pXeQCFjfkbMhETBOr--2-2pMZXhsafuzscc_d2S1CiM",
  living: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/cubemap_usable/e7bc9239-0b4a-43bc-8541-844f9a50bc4c.jpeg?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL2N1YmVtYXBfdXNhYmxlL2U3YmM5MjM5LTBiNGEtNDNiYy04NTQxLTg0NGY5YTUwYmM0Yy5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDc1ODY0NiwiZXhwIjoxODE2Mjk0NjQ2fQ.o1g_30NNUw-Imo31vj93JtOHfi9fMxrLwgdl2kez0oM"
} 

export const presigned_media_urls = {
  beperkingen: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/usable_asset/16bebc04-3277-4641-b3e3-1e7cc0e878c0.jpeg?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL3VzYWJsZV9hc3NldC8xNmJlYmMwNC0zMjc3LTQ2NDEtYjNlMy0xZTdjYzBlODc4YzAuanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODQ3NTg2NjQsImV4cCI6MTgxNjI5NDY2NH0._En_iO2oAgaUOrOZeFjpvQ8N-BJX97D7V5VBCRMeApo",
  infoboekje_video: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/usable_asset/51f3d35d-49a7-4bcb-84bb-660fbee3ac65.mov?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL3VzYWJsZV9hc3NldC81MWYzZDM1ZC00OWE3LTRiY2ItODRiYi02NjBmYmVlM2FjNjUubW92Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDc1ODY3NiwiZXhwIjoxODE2Mjk0Njc2fQ.boYIV7jMl9etPjXaPCPMPJRMeKK0i3qrx450OC7TyiQ",
  paper: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/usable_asset/6ae11480-e7b3-4b88-ba04-eea05a86dc4b.pdf?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL3VzYWJsZV9hc3NldC82YWUxMTQ4MC1lN2IzLTRiODgtYmEwNC1lZWEwNWE4NmRjNGIucGRmIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDc1ODY4NSwiZXhwIjoxODE2Mjk0Njg1fQ.tSZZSPGeEy8e-7M-t70nyiBY4ohJGZCAf-FNaFs8ZC8",
  ecg_video: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/usable_asset/ea6e32d3-5313-4dc9-b8b4-2fa38a56d068.mov?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL3VzYWJsZV9hc3NldC9lYTZlMzJkMy01MzEzLTRkYzktYjhiNC0yZmEzOGE1NmQwNjgubW92Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDc1ODY5NCwiZXhwIjoxODE2Mjk0Njk0fQ.K6tGWFc0i_imkq__thhpNuAJUXP9xG79GkxP8v6VnB0"
}

export const presigned_vlog_urls = {
  mobiliteit: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/cubemap_usable/240864b9-1356-4a0c-8aec-c1cbbcd36e0d.MP4?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL2N1YmVtYXBfdXNhYmxlLzI0MDg2NGI5LTEzNTYtNGEwYy04YWVjLWMxY2JiY2QzNmUwZC5NUDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0NzU4NDQ4LCJleHAiOjE4MTYyOTQ0NDh9.0d7X9XZCoINjO7JLXOvvgUPpJBzWxmVgiqHIKrkrlt4",
  woonplaats: "http://127.0.0.1:54321/storage/v1/object/sign/media-assets/2051bb69-7e9d-4016-b284-b1d412f185fc/cubemap_usable/d1c49777-68f2-4445-81bd-d146654052ae.MP4?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS1hc3NldHMvMjA1MWJiNjktN2U5ZC00MDE2LWIyODQtYjFkNDEyZjE4NWZjL2N1YmVtYXBfdXNhYmxlL2QxYzQ5Nzc3LTY4ZjItNDQ0NS04MWJkLWQxNDY2NTQwNTJhZS5NUDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0NzU4NjE2LCJleHAiOjE4MTYyOTQ2MTZ9.Yz06zUuNb5CiDNId4myUUbg2fadWdEBLXXiTr49auYo"
}

export function getCorrectPresignedUrl(local_url){
  return local_url.replace('http://127.0.0.1:54321/storage/v1/object/sign', 'https://cdn.ebbewertzserver.duckdns.org/');
}
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
export function isValidStudyDevice() {
  // 1. Must be in landscape orientation (width greater than height)
  const isLandscape = window.innerWidth > window.innerHeight;
  // 2. Must support a fine pointer (mouse, trackpad, or stylus).
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  return isLandscape && hasFinePointer;
}

document.addEventListener("DOMContentLoaded", () => {
  const isConsentPage = window.location.pathname.endsWith('consent.html');

  if (isConsentPage) {
    const header = document.createElement('header');
    header.className = "bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs font-sans";
    header.innerHTML = `
      <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="index.html" class="flex items-center space-x-2 text-indigo-600 font-bold text-lg hover:opacity-80">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>Masterproef onderzoek 360° media in de narratieve geneeskunde</span>
          </a>
      </div>
    `;
    document.body.prepend(header);
    return;
  }

  if (!isValidStudyDevice()) {
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
    return; 
  }

  // 2. Injecteer de volledige Topbar inclusief ID
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


export function getForm2Url(id){
    return `${FORM2_BASE_URL}${id}`;
}