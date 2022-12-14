// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGSkillPreviewHpInfo.proto" (syntax proto3)
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
import { GCGSkillHpChangeType } from "./GCGSkillHpChangeType";
/**
 * @generated from protobuf message GCGSkillPreviewHpInfo
 */
export interface GCGSkillPreviewHpInfo {
    /**
     * @generated from protobuf field: GCGSkillHpChangeType change_type = 8;
     */
    changeType: GCGSkillHpChangeType;
    /**
     * @generated from protobuf field: uint32 hp_change_value = 4;
     */
    hpChangeValue: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewHpInfo$Type extends MessageType<GCGSkillPreviewHpInfo> {
    constructor() {
        super("GCGSkillPreviewHpInfo", [
            { no: 8, name: "change_type", kind: "enum", T: () => ["GCGSkillHpChangeType", GCGSkillHpChangeType] },
            { no: 4, name: "hp_change_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGSkillPreviewHpInfo>): GCGSkillPreviewHpInfo {
        const message = { changeType: 0, hpChangeValue: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGSkillPreviewHpInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGSkillPreviewHpInfo): GCGSkillPreviewHpInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* GCGSkillHpChangeType change_type */ 8:
                    message.changeType = reader.int32();
                    break;
                case /* uint32 hp_change_value */ 4:
                    message.hpChangeValue = reader.uint32();
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
    internalBinaryWrite(message: GCGSkillPreviewHpInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* GCGSkillHpChangeType change_type = 8; */
        if (message.changeType !== 0)
            writer.tag(8, WireType.Varint).int32(message.changeType);
        /* uint32 hp_change_value = 4; */
        if (message.hpChangeValue !== 0)
            writer.tag(4, WireType.Varint).uint32(message.hpChangeValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewHpInfo
 */
export const GCGSkillPreviewHpInfo = new GCGSkillPreviewHpInfo$Type();
