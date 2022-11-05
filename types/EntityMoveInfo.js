"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityMoveInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MotionInfo_1 = require("./MotionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EntityMoveInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityMoveInfo", [
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "motion_info", kind: "message", T: () => MotionInfo_1.MotionInfo },
            { no: 3, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "reliable_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_reliable", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MotionInfo motion_info */ 2:
                    message.motionInfo = MotionInfo_1.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* optional uint32 scene_time */ 3:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint32 reliable_seq */ 4:
                    message.reliableSeq = reader.uint32();
                    break;
                case /* optional bool is_reliable */ 5:
                    message.isReliable = reader.bool();
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
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.MotionInfo motion_info = 2; */
        if (message.motionInfo)
            MotionInfo_1.MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_time = 3; */
        if (message.sceneTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.sceneTime);
        /* optional uint32 reliable_seq = 4; */
        if (message.reliableSeq !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.reliableSeq);
        /* optional bool is_reliable = 5; */
        if (message.isReliable !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isReliable);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityMoveInfo
 */
exports.EntityMoveInfo = new EntityMoveInfo$Type();
