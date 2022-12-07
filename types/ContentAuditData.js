"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentAuditData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ContentAuditData$Type extends runtime_5.MessageType {
    constructor() {
        super("ContentAuditData", [
            { no: 1, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "auto_pass_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { type: "", content: "", autoPassTime: 0 };
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
                case /* string type */ 1:
                    message.type = reader.string();
                    break;
                case /* string content */ 2:
                    message.content = reader.string();
                    break;
                case /* uint32 auto_pass_time */ 3:
                    message.autoPassTime = reader.uint32();
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
        /* string type = 1; */
        if (message.type !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.type);
        /* string content = 2; */
        if (message.content !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.content);
        /* uint32 auto_pass_time = 3; */
        if (message.autoPassTime !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.autoPassTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ContentAuditData
 */
exports.ContentAuditData = new ContentAuditData$Type();
