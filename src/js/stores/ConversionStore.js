import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import $ from "jquery";

class ConversionStore extends EventEmitter {
    constructor () {
        super();
    }

    handleAction(action) {
        const self = this;
        $.ajax({
            url: "http://localhost:8019/api/textconversion",
            data: action.params,
            method: "POST",
            success: function(data, textStatus, jqXHR) {
                self.emit("success", data);
            },
            error: function (request, status, error) {
                self.emit("failed");
            }
        });
    }
}

const conversionStore = new ConversionStore;
dispatcher.register(conversionStore.handleAction.bind(conversionStore));
window.dispatcher = dispatcher;
export default conversionStore;