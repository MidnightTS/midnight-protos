// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "DraftGuestReplyTwiceConfirmRsp.proto" (syntax proto3)
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
 *   CMD_ID = 5439;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message DraftGuestReplyTwiceConfirmRsp
 */
export interface DraftGuestReplyTwiceConfirmRsp {
    /**
     * @generated from protobuf field: uint32 draft_id = 5;
     */
    draftId: number;
    /**
     * @generated from protobuf field: int32 retcode = 11;
     */
    retcode: number;
    /**
     * @generated from protobuf field: bool is_agree = 1;
     */
    isAgree: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class DraftGuestReplyTwiceConfirmRsp$Type extends MessageType<DraftGuestReplyTwiceConfirmRsp> {
    constructor() {
        super("DraftGuestReplyTwiceConfirmRsp", [
            { no: 5, name: "draft_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "is_agree", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<DraftGuestReplyTwiceConfirmRsp>): DraftGuestReplyTwiceConfirmRsp {
        const message = { draftId: 0, retcode: 0, isAgree: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DraftGuestReplyTwiceConfirmRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DraftGuestReplyTwiceConfirmRsp): DraftGuestReplyTwiceConfirmRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 draft_id */ 5:
                    message.draftId = reader.uint32();
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_agree */ 1:
                    message.isAgree = reader.bool();
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
    internalBinaryWrite(message: DraftGuestReplyTwiceConfirmRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 draft_id = 5; */
        if (message.draftId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.draftId);
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, WireType.Varint).int32(message.retcode);
        /* bool is_agree = 1; */
        if (message.isAgree !== false)
            writer.tag(1, WireType.Varint).bool(message.isAgree);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DraftGuestReplyTwiceConfirmRsp
 */
export const DraftGuestReplyTwiceConfirmRsp = new DraftGuestReplyTwiceConfirmRsp$Type();
