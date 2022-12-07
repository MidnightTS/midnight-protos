// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "LockedPersonallineData.proto" (syntax proto3)
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
/**
 * @generated from protobuf message LockedPersonallineData
 */
export interface LockedPersonallineData {
    /**
     * @generated from protobuf field: LockedPersonallineData.LockReason lock_reason = 13;
     */
    lockReason: LockedPersonallineData_LockReason;
    /**
     * @generated from protobuf field: uint32 personal_line_id = 3;
     */
    personalLineId: number;
    /**
     * @generated from protobuf oneof: param
     */
    param: {
        oneofKind: "chapterId";
        /**
         * @generated from protobuf field: uint32 chapter_id = 4;
         */
        chapterId: number;
    } | {
        oneofKind: "level";
        /**
         * @generated from protobuf field: uint32 level = 15;
         */
        level: number;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf enum LockedPersonallineData.LockReason
 */
export enum LockedPersonallineData_LockReason {
    /**
     * @generated from protobuf enum value: LOCK_REASON_LEVEL = 0;
     */
    LEVEL = 0,
    /**
     * @generated from protobuf enum value: LOCK_REASON_QUEST = 1;
     */
    QUEST = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class LockedPersonallineData$Type extends MessageType<LockedPersonallineData> {
    constructor() {
        super("LockedPersonallineData", [
            { no: 13, name: "lock_reason", kind: "enum", T: () => ["LockedPersonallineData.LockReason", LockedPersonallineData_LockReason, "LOCK_REASON_"] },
            { no: 3, name: "personal_line_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "chapter_id", kind: "scalar", oneof: "param", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "level", kind: "scalar", oneof: "param", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<LockedPersonallineData>): LockedPersonallineData {
        const message = { lockReason: 0, personalLineId: 0, param: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LockedPersonallineData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LockedPersonallineData): LockedPersonallineData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* LockedPersonallineData.LockReason lock_reason */ 13:
                    message.lockReason = reader.int32();
                    break;
                case /* uint32 personal_line_id */ 3:
                    message.personalLineId = reader.uint32();
                    break;
                case /* uint32 chapter_id */ 4:
                    message.param = {
                        oneofKind: "chapterId",
                        chapterId: reader.uint32()
                    };
                    break;
                case /* uint32 level */ 15:
                    message.param = {
                        oneofKind: "level",
                        level: reader.uint32()
                    };
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
    internalBinaryWrite(message: LockedPersonallineData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* LockedPersonallineData.LockReason lock_reason = 13; */
        if (message.lockReason !== 0)
            writer.tag(13, WireType.Varint).int32(message.lockReason);
        /* uint32 personal_line_id = 3; */
        if (message.personalLineId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.personalLineId);
        /* uint32 chapter_id = 4; */
        if (message.param.oneofKind === "chapterId")
            writer.tag(4, WireType.Varint).uint32(message.param.chapterId);
        /* uint32 level = 15; */
        if (message.param.oneofKind === "level")
            writer.tag(15, WireType.Varint).uint32(message.param.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LockedPersonallineData
 */
export const LockedPersonallineData = new LockedPersonallineData$Type();
