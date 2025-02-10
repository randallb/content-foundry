import { init, me } from "https://esm.sh/@replit/extensions@1.10.0";
const updatable = document.querySelector(".updatable");
const { dispose, status } = await init({ timeout: 1000 });
const filePath = await me.filePath();
if (!filePath) {
  updatable.textContent = "Not found";
  dispose();
}
updatable.innerHTML = `Loading ${filePath}...`;
console.log(globalThis.ENVIRONMENT.nextUrl);
globalThis.location.assign(
  `${globalThis.ENVIRONMENT.nextUrl}?filePath=${filePath}`,
);
