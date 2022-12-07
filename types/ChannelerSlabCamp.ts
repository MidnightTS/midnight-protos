// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ChannelerSlabCamp.proto" (syntax proto3)
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
/**
 * @generated from protobuf message ChannelerSlabCamp
 */
export interface ChannelerSlabCamp {
    /**
     * @generated from protobuf field: uint32 buff_num = 11;
     */
    buffNum: number;
    /**
     * @generated from protobuf field: uint32 reward_id = 9;
     */
    rewardId: number;
    /**
     * @generated from protobuf field: uint32 group_id = 8;
     */
    groupId: number;
    /**
     * @generated from protobuf field: Vector pos = 15;
     */
    pos?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabCamp$Type extends MessageType<ChannelerSlabCamp> {
    constructor() {
        super("ChannelerSlabCamp", [
            { no: 11, name: "buff_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "pos", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<ChannelerSlabCamp>): ChannelerSlabCamp {
        const message = { buffNum: 0, rewardId: 0, groupId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChannelerSlabCamp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChannelerSlabCamp): ChannelerSlabCamp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 buff_num */ 11:
                    message.buffNum = reader.uint32();
                    break;
                case /* uint32 reward_id */ 9:
                    message.rewardId = reader.uint32();
                    break;
                case /* uint32 group_id */ 8:
                    message.groupId = reader.uint32();
                    break;
                case /* Vector pos */ 15:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
    internalBinaryWrite(message: ChannelerSlabCamp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 buff_num = 11; */
        if (message.buffNum !== 0)
            writer.tag(11, WireType.Varint).uint32(message.buffNum);
        /* uint32 reward_id = 9; */
        if (message.rewardId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.rewardId);
        /* uint32 group_id = 8; */
        if (message.groupId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.groupId);
        /* Vector pos = 15; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabCamp
 */
export const ChannelerSlabCamp = new ChannelerSlabCamp$Type();
