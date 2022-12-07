// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "FleurFairPlayerStatInfo.proto" (syntax proto3)
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
import { ProfilePicture } from "./ProfilePicture";
/**
 * @generated from protobuf message FleurFairPlayerStatInfo
 */
export interface FleurFairPlayerStatInfo {
    /**
     * @generated from protobuf field: ProfilePicture profile_picture = 5;
     */
    profilePicture?: ProfilePicture;
    /**
     * @generated from protobuf field: uint32 stat_id = 4;
     */
    statId: number;
    /**
     * @generated from protobuf field: uint32 head_image = 6;
     */
    headImage: number;
    /**
     * @generated from protobuf field: int32 param = 8;
     */
    param: number;
    /**
     * @generated from protobuf field: uint32 uid = 9;
     */
    uid: number;
    /**
     * @generated from protobuf field: string nick_name = 2;
     */
    nickName: string;
    /**
     * @generated from protobuf field: string online_id = 11;
     */
    onlineId: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairPlayerStatInfo$Type extends MessageType<FleurFairPlayerStatInfo> {
    constructor() {
        super("FleurFairPlayerStatInfo", [
            { no: 5, name: "profile_picture", kind: "message", T: () => ProfilePicture },
            { no: 4, name: "stat_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "head_image", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "param", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nick_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<FleurFairPlayerStatInfo>): FleurFairPlayerStatInfo {
        const message = { statId: 0, headImage: 0, param: 0, uid: 0, nickName: "", onlineId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FleurFairPlayerStatInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FleurFairPlayerStatInfo): FleurFairPlayerStatInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ProfilePicture profile_picture */ 5:
                    message.profilePicture = ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* uint32 stat_id */ 4:
                    message.statId = reader.uint32();
                    break;
                case /* uint32 head_image */ 6:
                    message.headImage = reader.uint32();
                    break;
                case /* int32 param */ 8:
                    message.param = reader.int32();
                    break;
                case /* uint32 uid */ 9:
                    message.uid = reader.uint32();
                    break;
                case /* string nick_name */ 2:
                    message.nickName = reader.string();
                    break;
                case /* string online_id */ 11:
                    message.onlineId = reader.string();
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
    internalBinaryWrite(message: FleurFairPlayerStatInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ProfilePicture profile_picture = 5; */
        if (message.profilePicture)
            ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* uint32 stat_id = 4; */
        if (message.statId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.statId);
        /* uint32 head_image = 6; */
        if (message.headImage !== 0)
            writer.tag(6, WireType.Varint).uint32(message.headImage);
        /* int32 param = 8; */
        if (message.param !== 0)
            writer.tag(8, WireType.Varint).int32(message.param);
        /* uint32 uid = 9; */
        if (message.uid !== 0)
            writer.tag(9, WireType.Varint).uint32(message.uid);
        /* string nick_name = 2; */
        if (message.nickName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.nickName);
        /* string online_id = 11; */
        if (message.onlineId !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.onlineId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairPlayerStatInfo
 */
export const FleurFairPlayerStatInfo = new FleurFairPlayerStatInfo$Type();