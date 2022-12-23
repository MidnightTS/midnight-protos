"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterRogueDiaryDungeonReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueDiaryAvatar_1 = require("./RogueDiaryAvatar");
// @generated message type with reflection information, may provide speed optimized methods
class EnterRogueDiaryDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("EnterRogueDiaryDungeonReq", [
            { no: 5, name: "chosen_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "chosen_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryAvatar_1.RogueDiaryAvatar }
        ]);
    }
    create(value) {
        const message = { chosenCardList: [], chosenAvatarList: [] };
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
                case /* repeated uint32 chosen_card_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenCardList.push(reader.uint32());
                    else
                        message.chosenCardList.push(reader.uint32());
                    break;
                case /* repeated RogueDiaryAvatar chosen_avatar_list */ 9:
                    message.chosenAvatarList.push(RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated uint32 chosen_card_list = 5; */
        if (message.chosenCardList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenCardList.length; i++)
                writer.uint32(message.chosenCardList[i]);
            writer.join();
        }
        /* repeated RogueDiaryAvatar chosen_avatar_list = 9; */
        for (let i = 0; i < message.chosenAvatarList.length; i++)
            RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryWrite(message.chosenAvatarList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterRogueDiaryDungeonReq
 */
exports.EnterRogueDiaryDungeonReq = new EnterRogueDiaryDungeonReq$Type();
