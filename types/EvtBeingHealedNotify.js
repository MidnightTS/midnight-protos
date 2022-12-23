"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtBeingHealedNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EvtBeingHealedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtBeingHealedNotify", [
            { no: 2, name: "real_heal_amount", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "heal_amount", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "target_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "source_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { realHealAmount: 0, healAmount: 0, targetId: 0, sourceId: 0 };
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
                case /* float real_heal_amount */ 2:
                    message.realHealAmount = reader.float();
                    break;
                case /* float heal_amount */ 3:
                    message.healAmount = reader.float();
                    break;
                case /* uint32 target_id */ 4:
                    message.targetId = reader.uint32();
                    break;
                case /* uint32 source_id */ 6:
                    message.sourceId = reader.uint32();
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
        /* float real_heal_amount = 2; */
        if (message.realHealAmount !== 0)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.realHealAmount);
        /* float heal_amount = 3; */
        if (message.healAmount !== 0)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.healAmount);
        /* uint32 target_id = 4; */
        if (message.targetId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.targetId);
        /* uint32 source_id = 6; */
        if (message.sourceId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.sourceId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtBeingHealedNotify
 */
exports.EvtBeingHealedNotify = new EvtBeingHealedNotify$Type();
