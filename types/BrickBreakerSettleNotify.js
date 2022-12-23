"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickBreakerSettleNotify = exports.BrickBreakerSettleNotify_SettleReason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Uint32Pair_1 = require("./Uint32Pair");
/**
 * @generated from protobuf enum BrickBreakerSettleNotify.SettleReason
 */
var BrickBreakerSettleNotify_SettleReason;
(function (BrickBreakerSettleNotify_SettleReason) {
    /**
     * @generated from protobuf enum value: SETTLE_REASON_TIME_OUT = 0;
     */
    BrickBreakerSettleNotify_SettleReason[BrickBreakerSettleNotify_SettleReason["TIME_OUT"] = 0] = "TIME_OUT";
    /**
     * @generated from protobuf enum value: SETTLE_REASON_PLAY_END = 1;
     */
    BrickBreakerSettleNotify_SettleReason[BrickBreakerSettleNotify_SettleReason["PLAY_END"] = 1] = "PLAY_END";
    /**
     * @generated from protobuf enum value: SETTLE_REASON_PLAYER_QUIT = 2;
     */
    BrickBreakerSettleNotify_SettleReason[BrickBreakerSettleNotify_SettleReason["PLAYER_QUIT"] = 2] = "PLAYER_QUIT";
    /**
     * @generated from protobuf enum value: SETTLE_REASON_LIFE_COUNT = 3;
     */
    BrickBreakerSettleNotify_SettleReason[BrickBreakerSettleNotify_SettleReason["LIFE_COUNT"] = 3] = "LIFE_COUNT";
})(BrickBreakerSettleNotify_SettleReason = exports.BrickBreakerSettleNotify_SettleReason || (exports.BrickBreakerSettleNotify_SettleReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class BrickBreakerSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("BrickBreakerSettleNotify", [
            { no: 5, name: "time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_single_mode", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "is_dungeon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "reason", kind: "enum", T: () => ["BrickBreakerSettleNotify.SettleReason", BrickBreakerSettleNotify_SettleReason, "SETTLE_REASON_"] },
            { no: 3, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "update_skill_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Uint32Pair_1.Uint32Pair }
        ]);
    }
    create(value) {
        const message = { time: 0, isSingleMode: false, isDungeon: false, score: 0, combo: 0, levelId: 0, reason: 0, isNewRecord: false, galleryId: 0, updateSkillList: [] };
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
                case /* uint32 time */ 5:
                    message.time = reader.uint32();
                    break;
                case /* bool is_single_mode */ 15:
                    message.isSingleMode = reader.bool();
                    break;
                case /* bool is_dungeon */ 2:
                    message.isDungeon = reader.bool();
                    break;
                case /* uint32 score */ 7:
                    message.score = reader.uint32();
                    break;
                case /* uint32 combo */ 12:
                    message.combo = reader.uint32();
                    break;
                case /* uint32 level_id */ 11:
                    message.levelId = reader.uint32();
                    break;
                case /* BrickBreakerSettleNotify.SettleReason reason */ 1:
                    message.reason = reader.int32();
                    break;
                case /* bool is_new_record */ 3:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 gallery_id */ 13:
                    message.galleryId = reader.uint32();
                    break;
                case /* repeated Uint32Pair update_skill_list */ 4:
                    message.updateSkillList.push(Uint32Pair_1.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 time = 5; */
        if (message.time !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.time);
        /* bool is_single_mode = 15; */
        if (message.isSingleMode !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isSingleMode);
        /* bool is_dungeon = 2; */
        if (message.isDungeon !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isDungeon);
        /* uint32 score = 7; */
        if (message.score !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.score);
        /* uint32 combo = 12; */
        if (message.combo !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.combo);
        /* uint32 level_id = 11; */
        if (message.levelId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.levelId);
        /* BrickBreakerSettleNotify.SettleReason reason = 1; */
        if (message.reason !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.reason);
        /* bool is_new_record = 3; */
        if (message.isNewRecord !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 gallery_id = 13; */
        if (message.galleryId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* repeated Uint32Pair update_skill_list = 4; */
        for (let i = 0; i < message.updateSkillList.length; i++)
            Uint32Pair_1.Uint32Pair.internalBinaryWrite(message.updateSkillList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BrickBreakerSettleNotify
 */
exports.BrickBreakerSettleNotify = new BrickBreakerSettleNotify$Type();
