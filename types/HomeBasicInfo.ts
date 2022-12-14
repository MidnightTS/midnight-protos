// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HomeBasicInfo.proto" (syntax proto3)
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
import { HomeLimitedShopInfo } from "./HomeLimitedShopInfo";
/**
 * @generated from protobuf message HomeBasicInfo
 */
export interface HomeBasicInfo {
    /**
     * @generated from protobuf field: uint64 exp = 3;
     */
    exp: bigint;
    /**
     * @generated from protobuf field: uint32 home_owner_uid = 11;
     */
    homeOwnerUid: number;
    /**
     * @generated from protobuf field: uint32 cur_room_scene_id = 14;
     */
    curRoomSceneId: number;
    /**
     * @generated from protobuf field: string owner_nick_name = 6;
     */
    ownerNickName: string;
    /**
     * @generated from protobuf field: uint32 cur_module_id = 4;
     */
    curModuleId: number;
    /**
     * @generated from protobuf field: HomeLimitedShopInfo limited_shop_info = 13;
     */
    limitedShopInfo?: HomeLimitedShopInfo;
    /**
     * @generated from protobuf field: bool is_in_edit_mode = 7;
     */
    isInEditMode: boolean;
    /**
     * @generated from protobuf field: uint32 level = 9;
     */
    level: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeBasicInfo$Type extends MessageType<HomeBasicInfo> {
    constructor() {
        super("HomeBasicInfo", [
            { no: 3, name: "exp", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "home_owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cur_room_scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "owner_nick_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "cur_module_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "limited_shop_info", kind: "message", T: () => HomeLimitedShopInfo },
            { no: 7, name: "is_in_edit_mode", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HomeBasicInfo>): HomeBasicInfo {
        const message = { exp: 0n, homeOwnerUid: 0, curRoomSceneId: 0, ownerNickName: "", curModuleId: 0, isInEditMode: false, level: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeBasicInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeBasicInfo): HomeBasicInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 exp */ 3:
                    message.exp = reader.uint64().toBigInt();
                    break;
                case /* uint32 home_owner_uid */ 11:
                    message.homeOwnerUid = reader.uint32();
                    break;
                case /* uint32 cur_room_scene_id */ 14:
                    message.curRoomSceneId = reader.uint32();
                    break;
                case /* string owner_nick_name */ 6:
                    message.ownerNickName = reader.string();
                    break;
                case /* uint32 cur_module_id */ 4:
                    message.curModuleId = reader.uint32();
                    break;
                case /* HomeLimitedShopInfo limited_shop_info */ 13:
                    message.limitedShopInfo = HomeLimitedShopInfo.internalBinaryRead(reader, reader.uint32(), options, message.limitedShopInfo);
                    break;
                case /* bool is_in_edit_mode */ 7:
                    message.isInEditMode = reader.bool();
                    break;
                case /* uint32 level */ 9:
                    message.level = reader.uint32();
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
    internalBinaryWrite(message: HomeBasicInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 exp = 3; */
        if (message.exp !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.exp);
        /* uint32 home_owner_uid = 11; */
        if (message.homeOwnerUid !== 0)
            writer.tag(11, WireType.Varint).uint32(message.homeOwnerUid);
        /* uint32 cur_room_scene_id = 14; */
        if (message.curRoomSceneId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.curRoomSceneId);
        /* string owner_nick_name = 6; */
        if (message.ownerNickName !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.ownerNickName);
        /* uint32 cur_module_id = 4; */
        if (message.curModuleId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.curModuleId);
        /* HomeLimitedShopInfo limited_shop_info = 13; */
        if (message.limitedShopInfo)
            HomeLimitedShopInfo.internalBinaryWrite(message.limitedShopInfo, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* bool is_in_edit_mode = 7; */
        if (message.isInEditMode !== false)
            writer.tag(7, WireType.Varint).bool(message.isInEditMode);
        /* uint32 level = 9; */
        if (message.level !== 0)
            writer.tag(9, WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBasicInfo
 */
export const HomeBasicInfo = new HomeBasicInfo$Type();
