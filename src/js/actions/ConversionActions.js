import dispatcher from "../dispatcher";

export function performConversion(params) {
    dispatcher.dispatch({ type: "PERFORM", params: params });
}