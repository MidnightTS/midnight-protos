"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSceneArrangementInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeFurnitureData_1 = require("./HomeFurnitureData");
const Vector_1 = require("./Vector");
const HomeBlockArrangementInfo_1 = require("./HomeBlockArrangementInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeSceneArrangementInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeSceneArrangementInfo", [
            { no: 6, name: "comfort_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "block_arrangement_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeBlockArrangementInfo_1.HomeBlockArrangementInfo },
            { no: 4, name: "is_set_born_pos", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "djinn_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 10, name: "born_rot", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "bgm_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "born_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 2, name: "Unk3300_GCHNAMHBPHG", kind: "message", jsonName: "Unk3300GCHNAMHBPHG", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureData_1.HomeFurnitureData },
            { no: 15, name: "main_house", kind: "message", T: () => HomeFurnitureData_1.HomeFurnitureData },
            { no: 8, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_HPCHPODNBPH", kind: "message", jsonName: "Unk3300HPCHPODNBPH", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureData_1.HomeFurnitureData },
            { no: 3, name: "tmp_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { comfortValue: 0, blockArrangementInfoList: [], isSetBornPos: false, bgmId: 0, unk3300GCHNAMHBPHG: [], sceneId: 0, unk3300HPCHPODNBPH: [], tmpVersion: 0 };
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
                case /* uint32 comfort_value */ 6:
                    message.comfortValue = reader.uint32();
                    break;
                case /* repeated HomeBlockArrangementInfo block_arrangement_info_list */ 1:
                    message.blockArrangementInfoList.push(HomeBlockArrangementInfo_1.HomeBlockArrangementInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_set_born_pos */ 4:
                    message.isSetBornPos = reader.bool();
                    break;
                case /* Vector djinn_pos */ 14:
                    message.djinnPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.djinnPos);
                    break;
                case /* Vector born_rot */ 10:
                    message.bornRot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.bornRot);
                    break;
                case /* uint32 bgm_id */ 5:
                    message.bgmId = reader.uint32();
                    break;
                case /* Vector born_pos */ 11:
                    message.bornPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.bornPos);
                    break;
                case /* repeated HomeFurnitureData Unk3300_GCHNAMHBPHG = 2 [json_name = "Unk3300GCHNAMHBPHG"];*/ 2:
                    message.unk3300GCHNAMHBPHG.push(HomeFurnitureData_1.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* HomeFurnitureData main_house */ 15:
                    message.mainHouse = HomeFurnitureData_1.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options, message.mainHouse);
                    break;
                case /* uint32 scene_id */ 8:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated HomeFurnitureData Unk3300_HPCHPODNBPH = 9 [json_name = "Unk3300HPCHPODNBPH"];*/ 9:
                    message.unk3300HPCHPODNBPH.push(HomeFurnitureData_1.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 tmp_version */ 3:
                    message.tmpVersion = reader.uint32();
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
        /* uint32 comfort_value = 6; */
        if (message.comfortValue !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.comfortValue);
        /* repeated HomeBlockArrangementInfo block_arrangement_info_list = 1; */
        for (let i = 0; i < message.blockArrangementInfoList.length; i++)
            HomeBlockArrangementInfo_1.HomeBlockArrangementInfo.internalBinaryWrite(message.blockArrangementInfoList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_set_born_pos = 4; */
        if (message.isSetBornPos !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isSetBornPos);
        /* Vector djinn_pos = 14; */
        if (message.djinnPos)
            Vector_1.Vector.internalBinaryWrite(message.djinnPos, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector born_rot = 10; */
        if (message.bornRot)
            Vector_1.Vector.internalBinaryWrite(message.bornRot, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 bgm_id = 5; */
        if (message.bgmId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.bgmId);
        /* Vector born_pos = 11; */
        if (message.bornPos)
            Vector_1.Vector.internalBinaryWrite(message.bornPos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated HomeFurnitureData Unk3300_GCHNAMHBPHG = 2 [json_name = "Unk3300GCHNAMHBPHG"]; */
        for (let i = 0; i < message.unk3300GCHNAMHBPHG.length; i++)
            HomeFurnitureData_1.HomeFurnitureData.internalBinaryWrite(message.unk3300GCHNAMHBPHG[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HomeFurnitureData main_house = 15; */
        if (message.mainHouse)
            HomeFurnitureData_1.HomeFurnitureData.internalBinaryWrite(message.mainHouse, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 8; */
        if (message.sceneId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* repeated HomeFurnitureData Unk3300_HPCHPODNBPH = 9 [json_name = "Unk3300HPCHPODNBPH"]; */
        for (let i = 0; i < message.unk3300HPCHPODNBPH.length; i++)
            HomeFurnitureData_1.HomeFurnitureData.internalBinaryWrite(message.unk3300HPCHPODNBPH[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 tmp_version = 3; */
        if (message.tmpVersion !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.tmpVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeSceneArrangementInfo
 */
exports.HomeSceneArrangementInfo = new HomeSceneArrangementInfo$Type();
