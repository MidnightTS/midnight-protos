// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "LanternRiteDoFireworksReformReq.proto" (syntax proto3)
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
 *   CMD_ID = 8517;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message LanternRiteDoFireworksReformReq
 */
export interface LanternRiteDoFireworksReformReq {
    /**
     * @generated from protobuf field: uint32 stage_id = 15;
     */
    stageId: number;
    /**
     * @generated from protobuf field: uint32 challenge_id = 13;
     */
    challengeId: number;
    /**
     * @generated from protobuf field: uint32 factor_id = 9;
     */
    factorId: number;
    /**
     * @generated from protobuf field: uint32 skill_id = 4;
     */
    skillId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteDoFireworksReformReq$Type extends MessageType<LanternRiteDoFireworksReformReq> {
    constructor() {
        super("LanternRiteDoFireworksReformReq", [
            { no: 15, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "factor_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<LanternRiteDoFireworksReformReq>): LanternRiteDoFireworksReformReq {
        const message = { stageId: 0, challengeId: 0, factorId: 0, skillId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LanternRiteDoFireworksReformReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LanternRiteDoFireworksReformReq): LanternRiteDoFireworksReformReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 stage_id */ 15:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 challenge_id */ 13:
                    message.challengeId = reader.uint32();
                    break;
                case /* uint32 factor_id */ 9:
                    message.factorId = reader.uint32();
                    break;
                case /* uint32 skill_id */ 4:
                    message.skillId = reader.uint32();
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
    internalBinaryWrite(message: LanternRiteDoFireworksReformReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 stage_id = 15; */
        if (message.stageId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.stageId);
        /* uint32 challenge_id = 13; */
        if (message.challengeId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.challengeId);
        /* uint32 factor_id = 9; */
        if (message.factorId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.factorId);
        /* uint32 skill_id = 4; */
        if (message.skillId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteDoFireworksReformReq
 */
export const LanternRiteDoFireworksReformReq = new LanternRiteDoFireworksReformReq$Type();