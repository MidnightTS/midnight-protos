"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDiaryRepairInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueDiaryRoomInfo_1 = require("./RogueDiaryRoomInfo");
const RogueDiaryAvatar_1 = require("./RogueDiaryAvatar");
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryRepairInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueDiaryRepairInfoNotify", [
            { no: 2, name: "avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryAvatar_1.RogueDiaryAvatar },
            { no: 10, name: "trial_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryAvatar_1.RogueDiaryAvatar },
            { no: 11, name: "room_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryRoomInfo_1.RogueDiaryRoomInfo },
            { no: 12, name: "select_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "chosen_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "select_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryAvatar_1.RogueDiaryAvatar },
            { no: 13, name: "rand_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarList: [], trialAvatarList: [], roomList: [], selectCardList: [], chosenCardList: [], stageId: 0, selectAvatarList: [], randCardList: [] };
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
                case /* repeated RogueDiaryAvatar avatar_list */ 2:
                    message.avatarList.push(RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated RogueDiaryAvatar trial_avatar_list */ 10:
                    message.trialAvatarList.push(RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated RogueDiaryRoomInfo room_list */ 11:
                    message.roomList.push(RogueDiaryRoomInfo_1.RogueDiaryRoomInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 select_card_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.selectCardList.push(reader.uint32());
                    else
                        message.selectCardList.push(reader.uint32());
                    break;
                case /* repeated uint32 chosen_card_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenCardList.push(reader.uint32());
                    else
                        message.chosenCardList.push(reader.uint32());
                    break;
                case /* uint32 stage_id */ 7:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated RogueDiaryAvatar select_avatar_list */ 3:
                    message.selectAvatarList.push(RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 rand_card_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.randCardList.push(reader.uint32());
                    else
                        message.randCardList.push(reader.uint32());
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
        /* repeated RogueDiaryAvatar avatar_list = 2; */
        for (let i = 0; i < message.avatarList.length; i++)
            RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryWrite(message.avatarList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated RogueDiaryAvatar trial_avatar_list = 10; */
        for (let i = 0; i < message.trialAvatarList.length; i++)
            RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryWrite(message.trialAvatarList[i], writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated RogueDiaryRoomInfo room_list = 11; */
        for (let i = 0; i < message.roomList.length; i++)
            RogueDiaryRoomInfo_1.RogueDiaryRoomInfo.internalBinaryWrite(message.roomList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 select_card_list = 12; */
        if (message.selectCardList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.selectCardList.length; i++)
                writer.uint32(message.selectCardList[i]);
            writer.join();
        }
        /* repeated uint32 chosen_card_list = 5; */
        if (message.chosenCardList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenCardList.length; i++)
                writer.uint32(message.chosenCardList[i]);
            writer.join();
        }
        /* uint32 stage_id = 7; */
        if (message.stageId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.stageId);
        /* repeated RogueDiaryAvatar select_avatar_list = 3; */
        for (let i = 0; i < message.selectAvatarList.length; i++)
            RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryWrite(message.selectAvatarList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 rand_card_list = 13; */
        if (message.randCardList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.randCardList.length; i++)
                writer.uint32(message.randCardList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryRepairInfoNotify
 */
exports.RogueDiaryRepairInfoNotify = new RogueDiaryRepairInfoNotify$Type();
