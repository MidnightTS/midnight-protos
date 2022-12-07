// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PBNavMeshPoly.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message PBNavMeshPoly
 */
export interface PBNavMeshPoly {
    /**
     * @generated from protobuf field: int32 area = 14;
     */
    area: number;
    /**
     * @generated from protobuf field: repeated int32 vects = 13;
     */
    vects: number[];
    /**
     * @generated from protobuf field: repeated PBNavMeshPoly.EdgeType edge_types = 5;
     */
    edgeTypes: PBNavMeshPoly_EdgeType[];
}
/**
 * @generated from protobuf enum PBNavMeshPoly.EdgeType
 */
export enum PBNavMeshPoly_EdgeType {
    /**
     * @generated from protobuf enum value: EDGE_TYPE_INNER = 0;
     */
    INNER = 0,
    /**
     * @generated from protobuf enum value: EDGE_TYPE_TILE_BOUND = 1;
     */
    TILE_BOUND = 1,
    /**
     * @generated from protobuf enum value: EDGE_TYPE_TILE_BOUND_UNCONNECT = 2;
     */
    TILE_BOUND_UNCONNECT = 2,
    /**
     * @generated from protobuf enum value: EDGE_TYPE_TILE_BOUND_OVERIDE = 3;
     */
    TILE_BOUND_OVERIDE = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class PBNavMeshPoly$Type extends MessageType<PBNavMeshPoly> {
    constructor() {
        super("PBNavMeshPoly", [
            { no: 14, name: "area", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "vects", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "edge_types", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["PBNavMeshPoly.EdgeType", PBNavMeshPoly_EdgeType, "EDGE_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<PBNavMeshPoly>): PBNavMeshPoly {
        const message = { area: 0, vects: [], edgeTypes: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PBNavMeshPoly>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PBNavMeshPoly): PBNavMeshPoly {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 area */ 14:
                    message.area = reader.int32();
                    break;
                case /* repeated int32 vects */ 13:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.vects.push(reader.int32());
                    else
                        message.vects.push(reader.int32());
                    break;
                case /* repeated PBNavMeshPoly.EdgeType edge_types */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.edgeTypes.push(reader.int32());
                    else
                        message.edgeTypes.push(reader.int32());
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
    internalBinaryWrite(message: PBNavMeshPoly, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 area = 14; */
        if (message.area !== 0)
            writer.tag(14, WireType.Varint).int32(message.area);
        /* repeated int32 vects = 13; */
        if (message.vects.length) {
            writer.tag(13, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.vects.length; i++)
                writer.int32(message.vects[i]);
            writer.join();
        }
        /* repeated PBNavMeshPoly.EdgeType edge_types = 5; */
        if (message.edgeTypes.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.edgeTypes.length; i++)
                writer.int32(message.edgeTypes[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PBNavMeshPoly
 */
export const PBNavMeshPoly = new PBNavMeshPoly$Type();
