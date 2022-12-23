"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RoguelikeRuneRecord_1 = require("./RoguelikeRuneRecord");
const RogueShowAvatarTeamInfo_1 = require("./RogueShowAvatarTeamInfo");
// @generated message type with reflection information, may provide speed optimized methods
class RogueStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueStageInfo", [
            { no: 1966, name: "revise_monster_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_passed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "Unk3300_GGHMFKNHPAJ", kind: "scalar", jsonName: "Unk3300GGHMFKNHPAJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "avatar_team", kind: "message", T: () => RogueShowAvatarTeamInfo_1.RogueShowAvatarTeamInfo },
            { no: 9, name: "is_taken_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "is_explored", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "rune_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RoguelikeRuneRecord_1.RoguelikeRuneRecord },
            { no: 6, name: "is_in_combat", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "coin_c_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "max_passed_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "cur_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_OHHBEPOICLI", kind: "scalar", jsonName: "Unk3300OHHBEPOICLI", T: 13 /*ScalarType.UINT32*/ },
            { no: 275, name: "Unk3300_HPKFHLLCJBM", kind: "scalar", jsonName: "Unk3300HPKFHLLCJBM", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reviseMonsterLevel: 0, isPassed: false, unk3300GGHMFKNHPAJ: 0, isTakenReward: false, isExplored: false, runeRecordList: [], isInCombat: false, coinCNum: 0, isOpen: false, stageId: 0, maxPassedLevel: 0, curLevel: 0, unk3300OHHBEPOICLI: 0, unk3300HPKFHLLCJBM: 0 };
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
                case /* uint32 revise_monster_level */ 1966:
                    message.reviseMonsterLevel = reader.uint32();
                    break;
                case /* bool is_passed */ 11:
                    message.isPassed = reader.bool();
                    break;
                case /* uint32 Unk3300_GGHMFKNHPAJ = 2 [json_name = "Unk3300GGHMFKNHPAJ"];*/ 2:
                    message.unk3300GGHMFKNHPAJ = reader.uint32();
                    break;
                case /* RogueShowAvatarTeamInfo avatar_team */ 8:
                    message.avatarTeam = RogueShowAvatarTeamInfo_1.RogueShowAvatarTeamInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarTeam);
                    break;
                case /* bool is_taken_reward */ 9:
                    message.isTakenReward = reader.bool();
                    break;
                case /* bool is_explored */ 14:
                    message.isExplored = reader.bool();
                    break;
                case /* repeated RoguelikeRuneRecord rune_record_list */ 5:
                    message.runeRecordList.push(RoguelikeRuneRecord_1.RoguelikeRuneRecord.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_in_combat */ 6:
                    message.isInCombat = reader.bool();
                    break;
                case /* uint32 coin_c_num */ 3:
                    message.coinCNum = reader.uint32();
                    break;
                case /* bool is_open */ 13:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 stage_id */ 7:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 max_passed_level */ 4:
                    message.maxPassedLevel = reader.uint32();
                    break;
                case /* uint32 cur_level */ 12:
                    message.curLevel = reader.uint32();
                    break;
                case /* uint32 Unk3300_OHHBEPOICLI = 1 [json_name = "Unk3300OHHBEPOICLI"];*/ 1:
                    message.unk3300OHHBEPOICLI = reader.uint32();
                    break;
                case /* uint32 Unk3300_HPKFHLLCJBM = 275 [json_name = "Unk3300HPKFHLLCJBM"];*/ 275:
                    message.unk3300HPKFHLLCJBM = reader.uint32();
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
        /* uint32 revise_monster_level = 1966; */
        if (message.reviseMonsterLevel !== 0)
            writer.tag(1966, runtime_1.WireType.Varint).uint32(message.reviseMonsterLevel);
        /* bool is_passed = 11; */
        if (message.isPassed !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isPassed);
        /* uint32 Unk3300_GGHMFKNHPAJ = 2 [json_name = "Unk3300GGHMFKNHPAJ"]; */
        if (message.unk3300GGHMFKNHPAJ !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300GGHMFKNHPAJ);
        /* RogueShowAvatarTeamInfo avatar_team = 8; */
        if (message.avatarTeam)
            RogueShowAvatarTeamInfo_1.RogueShowAvatarTeamInfo.internalBinaryWrite(message.avatarTeam, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_taken_reward = 9; */
        if (message.isTakenReward !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isTakenReward);
        /* bool is_explored = 14; */
        if (message.isExplored !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isExplored);
        /* repeated RoguelikeRuneRecord rune_record_list = 5; */
        for (let i = 0; i < message.runeRecordList.length; i++)
            RoguelikeRuneRecord_1.RoguelikeRuneRecord.internalBinaryWrite(message.runeRecordList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_in_combat = 6; */
        if (message.isInCombat !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isInCombat);
        /* uint32 coin_c_num = 3; */
        if (message.coinCNum !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.coinCNum);
        /* bool is_open = 13; */
        if (message.isOpen !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 stage_id = 7; */
        if (message.stageId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 max_passed_level = 4; */
        if (message.maxPassedLevel !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.maxPassedLevel);
        /* uint32 cur_level = 12; */
        if (message.curLevel !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* uint32 Unk3300_OHHBEPOICLI = 1 [json_name = "Unk3300OHHBEPOICLI"]; */
        if (message.unk3300OHHBEPOICLI !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300OHHBEPOICLI);
        /* uint32 Unk3300_HPKFHLLCJBM = 275 [json_name = "Unk3300HPKFHLLCJBM"]; */
        if (message.unk3300HPKFHLLCJBM !== 0)
            writer.tag(275, runtime_1.WireType.Varint).uint32(message.unk3300HPKFHLLCJBM);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueStageInfo
 */
exports.RogueStageInfo = new RogueStageInfo$Type();
