"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgNoDamageSkillResult = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGDamageDetail_1 = require("./GCGDamageDetail");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgNoDamageSkillResult$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgNoDamageSkillResult", [
            { no: 7, name: "Unk3300_LPGLOCDDPCL", kind: "scalar", jsonName: "Unk3300LPGLOCDDPCL", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_EPNDCIAJOJP", kind: "scalar", jsonName: "Unk3300EPNDCIAJOJP", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "target_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGDamageDetail_1.GCGDamageDetail },
            { no: 13, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_NNJAOEHNPPD", kind: "scalar", jsonName: "Unk3300NNJAOEHNPPD", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_NIGDCIGLAKE", kind: "scalar", jsonName: "Unk3300NIGDCIGLAKE", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300LPGLOCDDPCL: 0, unk3300EPNDCIAJOJP: 0, targetCardGuid: 0, detailList: [], skillId: 0, unk3300NNJAOEHNPPD: 0, unk3300NIGDCIGLAKE: 0 };
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
                case /* uint32 Unk3300_LPGLOCDDPCL = 7 [json_name = "Unk3300LPGLOCDDPCL"];*/ 7:
                    message.unk3300LPGLOCDDPCL = reader.uint32();
                    break;
                case /* uint32 Unk3300_EPNDCIAJOJP = 6 [json_name = "Unk3300EPNDCIAJOJP"];*/ 6:
                    message.unk3300EPNDCIAJOJP = reader.uint32();
                    break;
                case /* uint32 target_card_guid */ 3:
                    message.targetCardGuid = reader.uint32();
                    break;
                case /* repeated GCGDamageDetail detail_list */ 14:
                    message.detailList.push(GCGDamageDetail_1.GCGDamageDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 skill_id */ 13:
                    message.skillId = reader.uint32();
                    break;
                case /* uint32 Unk3300_NNJAOEHNPPD = 4 [json_name = "Unk3300NNJAOEHNPPD"];*/ 4:
                    message.unk3300NNJAOEHNPPD = reader.uint32();
                    break;
                case /* uint32 Unk3300_NIGDCIGLAKE = 11 [json_name = "Unk3300NIGDCIGLAKE"];*/ 11:
                    message.unk3300NIGDCIGLAKE = reader.uint32();
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
        /* uint32 Unk3300_LPGLOCDDPCL = 7 [json_name = "Unk3300LPGLOCDDPCL"]; */
        if (message.unk3300LPGLOCDDPCL !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300LPGLOCDDPCL);
        /* uint32 Unk3300_EPNDCIAJOJP = 6 [json_name = "Unk3300EPNDCIAJOJP"]; */
        if (message.unk3300EPNDCIAJOJP !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300EPNDCIAJOJP);
        /* uint32 target_card_guid = 3; */
        if (message.targetCardGuid !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.targetCardGuid);
        /* repeated GCGDamageDetail detail_list = 14; */
        for (let i = 0; i < message.detailList.length; i++)
            GCGDamageDetail_1.GCGDamageDetail.internalBinaryWrite(message.detailList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 skill_id = 13; */
        if (message.skillId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.skillId);
        /* uint32 Unk3300_NNJAOEHNPPD = 4 [json_name = "Unk3300NNJAOEHNPPD"]; */
        if (message.unk3300NNJAOEHNPPD !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300NNJAOEHNPPD);
        /* uint32 Unk3300_NIGDCIGLAKE = 11 [json_name = "Unk3300NIGDCIGLAKE"]; */
        if (message.unk3300NIGDCIGLAKE !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300NIGDCIGLAKE);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgNoDamageSkillResult
 */
exports.GCGMsgNoDamageSkillResult = new GCGMsgNoDamageSkillResult$Type();
