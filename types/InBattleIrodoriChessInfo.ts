// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "InBattleIrodoriChessInfo.proto" (syntax proto3)
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
import { IrodoriChessMysteryInfo } from "./IrodoriChessMysteryInfo";
/**
 * @generated from protobuf message InBattleIrodoriChessInfo
 */
export interface InBattleIrodoriChessInfo {
    /**
     * @generated from protobuf field: uint32 settle_score = 1;
     */
    settleScore: number;
    /**
     * @generated from protobuf field: IrodoriChessMysteryInfo mystery_info = 2;
     */
    mysteryInfo?: IrodoriChessMysteryInfo;
    /**
     * @generated from protobuf field: uint32 left_monsters = 15;
     */
    leftMonsters: number;
    /**
     * @generated from protobuf field: repeated uint32 selected_card_id_list = 10;
     */
    selectedCardIdList: number[];
    /**
     * @generated from protobuf field: uint32 building_points = 8;
     */
    buildingPoints: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class InBattleIrodoriChessInfo$Type extends MessageType<InBattleIrodoriChessInfo> {
    constructor() {
        super("InBattleIrodoriChessInfo", [
            { no: 1, name: "settle_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "mystery_info", kind: "message", T: () => IrodoriChessMysteryInfo },
            { no: 15, name: "left_monsters", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "selected_card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "building_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<InBattleIrodoriChessInfo>): InBattleIrodoriChessInfo {
        const message = { settleScore: 0, leftMonsters: 0, selectedCardIdList: [], buildingPoints: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InBattleIrodoriChessInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InBattleIrodoriChessInfo): InBattleIrodoriChessInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 settle_score */ 1:
                    message.settleScore = reader.uint32();
                    break;
                case /* IrodoriChessMysteryInfo mystery_info */ 2:
                    message.mysteryInfo = IrodoriChessMysteryInfo.internalBinaryRead(reader, reader.uint32(), options, message.mysteryInfo);
                    break;
                case /* uint32 left_monsters */ 15:
                    message.leftMonsters = reader.uint32();
                    break;
                case /* repeated uint32 selected_card_id_list */ 10:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.selectedCardIdList.push(reader.uint32());
                    else
                        message.selectedCardIdList.push(reader.uint32());
                    break;
                case /* uint32 building_points */ 8:
                    message.buildingPoints = reader.uint32();
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
    internalBinaryWrite(message: InBattleIrodoriChessInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 settle_score = 1; */
        if (message.settleScore !== 0)
            writer.tag(1, WireType.Varint).uint32(message.settleScore);
        /* IrodoriChessMysteryInfo mystery_info = 2; */
        if (message.mysteryInfo)
            IrodoriChessMysteryInfo.internalBinaryWrite(message.mysteryInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint32 left_monsters = 15; */
        if (message.leftMonsters !== 0)
            writer.tag(15, WireType.Varint).uint32(message.leftMonsters);
        /* repeated uint32 selected_card_id_list = 10; */
        if (message.selectedCardIdList.length) {
            writer.tag(10, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.selectedCardIdList.length; i++)
                writer.uint32(message.selectedCardIdList[i]);
            writer.join();
        }
        /* uint32 building_points = 8; */
        if (message.buildingPoints !== 0)
            writer.tag(8, WireType.Varint).uint32(message.buildingPoints);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleIrodoriChessInfo
 */
export const InBattleIrodoriChessInfo = new InBattleIrodoriChessInfo$Type();
