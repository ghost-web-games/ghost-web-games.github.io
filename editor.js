import MapEditor from "./js/editor/mapeditor.js";

const app = new MapEditor();

window.addEventListener('load', () => {
    app.init();
    app.render();
});