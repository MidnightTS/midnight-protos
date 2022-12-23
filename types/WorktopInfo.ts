// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "WorktopInfo.proto" (syntax proto3)
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
 * @generated from protobuf message WorktopInfo
 */
export interface WorktopInfo {
    /**
     * @generated from protobuf field: repeated uint32 option_list = 1;
     */
    optionList: number[];
    /**
     * @generated from protobuf field: bool is_guest_can_operate = 2;
     */
    isGuestCanOperate: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class WorktopInfo$Type extends MessageType<WorktopInfo> {
    constructor() {
        super("WorktopInfo", [
            { no: 1, name: "option_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_guest_can_operate", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<WorktopInfo>): WorktopInfo {
        const message = { optionList: [], isGuestCanOperate: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WorktopInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WorktopInfo): WorktopInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 option_list */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.optionList.push(reader.uint32());
                    else
                        message.optionList.push(reader.uint32());
                    break;
                case /* bool is_guest_can_operate */ 2:
                    message.isGuestCanOperate = reader.bool();
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
    internalBinaryWrite(message: WorktopInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 option_list = 1; */
        if (message.optionList.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.optionList.length; i++)
                writer.uint32(message.optionList[i]);
            writer.join();
        }
        /* bool is_guest_can_operate = 2; */
        if (message.isGuestCanOperate !== false)
            writer.tag(2, WireType.Varint).bool(message.isGuestCanOperate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WorktopInfo
 */
export const WorktopInfo = new WorktopInfo$Type();
