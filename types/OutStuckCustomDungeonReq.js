"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutStuckCustomDungeonReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class OutStuckCustomDungeonReq$Type extends runtime_4.MessageType {
    constructor() {
        super("OutStuckCustomDungeonReq", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_3.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_2.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OutStuckCustomDungeonReq
 */
exports.OutStuckCustomDungeonReq = new OutStuckCustomDungeonReq$Type();
