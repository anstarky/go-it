import { refreshList } from "./mvc/view";
import { notepad } from "./mvc/model";
import "./mvc/controller";

notepad.getNotes().then(data => refreshList(data))