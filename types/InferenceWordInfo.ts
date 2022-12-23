// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "InferenceWordInfo.proto" (syntax proto3)
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
 * @generated from protobuf message InferenceWordInfo
 */
export interface InferenceWordInfo {
    /**
     * @generated from protobuf field: bool is_submit = 12;
     */
    isSubmit: boolean;
    /**
     * @generated from protobuf field: uint32 unlock_by_word_id = 11;
     */
    unlockByWordId: number;
    /**
     * @generated from protobuf field: bool is_associate = 10;
     */
    isAssociate: boolean;
    /**
     * @generated from protobuf field: uint32 word_id = 2;
     */
    wordId: number;
    /**
     * @generated from protobuf field: bool is_interpret = 3;
     */
    isInterpret: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class InferenceWordInfo$Type extends MessageType<InferenceWordInfo> {
    constructor() {
        super("InferenceWordInfo", [
            { no: 12, name: "is_submit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "unlock_by_word_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_associate", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "word_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_interpret", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<InferenceWordInfo>): InferenceWordInfo {
        const message = { isSubmit: false, unlockByWordId: 0, isAssociate: false, wordId: 0, isInterpret: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InferenceWordInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InferenceWordInfo): InferenceWordInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_submit */ 12:
                    message.isSubmit = reader.bool();
                    break;
                case /* uint32 unlock_by_word_id */ 11:
                    message.unlockByWordId = reader.uint32();
                    break;
                case /* bool is_associate */ 10:
                    message.isAssociate = reader.bool();
                    break;
                case /* uint32 word_id */ 2:
                    message.wordId = reader.uint32();
                    break;
                case /* bool is_interpret */ 3:
                    message.isInterpret = reader.bool();
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
    internalBinaryWrite(message: InferenceWordInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_submit = 12; */
        if (message.isSubmit !== false)
            writer.tag(12, WireType.Varint).bool(message.isSubmit);
        /* uint32 unlock_by_word_id = 11; */
        if (message.unlockByWordId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unlockByWordId);
        /* bool is_associate = 10; */
        if (message.isAssociate !== false)
            writer.tag(10, WireType.Varint).bool(message.isAssociate);
        /* uint32 word_id = 2; */
        if (message.wordId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.wordId);
        /* bool is_interpret = 3; */
        if (message.isInterpret !== false)
            writer.tag(3, WireType.Varint).bool(message.isInterpret);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InferenceWordInfo
 */
export const InferenceWordInfo = new InferenceWordInfo$Type();
