// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ChannelerSlabStageActiveChallengeIndexNotify.proto" (syntax proto3)
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
 *   CMD_ID = 8857;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ChannelerSlabStageActiveChallengeIndexNotify
 */
export interface ChannelerSlabStageActiveChallengeIndexNotify {
    /**
     * @generated from protobuf field: uint32 challenge_index = 1;
     */
    challengeIndex: number;
    /**
     * @generated from protobuf field: uint32 active_camp_index = 14;
     */
    activeCampIndex: number;
    /**
     * @generated from protobuf field: uint32 stage_id = 10;
     */
    stageId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabStageActiveChallengeIndexNotify$Type extends MessageType<ChannelerSlabStageActiveChallengeIndexNotify> {
    constructor() {
        super("ChannelerSlabStageActiveChallengeIndexNotify", [
            { no: 1, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "active_camp_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ChannelerSlabStageActiveChallengeIndexNotify>): ChannelerSlabStageActiveChallengeIndexNotify {
        const message = { challengeIndex: 0, activeCampIndex: 0, stageId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChannelerSlabStageActiveChallengeIndexNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChannelerSlabStageActiveChallengeIndexNotify): ChannelerSlabStageActiveChallengeIndexNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 challenge_index */ 1:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* uint32 active_camp_index */ 14:
                    message.activeCampIndex = reader.uint32();
                    break;
                case /* uint32 stage_id */ 10:
                    message.stageId = reader.uint32();
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
    internalBinaryWrite(message: ChannelerSlabStageActiveChallengeIndexNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 challenge_index = 1; */
        if (message.challengeIndex !== 0)
            writer.tag(1, WireType.Varint).uint32(message.challengeIndex);
        /* uint32 active_camp_index = 14; */
        if (message.activeCampIndex !== 0)
            writer.tag(14, WireType.Varint).uint32(message.activeCampIndex);
        /* uint32 stage_id = 10; */
        if (message.stageId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabStageActiveChallengeIndexNotify
 */
export const ChannelerSlabStageActiveChallengeIndexNotify = new ChannelerSlabStageActiveChallengeIndexNotify$Type();