"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentCRCInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SegmentCRCInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SegmentCRCInfo", [
            { no: 6, name: "size", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "crc", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "module", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "offset", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { size: 0, crc: "", module: 0, retcode: 0, offset: 0 };
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
                case /* uint32 size */ 6:
                    message.size = reader.uint32();
                    break;
                case /* string crc */ 8:
                    message.crc = reader.string();
                    break;
                case /* uint32 module */ 4:
                    message.module = reader.uint32();
                    break;
                case /* int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 offset */ 9:
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
        /* uint32 size = 6; */
        if (message.size !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.size);
        /* string crc = 8; */
        if (message.crc !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.crc);
        /* uint32 module = 4; */
        if (message.module !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.module);
        /* int32 retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 offset = 9; */
        if (message.offset !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.offset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SegmentCRCInfo
 */
exports.SegmentCRCInfo = new SegmentCRCInfo$Type();
