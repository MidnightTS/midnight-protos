// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "IslandPartySettleNotify.proto" (syntax proto3)
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
import { IslandPartyGallerySettleInfo } from "./IslandPartyGallerySettleInfo";
import { GalleryStopReason } from "./GalleryStopReason";
import { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 24127;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message IslandPartySettleNotify
 */
export interface IslandPartySettleNotify {
    /**
     * @generated from protobuf field: uint32 time_remain = 9;
     */
    timeRemain: number;
    /**
     * @generated from protobuf field: bool is_new_record = 3;
     */
    isNewRecord: boolean;
    /**
     * @generated from protobuf field: repeated ExhibitionDisplayInfo score_list = 5;
     */
    scoreList: ExhibitionDisplayInfo[];
    /**
     * @generated from protobuf field: GalleryStopReason reason = 12;
     */
    reason: GalleryStopReason;
    /**
     * @generated from protobuf field: repeated IslandPartyGallerySettleInfo settle_info_list = 13;
     */
    settleInfoList: IslandPartyGallerySettleInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class IslandPartySettleNotify$Type extends MessageType<IslandPartySettleNotify> {
    constructor() {
        super("IslandPartySettleNotify", [
            { no: 9, name: "time_remain", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "score_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo },
            { no: 12, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason, "GALLERY_STOP_REASON_"] },
            { no: 13, name: "settle_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IslandPartyGallerySettleInfo }
        ]);
    }
    create(value?: PartialMessage<IslandPartySettleNotify>): IslandPartySettleNotify {
        const message = { timeRemain: 0, isNewRecord: false, scoreList: [], reason: 0, settleInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IslandPartySettleNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IslandPartySettleNotify): IslandPartySettleNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 time_remain */ 9:
                    message.timeRemain = reader.uint32();
                    break;
                case /* bool is_new_record */ 3:
                    message.isNewRecord = reader.bool();
                    break;
                case /* repeated ExhibitionDisplayInfo score_list */ 5:
                    message.scoreList.push(ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* GalleryStopReason reason */ 12:
                    message.reason = reader.int32();
                    break;
                case /* repeated IslandPartyGallerySettleInfo settle_info_list */ 13:
                    message.settleInfoList.push(IslandPartyGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: IslandPartySettleNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 time_remain = 9; */
        if (message.timeRemain !== 0)
            writer.tag(9, WireType.Varint).uint32(message.timeRemain);
        /* bool is_new_record = 3; */
        if (message.isNewRecord !== false)
            writer.tag(3, WireType.Varint).bool(message.isNewRecord);
        /* repeated ExhibitionDisplayInfo score_list = 5; */
        for (let i = 0; i < message.scoreList.length; i++)
            ExhibitionDisplayInfo.internalBinaryWrite(message.scoreList[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* GalleryStopReason reason = 12; */
        if (message.reason !== 0)
            writer.tag(12, WireType.Varint).int32(message.reason);
        /* repeated IslandPartyGallerySettleInfo settle_info_list = 13; */
        for (let i = 0; i < message.settleInfoList.length; i++)
            IslandPartyGallerySettleInfo.internalBinaryWrite(message.settleInfoList[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IslandPartySettleNotify
 */
export const IslandPartySettleNotify = new IslandPartySettleNotify$Type();
