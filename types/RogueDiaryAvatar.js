"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDiaryAvatar = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityDungeonAvatar_1 = require("./ActivityDungeonAvatar");
const RogueDiaryAvatarDisableStatus_1 = require("./RogueDiaryAvatarDisableStatus");
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryAvatar$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueDiaryAvatar", [
            { no: 10, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "disable_status_list", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["RogueDiaryAvatarDisableStatus", RogueDiaryAvatarDisableStatus_1.RogueDiaryAvatarDisableStatus, "ROGUE_DIARY_AVATAR_DISABLE_STATUS_"] },
            { no: 2, name: "tired_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "avatar", kind: "message", T: () => ActivityDungeonAvatar_1.ActivityDungeonAvatar }
        ]);
    }
    create(value) {
        const message = { level: 0, disableStatusList: [], tiredRound: 0 };
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
                case /* uint32 level */ 10:
                    message.level = reader.uint32();
                    break;
                case /* repeated RogueDiaryAvatarDisableStatus disable_status_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.disableStatusList.push(reader.int32());
                    else
                        message.disableStatusList.push(reader.int32());
                    break;
                case /* uint32 tired_round */ 2:
                    message.tiredRound = reader.uint32();
                    break;
                case /* ActivityDungeonAvatar avatar */ 14:
                    message.avatar = ActivityDungeonAvatar_1.ActivityDungeonAvatar.internalBinaryRead(reader, reader.uint32(), options, message.avatar);
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
        /* uint32 level = 10; */
        if (message.level !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.level);
        /* repeated RogueDiaryAvatarDisableStatus disable_status_list = 7; */
        if (message.disableStatusList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.disableStatusList.length; i++)
                writer.int32(message.disableStatusList[i]);
            writer.join();
        }
        /* uint32 tired_round = 2; */
        if (message.tiredRound !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.tiredRound);
        /* ActivityDungeonAvatar avatar = 14; */
        if (message.avatar)
            ActivityDungeonAvatar_1.ActivityDungeonAvatar.internalBinaryWrite(message.avatar, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryAvatar
 */
exports.RogueDiaryAvatar = new RogueDiaryAvatar$Type();
