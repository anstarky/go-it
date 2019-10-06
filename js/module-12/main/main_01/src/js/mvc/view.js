import Handlebars from "handlebars";
import refs from "../utils/refs";
import template from "../teplates/note.hbs";

export function refreshList() {
    const items = JSON.parse(localStorage.getItem("notes"));
    const htmlNotesList = items.map(note => template(note)).join("\n");
    refs.list.innerHTML = "";
    refs.list.insertAdjacentHTML("afterbegin", htmlNotesList);
}