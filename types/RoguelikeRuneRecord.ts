// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RoguelikeRuneRecord.proto" (syntax proto3)
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
 * @generated from protobuf message RoguelikeRuneRecord
 */
export interface RoguelikeRuneRecord {
    /**
     * @generated from protobuf field: uint32 rune_id = 10;
     */
    runeId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_JLOLMLFAPHH = 1 [json_name = "Unk3300JLOLMLFAPHH"];
     */
    unk3300JLOLMLFAPHH: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_IGBOJLPPKON = 11 [json_name = "Unk3300IGBOJLPPKON"];
     */
    unk3300IGBOJLPPKON: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeRuneRecord$Type extends MessageType<RoguelikeRuneRecord> {
    constructor() {
        super("RoguelikeRuneRecord", [
            { no: 10, name: "rune_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_JLOLMLFAPHH", kind: "scalar", jsonName: "Unk3300JLOLMLFAPHH", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_IGBOJLPPKON", kind: "scalar", jsonName: "Unk3300IGBOJLPPKON", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<RoguelikeRuneRecord>): RoguelikeRuneRecord {
        const message = { runeId: 0, unk3300JLOLMLFAPHH: 0, unk3300IGBOJLPPKON: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RoguelikeRuneRecord>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RoguelikeRuneRecord): RoguelikeRuneRecord {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 rune_id */ 10:
                    message.runeId = reader.uint32();
                    break;
                case /* uint32 Unk3300_JLOLMLFAPHH = 1 [json_name = "Unk3300JLOLMLFAPHH"];*/ 1:
                    message.unk3300JLOLMLFAPHH = reader.uint32();
                    break;
                case /* uint32 Unk3300_IGBOJLPPKON = 11 [json_name = "Unk3300IGBOJLPPKON"];*/ 11:
                    message.unk3300IGBOJLPPKON = reader.uint32();
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
    internalBinaryWrite(message: RoguelikeRuneRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 rune_id = 10; */
        if (message.runeId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.runeId);
        /* uint32 Unk3300_JLOLMLFAPHH = 1 [json_name = "Unk3300JLOLMLFAPHH"]; */
        if (message.unk3300JLOLMLFAPHH !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300JLOLMLFAPHH);
        /* uint32 Unk3300_IGBOJLPPKON = 11 [json_name = "Unk3300IGBOJLPPKON"]; */
        if (message.unk3300IGBOJLPPKON !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300IGBOJLPPKON);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeRuneRecord
 */
export const RoguelikeRuneRecord = new RoguelikeRuneRecord$Type();
