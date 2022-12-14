// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "DoGachaReq.proto" (syntax proto3)
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
 *   CMD_ID = 1556;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message DoGachaReq
 */
export interface DoGachaReq {
    /**
     * @generated from protobuf field: string gacha_tag = 14;
     */
    gachaTag: string;
    /**
     * @generated from protobuf field: uint32 gacha_schedule_id = 6;
     */
    gachaScheduleId: number;
    /**
     * @generated from protobuf field: uint32 gacha_type = 1;
     */
    gachaType: number;
    /**
     * @generated from protobuf field: uint32 gacha_random = 9;
     */
    gachaRandom: number;
    /**
     * @generated from protobuf field: uint32 gacha_times = 3;
     */
    gachaTimes: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class DoGachaReq$Type extends MessageType<DoGachaReq> {
    constructor() {
        super("DoGachaReq", [
            { no: 14, name: "gacha_tag", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "gacha_schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "gacha_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "gacha_random", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DoGachaReq>): DoGachaReq {
        const message = { gachaTag: "", gachaScheduleId: 0, gachaType: 0, gachaRandom: 0, gachaTimes: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DoGachaReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DoGachaReq): DoGachaReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string gacha_tag */ 14:
                    message.gachaTag = reader.string();
                    break;
                case /* uint32 gacha_schedule_id */ 6:
                    message.gachaScheduleId = reader.uint32();
                    break;
                case /* uint32 gacha_type */ 1:
                    message.gachaType = reader.uint32();
                    break;
                case /* uint32 gacha_random */ 9:
                    message.gachaRandom = reader.uint32();
                    break;
                case /* uint32 gacha_times */ 3:
                    message.gachaTimes = reader.uint32();
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
    internalBinaryWrite(message: DoGachaReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string gacha_tag = 14; */
        if (message.gachaTag !== "")
            writer.tag(14, WireType.LengthDelimited).string(message.gachaTag);
        /* uint32 gacha_schedule_id = 6; */
        if (message.gachaScheduleId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.gachaScheduleId);
        /* uint32 gacha_type = 1; */
        if (message.gachaType !== 0)
            writer.tag(1, WireType.Varint).uint32(message.gachaType);
        /* uint32 gacha_random = 9; */
        if (message.gachaRandom !== 0)
            writer.tag(9, WireType.Varint).uint32(message.gachaRandom);
        /* uint32 gacha_times = 3; */
        if (message.gachaTimes !== 0)
            writer.tag(3, WireType.Varint).uint32(message.gachaTimes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DoGachaReq
 */
export const DoGachaReq = new DoGachaReq$Type();
