// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "UgcNotify.proto" (syntax proto3)
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
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 6308;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message UgcNotify
 */
export interface UgcNotify {
    /**
     * @generated from protobuf field: bool Unk3300_IBLDINGJJFI = 8 [json_name = "Unk3300IBLDINGJJFI"];
     */
    unk3300IBLDINGJJFI: boolean;
    /**
     * @generated from protobuf field: bool is_ugc_feature_closed = 6;
     */
    isUgcFeatureClosed: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_KPABJPMLHCD = 9 [json_name = "Unk3300KPABJPMLHCD"];
     */
    unk3300KPABJPMLHCD: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class UgcNotify$Type extends MessageType<UgcNotify> {
    constructor() {
        super("UgcNotify", [
            { no: 8, name: "Unk3300_IBLDINGJJFI", kind: "scalar", jsonName: "Unk3300IBLDINGJJFI", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "is_ugc_feature_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_KPABJPMLHCD", kind: "scalar", jsonName: "Unk3300KPABJPMLHCD", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<UgcNotify>): UgcNotify {
        const message = { unk3300IBLDINGJJFI: false, isUgcFeatureClosed: false, unk3300KPABJPMLHCD: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UgcNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UgcNotify): UgcNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool Unk3300_IBLDINGJJFI = 8 [json_name = "Unk3300IBLDINGJJFI"];*/ 8:
                    message.unk3300IBLDINGJJFI = reader.bool();
                    break;
                case /* bool is_ugc_feature_closed */ 6:
                    message.isUgcFeatureClosed = reader.bool();
                    break;
                case /* bool Unk3300_KPABJPMLHCD = 9 [json_name = "Unk3300KPABJPMLHCD"];*/ 9:
                    message.unk3300KPABJPMLHCD = reader.bool();
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
    internalBinaryWrite(message: UgcNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool Unk3300_IBLDINGJJFI = 8 [json_name = "Unk3300IBLDINGJJFI"]; */
        if (message.unk3300IBLDINGJJFI !== false)
            writer.tag(8, WireType.Varint).bool(message.unk3300IBLDINGJJFI);
        /* bool is_ugc_feature_closed = 6; */
        if (message.isUgcFeatureClosed !== false)
            writer.tag(6, WireType.Varint).bool(message.isUgcFeatureClosed);
        /* bool Unk3300_KPABJPMLHCD = 9 [json_name = "Unk3300KPABJPMLHCD"]; */
        if (message.unk3300KPABJPMLHCD !== false)
            writer.tag(9, WireType.Varint).bool(message.unk3300KPABJPMLHCD);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UgcNotify
 */
export const UgcNotify = new UgcNotify$Type();
