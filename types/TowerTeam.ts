// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "TowerTeam.proto" (syntax proto3)
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
 * @generated from protobuf message TowerTeam
 */
export interface TowerTeam {
    /**
     * @generated from protobuf field: repeated uint64 avatar_guid_list = 5;
     */
    avatarGuidList: bigint[];
    /**
     * @generated from protobuf field: uint32 tower_team_id = 14;
     */
    towerTeamId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class TowerTeam$Type extends MessageType<TowerTeam> {
    constructor() {
        super("TowerTeam", [
            { no: 5, name: "avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "tower_team_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<TowerTeam>): TowerTeam {
        const message = { avatarGuidList: [], towerTeamId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TowerTeam>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TowerTeam): TowerTeam {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 avatar_guid_list */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* uint32 tower_team_id */ 14:
                    message.towerTeamId = reader.uint32();
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
    internalBinaryWrite(message: TowerTeam, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint64 avatar_guid_list = 5; */
        if (message.avatarGuidList.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarGuidList.length; i++)
                writer.uint64(message.avatarGuidList[i]);
            writer.join();
        }
        /* uint32 tower_team_id = 14; */
        if (message.towerTeamId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.towerTeamId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerTeam
 */
export const TowerTeam = new TowerTeam$Type();
