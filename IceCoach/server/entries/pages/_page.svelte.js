import { c as create_ssr_component } from "../../chunks/ssr.js";
import OBSWebSocket from "obs-websocket-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const obs = new OBSWebSocket();
  try {
    obs.connect("ws://localhost:4455", "password");
    console.log("Connected to obs-websocket");
  } catch (e) {
    console.log(e);
    e.message;
  }
  return `<h1 data-svelte-h="svelte-3udy1z">IceCoach</h1>    <button title="Start Replay Buffer" data-svelte-h="svelte-18yfbb6">Start Replay Buffer</button> <button title="Save Replay" data-svelte-h="svelte-1x0cbzx">Save Replay</button>`;
});
export {
  Page as default
};
