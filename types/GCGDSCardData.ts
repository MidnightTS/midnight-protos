// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGDSCardData.proto" (syntax proto3)
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
/**
 * @generated from protobuf message GCGDSCardData
 */
export interface GCGDSCardData {
    /**
     * @generated from protobuf field: uint32 num = 11;
     */
    num: number;
    /**
     * @generated from protobuf field: uint32 face_type = 5;
     */
    faceType: number;
    /**
     * @generated from protobuf field: uint32 card_id = 4;
     */
    cardId: number;
    /**
     * @generated from protobuf field: repeated uint32 proficiency_reward_taken_idx_list = 14;
     */
    proficiencyRewardTakenIdxList: number[];
    /**
     * @generated from protobuf field: repeated uint32 unlock_face_type_list = 6;
     */
    unlockFaceTypeList: number[];
    /**
     * @generated from protobuf field: uint32 proficiency = 10;
     */
    proficiency: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSCardData$Type extends MessageType<GCGDSCardData> {
    constructor() {
        super("GCGDSCardData", [
            { no: 11, name: "num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "face_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "proficiency_reward_taken_idx_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "unlock_face_type_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "proficiency", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGDSCardData>): GCGDSCardData {
        const message = { num: 0, faceType: 0, cardId: 0, proficiencyRewardTakenIdxList: [], unlockFaceTypeList: [], proficiency: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGDSCardData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGDSCardData): GCGDSCardData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 num */ 11:
                    message.num = reader.uint32();
                    break;
                case /* uint32 face_type */ 5:
                    message.faceType = reader.uint32();
                    break;
                case /* uint32 card_id */ 4:
                    message.cardId = reader.uint32();
                    break;
                case /* repeated uint32 proficiency_reward_taken_idx_list */ 14:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.proficiencyRewardTakenIdxList.push(reader.uint32());
                    else
                        message.proficiencyRewardTakenIdxList.push(reader.uint32());
                    break;
                case /* repeated uint32 unlock_face_type_list */ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockFaceTypeList.push(reader.uint32());
                    else
                        message.unlockFaceTypeList.push(reader.uint32());
                    break;
                case /* uint32 proficiency */ 10:
                    message.proficiency = reader.uint32();
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
    internalBinaryWrite(message: GCGDSCardData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 num = 11; */
        if (message.num !== 0)
            writer.tag(11, WireType.Varint).uint32(message.num);
        /* uint32 face_type = 5; */
        if (message.faceType !== 0)
            writer.tag(5, WireType.Varint).uint32(message.faceType);
        /* uint32 card_id = 4; */
        if (message.cardId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.cardId);
        /* repeated uint32 proficiency_reward_taken_idx_list = 14; */
        if (message.proficiencyRewardTakenIdxList.length) {
            writer.tag(14, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.proficiencyRewardTakenIdxList.length; i++)
                writer.uint32(message.proficiencyRewardTakenIdxList[i]);
            writer.join();
        }
        /* repeated uint32 unlock_face_type_list = 6; */
        if (message.unlockFaceTypeList.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockFaceTypeList.length; i++)
                writer.uint32(message.unlockFaceTypeList[i]);
            writer.join();
        }
        /* uint32 proficiency = 10; */
        if (message.proficiency !== 0)
            writer.tag(10, WireType.Varint).uint32(message.proficiency);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDSCardData
 */
export const GCGDSCardData = new GCGDSCardData$Type();
