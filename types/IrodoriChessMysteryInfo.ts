// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "IrodoriChessMysteryInfo.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { IrodoriChessEntranceDetailInfo } from "./IrodoriChessEntranceDetailInfo";
/**
 * @generated from protobuf message IrodoriChessMysteryInfo
 */
export interface IrodoriChessMysteryInfo {
    /**
     * @generated from protobuf field: IrodoriChessEntranceDetailInfo entrance_detail_info = 3;
     */
    entranceDetailInfo?: IrodoriChessEntranceDetailInfo;
    /**
     * @generated from protobuf field: repeated uint32 exit_point_id_list = 14;
     */
    exitPointIdList: number[];
    /**
     * @generated from protobuf field: repeated uint32 entrance_point_id_list = 11;
     */
    entrancePointIdList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessMysteryInfo$Type extends MessageType<IrodoriChessMysteryInfo> {
    constructor() {
        super("IrodoriChessMysteryInfo", [
            { no: 3, name: "entrance_detail_info", kind: "message", T: () => IrodoriChessEntranceDetailInfo },
            { no: 14, name: "exit_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "entrance_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<IrodoriChessMysteryInfo>): IrodoriChessMysteryInfo {
        const message = { exitPointIdList: [], entrancePointIdList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IrodoriChessMysteryInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IrodoriChessMysteryInfo): IrodoriChessMysteryInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* IrodoriChessEntranceDetailInfo entrance_detail_info */ 3:
                    message.entranceDetailInfo = IrodoriChessEntranceDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.entranceDetailInfo);
                    break;
                case /* repeated uint32 exit_point_id_list */ 14:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exitPointIdList.push(reader.uint32());
                    else
                        message.exitPointIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 entrance_point_id_list */ 11:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entrancePointIdList.push(reader.uint32());
                    else
                        message.entrancePointIdList.push(reader.uint32());
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
    internalBinaryWrite(message: IrodoriChessMysteryInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* IrodoriChessEntranceDetailInfo entrance_detail_info = 3; */
        if (message.entranceDetailInfo)
            IrodoriChessEntranceDetailInfo.internalBinaryWrite(message.entranceDetailInfo, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 exit_point_id_list = 14; */
        if (message.exitPointIdList.length) {
            writer.tag(14, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exitPointIdList.length; i++)
                writer.uint32(message.exitPointIdList[i]);
            writer.join();
        }
        /* repeated uint32 entrance_point_id_list = 11; */
        if (message.entrancePointIdList.length) {
            writer.tag(11, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entrancePointIdList.length; i++)
                writer.uint32(message.entrancePointIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriChessMysteryInfo
 */
export const IrodoriChessMysteryInfo = new IrodoriChessMysteryInfo$Type();
