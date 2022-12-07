"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntiAddictNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AntiAddictNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AntiAddictNotify", [
            { no: 4, name: "level", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "msg_type", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { level: "", msg: "", msgType: 0 };
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
                case /* string level */ 4:
                    message.level = reader.string();
                    break;
                case /* string msg */ 7:
                    message.msg = reader.string();
                    break;
                case /* int32 msg_type */ 2:
                    message.msgType = reader.int32();
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
        /* string level = 4; */
        if (message.level !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.level);
        /* string msg = 7; */
        if (message.msg !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.msg);
        /* int32 msg_type = 2; */
        if (message.msgType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.msgType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AntiAddictNotify
 */
exports.AntiAddictNotify = new AntiAddictNotify$Type();
