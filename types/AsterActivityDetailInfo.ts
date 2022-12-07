// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AsterActivityDetailInfo.proto" (syntax proto3)
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
import { AsterLargeDetailInfo } from "./AsterLargeDetailInfo";
import { AsterProgressDetailInfo } from "./AsterProgressDetailInfo";
import { AsterMidDetailInfo } from "./AsterMidDetailInfo";
import { AsterLittleDetailInfo } from "./AsterLittleDetailInfo";
/**
 * @generated from protobuf message AsterActivityDetailInfo
 */
export interface AsterActivityDetailInfo {
    /**
     * @generated from protobuf field: uint32 content_close_time = 1;
     */
    contentCloseTime: number;
    /**
     * @generated from protobuf field: AsterLittleDetailInfo aster_little = 5;
     */
    asterLittle?: AsterLittleDetailInfo;
    /**
     * @generated from protobuf field: uint32 Unk3300_DCHBFEJNBHP = 13 [json_name = "Unk3300DCHBFEJNBHP"];
     */
    unk3300DCHBFEJNBHP: number;
    /**
     * @generated from protobuf field: AsterMidDetailInfo aster_mid = 12;
     */
    asterMid?: AsterMidDetailInfo;
    /**
     * @generated from protobuf field: bool is_special_reward_taken = 3;
     */
    isSpecialRewardTaken: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_KFDGFFPJGJC = 4 [json_name = "Unk3300KFDGFFPJGJC"];
     */
    unk3300KFDGFFPJGJC: number;
    /**
     * @generated from protobuf field: AsterProgressDetailInfo aster_progress = 8;
     */
    asterProgress?: AsterProgressDetailInfo;
    /**
     * @generated from protobuf field: AsterLargeDetailInfo aster_large = 10;
     */
    asterLarge?: AsterLargeDetailInfo;
    /**
     * @generated from protobuf field: bool is_content_closed = 6;
     */
    isContentClosed: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class AsterActivityDetailInfo$Type extends MessageType<AsterActivityDetailInfo> {
    constructor() {
        super("AsterActivityDetailInfo", [
            { no: 1, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "aster_little", kind: "message", T: () => AsterLittleDetailInfo },
            { no: 13, name: "Unk3300_DCHBFEJNBHP", kind: "scalar", jsonName: "Unk3300DCHBFEJNBHP", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "aster_mid", kind: "message", T: () => AsterMidDetailInfo },
            { no: 3, name: "is_special_reward_taken", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_KFDGFFPJGJC", kind: "scalar", jsonName: "Unk3300KFDGFFPJGJC", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "aster_progress", kind: "message", T: () => AsterProgressDetailInfo },
            { no: 10, name: "aster_large", kind: "message", T: () => AsterLargeDetailInfo },
            { no: 6, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<AsterActivityDetailInfo>): AsterActivityDetailInfo {
        const message = { contentCloseTime: 0, unk3300DCHBFEJNBHP: 0, isSpecialRewardTaken: false, unk3300KFDGFFPJGJC: 0, isContentClosed: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AsterActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AsterActivityDetailInfo): AsterActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 content_close_time */ 1:
                    message.contentCloseTime = reader.uint32();
                    break;
                case /* AsterLittleDetailInfo aster_little */ 5:
                    message.asterLittle = AsterLittleDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.asterLittle);
                    break;
                case /* uint32 Unk3300_DCHBFEJNBHP = 13 [json_name = "Unk3300DCHBFEJNBHP"];*/ 13:
                    message.unk3300DCHBFEJNBHP = reader.uint32();
                    break;
                case /* AsterMidDetailInfo aster_mid */ 12:
                    message.asterMid = AsterMidDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.asterMid);
                    break;
                case /* bool is_special_reward_taken */ 3:
                    message.isSpecialRewardTaken = reader.bool();
                    break;
                case /* uint32 Unk3300_KFDGFFPJGJC = 4 [json_name = "Unk3300KFDGFFPJGJC"];*/ 4:
                    message.unk3300KFDGFFPJGJC = reader.uint32();
                    break;
                case /* AsterProgressDetailInfo aster_progress */ 8:
                    message.asterProgress = AsterProgressDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.asterProgress);
                    break;
                case /* AsterLargeDetailInfo aster_large */ 10:
                    message.asterLarge = AsterLargeDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.asterLarge);
                    break;
                case /* bool is_content_closed */ 6:
                    message.isContentClosed = reader.bool();
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
    internalBinaryWrite(message: AsterActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 content_close_time = 1; */
        if (message.contentCloseTime !== 0)
            writer.tag(1, WireType.Varint).uint32(message.contentCloseTime);
        /* AsterLittleDetailInfo aster_little = 5; */
        if (message.asterLittle)
            AsterLittleDetailInfo.internalBinaryWrite(message.asterLittle, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_DCHBFEJNBHP = 13 [json_name = "Unk3300DCHBFEJNBHP"]; */
        if (message.unk3300DCHBFEJNBHP !== 0)
            writer.tag(13, WireType.Varint).uint32(message.unk3300DCHBFEJNBHP);
        /* AsterMidDetailInfo aster_mid = 12; */
        if (message.asterMid)
            AsterMidDetailInfo.internalBinaryWrite(message.asterMid, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* bool is_special_reward_taken = 3; */
        if (message.isSpecialRewardTaken !== false)
            writer.tag(3, WireType.Varint).bool(message.isSpecialRewardTaken);
        /* uint32 Unk3300_KFDGFFPJGJC = 4 [json_name = "Unk3300KFDGFFPJGJC"]; */
        if (message.unk3300KFDGFFPJGJC !== 0)
            writer.tag(4, WireType.Varint).uint32(message.unk3300KFDGFFPJGJC);
        /* AsterProgressDetailInfo aster_progress = 8; */
        if (message.asterProgress)
            AsterProgressDetailInfo.internalBinaryWrite(message.asterProgress, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* AsterLargeDetailInfo aster_large = 10; */
        if (message.asterLarge)
            AsterLargeDetailInfo.internalBinaryWrite(message.asterLarge, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* bool is_content_closed = 6; */
        if (message.isContentClosed !== false)
            writer.tag(6, WireType.Varint).bool(message.isContentClosed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AsterActivityDetailInfo
 */
export const AsterActivityDetailInfo = new AsterActivityDetailInfo$Type();
