// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PlantFlowerFriendFlowerWishData.proto" (syntax proto3)
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
 * @generated from protobuf message PlantFlowerFriendFlowerWishData
 */
export interface PlantFlowerFriendFlowerWishData {
    /**
     * @generated from protobuf field: uint32 uid = 5;
     */
    uid: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> flower_num_map = 11;
     */
    flowerNumMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: ProfilePicture profile_picture = 8;
     */
    profilePicture?: ProfilePicture;
    /**
     * @generated from protobuf field: string nickname = 15;
     */
    nickname: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerFriendFlowerWishData$Type extends MessageType<PlantFlowerFriendFlowerWishData> {
    constructor() {
        super("PlantFlowerFriendFlowerWishData", [
            { no: 5, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "flower_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "profile_picture", kind: "message", T: () => ProfilePicture },
            { no: 15, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<PlantFlowerFriendFlowerWishData>): PlantFlowerFriendFlowerWishData {
        const message = { uid: 0, flowerNumMap: {}, nickname: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlantFlowerFriendFlowerWishData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlantFlowerFriendFlowerWishData): PlantFlowerFriendFlowerWishData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 uid */ 5:
                    message.uid = reader.uint32();
                    break;
                case /* map<uint32, uint32> flower_num_map */ 11:
                    this.binaryReadMap11(message.flowerNumMap, reader, options);
                    break;
                case /* ProfilePicture profile_picture */ 8:
                    message.profilePicture = ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* string nickname */ 15:
                    message.nickname = reader.string();
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
    private binaryReadMap11(map: PlantFlowerFriendFlowerWishData["flowerNumMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PlantFlowerFriendFlowerWishData["flowerNumMap"] | undefined, val: PlantFlowerFriendFlowerWishData["flowerNumMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerFriendFlowerWishData.flower_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: PlantFlowerFriendFlowerWishData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 uid = 5; */
        if (message.uid !== 0)
            writer.tag(5, WireType.Varint).uint32(message.uid);
        /* map<uint32, uint32> flower_num_map = 11; */
        for (let k of Object.keys(message.flowerNumMap))
            writer.tag(11, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.flowerNumMap[k as any]).join();
        /* ProfilePicture profile_picture = 8; */
        if (message.profilePicture)
            ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* string nickname = 15; */
        if (message.nickname !== "")
            writer.tag(15, WireType.LengthDelimited).string(message.nickname);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerFriendFlowerWishData
 */
export const PlantFlowerFriendFlowerWishData = new PlantFlowerFriendFlowerWishData$Type();
