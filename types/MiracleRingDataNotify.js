"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiracleRingDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("MiracleRingDataNotify", [
            { no: 15, name: "is_gadget_created", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_OONPDLMPLNC", kind: "scalar", jsonName: "Unk3300OONPDLMPLNC", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_POIAEGJNEKP", kind: "scalar", jsonName: "Unk3300POIAEGJNEKP", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "last_take_reward_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isGadgetCreated: false, gadgetEntityId: 0, unk3300OONPDLMPLNC: 0, unk3300POIAEGJNEKP: 0, lastTakeRewardTime: 0 };
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
                case /* bool is_gadget_created */ 15:
                    message.isGadgetCreated = reader.bool();
                    break;
                case /* uint32 gadget_entity_id */ 7:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 Unk3300_OONPDLMPLNC = 9 [json_name = "Unk3300OONPDLMPLNC"];*/ 9:
                    message.unk3300OONPDLMPLNC = reader.uint32();
                    break;
                case /* uint32 Unk3300_POIAEGJNEKP = 8 [json_name = "Unk3300POIAEGJNEKP"];*/ 8:
                    message.unk3300POIAEGJNEKP = reader.uint32();
                    break;
                case /* uint32 last_take_reward_time */ 12:
                    message.lastTakeRewardTime = reader.uint32();
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
        /* bool is_gadget_created = 15; */
        if (message.isGadgetCreated !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isGadgetCreated);
        /* uint32 gadget_entity_id = 7; */
        if (message.gadgetEntityId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 Unk3300_OONPDLMPLNC = 9 [json_name = "Unk3300OONPDLMPLNC"]; */
        if (message.unk3300OONPDLMPLNC !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300OONPDLMPLNC);
        /* uint32 Unk3300_POIAEGJNEKP = 8 [json_name = "Unk3300POIAEGJNEKP"]; */
        if (message.unk3300POIAEGJNEKP !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300POIAEGJNEKP);
        /* uint32 last_take_reward_time = 12; */
        if (message.lastTakeRewardTime !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.lastTakeRewardTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MiracleRingDataNotify
 */
exports.MiracleRingDataNotify = new MiracleRingDataNotify$Type();
