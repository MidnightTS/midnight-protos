// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SpiceActivityGivingRecordNotify.proto" (syntax proto3)
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
 *   CMD_ID = 8719;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message SpiceActivityGivingRecordNotify
 */
export interface SpiceActivityGivingRecordNotify {
    /**
     * @generated from protobuf field: uint32 Unk3300_CIHIAJEGCBO = 3 [json_name = "Unk3300CIHIAJEGCBO"];
     */
    unk3300CIHIAJEGCBO: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_LAKPMMIPBMI = 2 [json_name = "Unk3300LAKPMMIPBMI"];
     */
    unk3300LAKPMMIPBMI: number;
    /**
     * @generated from protobuf field: uint32 avatar_id = 5;
     */
    avatarId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SpiceActivityGivingRecordNotify$Type extends MessageType<SpiceActivityGivingRecordNotify> {
    constructor() {
        super("SpiceActivityGivingRecordNotify", [
            { no: 3, name: "Unk3300_CIHIAJEGCBO", kind: "scalar", jsonName: "Unk3300CIHIAJEGCBO", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_LAKPMMIPBMI", kind: "scalar", jsonName: "Unk3300LAKPMMIPBMI", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SpiceActivityGivingRecordNotify>): SpiceActivityGivingRecordNotify {
        const message = { unk3300CIHIAJEGCBO: 0, unk3300LAKPMMIPBMI: 0, avatarId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SpiceActivityGivingRecordNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SpiceActivityGivingRecordNotify): SpiceActivityGivingRecordNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_CIHIAJEGCBO = 3 [json_name = "Unk3300CIHIAJEGCBO"];*/ 3:
                    message.unk3300CIHIAJEGCBO = reader.uint32();
                    break;
                case /* uint32 Unk3300_LAKPMMIPBMI = 2 [json_name = "Unk3300LAKPMMIPBMI"];*/ 2:
                    message.unk3300LAKPMMIPBMI = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 5:
                    message.avatarId = reader.uint32();
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
    internalBinaryWrite(message: SpiceActivityGivingRecordNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_CIHIAJEGCBO = 3 [json_name = "Unk3300CIHIAJEGCBO"]; */
        if (message.unk3300CIHIAJEGCBO !== 0)
            writer.tag(3, WireType.Varint).uint32(message.unk3300CIHIAJEGCBO);
        /* uint32 Unk3300_LAKPMMIPBMI = 2 [json_name = "Unk3300LAKPMMIPBMI"]; */
        if (message.unk3300LAKPMMIPBMI !== 0)
            writer.tag(2, WireType.Varint).uint32(message.unk3300LAKPMMIPBMI);
        /* uint32 avatar_id = 5; */
        if (message.avatarId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SpiceActivityGivingRecordNotify
 */
export const SpiceActivityGivingRecordNotify = new SpiceActivityGivingRecordNotify$Type();
