"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowCommonTipsNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ShowCommonTipsNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ShowCommonTipsNotify", [
            { no: 3, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { title: "", content: "", closeTime: 0 };
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
                case /* string title */ 3:
                    message.title = reader.string();
                    break;
                case /* string content */ 9:
                    message.content = reader.string();
                    break;
                case /* uint32 close_time */ 13:
                    message.closeTime = reader.uint32();
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
        /* string title = 3; */
        if (message.title !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.title);
        /* string content = 9; */
        if (message.content !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.content);
        /* uint32 close_time = 13; */
        if (message.closeTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.closeTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShowCommonTipsNotify
 */
exports.ShowCommonTipsNotify = new ShowCommonTipsNotify$Type();
