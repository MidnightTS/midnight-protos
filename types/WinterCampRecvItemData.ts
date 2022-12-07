// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "WinterCampRecvItemData.proto" (syntax proto3)
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
import { ProfilePicture } from "./ProfilePicture";
/**
 * @generated from protobuf message WinterCampRecvItemData
 */
export interface WinterCampRecvItemData {
    /**
     * @generated from protobuf field: string nickname = 8;
     */
    nickname: string;
    /**
     * @generated from protobuf field: uint32 uid = 6;
     */
    uid: number;
    /**
     * @generated from protobuf field: ProfilePicture profile_picture = 1;
     */
    profilePicture?: ProfilePicture;
    /**
     * @generated from protobuf field: repeated ItemParam item_list = 3;
     */
    itemList: ItemParam[];
}
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampRecvItemData$Type extends MessageType<WinterCampRecvItemData> {
    constructor() {
        super("WinterCampRecvItemData", [
            { no: 8, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "profile_picture", kind: "message", T: () => ProfilePicture },
            { no: 3, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam }
        ]);
    }
    create(value?: PartialMessage<WinterCampRecvItemData>): WinterCampRecvItemData {
        const message = { nickname: "", uid: 0, itemList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WinterCampRecvItemData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WinterCampRecvItemData): WinterCampRecvItemData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string nickname */ 8:
                    message.nickname = reader.string();
                    break;
                case /* uint32 uid */ 6:
                    message.uid = reader.uint32();
                    break;
                case /* ProfilePicture profile_picture */ 1:
                    message.profilePicture = ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
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
    internalBinaryWrite(message: WinterCampRecvItemData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string nickname = 8; */
        if (message.nickname !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.nickname);
        /* uint32 uid = 6; */
        if (message.uid !== 0)
            writer.tag(6, WireType.Varint).uint32(message.uid);
        /* ProfilePicture profile_picture = 1; */
        if (message.profilePicture)
            ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message WinterCampRecvItemData
 */
export const WinterCampRecvItemData = new WinterCampRecvItemData$Type();
