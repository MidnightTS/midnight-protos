// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "Unk3300_DMOBAABGOBF.proto" (syntax proto3)
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
 *   CMD_ID = 7193;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message Unk3300_DMOBAABGOBF
 */
export interface Unk3300_DMOBAABGOBF {
    /**
     * @generated from protobuf field: bool is_success = 6;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: string Unk3300_NKHMMPMEILJ = 7 [json_name = "Unk3300NKHMMPMEILJ"];
     */
    unk3300NKHMMPMEILJ: string;
    /**
     * @generated from protobuf field: string Unk3300_JOCKIGCENGI = 13 [json_name = "Unk3300JOCKIGCENGI"];
     */
    unk3300JOCKIGCENGI: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Unk3300_DMOBAABGOBF$Type extends MessageType<Unk3300_DMOBAABGOBF> {
    constructor() {
        super("Unk3300_DMOBAABGOBF", [
            { no: 6, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "Unk3300_NKHMMPMEILJ", kind: "scalar", jsonName: "Unk3300NKHMMPMEILJ", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "Unk3300_JOCKIGCENGI", kind: "scalar", jsonName: "Unk3300JOCKIGCENGI", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Unk3300_DMOBAABGOBF>): Unk3300_DMOBAABGOBF {
        const message = { isSuccess: false, unk3300NKHMMPMEILJ: "", unk3300JOCKIGCENGI: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Unk3300_DMOBAABGOBF>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Unk3300_DMOBAABGOBF): Unk3300_DMOBAABGOBF {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_success */ 6:
                    message.isSuccess = reader.bool();
                    break;
                case /* string Unk3300_NKHMMPMEILJ = 7 [json_name = "Unk3300NKHMMPMEILJ"];*/ 7:
                    message.unk3300NKHMMPMEILJ = reader.string();
                    break;
                case /* string Unk3300_JOCKIGCENGI = 13 [json_name = "Unk3300JOCKIGCENGI"];*/ 13:
                    message.unk3300JOCKIGCENGI = reader.string();
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
    internalBinaryWrite(message: Unk3300_DMOBAABGOBF, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_success = 6; */
        if (message.isSuccess !== false)
            writer.tag(6, WireType.Varint).bool(message.isSuccess);
        /* string Unk3300_NKHMMPMEILJ = 7 [json_name = "Unk3300NKHMMPMEILJ"]; */
        if (message.unk3300NKHMMPMEILJ !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.unk3300NKHMMPMEILJ);
        /* string Unk3300_JOCKIGCENGI = 13 [json_name = "Unk3300JOCKIGCENGI"]; */
        if (message.unk3300JOCKIGCENGI !== "")
            writer.tag(13, WireType.LengthDelimited).string(message.unk3300JOCKIGCENGI);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Unk3300_DMOBAABGOBF
 */
export const Unk3300_DMOBAABGOBF = new Unk3300_DMOBAABGOBF$Type();
