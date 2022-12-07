// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "WidgetUpdateExtraCDReq.proto" (syntax proto3)
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
import { WidgetExtraCdType } from "./WidgetExtraCdType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5907;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message WidgetUpdateExtraCDReq
 */
export interface WidgetUpdateExtraCDReq {
    /**
     * @generated from protobuf field: uint32 material_id = 6;
     */
    materialId: number;
    /**
     * @generated from protobuf field: WidgetExtraCdType extra_cd_type = 7;
     */
    extraCdType: WidgetExtraCdType;
    /**
     * @generated from protobuf field: uint32 cd_group = 14;
     */
    cdGroup: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class WidgetUpdateExtraCDReq$Type extends MessageType<WidgetUpdateExtraCDReq> {
    constructor() {
        super("WidgetUpdateExtraCDReq", [
            { no: 6, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "extra_cd_type", kind: "enum", T: () => ["WidgetExtraCdType", WidgetExtraCdType, "WIDGET_EXTRA_CD_TYPE_"] },
            { no: 14, name: "cd_group", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<WidgetUpdateExtraCDReq>): WidgetUpdateExtraCDReq {
        const message = { materialId: 0, extraCdType: 0, cdGroup: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WidgetUpdateExtraCDReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WidgetUpdateExtraCDReq): WidgetUpdateExtraCDReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 material_id */ 6:
                    message.materialId = reader.uint32();
                    break;
                case /* WidgetExtraCdType extra_cd_type */ 7:
                    message.extraCdType = reader.int32();
                    break;
                case /* uint32 cd_group */ 14:
                    message.cdGroup = reader.uint32();
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
    internalBinaryWrite(message: WidgetUpdateExtraCDReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 material_id = 6; */
        if (message.materialId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.materialId);
        /* WidgetExtraCdType extra_cd_type = 7; */
        if (message.extraCdType !== 0)
            writer.tag(7, WireType.Varint).int32(message.extraCdType);
        /* uint32 cd_group = 14; */
        if (message.cdGroup !== 0)
            writer.tag(14, WireType.Varint).uint32(message.cdGroup);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetUpdateExtraCDReq
 */
export const WidgetUpdateExtraCDReq = new WidgetUpdateExtraCDReq$Type();
