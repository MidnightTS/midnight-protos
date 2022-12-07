"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabLoopDungeonResultInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabLoopDungeonResultInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabLoopDungeonResultInfo", [
            { no: 7, name: "dungeon_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "challenge_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_in_time_limit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "challenge_max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonIndex: 0, challengeScore: 0, isInTimeLimit: false, isSuccess: false, challengeMaxScore: 0 };
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
                case /* uint32 dungeon_index */ 7:
                    message.dungeonIndex = reader.uint32();
                    break;
                case /* uint32 challenge_score */ 5:
                    message.challengeScore = reader.uint32();
                    break;
                case /* bool is_in_time_limit */ 8:
                    message.isInTimeLimit = reader.bool();
                    break;
                case /* bool is_success */ 12:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 challenge_max_score */ 13:
                    message.challengeMaxScore = reader.uint32();
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
        /* uint32 dungeon_index = 7; */
        if (message.dungeonIndex !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.dungeonIndex);
        /* uint32 challenge_score = 5; */
        if (message.challengeScore !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.challengeScore);
        /* bool is_in_time_limit = 8; */
        if (message.isInTimeLimit !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isInTimeLimit);
        /* bool is_success = 12; */
        if (message.isSuccess !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 challenge_max_score = 13; */
        if (message.challengeMaxScore !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.challengeMaxScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabLoopDungeonResultInfo
 */
exports.ChannelerSlabLoopDungeonResultInfo = new ChannelerSlabLoopDungeonResultInfo$Type();
