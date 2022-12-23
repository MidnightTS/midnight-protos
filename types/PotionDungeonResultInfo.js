"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotionDungeonResultInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PotionDungeonResultInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("PotionDungeonResultInfo", [
            { no: 7, name: "left_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "mode_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "difficulty_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { leftTime: 0, modeId: 0, stageId: 0, levelId: 0, finalScore: 0, difficultyLevel: 0 };
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
                case /* uint32 left_time */ 7:
                    message.leftTime = reader.uint32();
                    break;
                case /* uint32 mode_id */ 13:
                    message.modeId = reader.uint32();
                    break;
                case /* uint32 stage_id */ 1:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 level_id */ 2:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 final_score */ 15:
                    message.finalScore = reader.uint32();
                    break;
                case /* uint32 difficulty_level */ 8:
                    message.difficultyLevel = reader.uint32();
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
        /* uint32 left_time = 7; */
        if (message.leftTime !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.leftTime);
        /* uint32 mode_id = 13; */
        if (message.modeId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.modeId);
        /* uint32 stage_id = 1; */
        if (message.stageId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 level_id = 2; */
        if (message.levelId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 final_score = 15; */
        if (message.finalScore !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* uint32 difficulty_level = 8; */
        if (message.difficultyLevel !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.difficultyLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PotionDungeonResultInfo
 */
exports.PotionDungeonResultInfo = new PotionDungeonResultInfo$Type();
