"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicSVONode = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class DynamicSVONode$Type extends runtime_5.MessageType {
    constructor() {
        super("DynamicSVONode", [
            { no: 3, name: "area", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "refer_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 2, name: "index", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { area: 0, index: 0n };
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
                case /* int32 area */ 3:
                    message.area = reader.int32();
                    break;
                case /* Vector refer_pos */ 15:
                    message.referPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.referPos);
                    break;
                case /* int64 index */ 2:
                    message.index = reader.int64().toBigInt();
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
        /* int32 area = 3; */
        if (message.area !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.area);
        /* Vector refer_pos = 15; */
        if (message.referPos)
            Vector_1.Vector.internalBinaryWrite(message.referPos, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int64 index = 2; */
        if (message.index !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).int64(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DynamicSVONode
 */
exports.DynamicSVONode = new DynamicSVONode$Type();
