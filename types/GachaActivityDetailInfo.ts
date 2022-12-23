// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GachaActivityDetailInfo.proto" (syntax proto3)
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
import { GachaStageData } from "./GachaStageData";
/**
 * @generated from protobuf message GachaActivityDetailInfo
 */
export interface GachaActivityDetailInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_JJDHKJGDEKJ = 12 [json_name = "Unk3300JJDHKJGDEKJ"];
     */
    unk3300JJDHKJGDEKJ: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> robot_num_map = 10;
     */
    robotNumMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: map<uint32, uint32> have_reward_robot_num_map = 3;
     */
    haveRewardRobotNumMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: repeated uint32 have_get_robot_list = 14;
     */
    haveGetRobotList: number[];
    /**
     * @generated from protobuf field: repeated GachaStageData gacha_stage_data_list = 7;
     */
    gachaStageDataList: GachaStageData[];
    /**
     * @generated from protobuf field: uint32 Unk3300_IGGPBEOCNGI = 15 [json_name = "Unk3300IGGPBEOCNGI"];
     */
    unk3300IGGPBEOCNGI: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GachaActivityDetailInfo$Type extends MessageType<GachaActivityDetailInfo> {
    constructor() {
        super("GachaActivityDetailInfo", [
            { no: 12, name: "Unk3300_JJDHKJGDEKJ", kind: "scalar", jsonName: "Unk3300JJDHKJGDEKJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "robot_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 3, name: "have_reward_robot_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 14, name: "have_get_robot_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gacha_stage_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GachaStageData },
            { no: 15, name: "Unk3300_IGGPBEOCNGI", kind: "scalar", jsonName: "Unk3300IGGPBEOCNGI", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GachaActivityDetailInfo>): GachaActivityDetailInfo {
        const message = { unk3300JJDHKJGDEKJ: 0, robotNumMap: {}, haveRewardRobotNumMap: {}, haveGetRobotList: [], gachaStageDataList: [], unk3300IGGPBEOCNGI: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GachaActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GachaActivityDetailInfo): GachaActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_JJDHKJGDEKJ = 12 [json_name = "Unk3300JJDHKJGDEKJ"];*/ 12:
                    message.unk3300JJDHKJGDEKJ = reader.uint32();
                    break;
                case /* map<uint32, uint32> robot_num_map */ 10:
                    this.binaryReadMap10(message.robotNumMap, reader, options);
                    break;
                case /* map<uint32, uint32> have_reward_robot_num_map */ 3:
                    this.binaryReadMap3(message.haveRewardRobotNumMap, reader, options);
                    break;
                case /* repeated uint32 have_get_robot_list */ 14:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.haveGetRobotList.push(reader.uint32());
                    else
                        message.haveGetRobotList.push(reader.uint32());
                    break;
                case /* repeated GachaStageData gacha_stage_data_list */ 7:
                    message.gachaStageDataList.push(GachaStageData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_IGGPBEOCNGI = 15 [json_name = "Unk3300IGGPBEOCNGI"];*/ 15:
                    message.unk3300IGGPBEOCNGI = reader.uint32();
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
    private binaryReadMap10(map: GachaActivityDetailInfo["robotNumMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof GachaActivityDetailInfo["robotNumMap"] | undefined, val: GachaActivityDetailInfo["robotNumMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GachaActivityDetailInfo.robot_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    private binaryReadMap3(map: GachaActivityDetailInfo["haveRewardRobotNumMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof GachaActivityDetailInfo["haveRewardRobotNumMap"] | undefined, val: GachaActivityDetailInfo["haveRewardRobotNumMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GachaActivityDetailInfo.have_reward_robot_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: GachaActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_JJDHKJGDEKJ = 12 [json_name = "Unk3300JJDHKJGDEKJ"]; */
        if (message.unk3300JJDHKJGDEKJ !== 0)
            writer.tag(12, WireType.Varint).uint32(message.unk3300JJDHKJGDEKJ);
        /* map<uint32, uint32> robot_num_map = 10; */
        for (let k of Object.keys(message.robotNumMap))
            writer.tag(10, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.robotNumMap[k as any]).join();
        /* map<uint32, uint32> have_reward_robot_num_map = 3; */
        for (let k of Object.keys(message.haveRewardRobotNumMap))
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.haveRewardRobotNumMap[k as any]).join();
        /* repeated uint32 have_get_robot_list = 14; */
        if (message.haveGetRobotList.length) {
            writer.tag(14, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.haveGetRobotList.length; i++)
                writer.uint32(message.haveGetRobotList[i]);
            writer.join();
        }
        /* repeated GachaStageData gacha_stage_data_list = 7; */
        for (let i = 0; i < message.gachaStageDataList.length; i++)
            GachaStageData.internalBinaryWrite(message.gachaStageDataList[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_IGGPBEOCNGI = 15 [json_name = "Unk3300IGGPBEOCNGI"]; */
        if (message.unk3300IGGPBEOCNGI !== 0)
            writer.tag(15, WireType.Varint).uint32(message.unk3300IGGPBEOCNGI);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GachaActivityDetailInfo
 */
export const GachaActivityDetailInfo = new GachaActivityDetailInfo$Type();
