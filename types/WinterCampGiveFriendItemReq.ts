// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "WinterCampGiveFriendItemReq.proto" (syntax proto3)
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
import { ItemParam } from "./ItemParam";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8102;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message WinterCampGiveFriendItemReq
 */
export interface WinterCampGiveFriendItemReq {
    /**
     * @generated from protobuf field: uint32 uid = 11;
     */
    uid: number;
    /**
     * @generated from protobuf field: repeated ItemParam item_list = 3;
     */
    itemList: ItemParam[];
}
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampGiveFriendItemReq$Type extends MessageType<WinterCampGiveFriendItemReq> {
    constructor() {
        super("WinterCampGiveFriendItemReq", [
            { no: 11, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam }
        ]);
    }
    create(value?: PartialMessage<WinterCampGiveFriendItemReq>): WinterCampGiveFriendItemReq {
        const message = { uid: 0, itemList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WinterCampGiveFriendItemReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WinterCampGiveFriendItemReq): WinterCampGiveFriendItemReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 uid */ 11:
                    message.uid = reader.uint32();
                    break;
                case /* repeated ItemParam item_list */ 3:
                    message.itemList.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: WinterCampGiveFriendItemReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 uid = 11; */
        if (message.uid !== 0)
            writer.tag(11, WireType.Varint).uint32(message.uid);
        /* repeated ItemParam item_list = 3; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampGiveFriendItemReq
 */
export const WinterCampGiveFriendItemReq = new WinterCampGiveFriendItemReq$Type();