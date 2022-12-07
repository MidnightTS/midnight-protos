"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireworksLaunchParam = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FireworksLaunchParamType_1 = require("./FireworksLaunchParamType");
// @generated message type with reflection information, may provide speed optimized methods
class FireworksLaunchParam$Type extends runtime_5.MessageType {
    constructor() {
        super("FireworksLaunchParam", [
            { no: 4, name: "type", kind: "enum", T: () => ["FireworksLaunchParamType", FireworksLaunchParamType_1.FireworksLaunchParamType, "FIREWORKS_LAUNCH_PARAM_TYPE_"] },
            { no: 2, name: "value", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { type: 0, value: 0 };
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
                case /* FireworksLaunchParamType type */ 4:
                    message.type = reader.int32();
                    break;
                case /* int32 value */ 2:
                    message.value = reader.int32();
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
        /* FireworksLaunchParamType type = 4; */
        if (message.type !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.type);
        /* int32 value = 2; */
        if (message.value !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FireworksLaunchParam
 */
exports.FireworksLaunchParam = new FireworksLaunchParam$Type();
