// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ChallengeRecord.proto" (syntax proto3)
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
 * @generated from protobuf message ChallengeRecord
 */
export interface ChallengeRecord {
    /**
     * @generated from protobuf field: uint32 challenge_record_type = 2;
     */
    challengeRecordType: number;
    /**
     * @generated from protobuf field: uint32 challenge_index = 3;
     */
    challengeIndex: number;
    /**
     * @generated from protobuf field: uint32 challenge_id = 9;
     */
    challengeId: number;
    /**
     * @generated from protobuf field: uint32 best_value = 4;
     */
    bestValue: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChallengeRecord$Type extends MessageType<ChallengeRecord> {
    constructor() {
        super("ChallengeRecord", [
            { no: 2, name: "challenge_record_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "best_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ChallengeRecord>): ChallengeRecord {
        const message = { challengeRecordType: 0, challengeIndex: 0, challengeId: 0, bestValue: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChallengeRecord>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChallengeRecord): ChallengeRecord {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 challenge_record_type */ 2:
                    message.challengeRecordType = reader.uint32();
                    break;
                case /* uint32 challenge_index */ 3:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* uint32 challenge_id */ 9:
                    message.challengeId = reader.uint32();
                    break;
                case /* uint32 best_value */ 4:
                    message.bestValue = reader.uint32();
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
    internalBinaryWrite(message: ChallengeRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 challenge_record_type = 2; */
        if (message.challengeRecordType !== 0)
            writer.tag(2, WireType.Varint).uint32(message.challengeRecordType);
        /* uint32 challenge_index = 3; */
        if (message.challengeIndex !== 0)
            writer.tag(3, WireType.Varint).uint32(message.challengeIndex);
        /* uint32 challenge_id = 9; */
        if (message.challengeId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.challengeId);
        /* uint32 best_value = 4; */
        if (message.bestValue !== 0)
            writer.tag(4, WireType.Varint).uint32(message.bestValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChallengeRecord
 */
export const ChallengeRecord = new ChallengeRecord$Type();
