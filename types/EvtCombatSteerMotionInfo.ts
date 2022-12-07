// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EvtCombatSteerMotionInfo.proto" (syntax proto3)
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
/**
 * @generated from protobuf message EvtCombatSteerMotionInfo
 */
export interface EvtCombatSteerMotionInfo {
    /**
     * @generated from protobuf field: Vector face_dir = 5;
     */
    faceDir?: Vector;
    /**
     * @generated from protobuf field: Vector pos = 1;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: Vector velocity = 8;
     */
    velocity?: Vector;
    /**
     * @generated from protobuf field: uint32 entity_id = 11;
     */
    entityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EvtCombatSteerMotionInfo$Type extends MessageType<EvtCombatSteerMotionInfo> {
    constructor() {
        super("EvtCombatSteerMotionInfo", [
            { no: 5, name: "face_dir", kind: "message", T: () => Vector },
            { no: 1, name: "pos", kind: "message", T: () => Vector },
            { no: 8, name: "velocity", kind: "message", T: () => Vector },
            { no: 11, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EvtCombatSteerMotionInfo>): EvtCombatSteerMotionInfo {
        const message = { entityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EvtCombatSteerMotionInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EvtCombatSteerMotionInfo): EvtCombatSteerMotionInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector face_dir */ 5:
                    message.faceDir = Vector.internalBinaryRead(reader, reader.uint32(), options, message.faceDir);
                    break;
                case /* Vector pos */ 1:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* Vector velocity */ 8:
                    message.velocity = Vector.internalBinaryRead(reader, reader.uint32(), options, message.velocity);
                    break;
                case /* uint32 entity_id */ 11:
                    message.entityId = reader.uint32();
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
    internalBinaryWrite(message: EvtCombatSteerMotionInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector face_dir = 5; */
        if (message.faceDir)
            Vector.internalBinaryWrite(message.faceDir, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* Vector pos = 1; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* Vector velocity = 8; */
        if (message.velocity)
            Vector.internalBinaryWrite(message.velocity, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 11; */
        if (message.entityId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtCombatSteerMotionInfo
 */
export const EvtCombatSteerMotionInfo = new EvtCombatSteerMotionInfo$Type();
