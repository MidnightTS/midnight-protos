"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotionInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MotionState_1 = require("./MotionState");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class MotionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MotionInfo", [
            { no: 1, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 2, name: "rot", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "speed", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.MotionState", MotionState_1.MotionState] },
            { no: 5, name: "params", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vector_1.Vector },
            { no: 6, name: "ref_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 7, name: "ref_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "interval_velocity", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { params: [] };
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
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 2:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector speed */ 3:
                    message.speed = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.speed);
                    break;
                case /* optional com.midnights.game.MotionState state */ 4:
                    message.state = reader.int32();
                    break;
                case /* repeated com.midnights.game.Vector params */ 5:
                    message.params.push(Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.Vector ref_pos */ 6:
                    message.refPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.refPos);
                    break;
                case /* optional uint32 ref_id */ 7:
                    message.refId = reader.uint32();
                    break;
                case /* optional uint32 scene_time */ 8:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint64 interval_velocity */ 9:
                    message.intervalVelocity = reader.uint64().toBigInt();
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
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 2; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector speed = 3; */
        if (message.speed)
            Vector_1.Vector.internalBinaryWrite(message.speed, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.MotionState state = 4; */
        if (message.state !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.state);
        /* repeated com.midnights.game.Vector params = 5; */
        for (let i = 0; i < message.params.length; i++)
            Vector_1.Vector.internalBinaryWrite(message.params[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector ref_pos = 6; */
        if (message.refPos)
            Vector_1.Vector.internalBinaryWrite(message.refPos, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 ref_id = 7; */
        if (message.refId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.refId);
        /* optional uint32 scene_time = 8; */
        if (message.sceneTime !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.sceneTime);
        /* optional uint64 interval_velocity = 9; */
        if (message.intervalVelocity !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.intervalVelocity);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MotionInfo
 */
exports.MotionInfo = new MotionInfo$Type();
