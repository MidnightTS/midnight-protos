"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMetaModifierDurabilityChange = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaModifierDurabilityChange$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMetaModifierDurabilityChange", [
            { no: 13, name: "remain_durability", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 1, name: "reduce_durability", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { remainDurability: 0, reduceDurability: 0 };
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
                case /* float remain_durability */ 13:
                    message.remainDurability = reader.float();
                    break;
                case /* float reduce_durability */ 1:
                    message.reduceDurability = reader.float();
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
        /* float remain_durability = 13; */
        if (message.remainDurability !== 0)
            writer.tag(13, runtime_1.WireType.Bit32).float(message.remainDurability);
        /* float reduce_durability = 1; */
        if (message.reduceDurability !== 0)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.reduceDurability);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMetaModifierDurabilityChange
 */
exports.AbilityMetaModifierDurabilityChange = new AbilityMetaModifierDurabilityChange$Type();
