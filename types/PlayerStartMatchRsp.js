"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStartMatchRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MatchType_1 = require("./MatchType");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerStartMatchRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerStartMatchRsp", [
            { no: 1, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "match_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "match_type", kind: "enum", T: () => ["MatchType", MatchType_1.MatchType, "MATCH_TYPE_"] },
            { no: 8, name: "punish_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "mp_play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "mechanicus_difficult_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonId: 0, matchId: 0, matchType: 0, punishEndTime: 0, mpPlayId: 0, param: 0, mechanicusDifficultLevel: 0, retcode: 0 };
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
                case /* uint32 dungeon_id */ 1:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 match_id */ 12:
                    message.matchId = reader.uint32();
                    break;
                case /* MatchType match_type */ 10:
                    message.matchType = reader.int32();
                    break;
                case /* uint32 punish_end_time */ 8:
                    message.punishEndTime = reader.uint32();
                    break;
                case /* uint32 mp_play_id */ 11:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* uint32 param */ 7:
                    message.param = reader.uint32();
                    break;
                case /* uint32 mechanicus_difficult_level */ 3:
                    message.mechanicusDifficultLevel = reader.uint32();
                    break;
                case /* int32 retcode */ 6:
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
        /* uint32 dungeon_id = 1; */
        if (message.dungeonId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* uint32 match_id = 12; */
        if (message.matchId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.matchId);
        /* MatchType match_type = 10; */
        if (message.matchType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.matchType);
        /* uint32 punish_end_time = 8; */
        if (message.punishEndTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.punishEndTime);
        /* uint32 mp_play_id = 11; */
        if (message.mpPlayId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        /* uint32 param = 7; */
        if (message.param !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.param);
        /* uint32 mechanicus_difficult_level = 3; */
        if (message.mechanicusDifficultLevel !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.mechanicusDifficultLevel);
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerStartMatchRsp
 */
exports.PlayerStartMatchRsp = new PlayerStartMatchRsp$Type();
