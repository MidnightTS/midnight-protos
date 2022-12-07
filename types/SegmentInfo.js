"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SegmentInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SegmentInfo", [
            { no: 1, name: "module", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "size", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "offset", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { module: 0, size: 0, offset: 0 };
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
                case /* uint32 module */ 1:
                    message.module = reader.uint32();
                    break;
                case /* uint32 size */ 7:
                    message.size = reader.uint32();
                    break;
                case /* uint32 offset */ 11:
                    message.offset = reader.uint32();
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
        /* uint32 module = 1; */
        if (message.module !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.module);
        /* uint32 size = 7; */
        if (message.size !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.size);
        /* uint32 offset = 11; */
        if (message.offset !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.offset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SegmentInfo
 */
exports.SegmentInfo = new SegmentInfo$Type();