// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "InstableSprayLevelFinishNotify.proto" (syntax proto3)
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
 *   CMD_ID = 21512;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message InstableSprayLevelFinishNotify
 */
export interface InstableSprayLevelFinishNotify {
    /**
     * @generated from protobuf field: uint32 round = 2;
     */
    round: number;
    /**
     * @generated from protobuf field: uint32 level_id = 15;
     */
    levelId: number;
    /**
     * @generated from protobuf field: bool Unk3300_AMEBAPIPLGL = 3 [json_name = "Unk3300AMEBAPIPLGL"];
     */
    unk3300AMEBAPIPLGL: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_DHKHBKLBIPA = 12 [json_name = "Unk3300DHKHBKLBIPA"];
     */
    unk3300DHKHBKLBIPA: boolean;
    /**
     * @generated from protobuf field: uint32 stage_id = 10;
     */
    stageId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class InstableSprayLevelFinishNotify$Type extends MessageType<InstableSprayLevelFinishNotify> {
    constructor() {
        super("InstableSprayLevelFinishNotify", [
            { no: 2, name: "round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_AMEBAPIPLGL", kind: "scalar", jsonName: "Unk3300AMEBAPIPLGL", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "Unk3300_DHKHBKLBIPA", kind: "scalar", jsonName: "Unk3300DHKHBKLBIPA", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<InstableSprayLevelFinishNotify>): InstableSprayLevelFinishNotify {
        const message = { round: 0, levelId: 0, unk3300AMEBAPIPLGL: false, unk3300DHKHBKLBIPA: false, stageId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InstableSprayLevelFinishNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InstableSprayLevelFinishNotify): InstableSprayLevelFinishNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 round */ 2:
                    message.round = reader.uint32();
                    break;
                case /* uint32 level_id */ 15:
                    message.levelId = reader.uint32();
                    break;
                case /* bool Unk3300_AMEBAPIPLGL = 3 [json_name = "Unk3300AMEBAPIPLGL"];*/ 3:
                    message.unk3300AMEBAPIPLGL = reader.bool();
                    break;
                case /* bool Unk3300_DHKHBKLBIPA = 12 [json_name = "Unk3300DHKHBKLBIPA"];*/ 12:
                    message.unk3300DHKHBKLBIPA = reader.bool();
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
    internalBinaryWrite(message: InstableSprayLevelFinishNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 round = 2; */
        if (message.round !== 0)
            writer.tag(2, WireType.Varint).uint32(message.round);
        /* uint32 level_id = 15; */
        if (message.levelId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.levelId);
        /* bool Unk3300_AMEBAPIPLGL = 3 [json_name = "Unk3300AMEBAPIPLGL"]; */
        if (message.unk3300AMEBAPIPLGL !== false)
            writer.tag(3, WireType.Varint).bool(message.unk3300AMEBAPIPLGL);
        /* bool Unk3300_DHKHBKLBIPA = 12 [json_name = "Unk3300DHKHBKLBIPA"]; */
        if (message.unk3300DHKHBKLBIPA !== false)
            writer.tag(12, WireType.Varint).bool(message.unk3300DHKHBKLBIPA);
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
 * @generated MessageType for protobuf message InstableSprayLevelFinishNotify
 */
export const InstableSprayLevelFinishNotify = new InstableSprayLevelFinishNotify$Type();
