// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "UpdateSalvageBundleMarkReq.proto" (syntax proto3)
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
 *   CMD_ID = 8906;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message UpdateSalvageBundleMarkReq
 */
export interface UpdateSalvageBundleMarkReq {
    /**
     * @generated from protobuf field: uint32 challenge_type = 6;
     */
    challengeType: number;
    /**
     * @generated from protobuf field: uint32 stage_id = 11;
     */
    stageId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class UpdateSalvageBundleMarkReq$Type extends MessageType<UpdateSalvageBundleMarkReq> {
    constructor() {
        super("UpdateSalvageBundleMarkReq", [
            { no: 6, name: "challenge_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<UpdateSalvageBundleMarkReq>): UpdateSalvageBundleMarkReq {
        const message = { challengeType: 0, stageId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateSalvageBundleMarkReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateSalvageBundleMarkReq): UpdateSalvageBundleMarkReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 challenge_type */ 6:
                    message.challengeType = reader.uint32();
                    break;
                case /* uint32 stage_id */ 11:
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
    internalBinaryWrite(message: UpdateSalvageBundleMarkReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 challenge_type = 6; */
        if (message.challengeType !== 0)
            writer.tag(6, WireType.Varint).uint32(message.challengeType);
        /* uint32 stage_id = 11; */
        if (message.stageId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UpdateSalvageBundleMarkReq
 */
export const UpdateSalvageBundleMarkReq = new UpdateSalvageBundleMarkReq$Type();
