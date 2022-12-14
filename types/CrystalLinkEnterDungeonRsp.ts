// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CrystalLinkEnterDungeonRsp.proto" (syntax proto3)
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
import { CrystalLinkTeamInfo } from "./CrystalLinkTeamInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8628;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message CrystalLinkEnterDungeonRsp
 */
export interface CrystalLinkEnterDungeonRsp {
    /**
     * @generated from protobuf field: int32 retcode = 5;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 difficulty_id = 15;
     */
    difficultyId: number;
    /**
     * @generated from protobuf field: uint32 level_id = 7;
     */
    levelId: number;
    /**
     * @generated from protobuf field: repeated CrystalLinkTeamInfo team_info_list = 12;
     */
    teamInfoList: CrystalLinkTeamInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class CrystalLinkEnterDungeonRsp$Type extends MessageType<CrystalLinkEnterDungeonRsp> {
    constructor() {
        super("CrystalLinkEnterDungeonRsp", [
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "team_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CrystalLinkTeamInfo }
        ]);
    }
    create(value?: PartialMessage<CrystalLinkEnterDungeonRsp>): CrystalLinkEnterDungeonRsp {
        const message = { retcode: 0, difficultyId: 0, levelId: 0, teamInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CrystalLinkEnterDungeonRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CrystalLinkEnterDungeonRsp): CrystalLinkEnterDungeonRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 difficulty_id */ 15:
                    message.difficultyId = reader.uint32();
                    break;
                case /* uint32 level_id */ 7:
                    message.levelId = reader.uint32();
                    break;
                case /* repeated CrystalLinkTeamInfo team_info_list */ 12:
                    message.teamInfoList.push(CrystalLinkTeamInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: CrystalLinkEnterDungeonRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, WireType.Varint).int32(message.retcode);
        /* uint32 difficulty_id = 15; */
        if (message.difficultyId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.difficultyId);
        /* uint32 level_id = 7; */
        if (message.levelId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.levelId);
        /* repeated CrystalLinkTeamInfo team_info_list = 12; */
        for (let i = 0; i < message.teamInfoList.length; i++)
            CrystalLinkTeamInfo.internalBinaryWrite(message.teamInfoList[i], writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CrystalLinkEnterDungeonRsp
 */
export const CrystalLinkEnterDungeonRsp = new CrystalLinkEnterDungeonRsp$Type();
