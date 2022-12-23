"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleIrodoriChessSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleIrodoriChessSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleIrodoriChessSettleInfo", [
            { no: 15, name: "kill_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "scene_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "is_perfect", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "settle_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_activity_end", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { killMonsterNum: 0, sceneTimeMs: 0n, isPerfect: false, isNewRecord: false, settleScore: 0, isActivityEnd: false };
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
                case /* uint32 kill_monster_num */ 15:
                    message.killMonsterNum = reader.uint32();
                    break;
                case /* uint64 scene_time_ms */ 14:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* bool is_perfect */ 8:
                    message.isPerfect = reader.bool();
                    break;
                case /* bool is_new_record */ 7:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 settle_score */ 10:
                    message.settleScore = reader.uint32();
                    break;
                case /* bool is_activity_end */ 5:
                    message.isActivityEnd = reader.bool();
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
        /* uint32 kill_monster_num = 15; */
        if (message.killMonsterNum !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.killMonsterNum);
        /* uint64 scene_time_ms = 14; */
        if (message.sceneTimeMs !== 0n)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.sceneTimeMs);
        /* bool is_perfect = 8; */
        if (message.isPerfect !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isPerfect);
        /* bool is_new_record = 7; */
        if (message.isNewRecord !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 settle_score = 10; */
        if (message.settleScore !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.settleScore);
        /* bool is_activity_end = 5; */
        if (message.isActivityEnd !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isActivityEnd);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleIrodoriChessSettleInfo
 */
exports.InBattleIrodoriChessSettleInfo = new InBattleIrodoriChessSettleInfo$Type();
