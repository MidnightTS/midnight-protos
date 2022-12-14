// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "Unk3300_LOINGBJLJEM.proto" (syntax proto3)
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
 *   CMD_ID = 7048;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message Unk3300_LOINGBJLJEM
 */
export interface Unk3300_LOINGBJLJEM {
    /**
     * @generated from protobuf field: Unk3300_LOINGBJLJEM.Unk3300_KDBJPJADJKF Unk3300_NOFBEJLNMLA = 4 [json_name = "Unk3300NOFBEJLNMLA"];
     */
    unk3300NOFBEJLNMLA: Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF;
}
/**
 * @generated from protobuf enum Unk3300_LOINGBJLJEM.Unk3300_KDBJPJADJKF
 */
export enum Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF {
    /**
     * @generated from protobuf enum value: Unk3300_KDBJPJADJKF_Unk3300_EKBFJPGGECM = 0;
     */
    Unk3300_KDBJPJADJKF_Unk3300_EKBFJPGGECM = 0,
    /**
     * @generated from protobuf enum value: Unk3300_KDBJPJADJKF_Unk3300_NALHJBKMPCH = 1;
     */
    Unk3300_KDBJPJADJKF_Unk3300_NALHJBKMPCH = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class Unk3300_LOINGBJLJEM$Type extends MessageType<Unk3300_LOINGBJLJEM> {
    constructor() {
        super("Unk3300_LOINGBJLJEM", [
            { no: 4, name: "Unk3300_NOFBEJLNMLA", kind: "enum", jsonName: "Unk3300NOFBEJLNMLA", T: () => ["Unk3300_LOINGBJLJEM.Unk3300_KDBJPJADJKF", Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF] }
        ]);
    }
    create(value?: PartialMessage<Unk3300_LOINGBJLJEM>): Unk3300_LOINGBJLJEM {
        const message = { unk3300NOFBEJLNMLA: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Unk3300_LOINGBJLJEM>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Unk3300_LOINGBJLJEM): Unk3300_LOINGBJLJEM {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Unk3300_LOINGBJLJEM.Unk3300_KDBJPJADJKF Unk3300_NOFBEJLNMLA = 4 [json_name = "Unk3300NOFBEJLNMLA"];*/ 4:
                    message.unk3300NOFBEJLNMLA = reader.int32();
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
    internalBinaryWrite(message: Unk3300_LOINGBJLJEM, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Unk3300_LOINGBJLJEM.Unk3300_KDBJPJADJKF Unk3300_NOFBEJLNMLA = 4 [json_name = "Unk3300NOFBEJLNMLA"]; */
        if (message.unk3300NOFBEJLNMLA !== 0)
            writer.tag(4, WireType.Varint).int32(message.unk3300NOFBEJLNMLA);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Unk3300_LOINGBJLJEM
 */
export const Unk3300_LOINGBJLJEM = new Unk3300_LOINGBJLJEM$Type();
