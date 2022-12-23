// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ExpeditionActivityDetailInfo.proto" (syntax proto3)
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
import { ExpeditionPathInfo } from "./ExpeditionPathInfo";
import { ExpeditionChallengeInfo } from "./ExpeditionChallengeInfo";
/**
 * @generated from protobuf message ExpeditionActivityDetailInfo
 */
export interface ExpeditionActivityDetailInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_GJLCAJOFCKL = 9 [json_name = "Unk3300GJLCAJOFCKL"];
     */
    unk3300GJLCAJOFCKL: number;
    /**
     * @generated from protobuf field: repeated ExpeditionChallengeInfo challenge_info_list = 15;
     */
    challengeInfoList: ExpeditionChallengeInfo[];
    /**
     * @generated from protobuf field: uint32 Unk3300_MNPBCNEDKAJ = 3 [json_name = "Unk3300MNPBCNEDKAJ"];
     */
    unk3300MNPBCNEDKAJ: number;
    /**
     * @generated from protobuf field: repeated ExpeditionPathInfo path_info_list = 11;
     */
    pathInfoList: ExpeditionPathInfo[];
    /**
     * @generated from protobuf field: bool is_content_closed = 4;
     */
    isContentClosed: boolean;
    /**
     * @generated from protobuf field: uint32 content_close_time = 6;
     */
    contentCloseTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ExpeditionActivityDetailInfo$Type extends MessageType<ExpeditionActivityDetailInfo> {
    constructor() {
        super("ExpeditionActivityDetailInfo", [
            { no: 9, name: "Unk3300_GJLCAJOFCKL", kind: "scalar", jsonName: "Unk3300GJLCAJOFCKL", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "challenge_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExpeditionChallengeInfo },
            { no: 3, name: "Unk3300_MNPBCNEDKAJ", kind: "scalar", jsonName: "Unk3300MNPBCNEDKAJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "path_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExpeditionPathInfo },
            { no: 4, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ExpeditionActivityDetailInfo>): ExpeditionActivityDetailInfo {
        const message = { unk3300GJLCAJOFCKL: 0, challengeInfoList: [], unk3300MNPBCNEDKAJ: 0, pathInfoList: [], isContentClosed: false, contentCloseTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExpeditionActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExpeditionActivityDetailInfo): ExpeditionActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_GJLCAJOFCKL = 9 [json_name = "Unk3300GJLCAJOFCKL"];*/ 9:
                    message.unk3300GJLCAJOFCKL = reader.uint32();
                    break;
                case /* repeated ExpeditionChallengeInfo challenge_info_list */ 15:
                    message.challengeInfoList.push(ExpeditionChallengeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_MNPBCNEDKAJ = 3 [json_name = "Unk3300MNPBCNEDKAJ"];*/ 3:
                    message.unk3300MNPBCNEDKAJ = reader.uint32();
                    break;
                case /* repeated ExpeditionPathInfo path_info_list */ 11:
                    message.pathInfoList.push(ExpeditionPathInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_content_closed */ 4:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 content_close_time */ 6:
                    message.contentCloseTime = reader.uint32();
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
    internalBinaryWrite(message: ExpeditionActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_GJLCAJOFCKL = 9 [json_name = "Unk3300GJLCAJOFCKL"]; */
        if (message.unk3300GJLCAJOFCKL !== 0)
            writer.tag(9, WireType.Varint).uint32(message.unk3300GJLCAJOFCKL);
        /* repeated ExpeditionChallengeInfo challenge_info_list = 15; */
        for (let i = 0; i < message.challengeInfoList.length; i++)
            ExpeditionChallengeInfo.internalBinaryWrite(message.challengeInfoList[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_MNPBCNEDKAJ = 3 [json_name = "Unk3300MNPBCNEDKAJ"]; */
        if (message.unk3300MNPBCNEDKAJ !== 0)
            writer.tag(3, WireType.Varint).uint32(message.unk3300MNPBCNEDKAJ);
        /* repeated ExpeditionPathInfo path_info_list = 11; */
        for (let i = 0; i < message.pathInfoList.length; i++)
            ExpeditionPathInfo.internalBinaryWrite(message.pathInfoList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* bool is_content_closed = 4; */
        if (message.isContentClosed !== false)
            writer.tag(4, WireType.Varint).bool(message.isContentClosed);
        /* uint32 content_close_time = 6; */
        if (message.contentCloseTime !== 0)
            writer.tag(6, WireType.Varint).uint32(message.contentCloseTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ExpeditionActivityDetailInfo
 */
export const ExpeditionActivityDetailInfo = new ExpeditionActivityDetailInfo$Type();
