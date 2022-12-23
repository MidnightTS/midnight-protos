// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HomeBlockArrangementInfo.proto" (syntax proto3)
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
import { HomeFurnitureCustomSuiteData } from "./HomeFurnitureCustomSuiteData";
import { HomeBlockFieldData } from "./HomeBlockFieldData";
import { HomeFurnitureGroupData } from "./HomeFurnitureGroupData";
import { HomeNpcData } from "./HomeNpcData";
import { HomeBlockDotPattern } from "./HomeBlockDotPattern";
import { WeekendDjinnInfo } from "./WeekendDjinnInfo";
import { HomeFurnitureSuiteData } from "./HomeFurnitureSuiteData";
import { HomeAnimalData } from "./HomeAnimalData";
import { HomeFurnitureData } from "./HomeFurnitureData";
/**
 * @generated from protobuf message HomeBlockArrangementInfo
 */
export interface HomeBlockArrangementInfo {
    /**
     * @generated from protobuf field: repeated HomeFurnitureData deploy_furniure_list = 10;
     */
    deployFurniureList: HomeFurnitureData[];
    /**
     * @generated from protobuf field: repeated HomeAnimalData deploy_animal_list = 7;
     */
    deployAnimalList: HomeAnimalData[];
    /**
     * @generated from protobuf field: repeated HomeFurnitureSuiteData furniture_suite_list = 3;
     */
    furnitureSuiteList: HomeFurnitureSuiteData[];
    /**
     * @generated from protobuf field: repeated WeekendDjinnInfo weekend_djinn_info_list = 5;
     */
    weekendDjinnInfoList: WeekendDjinnInfo[];
    /**
     * @generated from protobuf field: uint32 block_id = 14;
     */
    blockId: number;
    /**
     * @generated from protobuf field: repeated HomeBlockDotPattern dot_pattern_list = 6;
     */
    dotPatternList: HomeBlockDotPattern[];
    /**
     * @generated from protobuf field: bool is_unlocked = 15;
     */
    isUnlocked: boolean;
    /**
     * @generated from protobuf field: repeated HomeNpcData deploy_npc_list = 1;
     */
    deployNpcList: HomeNpcData[];
    /**
     * @generated from protobuf field: repeated HomeFurnitureGroupData furniture_group_list = 8;
     */
    furnitureGroupList: HomeFurnitureGroupData[];
    /**
     * @generated from protobuf field: repeated HomeBlockFieldData field_list = 13;
     */
    fieldList: HomeBlockFieldData[];
    /**
     * @generated from protobuf field: uint32 comfort_value = 9;
     */
    comfortValue: number;
    /**
     * @generated from protobuf field: repeated HomeFurnitureData persistent_furniture_list = 12;
     */
    persistentFurnitureList: HomeFurnitureData[];
    /**
     * @generated from protobuf field: repeated HomeFurnitureCustomSuiteData furniture_custom_suite_list = 4;
     */
    furnitureCustomSuiteList: HomeFurnitureCustomSuiteData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockArrangementInfo$Type extends MessageType<HomeBlockArrangementInfo> {
    constructor() {
        super("HomeBlockArrangementInfo", [
            { no: 10, name: "deploy_furniure_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureData },
            { no: 7, name: "deploy_animal_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeAnimalData },
            { no: 3, name: "furniture_suite_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureSuiteData },
            { no: 5, name: "weekend_djinn_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WeekendDjinnInfo },
            { no: 14, name: "block_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dot_pattern_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeBlockDotPattern },
            { no: 15, name: "is_unlocked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "deploy_npc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeNpcData },
            { no: 8, name: "furniture_group_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureGroupData },
            { no: 13, name: "field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeBlockFieldData },
            { no: 9, name: "comfort_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "persistent_furniture_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureData },
            { no: 4, name: "furniture_custom_suite_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureCustomSuiteData }
        ]);
    }
    create(value?: PartialMessage<HomeBlockArrangementInfo>): HomeBlockArrangementInfo {
        const message = { deployFurniureList: [], deployAnimalList: [], furnitureSuiteList: [], weekendDjinnInfoList: [], blockId: 0, dotPatternList: [], isUnlocked: false, deployNpcList: [], furnitureGroupList: [], fieldList: [], comfortValue: 0, persistentFurnitureList: [], furnitureCustomSuiteList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeBlockArrangementInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeBlockArrangementInfo): HomeBlockArrangementInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated HomeFurnitureData deploy_furniure_list */ 10:
                    message.deployFurniureList.push(HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated HomeAnimalData deploy_animal_list */ 7:
                    message.deployAnimalList.push(HomeAnimalData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated HomeFurnitureSuiteData furniture_suite_list */ 3:
                    message.furnitureSuiteList.push(HomeFurnitureSuiteData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated WeekendDjinnInfo weekend_djinn_info_list */ 5:
                    message.weekendDjinnInfoList.push(WeekendDjinnInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 block_id */ 14:
                    message.blockId = reader.uint32();
                    break;
                case /* repeated HomeBlockDotPattern dot_pattern_list */ 6:
                    message.dotPatternList.push(HomeBlockDotPattern.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_unlocked */ 15:
                    message.isUnlocked = reader.bool();
                    break;
                case /* repeated HomeNpcData deploy_npc_list */ 1:
                    message.deployNpcList.push(HomeNpcData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated HomeFurnitureGroupData furniture_group_list */ 8:
                    message.furnitureGroupList.push(HomeFurnitureGroupData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated HomeBlockFieldData field_list */ 13:
                    message.fieldList.push(HomeBlockFieldData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 comfort_value */ 9:
                    message.comfortValue = reader.uint32();
                    break;
                case /* repeated HomeFurnitureData persistent_furniture_list */ 12:
                    message.persistentFurnitureList.push(HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated HomeFurnitureCustomSuiteData furniture_custom_suite_list */ 4:
                    message.furnitureCustomSuiteList.push(HomeFurnitureCustomSuiteData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: HomeBlockArrangementInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated HomeFurnitureData deploy_furniure_list = 10; */
        for (let i = 0; i < message.deployFurniureList.length; i++)
            HomeFurnitureData.internalBinaryWrite(message.deployFurniureList[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeAnimalData deploy_animal_list = 7; */
        for (let i = 0; i < message.deployAnimalList.length; i++)
            HomeAnimalData.internalBinaryWrite(message.deployAnimalList[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeFurnitureSuiteData furniture_suite_list = 3; */
        for (let i = 0; i < message.furnitureSuiteList.length; i++)
            HomeFurnitureSuiteData.internalBinaryWrite(message.furnitureSuiteList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated WeekendDjinnInfo weekend_djinn_info_list = 5; */
        for (let i = 0; i < message.weekendDjinnInfoList.length; i++)
            WeekendDjinnInfo.internalBinaryWrite(message.weekendDjinnInfoList[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* uint32 block_id = 14; */
        if (message.blockId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.blockId);
        /* repeated HomeBlockDotPattern dot_pattern_list = 6; */
        for (let i = 0; i < message.dotPatternList.length; i++)
            HomeBlockDotPattern.internalBinaryWrite(message.dotPatternList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* bool is_unlocked = 15; */
        if (message.isUnlocked !== false)
            writer.tag(15, WireType.Varint).bool(message.isUnlocked);
        /* repeated HomeNpcData deploy_npc_list = 1; */
        for (let i = 0; i < message.deployNpcList.length; i++)
            HomeNpcData.internalBinaryWrite(message.deployNpcList[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeFurnitureGroupData furniture_group_list = 8; */
        for (let i = 0; i < message.furnitureGroupList.length; i++)
            HomeFurnitureGroupData.internalBinaryWrite(message.furnitureGroupList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeBlockFieldData field_list = 13; */
        for (let i = 0; i < message.fieldList.length; i++)
            HomeBlockFieldData.internalBinaryWrite(message.fieldList[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* uint32 comfort_value = 9; */
        if (message.comfortValue !== 0)
            writer.tag(9, WireType.Varint).uint32(message.comfortValue);
        /* repeated HomeFurnitureData persistent_furniture_list = 12; */
        for (let i = 0; i < message.persistentFurnitureList.length; i++)
            HomeFurnitureData.internalBinaryWrite(message.persistentFurnitureList[i], writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeFurnitureCustomSuiteData furniture_custom_suite_list = 4; */
        for (let i = 0; i < message.furnitureCustomSuiteList.length; i++)
            HomeFurnitureCustomSuiteData.internalBinaryWrite(message.furnitureCustomSuiteList[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBlockArrangementInfo
 */
export const HomeBlockArrangementInfo = new HomeBlockArrangementInfo$Type();
