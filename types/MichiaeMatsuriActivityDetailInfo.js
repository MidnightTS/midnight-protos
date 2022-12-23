"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MichiaeMatsuriActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MichiaeMatsuriChestPositionInfo_1 = require("./MichiaeMatsuriChestPositionInfo");
const MichiaeMatsuriChallengePositionInfo_1 = require("./MichiaeMatsuriChallengePositionInfo");
const MichiaeMatsuriStage_1 = require("./MichiaeMatsuriStage");
// @generated message type with reflection information, may provide speed optimized methods
class MichiaeMatsuriActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MichiaeMatsuriActivityDetailInfo", [
            { no: 11, name: "gain_crystal_exp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "stage_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MichiaeMatsuriStage_1.MichiaeMatsuriStage },
            { no: 5, name: "unlocked_crystal_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "challenge_pos_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MichiaeMatsuriChallengePositionInfo_1.MichiaeMatsuriChallengePositionInfo },
            { no: 12, name: "chest_pos_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MichiaeMatsuriChestPositionInfo_1.MichiaeMatsuriChestPositionInfo }
        ]);
    }
    create(value) {
        const message = { gainCrystalExp: 0, stageList: [], unlockedCrystalSkillList: [], challengePosList: [], chestPosList: [] };
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
                case /* uint32 gain_crystal_exp */ 11:
                    message.gainCrystalExp = reader.uint32();
                    break;
                case /* repeated MichiaeMatsuriStage stage_list */ 14:
                    message.stageList.push(MichiaeMatsuriStage_1.MichiaeMatsuriStage.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlocked_crystal_skill_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockedCrystalSkillList.push(reader.uint32());
                    else
                        message.unlockedCrystalSkillList.push(reader.uint32());
                    break;
                case /* repeated MichiaeMatsuriChallengePositionInfo challenge_pos_list */ 3:
                    message.challengePosList.push(MichiaeMatsuriChallengePositionInfo_1.MichiaeMatsuriChallengePositionInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated MichiaeMatsuriChestPositionInfo chest_pos_list */ 12:
                    message.chestPosList.push(MichiaeMatsuriChestPositionInfo_1.MichiaeMatsuriChestPositionInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 gain_crystal_exp = 11; */
        if (message.gainCrystalExp !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.gainCrystalExp);
        /* repeated MichiaeMatsuriStage stage_list = 14; */
        for (let i = 0; i < message.stageList.length; i++)
            MichiaeMatsuriStage_1.MichiaeMatsuriStage.internalBinaryWrite(message.stageList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlocked_crystal_skill_list = 5; */
        if (message.unlockedCrystalSkillList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockedCrystalSkillList.length; i++)
                writer.uint32(message.unlockedCrystalSkillList[i]);
            writer.join();
        }
        /* repeated MichiaeMatsuriChallengePositionInfo challenge_pos_list = 3; */
        for (let i = 0; i < message.challengePosList.length; i++)
            MichiaeMatsuriChallengePositionInfo_1.MichiaeMatsuriChallengePositionInfo.internalBinaryWrite(message.challengePosList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated MichiaeMatsuriChestPositionInfo chest_pos_list = 12; */
        for (let i = 0; i < message.chestPosList.length; i++)
            MichiaeMatsuriChestPositionInfo_1.MichiaeMatsuriChestPositionInfo.internalBinaryWrite(message.chestPosList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MichiaeMatsuriActivityDetailInfo
 */
exports.MichiaeMatsuriActivityDetailInfo = new MichiaeMatsuriActivityDetailInfo$Type();
