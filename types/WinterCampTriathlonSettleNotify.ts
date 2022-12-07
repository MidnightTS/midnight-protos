// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "WinterCampTriathlonSettleNotify.proto" (syntax proto3)
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
 *   CMD_ID = 8194;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message WinterCampTriathlonSettleNotify
 */
export interface WinterCampTriathlonSettleNotify {
    /**
     * @generated from protobuf field: uint32 Unk3300_ACDOMBHMNJG = 11 [json_name = "Unk3300ACDOMBHMNJG"];
     */
    unk3300ACDOMBHMNJG: number;
    /**
     * @generated from protobuf field: bool is_success = 10;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: uint32 score = 15;
     */
    score: number;
    /**
     * @generated from protobuf field: bool is_new_record = 7;
     */
    isNewRecord: boolean;
    /**
     * @generated from protobuf field: uint32 gallery_id = 14;
     */
    galleryId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_OEFOGONENFN = 12 [json_name = "Unk3300OEFOGONENFN"];
     */
    unk3300OEFOGONENFN: number;
    /**
     * @generated from protobuf field: uint32 remain_time = 6;
     */
    remainTime: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_EMNKJGKNCMP = 5 [json_name = "Unk3300EMNKJGKNCMP"];
     */
    unk3300EMNKJGKNCMP: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampTriathlonSettleNotify$Type extends MessageType<WinterCampTriathlonSettleNotify> {
    constructor() {
        super("WinterCampTriathlonSettleNotify", [
            { no: 11, name: "Unk3300_ACDOMBHMNJG", kind: "scalar", jsonName: "Unk3300ACDOMBHMNJG", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_OEFOGONENFN", kind: "scalar", jsonName: "Unk3300OEFOGONENFN", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "remain_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_EMNKJGKNCMP", kind: "scalar", jsonName: "Unk3300EMNKJGKNCMP", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<WinterCampTriathlonSettleNotify>): WinterCampTriathlonSettleNotify {
        const message = { unk3300ACDOMBHMNJG: 0, isSuccess: false, score: 0, isNewRecord: false, galleryId: 0, unk3300OEFOGONENFN: 0, remainTime: 0, unk3300EMNKJGKNCMP: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WinterCampTriathlonSettleNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WinterCampTriathlonSettleNotify): WinterCampTriathlonSettleNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_ACDOMBHMNJG = 11 [json_name = "Unk3300ACDOMBHMNJG"];*/ 11:
                    message.unk3300ACDOMBHMNJG = reader.uint32();
                    break;
                case /* bool is_success */ 10:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 score */ 15:
                    message.score = reader.uint32();
                    break;
                case /* bool is_new_record */ 7:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 gallery_id */ 14:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 Unk3300_OEFOGONENFN = 12 [json_name = "Unk3300OEFOGONENFN"];*/ 12:
                    message.unk3300OEFOGONENFN = reader.uint32();
                    break;
                case /* uint32 remain_time */ 6:
                    message.remainTime = reader.uint32();
                    break;
                case /* uint32 Unk3300_EMNKJGKNCMP = 5 [json_name = "Unk3300EMNKJGKNCMP"];*/ 5:
                    message.unk3300EMNKJGKNCMP = reader.uint32();
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
    internalBinaryWrite(message: WinterCampTriathlonSettleNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_ACDOMBHMNJG = 11 [json_name = "Unk3300ACDOMBHMNJG"]; */
        if (message.unk3300ACDOMBHMNJG !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300ACDOMBHMNJG);
        /* bool is_success = 10; */
        if (message.isSuccess !== false)
            writer.tag(10, WireType.Varint).bool(message.isSuccess);
        /* uint32 score = 15; */
        if (message.score !== 0)
            writer.tag(15, WireType.Varint).uint32(message.score);
        /* bool is_new_record = 7; */
        if (message.isNewRecord !== false)
            writer.tag(7, WireType.Varint).bool(message.isNewRecord);
        /* uint32 gallery_id = 14; */
        if (message.galleryId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.galleryId);
        /* uint32 Unk3300_OEFOGONENFN = 12 [json_name = "Unk3300OEFOGONENFN"]; */
        if (message.unk3300OEFOGONENFN !== 0)
            writer.tag(12, WireType.Varint).uint32(message.unk3300OEFOGONENFN);
        /* uint32 remain_time = 6; */
        if (message.remainTime !== 0)
            writer.tag(6, WireType.Varint).uint32(message.remainTime);
        /* uint32 Unk3300_EMNKJGKNCMP = 5 [json_name = "Unk3300EMNKJGKNCMP"]; */
        if (message.unk3300EMNKJGKNCMP !== 0)
            writer.tag(5, WireType.Varint).uint32(message.unk3300EMNKJGKNCMP);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampTriathlonSettleNotify
 */
export const WinterCampTriathlonSettleNotify = new WinterCampTriathlonSettleNotify$Type();
