// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FoundationRsp.proto" (syntax proto3)
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
import { FoundationOpType } from "./FoundationOpType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 890;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message FoundationRsp
 */
export interface FoundationRsp {
    /**
     * @generated from protobuf field: int32 retcode = 15;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 building_id = 10;
     */
    buildingId: number;
    /**
     * @generated from protobuf field: FoundationOpType op_type = 14;
     */
    opType: FoundationOpType;
    /**
     * @generated from protobuf field: uint32 gadget_entity_id = 2;
     */
    gadgetEntityId: number;
    /**
     * @generated from protobuf field: uint32 point_config_id = 6;
     */
    pointConfigId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FoundationRsp$Type extends MessageType<FoundationRsp> {
    constructor() {
        super("FoundationRsp", [
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "building_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "op_type", kind: "enum", T: () => ["FoundationOpType", FoundationOpType, "FOUNDATION_OP_TYPE_"] },
            { no: 2, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "point_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FoundationRsp>): FoundationRsp {
        const message = { retcode: 0, buildingId: 0, opType: 0, gadgetEntityId: 0, pointConfigId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FoundationRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FoundationRsp): FoundationRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 building_id */ 10:
                    message.buildingId = reader.uint32();
                    break;
                case /* FoundationOpType op_type */ 14:
                    message.opType = reader.int32();
                    break;
                case /* uint32 gadget_entity_id */ 2:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 point_config_id */ 6:
                    message.pointConfigId = reader.uint32();
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
    internalBinaryWrite(message: FoundationRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, WireType.Varint).int32(message.retcode);
        /* uint32 building_id = 10; */
        if (message.buildingId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.buildingId);
        /* FoundationOpType op_type = 14; */
        if (message.opType !== 0)
            writer.tag(14, WireType.Varint).int32(message.opType);
        /* uint32 gadget_entity_id = 2; */
        if (message.gadgetEntityId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 point_config_id = 6; */
        if (message.pointConfigId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.pointConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FoundationRsp
 */
export const FoundationRsp = new FoundationRsp$Type();
