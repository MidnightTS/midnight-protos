"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionalPlayVar = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RegionalPlayVar$Type extends runtime_5.MessageType {
    constructor() {
        super("RegionalPlayVar", [
            { no: 5, name: "type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "base_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "max_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { type: 0, baseValue: 0, maxValue: 0, value: 0 };
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
                case /* uint32 type */ 5:
                    message.type = reader.uint32();
                    break;
                case /* float base_value */ 4:
                    message.baseValue = reader.float();
                    break;
                case /* float max_value */ 3:
                    message.maxValue = reader.float();
                    break;
                case /* float value */ 2:
                    message.value = reader.float();
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
        /* uint32 type = 5; */
        if (message.type !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.type);
        /* float base_value = 4; */
        if (message.baseValue !== 0)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.baseValue);
        /* float max_value = 3; */
        if (message.maxValue !== 0)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.maxValue);
        /* float value = 2; */
        if (message.value !== 0)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RegionalPlayVar
 */
exports.RegionalPlayVar = new RegionalPlayVar$Type();
