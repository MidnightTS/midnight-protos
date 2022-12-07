// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GCGTCTavernInfoNotify.proto" (syntax proto3)
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
 *   CMD_ID = 7268;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GCGTCTavernInfoNotify
 */
export interface GCGTCTavernInfoNotify {
    /**
     * @generated from protobuf field: uint32 level_id = 5;
     */
    levelId: number;
    /**
     * @generated from protobuf field: bool Unk3300_IMFJBNFMCHM = 11 [json_name = "Unk3300IMFJBNFMCHM"];
     */
    unk3300IMFJBNFMCHM: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_MBGMHBNBKBK = 8 [json_name = "Unk3300MBGMHBNBKBK"];
     */
    unk3300MBGMHBNBKBK: boolean;
    /**
     * @generated from protobuf field: uint32 point_id = 4;
     */
    pointId: number;
    /**
     * @generated from protobuf field: uint32 element_type = 6;
     */
    elementType: number;
    /**
     * @generated from protobuf field: uint32 avatar_id = 9;
     */
    avatarId: number;
    /**
     * @generated from protobuf field: uint32 character_id = 12;
     */
    characterId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGTCTavernInfoNotify$Type extends MessageType<GCGTCTavernInfoNotify> {
    constructor() {
        super("GCGTCTavernInfoNotify", [
            { no: 5, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_IMFJBNFMCHM", kind: "scalar", jsonName: "Unk3300IMFJBNFMCHM", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "Unk3300_MBGMHBNBKBK", kind: "scalar", jsonName: "Unk3300MBGMHBNBKBK", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "element_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "character_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGTCTavernInfoNotify>): GCGTCTavernInfoNotify {
        const message = { levelId: 0, unk3300IMFJBNFMCHM: false, unk3300MBGMHBNBKBK: false, pointId: 0, elementType: 0, avatarId: 0, characterId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGTCTavernInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGTCTavernInfoNotify): GCGTCTavernInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 level_id */ 5:
                    message.levelId = reader.uint32();
                    break;
                case /* bool Unk3300_IMFJBNFMCHM = 11 [json_name = "Unk3300IMFJBNFMCHM"];*/ 11:
                    message.unk3300IMFJBNFMCHM = reader.bool();
                    break;
                case /* bool Unk3300_MBGMHBNBKBK = 8 [json_name = "Unk3300MBGMHBNBKBK"];*/ 8:
                    message.unk3300MBGMHBNBKBK = reader.bool();
                    break;
                case /* uint32 point_id */ 4:
                    message.pointId = reader.uint32();
                    break;
                case /* uint32 element_type */ 6:
                    message.elementType = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 9:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 character_id */ 12:
                    message.characterId = reader.uint32();
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
    internalBinaryWrite(message: GCGTCTavernInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 level_id = 5; */
        if (message.levelId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.levelId);
        /* bool Unk3300_IMFJBNFMCHM = 11 [json_name = "Unk3300IMFJBNFMCHM"]; */
        if (message.unk3300IMFJBNFMCHM !== false)
            writer.tag(11, WireType.Varint).bool(message.unk3300IMFJBNFMCHM);
        /* bool Unk3300_MBGMHBNBKBK = 8 [json_name = "Unk3300MBGMHBNBKBK"]; */
        if (message.unk3300MBGMHBNBKBK !== false)
            writer.tag(8, WireType.Varint).bool(message.unk3300MBGMHBNBKBK);
        /* uint32 point_id = 4; */
        if (message.pointId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.pointId);
        /* uint32 element_type = 6; */
        if (message.elementType !== 0)
            writer.tag(6, WireType.Varint).uint32(message.elementType);
        /* uint32 avatar_id = 9; */
        if (message.avatarId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.avatarId);
        /* uint32 character_id = 12; */
        if (message.characterId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.characterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGTCTavernInfoNotify
 */
export const GCGTCTavernInfoNotify = new GCGTCTavernInfoNotify$Type();