"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickBreakerLevelInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BrickBreakerLevelInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BrickBreakerLevelInfo", [
            { no: 5, name: "chosen_avatar_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "chosen_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_can_start", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { chosenAvatarList: [], levelId: 0, isFinish: false, maxScore: 0, chosenSkillList: [], isCanStart: false };
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
                case /* repeated uint32 chosen_avatar_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenAvatarList.push(reader.uint32());
                    else
                        message.chosenAvatarList.push(reader.uint32());
                    break;
                case /* uint32 level_id */ 3:
                    message.levelId = reader.uint32();
                    break;
                case /* bool is_finish */ 13:
                    message.isFinish = reader.bool();
                    break;
                case /* uint32 max_score */ 8:
                    message.maxScore = reader.uint32();
                    break;
                case /* repeated uint32 chosen_skill_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenSkillList.push(reader.uint32());
                    else
                        message.chosenSkillList.push(reader.uint32());
                    break;
                case /* bool is_can_start */ 1:
                    message.isCanStart = reader.bool();
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
        /* repeated uint32 chosen_avatar_list = 5; */
        if (message.chosenAvatarList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenAvatarList.length; i++)
                writer.uint32(message.chosenAvatarList[i]);
            writer.join();
        }
        /* uint32 level_id = 3; */
        if (message.levelId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.levelId);
        /* bool is_finish = 13; */
        if (message.isFinish !== false)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isFinish);
        /* uint32 max_score = 8; */
        if (message.maxScore !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.maxScore);
        /* repeated uint32 chosen_skill_list = 14; */
        if (message.chosenSkillList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenSkillList.length; i++)
                writer.uint32(message.chosenSkillList[i]);
            writer.join();
        }
        /* bool is_can_start = 1; */
        if (message.isCanStart !== false)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isCanStart);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BrickBreakerLevelInfo
 */
exports.BrickBreakerLevelInfo = new BrickBreakerLevelInfo$Type();
