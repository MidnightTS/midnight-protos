// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MotionInfo.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
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
 * @generated from protobuf message MotionInfo
 */
export interface MotionInfo {
    /**
     * @generated from protobuf field: Vector pos = 1;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: Vector rot = 2;
     */
    rot?: Vector;
    /**
     * @generated from protobuf field: Vector speed = 3;
     */
    speed?: Vector;
    /**
     * @generated from protobuf field: MotionState state = 4;
     */
    state: MotionState;
    /**
     * @generated from protobuf field: repeated Vector params = 5;
     */
    params: Vector[];
    /**
     * @generated from protobuf field: Vector ref_pos = 6;
     */
    refPos?: Vector;
    /**
     * @generated from protobuf field: uint32 ref_id = 7;
     */
    refId: number;
    /**
     * @generated from protobuf field: uint32 scene_time = 8;
     */
    sceneTime: number;
    /**
     * @generated from protobuf field: uint64 interval_velocity = 9;
     */
    intervalVelocity: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class MotionInfo$Type extends MessageType<MotionInfo> {
    constructor() {
        super("MotionInfo", [
            { no: 1, name: "pos", kind: "message", T: () => Vector },
            { no: 2, name: "rot", kind: "message", T: () => Vector },
            { no: 3, name: "speed", kind: "message", T: () => Vector },
            { no: 4, name: "state", kind: "enum", T: () => ["MotionState", MotionState, "MOTION_STATE_"] },
            { no: 5, name: "params", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vector },
            { no: 6, name: "ref_pos", kind: "message", T: () => Vector },
            { no: 7, name: "ref_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "interval_velocity", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<MotionInfo>): MotionInfo {
        const message = { state: 0, params: [], refId: 0, sceneTime: 0, intervalVelocity: 0n };
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
                case /* Vector pos */ 1:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* Vector rot */ 2:
                    message.rot = Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* Vector speed */ 3:
                    message.speed = Vector.internalBinaryRead(reader, reader.uint32(), options, message.speed);
                    break;
                case /* MotionState state */ 4:
                    message.state = reader.int32();
                    break;
                case /* repeated Vector params */ 5:
                    message.params.push(Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* Vector ref_pos */ 6:
                    message.refPos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.refPos);
                    break;
                case /* uint32 ref_id */ 7:
                    message.refId = reader.uint32();
                    break;
                case /* uint32 scene_time */ 8:
                    message.sceneTime = reader.uint32();
                    break;
                case /* uint64 interval_velocity */ 9:
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
        /* Vector pos = 1; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* Vector rot = 2; */
        if (message.rot)
            Vector.internalBinaryWrite(message.rot, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* Vector speed = 3; */
        if (message.speed)
            Vector.internalBinaryWrite(message.speed, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* MotionState state = 4; */
        if (message.state !== 0)
            writer.tag(4, WireType.Varint).int32(message.state);
        /* repeated Vector params = 5; */
        for (let i = 0; i < message.params.length; i++)
            Vector.internalBinaryWrite(message.params[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* Vector ref_pos = 6; */
        if (message.refPos)
            Vector.internalBinaryWrite(message.refPos, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* uint32 ref_id = 7; */
        if (message.refId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.refId);
        /* uint32 scene_time = 8; */
        if (message.sceneTime !== 0)
            writer.tag(8, WireType.Varint).uint32(message.sceneTime);
        /* uint64 interval_velocity = 9; */
        if (message.intervalVelocity !== 0n)
            writer.tag(9, WireType.Varint).uint64(message.intervalVelocity);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MotionInfo
 */
export const MotionInfo = new MotionInfo$Type();
