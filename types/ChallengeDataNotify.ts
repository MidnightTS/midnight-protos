// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ChallengeDataNotify.proto" (syntax proto3)
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
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 973;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ChallengeDataNotify
 */
export interface ChallengeDataNotify {
    /**
     * @generated from protobuf field: uint32 param_index = 4;
     */
    paramIndex: number;
    /**
     * @generated from protobuf field: uint32 challenge_index = 2;
     */
    challengeIndex: number;
    /**
     * @generated from protobuf field: uint32 value = 3;
     */
    value: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChallengeDataNotify$Type extends MessageType<ChallengeDataNotify> {
    constructor() {
        super("ChallengeDataNotify", [
            { no: 4, name: "param_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ChallengeDataNotify>): ChallengeDataNotify {
        const message = { paramIndex: 0, challengeIndex: 0, value: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChallengeDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChallengeDataNotify): ChallengeDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 param_index */ 4:
                    message.paramIndex = reader.uint32();
                    break;
                case /* uint32 challenge_index */ 2:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* uint32 value */ 3:
                    message.value = reader.uint32();
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
    internalBinaryWrite(message: ChallengeDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 param_index = 4; */
        if (message.paramIndex !== 0)
            writer.tag(4, WireType.Varint).uint32(message.paramIndex);
        /* uint32 challenge_index = 2; */
        if (message.challengeIndex !== 0)
            writer.tag(2, WireType.Varint).uint32(message.challengeIndex);
        /* uint32 value = 3; */
        if (message.value !== 0)
            writer.tag(3, WireType.Varint).uint32(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChallengeDataNotify
 */
export const ChallengeDataNotify = new ChallengeDataNotify$Type();
