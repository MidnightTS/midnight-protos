// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HomeStakePlayRecord.proto" (syntax proto3)
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
import { HomeGroupPlayerInfo } from "./HomeGroupPlayerInfo";
/**
 * @generated from protobuf message HomeStakePlayRecord
 */
export interface HomeStakePlayRecord {
    /**
     * @generated from protobuf field: repeated HomeGroupPlayerInfo engaged_player_info_list = 7;
     */
    engagedPlayerInfoList: HomeGroupPlayerInfo[];
    /**
     * @generated from protobuf field: uint32 timestamp = 3;
     */
    timestamp: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeStakePlayRecord$Type extends MessageType<HomeStakePlayRecord> {
    constructor() {
        super("HomeStakePlayRecord", [
            { no: 7, name: "engaged_player_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeGroupPlayerInfo },
            { no: 3, name: "timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HomeStakePlayRecord>): HomeStakePlayRecord {
        const message = { engagedPlayerInfoList: [], timestamp: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeStakePlayRecord>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeStakePlayRecord): HomeStakePlayRecord {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated HomeGroupPlayerInfo engaged_player_info_list */ 7:
                    message.engagedPlayerInfoList.push(HomeGroupPlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 timestamp */ 3:
                    message.timestamp = reader.uint32();
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
    internalBinaryWrite(message: HomeStakePlayRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated HomeGroupPlayerInfo engaged_player_info_list = 7; */
        for (let i = 0; i < message.engagedPlayerInfoList.length; i++)
            HomeGroupPlayerInfo.internalBinaryWrite(message.engagedPlayerInfoList[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* uint32 timestamp = 3; */
        if (message.timestamp !== 0)
            writer.tag(3, WireType.Varint).uint32(message.timestamp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeStakePlayRecord
 */
export const HomeStakePlayRecord = new HomeStakePlayRecord$Type();
