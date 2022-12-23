"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBlockDotPattern = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockDotPattern$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeBlockDotPattern", [
            { no: 13, name: "width", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 11, name: "height", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { width: 0, data: new Uint8Array(0), height: 0 };
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
                case /* uint32 width */ 13:
                    message.width = reader.uint32();
                    break;
                case /* bytes data */ 12:
                    message.data = reader.bytes();
                    break;
                case /* uint32 height */ 11:
                    message.height = reader.uint32();
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
        /* uint32 width = 13; */
        if (message.width !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.width);
        /* bytes data = 12; */
        if (message.data.length)
            writer.tag(12, runtime_1.WireType.LengthDelimited).bytes(message.data);
        /* uint32 height = 11; */
        if (message.height !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.height);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBlockDotPattern
 */
exports.HomeBlockDotPattern = new HomeBlockDotPattern$Type();
