// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AvatarEquipAffixInfo.proto" (syntax proto3)
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
 * @generated from protobuf message AvatarEquipAffixInfo
 */
export interface AvatarEquipAffixInfo {
    /**
     * @generated from protobuf field: uint32 equip_affix_id = 1;
     */
    equipAffixId: number;
    /**
     * @generated from protobuf field: uint32 left_cd_time = 2;
     */
    leftCdTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEquipAffixInfo$Type extends MessageType<AvatarEquipAffixInfo> {
    constructor() {
        super("AvatarEquipAffixInfo", [
            { no: 1, name: "equip_affix_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "left_cd_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AvatarEquipAffixInfo>): AvatarEquipAffixInfo {
        const message = { equipAffixId: 0, leftCdTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarEquipAffixInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarEquipAffixInfo): AvatarEquipAffixInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 equip_affix_id */ 1:
                    message.equipAffixId = reader.uint32();
                    break;
                case /* uint32 left_cd_time */ 2:
                    message.leftCdTime = reader.uint32();
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
    internalBinaryWrite(message: AvatarEquipAffixInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 equip_affix_id = 1; */
        if (message.equipAffixId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.equipAffixId);
        /* uint32 left_cd_time = 2; */
        if (message.leftCdTime !== 0)
            writer.tag(2, WireType.Varint).uint32(message.leftCdTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarEquipAffixInfo
 */
export const AvatarEquipAffixInfo = new AvatarEquipAffixInfo$Type();