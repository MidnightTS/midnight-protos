// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AISnapshotEntitySkillCycle.proto" (syntax proto3)
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
 * @generated from protobuf message AISnapshotEntitySkillCycle
 */
export interface AISnapshotEntitySkillCycle {
    /**
     * @generated from protobuf field: bool Unk3300_IIOIBLEOHEK = 14 [json_name = "Unk3300IIOIBLEOHEK"];
     */
    unk3300IIOIBLEOHEK: boolean;
    /**
     * @generated from protobuf field: uint32 skill_id = 12;
     */
    skillId: number;
    /**
     * @generated from protobuf field: bool Unk3300_ABKFNGIDFMI = 7 [json_name = "Unk3300ABKFNGIDFMI"];
     */
    unk3300ABKFNGIDFMI: boolean;
    /**
     * @generated from protobuf field: bool failed = 2;
     */
    failed: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_EGIILMJFEBE = 1 [json_name = "Unk3300EGIILMJFEBE"];
     */
    unk3300EGIILMJFEBE: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class AISnapshotEntitySkillCycle$Type extends MessageType<AISnapshotEntitySkillCycle> {
    constructor() {
        super("AISnapshotEntitySkillCycle", [
            { no: 14, name: "Unk3300_IIOIBLEOHEK", kind: "scalar", jsonName: "Unk3300IIOIBLEOHEK", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_ABKFNGIDFMI", kind: "scalar", jsonName: "Unk3300ABKFNGIDFMI", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "failed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_EGIILMJFEBE", kind: "scalar", jsonName: "Unk3300EGIILMJFEBE", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<AISnapshotEntitySkillCycle>): AISnapshotEntitySkillCycle {
        const message = { unk3300IIOIBLEOHEK: false, skillId: 0, unk3300ABKFNGIDFMI: false, failed: false, unk3300EGIILMJFEBE: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AISnapshotEntitySkillCycle>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AISnapshotEntitySkillCycle): AISnapshotEntitySkillCycle {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool Unk3300_IIOIBLEOHEK = 14 [json_name = "Unk3300IIOIBLEOHEK"];*/ 14:
                    message.unk3300IIOIBLEOHEK = reader.bool();
                    break;
                case /* uint32 skill_id */ 12:
                    message.skillId = reader.uint32();
                    break;
                case /* bool Unk3300_ABKFNGIDFMI = 7 [json_name = "Unk3300ABKFNGIDFMI"];*/ 7:
                    message.unk3300ABKFNGIDFMI = reader.bool();
                    break;
                case /* bool failed */ 2:
                    message.failed = reader.bool();
                    break;
                case /* bool Unk3300_EGIILMJFEBE = 1 [json_name = "Unk3300EGIILMJFEBE"];*/ 1:
                    message.unk3300EGIILMJFEBE = reader.bool();
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
    internalBinaryWrite(message: AISnapshotEntitySkillCycle, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool Unk3300_IIOIBLEOHEK = 14 [json_name = "Unk3300IIOIBLEOHEK"]; */
        if (message.unk3300IIOIBLEOHEK !== false)
            writer.tag(14, WireType.Varint).bool(message.unk3300IIOIBLEOHEK);
        /* uint32 skill_id = 12; */
        if (message.skillId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.skillId);
        /* bool Unk3300_ABKFNGIDFMI = 7 [json_name = "Unk3300ABKFNGIDFMI"]; */
        if (message.unk3300ABKFNGIDFMI !== false)
            writer.tag(7, WireType.Varint).bool(message.unk3300ABKFNGIDFMI);
        /* bool failed = 2; */
        if (message.failed !== false)
            writer.tag(2, WireType.Varint).bool(message.failed);
        /* bool Unk3300_EGIILMJFEBE = 1 [json_name = "Unk3300EGIILMJFEBE"]; */
        if (message.unk3300EGIILMJFEBE !== false)
            writer.tag(1, WireType.Varint).bool(message.unk3300EGIILMJFEBE);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AISnapshotEntitySkillCycle
 */
export const AISnapshotEntitySkillCycle = new AISnapshotEntitySkillCycle$Type();
