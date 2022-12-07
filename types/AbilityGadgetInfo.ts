// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AbilityGadgetInfo.proto" (syntax proto3)
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
 * @generated from protobuf message AbilityGadgetInfo
 */
export interface AbilityGadgetInfo {
    /**
     * @generated from protobuf field: uint32 camp_id = 1;
     */
    campId: number;
    /**
     * @generated from protobuf field: uint32 camp_target_type = 2;
     */
    campTargetType: number;
    /**
     * @generated from protobuf field: uint32 target_entity_id = 3;
     */
    targetEntityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityGadgetInfo$Type extends MessageType<AbilityGadgetInfo> {
    constructor() {
        super("AbilityGadgetInfo", [
            { no: 1, name: "camp_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "camp_target_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "target_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AbilityGadgetInfo>): AbilityGadgetInfo {
        const message = { campId: 0, campTargetType: 0, targetEntityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityGadgetInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityGadgetInfo): AbilityGadgetInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 camp_id */ 1:
                    message.campId = reader.uint32();
                    break;
                case /* uint32 camp_target_type */ 2:
                    message.campTargetType = reader.uint32();
                    break;
                case /* uint32 target_entity_id */ 3:
                    message.targetEntityId = reader.uint32();
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
    internalBinaryWrite(message: AbilityGadgetInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 camp_id = 1; */
        if (message.campId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.campId);
        /* uint32 camp_target_type = 2; */
        if (message.campTargetType !== 0)
            writer.tag(2, WireType.Varint).uint32(message.campTargetType);
        /* uint32 target_entity_id = 3; */
        if (message.targetEntityId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.targetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityGadgetInfo
 */
export const AbilityGadgetInfo = new AbilityGadgetInfo$Type();