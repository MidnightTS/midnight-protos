// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CoinCollectTeamInfoData.proto" (syntax proto3)
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
 * @generated from protobuf message CoinCollectTeamInfoData
 */
export interface CoinCollectTeamInfoData {
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_CPDGJEIOJAB = 2 [json_name = "Unk3300CPDGJEIOJAB"];
     */
    unk3300CPDGJEIOJAB: number[];
    /**
     * @generated from protobuf field: uint32 choose_skill_no = 11;
     */
    chooseSkillNo: number;
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_IFBDFEOGOLH = 15 [json_name = "Unk3300IFBDFEOGOLH"];
     */
    unk3300IFBDFEOGOLH: number[];
    /**
     * @generated from protobuf field: bool is_host = 13;
     */
    isHost: boolean;
    /**
     * @generated from protobuf field: uint32 player_uid = 6;
     */
    playerUid: number;
    /**
     * @generated from protobuf field: repeated uint32 avatar_id_list = 7;
     */
    avatarIdList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class CoinCollectTeamInfoData$Type extends MessageType<CoinCollectTeamInfoData> {
    constructor() {
        super("CoinCollectTeamInfoData", [
            { no: 2, name: "Unk3300_CPDGJEIOJAB", kind: "scalar", jsonName: "Unk3300CPDGJEIOJAB", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "choose_skill_no", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_IFBDFEOGOLH", kind: "scalar", jsonName: "Unk3300IFBDFEOGOLH", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_host", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CoinCollectTeamInfoData>): CoinCollectTeamInfoData {
        const message = { unk3300CPDGJEIOJAB: [], chooseSkillNo: 0, unk3300IFBDFEOGOLH: [], isHost: false, playerUid: 0, avatarIdList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CoinCollectTeamInfoData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CoinCollectTeamInfoData): CoinCollectTeamInfoData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 Unk3300_CPDGJEIOJAB = 2 [json_name = "Unk3300CPDGJEIOJAB"];*/ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300CPDGJEIOJAB.push(reader.uint32());
                    else
                        message.unk3300CPDGJEIOJAB.push(reader.uint32());
                    break;
                case /* uint32 choose_skill_no */ 11:
                    message.chooseSkillNo = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_IFBDFEOGOLH = 15 [json_name = "Unk3300IFBDFEOGOLH"];*/ 15:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300IFBDFEOGOLH.push(reader.uint32());
                    else
                        message.unk3300IFBDFEOGOLH.push(reader.uint32());
                    break;
                case /* bool is_host */ 13:
                    message.isHost = reader.bool();
                    break;
                case /* uint32 player_uid */ 6:
                    message.playerUid = reader.uint32();
                    break;
                case /* repeated uint32 avatar_id_list */ 7:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarIdList.push(reader.uint32());
                    else
                        message.avatarIdList.push(reader.uint32());
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
    internalBinaryWrite(message: CoinCollectTeamInfoData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 Unk3300_CPDGJEIOJAB = 2 [json_name = "Unk3300CPDGJEIOJAB"]; */
        if (message.unk3300CPDGJEIOJAB.length) {
            writer.tag(2, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300CPDGJEIOJAB.length; i++)
                writer.uint32(message.unk3300CPDGJEIOJAB[i]);
            writer.join();
        }
        /* uint32 choose_skill_no = 11; */
        if (message.chooseSkillNo !== 0)
            writer.tag(11, WireType.Varint).uint32(message.chooseSkillNo);
        /* repeated uint32 Unk3300_IFBDFEOGOLH = 15 [json_name = "Unk3300IFBDFEOGOLH"]; */
        if (message.unk3300IFBDFEOGOLH.length) {
            writer.tag(15, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300IFBDFEOGOLH.length; i++)
                writer.uint32(message.unk3300IFBDFEOGOLH[i]);
            writer.join();
        }
        /* bool is_host = 13; */
        if (message.isHost !== false)
            writer.tag(13, WireType.Varint).bool(message.isHost);
        /* uint32 player_uid = 6; */
        if (message.playerUid !== 0)
            writer.tag(6, WireType.Varint).uint32(message.playerUid);
        /* repeated uint32 avatar_id_list = 7; */
        if (message.avatarIdList.length) {
            writer.tag(7, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarIdList.length; i++)
                writer.uint32(message.avatarIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoinCollectTeamInfoData
 */
export const CoinCollectTeamInfoData = new CoinCollectTeamInfoData$Type();
