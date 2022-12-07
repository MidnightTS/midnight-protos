"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoDungeonSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SumoDungeonSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SumoDungeonSettleNotify", [
            { no: 4, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "kill_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "kill_elite_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isNewRecord: false, killMonsterNum: 0, difficultyId: 0, finalScore: 0, killEliteMonsterNum: 0, stageId: 0 };
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
                case /* bool is_new_record */ 4:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 kill_monster_num */ 12:
                    message.killMonsterNum = reader.uint32();
                    break;
                case /* uint32 difficulty_id */ 3:
                    message.difficultyId = reader.uint32();
                    break;
                case /* uint32 final_score */ 2:
                    message.finalScore = reader.uint32();
                    break;
                case /* uint32 kill_elite_monster_num */ 15:
                    message.killEliteMonsterNum = reader.uint32();
                    break;
                case /* uint32 stage_id */ 11:
                    message.stageId = reader.uint32();
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
        /* bool is_new_record = 4; */
        if (message.isNewRecord !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 kill_monster_num = 12; */
        if (message.killMonsterNum !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.killMonsterNum);
        /* uint32 difficulty_id = 3; */
        if (message.difficultyId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.difficultyId);
        /* uint32 final_score = 2; */
        if (message.finalScore !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* uint32 kill_elite_monster_num = 15; */
        if (message.killEliteMonsterNum !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.killEliteMonsterNum);
        /* uint32 stage_id = 11; */
        if (message.stageId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoDungeonSettleNotify
 */
exports.SumoDungeonSettleNotify = new SumoDungeonSettleNotify$Type();
