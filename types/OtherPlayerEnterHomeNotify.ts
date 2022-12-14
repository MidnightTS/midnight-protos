// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "OtherPlayerEnterHomeNotify.proto" (syntax proto3)
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
 *   CMD_ID = 4749;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message OtherPlayerEnterHomeNotify
 */
export interface OtherPlayerEnterHomeNotify {
    /**
     * @generated from protobuf field: string nickname = 5;
     */
    nickname: string;
    /**
     * @generated from protobuf field: OtherPlayerEnterHomeNotify.Reason reason = 10;
     */
    reason: OtherPlayerEnterHomeNotify_Reason;
}
/**
 * @generated from protobuf enum OtherPlayerEnterHomeNotify.Reason
 */
export enum OtherPlayerEnterHomeNotify_Reason {
    /**
     * @generated from protobuf enum value: REASON_INVALID = 0;
     */
    INVALID = 0,
    /**
     * @generated from protobuf enum value: REASON_ENTER = 1;
     */
    ENTER = 1,
    /**
     * @generated from protobuf enum value: REASON_LEAVE = 2;
     */
    LEAVE = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class OtherPlayerEnterHomeNotify$Type extends MessageType<OtherPlayerEnterHomeNotify> {
    constructor() {
        super("OtherPlayerEnterHomeNotify", [
            { no: 5, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "reason", kind: "enum", T: () => ["OtherPlayerEnterHomeNotify.Reason", OtherPlayerEnterHomeNotify_Reason, "REASON_"] }
        ]);
    }
    create(value?: PartialMessage<OtherPlayerEnterHomeNotify>): OtherPlayerEnterHomeNotify {
        const message = { nickname: "", reason: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OtherPlayerEnterHomeNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OtherPlayerEnterHomeNotify): OtherPlayerEnterHomeNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string nickname */ 5:
                    message.nickname = reader.string();
                    break;
                case /* OtherPlayerEnterHomeNotify.Reason reason */ 10:
                    message.reason = reader.int32();
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
    internalBinaryWrite(message: OtherPlayerEnterHomeNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string nickname = 5; */
        if (message.nickname !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.nickname);
        /* OtherPlayerEnterHomeNotify.Reason reason = 10; */
        if (message.reason !== 0)
            writer.tag(10, WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OtherPlayerEnterHomeNotify
 */
export const OtherPlayerEnterHomeNotify = new OtherPlayerEnterHomeNotify$Type();
