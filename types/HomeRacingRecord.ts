// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HomeRacingRecord.proto" (syntax proto3)
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
import { HomeRacingGalleryRecord } from "./HomeRacingGalleryRecord";
/**
 * @generated from protobuf message HomeRacingRecord
 */
export interface HomeRacingRecord {
    /**
     * @generated from protobuf field: repeated HomeRacingGalleryRecord record_list = 9;
     */
    recordList: HomeRacingGalleryRecord[];
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeRacingRecord$Type extends MessageType<HomeRacingRecord> {
    constructor() {
        super("HomeRacingRecord", [
            { no: 9, name: "record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeRacingGalleryRecord }
        ]);
    }
    create(value?: PartialMessage<HomeRacingRecord>): HomeRacingRecord {
        const message = { recordList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeRacingRecord>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeRacingRecord): HomeRacingRecord {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated HomeRacingGalleryRecord record_list */ 9:
                    message.recordList.push(HomeRacingGalleryRecord.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: HomeRacingRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated HomeRacingGalleryRecord record_list = 9; */
        for (let i = 0; i < message.recordList.length; i++)
            HomeRacingGalleryRecord.internalBinaryWrite(message.recordList[i], writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeRacingRecord
 */
export const HomeRacingRecord = new HomeRacingRecord$Type();
