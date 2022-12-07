// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EvtDoSkillSuccNotify.proto" (syntax proto3)
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
import { Vector } from "./Vector";
import { ForwardType } from "./ForwardType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 319;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message EvtDoSkillSuccNotify
 */
export interface EvtDoSkillSuccNotify {
    /**
     * @generated from protobuf field: uint32 caster_id = 15;
     */
    casterId: number;
    /**
     * @generated from protobuf field: ForwardType forward_type = 9;
     */
    forwardType: ForwardType;
    /**
     * @generated from protobuf field: uint32 skill_id = 14;
     */
    skillId: number;
    /**
     * @generated from protobuf field: Vector forward = 13;
     */
    forward?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class EvtDoSkillSuccNotify$Type extends MessageType<EvtDoSkillSuccNotify> {
    constructor() {
        super("EvtDoSkillSuccNotify", [
            { no: 15, name: "caster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType, "FORWARD_TYPE_"] },
            { no: 14, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "forward", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<EvtDoSkillSuccNotify>): EvtDoSkillSuccNotify {
        const message = { casterId: 0, forwardType: 0, skillId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EvtDoSkillSuccNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EvtDoSkillSuccNotify): EvtDoSkillSuccNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 caster_id */ 15:
                    message.casterId = reader.uint32();
                    break;
                case /* ForwardType forward_type */ 9:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 skill_id */ 14:
                    message.skillId = reader.uint32();
                    break;
                case /* Vector forward */ 13:
                    message.forward = Vector.internalBinaryRead(reader, reader.uint32(), options, message.forward);
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
    internalBinaryWrite(message: EvtDoSkillSuccNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 caster_id = 15; */
        if (message.casterId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.casterId);
        /* ForwardType forward_type = 9; */
        if (message.forwardType !== 0)
            writer.tag(9, WireType.Varint).int32(message.forwardType);
        /* uint32 skill_id = 14; */
        if (message.skillId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.skillId);
        /* Vector forward = 13; */
        if (message.forward)
            Vector.internalBinaryWrite(message.forward, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtDoSkillSuccNotify
 */
export const EvtDoSkillSuccNotify = new EvtDoSkillSuccNotify$Type();
