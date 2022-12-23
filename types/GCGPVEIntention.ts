// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGPVEIntention.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message GCGPVEIntention
 */
export interface GCGPVEIntention {
    /**
     * @generated from protobuf field: repeated uint32 skill_id_list = 14;
     */
    skillIdList: number[];
    /**
     * @generated from protobuf field: uint32 card_guid = 15;
     */
    cardGuid: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGPVEIntention$Type extends MessageType<GCGPVEIntention> {
    constructor() {
        super("GCGPVEIntention", [
            { no: 14, name: "skill_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGPVEIntention>): GCGPVEIntention {
        const message = { skillIdList: [], cardGuid: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGPVEIntention>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGPVEIntention): GCGPVEIntention {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 skill_id_list */ 14:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillIdList.push(reader.uint32());
                    else
                        message.skillIdList.push(reader.uint32());
                    break;
                case /* uint32 card_guid */ 15:
                    message.cardGuid = reader.uint32();
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
    internalBinaryWrite(message: GCGPVEIntention, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 skill_id_list = 14; */
        if (message.skillIdList.length) {
            writer.tag(14, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.skillIdList.length; i++)
                writer.uint32(message.skillIdList[i]);
            writer.join();
        }
        /* uint32 card_guid = 15; */
        if (message.cardGuid !== 0)
            writer.tag(15, WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGPVEIntention
 */
export const GCGPVEIntention = new GCGPVEIntention$Type();
