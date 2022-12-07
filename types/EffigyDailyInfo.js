"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffigyDailyInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EffigyDailyInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EffigyDailyInfo", [
            { no: 7, name: "is_first_pass_reward_taken", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "Unk3300_NNHICCGELHP", kind: "scalar", jsonName: "Unk3300NNHICCGELHP", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_NEBCDALEFEC", kind: "scalar", jsonName: "Unk3300NEBCDALEFEC", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "challenge_max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "day_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isFirstPassRewardTaken: false, unk3300NNHICCGELHP: 0, unk3300NEBCDALEFEC: 0, challengeMaxScore: 0, beginTime: 0, challengeId: 0, dayIndex: 0 };
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
                case /* bool is_first_pass_reward_taken */ 7:
                    message.isFirstPassRewardTaken = reader.bool();
                    break;
                case /* uint32 Unk3300_NNHICCGELHP = 2 [json_name = "Unk3300NNHICCGELHP"];*/ 2:
                    message.unk3300NNHICCGELHP = reader.uint32();
                    break;
                case /* uint32 Unk3300_NEBCDALEFEC = 11 [json_name = "Unk3300NEBCDALEFEC"];*/ 11:
                    message.unk3300NEBCDALEFEC = reader.uint32();
                    break;
                case /* uint32 challenge_max_score */ 12:
                    message.challengeMaxScore = reader.uint32();
                    break;
                case /* uint32 begin_time */ 8:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 challenge_id */ 6:
                    message.challengeId = reader.uint32();
                    break;
                case /* uint32 day_index */ 9:
                    message.dayIndex = reader.uint32();
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
        /* bool is_first_pass_reward_taken = 7; */
        if (message.isFirstPassRewardTaken !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isFirstPassRewardTaken);
        /* uint32 Unk3300_NNHICCGELHP = 2 [json_name = "Unk3300NNHICCGELHP"]; */
        if (message.unk3300NNHICCGELHP !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300NNHICCGELHP);
        /* uint32 Unk3300_NEBCDALEFEC = 11 [json_name = "Unk3300NEBCDALEFEC"]; */
        if (message.unk3300NEBCDALEFEC !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300NEBCDALEFEC);
        /* uint32 challenge_max_score = 12; */
        if (message.challengeMaxScore !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.challengeMaxScore);
        /* uint32 begin_time = 8; */
        if (message.beginTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* uint32 challenge_id = 6; */
        if (message.challengeId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.challengeId);
        /* uint32 day_index = 9; */
        if (message.dayIndex !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.dayIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EffigyDailyInfo
 */
exports.EffigyDailyInfo = new EffigyDailyInfo$Type();
