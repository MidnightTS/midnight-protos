// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "FungusFighterTrainingInfoNotify.proto" (syntax proto3)
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
 *   CMD_ID = 5533;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message FungusFighterTrainingInfoNotify
 */
export interface FungusFighterTrainingInfoNotify {
    /**
     * @generated from protobuf field: uint32 buff_id = 14;
     */
    buffId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_IOEELCAMDCK = 10 [json_name = "Unk3300IOEELCAMDCK"];
     */
    unk3300IOEELCAMDCK: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_HGPGNCMNDJN = 4 [json_name = "Unk3300HGPGNCMNDJN"];
     */
    unk3300HGPGNCMNDJN: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_EDHANEGNMJM = 3 [json_name = "Unk3300EDHANEGNMJM"];
     */
    unk3300EDHANEGNMJM: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_GMLIPFDMDOG = 6 [json_name = "Unk3300GMLIPFDMDOG"];
     */
    unk3300GMLIPFDMDOG: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_EKAMCPNGCGH = 13 [json_name = "Unk3300EKAMCPNGCGH"];
     */
    unk3300EKAMCPNGCGH: number;
    /**
     * @generated from protobuf field: uint32 max_monster_count = 9;
     */
    maxMonsterCount: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FungusFighterTrainingInfoNotify$Type extends MessageType<FungusFighterTrainingInfoNotify> {
    constructor() {
        super("FungusFighterTrainingInfoNotify", [
            { no: 14, name: "buff_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_IOEELCAMDCK", kind: "scalar", jsonName: "Unk3300IOEELCAMDCK", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_HGPGNCMNDJN", kind: "scalar", jsonName: "Unk3300HGPGNCMNDJN", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_EDHANEGNMJM", kind: "scalar", jsonName: "Unk3300EDHANEGNMJM", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_GMLIPFDMDOG", kind: "scalar", jsonName: "Unk3300GMLIPFDMDOG", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_EKAMCPNGCGH", kind: "scalar", jsonName: "Unk3300EKAMCPNGCGH", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "max_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FungusFighterTrainingInfoNotify>): FungusFighterTrainingInfoNotify {
        const message = { buffId: 0, unk3300IOEELCAMDCK: 0, unk3300HGPGNCMNDJN: 0, unk3300EDHANEGNMJM: 0, unk3300GMLIPFDMDOG: 0, unk3300EKAMCPNGCGH: 0, maxMonsterCount: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FungusFighterTrainingInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FungusFighterTrainingInfoNotify): FungusFighterTrainingInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 buff_id */ 14:
                    message.buffId = reader.uint32();
                    break;
                case /* uint32 Unk3300_IOEELCAMDCK = 10 [json_name = "Unk3300IOEELCAMDCK"];*/ 10:
                    message.unk3300IOEELCAMDCK = reader.uint32();
                    break;
                case /* uint32 Unk3300_HGPGNCMNDJN = 4 [json_name = "Unk3300HGPGNCMNDJN"];*/ 4:
                    message.unk3300HGPGNCMNDJN = reader.uint32();
                    break;
                case /* uint32 Unk3300_EDHANEGNMJM = 3 [json_name = "Unk3300EDHANEGNMJM"];*/ 3:
                    message.unk3300EDHANEGNMJM = reader.uint32();
                    break;
                case /* uint32 Unk3300_GMLIPFDMDOG = 6 [json_name = "Unk3300GMLIPFDMDOG"];*/ 6:
                    message.unk3300GMLIPFDMDOG = reader.uint32();
                    break;
                case /* uint32 Unk3300_EKAMCPNGCGH = 13 [json_name = "Unk3300EKAMCPNGCGH"];*/ 13:
                    message.unk3300EKAMCPNGCGH = reader.uint32();
                    break;
                case /* uint32 max_monster_count */ 9:
                    message.maxMonsterCount = reader.uint32();
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
    internalBinaryWrite(message: FungusFighterTrainingInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 buff_id = 14; */
        if (message.buffId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.buffId);
        /* uint32 Unk3300_IOEELCAMDCK = 10 [json_name = "Unk3300IOEELCAMDCK"]; */
        if (message.unk3300IOEELCAMDCK !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300IOEELCAMDCK);
        /* uint32 Unk3300_HGPGNCMNDJN = 4 [json_name = "Unk3300HGPGNCMNDJN"]; */
        if (message.unk3300HGPGNCMNDJN !== 0)
            writer.tag(4, WireType.Varint).uint32(message.unk3300HGPGNCMNDJN);
        /* uint32 Unk3300_EDHANEGNMJM = 3 [json_name = "Unk3300EDHANEGNMJM"]; */
        if (message.unk3300EDHANEGNMJM !== 0)
            writer.tag(3, WireType.Varint).uint32(message.unk3300EDHANEGNMJM);
        /* uint32 Unk3300_GMLIPFDMDOG = 6 [json_name = "Unk3300GMLIPFDMDOG"]; */
        if (message.unk3300GMLIPFDMDOG !== 0)
            writer.tag(6, WireType.Varint).uint32(message.unk3300GMLIPFDMDOG);
        /* uint32 Unk3300_EKAMCPNGCGH = 13 [json_name = "Unk3300EKAMCPNGCGH"]; */
        if (message.unk3300EKAMCPNGCGH !== 0)
            writer.tag(13, WireType.Varint).uint32(message.unk3300EKAMCPNGCGH);
        /* uint32 max_monster_count = 9; */
        if (message.maxMonsterCount !== 0)
            writer.tag(9, WireType.Varint).uint32(message.maxMonsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusFighterTrainingInfoNotify
 */
export const FungusFighterTrainingInfoNotify = new FungusFighterTrainingInfoNotify$Type();
