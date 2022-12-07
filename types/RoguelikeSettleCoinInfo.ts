// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "RoguelikeSettleCoinInfo.proto" (syntax proto3)
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
 * @generated from protobuf message RoguelikeSettleCoinInfo
 */
export interface RoguelikeSettleCoinInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_MFKOIMONCLA = 10 [json_name = "Unk3300MFKOIMONCLA"];
     */
    unk3300MFKOIMONCLA: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_LFEKGBBAMHE = 12 [json_name = "Unk3300LFEKGBBAMHE"];
     */
    unk3300LFEKGBBAMHE: number;
    /**
     * @generated from protobuf field: uint32 coin_c = 6;
     */
    coinC: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeSettleCoinInfo$Type extends MessageType<RoguelikeSettleCoinInfo> {
    constructor() {
        super("RoguelikeSettleCoinInfo", [
            { no: 10, name: "Unk3300_MFKOIMONCLA", kind: "scalar", jsonName: "Unk3300MFKOIMONCLA", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_LFEKGBBAMHE", kind: "scalar", jsonName: "Unk3300LFEKGBBAMHE", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "coin_c", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<RoguelikeSettleCoinInfo>): RoguelikeSettleCoinInfo {
        const message = { unk3300MFKOIMONCLA: 0, unk3300LFEKGBBAMHE: 0, coinC: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RoguelikeSettleCoinInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RoguelikeSettleCoinInfo): RoguelikeSettleCoinInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_MFKOIMONCLA = 10 [json_name = "Unk3300MFKOIMONCLA"];*/ 10:
                    message.unk3300MFKOIMONCLA = reader.uint32();
                    break;
                case /* uint32 Unk3300_LFEKGBBAMHE = 12 [json_name = "Unk3300LFEKGBBAMHE"];*/ 12:
                    message.unk3300LFEKGBBAMHE = reader.uint32();
                    break;
                case /* uint32 coin_c */ 6:
                    message.coinC = reader.uint32();
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
    internalBinaryWrite(message: RoguelikeSettleCoinInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_MFKOIMONCLA = 10 [json_name = "Unk3300MFKOIMONCLA"]; */
        if (message.unk3300MFKOIMONCLA !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300MFKOIMONCLA);
        /* uint32 Unk3300_LFEKGBBAMHE = 12 [json_name = "Unk3300LFEKGBBAMHE"]; */
        if (message.unk3300LFEKGBBAMHE !== 0)
            writer.tag(12, WireType.Varint).uint32(message.unk3300LFEKGBBAMHE);
        /* uint32 coin_c = 6; */
        if (message.coinC !== 0)
            writer.tag(6, WireType.Varint).uint32(message.coinC);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeSettleCoinInfo
 */
export const RoguelikeSettleCoinInfo = new RoguelikeSettleCoinInfo$Type();
