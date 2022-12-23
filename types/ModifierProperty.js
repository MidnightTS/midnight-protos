"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierProperty = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityString_1 = require("./AbilityString");
// @generated message type with reflection information, may provide speed optimized methods
class ModifierProperty$Type extends runtime_5.MessageType {
    constructor() {
        super("ModifierProperty", [
            { no: 7, name: "key", kind: "message", T: () => AbilityString_1.AbilityString },
            { no: 5, name: "value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { value: 0 };
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
                case /* AbilityString key */ 7:
                    message.key = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.key);
                    break;
                case /* float value */ 5:
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
        /* AbilityString key = 7; */
        if (message.key)
            AbilityString_1.AbilityString.internalBinaryWrite(message.key, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* float value = 5; */
        if (message.value !== 0)
            writer.tag(5, runtime_1.WireType.Bit32).float(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ModifierProperty
 */
exports.ModifierProperty = new ModifierProperty$Type();
