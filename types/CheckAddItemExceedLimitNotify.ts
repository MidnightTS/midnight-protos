// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "CheckAddItemExceedLimitNotify.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 697;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message CheckAddItemExceedLimitNotify
 */
export interface CheckAddItemExceedLimitNotify {
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_PKJMEJKAPBI = 4 [json_name = "Unk3300PKJMEJKAPBI"];
     */
    unk3300PKJMEJKAPBI: number[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_GPDPCJLHBDE = 11 [json_name = "Unk3300GPDPCJLHBDE"];
     */
    unk3300GPDPCJLHBDE: number[];
    /**
     * @generated from protobuf field: uint32 reason = 9;
     */
    reason: number;
    /**
     * @generated from protobuf field: bool is_drop = 14;
     */
    isDrop: boolean;
    /**
     * @generated from protobuf field: CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType msg_type = 6;
     */
    msgType: CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType;
}
/**
 * @generated from protobuf enum CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType
 */
export enum CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType {
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_TYPE_DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_TYPE_TEXT = 1;
     */
    TEXT = 1,
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_TYPE_DIALOG = 2;
     */
    DIALOG = 2,
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_TYPE_DIALOG_NONBLOCK = 3;
     */
    DIALOG_NONBLOCK = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class CheckAddItemExceedLimitNotify$Type extends MessageType<CheckAddItemExceedLimitNotify> {
    constructor() {
        super("CheckAddItemExceedLimitNotify", [
            { no: 4, name: "Unk3300_PKJMEJKAPBI", kind: "scalar", jsonName: "Unk3300PKJMEJKAPBI", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_GPDPCJLHBDE", kind: "scalar", jsonName: "Unk3300GPDPCJLHBDE", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "reason", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_drop", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "msg_type", kind: "enum", T: () => ["CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType", CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType, "ITEM_EXCEED_LIMIT_MSG_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<CheckAddItemExceedLimitNotify>): CheckAddItemExceedLimitNotify {
        const message = { unk3300PKJMEJKAPBI: [], unk3300GPDPCJLHBDE: [], reason: 0, isDrop: false, msgType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CheckAddItemExceedLimitNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckAddItemExceedLimitNotify): CheckAddItemExceedLimitNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 Unk3300_PKJMEJKAPBI = 4 [json_name = "Unk3300PKJMEJKAPBI"];*/ 4:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300PKJMEJKAPBI.push(reader.uint32());
                    else
                        message.unk3300PKJMEJKAPBI.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_GPDPCJLHBDE = 11 [json_name = "Unk3300GPDPCJLHBDE"];*/ 11:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300GPDPCJLHBDE.push(reader.uint32());
                    else
                        message.unk3300GPDPCJLHBDE.push(reader.uint32());
                    break;
                case /* uint32 reason */ 9:
                    message.reason = reader.uint32();
                    break;
                case /* bool is_drop */ 14:
                    message.isDrop = reader.bool();
                    break;
                case /* CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType msg_type */ 6:
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
    internalBinaryWrite(message: CheckAddItemExceedLimitNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 Unk3300_PKJMEJKAPBI = 4 [json_name = "Unk3300PKJMEJKAPBI"]; */
        if (message.unk3300PKJMEJKAPBI.length) {
            writer.tag(4, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300PKJMEJKAPBI.length; i++)
                writer.uint32(message.unk3300PKJMEJKAPBI[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_GPDPCJLHBDE = 11 [json_name = "Unk3300GPDPCJLHBDE"]; */
        if (message.unk3300GPDPCJLHBDE.length) {
            writer.tag(11, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300GPDPCJLHBDE.length; i++)
                writer.uint32(message.unk3300GPDPCJLHBDE[i]);
            writer.join();
        }
        /* uint32 reason = 9; */
        if (message.reason !== 0)
            writer.tag(9, WireType.Varint).uint32(message.reason);
        /* bool is_drop = 14; */
        if (message.isDrop !== false)
            writer.tag(14, WireType.Varint).bool(message.isDrop);
        /* CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType msg_type = 6; */
        if (message.msgType !== 0)
            writer.tag(6, WireType.Varint).int32(message.msgType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CheckAddItemExceedLimitNotify
 */
export const CheckAddItemExceedLimitNotify = new CheckAddItemExceedLimitNotify$Type();