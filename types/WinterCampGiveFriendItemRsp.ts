// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "WinterCampGiveFriendItemRsp.proto" (syntax proto3)
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
 *   CMD_ID = 8735;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message WinterCampGiveFriendItemRsp
 */
export interface WinterCampGiveFriendItemRsp {
    /**
     * @generated from protobuf field: repeated uint32 limit_item_id_list = 3;
     */
    limitItemIdList: number[];
    /**
     * @generated from protobuf field: int32 retcode = 15;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampGiveFriendItemRsp$Type extends MessageType<WinterCampGiveFriendItemRsp> {
    constructor() {
        super("WinterCampGiveFriendItemRsp", [
            { no: 3, name: "limit_item_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<WinterCampGiveFriendItemRsp>): WinterCampGiveFriendItemRsp {
        const message = { limitItemIdList: [], retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WinterCampGiveFriendItemRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WinterCampGiveFriendItemRsp): WinterCampGiveFriendItemRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 limit_item_id_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.limitItemIdList.push(reader.uint32());
                    else
                        message.limitItemIdList.push(reader.uint32());
                    break;
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
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
    internalBinaryWrite(message: WinterCampGiveFriendItemRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 limit_item_id_list = 3; */
        if (message.limitItemIdList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.limitItemIdList.length; i++)
                writer.uint32(message.limitItemIdList[i]);
            writer.join();
        }
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampGiveFriendItemRsp
 */
export const WinterCampGiveFriendItemRsp = new WinterCampGiveFriendItemRsp$Type();
