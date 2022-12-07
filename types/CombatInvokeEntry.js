"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombatInvokeEntry = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CombatTypeArgument_1 = require("./CombatTypeArgument");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class CombatInvokeEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("CombatInvokeEntry", [
            { no: 11, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 9, name: "argument_type", kind: "enum", T: () => ["CombatTypeArgument", CombatTypeArgument_1.CombatTypeArgument, "COMBAT_TYPE_ARGUMENT_"] },
            { no: 7, name: "combat_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { forwardType: 0, argumentType: 0, combatData: new Uint8Array(0) };
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
                case /* ForwardType forward_type */ 11:
                    message.forwardType = reader.int32();
                    break;
                case /* CombatTypeArgument argument_type */ 9:
                    message.argumentType = reader.int32();
                    break;
                case /* bytes combat_data */ 7:
                    message.combatData = reader.bytes();
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
        /* ForwardType forward_type = 11; */
        if (message.forwardType !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.forwardType);
        /* CombatTypeArgument argument_type = 9; */
        if (message.argumentType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.argumentType);
        /* bytes combat_data = 7; */
        if (message.combatData.length)
            writer.tag(7, runtime_1.WireType.LengthDelimited).bytes(message.combatData);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CombatInvokeEntry
 */
exports.CombatInvokeEntry = new CombatInvokeEntry$Type();
