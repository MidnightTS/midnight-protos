"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgSkillResult = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGDamageDetail_1 = require("./GCGDamageDetail");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgSkillResult$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgSkillResult", [
            { no: 9, name: "Unk3300_NIGDCIGLAKE", kind: "scalar", jsonName: "Unk3300NIGDCIGLAKE", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "target_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_PDBAGJINFPF", kind: "scalar", jsonName: "Unk3300PDBAGJINFPF", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGDamageDetail_1.GCGDamageDetail },
            { no: 14, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "damage", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_EPNDCIAJOJP", kind: "scalar", jsonName: "Unk3300EPNDCIAJOJP", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_NNJAOEHNPPD", kind: "scalar", jsonName: "Unk3300NNJAOEHNPPD", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_LPGLOCDDPCL", kind: "scalar", jsonName: "Unk3300LPGLOCDDPCL", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300NIGDCIGLAKE: 0, targetCardGuid: 0, unk3300PDBAGJINFPF: 0, detailList: [], skillId: 0, damage: 0, unk3300EPNDCIAJOJP: 0, unk3300NNJAOEHNPPD: 0, unk3300LPGLOCDDPCL: 0 };
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
                case /* uint32 Unk3300_NIGDCIGLAKE = 9 [json_name = "Unk3300NIGDCIGLAKE"];*/ 9:
                    message.unk3300NIGDCIGLAKE = reader.uint32();
                    break;
                case /* uint32 target_card_guid */ 13:
                    message.targetCardGuid = reader.uint32();
                    break;
                case /* uint32 Unk3300_PDBAGJINFPF = 4 [json_name = "Unk3300PDBAGJINFPF"];*/ 4:
                    message.unk3300PDBAGJINFPF = reader.uint32();
                    break;
                case /* repeated GCGDamageDetail detail_list */ 5:
                    message.detailList.push(GCGDamageDetail_1.GCGDamageDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 skill_id */ 14:
                    message.skillId = reader.uint32();
                    break;
                case /* uint32 damage */ 7:
                    message.damage = reader.uint32();
                    break;
                case /* uint32 Unk3300_EPNDCIAJOJP = 12 [json_name = "Unk3300EPNDCIAJOJP"];*/ 12:
                    message.unk3300EPNDCIAJOJP = reader.uint32();
                    break;
                case /* uint32 Unk3300_NNJAOEHNPPD = 15 [json_name = "Unk3300NNJAOEHNPPD"];*/ 15:
                    message.unk3300NNJAOEHNPPD = reader.uint32();
                    break;
                case /* uint32 Unk3300_LPGLOCDDPCL = 10 [json_name = "Unk3300LPGLOCDDPCL"];*/ 10:
                    message.unk3300LPGLOCDDPCL = reader.uint32();
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
        /* uint32 Unk3300_NIGDCIGLAKE = 9 [json_name = "Unk3300NIGDCIGLAKE"]; */
        if (message.unk3300NIGDCIGLAKE !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300NIGDCIGLAKE);
        /* uint32 target_card_guid = 13; */
        if (message.targetCardGuid !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.targetCardGuid);
        /* uint32 Unk3300_PDBAGJINFPF = 4 [json_name = "Unk3300PDBAGJINFPF"]; */
        if (message.unk3300PDBAGJINFPF !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300PDBAGJINFPF);
        /* repeated GCGDamageDetail detail_list = 5; */
        for (let i = 0; i < message.detailList.length; i++)
            GCGDamageDetail_1.GCGDamageDetail.internalBinaryWrite(message.detailList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 skill_id = 14; */
        if (message.skillId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.skillId);
        /* uint32 damage = 7; */
        if (message.damage !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.damage);
        /* uint32 Unk3300_EPNDCIAJOJP = 12 [json_name = "Unk3300EPNDCIAJOJP"]; */
        if (message.unk3300EPNDCIAJOJP !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300EPNDCIAJOJP);
        /* uint32 Unk3300_NNJAOEHNPPD = 15 [json_name = "Unk3300NNJAOEHNPPD"]; */
        if (message.unk3300NNJAOEHNPPD !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300NNJAOEHNPPD);
        /* uint32 Unk3300_LPGLOCDDPCL = 10 [json_name = "Unk3300LPGLOCDDPCL"]; */
        if (message.unk3300LPGLOCDDPCL !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300LPGLOCDDPCL);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgSkillResult
 */
exports.GCGMsgSkillResult = new GCGMsgSkillResult$Type();
