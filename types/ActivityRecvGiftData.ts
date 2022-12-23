// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ActivityRecvGiftData.proto" (syntax proto3)
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
 * @generated from protobuf message ActivityRecvGiftData
 */
export interface ActivityRecvGiftData {
    /**
     * @generated from protobuf field: ProfilePicture profile_picture = 3;
     */
    profilePicture?: ProfilePicture;
    /**
     * @generated from protobuf field: string nickname = 7;
     */
    nickname: string;
    /**
     * @generated from protobuf field: map<uint32, uint32> gift_num_map = 6;
     */
    giftNumMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: string remark_name = 1;
     */
    remarkName: string;
    /**
     * @generated from protobuf field: uint32 uid = 12;
     */
    uid: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ActivityRecvGiftData$Type extends MessageType<ActivityRecvGiftData> {
    constructor() {
        super("ActivityRecvGiftData", [
            { no: 3, name: "profile_picture", kind: "message", T: () => ProfilePicture },
            { no: 7, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "gift_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 1, name: "remark_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ActivityRecvGiftData>): ActivityRecvGiftData {
        const message = { nickname: "", giftNumMap: {}, remarkName: "", uid: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ActivityRecvGiftData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActivityRecvGiftData): ActivityRecvGiftData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ProfilePicture profile_picture */ 3:
                    message.profilePicture = ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* string nickname */ 7:
                    message.nickname = reader.string();
                    break;
                case /* map<uint32, uint32> gift_num_map */ 6:
                    this.binaryReadMap6(message.giftNumMap, reader, options);
                    break;
                case /* string remark_name */ 1:
                    message.remarkName = reader.string();
                    break;
                case /* uint32 uid */ 12:
                    message.uid = reader.uint32();
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
    private binaryReadMap6(map: ActivityRecvGiftData["giftNumMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof ActivityRecvGiftData["giftNumMap"] | undefined, val: ActivityRecvGiftData["giftNumMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ActivityRecvGiftData.gift_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: ActivityRecvGiftData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ProfilePicture profile_picture = 3; */
        if (message.profilePicture)
            ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* string nickname = 7; */
        if (message.nickname !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.nickname);
        /* map<uint32, uint32> gift_num_map = 6; */
        for (let k of Object.keys(message.giftNumMap))
            writer.tag(6, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.giftNumMap[k as any]).join();
        /* string remark_name = 1; */
        if (message.remarkName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.remarkName);
        /* uint32 uid = 12; */
        if (message.uid !== 0)
            writer.tag(12, WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityRecvGiftData
 */
export const ActivityRecvGiftData = new ActivityRecvGiftData$Type();
