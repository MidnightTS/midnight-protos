// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HitCollision.proto" (syntax proto3)
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
import { Vector } from "./Vector";
import { HitColliderType } from "./HitColliderType";
/**
 * @generated from protobuf message HitCollision
 */
export interface HitCollision {
    /**
     * @generated from protobuf field: int32 hit_box_index = 8;
     */
    hitBoxIndex: number;
    /**
     * @generated from protobuf field: HitColliderType hit_collider_type = 5;
     */
    hitColliderType: HitColliderType;
    /**
     * @generated from protobuf field: float attackee_hit_entity_angle = 7;
     */
    attackeeHitEntityAngle: number;
    /**
     * @generated from protobuf field: Vector hit_dir = 3;
     */
    hitDir?: Vector;
    /**
     * @generated from protobuf field: Vector hit_point = 14;
     */
    hitPoint?: Vector;
    /**
     * @generated from protobuf field: float attackee_hit_force_angle = 10;
     */
    attackeeHitForceAngle: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HitCollision$Type extends MessageType<HitCollision> {
    constructor() {
        super("HitCollision", [
            { no: 8, name: "hit_box_index", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "hit_collider_type", kind: "enum", T: () => ["HitColliderType", HitColliderType, "HIT_COLLIDER_TYPE_"] },
            { no: 7, name: "attackee_hit_entity_angle", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "hit_dir", kind: "message", T: () => Vector },
            { no: 14, name: "hit_point", kind: "message", T: () => Vector },
            { no: 10, name: "attackee_hit_force_angle", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<HitCollision>): HitCollision {
        const message = { hitBoxIndex: 0, hitColliderType: 0, attackeeHitEntityAngle: 0, attackeeHitForceAngle: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HitCollision>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HitCollision): HitCollision {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 hit_box_index */ 8:
                    message.hitBoxIndex = reader.int32();
                    break;
                case /* HitColliderType hit_collider_type */ 5:
                    message.hitColliderType = reader.int32();
                    break;
                case /* float attackee_hit_entity_angle */ 7:
                    message.attackeeHitEntityAngle = reader.float();
                    break;
                case /* Vector hit_dir */ 3:
                    message.hitDir = Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitDir);
                    break;
                case /* Vector hit_point */ 14:
                    message.hitPoint = Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitPoint);
                    break;
                case /* float attackee_hit_force_angle */ 10:
                    message.attackeeHitForceAngle = reader.float();
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
    internalBinaryWrite(message: HitCollision, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 hit_box_index = 8; */
        if (message.hitBoxIndex !== 0)
            writer.tag(8, WireType.Varint).int32(message.hitBoxIndex);
        /* HitColliderType hit_collider_type = 5; */
        if (message.hitColliderType !== 0)
            writer.tag(5, WireType.Varint).int32(message.hitColliderType);
        /* float attackee_hit_entity_angle = 7; */
        if (message.attackeeHitEntityAngle !== 0)
            writer.tag(7, WireType.Bit32).float(message.attackeeHitEntityAngle);
        /* Vector hit_dir = 3; */
        if (message.hitDir)
            Vector.internalBinaryWrite(message.hitDir, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* Vector hit_point = 14; */
        if (message.hitPoint)
            Vector.internalBinaryWrite(message.hitPoint, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* float attackee_hit_force_angle = 10; */
        if (message.attackeeHitForceAngle !== 0)
            writer.tag(10, WireType.Bit32).float(message.attackeeHitForceAngle);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HitCollision
 */
export const HitCollision = new HitCollision$Type();
