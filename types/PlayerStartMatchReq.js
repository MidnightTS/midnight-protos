"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStartMatchReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MatchType_1 = require("./MatchType");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerStartMatchReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerStartMatchReq", [
            { no: 12, name: "mp_play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "mechanicus_difficult_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "match_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "match_type", kind: "enum", T: () => ["MatchType", MatchType_1.MatchType, "MATCH_TYPE_"] },
            { no: 3, name: "match_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { mpPlayId: 0, mechanicusDifficultLevel: 0, dungeonId: 0, matchId: 0, matchType: 0, matchParamList: [] };
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
                case /* uint32 mp_play_id */ 12:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* uint32 mechanicus_difficult_level */ 15:
                    message.mechanicusDifficultLevel = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 10:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 match_id */ 2:
                    message.matchId = reader.uint32();
                    break;
                case /* MatchType match_type */ 8:
                    message.matchType = reader.int32();
                    break;
                case /* repeated uint32 match_param_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.matchParamList.push(reader.uint32());
                    else
                        message.matchParamList.push(reader.uint32());
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
        /* uint32 mp_play_id = 12; */
        if (message.mpPlayId !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.mpPlayId);
        /* uint32 mechanicus_difficult_level = 15; */
        if (message.mechanicusDifficultLevel !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.mechanicusDifficultLevel);
        /* uint32 dungeon_id = 10; */
        if (message.dungeonId !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* uint32 match_id = 2; */
        if (message.matchId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.matchId);
        /* MatchType match_type = 8; */
        if (message.matchType !== 0)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.matchType);
        /* repeated uint32 match_param_list = 3; */
        if (message.matchParamList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.matchParamList.length; i++)
                writer.uint32(message.matchParamList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerStartMatchReq
 */
exports.PlayerStartMatchReq = new PlayerStartMatchReq$Type();
