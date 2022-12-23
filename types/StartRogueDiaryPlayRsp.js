"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartRogueDiaryPlayRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueDiaryAvatar_1 = require("./RogueDiaryAvatar");
// @generated message type with reflection information, may provide speed optimized methods
class StartRogueDiaryPlayRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("StartRogueDiaryPlayRsp", [
            { no: 15, name: "avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryAvatar_1.RogueDiaryAvatar },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "trial_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryAvatar_1.RogueDiaryAvatar },
            { no: 2, name: "rand_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarList: [], retcode: 0, trialAvatarList: [], randCardList: [] };
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
                case /* repeated RogueDiaryAvatar avatar_list */ 15:
                    message.avatarList.push(RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* repeated RogueDiaryAvatar trial_avatar_list */ 9:
                    message.trialAvatarList.push(RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 rand_card_list */ 2:
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
        /* repeated RogueDiaryAvatar avatar_list = 15; */
        for (let i = 0; i < message.avatarList.length; i++)
            RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryWrite(message.avatarList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated RogueDiaryAvatar trial_avatar_list = 9; */
        for (let i = 0; i < message.trialAvatarList.length; i++)
            RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryWrite(message.trialAvatarList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 rand_card_list = 2; */
        if (message.randCardList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
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
 * @generated MessageType for protobuf message StartRogueDiaryPlayRsp
 */
exports.StartRogueDiaryPlayRsp = new StartRogueDiaryPlayRsp$Type();
