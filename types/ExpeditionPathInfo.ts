// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ExpeditionPathInfo.proto" (syntax proto3)
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
import { ExpeditionState } from "./ExpeditionState";
/**
 * @generated from protobuf message ExpeditionPathInfo
 */
export interface ExpeditionPathInfo {
    /**
     * @generated from protobuf field: uint32 start_time = 10;
     */
    startTime: number;
    /**
     * @generated from protobuf field: float bonus_probability = 12;
     */
    bonusProbability: number;
    /**
     * @generated from protobuf field: repeated uint32 avatar_id_list = 8;
     */
    avatarIdList: number[];
    /**
     * @generated from protobuf field: uint32 path_id = 11;
     */
    pathId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_AIEJKADFLKG = 6 [json_name = "Unk3300AIEJKADFLKG"];
     */
    unk3300AIEJKADFLKG: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_LKAHOEBNBBI = 14 [json_name = "Unk3300LKAHOEBNBBI"];
     */
    unk3300LKAHOEBNBBI: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_AFGPGIIGAKA = 7 [json_name = "Unk3300AFGPGIIGAKA"];
     */
    unk3300AFGPGIIGAKA: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_LFIFDGAGFDC = 5 [json_name = "Unk3300LFIFDGAGFDC"];
     */
    unk3300LFIFDGAGFDC: number;
    /**
     * @generated from protobuf field: ExpeditionState state = 13;
     */
    state: ExpeditionState;
    /**
     * @generated from protobuf field: uint32 challenge_id = 9;
     */
    challengeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ExpeditionPathInfo$Type extends MessageType<ExpeditionPathInfo> {
    constructor() {
        super("ExpeditionPathInfo", [
            { no: 10, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "bonus_probability", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "path_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_AIEJKADFLKG", kind: "scalar", jsonName: "Unk3300AIEJKADFLKG", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_LKAHOEBNBBI", kind: "scalar", jsonName: "Unk3300LKAHOEBNBBI", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_AFGPGIIGAKA", kind: "scalar", jsonName: "Unk3300AFGPGIIGAKA", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_LFIFDGAGFDC", kind: "scalar", jsonName: "Unk3300LFIFDGAGFDC", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "state", kind: "enum", T: () => ["ExpeditionState", ExpeditionState, "EXPEDITION_STATE_"] },
            { no: 9, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ExpeditionPathInfo>): ExpeditionPathInfo {
        const message = { startTime: 0, bonusProbability: 0, avatarIdList: [], pathId: 0, unk3300AIEJKADFLKG: 0, unk3300LKAHOEBNBBI: 0, unk3300AFGPGIIGAKA: 0, unk3300LFIFDGAGFDC: 0, state: 0, challengeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExpeditionPathInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExpeditionPathInfo): ExpeditionPathInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 start_time */ 10:
                    message.startTime = reader.uint32();
                    break;
                case /* float bonus_probability */ 12:
                    message.bonusProbability = reader.float();
                    break;
                case /* repeated uint32 avatar_id_list */ 8:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarIdList.push(reader.uint32());
                    else
                        message.avatarIdList.push(reader.uint32());
                    break;
                case /* uint32 path_id */ 11:
                    message.pathId = reader.uint32();
                    break;
                case /* uint32 Unk3300_AIEJKADFLKG = 6 [json_name = "Unk3300AIEJKADFLKG"];*/ 6:
                    message.unk3300AIEJKADFLKG = reader.uint32();
                    break;
                case /* uint32 Unk3300_LKAHOEBNBBI = 14 [json_name = "Unk3300LKAHOEBNBBI"];*/ 14:
                    message.unk3300LKAHOEBNBBI = reader.uint32();
                    break;
                case /* uint32 Unk3300_AFGPGIIGAKA = 7 [json_name = "Unk3300AFGPGIIGAKA"];*/ 7:
                    message.unk3300AFGPGIIGAKA = reader.uint32();
                    break;
                case /* uint32 Unk3300_LFIFDGAGFDC = 5 [json_name = "Unk3300LFIFDGAGFDC"];*/ 5:
                    message.unk3300LFIFDGAGFDC = reader.uint32();
                    break;
                case /* ExpeditionState state */ 13:
                    message.state = reader.int32();
                    break;
                case /* uint32 challenge_id */ 9:
                    message.challengeId = reader.uint32();
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
    internalBinaryWrite(message: ExpeditionPathInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 start_time = 10; */
        if (message.startTime !== 0)
            writer.tag(10, WireType.Varint).uint32(message.startTime);
        /* float bonus_probability = 12; */
        if (message.bonusProbability !== 0)
            writer.tag(12, WireType.Bit32).float(message.bonusProbability);
        /* repeated uint32 avatar_id_list = 8; */
        if (message.avatarIdList.length) {
            writer.tag(8, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarIdList.length; i++)
                writer.uint32(message.avatarIdList[i]);
            writer.join();
        }
        /* uint32 path_id = 11; */
        if (message.pathId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.pathId);
        /* uint32 Unk3300_AIEJKADFLKG = 6 [json_name = "Unk3300AIEJKADFLKG"]; */
        if (message.unk3300AIEJKADFLKG !== 0)
            writer.tag(6, WireType.Varint).uint32(message.unk3300AIEJKADFLKG);
        /* uint32 Unk3300_LKAHOEBNBBI = 14 [json_name = "Unk3300LKAHOEBNBBI"]; */
        if (message.unk3300LKAHOEBNBBI !== 0)
            writer.tag(14, WireType.Varint).uint32(message.unk3300LKAHOEBNBBI);
        /* uint32 Unk3300_AFGPGIIGAKA = 7 [json_name = "Unk3300AFGPGIIGAKA"]; */
        if (message.unk3300AFGPGIIGAKA !== 0)
            writer.tag(7, WireType.Varint).uint32(message.unk3300AFGPGIIGAKA);
        /* uint32 Unk3300_LFIFDGAGFDC = 5 [json_name = "Unk3300LFIFDGAGFDC"]; */
        if (message.unk3300LFIFDGAGFDC !== 0)
            writer.tag(5, WireType.Varint).uint32(message.unk3300LFIFDGAGFDC);
        /* ExpeditionState state = 13; */
        if (message.state !== 0)
            writer.tag(13, WireType.Varint).int32(message.state);
        /* uint32 challenge_id = 9; */
        if (message.challengeId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.challengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ExpeditionPathInfo
 */
export const ExpeditionPathInfo = new ExpeditionPathInfo$Type();
