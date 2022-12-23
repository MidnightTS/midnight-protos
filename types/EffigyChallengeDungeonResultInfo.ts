// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "EffigyChallengeDungeonResultInfo.proto" (syntax proto3)
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
 * @generated from protobuf message EffigyChallengeDungeonResultInfo
 */
export interface EffigyChallengeDungeonResultInfo {
    /**
     * @generated from protobuf field: uint32 challenge_score = 12;
     */
    challengeScore: number;
    /**
     * @generated from protobuf field: uint32 challenge_max_score = 8;
     */
    challengeMaxScore: number;
    /**
     * @generated from protobuf field: bool is_success = 2;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: bool is_in_time_limit = 1;
     */
    isInTimeLimit: boolean;
    /**
     * @generated from protobuf field: uint32 challenge_id = 15;
     */
    challengeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EffigyChallengeDungeonResultInfo$Type extends MessageType<EffigyChallengeDungeonResultInfo> {
    constructor() {
        super("EffigyChallengeDungeonResultInfo", [
            { no: 12, name: "challenge_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "challenge_max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "is_in_time_limit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EffigyChallengeDungeonResultInfo>): EffigyChallengeDungeonResultInfo {
        const message = { challengeScore: 0, challengeMaxScore: 0, isSuccess: false, isInTimeLimit: false, challengeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EffigyChallengeDungeonResultInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EffigyChallengeDungeonResultInfo): EffigyChallengeDungeonResultInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 challenge_score */ 12:
                    message.challengeScore = reader.uint32();
                    break;
                case /* uint32 challenge_max_score */ 8:
                    message.challengeMaxScore = reader.uint32();
                    break;
                case /* bool is_success */ 2:
                    message.isSuccess = reader.bool();
                    break;
                case /* bool is_in_time_limit */ 1:
                    message.isInTimeLimit = reader.bool();
                    break;
                case /* uint32 challenge_id */ 15:
                    message.challengeId = reader.uint32();
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
    internalBinaryWrite(message: EffigyChallengeDungeonResultInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 challenge_score = 12; */
        if (message.challengeScore !== 0)
            writer.tag(12, WireType.Varint).uint32(message.challengeScore);
        /* uint32 challenge_max_score = 8; */
        if (message.challengeMaxScore !== 0)
            writer.tag(8, WireType.Varint).uint32(message.challengeMaxScore);
        /* bool is_success = 2; */
        if (message.isSuccess !== false)
            writer.tag(2, WireType.Varint).bool(message.isSuccess);
        /* bool is_in_time_limit = 1; */
        if (message.isInTimeLimit !== false)
            writer.tag(1, WireType.Varint).bool(message.isInTimeLimit);
        /* uint32 challenge_id = 15; */
        if (message.challengeId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.challengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EffigyChallengeDungeonResultInfo
 */
export const EffigyChallengeDungeonResultInfo = new EffigyChallengeDungeonResultInfo$Type();
