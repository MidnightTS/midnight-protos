// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ReportFightAntiCheatNotify.proto" (syntax proto3)
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
 *   CMD_ID = 388;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ReportFightAntiCheatNotify
 */
export interface ReportFightAntiCheatNotify {
    /**
     * @generated from protobuf field: uint32 Unk3300_MIFNAAADBBP = 8 [json_name = "Unk3300MIFNAAADBBP"];
     */
    unk3300MIFNAAADBBP: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_ABCKMPPMNCH = 10 [json_name = "Unk3300ABCKMPPMNCH"];
     */
    unk3300ABCKMPPMNCH: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ReportFightAntiCheatNotify$Type extends MessageType<ReportFightAntiCheatNotify> {
    constructor() {
        super("ReportFightAntiCheatNotify", [
            { no: 8, name: "Unk3300_MIFNAAADBBP", kind: "scalar", jsonName: "Unk3300MIFNAAADBBP", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_ABCKMPPMNCH", kind: "scalar", jsonName: "Unk3300ABCKMPPMNCH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ReportFightAntiCheatNotify>): ReportFightAntiCheatNotify {
        const message = { unk3300MIFNAAADBBP: 0, unk3300ABCKMPPMNCH: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReportFightAntiCheatNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReportFightAntiCheatNotify): ReportFightAntiCheatNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_MIFNAAADBBP = 8 [json_name = "Unk3300MIFNAAADBBP"];*/ 8:
                    message.unk3300MIFNAAADBBP = reader.uint32();
                    break;
                case /* uint32 Unk3300_ABCKMPPMNCH = 10 [json_name = "Unk3300ABCKMPPMNCH"];*/ 10:
                    message.unk3300ABCKMPPMNCH = reader.uint32();
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
    internalBinaryWrite(message: ReportFightAntiCheatNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_MIFNAAADBBP = 8 [json_name = "Unk3300MIFNAAADBBP"]; */
        if (message.unk3300MIFNAAADBBP !== 0)
            writer.tag(8, WireType.Varint).uint32(message.unk3300MIFNAAADBBP);
        /* uint32 Unk3300_ABCKMPPMNCH = 10 [json_name = "Unk3300ABCKMPPMNCH"]; */
        if (message.unk3300ABCKMPPMNCH !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300ABCKMPPMNCH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReportFightAntiCheatNotify
 */
export const ReportFightAntiCheatNotify = new ReportFightAntiCheatNotify$Type();
