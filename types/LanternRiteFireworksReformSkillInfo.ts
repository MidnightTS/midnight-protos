// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "LanternRiteFireworksReformSkillInfo.proto" (syntax proto3)
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
 * @generated from protobuf message LanternRiteFireworksReformSkillInfo
 */
export interface LanternRiteFireworksReformSkillInfo {
    /**
     * @generated from protobuf field: bool is_unlock = 9;
     */
    isUnlock: boolean;
    /**
     * @generated from protobuf field: uint32 skill_id = 1;
     */
    skillId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_IEPBAPJHLEI = 15 [json_name = "Unk3300IEPBAPJHLEI"];
     */
    unk3300IEPBAPJHLEI: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_EDPPFFFLFGG = 10 [json_name = "Unk3300EDPPFFFLFGG"];
     */
    unk3300EDPPFFFLFGG: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteFireworksReformSkillInfo$Type extends MessageType<LanternRiteFireworksReformSkillInfo> {
    constructor() {
        super("LanternRiteFireworksReformSkillInfo", [
            { no: 9, name: "is_unlock", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_IEPBAPJHLEI", kind: "scalar", jsonName: "Unk3300IEPBAPJHLEI", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_EDPPFFFLFGG", kind: "scalar", jsonName: "Unk3300EDPPFFFLFGG", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<LanternRiteFireworksReformSkillInfo>): LanternRiteFireworksReformSkillInfo {
        const message = { isUnlock: false, skillId: 0, unk3300IEPBAPJHLEI: 0, unk3300EDPPFFFLFGG: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LanternRiteFireworksReformSkillInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LanternRiteFireworksReformSkillInfo): LanternRiteFireworksReformSkillInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_unlock */ 9:
                    message.isUnlock = reader.bool();
                    break;
                case /* uint32 skill_id */ 1:
                    message.skillId = reader.uint32();
                    break;
                case /* uint32 Unk3300_IEPBAPJHLEI = 15 [json_name = "Unk3300IEPBAPJHLEI"];*/ 15:
                    message.unk3300IEPBAPJHLEI = reader.uint32();
                    break;
                case /* uint32 Unk3300_EDPPFFFLFGG = 10 [json_name = "Unk3300EDPPFFFLFGG"];*/ 10:
                    message.unk3300EDPPFFFLFGG = reader.uint32();
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
    internalBinaryWrite(message: LanternRiteFireworksReformSkillInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_unlock = 9; */
        if (message.isUnlock !== false)
            writer.tag(9, WireType.Varint).bool(message.isUnlock);
        /* uint32 skill_id = 1; */
        if (message.skillId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.skillId);
        /* uint32 Unk3300_IEPBAPJHLEI = 15 [json_name = "Unk3300IEPBAPJHLEI"]; */
        if (message.unk3300IEPBAPJHLEI !== 0)
            writer.tag(15, WireType.Varint).uint32(message.unk3300IEPBAPJHLEI);
        /* uint32 Unk3300_EDPPFFFLFGG = 10 [json_name = "Unk3300EDPPFFFLFGG"]; */
        if (message.unk3300EDPPFFFLFGG !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300EDPPFFFLFGG);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteFireworksReformSkillInfo
 */
export const LanternRiteFireworksReformSkillInfo = new LanternRiteFireworksReformSkillInfo$Type();
