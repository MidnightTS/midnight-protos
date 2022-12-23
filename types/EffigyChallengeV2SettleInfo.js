"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffigyChallengeV2SettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EffigyChallengeV2SettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EffigyChallengeV2SettleInfo", [
            { no: 13, name: "challenge_mode_difficulty", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_MHOIIPJKAMN", kind: "scalar", jsonName: "Unk3300MHOIIPJKAMN", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_PHEIMLOKIJG", kind: "scalar", jsonName: "Unk3300PHEIMLOKIJG", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_ONKPGFOLDFL", kind: "scalar", jsonName: "Unk3300ONKPGFOLDFL", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_NGBKNDHJPCP", kind: "scalar", jsonName: "Unk3300NGBKNDHJPCP", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_AKMPCDIKBJD", kind: "scalar", jsonName: "Unk3300AKMPCDIKBJD", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { challengeModeDifficulty: 0, unk3300MHOIIPJKAMN: 0, unk3300PHEIMLOKIJG: 0, unk3300ONKPGFOLDFL: 0, unk3300NGBKNDHJPCP: false, unk3300AKMPCDIKBJD: false };
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
                case /* uint32 challenge_mode_difficulty */ 13:
                    message.challengeModeDifficulty = reader.uint32();
                    break;
                case /* uint32 Unk3300_MHOIIPJKAMN = 14 [json_name = "Unk3300MHOIIPJKAMN"];*/ 14:
                    message.unk3300MHOIIPJKAMN = reader.uint32();
                    break;
                case /* uint32 Unk3300_PHEIMLOKIJG = 11 [json_name = "Unk3300PHEIMLOKIJG"];*/ 11:
                    message.unk3300PHEIMLOKIJG = reader.uint32();
                    break;
                case /* uint32 Unk3300_ONKPGFOLDFL = 12 [json_name = "Unk3300ONKPGFOLDFL"];*/ 12:
                    message.unk3300ONKPGFOLDFL = reader.uint32();
                    break;
                case /* bool Unk3300_NGBKNDHJPCP = 5 [json_name = "Unk3300NGBKNDHJPCP"];*/ 5:
                    message.unk3300NGBKNDHJPCP = reader.bool();
                    break;
                case /* bool Unk3300_AKMPCDIKBJD = 9 [json_name = "Unk3300AKMPCDIKBJD"];*/ 9:
                    message.unk3300AKMPCDIKBJD = reader.bool();
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
        /* uint32 challenge_mode_difficulty = 13; */
        if (message.challengeModeDifficulty !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.challengeModeDifficulty);
        /* uint32 Unk3300_MHOIIPJKAMN = 14 [json_name = "Unk3300MHOIIPJKAMN"]; */
        if (message.unk3300MHOIIPJKAMN !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300MHOIIPJKAMN);
        /* uint32 Unk3300_PHEIMLOKIJG = 11 [json_name = "Unk3300PHEIMLOKIJG"]; */
        if (message.unk3300PHEIMLOKIJG !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300PHEIMLOKIJG);
        /* uint32 Unk3300_ONKPGFOLDFL = 12 [json_name = "Unk3300ONKPGFOLDFL"]; */
        if (message.unk3300ONKPGFOLDFL !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300ONKPGFOLDFL);
        /* bool Unk3300_NGBKNDHJPCP = 5 [json_name = "Unk3300NGBKNDHJPCP"]; */
        if (message.unk3300NGBKNDHJPCP !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.unk3300NGBKNDHJPCP);
        /* bool Unk3300_AKMPCDIKBJD = 9 [json_name = "Unk3300AKMPCDIKBJD"]; */
        if (message.unk3300AKMPCDIKBJD !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.unk3300AKMPCDIKBJD);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EffigyChallengeV2SettleInfo
 */
exports.EffigyChallengeV2SettleInfo = new EffigyChallengeV2SettleInfo$Type();
