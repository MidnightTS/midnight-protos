"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakoutPhysicalObjectModifier = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BreakoutPhysicalObjectModifier$Type extends runtime_5.MessageType {
    constructor() {
        super("BreakoutPhysicalObjectModifier", [
            { no: 1, name: "type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param1", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "param2", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "param3", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "param4", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "param5", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "param6", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "bool1", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "duration", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "end_time", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "skill_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "choose_player_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { type: 0, id: 0, param1: 0, param2: 0, param3: 0, param4: 0, param5: 0, param6: 0, bool1: false, duration: 0, endTime: 0, combo: 0, peerId: 0, skillType: 0, level: 0, choosePlayerCount: 0 };
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
                case /* uint32 type */ 1:
                    message.type = reader.uint32();
                    break;
                case /* uint32 id */ 2:
                    message.id = reader.uint32();
                    break;
                case /* int32 param1 */ 3:
                    message.param1 = reader.int32();
                    break;
                case /* int32 param2 */ 4:
                    message.param2 = reader.int32();
                    break;
                case /* int32 param3 */ 5:
                    message.param3 = reader.int32();
                    break;
                case /* int32 param4 */ 6:
                    message.param4 = reader.int32();
                    break;
                case /* int32 param5 */ 7:
                    message.param5 = reader.int32();
                    break;
                case /* int32 param6 */ 8:
                    message.param6 = reader.int32();
                    break;
                case /* bool bool1 */ 9:
                    message.bool1 = reader.bool();
                    break;
                case /* int32 duration */ 10:
                    message.duration = reader.int32();
                    break;
                case /* int32 end_time */ 11:
                    message.endTime = reader.int32();
                    break;
                case /* uint32 combo */ 12:
                    message.combo = reader.uint32();
                    break;
                case /* uint32 peer_id */ 13:
                    message.peerId = reader.uint32();
                    break;
                case /* uint32 skill_type */ 14:
                    message.skillType = reader.uint32();
                    break;
                case /* uint32 level */ 15:
                    message.level = reader.uint32();
                    break;
                case /* uint32 choose_player_count */ 16:
                    message.choosePlayerCount = reader.uint32();
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
        /* uint32 type = 1; */
        if (message.type !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.type);
        /* uint32 id = 2; */
        if (message.id !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.id);
        /* int32 param1 = 3; */
        if (message.param1 !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.param1);
        /* int32 param2 = 4; */
        if (message.param2 !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.param2);
        /* int32 param3 = 5; */
        if (message.param3 !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.param3);
        /* int32 param4 = 6; */
        if (message.param4 !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.param4);
        /* int32 param5 = 7; */
        if (message.param5 !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.param5);
        /* int32 param6 = 8; */
        if (message.param6 !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.param6);
        /* bool bool1 = 9; */
        if (message.bool1 !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.bool1);
        /* int32 duration = 10; */
        if (message.duration !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.duration);
        /* int32 end_time = 11; */
        if (message.endTime !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.endTime);
        /* uint32 combo = 12; */
        if (message.combo !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.combo);
        /* uint32 peer_id = 13; */
        if (message.peerId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.peerId);
        /* uint32 skill_type = 14; */
        if (message.skillType !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.skillType);
        /* uint32 level = 15; */
        if (message.level !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.level);
        /* uint32 choose_player_count = 16; */
        if (message.choosePlayerCount !== 0)
            writer.tag(16, runtime_1.WireType.Varint).uint32(message.choosePlayerCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BreakoutPhysicalObjectModifier
 */
exports.BreakoutPhysicalObjectModifier = new BreakoutPhysicalObjectModifier$Type();
