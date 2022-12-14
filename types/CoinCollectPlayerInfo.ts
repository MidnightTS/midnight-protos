// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CoinCollectPlayerInfo.proto" (syntax proto3)
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
import { CoinCollectTeamAvatarInfo } from "./CoinCollectTeamAvatarInfo";
/**
 * @generated from protobuf message CoinCollectPlayerInfo
 */
export interface CoinCollectPlayerInfo {
    /**
     * @generated from protobuf field: uint32 player_uid = 15;
     */
    playerUid: number;
    /**
     * @generated from protobuf field: bool is_prepare = 7;
     */
    isPrepare: boolean;
    /**
     * @generated from protobuf field: uint32 choose_skill_no = 10;
     */
    chooseSkillNo: number;
    /**
     * @generated from protobuf field: repeated CoinCollectTeamAvatarInfo avatar_info_list = 2;
     */
    avatarInfoList: CoinCollectTeamAvatarInfo[];
    /**
     * @generated from protobuf field: string player_name = 6;
     */
    playerName: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CoinCollectPlayerInfo$Type extends MessageType<CoinCollectPlayerInfo> {
    constructor() {
        super("CoinCollectPlayerInfo", [
            { no: 15, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_prepare", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "choose_skill_no", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CoinCollectTeamAvatarInfo },
            { no: 6, name: "player_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CoinCollectPlayerInfo>): CoinCollectPlayerInfo {
        const message = { playerUid: 0, isPrepare: false, chooseSkillNo: 0, avatarInfoList: [], playerName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CoinCollectPlayerInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CoinCollectPlayerInfo): CoinCollectPlayerInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 player_uid */ 15:
                    message.playerUid = reader.uint32();
                    break;
                case /* bool is_prepare */ 7:
                    message.isPrepare = reader.bool();
                    break;
                case /* uint32 choose_skill_no */ 10:
                    message.chooseSkillNo = reader.uint32();
                    break;
                case /* repeated CoinCollectTeamAvatarInfo avatar_info_list */ 2:
                    message.avatarInfoList.push(CoinCollectTeamAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string player_name */ 6:
                    message.playerName = reader.string();
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
    internalBinaryWrite(message: CoinCollectPlayerInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 player_uid = 15; */
        if (message.playerUid !== 0)
            writer.tag(15, WireType.Varint).uint32(message.playerUid);
        /* bool is_prepare = 7; */
        if (message.isPrepare !== false)
            writer.tag(7, WireType.Varint).bool(message.isPrepare);
        /* uint32 choose_skill_no = 10; */
        if (message.chooseSkillNo !== 0)
            writer.tag(10, WireType.Varint).uint32(message.chooseSkillNo);
        /* repeated CoinCollectTeamAvatarInfo avatar_info_list = 2; */
        for (let i = 0; i < message.avatarInfoList.length; i++)
            CoinCollectTeamAvatarInfo.internalBinaryWrite(message.avatarInfoList[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string player_name = 6; */
        if (message.playerName !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.playerName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoinCollectPlayerInfo
 */
export const CoinCollectPlayerInfo = new CoinCollectPlayerInfo$Type();
