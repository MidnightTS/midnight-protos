"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakoutSyncSnapShot = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BreakoutSnapShot_1 = require("./BreakoutSnapShot");
// @generated message type with reflection information, may provide speed optimized methods
class BreakoutSyncSnapShot$Type extends runtime_5.MessageType {
    constructor() {
        super("BreakoutSyncSnapShot", [
            { no: 14, name: "snap_shot", kind: "message", T: () => BreakoutSnapShot_1.BreakoutSnapShot }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* BreakoutSnapShot snap_shot */ 14:
                    message.snapShot = BreakoutSnapShot_1.BreakoutSnapShot.internalBinaryRead(reader, reader.uint32(), options, message.snapShot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* BreakoutSnapShot snap_shot = 14; */
        if (message.snapShot)
            BreakoutSnapShot_1.BreakoutSnapShot.internalBinaryWrite(message.snapShot, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BreakoutSyncSnapShot
 */
exports.BreakoutSyncSnapShot = new BreakoutSyncSnapShot$Type();
