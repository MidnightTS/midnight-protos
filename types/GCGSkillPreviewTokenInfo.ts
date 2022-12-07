// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GCGSkillPreviewTokenInfo.proto" (syntax proto3)
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
 * @generated from protobuf message GCGSkillPreviewTokenInfo
 */
export interface GCGSkillPreviewTokenInfo {
    /**
     * @generated from protobuf field: uint32 token_type = 11;
     */
    tokenType: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_MMIKPPJMHAD = 10 [json_name = "Unk3300MMIKPPJMHAD"];
     */
    unk3300MMIKPPJMHAD: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_IKICJMEFEON = 3 [json_name = "Unk3300IKICJMEFEON"];
     */
    unk3300IKICJMEFEON: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewTokenInfo$Type extends MessageType<GCGSkillPreviewTokenInfo> {
    constructor() {
        super("GCGSkillPreviewTokenInfo", [
            { no: 11, name: "token_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_MMIKPPJMHAD", kind: "scalar", jsonName: "Unk3300MMIKPPJMHAD", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_IKICJMEFEON", kind: "scalar", jsonName: "Unk3300IKICJMEFEON", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGSkillPreviewTokenInfo>): GCGSkillPreviewTokenInfo {
        const message = { tokenType: 0, unk3300MMIKPPJMHAD: 0, unk3300IKICJMEFEON: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGSkillPreviewTokenInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGSkillPreviewTokenInfo): GCGSkillPreviewTokenInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 token_type */ 11:
                    message.tokenType = reader.uint32();
                    break;
                case /* uint32 Unk3300_MMIKPPJMHAD = 10 [json_name = "Unk3300MMIKPPJMHAD"];*/ 10:
                    message.unk3300MMIKPPJMHAD = reader.uint32();
                    break;
                case /* uint32 Unk3300_IKICJMEFEON = 3 [json_name = "Unk3300IKICJMEFEON"];*/ 3:
                    message.unk3300IKICJMEFEON = reader.uint32();
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
    internalBinaryWrite(message: GCGSkillPreviewTokenInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 token_type = 11; */
        if (message.tokenType !== 0)
            writer.tag(11, WireType.Varint).uint32(message.tokenType);
        /* uint32 Unk3300_MMIKPPJMHAD = 10 [json_name = "Unk3300MMIKPPJMHAD"]; */
        if (message.unk3300MMIKPPJMHAD !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300MMIKPPJMHAD);
        /* uint32 Unk3300_IKICJMEFEON = 3 [json_name = "Unk3300IKICJMEFEON"]; */
        if (message.unk3300IKICJMEFEON !== 0)
            writer.tag(3, WireType.Varint).uint32(message.unk3300IKICJMEFEON);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewTokenInfo
 */
export const GCGSkillPreviewTokenInfo = new GCGSkillPreviewTokenInfo$Type();
