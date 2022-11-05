// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "MotionInfo.proto" (package "com.midnights.game", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { MotionState } from "./MotionState";
import { Vector } from "./Vector";
/**
 * @generated from protobuf message com.midnights.game.MotionInfo
 */
export interface MotionInfo {
    /**
     * @generated from protobuf field: optional com.midnights.game.Vector pos = 1;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: optional com.midnights.game.Vector rot = 2;
     */
    rot?: Vector;
    /**
     * @generated from protobuf field: optional com.midnights.game.Vector speed = 3;
     */
    speed?: Vector;
    /**
     * @generated from protobuf field: optional com.midnights.game.MotionState state = 4;
     */
    state?: MotionState;
    /**
     * @generated from protobuf field: repeated com.midnights.game.Vector params = 5;
     */
    params: Vector[];
    /**
     * @generated from protobuf field: optional com.midnights.game.Vector ref_pos = 6;
     */
    refPos?: Vector;
    /**
     * @generated from protobuf field: optional uint32 ref_id = 7;
     */
    refId?: number;
    /**
     * @generated from protobuf field: optional uint32 scene_time = 8;
     */
    sceneTime?: number;
    /**
     * @generated from protobuf field: optional uint64 interval_velocity = 9;
     */
    intervalVelocity?: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class MotionInfo$Type extends MessageType<MotionInfo> {
    constructor() {
        super("com.midnights.game.MotionInfo", [
            { no: 1, name: "pos", kind: "message", T: () => Vector },
            { no: 2, name: "rot", kind: "message", T: () => Vector },
            { no: 3, name: "speed", kind: "message", T: () => Vector },
            { no: 4, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.MotionState", MotionState] },
            { no: 5, name: "params", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vector },
            { no: 6, name: "ref_pos", kind: "message", T: () => Vector },
            { no: 7, name: "ref_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "interval_velocity", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<MotionInfo>): MotionInfo {
        const message = { params: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MotionInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MotionInfo): MotionInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 2:
                    message.rot = Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector speed */ 3:
                    message.speed = Vector.internalBinaryRead(reader, reader.uint32(), options, message.speed);
                    break;
                case /* optional com.midnights.game.MotionState state */ 4:
                    message.state = reader.int32();
                    break;
                case /* repeated com.midnights.game.Vector params */ 5:
                    message.params.push(Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.Vector ref_pos */ 6:
                    message.refPos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.refPos);
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MotionInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 2; */
        if (message.rot)
            Vector.internalBinaryWrite(message.rot, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector speed = 3; */
        if (message.speed)
            Vector.internalBinaryWrite(message.speed, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.MotionState state = 4; */
        if (message.state !== undefined)
            writer.tag(4, WireType.Varint).int32(message.state);
        /* repeated com.midnights.game.Vector params = 5; */
        for (let i = 0; i < message.params.length; i++)
            Vector.internalBinaryWrite(message.params[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector ref_pos = 6; */
        if (message.refPos)
            Vector.internalBinaryWrite(message.refPos, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 ref_id = 7; */
        if (message.refId !== undefined)
            writer.tag(7, WireType.Varint).uint32(message.refId);
        /* optional uint32 scene_time = 8; */
        if (message.sceneTime !== undefined)
            writer.tag(8, WireType.Varint).uint32(message.sceneTime);
        /* optional uint64 interval_velocity = 9; */
        if (message.intervalVelocity !== undefined)
            writer.tag(9, WireType.Varint).uint64(message.intervalVelocity);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MotionInfo
 */
export const MotionInfo = new MotionInfo$Type();