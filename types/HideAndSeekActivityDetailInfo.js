"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideAndSeekActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HideAndSeekMapInfo_1 = require("./HideAndSeekMapInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HideAndSeekActivityDetailInfo", [
            { no: 6, name: "chosen_hunter_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "open_map_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HideAndSeekMapInfo_1.HideAndSeekMapInfo },
            { no: 2, name: "chosen_hider_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "chosen_map_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "unlock_map_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { chosenHunterSkillList: [], openMapInfoList: [], chosenHiderSkillList: [], chosenMapList: [], unlockMapList: [] };
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
                case /* repeated uint32 chosen_hunter_skill_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenHunterSkillList.push(reader.uint32());
                    else
                        message.chosenHunterSkillList.push(reader.uint32());
                    break;
                case /* repeated HideAndSeekMapInfo open_map_info_list */ 13:
                    message.openMapInfoList.push(HideAndSeekMapInfo_1.HideAndSeekMapInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 chosen_hider_skill_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenHiderSkillList.push(reader.uint32());
                    else
                        message.chosenHiderSkillList.push(reader.uint32());
                    break;
                case /* repeated uint32 chosen_map_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenMapList.push(reader.uint32());
                    else
                        message.chosenMapList.push(reader.uint32());
                    break;
                case /* repeated uint32 unlock_map_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockMapList.push(reader.uint32());
                    else
                        message.unlockMapList.push(reader.uint32());
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
        /* repeated uint32 chosen_hunter_skill_list = 6; */
        if (message.chosenHunterSkillList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenHunterSkillList.length; i++)
                writer.uint32(message.chosenHunterSkillList[i]);
            writer.join();
        }
        /* repeated HideAndSeekMapInfo open_map_info_list = 13; */
        for (let i = 0; i < message.openMapInfoList.length; i++)
            HideAndSeekMapInfo_1.HideAndSeekMapInfo.internalBinaryWrite(message.openMapInfoList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 chosen_hider_skill_list = 2; */
        if (message.chosenHiderSkillList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenHiderSkillList.length; i++)
                writer.uint32(message.chosenHiderSkillList[i]);
            writer.join();
        }
        /* repeated uint32 chosen_map_list = 15; */
        if (message.chosenMapList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenMapList.length; i++)
                writer.uint32(message.chosenMapList[i]);
            writer.join();
        }
        /* repeated uint32 unlock_map_list = 4; */
        if (message.unlockMapList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockMapList.length; i++)
                writer.uint32(message.unlockMapList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HideAndSeekActivityDetailInfo
 */
exports.HideAndSeekActivityDetailInfo = new HideAndSeekActivityDetailInfo$Type();
