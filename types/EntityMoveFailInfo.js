"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityMoveFailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MotionInfo_1 = require("./MotionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EntityMoveFailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EntityMoveFailInfo", [
            { no: 8, name: "scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "reliable_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "fail_motion", kind: "message", T: () => MotionInfo_1.MotionInfo },
            { no: 5, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneTime: 0, retcode: 0, reliableSeq: 0, entityId: 0 };
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
                case /* uint32 scene_time */ 8:
                    message.sceneTime = reader.uint32();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 reliable_seq */ 2:
                    message.reliableSeq = reader.uint32();
                    break;
                case /* MotionInfo fail_motion */ 4:
                    message.failMotion = MotionInfo_1.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.failMotion);
                    break;
                case /* uint32 entity_id */ 5:
                    message.entityId = reader.uint32();
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
        /* uint32 scene_time = 8; */
        if (message.sceneTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.sceneTime);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 reliable_seq = 2; */
        if (message.reliableSeq !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.reliableSeq);
        /* MotionInfo fail_motion = 4; */
        if (message.failMotion)
            MotionInfo_1.MotionInfo.internalBinaryWrite(message.failMotion, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 5; */
        if (message.entityId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityMoveFailInfo
 */
exports.EntityMoveFailInfo = new EntityMoveFailInfo$Type();
