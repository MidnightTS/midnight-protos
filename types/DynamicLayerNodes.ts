// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "DynamicLayerNodes.proto" (syntax proto3)
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
import { DynamicSVONode } from "./DynamicSVONode";
/**
 * @generated from protobuf message DynamicLayerNodes
 */
export interface DynamicLayerNodes {
    /**
     * @generated from protobuf field: int32 level = 7;
     */
    level: number;
    /**
     * @generated from protobuf field: repeated DynamicSVONode nodes = 4;
     */
    nodes: DynamicSVONode[];
}
// @generated message type with reflection information, may provide speed optimized methods
class DynamicLayerNodes$Type extends MessageType<DynamicLayerNodes> {
    constructor() {
        super("DynamicLayerNodes", [
            { no: 7, name: "level", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "nodes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DynamicSVONode }
        ]);
    }
    create(value?: PartialMessage<DynamicLayerNodes>): DynamicLayerNodes {
        const message = { level: 0, nodes: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DynamicLayerNodes>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DynamicLayerNodes): DynamicLayerNodes {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 level */ 7:
                    message.level = reader.int32();
                    break;
                case /* repeated DynamicSVONode nodes */ 4:
                    message.nodes.push(DynamicSVONode.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: DynamicLayerNodes, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 level = 7; */
        if (message.level !== 0)
            writer.tag(7, WireType.Varint).int32(message.level);
        /* repeated DynamicSVONode nodes = 4; */
        for (let i = 0; i < message.nodes.length; i++)
            DynamicSVONode.internalBinaryWrite(message.nodes[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DynamicLayerNodes
 */
export const DynamicLayerNodes = new DynamicLayerNodes$Type();
