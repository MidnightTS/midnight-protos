// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FishEscapeNotify.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { FishEscapeReason } from "./FishEscapeReason";
import { Vector } from "./Vector";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5817;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message FishEscapeNotify
 */
export interface FishEscapeNotify {
    /**
     * @generated from protobuf field: uint32 uid = 2;
     */
    uid: number;
    /**
     * @generated from protobuf field: Vector pos = 11;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: repeated uint32 fish_id_list = 9;
     */
    fishIdList: number[];
    /**
     * @generated from protobuf field: FishEscapeReason reason = 12;
     */
    reason: FishEscapeReason;
}
// @generated message type with reflection information, may provide speed optimized methods
class FishEscapeNotify$Type extends MessageType<FishEscapeNotify> {
    constructor() {
        super("FishEscapeNotify", [
            { no: 2, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "pos", kind: "message", T: () => Vector },
            { no: 9, name: "fish_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "reason", kind: "enum", T: () => ["FishEscapeReason", FishEscapeReason, "FISH_ESCAPE_REASON_"] }
        ]);
    }
    create(value?: PartialMessage<FishEscapeNotify>): FishEscapeNotify {
        const message = { uid: 0, fishIdList: [], reason: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FishEscapeNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FishEscapeNotify): FishEscapeNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 uid */ 2:
                    message.uid = reader.uint32();
                    break;
                case /* Vector pos */ 11:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* repeated uint32 fish_id_list */ 9:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fishIdList.push(reader.uint32());
                    else
                        message.fishIdList.push(reader.uint32());
                    break;
                case /* FishEscapeReason reason */ 12:
                    message.reason = reader.int32();
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
    internalBinaryWrite(message: FishEscapeNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 uid = 2; */
        if (message.uid !== 0)
            writer.tag(2, WireType.Varint).uint32(message.uid);
        /* Vector pos = 11; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 fish_id_list = 9; */
        if (message.fishIdList.length) {
            writer.tag(9, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fishIdList.length; i++)
                writer.uint32(message.fishIdList[i]);
            writer.join();
        }
        /* FishEscapeReason reason = 12; */
        if (message.reason !== 0)
            writer.tag(12, WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishEscapeNotify
 */
export const FishEscapeNotify = new FishEscapeNotify$Type();
