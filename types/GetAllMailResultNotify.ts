// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GetAllMailResultNotify.proto" (syntax proto3)
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
import { MailData } from "./MailData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1425;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GetAllMailResultNotify
 */
export interface GetAllMailResultNotify {
    /**
     * @generated from protobuf field: uint32 page_index = 13;
     */
    pageIndex: number;
    /**
     * @generated from protobuf field: string transaction = 14;
     */
    transaction: string;
    /**
     * @generated from protobuf field: bool is_collected = 12;
     */
    isCollected: boolean;
    /**
     * @generated from protobuf field: int32 retcode = 7;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated MailData mail_list = 2;
     */
    mailList: MailData[];
    /**
     * @generated from protobuf field: uint32 total_page_count = 6;
     */
    totalPageCount: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetAllMailResultNotify$Type extends MessageType<GetAllMailResultNotify> {
    constructor() {
        super("GetAllMailResultNotify", [
            { no: 13, name: "page_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "transaction", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "is_collected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "mail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MailData },
            { no: 6, name: "total_page_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetAllMailResultNotify>): GetAllMailResultNotify {
        const message = { pageIndex: 0, transaction: "", isCollected: false, retcode: 0, mailList: [], totalPageCount: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetAllMailResultNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllMailResultNotify): GetAllMailResultNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 page_index */ 13:
                    message.pageIndex = reader.uint32();
                    break;
                case /* string transaction */ 14:
                    message.transaction = reader.string();
                    break;
                case /* bool is_collected */ 12:
                    message.isCollected = reader.bool();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* repeated MailData mail_list */ 2:
                    message.mailList.push(MailData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 total_page_count */ 6:
                    message.totalPageCount = reader.uint32();
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
    internalBinaryWrite(message: GetAllMailResultNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 page_index = 13; */
        if (message.pageIndex !== 0)
            writer.tag(13, WireType.Varint).uint32(message.pageIndex);
        /* string transaction = 14; */
        if (message.transaction !== "")
            writer.tag(14, WireType.LengthDelimited).string(message.transaction);
        /* bool is_collected = 12; */
        if (message.isCollected !== false)
            writer.tag(12, WireType.Varint).bool(message.isCollected);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, WireType.Varint).int32(message.retcode);
        /* repeated MailData mail_list = 2; */
        for (let i = 0; i < message.mailList.length; i++)
            MailData.internalBinaryWrite(message.mailList[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint32 total_page_count = 6; */
        if (message.totalPageCount !== 0)
            writer.tag(6, WireType.Varint).uint32(message.totalPageCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAllMailResultNotify
 */
export const GetAllMailResultNotify = new GetAllMailResultNotify$Type();
