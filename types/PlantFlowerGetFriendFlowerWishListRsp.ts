// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PlantFlowerGetFriendFlowerWishListRsp.proto" (syntax proto3)
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
import { PlantFlowerFriendFlowerWishData } from "./PlantFlowerFriendFlowerWishData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8682;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message PlantFlowerGetFriendFlowerWishListRsp
 */
export interface PlantFlowerGetFriendFlowerWishListRsp {
    /**
     * @generated from protobuf field: uint32 schedule_id = 14;
     */
    scheduleId: number;
    /**
     * @generated from protobuf field: int32 retcode = 7;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated PlantFlowerFriendFlowerWishData friend_flower_wish_list = 13;
     */
    friendFlowerWishList: PlantFlowerFriendFlowerWishData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerGetFriendFlowerWishListRsp$Type extends MessageType<PlantFlowerGetFriendFlowerWishListRsp> {
    constructor() {
        super("PlantFlowerGetFriendFlowerWishListRsp", [
            { no: 14, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "friend_flower_wish_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlantFlowerFriendFlowerWishData }
        ]);
    }
    create(value?: PartialMessage<PlantFlowerGetFriendFlowerWishListRsp>): PlantFlowerGetFriendFlowerWishListRsp {
        const message = { scheduleId: 0, retcode: 0, friendFlowerWishList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlantFlowerGetFriendFlowerWishListRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlantFlowerGetFriendFlowerWishListRsp): PlantFlowerGetFriendFlowerWishListRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 schedule_id */ 14:
                    message.scheduleId = reader.uint32();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* repeated PlantFlowerFriendFlowerWishData friend_flower_wish_list */ 13:
                    message.friendFlowerWishList.push(PlantFlowerFriendFlowerWishData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: PlantFlowerGetFriendFlowerWishListRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 schedule_id = 14; */
        if (message.scheduleId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.scheduleId);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, WireType.Varint).int32(message.retcode);
        /* repeated PlantFlowerFriendFlowerWishData friend_flower_wish_list = 13; */
        for (let i = 0; i < message.friendFlowerWishList.length; i++)
            PlantFlowerFriendFlowerWishData.internalBinaryWrite(message.friendFlowerWishList[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerGetFriendFlowerWishListRsp
 */
export const PlantFlowerGetFriendFlowerWishListRsp = new PlantFlowerGetFriendFlowerWishListRsp$Type();
