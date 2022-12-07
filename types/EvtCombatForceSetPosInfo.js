"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtCombatForceSetPosInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtCombatForceSetPosInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtCombatForceSetPosInfo", [
            { no: 8, name: "Unk3300_LGGMBNLMGHB", kind: "scalar", jsonName: "Unk3300LGGMBNLMGHB", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_IALIGDPAMFL", kind: "scalar", jsonName: "Unk3300IALIGDPAMFL", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "target_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 10, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300LGGMBNLMGHB: 0, unk3300IALIGDPAMFL: 0, entityId: 0 };
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
                case /* uint32 Unk3300_LGGMBNLMGHB = 8 [json_name = "Unk3300LGGMBNLMGHB"];*/ 8:
                    message.unk3300LGGMBNLMGHB = reader.uint32();
                    break;
                case /* uint32 Unk3300_IALIGDPAMFL = 7 [json_name = "Unk3300IALIGDPAMFL"];*/ 7:
                    message.unk3300IALIGDPAMFL = reader.uint32();
                    break;
                case /* Vector target_pos */ 1:
                    message.targetPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
                    break;
                case /* uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
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
        /* uint32 Unk3300_LGGMBNLMGHB = 8 [json_name = "Unk3300LGGMBNLMGHB"]; */
        if (message.unk3300LGGMBNLMGHB !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300LGGMBNLMGHB);
        /* uint32 Unk3300_IALIGDPAMFL = 7 [json_name = "Unk3300IALIGDPAMFL"]; */
        if (message.unk3300IALIGDPAMFL !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300IALIGDPAMFL);
        /* Vector target_pos = 1; */
        if (message.targetPos)
            Vector_1.Vector.internalBinaryWrite(message.targetPos, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 10; */
        if (message.entityId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtCombatForceSetPosInfo
 */
exports.EvtCombatForceSetPosInfo = new EvtCombatForceSetPosInfo$Type();
