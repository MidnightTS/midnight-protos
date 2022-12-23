"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireworksReformParam = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FireworksReformParamType_1 = require("./FireworksReformParamType");
// @generated message type with reflection information, may provide speed optimized methods
class FireworksReformParam$Type extends runtime_5.MessageType {
    constructor() {
        super("FireworksReformParam", [
            { no: 1, name: "value", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "type", kind: "enum", T: () => ["FireworksReformParamType", FireworksReformParamType_1.FireworksReformParamType, "FIREWORKS_REFORM_PARAM_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { value: 0, type: 0 };
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
                case /* int32 value */ 1:
                    message.value = reader.int32();
                    break;
                case /* FireworksReformParamType type */ 5:
                    message.type = reader.int32();
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
        /* int32 value = 1; */
        if (message.value !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.value);
        /* FireworksReformParamType type = 5; */
        if (message.type !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FireworksReformParam
 */
exports.FireworksReformParam = new FireworksReformParam$Type();
