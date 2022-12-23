// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SumoSelectTeamAndEnterDungeonRsp.proto" (syntax proto3)
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
import { SumoTeamData } from "./SumoTeamData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8744;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message SumoSelectTeamAndEnterDungeonRsp
 */
export interface SumoSelectTeamAndEnterDungeonRsp {
    /**
     * @generated from protobuf field: uint32 difficulty_id = 12;
     */
    difficultyId: number;
    /**
     * @generated from protobuf field: uint32 activity_id = 9;
     */
    activityId: number;
    /**
     * @generated from protobuf field: uint32 stage_id = 6;
     */
    stageId: number;
    /**
     * @generated from protobuf field: int32 retcode = 5;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated SumoTeamData team_list = 3;
     */
    teamList: SumoTeamData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class SumoSelectTeamAndEnterDungeonRsp$Type extends MessageType<SumoSelectTeamAndEnterDungeonRsp> {
    constructor() {
        super("SumoSelectTeamAndEnterDungeonRsp", [
            { no: 12, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "team_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SumoTeamData }
        ]);
    }
    create(value?: PartialMessage<SumoSelectTeamAndEnterDungeonRsp>): SumoSelectTeamAndEnterDungeonRsp {
        const message = { difficultyId: 0, activityId: 0, stageId: 0, retcode: 0, teamList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SumoSelectTeamAndEnterDungeonRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SumoSelectTeamAndEnterDungeonRsp): SumoSelectTeamAndEnterDungeonRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 difficulty_id */ 12:
                    message.difficultyId = reader.uint32();
                    break;
                case /* uint32 activity_id */ 9:
                    message.activityId = reader.uint32();
                    break;
                case /* uint32 stage_id */ 6:
                    message.stageId = reader.uint32();
                    break;
                case /* int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* repeated SumoTeamData team_list */ 3:
                    message.teamList.push(SumoTeamData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: SumoSelectTeamAndEnterDungeonRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 difficulty_id = 12; */
        if (message.difficultyId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.difficultyId);
        /* uint32 activity_id = 9; */
        if (message.activityId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.activityId);
        /* uint32 stage_id = 6; */
        if (message.stageId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.stageId);
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, WireType.Varint).int32(message.retcode);
        /* repeated SumoTeamData team_list = 3; */
        for (let i = 0; i < message.teamList.length; i++)
            SumoTeamData.internalBinaryWrite(message.teamList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoSelectTeamAndEnterDungeonRsp
 */
export const SumoSelectTeamAndEnterDungeonRsp = new SumoSelectTeamAndEnterDungeonRsp$Type();
