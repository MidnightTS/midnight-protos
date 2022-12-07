// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GearActivityFinishPlayGearReq.proto" (syntax proto3)
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
import { GearColumnInfo } from "./GearColumnInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 20236;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message GearActivityFinishPlayGearReq
 */
export interface GearActivityFinishPlayGearReq {
    /**
     * @generated from protobuf field: bool use_clue = 10;
     */
    useClue: boolean;
    /**
     * @generated from protobuf field: uint32 level_id = 3;
     */
    levelId: number;
    /**
     * @generated from protobuf field: bool is_success = 8;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: repeated GearColumnInfo gear_column_info_list = 12;
     */
    gearColumnInfoList: GearColumnInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GearActivityFinishPlayGearReq$Type extends MessageType<GearActivityFinishPlayGearReq> {
    constructor() {
        super("GearActivityFinishPlayGearReq", [
            { no: 10, name: "use_clue", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "gear_column_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GearColumnInfo }
        ]);
    }
    create(value?: PartialMessage<GearActivityFinishPlayGearReq>): GearActivityFinishPlayGearReq {
        const message = { useClue: false, levelId: 0, isSuccess: false, gearColumnInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GearActivityFinishPlayGearReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GearActivityFinishPlayGearReq): GearActivityFinishPlayGearReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool use_clue */ 10:
                    message.useClue = reader.bool();
                    break;
                case /* uint32 level_id */ 3:
                    message.levelId = reader.uint32();
                    break;
                case /* bool is_success */ 8:
                    message.isSuccess = reader.bool();
                    break;
                case /* repeated GearColumnInfo gear_column_info_list */ 12:
                    message.gearColumnInfoList.push(GearColumnInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GearActivityFinishPlayGearReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool use_clue = 10; */
        if (message.useClue !== false)
            writer.tag(10, WireType.Varint).bool(message.useClue);
        /* uint32 level_id = 3; */
        if (message.levelId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.levelId);
        /* bool is_success = 8; */
        if (message.isSuccess !== false)
            writer.tag(8, WireType.Varint).bool(message.isSuccess);
        /* repeated GearColumnInfo gear_column_info_list = 12; */
        for (let i = 0; i < message.gearColumnInfoList.length; i++)
            GearColumnInfo.internalBinaryWrite(message.gearColumnInfoList[i], writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GearActivityFinishPlayGearReq
 */
export const GearActivityFinishPlayGearReq = new GearActivityFinishPlayGearReq$Type();