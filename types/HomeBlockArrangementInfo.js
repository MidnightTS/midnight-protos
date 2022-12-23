"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBlockArrangementInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeFurnitureCustomSuiteData_1 = require("./HomeFurnitureCustomSuiteData");
const HomeBlockFieldData_1 = require("./HomeBlockFieldData");
const HomeFurnitureGroupData_1 = require("./HomeFurnitureGroupData");
const HomeNpcData_1 = require("./HomeNpcData");
const HomeBlockDotPattern_1 = require("./HomeBlockDotPattern");
const WeekendDjinnInfo_1 = require("./WeekendDjinnInfo");
const HomeFurnitureSuiteData_1 = require("./HomeFurnitureSuiteData");
const HomeAnimalData_1 = require("./HomeAnimalData");
const HomeFurnitureData_1 = require("./HomeFurnitureData");
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockArrangementInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeBlockArrangementInfo", [
            { no: 10, name: "deploy_furniure_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureData_1.HomeFurnitureData },
            { no: 7, name: "deploy_animal_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeAnimalData_1.HomeAnimalData },
            { no: 3, name: "furniture_suite_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureSuiteData_1.HomeFurnitureSuiteData },
            { no: 5, name: "weekend_djinn_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WeekendDjinnInfo_1.WeekendDjinnInfo },
            { no: 14, name: "block_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dot_pattern_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeBlockDotPattern_1.HomeBlockDotPattern },
            { no: 15, name: "is_unlocked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "deploy_npc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeNpcData_1.HomeNpcData },
            { no: 8, name: "furniture_group_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureGroupData_1.HomeFurnitureGroupData },
            { no: 13, name: "field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeBlockFieldData_1.HomeBlockFieldData },
            { no: 9, name: "comfort_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "persistent_furniture_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureData_1.HomeFurnitureData },
            { no: 4, name: "furniture_custom_suite_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureCustomSuiteData_1.HomeFurnitureCustomSuiteData }
        ]);
    }
    create(value) {
        const message = { deployFurniureList: [], deployAnimalList: [], furnitureSuiteList: [], weekendDjinnInfoList: [], blockId: 0, dotPatternList: [], isUnlocked: false, deployNpcList: [], furnitureGroupList: [], fieldList: [], comfortValue: 0, persistentFurnitureList: [], furnitureCustomSuiteList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated HomeFurnitureData deploy_furniure_list */ 10:
                    message.deployFurniureList.push(HomeFurnitureData_1.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated HomeAnimalData deploy_animal_list */ 7:
                    message.deployAnimalList.push(HomeAnimalData_1.HomeAnimalData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated HomeFurnitureSuiteData furniture_suite_list */ 3:
                    message.furnitureSuiteList.push(HomeFurnitureSuiteData_1.HomeFurnitureSuiteData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated WeekendDjinnInfo weekend_djinn_info_list */ 5:
                    message.weekendDjinnInfoList.push(WeekendDjinnInfo_1.WeekendDjinnInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 block_id */ 14:
                    message.blockId = reader.uint32();
                    break;
                case /* repeated HomeBlockDotPattern dot_pattern_list */ 6:
                    message.dotPatternList.push(HomeBlockDotPattern_1.HomeBlockDotPattern.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_unlocked */ 15:
                    message.isUnlocked = reader.bool();
                    break;
                case /* repeated HomeNpcData deploy_npc_list */ 1:
                    message.deployNpcList.push(HomeNpcData_1.HomeNpcData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated HomeFurnitureGroupData furniture_group_list */ 8:
                    message.furnitureGroupList.push(HomeFurnitureGroupData_1.HomeFurnitureGroupData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated HomeBlockFieldData field_list */ 13:
                    message.fieldList.push(HomeBlockFieldData_1.HomeBlockFieldData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 comfort_value */ 9:
                    message.comfortValue = reader.uint32();
                    break;
                case /* repeated HomeFurnitureData persistent_furniture_list */ 12:
                    message.persistentFurnitureList.push(HomeFurnitureData_1.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated HomeFurnitureCustomSuiteData furniture_custom_suite_list */ 4:
                    message.furnitureCustomSuiteList.push(HomeFurnitureCustomSuiteData_1.HomeFurnitureCustomSuiteData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated HomeFurnitureData deploy_furniure_list = 10; */
        for (let i = 0; i < message.deployFurniureList.length; i++)
            HomeFurnitureData_1.HomeFurnitureData.internalBinaryWrite(message.deployFurniureList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeAnimalData deploy_animal_list = 7; */
        for (let i = 0; i < message.deployAnimalList.length; i++)
            HomeAnimalData_1.HomeAnimalData.internalBinaryWrite(message.deployAnimalList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeFurnitureSuiteData furniture_suite_list = 3; */
        for (let i = 0; i < message.furnitureSuiteList.length; i++)
            HomeFurnitureSuiteData_1.HomeFurnitureSuiteData.internalBinaryWrite(message.furnitureSuiteList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated WeekendDjinnInfo weekend_djinn_info_list = 5; */
        for (let i = 0; i < message.weekendDjinnInfoList.length; i++)
            WeekendDjinnInfo_1.WeekendDjinnInfo.internalBinaryWrite(message.weekendDjinnInfoList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 block_id = 14; */
        if (message.blockId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.blockId);
        /* repeated HomeBlockDotPattern dot_pattern_list = 6; */
        for (let i = 0; i < message.dotPatternList.length; i++)
            HomeBlockDotPattern_1.HomeBlockDotPattern.internalBinaryWrite(message.dotPatternList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_unlocked = 15; */
        if (message.isUnlocked !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isUnlocked);
        /* repeated HomeNpcData deploy_npc_list = 1; */
        for (let i = 0; i < message.deployNpcList.length; i++)
            HomeNpcData_1.HomeNpcData.internalBinaryWrite(message.deployNpcList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeFurnitureGroupData furniture_group_list = 8; */
        for (let i = 0; i < message.furnitureGroupList.length; i++)
            HomeFurnitureGroupData_1.HomeFurnitureGroupData.internalBinaryWrite(message.furnitureGroupList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeBlockFieldData field_list = 13; */
        for (let i = 0; i < message.fieldList.length; i++)
            HomeBlockFieldData_1.HomeBlockFieldData.internalBinaryWrite(message.fieldList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 comfort_value = 9; */
        if (message.comfortValue !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.comfortValue);
        /* repeated HomeFurnitureData persistent_furniture_list = 12; */
        for (let i = 0; i < message.persistentFurnitureList.length; i++)
            HomeFurnitureData_1.HomeFurnitureData.internalBinaryWrite(message.persistentFurnitureList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeFurnitureCustomSuiteData furniture_custom_suite_list = 4; */
        for (let i = 0; i < message.furnitureCustomSuiteList.length; i++)
            HomeFurnitureCustomSuiteData_1.HomeFurnitureCustomSuiteData.internalBinaryWrite(message.furnitureCustomSuiteList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBlockArrangementInfo
 */
exports.HomeBlockArrangementInfo = new HomeBlockArrangementInfo$Type();
