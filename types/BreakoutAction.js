"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakoutAction = exports.BreakoutAction_BreakoutActionType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BreakoutVector2_1 = require("./BreakoutVector2");
/**
 * @generated from protobuf enum BreakoutAction.BreakoutActionType
 */
var BreakoutAction_BreakoutActionType;
(function (BreakoutAction_BreakoutActionType) {
    /**
     * @generated from protobuf enum value: BREAKOUT_ACTION_TYPE_NONE = 0;
     */
    BreakoutAction_BreakoutActionType[BreakoutAction_BreakoutActionType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: BREAKOUT_ACTION_TYPE_LAUNCH_BALL = 1;
     */
    BreakoutAction_BreakoutActionType[BreakoutAction_BreakoutActionType["LAUNCH_BALL"] = 1] = "LAUNCH_BALL";
    /**
     * @generated from protobuf enum value: BREAKOUT_ACTION_TYPE_DESTROY_BALL = 2;
     */
    BreakoutAction_BreakoutActionType[BreakoutAction_BreakoutActionType["DESTROY_BALL"] = 2] = "DESTROY_BALL";
    /**
     * @generated from protobuf enum value: BREAKOUT_ACTION_TYPE_FALLING_OBJECT = 3;
     */
    BreakoutAction_BreakoutActionType[BreakoutAction_BreakoutActionType["FALLING_OBJECT"] = 3] = "FALLING_OBJECT";
    /**
     * @generated from protobuf enum value: BREAKOUT_ACTION_TYPE_MISSILE = 4;
     */
    BreakoutAction_BreakoutActionType[BreakoutAction_BreakoutActionType["MISSILE"] = 4] = "MISSILE";
})(BreakoutAction_BreakoutActionType = exports.BreakoutAction_BreakoutActionType || (exports.BreakoutAction_BreakoutActionType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class BreakoutAction$Type extends runtime_5.MessageType {
    constructor() {
        super("BreakoutAction", [
            { no: 1, name: "action_type", kind: "enum", T: () => ["BreakoutAction.BreakoutActionType", BreakoutAction_BreakoutActionType, "BREAKOUT_ACTION_TYPE_"] },
            { no: 2, name: "client_game_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "server_game_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "is_failed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "pre_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "new_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "pos", kind: "message", T: () => BreakoutVector2_1.BreakoutVector2 },
            { no: 8, name: "move_dir", kind: "message", T: () => BreakoutVector2_1.BreakoutVector2 },
            { no: 9, name: "speed", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "element_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "element_reaction_buff", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "speed_increase_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "has_extra_ball", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "extra_ball_dir", kind: "message", T: () => BreakoutVector2_1.BreakoutVector2 },
            { no: 16, name: "extra_ball_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "offset", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 18, name: "Unk3300_AIEBGJHBOHL", kind: "scalar", jsonName: "Unk3300AIEBGJHBOHL", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { actionType: 0, clientGameTime: 0n, serverGameTime: 0n, isFailed: false, preIndex: 0, newIndex: 0, speed: 0, peerId: 0, elementType: 0, elementReactionBuff: 0, speedIncreaseCount: 0, hasExtraBall: false, extraBallIndex: 0, offset: 0, unk3300AIEBGJHBOHL: 0n };
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
                case /* BreakoutAction.BreakoutActionType action_type */ 1:
                    message.actionType = reader.int32();
                    break;
                case /* uint64 client_game_time */ 2:
                    message.clientGameTime = reader.uint64().toBigInt();
                    break;
                case /* uint64 server_game_time */ 3:
                    message.serverGameTime = reader.uint64().toBigInt();
                    break;
                case /* bool is_failed */ 4:
                    message.isFailed = reader.bool();
                    break;
                case /* uint32 pre_index */ 5:
                    message.preIndex = reader.uint32();
                    break;
                case /* uint32 new_index */ 6:
                    message.newIndex = reader.uint32();
                    break;
                case /* BreakoutVector2 pos */ 7:
                    message.pos = BreakoutVector2_1.BreakoutVector2.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* BreakoutVector2 move_dir */ 8:
                    message.moveDir = BreakoutVector2_1.BreakoutVector2.internalBinaryRead(reader, reader.uint32(), options, message.moveDir);
                    break;
                case /* int32 speed */ 9:
                    message.speed = reader.int32();
                    break;
                case /* uint32 peer_id */ 10:
                    message.peerId = reader.uint32();
                    break;
                case /* uint32 element_type */ 11:
                    message.elementType = reader.uint32();
                    break;
                case /* uint32 element_reaction_buff */ 12:
                    message.elementReactionBuff = reader.uint32();
                    break;
                case /* uint32 speed_increase_count */ 13:
                    message.speedIncreaseCount = reader.uint32();
                    break;
                case /* bool has_extra_ball */ 14:
                    message.hasExtraBall = reader.bool();
                    break;
                case /* BreakoutVector2 extra_ball_dir */ 15:
                    message.extraBallDir = BreakoutVector2_1.BreakoutVector2.internalBinaryRead(reader, reader.uint32(), options, message.extraBallDir);
                    break;
                case /* uint32 extra_ball_index */ 16:
                    message.extraBallIndex = reader.uint32();
                    break;
                case /* int32 offset */ 17:
                    message.offset = reader.int32();
                    break;
                case /* uint64 Unk3300_AIEBGJHBOHL = 18 [json_name = "Unk3300AIEBGJHBOHL"];*/ 18:
                    message.unk3300AIEBGJHBOHL = reader.uint64().toBigInt();
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
        /* BreakoutAction.BreakoutActionType action_type = 1; */
        if (message.actionType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.actionType);
        /* uint64 client_game_time = 2; */
        if (message.clientGameTime !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.clientGameTime);
        /* uint64 server_game_time = 3; */
        if (message.serverGameTime !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.serverGameTime);
        /* bool is_failed = 4; */
        if (message.isFailed !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isFailed);
        /* uint32 pre_index = 5; */
        if (message.preIndex !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.preIndex);
        /* uint32 new_index = 6; */
        if (message.newIndex !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.newIndex);
        /* BreakoutVector2 pos = 7; */
        if (message.pos)
            BreakoutVector2_1.BreakoutVector2.internalBinaryWrite(message.pos, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* BreakoutVector2 move_dir = 8; */
        if (message.moveDir)
            BreakoutVector2_1.BreakoutVector2.internalBinaryWrite(message.moveDir, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 speed = 9; */
        if (message.speed !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.speed);
        /* uint32 peer_id = 10; */
        if (message.peerId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.peerId);
        /* uint32 element_type = 11; */
        if (message.elementType !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.elementType);
        /* uint32 element_reaction_buff = 12; */
        if (message.elementReactionBuff !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.elementReactionBuff);
        /* uint32 speed_increase_count = 13; */
        if (message.speedIncreaseCount !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.speedIncreaseCount);
        /* bool has_extra_ball = 14; */
        if (message.hasExtraBall !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.hasExtraBall);
        /* BreakoutVector2 extra_ball_dir = 15; */
        if (message.extraBallDir)
            BreakoutVector2_1.BreakoutVector2.internalBinaryWrite(message.extraBallDir, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 extra_ball_index = 16; */
        if (message.extraBallIndex !== 0)
            writer.tag(16, runtime_1.WireType.Varint).uint32(message.extraBallIndex);
        /* int32 offset = 17; */
        if (message.offset !== 0)
            writer.tag(17, runtime_1.WireType.Varint).int32(message.offset);
        /* uint64 Unk3300_AIEBGJHBOHL = 18 [json_name = "Unk3300AIEBGJHBOHL"]; */
        if (message.unk3300AIEBGJHBOHL !== 0n)
            writer.tag(18, runtime_1.WireType.Varint).uint64(message.unk3300AIEBGJHBOHL);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BreakoutAction
 */
exports.BreakoutAction = new BreakoutAction$Type();
