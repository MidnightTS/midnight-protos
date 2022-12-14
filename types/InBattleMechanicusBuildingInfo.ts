// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "InBattleMechanicusBuildingInfo.proto" (syntax proto3)
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
/**
 * @generated from protobuf message InBattleMechanicusBuildingInfo
 */
export interface InBattleMechanicusBuildingInfo {
    /**
     * @generated from protobuf field: uint32 refund_points = 8;
     */
    refundPoints: number;
    /**
     * @generated from protobuf field: uint32 cost_points = 15;
     */
    costPoints: number;
    /**
     * @generated from protobuf field: uint32 level = 13;
     */
    level: number;
    /**
     * @generated from protobuf field: uint32 building_id = 3;
     */
    buildingId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusBuildingInfo$Type extends MessageType<InBattleMechanicusBuildingInfo> {
    constructor() {
        super("InBattleMechanicusBuildingInfo", [
            { no: 8, name: "refund_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cost_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "building_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<InBattleMechanicusBuildingInfo>): InBattleMechanicusBuildingInfo {
        const message = { refundPoints: 0, costPoints: 0, level: 0, buildingId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InBattleMechanicusBuildingInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InBattleMechanicusBuildingInfo): InBattleMechanicusBuildingInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 refund_points */ 8:
                    message.refundPoints = reader.uint32();
                    break;
                case /* uint32 cost_points */ 15:
                    message.costPoints = reader.uint32();
                    break;
                case /* uint32 level */ 13:
                    message.level = reader.uint32();
                    break;
                case /* uint32 building_id */ 3:
                    message.buildingId = reader.uint32();
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
    internalBinaryWrite(message: InBattleMechanicusBuildingInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 refund_points = 8; */
        if (message.refundPoints !== 0)
            writer.tag(8, WireType.Varint).uint32(message.refundPoints);
        /* uint32 cost_points = 15; */
        if (message.costPoints !== 0)
            writer.tag(15, WireType.Varint).uint32(message.costPoints);
        /* uint32 level = 13; */
        if (message.level !== 0)
            writer.tag(13, WireType.Varint).uint32(message.level);
        /* uint32 building_id = 3; */
        if (message.buildingId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.buildingId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusBuildingInfo
 */
export const InBattleMechanicusBuildingInfo = new InBattleMechanicusBuildingInfo$Type();
