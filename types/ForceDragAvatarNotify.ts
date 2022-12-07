// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ForceDragAvatarNotify.proto" (syntax proto3)
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
import { MotionInfo } from "./MotionInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 3008;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ForceDragAvatarNotify
 */
export interface ForceDragAvatarNotify {
    /**
     * @generated from protobuf field: uint64 Unk3300_IMFNNPGHKJJ = 3 [json_name = "Unk3300IMFNNPGHKJJ"];
     */
    unk3300IMFNNPGHKJJ: bigint;
    /**
     * @generated from protobuf field: MotionInfo motion_info = 9;
     */
    motionInfo?: MotionInfo;
    /**
     * @generated from protobuf field: bool is_first_valid = 7;
     */
    isFirstValid: boolean;
    /**
     * @generated from protobuf field: uint32 scene_time = 12;
     */
    sceneTime: number;
    /**
     * @generated from protobuf field: uint32 entity_id = 10;
     */
    entityId: number;
    /**
     * @generated from protobuf field: uint64 Unk3300_AFLCLLFDPBD = 5 [json_name = "Unk3300AFLCLLFDPBD"];
     */
    unk3300AFLCLLFDPBD: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class ForceDragAvatarNotify$Type extends MessageType<ForceDragAvatarNotify> {
    constructor() {
        super("ForceDragAvatarNotify", [
            { no: 3, name: "Unk3300_IMFNNPGHKJJ", kind: "scalar", jsonName: "Unk3300IMFNNPGHKJJ", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "motion_info", kind: "message", T: () => MotionInfo },
            { no: 7, name: "is_first_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_AFLCLLFDPBD", kind: "scalar", jsonName: "Unk3300AFLCLLFDPBD", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<ForceDragAvatarNotify>): ForceDragAvatarNotify {
        const message = { unk3300IMFNNPGHKJJ: 0n, isFirstValid: false, sceneTime: 0, entityId: 0, unk3300AFLCLLFDPBD: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ForceDragAvatarNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ForceDragAvatarNotify): ForceDragAvatarNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 Unk3300_IMFNNPGHKJJ = 3 [json_name = "Unk3300IMFNNPGHKJJ"];*/ 3:
                    message.unk3300IMFNNPGHKJJ = reader.uint64().toBigInt();
                    break;
                case /* MotionInfo motion_info */ 9:
                    message.motionInfo = MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* bool is_first_valid */ 7:
                    message.isFirstValid = reader.bool();
                    break;
                case /* uint32 scene_time */ 12:
                    message.sceneTime = reader.uint32();
                    break;
                case /* uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
                    break;
                case /* uint64 Unk3300_AFLCLLFDPBD = 5 [json_name = "Unk3300AFLCLLFDPBD"];*/ 5:
                    message.unk3300AFLCLLFDPBD = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: ForceDragAvatarNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 Unk3300_IMFNNPGHKJJ = 3 [json_name = "Unk3300IMFNNPGHKJJ"]; */
        if (message.unk3300IMFNNPGHKJJ !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.unk3300IMFNNPGHKJJ);
        /* MotionInfo motion_info = 9; */
        if (message.motionInfo)
            MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* bool is_first_valid = 7; */
        if (message.isFirstValid !== false)
            writer.tag(7, WireType.Varint).bool(message.isFirstValid);
        /* uint32 scene_time = 12; */
        if (message.sceneTime !== 0)
            writer.tag(12, WireType.Varint).uint32(message.sceneTime);
        /* uint32 entity_id = 10; */
        if (message.entityId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.entityId);
        /* uint64 Unk3300_AFLCLLFDPBD = 5 [json_name = "Unk3300AFLCLLFDPBD"]; */
        if (message.unk3300AFLCLLFDPBD !== 0n)
            writer.tag(5, WireType.Varint).uint64(message.unk3300AFLCLLFDPBD);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForceDragAvatarNotify
 */
export const ForceDragAvatarNotify = new ForceDragAvatarNotify$Type();