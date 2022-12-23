// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "DraftOwnerStartInviteRsp.proto" (syntax proto3)
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
import { DraftInviteFailInfo } from "./DraftInviteFailInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5419;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message DraftOwnerStartInviteRsp
 */
export interface DraftOwnerStartInviteRsp {
    /**
     * @generated from protobuf field: repeated DraftInviteFailInfo invite_fail_info_list = 12;
     */
    inviteFailInfoList: DraftInviteFailInfo[];
    /**
     * @generated from protobuf field: uint32 draft_id = 4;
     */
    draftId: number;
    /**
     * @generated from protobuf field: int32 retcode = 2;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 wrong_uid = 6;
     */
    wrongUid: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class DraftOwnerStartInviteRsp$Type extends MessageType<DraftOwnerStartInviteRsp> {
    constructor() {
        super("DraftOwnerStartInviteRsp", [
            { no: 12, name: "invite_fail_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DraftInviteFailInfo },
            { no: 4, name: "draft_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "wrong_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DraftOwnerStartInviteRsp>): DraftOwnerStartInviteRsp {
        const message = { inviteFailInfoList: [], draftId: 0, retcode: 0, wrongUid: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DraftOwnerStartInviteRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DraftOwnerStartInviteRsp): DraftOwnerStartInviteRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated DraftInviteFailInfo invite_fail_info_list */ 12:
                    message.inviteFailInfoList.push(DraftInviteFailInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 draft_id */ 4:
                    message.draftId = reader.uint32();
                    break;
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 wrong_uid */ 6:
                    message.wrongUid = reader.uint32();
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
    internalBinaryWrite(message: DraftOwnerStartInviteRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated DraftInviteFailInfo invite_fail_info_list = 12; */
        for (let i = 0; i < message.inviteFailInfoList.length; i++)
            DraftInviteFailInfo.internalBinaryWrite(message.inviteFailInfoList[i], writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* uint32 draft_id = 4; */
        if (message.draftId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.draftId);
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, WireType.Varint).int32(message.retcode);
        /* uint32 wrong_uid = 6; */
        if (message.wrongUid !== 0)
            writer.tag(6, WireType.Varint).uint32(message.wrongUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DraftOwnerStartInviteRsp
 */
export const DraftOwnerStartInviteRsp = new DraftOwnerStartInviteRsp$Type();
