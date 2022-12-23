// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "BargainSnapshot.proto" (syntax proto3)
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
 * @generated from protobuf message BargainSnapshot
 */
export interface BargainSnapshot {
    /**
     * @generated from protobuf field: uint32 Unk3300_KOCJELACJLM = 11 [json_name = "Unk3300KOCJELACJLM"];
     */
    unk3300KOCJELACJLM: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_MHFDEBOBFNE = 14 [json_name = "Unk3300MHFDEBOBFNE"];
     */
    unk3300MHFDEBOBFNE: number;
    /**
     * @generated from protobuf field: uint32 bargain_id = 3;
     */
    bargainId: number;
    /**
     * @generated from protobuf field: int32 cur_mood = 8;
     */
    curMood: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class BargainSnapshot$Type extends MessageType<BargainSnapshot> {
    constructor() {
        super("BargainSnapshot", [
            { no: 11, name: "Unk3300_KOCJELACJLM", kind: "scalar", jsonName: "Unk3300KOCJELACJLM", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_MHFDEBOBFNE", kind: "scalar", jsonName: "Unk3300MHFDEBOBFNE", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "bargain_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "cur_mood", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<BargainSnapshot>): BargainSnapshot {
        const message = { unk3300KOCJELACJLM: 0, unk3300MHFDEBOBFNE: 0, bargainId: 0, curMood: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BargainSnapshot>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BargainSnapshot): BargainSnapshot {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_KOCJELACJLM = 11 [json_name = "Unk3300KOCJELACJLM"];*/ 11:
                    message.unk3300KOCJELACJLM = reader.uint32();
                    break;
                case /* uint32 Unk3300_MHFDEBOBFNE = 14 [json_name = "Unk3300MHFDEBOBFNE"];*/ 14:
                    message.unk3300MHFDEBOBFNE = reader.uint32();
                    break;
                case /* uint32 bargain_id */ 3:
                    message.bargainId = reader.uint32();
                    break;
                case /* int32 cur_mood */ 8:
                    message.curMood = reader.int32();
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
    internalBinaryWrite(message: BargainSnapshot, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_KOCJELACJLM = 11 [json_name = "Unk3300KOCJELACJLM"]; */
        if (message.unk3300KOCJELACJLM !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300KOCJELACJLM);
        /* uint32 Unk3300_MHFDEBOBFNE = 14 [json_name = "Unk3300MHFDEBOBFNE"]; */
        if (message.unk3300MHFDEBOBFNE !== 0)
            writer.tag(14, WireType.Varint).uint32(message.unk3300MHFDEBOBFNE);
        /* uint32 bargain_id = 3; */
        if (message.bargainId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.bargainId);
        /* int32 cur_mood = 8; */
        if (message.curMood !== 0)
            writer.tag(8, WireType.Varint).int32(message.curMood);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BargainSnapshot
 */
export const BargainSnapshot = new BargainSnapshot$Type();
