// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "DungeonRestartInviteReplyRsp.proto" (syntax proto3)
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
 *   CMD_ID = 923;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message DungeonRestartInviteReplyRsp
 */
export interface DungeonRestartInviteReplyRsp {
    /**
     * @generated from protobuf field: bool is_trans_point = 14;
     */
    isTransPoint: boolean;
    /**
     * @generated from protobuf field: int32 retcode = 10;
     */
    retcode: number;
    /**
     * @generated from protobuf field: bool is_accept = 6;
     */
    isAccept: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class DungeonRestartInviteReplyRsp$Type extends MessageType<DungeonRestartInviteReplyRsp> {
    constructor() {
        super("DungeonRestartInviteReplyRsp", [
            { no: 14, name: "is_trans_point", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "is_accept", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<DungeonRestartInviteReplyRsp>): DungeonRestartInviteReplyRsp {
        const message = { isTransPoint: false, retcode: 0, isAccept: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DungeonRestartInviteReplyRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DungeonRestartInviteReplyRsp): DungeonRestartInviteReplyRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_trans_point */ 14:
                    message.isTransPoint = reader.bool();
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_accept */ 6:
                    message.isAccept = reader.bool();
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
    internalBinaryWrite(message: DungeonRestartInviteReplyRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_trans_point = 14; */
        if (message.isTransPoint !== false)
            writer.tag(14, WireType.Varint).bool(message.isTransPoint);
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, WireType.Varint).int32(message.retcode);
        /* bool is_accept = 6; */
        if (message.isAccept !== false)
            writer.tag(6, WireType.Varint).bool(message.isAccept);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonRestartInviteReplyRsp
 */
export const DungeonRestartInviteReplyRsp = new DungeonRestartInviteReplyRsp$Type();
