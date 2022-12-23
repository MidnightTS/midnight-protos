"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffigyChallengeV2EnterDungeonRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EffigyChallengeV2EnterDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("EffigyChallengeV2EnterDungeonRsp", [
            { no: 3, name: "challenge_mode_difficulty", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "challenge_mode_skill_no", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { challengeModeDifficulty: 0, challengeModeSkillNo: 0, levelId: 0, retcode: 0 };
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
                case /* uint32 challenge_mode_difficulty */ 3:
                    message.challengeModeDifficulty = reader.uint32();
                    break;
                case /* uint32 challenge_mode_skill_no */ 7:
                    message.challengeModeSkillNo = reader.uint32();
                    break;
                case /* uint32 level_id */ 10:
                    message.levelId = reader.uint32();
                    break;
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
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
        /* uint32 challenge_mode_difficulty = 3; */
        if (message.challengeModeDifficulty !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.challengeModeDifficulty);
        /* uint32 challenge_mode_skill_no = 7; */
        if (message.challengeModeSkillNo !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.challengeModeSkillNo);
        /* uint32 level_id = 10; */
        if (message.levelId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.levelId);
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EffigyChallengeV2EnterDungeonRsp
 */
exports.EffigyChallengeV2EnterDungeonRsp = new EffigyChallengeV2EnterDungeonRsp$Type();
