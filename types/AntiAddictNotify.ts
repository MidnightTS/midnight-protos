// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AntiAddictNotify.proto" (syntax proto3)
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
 *   CMD_ID = 174;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message AntiAddictNotify
 */
export interface AntiAddictNotify {
    /**
     * @generated from protobuf field: string level = 4;
     */
    level: string;
    /**
     * @generated from protobuf field: string msg = 7;
     */
    msg: string;
    /**
     * @generated from protobuf field: int32 msg_type = 2;
     */
    msgType: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AntiAddictNotify$Type extends MessageType<AntiAddictNotify> {
    constructor() {
        super("AntiAddictNotify", [
            { no: 4, name: "level", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "msg_type", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<AntiAddictNotify>): AntiAddictNotify {
        const message = { level: "", msg: "", msgType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AntiAddictNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AntiAddictNotify): AntiAddictNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string level */ 4:
                    message.level = reader.string();
                    break;
                case /* string msg */ 7:
                    message.msg = reader.string();
                    break;
                case /* int32 msg_type */ 2:
                    message.msgType = reader.int32();
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
    internalBinaryWrite(message: AntiAddictNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string level = 4; */
        if (message.level !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.level);
        /* string msg = 7; */
        if (message.msg !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.msg);
        /* int32 msg_type = 2; */
        if (message.msgType !== 0)
            writer.tag(2, WireType.Varint).int32(message.msgType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AntiAddictNotify
 */
export const AntiAddictNotify = new AntiAddictNotify$Type();
