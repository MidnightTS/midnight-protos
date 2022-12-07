"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMetaSpecialFloatArgument = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaSpecialFloatArgument$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMetaSpecialFloatArgument", [
            { no: 4, name: "argument_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "is_on", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { argumentValue: 0, isOn: false };
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
                case /* float argument_value */ 4:
                    message.argumentValue = reader.float();
                    break;
                case /* bool is_on */ 10:
                    message.isOn = reader.bool();
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
        /* float argument_value = 4; */
        if (message.argumentValue !== 0)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.argumentValue);
        /* bool is_on = 10; */
        if (message.isOn !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isOn);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMetaSpecialFloatArgument
 */
exports.AbilityMetaSpecialFloatArgument = new AbilityMetaSpecialFloatArgument$Type();
