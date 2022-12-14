// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HomeBalloonGallerySettleNotify.proto" (syntax proto3)
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
import { BalloonGallerySettleInfo } from "./BalloonGallerySettleInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4604;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message HomeBalloonGallerySettleNotify
 */
export interface HomeBalloonGallerySettleNotify {
    /**
     * @generated from protobuf field: uint32 gallery_id = 8;
     */
    galleryId: number;
    /**
     * @generated from protobuf field: uint32 rank = 13;
     */
    rank: number;
    /**
     * @generated from protobuf field: BalloonGallerySettleInfo settle_info = 5;
     */
    settleInfo?: BalloonGallerySettleInfo;
    /**
     * @generated from protobuf field: bool is_new_record = 9;
     */
    isNewRecord: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeBalloonGallerySettleNotify$Type extends MessageType<HomeBalloonGallerySettleNotify> {
    constructor() {
        super("HomeBalloonGallerySettleNotify", [
            { no: 8, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "rank", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "settle_info", kind: "message", T: () => BalloonGallerySettleInfo },
            { no: 9, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<HomeBalloonGallerySettleNotify>): HomeBalloonGallerySettleNotify {
        const message = { galleryId: 0, rank: 0, isNewRecord: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeBalloonGallerySettleNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeBalloonGallerySettleNotify): HomeBalloonGallerySettleNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 gallery_id */ 8:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 rank */ 13:
                    message.rank = reader.uint32();
                    break;
                case /* BalloonGallerySettleInfo settle_info */ 5:
                    message.settleInfo = BalloonGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* bool is_new_record */ 9:
                    message.isNewRecord = reader.bool();
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
    internalBinaryWrite(message: HomeBalloonGallerySettleNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 gallery_id = 8; */
        if (message.galleryId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.galleryId);
        /* uint32 rank = 13; */
        if (message.rank !== 0)
            writer.tag(13, WireType.Varint).uint32(message.rank);
        /* BalloonGallerySettleInfo settle_info = 5; */
        if (message.settleInfo)
            BalloonGallerySettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* bool is_new_record = 9; */
        if (message.isNewRecord !== false)
            writer.tag(9, WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBalloonGallerySettleNotify
 */
export const HomeBalloonGallerySettleNotify = new HomeBalloonGallerySettleNotify$Type();
