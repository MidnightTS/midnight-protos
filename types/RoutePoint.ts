// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RoutePoint.proto" (syntax proto3)
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
import { MathQuaternion } from "./MathQuaternion";
import { Vector } from "./Vector";
/**
 * @generated from protobuf message RoutePoint
 */
export interface RoutePoint {
    /**
     * @generated from protobuf field: Vector position = 1;
     */
    position?: Vector;
    /**
     * @generated from protobuf field: float arrive_range = 2;
     */
    arriveRange: number;
    /**
     * @generated from protobuf field: bool has_reach_event = 3;
     */
    hasReachEvent: boolean;
    /**
     * @generated from protobuf oneof: move_params
     */
    moveParams: {
        oneofKind: "velocity";
        /**
         * @generated from protobuf field: float velocity = 11;
         */
        velocity: number;
    } | {
        oneofKind: "time";
        /**
         * @generated from protobuf field: float time = 12;
         */
        time: number;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf oneof: rotate_params
     */
    rotateParams: {
        oneofKind: "rotation";
        /**
         * @generated from protobuf field: Vector rotation = 21;
         */
        rotation: Vector;
    } | {
        oneofKind: "rotationSpeed";
        /**
         * @generated from protobuf field: MathQuaternion rotation_speed = 22;
         */
        rotationSpeed: MathQuaternion;
    } | {
        oneofKind: "axisSpeed";
        /**
         * @generated from protobuf field: MathQuaternion axis_speed = 23;
         */
        axisSpeed: MathQuaternion;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class RoutePoint$Type extends MessageType<RoutePoint> {
    constructor() {
        super("RoutePoint", [
            { no: 1, name: "position", kind: "message", T: () => Vector },
            { no: 2, name: "arrive_range", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "has_reach_event", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "velocity", kind: "scalar", oneof: "moveParams", T: 2 /*ScalarType.FLOAT*/ },
            { no: 12, name: "time", kind: "scalar", oneof: "moveParams", T: 2 /*ScalarType.FLOAT*/ },
            { no: 21, name: "rotation", kind: "message", oneof: "rotateParams", T: () => Vector },
            { no: 22, name: "rotation_speed", kind: "message", oneof: "rotateParams", T: () => MathQuaternion },
            { no: 23, name: "axis_speed", kind: "message", oneof: "rotateParams", T: () => MathQuaternion }
        ]);
    }
    create(value?: PartialMessage<RoutePoint>): RoutePoint {
        const message = { arriveRange: 0, hasReachEvent: false, moveParams: { oneofKind: undefined }, rotateParams: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RoutePoint>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RoutePoint): RoutePoint {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector position */ 1:
                    message.position = Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* float arrive_range */ 2:
                    message.arriveRange = reader.float();
                    break;
                case /* bool has_reach_event */ 3:
                    message.hasReachEvent = reader.bool();
                    break;
                case /* float velocity */ 11:
                    message.moveParams = {
                        oneofKind: "velocity",
                        velocity: reader.float()
                    };
                    break;
                case /* float time */ 12:
                    message.moveParams = {
                        oneofKind: "time",
                        time: reader.float()
                    };
                    break;
                case /* Vector rotation */ 21:
                    message.rotateParams = {
                        oneofKind: "rotation",
                        rotation: Vector.internalBinaryRead(reader, reader.uint32(), options, (message.rotateParams as any).rotation)
                    };
                    break;
                case /* MathQuaternion rotation_speed */ 22:
                    message.rotateParams = {
                        oneofKind: "rotationSpeed",
                        rotationSpeed: MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, (message.rotateParams as any).rotationSpeed)
                    };
                    break;
                case /* MathQuaternion axis_speed */ 23:
                    message.rotateParams = {
                        oneofKind: "axisSpeed",
                        axisSpeed: MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, (message.rotateParams as any).axisSpeed)
                    };
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
    internalBinaryWrite(message: RoutePoint, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector position = 1; */
        if (message.position)
            Vector.internalBinaryWrite(message.position, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* float arrive_range = 2; */
        if (message.arriveRange !== 0)
            writer.tag(2, WireType.Bit32).float(message.arriveRange);
        /* bool has_reach_event = 3; */
        if (message.hasReachEvent !== false)
            writer.tag(3, WireType.Varint).bool(message.hasReachEvent);
        /* float velocity = 11; */
        if (message.moveParams.oneofKind === "velocity")
            writer.tag(11, WireType.Bit32).float(message.moveParams.velocity);
        /* float time = 12; */
        if (message.moveParams.oneofKind === "time")
            writer.tag(12, WireType.Bit32).float(message.moveParams.time);
        /* Vector rotation = 21; */
        if (message.rotateParams.oneofKind === "rotation")
            Vector.internalBinaryWrite(message.rotateParams.rotation, writer.tag(21, WireType.LengthDelimited).fork(), options).join();
        /* MathQuaternion rotation_speed = 22; */
        if (message.rotateParams.oneofKind === "rotationSpeed")
            MathQuaternion.internalBinaryWrite(message.rotateParams.rotationSpeed, writer.tag(22, WireType.LengthDelimited).fork(), options).join();
        /* MathQuaternion axis_speed = 23; */
        if (message.rotateParams.oneofKind === "axisSpeed")
            MathQuaternion.internalBinaryWrite(message.rotateParams.axisSpeed, writer.tag(23, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoutePoint
 */
export const RoutePoint = new RoutePoint$Type();
