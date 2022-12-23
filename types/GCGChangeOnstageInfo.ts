// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGChangeOnstageInfo.proto" (syntax proto3)
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
import { GCGSkillPreviewInfo } from "./GCGSkillPreviewInfo";
/**
 * @generated from protobuf message GCGChangeOnstageInfo
 */
export interface GCGChangeOnstageInfo {
    /**
     * @generated from protobuf field: bool is_quick = 11;
     */
    isQuick: boolean;
    /**
     * @generated from protobuf field: uint32 card_guid = 6;
     */
    cardGuid: number;
    /**
     * @generated from protobuf field: GCGSkillPreviewInfo change_onstage_preview_info = 5;
     */
    changeOnstagePreviewInfo?: GCGSkillPreviewInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGChangeOnstageInfo$Type extends MessageType<GCGChangeOnstageInfo> {
    constructor() {
        super("GCGChangeOnstageInfo", [
            { no: 11, name: "is_quick", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "change_onstage_preview_info", kind: "message", T: () => GCGSkillPreviewInfo }
        ]);
    }
    create(value?: PartialMessage<GCGChangeOnstageInfo>): GCGChangeOnstageInfo {
        const message = { isQuick: false, cardGuid: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGChangeOnstageInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGChangeOnstageInfo): GCGChangeOnstageInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_quick */ 11:
                    message.isQuick = reader.bool();
                    break;
                case /* uint32 card_guid */ 6:
                    message.cardGuid = reader.uint32();
                    break;
                case /* GCGSkillPreviewInfo change_onstage_preview_info */ 5:
                    message.changeOnstagePreviewInfo = GCGSkillPreviewInfo.internalBinaryRead(reader, reader.uint32(), options, message.changeOnstagePreviewInfo);
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
    internalBinaryWrite(message: GCGChangeOnstageInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_quick = 11; */
        if (message.isQuick !== false)
            writer.tag(11, WireType.Varint).bool(message.isQuick);
        /* uint32 card_guid = 6; */
        if (message.cardGuid !== 0)
            writer.tag(6, WireType.Varint).uint32(message.cardGuid);
        /* GCGSkillPreviewInfo change_onstage_preview_info = 5; */
        if (message.changeOnstagePreviewInfo)
            GCGSkillPreviewInfo.internalBinaryWrite(message.changeOnstagePreviewInfo, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGChangeOnstageInfo
 */
export const GCGChangeOnstageInfo = new GCGChangeOnstageInfo$Type();
