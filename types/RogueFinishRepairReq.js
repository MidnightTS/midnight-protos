"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueFinishRepairReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueDiaryAvatar_1 = require("./RogueDiaryAvatar");
// @generated message type with reflection information, may provide speed optimized methods
class RogueFinishRepairReq$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueFinishRepairReq", [
            { no: 14, name: "chosen_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryAvatar_1.RogueDiaryAvatar },
            { no: 15, name: "chosen_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { chosenAvatarList: [], chosenCardList: [] };
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
                case /* repeated RogueDiaryAvatar chosen_avatar_list */ 14:
                    message.chosenAvatarList.push(RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 chosen_card_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenCardList.push(reader.uint32());
                    else
                        message.chosenCardList.push(reader.uint32());
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
        /* repeated RogueDiaryAvatar chosen_avatar_list = 14; */
        for (let i = 0; i < message.chosenAvatarList.length; i++)
            RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryWrite(message.chosenAvatarList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 chosen_card_list = 15; */
        if (message.chosenCardList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenCardList.length; i++)
                writer.uint32(message.chosenCardList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueFinishRepairReq
 */
exports.RogueFinishRepairReq = new RogueFinishRepairReq$Type();
