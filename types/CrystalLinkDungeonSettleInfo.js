"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrystalLinkDungeonSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CrystalLinkDungeonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CrystalLinkDungeonSettleInfo", [
            { no: 9, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "kill_normal_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "kill_elite_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { levelId: 0, finalScore: 0, killNormalMonsterNum: 0, difficultyId: 0, killEliteMonsterNum: 0, isNewRecord: false };
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
                case /* uint32 level_id */ 9:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 final_score */ 12:
                    message.finalScore = reader.uint32();
                    break;
                case /* uint32 kill_normal_monster_num */ 8:
                    message.killNormalMonsterNum = reader.uint32();
                    break;
                case /* uint32 difficulty_id */ 3:
                    message.difficultyId = reader.uint32();
                    break;
                case /* uint32 kill_elite_monster_num */ 2:
                    message.killEliteMonsterNum = reader.uint32();
                    break;
                case /* bool is_new_record */ 10:
                    message.isNewRecord = reader.bool();
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
        /* uint32 level_id = 9; */
        if (message.levelId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 final_score = 12; */
        if (message.finalScore !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* uint32 kill_normal_monster_num = 8; */
        if (message.killNormalMonsterNum !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.killNormalMonsterNum);
        /* uint32 difficulty_id = 3; */
        if (message.difficultyId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.difficultyId);
        /* uint32 kill_elite_monster_num = 2; */
        if (message.killEliteMonsterNum !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.killEliteMonsterNum);
        /* bool is_new_record = 10; */
        if (message.isNewRecord !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CrystalLinkDungeonSettleInfo
 */
exports.CrystalLinkDungeonSettleInfo = new CrystalLinkDungeonSettleInfo$Type();
