// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CustomDungeonSocialMuipData.proto" (syntax proto3)
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
/**
 * @generated from protobuf message CustomDungeonSocialMuipData
 */
export interface CustomDungeonSocialMuipData {
    /**
     * @generated from protobuf field: uint32 play_num = 1;
     */
    playNum: number;
    /**
     * @generated from protobuf field: uint32 like_num = 2;
     */
    likeNum: number;
    /**
     * @generated from protobuf field: uint32 store_num = 3;
     */
    storeNum: number;
    /**
     * @generated from protobuf field: uint32 win_num = 4;
     */
    winNum: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonSocialMuipData$Type extends MessageType<CustomDungeonSocialMuipData> {
    constructor() {
        super("CustomDungeonSocialMuipData", [
            { no: 1, name: "play_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "like_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "store_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "win_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CustomDungeonSocialMuipData>): CustomDungeonSocialMuipData {
        const message = { playNum: 0, likeNum: 0, storeNum: 0, winNum: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomDungeonSocialMuipData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomDungeonSocialMuipData): CustomDungeonSocialMuipData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 play_num */ 1:
                    message.playNum = reader.uint32();
                    break;
                case /* uint32 like_num */ 2:
                    message.likeNum = reader.uint32();
                    break;
                case /* uint32 store_num */ 3:
                    message.storeNum = reader.uint32();
                    break;
                case /* uint32 win_num */ 4:
                    message.winNum = reader.uint32();
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
    internalBinaryWrite(message: CustomDungeonSocialMuipData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 play_num = 1; */
        if (message.playNum !== 0)
            writer.tag(1, WireType.Varint).uint32(message.playNum);
        /* uint32 like_num = 2; */
        if (message.likeNum !== 0)
            writer.tag(2, WireType.Varint).uint32(message.likeNum);
        /* uint32 store_num = 3; */
        if (message.storeNum !== 0)
            writer.tag(3, WireType.Varint).uint32(message.storeNum);
        /* uint32 win_num = 4; */
        if (message.winNum !== 0)
            writer.tag(4, WireType.Varint).uint32(message.winNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonSocialMuipData
 */
export const CustomDungeonSocialMuipData = new CustomDungeonSocialMuipData$Type();
