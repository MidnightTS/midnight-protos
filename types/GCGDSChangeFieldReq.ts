// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GCGDSChangeFieldReq.proto" (syntax proto3)
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
 *   CMD_ID = 7788;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message GCGDSChangeFieldReq
 */
export interface GCGDSChangeFieldReq {
    /**
     * @generated from protobuf field: uint32 field_id = 3;
     */
    fieldId: number;
    /**
     * @generated from protobuf field: uint32 deck_id = 13;
     */
    deckId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeFieldReq$Type extends MessageType<GCGDSChangeFieldReq> {
    constructor() {
        super("GCGDSChangeFieldReq", [
            { no: 3, name: "field_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "deck_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGDSChangeFieldReq>): GCGDSChangeFieldReq {
        const message = { fieldId: 0, deckId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGDSChangeFieldReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGDSChangeFieldReq): GCGDSChangeFieldReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 field_id */ 3:
                    message.fieldId = reader.uint32();
                    break;
                case /* uint32 deck_id */ 13:
                    message.deckId = reader.uint32();
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
    internalBinaryWrite(message: GCGDSChangeFieldReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 field_id = 3; */
        if (message.fieldId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.fieldId);
        /* uint32 deck_id = 13; */
        if (message.deckId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.deckId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDSChangeFieldReq
 */
export const GCGDSChangeFieldReq = new GCGDSChangeFieldReq$Type();
