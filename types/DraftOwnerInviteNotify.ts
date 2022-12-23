// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "DraftOwnerInviteNotify.proto" (syntax proto3)
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
 *   CMD_ID = 5500;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message DraftOwnerInviteNotify
 */
export interface DraftOwnerInviteNotify {
    /**
     * @generated from protobuf field: uint32 invite_deadline_time = 5;
     */
    inviteDeadlineTime: number;
    /**
     * @generated from protobuf field: uint32 draft_id = 7;
     */
    draftId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class DraftOwnerInviteNotify$Type extends MessageType<DraftOwnerInviteNotify> {
    constructor() {
        super("DraftOwnerInviteNotify", [
            { no: 5, name: "invite_deadline_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "draft_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DraftOwnerInviteNotify>): DraftOwnerInviteNotify {
        const message = { inviteDeadlineTime: 0, draftId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DraftOwnerInviteNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DraftOwnerInviteNotify): DraftOwnerInviteNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 invite_deadline_time */ 5:
                    message.inviteDeadlineTime = reader.uint32();
                    break;
                case /* uint32 draft_id */ 7:
                    message.draftId = reader.uint32();
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
    internalBinaryWrite(message: DraftOwnerInviteNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 invite_deadline_time = 5; */
        if (message.inviteDeadlineTime !== 0)
            writer.tag(5, WireType.Varint).uint32(message.inviteDeadlineTime);
        /* uint32 draft_id = 7; */
        if (message.draftId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.draftId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DraftOwnerInviteNotify
 */
export const DraftOwnerInviteNotify = new DraftOwnerInviteNotify$Type();
