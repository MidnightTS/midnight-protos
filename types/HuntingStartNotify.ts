// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HuntingStartNotify.proto" (syntax proto3)
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
import { HuntingPair } from "./HuntingPair";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4344;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message HuntingStartNotify
 */
export interface HuntingStartNotify {
    /**
     * @generated from protobuf field: HuntingPair hunting_pair = 3;
     */
    huntingPair?: HuntingPair;
    /**
     * @generated from protobuf field: uint32 fail_time = 5;
     */
    failTime: number;
    /**
     * @generated from protobuf field: Vector clue_position = 6;
     */
    cluePosition?: Vector;
    /**
     * @generated from protobuf field: bool is_final = 8;
     */
    isFinal: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class HuntingStartNotify$Type extends MessageType<HuntingStartNotify> {
    constructor() {
        super("HuntingStartNotify", [
            { no: 3, name: "hunting_pair", kind: "message", T: () => HuntingPair },
            { no: 5, name: "fail_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "clue_position", kind: "message", T: () => Vector },
            { no: 8, name: "is_final", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<HuntingStartNotify>): HuntingStartNotify {
        const message = { failTime: 0, isFinal: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HuntingStartNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HuntingStartNotify): HuntingStartNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* HuntingPair hunting_pair */ 3:
                    message.huntingPair = HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* uint32 fail_time */ 5:
                    message.failTime = reader.uint32();
                    break;
                case /* Vector clue_position */ 6:
                    message.cluePosition = Vector.internalBinaryRead(reader, reader.uint32(), options, message.cluePosition);
                    break;
                case /* bool is_final */ 8:
                    message.isFinal = reader.bool();
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
    internalBinaryWrite(message: HuntingStartNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* HuntingPair hunting_pair = 3; */
        if (message.huntingPair)
            HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint32 fail_time = 5; */
        if (message.failTime !== 0)
            writer.tag(5, WireType.Varint).uint32(message.failTime);
        /* Vector clue_position = 6; */
        if (message.cluePosition)
            Vector.internalBinaryWrite(message.cluePosition, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* bool is_final = 8; */
        if (message.isFinal !== false)
            writer.tag(8, WireType.Varint).bool(message.isFinal);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HuntingStartNotify
 */
export const HuntingStartNotify = new HuntingStartNotify$Type();
