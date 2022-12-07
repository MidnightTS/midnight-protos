"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakoutPhysicalObject = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BreakoutBrickInfo_1 = require("./BreakoutBrickInfo");
const BreakoutPhysicalObjectModifier_1 = require("./BreakoutPhysicalObjectModifier");
const BreakoutVector2_1 = require("./BreakoutVector2");
// @generated message type with reflection information, may provide speed optimized methods
class BreakoutPhysicalObject$Type extends runtime_5.MessageType {
    constructor() {
        super("BreakoutPhysicalObject", [
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_active", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "pos", kind: "message", T: () => BreakoutVector2_1.BreakoutVector2 },
            { no: 5, name: "move_dir", kind: "message", T: () => BreakoutVector2_1.BreakoutVector2 },
            { no: 6, name: "speed", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "init_peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "element_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "element_reaction_buff", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "modifier_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutPhysicalObjectModifier_1.BreakoutPhysicalObjectModifier },
            { no: 12, name: "total_rotation", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutBrickInfo_1.BreakoutBrickInfo },
            { no: 14, name: "last_hit_peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "speed_increase_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "offset", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { id: 0, index: 0, isActive: false, speed: 0, initPeerId: 0, state: 0, elementType: 0, elementReactionBuff: 0, modifierList: [], totalRotation: 0, infoList: [], lastHitPeerId: 0, speedIncreaseCount: 0, offset: 0 };
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
                case /* uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* uint32 index */ 2:
                    message.index = reader.uint32();
                    break;
                case /* bool is_active */ 3:
                    message.isActive = reader.bool();
                    break;
                case /* BreakoutVector2 pos */ 4:
                    message.pos = BreakoutVector2_1.BreakoutVector2.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* BreakoutVector2 move_dir */ 5:
                    message.moveDir = BreakoutVector2_1.BreakoutVector2.internalBinaryRead(reader, reader.uint32(), options, message.moveDir);
                    break;
                case /* int32 speed */ 6:
                    message.speed = reader.int32();
                    break;
                case /* uint32 init_peer_id */ 7:
                    message.initPeerId = reader.uint32();
                    break;
                case /* uint32 state */ 8:
                    message.state = reader.uint32();
                    break;
                case /* uint32 element_type */ 9:
                    message.elementType = reader.uint32();
                    break;
                case /* uint32 element_reaction_buff */ 10:
                    message.elementReactionBuff = reader.uint32();
                    break;
                case /* repeated BreakoutPhysicalObjectModifier modifier_list */ 11:
                    message.modifierList.push(BreakoutPhysicalObjectModifier_1.BreakoutPhysicalObjectModifier.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 total_rotation */ 12:
                    message.totalRotation = reader.int32();
                    break;
                case /* repeated BreakoutBrickInfo info_list */ 13:
                    message.infoList.push(BreakoutBrickInfo_1.BreakoutBrickInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 last_hit_peer_id */ 14:
                    message.lastHitPeerId = reader.uint32();
                    break;
                case /* uint32 speed_increase_count */ 15:
                    message.speedIncreaseCount = reader.uint32();
                    break;
                case /* int32 offset */ 16:
                    message.offset = reader.int32();
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
        /* uint32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.id);
        /* uint32 index = 2; */
        if (message.index !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.index);
        /* bool is_active = 3; */
        if (message.isActive !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isActive);
        /* BreakoutVector2 pos = 4; */
        if (message.pos)
            BreakoutVector2_1.BreakoutVector2.internalBinaryWrite(message.pos, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* BreakoutVector2 move_dir = 5; */
        if (message.moveDir)
            BreakoutVector2_1.BreakoutVector2.internalBinaryWrite(message.moveDir, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 speed = 6; */
        if (message.speed !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.speed);
        /* uint32 init_peer_id = 7; */
        if (message.initPeerId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.initPeerId);
        /* uint32 state = 8; */
        if (message.state !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.state);
        /* uint32 element_type = 9; */
        if (message.elementType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.elementType);
        /* uint32 element_reaction_buff = 10; */
        if (message.elementReactionBuff !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.elementReactionBuff);
        /* repeated BreakoutPhysicalObjectModifier modifier_list = 11; */
        for (let i = 0; i < message.modifierList.length; i++)
            BreakoutPhysicalObjectModifier_1.BreakoutPhysicalObjectModifier.internalBinaryWrite(message.modifierList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 total_rotation = 12; */
        if (message.totalRotation !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.totalRotation);
        /* repeated BreakoutBrickInfo info_list = 13; */
        for (let i = 0; i < message.infoList.length; i++)
            BreakoutBrickInfo_1.BreakoutBrickInfo.internalBinaryWrite(message.infoList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 last_hit_peer_id = 14; */
        if (message.lastHitPeerId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.lastHitPeerId);
        /* uint32 speed_increase_count = 15; */
        if (message.speedIncreaseCount !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.speedIncreaseCount);
        /* int32 offset = 16; */
        if (message.offset !== 0)
            writer.tag(16, runtime_1.WireType.Varint).int32(message.offset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BreakoutPhysicalObject
 */
exports.BreakoutPhysicalObject = new BreakoutPhysicalObject$Type();
