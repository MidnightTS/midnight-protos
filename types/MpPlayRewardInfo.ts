// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MpPlayRewardInfo.proto" (syntax proto3)
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
/**
 * @generated from protobuf message MpPlayRewardInfo
 */
export interface MpPlayRewardInfo {
    /**
     * @generated from protobuf field: uint32 resin = 1;
     */
    resin: number;
    /**
     * @generated from protobuf field: repeated uint32 remain_uid_list = 2;
     */
    remainUidList: number[];
    /**
     * @generated from protobuf field: repeated uint32 qualify_uid_list = 3;
     */
    qualifyUidList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayRewardInfo$Type extends MessageType<MpPlayRewardInfo> {
    constructor() {
        super("MpPlayRewardInfo", [
            { no: 1, name: "resin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "remain_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "qualify_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<MpPlayRewardInfo>): MpPlayRewardInfo {
        const message = { resin: 0, remainUidList: [], qualifyUidList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MpPlayRewardInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MpPlayRewardInfo): MpPlayRewardInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 resin */ 1:
                    message.resin = reader.uint32();
                    break;
                case /* repeated uint32 remain_uid_list */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.remainUidList.push(reader.uint32());
                    else
                        message.remainUidList.push(reader.uint32());
                    break;
                case /* repeated uint32 qualify_uid_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.qualifyUidList.push(reader.uint32());
                    else
                        message.qualifyUidList.push(reader.uint32());
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
    internalBinaryWrite(message: MpPlayRewardInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 resin = 1; */
        if (message.resin !== 0)
            writer.tag(1, WireType.Varint).uint32(message.resin);
        /* repeated uint32 remain_uid_list = 2; */
        if (message.remainUidList.length) {
            writer.tag(2, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.remainUidList.length; i++)
                writer.uint32(message.remainUidList[i]);
            writer.join();
        }
        /* repeated uint32 qualify_uid_list = 3; */
        if (message.qualifyUidList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.qualifyUidList.length; i++)
                writer.uint32(message.qualifyUidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MpPlayRewardInfo
 */
export const MpPlayRewardInfo = new MpPlayRewardInfo$Type();
