// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SummerTimeSprintBoatInfo.proto" (syntax proto3)
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
import { SummerTimeSprintBoatRecord } from "./SummerTimeSprintBoatRecord";
/**
 * @generated from protobuf message SummerTimeSprintBoatInfo
 */
export interface SummerTimeSprintBoatInfo {
    /**
     * @generated from protobuf field: repeated SummerTimeSprintBoatRecord record_list = 9;
     */
    recordList: SummerTimeSprintBoatRecord[];
}
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeSprintBoatInfo$Type extends MessageType<SummerTimeSprintBoatInfo> {
    constructor() {
        super("SummerTimeSprintBoatInfo", [
            { no: 9, name: "record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SummerTimeSprintBoatRecord }
        ]);
    }
    create(value?: PartialMessage<SummerTimeSprintBoatInfo>): SummerTimeSprintBoatInfo {
        const message = { recordList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SummerTimeSprintBoatInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SummerTimeSprintBoatInfo): SummerTimeSprintBoatInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated SummerTimeSprintBoatRecord record_list */ 9:
                    message.recordList.push(SummerTimeSprintBoatRecord.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: SummerTimeSprintBoatInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated SummerTimeSprintBoatRecord record_list = 9; */
        for (let i = 0; i < message.recordList.length; i++)
            SummerTimeSprintBoatRecord.internalBinaryWrite(message.recordList[i], writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeSprintBoatInfo
 */
export const SummerTimeSprintBoatInfo = new SummerTimeSprintBoatInfo$Type();
