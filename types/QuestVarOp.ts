// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "QuestVarOp.proto" (syntax proto3)
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
 * @generated from protobuf message QuestVarOp
 */
export interface QuestVarOp {
    /**
     * @generated from protobuf field: uint32 index = 9;
     */
    index: number;
    /**
     * @generated from protobuf field: bool is_add = 3;
     */
    isAdd: boolean;
    /**
     * @generated from protobuf field: int32 value = 8;
     */
    value: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class QuestVarOp$Type extends MessageType<QuestVarOp> {
    constructor() {
        super("QuestVarOp", [
            { no: 9, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_add", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "value", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<QuestVarOp>): QuestVarOp {
        const message = { index: 0, isAdd: false, value: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QuestVarOp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuestVarOp): QuestVarOp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 index */ 9:
                    message.index = reader.uint32();
                    break;
                case /* bool is_add */ 3:
                    message.isAdd = reader.bool();
                    break;
                case /* int32 value */ 8:
                    message.value = reader.int32();
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
    internalBinaryWrite(message: QuestVarOp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 index = 9; */
        if (message.index !== 0)
            writer.tag(9, WireType.Varint).uint32(message.index);
        /* bool is_add = 3; */
        if (message.isAdd !== false)
            writer.tag(3, WireType.Varint).bool(message.isAdd);
        /* int32 value = 8; */
        if (message.value !== 0)
            writer.tag(8, WireType.Varint).int32(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestVarOp
 */
export const QuestVarOp = new QuestVarOp$Type();
