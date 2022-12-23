"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleStartBrickBreakerReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SingleStartBrickBreakerReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SingleStartBrickBreakerReq", [
            { no: 13, name: "is_dungeon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "chosen_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "chosen_avatar_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isDungeon: false, levelId: 0, chosenSkillList: [], chosenAvatarList: [] };
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
                case /* bool is_dungeon */ 13:
                    message.isDungeon = reader.bool();
                    break;
                case /* uint32 level_id */ 8:
                    message.levelId = reader.uint32();
                    break;
                case /* repeated uint32 chosen_skill_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenSkillList.push(reader.uint32());
                    else
                        message.chosenSkillList.push(reader.uint32());
                    break;
                case /* repeated uint32 chosen_avatar_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenAvatarList.push(reader.uint32());
                    else
                        message.chosenAvatarList.push(reader.uint32());
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
        /* bool is_dungeon = 13; */
        if (message.isDungeon !== false)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isDungeon);
        /* uint32 level_id = 8; */
        if (message.levelId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.levelId);
        /* repeated uint32 chosen_skill_list = 12; */
        if (message.chosenSkillList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenSkillList.length; i++)
                writer.uint32(message.chosenSkillList[i]);
            writer.join();
        }
        /* repeated uint32 chosen_avatar_list = 5; */
        if (message.chosenAvatarList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenAvatarList.length; i++)
                writer.uint32(message.chosenAvatarList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SingleStartBrickBreakerReq
 */
exports.SingleStartBrickBreakerReq = new SingleStartBrickBreakerReq$Type();
